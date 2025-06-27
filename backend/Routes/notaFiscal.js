require('dotenv').config();
const express = require('express');
const { PrismaClient } = require('@prisma/client');
const PDFDocument = require('pdfkit');

const prisma = new PrismaClient();
const notaFiscalRoutes = express.Router();

// Rota para gerar nota fiscal em PDF
notaFiscalRoutes.get('/gerar/:pedidoId', async (req, res) => {
    try {
        const { pedidoId } = req.params;

        // Busca dados completos do pedido
        const pedido = await prisma.pedido.findUnique({
            where: { idPedido: parseInt(pedidoId) },
            include: {
                usuario: true,
                endereco: true,
                pagamento: true,
                itensProduto: {
                    include: {
                        produto: true,
                    },
                },
            },
        });

        if (!pedido) {
            return res.status(404).json({ error: 'Pedido não encontrado' });
        }

        // Cria o documento PDF
        const doc = new PDFDocument({ margin: 50 });

        // Configura headers para download
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader(
            'Content-Disposition',
            `attachment; filename=nota-fiscal-${pedidoId}.pdf`
        );

        // Pipe do PDF para a resposta
        doc.pipe(res);

        // Cabeçalho da nota fiscal
        doc.fontSize(20).text('PIZZARIA IMPERIALE', 50, 50, {
            align: 'center',
        });
        doc.fontSize(14).text('Nota Fiscal de Venda', 50, 80, {
            align: 'center',
        });
        doc.moveTo(50, 100).lineTo(550, 100).stroke();

        // Informações da empresa
        doc.fontSize(12).text('CNPJ: 12.345.678/0001-95', 50, 120);
        doc.text('Endereço: Rua das Pizzas, 123 - Centro', 50, 135);
        doc.text('Telefone: (11) 99999-9999', 50, 150);

        // Informações do pedido
        doc.fontSize(14).text('DADOS DO PEDIDO', 50, 180, { underline: true });
        doc.fontSize(12).text(`Número do Pedido: ${pedido.idPedido}`, 50, 200);
        doc.text(
            `Data: ${new Date(pedido.data).toLocaleString('pt-BR')}`,
            50,
            215
        );
        doc.text(`Cliente: ${pedido.usuario.nome}`, 50, 230);
        doc.text(`Telefone: ${pedido.usuario.telefone}`, 50, 245);

        // Endereço de entrega
        doc.fontSize(14).text('ENDEREÇO DE ENTREGA', 50, 275, {
            underline: true,
        });
        doc.fontSize(12).text(
            `${pedido.endereco.logradouro}, ${pedido.endereco.numero}`,
            50,
            295
        );
        if (pedido.endereco.complemento) {
            doc.text(`Complemento: ${pedido.endereco.complemento}`, 50, 310);
        }
        doc.text(`Bairro: ${pedido.endereco.bairro}`, 50, 325);
        doc.text(`CEP: ${pedido.endereco.cep}`, 50, 340);
        if (pedido.endereco.pontoRef) {
            doc.text(
                `Ponto de Referência: ${pedido.endereco.pontoRef}`,
                50,
                355
            );
        }

        // Tabela de produtos
        doc.fontSize(14).text('PRODUTOS', 50, 385, { underline: true });

        // Cabeçalho da tabela
        const tableTop = 410;
        doc.fontSize(10);
        doc.text('ITEM', 50, tableTop);
        doc.text('QTD', 250, tableTop);
        doc.text('VALOR UNIT.', 300, tableTop);
        doc.text('TOTAL', 400, tableTop);

        // Linha separadora
        doc.moveTo(50, tableTop + 15)
            .lineTo(500, tableTop + 15)
            .stroke();

        // Itens do pedido
        let yPosition = tableTop + 25;
        let subtotal = 0;

        pedido.itensProduto.forEach((item, index) => {
            const total = parseFloat(item.preco) * item.quantidade;
            subtotal += total;

            doc.text(item.produto.nome, 50, yPosition, {
                width: 180,
                height: 20,
            });
            doc.text(item.quantidade.toString(), 250, yPosition);
            doc.text(`R$ ${parseFloat(item.preco).toFixed(2)}`, 300, yPosition);
            doc.text(`R$ ${total.toFixed(2)}`, 400, yPosition);

            if (item.observacao) {
                yPosition += 15;
                doc.fontSize(8).fillColor('gray');
                doc.text(`Obs: ${item.observacao}`, 70, yPosition);
                doc.fillColor('black').fontSize(10);
            }

            yPosition += 20;
        });

        // Linha separadora antes do total
        doc.moveTo(50, yPosition).lineTo(500, yPosition).stroke();
        yPosition += 10;

        // Total
        doc.fontSize(12).text(
            `SUBTOTAL: R$ ${subtotal.toFixed(2)}`,
            350,
            yPosition
        );
        yPosition += 15;
        doc.fontSize(14).text(
            `TOTAL: R$ ${parseFloat(pedido.valor).toFixed(2)}`,
            350,
            yPosition,
            {
                underline: true,
            }
        );

        // Informações de pagamento
        yPosition += 40;
        doc.fontSize(14).text('FORMA DE PAGAMENTO', 50, yPosition, {
            underline: true,
        });
        yPosition += 20;
        doc.fontSize(12);

        let tipoPagamento = pedido.pagamento.tipo;
        switch (tipoPagamento) {
            case 'cartao_credito':
                tipoPagamento = 'Cartão de Crédito';
                break;
            case 'pix':
                tipoPagamento = 'PIX';
                break;
            case 'pagamento_entrega':
                tipoPagamento = 'Pagamento na Entrega';
                break;
        }

        doc.text(`Tipo: ${tipoPagamento}`, 50, yPosition);
        yPosition += 15;
        doc.text(`Status: ${pedido.pagamento.pago}`, 50, yPosition);

        // Rodapé
        yPosition += 50;
        doc.fontSize(10).fillColor('gray');
        doc.text(
            'Esta é uma nota fiscal simplificada gerada automaticamente.',
            50,
            yPosition,
            { align: 'center' }
        );
        doc.text(
            'Pizzaria Imperiale - Obrigado pela preferência!',
            50,
            yPosition + 15,
            { align: 'center' }
        );

        // Finaliza o documento
        doc.end();
    } catch (error) {
        console.error('Erro ao gerar nota fiscal:', error);
        res.status(500).json({
            error: 'Erro ao gerar nota fiscal',
            details: error.message,
        });
    }
});

module.exports = notaFiscalRoutes;
