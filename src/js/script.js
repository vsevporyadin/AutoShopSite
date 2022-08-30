$(document).ready(function () {
	$('.slider-top').owlCarousel({
    center: true,
    items:1.5,
    loop:true,
    margin:80,
		autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
		// nav: true,
    responsive:{
			3400:{
				margin:160,
				items:2.5
			},
			2200:{
				margin:120,
				items:2
			},
			2000:{
				margin:100,
				items:1.5
			},
			1920:{
				margin:80,
				items:1.5
			},
			1370:{
				margin:80,
				items:1.5
			},
			1360:{
				margin:40,
				items:1.5
			},
			600:{
				margin:30,
				items:1.3
			},
			320:{
				margin:20,
				items:1.1
			}
    }
});
});