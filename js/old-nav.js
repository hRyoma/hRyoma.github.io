
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
//HIDE NAVBAR TOGGLE ON CLICK
$(function() {
    $('.nav-item a').on('click', function(){
        if($('.navbar-toggler').css('display') !='none'){
            $('.navbar-toggler').trigger( "click" );
        }
    });
});

var prevScrollPos = window.pageYOffset;

function scrollFunction() {
    var currentScrollPos = window.pageYOffset;

    //FOR HIDING SCROLL TO TOP BUTTON
    if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
        document.getElementById("top-btn").style.opacity = "1";
    } else {
        document.getElementById("top-btn").style.opacity = "0";
    }

    //FOR HIDING NAVBAR ON DOWN SCROLL
    if (document.getElementById("navbar").classList.contains("sticky")) {
        if (prevScrollPos > currentScrollPos) {
            document.getElementById("navbar").style.top = "0";
            document.getElementById("top-btn").style.opacity = "1";
        } else {
            document.getElementById("navbar").style.top = "-240px";
            document.getElementById("top-btn").style.opacity = "0";
        }
        prevScrollPos = currentScrollPos;
    }
}

//FOR SCROLLING TO TOP
$('.scroll-top').click(function () {
    $("html, body").animate({
        scrollTop: 0
    }, 100);
    return false;
});