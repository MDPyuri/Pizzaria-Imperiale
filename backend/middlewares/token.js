const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const JWT_SECRET = process.env.JWT_SECRET || 'sua_chave_secreta';

const JWT_EXPIRES_IN = '1h';

//function para gerar o token JWT
function generateToken(payload) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
}

// Middleware para enviar o token JWT no cookie
function enviaTokenJWT(req, res, next) {

  if (!req.user) {
    return res.status(401).json({ message: 'Usuário não autenticado' });
  }

  // Gera o token com os dados do usuário
  const token = generateToken({ id: req.user.id, role: req.user.role });

  // Envia o token em um cookie HTTP Only (não acessível via JS no navegador)
  res.cookie('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production', // Só HTTPS em produção
    maxAge: 60 * 60 * 1000, // 1 hora em milissegundos
    sameSite: 'strict'
  });

  next();
}

// Middleware para verificar o token JWT
function verificaTokenJWT(req, res, next) {
  
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: 'Token não fornecido' });
  }

  try {
    // Verifica e decodifica o token
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Token inválido ou expirado' });
  }
}

module.exports = {
  enviaTokenJWT,
  verificaTokenJWT,
  generateToken
};