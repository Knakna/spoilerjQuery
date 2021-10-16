$(document).ready(function () {
	// spoiler
	$('.block__title').click(function (event) {
		if ($('.block').hasClass('one')) {
			$('.block__title').not($(this)).removeClass('active');
			$('.block__text').not($(this).next()).slideUp(300);
		}
		$(this).toggleClass('active').next().slideToggle(300);
	});
	// burger
	$('.header__burger').click(function (event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
	//CHECKBOX
	$.each($('.checkbox'), function (index, val) {
		if ($(this).find('input').prop('checked') == true) {
			$(this).addClass('active');
		}
	});
	$(document).on('click', '.checkbox', function (event) {
		if ($(this).hasClass('active')) {
			$(this).find('input').prop('checked', false);
		} else {
			$(this).find('input').prop('checked', true);
		}
		$(this).toggleClass('active');

		return false;
	});

	//RADIO
	$.each($('.radiobuttons__item'), function (index, val) {
		if ($(this).find('input').prop('checked') == true) {
			$(this).addClass('active');
		}
	});
	$(document).on('click', '.radiobuttons__item', function (event) {
		$(this).parents('.radiobuttons').find('.radiobuttons__item').removeClass('active');
		$(this).parents('.radiobuttons').find('.radiobuttons__item input').prop('checked', false);
		$(this).toggleClass('active');
		$(this).find('input').prop('checked', true);
		return false;
	});

});

//Скрываем if
// $(document).ready(function() {
// 	$('.block__title').click(function(event) {
// 		// if($('.block').hasClass('one')){
// 		// 	$('.block__title').not($(this)).removeClass('active');
// 		// 	$('.block__text').not($(this).next()).slideUp(300);
// 		// }
// 		$(this).toggleClass('active').next().slideToggle(300);
// 	});
// });


// Перенесла в код выше (открытие и закрытие бургера)
// $(document).ready(function() {
// 	$('.header__burger').click(function(event) {
// 		$('.header__burger,.header__menu').toggleClass('active');
// 		$('body').toggleClass('lock');
// 	});
// });



// Перенесла в код выше стилизация  checkbox и radio

// $(document).ready(function () {

// 	//CHECKBOX
// 	$.each($('.checkbox'), function (index, val) {
// 		if ($(this).find('input').prop('checked') == true) {
// 			$(this).addClass('active');
// 		}
// 	});
// 	$(document).on('click', '.checkbox', function (event) {
// 		if ($(this).hasClass('active')) {
// 			$(this).find('input').prop('checked', false);
// 		} else {
// 			$(this).find('input').prop('checked', true);
// 		}
// 		$(this).toggleClass('active');

// 		return false;
// 	});

// 	//RADIO
// 	$.each($('.radiobuttons__item'), function (index, val) {
// 		if ($(this).find('input').prop('checked') == true) {
// 			$(this).addClass('active');
// 		}
// 	});
// 	$(document).on('click', '.radiobuttons__item', function (event) {
// 		$(this).parents('.radiobuttons').find('.radiobuttons__item').removeClass('active');
// 		$(this).parents('.radiobuttons').find('.radiobuttons__item input').prop('checked', false);
// 		$(this).toggleClass('active');
// 		$(this).find('input').prop('checked', true);
// 		return false;
// 	});
// });


let colorEyesUser;
let user;
let userName = "Вася";
user = userName;
console.log (user);

if (true) {
	var size = 15;
}
console.log (size);

let trueOrFalse = 58 < 18;
console.log (trueOrFalse);
