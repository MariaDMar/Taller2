//importar el módulo express
const express = require('express');

//crear la variable app usando express
const app = express();


const motorRender = require('express-handlebars');
//configurar la carpeta public como publica
app.use(express.static('public'));

//configura handlebars
app.engine('handlebars', motorRender());
app.set('view engine', 'handlebars');

//configurar la ruta inicial
app.get('/', function (req, res) {
    res.render('home');
});

//arreglo para productos

var paquetes = require('./productos')

app.get('/precios', function (req, res) {

    var contexto = {
        titulo: 'titulo',
        productos: paquetes
    }

    res.render('precios', contexto);

    console.log('leyo precios');
});

//configurar pagina de pagos

app.get('/pagos', function (req, res) {
    res.render('pagos');
});

app.get('/personalizar', function (req, res) {

    var contexto = {
    }

    res.render('personalizar', contexto);
});

app.get('/cotizar', function (req, res) {

    var contexto = {
        
    }

    res.render('precio', contexto);
});


//configurar la ruta inicial

app.post('/cotizar', function (req, res) {

    var precio = req.body.pr;

    console.log(precio);

    res.redirect('/precio');
});

app.listen(3000, function () {
    console.log('Hola');
});