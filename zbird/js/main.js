
$(document).ready(function load (){
  //iniListenSound()
  setMode()
	loadWechatConfig();
  initAll()
  iniListenSound()
  	wx.ready(function() {
    var shareContent;
    shareContent = {
      title: "520·送个大的",
      desc: "今夜我不关心人类，我只想你。",
      link: "http://m.giccoo.com/zbird/",
      imgUrl: "http://m.giccoo.com/zbird/img/ico.jpg",
      success: function() {},
      cancel: function() {}
    };
    wx.onMenuShareTimeline(shareContent);
    wx.onMenuShareAppMessage(shareContent);
    wx.onMenuShareQQ(shareContent);
    return wx.onMenuShareWeibo(shareContent);
  });
  




});
var mode=1//1,长按，2截屏
function setMode(){
  if (window.navigator.userAgent.indexOf("Weibo") > -1||window.navigator.userAgent.indexOf("Android") > -1||window.navigator.userAgent.indexOf("Adr") > -1) {
    mode=2
  }
}



$('body')[0].addEventListener('touchmove', function (event) {event.preventDefault();}, false);//阻止了浏览器默认的下拉事件
var screenW
var screenH

screenW=document.body.offsetWidth 
screenH=document.body.offsetHeight

var stageW=640
var stageH//screenH/screenW*640

var loadWechatConfig = function() {
  var hm, s, url;
  url = encodeURIComponent(window.location.href.split("#")[0]);
  hm = document.createElement('script');
  hm.src = "http://api.giccoo.com/api/config?url=" + url;
  s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(hm, s);
};

var ifbgm=0
var bgm=$("#bgm")[0]
//微信端背景音乐播放...
function iniListenSound(){
         document.addEventListener("WeixinJSBridgeReady", function(){
             bgm.play();
             ifbgm=1
             TweenLite.set($("#musicOff"),{opacity:0})
             mode=1
        }, false);
}
$("#musicOff").click(function(){
  if(ifbgm==0){
    bgm.play();
    TweenLite.set($("#musicOff"),{opacity:0})
  }else{
    bgm.pause();
    TweenLite.set($("#musicOff"),{opacity:1})
  }
  ifbgm++
  if(ifbgm==2){ifbgm=0}

})

var stage = new createjs.Stage("mainCanvas");

function initAll(){

  stageW=640
  stageH=screenH/screenW*640

  document.getElementById("mainCanvas").width=640//screenW//640
  document.getElementById("mainCanvas").height=stageH

  createjs.Ticker.framerate = 60;
  //createjs.Ticker.timingMode = createjs.Ticker.RAF;
  createjs.Ticker.addEventListener("tick",handleTick);
  setStage()
  setPage1()
  setPage2()
  setPage3Step1()
  ani1()//ani.js
  setSlide()

}

function handleTick(){
  stage.update();
}

var stage1=new createjs.Container()
var stage2=new createjs.Container()
var stage3=new createjs.Container()
var bg=new createjs.Bitmap("img/bg.jpg")
var bar1=new createjs.Shape()
var bar2=new createjs.Shape()
var bar3=new createjs.Shape()
var bar4=new createjs.Shape()
var arrowDown=new createjs.Bitmap("img/v.png")



function setStage(){
  stage.addChild(bg)
  stage.addChild(stage1)
  stage.addChild(stage2)
  stage.addChild(stage3)
  stage2.y=stage3.y=stageH
  bg.scaleX=2
  bg.scaleY=stageH/500
  bar1.graphics.beginFill("#ffc8c8").drawRect(0,0,640,13);
  bar2.graphics.beginFill("#ffc8c8").drawRect(0,0,13,stageH);
  bar3.graphics.beginFill("#ffc8c8").drawRect(627,0,640,stageH);
  bar4.graphics.beginFill("#ffc8c8").drawRect(0,stageH-13,640,stageH);
  stage.addChild(bar1)
  stage.addChild(bar2)
  stage.addChild(bar3)
  stage.addChild(bar4)
  stage.addChild(arrowDown)
  TweenLite.set(arrowDown,{x:320,y:stageH-42/1000*stageH,regX:320,regY:6})

}





var p1title_e=new createjs.Bitmap("img/p1title_e.png")
var p1title_line=new createjs.Bitmap("img/p1title_line.png")
var p1titleA=[]
var p1title=new createjs.Container()

var p1Lhand=new createjs.Bitmap("img/p1one_hand.png")
var p1Rhand=p1Lhand.clone()
var p1box=new createjs.Bitmap("img/p1box.png")

var p1logo=new createjs.Bitmap("img/p1logo.png")

var flash=new createjs.Container()
var flash1=new createjs.Bitmap("img/flash.png")
var flash2=new createjs.Bitmap("img/flash.png")

