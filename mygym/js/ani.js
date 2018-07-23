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


//============================   setP3 bubble 起名字！

var p3bubble1=pSprite("img/p3bubble1.png")
var p3bubble2=pSprite("img/p3bubble2.png")

function setP3bubble(){
  stage3.addChild(p3bubble1)
  stage3.addChild(p3bubble2)

  p3bubble1.pivot.set(320,189)
  p3bubble2.pivot.set(320,189)
  p3bubble1.position.set(320,340)
  p3bubble2.position.set(320,340)
  
  TweenLite.set($("#roomName"),{y:screenW/640*196})
  TweenLite.set($("#userName"),{y:screenW/640*240})
  console.log(screenW/640*238)
}

$("#UserTextarea1").click(function () {
  if($("#UserTextarea1")[0].value=="给你的健身房起个名字吧"){
    $("#UserTextarea1")[0].value=""
  }
})
$("#UserTextarea1").blur(function () {
  if($("#UserTextarea1")[0].value==""){
    $("#UserTextarea1")[0].value="给你的健身房起个名字吧"
  }
})

$("#UserTextarea2").click(function () {
  if($("#UserTextarea2")[0].value=="请输入你的昵称"){
    $("#UserTextarea2")[0].value=""
  }
})
$("#UserTextarea2").blur(function () {
  if($("#UserTextarea2")[0].value==""){
    $("#UserTextarea2")[0].value="请输入你的昵称"
  }
})


//============================   setP3table
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

  setTag1()
  setTag2()
  setTag3()
  setTag4()
  setTag5()
  setTag6()
}
//============================改性别
var sex0=[]
var sex1=[]
function changeSex(){
  console.log("changeSex")
  for (var i = 0; i < sex0.length; i++) {
    if(sex==0){
      sex0[i].visible=true
      sex1[i].visible=false
    }else{
      sex0[i].visible=false
      sex1[i].visible=true
    }
  };
  tag1.y=tag2.y=tag3.y=tag4.y=tag5.y=tag6.y=70
}
//===================================================================tag1
//===================================================================tag1
var tag1icon0=pSprite("img/tag1icon0.png")
var tag1icon1=pSprite("img/tag1icon1.png")
var btnGroup1A=[]
function setTag1(){
  tag1.addChild(tag1icon0)
  tag1.addChild(tag1icon1)
  sex0.push(tag1icon0)
  sex1.push(tag1icon1)
  for (var i = 0; i < 4; i++) {
    var t1btn=new PIXI.Graphics()
    t1btn.beginFill(0x005599,0)
    t1btn.drawRect(0,0,135,135)
    tag1.addChild(t1btn)
    btnGroup1A.push(t1btn)
    t1btn.x=30+i%4*145
    t1btn.y=30+parseInt(i/4)*200
    t1btn.interactive=true
    t1btn.tap=selectT1
  };
}
//=======================tag1点击
function selectT1(_e){
  for (var i = 0; i < btnGroup1A.length; i++) {
    if(this==btnGroup1A[i]){
      console.log("i="+i)


    }
  };
}
//===================================================================tag2
//===================================================================tag2
var tag2icon0=pSprite("img/tag2icon0.png")
var tag2icon1=pSprite("img/tag2icon1.png")
var btnGroup2A=[]
function setTag2(){
  tag2.addChild(tag2icon0)
  tag2.addChild(tag2icon1)
  sex0.push(tag2icon0)
  sex1.push(tag2icon1)
  for (var i = 0; i < 16; i++) {
    var t2btn=new PIXI.Graphics()
    t2btn.beginFill(0x005599,0)
    t2btn.drawRect(0,0,135,135)
    tag2.addChild(t2btn)
    btnGroup2A.push(t2btn)
    t2btn.x=30+i%4*145
    t2btn.y=30+parseInt(i/4)*200
    t2btn.interactive=true
    t2btn.tap=selectT2
  };
  tag2.interactive=true
  tag2.touchstart=startMove2
}
//=======================tag2点击
function selectT2(_e){
  for (var i = 0; i < btnGroup2A.length; i++) {
    if(this==btnGroup2A[i]){
      console.log("i="+i)


    }
  };
}
//=======================tag2滚轴


