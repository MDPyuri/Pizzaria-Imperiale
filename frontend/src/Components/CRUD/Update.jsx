import React, { useState, useEffect } from 'react';
import './Crud.css';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import { useNavigate } from 'react-router-dom';

const UpdateUser = () => {
    const [NewName, setNewName] = useState("");
    const [NewPhone, setNewPhone] = useState("");
    const [NewEmail, setNewEmail] = useState("");
    const [NewPassword, setNewPassword] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [userId, setUserId] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:3000/usuarios/me', { credentials: 'include' })
            .then(res => {
                if (!res.ok) throw new Error('Não autenticado');
                return res.json();
            })
            .then(data => {
                setUserId(data.idUsuario);
                setNewName(data.nome || "");
                setNewPhone(data.telefone || "");
                setNewEmail(data.email || "");
                // Não preenche senha por segurança
            })
            .catch(() => setError('Erro ao carregar dados do usuário.'));
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");
        setError("");
        if (!userId) {
            setError('Usuário não autenticado.');
            return;
        }
        try {
            // Monta o objeto apenas com os campos preenchidos
            const updateData = {};
            if (NewName) updateData.nome = NewName;
            if (NewPhone) updateData.telefone = NewPhone;
            if (NewEmail) updateData.email = NewEmail;
            if (NewPassword) updateData.senha = NewPassword;
            if (Object.keys(updateData).length === 0) {
                setError('Preencha ao menos um campo para atualizar.');
                return;
            }
            const response = await fetch(`http://localhost:3000/usuarios/atualizar/${userId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updateData)
            });
            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.error || 'Erro ao atualizar usuário');
            }
            setMessage('Dados atualizados com sucesso!');
            setNewPassword(""); // Limpa senha após update
        } catch (err) {
            setError(err.message || 'Erro ao atualizar dados');
        }
    };

    useEffect(() => {
        if (message) {
            alert(message);
            navigate('/perfil');
        }
    }, [message]);

    return (
        <>
            <Header />
            <section className="CrudSection">
                <div className="CrudSection-block">
                    <div className="title-crud">
                        <div className="line-crud"></div>
                        <p>Atualizar</p>
                        <div className="line-crud"></div>
                    </div>

                    <div className="messageCrud">
                        <p>Precisa atualizar alguma informação?</p>
                        <p>Insira seu dado atualizado:</p>
                    </div>

                    {error && <div className="error-message">{error}</div>}

                    <form onSubmit={handleSubmit}>
                        <div className="crudData updateData">
                            <input
                                type="text"
                                placeholder="Nome completo:"
                                className="inputCrud"
                                value={NewName}
                                onChange={e => setNewName(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="Telefone:"
                                className="inputCrud"
                                value={NewPhone}
                                onChange={e => setNewPhone(e.target.value)}
                            />
                            <input
                                type="email"
                                placeholder="Email:"
                                className="inputCrud"
                                value={NewEmail}
                                onChange={e => setNewEmail(e.target.value)}
                            />
                            <input
                                type="password"
                                placeholder="Senha:"
                                className="inputCrud"
                                value={NewPassword}
                                onChange={e => setNewPassword(e.target.value)}
                            />
                        </div>
                        <button className="btn-crud" type="submit">Atualizar dados</button>
                    </form>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default UpdateUser;
