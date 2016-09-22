var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var coord = {
              iniX: 100,
              iniY: 100,
              finX: 100,
              finY: 500
            }

setInterval(function(){ dibujar(); }, 1000);

function dibujar () {

  coord.iniX += 25;
  coord.iniY -= 25;
  coord.finX -= 25; 
  coord.finY -= 25;
  console.log(coord);

  canvas.width = canvas.width; //clear 

  /*ctx.moveTo(100, 100);
  ctx.lineTo(100, 500);
  ctx.lineWidth = 100;
  ctx.stroke();*/

  /*ctx.moveTo(300, 300);
  ctx.lineTo(500, 300 + coord.x);
  ctx.moveTo(300, 300);
  ctx.lineTo(100, 300 - coord.x);
  ctx.lineWidth = 100;
  ctx.stroke();*/

  ctx.moveTo(coord.iniX, coord.iniY);
  ctx.lineTo(coord.finX, coord.finY);
  ctx.lineWidth = 100;
  ctx.stroke();

}