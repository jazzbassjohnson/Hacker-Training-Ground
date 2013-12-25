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
   function freeBrush(){
   		$(".box").on("mouseenter", function () {
			$(this).css('background-color', paint);
			$(this).css('box-shadow', "0 0 8px white");
			$(this).css('z-index', "1000");
		});

		$(".box").on("mouseleave", function () {
			$(this).css('box-shadow', "none");
			$(this).css('z-index', "1");
		});
   }

   var paint = '#777';

   $('.color').on('click', function(){
   		paint = $(this).css('background-color');
   		$('.box').on('click', function(){
   		$(this).css('background-color', paint);
   		freeBrush();	
   });
   });












});