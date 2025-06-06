// FilterPizza.jsx
import React from "react";
import './Menu.css';

const FilterPizza = ({ onFilterChange, activeFilter }) => {
  const getButtonClass = (type) => {
    if (Array.isArray(activeFilter) && Array.isArray(type)) {
      const isSame =
        type.length === activeFilter.length &&
        type.every((item, i) => item === activeFilter[i]);
      return isSame ? "filter-button active" : "filter-button";
    }

    return activeFilter === type ? "filter-button active" : "filter-button";
  };

  const bebidasTipo = ["BEBIDAS_ALCOOLICAS", "BEBIDAS_NAO_ALCOOLICAS"];

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
          className={getButtonClass("PIZZAS_SALGADAS")}
          onClick={() => {
            // console.log("Clicou em salgada");
            onFilterChange("PIZZAS_SALGADAS")
            console.log("aa");
          }}
        >
          Pizzas salgadas
        </button>

        <button
          className={getButtonClass("PIZZAS_DOCES")}
          onClick={() => onFilterChange("PIZZAS_DOCES")}
        >
          Pizzas doces
        </button>
        <button
          className={getButtonClass("PIZZAS_VEGANAS")}
          onClick={() => onFilterChange("PIZZAS_VEGANAS")}
        >
          Pizzas veganas
        </button>
        <button
          className={getButtonClass(bebidasTipo)}
          onClick={() => onFilterChange(bebidasTipo)}
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
