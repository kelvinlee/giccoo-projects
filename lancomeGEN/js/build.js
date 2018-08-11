var _CDN = "./"
var imageList = [
	_CDN+"img/test.png"
];
var _NORMAL=PIXI.BLEND_MODES.NORMAL,
    _ADD=PIXI.BLEND_MODES.ADD,
    _MULTIPLY=PIXI.BLEND_MODES.MULTIPLY,
    _SCREEN=PIXI.BLEND_MODES.SCREEN;

var pStage,bg,question,tStyle
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
	console.log("======================",pStage,"======================")
	
	bg=new Graphics()
	pStage.addChild(bg)
	bg.beginFill(0xf99dd,1)//0xf7e0d7
  bg.drawRect(0,0,640,stageH)
  

  
  tStyle=new PIXI.TextStyle({fontFamily:'yrd-Medium',fontSize: 36})
	question=new PIXI.Text("QQQQ",tStyle)
  pStage.addChild(question)
  question.x=320
  question.y=stageH/2
  question.text="Q：你内心所孕育的情感世界，"
}