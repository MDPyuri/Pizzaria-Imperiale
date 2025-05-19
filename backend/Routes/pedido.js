require("dotenv").config();
const express = require("express");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const pedidoRoutes = express.Router();

// Rota para listar pedidos
pedidoRoutes.get("/", async (req, res) => {
    try {
        const pedidos = await prisma.pedido.findMany({
            include: { usuario: true, endereco: true, pagamento: true, itensProduto: true }
        });
        res.json(pedidos);
    } catch (error) {
        res.status(500).json({ error: "Erro ao listar pedidos", details: error.message });
    }
});

// Rota para criar pedido
pedidoRoutes.post("/criar", async (req, res) => {
    try {
        const { data, valor, Usuario_idUsuario, Endereco_idEndereco, Pagamento_idpagamento } = req.body;
        const pedido = await prisma.pedido.create({
            data: { data, valor, Usuario_idUsuario, Endereco_idEndereco, Pagamento_idpagamento }
        });
        res.json(pedido);
    } catch (error) {
        res.status(500).json({ error: "Erro ao criar pedido", details: error.message });
    }
});

// Rota para atualizar pedido
pedidoRoutes.put("/atualizar/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { data, valor, Endereco_idEndereco, Pagamento_idpagamento } = req.body;

        const idPedido = parseInt(id);
        if (isNaN(idPedido)) {
            return res.status(400).json({ error: "ID inválido. Deve ser um número inteiro." });
        }

        const pedido = await prisma.pedido.update({
            where: { idPedido },
            data: { data, valor, Endereco_idEndereco, Pagamento_idpagamento }
        });

        res.json(pedido);
    } catch (error) {
        res.status(500).json({ error: "Erro ao atualizar pedido", details: error.message });
    }
});

// Rota para deletar pedido
pedidoRoutes.delete("/deletar/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const idPedido = parseInt(id);
        if (isNaN(idPedido)) {
            return res.status(400).json({ error: "ID inválido. Deve ser um número inteiro." });
        }

        await prisma.pedido.delete({
            where: { idPedido }
        });

        res.json({ message: "Pedido deletado com sucesso" });
    } catch (error) {
        res.status(500).json({ error: "Erro ao deletar pedido", details: error.message });
    }
});

// Rota para associar um endereço a um pedido
pedidoRoutes.put("/associar-endereco/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { Endereco_idEndereco } = req.body;

        const idPedido = parseInt(id);
        if (isNaN(idPedido)) {
            return res.status(400).json({ error: "ID inválido. Deve ser um número inteiro." });
        }

        const pedido = await prisma.pedido.update({
            where: { idPedido },
            data: { Endereco_idEndereco }
        });

        res.json(pedido);
    } catch (error) {
        res.status(500).json({ error: "Erro ao associar endereço ao pedido", details: error.message });
    }
});

module.exports = pedidoRoutes;
