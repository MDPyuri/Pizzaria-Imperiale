import React from "react";
import './Menu.css';

const Menu = () => {
    return (
        <>
            <div className="menu">
                <p>Cardápio</p>
            </div>
            
            <div className="line-one">
                <div className="line-one-one"></div>
                <div className="line-one-two"></div>
            </div>
            <div className="pizzas">
                <button className="salt-pizza">Pizzas salgadas</button>
                <button className="sweet-pizza">Pizzas doces</button>
                <button className="vegan-pizza">Pizzas veganas</button>
                <button className="drinks">Bebidas</button>
            </div>
            <div className="search">
                <input
                    type="text"
                    // value={search}
                    // onChange={(event) => setNome(event.target.value)}
                    placeholder="Pesquisar"
                />
                <button><ion-icon name="search-outline"></ion-icon></button>
            </div>
            <div className="line-two"></div>
        </>
    )
}

export default Menu;