import React, { useState, useEffect } from 'react';
import './Order.css';
import { MdCheckBoxOutlineBlank } from 'react-icons/md';
import { IoMdCheckboxOutline } from 'react-icons/io';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]); // [{id, quantidade}]
    const [productsData, setProductsData] = useState([]); // [{idProduto, nome, preco...}]
    const [totalValue, setTotalValue] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // 1. Recupera itens do carrinho do localStorage
        const savedCart = JSON.parse(localStorage.getItem('carrinho')) || [];
        setCartItems(savedCart);

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
                const product = productsData.find(
                    (p) => p.idProduto === cartItem.id
                );
                if (!product) return sum;

                // Converte preco (string) para número
                const preco = parseFloat(product.preco);
                return sum + preco * cartItem.quantidade;
            }, 0);

            setTotalValue(total);
        } else {
            setTotalValue(0);
        }
    }, [productsData, cartItems]);

    const handleRemoveItem = (id) => {
        const updatedCart = cartItems.filter((item) => item.id !== id);
        setCartItems(updatedCart);
        localStorage.setItem('carrinho', JSON.stringify(updatedCart));
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

                {cartItems.map((cartItem) => {
                    const product = productsData.find(
                        (p) => p.idProduto === cartItem.id
                    );
                    if (!product) return null;

                    const preco = parseFloat(product.preco);
                    const subtotal = preco * cartItem.quantidade;

                    return (
                        <div className="cart-card" key={cartItem.id}>
                            <button>{/* <MdCheckBoxOutlineBlank /> */}</button>

                            <button
                                className="remove-btn"
                                onClick={() => handleRemoveItem(cartItem.id)}
                            >
                                <ion-icon name="trash-outline"></ion-icon>
                            </button>

                            <img
                                src={product.imagem || 'placeholder-image.jpg'}
                                alt={product.nome}
                                // onError={(e) => {
                                //     e.target.src = 'placeholder-image.jpg';
                                // }}
                            />

                            <div className="product-info">
                                <p className="product-name">{product.nome}</p>
                                <p className="product-category">
                                    {product.categoria}
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
                                            handleUpdateQuantity(cartItem.id, 1)
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

                <div className="buttons-card">
                    <p>Valor Total: R$ {totalValue.toFixed(2)}</p>
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

// import React, { useState } from 'react';
// import "./Order.css";

// const Cart = () => {
//     return (
//         <section className="CartSection">
//             <div className="title-order">
//                 <div className="line-order"></div>
//                 <p>Pedido</p>
//                 <div className="line-order"></div>
//             </div>

//             <div className="cart-card">
//                 <ion-icon name="trash-bin-outline"></ion-icon>
//                 <ion-icon name="trash-bin-outline"></ion-icon>
//                 <img src="" alt="" />
//                 <p></p>
//                 <ion-icon name="trash-bin-outline"></ion-icon>
//             </div>

//             <div className="buttons-card">
//                 <p>Valor Total:</p>
//                 <button>Confirmar pedido</button>
//             </div>
//         </section>
//     );
// }

// export default Cart;






// localStorage.setItem(
//     'carrinho',
//     JSON.stringify([
//         { id: 1, quantidade: 2 },
//         { id: 2, quantidade: 1 },
//         { id: 3, quantidade: 1 },
//         { id: 4, quantidade: 3 },
//     ])
// );