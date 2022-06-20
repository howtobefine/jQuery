$(document).ready(function () {
    $('.dropdown').click(function (e) {
        e.preventDefault();
        $('.dropdown-list').slideToggle();
    });

    $('.btn-top').click(function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
});

// Swiper

const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

});

// lightbox

lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true,
    'fadeDuration': 200
})