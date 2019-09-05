const express = require('express');
const router = express.Router();

const {crearUsuario, listarUsuarios, login} = require ('../controllers/usuarioController');

router.post('/usuarios/crearUser', crearUsuario);
router.post('/usuarios/login', login);
router.get('/usuarios', listarUsuarios);

module.exports = router;