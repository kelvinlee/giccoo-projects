//============================公用
var nowPage=1
//==========下一个 按钮
var ifNew=1
$("#home_btn").click(function(){
  $("#home_btn").css({display:"none"})
  TweenLite.set(hint1,{alpha:0})
  TweenLite.set(hint2,{alpha:0})
  nowPage++
  TweenLite.to(homeBtn,.5,{alpha:0})
  switch(nowPage){
    case 2:
      $("#bgm")[0].play()
      ani1end();
      break;
    case 3:
      ani2end();
      break;
    case 4:
      ani3end1();
      ifNew=0
      nowPage-=.5
      break;
    case 4.5:
      $("#ring")[0].play()
      ani3end2();
      ifNew=1
      nowPage-=.5
      break;
    case 5:
      $("#ring")[0].pause()
      setLayer()
      showLayer(1)
      showHomeBtn()
      ifNew=0
      nowPage-=.5
      break;
    case 5.5:

      ani4end()
      hideLayer()
      ifNew=1
      nowPage-=.5
      break;
    case 6:
      ani5end()
      break;
    case 7:
      ani6end()
      nowPage-=.5
      break;
    case 7.5:
      $("#wind")[0].pause()
      $("#wind2")[0].pause()
      showLayer(2)
      showHomeBtn()
      ifNew=0
      nowPage-=.5
      break;
    case 8:
      ani7end()
      hideLayer()
      ifNew=1
      $("#bubble")[0].play()
      // setTimeout(function(){
      //   $("#bubble2")[0].play()
      // },900)
      break;
    case 9:
      ani8end()
      $("#bubble")[0].pause()
      //$("#bubble2")[0].pause()
      break;
    case 10:
      ani9end()
      $("#rocket")[0].play()
      nowPage-=.5
      break;
    case 10.5:
      $("#rocket")[0].pause()
      showLayer(3)
      showHomeBtn()
      ifNew=0
      nowPage-=.5
      createjs.Ticker.removeEventListener("tick",stage_shake)
      stage_star.x=stage_star.y=downText.y=downText.x=stage.x=stage.y=0
      break;
    case 11:
      ifNew=1
      hideLayer()
      ani10end()
      break;
    case 12:
      ani11end()
      break;
    case 13:
      ani12end()
      $("#rain")[0].play()
      document.getElementById("rain").volume = 0.01;
      setTimeout(function(){
        $("#rain2")[0].play()
         document.getElementById("rain2").volume = 0.01;
      },900)
      nowPage-=.5
      break;
    case 13.5:
      showLayer(4)
      showHomeBtn()
      ifNew=0
      nowPage-=.5
      break;
    case 14:
      ifNew=1
      hideLayer()
      ani13end()
      break;
    case 15:
      $("#rain")[0].pause()
      $("#rain2")[0].pause()
      ani14end()
      break;
    case 16:
      ani15end()
      break;
    case 17:
      hideMV()
      break;
  }
  if(ifNew==1&&nowPage<=16){
      nextText()
  }
})
//==========提示
var hint1=new createjs.Bitmap("img/hint1.png")
var hint2=new createjs.Bitmap("img/hint2.png")
function setHint(){
  stage.addChild(hint1)
  stage.addChild(hint2)
  //hint1.regY=hint2.regY=59
  hint1.y=hint2.y=0
  hint1.alpha=hint2.alpha=0
}

function showHint1(_delay){
  TweenLite.to(hint1,1,{alpha:1,delay:_delay})
}
function showHint2(_delay){
  TweenLite.to(hint2,1,{alpha:1,delay:_delay})
}

//==========下按钮动画
var homebtn1=new createjs.Bitmap("img/homebtn1.png")
var homebtn2=new createjs.Bitmap("img/homebtn2.png")
function initHomeBtn(){
  homeBtn.addChild(homebtn1)
  homeBtn.addChild(homebtn2)
  homebtn1.regX=homebtn1.regY=28
  homebtn2.regX=homebtn2.regY=30
  homebtn1.x=homebtn2.x=320
  homebtn1.y=homebtn2.y=887
  homebtn2.scaleX=homebtn2.scaleY=1.2
  homeBtnGlow()
}
function homeBtnGlow(){
  TweenLite.set(homebtn2,{scale:1.1,alpha:0})
  TweenLite.to(homebtn2,1,{scale:1.45,alpha:1,overwrite:0,ease:Linear.easeNone})
  TweenLite.to(homebtn2,1,{scale:2,alpha:0,delay:1,onComplete:homeBtnGlow})
}
//==========改变文案
var textA=[]
var nowTextNum=0
function initText(){
  for (var i = 1; i < 16; i++) {
    var a_text=new createjs.Bitmap("img/p"+i+"t.png")
    textA.push(a_text)
    a_text.regX=320
    a_text.regY=50
    a_text.x=320
    a_text.y=762
    downText.addChild(a_text)
    a_text.visible=false
    a_text.alpha=0
    a_text.scaleX=a_text.scaleY=.5
  };
  nextText()
}

