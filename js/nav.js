
window.onscroll = function() {navBarStick(); scrollFunction();};

var navbar = document.getElementById("navbar"); //Gets item with id "navbar" from HTML

//To make navbar sticky
var sticky = navbar.offsetTop;
function navBarStick() {
    if (window.pageYOffset - 1 >= sticky) {
        navbar.classList.remove("non-sticky");
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
        navbar.classList.add("non-sticky");
    }
}

var prevScrollPos = window.pageYOffset;

function scrollFunction() {
    var currentScrollPos = window.pageYOffset;

    // Hide and collapse navbar when scrolling down
    if (navbar.classList.contains("sticky")) {
        if (prevScrollPos > currentScrollPos) {
            navbar.style.top = "0";
        } else {
            navbar.style.top = "-90px";
            $('.collapse.navbar-collapse').collapse('hide');
        }
        prevScrollPos = currentScrollPos;
    }
    else {
        $('.collapse.navbar-collapse').collapse('hide');
    }
}