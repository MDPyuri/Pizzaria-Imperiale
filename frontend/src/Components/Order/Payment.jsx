import React, { useState } from 'react';
import './OrderFinish.css';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import NotaFiscalModal from './NotaFiscalModal';
import QrCodePix from './img/QrCodePix.png';

const Payment = () => {
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
        <section className="SectionOrderFinish">
            <div className="OrderFinish-content">
                <div className="title-orderfinish">
                    <div className="line-orderfinish"></div>
                    <p>Pagamento</p>
                    <div className="line-orderfinish"></div>
                </div>

                <div className="payment-options">
                    <button
                        className={
                            paymentMethod === 'credito'
                                ? 'payment-btn active-btn'
                                : 'payment-btn'
                        }
                        onClick={() => setPaymentMethod('credito')}
                    >
                        Cartão de crédito
                    </button>
                    <button
                        className={
                            paymentMethod === 'pix'
                                ? 'payment-btn active-btn'
                                : 'payment-btn'
                        }
                        onClick={() => setPaymentMethod('pix')}
                    >
                        Usar chave Pix
                    </button>
                    <button
                        className={
                            paymentMethod === 'entrega'
                                ? 'payment-btn active-btn'
                                : 'payment-btn'
                        }
                        onClick={() => setPaymentMethod('entrega')}
                    >
                        Na entrega
                    </button>
                </div>

                {paymentMethod === 'credito' && (
                    <div className="creditCard">
                        <form>
                            <input
                                type="text"
                                placeholder="Nome do cartão:"
                                required
                            />
                            <input
                                type="number"
                                placeholder="Número do cartão:"
                                required
                            />
                            <input
                                type="text"
                                id="expiry"
                                placeholder="Validade"
                                pattern="(0[1-9]|1[0-2])\/\d{2}"
                                required
                                onChange={handleExpiryChange}
                            />
                            <input type="number" placeholder="CVV" />
                        </form>
                    </div>
                )}

                {paymentMethod === 'pix' && (
                    <div className="Pix">
                        <p>Chave CNPJ: 12.345.678/0001-95</p>
                        <img src={QrCodePix} />
                    </div>
                )}

                {paymentMethod === 'entrega' && (
                    <div className="Entrega">
                        <p>O pagamento será feito na entrega do pedido</p>
                        <select>
                            <option value="" disabled selected>
                                Selecione uma opção de pagamento
                            </option>
                            <option value="dinheiro">Dinheiro</option>
                            <option value="cartao">Cartão de débito</option>
                            <option value="pix">Cartão de crédito</option>
                        </select>
                    </div>
                )}

                <div className="finish-order-btns">
                    <button onClick={cancelOrder} className="finish-order-btn">
                        Cancelar Pedido
                    </button>
                    <button
                        onClick={handleConfirmPayment}
                        className="finish-order-btn"
                    >
                        Finalizar pedido
                    </button>
                </div>
            </div>

            <div className="processFinally">
                <div className="step-group">
                    <div className="steps-order">
                        <p className="number-steps">1</p>
                        <p className="name-steps">Pedido</p>
                    </div>
                    <div className="vertical-line"></div>
                </div>
                <div className="step-group">
                    <div className="steps-order">
                        <p className="number-steps">2</p>
                        <p className="name-steps">Endereço</p>
                    </div>
                    <div className="vertical-line"></div>
                </div>
                <div className="step-group">
                    <div className="steps-order">
                        <p className="number-steps">3</p>
                        <p className="name-steps">
                            <strong>Pagamento</strong>
                        </p>
                    </div>
                </div>
            </div>

            {/* Modal de Nota Fiscal */}
            <NotaFiscalModal
                isOpen={showNotaFiscalModal}
                onClose={handleCloseNotaFiscalModal}
                pedidoId={pedidoFinalizado?.id}
                valorTotal={pedidoFinalizado?.valor}
            />
        </section>
    );
};

export default Payment;
