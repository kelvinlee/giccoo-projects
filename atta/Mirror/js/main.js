
var loaderTween;
var clickNum=0;

jQuery(document).ready(function($) {
	
	
});
window.onload = function(){
	setTimeout(function(){
		var loader = $(".loader")[0];
		var moon = $(".loader-content");
		var gamePage = $('.game');
		var mirror = $(".mirror-board");
		var startBar = $(".startBtton");
		var testBar = $(".testBtton");
		var intro1 = $("#intro1");
		var intro2 = $("#intro2");
		// loader.className = "loader fadeout";//使用渐隐的方法淡出loading page
		TweenLite.to(moon, 1, {opacity:0});
		// derTween.kill();
		setTimeout(function(){
			loader.style.display="none";
			$(".game").css('display','block');
			TweenLite.from(gamePage, 1, {opacity:0});
			TweenLite.from(mirror, 1, {opacity:0,delay:0.6});
			TweenLite.from(intro1, 2, {opacity:0,delay:2});
			TweenLite.from(intro2, 2, {opacity:0,delay:4});
			TweenLite.from(startBar, 1, {opacity:0,top:"100%",delay:5});

			startBar.click(function(){
				TweenLite.to(intro1, 0.6, {opacity:0,top:"0%"});
				TweenLite.to(intro2, 0.6, {opacity:0,top:"62%"});
				TweenLite.to(startBar, 1, {opacity:0,top:"100%",onComplete:hideIntroHandle});
				function hideIntroHandle(){
					testBar.css('display','block');
					TweenLite.from(testBar, 0.6, {opacity:0,top:"100%"});
					startBar.hide();
					intro1.hide();
					intro2.hide();
				}
			});

			testBar.click(function(){
				clickNum += 1;
				switch(clickNum){
					case 1:
						
					break;
					case 2:
						
					break;
					case 3:

					break;
				}
			});
		},1000);

		},1000);//强制显示loading page 1s


};
