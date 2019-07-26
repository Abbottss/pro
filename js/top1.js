let $list = $( ".top_cen ul li" );
	let $l1 = $( ".top_cen ul .l1" );
	let $oli = $( "#list" );
	let $guana = $( ".top_cen ul .guan #imga" );
	let $guanb = $( ".top_cen ul .guan #imgb" );
	let $gou = $( ".top_cen ul #gou" );
	let $olist = $( ".olist a" );//nav导航栏
	//头部ul添加事件
	$list.mouseenter( function(){
		$(this).css( "background","#ffffff" );
	} ).mouseleave( function(){
		$(this).css( "background","#F2F2F2" );
	} )
	//头部第一个li添加事件
	$l1.mouseenter( function(){
		$oli.slideDown();
	} ).mouseleave( function(){
		$oli.slideUp();
	} )
	//头部的购物车添加事件
	$gou.mouseenter( function(){
		$( ".top_cen #box" ).css( "display","block" );
	} ).mouseleave( function(){
		$( ".top_cen #box" ).css( "display","none" );
	} )
	//头部最后一个li的图片添加事件
	$guana.mouseenter( function(){
		$( ".top_cen .i1" ).css( "display","block" );
	} ).mouseleave( function(){
		$( ".top_cen .i1" ).css( "display","none" );
	} )
	$guanb.mouseenter( function(){
		$( ".top_cen .i2" ).css( "display","block" );
	} ).mouseleave( function(){
		$( ".top_cen .i2" ).css( "display","none" );
	} )
	//导航栏文字添加事件
	$olist.mouseenter( function(){
		$(this).css( "color","#EC3E7D" );
	} ).mouseleave( function(){
		$(this).css( "color","#111111" );
	} )
	
	
	/*菜单栏*/
	/*$( "#menu ul li" ).mouseenter( function(){
		$(this).addClass( ".active" ).siblings().removeClass( ".active" );
		let index = $(this).index();
		$( "#menu ol li" ).eq(index).css( "display","block" ).siblings().css( "display","none" );
	} ).mouseleave( function(){
		$(this).removeClass( ".active" );
		let index = $(this).index();
		$( "#menu ol li" ).eq(index).css( "display","none" ).siblings();
	} )*/
	$( "aside" ).mouseenter( function(){
		$( "#menu ul" ).show();
	} ).mouseleave(function(){
		$( "#menu ul" ).hide();
	})
