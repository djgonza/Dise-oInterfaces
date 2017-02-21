$(function () {

	var links = new Array();

	$.ajax({
		type: "GET",
		url: "http://beginveganbegun.es/recetas-veganas/"
	}).done( function(data) {
		$(data).find(".postcontent a").each(function (){
			//links.push($(this).attr('href'));
			getReceta($(this).attr('href'));
		});
	});

});

function getReceta (url) {

	$.ajax({
		type: "GET",
		url: url
	}).done( function(data) {
		var title = $(data).find("h1").text().trim();
		var img = $(data).find(".featuredimage").children("img")[0].src;
		var ingredientes = $(data).find("h3:contains('Ingredientes')").next();
		var preparacion = $(data).find("h3:contains('Preparación')").nextAll("p");

		//console.log(title, img, ingredientes, preparacion);

		var article = $("<article>");
		/* Titulo */
		$("<h1>").html(title).appendTo(article);
		/* Imagen */
		$("<img>").attr('src', img.split("/")[7]).attr('alt', title).appendTo(article);
		/* Ingedientes */
		$("<div>").html(ingredientes).appendTo(article);
		/* Preparacion */
		$("<div>").html(preparacion).appendTo(article);
		/* Append */
		article.appendTo($("body"));
		/* Descargar Imagen */
		var a = $("<a>")
		    .attr("href", img)
		    .attr("download", "img.png")
		    .appendTo("body");
			a[0].click();
			a.remove();

	});

}

