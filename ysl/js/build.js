var _CDN = "./";
// var _CDN = "//image.giccoo.com/projects/emoji/";
var imageList = [
	_CDN+"img/q1_11.png",
	_CDN+"img/q1_12.png",
	_CDN+"img/q1_21.png",
	_CDN+"img/q1_22.png",
	_CDN+"img/q1_31.png",
	_CDN+"img/q1_32.png",

	_CDN+"img/q1t.png",

	_CDN+"img/q1t1.png",
	_CDN+"img/q1t2.png",
	_CDN+"img/q1t3.png",

	_CDN+"img/arrow.png",
	_CDN+"img/arrow2.png",
	
	_CDN+"img/q2_11.png",
	_CDN+"img/q2_12.png",
	_CDN+"img/q2_21.png",
	_CDN+"img/q2_22.png",
	_CDN+"img/q2_31.png",
	_CDN+"img/q2_32.png",

	_CDN+"img/q2t1.png",
	_CDN+"img/q2t2.png",
	_CDN+"img/q2t3.png",

	_CDN+"img/q2ta.png",
	_CDN+"img/q2tb.png",

	_CDN+"img/q3_11.png",
	_CDN+"img/q3_12.png",
	_CDN+"img/q3_21.png",
	_CDN+"img/q3_22.png",
	_CDN+"img/q3_31.png",
	_CDN+"img/q3_32.png",

	_CDN+"img/q3t1.png",
	_CDN+"img/q3t2.png",
	_CDN+"img/q3t3.png",

	_CDN+"img/q3ta.png",
	_CDN+"img/q3tb.png",

	_CDN+"img/utitle.png",

	_CDN+"img/us1.png",
	_CDN+"img/us2.png",
	_CDN+"img/us3.png",
	_CDN+"img/us4.png",
	_CDN+"img/us5.png",
	_CDN+"img/us6.png",
	_CDN+"img/us7.png",
	_CDN+"img/us8.png",
	_CDN+"img/us9.png",

	_CDN+"img/u00.png",
	_CDN+"img/u01.png",
	_CDN+"img/u02.png",

	_CDN+"img/u10.png",
	_CDN+"img/u11.png",
	_CDN+"img/u12.png",

	_CDN+"img/u20.png",
	_CDN+"img/u21.png",
	_CDN+"img/u22.png",

	_CDN+"img/ut.png",
	_CDN+"img/ut1.png",
	_CDN+"img/ut2.png",
	_CDN+"img/ut3.png",

	_CDN+"img/ud1.png",
	_CDN+"img/ud2.png",
	_CDN+"img/ud3.png",
	_CDN+"img/ud4.png",
	_CDN+"img/ud5.png",
	_CDN+"img/ud6.png",
	_CDN+"img/ud7.png",
	_CDN+"img/ud8.png",
	_CDN+"img/ud9.png",
	_CDN+"img/ud10.png",
	_CDN+"img/ud11.png",
	_CDN+"img/ud12.png",
	_CDN+"img/ud13.png",
	_CDN+"img/ud14.png",
	_CDN+"img/ud15.png",

	_CDN+"img/upicz.png",
	_CDN+"img/ud0.png",

	_CDN+"img/page1disc.png",

	_CDN+"img/page1t.png",
	_CDN+"img/page1t1.png",
	_CDN+"img/page1t2.png",
	_CDN+"img/page1t3.png",
	_CDN+"img/page1t4.png",
	_CDN+"img/page1ren.png",

	_CDN+"img/page1hint.png",

	_CDN+"img/colora0.png",
	_CDN+"img/colora1.png",
	_CDN+"img/colora2.png",
	_CDN+"img/colora3.png",

	_CDN+"img/colora0b.png",
	_CDN+"img/colora1b.png",
	_CDN+"img/colora2b.png",
	_CDN+"img/colora3b.png",

	_CDN+"img/line1.jpg",
	_CDN+"img/line2.jpg",
	_CDN+"img/line3.jpg",
	_CDN+"img/line4.jpg",

	_CDN+"img/kh1.jpg",
	_CDN+"img/kh2.jpg",
	_CDN+"img/kh3.jpg",
	_CDN+"img/kh4.jpg",

	_CDN+"img/line1b.jpg",
	_CDN+"img/line2b.jpg",
	_CDN+"img/line3b.jpg",
	_CDN+"img/line4b.jpg",

	_CDN+"img/kh1b.jpg",
	_CDN+"img/kh2b.jpg",
	_CDN+"img/kh3b.jpg",
	_CDN+"img/kh4b.jpg",

	_CDN+"img/colorbg.jpg",
	_CDN+"img/colorbgb.jpg",

	_CDN+"img/logo.png",
	_CDN+"img/slogen.png",

	_CDN+"img/endt1.png",
	_CDN+"img/endt2.png",
	_CDN+"img/endt3.png",
	_CDN+"img/endt4.png",

	_CDN+"img/qr.jpg",
	_CDN+"img/hint123.png",
	_CDN+"img/clickme.png",

	_CDN+"img/endpic.png",
	_CDN+"img/endbtn1.png",
	_CDN+"img/endbtn2.png",


	
];
var _NORMAL=PIXI.BLEND_MODES.NORMAL,
    _ADD=PIXI.BLEND_MODES.ADD,
    _MULTIPLY=PIXI.BLEND_MODES.MULTIPLY,
    _SCREEN=PIXI.BLEND_MODES.SCREEN;

