var reproductor = document.getElementById("reproductorV");
var btnPlay = document.getElementById("btnPlayV");
var btnMute = document.getElementById("btnMuteV");
var timeStamp = document.getElementById("timeStampV");
var timeTotal = document.getElementById("timeTotalV");
var time;

btnPlay.onclick = playPause;

btnMute.onclick = function () {

	console.log("Muted");

	reproductor.muted = !reproductor.muted;

	if (reproductor.muted) {
		btnMute.innerHTML = "volume_off";
		btnMute.style.color = "rgb(219, 17, 17)";
	}else{
		btnMute.innerHTML = "volume_up";
		btnMute.style.color = "rgb(60, 110, 234)";
	}
}

function playPause () {

	console.log("Play");

	if (reproductor.played.length == 0) {

		btnPlay.innerHTML = "pause";
		btnPlay.style.color = "rgb(219, 17, 17)";
		reproductor.play();
		/* inicializamos los tiempos */
		timeTotal.innerHTML = parseInt(reproductor.duration/60) + " : " + (reproductor.duration/60/60).toFixed(2)*100;
		timeStamp.innerHTML = 0;
		/* inicializamos el contador */
		setInterval(function(){ 
			var minutos = parseInt(reproductor.currentTime/60)
			var segundos =  parseInt(reproductor.currentTime) - minutos * 60;
			timeStamp.innerHTML = minutos + " : " + segundos;
		}, 100);

	}else{

		if (reproductor.paused) {
			reproductor.play();
			btnPlay.style.color = "rgb(219, 17, 17)";
			btnPlay.innerHTML = "pause";
			timeStamp.style.color = "rgb(60, 110, 234)";

		}else{
			reproductor.pause();
			btnPlay.style.color = "rgb(60, 110, 234)";
			btnPlay.innerHTML = "play_arrow";
			timeStamp.style.color = "rgb(219, 17, 17)";
		}
	}	

}
