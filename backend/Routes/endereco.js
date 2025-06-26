require('dotenv').config();
const express = require('express');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const enderecoRoutes = express.Router();

// Rota para listar endereços
enderecoRoutes.get('/', async (req, res) => {
    try {
        const enderecos = await prisma.endereco.findMany();
        res.json(enderecos);
    } catch (error) {
        res.status(500).json({
            error: 'Erro ao listar endereços',
            details: error.message,
        });
    }
});

// Rota para criar endereço
enderecoRoutes.post('/criar', async (req, res) => {
    try {
        const { logradouro, numero, bairro, cep, complemento, pontoRef } =
            req.body;

        // Validação dos campos obrigatórios
        if (!logradouro || !numero || !bairro || !cep) {
            return res.status(400).json({
                error: 'Campos obrigatórios não preenchidos',
                details:
                    'Os campos logradouro, numero, bairro e cep são obrigatórios',
            });
        }

        const endereco = await prisma.endereco.create({
            data: { logradouro, numero, bairro, cep, complemento, pontoRef },
        });
        res.json(endereco);
    } catch (error) {
        res.status(500).json({
            error: 'Erro ao criar endereço',
            details: error.message,
        });
    }
});

// Rota para atualizar endereço
enderecoRoutes.put('/atualizar/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { logradouro, numero, bairro, cep, complemento, pontoRef } =
            req.body;

        const idEndereco = parseInt(id);
        if (isNaN(idEndereco)) {
            return res
                .status(400)
                .json({ error: 'ID inválido. Deve ser um número inteiro.' });
        }

        const endereco = await prisma.endereco.update({
            where: { idEndereco },
            data: { logradouro, numero, bairro, cep, complemento, pontoRef },
        });

        res.json(endereco);
    } catch (error) {
        res.status(500).json({
            error: 'Erro ao atualizar endereço',
            details: error.message,
        });
    }
});

// Rota para deletar endereço
enderecoRoutes.delete('/deletar/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const idEndereco = parseInt(id);
        if (isNaN(idEndereco)) {
            return res
                .status(400)
                .json({ error: 'ID inválido. Deve ser um número inteiro.' });
        }

        await prisma.endereco.delete({
            where: { idEndereco },
        });

        res.json({ message: 'Endereço deletado com sucesso' });
    } catch (error) {
        res.status(500).json({
            error: 'Erro ao deletar endereço',
            details: error.message,
        });
    }
});

module.exports = enderecoRoutes;
