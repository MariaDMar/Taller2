//importar el módulo express
const express = require('express');

//crear la variable app usando express
const app = express();


const motorRender = require('express-handlebars');


const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';


// Database Name
const dbName = 'wxmanager';

// Create a new MongoClient
const client = new MongoClient(url, { useNewUrlParser: true });

var db = null;


//configurar la carpeta public como publica
app.use(express.static('public'));

MongoClient.connect(`mongodb+srv://cluster0-ncaly.mongodb.net/wxmanager`, {

auth:{
    user: 'mariadmar',
    password: '678yes!'
},

function (err, client) {
    if(err) throw err;
    db = client.db('wxmanager');
    
    app.listen(process.env.PORT || 5000);
    
}

});



//configura handlebars
app.engine('handlebars', motorRender());
app.set('view engine', 'handlebars');

//instalando bodyparse

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.json());


/*
// Use connect method to connect to the Server
client.connect(function (err) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
    
    db = client.db(dbName);
});*/

//configurar la ruta inicial
app.get('/', function (req, res) {
    res.render('home');
});

//arreglo para productos

var paquetes = require('./productos')
//MI PAGINA DE PRECIOSSSSS
app.get('/precios', function (req, res) {
    
    const collection = db.collection('productos');
    
    
    var query = {};
    
    if (req.query.empleados) {
        query.empleados = parseInt(req.query.empleados);
    }
    
    if (req.query.transac) {
        query.transac = parseInt(req.query.transac);
    }
    
    if (req.query.horas) {
        query.horas = parseInt(req.query.horas);
    }
    
    
    
    const collectionPaquetes = db.collection('paquetes');
    //recorre base de datos
    
    collectionPaquetes.find(query).toArray(function (err, docs) {
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
    var contexto = {
        nombre: req.query.nombre,
        precio: req.query.precio,
    }
    res.render('pagos', contexto);
    
});

//configurar pagina tutoriales

app.get('/tutoriales', function (req, res) {
    res.render('tutoriales');
});

//pagina para guardar información de pagos en base de datos
app.post('/login', function (req, res) {
    console.log(req.body.enviaproduct);
    console.log(req.body);
    var r = req.body.enviaproduct;
    
    var pedido = {
        comprador: req.body.comprador,
        cedula: req.body.cedula,
        fecha: new Date(),
        estado: 'nuevo',
        productos: r
    };
    
    var collection = db.collection('pedidos');
    collection.insertOne(pedido, function (err) {
        assert.equal(err, null);
        console.log('pedido guardado');
        
    });
    res.redirect('/');
    
});


//PAGINA PERSONALIZAR

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
    
    console.log(req.body);
    
    //agregar base de datos
    var pedido = {
        correo: req.body.correo,
        numero: req.body.numero,
        direccion: req.body.direccion,
        fecha: new Date(),
        nNomina: req.body.nNomina,
        nTrans: req.body.nTrans,
        nUsuarios: req.body.nUsuarios,
        nEstaciones: req.body.nEstaciones,
        nPrecio: req.body.nPrecio,
    };
    
    var collection = db.collection('perdidosPersonalizados');
    collection.insertOne(pedido, function (err) {
        assert.equal(err, null);
        console.log('pedido personalizado guardado');
        
    });
    
    setTimeout(function () { res.redirect('/precios') }, 5000);
});

/*app.listen(3000, function () {
    console.log('Hola');
}); */