
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

/*


TweenMax.from(".banner__in__texto", 1, {opacity: 0.3, x:"-200px"});
TweenMax.from(".banner__in__image", 1, {opacity: 0.3, x:"200px"});

TweenMax.from(".caracteristicas", 1, {opacity: 0.3, y:"200px"});
*/



console.log('sirvio');

function paginaCargada(){
  AOS.init();
  
}

function animacionCargada(){

var box = document.querySelector("#box1");
var box2 = document.querySelector("#box2");
var box3 = document.querySelector("#box3");
var box4 = document.querySelector("#box4");
var box5 = document.querySelector("#box5");

var tl = new TimelineMax({repeat: -1});

tl.to(box, 1, {x: 50, y:0})
.to(box2, 1, {x: 50, y:50})
.to(box3, 1, {x: -50, y:50}) 
.to(box4, 1, {x: -50, y:0})
.to(box4, 1, {x: -50, y:0})

repeat(-1);

}

/*
var total = 100;
var w = $(".confeti").width();
var h = $(".confeti").height();
 
 for (i=0; i<total; i++){ 
 $(".confeti").append('<div class=".confeti__dot"></div>')
 TweenMax.set($(".confeti__dot")[i],{x:Random(w),y:random(-100,100) ,opacity:1,scale:Random(0.5)+0.5,backgroundColor:"hsl(" + random(170,360) + ",50%,50%)"});
 animm($(".confeti__dot")[i]);
 }
 
 function animm(elm){   
 TweenMax.to(elm,Random(5)+4,{y:h,ease:Linear.easeNone,repeat:-1, delay:-5});
 TweenMax.to(elm,Random(5)+1,{x:'+=70', repeat:-1,yoyo:true,ease:Sine.easeInOut})
  TweenMax.to(elm,Random(5)+1,{scaleX:0.2,rotation:Random(360), repeat:-1,yoyo:true,ease:Sine.easeInOut})
 TweenMax.to(elm,Random(1)+0.5,{opacity:0, repeat:-1,yoyo:true,ease:Sine.easeInOut})
 };

function Random (max) {
return Math.random()*max;
}

function random(min, max) {
return min + Math.floor( Math.random() * (max - min));
}
*/



window.addEventListener('load', paginaCargada);
window.addEventListener('load', animacionCargada);
 