require("dotenv").config();
const express = require("express");
const { PrismaClient } = require("@prisma/client");
const { verificaTokenJWT } = require("../middlewares/token");

const prisma = new PrismaClient();
const reservaRoutes = express.Router();

// Rota para listar reservas
reservaRoutes.get("/", async (req, res) => {
    try {
        const reservas = await prisma.reserva.findMany({
            include: { usuario: true } // Inclui os dados do usuário relacionado
        });
        res.json(reservas);
    } catch (error) {
        res.status(500).json({ error: "Erro ao listar reservas", details: error.message });
    }
});

// Rota para criar reserva
reservaRoutes.post("/criar", verificaTokenJWT, async (req, res) => {
    try {
        // req.user foi preenchido pelo middleware verificaTokenJWT
        const idUsuario = req.user.id;
        // Busca o usuário para preencher o nome completo automaticamente
        const usuario = await prisma.usuario.findUnique({
            where: { idUsuario }
        });
        if (!usuario) {
            return res.status(404).json({ error: "Usuário não encontrado" });
        }
        const { data, preferencia, telefone, qtdpessoas } = req.body;
        const reserva = await prisma.reserva.create({
            data: {
                data,
                preferencia,
                telefone,
                qtdpessoas,
                Usuario_idUsuario: idUsuario
            }
        });
        // Retorna a reserva criada e o nome completo do usuário
        res.json({ reserva, nomeCompleto: usuario.nome });
    } catch (error) {
        res.status(500).json({ error: "Erro ao criar reserva", details: error.message });
    }
});

// Rota para atualizar reserva
reservaRoutes.put("/atualizar/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { data, preferencia, telefone, qtdpessoas } = req.body;

        const idReserva = parseInt(id);
        if (isNaN(idReserva)) {
            return res.status(400).json({ error: "ID inválido. Deve ser um número inteiro." });
        }

        const reserva = await prisma.reserva.update({
            where: { idReserva },
            data: { data, preferencia, telefone, qtdpessoas }
        });

        res.json(reserva);
    } catch (error) {
        res.status(500).json({ error: "Erro ao atualizar reserva", details: error.message });
    }
});

// Rota para deletar reserva
reservaRoutes.delete("/deletar/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const idReserva = parseInt(id);
        if (isNaN(idReserva)) {
            return res.status(400).json({ error: "ID inválido. Deve ser um número inteiro." });
        }

        await prisma.reserva.delete({
            where: { idReserva }
        });

        res.json({ message: "Reserva deletada com sucesso" });
    } catch (error) {
        res.status(500).json({ error: "Erro ao deletar reserva", details: error.message });
    }
});

module.exports = reservaRoutes;

