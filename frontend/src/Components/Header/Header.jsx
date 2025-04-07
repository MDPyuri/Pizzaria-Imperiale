import { React, useState } from 'react';
import './Header.css';
import logo from './img/logo.png';

const Header = () => {
    const [showPopup, setShowPopup] = useState(false);

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
                <img src={logo} alt="Logo"/>
                <p>Vila Imperiale</p>
            </div>

            <nav id="NavHeader">
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Cardápio</a>
                    </li>
                    <li>
                        <a href="#">Pedido</a>
                    </li>
                    <li>
                        <a href="#">Reserva</a>
                    </li>
                    <li>
                        <a href="#">Contato</a>
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
                </div>
            </nav>

            {showPopup && <PopupProfile />}
        </header>
    );
};

const PopupProfile = () => {
    return (
        <div id="popupProfile">
            <div id="popupTriangle"></div>
            <div id="popupText">
                <ul>
                    <li>
                        <a>Login/Logout</a>
                    </li>
                    <li>
                        <a>Pedido</a>
                    </li>
                    <li>
                        <a>Perfil</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
