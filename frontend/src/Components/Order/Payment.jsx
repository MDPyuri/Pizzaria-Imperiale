import React, { useState} from 'react';
import './Payment.css';
import QrCodePix from './img/QrCodePix.png';

const Payment = () => {
    const [paymentMethod, setPaymentMethod] = useState('credito');

    const handleExpiryChange = (e) => {
        let value = e.target.value.replace(/\D/g, '');

        if (value.length >= 2) {
            value = value.slice(0, 2) + '/' + value.slice(2, 4);
        }

        e.target.value = value;
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
                            <option value="" disabled selected>Selecione uma opção de pagamento</option>
                            <option value="dinheiro">Dinheiro</option>
                            <option value="cartao">Cartão de débito</option>
                            <option value="pix">Cartão de crédito</option>
                        </select>
                    </div>
                )}

                <div className="finish-order-btns">
                    <button className="finish-order-btn">
                        Cancelar Pedido
                    </button>
                    <button className="finish-order-btn">
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
        </section>
    );
};

export default Payment;
