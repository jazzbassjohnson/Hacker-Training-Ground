$(document).ready(function(){
	function randomColor(){
		return "#" + Math.random().toString(16).slice(2, 8)
	}
   $('#randomize').on('click', function(){
   		$('#color_1').css('background-color', randomColor());
   		$('#color_2').css('background-color', randomColor());
   		$('#color_3').css('background-color', randomColor());
   		$('#color_4').css('background-color', randomColor());
   });












});