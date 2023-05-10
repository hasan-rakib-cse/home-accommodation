/* -------------------------------------
		MOBILE NAV SHOW/ HIDE
-------------------------------------- */


$("#toggle").click(function() {
    $(".menu ul").toggleClass("active");
})

/* -------------------------------------
		NAVIGATION FIXED TOP
-------------------------------------- */

$(window).on("scroll", function() {
    var scrolling = $(this).scrollTop();
    if(scrolling > 10) {
        $(".navigation").addClass("navbar-fixed");
    } else {
        $(".navigation").removeClass("navbar-fixed");
    }
})

/* -------------------------------------
		LOGO SLIDER
-------------------------------------- */

var _xdLogoSlider = jQuery('.logo-slider');
_xdLogoSlider.owlCarousel({
		nav: false,
		loop: true,
		dots: false,
		responsiveClass: true,
        autoplay: true,
        margin: 20,
        navText: false,
		responsive: {
			0: {
				items: 1,
				nav: true,
			},
			575: {
				items: 1,
				nav: true,
			},
			767: {
				items: 2,
				nav: true,
			},
			991: {
				items: 3,
				nav: true,
			},
			1200: {
				items: 5,
				nav: true,
			}
		}
	});

/* -------------------------------------
		COUNTER ACHIEVEMENT
-------------------------------------- */

(function($) {
	$('.achievement-counter .counter').counterUp({
		delay: 10,
		time: 1000
	});
})(jQuery);