var _CDN = "./";
// var _CDN = "//image.giccoo.com/projects/jeep/";
var imageList = [
	_CDN+"img/btn-start.png",
	_CDN+"img/loading-text-1.png",
		_CDN+"img/q1bg1.png",
	_CDN+"img/q1bg2.jpg",
	_CDN+"img/banner.png",
	_CDN+"img/banner_t1.png",
	_CDN+"img/banner_t2.png",
	_CDN+"img/banner_t3.png",
	_CDN+"img/banner_t4.png",
	_CDN+"img/banner_t5.png",
	_CDN+"img/banner_t6.png",
	
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

	setup()
}
var userName="你"
function letsRock(_userName){
	userName=_userName
}

var part1=new PIXI.Container()
var bg1=new PIXI.Container(),bg2=new PIXI.Container(),bg3=new PIXI.Container(),bg4=new PIXI.Container(),bg5=new PIXI.Container(),bg6=new PIXI.Container()



function setup(){
	pStage.addChild(part1)
	part1.addChild(bg1,bg2,bg3,bg4,bg5,bg6)
	setBG1()

	setBanner()
}

function setBottom(_tar){
	for (var i = 0; i < _tar.length; i++) {
		_tar[i].pivot.set(_tar[i].width/2,_tar[i].height)
		_tar[i].position.set(320,stageH)
	};
}

function setFullScreen(_tar,_more){
	if(!_more){_more=0}
	for (var i = 0; i < _tar.length; i++) {
		_tar[i].pivot.set(_tar[i].width/2,_tar[i].height/2)
		_tar[i].position.set(320,stageH/2)
		if(_tar[i].height<stageH){
			_tar[i].scale.x=_tar[i].scale.y=(stageH+_more*2*stageH/640)/_tar[i].height
		}else{
			_tar[i].scale.x=_tar[i].scale.y=(640+_more*2)/640
		}
	};
}