$(document).ready(function(){
   var paint = '#777';

   function randomColor(){
      return "#" + Math.random().toString(16).slice(2, 8)
   }
   $('#randomize').on('click', function(){
         $('#color_1').css('background-color', randomColor());
         $('#color_2').css('background-color', randomColor());
         $('#color_3').css('background-color', randomColor());
         $('#color_4').css('background-color', randomColor());
   });

   $('#jumbleBrush').on('click', function(){
      $('.box').on('click', function(){
         $(this).css('background-color', randomColor());

         $(".box").on("mouseenter", function () {
            $(this).css('background-color', randomColor());
            $(this).css('box-shadow', "0 0 8px white");
            $(this).css('z-index', "1000");
         });

         $(".box").on("mouseleave", function () {
            $(this).css('box-shadow', "none");
            $(this).css('z-index', "1");
         });
         $('.box').on('click', function(){
            $(this).css('box-shadow', "none");
            $(this).css('z-index', "1");
            $('.box').off('mouseenter mouseleave');
         });

      })

   })

   $('.box').on('click', function(){
      $('.box').off('mouseenter mouseleave');
   })

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
      $('.box').on('click', function(){
         $(this).css('box-shadow', "none");
         $(this).css('z-index', "1");
         $('.box').off('mouseenter mouseleave');
      });
   }

   $('.color').on('click', function(){
      $('#jumbleBrush').off('mouseenter mouseleave');
		paint = $(this).css('background-color');
      $('.box').on('click', function(){
        $(this).css('background-color', paint); 
   	  freeBrush('.box');	
      });
   });
   
   $('#flare').css('color', randomColor());
   $('#randomize').trigger('click')

});