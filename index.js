//importar el módulo express
var express = require('express');

//crear la variable app usando express
var app = express();


var motorRender = require('express-handlebars');
//configurar la carpeta public como publica
app.use(express.static('public'));

//configura handlebars
app.engine('handlebars', motorRender());
app.set('view engine', 'handlebars');

//configurar la ruta inicial
app.get('/', function(req, res){
res.render('home');
});

app.get('/precios', function(req, res){
    res.render('precios');
    console.log('leyo precios');
    });
    

app.listen(3000, function(){
    console.log('Hola');
});