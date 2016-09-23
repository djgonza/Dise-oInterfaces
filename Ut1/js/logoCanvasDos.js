var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var i = 0;
var direccion = true;

setInterval(function(){ dibujar(); }, 90);

function dibujar () {

	if (direccion) { i++; }else{ i--; }
  	if (i == 15) {direccion = false;} else if (i == -15){direccion = true;}

  	canvas.width = canvas.width; //clear 

  	ctx.moveTo(300, 300);
  	ctx.rotate(i*Math.PI/180);

	ctx.moveTo(100, 100);
  	ctx.lineTo(100, 500);

  	ctx.moveTo(100, 300);
  	ctx.lineTo(500, 300);

  	ctx.moveTo(500, 100);
  	ctx.lineTo(500, 500);

  	ctx.strokeStyle = "#800000";
  	ctx.lineWidth = 100;
  	ctx.stroke();



}