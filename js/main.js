$(document).ready(function() {

    $(".nav__list a").mPageScroll2id({
        offset: 0,
        scrollSpeed: 200
    });

    $('.testimonials__list').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: true,
        responsive: true,
        items: 1
    });

});

