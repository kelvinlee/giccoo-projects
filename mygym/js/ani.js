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



var nowTable=0

var table1=PIXI.Texture.fromImage("img/p3table1.png")
var table2=PIXI.Texture.fromImage("img/p3table2.png")
var table3=PIXI.Texture.fromImage("img/p3table3.png")
var table4=PIXI.Texture.fromImage("img/p3table4.png")
var table5=PIXI.Texture.fromImage("img/p3table5.png")
var table6=PIXI.Texture.fromImage("img/p3table6.png")
var tableTextureA=[table1,table2,table3,table4,table5,table6]

var btn0,btn1,btn2,btn3,btn4,btn5
var btnA=[btn0,btn1,btn2,btn3,btn4,btn5]

var table=new PIXI.Sprite(table1)

var p3btn1=pSprite("img/p3btn1.png")
var p3btn2=pSprite("img/p3btn2.png")
var p3btn3=pSprite("img/p3btn3.png")

var tag1=new PIXI.Container()
var tag2=new PIXI.Container()
var tag3=new PIXI.Container()
var tag4=new PIXI.Container()
var tag5=new PIXI.Container()
var tag6=new PIXI.Container()
var tagA=[tag1,tag2,tag3,tag4,tag5,tag6]
var tagContainer=new PIXI.Container()
var tagMask=new PIXI.Graphics()

function setP3table(){
  p3table.y=stageH-265
  p3table.addChild(table)

  var i
  var btnXA=[137,195,251,307,362,428]
  for (i = 0; i < btnA.length; i++) {
    btnA[i]=new PIXI.Graphics()
    p3table.addChild(btnA[i])
    btnA[i].beginFill(0xffffff,0)
    btnA[i].drawRect(0,0,50,65)
    btnA[i].x=btnXA[i]
    btnA[i].interactive=true
    btnA[i].touchstart=changeTab
  };
  p3table.addChild(p3btn1)
  p3table.addChild(p3btn2)
  p3table.addChild(p3btn3)
  p3btn2.x=p3btn3.x=507
  p3btn3.visible=false

  p3btn1.interactive=true
  p3btn2.interactive=true
  p3btn3.interactive=true

  p3btn1.tap=toPage2

  p3table.addChild(tagContainer)
  p3table.addChild(tagMask)
  tagMask.beginFill(0xff00ff,1)
  tagMask.moveTo(9,66)
  tagMask.lineTo(631,78)
  tagMask.lineTo(610,265)
  tagMask.lineTo(18,265)
  tagMask.lineTo(8,66)
  tagMask.endFill()
  tagContainer.mask=tagMask
  tagContainer.addChild(tag1)
  tagContainer.addChild(tag2)
  tagContainer.addChild(tag3)
  tagContainer.addChild(tag4)
  tagContainer.addChild(tag5)
  tagContainer.addChild(tag6)

  tag2.visible=tag3.visible=tag4.visible=tag5.visible=tag6.visible=false
  tag1.y=tag2.y=tag3.y=tag4.y=tag5.y=tag6.y=70

  setTag3()
}
var tag3icon=pSprite("img/tag3icon.png")
function setTag3(){
  tag3.addChild(tag3icon)
  tag3.interactive=true
  tag3.touchstart=startMove3
  

}
//=======================tag3滚轴
var startY
var newPosition=70
var mouseYA=[]
var timeA=[]
var date
function startMove3(_e){
  TweenLite.killTweensOf(tag3)
  newPosition=tag3.y
  startY=_e.data.global.y
  console.log(_e.data.global.y)
  tag3.touchmove=Move3
  stage3.interactive=true
  stage3.touchend=endMove3
  mouseYA=[0,0]
  timeA=[0,0]
}
function Move3(_e){
  tag3.y=newPosition+(_e.data.global.y-startY)*4
  if(tag3.y>=70){    tag3.y=70  }
  if(tag3.y<=70-1200+200) {tag3.y=70-1200+200};
  mouseYA.push(_e.data.global.y)
  date=new Date()
  timeA.push(date.getTime())
}
function endMove3(_e){
  newPosition=tag3.y
  tag3.touchmove=null
  stage3.interactive=true
  stage3.touchend=null
  console.log(mouseYA[mouseYA.length-1]-mouseYA[mouseYA.length-2])
  console.log(timeA[timeA.length-1]-timeA[timeA.length-2])
  console.log((mouseYA[mouseYA.length-1]-mouseYA[mouseYA.length-2])/(timeA[timeA.length-1]-timeA[timeA.length-2]))

  var endY=tag3.y+1000*(mouseYA[mouseYA.length-1]-mouseYA[mouseYA.length-2])/(timeA[timeA.length-1]-timeA[timeA.length-2])
  if(endY>=70){    endY=70  }
  if(endY<=70-1200+200) {endY=70-1200+200};

  TweenMax.to(tag3,1,{y:endY})
}

//====================回性别选择
function toPage2(){
  stage3.visible=false
  stage2.visible=true
  console.log("<===")
}
function changeTab(){
  for (i = 0; i < btnA.length; i++) {
    if(this==btnA[i]){
      console.log(i)
      nowTable=i
      tagA[i].visible=true
    }else{
      tagA[i].visible=false
    }
  };
  table.texture=tableTextureA[nowTable]
}