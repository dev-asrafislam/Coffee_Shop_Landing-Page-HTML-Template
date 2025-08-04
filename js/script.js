// Preloader
window.onload = function () {
	document.body.classList.add("loaded");
};

$(document).ready(function () {
	//  ============= Slick Slider Settings =========

	$(".products__slider").slick({
		dots: false,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: true,
		prevArrow: '<button class="btn your-class-arrow btn-juliet" id="prev" type="button"><img src="../img/icons/prev.svg" alt=""></button>',
		nextArrow: '<button id="next" type="button" class="btn btn-juliet"><img src="../img/icons/next.svg" alt=""></button>',
		responsive: [
			{
				breakpoint: 1600,
				settings: {
					slidesToShow: 4,
					// slidesToScroll: 3,
					infinite: true,
					// dots: true
				},
			},
			{
				breakpoint: 1300,
				settings: {
					slidesToShow: 3,
					// arrows: false,
					// slidesToScroll: 3,
					infinite: true,
					// dots: true
				},
			},
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
					// slidesToScroll: 3,
					infinite: true,
					// dots: true
				},
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					infinite: true,
                    arrows: true
				},
			},
			{
				breakpoint: 992,
				settings: {
                    slidesToShow: 2,
                    arrows: false,
					infinite: true,
					dots: true
				},
			},
			{
				breakpoint: 768,
				settings: {
                    slidesToShow: 2,
                    arrows: false,
					infinite: true,
					dots: true
				},
			},
			{
				breakpoint: 650,
				settings: {
                    slidesToShow: 2,
                    arrows: false,
					infinite: true,
					dots: true
				},
			},
			{
				breakpoint: 555,
				settings: {
                    slidesToShow: 1,
                    arrows: false,
					infinite: true,
					dots: true
				},
			},
		],
	});
	$(".testiomonials__slider").slick({
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		autoplay: true,
		autoplaySpeed: 3000,
		prevArrow:
			'<button id="prev" type="button"><img src="/assets/img/icons/prev.svg" alt=""></button>',
		nextArrow:
			'<button id="next" type="button"><img src="/assets/img/icons/next.svg" alt=""></button>',
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					arrows: false,
				},
			},
		],
	});

	$(".pop-up__select-wrapper").selectric({
		maxHeight: 200,
	});

	//  ============= Back To Top =========

	function backToTop() {
		$(".footer__up").on("click", (e) => {
			e.preventDefault();
			$("html").animate({ scrollTop: 0 }, 1000);
		});
	}
	backToTop();

	//  ============= Pop Up =========

	$(".header__button").click(function () {
		$(".pop-up").animate({"right":"0"}, "slow");
	});

	$(".pop-up__cross").on("click", (e) => {
		e.preventDefault();
		$(".pop-up").animate({"right":"-100%"}, "slow");
    });
    
    //  ============= Mobile Menu ===============

    $(".mobile-menu__cross").on("click", (e) => {
		e.preventDefault();
		$("#mobile-menu").animate({"left":"-100%"}, "slow");
    });
    $(".mobile-menu__btn").on("click", (e) => {
		e.preventDefault();
		$("#mobile-menu").animate({"left":"0"}, "slow");
    });

	//  ============= COUNTER ===============

	$(document).ready(function () {
		$(".btn-minus").click(function () {
			var $input = $(this).parent().find("input");
			var count = parseInt($input.val()) - 100 + " g";
			// var count = parseInt($('.pop-up__price')) - 100;
			count = count < 1 ? 1 : count;
			$input.val(count);
			$input.change();
			return false;
		});
		$(".btn-plus").click(function () {
			var $input = $(this).parent().find("input");
			$input.val(parseInt($input.val()) + 100 + " g");
			$input.change();
			return false;
		});
	});
});

//  ============= TIMER ===============

let date = new Date('Feb 1 2021 00:00:00');

function counts() {
    let now = new Date();
    gap = date - now;

    let days = Math.floor(gap / 1000 / 60 / 60 / 24);
    let hours = Math.floor(gap / 1000 / 60 / 60 ) % 24;
    let minutes = Math.floor(gap / 1000 / 60 ) % 60;
    let seconds = Math.floor(gap / 1000 ) % 60;

    document.getElementById('d').innerText = days;
    document.getElementById('h').innerText = hours;
    document.getElementById('m').innerText = minutes;
    document.getElementById('s').innerText = seconds;
}
counts();

setInterval(counts, 1000);
