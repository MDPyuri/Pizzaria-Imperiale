require("dotenv").config();
const express = require("express");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const router = express.Router();

// Rota para listar usuários
router.get("/usuarios", async (req, res) => {
    const usuarios = await prisma.usuario.findMany();
    res.json(usuarios);
});

// Rota para criar usuário
router.post("/usuarios/criar", async (req, res) => {
    const { nome, telefone, cpf, email, senha } = req.body;
    const usuario = await prisma.usuario.create({
        data: { nome, telefone, cpf, email, senha }
    });
    res.json(usuario);
});

// Rota para atualizar usuário
router.put("/usuarios/atualizar/:id", async (req, res) => {
    const { id } = req.params;
    const { nome, email } = req.body;
    const usuario = await prisma.usuario.update({
        where: { id: parseInt(id) },
        data: { nome, email }
    });
    res.json(usuario);
});

// Rota para deletar usuário
router.delete("/usuarios/:id", async (req, res) => {
    const { id } = req.params;
    await prisma.usuario.delete({
        where: { id: parseInt(id) }
    });
    res.json({ message: "Usuário deletado com sucesso" });
});

module.exports = router;
