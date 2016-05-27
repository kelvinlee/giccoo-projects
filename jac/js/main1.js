
$(document).ready(function load (){
	loadingLine()
	function loadingLine(){
		var lineA=[$("#line1"),$("#line2"),$("#line3"),$("#line4"),$("#line5"),$("#line6")]
		for (var i = 0; i < lineA.length; i++) {
			lineA[i].css({"width":43.3+2*i+"%","opacity": 1-i*.2})
			TweenLite.to(lineA[i],1,{width:43.3+2*(i+1)+"%",opacity:1-(i+1)*.2,ease:Linear.easeNone})
		};
		TweenLite.to(lineA,1,{onComplete:loadingLine})//记得加loading结束去循环
	}

	page1Line()
	function page1Line(){
		var lineA1=[$("#p1line1"),$("#p1line2"),$("#p1line3"),$("#p1line4"),$("#p1line5"),$("#p1line6")]
		for (var i = 0; i < lineA1.length; i++) {
			lineA1[i].css({"width":100+6*i+"%","opacity": 1-i*.2,"top":75-i*.2+"%"})
			TweenLite.to(lineA1[i],.5,{width:100+6*(i+1)+"%",opacity:1-(i+1)*.2,top:75-(i+1)*.2+"%",ease:Linear.easeNone})
		};
		TweenLite.to(lineA1,.5,{onComplete:page1Line})
	}

	setSlide();
	function setSlide(){
		var nowPage = 0;
		var startY = 0;
		var startScrollTop;
		var pageUpDown =0
		var sliderA=[$('#starter'),$('#starter1'),$('#starter2'),$('#page1'),$('#page2'),$('#page3'),$('#page4'),$('#page5'),$('#page6'),$('#page7'),$('#page8')]
		$('.content')[0].addEventListener('touchstart',startTouch,false)
		$('.content')[0].addEventListener('touchmove',moveTouch,false)
		$('.content')[0].addEventListener('touchend',endTouch,false)
		function startTouch(event){
			startY=event.touches[0].clientY
			pageUpDown=0
		}
		function moveTouch(event){
			var nowY=event.touches[0].clientY
			event.preventDefault();
			if (nowY-startY>80&&nowPage!=0) {
				pageUpDown=1
			}else if (nowY-startY< -80&&nowPage!=10) {
				pageUpDown=-1
			}else{
				pageUpDown=0
			};	
		}
		function endTouch(event){
			if (pageUpDown == 1) {
				//alert("上一页")
				nowPage--
				goPage()
			}else if (pageUpDown == -1) {
				//alert("下一页")
				nowPage++
				goPage()
			}else if (pageUpDown==0) {
				//alert("不翻页")
			};	
		} 
		function goPage(){
			 for (var i = 0; i < sliderA.length; i++) {
			 	if (i<nowPage) {
			 		TweenLite.to(sliderA[i],.5,{top:"-100%"})//,ease:Back.easeOut
			 	};
			 	if (i==nowPage) {
			 		TweenLite.to(sliderA[i],.5,{top:"0%"})
			 		if (i==0) {ani1()};
			 		if (i==1) {ani2()};
			 		if (i==2) {ani3()};
			 		if (i>2&&i<10) {pageAni1(i-3)};
			 	};
			 	if (i>nowPage) {
			 		TweenLite.to(sliderA[i],.5,{top:"100%"})
			 	};
			 }
		}

		$(".goend").click(function(){
			nowPage=10
			goPage()
		})
		$("#btnShare").click(function(){
			$("#shareLayer").css({"display":"block"})
			TweenLite.to($("#shareLayer"),1,{opacity:1})
			$("#logo").css({"opacity":.5})
		})
		$("#shareLayer").click(function(){
			TweenLite.to($("#shareLayer"),1,{opacity:0,display:"none"})
		})


		$("#btnSubmit").click(function(){
			$("#doneLayer").css({"display":"block"})
			TweenLite.to($("#doneLayer"),1,{opacity:1})
		})


		
		
	}



	var container=$('body')
	TweenMax.set(container, {perspective:500})

	ani1()

	function ani1(){
		var t1=$("#p1t1")
		var t2=$("#p1t2")
		var t3=$("#p1t3")
		var t4=$("#p1t4")
		var t5=$("#p1t5")
		t1.css({'opacity':0,'left':'0','top':'50%','transform':'translate3d(-50%,-50%,0) rotateY(-90deg)','-webkit-transform':'translate3d(-50%,-50%,0) rotateY(-90deg)'})
		t2.css({'opacity':0,'left':'100%','top':'50%','transform':'translate3d(-50%,-50%,0) rotateY(90deg)','-webkit-transform':'translate3d(-50%,-50%,0) rotateY(90deg)'})
		t3.css({'opacity':0,'top':'48%'})
		t4.css({'opacity':0,'top':'48%'})
		t5.css({'opacity':0,'top':'48%'})
		TweenLite.to(t1,1,{rotationY:'0',opacity:1,left:"50%",delay:0,ease:Back.easeOut,overwrite:0})
		TweenLite.to(t2,1,{rotationY:'0',opacity:1,left:"50%",delay:0.1,ease:Back.easeOut,overwrite:0})
		TweenLite.to(t1,.8,{top:'34%',ease:Back.easeOut,delay:1.5})
		TweenLite.to(t2,.8,{top:'34%',ease:Back.easeOut,delay:1.6})

		TweenLite.to(t5,1,{top:'35%',opacity:1,ease:Back.easeOut,delay:1.6+.05})
		TweenLite.to(t4,1,{top:'35%',opacity:1,ease:Back.easeOut,delay:1.6+.05*2})
		TweenLite.to(t3,1,{top:'35%',opacity:1,ease:Back.easeOut,delay:1.6+.05*3})
	}

	
	function ani2(){
		var myC=$("#Canvas1")
		var ctx=myC[0].getContext("2d")
		ctx.moveTo(0,0);
		ctx.lineTo(480,0);
		ctx.lineTo(480,268);
		ctx.lineTo(0,493)
		ctx.clip();

		var img=new Image()
		img.src="img/page2pic.png"
		img.onload=function(){ 
			startDraw()
		}

		function startDraw(){
			var picY=400
			var draw=setInterval(function(){
				picY*=.95;
				ctx.clearRect(0,0,480,493)
				ctx.drawImage(img,0,picY);
				if (picY<2) {
					clearInterval(draw);
				};
			},20)
		}
		
       	var t1=$("#p2t1")
		var t2=$("#p2t2")
		var t3=$("#p2t3")
		var t4=$("#p2t4")
		t1.css({'opacity':0,'top':'85%'})
		t2.css({'opacity':0,'top':'85%'})
		t3.css({'opacity':0,'top':'85%'})
		t4.css({'opacity':0,'top':'85%'})
		TweenLite.to(t1,1,{top:'75%',opacity:1,ease:Back.easeOut,delay:.5+.05})
		TweenLite.to(t2,1,{top:'75%',opacity:1,ease:Back.easeOut,delay:.5+.05*2})
		TweenLite.to(t3,1,{top:'75%',opacity:1,ease:Back.easeOut,delay:.5+.05*3})
		TweenLite.to(t4,1,{top:'75%',opacity:1,ease:Back.easeOut,delay:.5+.05*4})

	}

	
	function ani3(){
		var myC2=$("#Canvas2")
		var ctx2=myC2[0].getContext("2d")
		ctx2.moveTo(0,0);
		ctx2.lineTo(480,0);
		ctx2.lineTo(480,494);
		ctx2.lineTo(0,268);
		ctx2.clip();

		var img2=new Image()
		img2.src="img/page3pic.png"
		img2.onload=function(){ 
			startDraw2()
		}

		function startDraw2(){
			var picY2=400
			var draw2=setInterval(function(){
				picY2*=.95;
				ctx2.clearRect(0,0,480,494)
				ctx2.drawImage(img2,0,picY2);
				if (picY2<2) {
					clearInterval(draw2);
				};
			},20)
		}
		
       	var t1=$("#p3t1")
		var t2=$("#p3t2")
		t1.css({'opacity':0,'top':'80%'})
		t2.css({'opacity':0,'top':'80%'})
		TweenLite.to(t1,1,{top:'70%',opacity:1,ease:Back.easeOut,delay:.5+.05})
		TweenLite.to(t2,1,{top:'70%',opacity:1,ease:Back.easeOut,delay:.5+.05*2})
	}

	//pageAni1()
	function pageAni1(i){
		var bigN=[$("#num1"),$("#num2"),$("#num3"),$("#num4"),$("#num5"),$("#num6"),$("#num7")];
		var sq=[$("#m1t0"),$("#m2t0"),$("#m3t0"),$("#m4t0"),$("#m5t0"),$("#m6t0"),$("#m7t0")];
		var tA=[
		[$("#m1t1"),$("#m1t2"),$("#m1t3"),$("#m1t4"),$("#m1t5"),$("#m1t6"),$("#m1t7")],
		[$("#m2t1"),$("#m2t2"),$("#m2t3"),$("#m2t4"),$("#m2t5"),$("#m2t6")],
		[$("#m3t1"),$("#m3t2"),$("#m3t3"),$("#m3t4"),$("#m3t5"),$("#m3t6")],
		[$("#m4t1"),$("#m4t2"),$("#m4t3"),$("#m4t4"),$("#m4t5"),$("#m4t6"),$("#m4t7"),$("#m4t8")],
		[$("#m5t1"),$("#m5t2"),$("#m5t3"),$("#m5t4"),$("#m5t5"),$("#m5t6")],
		[$("#m6t1"),$("#m6t2"),$("#m6t3"),$("#m6t4"),$("#m6t5"),$("#m6t6"),$("#m6t7"),$("#m6t8"),$("#m6t9"),$("#m6t10")],
		[$("#m7t1"),$("#m7t2"),$("#m7t3"),$("#m7t4"),$("#m7t5"),$("#m7t6"),$("#m7t7"),$("#m7t8")],

		];
		var car=[$("#mcar1"),$("#mcar2"),$("#mcar3"),$("#mcar4"),$("#mcar5"),$("#mcar6"),$("#mcar7")];
		var end=[$("#m1_end"),$("#m2_end"),$("#m3_end"),$("#m4_end"),$("#m5_end"),$("#m6_end"),$("#m7_end")];

		//bigN.css({"opacity":0,"left":"0%"})
		sq[i].css({"opacity":0,"top":"100%"})
		//car.css({"opacity":0,"top":"100%"})
		//end.css({"opacity":0,"top":"100%"})
		for (var j = 0; j < tA[i].length; j++) {
			//tA[i].css({"opacity":0,"left":"0%"})
			//TweenLite.to(tA[i],2,{opacity:1,left:"50%",ease:Elastic.easeOut,delay:.5+0.05*i})
			var zf=-1
			if (j%2==0) {zf=1};
			TweenLite.from(tA[i][j],1,{opacity:0,rotationY:360*Math.random()-180,rotationX:-180*Math.random()+90,left:100*Math.random()+"%",z:800,ease:Back.easeOut,delay:.5+0.07*j})
		};

		//TweenLite.to(bigN,4,{opacity:1,left:"50%",ease:Quint.easeOut})
		TweenLite.from(bigN[i],4,{opacity:0,left:"-50%",ease:Quint.easeOut})
		TweenLite.to(sq[i],2,{opacity:1,top:"95%",ease:Elastic.easeOut,delay:.5-0.05})
		TweenLite.from(car[i],2,{opacity:0,left:"60%",ease:Quint.easeOut,delay:.5})
		TweenLite.from(end[i],4,{opacity:0,ease:Quint.easeOut,delay:.5})

	}



});