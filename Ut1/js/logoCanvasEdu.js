var c = document.getElementById("myCanvas");
var letra = c.getContext("2d");
var ctxUno = c.getContext("2d");
var ctx1 = c.getContext("2d");
var ctx2 = c.getContext("2d");
var ctx3 = c.getContext("2d");
var ctx4 = c.getContext("2d");

function aleatorio(inferior,superior){ 
   	var numPosibilidades = superior - inferior 
   	var aleat = Math.random() * numPosibilidades 
   	aleat = Math.round(aleat) 
   	return parseInt(inferior) + aleat 
}

setInterval(function(){ 
	x = aleatorio(-20,20);
	y = aleatorio(-30,30);
	pintar();
}, 90);


function pintar () {

	c.width = c.width;

	letra.font = "300px Arial";
	letra.fillText("E",200,350);

	ctxUno.beginPath();
	ctxUno.arc(340,110,40,0,2*Math.PI);
	ctxUno.fillStyle="#fff";
	ctxUno.fill();
	ctxUno.stroke();

	ctx3.beginPath();
	ctx3.arc(359 + x,122 + y,14,0,2*Math.PI);
	ctxUno.fillStyle="#000";
	ctxUno.fill();
	ctx3.stroke();

	ctx1.beginPath();
	ctx1.arc(300,115 ,40,0,2*Math.PI);
	ctxUno.fillStyle="#fff";
	ctxUno.fill();
	ctx1.stroke();

	ctx2.beginPath();
	ctx2.arc(318 + x,125 + y,15,0,2*Math.PI);
	ctxUno.fillStyle="#000";
	ctxUno.fill();
	ctx2.stroke();

	ctx4.beginPath();
	ctx4.arc(300,240,200,0,2*Math.PI);
	ctx4.stroke();

}

