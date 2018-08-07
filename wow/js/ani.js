var stage1=new PIXI.Container()
var fireDots=new PIXI.Container()
var dotSpeed=[1,1]
function setPage1(){
  pStage.addChild(stage1)
  stage1.addChild(fireDots)
  setFireDot()
  //moveFireDot()
  //app.ticker.add(moveFireDot);
  setTrail()
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
    dotC.blendMode=_ADD
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
trailSprite.alpha = 0.96;

var showLayer=new PIXI.Sprite(layer.getRenderTexture())

var blurF=new PIXI.filters.BlurFilter()

function setTrail(){
  layer.addChild(pStage)
  layer.addChild(trailSprite);
  
  app.stage.addChild(layer);
  app.stage.addChild(showLayer);
  //layer.rotation=.01

  blurF.blur=16
  trailSprite.filters=[blurF]
   //showLayer.blendMode=_ADD
   //trailSprite.blendMode=_ADD
}

// function moveFireDot(){
//   for (var i = 0; i < dotA.length; i++) {
//     dotA[i].x+=dotSpeed[0]
//     dotA[i].y+=dotSpeed[1]

//     if(dotA[i].x>640+50){      dotA[i].x=-50    }
//     if(dotA[i].x<-50){         dotA[i].x=640+50    }
//     if(dotA[i].y>stageH+50){      dotA[i].y=-50    }
//     if(dotA[i].y<-50){         dotA[i].y=stageH+50    }
//   };
// }