const usuariosModel = require('../models/usuarios');
const autenticacion = require('../middlewares/autenticacion');
const crearToken = require('../middlewares/generartoken');
const encriptar = require('../middlewares/encriptar');

const crearUsuario = async (req, res) => {
    const usuario = await usuariosModel.create(req.body);
    if (usuario) res.status(200).json({ message: "exito" });
}

const listarUsuarios = async (req, res) => {
    const usuarios = await usuariosModel.find({});
    res.status(200).json(usuarios);
}

const eliminarUsuario = async (req, res) => {
    const query = req.body.usuario;
    const usuario = await usuariosModel.findOneAndDelete({ usuario: query }).then(() => {
        return res.status(200).json({message: "usuario eliminado"});
    }).catch(e => res.status(400).json(e));;
    if (!usuario) res.status(404).json({ message: "Usuario no encontrado" });
}
const updateUsuario = async (req, res) => {
    const query = req.body.usuario;
    let nwPwd = encriptar(req);
    const usuario = await usuariosModel.findOneAndUpdate({ usuario: query }, {
        usuario: req.body.usuario,
        password: nwPwd,
        rol: req.body.rol
    }, { new: true }).catch(e => res.status(400).json(e));
    if (!usuario) res.status(404).json({ message: "Usuario no encontrado" });
    res.status(200).json({ message: "exito" });
}

const login = (req, res) => {
    console.log(req.body)
    autenticacion(req.body).then((usuario) => {
        const token = crearToken(usuario);
        res.status(200).json({
            token,
            message: "Autenticacion exitosa"
        });
    }).catch(e => {
        res.status(400).json({ 'message': 'error' });
    })
}

module.exports = {
    crearUsuario,
    listarUsuarios,
    updateUsuario,
    eliminarUsuario,
    login
}