function setPage1(){
  stage1.addChild(p1title)
  //stage.addChild(flash)
  flash.addChild(flash1)
  flash.addChild(flash2)
  TweenLite.set(flash,{x:320+12,y:(573-22)/1000*stageH,scale:0,alpha:0})//=============闪光
  TweenLite.set(flash2,{x:0,y:0,regX:18.5,regY:18.5,scale:0})
  TweenLite.set(flash1,{regX:18.5,regY:18.5,scale:0})
  flashLoop1()
  flashLoopB1()
  for (var i = 1; i <= 8; i++) {
    var _p1title=new createjs.Bitmap("img/p1title"+i+".png")
    p1titleA.push(_p1title)
    p1title.addChild(_p1title)
  };
  p1title.addChild(p1title_e)
  p1title.addChild(p1title_line)
  p1title.regX=320
  p1title.regY=83.5
  p1title.y=221/1000*stageH
  p1title.x=320

  stage1.addChild(p1Rhand)
  stage1.addChild(p1Lhand)
  stage1.addChild(p1box)
  TweenLite.set(p1Lhand,{x:320,y:550/1000*stageH,regX:320,regY:287.5})
  TweenLite.set(p1Rhand,{x:320,y:550/1000*stageH,regX:320,regY:287.5,scaleX:-1})
  TweenLite.set(p1box,{x:320,y:573/1000*stageH,regX:320,regY:190,alpha:3})

  stage1.addChild(p1logo)
  p1logo.y=stageH-163
  TweenLite.set(p1logo,{x:320,y:stageH-116/1000*stageH,regX:320,regY:47})
}

var p2heart=new createjs.Bitmap("img/p2heart.png")
var p2hand=new createjs.Bitmap("img/p2hand.png")
var p2title=new createjs.Bitmap("img/p2title.png")
var p2tA=[]
function setPage2(){
 stage2.addChild(p2heart)
 TweenLite.set(p2heart,{regX:157,regY:135.5,scale:2,x:320,y:530/1000*stageH})
 p2heartLoop1()

 stage2.addChild(p2hand)
 stage2.addChild(p2title)

 for (var i = 1; i <=8; i++) {
   var p2t=new createjs.Bitmap("img/p2t"+i+".png")
   stage2.addChild(p2t)
   p2tA.push(p2t)
   TweenLite.set(p2t,{regX:320,regY:13,x:320,y:892/1000*stageH,alpha:0})
   
 };

   
}

function flashLoop1(){
  TweenLite.to(flash1,.3,{scale:1.39,rotation:"+=90",onComplete:flashLoop2,delay:Math.random()*0+2,ease:Linear.easeNone})
}
function flashLoop2(){
  TweenLite.to(flash1,1.2,{scale:0,rotation:"+=270",onComplete:flashLoop1,ease:Linear.easeNone})
}
function flashLoopB1(){
  TweenLite.to(flash2,.3,{scale:1.2,rotation:"-=90",onComplete:flashLoopB2,delay:Math.random()*0+2+.05,ease:Linear.easeNone})
}
function flashLoopB2(){
  TweenLite.to(flash2,1.2,{scale:0,rotation:"-=270",onComplete:flashLoopB1,ease:Linear.easeNone})
}


function p2heartLoop1(){
  TweenLite.to(p2heart,1,{scale:2.4,onComplete:p2heartLoop2,ease:Linear.easeNone})
}
function p2heartLoop2(){
  TweenLite.to(p2heart,1,{scale:2,onComplete:p2heartLoop1,ease:Linear.easeNone})
}

function p2tLoop(){
  for (var i = 0; i <p2tA.length; i++) {
   TweenLite.killTweensOf(p2tA[i])
   TweenLite.set(p2tA[i],{regX:320,regY:13,x:320,y:(892)/1000*stageH,alpha:0})
   TweenLite.to(p2tA[i],4,{regX:320,regY:13,x:320,y:(774.5)/1000*stageH,alpha:1,overwrite:0,delay:i*1.1,ease:Sine.easeIn})
   
   if(i==p2tA.length-1){
    TweenLite.to(p2tA[i],4,{regX:320,regY:13,x:320,y:(657)/1000*stageH,alpha:0,overwrite:0,delay:i*1.1+4,ease:Sine.easeOut,onComplete:p2tLoop})
   }else{
    TweenLite.to(p2tA[i],4,{regX:320,regY:13,x:320,y:(657)/1000*stageH,alpha:0,overwrite:0,delay:i*1.1+4,ease:Sine.easeOut})
   }

 };

}
function resetPage2(){
  TweenLite.set(p2hand,{regX:320,regY:166,scale:1.5,x:320,y:(460+350)/1000*stageH})
  TweenLite.set(p2title,{alpha:0,regX:320,regY:56,scale:1,x:320,y:(215+150)/1000*stageH})
}