function nextText(){
  console.log(nowTextNum)
  var i=nowTextNum
  if(i<15){
    textA[i].visible=true
    TweenLite.to(textA[i],1,{alpha:1,scaleX:1,scaleY:1})
  }else{

  }
  if(i>0){
    TweenLite.to(textA[i-1],1,{alpha:0,scaleX:1,scaleY:2})
  }
  if(i>1){
    textA[i-2].visible=false
    downText.removeChild(textA[i-2])
  }
  nowTextNum++
}
//===================音乐浮层
var musicLayer=new createjs.Container()
var mlA=["img/layer1.png","img/layer2.png","img/layer3.png","img/layer4.png"]
var layerTA=[]

var barGroup=new createjs.Container()
var barA=[]

function setLayer(){
  stage.addChild(musicLayer)
  var layerBG=new createjs.Bitmap("img/layerbg.png")
  musicLayer.addChild(layerBG)
  for (var i = 0; i < 4; i++) {
    var layerT=new createjs.Bitmap(mlA[i])
    layerTA.push(layerT)
    musicLayer.addChild(layerT)
  };

  musicLayer.addChild(barGroup)
  barGroup.x=485
  barGroup.y=632

  for (var j= 0; j<18; j++) {
    var bar = new createjs.Shape();
    bar.graphics.beginFill("#ffffff").drawRect(0, 0, 5, 40);
    bar.regY=40
    bar.y=40
    bar.x=j*10
    barA.push(bar)
    barGroup.addChild(bar)
  };

  moveBar()
}
function moveBar(){
  for (var i= 0; i<18; i++) {
    TweenLite.to(barA[i],.25+Math.random(),{scaleY:Math.random()})
  };
  TweenLite.set(barA[0],{onComplete:moveBar,delay:.25})
}
var musicA=[$("#music1"),$("#music2"),$("#music3"),$("#music4")]
var nowMusic
function showLayer(_i){
  stage.addChild(musicLayer)
  nowMusic=_i-1
  musicLayer.x=640
  TweenLite.to(musicLayer,1,{x:0})
  for (var i = 0; i < 4; i++) {
    layerTA[i].visible=false
  };
  layerTA[_i-1].visible=true
  musicA[_i-1][0].play()
  musicA[_i-1][0].volume = 0.01;
  TweenLite.to(musicA[_i-1][0],3,{volume:1,ease:Linear.easeNone})

  downText.visible=false
  TweenLite.to($("#bgm")[0],3,{volume:0.01,ease:Linear.easeNone})
  //$("#bgm")[0].pause()
}
function hideLayer(){
  //$("#bgm")[0].play()
  //document.getElementById("bgm").volume = 0.01;
  TweenLite.to($("#bgm")[0],5,{volume:.5,ease:Linear.easeNone})
  TweenLite.to(musicLayer,1,{x:640})
  //musicA[nowMusic][0].pause()
  TweenLite.to(musicA[nowMusic][0],2,{volume:.01,ease:Linear.easeNone,onComplete:musicPause,onCompleteParams:[musicA[nowMusic][0]]})

  downText.visible=true
}

function musicPause(_tar){
  _tar.pause()
}

//=======================人 所有

var boy
var boyA=[]

var boySheet

