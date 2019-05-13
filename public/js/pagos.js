window.addEventListener('load', function(){
    var form = document.querySelector('form');
    function enviarProductos(evento){
        evento.preventDefault();
        console.log("hola");
        var input = document.querySelector('.input-productos');
        input.value = 'productos';
        //si tengo que enviar texto entonces input.value = JSON.stringify
    localStorage.removerItem('listaProductos');
    }
    form.addEventListener('submit', enviarProductos);
});