require("dotenv").config();
const express = require("express");
const usuarioRoutes = require("./Routes/usuario");

const app = express();
app.use(express.json());

// Usar as rotas de usuário
app.use(usuarioRoutes);

// Iniciar o servidor
app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
