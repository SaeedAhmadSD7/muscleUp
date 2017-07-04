$(function($) {

    "use strict";

    //Loading gif calling
    function handlePreloader() {
            $('.preloader').delay(500).fadeOut(500);
    }

    //Change Header Style
    function headerStyle() {
        if($('.main-header').length){
            var windowpos = $(window).scrollTop();
            if (windowpos >= 1) {
                $('.main-header').addClass('header-fixed');
            } else {
                $('.main-header').removeClass('header-fixed');
            }
        }
    }

    // back to top
    function backToTop () {
        var offset = 1;
        var duration = 700;
        $(window).on('scroll', function() {
            if ($(this).scrollTop() > offset) {
                $('.back-to-top').fadeIn(duration);
            } else {
                $('.back-to-top').fadeOut(duration);
            }
        });

        $('.back-to-top').on('click', function(event) {
            event.preventDefault();
            $('html, body').animate({scrollTop: 0}, duration);
            return false;
        });
    }

    // User define function
    function ScrollToActiveMenu () {
        var scrollPosition = $(document).scrollTop();
        $('.navbar-collapse .scroll > a').each(function () {
            var currentLink = $(this);
            var refElement = $(currentLink.attr("href"));
            console.log(refElement);
            if (refElement.position().top-80 <= scrollPosition) {
                $('.navbar-collapse ul li.scroll > a').parent().removeClass("current");
                currentLink.parent().addClass("current");
            }
            else{
                currentLink.parent().removeClass("current");
            }
        });

    }

    // Elements Animation
    if($('.wow').length){
        var wow = new WOW({
            mobile:       false
        });
        wow.init();
    }


    /* ==========================================================================
     When document is ready, do
     ========================================================================== */

    $(document).ready(function() {
        headerStyle();
        backToTop();
    });

    /* ==========================================================================
     When document is Scrolling, do
     ========================================================================== */

    $(window).on('scroll', function() {
        headerStyle();
        ScrollToActiveMenu();
    });

    /* ==========================================================================
     When document is loading, do
     ========================================================================== */

    $(window).on('load', function() {
    	handlePreloader();
    });


});