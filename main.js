$(document).ready(function(){

    /*========== Toggle ==========*/
    $(document).on('click', '.hamburger', function() {
        $('.hamburger').toggleClass('active');
        $('nav').toggleClass('active');
        $('body').toggleClass('active');
    });

   

});