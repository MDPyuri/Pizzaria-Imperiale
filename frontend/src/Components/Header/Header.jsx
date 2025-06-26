import { React, useState, useEffect } from 'react';
import './Header.css';
import logo from './img/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Header = () => {
    const [showPopup, setShowPopup] = useState(false);
    const { user, isAuthenticated, logout } = useAuth();

    const handleLogout = async () => {
        await logout();
        setShowPopup(false);
    };

    const togglePopup = () => {
        setShowPopup(!showPopup);
        if (showPopup === false) {
            document.getElementById('openPopup').classList.add('openPopup');
        } else {
            document.getElementById('openPopup').classList.remove('openPopup');
        }
    };

    return (
        <header id="Header">
            <div id="LogoName">
                <Link to="/">
                    <img src={logo} alt="Logo" style={{ cursor: 'pointer' }} />
                </Link>
                <p>Vila Imperiale</p>
            </div>

            <nav id="NavHeader">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <a href="/menu">Cardápio</a>
                    </li>
                    <li>
                        <a href="/carrinho">Pedido</a>
                    </li>
                    <li>
                        <Link to="/reserva">Reserva</Link>
                    </li>
                    <li>
                        <Link to="/#Footer">Contato</Link>
                    </li>
                </ul>

                <div id="profile">
                    <p
                        id="openPopup"
                        className="defaultPopup"
                        onClick={togglePopup}
                    >
                        ^
                    </p>
                    <ion-icon name="person-circle-outline"></ion-icon>
                    {user && (
                        <span style={{ marginLeft: 8, fontWeight: 500 }}>
                            {user.nome}
                        </span>
                    )}
                </div>
            </nav>

            {showPopup && <PopupProfile />}
        </header>
    );
};

const PopupProfile = () => {
    const navigate = useNavigate();
    const { isAuthenticated, logout } = useAuth();

    const handleLogout = async () => {
        await logout();
        navigate('/');
    };

    const handleLogin = () => {
        navigate('/login');
    };

    return (
        <div id="popupProfile">
            <div id="popupTriangle"></div>
            <div id="popupText">
                <ul>
                    <li>
                        {isAuthenticated() ? (
                            <a
                                onClick={handleLogout}
                                style={{ cursor: 'pointer' }}
                            >
                                Logout
                            </a>
                        ) : (
                            <a
                                onClick={handleLogin}
                                style={{ cursor: 'pointer' }}
                            >
                                Login
                            </a>
                        )}
                    </li>
                    <li>
                        <a
                            onClick={() => navigate('/carrinho')}
                            style={{ cursor: 'pointer' }}
                        >
                            Pedido
                        </a>
                    </li>
                    <li>
                        <a
                            onClick={() => navigate('/perfil')}
                            style={{ cursor: 'pointer' }}
                        >
                            Perfil
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
