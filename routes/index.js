const express = require('express');
const verifyToken = require('../middlewares/verifyToken');
const router = express.Router();

const {crearUsuario, listarUsuarios, login, updateUsuario, eliminarUsuario} = require ('../controllers/usuarioController');

router.post('/usuarios/crearUser', [verifyToken], crearUsuario);
router.post('/usuarios/eliminarUser', [verifyToken], eliminarUsuario);
router.post('/usuarios/', login);
router.post('/usuarios/updateUser', verifyToken, updateUsuario);
router.get('/usuarios', [verifyToken],  listarUsuarios);

module.exports = router;