$( ".pro" ).mouseenter( function(){
	$(this).css( "background","#EC3E7D" );
} ).mouseleave( function(){
	$( ".pro" ).css( "background","" );
} )
$( "#side .c1" ).mouseenter( function(){
	$( "#account" ).fadeIn();
} ).mouseleave( function(){
	$( "#account" ).fadeOut();
} )
$( "#side .c4" ).mouseenter( function(){
	$( "#house" ).fadeIn();
} ).mouseleave( function(){
	$( "#house" ).fadeOut();
} )
$( "#side .c5" ).mouseenter( function(){
	$( "#keep" ).fadeIn();
} ).mouseleave( function(){
	$( "#keep" ).fadeOut();
} )
$( "#side .c6" ).mouseenter( function(){
	$( "#service" ).fadeIn();
} ).mouseleave( function(){
	$( "#service" ).fadeOut();
} )
$( "#side .c7" ).mouseenter( function(){
	$( "#images" ).fadeIn();
} ).mouseleave( function(){
	$( "#images" ).fadeOut();
} )


var top = document.getElementById( "top" );
var oTop = document.documentElement.scrollTop || document.body.scrollTop;
if( oTop > 0 ){
	top.style.display = "block";
}
	top.onclick = function(){
	document.documentElement.scrollTop = 0 ;
	top.style.display = "none";
}