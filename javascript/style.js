$(document).ready(function(){
	$('.nav li a').click(function(){
        $('.nav li').removeClass('show');
    	$(this).parent().addClass('show');
    	
});
});

