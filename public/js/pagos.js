window.addEventListener('load', function(){
    var form = document.querySelector('form');

    form.addEventListener('submit', ()=>{
        cevento.preventDefault();
        var input = document.querySelector('.input-productos');
        input.value = localStorage.getItem('listaProductos');

        console.log("hoooola");
    });
        //si tengo que enviar texto entonces input.value = JSON.stringify
    //localStorage.removerItem('listaProductos');
    
});