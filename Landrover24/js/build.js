var _CDN = "./"
var imageList = [
	_CDN+"img/btn-submit.png",
	_CDN+"img/btn-giveup.png",
	_CDN+"img/bg.jpg",
	_CDN+"img/p1t1.png",
	_CDN+"img/p1t2.png",
	_CDN+"img/p1t3.png",
	_CDN+"img/p1t4.png",
	_CDN+"img/p1t5.png",
	_CDN+"img/p1t6.png",
	_CDN+"img/p1t7.png",
	_CDN+"img/p1t8.png",
	_CDN+"img/p1t9.png",
	_CDN+"img/rule.jpg",
	_CDN+"img/p2top.png",
	_CDN+"img/p3top.png",
	_CDN+"img/p2btn1.png",
	_CDN+"img/p2btn2.png",
	_CDN+"img/p2btn3.png",
	_CDN+"img/dark.png",
	_CDN+"img/arrow.png",
	_CDN+"img/arrow2.png",
];
var _NORMAL=PIXI.BLEND_MODES.NORMAL,
    _ADD=PIXI.BLEND_MODES.ADD,
    _MULTIPLY=PIXI.BLEND_MODES.MULTIPLY,
    _SCREEN=PIXI.BLEND_MODES.SCREEN;

var pStage,pApp,bg
var stageH
var theThis
var buildUGC = function () {
	console.log("app",this,this.opts.w,this.opts.h)
	// var test = new Sprite(getTe(_CDN+"img/test.png"));
	// var gra = new Graphics();
	// var con = new Container();
	// var ani = new AnimatedSprite();
	//this.stage.addChild(test,gra,con);
	theThis=this
	pStage=this.stage
	pApp = this.app
	stageH=this.opts.h
	setup()
}



function setup(){
	//buildQR(__url,QRDone)
	if($_GET["video"]){
		console.log("有参数")
	}else{
		console.log("没有参数")
	}
	console.log("是否网易云音乐",main.wy)
	if(main.wy==false){
		//main.openInApp()
	}

	console.log(pStage.parent)
	
	setPage1()
	setPage2()
	pageLoop()
	//pApp.ticker.add(pageLoop)
}
function pageLoop(){
  requestAnimationFrame(pageLoop)
  pApp.render(pStage)
}

//============二维码
var __url="http://m.giccoo.com/Landrover24/"
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