function setBoy(){
  var str
  for (var i = 1; i <=70 ; i++) {//站起来 0-69--70
    if(i<10){str="img/standup/man000"+i+".png"}else{str="img/standup/man00"+i+".png"}
    boyA.push(str)
  };
  for (var j = 1; j <=41 ; j++) {//跳 70-110--41
    if(j<10){str="img/jump_s/man000"+j+".png"}else{str="img/jump_s/man00"+j+".png"}
    boyA.push(str)
  };
  for (var k = 1; k <=69 ; k++) {//走 111-179--69
    if(k<10){str="img/walk/man000"+k+".png"}else{str="img/walk/man00"+k+".png"}
    boyA.push(str)
  };
  for (var l = 1; l <=15 ; l++) {//走 180-194--15
    if(l<10){str="img/startrun/man000"+l+".png"}else{str="img/startrun/man00"+l+".png"}
    boyA.push(str)
  };
  for (var m = 2; m <=20 ; m++) {//走 195-213--19
    if(m<10){str="img/run/man000"+m+".png"}else{str="img/run/man00"+m+".png"}
    boyA.push(str)
  };
  for (var n = 1; n <=30 ; n++) {//飘 214-243--30
    if(n<10){str="img/fall/man000"+n+".png"}else{str="img/fall/man00"+n+".png"}
    boyA.push(str)
  };
    //想 244-244--1
    str="img/man_think.png"
    boyA.push(str)

  for (var o = 70; o >=1 ; o--) {//坐下 245-314--70
    if(o<10){str="img/standup/man000"+o+".png"}else{str="img/standup/man00"+o+".png"}
    boyA.push(str)
  };
    //趴 315-315--1
    str="img/man_lay.png"
    boyA.push(str)
  for (var p = 10; p <=30 ; p++) {//坐下 316-336--21
    if(p<10){str="img/rain/man000"+p+".png"}else{str="img/rain/man00"+p+".png"}
    boyA.push(str)
  };
    //看 337-337--1
    str="img/man_look1.png"
    boyA.push(str)
    //看 338-338--1
    str="img/man_look2.png"
    boyA.push(str)

  boySheet= new createjs.SpriteSheet({
    "images":boyA,
    "frames":{"height":150,"width":100},
    "animations":{
      stand   :[69],
      sit     :[0],
      standup :[0,69,"stand",1],
      jump    :[70,110,"stand",.6],
      walk    :[111,179,,1],
      startrun:[180,194,"run",.5],
      run     :[195,213,,.5],
      run2     :[195,213,,.55],
      fall    :[214,243,,.6],
      think   :[244],
      goThink :[245,314,"think",1],
      jump2   :[70,110,"stand",.4],
      lay     :[315],
      goSit :[245,314,"sit",.8],
      goSitRain:[245,314,"sitRain",.8],
      sitRain:[316,336,,.2],
      look1     :[337],
      look2     :[338]
    }
  });

  boy = new createjs.Sprite(boySheet)
  stage.addChild(boy)
  boy.x=344
  boy.y=265

}
//=======================bubble 思考框

var bubble
var bubbleA=[]
function setBubble(){
  var str
  for (var i = 1; i <=3 ; i++) {
    str="img/bubble"+i+".png"
    bubbleA.push(str)
  };


  var bubbleSheet= new createjs.SpriteSheet({
    "images":bubbleA,
    "frames":{"height":129,"width":143},
    "animations":{
      think   :[0,2,,.2]
    }
  });

  bubble = new createjs.Sprite(bubbleSheet)
  stage_9.addChild(bubble)

  bubble.regX=89
  bubble.regY=124
  bubble.x=335+12
  bubble.y=395
  //flowerBlow.scaleX=flowerBlow.scaleY=2


}

var dotA=[] 
function setBubbleDot(){
  
  for (var i = 1; i <=3 ; i++) {
    var dot=new createjs.Bitmap("img/bubble_dot"+i+".png")
    dotA.push(dot)
    dot.alpha=0
    dot.regX=89
    dot.regY=124
    dot.x=335+12
    dot.y=395
    stage_9.addChild(dotA[i-1])
    TweenLite.to(dot,.5,{alpha:1,onComplete:dotLoop1,onCompleteParams:[dot],delay:.2*i+1.5+.5})
  };

}

var ifDotLoop=1
function dotLoop1(_target){
  if(ifDotLoop==1){TweenLite.to(_target,1,{alpha:0,onComplete:dotLoop2,onCompleteParams:[_target]})}
}
function dotLoop2(_target){
  if(ifDotLoop==1){TweenLite.to(_target,.5,{alpha:1,onComplete:dotLoop1,onCompleteParams:[_target]})}
}
//=======================花纹

var flowerBlow
var flowerBlowA=[]
function setFlowerBlow(){
  var str
  for (var i = 1; i <=54 ; i++) {
    if(i<10){str="img/flower/f000"+i+".png"}else{str="img/flower/f00"+i+".png"}
    flowerBlowA.push(str)
  };


  var flowerSheet= new createjs.SpriteSheet({
    "images":flowerBlowA,
    "frames":{"height":402,"width":493},
    "animations":{
      blow   :[0,53,"end",.4],
      end    :[53]
    }
  });

  flowerBlow = new createjs.Sprite(flowerSheet)
  //stage_4.addChild(flowerBlow)
  flowerBlow.x=320-173*2-20
  flowerBlow.y=500-179*2+10
  //flowerBlow.scaleX=flowerBlow.scaleY=2


}


//=====花瓣飘
var ffA=["img/ff2.png","img/ff2.png","img/ff3.png"]//====

