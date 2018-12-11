var _CDN = "./";
// var _CDN = "//image.giccoo.com/projects/painting_mountain/";
var imageList = [
	_CDN+"img/p1_bg.jpg",
	_CDN+"img/p1_btns.png",
	_CDN+"img/p1_wb.png",
	_CDN+"img/p1_t.png",
	_CDN+"img/p1_dot.png",
	_CDN+"img/p1_dot_on.png",
	_CDN+"img/step1t.png",
	_CDN+"img/step2t.png",
	_CDN+"img/step3t.png",
	_CDN+"img/tag1.png",
	_CDN+"img/tag2.png",
	_CDN+"img/tag3.png",
	_CDN+"img/pen2.png",
	_CDN+"img/step2line.png",
	_CDN+"img/step2bar.png",
	_CDN+"img/step2mover.png",
	_CDN+"img/color1.png",
	_CDN+"img/color2.png",
	_CDN+"img/color3.png",
	_CDN+"img/color4.png",
	_CDN+"img/colorbtn1.png",
	_CDN+"img/colorbtn2.png",
	_CDN+"img/colorbtn3.png",
	_CDN+"img/colorbtn4.png",

	_CDN+"img/step3btn_t.png",

	_CDN+"img/bg1.jpg",
	_CDN+"img/bg2.jpg",
	_CDN+"img/bg3.jpg",
	_CDN+"img/bg4.jpg",

	_CDN+"img/end1bg.jpg",
	_CDN+"img/end1music.jpg",
	_CDN+"img/end2music.png",
	_CDN+"img/end1car1.png",
	_CDN+"img/end1car2.png",

	_CDN+"img/logo.png",
	_CDN+"img/logo-down.png",
	_CDN+"img/qr.png",

	_CDN+"img/end2shan1.jpg",
	_CDN+"img/end2shan2.jpg",
	_CDN+"img/end2shan3.jpg",
	_CDN+"img/end2shan4.jpg",

	_CDN+"img/text1.png",
	_CDN+"img/text2.png",
	_CDN+"img/text3.png",
	_CDN+"img/text4.png",
	_CDN+"img/text5.png",
	_CDN+"img/text6.png",
	_CDN+"img/text7.png",
	_CDN+"img/text8.png",
	_CDN+"img/text9.png",
	_CDN+"img/text10.png",
	_CDN+"img/text11.png",
	_CDN+"img/text12.png",

	_CDN+"img/musicico.png",
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
	getStart()
	
}


function getStart(){
	
	setPage1()
	testMe()
}

function testMe(){
	var critical=0//暴击次数
	var _b=.056//递增几率
	var _a=_b//初始几率
	var _n=1
	for (var i = 0; i < 1000000; i++) {
		if(Math.random()<_a){
			_a=_b
			_n=1
			critical++
		}else{
			//_a+=_b
			
			_a=_a*_n
			_n=_n*2
		}
	};
	console.log("thethe",critical)
}

var nowStep=1
function goBack(){
	if(nowStep==3){
		goStep2()
	}
	if(nowStep==2){
		goStep1()
	}

	if(nowStep==1){
		console.log("回首页")
		nowStep++
	}
	nowStep--
	setBar()
	
	

}




function goNext(){
	if(nowStep==1){
		console.log("第二页")
		goStep2()
	}
	if(nowStep==2){
		console.log("第三页")
		goStep3()
	}
	if(nowStep==3){
		console.log("第三页")
		main.goNickname()
		//goFinal1()
	}

	nowStep++
	setBar()
}

function setBar(){
	var tagA=[stepBar1,stepBar2,stepBar3]
	for (var i = 0; i < 3; i++) {
		if(i+1<=nowStep){
			TweenMax.to(tagA[i],1,{alpha:1})
		}else{
			TweenMax.to(tagA[i],1,{alpha:0})
		}
		
		
	};
}