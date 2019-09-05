const usuarios = require('../models/usuarios');
const bcrypt = require('bcrypt');

const autenticacion = ({ usuario, password }) => {
    return new Promise((resolve, reject) => {
        usuarios.findOne({ usuario }).then((usuario) => {
            console.log(usuario)
            if (!usuario) reject(new Error("El usuario no existe"));
            bcrypt.compare(password, usuario.password, (err, res) => {
                console.log(password)
                console.log(usuario.password);
                if (!res) reject(new Error("Las contraseñas no coinciden"));
                resolve(usuario);
            })
        }).catch((err) => {
            reject(err)
        })
    })
}

module.exports = autenticacion;