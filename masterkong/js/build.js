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

	_CDN+"img/arrow.png",
	_CDN+"img/from.png",
	_CDN+"img/page3hint.png",
	
	_CDN+"img/btn-code.png",
	_CDN+"img/btn-share.png",

	_CDN+"img/bg1d.png",
	_CDN+"img/bg2d.png",
	_CDN+"img/bg3d.png",
	_CDN+"img/bg1.jpg",
	_CDN+"img/bg2.jpg",
	_CDN+"img/bg3.jpg",





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



	getStart()
	
	
}


function getStart(){


	setBG()

	if(main.questionPage==true){
		if(main.questionHas==true){
			console.log("输入问题页")
			main.questionPageShow=true
		}else{
			console.log("显示ugc",main.getData)
		}
		

	}else{
		setPage1()
		setFlower()
	}
	
	
}

//================================================================================设置背景
var bgC=new PIXI.Container()
var bg123=new PIXI.Container()
var bg123A=[]
var bg1C=new PIXI.Container()
var bg2C=new PIXI.Container()
var bg3C=new PIXI.Container()
function setBG(){
	var bg_top=new Sprite(getTe(_CDN+"img/bg_top.jpg"))
	var bg_down=new Sprite(getTe(_CDN+"img/bg_down.jpg"))
	var bg_mid=new Sprite(getTe(_CDN+"img/bg_mid.jpg"))
	var logo=new Sprite(getTe(_CDN+"img/logo.png"))
	pStage.addChild(bgC)
	bgC.addChild(bg_mid,bg_top,bg_down)
	bg_down.y=stageH-510
	bg_mid.y=429
	bg_mid.height=stageH-430-510+2

	bgC.addChild(bg123)



	bg123.addChild(bg3C,bg2C,bg1C)
	for (var i = 0; i < 3; i++) {
		var _bg=new Sprite(getTe(_CDN+"img/bg"+(i+1)+".jpg"))
		var _bgd=new Sprite(getTe(_CDN+"img/bg"+(i+1)+"d.png"))
		var _bgC=new PIXI.Container()
		if(i==0){
			var bg1d=new Sprite(getTe(_CDN+"img/bg_down.jpg"))
			bg1d.y=stageH-510

			var bg1flower=new Sprite(getTe(_CDN+"img/flower.png"))
			bg1flower.y=stageH-352
			_bgC.addChild(_bg,bg1d,_bgd,bg1flower)
		}else{
			_bgC.addChild(_bg,_bgd)
		}
		bg123.addChild(_bgC)
		bg123A.push(_bgC)
		_bgd.position.y=Math.max(stageH-725,550)
	};
	bg123A[1].alpha=0
	bg123A[2].alpha=0
	bg123.visible=false
	bgC.addChild(logo)
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
	main.bagIndex = userChoose+1
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
	setT(_userT)
	setBtn()
	setBGChange()
	pStage.addChild(page2Pic)
	page2Pic.scale.set(.5,.5)
	page2Pic.position.set(512,stageH/2+170)
	page2Pic.alpha=1
	console.log(page2Pic)


}

//====== 文字
var t1,t2,t3
var t1s=new PIXI.TextStyle({	fill:0x9e6c01,	align:"left",		fontSize:33,	lineHeight:54,	letterSpacing:5, fontWeight:"bold"})
var t2s=new PIXI.TextStyle({	fill:0x9e6c01,	align:"right",	fontSize:25})
var t3s=new PIXI.TextStyle({	fill:0x9e6c01,	align:"right",	fontSize:38})
var userTC=new PIXI.Container()
var from
function setT(_userT){

	pStage.addChild(userTC)
	t1=new PIXI.Text(_userT.message,t1s)
	t2=new PIXI.Text("—————《"+_userT.musicname+"》",t2s)
	t3=new PIXI.Text(_userT.nickname,t3s)
	if(_userT.musicname==""){
		t2.text=""
	}
	
	
	t1.position.set(122,stageH/2-333)
	t2.position.set(686-t2.width+10,stageH/2-88)
	t3.position.set(686-t3.width,stageH/2-38)

	from=new Sprite(getTe(_CDN+"img/from.png"))
	from.position.set(-t3.width,stageH/2-38+12)

	userTC.addChild(t1,t2,t3,from)
	TweenMax.from(userTC,1,{alpha:0})

}
//===== btn
var endBtn1
var endBtn2
var endBtnC=new PIXI.Container()
function setBtn(){
	pStage.addChild(endBtnC)
	endBtn1=new Sprite(getTe(_CDN+"img/btn-code.png"))
	endBtn2=new Sprite(getTe(_CDN+"img/btn-share.png"))

	endBtnC.addChild(endBtn1,endBtn2)
	endBtn1.position.y=stageH/2+325
	endBtn2.position.y=stageH/2+424

	endBtn1.interactive=true
	endBtn2.interactive=true
	endBtn1.tap=goCode
	endBtn2.tap=goShare1
}

//===== 背景变换
var bgbtnL,bgbtnR
var bgNum=0
var bghint
function setBGChange(){
	bg123.visible=true
	flower.visible=false
	bgbtnL=new Sprite(getTe(_CDN+"img/arrow.png"))
	bgbtnR=new Sprite(getTe(_CDN+"img/arrow.png"))
	pStage.addChild(bgbtnL,bgbtnR)
	bgbtnL.position.set(40,stageH/2-283)
	bgbtnR.position.set(750-40,stageH/2-283)
	bgbtnR.scale.x=-1

	bgbtnL.interactive=true
	bgbtnR.interactive=true
	bgbtnL.tap=changeBG
	bgbtnR.tap=changeBG
	bghint=new Sprite(getTe(_CDN+"img/page3hint.png"))
	pStage.addChild(bghint)
	bghint.position.y=stageH/2-352
	bghint.position.x=30
	TweenMax.from(bghint,1.5,{alpha:0,y:"-=50",x:"+=60",ease:Back.easeOut})
}
function changeBG(_e){
	bghint.visible=false
	if(_e.target==bgbtnL){
		bgNum--
		if(bgNum==-1){bgNum=2}
	}else{
		bgNum++
		if(bgNum==3){bgNum=0}
	}
	for (var i = 0; i < 3; i++) {
		TweenMax.to(bg123A[i],1,{alpha:0})
		if(i==bgNum){
			TweenMax.to(bg123A[i],1,{alpha:1})
			main.backgoundIndex = i+1
		}
		
	};

}


//=====二维码链接
function getQR(_url){
	console.log(_url)
}

//=====加密
function goCode(){
	bghint.visible=false
	bgbtnL.visible=false
	bgbtnR.visible=false
	endBtn1.visible=false
	endBtn2.visible=false
	console.log("去加密")
	main.openQuestion()
}
function showUGC2(){
	
}
//=====直接分享
function goShare1(){
	bghint.visible=false
	bgbtnL.visible=false
	bgbtnR.visible=false
	endBtn1.visible=false
	endBtn2.visible=false
	console.log("生成ugc")
	main.submit()
}
function showUGC1(_url){
	console.log(_url)
}
