
$(document).ready(function load (){
	var nowPage = 0;
	var startY = 0;
	var startScrollTop;
	var pageUpDown =0

	$('#part1')[0].addEventListener('touchstart',startTouch,false)
	$('#part1')[0].addEventListener('touchmove',moveTouch,false)
	$('#part1')[0].addEventListener('touchend',endTouch,false)

	var sliderA=[$('#slider1'),$('#slider2'),$('#slider3'),$('#slider4')]
	var sliderB=["#slider1>","#slider2>","#slider3>","#slider4>"]
	var p0title=$('.p0title')
	var container=$('.content')
	TweenMax.set(container, {perspective:600})

	for (var i = 0; i < sliderA.length; i++) {
		//sliderA[i].css({transform:'translate3d(0,100%,0)','-webkit-transform':'translate3d(0,100%,0)'})
		sliderA[i].css({top:'100%'})

	}
	//sliderA[0].css({transform:'translate3d(0,0,0)','-webkit-transform':'translate3d(0,0,0)'})
	sliderA[0].css({top:'0%'})

	function startTouch(event){
		startY=event.touches[0].clientY
		pageUpDown=0
	}
	function moveTouch(event){
		var nowY=event.touches[0].clientY
		event.preventDefault();
		if (nowY-startY>80&&nowPage!=0) {
			pageUpDown=1
		}else if (nowY-startY< -80&&nowPage!=4) {
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

	$('.btnUp').click(function(){
		nowPage--;
		pageUpDown=-1
		goPage()
	});

	$('.btnDown').click(function(){
		nowPage++;
		pageUpDown=1
		goPage();
	});

	function goPage(){
		if (nowPage==0) {
			$('.btnUp').css({display:'none'})
		}else{
			$('.btnUp').css({display:'block'})
		};
		for (var i = 0; i < sliderA.length; i++) {

			var pageLeft=$(sliderB[i]+".picLeft")
			var pageRight=$(sliderB[i]+".picRight")
			var picMid=$(sliderB[i]+".picMid")

			if (i<nowPage) {
				TweenLite.to(sliderA[i],.5,{top:"-100%"})//,ease:Back.easeOut

				TweenLite.to(picMid,.5,{rotationZ:"0",rotationX:"-30",rotationY:"100",z:1000})
				TweenLite.to(pageLeft,.5,{left:"-50%"})
				TweenLite.to(pageRight,.5,{left:"150%",delay:.1})
			};
			if (i==nowPage) {
				TweenLite.to(sliderA[i],.5,{top:"0%"})

				TweenLite.to(picMid,.5,{rotationZ:"0",rotationX:"0",rotationY:"0",z:0})
				TweenLite.to(pageLeft,.5,{left:"50%"})
				TweenLite.to(pageRight,.5,{left:"50%",delay:.1})
			};
			if (i>nowPage) {
				TweenLite.to(sliderA[i],.5,{top:"100%"})

				TweenLite.to(picMid,.5,{rotationZ:"-0",rotationX:"30",rotationY:"-100",z:1000})
				TweenLite.to(pageLeft,.5,{left:"150%"})
				TweenLite.to(pageRight,.5,{left:"-0%",delay:.1})
			};

		}
		if (pageUpDown!=0&&nowPage!=4){
			TweenLite.killTweensOf(p0title);
			p0title.css({opacity:'0',top:'90%'});
			TweenLite.to(p0title,.4,{opacity:1,top:'80%',delay:.3});
		};
		if (nowPage==4&&pageUpDown!=0) {
			TweenLite.killTweensOf(p0title);
			TweenLite.to(p0title,.4,{opacity:0,onComplete:goPart2});
		};
		
		
	}

	function goPart2(){//========================第二部分===================
		$('#part1').css({'display':'none'})
		$('#part2').css({'display':'block'})
		ani2();
	}

	var btnStart=$('#btnStart');
	var btnRule=$('#btnRule');
	var rule=$('#rule');
	var closeRule=$('#closeBtn');
	var paA=[$('#title1a'),$('#title1b'),$('#title1c'),$('#title1d'),$('#btnStart'),$('#btnRule')]

	var btnUpload=$('#btnUpload')
	var userPic=$('.userPic')

	btnStart.click(function(){
		ani2End();
	});

	btnUpload.click(function(){
		alert("发布作品")
		
	});

	//==========活动细则
	btnRule.click(function(){//显示活动细则
		rule.css({'display':'block','opacity':'0'});
		TweenLite.to(rule,1,{opacity:1})
	});
	closeRule.click(function(){
		TweenLite.to(rule,.5,{opacity:0,onComplete:hideRule});
		function hideRule(){//隐藏活动细则
			rule.css({'display':'none','opacity':'0'})
		}
	});

	function ani2(){
		for (var i = 0; i < paA.length; i++) {
			TweenLite.from(paA[i],2,{opacity:0,top:'65%',ease:Elastic.easeOut,delay:i*.05})
		};

	}
	function ani2End(){
		for (var i = 0; i < paA.length; i++) {
			TweenLite.to(paA[i],.5,{opacity:0,left:'-100%',delay:i*.05})
		};
		$('#page2').css({display:'block'});
		TweenLite.from(userPic,.5,{rotationZ:-15,rotationY:-45,rotationX:-30,z:500,opacity:0,left:'100%',delay:0*.05})
		TweenLite.from(btnUpload,.5,{opacity:0,left:'100%',delay:1*.05})
	}


});