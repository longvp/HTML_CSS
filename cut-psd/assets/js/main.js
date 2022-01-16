$(document).ready(function () {

    $('#product-feature').owlCarousel({
        loop: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 4,
                nav: true,
                loop: true,
                dots: false
            }
        }
    });

    $('#btnMobile').click(function () {
        $('.menu-mobile').slideToggle();
    });

});