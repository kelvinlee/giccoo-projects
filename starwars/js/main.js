
$(document).ready(function load (){
	// var laserS=$("#laserS")
	var laser1=$("#laser1")
	var laser2=$("#laser2")
	var laser3=$("#laser3")

	// laserMove()
	laserMoveA()
	setTimeout(function(){
		laserMoveB()
	},666)
	setTimeout(function(){
		laserMoveC()
	},1333)


	// function laserMove(){
	// 	TweenLite.to(laserS,1.4,{x:"-=50",scale:2.2,opacity:0,onComplete:laserMove2})
	// }
	// function laserMove2(){
	// 	TweenLite.set(laserS,{x:"+=50",scale:1})
	// 	TweenLite.to(laserS,.1,{scale:1,opacity:.0,onComplete:laserMove,delay:2*Math.random()})
	// }

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
	// function redA2(){
	// 	TweenLite.to(bgRed1,.5,{opacity:0,scaleX:1,scaleY:1.3,onComplete:redA1})
	// }
	
	function redB1(){
		TweenLite.set(bgRed2,{opacity:0,scaleX:2,scaleY:0.8})
		TweenLite.to(bgRed2,1,{opacity:1,scaleX:1.5,scaleY:1,overwrite:0,ease:Linear.easeNone})
		TweenLite.to(bgRed2,1,{opacity:0,scaleX:1,scaleY:1.2,overwrite:0,delay:1,onComplete:redB1,ease:Linear.easeNone})
	}

	// function redB1(){
	// 	TweenLite.set(bgRed2,{opacity:1,scaleX:1.3,scaleY:0.8})
	// 	TweenLite.to(bgRed2,1,{opacity:0,scaleX:1,scaleY:1.3,onComplete:redB1})
	// }
	// function redB2(){
	// 	TweenLite.to(bgRed2,1,{opacity:1,onComplete:redB1})
	// }



});