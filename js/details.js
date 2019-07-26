//放大镜
	let $glass = $( ".glass" );//最大的容器
	let $small = $( "#small" );//小图盒子
	let $smallImg = $small.find( "img" );//小图
	let $big = $( "#big" );//大图盒子
	let $bigImg = $big.find( "img" );//大图
	let $bottom = $( "#bottom li" );//选项卡区
	let $mask = $( "#mask" );//遮罩层
	let $shade = $( "#shade" );//阴影区
	//操作选项卡区bottom;
	$bottom.mouseenter( function(){
		$(this).css( "border","1px solid #E5CBB2" ).siblings().css( "border","0" );
		let index = $(this).index() ;
		$smallImg.eq( index ).show().siblings().hide();
		$bigImg.eq( index ).show().siblings().hide();
		$mask.css("backgroundImg",`url( details/${index+1}m.jpg )`)
	} )
	//操作小图区
	$small.on( {
		"mouseenter":function(){
			$mask.show();
			$big.show();
			/*$shade.show();*/
		},
		"mouseleave":function(){
			$mask.hide();
			$big.hide();
			/*$shade.hide();*/
		},
		"mousemove":function(evt){
			let e = evt || event ;
			//mask随鼠标的移动
			let x = e.pageX - $glass.offset().left - $mask.width()/2;
			let y = e.pageY - $glass.offset().top -$mask.height()/2;
			//获取最大值
			let manL = $small.width()-$mask.width();
			let manT = $small.height()-$mask.height();
			//判断
			x = x < 0 ? 0 : ( ( x > manL) ? manL : x );
			y = y < 0 ? 0 : ( ( y > manT ) ? manT : y);
			$mask.css({
				left:x,
				top:y,
				backgroundPositionX : -x ,
				backgroundPositionY : -y
			})
			//操作大图
			//大图的宽/小图的宽 = 大图显示区的宽 /mask的宽 = 大图移动/mask的移动
			let $bigImgLeft = x * $big.width()/$mask.width();
			let $bigImgTop = y * $big.height()/$mask.height();
			$bigImg.css( {
				left : -$bigImgLeft,
				top : -$bigImgTop
			} )
		}
	} )
	
	
	//内容  扫一扫加入购物车的操作
	let $scan = $( ".details_cen .ware .select .opt4" );
	let $code =$( ".details_cen .ware .select #code" );
	$scan.mouseenter( function(){
		$code.css( "display","block" );
	} ).mouseleave( function(){
		$code.css( "display","none" );
	} )
	
	
	//商品详情  楼梯效果
	let $num = $( ".trade .terms ul li" );
	let $staira =$( ".stair" ).children();
	let $termsa =$( ".terms" );
	$num.click( function(){
		$( this ).css( "border-bottom","3px solid #c69a62" ).siblings().css( "border-bottom","0" );
		let index = $(this).index();//获取当前操作的楼层号的下标
		let $floor = $staira.eq( index );//根据下标获取对应的楼层
		let bTop = $floor.offset().top;//获取楼层相对于body的距离
		$( "boby,html" ).animate( {
			scrollTop: bTop
		},1000 )
	} )
	$(window).scroll( function(){
		let $termsTop =$( ".terms" ).offset().top;
		//页面滚走的距离
		let sTop = $(document).scrollTop();
		console.log( sTop,$termsTop );
		if( sTop >= $termsTop ){
			$termsa.css( {"position":"sticky","top":0} );
		}
	} )
	