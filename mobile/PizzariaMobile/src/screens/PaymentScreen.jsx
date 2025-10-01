import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import NavBar from '../components/NavBar';
import { useFonts } from 'expo-font';

import { HeaderPayment } from '../components/Header';

import { processFinally } from './AddressScreen';

export default function AddressScreen({ navigation }) {
    const [fontsLoaded] = useFonts({
        GreatVibes: require('../../assets/fonts/GreatVibes-Regular.ttf'),
        'GlacialIndifference-Regular': require('../../assets/fonts/GlacialIndifference-Regular.otf'),
        'GlacialIndifference-Bold': require('../../assets/fonts/GlacialIndifference-Bold.otf'),
    });
    if (!fontsLoaded) {
        return null;
    }

    const navigate = useNavigate();
    const { user, isAuthenticated } = useAuth();
    const [paymentMethod, setPaymentMethod] = useState('credito');
    const [showNotaFiscalModal, setShowNotaFiscalModal] = useState(false);
    const [pedidoFinalizado, setPedidoFinalizado] = useState(null);

    const cancelOrder = () => {
        localStorage.removeItem('endereco'); // Remove os dados de endereço ao cancelar
        navigate('/carrinho');
    };

    const handleExpiryChange = (e) => {
        let value = e.target.value.replace(/\D/g, '');

        if (value.length >= 2) {
            value = value.slice(0, 2) + '/' + value.slice(2, 4);
        }

        e.target.value = value;
    };

    const handleConfirmPayment = async () => {
        try {
            // Verificar se o usuário está autenticado
            if (!isAuthenticated() || !user) {
                alert(
                    'Você precisa estar logado para fazer um pedido. Redirecionando para o login...'
                );
                navigate('/login');
                return;
            }

            // 1. Recupera dados necessários
            const cartItems =
                JSON.parse(localStorage.getItem('carrinho')) || [];
            const enderecoData = JSON.parse(localStorage.getItem('endereco'));

            if (!enderecoData) {
                alert(
                    'Erro: Dados de endereço não encontrados. Redirecionando para a página de endereço...'
                );
                navigate('/endereco');
                return;
            }

            if (cartItems.length === 0) {
                alert('Erro: Carrinho vazio.');
                navigate('/carrinho');
                return;
            }

            // 2. Calcula o valor total do pedido
            const productIds = cartItems.map((item) => item.id);
            const productsResponse = await fetch(
                'http://localhost:3000/produtos/produtos-por-ids',
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ ids: productIds }),
                }
            );
            const products = await productsResponse.json();

            const totalValue = cartItems.reduce((sum, cartItem) => {
                const product = products.find(
                    (p) => p.idProduto === cartItem.id
                );
                if (product) {
                    return (
                        sum + parseFloat(product.preco) * cartItem.quantidade
                    );
                }
                return sum;
            }, 0);

            // 3. Cria o endereço no banco
            const enderecoResponse = await fetch(
                'http://localhost:3000/enderecos/criar',
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(enderecoData),
                }
            );

            if (!enderecoResponse.ok) {
                const enderecoError = await enderecoResponse.json();
                throw new Error(
                    enderecoError.error || 'Erro ao criar endereço'
                );
            }

            const endereco = await enderecoResponse.json();

            // 4. Cria o pagamento no banco
            const pagamentoResponse = await fetch(
                'http://localhost:3000/pagamentos/criar',
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    credentials: 'include',
                    body: JSON.stringify({
                        tipo:
                            paymentMethod === 'credito'
                                ? 'cartao_credito'
                                : paymentMethod === 'pix'
                                ? 'pix'
                                : 'pagamento_entrega',
                        pago: 'PENDENTE',
                        valor: totalValue,
                        data: new Date().toISOString(),
                        Usuario_idUsuario: user.idUsuario,
                    }),
                }
            );

            if (!pagamentoResponse.ok) {
                const pagamentoError = await pagamentoResponse.json();
                throw new Error(
                    pagamentoError.error || 'Erro ao criar pagamento'
                );
            }

            const pagamento = await pagamentoResponse.json();

            // 5. Cria o pedido no banco
            const pedidoResponse = await fetch(
                'http://localhost:3000/pedidos/criar',
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    credentials: 'include',
                    body: JSON.stringify({
                        data: new Date().toISOString(),
                        valor: totalValue,
                        Usuario_idUsuario: user.idUsuario,
                        Endereco_idEndereco: endereco.idEndereco,
                        Pagamento_idpagamento: pagamento.idPagamento,
                    }),
                }
            );

            if (!pedidoResponse.ok) {
                const pedidoError = await pedidoResponse.json();
                throw new Error(pedidoError.error || 'Erro ao criar pedido');
            }

            const pedido = await pedidoResponse.json();

            // 6. Cria os itens do produto (produtos e quantidades do carrinho)
            const itensParaCriar = cartItems.map((cartItem) => {
                const product = products.find(
                    (p) => p.idProduto === cartItem.id
                );
                return {
                    Produto_idProduto: cartItem.id,
                    Pedido_idPedido: pedido.idPedido,
                    quantidade: cartItem.quantidade,
                    preco: parseFloat(product.preco),
                    observacao: cartItem.observacao || null,
                };
            });

            const itensResponse = await fetch(
                'http://localhost:3000/produtos/itens-produto/criar',
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ itens: itensParaCriar }),
                }
            );

            if (!itensResponse.ok) {
                console.warn(
                    'Aviso: Pedido criado, mas houve erro ao salvar os itens do produto'
                );
            }

            // 7. Sucesso - mostra modal de nota fiscal
            setPedidoFinalizado({
                id: pedido.idPedido,
                valor: totalValue.toFixed(2),
            });
            setShowNotaFiscalModal(true);

            localStorage.removeItem('carrinho');
            localStorage.removeItem('endereco');
        } catch (error) {
            console.error('Erro ao finalizar pedido:', error);
            alert(
                `❌ Erro ao finalizar pedido: ${error.message}\nTente novamente.`
            );
        }
    };

    const handleCloseNotaFiscalModal = () => {
        setShowNotaFiscalModal(false);
        setTimeout(() => {
            navigate('/');
        }, 500);
    };
    
    
    
    return (
        <View style={styles.containerPayment}>
            {/* Header */}
            <HeaderPayment />

            {/* Processo do pedido */}
            <processFinally/>

            <NavBar navigation={navigation} />
        </View>
    );
}

const styles = StyleSheet.create({

});
