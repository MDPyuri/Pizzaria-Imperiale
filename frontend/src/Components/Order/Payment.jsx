import React, { useState, useEffect } from 'react';
import './OrderFinish.css';

const Payment = () => {

    const expiryInput = document.getElementById('expiry');
    expiryInput.addEventListener('input', function (e) {
        let value = e.target.value.replace(/\D/g, ''); // remove tudo que não for número

        if (value.length >= 2) {
            value = value.slice(0, 2) + '/' + value.slice(2, 4); // coloca a barra depois de 2 dígitos
        }
        e.target.value = value;
    });

    return (
        <section className="SectionOrderFinish">
            <div className="OrderFinish-content">
                <div className="title-order">
                    <div className="line-order"></div>
                    <p>Pagamento</p>
                    <div className="line-order"></div>
                </div>

                <div className="payment-options">
                    <button>Cartão de crédito</button>
                    <button>Pix</button>
                    <button>Na entrega</button>
                </div>

                <div className="creditCard">
                    <form>
                        <input type="text" placeholder="Nome do cartão:" required/>
                        <input type="number" placeholder="Número do cartão:" required/>
                        <input type="text" id="expiry" placeholder="Validade" pattern="(0[1-9]|1[0-2])\/\d{2}" required/>
                        <input type="number" />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Payment;