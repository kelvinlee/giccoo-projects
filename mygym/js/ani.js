var titleA=[title,title1,title2,title3,title4]


var c1={_r:0,_line:32,_color:0xfbd152}
var c2={_r:0,_line:64,_color:0xfbd152}//0x90dfe5

function ani1(){


  TweenMax.from(p1car,1,{x:960,y:295})
  TweenMax.from(p1car.scale,1,{y:.5,x:.5})
  for (var j = 1; j < p1picA.length; j++) {
    TweenLite.set(p1picA[j],{y:"-=80",x:"+=140",alpha:0})
    TweenLite.to(p1picA[j],1,{alpha:1,x:"-=140",delay:j*1/8})//,ease:Elastic.easeOut
    TweenLite.to(p1picA[j],1,{y:"+=80",delay:j*1/8,ease:Bounce.easeOut})//,ease:Elastic.easeOut
  };

  var t1=1
  for (var i = 0; i < titleA.length; i++) {
    TweenLite.from(titleA[i],2.5,{y:-238,rotation:-.8*Math.pow(-1,i),ease:Elastic.easeOut,delay:i*.03+t1})
  };
  TweenLite.from(titleMask,2.5,{y:-238,rotation:-.8,ease:Elastic.easeOut,delay:t1})
  TweenMax.to(titleLight,1,{alpha:1,x:960,width:640,repeat:20,delay:t1+1,repeatDelay:3})

  var t2=1
  TweenLite.from(p1btn.scale,1.5,{x:0,y:0,ease:Elastic.easeOut,delay:t1+t2})
  TweenLite.from(p1btnT.scale,.5,{x:5,y:5,delay:t1+t2})
  TweenLite.from(p1btnBG1.scale,.5,{x:5,y:5,delay:t1+t2})
  TweenLite.from(p1btnBG2.scale,.5,{x:5,y:5,delay:t1+t2})

  TweenMax.to(c1,1.5,{_r:190,_line:0,repeat:100,repeatDelay:1.5,delay:t1+t2,onUpdate:function(){
    circle1.clear()
    circle1.beginFill(0xffffff,0)
    circle1.lineStyle(c1._line,c1._color,1,1)
    circle1.drawCircle(320,stageH-109,c1._r)
  }})

  TweenMax.to(c2,1.5,{_r:200,_line:0,repeat:100,repeatDelay:1.5,delay:t1+t2+.1,onStart:picJump,
    onUpdate:function(){
      circle2.clear()
      circle2.beginFill(0xffffff,0)
      circle2.lineStyle(c2._line,c2._color,1,0)
      circle2.drawCircle(320,stageH-109,c2._r)
    },
    onRepeat:function(){
      if(c2._color!=0xfbd152){
        c1._color=0xfbd152
        c2._color=0xfbd152
      }else{
        c1._color=0x90dfe5
        c2._color=0x90dfe5
      }
      picJump()
  }})

  TweenMax.to(p1btnBG2,.1,{alpha:0,repeat:100,repeatDelay:2.9,delay:t1+t2,yoyo:true})

}
function picJump(){
  for (var j = 1; j < p1picA.length; j++) {

    TweenMax.to(p1picA[j],.15,{y:538/1000*stageH-40,delay:3-j*1/8+.8,overwrite:0,ease:Sine.easeOut})//,ease:Elastic.easeOut
    TweenMax.to(p1picA[j],.8,{y:538/1000*stageH,delay:3-j*1/8+.15+.8,overwrite:0,ease:Bounce.easeOut})//,ease:Elastic.easeOut
  };
}
function p1aniDown(){
  TweenMax.killTweensOf(c1)
  TweenMax.killTweensOf(c2)

  TweenMax.to(c1,1,{_r:0,_line:64,ease:Elastic.easeOut,onUpdate:function(){
    circle1.clear()
    circle1.beginFill(0xffffff,0)
    circle1.lineStyle(c1._line,c1._color,1,1)
    circle1.drawCircle(320,stageH-109,c1._r)
  }})
  TweenMax.to(c2,1,{_r:85.5,_line:64,ease:Elastic.easeOut,onUpdate:function(){
    circle2.clear()
    circle2.beginFill(0xffffff,0)
    circle2.lineStyle(c2._line,c2._color,1,1)
    circle2.drawCircle(320,stageH-109,c2._r)
  }})
}
function p1aniUp(){
  TweenMax.killTweensOf(c1)
  TweenMax.killTweensOf(c2)
  stage1.addChild(circle1)
  stage1.addChild(circle2)
  TweenMax.to(c1,.5,{_r:stageH,_line:0,onComplete:page2Start,onUpdate:function(){
    circle1.clear()
    circle1.beginFill(c1._color,1)
    circle1.lineStyle(c1._line,c1._color,1,1)
    circle1.drawCircle(320,stageH-109,c1._r)
  }})
  TweenMax.to(c2,.4,{_r:stageH,_line:0,delay:.15,onUpdate:function(){
    circle2.clear()
    circle2.beginFill(0xffffff,1)
    circle2.lineStyle(c2._line,c2._color,1,0)
    circle2.drawCircle(320,stageH-109,c2._r)
  }})
}

var p2titleA=[p2title3,p2title2,p2title1]

function ani2(){
  TweenMax.from(p2btn1,.5,{x:"-=320",ease:Back.easeNone})
  TweenMax.from(p2btn2,.5,{x:"+=320",ease:Back.easeNone})
  TweenMax.from(boyMove,.5,{x:"-=320",ease:Back.easeNone})
  TweenMax.from(girlMove,.5,{x:"+=320",ease:Back.easeNone})

  for (var i = 0; i < p2titleA.length; i++) {
    TweenMax.from(p2titleA[i],1.5,{alpha:0,y:"-=50",rotation:-.3*Math.pow(-1,i),ease:Elastic.easeOut,delay:i*.1+.5})
  };
}
