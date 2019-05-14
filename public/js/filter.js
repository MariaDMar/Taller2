var coll = document.getElementsByClassName("filtrar__collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var filtrar__content = this.nextElementSibling;
    if (filtrar__content.style.display === "block") {
        filtrar__content.style.display = "none";
    } else {
        filtrar__content.style.display = "block";
    }
  });
}