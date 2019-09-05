const usuarios = require('../models/usuarios');
const bcrypt = require('bcrypt');

const autenticacion = ({ usuario, password }) => {
    return new Promise((resolve, reject) => {
        usuarios.findOne({ usuario }).then((usuario) => {
            if (!usuario) reject( new Error("El usuario no existe"));
            bcrypt.compare(password, usuario.password, (err, res) => {
                if (!res) reject(new Error("Las contraseñas no coinciden"));
                resolve(usuario);
            })
        }).catch((err) => {
            reject(err)
        })
    })
}

module.exports = autenticacion;