import React, { useState, useEffect } from 'react';
import './OrderFinish.css';
import { useNavigate } from 'react-router-dom';

const Address = () => {
    const navigate = useNavigate();

    // Estados para os campos do formulário
    const [formData, setFormData] = useState({
        cep: '',
        logradouro: '',
        numero: '',
        complemento: '',
        bairro: '',
        pontoRef: '',
    });

    const [error, setError] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);

    // Carrega dados do endereço se existirem no localStorage
    useEffect(() => {
        const savedAddress = localStorage.getItem('endereco');
        if (savedAddress) {
            try {
                const addressData = JSON.parse(savedAddress);
                setFormData(addressData);
            } catch (error) {
                console.error('Erro ao carregar dados de endereço:', error);
            }
        }
    }, []);

    // Função para atualizar os campos do formulário
    const handleInputChange = (field, value) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }));
        setError(''); // Limpa erro quando usuário começa a digitar
    };

    // Verifica se todos os campos obrigatórios estão preenchidos
    useEffect(() => {
        const requiredFields = ['cep', 'logradouro', 'numero', 'bairro'];
        const allRequiredFilled = requiredFields.every(
            (field) => formData[field].trim() !== ''
        );
        setIsFormValid(allRequiredFilled);
    }, [formData]);

    const goToPayment = () => {
        // Validação antes de prosseguir
        const requiredFields = [
            { field: 'cep', label: 'CEP' },
            { field: 'logradouro', label: 'Logradouro' },
            { field: 'numero', label: 'Número' },
            { field: 'bairro', label: 'Bairro' },
        ];

        const emptyFields = requiredFields.filter(
            ({ field }) => !formData[field].trim()
        );

        if (emptyFields.length > 0) {
            const fieldsNames = emptyFields
                .map(({ label }) => label)
                .join(', ');
            setError(`Os seguintes campos são obrigatórios: ${fieldsNames}`);
            return;
        }

        // Salva os dados do endereço no localStorage para usar no pagamento
        localStorage.setItem('endereco', JSON.stringify(formData));
        navigate('/pagamento');
    };

    const cancelOrder = () => {
        localStorage.removeItem('endereco'); // Remove os dados de endereço ao cancelar
        navigate('/carrinho');
    };

    return (
        <section className="SectionOrderFinish">
            <div className="OrderFinish-content">
                <div className="title-orderfinish">
                    <div className="line-orderfinish"></div>
                    <p>Endereço de entrega</p>
                    <div className="line-orderfinish"></div>
                </div>

                {error && (
                    <div
                        className="error-message"
                        style={{
                            color: '#d32f2f',
                            backgroundColor: '#ffebee',
                            padding: '10px',
                            borderRadius: '5px',
                            margin: '10px 0',
                            textAlign: 'center',
                            fontFamily: 'Glacial Indifference',
                            border: '1px solid #f8bbd9',
                        }}
                    >
                        {error}
                    </div>
                )}

                <form
                    className="address-infos"
                    onSubmit={(e) => e.preventDefault()}
                >
                    <input
                        type="text"
                        placeholder="CEP: *"
                        value={formData.cep}
                        onChange={(e) =>
                            handleInputChange('cep', e.target.value)
                        }
                        required
                        style={{
                            borderColor:
                                formData.cep.trim() === '' && error
                                    ? '#d32f2f'
                                    : '#e6d6b8',
                        }}
                    />
                    <input
                        type="text"
                        placeholder="Logradouro: *"
                        value={formData.logradouro}
                        onChange={(e) =>
                            handleInputChange('logradouro', e.target.value)
                        }
                        required
                        style={{
                            borderColor:
                                formData.logradouro.trim() === '' && error
                                    ? '#d32f2f'
                                    : '#e6d6b8',
                        }}
                    />
                    <input
                        type="text"
                        placeholder="Número: *"
                        value={formData.numero}
                        onChange={(e) =>
                            handleInputChange('numero', e.target.value)
                        }
                        required
                        style={{
                            borderColor:
                                formData.numero.trim() === '' && error
                                    ? '#d32f2f'
                                    : '#e6d6b8',
                        }}
                    />
                    <input
                        type="text"
                        placeholder="Complemento:"
                        value={formData.complemento}
                        onChange={(e) =>
                            handleInputChange('complemento', e.target.value)
                        }
                    />
                    <input
                        type="text"
                        placeholder="Bairro: *"
                        value={formData.bairro}
                        onChange={(e) =>
                            handleInputChange('bairro', e.target.value)
                        }
                        required
                        style={{
                            borderColor:
                                formData.bairro.trim() === '' && error
                                    ? '#d32f2f'
                                    : '#e6d6b8',
                        }}
                    />
                    <input
                        type="text"
                        placeholder="Ponto de referência:"
                        value={formData.pontoRef}
                        onChange={(e) =>
                            handleInputChange('pontoRef', e.target.value)
                        }
                    />
                </form>

                <div
                    style={{
                        fontSize: '0.9rem',
                        color: '#6b2e2e',
                        fontFamily: 'Glacial Indifference',
                        textAlign: 'center',
                        margin: '10px 0',
                    }}
                >
                    * Campos obrigatórios
                </div>

                <div className="finish-order-btns">
                    <button onClick={cancelOrder} className="finish-order-btn">
                        Cancelar Pedido
                    </button>
                    <button
                        onClick={goToPayment}
                        className="finish-order-btn"
                        style={{
                            opacity: isFormValid ? 1 : 0.6,
                            cursor: isFormValid ? 'pointer' : 'not-allowed',
                        }}
                        title={
                            !isFormValid
                                ? 'Preencha todos os campos obrigatórios'
                                : ''
                        }
                    >
                        Continuar
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
