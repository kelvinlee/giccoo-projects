var _CDN = "./";
// var _CDN = "//image.giccoo.com/projects/painting_mountain/";
var imageList = [
	_CDN+"img/p1bg.jpg",

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

}

var page1=new PIXI.Container()
var p1bg
function setPage1(){
	pStage.addChild(page1)
	p1bg=new Sprite(getTe(_CDN+"img/p1bg.png"));
	
	page1.addChild(p1bg)	
}