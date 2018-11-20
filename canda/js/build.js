// var _CDN = "./";
var _CDN = "//image.giccoo.com/projects/canda/";
var imageList = [
	_CDN+"img/p1bg.jpg",
	_CDN+"img/cat1.png",
	_CDN+"img/cat2.png",

	_CDN+"img/p1board1.png",
	_CDN+"img/p1board2.png",
	_CDN+"img/p1board3.png",
	_CDN+"img/p1board4.png",

	_CDN+"img/p1logo.png",

	_CDN+"img/p1t.png",
	_CDN+"img/p1hand.png",

	_CDN+"img/bigbg.jpg",

	_CDN+"img/down_bag.png",
	_CDN+"img/down_bubble.png",
	_CDN+"img/down_cube.png",

	_CDN+"img/clothes-1.png",
	_CDN+"img/clothes-2.png",
	_CDN+"img/clothes-3.png",
	_CDN+"img/clothes-4.png",
	_CDN+"img/clothes-5.png",
	_CDN+"img/clothes-6.png",
	_CDN+"img/clothes-7.png",
	_CDN+"img/clothes-8.png",
	_CDN+"img/clothes-9.png",
	_CDN+"img/clothes-10.png",
	_CDN+"img/clothes-11.png",
	_CDN+"img/clothes-12.png",

	_CDN+"img/pants-1.png",
	_CDN+"img/pants-2.png",
	_CDN+"img/pants-3.png",
	_CDN+"img/pants-4.png",
	_CDN+"img/pants-5.png",
	_CDN+"img/pants-6.png",

	_CDN+"img/hats-1.png",
	_CDN+"img/hats-2.png",
	_CDN+"img/hats-3.png",
	_CDN+"img/hats-4.png",
	_CDN+"img/hats-5.png",
	_CDN+"img/hats-6.png",

	_CDN+"img/others-1.png",
	_CDN+"img/others-2.png",
	_CDN+"img/others-3.png",
	_CDN+"img/others-4.png",
	_CDN+"img/others-5.png",
	_CDN+"img/others-6.png",

	_CDN+"img/endbg.jpg",

	_CDN+"img/t1.png",
	_CDN+"img/t2.png",
	_CDN+"img/t3.png",
	_CDN+"img/t4.png",

	_CDN+"img/endlogo.png",
	_CDN+"img/qr.png",


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

}

var page1=new PIXI.Container()
var p1bg
var p1catC=new PIXI.Container()
var p1boardC=new PIXI.Container()
var p1logoC=new PIXI.Container()
var p1hintC=new PIXI.Container()
function setPage1(){
	pStage.addChild(page1)
	p1bg=new Sprite(getTe(_CDN+"img/p1bg.jpg"));
	p1bg.y=stageH/2-750


	setP1cat()
	setP1board()
	setLogo()
	setP1hint()
	page1.addChild(p1bg,p1catC,p1boardC,p1logoC,p1hintC)	

	page1.interactive=true
	page1.tap=goMain

	setMain()
}

function goMain(){
	page1.interactive=false
	page1.pivot.set(100,750)
	page1.position.set(100,750)
	p1hintC.visible=false
	TweenMax.to(page1,2,{alpha:0})
	TweenMax.to(page1.scale,2,{x:6,y:6,onComplete:function(){
		setTimeout(function(){
			main.goShow(go1)
		},666)
		
	}})
	bigbgC.pivot.x=960
	TweenMax.from(bigbgC.scale,1.5,{delay:.5,x:.5,y:.5})
	TweenMax.to(bigbgC.pivot,1.5,{delay:.5,x:0})
}
var item1,item2,item3,item4
var itemA=[]
function setItem(_step,_picUrl){
	if(itemA[_step-1]!=null){
		itemC.removeChild(itemA[_step-1])
		itemA.splice(_step-1,1)
	}


	var _item=new Sprite(getTe(_CDN+"img/"+_picUrl));
	var _wbg=new PIXI.Graphics()
	_wbg.beginFill(0xffffff)
	_wbg.drawRect(0,0,60,60)
	_wbg.pivot.set(30,30)
	itemC.addChild(_wbg,_item)

	_item.pivot.set(_item.width/2,_item.height/2)
	_item.position.set(cubeA[_step-1].x,cubeA[_step-1].y)
	_item.scale.x=_item.scale.y=.33

	_wbg.position.set(cubeA[_step-1].x,cubeA[_step-1].y)

	TweenMax.from(_item.scale,2,{x:0,y:0,ease:Elastic.easeOut})

	itemA[_step-1]=_item
}


