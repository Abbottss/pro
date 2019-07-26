//头部
	let $list = $( ".top_cen ul li" );
	let $l1 = $( ".top_cen ul .l1" );
	let $oli = $( "#list" );
	let $guana = $( ".top_cen ul .guan #imga" );
	let $guanb = $( ".top_cen ul .guan #imgb" );
	let $gou = $( ".top_cen ul #gou" );
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
	
	
//注册
	let sub = document.getElementById( "sub" );
	sub.onclick = function(){
		let userJson = {
			"uname" : uname.value,
			"upwd" : upwd.value,
			"qupwd" : qupwd.value
		}
		document.cookie = "userinfo=" + JSON.stringify( userJson );
		if(flagName&&flagUpwd&&flagQupwd){
			return true;
			location.href = "login.html";
		}else{
			return false;
		}
	}
		
	
	//验证用户名
	let flagName = null;
	uname.onblur = function(){
		let userName = this.value;
		let reg = /^1[3578]\d{9}$/;
		if( reg.test( userName ) ){
			flagName = true ;
			s1.innerHTML = "";
		}else{
			flagName = false ;
			s1.innerHTML = "请输入正确的手机号";
		}
	}
	let flagUpwd = null;
	upwd.onblur = function(){
		let userUpwd = this.value;
		let reg = /^\d|[a-z]{6,16}$/i;
		if( reg.test( userUpwd ) ){
			flagUpwd = true ;
			s2.innerHTML = "";
		}else{
			flagUpwd = false ;
			s2.innerHTML = "请输入正确的密码";
		}
	}
	let flagQupwd = null;
	qupwd.onblur = function(){
		
		if( upwd.value == qupwd.value ){
			flagQupwd = true ;
			s3.innerHTML = "";
		}else{
			flagQupwd = false ;
			s3.innerHTML = "请输入正确的密码";
		}
	}
	//用户登录
		let log = document.getElementById( "log" );	
		let str = document.cookie;
		let arr = str.split( "; " );
		let userTxt = "";
		for( let i = 0 ; i < arr.length ; i++ ){
			let item = arr[i].split( "=" );
			if( item[0] == "userinfo" ){
				userTxt =item[1];
			}
		}
		let userJson = JSON.parse( userTxt );
		console.log( userJson )
		log.onclick = function(){
			if( uname.value == userJson.uname && upwd.value == userJson.upwd ){
				return true;
				//alert( "登陆成功" )
				location.href = "homePage.html";
			}else {
				return false;		
			}
		}