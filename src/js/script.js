$(document).ready(function () {
	$('.slider-top').owlCarousel({
    center: true,
    items:1.5,
    loop:true,
		dots:true,
    margin:80,
		autoplay:true,
    autoplayTimeout:5000,
    // autoplayHoverPause:true,
		smartSpeed: 900,
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
			1850:{
				margin:80,
				items:1.45
			},
			1750:{
				margin:80,
				items:1.4
			},
			1700:{
				margin:80,
				items:1.35
			},
			1650:{
				margin:50,
				items:1.3
			},
			1600:{
				margin:40,
				items:1.3
			},
			1550:{
				margin:40,
				items:1.25
			},
			1500:{
				margin:40,
				items:1.2
			},
			1450:{
				margin:40,
				items:1.16
			},
			1400:{
				margin:40,
				items:1.13
			},
			1350:{
				margin:40,
				items:1.08
			},
			1300:{
				margin:40,
				items:1.05
			},
			1250:{
				margin:40,
				items:1.07
			},
			1200:{
				margin:40,
				items:1.05
			},
			1100:{
				margin:40,
				items:1.07
			},
			1000:{
				margin:40,
				items:1.07
			},
			900:{
				margin:40,
				items:1.07
			},
			800:{
				margin:40,
				items:1.09
			},
			700:{
				margin:40,
				items:1.1
			},
			600:{
				margin:40,
				items:1.12
			},
			500:{
				margin:40,
				items:1.12
			},
			400:{
				margin:20,
				items:1.2
			},
			320:{
				margin:10,
				items:1.2
			}
    }
	});

	$('.slider-bonus').owlCarousel({
    items:4,
    loop:true,
		dots:false,
    margin:35,
		nav: true,
		navText: ["","<div class='right-btn-slider'><img src='./src/media/icon/right-arrow.svg' alt=''></div>"],
    responsive:{
			950:{
				margin:35,
				items:4
			},
			800:{
				margin:35,
				items:3
			},
			600:{
				margin:35,
				items:2
			},
			320:{
				margin:35,
				items:1
			}
    }
	});

	$('.slider-stories').owlCarousel({
    items:4,
    loop:true,
		dots:false,
    margin:35,
		nav: true,
		navText: ["","<div class='right-btn-slider right-btn-stories'><img src='./src/media/icon/right-arrow.svg' alt=''></div>"],
    responsive:{
			950:{
				margin:35,
				items:4
			},
			800:{
				margin:35,
				items:3
			},
			600:{
				margin:35,
				items:2
			},
			320:{
				margin:35,
				items:1
			}
    }
	});

	$("#rangeinput1").slider({
    ticks: [500000, 1000000, 1500000, 2000000, 2500000, 3000000],
    ticks_labels: ['500 тыс.', '1 млн.', '1.5 млн.', '2 млн.', '2.5 млн.', '3 млн.'],
    ticks_snap_bounds: 100000
	});

	$("#rangeinput2").slider({
    ticks: [500000, 1000000, 1500000, 2000000, 2500000, 3000000],
    ticks_labels: ['500 тыс.', '1 млн.', '1.5 млн.', '2 млн.', '2.5 млн.', '3 млн.'],
    ticks_snap_bounds: 100000
	});

	$("#rangeinput3").slider({
    ticks: [500000, 1000000, 1500000, 2000000, 2500000, 3000000],
    ticks_labels: ['500 тыс.', '1 млн.', '1.5 млн.', '2 млн.', '2.5 млн.', '3 млн.'],
    ticks_snap_bounds: 100000
	});

	// Прокрутка меню
	$('.link_catalog').on('click', function(e){
		var fixed_offset = -100;
		$('html,body').stop().animate({ scrollTop: $('#point_catalog').offset().top+fixed_offset+"px" }, 1000);
		e.preventDefault();
	});

	$('.link_lizing').on('click', function(e){
		var fixed_offset = -100;
		$('html,body').stop().animate({ scrollTop: $('#point_lizing').offset().top+fixed_offset+"px" }, 1000);
		e.preventDefault();
	});
		

});

