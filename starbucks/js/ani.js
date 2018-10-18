

const ticker=new PIXI.ticker.Ticker()

var snowA=[]
//=========================================================================雪花
function setSnow () {
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

//=========================================================================音符1 白色
var music1C=new PIXI.Container()
var m1A=[]
function setMusic1(){
	
	//othersC.addChild(music1C)

	music1C.position.set(320,950)

	for (var i = 0; i < 16; i++) {
		var _m
		var _mC=new PIXI.Container()
		if(Math.random()>.5){
			_m=new Sprite(getTe(_CDN+"img/m1.png")) 
		}else{
			_m=new Sprite(getTe(_CDN+"img/m2.png")) 
		}
		music1C.addChild(_mC)
		_mC.addChild(_m)
		m1A.push(_m)
		_mC.scale.x=_m.scale.y=Math.random()*.4+.8
		_mC.position.set(Math.random()*10-5,Math.random()*10-5)
		TweenMax.to(_mC,2+Math.random()*1,{y:-Math.random()*50-100,alpha:0,repeat:10000,delay:Math.random()*2,repeatDelay:Math.random()*2,rotation:Math.random()*Math.PI-.8*Math.PI})
		TweenMax.to(_m,1+Math.random()*1,{x:Math.random()*50-25,repeat:10000,yoyo:true})
	};

}

//=========================================================================点唱机

var playerC=new PIXI.Container()

function setPlayer(){
	othersC.addChild(playerC)
	var _player=new Sprite(getTe(_CDN+"img/player.png")) 
	playerC.addChild(music1C,_player)
	music1C.position.set(80,30)
	playerC.position.set(183,790)
}
