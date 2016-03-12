var loaderTween;

jQuery(document).ready(function($) {
	var moonbox = $('.moonbox');
	
});
window.onload = function(){
	setTimeout(function(){
		var loader = $(".loader")[0];
		var moon = $(".loader-content");
		// loader.className = "loader fadeout";//使用渐隐的方法淡出loading page
		TweenLite.to(moon, 1, {opacity:0});
		// derTween.kill();
		setTimeout(function(){loader.style.display="none"},1000)
		},1000);//强制显示loading page 1s
};
