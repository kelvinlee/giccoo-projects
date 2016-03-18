$(document).ready(function load () {
	//alert("Zepto成功")
	//document.addEventListener('touchmove', function (event) {event.preventDefault();}, false);//阻止了浏览器默认的下拉事件

	var page = $('.page');
	var nowPage = 0;
	var startY = 0;
	var startScrollTop

	var pageUpDown =0
	var DocHeight = document.body.scrollHeight||document.body.offsetHeight||document.body.clientHeight;

	//document.addEventListener('touchstart',startTouch,false)
	//document.addEventListener('touchmove',moveTouch,false)
	//document.addEventListener('touchend',endTouch,false)
	

	function startTouch(event){
		startY=event.touches[0].clientY
		startScrollTop=document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
		pageUpDown=0
		//alert(startY)
	}
	function moveTouch(event){
		var nowY=event.touches[0].clientY
		if (nowY-startY>60) {
			pageUpDown=1
		}else if (nowY-startY< -60) {
			pageUpDown=-1
		}else{
			pageUpDown=0
		};
		document.documentElement.scrollTop =startScrollTop-(nowY-startY);
		document.body.scrollTop = startScrollTop-(nowY-startY);
	}
	function endTouch(event){
		if (pageUpDown == 1) {
			//alert("上一页")
			nowPage--
			if (nowPage < 0) {nowPage=0};
		}else if (pageUpDown == -1) {
			//alert("下一页")
			nowPage++
			if (nowPage > 3) {nowPage=3};
		}else if (pageUpDown==0) {
			//alert("不翻页")
		};
		//alert(pageUpDown)
		//alert(nowPage)
		goPage()
	}
	function goPage(){
		$('html,body').animate({scrollTop:DocHeight*nowPage/4},400)//viewportHeight
		//$('html,body').animate({scrollTop:viewportHeight*nowPage},400)
		if (pageUpDown!=0) {
			//每页动画
			
		};
	}
	
	$("#btnBack").on("click",function goPage2(){
		//alert("goPage2")
		 nowPage=0.6;
		 goPage();
	});

	

})