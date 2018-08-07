var stage1=new PIXI.Container()
var fireDots=new PIXI.Container()
var dotSpeed=[1,1]
var p1bg=pSprite("img/p1bg.jpg")
var p1bg2=pSprite("img/p1bg.jpg")
var p1mask1=pSprite("img/firemask3.png")
var dismap=pSprite("img/dismap.jpg")
function setPage1(){
  pStage.addChild(stage1)


  

  //setMask()
  setDisplaceMent()
  
  
  stage1.addChild(fireDots)
  setFireDot()

  setTrail()
}
function setDisplaceMent(){
  stage1.addChild(p1bg)
  stage1.addChild(p1mask1)
  var disF=new PIXI.filters.DisplacementFilter(p1mask1)
  stage1.filters=[disF]
  disF.scale.x=15
  disF.scale.y=0
  p1mask1.height=stageH*2
  TweenMax.to(p1mask1,2,{y:-stageH/8*2,repeat:1000,ease:Linear.easeNone})
}

function setMask(){
  stage1.addChild(p1bg2)
  stage1.addChild(p1bg)
  stage1.addChild(p1mask1)
  p1bg.mask = p1mask1
  p1bg.y=stageH/200
  p1bg.x=3
  p1mask1.height=stageH*2
  TweenMax.to(p1mask1,2,{y:-stageH/8*2,repeat:1000,ease:Linear.easeNone})
  TweenMax.to(p1bg,1,{x:-3,repeat:1000,ease:Linear.easeNone,yoyo:true,overwrite:0})
  //TweenMax.to(p1bg,1.5,{y:-stageH/200,repeat:1000,yoyo:true,overwrite:0})
}

dotA=[]
function setFireDot(){
  for (var i = 0; i < 100; i++) {
    var dot=pSprite("img/dot2.png")
    var dotC=new PIXI.Container()
    fireDots.addChild(dotC)
    dotC.addChild(dot)
    dotA.push(dotC)
    dot.position.set(Math.random()*100-50,Math.random()*100-50)
    dotC.position.set(Math.random()*640,Math.random()*stageH+stageH/2*.7)
    dot.pivot.set(25,25)
    dotC.scale.x=dotC.scale.y=(Math.random()*Math.random()*.8+.2)*2
    //================dotC.blendMode=_ADD
    var _t=Math.random()*2+1
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
  
  TweenMax.to(_dotC,_t*2-.05,{x:_dotC.x+Math.random()*640-320,y:_dotC.y-Math.random()*stageH,rotation:Math.random()*16-8,delay:_delay,overwrite:0})
  TweenMax.to(_dot.scale,_t*2-.05,{x:_scale2,y:_scale2,delay:_delay,overwrite:0})
}

var layer=new PIXI.display.Layer();
layer.useRenderTexture=true;
layer.useDoubleBuffer=true;

var trailSprite = new PIXI.Sprite(layer.getRenderTexture());
trailSprite.alpha =.6// 0.96;

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
   //showLayer.blendMode=_ADD
   //trailSprite.blendMode=_ADD

}

