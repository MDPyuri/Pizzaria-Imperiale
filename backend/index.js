require("dotenv").config();
const express = require("express");

const app = express();
app.use(express.json());

// Importar rotas de usuário
const usuarioRoutes = require("./Routes/usuario");
app.use("/usuarios", usuarioRoutes);

// Iniciar o servidor
app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
