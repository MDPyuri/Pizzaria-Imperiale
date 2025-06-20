import React, { useState, useEffect } from "react";
import "./Menu.css";
import foto from "../../assets/img/PizzasSalgadas.png";

const ProductList = ({ selectedCategory }) => {
  const [products, setProducts] = useState([]);
  const [cartCounts, setCartCounts] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [fade, setFade] = useState("fade-in");
  const [pendingCategory, setPendingCategory] = useState(null);

  useEffect(() => {
    // se a categoria mudou, começa fade-out e aguarda troca
    if (selectedCategory !== null) {
      setFade("fade-out");
      setPendingCategory(selectedCategory);
    }
  }, [selectedCategory]);

  // executa a troca depois que o fade-out termina
  useEffect(() => {
    if (fade === "fade-out" && pendingCategory !== null) {
      const timeout = setTimeout(() => {
        fetchProducts(pendingCategory);
      }, 300); // tempo igual ao transition do CSS

      return () => clearTimeout(timeout);
    }
  }, [fade, pendingCategory]);

  const fetchProducts = async (category) => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:3000/produtos");
      if (!response.ok) throw new Error("Erro ao buscar produtos");
      const data = await response.json();

      const filtered = Array.isArray(category)
        ? data.filter((produto) => category.includes(produto.categoria))
        : data.filter((produto) => produto.categoria === category);

      setProducts(filtered);
      setFade("fade-in"); // ativa fade-in depois de trocar
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const handleIncrement = (id) => {
    setCartCounts((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const handleDecrement = (id) => {
    setCartCounts((prev) => ({
      ...prev,
      [id]: prev[id] > 0 ? prev[id] - 1 : 0,
    }));
  };

  if (error) return null;

  return (
    <div className={`containerCentral ${fade}`}>
      {!loading &&
        products.map((product) => (
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
                <button onClick={() => handleDecrement(product.idProduto)}>-</button>
                <span>{cartCounts[product.idProduto] || 0}</span>
                <button onClick={() => handleIncrement(product.idProduto)}>+</button>
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
