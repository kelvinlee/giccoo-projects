//var _CDN = "./";
//var _CDN = "//image.giccoo.com/projects/draw-board/";
var imageList = [
	_CDN+"img/bag.png",
	_CDN+"img/logo.png",
	_CDN+"img/bg_top.jpg",
	_CDN+"img/bg_down.jpg",
	_CDN+"img/bg_mid.jpg",
	_CDN+"img/p1t.png",
	_CDN+"img/flower.png",
	_CDN+"img/pic1.png",
	_CDN+"img/pic2.png",
	_CDN+"img/pic3.png",
	_CDN+"img/pic4.png",
	_CDN+"img/pic5.png",
	_CDN+"img/pic6.png",
	_CDN+"img/pic7.png",
	_CDN+"img/pic8.png",
	_CDN+"img/pic9.png",
	_CDN+"img/t1.png",
	_CDN+"img/t2.png",
	_CDN+"img/t3.png",
	_CDN+"img/t4.png",
	_CDN+"img/t5.png",
	_CDN+"img/t6.png",
	_CDN+"img/t7.png",
	_CDN+"img/t8.png",
	_CDN+"img/t9.png",
	_CDN+"img/p2btn.png",

];
var _NORMAL=PIXI.BLEND_MODES.NORMAL,
    _ADD=PIXI.BLEND_MODES.ADD,
    _MULTIPLY=PIXI.BLEND_MODES.MULTIPLY,
    _SCREEN=PIXI.BLEND_MODES.SCREEN;

var pStage,pApp,bg
var stageH

var ifFirst=1
var buildUGC = function () {
	console.log("app",this,this.opts.w,this.opts.h)
	// var test = new Sprite(getTe(_CDN+"img/test.png"));
	// var gra = new Graphics();
	// var con = new Container();
	// var ani = new AnimatedSprite();
	stageH=this.opts.h
	pStage=this.stage
	if(ifFirst==1){
		ifFirst=0
	}else{
		getStart()
	}
	
	
}


function getStart(){

	setBG()
	setPage1()
	setFlower()
	
}

//================================================================================设置背景
var bgC=new PIXI.Container()
function setBG(){
	var bg_top=new Sprite(getTe(_CDN+"img/bg_top.jpg"))
	var bg_down=new Sprite(getTe(_CDN+"img/bg_down.jpg"))
	var bg_mid=new Sprite(getTe(_CDN+"img/bg_mid.jpg"))
	var logo=new Sprite(getTe(_CDN+"img/logo.png"))
	pStage.addChild(bgC)
	bgC.addChild(bg_mid,bg_top,bg_down,logo)
	bg_down.y=stageH-510
	bg_mid.y=429
	bg_mid.height=stageH-430-510+2
}

//================================================================================设置底部花

var flower
function setFlower(){
	flower=new Sprite(getTe(_CDN+"img/flower.png"))
	pStage.addChild(flower)
	flower.y=stageH-352
}


//================================================================================第一页 选锦囊
var bagA=[]
var page1=new PIXI.Container()
var p1t
function setPage1(){
	pStage.addChild(page1)
	//====锦囊
	for (var i = 0; i < 9; i++) {
		var _bag=new Sprite(getTe(_CDN+"img/bag.png"))
		page1.addChild(_bag)
		// _bag.pivot.set(84,61.5*2)
		_bag.pivot.set(549/2,401/2*2)
		_bag.scale.set(.3,.3)
		_bag.position.set(750/2-206+i%3*206,stageH/2-285+parseInt(i/3)*177+61.5)
		_bag.interactive=true
		_bag.tap=chooseBag
		_bag.id=i
		bagA.push(_bag)
		TweenMax.from(_bag,.5,{alpha:0,y:"-=750",delay:.7-i*.07,ease:Sine.easeIn})
		TweenMax.from(_bag.scale,1.5,{x:.8*.3,y:1.5*.3,delay:.7-i*.07+.5,ease:Elastic.easeOut})

		TweenMax.to(_bag.scale,.5,{x:1.1*.3,y:.9*.3,delay:.7-i*.07+.5+1,repeat:10000,yoyo:true,ease:Sine.easeInOut})
		TweenMax.set(_bag.skew,{x:-0.1})
		TweenMax.to(_bag.skew,1,{x:0.1,delay:.7-i*.07+.5+1,repeat:10000,yoyo:true,ease:Sine.easeInOut})
	};

	//====文案
	p1t=new Sprite(getTe(_CDN+"img/p1t.png"))
	p1t.y=stageH/2+216
	TweenMax.from(p1t,1,{alpha:0,y:"+=200"})
	page1.addChild(p1t)


}

