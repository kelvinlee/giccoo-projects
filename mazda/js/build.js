var _CDN = "./";
// var _CDN = "//image.giccoo.com/projects/jeep/";
var imageList = [
	_CDN+"img/bg.jpg",
	_CDN+"img/texture.jpg",
	_CDN+"img/p1a.png",
	_CDN+"img/20.png",
	_CDN+"img/19.png",
	_CDN+"img/18.png",
	_CDN+"img/p1aup.png",
	_CDN+"img/a-text-1.png",
	_CDN+"img/a-text-2.png",
	_CDN+"img/a-text-3.png",
	_CDN+"img/a-text-4.png",
	_CDN+"img/a-text-5.png",
	_CDN+"img/a-text-6.png",
	_CDN+"img/elevator-light.png",
	
	_CDN+"img/p2girl.png",
	_CDN+"img/p2girlb.png",
	_CDN+"img/p2others.png",
	_CDN+"img/p2tiger.png",
	_CDN+"img/p2flash1.png",
	_CDN+"img/p2flash2.png",

	_CDN+"img/p3table.png",
	_CDN+"img/p3bird.png",
	_CDN+"img/p3girl1.png",
	_CDN+"img/p3girl2.png",
	_CDN+"img/p3head1.png",
	_CDN+"img/p3head2.png",
	_CDN+"img/p3man.png",
	_CDN+"img/p3manb.png",
	_CDN+"img/p3bg.png",
	_CDN+"img/p3hand.png",

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
	//getStart()
	
}

var texture

function getStart() {
	console.log("开始")
	texture=new Sprite(getTe(_CDN+"img/texture.jpg"));
	pStage.addChild(texture)
	texture.blendMode=_MULTIPLY
	setPage1()
}