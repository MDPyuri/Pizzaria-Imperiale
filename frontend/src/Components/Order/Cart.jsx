import React, { useState } from 'react';
import "./Order.css";

const Cart = () => {
    return (
        <section className="CartSection">
            <div className="title-order">
                <div className="line-order"></div>
                <p>Pedido</p>
                <div className="line-order"></div>
            </div>

            <div className="cart-card">
                <ion-icon name="trash-bin-outline"></ion-icon>
                <ion-icon name="trash-bin-outline"></ion-icon>
                <img src="" alt="" />
                <p></p>
                <ion-icon name="trash-bin-outline"></ion-icon>
            </div>

            <div className="buttons-card">
                <p>Valor Total:</p>
                <button>Confirmar pedido</button>
            </div>
        </section>
    );
}

export default Cart;