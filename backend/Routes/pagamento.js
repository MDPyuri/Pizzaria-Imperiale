require('dotenv').config();
const express = require('express');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const pagamentoRoutes = express.Router();

// Rota para listar pagamentos
pagamentoRoutes.get('/', async (req, res) => {
    try {
        const pagamentos = await prisma.pagamento.findMany();
        res.json(pagamentos);
    } catch (error) {
        res.status(500).json({
            error: 'Erro ao listar pagamentos',
            details: error.message,
        });
    }
});

// Rota para criar pagamento
pagamentoRoutes.post('/criar', async (req, res) => {
    try {
        const { tipo, pago, valor, data, Usuario_idUsuario } = req.body;

        // Validação dos campos obrigatórios
        if (!tipo || !pago || !valor || !data || !Usuario_idUsuario) {
            return res.status(400).json({
                error: 'Campos obrigatórios: tipo, pago, valor, data, Usuario_idUsuario',
            });
        }

        const pagamento = await prisma.pagamento.create({
            data: {
                tipo,
                pago,
                valor: parseFloat(valor),
                data: new Date(data),
                Usuario_idUsuario: parseInt(Usuario_idUsuario),
            },
        });
        res.json(pagamento);
    } catch (error) {
        res.status(500).json({
            error: 'Erro ao criar pagamento',
            details: error.message,
        });
    }
});

// Rota para atualizar pagamento
pagamentoRoutes.put('/atualizar/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { tipo, pago } = req.body;

        const idPagamento = parseInt(id);
        if (isNaN(idPagamento)) {
            return res
                .status(400)
                .json({ error: 'ID inválido. Deve ser um número inteiro.' });
        }

        const pagamento = await prisma.pagamento.update({
            where: { idPagamento },
            data: { tipo, pago },
        });

        res.json(pagamento);
    } catch (error) {
        res.status(500).json({
            error: 'Erro ao atualizar pagamento',
            details: error.message,
        });
    }
});

// Rota para deletar pagamento
pagamentoRoutes.delete('/deletar/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const idPagamento = parseInt(id);
        if (isNaN(idPagamento)) {
            return res
                .status(400)
                .json({ error: 'ID inválido. Deve ser um número inteiro.' });
        }

        await prisma.pagamento.delete({
            where: { idPagamento },
        });

        res.json({ message: 'Pagamento deletado com sucesso' });
    } catch (error) {
        res.status(500).json({
            error: 'Erro ao deletar pagamento',
            details: error.message,
        });
    }
});

module.exports = pagamentoRoutes;
