// BURGER MENU
$(document).ready(function() {
	$('.header-burger').click(function(event) {
		$('.header-burger,.header-body').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

// SCROLL TO TOP
$('#up').click(function () {
	$('html, body').animate({
		scrollTop: 0
	}, 1000);
	return false;
});


$(document).ready(function () {
	$(".nav").on("click", "a", function (event) {
		event.preventDefault();
		const id = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({
			scrollTop: top
		}, 1500);
	})
});


$('.slider-inner').slick({
	slidesToShow: 5,
	nextArrow: $('.slider-right'),
	prevArrow: $('.slider-left')
});


$('.box-select').SumoSelect({

})
$('.cost-select1').SumoSelect({
	placeholder: 'выберете размер коврика',
	nativeOnDevice: ['Android', 'BlackBerry', 'iPhone', 'iPad', 'iPod', 'Opera Mini', 'IEMobile', 'Silk'],
	captionFormat:'{0} Выбрано',
	captionFormatAllSelected:'{0} Выбрано все!',
	floatWidth: 400,
});
$('.cost-select2').SumoSelect({
	captionFormat:'{0} Выбрано',
	captionFormatAllSelected:'{0} Выбрано все!',
	placeholder: 'кол-во'
});
$('.cost-select3').SumoSelect({
	captionFormat:'{0} Выбрано',
	captionFormatAllSelected:'{0} Выбрано все!',
	placeholder: 'период'
});
$('.cost-box2 .SumoSelect .optWrapper').removeClass('multiple');


// Detect IE.
// Feature detection of "transform-style: preserve-3d" doesn't work, so this
// is the only way how to fall back to a 2D front page example in IE that
// doesn't have a full support of 3D transforms across the board.
document.getElementsByTagName('html')[0].className += ' ' +
	(~window.navigator.userAgent.indexOf('MSIE') ? 'ie' : 'no-ie');

// ==========================================================================
//   Header example
// ==========================================================================
const $exampl = $('#exampl');
const $fram = $exampl.find('.frame');
window.frr = $fram;
new Sly($fram, {
	horizontal: 1,
	itemNav: 'forceCentered',
	activateMiddle: 1,
	smart: 1,
	activateOn: 'click',
	mouseDragging: 1,
	touchDragging: 1,
	speed: 1000,
	releaseSwing: 1,
}).init();

const $example = $('#example');
const $frame = $example.find('.frame');
window.frr = $frame;
new Sly($frame, {
	horizontal: 1,
	itemNav: 'forceCentered',
	activateMiddle: 1,
	smart: 1,
	activateOn: 'click',
	mouseDragging: 1,
	touchDragging: 1,
	speed: 1000,
	releaseSwing: 1,
}).init();


const modalCall = $("[data-modal]");
const modalClose = $("[data-close]");

modalCall.on("click", function(event) {
	event.preventDefault();

	let $this = $(this);
	let modalId = $this.data('modal');

	$(modalId).addClass('show');
	$("body").addClass('no-scroll');

	setTimeout(function() {

		$(modalId).find(".modal-content").css({
			transform: "rotateX(0)"
		});
	}, 200);
});

modalClose.on("click", function(event) {
	event.preventDefault();

	let $this = $(this);
	let modalParent = $this.parents('.modal');

	modalParent.find(".modal-content").css({
		transform: "rotateX(90deg)"
	});

	setTimeout(function() {
		modalParent.removeClass('show');
		$("body").removeClass('no-scroll');
	}, 200);
});

$(".modal").on("click", function(event) {
	let $this = $(this);

	$this.find(".modal-content").css({
		transform: "rotateX(90deg)"
	});

	setTimeout(function() {
		$this.removeClass('show');
		$("body").removeClass('no-scroll');
	}, 200);
});

$(".modal-content").on("click", function(event) {
	event.stopPropagation();
});