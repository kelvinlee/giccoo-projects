var stage1=new PIXI.Container()
var fireDots=new PIXI.Container()
var dotSpeed=[1,1]
var p1bg=pSprite("img/p1bg.jpg")
var p1bg2=pSprite("img/p1bg.jpg")
var p1mask1=pSprite("img/firemask3.png")
//var dismap=pSprite("img/dismap.jpg")
function setPage1(){
  pStage.addChild(stage1)


  

  setMask()
  //setDisplaceMent()
  
  
  stage1.addChild(fireDots)
  setFireDot()

  setTrail()

  setScorll()
}
// function setDisplaceMent(){
//   stage1.addChild(p1bg)
//   stage1.addChild(p1mask1)
//   var disF=new PIXI.filters.DisplacementFilter(p1mask1)
//   stage1.filters=[disF]
//   disF.scale.x=15
//   disF.scale.y=0
//   p1mask1.height=stageH*2
//   TweenMax.to(p1mask1,2,{y:-stageH/8*2,repeat:1000,ease:Linear.easeNone})
// }

function setMask(){
  stage1.addChild(p1bg2)
  stage1.addChild(p1bg)
  stage1.addChild(p1mask1)
  p1bg.height=p1bg2.height=stageH
  p1bg.mask = p1mask1
  p1bg.y=stageH/200
  p1bg.x=3
  p1mask1.height=stageH*2
  TweenMax.to(p1mask1,1,{y:-stageH/8*2,repeat:1000,ease:Linear.easeNone})
  TweenMax.to(p1bg,1,{x:-3,repeat:1000,ease:Linear.easeNone,yoyo:true,overwrite:0})
  //TweenMax.to(p1bg,1.5,{y:-stageH/200,repeat:1000,yoyo:true,overwrite:0})
}

dotA=[]
function setFireDot(){
  for (var i = 0; i < 100; i++) {
    var dot=pSprite("img/dot3.png")
    var dotC=new PIXI.Container()
    fireDots.addChild(dotC)
    dotC.addChild(dot)
    dotA.push(dotC)
    dot.position.set(Math.random()*100-50,Math.random()*100-50)
    dotC.position.set(Math.random()*640,Math.random()*stageH+stageH/2*.7)
    dot.pivot.set(25,25)
    dotC.scale.x=dotC.scale.y=(Math.random()*Math.random()*.8+.2)*2
    //dotC.blendMode=_ADD//================
    var _t=Math.random()
    //var _delay=Math.random()*2+1
    dot.alpha=0
    TweenMax.to(dotC,_t,{alpha:1,onComplete:moveSingleDot,onCompleteParams:[dotC,dot]})
    //TweenMax.to(dot.scale,_t,{x:0,y:0,repeat:100,delay:_delay,yoyo:true})
  };
}

function moveSingleDot(_dotC,_dot){
  var _t=Math.random()*1+.5
  var _delay=Math.random()*2+1

  _dot.position.set(Math.random()*100-50,Math.random()*100-50)
  _dot.alpha=0

  var _scale=(Math.random()*.8+.3)*1
  var _scale2=(Math.random()*.8+.3)*1
  TweenMax.set(_dotC,{x:Math.random()*640,y:Math.random()*stageH/2+stageH*.7})
  TweenMax.set(_dotC.scale,{x:_scale,y:_scale})


  TweenMax.to(_dot,_t,{alpha:1,delay:_delay,overwrite:0})
  TweenMax.to(_dot,_t,{alpha:0,delay:_t+_delay,onComplete:moveSingleDot,onCompleteParams:[_dotC,_dot],overwrite:0})
  
  TweenMax.to(_dotC,_t*2-.05,{x:_dotC.x+Math.random()*640-320,y:_dotC.y-Math.random()*stageH*.8,rotation:Math.random()*10-5,delay:_delay,overwrite:0})
  TweenMax.to(_dot.scale,_t*2-.05,{x:_scale2,y:_scale2,delay:_delay,overwrite:0})
}

var layer=new PIXI.display.Layer();
layer.useRenderTexture=true;
layer.useDoubleBuffer=true;

var trailSprite = new PIXI.Sprite(layer.getRenderTexture());
trailSprite.alpha =.66// 0.96;

var showLayer=new PIXI.Sprite(layer.getRenderTexture())

var blurF=new PIXI.filters.BlurFilter()

function setTrail(){
  layer.addChild(fireDots)
  layer.addChild(trailSprite);
  
  app.stage.addChild(layer);
  app.stage.addChild(showLayer);
  //layer.rotation=.01

  blurF.blur=16
  //trailSprite.filters=[blurF]
   showLayer.blendMode=_ADD
   //trailSprite.blendMode=_ADD

}

