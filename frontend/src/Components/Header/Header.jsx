import React from 'react';
import './Header.css';
import logo from './img/logo.png';

const Header = () => {
  return (
    <header id="Header">
      <div id="LogoName">
        <img src={logo} alt="Logo" />
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
      </nav>

      <div id="profile">
        <p>^</p>
        <ion-icon name="person-circle-outline"></ion-icon>
      </div>
    </header>
  );
};

export default Header;
