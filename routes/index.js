const express = require('express');
const verifyToken = require('../middlewares/verifyToken');
const router = express.Router();

const {crearUsuario, listarUsuarios, login} = require ('../controllers/usuarioController');

router.post('/usuarios/crearUser', [verifyToken], crearUsuario);
router.post('/usuarios/', login);
router.get('/usuarios', [verifyToken],  listarUsuarios);

module.exports = router;