var papper=pSprite("img/papper_s.png")
var scorll1=pSprite("img/score.png")
var scorll2=pSprite("img/score.png")
var stamp1=pSprite("img/stamp1.png")
var stamp2=pSprite("img/stamp2.png")
var p2bg=pSprite("img/p2bg.jpg")
//var p2copy=pSprite("img/copy.png")
var scorll=new PIXI.Container()
var papperMask=new PIXI.Graphics()


function setScorll(){

  app.stage.addChild(scorll)
  scorll.addChild(p2bg)
  scorll.addChild(papper)
  //scorll.addChild(p2copy)
  scorll.addChild(scorll1)
  scorll.addChild(scorll2)
  scorll.addChild(stamp2)
  scorll.addChild(stamp1)
  papper.width=640
  papper.height=632
  scorll1.pivot.set(320,42)
  scorll1.position.set(320,42)
  scorll2.pivot.set(320,42)
  scorll2.position.set(320,42)
  scorll2.y=632-42
  scorll2.rotation=Math.PI

  papper.pivot.set(240,237)
  papper.position.set(320,stageH/2)
  scorll1.y=stageH/2-32//stageH/2-316+42
  scorll2.y=stageH/2+32//stageH/2+316-42
  // p2copy.y=stageH/2
  // p2copy.pivot.y=316
  stamp1.pivot.y=stamp2.pivot.y=53
  stamp1.pivot.x=stamp2.pivot.x=320
  stamp1.y=stamp2.y=stageH/2
  stamp1.x=stamp2.x=320
  TweenMax.to(stamp1,1,{alpha:0,yoyo:true,repeat:1000})

  scorll.addChild(papperMask)
  //p2copy.alpha=0
  papper.mask=papperMask
  papperMask.beginFill(0xffffff,0)
  papperMask.drawRect(0,0,640,64)
  papperMask.pivot.y=32
  papperMask.y=stageH/2

  //TweenMax.to(papperMask,1,{height:632,yoyo:true,repeat:1000})
  TweenMax.to(scorll,2,{y:-stageH*.03,yoyo:true,repeat:1000,ease:Sine.easeInOut})

  scorll.interactive=true
  scorll.touchstart=openScorll

  //p2bg.y=stageH-1300
  p2bg.alpha=0
  for (var i = 1; i <= 11; i++) {
    var _copy=pSprite("img/c"+i+".png")
    copyA.push(_copy)
    scorll.addChild(_copy)
    _copy.y=stageH/2
    _copy.pivot.y=316
    _copy.alpha=0
    //TweenMax.to(copyA[i],1,{alpha:1,delay:i*.1})//t1A[i-1]
  };
}
var logo=pSprite("img/logo.png")
var btn=pSprite("img/btn.png")

function openScorll(){
  scorll.interactive=false
  console.log("open")
  TweenMax.to(scorll,2,{y:0})
  TweenMax.to(stamp1,.2,{alpha:0})
  TweenMax.to(stamp2,.2,{alpha:0})

  TweenMax.to(stamp1.scale,.2,{x:1.5,y:1.5})
  TweenMax.to(stamp2.scale,.2,{x:1.5,y:1.5})

  TweenMax.to(papperMask,1.5,{height:632})
  TweenMax.to(scorll1,1.5,{y:stageH/2-316+42})
  TweenMax.to(scorll2,1.5,{y:stageH/2+316-42,onComplete:showCopy})

  TweenMax.to(p2bg,2.5,{alpha:1,delay:.5,y:stageH-1300})
  scorll.addChild(logo)
  scorll.addChild(btn)
  logo.y=stageH/2-316+42-204
  btn.y=stageH/2+316-42+60
  TweenMax.from(logo,1,{alpha:0})
  TweenMax.from(btn,1,{alpha:0})
  btn.interactive=true
  btn.touchstart=goURL
  TweenMax.set($(".musicBtn"),{display:"block"})
  bgm.play();
}
var copyA=[]
var t1A=[1,1,1,1,1,1,1,1,1,1,1]
var t2A=[0,0.2,1.8,6.6,10,15,18,22,26,27.5,30.8]
function showCopy(){
  for (var i = 1; i <= 11; i++) {

    //_copy.alpha=0
    TweenMax.to(copyA[i-1],3,{alpha:1,delay:t2A[i-1]})//t1A[i-1]
  };

}
var ifFirstTime=1
function showCopy2(){
  console.log("ddd")
  if(ifFirstTime==1){
    for (var i = 1; i <= 11; i++) {
      TweenMax.to(copyA[i-1],1,{alpha:1,delay:(i-1)*.1})//t1A[i-1]
    };
    ifFirstTime=0
  }

}
function goURL(){
  window.location.href='http://www.baidu.com';
}