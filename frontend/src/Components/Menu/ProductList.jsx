// ProductList.jsx
import React, { useState, useEffect } from "react";
import "./Menu.css";
import foto from "../../assets/img/PizzasSalgadas.png";

const ProductList = ({ selectedCategory }) => {
  const [products, setProducts] = useState([]);
  const [cartCounts, setCartCounts] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch("http://localhost:3000/produtos");
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error("Erro ao buscar produtos");
        }
        const data = await response.json();

        const filtered = selectedCategory
          ? Array.isArray(selectedCategory)
            ? data.filter((produto) =>
                selectedCategory.includes(produto.categoria)
              )
            : data.filter((produto) => produto.categoria === selectedCategory)
          : data;

        setProducts(filtered);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, [selectedCategory]);

  const handleIncrement = (id) => {
    setCartCounts((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const handleDecrement = (id) => {
    setCartCounts((prev) => ({
      ...prev,
      [id]: prev[id] > 0 ? prev[id] - 1 : 0,
    }));
  };

  if (loading) return console.log("Carregando produtos");
  if (error) return console.log("Erro ao carregar produtos");

  return (
    <div className="containerCentral">
      {products.map((product) => (
        <div key={product.idProduto} className="product">
          <div className="img">
            <img src={foto} alt={product.nome} />
          </div>
          <div className="description">
            <p className="description Title">{product.nome}</p>
            <p className="description desc">{product.descricao}</p>
            <p className="price">
              Preço: R$ {parseFloat(product.preco).toFixed(2)}
            </p>
            <div className="counter">
              <button onClick={() => handleDecrement(product.idProduto)}>
                -
              </button>
              <span>{cartCounts[product.idProduto] || 0}</span>
              <button onClick={() => handleIncrement(product.idProduto)}>
                +
              </button>
            </div>
            <div className="addCar">
              <button>Adicionar ao carrinho</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
