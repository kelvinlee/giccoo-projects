var _CDN = "./";
// var _CDN = "//image.giccoo.com/projects/emoji/";
var imageList = [
	_CDN+"img/title.png",

	_CDN+"img/title0.png",
	_CDN+"img/title1.png",
	_CDN+"img/title2.png",
	_CDN+"img/title3.png",
	_CDN+"img/title4.png",
	
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
	if(ifHaveData==0){
		Type=0
	}else{
		Type=parseInt(Math.random()*4+1)
	}
	initAll()
	setPart1()
	console.log("?111")
}

var mainC=new PIXI.Container()
var allBG=new PIXI.Graphics()

function initAll(){
	allBG.beginFill(0x999999)
	allBG.drawRect(0,0,640,11000)
	pStage.addChild(mainC)
	mainC.addChild(allBG)

	pStage.interactive=true
  pStage.touchstart=touchStart
  pageLoop()
}


var startY,endY,mouseYA,timeA,newPosition

function touchStart(_e){
  TweenLite.killTweensOf(mainC)

  newPosition=mainC.y
  startY=_e.data.global.y
  //console.log(_e.data.global.y)
  pStage.touchmove=touchMove
  pStage.interactive=true
  pStage.touchend=touchEnd
  mouseYA=[0,0]
  timeA=[0,0]
}
var heightLimit=11000
function touchMove(_e){

  mainC.y=newPosition+(_e.data.global.y-startY)*2
  if(mainC.y>=0){    mainC.y=0  }
  if(mainC.y<=heightLimit) {mainC.y=heightLimit};//=======================高度限制
  mouseYA.push(_e.data.global.y)
  date=new Date()
  timeA.push(date.getTime())


  //console.log("theNewNowHeight+part4.y-217",theNewNowHeight+part4.y-217,"main.y",main.y)

  //TweenMax.set($("#userText"),{y:(theNewNowHeight+part4.y-217+main.y)/640*screenW})
}
function touchEnd(_e){
  pStage.touchmove=null
  pStage.interactive=true
  pStage.touchend=null

  var endY=mainC.y+1000*(mouseYA[mouseYA.length-1]-mouseYA[mouseYA.length-3])/(timeA[timeA.length-1]-timeA[timeA.length-3])/4
  if(endY>=0){    endY=0  }
  if(endY<=heightLimit) {endY=heightLimit};//=======================高度限制

  TweenMax.to(mainC,.5,{y:endY})

  //TweenMax.to($("#userText"),1,{y:(theNewNowHeight+part4.y-217+endY)/640*screenW})
}


function pageLoop(){
  //heightLimit=-nowHeight-part4.y+stageH-260-50-260-40-680

  //requestAnimationFrame(pageLoop)
  //renderer.render(pStage)
  // if(main.y<=-(theNewNowHeight+part4.y-stageH+237+100)){//&&main.y>=-(nowHeight+part4.y-stageH+200)
  //   //TweenMax.to(mainMask,.5,{height:stageH-237-20-ifInputing*100})
  //   //TweenMax.to(userMessage,.5,{y:stageH-237-20-ifInputing*100})
  //   // TweenMax.set($("#userText"),{display:"block"})
  //   // TweenMax.set($("#songText"),{display:"block"})
  //  // TweenMax.set($("#userForm"),{display:"block"})
  // }else{
  //   //TweenMax.to(mainMask,.5,{height:stageH*14/13})
  //   //TweenMax.to(userMessage,.5,{y:stageH})
  //   // TweenMax.set($("#userText"),{display:"none"})
  //   // TweenMax.set($("#songText"),{display:"none"})
  //  // TweenMax.set($("#userForm"),{display:"none"})

  // }
  // TweenMax.set($("#userText"),{y:(stageH-237+20-20-ifInputing*100)/640*screenW})
  // TweenMax.set($("#songText"),{y:(stageH-56-50-20-ifInputing*100)/640*screenW})


}