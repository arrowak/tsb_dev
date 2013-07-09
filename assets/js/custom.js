$('document').ready(function(){
	setInterval(function(){$('#c1').hide().fadeIn(500);
	$('#c1').delay(5000).show().fadeOut(500);
	$('#c2').delay(6000).hide().fadeIn(500);
	$('#c2').delay(5000).show().fadeOut(500);
	$('#c3').stop().delay(11000).hide().fadeIn(500);
	$('#c3').stop().delay(15000).show().fadeOut(500);}, 16000);
});

/*
function slider_start(){
	while(true){
	$('#c1').hide().fadeIn(500);
	$('#c1').delay(5000).show().fadeOut(500);
	$('#c2').stop().delay(6000).hide().fadeIn(500);
	$('#c2').delay(5000).show().fadeOut(500);
	$('#c3').stop().delay(11000).hide().fadeIn(500);
	$('#c3').stop().delay(15000).show().fadeOut(500);
	}
	//slider_start();
}*/
