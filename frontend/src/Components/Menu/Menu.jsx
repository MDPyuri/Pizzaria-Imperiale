import React, { useState } from "react";
import FilterPizza from "./FilterPizza";
import ProductList from "./ProductList";

const MenuPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("PIZZAS_SALGADAS");
  const [searchText, setSearchText] = useState("");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSearchText(""); // <-- limpa a pesquisa
  };

  return (
    <>
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
    </>
  );
};

export default MenuPage;
