import React, { useState } from 'react';
import './Crud.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useNavigate } from 'react-router-dom';

const DeleteUser = () => {
    const [cpf, setCpf] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");
        setError("");
        try {
            // Buscar o usuário pelo CPF e email para obter o id
            const resUser = await fetch(`http://localhost:3000/usuarios?cpf=${cpf}&email=${email}`);
            if (!resUser.ok) throw new Error("Usuário não encontrado com esses dados");
            const users = await resUser.json();
            // Suporte para caso venha array ou objeto
            const user = Array.isArray(users) ? users.find(u => u.cpf === cpf && u.email === email) : users;
            if (!user || !user.idUsuario) throw new Error("Usuário não encontrado");
            // Verifica a senha (simples, pois não há autenticação obrigatória)
            if (user.senha !== password) throw new Error("Senha incorreta");
            // Deleta o usuário
            const resDelete = await fetch(`http://localhost:3000/usuarios/deletar/${user.idUsuario}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' }
            });
            if (!resDelete.ok) {
                const data = await resDelete.json();
                throw new Error(data.error || "Erro ao deletar usuário");
            }
            setMessage("Conta deletada com sucesso!");
            setCpf("");
            setEmail("");
            setPassword("");
        } catch (err) {
            setError(err.message || "Erro ao deletar conta");
        }
    };

    if (message) {
        alert(message);
        navigate('/');
    }

    return (
        <>
            <Header />
            <section className="CrudSection">
                <div className="CrudSection-block">
                    <div className="title-crud">
                        <div className="line-crud"></div>
                        <p>Deletar conta</p>
                        <div className="line-crud"></div>
                    </div>

                    <div className="messageCrud">
                        <p>Se decidir voltar, estaremos de portas abertas!</p>
                        <p>Confirme seus dados para seguir com a exclusão.</p>
                    </div>

                    {error && <div className="error-message">{error}</div>}

                    <form onSubmit={handleSubmit}>
                        <div className="crudData deleteData">
                            <input
                                type="text"
                                placeholder="CPF:"
                                className="inputCrud"
                                value={cpf}
                                onChange={e => setCpf(e.target.value)}
                                required
                            />
                            <input
                                type="email"
                                placeholder="Email:"
                                className="inputCrud"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                required
                            />
                            <input
                                type="password"
                                placeholder="Senha:"
                                className="inputCrud"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button className="btn-crud" type="submit">Excluir</button>
                    </form>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default DeleteUser;
