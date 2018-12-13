var _CDN = "./";
// var _CDN = "//image.giccoo.com/projects/emoji/";
var imageList = [
	_CDN+"img/p1bg.jpg",
	_CDN+"img/bg_top.png",
	_CDN+"img/bg_down.png",
	_CDN+"img/p1logo.png",

	_CDN+"img/p1t1.png",
	_CDN+"img/p1t2.png",
	_CDN+"img/p1t3.png",
	_CDN+"img/p1t5a.png",
	_CDN+"img/p1t5b.png",

	_CDN+"img/p1t4a.png",
	_CDN+"img/p1t4b.png",
	_CDN+"img/p1t4c.png",
	_CDN+"img/p1t4d.png",

	_CDN+"img/p1line1.png",
	_CDN+"img/p1line2.png",
	_CDN+"img/p1line3.png",
	_CDN+"img/p1line4.png",
	_CDN+"img/p1line5.png",
	_CDN+"img/p1line6.png",
	_CDN+"img/p1line7.png",

	_CDN+"img/p1snow.png",

	_CDN+"img/e1.png",
	_CDN+"img/e2.png",
	_CDN+"img/e3.png",
	_CDN+"img/e4.png",
	_CDN+"img/e5.png",
	_CDN+"img/e6.png",
	_CDN+"img/e7.png",
	_CDN+"img/e8.png",
	_CDN+"img/e9.png",
	_CDN+"img/e10.png",
	_CDN+"img/e11.png",
	_CDN+"img/e12.png",
	_CDN+"img/e13.png",
	_CDN+"img/e14.png",


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


function getStart(){
	setPage1()
	console.log("?111")
}

