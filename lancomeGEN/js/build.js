var _CDN = "./"
var imageList = [
	_CDN+"img/test.png",
	_CDN+"img/btn_up.png",
	_CDN+"img/btn_down.png",
	_CDN+"img/q1pic1.png",
	_CDN+"img/q1pic2.png",
	_CDN+"img/q1pic3.png",
	_CDN+"img/q1pic4.png",
	_CDN+"img/q2pic1.png",
	_CDN+"img/q2pic2.png",
	_CDN+"img/q2pic3.png",
	_CDN+"img/q2pic4.png",
	_CDN+"img/q2pic5.png",
	_CDN+"img/q2pic6.png",
	_CDN+"img/q2pic7.png",
	_CDN+"img/q3pic1.png",
	_CDN+"img/q3pic2.png",
	_CDN+"img/sound0.png",
	_CDN+"img/sound1.png",
	_CDN+"img/sound2.png",
	_CDN+"img/sound3.png",
	_CDN+"img/a1pic1.png",
	_CDN+"img/a1a.png",
	_CDN+"img/a1b.png",
	_CDN+"img/a2a.png",
	_CDN+"img/a2b.png",
	_CDN+"img/a3a.jpg",
	_CDN+"img/a3b.jpg",
	_CDN+"img/qr.png",
	_CDN+"img/homepage-logo.png",
	_CDN+"img/btnlottery.png",
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
	
	
}

function setup(){
	console.log("======================",pStage,"======================")
	
	bg=new Graphics()
	pStage.addChild(bg)
	bg.beginFill(0xf7e0d7,1)
  bg.drawRect(0,0,640,stageH)
  

  
  tStyle=new PIXI.TextStyle({fontFamily:'yrd-Medium',fontSize: 34})
	question1=new PIXI.Text("",tStyle)
	question2=new PIXI.Text("",tStyle)
	answer1=new PIXI.Text("",tStyle)
	answer2=new PIXI.Text("",tStyle)
	btn1=new Sprite(getTe(_CDN+"img/btn_up.png"))
	btn2=new Sprite(getTe(_CDN+"img/btn_up.png"))
  pStage.addChild(btn1,btn2,question1,question2,answer1,answer2)

  btn1.interactive=true
  btn2.interactive=true
  btn1.pivot.set(320,58)
  btn2.pivot.set(320,58)
  btn1.position.set(320,stageH/2-173)
  btn2.position.set(320,stageH/2-18)

  btn1.touchstart=btn1Down
  btn1.touchend=btn1Up
  btn2.touchstart=btn2Down
  btn2.touchend=btn2Up
  setAnswerPic()
  setAnswer()

  showQ(Qnum)
}
var nowAnswer
function btn1Down(){
	btn1.texture=getTe(_CDN+"img/btn_down.png")
	answer1.x+=10
	answer1.y-=10
	pStage.interactive=true
	pStage.touchend=allBtnUp
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