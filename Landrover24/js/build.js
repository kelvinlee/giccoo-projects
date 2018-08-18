var _CDN = "./"
var imageList = [
	_CDN+"img/btn-submit.png",
	_CDN+"img/btn-giveup.png"
];
var _NORMAL=PIXI.BLEND_MODES.NORMAL,
    _ADD=PIXI.BLEND_MODES.ADD,
    _MULTIPLY=PIXI.BLEND_MODES.MULTIPLY,
    _SCREEN=PIXI.BLEND_MODES.SCREEN;

var pStage,pApp,bg
var stageH
var buildUGC = function () {
	console.log("app",this,this.opts.w,this.opts.h)
	// var test = new Sprite(getTe(_CDN+"img/test.png"));
	// var gra = new Graphics();
	// var con = new Container();
	// var ani = new AnimatedSprite();
	//this.stage.addChild(test,gra,con);

	pStage=this.stage
	pApp = this.app
	stageH=this.opts.h
	setup()
}
var __url="http://baidu.com"

function setup(){
	buildQR(__url,QRDone)
}

var myQR
function buildQR(_url,_callback){
	myQR= new QRCode("myDiv",{text:_url,width:320,height:320,colorDark:"#f23456"})
	myQR._el.lastChild.onload=_callback
	console.log("lastChild:",myQR._el.lastChild)
}

var qrSprite
function QRDone(){
	qrSprite=new PIXI.Sprite.fromImage(myQR._el.lastChild.src)
	qrSprite.texture.baseTexture.on('loaded',function(){
		pStage.addChild(qrSprite)
		qrSprite.visible = true
		qrSprite.x = 40
		qrSprite.y = 40
		pApp.renderer.render(pStage)
		console.log("QRDone!!!")
	})
	
	
}