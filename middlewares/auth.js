const jwt = require('jsonwebtoken');

const Auth = (role) => (req, res, next) => {
    try {
        const token = req.header('Authorization').slice(7);
        const decode = jwt.verify(token, 'schoole-web-token');
        console.log("ROLE", role, decode.role);

        if (decode.role !== role) {
            return res.status(401).json({ status: false, message: 'Authentication required.' });
        }

        next();

    } catch (err) { return res.status(401).json({ status: false, message: 'Authentication required.' }) };
}

module.exports = Auth 