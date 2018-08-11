var _CDN = "./"
var imageList = [
	_CDN+"img/test.png"
];
var _NORMAL=PIXI.BLEND_MODES.NORMAL,
    _ADD=PIXI.BLEND_MODES.ADD,
    _MULTIPLY=PIXI.BLEND_MODES.MULTIPLY,
    _SCREEN=PIXI.BLEND_MODES.SCREEN;

var pStage
var buildUGC = function () {
	console.log("app",this,this.opts.w,this.opts.h)
	// var test = new Sprite(getTe(_CDN+"img/test.png"));
	// var gra = new Graphics();
	// var con = new Container();
	// var ani = new AnimatedSprite();
	//this.stage.addChild(test,gra,con);
	pStage=this.stage
	setup()
}
var bg;//=new Graphics()
function setup(){
	//console.log("======================",pStage,"======================")

	pStage.stage.addChild(bg)
	//whitebg.beginFill(0xf7e0d7,1)
  	//whitebg.drawRect(0,0,640,stageH)
}