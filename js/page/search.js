$(function(){
	
	/*固顶顶部导航js*/
	$('.check_search').navFixed();
	$(window).scroll(function (){
	   		 var offsetTop = $(window).scrollTop();
	   		 if(offsetTop>72){
	   		 	$('.check_search').removeClass('header_shadow_none');
	   		 	$('.check_search').addClass('header_shadow_active');
	   		 }else{
	   		 	$('.check_search').addClass('header_shadow_none');
	   		 }
	   })

	$('.Hui-tags-icon').on('click',function(){
		alert('a')
	})


})