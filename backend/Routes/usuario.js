require("dotenv").config();
const express = require("express");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const usuarioRoutes = express.Router();

// Rota para listar usuários
usuarioRoutes.get("/", async (req, res) => {
    try {
        const usuarios = await prisma.usuario.findMany();
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ error: "Erro ao listar usuários", details: error.message });
    }
});

// Rota para criar usuário
usuarioRoutes.post("/criar", async (req, res) => {
    try {
        const { nome, telefone, cpf, email, senha } = req.body;
        const usuario = await prisma.usuario.create({
            data: { nome, telefone, cpf, email, senha }
        });
        res.json(usuario);
    } catch (error) {
        res.status(500).json({ error: "Erro ao criar usuário", details: error.message });
    }
});

// Rota para atualizar usuário
usuarioRoutes.put("/atualizar/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { nome, email } = req.body;

        // Validação do parâmetro id
        const idUsuario = parseInt(id);
        if (isNaN(idUsuario)) {
            return res.status(400).json({ error: "ID inválido. Deve ser um número inteiro." });
        }

        const usuario = await prisma.usuario.update({
            where: { idUsuario }, // Usa o idUsuario validado
            data: { nome, email }
        });

        res.json(usuario);
    } catch (error) {
        res.status(500).json({ error: "Erro ao atualizar usuário", details: error.message });
    }
});

// Rota para deletar usuário
usuarioRoutes.delete("/deletar/:id", async (req, res) => {
    try {
        const { id } = req.params;
        await prisma.usuario.delete({
            where: { idUsuario: parseInt(id) } // Alterado para usar idUsuario
        });
        res.json({ message: "Usuário deletado com sucesso" });
    } catch (error) {
        res.status(500).json({ error: "Erro ao deletar usuário", details: error.message });
    }
});

module.exports = usuarioRoutes;