var userChoose=0
function chooseBag(_e){
	userChoose=_e.target.id
	for (var i = 0; i < 9; i++) {
		bagA[i].interactive=false
	};
	goPage2()
}

//================================================================================跳转第二页 锦囊

var page2Pic,p2t,p2btn

function goPage2(){
	TweenMax.to(p1t,1,{alpha:0,onComplete:function(){	p1t.visible=false	}})

	for (var i = 0; i < 9; i++) {
		TweenMax.killTweensOf(bagA[i].scale)
		TweenMax.killTweensOf(bagA[i].skew)
		TweenMax.to(bagA[i].scale,.5,{x:0,y:0})
	};
	TweenMax.to(bagA[userChoose].skew,.5,{x:0})
	TweenMax.to(bagA[userChoose].scale,.5,{x:.8,y:.8,ease:Sine.easeIn})

	TweenMax.to(bagA[userChoose],.5,{x:750/2,y:stageH/2+401/2,onComplete:function(){
		TweenMax.to(bagA[userChoose].scale,.5,{x:1,y:1,onComplete:function(){//,ease:SteppedEase.config(6)//,ease:RoughEase.ease
			TweenMax.to(bagA[userChoose].scale,.25,{x:.5,y:1.4})
			TweenMax.to(bagA[userChoose],.25,{y:stageH,ease:Sine.easeIn})
			TweenMax.to(bagA[userChoose].scale,1.5,{x:1,y:1,ease:Elastic.easeOut,delay:.25})
		}})
	}})

	page2Pic=	new Sprite(getTe(_CDN+"img/pic"+(userChoose+1)+".png"))
	p2t=	new Sprite(getTe(_CDN+"img/t"+(userChoose+1)+".png"))
	p2btn= new Sprite(getTe(_CDN+"img/p2btn.png"))
	page1.addChild(page2Pic,p2t,bagA[userChoose],p2btn)

	page2Pic.position.set(375,stageH/2-263)
	page2Pic.pivot.set(375,180.5)
	TweenMax.from(page2Pic.scale,1.75,{x:0,y:0,delay:1,ease:Elastic.easeOut})
	TweenMax.from(page2Pic,.5,{y:"+=550",delay:1,ease:Back.easeOut})

	p2t.y=stageH/2-34
	TweenMax.from(p2t,1,{alpha:0,y:"+=50",delay:1.25})

	p2btn.pivot.set(375,57)
	p2btn.position.set(375,stageH/2+107+57)
	TweenMax.from(p2btn,1,{alpha:0,y:"+=50",delay:1.25+.25,onComplete:function(){
		p2btn.interactive=true
		p2btn.tap=goPage3
	}})
}

//================================================================================跳转第三页 文字

function goPage3(){
	console.log("下一页")
	TweenMax.to(p2btn,.5,{alpha:0,delay:.1})
	TweenMax.to(p2btn.scale,.1,{x:.9,y:.9})
	TweenMax.to(bagA[userChoose],1,{y:stageH+210,alpha:0})
	TweenMax.to(p2t,1,{alpha:0})
	TweenMax.to(page2Pic,1,{alpha:0,onComplete:function(){
		page1.visible=false
		main.selectMessage()//=====改这里
	}})
	console.log("调用文字输入")

}

//================================================================================跳转第四页 UGC

function showPage4(_userT){
	console.log(_userT)
}










