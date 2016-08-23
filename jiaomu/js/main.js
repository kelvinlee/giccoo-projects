
$(document).ready(function load (){
	$("#btn").click(function(){
		window.location.href="http://www.lancome.com.cn/landing/genifique.html";
	})

	var iflike=0

	$("#like").click(function(){
		$("#like2").css({"display":"block"});
		if (iflike==0) {
			//这里反馈
		};

		iflike=1

	})

});