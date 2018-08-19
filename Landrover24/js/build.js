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
	_CDN+"img/p3btn1.png",
	_CDN+"img/p4btn1.png",
	_CDN+"img/p2btn2.png",
	_CDN+"img/p2btn3.png",
	_CDN+"img/dark.png",
	_CDN+"img/arrow.png",
	_CDN+"img/arrow2.png",
	_CDN+"img/p3s0.png",
	_CDN+"img/p3s1.png",
	_CDN+"img/p3s2.png",
	_CDN+"img/p3s3.png",
	_CDN+"img/p3s4.png",
	_CDN+"img/p3s5.png",
	_CDN+"img/p3target.png",
	_CDN+"img/p3playing.png",
	_CDN+"img/top1.png",
	_CDN+"img/top2.png",
	_CDN+"img/top3.png",
	_CDN+"img/top4.png",
	_CDN+"img/top5.png",
	_CDN+"img/top6.png",
	_CDN+"img/top1b.png",
	_CDN+"img/top2b.png",
	_CDN+"img/top3b.png",
	_CDN+"img/top4b.png",
	_CDN+"img/top5b.png",
	_CDN+"img/top6b.png",
	_CDN+"img/down1.png",
	_CDN+"img/down2.png",
	_CDN+"img/down3.png",
	_CDN+"img/down4.png",
	_CDN+"img/down5.png",
	_CDN+"img/down6.png",
	_CDN+"img/down.png",
	_CDN+"img/bg1.jpg",
	_CDN+"img/bg2.jpg",
	_CDN+"img/bg3.jpg",
	_CDN+"img/bg4.jpg",
	_CDN+"img/bg5.jpg",
	_CDN+"img/bg6.jpg",
];
var _NORMAL=PIXI.BLEND_MODES.NORMAL,
    _ADD=PIXI.BLEND_MODES.ADD,
    _MULTIPLY=PIXI.BLEND_MODES.MULTIPLY,
    _SCREEN=PIXI.BLEND_MODES.SCREEN;

var pStage,pApp,bg
var stageH
var theThis


var renderer
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
	renderer=new PIXI.Application({width:640,height:stageH,transparent: true,preserveDrawingBuffer: true,forceCanvas: true})//=====
  document.body.appendChild(renderer.view);
  renderer.view.style="z-index:1000;position:absolute;display:none"
}



function setup(){
	//buildQR(__url,QRDone)
	if($_GET["video"]){
		console.log("有参数")
		setPage0()
	}else{
		console.log("没有参数")
	}
	console.log("是否网易云音乐",main.wy)
	if(main.wy==false){
		//main.openInApp()
	}



	console.log(pStage.parent)
	//setPage0()
	setPage1()
	setPage2()
	setPage3()
	setPage4()
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
	myQR= new QRCode("myDiv",{text:_url,width:80,height:80,colorDark:"#000000"})
	myQR._el.lastChild.onload=_callback
	console.log("lastChild:",myQR._el.lastChild)
}

var qrSprite
var base64pic
function QRDone(){
	qrSprite=new PIXI.Sprite.fromImage(myQR._el.lastChild.src)
	qrSprite.texture.baseTexture.on('loaded',function(){
		pStage.addChild(qrSprite)
		qrSprite.visible = true
		qrSprite.x = 50
		qrSprite.y = stageH-110
		pApp.renderer.render(pStage)
		console.log("QRDone!!!")
		renderer.stage.addChild(bgA[nowVideo-1],topA[nowMusic-1],topbA[nowMusic-1],downA[nowMusic-1],p4down,qrSprite)
		renderer.renderer.render(renderer.stage)
		main.sharePost(renderer.view.toDataURL())
		var u = new Sprite.fromImage(renderer.view.toDataURL())
  	pStage.addChild(u)
		main.openForm()
	})
	
	
}


function setPage0(){

}