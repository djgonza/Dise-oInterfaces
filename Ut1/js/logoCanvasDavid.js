var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var i = 0;
var direccion = true;
var mostrar = 0;
var botton = document.getElementById("change");

botton.onclick = function () {
	mostrar = aleatorio(0,2)
};

setInterval(function() {
	mostrar = aleatorio(0,2);
}, 1000)


setInterval(function(){ 
	if(mostrar == 0)
		dibujarDavid(); 
	else if (mostrar == 1)
		dibujarGorka();
	else
		dibujarEdu();
}, 90);


function aleatorio(inferior,superior){ 
   	var numPosibilidades = superior - inferior 
   	var aleat = Math.random() * numPosibilidades 
   	aleat = Math.round(aleat) 
   	return parseInt(inferior) + aleat 
}

function dibujarDavid () {

	//console.log(true);

	if (direccion) { i++; }else{ i--; }
  	if (i == 15) {direccion = false;} else if (i == -15){direccion = true;}

  	canvas.width = canvas.width; //clear
  	ctx.rotate(i*Math.PI/180);
  	ctx.font = "200pt Calibri";
  	ctx.strokeStyle = "#800000";
  	ctx.fillStyle = "#950000";
  	ctx.strokeText("D", 50, 200);
  	ctx.fillText("D", 50, 200);

}

function dibujarGorka () {

	if (direccion) { i++; }else{ i--; }
  	if (i == 15) {direccion = false;} else if (i == -15){direccion = true;}

  	canvas.width = canvas.width; //clear
  	ctx.rotate(i*Math.PI/180);
  	ctx.font = "200pt Calibri";
  	ctx.strokeStyle = "#800000";
  	ctx.fillStyle = "#950000";
  	ctx.strokeText("G", 50, 200);
  	ctx.fillText("G", 50, 200);

}

function dibujarEdu () {

	if (direccion) { i++; }else{ i--; }
  	if (i == 15) {direccion = false;} else if (i == -15){direccion = true;}

  	canvas.width = canvas.width; //clear
  	ctx.rotate(i*Math.PI/180);
  	ctx.font = "200pt Calibri";
  	ctx.strokeStyle = "#800000";
  	ctx.fillStyle = "#950000";
  	ctx.strokeText("E", 50, 200);
  	ctx.fillText("E", 50, 200);

}
