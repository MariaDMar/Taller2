/* Interacción Usuario */

var agregarUser = document.querySelector('#agregarUsuario');
var quitarUser = document.querySelector('#restarUsuario');
var usuario = document.querySelector('#usuario');

var valorUsuario = 0;

agregarUser.addEventListener('click', agregarUsuario);

function agregarUsuario() {
    valorUsuario++;
    usuario.innerHTML = valorUsuario;
}

quitarUser.addEventListener('click', quitarUsuario);

function quitarUsuario() {
    valorUsuario--;

    if (valorUsuario < 0) {
        valorUsuario = 0;
    }
    usuario.innerHTML = valorUsuario;
}

/* Interacción Transacciones */

var agregarTrans = document.querySelector('#agregarTransa');
var quitarTrans = document.querySelector('#restarTransa');
var transaccion = document.querySelector('#transa');

var valorTrans = 0;

agregarTrans.addEventListener('click', agregarTransaccion);

function agregarTransaccion() {
    valorTrans++;
    transaccion.innerHTML = valorTrans;
}

quitarTrans.addEventListener('click', quitarTransaccion);

function quitarTransaccion() {
    valorTrans--;

    if (valorTrans < 0) {
        valorTrans = 0;
    }
    transaccion.innerHTML = valorTrans;
}

/* Interacción Nómina */

var agregarNom = document.querySelector('#agregarNomina');
var quitarNom = document.querySelector('#restarNomina');
var nomina = document.querySelector('#nomina');

var valorNomina = 0;

agregarNom.addEventListener('click', agregarNomina);

function agregarNomina() {
    valorNomina++;
    nomina.innerHTML = valorNomina;
}

quitarNom.addEventListener('click', quitarNomina);

function quitarNomina() {
    valorNomina--;

    if (valorNomina < 0) {
        valorNomina = 0;
    }
    nomina.innerHTML = valorNomina;
}

/* Interacción Estaciones */

var agregarEst = document.querySelector('#agregarEsta');
var quitarEst = document.querySelector('#restarEsta');
var estacion = document.querySelector('#estacion');

var valorEst = 0;

agregarEst.addEventListener('click', agregarEstacion);

function agregarEstacion() {
    valorEst++;
    estacion.innerHTML = valorNomina;
}

quitarEst.addEventListener('click', quitarEstacion);

function quitarEstacion() {
    valorEst--;

    if (valorEst < 0) {
        valorEst = 0;
    }
    estacion.innerHTML = valorEst;
}

/*PLUS*/

var btnCotizar = document.querySelector('#btnCotizar');

btnCotizar.addEventListener('click', cotizar);

var precio = 0;

var data = {};

function cotizar() {

    var precioUsuario = valorUsuario * 1000;
    var precioTransaccion = valorTrans * 500;
    var precioNomina = valorNomina * 1000;
    var precioEstacion = valorEst * 500;

    precio = precioUsuario + precioTransaccion + precioNomina + precioEstacion;

    console.log(precio);

    data = {pr: precio};

}
