const usuariosModel = require('../models/usuarios');
const autenticacion = require('../middlewares/autenticacion');
const crearToken = require('../middlewares/generartoken');

const crearUsuario = async (req, res) => {
    const usuario = await usuariosModel.create(req.body)
        .catch(e => res.status(400).json(e));
    res.render('usuarioCreado');
}

const listarUsuarios = async (req, res) => {
    const usuarios = await usuariosModel.find({});
    res.status(200).json(usuarios);
}

const login = (req, res) => {
    autenticacion(req.body).then((usuario) => {
        const token = crearToken(usuario);
        // res.status(200).json({
        //     token,
        //     message: "Autenticacion exitosa"
        res.header("authToken", token);
        res.render('logeado');
        
        // });
    }).catch(e => {
        // res.status(400).json({ message: "Autenticacion erronea" });
        res.send('Autenticacion erronea');
    })
}

module.exports = {
    crearUsuario,
    listarUsuarios,
    login
}
