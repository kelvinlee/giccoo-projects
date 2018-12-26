var _CDN = "./";
// var _CDN = "//image.giccoo.com/projects/emoji/";
var imageList = [
	_CDN+"img/startboy.png",
	_CDN+"img/startgirl.png",

	_CDN+"img/hint1.png",
	_CDN+"img/hint2.png",
	_CDN+"img/hint3.png",
	_CDN+"img/hint4.png",

	_CDN+"img/startbtn.png",

	_CDN+"img/bgc.png",

	_CDN+"img/wave1.png",
	_CDN+"img/wave2.png",
	_CDN+"img/wave3.png",
	_CDN+"img/wave4.png",
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
	gameBegin(1)
}

var sex=0

function gameBegin(_sex){//1男 2女
	sex=_sex
	console.log("?111")
	setHintPage()
}

