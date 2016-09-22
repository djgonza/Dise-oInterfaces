var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var i = 0;
var direccion = true;

setInterval(function(){ dibujar(); }, 90);

function dibujar () {

  if (direccion) { i++; }else{ i--; }
  if (i == 15) {direccion = false;} else if (i == -15){direccion = true;}

  canvas.width = canvas.width; //clear 

  ctx.rotate(i*Math.PI/180);

  //dibujar h
  ctx.moveTo(150, 100);
  ctx.lineTo(150, 500);

  ctx.moveTo(450, 100);
  ctx.lineTo(450, 500);

  ctx.moveTo(100, 300);
  ctx.lineTo(500, 300);

  ctx.lineWidth = 100;
  ctx.strokeStyle = "#800000";
  ctx.stroke();

  //dibujar t
  ctx.moveTo(225, 405);
  ctx.lineTo(275, 405);

  ctx.moveTo(250, 400);
  ctx.lineTo(250, 450);

  //dibujar m
  ctx.moveTo(285, 400);
  ctx.lineTo(285, 450);

  ctx.moveTo(285, 400);
  ctx.lineTo(310, 425);

  ctx.moveTo(305, 425);
  ctx.lineTo(325, 405);

  ctx.moveTo(325, 400);
  ctx.lineTo(325, 450);

  //dibujar l
  ctx.moveTo(340, 398);
  ctx.lineTo(340, 450);

  ctx.moveTo(335, 445);
  ctx.lineTo(370, 445);

  ctx.lineWidth = 10;
  ctx.stroke();

  
}