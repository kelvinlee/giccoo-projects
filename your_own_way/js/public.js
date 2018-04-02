//============================公用
var nowPage=1
//==========下一个 按钮
var ifNew=1
$("#home_btn").click(function(){
  $("#home_btn").css({display:"none"})
  nowPage++
  TweenLite.to(homeBtn,.5,{alpha:0})
  switch(nowPage){
    case 2:
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
      ani3end2();
      ifNew=1
      nowPage-=.5
      break;
    case 5:
      setLayer()
      showLayer(1)
      showHomeBtn()
      ifNew=0
      nowPage-=.5
      break;
    case 5.5:
      ani4end()
      ifNew=1
      nowPage-=.5
      break;
  }
  if(ifNew==1){
      nextText()
  }
})
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
  var i=nowTextNum
  textA[i].visible=true
  TweenLite.to(textA[i],1,{alpha:1,scaleX:1,scaleY:1})
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
  nowMusic=_i-1
  musicLayer.x=640
  TweenLite.to(musicLayer,1,{x:0})
  for (var i = 0; i < 4; i++) {
    layerTA[i].visible=false
  };
  layerTA[_i-1].visible=true
  musicA[_i-1][0].play()
  downText.visible=false
}
function hideLayer(){
  TweenLite.to(musicLayer,1,{x:640})
  musicA[nowMusic][0].pause()
  downText.visible=true
}

//=======================人 所有

var boy
var boyA=[]
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

  var boySheet= new createjs.SpriteSheet({
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
      startrunfast:[180,194,"runfast",.5],
      runfast     :[195,213,,1]
    }
  });

  boy = new createjs.Sprite(boySheet)
  stage.addChild(boy)
  boy.x=344
  boy.y=265

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
  stage_4.addChild(flowerBlow)
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

    TweenLite.to(fc,2+Math.random()*3,{x:-640*ff.scaleX,rotation:Math.random()*720-360,y:Math.random()*800+200})
    
    // var if3=1
    // if(Math.random()>.7){if3=-1}

    TweenLite.to(ff,2+Math.random()*3,{rotation:Math.random()*720-360})

  }
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
    var qMark=new createjs.Bitmap("img/qMark.png")
    stage_2.addChild(qMark)
    qMarkA.push(qMark)
    qMark.regX=13
    qMark.regY=22
    qMark.scaleX=qMark.scaleY=Math.random()+.75
    qMark.x=word2.x+Math.random()*250-125
    qMark.y=word2.y+Math.random()*100-50-10
    qMark.alpha=0
    TweenLite.to(qMark,2+Math.random(),{x:(qMark.x+word2.x)/2,scale:0,y:qMark.y-(200+Math.random()*150),rotation:Math.random()*180-90,alpha:1,visible:"false",overwrite:0})
    TweenLite.to(qMark,1+Math.random(),{alpha:0,delay:.5})
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
    TweenLite.to(fire,2+Math.random(),{x:(fire.x+word2.x)/2,scale:0,y:fire.y-(50+Math.random()*200),rotation:Math.random()*180-90,alpha:1,visible:"false",overwrite:0})
    //TweenLite.to(fire,2+Math.random(),{alpha:0,delay:.5})
  };
}