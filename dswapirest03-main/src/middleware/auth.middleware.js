const admin = require('../firebase');
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET || 'hola123';

async function authenticate(req, res, next) {
    const auth = req.headers.authorization;
    if (!auth || !auth.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'no autorizado' });
    }

    const token = auth.split(' ')[1];

    // Intentar verificación con Firebase si está inicializado
    if (admin && admin.auth) {
        try {
            const decoded = await admin.auth().verifyIdToken(token);
            req.user = {
                uid: decoded.uid,
                email: decoded.email,
                name: decoded.name || null,
                firebase: decoded,
            };
            return next();
        } catch (error) {
            // Si falla la verificación con Firebase, intentamos fallback a JWT local
            console.warn('Verificación Firebase falló, intentando JWT local:', error && error.message);
        }
    }

    // Fallback: verificar JWT local (mantener compatibilidad con sistema anterior)
    try {
        const payload = jwt.verify(token, JWT_SECRET);
        req.userId = payload.id || payload.uid || null;
        req.user = { id: req.userId, username: payload.username || payload.email || null };
        return next();
    } catch (err) {
        console.error('JWT local inválido:', err && err.message);
        return res.status(401).json({ message: 'no autorizado' });
    }
}

module.exports = {
    authenticate,
};