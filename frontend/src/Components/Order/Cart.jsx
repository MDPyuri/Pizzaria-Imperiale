import React, { useState, useEffect } from 'react';
import './Cart.css';
import { MdCheckBoxOutlineBlank } from 'react-icons/md';
import { IoMdCheckboxOutline } from 'react-icons/io';
import logo from '../Header/img/logo.png'; 

const Cart = () => {
    const [cartItems, setCartItems] = useState([]); // [{id, quantidade}]
    const [productsData, setProductsData] = useState([]); // [{idProduto, nome, preco...}]
    const [totalValue, setTotalValue] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedItems, setSelectedItems] = useState([]);

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
        alert(`Pedido confirmado! Total: R$ ${totalValue.toFixed(2)}`);
        localStorage.removeItem('carrinho');
        setCartItems([]);
        setProductsData([]);
        setSelectedItems([]);
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
                    <p className="empty-cart">Seu carrinho está vazio</p>
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

                                <img
                                    src={logo}
                                    // src={product.imagem || 'placeholder-image.jpg'}
                                    // alt={product.nome}
                                    // onError={(e) => {
                                    //     e.target.src = 'placeholder-image.jpg';
                                    // }}
                                />

                                <div className="product-info">
                                    <p className="product-name">
                                        {product.nome}
                                    </p>
                                    <p className="product-description">
                                        {product.descricao}
                                    </p>
                                    <p className="product-price">
                                        R$ {preco.toFixed(2)}
                                    </p>

                                    <div className="quantity-control">
                                        <button
                                            onClick={() =>
                                                handleUpdateQuantity(
                                                    cartItem.id,
                                                    -1
                                                )
                                            }
                                            disabled={cartItem.quantidade <= 1}
                                        >
                                            -
                                        </button>
                                        <span>{cartItem.quantidade}</span>
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

                                    <p className="item-total">
                                        R$ {subtotal.toFixed(2)}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="buttons-cart">
                    <p><strong>Valor Total: </strong>R$ {totalValue.toFixed(2)}</p>
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
//     ])
// );