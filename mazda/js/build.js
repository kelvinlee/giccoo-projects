var _CDN = "./";
// var _CDN = "//image.giccoo.com/projects/jeep/";
var imageList = [
	_CDN+"img/bg.jpg",
	_CDN+"img/texture.jpg",
	_CDN+"img/p1a.png",
	_CDN+"img/20.png",
	_CDN+"img/19.png",
	_CDN+"img/18.png",
	_CDN+"img/p1aup.png",
	_CDN+"img/a-text-1.png",
	_CDN+"img/a-text-2.png",
	_CDN+"img/a-text-3.png",
	_CDN+"img/a-text-4.png",
	_CDN+"img/a-text-5.png",
	_CDN+"img/a-text-6.png",
	_CDN+"img/a-text-7.png",
	_CDN+"img/a-text-8.png",
	_CDN+"img/a-text-9.png",
	_CDN+"img/elevator-light.png",
	
	_CDN+"img/p2girl.png",
	_CDN+"img/p2girlb.png",
	_CDN+"img/p2others.png",
	_CDN+"img/p2tiger.png",
	_CDN+"img/p2flash1.png",
	_CDN+"img/p2flash2.png",

	_CDN+"img/p3table.png",
	_CDN+"img/p3bird1.png",
	_CDN+"img/p3bird2.png",
	_CDN+"img/p3bird3.png",
	_CDN+"img/p3girl1.png",
	_CDN+"img/p3girl2.png",
	_CDN+"img/p3head1.png",
	_CDN+"img/p3head2.png",
	_CDN+"img/p3man.png",
	_CDN+"img/p3manb.png",
	_CDN+"img/p3bg.png",
	_CDN+"img/p3hand.png",

	_CDN+"img/p4boy1.png",
	_CDN+"img/p4boy2.png",
	_CDN+"img/p4boy.png",
	_CDN+"img/p4boyb.png",
	_CDN+"img/p4boyhand.png",
	_CDN+"img/p4bird.png",
	_CDN+"img/p4light.png",
	_CDN+"img/p4table.png",

	_CDN+"img/p5t1.png",
	_CDN+"img/p5t2.png",
	_CDN+"img/p5pic.png",
	_CDN+"img/p5btn.png",

	_CDN+"img/end1m1.png",
	_CDN+"img/end1m2.png",
	_CDN+"img/end1m3.png",

	_CDN+"img/end1t1.png",
	_CDN+"img/end1t2.png",
	_CDN+"img/end1t3.png",
	_CDN+"img/end1t4.png",
	_CDN+"img/end1t5.png",

	_CDN+"img/end1bg.png",
	_CDN+"img/end1btn.png",
	_CDN+"img/end1car.png",
	_CDN+"img/end1hand.png",
	_CDN+"img/end1head.png",
	_CDN+"img/end1man.png",
	_CDN+"img/wheel1.png",

	_CDN+"img/end2a-bg.png",
	_CDN+"img/end2b-bg.png",

	_CDN+"img/endingbg.png",
	_CDN+"img/building.png",

	_CDN+"img/endingcar.png",
	_CDN+"img/btn_next.png",

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
	//getStart()
	
}

var texture

function getStart() {
	console.log("开始")
	texture=new Sprite(getTe(_CDN+"img/texture.jpg"));
	pStage.addChild(texture)
	texture.blendMode=_MULTIPLY
	texture.height=stageH
	setPage1()
}
var nowPage=0
function goNext(){
	btnNext.y=11111111
	if(nowPage==0){
		var _t2=0
		
		TweenMax.to(gg.p1t,1,{alpha:0,y:"+=350",delay:_t2,ease:Sine.easeIn})		

		TweenMax.to(elevatorC,1,{y:stageH,delay:_t2,ease:Sine.easeIn})	
		TweenMax.to(p1G2,1,{y:stageH,delay:_t2,ease:Sine.easeIn})	
		TweenMax.to(p1G1,1.5,{alpha:0,delay:_t2+1})	
		TweenMax.to(gg.p1t2,1.5,{alpha:1,delay:_t2+1})
		TweenMax.to(gg.p1t2,1.5,{alpha:0,delay:_t2+1+2,onComplete:setPage2})//====停留时间2
		//TweenMax.to(gg.p1t2,1.5,{alpha:0,delay:_t2+1+2})//====停留时间2
	}

	if(nowPage==1){
		TweenMax.to(gg.p2tiger,1,{alpha:0,y:"+=50",delay:0})
		TweenMax.to(gg.p2girl,1,{alpha:0,y:"+=60",delay:0})
		TweenMax.to(gg.p2t2,1,{alpha:0,y:"+=70",delay:0,onComplete:setPage3})
	}

	if(nowPage==2){
		TweenMax.to(gg.p3t2,.5,{alpha:0,y:"+=50",delay:0})
		TweenMax.to(p3picC,.5,{alpha:0,y:"+=50",delay:0,onComplete:setPage4})
	}

	if(nowPage==3){
		TweenMax.to(p4picC,1,{y:"+=150",alpha:0,delay:0})
		TweenMax.to(p4.t2,1,{y:"+=150",alpha:0,delay:0.1})
		TweenMax.to(p4.t3,1,{y:"+=150",alpha:1,delay:0.3})

		TweenMax.to(p4.t3,1,{alpha:0,delay:0.3,onComplete:setPage5})
	}

	nowPage++
}