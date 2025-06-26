import React, { useState } from "react";
import FilterPizza from "./FilterPizza";
import ProductList from "./ProductList";
import Header from "../Header/Header";

const MenuPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("PIZZAS_SALGADAS");
  const [searchText, setSearchText] = useState("");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSearchText(""); // <-- limpa a pesquisa
  };

  return (
      <>
          <Header />
          <div className="menuAll">
              <FilterPizza
                  onFilterChange={handleCategoryChange}
                  activeFilter={selectedCategory}
                  searchText={searchText}
                  onSearch={setSearchText}
              />
              <ProductList
                  selectedCategory={selectedCategory}
                  searchText={searchText}
              />
          </div>
      </>
  );
};

export default MenuPage;
