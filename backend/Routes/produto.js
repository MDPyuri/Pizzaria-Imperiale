require('dotenv').config();
const express = require('express');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const produtoRoutes = express.Router();

// Rota para listar produtos
produtoRoutes.get('/', async (req, res) => {
    try {
        const produtos = await prisma.produto.findMany();
        res.json(produtos);
    } catch (error) {
        res.status(500).json({
            error: 'Erro ao listar produtos',
            details: error.message,
        });
    }
});

// Rota para criar produto
produtoRoutes.post('/criar', async (req, res) => {
    try {
        const { nome, preco, descricao, imagem } = req.body;
        const produto = await prisma.produto.create({
            data: { nome, preco, descricao, imagem },
        });
        res.json(produto);
    } catch (error) {
        res.status(500).json({
            error: 'Erro ao criar produto',
            details: error.message,
        });
    }
});

// Rota para atualizar produto
produtoRoutes.put('/atualizar/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { nome, preco, descricao, imagem } = req.body;

        const idProduto = parseInt(id);
        if (isNaN(idProduto)) {
            return res
                .status(400)
                .json({ error: 'ID inválido. Deve ser um número inteiro.' });
        }

        const produto = await prisma.produto.update({
            where: { idProduto },
            data: { nome, preco, descricao, imagem },
        });

        res.json(produto);
    } catch (error) {
        res.status(500).json({
            error: 'Erro ao atualizar produto',
            details: error.message,
        });
    }
});

// Rota para deletar produto
produtoRoutes.delete('/deletar/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const idProduto = parseInt(id);
        if (isNaN(idProduto)) {
            return res
                .status(400)
                .json({ error: 'ID inválido. Deve ser um número inteiro.' });
        }

        await prisma.produto.delete({
            where: { idProduto },
        });

        res.json({ message: 'Produto deletado com sucesso' });
    } catch (error) {
        res.status(500).json({
            error: 'Erro ao deletar produto',
            details: error.message,
        });
    }
});

// Rota para buscar produtos por lista de IDs
produtoRoutes.post('/produtos-por-ids', async (req, res) => {
    try {
        const { ids } = req.body;

        // Converte os IDs para números inteiros
        const idsNumericos = ids
            .map((id) => parseInt(id))
            .filter((id) => !isNaN(id));

        // Busca os produtos no banco de dados
        const produtos = await prisma.produto.findMany({
            where: {
                idProduto: { in: idsNumericos },
            },
        });

        res.json(produtos);
    } catch (error) {
        res.status(500).json({
            error: 'Erro ao buscar produtos por IDs',
            details: error.message,
        });
    }
});

// Rota para criar itens do produto (associar produtos ao pedido)
produtoRoutes.post('/itens-produto/criar', async (req, res) => {
    try {
        const { itens } = req.body; // Array de { Produto_idProduto, Pedido_idPedido, quantidade, preco, observacao? }

        if (!Array.isArray(itens) || itens.length === 0) {
            return res
                .status(400)
                .json({ error: 'É necessário fornecer um array de itens' });
        }

        // Valida e prepara os dados
        const itensFormatados = itens.map((item) => {
            const {
                Produto_idProduto,
                Pedido_idPedido,
                quantidade,
                preco,
                observacao,
            } = item;

            if (
                !Produto_idProduto ||
                !Pedido_idPedido ||
                !quantidade ||
                !preco
            ) {
                throw new Error(
                    'Campos obrigatórios: Produto_idProduto, Pedido_idPedido, quantidade, preco'
                );
            }

            return {
                Produto_idProduto: parseInt(Produto_idProduto),
                Pedido_idPedido: parseInt(Pedido_idPedido),
                quantidade: parseInt(quantidade),
                preco: parseFloat(preco),
                observacao: observacao || null,
            };
        });

        // Cria todos os itens de uma vez
        const itensCriados = await prisma.itemProduto.createMany({
            data: itensFormatados,
        });

        res.json({
            message: 'Itens do produto criados com sucesso',
            count: itensCriados.count,
        });
    } catch (error) {
        res.status(500).json({
            error: 'Erro ao criar itens do produto',
            details: error.message,
        });
    }
});

module.exports = produtoRoutes;