function flyflower(){
  
  createjs.Ticker.addEventListener("tick",flyingflower);



}
function flyingflower(){
  if(Math.random()>.93){
    var fc=new createjs.Container()
    stage.addChild(fc)
    fc.x=640
    fc.y=Math.random()*1000
    
    var ff=new createjs.Bitmap(ffA[parseInt(Math.random()*3)])
    fc.addChild(ff)
    ff.scaleX=ff.scaleY=Math.random()*Math.random()*Math.random()*Math.random()*8+.3
    ff.x=Math.random()*640*ff.scaleX

    TweenLite.to(fc,2+Math.random()*3,{x:-640*ff.scaleX,rotation:Math.random()*720-360,y:Math.random()*800+200,onComplete:removeTar,onCompleteParams:[stage,fc]})
    
    // var if3=1
    // if(Math.random()>.7){if3=-1}

    TweenLite.to(ff,2+Math.random()*3,{rotation:Math.random()*720-360})

  }
}

function removeTar(_stage,_tar){
  _stage.removeChild(_tar)
}

//==========显示home键
function showHomeBtn(_t){
  TweenLite.to(homeBtn,1,{alpha:1,delay:_t})
  TweenLite.set($("#home_btn"),{display:"block",delay:_t})
}



//======================时间控制
// var fps = 30;
// var now;
// var then = Date.now();
// var interval = 1000/fps;
// var delta;
// window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
// function tick() {
// 　　if(window.requestAnimationFrame)
//    {
// 　　    requestAnimationFrame(tick);
// 　　    now = Date.now();
// 　　    delta = now - then;
// 　　    if (delta > interval) {
//         // 这里不能简单then=now，否则还会出现上边简单做法的细微时间差问题。例如fps=10，每帧100ms，而现在每16ms（60fps）执行一次draw。16*7=112>100，需要7次才实际绘制一次。这个情况下，实际10帧需要112*10=1120ms>1000ms才绘制完成。
// 　　　　    then = now - (delta % interval);
// 　　　　    handleTick(); // ... Code for Drawing the Frame ...
// 　　    }
//    }
//    else
//    {
//        setTimeout(tick, interval);
// 　　　　handleTick();
//    }
// }

//====================问号飘？？？？？
var qMarkA=[]
function setQmark(){
  if (Math.random()>.5) {//Math.random()>.5//i=0;i<1;i++
    var qMark=new createjs.Bitmap("img/qmark.png")
    stage_2.addChild(qMark)
    qMarkA.push(qMark)
    qMark.regX=13
    qMark.regY=22
    qMark.scaleX=qMark.scaleY=Math.random()+.75
    qMark.x=word2.x+Math.random()*250-125
    qMark.y=word2.y+Math.random()*100-50-10
    qMark.alpha=0
    TweenLite.to(qMark,2+Math.random(),{x:(qMark.x+word2.x)/2,scale:0,y:qMark.y-(200+Math.random()*150),rotation:Math.random()*180-90,alpha:1,visible:"false",overwrite:0})
    TweenLite.to(qMark,1+Math.random(),{alpha:0,delay:.5,onComplete:removeTar,onCompleteParams:[stage_2,qMark]})
  };
}
//=====================激情+叛逆 字挪动
var ziA=["img/word5a.png","img/word5b.png"]
var nowZi=0
var AllZi=[]
function addZi(){

  var zi=new createjs.Bitmap(ziA[nowZi])
  nowZi++
  if(nowZi==2){nowZi=0}

  stage_56.addChild(zi)
  zi.x=boy.x+50
  zi.y=boy.y+140
  TweenLite.to(zi,1.1,{x:-100,ease:Linear.easeNone,visible:false})

  AllZi.push(zi)
}
//====================火焰效果
var fireA=[]
function setFire(){
  for (i=0;i<2;i++) {//Math.random()>.5//
    var fire=new createjs.Bitmap("img/fire4.png")
    if(Math.random()>.5){
      fire=new createjs.Bitmap("img/fire6.png")
    }
    stage_56.addChild(fire)
    fireA.push(fire)
    fire.regX=17
    fire.regY=22.5
    fire.scaleX=fire.scaleY=Math.random()*4
    fire.x=Math.random()*320+50
    fire.y=boy.y+Math.random()*20-10+150
    fire.alpha=0
    TweenLite.to(fire,2+Math.random(),{x:(fire.x+word2.x)/2,scale:0,y:fire.y-(50+Math.random()*200),rotation:Math.random()*180-90,alpha:1,visible:"false",overwrite:0,onComplete:removeTar,onCompleteParams:[stage_56,fire]})
    //TweenLite.to(fire,2+Math.random(),{alpha:0,delay:.5})
  };
}
//================字碎 第一次
var stage_6=new createjs.Container()
var word6A=[]
function word6break(){
  stage.addChild(stage_6)
  for (var i = 0; i < 4; i++) {
    var word6part=new createjs.Bitmap("img/word6_"+i+".png")
    stage_6.addChild(word6part)
    word6A.push(word6part)
    word6part.regX=101
    word6part.regY=49
    word6part.x=320
    word6part.y=450
    //TweenLite.to(word6part,1,{x:320-200+100*i,y:word6part.y-300,alpha:0,rotation:Math.random()*90-45,delay:1})
  };
  TweenLite.to(word6A[0],1,{x:320-200+100*0,y:word6part.y-500,alpha:1,rotation:45,delay:0,ease:Sine.easeIn})
  TweenLite.to(word6A[1],1,{x:320-200+100*1,y:word6part.y-500,alpha:1,rotation:45,delay:.05,ease:Sine.easeIn})
  TweenLite.to(word6A[2],1,{x:320-200+100*2,y:word6part.y-500,alpha:1,rotation:-45,delay:.05,ease:Sine.easeIn})
  TweenLite.to(word6A[3],1,{x:320-200+100*3,y:word6part.y-500,alpha:1,rotation:-45,delay:0,ease:Sine.easeIn})
  skyMove.y=-16
  TweenLite.to(stage_56,1,{y:-500,alpha:1,delay:0,ease:Sine.easeIn,visible:false})
}
//===============气球出现
var balloon=new createjs.Container()
var balloon1=new createjs.Bitmap("img/balloon.png")
var balloon2=new createjs.Bitmap("img/balloon_line.png")

