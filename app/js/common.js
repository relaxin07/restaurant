
$(function(){
	new WOW().init();
	$(".main-carousel").owlCarousel({
		
		loop: true,
		items:1
	});
	
	$('.wrap-content').addClass('wrap-content-anm');
	$(window).scroll(function(){
		if($(this).scrollTop() < 700){
			$('.wrap-content').addClass('wrap-content-anm');
		}
		else{
			$('.wrap-content').removeClass('wrap-content-anm');
		}
	});
	
	


});