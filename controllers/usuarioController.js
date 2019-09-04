const usuariosModel = require('../models/usuarios');

const crearUsuario = async (req, res) => {
    const usuario = await usuariosModel.create(req.body)
        .catch(e => res.status(400).json(e));
    res.status(201).json(usuario);
}

const listarUsuarios = async (req, res) =>{
    const usuarios = await usuariosModel.find({});
    res.status(200).json(usuarios);
}

module.exports = {
    crearUsuario,
    listarUsuarios
}
