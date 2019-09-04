const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = require('./routes');


//Settings
const PORT = 3000;
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use('/api', router);


app.get('/', (req, res) => {
    res.json({ "title": "Hello world" });
})


//iniciar db
mongoose.connect('mongodb://localhost:27017/usuarios', { useNewUrlParser: true })
    .then(() => console.log("Conectado a MongoDB 🚀"))
    .catch((err) => console.log(err));

//Iniciar servidor
app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`)
});