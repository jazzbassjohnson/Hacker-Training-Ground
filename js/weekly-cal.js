$(document).ready(function(){
   setInterval(function(){
   		var wtz = 'am';
   		var hours = Date().split(' ')[4].split(':')[0] ;
   		if(+hours < 12){
   			$('#greeting').text("Good Morning!");
   		}
   		if(+hours >= 12 && +hours <= 16){
   			$('#greeting').text("Good Afternoon!");
   		}
   		if(+hours >= 4){
   			$('#greeting').text("Good Evening!");
   		}
   		if(hours === '0'){
   			hours = '12';
   			wtz = 'pm';
   		};
   		if(+hours > 12){hours = "0" + (+hours - 12)};
   		var minutes = Date().split(' ')[4].split(':')[1];
   		var seconds = Date().split(' ')[4].split(':')[2];
   		$('#hour').text(hours);
   		$('#minute').text(minutes);
   		$('#second').text(seconds);
   		$('#' + Date().split(' ')[0]).css('background-color', '#0f6c8e')
   		$('#wtz').text(wtz);



   }, 100) ;
});