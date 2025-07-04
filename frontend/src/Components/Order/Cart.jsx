import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Cart.css';
import { MdCheckBoxOutlineBlank } from 'react-icons/md';
import { IoMdCheckboxOutline } from 'react-icons/io';
// import logo from '../Header/img/logo.png';
const images = import.meta.glob('../../assets/img/*.png', { eager: true });

const Cart = () => {
    const navigate = useNavigate();

    const [cartItems, setCartItems] = useState([]); // [{id, quantidade}]
    const [productsData, setProductsData] = useState([]); // [{idProduto, nome, preco...}]
    const [totalValue, setTotalValue] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedItems, setSelectedItems] = useState([]);

    const getProductImage = (product) => {
        const match = Object.entries(images).find(([path]) =>
            path.endsWith(`/${product.idProduto}.png`)
        );
        return match ? match[1].default : '/src/assets/img/PizzasSalgadas.png'; // fallback
    };

    useEffect(() => {
        // 1. Recupera itens do carrinho do localStorage
        const savedCart = JSON.parse(localStorage.getItem('carrinho')) || [];
        setCartItems(savedCart);

        const allIds = savedCart.map((item) => item.id);
        setSelectedItems(allIds);

        if (savedCart.length > 0) {
            // 2. Extrai IDs dos produtos para buscar na API
            const productIds = savedCart.map((item) => item.id);

            fetch('http://localhost:3000/produtos/produtos-por-ids', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ids: productIds }),
            })
                .then((response) => response.json())
                .then((products) => {
                    setProductsData(products);
                    setIsLoading(false);
                })
                .catch((error) => {
                    console.error('Erro ao buscar produtos:', error);
                    setIsLoading(false);
                });
        } else {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        // 3. Calcula o total quando os dados mudam
        if (productsData.length > 0 && cartItems.length > 0) {
            const total = cartItems.reduce((sum, cartItem) => {
                // Se não está selecionado, ignora no cálculo
                if (!selectedItems.includes(cartItem.id)) return sum;

                const product = productsData.find(
                    (p) => p.idProduto === cartItem.id
                );
                if (!product) return sum;

                const preco = parseFloat(product.preco);
                return sum + preco * cartItem.quantidade;
            }, 0);

            setTotalValue(total);
        } else {
            setTotalValue(0);
        }
    }, [productsData, cartItems, selectedItems]);

    const handleRemoveItem = (id) => {
        const updatedCart = cartItems.filter((item) => item.id !== id);
        setCartItems(updatedCart);
        localStorage.setItem('carrinho', JSON.stringify(updatedCart));

        setSelectedItems((prev) => prev.filter((itemId) => itemId !== id));
    };

    const handleUpdateQuantity = (id, change) => {
        const updatedCart = cartItems.map((item) => {
            if (item.id === id) {
                const newQuantity = item.quantidade + change;
                return { ...item, quantidade: Math.max(1, newQuantity) };
            }
            return item;
        });

        setCartItems(updatedCart);
        localStorage.setItem('carrinho', JSON.stringify(updatedCart));
    };

    const handleConfirmOrder = () => {
        // Verifica se há itens selecionados para prosseguir
        if (selectedItems.length === 0) {
            alert('Selecione pelo menos um item para continuar com o pedido.');
            return;
        }

        // Limpa dados de endereço anteriores para garantir que o usuário preencherá novamente
        localStorage.removeItem('endereco');
        alert(`Pedido confirmado! Total: R$ ${totalValue.toFixed(2)}`);
        navigate('/endereco');
    };

    const handleGoToMenu = () => {
        navigate('/menu');
    };

    const handleToggleSelect = (id) => {
        setSelectedItems(
            (prevSelected) =>
                prevSelected.includes(id)
                    ? prevSelected.filter((itemId) => itemId !== id) // se já está, desmarca
                    : [...prevSelected, id] // se não está, adiciona na seleção
        );
    };

    if (isLoading) return <div className="CartSection">Carregando...</div>;
    if (cartItems.length === 0)
        return (
            <section className="CartSection">
                <div className="CartContent">
                    <div className="title-order">
                        <div className="line-order"></div>
                        <p>Pedido</p>
                        <div className="line-order"></div>
                    </div>
                    <p className="empty-cart">
                        Você ainda não adicionou nenhum item ao pedido
                    </p>
                    <button onClick={handleGoToMenu} className="go-to-menu-btn">
                        Ir para o cardápio
                    </button>
                </div>
            </section>
        );

    return (
        <section className="CartSection">
            <div className="CartContent">
                <div className="title-order">
                    <div className="line-order"></div>
                    <p>Pedido</p>
                    <div className="line-order"></div>
                </div>

                <div className="cart-all-items">
                    {cartItems.map((cartItem) => {
                        const product = productsData.find(
                            (p) => p.idProduto === cartItem.id
                        );
                        if (!product) return null;

                        const preco = parseFloat(product.preco);
                        const subtotal = preco * cartItem.quantidade;

                        const isSelected = selectedItems.includes(cartItem.id);

                        return (
                            <div className="cart-card" key={cartItem.id}>
                                <button
                                    className="select-btn-cart"
                                    onClick={() =>
                                        handleToggleSelect(cartItem.id)
                                    }
                                >
                                    {isSelected ? (
                                        <IoMdCheckboxOutline size={28} />
                                    ) : (
                                        <MdCheckBoxOutlineBlank size={28} />
                                    )}
                                </button>

                                <button
                                    className="remove-btn-cart"
                                    onClick={() =>
                                        handleRemoveItem(cartItem.id)
                                    }
                                >
                                    <ion-icon name="trash-outline"></ion-icon>
                                </button>

                                <div className="product-imgCart">
                                    <img
                                        src={getProductImage(product)}
                                        alt={product.nome}
                                    />
                                </div>

                                <div className="product-info">
                                    <p className="product-name">
                                        {product.nome}
                                    </p>
                                    <p className="product-description">
                                        {product.descricao}
                                    </p>
                                    <p className="product-priceFixed">
                                        R$ {preco.toFixed(2)} (Unidade)
                                    </p>

                                    <div className="product-price">
                                        <p className="item-total">
                                            R$ {subtotal.toFixed(2)}
                                        </p>
                                        <div className="counterCart">
                                            <div className="counter-boxCart">
                                                <button
                                                    onClick={() =>
                                                        handleUpdateQuantity(
                                                            cartItem.id,
                                                            -1
                                                        )
                                                    }
                                                    disabled={
                                                        cartItem.quantidade <= 1
                                                    }
                                                >
                                                    -
                                                </button>
                                                <span>
                                                    {cartItem.quantidade}
                                                </span>
                                                <button
                                                    onClick={() =>
                                                        handleUpdateQuantity(
                                                            cartItem.id,
                                                            1
                                                        )
                                                    }
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="buttons-cart">
                    <p>
                        <strong>Valor Total: </strong>R$ {totalValue.toFixed(2)}
                    </p>
                    <button
                        className="confirm-btn"
                        onClick={handleConfirmOrder}
                        disabled={cartItems.length === 0}
                    >
                        Confirmar pedido
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Cart;

// localStorage.setItem(
//     'carrinho',
//     JSON.stringify([
//         { id: 1, quantidade: 2 },
//         { id: 2, quantidade: 1 },
//         { id: 3, quantidade: 1 },
//         { id: 4, quantidade: 3 },
//         { id: 5, quantidade: 1 },
//         { id: 6, quantidade: 1 },
//         { id: 7, quantidade: 3 },
//     ])
// );
