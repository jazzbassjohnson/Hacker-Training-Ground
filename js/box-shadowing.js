(function($){
    $.fn.disableSelection = function() {
        return this
                 .attr('unselectable', 'on')
                 .css('user-select', 'none')
                 .on('selectstart', false);
    };
})(jQuery);

$(document).ready(function(){
	 $('#riser').on('click', function(event){
	 	var current = $(this).css('box-shadow');

	 	var settings = current.split('px');
	 	var spread = settings[2];

	 	var newSpread = parseInt(spread) +10;

	 	var currentDiameter = $(this).css('width');
	 	var width = parseInt(currentDiameter);
	 	var height = parseInt(currentDiameter);
	 	var newWidth = width +10;
	 	var newHeight = height+10;

	 	event.stopPropagation();
	 	$(this).css('box-shadow', 'rgb(10, 10, 10) 0px ' + newSpread + 'px ' + newSpread  + 'px');
	 	$(this).css('width', newWidth + 'px');
	 	$(this).css('height', newHeight + 'px');

	 });

	 $('body').disableSelection()
});