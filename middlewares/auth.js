const jwt = require('jsonwebtoken');

const Auth = (roles) => (req, res, next) => {
    try {
        const token = req.header('Authorization').slice(7);
        const decode = jwt.verify(token, 'schoole-web-token');

        roles.includes(decode.role) ? next() : res.status(401).json({ status: false, message: 'Authentication required.' });

    } catch (err) { return res.status(401).json({ status: false, message: 'Authentication required.' }) };
}

module.exports = Auth 