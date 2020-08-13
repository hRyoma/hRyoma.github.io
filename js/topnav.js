// Toggles the state of the toggle button and opens/collapses the nav-menu
const topnav = document.getElementById("topnav");
const topnavToggle = topnav.querySelector(".navbar-toggle");

function openNavbar() {
    topnav.classList.add("opened");
    topnavToggle.setAttribute("aria-label", "Close navigation");
}

function closeNavbar() {
    topnav.classList.remove("opened");
    topnavToggle.setAttribute("aria-label", "Open navigation");
}

topnavToggle.addEventListener("click", () => {
    if (topnav.classList.contains("opened")) {
        closeNavbar();
    } else {
        openNavbar();
    }
})

// Lets the user close the nav-menu by not clicking an item in the opened menu

const topnavMenu = topnav.querySelector(".nav-menu");
const topnavLinks = topnav.querySelector(".nav-links");
const topnavOverlay = topnav.querySelector(".nav-overlay");

topnavLinks.addEventListener("click", (clickEvent) => {
    clickEvent.stopPropagation();
});

topnavMenu.addEventListener("click", closeNavbar);
topnavOverlay.addEventListener("click", closeNavbar);

// Close navbar when the window is resized

window.onresize = function () {
    closeNavbar();
}

// Hide the navbar when the user scrolls down and display it when scrolling up

window.onscroll = function () {
    scrollFunction();
};

var prevScrollPos = window.pageYOffset;

function scrollFunction() {
    var currentScrollPos = window.pageYOffset;

    if (currentScrollPos < 200) {
        topnav.style.top = "0";
    } else {
        if (prevScrollPos > currentScrollPos) {
            topnav.style.top = "0";
        } else {
            topnav.style.top = "-64px";
            closeNavbar();
        }
    }

    prevScrollPos = currentScrollPos;
}
