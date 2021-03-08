window.onload = function(){
$(".teapot img").draggable();
function cupfirstCell(){
		$('.cupfirst img').attr('src', 'cupsecond.png');
	}

	function cupfirstOff(){
		$('.cupfirst img').attr('src', 'cupfirst.png');
	}

	function cupfirstPressed(){
		$('.cupfirst img').attr('src', 'cupsecond.png');
	}

	$(".cupfirst img").mouseenter(cupfirstCell);
	$(".cupfirst img").mouseleave(cupfirstOff);
	$(".cupfirst img").mousedown(cupfirstPressed);
	var audio = document.getElementById('music');
         audio.pause();
}
function play() {
    var audio = document.getElementById('music');
    if (audio.paused) {
        audio.play();
        document.getElementById('musicImg').src="teapot/play.png";
    }else{
        audio.pause();
        audio.currentTime = 0;
        document.getElementById('musicImg').src="teapot/stop.png";
    }
    
	
}


