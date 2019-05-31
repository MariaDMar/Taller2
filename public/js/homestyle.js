
//var cuerpomov = document.querySelectorAll(".banner");

//TweenMax.from(".banner__in", 1, {opacity: 0.3, y:-200});


/*var tween = TweenMax.to(cuerpomov, 2, {x: '-=100', y: '+=100', onComplete: myFunction, ease: Back.easeout });
tl.add(tween,2);*/


/*
TweenMax.from(cuerpomov, 2, {x:"100px"});

window.onload = function(){
  var cuerpomov = document.getElementById(".banner__in__texto");
  TweenLite.to(cuerpomov, 2, {left:"50%"});
}

var movimiento = document.querySelectorAll(".banner__in__texto");
function moverTexto(){
  var tl = new TweenLite();

  
}
*/

//SIRVE PARA LA PARTE DE TUTORIALES EN CONSUTRCCION
var parte = document.querySelector("#micro");
console.log(parte);

parte.addEventListener('click', function (event) {
  console.log('/////// entra a TL');
  var tl = new TimelineLite();
  tl.to(this, 1, { scale: 1.1}, 0.7);
  tl.play();
});




console.log('sirvio');

function paginaCargada(){
  AOS.init();
  
}

function animacionCargada(){

var box = document.querySelector("#box1");
var box2 = document.querySelector("#box2");

var tl = new TimelineMax({repeat: -1, repeatDelay: 1});

tl.to(box, 1, {x:50, y:0, opacity:100})
tl.to(box, 1, {x:50, y:0, opacity:100})
tl.to(box, 1, {x:50, y:0, opacity:100})
tl.to(box, 1, {opacity:0})

}

var tl = new TimelineMax({repeat: -1, repeatDelay: 1});
tl.to(box2, 1, {x:-50, y:0, opacity:100})
tl.to(box2, 1, {scale: 1.1, y:0, opacity:100})
tl.to(box2, 1, {scale: 1.1, y:0, opacity:100})
tl.to(box2, 1, {opacity:0})



window.addEventListener('load', paginaCargada);
window.addEventListener('load', animacionCargada);
 