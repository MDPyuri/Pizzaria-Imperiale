require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

const cookieParser = require('cookie-parser');
app.use(cookieParser());

// Habilita CORS para todas as origens (ou especifique { origin: 'http://localhost:5173' })
app.use(cors({ 
    origin: 'http://localhost:5173', 
    credentials: true // Permite cookies cross-origin
}));

// Middleware para processar JSON
app.use(express.json());

// Importar rotas de usuário
const usuarioRoutes = require("./Routes/usuario");
app.use("/usuarios", usuarioRoutes);

// Importar rotas de reserva
const reservaRoutes = require("./Routes/reserva");
app.use("/reservas", reservaRoutes);

// Importar rotas de produto
const produtoRoutes = require("./Routes/produto");
app.use("/produtos", produtoRoutes);

// Importar rotas de pedido
const pedidoRoutes = require("./Routes/pedido");
app.use("/pedidos", pedidoRoutes);

// Importar rotas de endereço
const enderecoRoutes = require("./Routes/endereco");
app.use("/enderecos", enderecoRoutes);

// Importar rotas de pagamento
const pagamentoRoutes = require("./Routes/pagamento");
app.use("/pagamentos", pagamentoRoutes);

// Iniciar o servidor
app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