function startMove2(_e){
  TweenLite.killTweensOf(tag2)
  newPosition=tag2.y
  startY=_e.data.global.y
  console.log(_e.data.global.y)
  tag2.touchmove=Move2
  stage3.interactive=true
  stage3.touchend=endMove2
  mouseYA=[0,0]
  timeA=[0,0]
}
function Move2(_e){
  tag2.y=newPosition+(_e.data.global.y-startY)*4
  if(tag2.y>=70){    tag2.y=70  }
  if(tag2.y<=70-800+200) {tag2.y=70-800+200};
  mouseYA.push(_e.data.global.y)
  date=new Date()
  timeA.push(date.getTime())
}
function endMove2(_e){
  tag2.touchmove=null
  stage3.interactive=true
  stage3.touchend=null

  var endY=tag2.y+1000*(mouseYA[mouseYA.length-1]-mouseYA[mouseYA.length-2])/(timeA[timeA.length-1]-timeA[timeA.length-2])
  if(endY>=70){    endY=70  }
  if(endY<=70-800+200) {endY=70-800+200};

  TweenMax.to(tag2,1,{y:endY})
}
//===================================================================tag3
//===================================================================tag3
var tag3icon=pSprite("img/tag3icon.png")
var btnGroup3A=[]
function setTag3(){
  tag3.addChild(tag3icon)
  tag3.interactive=true
  tag3.touchstart=startMove3
  for (var i = 0; i < 24; i++) {
    var t3btn=new PIXI.Graphics()
    t3btn.beginFill(0x005599,0)
    t3btn.drawRect(0,0,135,135)
    tag3.addChild(t3btn)
    btnGroup3A.push(t3btn)
    t3btn.x=30+i%4*145
    t3btn.y=30+parseInt(i/4)*200
    t3btn.interactive=true
    t3btn.tap=selectT3
  };

}
//=======================tag3点击
function selectT3(_e){
  for (var i = 0; i < btnGroup3A.length; i++) {
    if(this==btnGroup3A[i]){
      console.log("i="+i)

      if(i<18){wall.texture=wallTextrueA[i]}
      if(i>=18){floor.texture=wallTextrueA[i]}
    }
  };
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
  tag3.touchmove=null
  stage3.interactive=true
  stage3.touchend=null

  var endY=tag3.y+1000*(mouseYA[mouseYA.length-1]-mouseYA[mouseYA.length-2])/(timeA[timeA.length-1]-timeA[timeA.length-2])
  if(endY>=70){    endY=70  }
  if(endY<=70-1200+200) {endY=70-1200+200};

  TweenMax.to(tag3,1,{y:endY})
}

//===================================================================tag4
//===================================================================tag4
var tag4icon=pSprite("img/tag4icon.png")
var btnGroup4A=[]
function setTag4(){
  tag4.addChild(tag4icon)
  tag4.interactive=true
  tag4.touchstart=startMove4
  for (var i = 0; i < 12; i++) {
    var t4btn=new PIXI.Graphics()
    t4btn.beginFill(0x005599,0)
    t4btn.drawRect(0,0,135,135)
    tag4.addChild(t4btn)
    btnGroup4A.push(t4btn)
    t4btn.x=30+i%4*145
    t4btn.y=30+parseInt(i/4)*200
    t4btn.interactive=true
    t4btn.tap=selectT4
  };

}
//=======================tag4点击
function selectT4(_e){
  for (var i = 0; i < btnGroup4A.length; i++) {
    if(this==btnGroup4A[i]){
      console.log("i="+i)

    }
  };
}


//=======================tag4滚轴

function startMove4(_e){
  TweenLite.killTweensOf(tag4)
  newPosition=tag4.y
  startY=_e.data.global.y
  console.log(_e.data.global.y)
  tag4.touchmove=Move4
  stage3.interactive=true
  stage3.touchend=endMove4
  mouseYA=[0,0]
  timeA=[0,0]
}
function Move4(_e){
  tag4.y=newPosition+(_e.data.global.y-startY)*4
  if(tag4.y>=70){    tag4.y=70  }
  if(tag4.y<=70-600+200) {tag4.y=70-600+200};
  mouseYA.push(_e.data.global.y)
  date=new Date()
  timeA.push(date.getTime())
}
function endMove4(_e){
  tag4.touchmove=null
  stage3.interactive=true
  stage3.touchend=null

  var endY=tag4.y+1000*(mouseYA[mouseYA.length-1]-mouseYA[mouseYA.length-2])/(timeA[timeA.length-1]-timeA[timeA.length-2])
  if(endY>=70){    endY=70  }
  if(endY<=70-600+200) {endY=70-600+200};

  TweenMax.to(tag4,1,{y:endY})
}

//===================================================================tag5
//===================================================================tag5
var tag5icon=pSprite("img/tag5icon.png")
var btnGroup5A=[]
function setTag5(){
  tag5.addChild(tag5icon)
  tag5.interactive=true
  tag5.touchstart=startMove5
  for (var i = 0; i < 24; i++) {
    var t5btn=new PIXI.Graphics()
    t5btn.beginFill(0x005599,0)
    t5btn.drawRect(0,0,135,135)
    tag5.addChild(t5btn)
    btnGroup5A.push(t5btn)
    t5btn.x=30+i%4*145
    t5btn.y=30+parseInt(i/4)*200
    t5btn.interactive=true
    t5btn.tap=selectT5
  };

}
//=======================tag5点击
function selectT5(_e){
  for (var i = 0; i < btnGroup5A.length; i++) {
    if(this==btnGroup5A[i]){
      console.log("i="+i)

    }
  };
}


