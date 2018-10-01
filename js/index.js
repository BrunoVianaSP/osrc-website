$("span.menu").click(function() {
    $(".top-menu ul").slideToggle("slow", function() {});
});

$(function() {
    $('.moments-bottom a').Chocolat();
});

$(function() {
    $('.moments-bottom a').Chocolat();
});

$(document).ready(function() {
    $().UItoTop({
        easingType: 'easeOutQuart'
    });
});

jQuery(document).ready(function($) {
    $(".scroll").click(function(event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: $(this.hash).offset().top
        }, 1200);
    });
});