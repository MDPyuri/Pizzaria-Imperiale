import React from 'react';
import './Header.css';
import logo from 'img/Logo.png';

const Header = () => {
  return (
    <header id="Header">
        
      <div id="LogoName">
        <img src={logo} alt="Logo" />
        <h1>Vila Imperiale</h1>
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

    </header>
  );
};

export default Header;
