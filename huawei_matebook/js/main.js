
$(document).ready(function load (){
	var zzA=[$("#zz1"),$("#zz2"),$("#zz3"),$("#zz4"),$("#zz5"),$("#zz6"),$("#zz7"),
	$("#zz8"),$("#zz9"),$("#zz10"),$("#zz11"),$("#zz12"),$("#zz13"),$("#zz14"),$("#zz15"),$("#zz16"),$("#zz17")]
	var p2tA=[$("#p2t1"),$("#p2t2"),$("#p2t3"),$("#p2t4"),$("#p2t5"),$("#p2t6"),$("#p2t7"),$("#p2t8")]

	var zz=0
	var pen=$("#pen")
	var loop1=0


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
		$("#prints").click(function(){
			loop1=1
			goGame();
		})
		
	}

	
	function getStart(){
		$("#page2").css({display:"block"})
		$("#mateBook").css({top:"42%","transform":"translate3d(-50%,0%,0)","-webkit-transform":"translate3d(-50%,0%,0)","transition":"all 1.5s ease","-webkit-transition":"all 1.5s ease;"})
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
			TweenLite.from(p2tA[i],1,{y:"+=60",opacity:0,delay:.1*i+.7,ease:Back.easeOut})//TweenLite.from(p2tA[i],1.5,{scale:8,rotationX:-360,rotationY:-180,opacity:0,delay:.08*i+.7})
		};
		$("#btnRule").css({display:"block"});
		TweenLite.from($("#btnRule"),1,{opacity:0,y:"+=40",delay:1.5})
		$("#prints").css({display:"block"});
		TweenLite.from($("#prints"),1,{opacity:0,scale:4,delay:2.5,ease:Back.easeOut,onComplete:prints1})
	}

	function prints1(){
		TweenLite.to($("#prints"),.5,{opacity:0.2,scale:.8,onComplete:prints2,delay:.2})
	}

	function prints2(){
		if (loop1==0) {
			TweenLite.to($("#prints"),1,{opacity:1,scale:1,onComplete:prints1})
		};
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
			TweenLite.to(p2tA[i],1,{opacity:0,delay:.05*i,display:"none"})//Elastic
		};
		TweenLite.to($("#btnRule"),.5,{opacity:0,y:"+=40",display:"none"})
		TweenLite.to($("#prints"),.5,{opacity:0,y:"+=40",display:"none"})
	}
	function ani3(){//显示游戏页
		$("#page3").css({display:"block"})
		$("#mateBook").css({"transform":"translate3d(-50%,0%,0)","-webkit-transform":"translate3d(-50%,0%,0)","transition":"none","-webkit-transition":"none"})
		TweenLite.to($("#mateBook"),.5,{opacity:0,onComplete:hidePage2,ease:Sine.easeIn})
		function hidePage2(){
			$("#page2").css({display:"none"})
		}
		$("#pc").css({opacity:0,"transition":"none","-webkit-transition":"none"})
		setTimeout(function(){
			$("#pc").css({opacity:1,"transition":"all 1s ease","-webkit-transition":"all 1s ease"})
		},0)
		
		//TweenLite.from($("#pc"),.5,{y:"-=25",opacity:0,delay:.25,rotationY:-45,rotationZ:10,rotationX:10,ease:Sine.easeOut})
		TweenLite.from($("#p3t"),.5,{opacity:0})
		TweenLite.from($("#card1"),2,{opacity:0,y:"+=25",rotationY:90,delay:.5+0.1*0,ease:Elastic.easeOut})
		TweenLite.from($("#card2"),2,{opacity:0,y:"+=25",rotationY:90,delay:.5+0.1*1,ease:Elastic.easeOut})
		TweenLite.from($("#card3"),2,{opacity:0,y:"+=25",rotationY:90,delay:.5+0.1*2,ease:Elastic.easeOut})
		TweenLite.from($("#card4"),2,{opacity:0,y:"+=25",rotationY:90,delay:.5+0.1*3,ease:Elastic.easeOut,onComplete:reSetPosition})
		TweenLite.from($("#ooo"),.5,{opacity:0,y:"+=40",delay:1.2,onComplete:oooloop})
		TweenLite.from($("#p3hint"),.5,{opacity:0,y:"+=40",delay:1.3})
		TweenLite.from($("#pen"),.5,{opacity:0,y:"+=40",delay:1.2})
		function reSetPosition(){
			$(".card").css({"transform":"translate3d(0%,-50%,0)","-webkit-transform":"translate3d(0%,-50%,0)"})
			$("#card1").css({left:"27%"})
			$("#card2").css({left:"39%"})
			$("#card3").css({left:"51%"})
			$("#card4").css({left:"63%"})
		}

	}
