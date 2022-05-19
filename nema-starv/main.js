var sidenav = document.getElementById("sidenav");
var main = document.getElementById("main");

function toggleNav() {
    if(sidenav.style.width === "0px") {
        sidenav.style.width = "280px";
        main.style.marginLeft = "280px";
    } else {
        sidenav.style.width = "0px";
        main.style.marginLeft = "0px";
    }
}