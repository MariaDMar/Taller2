
window.addEventListener('load', function(){
    var form = document.querySelector('form');

    form.addEventListener('submit', ()=>{
        //evento.preventDefault();
        var input = document.querySelector('.input-productos');
        input.value =  localStorage.getItem('listaProductos') ;

        console.log("dlsijosdijcosdjcsodij");
        console.log(JSON.parse( localStorage.getItem('listaProductos') ));
        
        console.log(JSON.parse( input.value ));
        localStorage.removeItem('listaProductos');

        console.log("hoooola");
    });
        //si tengo que enviar texto entonces input.value = JSON.stringify
    //localStorage.removerItem('listaProductos');
    
});