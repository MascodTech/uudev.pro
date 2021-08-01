$(document).ready(function() {
    $("header").on("click", "#Schrol", function(event) {

        event.preventDefault();


        var id = $(this).attr('href'),


            top = $(id).offset().top;

        $('body,html').animate({
            scrollTop: top
        }, 800);
    });
});
$(document).ready(function() {
    $("footer").on("click", "#Schroltop", function(event) {

        event.preventDefault();


        var id = $(this).attr('href'),


            top = $(id).offset().top;

        $('body,html').animate({
            scrollTop: top
        }, 1500);
    });
});