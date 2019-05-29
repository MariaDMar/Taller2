
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
/*var parte = document.querySelector(".nav__header__container__logo");
console.log(parte);

parte.addEventListener('click', function (event) {
  console.log('/////// entra a TL');
  var tl = new TimelineLite();
  tl.to(this, 1, { y: "-200px" }, 0.7);
  tl.play();
});*/

TweenMax.from(".banner__in__texto", 1, {opacity: 0.3, x:"-200px"});
TweenMax.from(".banner__in__image", 1, {opacity: 0.3, x:"200px"});

TweenMax.from(".caracteristicas", 1, {opacity: 0.3, y:"200px"});

console.log('sirvio');
