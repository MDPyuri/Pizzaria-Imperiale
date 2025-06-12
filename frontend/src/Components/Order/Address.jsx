import React, { useState, useEffect } from 'react';
import './OrderFinish.css';

const Address = () => {
    return (
        <section className="SectionOrderFinish">
            <div className="OrderFinish-content">
                <div className="title-orderfinish">
                    <div className="line-orderfinish"></div>
                    <p>Endereço de entrega</p>
                    <div className="line-orderfinish"></div>
                </div>

                <form className="address-infos">
                    <input type="text" placeholder="CEP:" />
                    <input type="text" placeholder="Logradouro:" />
                    <input type="text" placeholder="Número:" />
                    <input type="text" placeholder="Complemento:" />
                    <input type="text" placeholder="Bairro:" />
                    <input type="text" placeholder="Ponto de referência:" />
                </form>

                <div className="finish-order-btns">
                    <button className="finish-order-btn">
                        Cancelar Pedido
                    </button>
                    <button className="finish-order-btn">Continuar</button>
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
                        <p className="name-steps">
                            <strong>Endereço</strong>
                        </p>
                    </div>
                    <div className="vertical-line"></div>
                </div>
                <div className="step-group">
                    <div className="steps-order">
                        <p className="number-steps">3</p>
                        <p className="name-steps">Pagamento</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Address;
