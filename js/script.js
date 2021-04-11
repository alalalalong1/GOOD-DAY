$(document).ready(function() {

    $('.header__burger').click(function(event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    })
    $('.content__slider').slick({
        arrows: true,
        dots: true,
        adaptiveHeight: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        easing: 'ease',
        initialSlide: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        touchThreshold: 7,
        waitForAnimate: false,
    });
})