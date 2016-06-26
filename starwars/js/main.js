
$(document).ready(function load (){
	var laser1=$("#laser1")
	var laser2=$("#laser2")
	var laser3=$("#laser3")

	laserMoveA()
	setTimeout(function(){
		laserMoveB()
	},666)
	setTimeout(function(){
		laserMoveC()
	},1333)


	function laserMoveA(){
		TweenLite.to(laser1,1,{scale:1,opacity:0,onComplete:laserMoveA2,ease:Linear.easeNone})
	}
	function laserMoveA2(){
		TweenLite.to(laser1,1,{scale:1,opacity:1,onComplete:laserMoveA})
	}


	function laserMoveB(){
		TweenLite.to(laser2,1,{scale:1,opacity:0,onComplete:laserMoveB2,ease:Linear.easeNone})
	}
	function laserMoveB2(){
		TweenLite.to(laser2,1,{scale:1,opacity:1,onComplete:laserMoveB})
	}

	function laserMoveC(){
		TweenLite.to(laser3,1,{scale:1,opacity:0,onComplete:laserMoveC2,ease:Linear.easeNone})
	}
	function laserMoveC2(){
		TweenLite.to(laser3,1,{scale:1,opacity:1,onComplete:laserMoveC})
	}

	var bgRed1=$("#bgred1")
	var bgRed2=$("#bgred2")


	redA1()
	setTimeout(function(){
		redB1()
	},1000)

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

	var cA=[$("#c1"),$("#c2"),$("#c3"),$("#c4"),$("#n1"),$("#n2"),$("#n3"),$("#n4")]
	setTimeout(function(){
		ani1()
	},500)
	

	function ani1(){
		for (var i = 0; i < cA.length; i++) {
			cA[i].css({display:"block"})
			TweenLite.from(cA[i],1,{opacity:0,y:"+=50",ease:Back.easeOut,delay:0.1*i})
		};
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