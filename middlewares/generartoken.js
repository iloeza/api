const jwt = require('jsonwebtoken');

const private_key = "ñaklsdj";

const crearToken = ({usuario, _id, rol}) =>{
    const payload = {
        _id,
        usuario,
        rol,
    }
    return jwt.sign(payload, private_key, {expiresIn: '1h'});
}

module.exports = crearToken;