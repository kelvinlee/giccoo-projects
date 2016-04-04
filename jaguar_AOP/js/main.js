
$(document).ready(function load (){
	var nowPage = 0;
	var startY = 0;
	var startScrollTop;
	var pageUpDown =0
	var pageA=['#page01','#page02','#page11','#page12','#page13','#page14','#page15','#page31','#page32','#page41','#page42','#page43','#page44','#page51','#page52','#page53','#page54','#page55']
	//document.documentElement.scrollTop = 0;
	//document.body.scrollTop = 0;
	//var DocHeight = document.body.scrollHeight||document.body.offsetHeight||document.body.clientHeight;
	//$('.content')[0].addEventListener('touchmove', function (event) {event.preventDefault();}, false);//阻止了浏览器默认的下拉事件

	$('.content')[0].addEventListener('touchstart',startTouch,false)
	$('.content')[0].addEventListener('touchmove',moveTouch,false)
	$('.content')[0].addEventListener('touchend',endTouch,false)

	goPage();

	function startTouch(event){
		startY=event.touches[0].clientY
		pageUpDown=0

	}
	function moveTouch(event){
		var nowY=event.touches[0].clientY
		if (nowY-startY>80&&nowPage!=0&&nowPage!=2&&nowPage!=7&&nowPage!=9&&nowPage!=13) {
			pageUpDown=1
		}else if (nowY-startY< -80&&nowPage!=1&&nowPage!=6&&nowPage!=8&&nowPage!=12&&nowPage!=17) {
			pageUpDown=-1
		}else{
			pageUpDown=0
		};
		
	}
	function endTouch(event){
		if (pageUpDown == 1) {
			//alert("上一页")
			nowPage--
		}else if (pageUpDown == -1) {
			//alert("下一页")
			nowPage++
		}else if (pageUpDown==0) {
			//alert("不翻页")
		};
		goPage()
	}
	function goPage(){
		if (nowPage==0||nowPage==1||nowPage==2||nowPage==7||nowPage==9||nowPage==13) {
		 	$('.btnBack').css('visibility','hidden');
		 }else{
		 	$('.btnBack').css('visibility','visible');
		 };
		for (var i = 0; i < pageA.length; i++) {
			$(pageA[i]).removeClass('up');
			$(pageA[i]).removeClass('down');
			$(pageA[i]).removeClass('show');

			if (i<nowPage) {$(pageA[i]).addClass('up');};
			if (i>nowPage) {$(pageA[i]).addClass('down');};
			if (i==nowPage) {$(pageA[i]).addClass('show');};
		};
		if (pageUpDown!=0) {closePop();};
		 
	}
	//＝＝＝＝＝＝导航
	$("#btn11").click(function (){
		nowPage=2;
		goPage();
	});

	$("#btn12").click(function (){
		nowPage=7;
		goPage();
	});
	$("#btn13").click(function (){
		nowPage=9;
		goPage();
	});
	$("#btn14").click(function (){
		nowPage=13;
		goPage();
	});
	//＝＝＝＝＝＝返回
	$('.btnBack').click(function(){
		nowPage=1;
		goPage();
	});
	

	//========首页视频
	var videoA=["#popv0"]
	var textA=["#popt1"]

	$("#btn15").click(function (){
		showVideo(0)
	});

	$("#popbtn1").click(function (){
		showText(0)
	});
	//====打开文字浮层
	function showText(_textNum){
		$(textA[_textNum]).css('visibility','visible');
	}

	//====打开视频浮层
	function showVideo(_videoNum){
		$(videoA[_videoNum]).css('visibility','visible');
	}
	//====关闭视频浮层
	$(".closebtn").click(function (){
		closePop();
	});
	function closePop(){
		for (var i = 0; i < videoA.length ; i++) {
			$(videoA[i]).css('visibility','hidden');
		};
		for (var i = 0; i < textA.length ; i++) {
			$(textA[i]).css('visibility','hidden');
		};
		// var video=$('#video0');
		// video[0].pause();
	};
});