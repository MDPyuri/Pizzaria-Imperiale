require("dotenv").config();
const express = require("express");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const app = express();
app.use(express.json());

// Rota para listar usuários
app.get("/usuarios", async (req, res) => {
    const usuarios = await prisma.usuario.findMany();
    res.json(usuarios);
});

// Rota para criar usuário
app.post("/usuarios/criar", async (req, res) => {
    const { nome, telefone, cpf, email, senha } = req.body;
    const usuario = await prisma.usuario.create({
        data: { nome, telefone, cpf, email, senha }
    });
    res.json(usuario);
});

// Rota para atualizar usuário
app.put("/usuarios/atualizar/:id", async (req, res) => {
    const { id } = req.params;
    const { nome, email } = req.body;
    const usuario = await prisma.usuario.update({
        where: { id: parseInt(id) },
        data: { nome, email }
    });
    res.json(usuario);
});

// Rota para deletar usuário
app.delete("/usuarios/:id", async (req, res) => {
    const { id } = req.params;
    await prisma.usuario.delete({
        where: { id: parseInt(id) }
    });
    res.json({ message: "Usuário deletado com sucesso" });
});

// Iniciar o servidor
app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
