import React, { useState, useEffect } from "react";
import "./Menu.css";

const images = import.meta.glob('../../assets/img/*.png', { eager: true });


const ProductList = ({ selectedCategory, searchText }) => {
  const [products, setProducts] = useState([]);
  const [cartCounts, setCartCounts] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [fade, setFade] = useState("fade-in");
  const [pendingCategory, setPendingCategory] = useState(null);

  // Enviar para o carrinho
  const addToCart = (product) => {
      // Recupera o carrinho atual
      const cart = JSON.parse(localStorage.getItem('carrinho')) || [];
      const quantidade = cartCounts[product.idProduto] || 1;

      // Verifica se o produto já está no carrinho
      const existing = cart.find((item) => item.id === product.idProduto);
      if (existing) {
          // Atualiza a quantidade
          existing.quantidade += quantidade;
      } else {
          // Adiciona novo produto
          cart.push({ id: product.idProduto, quantidade });
      }

      // Salva no localStorage
      localStorage.setItem('carrinho', JSON.stringify(cart));
      // (Opcional) Limpa o contador desse produto
      setCartCounts((prev) => ({ ...prev, [product.idProduto]: 0 }));
  };

  useEffect(() => {
    // se a categoria mudou, começa fade-out e aguarda troca
    if (selectedCategory !== null) {
      setFade("fade-out");
      setPendingCategory(selectedCategory);
    }
  }, [selectedCategory, searchText]);

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

      // Filtro por categoria
      let filtered = Array.isArray(category)
        ? data.filter((produto) => category.includes(produto.categoria))
        : data.filter((produto) => produto.categoria === category);

      // Filtro por nome
      if (searchText && searchText.trim() !== "") {
        const texto = searchText
          .trim()
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "");
          
        const palavras = texto.split(" ");

        filtered = filtered.filter((produto) => {
          const nome = produto.nome
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");
          
          console.log("Verificando:", nome, "vs", texto);
          
          const descricao = produto.descricao
            ?.toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");

          return palavras.every((palavra) =>
            nome.includes(palavra) || descricao.includes(palavra)
          );
        });
      }

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

  const getProductImage = (product) => {
    const match = Object.entries(images).find(([path]) =>
      path.endsWith(`/${product.idProduto}.png`)
    );
    return match ? match[1].default : "/src/assets/img/PizzasSalgadas.png"; // fallback
  };

  if (error) return null;

  return (
      <div className={`containerCentral ${fade}`}>
          {!loading &&
              products.map((product) => (
                  <div key={product.idProduto} className="product">
                      <div className="img">
                          <img
                              src={getProductImage(product)}
                              alt={product.nome}
                          />
                      </div>
                      <div className="description">
                          <p className="description Title">{product.nome}</p>
                          <p className="description desc">
                              {product.descricao}
                          </p>
                          <div className="price-counter">
                              <p className="price">
                                  Preço: R${' '}
                                  {parseFloat(product.preco).toFixed(2)}
                              </p>
                              <div className="counter">
                                  <div className="counter-box">
                                      <button
                                          onClick={() =>
                                              handleDecrement(product.idProduto)
                                          }
                                      >
                                          -
                                      </button>
                                      <span>
                                          {cartCounts[product.idProduto] || 0}
                                      </span>
                                      <button
                                          onClick={() =>
                                              handleIncrement(product.idProduto)
                                          }
                                      >
                                          +
                                      </button>
                                  </div>
                              </div>
                          </div>
                          <div className="addCar">
                              <button onClick={() => addToCart(product)}>
                                  Adicionar ao carrinho
                              </button>
                          </div>
                      </div>
                  </div>
              ))}
      </div>
  );
};

export default ProductList;
