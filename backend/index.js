require("dotenv").config();
const express = require("express");
const usuarioRoutes = require("./Routes/usuario");

const app = express();
app.use(express.json());

// Integrar as rotas de usuário
app.use("/api", usuarioRoutes);

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});