var nowDiamond=0

var step1=new createjs.Container()
var step2=new createjs.Container()
var step3=new createjs.Container()
var step4=new createjs.Container()

var step1title=new createjs.Bitmap("img/step1title.png")
var step1arrow=new createjs.Bitmap("img/step12arrow.png")
var step1iconA=[]
var step1btn=new createjs.Bitmap("img/step1btn.png")

var diamondA=[]

function setPage3Step1(){
  stage3.addChild(step1)
  stage3.addChild(step2)
  stage3.addChild(step3)
  stage3.addChild(step4)
  step1.visible=true
  step2.visible=false
  step3.visible=false
  step4.visible=false

  step1.addChild(step1title)
  TweenLite.set(step1title,{x:320,y:255/1000*stageH,regX:320,regY:93})

  step1.addChild(step1arrow)
  TweenLite.set(step1arrow,{x:320,y:517/1000*stageH,regX:320,regY:57})

  for (var i = 1; i <= 4; i++) {
    var step1icon=new createjs.Bitmap("img/step1icon"+i+".png")
    step1.addChild(step1icon)
    step1iconA.push(step1icon)
    TweenLite.set(step1icon,{x:320,y:737/1000*stageH,regX:320,regY:52,alpha:0})
    if((i-1)==nowDiamond){
      TweenLite.set(step1icon,{alpha:1})
    }

    var diamond=new createjs.Bitmap("img/diamond"+i+".png")
    step1.addChild(diamond)
    diamondA.push(diamond)
    TweenLite.set(diamond,{x:320,y:(527+50)/1000*stageH,regX:81.5,regY:73,alpha:0})
    if((i-1)==nowDiamond){
      TweenLite.set(diamond,{x:320,y:527/1000*stageH,regX:81.5,regY:73,alpha:1})
    }
  };

  step1.addChild(step1btn)
  TweenLite.set(step1btn,{x:320,y:866/1000*stageH,regX:320,regY:44})
}





//=====================翻页＝＝＝＝＝＝＝＝＝＝＝ 

var nowPage = 0;
var startY = 0;
var startX = 0;
var startScrollTop;
var pageUpDown =0
var pageLeftRight =0
var sliderA=[]
var ifnowEnd=0

function setSlide(){
  sliderA=[stage1,stage2,stage3]

  $('#mainCanvas')[0].addEventListener('touchstart',startTouch,false)
  $('#mainCanvas')[0].addEventListener('touchmove',moveTouch,false)
  $('#mainCanvas')[0].addEventListener('touchend',endTouch,false)
  
}

  
function startTouch(event){
  startY=event.touches[0].clientY
  startX=event.touches[0].clientX
  pageUpDown=0
  pageLeftRight=0
}
function moveTouch(event){
  var nowY=event.touches[0].clientY
  event.preventDefault();
  if (nowY-startY>80&&nowPage!=0) {
    pageUpDown=1
  }else if (nowY-startY< -80&&nowPage!=2) {
    pageUpDown=-1
  }else{
    pageUpDown=0
  };  

  var nowX=event.touches[0].clientX

  if (nowX-startX>80) {
    pageLeftRight=1
  }else if (nowX-startX< -80) {
    pageLeftRight=-1
  }else{
    pageLeftRight=0
  }; 
}
function endTouch(event){
  if (pageUpDown == 1&&ifcanupdown==1) {
    //alert("上一页")
    nowPage--
    goPage()
  }else if (pageUpDown == -1&&ifcanupdown==1) {
    //alert("下一页")
    nowPage++
    goPage() 
  }else if (pageUpDown==0) {
    //alert("不翻页")
  };  

  if (pageLeftRight == 1) {
    //alert("btnR")
    // nowPage--
     slideR()
  }else if (pageLeftRight == -1) {
    //alert("btnL")
    // nowPage++
    // goPage() 
    slideL()
  }else if (pageLeftRight==0) {
    //alert("不翻页")
  };
} 
function goPage(){
  console.log("nowPage=",nowPage) 


  for (var i = 0; i < sliderA.length; i++) {
    if(i<nowPage){
      TweenLite.to(sliderA[i],.5,{y:-stageH,alpha:0})
    }
    if(i==nowPage){
      TweenLite.to(sliderA[i],1,{y:0,alpha:1})
    }
    if (i>nowPage) {
      TweenLite.to(sliderA[i],.5,{y:stageH,alpha:0})
    };
  };
  if(nowPage==0){ani1()}
  if(nowPage==1){ani2()}
  if(nowPage==2){ani3()}
}

//=====================翻页＝＝＝＝＝＝＝＝＝＝＝