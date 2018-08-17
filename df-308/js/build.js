var _CDN = "./"
var imageList = [
	_CDN+"img/bg.jpg",
	_CDN+"img/disc1.png",
	_CDN+"img/disc2.png",
	_CDN+"img/disc3.png",
	_CDN+"img/disc4.png",
	_CDN+"img/a11.png",
	_CDN+"img/a12.png",
	_CDN+"img/a13.png",
	_CDN+"img/a14.png",
	_CDN+"img/a21.png",
	_CDN+"img/a22.png",
	_CDN+"img/a23.png",
	_CDN+"img/a24.png",
	_CDN+"img/a31.png",
	_CDN+"img/a32.png",
	_CDN+"img/a33.png",
	_CDN+"img/a34.png",
	_CDN+"img/a41.png",
	_CDN+"img/a42.png",
	_CDN+"img/a43.png",
	_CDN+"img/a44.png",
	_CDN+"img/btnbg.png",
	_CDN+"img/please.png",
	_CDN+"img/btn_next.png",
	_CDN+"img/btn_nextmusic.png",
	_CDN+"img/bg1.jpg",
	_CDN+"img/bg2.jpg",
	_CDN+"img/bg3.jpg",
	_CDN+"img/bg4.jpg",
	_CDN+"img/r11.png",
	_CDN+"img/r12.png",
	_CDN+"img/r13.png",
	_CDN+"img/r14.png",
	_CDN+"img/r22.png",
	_CDN+"img/r23.png",
	_CDN+"img/r24.png",
	_CDN+"img/r32.png",
	_CDN+"img/r33.png",
	_CDN+"img/r34.png",
	_CDN+"img/r42.png",
	_CDN+"img/r43.png",
	_CDN+"img/r44.png",
	_CDN+"img/qr.png",
	_CDN+"img/endbtn1.png",
	_CDN+"img/endbtn2.png",
	_CDN+"img/pause.png",
	_CDN+"img/play.png",
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

function setup(){
	bg=new Sprite(getTe(_CDN+"img/bg.jpg"))
	pStage.addChild(bg)
	bg.width=640
	bg.height=stageH
	setMusicPage()
	setResultPage()
}
var bg1,bg2,bg3,bg4,bgC,bgA
var r11
var r2,r3,r4
var r2A,r3A,r4A
var r12,r13,r14,r22,r23,r24,r32,r33,r34,r42,r43,r44
var qr
var endbtn1,endbtn2
function setResultPage(){
	bgC=new Container()
	bg1=new Sprite(getTe(_CDN+"img/bg1.jpg"))
	bg2=new Sprite(getTe(_CDN+"img/bg2.jpg"))
	bg3=new Sprite(getTe(_CDN+"img/bg3.jpg"))
	bg4=new Sprite(getTe(_CDN+"img/bg4.jpg"))
	bgA=[bg1,bg2,bg3,bg4]
	bgC.addChild(bg1,bg2,bg3,bg4)
	pStage.addChild(bgC)
	bgC.height=stageH+1
	bg1.visible=bg2.visible=bg3.visible=bg4.visible=false
	r11=new Sprite(getTe(_CDN+"img/r11.png"))
	r11.pivot.y=569
	r11.y=stageH/2
	r11.visible=false
	r2=new Container()
	r3=new Container()
	r4=new Container()

	var r12=new Sprite(getTe(_CDN+"img/r12.png"))
	var r22=new Sprite(getTe(_CDN+"img/r22.png"))
	var r32=new Sprite(getTe(_CDN+"img/r32.png"))
	var r42=new Sprite(getTe(_CDN+"img/r42.png"))
	r2.addChild(r12,r22,r32,r42)
	r2A=[r12,r22,r32,r42]

	var r13=new Sprite(getTe(_CDN+"img/r13.png"))
	var r23=new Sprite(getTe(_CDN+"img/r23.png"))
	var r33=new Sprite(getTe(_CDN+"img/r33.png"))
	var r43=new Sprite(getTe(_CDN+"img/r43.png"))
	r3.addChild(r13,r23,r33,r43)
	r3A=[r13,r23,r33,r43]

	var r14=new Sprite(getTe(_CDN+"img/r14.png"))
	var r24=new Sprite(getTe(_CDN+"img/r24.png"))
	var r34=new Sprite(getTe(_CDN+"img/r34.png"))
	var r44=new Sprite(getTe(_CDN+"img/r44.png"))
	r4.addChild(r14,r24,r34,r44)
	r4A=[r14,r24,r34,r44]


	r12.pivot.y=r22.pivot.y=r32.pivot.y=r42.pivot.y=r13.pivot.y=r23.pivot.y=r33.pivot.y=r43.pivot.y=r14.pivot.y=r24.pivot.y=r34.pivot.y=r44.pivot.y=569
	r12.y=r22.y=r32.y=r42.y=r13.y=r23.y=r33.y=r43.y=r14.y=r24.y=r34.y=r44.y=stageH/2

	for (var i = 0; i <4 ; i++) {
		r2A[i].visible=false
		r3A[i].visible=false
		r4A[i].visible=false
	};

	pStage.addChild(bgC,r11,r2,r3,r4)


//=======
	qr=new Sprite(getTe(_CDN+"img/qr.png"))
	qr.pivot.y=569+20
	qr.y=stageH/2
	qr.visible=false

	endbtn1=new Sprite(getTe(_CDN+"img/endbtn1.png"))
	endbtn2=new Sprite(getTe(_CDN+"img/endbtn2.png"))
	endbtn1.position.set(84,stageH/2+372)
	endbtn2.position.set(339,stageH/2+372)

	endbtn1.visible=endbtn2.visible=false

	endbtn1.interactive=true
	endbtn2.interactive=true

	endbtn1.touchstart=goShare
	endbtn2.touchstart=goMore

	pStage.addChild(qr,endbtn1,endbtn2)
}


function goShare(){
	endbtn1.visible=endbtn2.visible=false
	qr.visible=true
	console.log("分享海报")
	main.sharePost()
	endbtn1.visible=endbtn2.visible=true
	qr.visible=false
}

function goMore(){
	console.log("了解更多")
	main.openWeb()
}


