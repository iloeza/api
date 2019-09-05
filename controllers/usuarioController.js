const usuariosModel = require('../models/usuarios');
const autenticacion = require('../middlewares/autenticacion');
const crearToken = require('../middlewares/generartoken');

const crearUsuario = async (req, res) => {
    const usuario = await usuariosModel.create(req.body)
        .catch(e => res.status(400).json(e));
    res.status(201).json(usuario);
}

const listarUsuarios = async (req, res) => {
    const usuarios = await usuariosModel.find({});
    res.status(200).json(usuarios);
}

const login = (req, res) => {
    autenticacion(req.body).then((usuario) => {
        if (!usuario) res.send(404).json({ message: "Usuario no encontrado" });
        const token = crearToken(usuario);
        res.status(200).json({ token });
    }).catch(e => {
        res.status(400).json(e)
    })
}

module.exports = {
    crearUsuario,
    listarUsuarios,
    login
}
