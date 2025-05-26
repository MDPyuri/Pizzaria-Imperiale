require("dotenv").config();
const express = require("express");
const { PrismaClient } = require("@prisma/client");
const jwt = require("jsonwebtoken");

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

// Rota para login de usuário
usuarioRoutes.post("/login", async (req, res) => {
    try {
        const { email, senha } = req.body;
        const usuario = await prisma.usuario.findUnique({
            where: { email }
        });

        if (!usuario || usuario.senha !== senha) {
            return res.status(401).json({ error: "Email ou senha inválidos" });
        }

        // Gerar token JWT temporário (expira em 1h)
        const token = jwt.sign(
            { idUsuario: usuario.idUsuario, email: usuario.email },
            process.env.JWT_SECRET || "segredo_padrao", // Use uma chave secreta do .env
            { expiresIn: "3h" }
        );

        res.json({ usuario, token });
    } catch (error) {
        res.status(500).json({ error: "Erro ao realizar login", details: error.message });
    }
});

module.exports = usuarioRoutes;
