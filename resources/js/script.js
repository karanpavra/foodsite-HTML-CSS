$(document).ready(function() {

    // navbar

    $('.js-section-features').waypoint(function(direction) {
        if(direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset : '60px;'
    });

    // main page button

    $('.js-scroll-plan').click(function () {
        $('html, body').animate({scrollTop: $('.js-section-plan').offset().top}, 1000);
    });

    $('.js-scroll-start').click(function () {
        $('html, body').animate({ scrollTop: $('.js-section-features').offset().top }, 1000);
    });

    // navbar link direction

    $(function () {
        $('a[href*=#]:not([href=#])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });

    // animation scroll

    $('.js-wp-1').waypoint(function(direction) {
        $('.js-wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    $('.js-wp-2').waypoint(function (direction) {
        $('.js-wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });

    $('.js-wp-3').waypoint(function (direction) {
        $('.js-wp-3').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    $('.js-wp-4').waypoint(function (direction) {
        $('.js-wp-4').addClass('animated pluse');
    }, {
        offset: '50%'
    });

    /* navbar collapse manu */

    $('.js-nav-icon').click(function() {
        var nav = $('.js-main-nav');
        var icon = $('.js-nav-icon i');

        nav.slideToggle(200);

        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');            
        }
    });
    
});