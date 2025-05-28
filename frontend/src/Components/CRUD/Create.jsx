import React, { useState } from 'react';
import "./Crud.css";
import HeaderSimple from '../Header/HeaderSimple';
import FooterSimple from '../Footer/FooterSimple';

const CreateUser = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [cpf, setCpf] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    // Função para cadastrar o usuário
    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");
        setError("");
        try {
            const response = await fetch("http://localhost:3000/usuarios/criar", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    nome: name,
                    telefone: phone,
                    cpf: cpf,
                    email: email,
                    senha: password
                })
            });
            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.error || "Erro ao cadastrar usuário");
            }
            setMessage("Usuário cadastrado com sucesso!");
            setName("");
            setPhone("");
            setCpf("");
            setEmail("");
            setPassword("");
        } catch (err) {
            setError(err.message);
        }
    }

    return (
        <>
            <HeaderSimple />
            <section className="CrudSection">
                <div className="CrudSection-block">
                    <div className="title-crud">
                        <div className="line-crud"></div>
                        <p>Cadastrar</p>
                        <div className="line-crud"></div>
                    </div>

                    <div className="messageCrud">
                        <p>Cadastre-se e descubra um novo sabor de sofisticação.</p>
                    </div>

                    {message && <div className="success-message">{message}</div>}
                    {error && <div className="error-message">{error}</div>}

                    <form onSubmit={handleSubmit}>
                        <div className="crudData createData">
                            <input
                                type="text"
                                placeholder="Nome completo:"
                                className="inputCrud"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                            <input
                                type="text"
                                placeholder="Telefone:"
                                className="inputCrud"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required
                            />
                            <input
                                type="text"
                                placeholder="CPF:"
                                className="inputCrud"
                                value={cpf}
                                onChange={(e) => setCpf(e.target.value)}
                                required
                            />
                            <input
                                type="email"
                                placeholder="Email:"
                                className="inputCrud"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <input
                                type="password"
                                placeholder="Senha:"
                                className="inputCrud"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button className="btn-crud" type="submit">
                            Cadastrar
                        </button>
                    </form>
                </div>
            </section>
            <FooterSimple />
        </>
    );
}

export default CreateUser;