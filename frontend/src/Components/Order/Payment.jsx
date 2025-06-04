import React from 'react';
import './OrderFinish.css';

const Payment = () => {
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
                    <button>Cartão de crédito</button>
                    <button>Usar chave Pix</button>
                    <button>Na entrega</button>
                </div>

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

                    <button className="finish-order-btn">
                        Finalizar pedido
                    </button>
                </div>
            </div>

            <div className="processFinally">
                <div className="steps-order">
                    <p className="number-steps">1</p>
                    <p className="name-steps">Pedido</p>
                </div>
                <div className="vertical-line"></div>
                <div className="steps-order">
                    <p className="number-steps">2</p>
                    <p className="name-steps">Endereço</p>
                </div>
                <div className="vertical-line"></div>
                <div className="steps-order">
                    <p className="number-steps">3</p>
                    <p className="name-steps">
                        <strong>Pagamento</strong>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Payment;
