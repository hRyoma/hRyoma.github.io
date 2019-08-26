$(document).ready(function(){
    $('#toc-content').hide();
    $('#toc-toggler').click(function() {
        $('#toc-content').slideToggle();
        $('#toc i').toggleClass('rotate rotate2');
    });
});