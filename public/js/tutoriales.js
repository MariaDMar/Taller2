
function animacionCargada(){

    var box = document.querySelector("#box1");
    var box2 = document.querySelector("#box2");
    var box3 = document.querySelector("#box3");
    var box4 = document.querySelector("#box4");
    var box5 = document.querySelector("#box5");
    
    var tl = new TimelineMax({repeat: -1, yoyo: true});
    
    tl.to(box4, 1, {rotation:1})
    tl.to(box4, 1, {rotation:-1})
    tl.to(box4, 1, {rotation:1})
    

    var tl = new TimelineMax({repeat: -1, yoyo: true});
    
    tl.to(box2, 6, {rotation:360, transformOrigin: "center center"})
    
    var tl = new TimelineMax({repeat: -1, yoyo: true});
    
    tl.to(box5, 2, {x:20})
    tl.to(box5, 2, {x:0})


}
    
window.addEventListener('load', animacionCargada);