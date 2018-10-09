var _CDN = "./";
// var _CDN = "//image.giccoo.com/projects/jeep/";
var imageList = [
	_CDN+"img/bg.jpg",
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
	// stageH=this.opts.h
	// pStage=this.stage

	
}
var userName="你"
function letsRock(_userName){
	userName=_userName
	console.log(userName)
	setup()
}

var part1=new PIXI.Container()
var part1bg=new PIXI.Container()
var bg1=new PIXI.Container(),bg2=new PIXI.Container(),bg3=new PIXI.Container(),bg4=new PIXI.Container(),bg5=new PIXI.Container(),bg6=new PIXI.Container()

var bgA=[bg1,bg2,bg3,bg4,bg5,bg6]

function setup(){
	pStage.addChild(part1bg,part1)
	//part1.addChild(bg1,bg2,bg3,bg4,bg5,bg6)
	part1.y=-(1300-stageH)/300*20

	part1.scale.x=part1.scale.y=1-.1*(1300-stageH)/300
	part1.x=640*(1-part1.scale.x)/2

	part1bg.y=(1300-stageH)/300*20
	part1bg.addChild(bg1,bg2,bg3,bg4,bg5,bg6)
	setBG()

	setBanner()
	setNext()
	setQuestion()
	setAnswer()

	setResult()
	setWaiting()
	

}
function setCenter(_tar){
	for (var i = 0; i < _tar.length; i++) {
		_tar[i].pivot.set(_tar[i].width/2,_tar[i].height/2)
		_tar[i].position.set(320,stageH/2)
	};
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