var ifLoop=1

function setBalloon(){
  stage_7.addChild(balloon)

  balloon.addChild(balloon1)
  balloon.addChild(balloon2)
  balloon1.regX=107
  balloon1.regY=248
  balloon1.x=0
  balloon1.y=-423+248

  balloon2.regX=107
  balloon2.regY=248
  balloon2.x=0
  balloon2.y=-423+248

  //balloon.regY=-423
  balloon.x=320
  balloon.y=500  

  balloon.rotation=45
  balloon.scaleY=balloon.scaleX=0
  balloon.alpha=0
  TweenLite.to(balloon,1,{rotation:30,alpha:1,scale:1,onComplete:balloon_loop1})
  TweenLite.to(balloon1,.5,{rotation:-15,onComplete:balloonBall_loop1})
  TweenLite.to(stage_7,1,{y:60,onComplete:stageLoop1})
  TweenLite.to(boy,1,{y:boy.y+60})

  TweenLite.to(skyMove,4,{y:0,x:-6})


}
function balloon_loop1(){
  if(ifLoop==1){
    TweenLite.to(balloon,2,{rotation:20,scale:1,onComplete:balloon_loop2,ease:Sine.easeInOut})
  }
}
function balloon_loop2(){
  if(ifLoop==1){
    TweenLite.to(balloon,2,{rotation:30,scale:1,onComplete:balloon_loop1,ease:Sine.easeInOut})
  }
}
function balloonBall_loop1(){
  if(ifLoop==1){
    TweenLite.to(balloon1,2,{rotation:10,onComplete:balloonBall_loop2})
  }
}
function balloonBall_loop2(){
  if(ifLoop==1){
    TweenLite.to(balloon1,2,{rotation:-10,onComplete:balloonBall_loop1})
  }
}
function stageLoop1(){
  if(ifLoop==1){
    TweenLite.to(stage_7,2,{y:-60,onComplete:stageLoop2,ease:Sine.easeInOut})
    TweenLite.to(boy,2,{y:boy.y-120,ease:Sine.easeInOut})
  }
}
function stageLoop2(){
  if(ifLoop==1){
    TweenLite.to(stage_7,2,{y:60,onComplete:stageLoop1,ease:Sine.easeInOut})
    TweenLite.to(boy,2,{y:boy.y+120,ease:Sine.easeInOut})
  }
}


//=======================云彩飘
var cloudA=[]
var stage_Cloud=new createjs.Container()
var cloudMove={x:-2,y:0}
var cloudYA=[390,470,600,.21,.328,1,740-550,740-115,740-600]
function setCloud(){
  stage.addChild(stage_Cloud)
  for (var i = 0; i < 3; i++) {
    var a_cloud=new createjs.Bitmap("img/cloud.png")
    cloudA.push(a_cloud)
    stage_Cloud.addChild(a_cloud)
    
    //a_cloud.y=150+500*Math.random()
    //a_cloud.x=640*Math.random()
    a_cloud.regX=98
    a_cloud.regY=62

    a_cloud.y=cloudYA[i]
    a_cloud.x=740+cloudYA[i+6]+300//*Math.random()

    //a_cloud.scaleY=a_cloud.scaleX=Math.random()*Math.random()*.75+.25
    a_cloud.scaleY=a_cloud.scaleX=cloudYA[i+3]
    a_cloud.alpha=0.9//a_cloud.scaleY
  };
  createjs.Ticker.addEventListener("tick",moveCloud)
  //TweenLite.from(stage_Cloud,4,{x:0,y:0,alpha:0,delay:4})
}