//=======================tag5滚轴

function startMove5(_e){
  TweenLite.killTweensOf(tag5)
  newPosition=tag5.y
  startY=_e.data.global.y
  console.log(_e.data.global.y)
  tag5.touchmove=Move5
  stage3.interactive=true
  stage3.touchend=endMove5
  mouseYA=[0,0]
  timeA=[0,0]
}
function Move5(_e){
  tag5.y=newPosition+(_e.data.global.y-startY)*4
  if(tag5.y>=70){    tag5.y=70  }
  if(tag5.y<=70-1200+200) {tag5.y=70-1200+200};
  mouseYA.push(_e.data.global.y)
  date=new Date()
  timeA.push(date.getTime())
}
function endMove5(_e){
  tag5.touchmove=null
  stage3.interactive=true
  stage3.touchend=null

  var endY=tag5.y+1000*(mouseYA[mouseYA.length-1]-mouseYA[mouseYA.length-2])/(timeA[timeA.length-1]-timeA[timeA.length-2])
  if(endY>=70){    endY=70  }
  if(endY<=70-1200+200) {endY=70-1200+200};

  TweenMax.to(tag5,1,{y:endY})
}

//===================================================================tag6
//===================================================================tag6
var tag6icon0=pSprite("img/tag6icon0.png")
var tag6icon1=pSprite("img/tag6icon1.png")
var btnGroup6A=[]
function setTag6(){
  tag6.addChild(tag6icon0)
  tag6.addChild(tag6icon1)
  sex0.push(tag6icon0)
  sex1.push(tag6icon1)
  for (var i = 0; i < 20; i++) {
    var t6btn=new PIXI.Graphics()
    t6btn.beginFill(0x005599,0)
    t6btn.drawRect(0,0,135,135)
    tag6.addChild(t6btn)
    btnGroup6A.push(t6btn)
    t6btn.x=30+i%4*145
    t6btn.y=30+parseInt(i/4)*200
    t6btn.interactive=true
    t6btn.tap=selectT6
  };
  tag6.interactive=true
  tag6.touchstart=startMove6
}
//=======================tag6点击
function selectT6(_e){
  for (var i = 0; i < btnGroup6A.length; i++) {
    if(this==btnGroup6A[i]){
      console.log("i="+i)


    }
  };
}
//=======================tag6滚轴


function startMove6(_e){
  TweenLite.killTweensOf(tag6)
  newPosition=tag6.y
  startY=_e.data.global.y
  console.log(_e.data.global.y)
  tag6.touchmove=Move6
  stage3.interactive=true
  stage3.touchend=endMove6
  mouseYA=[0,0]
  timeA=[0,0]
}
function Move6(_e){
  tag6.y=newPosition+(_e.data.global.y-startY)*4
  if(tag6.y>=70){    tag6.y=70  }
  if(tag6.y<=70-1000+200) {tag6.y=70-1000+200};
  mouseYA.push(_e.data.global.y)
  date=new Date()
  timeA.push(date.getTime())
}
function endMove6(_e){
  tag6.touchmove=null
  stage3.interactive=true
  stage3.touchend=null

  var endY=tag6.y+1000*(mouseYA[mouseYA.length-1]-mouseYA[mouseYA.length-2])/(timeA[timeA.length-1]-timeA[timeA.length-2])
  if(endY>=70){    endY=70  }
  if(endY<=70-1000+200) {endY=70-1000+200};

  TweenMax.to(tag6,1,{y:endY})
}
//===================================================================tagEND
//===================================================================tagEND

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

//===========================================设置房间
var room=new PIXI.Container()
var roomMask=new PIXI.Graphics()
var roomBg=new PIXI.Container()
var wall//=
var floor
var wallTextrueA=[]
function setRoom(){
  stage3.addChildAt(room,0)
  stage3.addChild(roomMask)
  roomMask.beginFill(0x887665,1)
  roomMask.drawRect(0,110,640,stageH-110-265)
  room.mask=roomMask
  room.addChild(roomBg)

  for (var i = 1; i <= 24; i++) {
    var texture=new PIXI.Texture.fromImage("img/wall"+i+".jpg")
    wallTextrueA.push(texture)
  };
  wall=new PIXI.extras.TilingSprite(wallTextrueA[parseInt(Math.random()*18)],640,(stageH-110-265)/3*2)
  //wall=new PIXI.extras.TilingSprite(wallTextrueA[16],640,(stageH-110-265)/3*2)
  floor=new PIXI.extras.TilingSprite(wallTextrueA[23],640,(stageH-110-265)/3*1+1)
  //floor=new PIXI.extras.TilingSprite(wallTextrueA[parseInt(Math.random()*6+18)],640,(stageH-110-265)/3*1+1)
  wall.y=110
  floor.y=110+(stageH-110-265)/3*2-1
  roomBg.addChild(wall)
  roomBg.addChild(floor)

}