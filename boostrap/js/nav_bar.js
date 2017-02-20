$(function () {

	var bgColors = new Array(
		"bg-amarillo",
		"bg-verde",
		"bg-naranja",
		"bg-rosa",
		"bg-gris");
	var textColor = new Array(
		"c-amarillo",
		"c-verde",
		"c-naranja",
		"c-rosa",
		"c-gris");

	$(window).resize(function() {

		if($(window).width() >= 992) {
			$("#nav-bar-list").children("li").each(function (i, element) {
				$(element).removeClass("display-2 "+ bgColors[i]);
				$(element).children("a").addClass(textColor[i] + " display-4").removeClass("text-white");
			});
		}else{
			$("#nav-bar-list").children("li").each(function (i, element) {
				$(element).addClass("display-2 "+ bgColors[i]);
				$(element).children("a").removeClass(textColor[i] + " display-4").addClass("text-white");
			});
		}

	});

});