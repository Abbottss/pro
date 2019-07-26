
	//轮播图
	let $ul = $( ".round ul li" );
	let $ol = $( ".round ol li" );
	let timer = null ;
	let index = 0 ;
	timer = setInterval( autoPlay,2000 );
	function autoPlay(){
		index++;
		if( index == $ol.size() ){
			index=0;
		}
		$ol.eq(index).addClass( "active" ).siblings().removeClass( "active" );
		$ul.eq( index ).fadeIn().siblings().fadeOut();
	}
	$ol.mouseenter( function(){
		alert()
		clearInterval( timer );
		index = $(this).index()-1;
		autoPlay();
	} ).mouseleave( function(){
		timer = setInterval( autoPlay,2000 );
	} )

	//倒计时
	var s1 = document.getElementById( "limit_cen" ).getElementsByClassName( "s1" );
	var now = new Date();
	var end = new Date( "2019-8-6 24:00:00" );
	var diff = (end.getTime()-now.getTime())/1000;
	function showTime(){
		for( var i = 0 ; i < s1.length ; i++ ){
		if( diff < 0 ){
			s1[i].innerHTML = "活动结束了";
			return;
		}
		var h = parseInt( diff/3600 );
		var m = parseInt( (diff-h*3600)/60 );
		var s = parseInt( diff-h*3600-m*60 );
		s1[i].innerHTML = "剩余" + h + ":" + m + ":" + s ;
		}
	}	
	showTime();
	 timer = setInterval( function(){
		diff--;
		if( diff<0 ){
			clearInterval( timer );
			s1.innerHTML = "活动结束了";
		}else{
			showTime();
		}
	},1000 )
	


//新品ajax请求
var ulist = document.getElementById( "newPro" );
var aaa = document.getElementsByClassName( "ulist" );
ajaxGet( "new.json",function(res){
		let arr = JSON.parse( res );
		let str = "";
		let cont = "";
		for( let i = 0 ; i< arr.length;i++ ){
			str += `<li class="ulist">
						<a href="details.html"><img src="home/${arr[i].src}" alt="" /></a>
						<p class="p1">${arr[i].p1}<span class="s1">${arr[i].s1}</span></p>
						<p class="p2">${arr[i].p2}<span class="s2">${arr[i].s2}</span></p>
						<span class="s3">新品<br/>上市</span>
					</li>`
		}
		newPro.innerHTML = str;
	} )



