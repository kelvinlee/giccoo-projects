var _CDN = "./";
// var _CDN = "//image.giccoo.com/projects/jeep/";
var imageList = [
	_CDN+"img/q1bg1.png",
	_CDN+"img/q1bg2.jpg",
	_CDN+"img/q2bg1.png",
	_CDN+"img/q2bg2.jpg",
	_CDN+"img/q3bg1.jpg",
	_CDN+"img/q4bg1.jpg",
	_CDN+"img/q5bg1.jpg",
	_CDN+"img/q6bg1.jpg",
	_CDN+"img/banner.png",
	_CDN+"img/banner_t1.png",
	_CDN+"img/banner_t2.png",
	_CDN+"img/banner_t3.png",
	_CDN+"img/banner_t4.png",
	_CDN+"img/banner_t5.png",
	_CDN+"img/banner_t6.png",
	_CDN+"img/btn_next1.png",
	_CDN+"img/btn_next2.png",
	_CDN+"img/btn_next3.png",
	_CDN+"img/btn_next4.png",
	_CDN+"img/btn_next5.png",
	_CDN+"img/btn_next6.png",
	_CDN+"img/q1t2.png",
	_CDN+"img/q1t1.png",
	_CDN+"img/q2t1.png",
	_CDN+"img/q3t1.png",
	_CDN+"img/q4t1.png",
	_CDN+"img/q5t1.png",
	_CDN+"img/q6t1.png",
	_CDN+"img/btns.png",
	_CDN+"img/btn0.png",
	_CDN+"img/btn1.png",
	_CDN+"img/btn2.png",
	_CDN+"img/btn3.png",

	_CDN+"img/q1a1.png",
	_CDN+"img/q1a2.png",
	_CDN+"img/q1a3.png",
	_CDN+"img/q1a4.png",

	_CDN+"img/q2a1.png",
	_CDN+"img/q2a2.png",
	_CDN+"img/q2a3.png",
	_CDN+"img/q2a4.png",

	_CDN+"img/q3a1.png",
	_CDN+"img/q3a2.png",
	_CDN+"img/q3a3.png",
	_CDN+"img/q3a4.png",

	_CDN+"img/q4a1.png",
	_CDN+"img/q4a2.png",
	_CDN+"img/q4a3.png",
	_CDN+"img/q4a4.png",

	_CDN+"img/q5a1.png",
	_CDN+"img/q5a2.png",
	_CDN+"img/q5a3.png",
	_CDN+"img/q5a4.png",

	_CDN+"img/q6a1.png",
	_CDN+"img/q6a2.png",
	_CDN+"img/q6a3.png",
	_CDN+"img/q6a4.png",
	_CDN+"img/loading-bg.jpg",

	_CDN+"img/waiting_car1.png",
	_CDN+"img/waiting_car2.png",
	_CDN+"img/waiting_t.png",
	
	_CDN+"img/ugcbg1.png",
	_CDN+"img/ugcbg2.png",
	_CDN+"img/ugcbg3.png",
	_CDN+"img/ugcbg4.png",

	_CDN+"img/ugc1a.png",
	_CDN+"img/ugc1b.png",
	_CDN+"img/ugc1c.png",
	_CDN+"img/ugc2a.png",
	_CDN+"img/ugc2b.png",
	_CDN+"img/ugc2c.png",
	_CDN+"img/ugc3a.png",
	_CDN+"img/ugc3b.png",
	_CDN+"img/ugc3c.png",
	_CDN+"img/ugc4a.png",
	_CDN+"img/ugc4b.png",
	_CDN+"img/ugc4c.png",

	_CDN+"img/ugctitle.png",

	_CDN+"img/btn_leads.png",
	_CDN+"img/btn_share.png",
	_CDN+"img/btn_list.png",

	_CDN+"img/qr.png",
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