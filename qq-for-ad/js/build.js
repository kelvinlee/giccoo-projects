var _CDN = "./";
// var _CDN = "//image.giccoo.com/projects/emoji/";
var imageList = [
	_CDN+"img/logo1.png",
	_CDN+"img/bgc.png",

	_CDN+"img/bart1.png",
	_CDN+"img/bart2.png",
	_CDN+"img/bard1.png",
	_CDN+"img/bard2.png",
	_CDN+"img/bard3.png",

	_CDN+"img/p1bar.png",

	_CDN+"img/title1.png",
	_CDN+"img/title2.png",
	_CDN+"img/title3.png",
	_CDN+"img/title4.png",
	_CDN+"img/title5.png",
	_CDN+"img/title6.png",
	_CDN+"img/title7.png",
	_CDN+"img/title8.png",
	_CDN+"img/title9.png",
	_CDN+"img/title10.png",
	_CDN+"img/title11.png",
	_CDN+"img/title12.png",
	_CDN+"img/title13.png",
	_CDN+"img/title14.png",

	_CDN+"img/t1.png",
	_CDN+"img/t2.png",
	_CDN+"img/t3.png",
	_CDN+"img/t4.png",
	_CDN+"img/t5.png",

	_CDN+"img/arrow1.png",
	_CDN+"img/page.png",

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
	console.log("1122")
	setPage1()
}
var ifFirst=1
function goBack(){
	if(ifFirst==1){
		ifFirst=0
	}else{
		maskAll.y=0
		page.position.set(640,stageH)
	}
	
}