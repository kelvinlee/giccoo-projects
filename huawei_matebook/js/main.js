
$(document).ready(function load (){
	var zzA=[$("#zz1"),$("#zz2"),$("#zz3"),$("#zz4"),$("#zz5"),$("#zz6"),$("#zz7"),
	$("#zz8"),$("#zz9"),$("#zz10"),$("#zz11"),$("#zz12"),$("#zz13"),$("#zz14"),$("#zz15"),$("#zz16"),$("#zz17")]
	var p2tA=[$("#p2t1"),$("#p2t2"),$("#p2t3"),$("#p2t4"),$("#p2t5"),$("#p2t6"),$("#p2t7"),$("#p2t8")]

	var zz=0
	var pen=$("#pen")


	setup()

	function setup(){
		TweenMax.set($('.content'), {perspective:600})

		zzA[0].css({display:"block"})
		$("#page1").css({display:"block"})

		$("#btn1").click(function(){
			getStart();
		})
		$("#btnRule").click(function(){
			showRule();
		})
		$("#btnCloseRule").click(function(){
			hideRule();
		})
		$("#btnStart2").click(function(){
			goGame();
		})
		
	}

	
	function getStart(){
		$("#page2").css({display:"block"})
		$("#mateBook").css({top:"45%","transform":"translate3d(-50%,0%,0)","-webkit-transform":"translate3d(-50%,0%,0)","transition":"all 1.5s ease","-webkit-transition":"all 1.5s ease;"})
		$("#p1t").css({opacity:0,"transform":"translate3d(-50%,-0%,0)","-webkit-transform":"translate3d(-50%,-0%,0)","transition":"all 1.5s ease","-webkit-transition":"all 1.5s ease;"})
		TweenLite.set($("#btn1"),{scale:.8})
		TweenLite.to($("#btn1"),.5,{opacity:0,display:"none",scale:1.2,ease:Back.easeIn})
		TweenLite.to($(".bottomT"),3,{opacity:1,display:"block",delay:1})
		setTimeout(function(){	$("#p1t").css({display:"none"})	},1500)
		ani1();//屏幕动画
		ani2();//文字出现
	}

	function ani1(){//屏幕朱桢动画
		if (zz==13) {$("#screen").css({display:"block"})};
		if(zz<zzA.length-1){
			zzA[zz].css({display:"block"})
			TweenLite.to(zzA[zz],0.07,{display:"none",onComplete:ani1})
			zz++
		}else if (zz==zzA.length-1){
			zzA[zz].css({display:"block"})
		}
	}

	function ani2(){//文字出现
		for (var i = 0; i < p2tA.length; i++) {
			 var dx=Math.random()*100-50
			 var dy=Math.random()*100-50
			TweenLite.set(p2tA[i],{opacity:1,display:"block"})
			TweenLite.from(p2tA[i],1.5,{scale:8,rotationX:-360,rotationY:-180,opacity:0,delay:.08*i+.7})//Elastic
		};
		$("#btnRule").css({display:"block"});
		TweenLite.from($("#btnRule"),2,{opacity:0,y:"+=40",delay:1.5})
		$("#prints").css({display:"block"});
		TweenLite.from($("#prints"),1,{opacity:0,scale:4,delay:2.5,ease:Back.easeOut})
	}

	function showRule(){//活动规则出现
		$("#theRule").css({display:"block",opacity:0})
		TweenLite.to($("#theRule"),1,{opacity:1})

	}
	function hideRule(){//活动规则消失
		TweenLite.to($("#theRule"),1,{opacity:0,display:"none"})
	}
	function goGame(){//进入游戏页
		TweenLite.to($("#screen"),1,{opacity:0,display:"none",delay:.5,onComplete:ani3})
		for (var i = 0; i < p2tA.length; i++) {
			 var dx=Math.random()*100-50
			 var dy=Math.random()*100-50
			TweenLite.to(p2tA[i],1,{y:"+=150",rotationX:720*Math.random()-360,scale:Math.random()*2,rotationZ:90*Math.random()-45,opacity:0,delay:.05*i,display:"none"})//Elastic
		};
		TweenLite.to($("#btnRule"),.5,{opacity:0,y:"+=40",display:"none"})
		TweenLite.to($("#prints"),.5,{opacity:0,y:"+=40",display:"none"})
	}
	function ani3(){//显示游戏页
		$("#page3").css({display:"block"})
		$("#mateBook").css({top:"45%","transform":"translate3d(-50%,0%,0)","-webkit-transform":"translate3d(-50%,0%,0)","transition":"none","-webkit-transition":"none"})
		TweenLite.to($("#mateBook"),.5,{y:"+=25",opacity:0,rotationY:30,rotationZ:-30,rotationX:-30,onComplete:hidePage2,ease:Sine.easeIn})
		function hidePage2(){
			$("#page2").css({display:"none"})
		}
		TweenLite.from($("#pc"),.5,{y:"-=25",opacity:0,delay:.25,rotationY:-45,rotationZ:10,rotationX:10,ease:Sine.easeOut})
		TweenLite.from($("#p3t"),.5,{opacity:0,delay:.5})
		TweenLite.from($("#card1"),2,{opacity:0,y:"+=25",rotationY:90,delay:1+0.1*0,ease:Elastic.easeOut})
		TweenLite.from($("#card2"),2,{opacity:0,y:"+=25",rotationY:90,delay:1+0.1*1,ease:Elastic.easeOut})
		TweenLite.from($("#card3"),2,{opacity:0,y:"+=25",rotationY:90,delay:1+0.1*2,ease:Elastic.easeOut})
		TweenLite.from($("#card4"),2,{opacity:0,y:"+=25",rotationY:90,delay:1+0.1*3,ease:Elastic.easeOut})
		TweenLite.from($("#ooo"),1,{opacity:0,y:"+=40",delay:1.7})
		TweenLite.from($("#p3hint"),1,{opacity:0,y:"+=40",delay:1.8})
		TweenLite.from($("#pen"),1,{opacity:0,y:"+=40",delay:1.7})
	}

	var startX = 0;
	var startY = 0;
	var nowX
	var nowY
	var oldX=$("#ooo").css("left")
	var oldY=$("#ooo").css("top")
	var answer="none"
	var cardA=[$("#card1"),$("#card2"),$("#card3"),$("#card4")]
	$('#pen')[0].addEventListener('touchstart',startTouch,false)
	$('#pen')[0].addEventListener('touchmove',moveTouch,false)
	$('#pen')[0].addEventListener('touchend',endTouch,false)
	function startTouch(event){//拖拽
		startX=event.touches[0].clientX
		startY=event.touches[0].clientY
		//pageUpDown=0
	}
	function moveTouch(event){
		nowX=event.touches[0].clientX
		nowY=event.touches[0].clientY
		event.preventDefault();
		TweenLite.set(pen,{top:nowY,left:nowX})	
		var cardW=cardA[0].css("width")
		var cardH=cardA[0].css("height")
		answer="none"
		for (var i = 0; i < cardA.length; i++) {
			if (	(nowX-parseInt(cardA[i].css("left"))<=parseInt(cardW)/2)&&(nowX-parseInt(cardA[i].css("left"))>=-parseInt(cardW)/2)&&(nowY-parseInt(cardA[i].css("top"))<=parseInt(cardH)/2)&&(nowY-parseInt(cardA[i].css("top"))>=-parseInt(cardH)/2)	) {
				answer=i
			};
		};

	}
	function endTouch(event){
		if (answer=="none") {
			TweenLite.to(pen,.5,{top:oldY,left:oldX})
		}else if (answer==0) {
			//alert("正确")
			goNext(1)
			TweenLite.to(pen,.5,{top:oldY,left:oldX})
		}else{
			//alert("错误")
			goNext(0)
			TweenLite.to(pen,.5,{top:oldY,left:oldX})
		};
	} 
	function goNext(_ifRight){
		alert(_ifRight)
	}


});