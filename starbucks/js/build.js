var _CDN = "./";
// var _CDN = "//image.giccoo.com/projects/jeep/";
var imageList = [
	_CDN+"img/bg.jpg",
	_CDN+"img/texture.png",

	_CDN+"img/bg1a.png",
	_CDN+"img/bg1b.png",
	_CDN+"img/bg1c.jpg",

	_CDN+"img/bg2a.png",
	_CDN+"img/bg2b.png",
	_CDN+"img/bg2c.jpg",

	_CDN+"img/bg3a.png",
	_CDN+"img/bg3b.png",
	_CDN+"img/bg3c.jpg",

	_CDN+"img/bg4a.png",
	_CDN+"img/bg4b.png",
	_CDN+"img/bg4c.jpg",

	_CDN+"img/asnow.png",

	_CDN+"img/m1.png",
	_CDN+"img/m2.png",

	_CDN+"img/coffee.png",
	_CDN+"img/player.png",

	_CDN+"img/char1.png",
	_CDN+"img/char2.png",
	_CDN+"img/char3.png",
	_CDN+"img/char4.png",
	_CDN+"img/char_shandow.png",

	_CDN+"img/chicken.png",
	_CDN+"img/box.png",
	_CDN+"img/tree.png",

	

];
var _NORMAL=PIXI.BLEND_MODES.NORMAL,
    _ADD=PIXI.BLEND_MODES.ADD,
    _MULTIPLY=PIXI.BLEND_MODES.MULTIPLY,
    _SCREEN=PIXI.BLEND_MODES.SCREEN;

var pStage,pApp,bg
var stageH
var theThis
var u = navigator.userAgent
var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1

var renderer
var buildUGC = function () {
	console.log("app",this,this.opts.w,this.opts.h)
	// var test = new Sprite(getTe(_CDN+"img/test.png"));
	// var gra = new Graphics();
	// var con = new Container();
	// var ani = new AnimatedSprite();
	stageH=this.opts.h
	pStage=this.stage
	getStart()
	
}

var texture
var mainPart=new PIXI.Container()
function getStart() {
	console.log("开始")
	texture=new Sprite(getTe(_CDN+"img/texture.png"))
	texture.width=640
	texture.height=stageH
	
	pStage.addChild(mainPart,texture)
	mainPart.y=stageH/2-750


	setBG()
}
var bgAC=new PIXI.Container()
var othersC=new PIXI.Container()
var bgBC=new PIXI.Container()
var snowC=new PIXI.Container()
var bgCC=new PIXI.Container()
var treeC=new PIXI.Container()

var bgA=[[],[],[],[]]//[_bgA,_bgB,_bgC]
var coffee

function setBG(){
	mainPart.addChild(bgCC,snowC,bgBC,treeC,bgAC,othersC)
	snowC.alpha=0

	for (var i = 0; i < 4; i++) {
		var j=i+1
		var _bgA=new Sprite(getTe(_CDN+"img/bg"+j+"a.png"))
		var _bgB=new Sprite(getTe(_CDN+"img/bg"+j+"b.png"))
		var _bgC=new Sprite(getTe(_CDN+"img/bg"+j+"c.jpg"))
		//bgA[i]=[_bgA,_bgB,_bgC]
		bgA[i].push(_bgA)
		bgA[i].push(_bgB)
		bgA[i].push(_bgC)
		bgAC.addChild(_bgA)
		bgBC.addChild(_bgB)
		bgCC.addChild(_bgC)
	};
	bgA[3][0].y=750-stageH/2//===月亮

	coffee=	new Sprite(getTe(_CDN+"img/coffee.png"))
	othersC.addChild(coffee)

	
	setSnow()
	setMusic1()
	setMusic11()
	setMusic22()
	setMusic33()
	setPlayer()
	setChar()
	setItem()
	changeBG(0)
}

function changeBG(_num){//=================p1换背景
	for (var i = 0; i < 4; i++) {
		if(i==_num){
			bgA[i][0].visible=true
			bgA[i][1].visible=true
			bgA[i][2].visible=true
			treeA[i].visible=true
			//console.log("-------",bgA[i][0])
		}else{
			bgA[i][0].visible=false
			bgA[i][1].visible=false
			bgA[i][2].visible=false
			treeA[i].visible=false
		}
	};
}

var bgNum=0
function q1(_num){
	if(_num==3){
		_num=4
	}else if(_num==4){
		_num=3
	}
	changeBG(_num-1)
	bgNum=_num-1

}
function q2(_num){
	TweenMax.to(music1C,1,{alpha:1})
	changeChar(_num-1)
}

var itemState=[false,false,false,false]

function q3(_array){
	console.log(_array)
 	if(_array[0]==false){
 		TweenMax.to(snowC,1,{alpha:0})
 	}else{
 		TweenMax.to(snowC,1,{alpha:1})
 	}

 	if(_array[1]==false){
 		TweenMax.to(item2,1,{alpha:0})
 		itemState[1]=false
 	}else if(itemState[1]==false){
 		TweenMax.set(item2,{alpha:1,y:-50})
 		TweenMax.to(item2,1,{y:0,ease:Bounce.easeOut})
 		itemState[1]=true
 	}

 	if(_array[2]==false){
 		TweenMax.to(item3,1,{alpha:0})
 		itemState[2]=false
 	}else if(itemState[2]==false){
 		TweenMax.set(item3,{alpha:1,y:-50})
 		TweenMax.to(item3,1,{y:0,ease:Bounce.easeOut})
 		itemState[2]=true
 	}

 	if(_array[3]==false){
 		TweenMax.to(treeA[bgNum],1,{alpha:0})
 		itemState[3]=false
 	}else if(itemState[3]==false){
 		TweenMax.set(treeA[bgNum],{alpha:1,y:669-100})
 		TweenMax.to(treeA[bgNum],1,{y:669,ease:Bounce.easeOut})
 		itemState[3]=true
 	}
}


function nextPage(){
	console.log("nextPage")
}