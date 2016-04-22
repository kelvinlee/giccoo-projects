
$(document).ready(function load (){
	var nowPage = 0;
	var startY = 0;
	var startScrollTop;
	var pageUpDown =0

	if (Math.random()>0.5) {
		$(".pic1").attr("src","http://image.giccoo.com/projects/sayno_mfw/img/p0pic3.jpg");
		$(".pic1").parent().next().find("img").attr("src","http://image.giccoo.com/projects/sayno_mfw/img/p0copy3.png");
	};//随机首页图
	if (Math.random()>0.5) {
		$(".pic2").attr("src","http://image.giccoo.com/projects/sayno_mfw/img/p0pic4.jpg");
		$(".pic2").parent().next().find("img").attr("src","http://image.giccoo.com/projects/sayno_mfw/img/p0copy4.png");
	};

	$('#part1')[0].addEventListener('touchstart',startTouch,false)
	$('#part1')[0].addEventListener('touchmove',moveTouch,false)
	$('#part1')[0].addEventListener('touchend',endTouch,false)

	//var sliderA=[$('#slider1'),$('#slider2'),$('#slider3'),$('#slider4')]
	//var sliderB=["#slider1>","#slider2>","#slider3>","#slider4>"]

	var sliderA=[$('#slider1'),$('#slider2')]
	var sliderB=["#slider1>","#slider2>"]

	var p0title=$('.p0title')
	var container=$('.content')
	TweenMax.set(container, {perspective:600})

	for (var i = 0; i < sliderA.length; i++) {
		sliderA[i].css({top:'100%'})

	}
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
		}else if (nowY-startY< -80&&nowPage!=2) {
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
		if (pageUpDown!=0&&nowPage!=2){
			TweenLite.killTweensOf(p0title);
			p0title.css({opacity:'0',top:'90%'});
			TweenLite.to(p0title,.4,{opacity:1,top:'80%',delay:.3});
		};
		if (nowPage==2&&pageUpDown!=0) {
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

	var p2btn1=$('#p2btn1')
	var p2btn2=$('#p2btn2')

	btnStart.click(function(){
		global.build.init();
		ani2End();
		$("#logo1").show()
		$("#logo2").hide()
	});

	btnUpload.click(function(){
		//alert("发布作品")
		global.build.submit(function(){
			ani3();
			bindIMAGE();
		});
	});

	p2btn1.click(function(){
		// alert("马上关注")
	});

	p2btn2.click(function(){
		//alert("查看其它作品")
		ani4();
	});

	$('#shareBtn').click(function(){
		// alert("分享")
		alert(navigator.userAgent.indexOf("mfwjssdk")+","+navigator.userAgent.indexOf("Android") > -1)
		if (navigator.userAgent.indexOf("mfwjssdk") > -1 && navigator.userAgent.indexOf("Android") > -1) {
			window.location.href = "travelguide://page/appshare"
		}
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

	function ani3(){
		btnUpload.css({display:'none'})
		$('#p2btn').css({display:'block'})
		$('#shareBtn').css({display:'block'})
		TweenLite.from($('#p2btn'),.5,{opacity:0,})
		

	}
	function ani4(){
		$('#page3').css({display:'block'})
		TweenLite.from($('#page3'),.5,{opacity:0,})
	}

	var nowPage1 = 0;
	var startX = 0;
	var startScrollTop;
	var pageLeftRight =0

	$('#page3')[0].addEventListener('touchstart',startTouch1,false)
	$('#page3')[0].addEventListener('touchmove',moveTouch1,false)
	$('#page3')[0].addEventListener('touchend',endTouch1,false)

	function startTouch1(event){
		startX=event.touches[0].clientX
		pageLeftRight=0
	}
	function moveTouch1(event){
		var nowX=event.touches[0].clientX
		event.preventDefault();
		if (nowX-startX>80&&nowPage1!=0) {
			pageLeftRight=1
		}else if (nowX-startX< -80) {
			pageLeftRight=-1
		}else{
			pageLeftRight=0
		};	
	}
	function endTouch1(event){
		if (pageLeftRight == 1) {
			//alert("左一页")
			nowPage1--
		}else if (pageLeftRight == -1) {
			//alert("右一页")
			if (nowPage1==1) {
				$('#page3')[0].removeEventListener('touchstart',startTouch1,false)
				$('#page3')[0].removeEventListener('touchmove',moveTouch1,false)
				$('#page3')[0].removeEventListener('touchend',endTouch1,false)
				// $('#pG3').css({display:'block'})
				// TweenLite.from($('#pG3'),.5,{opacity:0})
				Loader("moreImage","努力加载中，需要一些时间，不如发表一张作品后再来？",type="ball",0,"<a href='http://m.giccoo.com/sayno_mfw/' class='more'><img src='http://image.giccoo.com/projects/sayno_momo/img/btn-more.png' /></a>")
			}else{
				nowPage1++	
			};
			

		}else if (pageLeftRight==0) {
			//alert("不翻页")
		};
		goPage1()
	} 

	var pgA=[$('#pG1'),$('#pG2')]
	pgA[0].css({left:"50%"})
	pgA[1].css({left:"150%"})
	//pgA[2].css({left:"50%",display:"none"})
	$('#pG3').css({display:'none'})

	function goPage1(){
		for (var i = 0; i < pgA.length; i++) {
			if (i==nowPage1) {
				TweenLite.to(pgA[i],.5,{left:'50%'})
			}else if (i<nowPage1) {
				TweenLite.to(pgA[i],.5,{left:'-50%'})
			}else if (i>nowPage1) {
				TweenLite.to(pgA[i],.5,{left:'150%'})
			};
		};
	}

	$('#pG3').click(function(){
		// alert("刷新页面")
		window.location.reload()

	});
	$('.btnPicClose').click(function(){
		$('#page3').css({display:'none'});
	});

});