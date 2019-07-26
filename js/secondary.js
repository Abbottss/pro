

/*数据的ajax请求*/
window.onload = function(){
		var deff = $.ajax({
			type : "get",
			url : "json/secondary1.json",
			async : true
		})
		deff.done( function( json ){
			let proList = [];
			let proStr = "";
			for( let attr in json ){
				proList = json[attr].list;
				if( proList ){
					for( let i = 0 ; i < proList.length ; i++ ){
						let pro = proList[i];
						proStr += `<li>
										<a href="details.html"><img src="secondary/${pro.img1}"  class="img1"/></a>
										<p class="p1"><span class="s1">${pro.s1}</span><span class="s2">${pro.s2}</span><span class="s3">${pro.s3}</span></p>
										<p class="p2"><span class="s4">${pro.s4}</span><span class="s5">${pro.s5}</span></p>
										<p class="p3">${pro.p3}</p>
										<span class="s6">${pro.s6}</span>
										<p class="p4"><img src="secondary/${pro.img2}" class="img2" /><span class="s7">${pro.s7}</span></p>
										<input type="submit" value="加入购物车"/>
									</li>`
					}
				}
			}
			$( ".water_cen .shopPro1" ).html( proStr );
		} )
		
		/*22222*/
		var deff2 = $.ajax({
			type : "get",
			url : "json/secondary2.json",
			async : true
		})
		deff2.done( function( json ){
			let proList = [];
			let proStr = "";
			for( let attr in json ){
				proList = json[attr].list;
				if( proList ){
					for( let i = 0 ; i < proList.length ; i++ ){
						let pro = proList[i];
						proStr += `<li>
										<a href="./details.html"><img src="secondary/${pro.img1}"  class="img1"/></a>
										<p class="p1"><span class="s1">${pro.s1}</span><span class="s2">${pro.s2}</span><span class="s3">${pro.s3}</span></p>
										<p class="p2"><span class="s4">${pro.s4}</span><span class="s5">${pro.s5}</span></p>
										<p class="p3">${pro.p3}</p>
										<span class="s6">${pro.s6}</span>
										<p class="p4"><img src="secondary/${pro.img2}" class="img2" /><span class="s7">${pro.s7}</span></p>
										<input type="submit" value="加入购物车"/>
									</li>`
					}
				}
			}
			$( ".latex_cen .shopPro2" ).html( proStr );
		} )
	/*33333*/
	var deff3 = $.ajax({
			type : "get",
			url : "json/secondary3.json",
			async : true
		})
		deff3.done( function( json ){
			let proList = [];
			let proStr = "";
			for( let attr in json ){
				proList = json[attr].list;
				if( proList ){
					for( let i = 0 ; i < proList.length ; i++ ){
						let pro = proList[i];
						proStr += `<li>
										<a href="./details.html"><img src="secondary/${pro.img1}"  class="img1"/></a>
										<p class="p1"><span class="s1">${pro.s1}</span><span class="s2">${pro.s2}</span><span class="s3">${pro.s3}</span></p>
										<p class="p2"><span class="s4">${pro.s4}</span><span class="s5">${pro.s5}</span></p>
										<p class="p3">${pro.p3}</p>
										<span class="s6">${pro.s6}</span>
										<p class="p4"><img src="secondary/${pro.img2}" class="img2" /><span class="s7">${pro.s7}</span></p>
										<input type="submit" value="加入购物车"/>
									</li>`
					}
				}
			}
			$( ".mask_cen .shopPro3" ).html( proStr );
		} )
		/*4444*/
		var deff4 = $.ajax({
			type : "get",
			url : "json/secondary4.json",
			async : true
		})
		deff4.done( function( json ){
			let proList = [];
			let proStr = "";
			for( let attr in json ){
				proList = json[attr].list;
				if( proList ){
					for( let i = 0 ; i < proList.length ; i++ ){
						let pro = proList[i];
						proStr += `<li>
										<a href="./details.html"><img src="secondary/${pro.img1}"  class="img1"/></a>
										<p class="p1"><span class="s1">${pro.s1}</span><span class="s2">${pro.s2}</span><span class="s3">${pro.s3}</span></p>
										<p class="p2"><span class="s4">${pro.s4}</span><span class="s5">${pro.s5}</span></p>
										<p class="p3">${pro.p3}</p>
										<span class="s6">${pro.s6}</span>
										<p class="p4"><img src="secondary/${pro.img2}" class="img2" /><span class="s7">${pro.s7}</span></p>
										<input type="submit" value="加入购物车"/>
									</li>`
					}
				}
			}
			$( ".cleansing_cen .shopPro4" ).html( proStr );
		} )
	/*5555*/
	var deff5 = $.ajax({
			type : "get",
			url : "json/secondary5.json",
			async : true
		})
		deff5.done( function( json ){
			let proList = [];
			let proStr = "";
			for( let attr in json ){
				proList = json[attr].list;
				if( proList ){
					for( let i = 0 ; i < proList.length ; i++ ){
						let pro = proList[i];
						proStr += `<li>
										<a href="./details.html"><img src="secondary/${pro.img1}"  class="img1"/></a>
										<p class="p1"><span class="s1">${pro.s1}</span><span class="s2">${pro.s2}</span><span class="s3">${pro.s3}</span></p>
										<p class="p2"><span class="s4">${pro.s4}</span><span class="s5">${pro.s5}</span></p>
										<p class="p3">${pro.p3}</p>
										<span class="s6">${pro.s6}</span>
										<p class="p4"><img src="secondary/${pro.img2}" class="img2" /><span class="s7">${pro.s7}</span></p>
										<input type="submit" value="加入购物车"/>
									</li>`
					}
				}
			}
			$( ".cosmetics_cen .shopPro5" ).html( proStr );
		} )
		/*6666*/
		var deff6 = $.ajax({
			type : "get",
			url : "json/secondary6.json",
			async : true
		})
		deff6.done( function( json ){
			let proList = [];
			let proStr = "";
			for( let attr in json ){
				proList = json[attr].list;
				if( proList ){
					for( let i = 0 ; i < proList.length ; i++ ){
						let pro = proList[i];
						proStr += `<li>
										<a href="./details.html"><img src="secondary/${pro.img1}"  class="img1"/></a>
										<p class="p1"><span class="s1">${pro.s1}</span><span class="s2">${pro.s2}</span><span class="s3">${pro.s3}</span></p>
										<p class="p2"><span class="s4">${pro.s4}</span><span class="s5">${pro.s5}</span></p>
										<p class="p3">${pro.p3}</p>
										<span class="s6">${pro.s6}</span>
										<p class="p4"><img src="secondary/${pro.img2}" class="img2" /><span class="s7">${pro.s7}</span></p>
										<input type="submit" value="加入购物车"/>
									</li>`
					}
				}
			}
			$( ".health_cen .shopPro6" ).html( proStr );
		} )
		
		$( ".shopPro1" ).find().mouseenter( function(){
			alert()
			let index = $(this).index();
			console.log( index )
		/*$( this ).find( "li input" ).css( "display","block" );*/
	} )
	}
