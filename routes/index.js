const express = require('express');
const router = express.Router();

const crearUsuario = require ('../controllers/usuarioController');

router.post('/usuarios', crearUsuario);

module.exports = router;