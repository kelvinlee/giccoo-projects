//var _CDN = "./";
//var _CDN = "//image.giccoo.com/projects/draw-board/";
var imageList = [
	_CDN+"img/bag.png",
	_CDN+"img/logo.png",
	_CDN+"img/bg_top.jpg",
	_CDN+"img/bg_down.jpg",
	_CDN+"img/bg_mid.jpg",

];
var _NORMAL=PIXI.BLEND_MODES.NORMAL,
    _ADD=PIXI.BLEND_MODES.ADD,
    _MULTIPLY=PIXI.BLEND_MODES.MULTIPLY,
    _SCREEN=PIXI.BLEND_MODES.SCREEN;

var pStage,pApp,bg
var stageH

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


function getStart(){
	
	setBG()
	setPage1()
	
}

var bagA=[]
var page1=new PIXI.Container()
function setPage1(){
	pStage.addChild(page1)
	for (var i = 0; i < 9; i++) {
		var _bag=new Sprite(getTe(_CDN+"img/bag.png"))
		bagA.push(_bag)
		page1.addChild(_bag)
		_bag.pivot.set(84,61.5)
		
		_bag.position.set(750/2-206+i%3*206,stageH/2-285+parseInt(i/3)*177)
	};
}

var bgC=new PIXI.Container()
function setBG(){
	var bg_top=new Sprite(getTe(_CDN+"img/bg_top.jpg"))
	var bg_down=new Sprite(getTe(_CDN+"img/bg_down.jpg"))
	var bg_mid=new Sprite(getTe(_CDN+"img/bg_mid.jpg"))
	var logo=new Sprite(getTe(_CDN+"img/logo.png"))
	pStage.addChild(bgC)
	bgC.addChild(bg_mid,bg_top,bg_down,logo)
	bg_down.y=stageH-510
	bg_mid.y=429
	bg_mid.height=stageH-430-510+2
}