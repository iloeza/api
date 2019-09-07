const jwt = require('jsonwebtoken');

const private_key = "ñaklsdj";

const privilegio = function(req, res, next) {
    console.log(req);
    const token = req.header('authToken');
    if (token) {
        jwt.verify(token, private_key, (err, decoded) => {
            if (err) return res.status(403).send({ message: "No0 tienes acceso" });
            if (decoded.rol == 'admin') next();
            else return res.status(403).send({message: "no00 tienes acceso"});
        })
    } else {
        res.status(403).send({message: "No000 tienes acceso"});
    }
}

module.exports = privilegio;