var pStage,pApp,bg
var stageH
var theThis
var u = navigator.userAgent
var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1

var renderer
var buildUGC = function () {
	console.log("app",this,this.opts.w,this.opts.h)
	// var test = new Sprite(getTe(_CDN+"img/test.png"));
	// var gra = new Graphics();
	// var con = new Container();
	// var ani = new AnimatedSprite();
	stageH=this.opts.h
	pStage=this.stage
	
}

var ifHaveData=1
var Type=1

function getStart(){

	initAll()
	userWord=Math.floor(Math.random()*4)
	userWord=3
	console.log("userWord",userWord)
	ugc.firstTime(-450*stageH/1000,userWord)
}

var mainC=new PIXI.Container()
// var ticker=new PIXI.ticker.Ticker()
function initAll(){
	pStage.addChild(mainC)
	setBGT()

	setQ123()
	setQ1()
}


//========================================================123翻页

var nowPage=0
var pageUpDown=1
var startY

function touchStart(_e){
  //startY=_e.data.global.y
  //pStage.touchend=touchEnd
}
var ifCanScorll=0
function touchEnd(_e){
  if(startY-_e.data.global.y>90&&nowPage<17&&ifCanScorll==1){
    nowPage++
    pageUpDown=1//下滑，下一页
    console.log("下一页")
   	goNextPage()
  }else if(startY-_e.data.global.y<-90&&nowPage>0&&ifCanScorll==1){
  	// nowPage--
   //  pageUpDown=-1//下滑，下一页
   //  goPage()
  }


}

function goNextPage(){
	nowPage++
	ifCanScorll=0
	arrow.visible=false
	if(nowPage==1){
		TweenMax.to(q1C,1,{y:-stageH/5,onComplete:function(){q1C.visible=false}})
		TweenMax.to(q1C,1,{alpha:0})
		//q1C.visible=false
		setQ2()
		TweenMax.to(hint123,.5,{alpha:1})
	}
	if(nowPage==2){
		TweenMax.to(q2C,1,{y:-stageH/5,onComplete:function(){q2C.visible=false}})
		TweenMax.to(q2C,1,{alpha:0})
		//q2C.visible=false
		setQ3()
		TweenMax.to(hint123,.5,{alpha:1})
	}
	if(nowPage==3){
		TweenMax.to(q3C,1,{y:-stageH/5,onComplete:function(){q3C.visible=false}})
		TweenMax.to(q3C,1,{alpha:0})
		//q3C.visible=false
		setUGC()
	}
	clickme.visible=false

}

