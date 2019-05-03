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

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'wxmanager';

// Create a new MongoClient
const client = new MongoClient(url, { useNewUrlParser: true });

var db = null;

// Use connect method to connect to the Server
client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

   db = client.db(dbName);
});

//configurar la ruta inicial
app.get('/', function (req, res) {
    res.render('home');
});

//arreglo para productos

var paquetes = require('./productos')

app.get('/precios', function (req, res) {

    const collection = db.collection('productos');

    //recorre base de datos

    collection.find({}).toArray(function(err, docs) {
        assert.equal(err, null);

        var contexto = {
            titulo: 'titulo',
            productos: docs
        }
    
        res.render('precios', contexto);
    
        console.log('leyo precios');
      });

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