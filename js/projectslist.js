$(document).ready(function(){
    $('#projects').hide();
    $('#projects-toggler').click(function() {
        $('#projects').slideToggle();
        $('.projects-header i').toggleClass('rotate rotate2');
    });
});