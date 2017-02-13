$(document).ready(function(){
	var altura = $('.menu').offset().top;
	
	$(window).on('scroll', function(){
		if ( $(window).scrollTop() > altura ){
			$('.menu').addClass('menu-fixed');
			$('.menuDos').addClass('menuDos-fixed');
		} else {
			$('.menu').removeClass('menu-fixed');
			$('.menuDos').removeClass('menuDos-fixed');
		}
	});
 
});