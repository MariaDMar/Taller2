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
app.get('/', function(req, res){
res.render('home');
});

//arreglo para productos

var paquetes = require('./productos')

app.get('/precios', function(req, res){ 
    
    var contexto = {
        titulo: 'titulo',
        productos: paquetes
    }
    
    res.render('precios', contexto);
    
    console.log('leyo precios');
    });
    

app.listen(3000, function(){
    console.log('Hola');
});