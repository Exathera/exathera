$(document).ready(function(){
    $('.moon').click(function(){
		if($("body").hasClass('dark')){
			$("body").addClass('light');
			$("body").removeClass('dark');
		} else{
			$("body").addClass('dark');
			$("body").removeClass('light');
		}
    });
});