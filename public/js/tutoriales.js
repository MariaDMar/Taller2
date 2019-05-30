
function animacionCargada(){

    var box = document.querySelector("#box1");
    var box2 = document.querySelector("#box2");
    var box3 = document.querySelector("#box3");
    var box4 = document.querySelector("#box4");
    
    var tl = new TimelineMax({repeat: -1, repeatDelay: 1});
    
    tl.to(box4, 1, {rotation:1})
    tl.to(box4, 1, {rotation:-1})
    tl.to(box4, 1, {rotation:1})
    

    var tl = new TimelineMax({repeat: -1, yoyo: true});
    
    tl.to(box3, 5, {rotation:360, transformOrigin: "center center"})
    tl.to(box3, 5, {rotation:360, transformOrigin: "center center"})
}
    
window.addEventListener('load', animacionCargada);