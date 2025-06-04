// MenuPage.jsx
import React, { useState } from "react";
import FilterPizza from "./FilterPizza";
import ProductList from "./ProductList";

const MenuPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleFilterChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <FilterPizza onFilterChange={handleFilterChange} />
      <ProductList selectedCategory={selectedCategory} />
    </div>
  );
};

export default MenuPage;