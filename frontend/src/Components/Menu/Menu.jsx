import React from "react";
import './Menu.css';

const Menu = () => {
    return (
        <>
            <p className="menu">Cardápio</p>
            <div className="line-one"></div>
            <div className="pizzas">
                <button className="salt-pizza">Pizzas salgadas</button>
                <button className="sweet-pizza">Pizzas doces</button>
                <button className="vegan-pizza">Pizzas veganas</button>
                <button className="drinks">Bebidas</button>
            </div>
            <div>
                <input
                    type="text"
                    // value={search}
                    // onChange={(event) => setNome(event.target.value)}
                    placeholder="Pesquisar"
                />
                <button></button>
            </div>
            <div className="line-two"></div>
        </>
    )
}

export default Menu;