function moveCloud(event){
  for (var i = 0; i < cloudA.length; i++) {

    cloudA[i].x+=cloudMove.x//*cloudA[i].scaleX//*cloudA[i].scaleX//*cloudA[i].scaleX
    cloudA[i].y+=cloudMove.y//*cloudA[i].scaleX//*cloudA[i].scaleX//*cloudA[i].scaleX

    //if(cloudA[i].x>740){cloudA[i].x=-100;cloudA[i].y+=Math.random()*0-0;cloudA[i].alpha=.9}
    if(cloudA[i].x<-100){cloudA[i].x=740;cloudA[i].y+=Math.random()*0-0;cloudA[i].alpha=.9}
    //if(cloudA[i].y>1000){cloudA[i].y=0-cloudA[i].scaleX*124;cloudA[i].x=640*Math.random();cloudA[i].scaleY=cloudA[i].scaleX=Math.random()*Math.random()*.75+.25}
    //if(cloudA[i].y<0-cloudA[i].scaleX*124){cloudA[i].y=1000;cloudA[i].x=640*Math.random();cloudA[i].scaleY=cloudA[i].scaleX=Math.random()*Math.random()*.75+.25}

    // if(cloudA[i].x>640){cloudA[i].x=0-cloudA[i].scaleX*196;cloudA[i].y=150+500*Math.random();cloudA[i].scaleY=cloudA[i].scaleX=cloudA[i].y/1000*cloudA[i].y/1000+.15;cloudA[i].alpha=cloudA[i].scaleX+.5}
    // if(cloudA[i].x<0-cloudA[i].scaleX*196){cloudA[i].x=640;cloudA[i].y=150+500*Math.random();cloudA[i].scaleY=cloudA[i].scaleX=cloudA[i].y/1000*cloudA[i].y/1000+.15;cloudA[i].alpha=cloudA[i].scaleX+.5}
    // if(cloudA[i].y>1000){cloudA[i].y=0-cloudA[i].scaleX*124;cloudA[i].x=640*Math.random();cloudA[i].scaleY=cloudA[i].scaleX=Math.random()*.75+.25}
    // if(cloudA[i].y<0-cloudA[i].scaleX*124){cloudA[i].y=1000;cloudA[i].x=640*Math.random();cloudA[i].scaleY=cloudA[i].scaleX=Math.random()*.75+.25}
  };
}
//====================迷惑
var confuseA=[]
var confuse_R=400
function confuse(){
  for (i=0;i<1;i++) {//Math.random()>.5//i=0;i<1;i++

    var word8=new createjs.Bitmap("img/word8.png")
    var ctr=new createjs.Container()
    stage_8.addChild(ctr)
    ctr.addChild(word8)
    confuseA.push(word8)
    word8.regX=42.5
    word8.regY=21.5
    word8.scaleX=word8.scaleY=Math.random()+.7
    // var r=Math.random()*confuse_R
    var deg=Math.random()*360

    // word8.x=Math.cos(deg)*r//+320
    // word8.y=Math.sin(deg)*r//+450


    word8.x=Math.random()*confuse_R
    word8.rotation=-deg
    ctr.rotation=deg


    ctr.x=320
    ctr.y=450    


    //word8.x=320+Math.random()*500-250
    //word8.y=500+Math.random()*1000-500
    word8.alpha=0
    //TweenLite.to(word8,2+Math.random(),{x:(word8.x-0)/1,scale:0,y:word8.y-(20+Math.random()*20),rotation:Math.random()*60-30,alpha:1,visible:"false",overwrite:0})
    
    var _t=1+Math.random()*1.5
    TweenLite.to(word8,_t,{x:0,scale:0,y:0,rotation:word8.rotation+180,alpha:1,visible:"false",overwrite:0,ease:Sine.easeOut,onComplete:removeTar,onCompleteParams:[ctr,word8]})
    TweenLite.to(ctr,_t,{alpha:.25,rotation:ctr.rotation-180,ease:Sine.easeOut,visible:"false",onComplete:removeTar,onCompleteParams:[stage_8,ctr]})
  };
}


//==============场景抖动
var shakeLv={xy:50,t:.1}
function stage_shake(){
  if(Math.random()>shakeLv.t){
    var _x=Math.random()*shakeLv.xy
    var _y=Math.random()*shakeLv.xy
    stage.x=_x
    stage.y=_y
    downText.x=-_x
    downText.y=-_y
    stage_star.x=-_x/2
    stage_star.y=-_y/2
    //musicLayer.x-=_x
    //musicLayer.y-=_y
    
  }
}
//=============成长 火箭

