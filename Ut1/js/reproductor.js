
var reproductor = document.getElementById("reproductor");
var btnPlay = document.getElementById("btnPlay");
var btnMute = document.getElementById("btnMute");

btnPlay.onclick = playPause;

btnMute.onclick = function () {

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

	if (reproductor.played.length == 0) {

		btnPlay.innerHTML = "pause";
		btnPlay.style.color = "rgb(219, 17, 17)";
		reproductor.play();

	}else{

		if (reproductor.paused) {
			reproductor.play();
			btnPlay.style.color = "rgb(219, 17, 17)";
			btnPlay.innerHTML = "pause";
		}else{
			reproductor.pause();
			btnPlay.style.color = "rgb(60, 110, 234)";
			btnPlay.innerHTML = "play_arrow";
		}
	}	

}