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


//iniciar db
mongoose.connect('mongodb://localhost:27017/usuarios', { useNewUrlParser: true })
    .then(() => console.log("Conectado a MongoDB 🚀"))
    .catch((err) => console.log(err));

//Iniciar servidor
app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`)
});