var ifooo=0
function oooloop(){
	if(ifooo==0){
		TweenLite.set($("#ooo"),{scale:0.8,opacity:1})
		TweenLite.to($("#ooo"),1,{scale:1,opacity:0,onComplete:oooloop})
	}
}
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

	}
	function moveTouch(event){
		nowX=event.touches[0].clientX
		nowY=event.touches[0].clientY
		event.preventDefault();	
		pen.css({top:nowY,left:nowX})
		var cardW=cardA[0].width()//css("width")
		var cardH=cardA[0].height()//css("height")
		answer="none"
		for (var i = 0; i < cardA.length; i++) {
			if (	(nowX-parseInt(cardA[i].css("left"))<=parseInt(cardW))&&(nowX-parseInt(cardA[i].css("left"))>=0)&&(nowY-parseInt(cardA[i].css("top"))<=parseInt(cardH))&&(nowY-parseInt(cardA[i].css("top"))>=-parseInt(cardH)/2)	) {
				answer=i
			};
		};

	}
	function endTouch(event){
		oldX="81%"//$("#ooo").css("left")
		oldY="55%"//$("#ooo").css("top")
		if (answer=="none") {
			//TweenLite.to(pen,.5,{top:parseInt(oldY),left:parseInt(oldX)})
			pen.css({top:oldY,left:oldX})
		}else if (answer==0) {
			//alert("正确")
			goNext(1)
			//TweenLite.to(pen,.5,{top:parseInt(oldY),left:parseInt(oldX)})
			pen.css({top:oldY,left:oldX})
		}else{
			//alert("错误")
			goNext(0)
			//TweenLite.to(pen,.5,{top:parseInt(oldY),left:parseInt(oldX)})
			pen.css({top:oldY,left:oldX})
		};
	} 
	function goNext(_ifRight){
		ifooo=1
		pen.css({display:"none"})
		$("#p3hint").css({display:"none"})
		$("#ooo").css({display:"none"})

		var yn=[$("#ifNo"),$("#ifYes")]
		yn[_ifRight].css({display:"block",opacity:0})
		for (var i = 0; i < cardA.length; i++) {
			cardA[i].css({display:"none"})
		};
		TweenLite.to(yn[_ifRight],.5,{opacity:1,width:"100%"})
		$("#pc").css({"z-index":100,top:"49%",opacity:1,width:"100%",transform:"translate3d(-50%,-50%,0)","-webkit-transform":"translate3d(-50%,-50%,0)","transition":"all .5s ease","-webkit-transition":"all .5s ease"})
		yn[_ifRight].css({"z-index":101})
		$(".blackBGall").css({display:"block",opacity:0.8})
		$(".bottomT2").css({display:"block",opacity:0.8})
		$(".timeLeft").css({display:"block"})
		setTimeout(function(){
			$(".timeLeft").text("（页面将于1秒后自动跳转）")
		},10)

		setTimeout(function(){
			$(".timeLeft").text("（页面将于1秒后自动跳转）")
		},20)

		setTimeout(function(){
			$("#page3").css({display:"none"})
			$("#page4").css({display:"block"})
			finalPage()
		},1000)
	}

	function finalPage(){
		$("#gamebg").css({display:"block"})
		$("#game1").css({display:"block"})
		$("#gamea").css({display:"block"})
		$("#gameb").css({display:"block"})
		$("#gamec").css({display:"block"})

		$(".game").click(function(){
			startGame()
		})
		$("#p4btn").click(function(){
			startGame()
		})
	}

	function startGame(){
		$("#game1").css({display:"none"})
		$("#game2").css({display:"block"})
		setTimeout(function(){//显示gif
			$("#game1").css({display:"block"})
			$("#game2").css({display:"none"})
			$("#gamea").css({display:"none"})
			$("#gameb").css({display:"none"})
			$("#gamec").css({display:"none"})
			$("#g1").css({display:"block"})
			$("#g2").css({display:"block"})
			$("#g3").css({display:"block"})
		},200)

		setTimeout(function(){//显示gif
			$("#gamea").css({display:"block"})
			$("#gameb").css({display:"none"})
			$("#gamec").css({display:"none"})
			$("#g1").css({display:"none"})
			$("#g2").css({display:"block"})
			$("#g3").css({display:"block"})

			TweenLite.from($("#gamea"),1.5,{y:"-=20",ease:Elastic.easeOut})
		},1500)

		setTimeout(function(){//显示gif
			$("#gamea").css({display:"block"})
			$("#gameb").css({display:"block"})
			$("#gamec").css({display:"none"})
			$("#g1").css({display:"none"})
			$("#g2").css({display:"none"})
			$("#g3").css({display:"block"})

			TweenLite.from($("#gameb"),1.5,{y:"-=20",ease:Elastic.easeOut})
		},2000)

		setTimeout(function(){//显示gif
			$("#gamea").css({display:"block"})
			$("#gameb").css({display:"block"})
			$("#gamec").css({display:"block"})
			$("#g1").css({display:"none"})
			$("#g2").css({display:"none"})
			$("#g3").css({display:"none"})

			TweenLite.from($("#gamec"),1.5,{y:"-=20",ease:Elastic.easeOut})
		},2500)

		setTimeout(function(){
			window.location.href="http://redbox.wepiao.com/index.html?pid=acf13e85ef280289&channelid=3&chid=100";
			//window.location.href="http://www.baidu.com";
		},3500)
	}


});