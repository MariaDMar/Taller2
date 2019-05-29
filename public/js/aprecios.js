var btnComprar = document.querySelectorAll('.btnComp');
var nombrePaquete = document.querySelector('#nombrePaquete').innerHTML;

for (let i = 0; i < btnComprar.length; i++) {
    const elem = btnComprar[i];
    elem.addEventListener('click', ()=>{
        var x = elem.getAttribute('data-name');
        console.log(x);
        console.log("ldodsuhifusdnvius");
        localStorage.setItem('listaProductos', JSON.stringify(x));
    
    })   
}
/* Interacción Usuario */

var agregarUser = document.querySelector('#agregarUsuario');
var quitarUser = document.querySelector('#restarUsuario');
var usuario = document.querySelector('#usuario');

var valorUsuario = 0;

agregarUser.addEventListener('click', agregarUsuario);

function agregarUsuario() {
    valorUsuario++;
    cotizar();
    usuario.innerHTML = valorUsuario;
    actualizarPedido();
}

quitarUser.addEventListener('click', quitarUsuario);

function quitarUsuario() {
    
    valorUsuario--;
    cotizar();

    if (valorUsuario < 0) {
        valorUsuario = 0;
    }
    usuario.innerHTML = valorUsuario;
    actualizarPedido();
}

/* Interacción Transacciones */

var agregarTrans = document.querySelector('#agregarTransa');
var quitarTrans = document.querySelector('#restarTransa');
var transaccion = document.querySelector('#transa');

var valorTrans = 0;

agregarTrans.addEventListener('click', agregarTransaccion);

function agregarTransaccion() {
    valorTrans++;
    cotizar();
    transaccion.innerHTML = valorTrans;
    actualizarPedido();
}

quitarTrans.addEventListener('click', quitarTransaccion);

function quitarTransaccion() {
    valorTrans--;
    cotizar();

    if (valorTrans < 0) {
        valorTrans = 0;
    }
    transaccion.innerHTML = valorTrans;
    actualizarPedido();
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
    cotizar();
    actualizarPedido();
}

quitarNom.addEventListener('click', quitarNomina);

function quitarNomina() {
    valorNomina--;
    cotizar();
    if (valorNomina < 0) {
        valorNomina = 0;
    }
    nomina.innerHTML = valorNomina;
    actualizarPedido();
}

/* Interacción Estaciones */

var agregarEst = document.querySelector('#agregarEsta');
var quitarEst = document.querySelector('#restarEsta');
var estacion = document.querySelector('#estacion');

var valorEst = 0;

agregarEst.addEventListener('click', agregarEstacion);

function agregarEstacion() {
    valorEst++;
    estacion.innerHTML = valorEst;
    cotizar();
    actualizarPedido();
}

quitarEst.addEventListener('click', quitarEstacion);

function quitarEstacion() {
    valorEst--;
    cotizar();

    if (valorEst < 0) {
        valorEst = 0;
    }
    estacion.innerHTML = valorEst;

    actualizarPedido();
}

/*PLUS*/

var btnCotizar = document.querySelector('#costo');

btnCotizar.addEventListener('click', cotizar);

var precio = 0;

var data = {};

function cotizar() {

var btnCotizar = document.querySelector('#valor');


    var precioUsuario = valorUsuario * 20000;
    var precioTransaccion = valorTrans * 300;
    var precioNomina = valorNomina * 3000;
    var precioEstacion = valorEst * 35000;

    precio = precioUsuario + precioTransaccion + precioNomina + precioEstacion;
    console.log(precio);
    btnCotizar.innerHTML = precio;
    data = {pr: precio};

}


//form

var inputNomina = document.querySelector('#input-nNomina');
var inputTrans = document.querySelector('#input-nTrans');
var inputUsuarios = document.querySelector('#input-nUsuarios');
var inputEst = document.querySelector('#input-nEstaciones');
var inputPrecio = document.querySelector('#input-precio');

function actualizarPedido(){
    inputNomina.value = valorNomina;
    inputTrans.value = valorTrans;
    inputUsuarios.value = valorUsuario;
    inputEst.value = valorEst;

    var precioPedido = 0;

    var precioUsuario = valorUsuario * 20000;
    var precioTransaccion = valorTrans * 300;
    var precioNomina = valorNomina * 3000;
    var precioEstacion = valorEst * 35000;

    precioPedido = precioUsuario + precioTransaccion + precioNomina + precioEstacion;


    inputPrecio.value = precioPedido;
}


function paginaCargada(){
    AOS.init();
  }
  
  window.addEventListener('load', paginaCargada);
    