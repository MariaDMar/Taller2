
/* Interacción Transacciones */

var agregarTrans = document.querySelector('#agregarT');
var quitarTrans = document.querySelector('#quitarT');
var transaccion = document.querySelector('#transaccion');

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

/* Interacción Personas */

var agregarPer = document.querySelector('#agregarP');
var quitarPer = document.querySelector('#quitarP');
var persona = document.querySelector('#persona');

var valorPersona = 0;

agregarPer.addEventListener('click', agregarPersona);

function agregarPersona() {
    valorPersona++;
    persona.innerHTML = valorPersona;
}

quitarPer.addEventListener('click', quitarPersona);

function quitarPersona() {
    valorPersona--;

    if (valorPersona < 0) {
        valorPersona = 0;
    }
    persona.innerHTML = valorPersona;
}

/* Cambio de Pagina */


var btnCotizar = document.querySelector('#btnCotizar');

btnCotizar.addEventListener('click', cotizar);

var precio = 0;

var data = {};

function cotizar() {

    var precioPersona = valorPersona * 1000;
    var precioTrans = valorTrans * 500;

    precio = precioPersona + precioTrans;

    console.log(precio);

    data = {pr: precio};

    /*
    fetch("/cotizar",
        {
            method: 'POST',
            body:  JSON.stringify(data)
        })
        .then(function (res) { console.log(res) })
        .catch(function (res) { console.log(res) });
        */
}