const jwt = require('jsonwebtoken');

const generateMobileToken = (user) => {
    const payload = {
        id: user.id,
        name: user.name,
        role: user.role,
    };

    const options = {
        expiresIn: '7d', // Token válido por 7 dias
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, options);

    // Retorna o token em um formato adequado para o SecureStore
    return {
        token,
        issuedAt: new Date().toISOString(),
        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
    };
};

module.exports = generateMobileToken;