function setRocket(){
  if(Math.random()>.0){
    var flame=new createjs.Bitmap("img/word10.png")
    stage_10.addChild(flame)

    flame.regX=100
    flame.regY=55
    flame.x=word10.x+100
    flame.y=word10.y+55
    flame.alpha=.5
    TweenLite.to(flame,.8,{y:flame.y+300+200,x:flame.x+Math.random()*0-0,alpha:0,visible:false,rotation:Math.random()*0-0,ease:Sine.easeIn})
  }
}
//==========台阶
var nowStep=1
var stepA=[]
var ifStep=1
function setStep(){
  var step=new createjs.Bitmap("img/step"+nowStep+".png")
  nowStep++
  if(nowStep==4){nowStep=1}
  step.regX=168-28.5
  step.regY=165-28.5
  step.x=640
  step.y=100+100+50
  stepA.push(step)
  stage_11.addChild(step)
  TweenLite.to(step,1,{x:320,y:520+50,alpha:0.5,ease:Linear.easeNone,onComplete:stepFall,onCompleteParams:[step]})
 }
var stepR={x:200,y:400,deg:90}
function stepFall(_target){
  if(ifStep==1){
    TweenLite.to(_target,1,{x:0-Math.random()*stepR.x*0,y:840+50+400+Math.random()*stepR.y*0,rotation:Math.random()*stepR.deg-stepR.deg/2,alpha:0,ease:Linear.easeNone,visible:false})
  }
}
function stepDisappear(){
  for (var i = stepA.length - 1; i >= 0; i--) {
    if(stepA[i].visible=true){
      TweenLite.to(stepA[i],1,{x:stepA[i].x-Math.random()*500,y:stepA[i].y-500-Math.random()*500,onComplete:removeTar,onCompleteParams:[stage_11,stepA[i]]})
    }
  };
}
//============挫折 断裂
var word12A=[]
var word12=new createjs.Container()
function setWord12(){
  
  stage.addChild(word12)
  for (var i = 1; i <= 4; i++) {
    var word12part=new createjs.Bitmap("img/word12_"+i+".png")
    word12.addChild(word12part)
    word12A.push(word12part)
    word12part.regX=100
    word12part.regY=50
  };
}

function breakWord12(){
  TweenLite.to(word12A[0],1,{x:-200+100*0,y:word12A[0].y-500,alpha:1,rotation:45,delay:0,ease:Sine.easeIn})
  TweenLite.to(word12A[1],1,{x:-200+100*1,y:word12A[1].y-500,alpha:1,rotation:45,delay:.05,ease:Sine.easeIn})
  TweenLite.to(word12A[2],1,{x:-200+100*2,y:word12A[2].y-500,alpha:1,rotation:-45,delay:.05,ease:Sine.easeIn})
  TweenLite.to(word12A[3],1,{x:-200+100*3,y:word12A[3].y-500,alpha:1,rotation:-45,delay:0,ease:Sine.easeIn})
  TweenLite.to(skyMove,1,{x:0,y:-16})
}

//============下雨
var stage_rain=new createjs.Container()



var rainA=[]
var rainMove={x:-16,y:64,deg:15}//[0,0]
var lighting = new createjs.Shape();
 

function setRain(_starNum){
  for (var i = 0; i < _starNum; i++) {
    //var AstarContainer = new createjs.Container()
    var dorp = new createjs.Bitmap("img/rain1.png")
    stage.addChild(stage_rain)
    stage_rain.addChild(dorp)
    //stage.addChild(AstarContainer)
    rainA.push(dorp)
    dorp.x=Math.random()*640
    dorp.y=Math.random()*1000
    dorp.scaleX=dorp.scaleY=Math.random()*Math.random()*Math.random()*Math.random()*4+.5//*.8+.2
    dorp.scaleX=dorp.scaleY*.6
    dorp.rotation=rainMove.deg
    dorp.alpha=.9*dorp.scaleX
  };
  lighting.graphics.beginFill("#ffffff").drawRect(0, 0, 640, 1000);
  stage_rain.addChild(lighting)
  lighting.alpha=0
  stage_rain.alpha=0
  TweenLite.to(stage_rain,2,{alpha:1,delay:1})
}

function moveRain(){
  for (var i = 0; i < rainA.length; i++) {
    rainA[i].x+=rainMove.x*(rainA[i].scaleY-.3)//*rainA[i].scaleY*rainA[i].scaleY)
    rainA[i].y+=rainMove.y*(rainA[i].scaleY-.3)//*rainA[i].scaleY*rainA[i].scaleY)
    
    rainA[i].rotation=rainMove.deg
    //rainA[i].alpha=.2//Math.random()*60

    if(rainA[i].x<0){rainA[i].x+= 640;rainA[i].y=Math.random()*1000}
    if(rainA[i].x>640){rainA[i].x-=640;rainA[i].y=Math.random()*1000}
    if(rainA[i].y<0){rainA[i].y+=1000;rainA[i].x=Math.random()*640}
    if(rainA[i].y>1000){rainA[i].y-=1000;rainA[i].x=Math.random()*640}
  };
  if(Math.random()>.99){
    lighting.alpha=.4
    TweenLite.to(lighting,.2,{alpha:0})
  }else{
    //lighting.alpha=0
  }
}

