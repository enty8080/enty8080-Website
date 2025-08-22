(function ($) {
    "use strict";
    
    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 30
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });
    

    // Typed Initiate
    if ($('.header h2').length == 1) {
        var typed_strings = $('.header .typed-text').text();
        var typed = new Typed('.header h2', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }
    
    
    // Skills
    $('.skills').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});
    
    
    // Porfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('filter-active');
        $(this).addClass('filter-active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
    
    // Review slider
    $('.review-slider').slick({
        autoplay: true,
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

    // Featured Videos carousel
    $(function () {
        const $carousel = $('.videos .video-carousel');

        // Inject FA icons into arrows (optional)
        const prevArrow =
            '<button type="button" class="slick-prev" aria-label="Previous video"><i class="fa fa-chevron-left"></i></button>';
        const nextArrow =
            '<button type="button" class="slick-next" aria-label="Next video"><i class="fa fa-chevron-right"></i></button>';

        $carousel.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: true,
            prevArrow: prevArrow,
            nextArrow: nextArrow,
            adaptiveHeight: true,
            infinite: false,
            // Stop YouTube from continuing to play when slide changes
            onAfterChange: function () {
            $carousel.find('iframe').each(function () {
                // Pause YT/Vimeo by resetting src when hidden
                if (!$(this).closest('.slick-slide').hasClass('slick-active')) {
                const src = $(this).attr('src');
                $(this).attr('src', src);
                }
            });
            },
            responsive: [
            { breakpoint: 992, settings: { slidesToShow: 1 } },
            { breakpoint: 768, settings: { slidesToShow: 1 } }
            ]
        });
    });

})(jQuery);

