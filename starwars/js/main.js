
$(document).ready(function load (){

	var bgRed1=$("#bgred1")
	var bgRed2=$("#bgred2")

	function redA1(){
		TweenLite.set(bgRed1,{opacity:0,scaleX:2,scaleY:.8})
		TweenLite.to(bgRed1,1,{opacity:1,scaleX:1.5,scaleY:1,overwrite:0,ease:Linear.easeNone})
		TweenLite.to(bgRed1,1,{opacity:0,scaleX:1,scaleY:1.2,overwrite:0,delay:1,onComplete:redA1,ease:Linear.easeNone})
	}
	
	function redB1(){
		TweenLite.set(bgRed2,{opacity:0,scaleX:2,scaleY:0.8})
		TweenLite.to(bgRed2,1,{opacity:1,scaleX:1.5,scaleY:1,overwrite:0,ease:Linear.easeNone})
		TweenLite.to(bgRed2,1,{opacity:0,scaleX:1,scaleY:1.2,overwrite:0,delay:1,onComplete:redB1,ease:Linear.easeNone})
	}

	var btn1=$("#btnPic2")	
	function btnMove(){
		TweenLite.set(btn1,{opacity:1,scale:1})
		TweenLite.to(btn1,1,{opacity:0,scale:1.2,onComplete:btnMove})
	}

	var cA=[$("#c1"),$("#c2"),$("#c3"),$("#c4"),$("#nn")]

	for (var i = 0; i < cA.length; i++) {
			//cA[i].css({display:"block",opacity:0})
			cA[i].css({display:"block",opacity:0,"transform":"translate3d(-50%,-80%,0)","-webkit-transform":"translate3d(-50%,-80%,0)"})
		};

	setTimeout(function(){
		ani1()
		redA1()
		setTimeout(function(){
			redB1()
		},1000)
	},1200)
	

	function ani1(){
		//for (var i = 0; i < cA.length; i++) {
			//cA[i].css({display:"block",opacity:0,"transform":"translate3d(-50%,-50%,0)","-webkit-transform":"translate3d(-50%,-50%,0)","transition":"all 0s ease 0s"})
			//TweenLite.from(cA[i],1,{opacity:0,y:"+=50",ease:Back.easeOut,delay:0.1*i})
			//cA[i].css({display:"block",opacity:1,"transform":"translate3d(-50%,-100%,0)","-webkit-transform":"translate3d(-50%,-100%,0)","transition":"all 1s ease 0.1s"})
		//};
		cA[0].css({display:"block",opacity:1,"transform":"translate3d(-50%,-100%,0)","-webkit-transform":"translate3d(-50%,-100%,0)","transition":"all .7s ease 0.0s","-webkit-transition":"all .7s ease 0.0s"})
		cA[1].css({display:"block",opacity:1,"transform":"translate3d(-50%,-100%,0)","-webkit-transform":"translate3d(-50%,-100%,0)","transition":"all .7s ease 0.1s","-webkit-transition":"all .7s ease 0.1s"})
		cA[2].css({display:"block",opacity:1,"transform":"translate3d(-50%,-100%,0)","-webkit-transform":"translate3d(-50%,-100%,0)","transition":"all .7s ease 0.2s","-webkit-transition":"all .7s ease 0.2s"})
		cA[3].css({display:"block",opacity:1,"transform":"translate3d(-50%,-100%,0)","-webkit-transform":"translate3d(-50%,-100%,0)","transition":"all .7s ease 0.3s","-webkit-transition":"all .7s ease 0.3s"})
		cA[4].css({display:"block",opacity:1,"transform":"translate3d(-50%,-100%,0)","-webkit-transform":"translate3d(-50%,-100%,0)","transition":"all .7s ease 0.4s","-webkit-transition":"all .7s ease 0.4s"})
		setTimeout(function(){
			$(".btn").css({"display":"block",opacity:0})
			TweenLite.to($(".btn"),1,{opacity:1})
			btnMove()
		},2000)


		setTimeout(function(){
			$(".t123").css({"display":"block",opacity:1})

			TweenLite.from($("#t1"),1,{opacity:0,y:"+=50",delay:0+0.2*0})
			TweenLite.from($("#t2"),1,{opacity:0,y:"+=50",delay:0+0.2*1})
			TweenLite.from($("#t3"),1,{opacity:0,y:"+=50",delay:0+0.2*2})
		},1000)
	}

	$("#btnt").click(function(){
		
	})

});