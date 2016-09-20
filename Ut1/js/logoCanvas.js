var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    
    var ctx = canvas.getContext('2d');

    ctx.fillRect(100,100,100,400);
    ctx.fillRect(200,300,200,50);
    //ctx.clearRect(45,45,60,60);
    //ctx.strokeRect(50,50,50,50);

    //ctx.beginPath();
    //ctx.moveTo(100,100);
    //ctx.lineTo(150,100);
   //ctx.lineTo(25,105);
    //ctx.fill();

  }