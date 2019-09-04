const express = require('express');
const app = express();
const morgan = require('morgan');

//Settings
app.set('port', 3000);

//rutas
app.get('/', (req, res) =>{
    res.json({"title":"Hello world"});
})

//middles
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Iniciar servidor
app.listen(3000, () => {
    console.log(`Server on port ${3000}`)
});