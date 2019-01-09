$(document).ready(function () {

// sticky navigation

    let waypoint = new Waypoint({
        element: $('.js--section-features'),
        handler: function(direction) {

            if(direction == 'down') {
                $('nav').addClass('sticky');
            } else {
                $('nav').removeClass('sticky');

            }
            //notify('Direction: ' + direction)
        },
            offset: '60px'
    });

    // Scroll on buttons

    $('.js--scroll-to-plan').click(function () {

        $('html, body').animate({scrollTop: $('.section-plans').offset().top}, 1000);

    });
    $('.js--scroll-to-features').click(function () {

        $('html, body').animate({scrollTop: $('.section-features').offset().top}, 1000);
    });

    // Navigation scroll

    $(function() {
        $('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });

    // Animations on scroll
    let waypoint1 = new Waypoint({
        element: $('.js--wp-1'),
        handler: function(direction) {
            $('.js--wp-1').addClass('animated fadeIn');
        },
        offset: '50%'

    });

    let waypoint2 = new Waypoint({
        element: $('.js--wp-2'),
        handler: function(direction) {
            $('.js--wp-2').addClass('animated fadeInUp');
        },
        offset: '50%'

    });

    let waypoint3 = new Waypoint({
        element: $('.js--wp-3'),
        handler: function(direction) {
            $('.js--wp-3').addClass('animated fadeIn');
        },
        offset: '50%'

    });

    let waypoint4 = new Waypoint({
        element: $('.js--wp-4'),
        handler: function(direction) {
            $('.js--wp-4').addClass('animated pulse');
        }

    });

    /* Mobile navigation */

$('.js--nav-icon').click(function () {
    let nav = $('.js--main-nav');
    let icon = $('.js--nav-icon i');

    nav.slideToggle(200);

    if(icon.hasClass('ion-md-menu')) {
        icon.addClass('ion-md-close');
        icon.removeClass('ion-md-menu');

    } else {
        icon.removeClass('ion-md-close');
        icon.addClass('ion-md-menu');
    }
    //ion-md-close

});

});