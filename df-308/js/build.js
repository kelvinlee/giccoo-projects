var _CDN = "./"
var imageList = [
	_CDN+"img/test.png",
];
var _NORMAL=PIXI.BLEND_MODES.NORMAL,
    _ADD=PIXI.BLEND_MODES.ADD,
    _MULTIPLY=PIXI.BLEND_MODES.MULTIPLY,
    _SCREEN=PIXI.BLEND_MODES.SCREEN;

var pStage,bg,question1,question2,answer1,answer2,tStyle,btn1,btn2,Qnum=0
var stageH
var buildUGC = function () {
	console.log("app",this,this.opts.w,this.opts.h)
	// var test = new Sprite(getTe(_CDN+"img/test.png"));
	// var gra = new Graphics();
	// var con = new Container();
	// var ani = new AnimatedSprite();
	//this.stage.addChild(test,gra,con);

	pStage=this.stage
	stageH=this.opts.h
	
	setup()
}

function setup(){
	
}
var nowAnswer
function btn1Down(){
	btn1.texture=getTe(_CDN+"img/btn_down.png")
	answer1.x+=10
	answer1.y-=10
	pStage.interactive=true
	pStage.touchend=allBtnUp
	nowAnswer=0
	console.log(musicA[Qnum][nowAnswer])
	audio = document.getElementById(musicA[Qnum][nowAnswer])
	audio.load()
}

function btn1Up(){
	btn1.texture=getTe(_CDN+"img/btn_up.png")
	answer1.x-=10
	answer1.y+=10
	console.log("A")
	nowAnswer=0
	hideQ()
}
function btn2Down(){
	btn2.texture=getTe(_CDN+"img/btn_down.png")
	answer2.x+=10
	answer2.y-=10
	pStage.interactive=true
	pStage.touchend=allBtnUp
	nowAnswer=1
	console.log(musicA[Qnum][nowAnswer])
	audio = document.getElementById(musicA[Qnum][nowAnswer])
	audio.load()
}

function btn2Up(){
	btn2texture=getTe(_CDN+"img/btn_up.png")
	answer2.x-=10
	answer2.y+=10
	console.log("B")
	nowAnswer=1
	hideQ()
}

function allBtnUp(){
	btn1.texture=getTe(_CDN+"img/btn_up.png")
	btn2.texture=getTe(_CDN+"img/btn_up.png")
	answer1.x=169
	answer1.y=stageH/2-186
	answer2.x=169
  answer2.y=stageH/2-26
}