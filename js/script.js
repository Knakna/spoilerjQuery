$(document).ready(function() {
	$('.block__title').click(function(event) {
		if($('.block').hasClass('one')){
			$('.block__title').not($(this)).removeClass('active');
			$('.block__text').not($(this).next()).slideUp(300);
		}
		$(this).toggleClass('active').next().slideToggle(300);
	});

	$('.header__burger').click(function(event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
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