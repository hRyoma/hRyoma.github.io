function jump(h) {
    document.getElementById(h).scrollIntoView();
}


/* Old CSS that I might need later

Project List Show/Hide

$(document).ready(function(){
    $('#projects').hide();
    $('#projects-toggler').click(function() {
        $('#projects').slideToggle();
        $('.projects-header i').toggleClass('rotate rotate2');
    });
});

Table of Contents Show/Hide

$(document).ready(function(){
    $('#toc-content').hide();
    $('#toc-toggler').click(function() {
        $('#toc-content').slideToggle();
        $('#toc i').toggleClass('rotate rotate2');
    });
});

 */