//importar el módulo express
const express = require('express');

//crear la variable app usando express
const app = express();


const motorRender = require('express-handlebars');

//instalar Mongo
var MongoClient =require('mongodb').MongoClient;
var assert = require('assert');
const app = express();
//Conection URL
const url= 'mongodb://localhost:27017';
const dbName = 'wxmanager';
//Create Clietn Object
const client = new MongoClient(url);
//connect 
client.connect(function(err){
assert.equal(null,err);
console.log("Estamos conectados");
//Conect to database
const db=client.db(dbName);
const productos= db.collection('productos');
productos.find({}, {sort:['price']}).toArray(function(err,docs){
 assert.equal(null,err);
 console.log("encontramos atlantis");
 console.log(docs.length);

 docs.forEach(function(prod){
     console.log(prod.price);
 })
});

client.close();

});


//configurar la carpeta public como publica
app.use(express.static('public'));

//configura handlebars
app.engine('handlebars', motorRender());
app.set('view engine', 'handlebars');

//configurar la ruta inicial
app.get('/home', function(req, res){
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