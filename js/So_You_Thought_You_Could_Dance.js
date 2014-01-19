$(document).ready(function(){
	var animations = ['shake','hop', 'spin', 'grow', 'celebrate'];

	function randomAnimation(){
		n = Math.floor(Math.random()*(animations.length-1))+1;
		return animations[n];
	}
	$('.dance_floor').addClass('dance_floor ' + randomAnimation());
	$('.dance_floor').on('click', function(){
		$(this).removeClass();
		animate = randomAnimation();
		$(this).addClass('dance_floor ' + animate);
	});
});