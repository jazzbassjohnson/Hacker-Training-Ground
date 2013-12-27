$(document).ready(function(){
   setInterval(function(){
   		var wtz = 'am';
   		var hours = Date().split(' ')[4].split(':')[0] ;
   		if(+hours < 12){
   			$('#greeting').text("Good Morning!");
   		}
   		if(+hours >= 12 && +hours < 16){
   			$('#greeting').text("Good Afternoon!");
   		}
   		if(+hours >= 16){
   			$('#greeting').text("Good Evening!");
   		}
   		if(hours === '0'){
   			hours = '12';
   			wtz = 'pm';
   		};

   		if(+hours > 12){hours = (+hours - 12);
            if(+hours < 10){
               hours = "0" + hours;
            }
         };
   		var minutes = Date().split(' ')[4].split(':')[1];
   		var seconds = Date().split(' ')[4].split(':')[2];
         var day = Date().split(' ').splice(1, 2).join(" ");
         var weekDay = Date().split(' ')[0];
   		$('#hour').text(hours);
   		$('#minute').text(minutes);
   		$('#second').text(seconds);
         $('.day').css('background-color', '#eab269');
   		$('#' + weekDay).css('background-color', '#0f6c8e');
   		$('#wtz').text(wtz);



   }, 100) ;
});