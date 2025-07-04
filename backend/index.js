require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

const cookieParser = require('cookie-parser');
app.use(cookieParser());

// Habilita CORS para o frontend
app.use(
    cors({
        origin: 'http://localhost:5173',
        credentials: true, // Permite cookies cross-origin
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization'],
    })
);

// Headers adicionais para garantir CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
        'Access-Control-Allow-Methods',
        'GET, POST, PUT, DELETE, OPTIONS'
    );
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }
    next();
});

// Middleware para processar JSON
app.use(express.json());

// Middleware de log para debug
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
    next();
});

// Importar rotas de usuário
const usuarioRoutes = require('./Routes/usuario');
app.use('/usuarios', usuarioRoutes);

// Importar rotas de reserva
const reservaRoutes = require('./Routes/reserva');
app.use('/reservas', reservaRoutes);

// Importar rotas de produto
const produtoRoutes = require('./Routes/produto');
app.use('/produtos', produtoRoutes);

// Importar rotas de pedido
const pedidoRoutes = require('./Routes/pedido');
app.use('/pedidos', pedidoRoutes);

// Importar rotas de endereço
const enderecoRoutes = require('./Routes/endereco');
app.use('/enderecos', enderecoRoutes);

// Importar rotas de pagamento
const pagamentoRoutes = require('./Routes/pagamento');
app.use('/pagamentos', pagamentoRoutes);

// Importar rotas de nota fiscal
const notaFiscalRoutes = require('./Routes/notaFiscal');
app.use('/nota-fiscal', notaFiscalRoutes);

// Iniciar o servidor
app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
