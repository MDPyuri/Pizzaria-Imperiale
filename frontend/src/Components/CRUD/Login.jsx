import React, { useState } from 'react';
import './Crud.css';
import { useNavigate } from 'react-router-dom';
import HeaderSimple from '../Header/HeaderSimple';
import FooterSimple from '../Footer/FooterSimple';

const UserLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        // Exemplo de login (substitua por sua lógica real)
        try {
            const response = await fetch('http://localhost:3000/usuarios/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, senha: password })
            });
            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.error || 'Erro ao fazer login');
            }
            localStorage.setItem('auth', 'true');
            navigate('/');
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <>
            <HeaderSimple />
            <section className="CrudSection">
                <div className="CrudSection-block">
                    <div className="title-crud">
                        <div className="line-crud"></div>
                        <p>Login</p>
                        <div className="line-crud"></div>
                    </div>

                    <div className="messageCrud">
                        <p>
                            O primeiro passo para uma experiência única: faça seu
                            login!
                        </p>
                    </div>
                    {error && <div className="error-message">{error}</div>}
                    <form onSubmit={handleLogin} className="crudData loginData">
                        <input
                            type="text"
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
                        <button className="btn-crud" type="submit">Entrar</button>
                    </form>

                    <div className="messageToRegister">
                        <p style={{ cursor: 'pointer' }} onClick={() => navigate('/cadastro')}>Ainda não tem conta? Faça seu cadastro</p>
                    </div>
                </div>
            </section>
            <FooterSimple />
        </>
    );
};

export default UserLogin;
