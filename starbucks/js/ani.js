

const ticker=new PIXI.ticker.Ticker()

var snowA=[]

function setSnow () {//=============雪花
	// body...
	for (var i = 0; i < 600; i++) {
		var _asnow=new Sprite(getTe(_CDN+"img/asnow.png")) 
		var _asnowC=new PIXI.Container()
		_asnow.pivot.set(4,4)
		_asnowC.x=Math.random()*640
		_asnowC.y=Math.random()*1500
		_asnowC.scale.x=_asnowC.scale.y=Math.random()*.8+.6
		_asnowC.alpha=Math.random()*.6+.4

		TweenMax.to(_asnow,Math.random()*1+2,{x:Math.random()*200-100,repeat:1000000,yoyo:true,ease:Sine.easeInOut})
		snowC.addChild(_asnowC)
		_asnowC.addChild(_asnow)
		snowA.push(_asnowC)
	};


	ticker.add(moveSnow)
	ticker.start()
}

var snowSpeed=2

function moveSnow(){
	for (var i = 0; i < snowA.length; i++) {
		snowA[i].y+=snowA[i].scale.x*snowA[i].scale.x*snowA[i].scale.x*snowA[i].scale.x*snowSpeed
		snowA[i].x+=snowA[i].scale.x*snowA[i].scale.x*snowA[i].scale.x*snowA[i].scale.x*1.5
		if(snowA[i].y>1500){
			snowA[i].scale.x=snowA[i].scale.y=Math.random()*.8+.6
			snowA[i].position.set(Math.random()*640,0)
			snowA[i].alpha=Math.random()*.6+.4
		}
		if(snowA[i].x>640+50){
			snowA[i].x=0
		}
	};
}