//==========show14
var word14=new createjs.Bitmap("img/word14.png")
var word14b=new createjs.Bitmap("img/word14_blur.png")
var word15=new createjs.Bitmap("img/word15.png")
var word15b=new createjs.Bitmap("img/word15_blur.png")
function show14(){
  stage_14.addChild(word14)
  stage_14.addChild(word14b)
  stage_14.addChild(word15)
  stage_14.addChild(word15b)
  word15.alpha=word15b.alpha=0
  word15.regX=word15b.regX=word14b.regX=word14.regX=91
  word15.regY=word15b.regY=word14b.regY=word14.regY=44.5

  word14.x=word14b.x=740+640
  word14.y=word14b.y=440
  TweenLite.to(word14 ,1.5,{y:"+=50",x:320+140,ease:Linear.easeNone,onComplete:ani14,overwrite:0})
  TweenLite.to(word14b,1.5,{y:"+=50",x:320+140,ease:Linear.easeNone,overwrite:0})
  TweenLite.to(word13 ,.5,{y:"+=50",ease:Linear.easeNone,overwrite:0})
  TweenLite.to(boy ,.5,{y:"+=50",ease:Linear.easeNone,overwrite:0})

  TweenLite.to(word14 ,.5,{y:"+=50",x:-100,ease:Linear.easeNone,overwrite:0,delay:1.5})
  TweenLite.to(word14b,.5,{y:"+=50",x:-100,ease:Linear.easeNone,overwrite:0,delay:1.5}) 
  TweenLite.to(word13 ,.5,{y:"+=50",x:-100-140,ease:Linear.easeNone,overwrite:0,delay:1.5}) 
  TweenLite.to(boy,.5,{y:"+=50",ease:Linear.easeNone,overwrite:0,delay:1.5,onComplete:moveLoop})
  
}
function moveLoop(){
  word14.alpha=.3
  word15b.x=word14b.x
  word15b.y=word14b.y
  createjs.Ticker.addEventListener("tick",moveWord1415)

}
function moveWord1415(){
  word14.x-=8
  word15.x-=8
  if(word14.x<=-100){
    word14.x=740
  }
  if(word15.x<=-100){
    word15.x=740
  }
}
//======================
var boys=[]
var stage_boy=new createjs.Container()
function addBoy(){
  stage.addChild(stage_boy)
  for (var i = 0; i < 12; i++) {
    var a_boy = new createjs.Sprite(boySheet)
    boys.push(a_boy)
    //a_boy.gotoAndPlay("startrun")
    boyDelay(i+1)
    a_boy.y=boy.y+Math.random()*60
    a_boy.x=0-i*640/12/2-16*Math.random()-100
    //a_boy.scaleY=.85+Math.random()*.15
    //a_boy.scaleY=.9+Math.random()*.2
    stage_boy.addChild(a_boy)
    TweenLite.to(a_boy,5,{x:"+=300",alpha:1,delay:1})
  };
  boys.unshift(boy)
  
}
function boyDelay(_i){
  setTimeout(function(){
      boys[_i].gotoAndPlay("run")
      if(Math.random()>.5){
        boys[_i].gotoAndPlay("run2")
      }
    },Math.random()*1000)
}

//=============移动男孩们
var stopMark=220
function boysStop(){
  //createjs.Ticker.addEventListener("tick",moveBoys)
  //TweenLite.to(this,5,{stopMark:640,ease:Linear.easeNone,onComplete:allStop})
  for(var i=0;i<boys.length;i++){
    TweenLite.to(boys[i],.9,{x:(boys.length-i)*640/boys.length+Math.random()*10-105,y:"+=200",onComplete:showMV})
  }
  TweenLite.to(skyMove,1,{x:-1})
  TweenLite.to(word15b,.9,{y:"+=200"})
  TweenLite.to(word15,.9,{y:"+=200",alpha:0})
}
// var ifStandA=[0,0,0,0,0,0,0,0,0]
// var cameraV=2
// function moveBoys(){
//   console.log("111")
//   stopMark+=cameraV/2
//   if(stopMark>620){
//     createjs.Ticker.removeEventListener("tick",moveBoys)
//   }
//   for(var i=0;i<boys.length;i++){
//     if(boys[i].x>=stopMark){
//       boys[i].gotoAndPlay("walk")
//       ifStandA[i]=1
//     }
//     if(ifStandA[i]==1){
//       boys[i].x-=cameraV/2
//     }else{
//       boys[i].x+=cameraV
//     }
//   }
// }

function allStop(){
  //createjs.Ticker.removeEventListener("tick",moveBoys)
}