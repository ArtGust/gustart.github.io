$(function () {


	// FIXED HEADER

	let header = $("#header");
	let intro = $("#intro");
	let introH = intro.innerHeight();
	let scrollPos = $(window).scrollTop();


	$(window).on("scroll load resize", function () {
		introH = intro.innerHeight();
		scrollPos = $(this).scrollTop();

		if (scrollPos > introH) {
			header.addClass("fixed");
		} else{
			header.removeClass("fixed");
		}

	});


	// SMOOTH SCROLL

	$('[data-scroll]').click(function(event) {
		event.preventDefault();

		let elementId = $(this).data('scroll');
		let elementOffset = $(elementId).offset().top;

		nav.removeClass("show");

		$("html, body").animate({scrollTop: elementOffset - 70
		}, 700);
	});

$(document).ready(function() {
    $('data-scroll').click(function(){
        $(this).addClass('active');
       $('html, body').animate({scrollTop:$('#elementId').position().top - 60}, 2000);
    });
});

	// Nav Toggle

	let nav = $("#nav");
	let navToggle = $("#navToggle");

	navToggle.on("click", function(even){
		event.preventDefault();

		nav.toggleClass("show");
	});


	// Reviews Slider https://kenwheeler.github.io/slick/

	let slider = $("#reviewsSlider");

	slider.slick({
  		infinite: true,
  		slidesToShow: 1,
  		slidesToScroll: 1,
  		fade: true,
  		arrows: false,
  		dots: true
	});
		
		

});