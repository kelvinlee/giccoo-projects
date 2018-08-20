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
	_CDN+"img/blur1.jpg",
	_CDN+"img/blur2.jpg",
	_CDN+"img/blur3.jpg",
	_CDN+"img/blur4.jpg",
	_CDN+"img/blur5.jpg",
	_CDN+"img/blur6.jpg",
	_CDN+"img/p0btn.png",
	_CDN+"img/playbtn.png",
	_CDN+"img/poster1.jpg",
	_CDN+"img/poster2.jpg",
	_CDN+"img/poster3.jpg",
	_CDN+"img/poster4.jpg",
	_CDN+"img/poster5.jpg",
	_CDN+"img/poster6.jpg",
	_CDN+"img/jumpbtn.png",
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
	
	



	console.log(pStage.parent)
	//setPage0()
	setPage1()
	setPage2()
	setPage3()
	setPage4()
	pageLoop()

	console.log("是否网易云音乐",main.wy)
	if(main.wy==false){
		//main.openInApp()
		console.log("不是")
		setPageJump()

	}else{
		if($_GET["video"]<7&&$_GET["video"]>0){
			console.log("有参数")
			setPage0()
		}else{
			console.log("没有参数")
		}
	}
	
	//pApp.ticker.add(pageLoop)
}
function pageLoop(){
  requestAnimationFrame(pageLoop)
  pApp.renderer.render(pStage)
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

var blurBG,page0,p0btn,playbtn,userVideo,userT,vtexture,poster
function setPage0(){
	page0=new Container()
	pStage.addChild(page0)

	blurBG=new Sprite(getTe(_CDN+"img/blur"+$_GET["video"]+".jpg"))
	blurBG.width=640
	blurBG.height=stageH
	page0.addChild(blurBG)

	p0btn=new Sprite(getTe(_CDN+"img/p0btn.png"))
	p0btn.y=stageH/2+367
	page0.addChild(p0btn)
	p0btn.interactive=true
	p0btn.touchstart=hidePage0

	


		userVideo = document.createElement('video');
		userVideo.setAttribute('playsinline','');
		userVideo.setAttribute('webkit-playsinline','');
		userVideo.crossOrigin = 'anonymous';
		var src = document.createElement('source');
		src.setAttribute('src', "//image.giccoo.com/projects/Landrover24/video/build-"+$_GET["video"]+"b.mp4");
		src.setAttribute('type', 'video/mp4');

		userVideo.appendChild(src);
		userVideo.loop=true
		//userVideo.muted=true

		//=====userVideo.addEventListener("canplay",canplayEvt)
		// create a video texture from a path
		vtexture = PIXI.Texture.fromVideo(userVideo);
		vtexture.baseTexture.autoPlay = false;
		// enableInlineVideo(texture.baseTexture.source, false);

		// var videoSprite = new PIXI.Sprite(texture);
		
		// videoSprite.width=473
		// videoSprite.height=763
		// videoSprite.x=320-473/2
		// videoSprite.y=stageH/2-447
		// page0.addChild(videoSprite);
	poster=new Sprite(getTe(_CDN+"img/poster"+$_GET["music"]+".jpg"))
	poster.width=471
	poster.height=763
	poster.x=320-472/2
	poster.y=stageH/2-447
	page0.addChild(poster);

	playbtn=new Sprite(getTe(_CDN+"img/playbtn.png"))
	playbtn.pivot.set(49,56)
	playbtn.position.set(320,stageH/2-68)
	playbtn.interactive=true
	playbtn.touchstart=playp0video
	page0.addChild(playbtn)

	userT=new Sprite(getTe(_CDN+"img/top"+$_GET["music"]+".png"))
	userT.scale.x=userT.scale.y=473/640
	userT.x=83
	userT.y=stageH/2-447
	page0.addChild(userT)

	

}

function playp0video(){
		var vvtexture=PIXI.Texture.fromVideo("//image.giccoo.com/projects/Landrover24/video/build-"+$_GET["video"]+"b.mp4");
		vvtexture.baseTexture.source.loop = true
		var videoSprite = new PIXI.Sprite(vvtexture);
		
		videoSprite.width=473
		videoSprite.height=763
		videoSprite.x=320-473/2
		videoSprite.y=stageH/2-447
		page0.addChild(videoSprite,playbtn,userT);

	playbtn.visible=false
	// userVideo.play()
	playAudio("music-"+$_GET["music"])
}
function hidePage0(){
	stopAllAudio()
	//userVideo.pause()
	TweenMax.to(page0,1,{alpha:0,onComplete:distroyP0})
}
function distroyP0(){
	page0.visible=false
	page0.x=10000
}

var jumpbtn
function setPageJump(){
	setTimeout(function(){
		p1bg.interactive=false
		//p1bg.touchstart=willGoPage2
	},1600)
	p1tA[6].visible=false
	p1tA[7].visible=false
	p1tA[8].visible=false
	jumpbtn=new Sprite(getTe(_CDN+"img/jumpbtn.png"))
	jumpbtn.y=stageH-266
	jumpbtn.interactive=true
	jumpbtn.touchstart=goJump
	pStage.addChild(jumpbtn)
}

function goJump(){
	if($_GET["video"]){
		if($_GET["type"]==2){
			main.openInApp(2,$_GET["video"],$_GET["music"])
		}else if($_GET["type"]!=2){
			main.openInApp(1,$_GET["video"],$_GET["music"])
		}
	}

	else{
		if($_GET["type"]==2){
			main.openInApp(2,9,9)
		}else if($_GET["type"]!=2){
			main.openInApp(1,9,9)
		}
	}
	
}
