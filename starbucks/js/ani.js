//====================setItem
var item2,item3
var tree1,tree2,tree3,tree4
var treeA=[]
function setItem(){
	item2=new Sprite(getTe(_CDN+"img/chicken.png"))
	item3=new Sprite(getTe(_CDN+"img/box.png"))
	tree1=new Sprite(getTe(_CDN+"img/tree.png"))
	tree2=new Sprite(getTe(_CDN+"img/tree.png"))
	tree3=new Sprite(getTe(_CDN+"img/tree.png"))
	tree4=new Sprite(getTe(_CDN+"img/tree.png"))
	treeA=[tree1,tree2,tree3,tree4]
	othersC.addChildAt(item2,1)
	othersC.addChildAt(item3,1)
	item2.alpha=item3.alpha=0

	treeC.addChild(tree1,tree2,tree3,tree4)
	tree1.position.set(248,669)
	tree2.position.set(248,669)
	tree3.position.set(248,669)
	tree4.position.set(248,669)

	tree1.alpha=tree2.alpha=tree3.alpha=tree4.alpha=0

}


//=========================================================================雪花

const ticker=new PIXI.ticker.Ticker()

var snowA=[]
function setSnow () {
	// body...
	for (var i = 0; i < 300; i++) {
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
	music1C.alpha=0
	//_player.tint=0xff0000

}

//=========================================================================人物
var charC=new PIXI.Container()
var charS=new PIXI.Container()
var char1,char2,char3,char4
var charA=[]
var charShandow
var music11C=new PIXI.Container()
var music22C=new PIXI.Container()
var music33C=new PIXI.Container()
var music44C=new PIXI.Container()
var musicA=[music11C,music22C,music33C,music44C]
function setChar(){


	othersC.addChild(charC,music11C,music22C,music33C,music44C)
	charC.visible=false
	
	charShandow=new Sprite(getTe(_CDN+"img/char_shandow.png")) 

	charC.addChild(charShandow,charS)

	char1=new Sprite(getTe(_CDN+"img/char1.png")) 
	char2=new Sprite(getTe(_CDN+"img/char2.png")) 
	char3=new Sprite(getTe(_CDN+"img/char3.png")) 
	char4=new Sprite(getTe(_CDN+"img/char4.png")) 

	// char1.pivot.x=char2.pivot.x=char3.pivot.x=char4.pivot.x=108.5
	// char1.pivot.y=char2.pivot.y=char3.pivot.y=char4.pivot.y=141

	// char1.x=char2.x=char3.x=char4.x=108.5
	// char1.y=char2.y=char3.y=char4.y=141

	charS.addChild(char1,char2,char3,char4)
	charA=[char1,char2,char3,char4]

	charS.pivot.set(109,282)
	charShandow.pivot.set(78,30)

	charC.position.set(461,1205)

	//changeChar(0)

	TweenMax.to(charS.scale,.5,{y:1.05,x:0.95,repeat:10000,yoyo:true,ease:Sine.easeInOut})
	//TweenMax.set(charS.skew,{x:-0.1})
	TweenMax.to(charC.skew,1,{x:0.1,repeat:10000,yoyo:true,ease:Sine.easeInOut})

}

function changeChar(_num){
	charC.visible=true
	for (var i = 0; i < 4; i++) {
		if(_num!=i){
			charA[i].visible=false
			musicA[i].visible=false
		}else{
			charA[i].visible=true
			musicA[i].visible=true
		}
	};
	TweenMax.set(charA[_num],{y:-100})
	//TweenMax.set(charA[_num].scale,{x:0,y:0})
	TweenMax.to(charA[_num],1,{y:0,ease:Bounce.easeOut})
	//TweenMax.to(charA[_num].scale,1,{x:1,y:1})
}

//=========================================================================音符11 绿色

var m11A=[]
function setMusic11(){
	
	//othersC.addChild(music1C)
	music11C.visible=false
	music11C.position.set(410,1000)

	for (var i = 0; i < 16; i++) {
		var _m
		var _mC=new PIXI.Container()
		if(Math.random()>.5){
			_m=new Sprite(getTe(_CDN+"img/m1.png")) 
		}else{
			_m=new Sprite(getTe(_CDN+"img/m2.png")) 
		}
		_m.tint=0x318d4b
		music11C.addChild(_mC)
		_mC.addChild(_m)
		m11A.push(_m)
		_mC.scale.x=_m.scale.y=Math.random()*.4+.8
		_mC.position.set(Math.random()*150-75,Math.random()*10-5)
		TweenMax.to(_mC,2+Math.random()*1,{y:-Math.random()*50-100,alpha:0,repeat:10000,delay:Math.random()*2,repeatDelay:Math.random()*2,rotation:Math.random()*Math.PI-.8*Math.PI})
		TweenMax.to(_m,1+Math.random()*1,{x:Math.random()*50-25,repeat:10000,yoyo:true})
	};

}

//=========================================================================音符22 绿色

var m22A=[]
function setMusic22(){
	
	//othersC.addChild(music1C)
	music22C.visible=false
	music22C.position.set(350,940)

	for (var i = 0; i < 16; i++) {
		var _m
		var _mC=new PIXI.Container()
		if(Math.random()>.5){
			_m=new Sprite(getTe(_CDN+"img/m1.png")) 
		}else{
			_m=new Sprite(getTe(_CDN+"img/m2.png")) 
		}
		_m.tint=0xffdc0d
		music22C.addChild(_mC)
		_mC.addChild(_m)
		m22A.push(_m)
		_mC.scale.x=_m.scale.y=Math.random()*.4+.8
		_mC.position.set(Math.random()*10-5,Math.random()*10-5)
		TweenMax.to(_mC,2+Math.random()*1,{y:-Math.random()*50-100,alpha:0,repeat:10000,delay:Math.random()*2,repeatDelay:Math.random()*2,rotation:Math.random()*Math.PI-.8*Math.PI})
		TweenMax.to(_m,1+Math.random()*1,{x:Math.random()*50-25,repeat:10000,yoyo:true})
	};

}
//=========================================================================音符33 绿色

var m33A=[]
function setMusic33(){
	
	//othersC.addChild(music1C)
	music33C.visible=false
	music33C.position.set(480,1000)

	for (var i = 0; i < 16; i++) {
		var _m
		var _mC=new PIXI.Container()
		if(Math.random()>.5){
			_m=new Sprite(getTe(_CDN+"img/m1.png")) 
		}else{
			_m=new Sprite(getTe(_CDN+"img/m2.png")) 
		}
		_m.tint=0xd92317
		music33C.addChild(_mC)
		_mC.addChild(_m)
		m33A.push(_m)
		_mC.scale.x=_m.scale.y=Math.random()*.4+.8
		_mC.position.set(Math.random()*10-5,Math.random()*10-5)
		TweenMax.to(_mC,2+Math.random()*1,{y:-Math.random()*50-100,alpha:0,repeat:10000,delay:Math.random()*2,repeatDelay:Math.random()*2,rotation:Math.random()*Math.PI-.8*Math.PI})
		TweenMax.to(_m,1+Math.random()*1,{x:Math.random()*50-25,repeat:10000,yoyo:true})
	};

}
