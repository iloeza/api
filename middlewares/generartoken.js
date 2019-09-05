const jwt = require('jsonwebtoken');

const private_key = "ñaklsdj";

const crearToken = ({usuario, _id, rol, password}) =>{
    const payload = {
        _id,
        usuario,
        rol,
        password
    }

    return jwt.sign(payload, private_key, {expiresIn: '1h'});
}

module.exports = crearToken;