$(function () {
	var PageWidth = 750;
	var lastW;

	function __resize() {
		var w = Math.min(window.innerWidth, document.body.clientWidth), h = Math.min(window.innerHeight, document.body.clientHeight);

		if (lastW == w) return;
		lastW = w;

		var fontsize = w / PageWidth * 100;
		$("html").css("font-size", fontsize);
		var realFontsize = parseFloat($("html").css("font-size"));
		if (fontsize != realFontsize) {
			fontsize *= fontsize / realFontsize;
			$("html").css("font-size", fontsize);
		}
		window.FontSize = fontsize;
	}

	//使用rem代替px
	$(window).on("resize", function () {
		__resize();
		setTimeout(__resize, 300);
	});
	$(window).resize();

});