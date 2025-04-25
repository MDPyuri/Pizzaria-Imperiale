require("dotenv").config();
const express = require("express");

const app = express();

// Middleware para processar JSON
app.use(express.json());

// Importar rotas de usuário
const usuarioRoutes = require("./Routes/usuario");
app.use("/usuarios", usuarioRoutes);

// Importar rotas de reserva
const reservaRoutes = require("./Routes/reserva");
app.use("/reservas", reservaRoutes);

// Iniciar o servidor
app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
