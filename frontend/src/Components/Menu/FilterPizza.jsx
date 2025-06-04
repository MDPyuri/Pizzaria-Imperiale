// FilterPizza.jsx
import React from "react";
import './Menu.css';

const FilterPizza = ({ onFilterChange }) => {
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
        <button
          className="salt-pizza"
          onClick={() => {
            console.log("Clicou em salgada");
            onFilterChange("PIZZAS_SALGADAS");
          }}
        >
          Pizzas salgadas
        </button>

        <button
          className="sweet-pizza"
          onClick={() => onFilterChange("PIZZAS_DOCES")}
        >
          Pizzas doces
        </button>
        <button
          className="vegan-pizza"
          onClick={() => onFilterChange("PIZZAS_VEGANAS")}
        >
          Pizzas veganas
        </button>
        <button
          className="drinks"
          onClick={() =>
            onFilterChange(["BEBIDAS_ALCOOLICAS", "BEBIDAS_NAO_ALCOOLICAS"])
          }
        >
          Bebidas
        </button>
      </div>
      <div className="search">
        <input type="text" placeholder="Pesquisar" />
        <button>
          <ion-icon name="search-outline"></ion-icon>
        </button>
      </div>
      <div className="line-two"></div>
    </>
  );
};

export default FilterPizza;
