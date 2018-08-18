var _CDN = "./"
var imageList = [
	_CDN+"img/bg.jpg",
];
var _NORMAL=PIXI.BLEND_MODES.NORMAL,
    _ADD=PIXI.BLEND_MODES.ADD,
    _MULTIPLY=PIXI.BLEND_MODES.MULTIPLY,
    _SCREEN=PIXI.BLEND_MODES.SCREEN;

var pStage,bg
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
var __url="http://baidu.com"

function setup(){
	buildQR(__url,QRDone)
}

var myQR
function buildQR(_url,_callback){
	myQR= new QRCode("myDiv",{width:320,height:320,colorDark:"#000000"})
	myQR._el.lastChild.onload=_callback
}

var qrSprite
function QRDone(){
	console.log("QRDone!!!")
	qrSprite=new Sprite.fromImage(myQR._el.lastChild.src)
	pStage.addChild(qrSprite)
}