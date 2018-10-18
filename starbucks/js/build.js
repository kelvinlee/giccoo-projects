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
var bgBC=new PIXI.Container()
var snowC=new PIXI.Container()
var bgCC=new PIXI.Container()

var bgA=[[],[],[],[]]//[_bgA,_bgB,_bgC]

function setBG(){
	mainPart.addChild(bgCC,snowC,bgBC,bgAC)

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

	changeBG(0)
	setSnow()
}

function changeBG(_num){//=================p1换背景
	for (var i = 0; i < 4; i++) {
		if(i==_num){
			bgA[i][0].visible=true
			bgA[i][1].visible=true
			bgA[i][2].visible=true
			//console.log("-------",bgA[i][0])
		}else{
			bgA[i][0].visible=false
			bgA[i][1].visible=false
			bgA[i][2].visible=false
		}
	};
}



function nextPage(){
	console.log("nextPage")
}