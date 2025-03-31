const jwt = require('jsonwebtoken');

const Auth = (req, res, next) => {
    try {
        console.log("ROLE", req.path);
        
        const token = req.header('Authorization').slice(7);
        const decode = jwt.verify(token, 'schoole-web-token');

        if (!decode) {
            return res.status(401).json({ status: false, message: 'Authentication required.' });
        }

        next();

    } catch (err) { 
        return res.status(401).json({ status: false, message: 'Authentication required.' }) 
    };
}

module.exports = Auth 