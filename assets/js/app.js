$(document).ready(function() {
    $("#toggle-btn").click(function() {
        $('.nav-links').slideToggle(3000);
    });

    $("#accordion").accordion({
        animate: 1000
    });

    $("#p-bar-1").progressbar({
        value: 37
    });
    $("#p-bar-2").progressbar({
        value: 70
    });
    $("#p-bar-3").progressbar({
        value: 60
    });
    $("#p-bar-4").progressbar({
        value: 80
    });

    $(".owl-carousel").owlCarousel({
        loop: true,
        smartSpeed: 2000,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
});