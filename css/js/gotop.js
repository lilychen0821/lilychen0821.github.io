// JavaScript Document
$(function(){       /* 返回頂部 go top */
	
	$("#goTop").click(function(){

		$("html,body").animate({scrollTop:0},900);

		//$("html,body").animate({scrollTop:0},900,"easeOutBounce");

		return false;

	});

});
