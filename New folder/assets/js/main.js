$(document).ready(function () {
	$(window).on('wheel', function (event) {
		// deltaY obviously records vertical scroll, deltaX and deltaZ exist too.
		// this condition makes sure it's vertical scrolling that happened
		if (event.originalEvent.deltaX == 0) {
			if (event.originalEvent.deltaX < 0) {
				// wheeled up
				console.log('up  : ', event.originalEvent.deltaX);
			} else {
				// wheeled down
				console.log('down  : ', event.originalEvent.deltaX);
			}
		}
	});

	$('.slider__content').slick({
		arrows: true,
		slidesToShow: 1,
		adaptiveHeight: true,
		prevArrow: '<div class="js_prev_arrow"><i class="fas fa-angle-left"></i></div>',
		nextArrow: '<div class="js_next_arrow"><i class="fas fa-angle-right"></i></div>',
	});

	$(window).on('load', function () {
		$('.js_card_slider').fadeIn();
	});
	$('.js_stay_button').on('click', function () {
		$('.js_card_slider').fadeOut();
	});
	$('.js_close_btn').on('click', function () {
		$('.js_card_slider').fadeOut();
	});
});
