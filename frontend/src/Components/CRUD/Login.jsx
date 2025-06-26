import React, { useState, useEffect } from 'react';
import './Crud.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import HeaderSimple from '../Header/HeaderSimple';
import FooterSimple from '../Footer/FooterSimple';

const UserLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const { login, isAuthenticated } = useAuth();

    // Se já estiver logado, redireciona
    useEffect(() => {
        if (isAuthenticated()) {
            const from = location.state?.from?.pathname || '/';
            navigate(from, { replace: true });
        }
    }, [isAuthenticated, navigate, location]);

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');

        const result = await login(email, password);

        if (result.success) {
            const from = location.state?.from?.pathname || '/';
            navigate(from, { replace: true });
        } else {
            if (result.error === 'Failed to fetch') {
                setError(
                    'Erro de conexão: Verifique se o servidor está rodando na porta 3000'
                );
            } else if (result.error && result.error.includes('fetch')) {
                setError('Erro de rede: Não foi possível conectar ao servidor');
            } else {
                setError(result.error);
            }
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
                            O primeiro passo para uma experiência única: faça
                            seu login!
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
                        <button className="btn-crud" type="submit">
                            Entrar
                        </button>
                    </form>

                    <div className="messageToRegister">
                        <p
                            style={{ cursor: 'pointer' }}
                            onClick={() => navigate('/cadastro')}
                        >
                            Ainda não tem conta? Faça seu cadastro
                        </p>
                    </div>
                </div>
            </section>
            <FooterSimple />
        </>
    );
};

export default UserLogin;
