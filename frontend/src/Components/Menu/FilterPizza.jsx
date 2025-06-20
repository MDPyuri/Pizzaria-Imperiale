import React from "react";
import './Menu.css';

const FilterPizza = ({ onFilterChange, activeFilter }) => {
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
          className={
            activeFilter === "PIZZAS_SALGADAS"
              ? "filter-button active"
              : "filter-button"
          }
          onClick={() => onFilterChange("PIZZAS_SALGADAS")}
        >
          Pizzas salgadas
        </button>

        <button
          className={
            activeFilter === "PIZZAS_DOCES"
              ? "filter-button active"
              : "filter-button"
          }
          onClick={() => onFilterChange("PIZZAS_DOCES")}
        >
          Pizzas doces
        </button>

        <button
          className={
            activeFilter === "PIZZAS_VEGANAS"
              ? "filter-button active"
              : "filter-button"
          }
          onClick={() => onFilterChange("PIZZAS_VEGANAS")}
        >
          Pizzas veganas
        </button>

        <button
          className={
            JSON.stringify(activeFilter) === JSON.stringify(bebidasTipo)
              ? "filter-button active"
              : "filter-button"
          }
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
