//Activates upon click of hamburger button
function menuToggle() {
    var nav = document.getElementById("desktop-nav");
    if (nav.style.display == "block") {
        //If shown, hide
        nav.style.display = "";
    } else {
        //If hidden, show
        nav.style.display = "block";
    }
}