import React, { useState } from "react";
import FilterPizza from "./FilterPizza";
import ProductList from "./ProductList";

const MenuPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("PIZZAS_SALGADAS");

  return (
    <>
      <FilterPizza onFilterChange={setSelectedCategory}
        activeFilter={selectedCategory} />
      <ProductList selectedCategory={selectedCategory} />
    </>
  );
};

export default MenuPage;
