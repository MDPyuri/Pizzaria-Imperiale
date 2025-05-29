import React, { useState, useEffect } from "react";
import './Menu.css';

import foto from '../../assets/img/PizzasSalgadas.png'; // Imagem genérica para todos os produtos

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [cartCounts, setCartCounts] = useState({}); // Armazena a quantidade de cada produto no carrinho
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3000/produtos'); // Substitua pela rota correta do backend
        console.log('Response status:', response.status); // Log para depuração
        if (!response.ok) {
          const errorData = await response.json();
          console.error('Error response:', errorData); // Log para depuração
          throw new Error('Erro ao buscar produtos');
        }
        const data = await response.json();
        console.log('Produtos recebidos:', data); // Log para depuração
        setProducts(data);
        setLoading(false);
      } catch (err) {
        console.error('Erro ao buscar produtos:', err.message); // Log para depuração
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleIncrement = (id) => {
    setCartCounts((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const handleDecrement = (id) => {
    setCartCounts((prev) => ({
      ...prev,
      [id]: prev[id] > 0 ? prev[id] - 1 : 0,
    }));
  };

  if (loading) {
    return <p>Carregando produtos...</p>;
  }

  if (error) {
    return <p>Erro: {error}</p>;
  }

  return (
    <div className="containerCentral">
      {products.map((product) => (
        <div key={product.id} className="product">
          <div className="img">
            {/* Imagem genérica para todos os produtos */}
            <img src={foto} alt="Pizza Salgada" />
          </div>
          <div className="description">
            <h3>{product.nome}</h3>
            <p>{product.descricao}</p>
            <p className="price">
              Preço: R$
              {product.preco ? parseFloat(product.preco).toFixed(2) : 'N/A'}
            </p>
            <div className="counter">
              <button onClick={() => handleDecrement(product.id)}>-</button>
              <span>{cartCounts[product.id] || 0}</span>
              <button onClick={() => handleIncrement(product.id)}>+</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;