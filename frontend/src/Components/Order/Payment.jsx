import React, { useState} from 'react';
import './OrderFinish.css';

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
                    <button className={paymentMethod === 'credito' ? 'payment-btn active-btn' : 'payment-btn'}
                        onClick={() => setPaymentMethod('credito')}>
                        Cartão de crédito
                    </button>
                    <button  className={paymentMethod === 'pix' ? 'payment-btn active-btn' : 'payment-btn'}
                        onClick={() => setPaymentMethod('pix')}>
                        Usar chave Pix
                    </button>
                    <button className={paymentMethod === 'entrega' ? 'payment-btn active-btn' : 'payment-btn'}
                        onClick={() => setPaymentMethod('entrega')}>
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

                        <div className="finish-order-btns">
                            <button className="finish-order-btn">
                                Cancelar Pedido
                            </button>
                            <button className="finish-order-btn">
                                Finalizar pedido
                            </button>
                        </div>
                    </div>
                )}
            </div>

            <div className="Pix"></div>

            <div className="Entrega"></div>

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
