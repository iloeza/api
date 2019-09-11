const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = require('./routes');
const path = require('path');


//Settings
const PORT = 3000;
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use('/api', router);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.render('index');
})

app.get('/usuario', (req, res) =>{
    res.render('logeado');
})

app.get('/admin', (req, res) =>{
    res.render('adminOptns');
})
//Actualizar usuarios
app.get('/updateUser', (req, res) =>{
    res.render('updateUsuario');
})

app.get('/Modificado', (req, res) =>{
    res.render('Modificado');
})

//Crear usuarios
app.get('/crearUser', (req, res) =>{
    res.render('crearUsuario');
})

app.get('/Creado', (req, res) =>{
    res.render('usuarioCreado');
})

//Eliminar usuarios
app.get('/eliminarUser', (req, res) =>{
    res.render('eliminarUsuario');
})
app.get('/Eliminado', (req, res) =>{
    res.render('Eliminado');
})



//iniciar db
mongoose.connect('mongodb://localhost:27017/usuarios', { useNewUrlParser: true })
    .then(() => console.log("Conectado a MongoDB 🚀"))
    .catch((err) => console.log(err));

//Iniciar servidor
app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`)
});