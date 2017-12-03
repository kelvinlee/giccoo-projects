
$(document).ready(function load (){
	loadWechatConfig();
  	wx.ready(function() {
    var shareContent;
    shareContent = {
      title: "奇门遁甲",
      desc: "乾坤万象，其乐无穷，12.15日，燃情上映！",
      link: "http://m.giccoo.com/numerology/",
      imgUrl: "http://m.giccoo.com/numerology/img/ico.jpg",
      success: function() {},
      cancel: function() {}
    };
    wx.onMenuShareTimeline(shareContent);
    wx.onMenuShareAppMessage(shareContent);
    wx.onMenuShareQQ(shareContent);
    return wx.onMenuShareWeibo(shareContent);

    
  });


    loadingAni()
});


$('body')[0].addEventListener('touchmove', function (event) {event.preventDefault();}, false);//阻止了浏览器默认的下拉事件
//====================LOADING=================
function loadingAni(){
  $("#loadingPG").css({"display":"block"})
  TweenLite.set($("#loadingC1"),{x:"-50%",y:"-50%"})
  TweenLite.set($("#loadingC2"),{x:"-50%",y:"-50%"})
  TweenLite.to($("#loadingC1"),10,{rotation:720,ease:Linear.easeOut})
  TweenLite.to($("#loadingC2"),1,{rotation:-720,ease:Linear.easeIn,onComplete:page1in})

}


//====================首页动画+互动============
function page1in(){
  $("#loadingPG").css({"display":"none"})
  $("#page1").css({"display":"block"})

  TweenLite.from($("#p1title" ),1,{opacity:0,y:"+=80",ease:Back.easeOut,delay:0+0.1*0})
  TweenLite.from($("#p1t1"    ),1,{opacity:0,y:"+=80",ease:Back.easeOut,delay:0+0.1*1})
  TweenLite.from($("#p1btns"  ),1,{opacity:0,y:"+=80",ease:Back.easeOut,delay:0+0.1*2})
  TweenLite.from($("#p1t2"    ),1,{opacity:0,y:"+=80",ease:Back.easeOut,delay:0+0.1*3})

  TweenLite.from($("#p1BG"    ),1,{opacity:0,scale:1.2,ease:Back.easeOut,delay:0+0.1*0})
  TweenLite.from($("#p1light" ),1,{opacity:0,delay:1,onComplete:lightLoop})
}
function lightLoop(){
  TweenLite.to($("#p1light" ),2,{opacity:0,onComplete:lightLoop1})
}
function lightLoop1(){
  TweenLite.to($("#p1light" ),4,{opacity:1,onComplete:lightLoop})
}
$("#ruleBtn").click(function(){
  TweenLite.set($("#rule" ),{display:"block",opacity:1})
  TweenLite.from($("#rule" ),.5,{opacity:0,scale:1.2})
})
$("#rule").click(function(){
  TweenLite.to($("#rule" ),.5,{opacity:0,display:"none"})
})


var nowGame=999

$("#p1btn1").click(function(){
  nowGame=0;
  goGameHint();
})
$("#p1btn2").click(function(){
  nowGame=1;
  goGameHint();
})
$("#p1btn3").click(function(){
  nowGame=2;
  goGameHint();
})

var blurA=[$("#blur1"),$("#blur2"),$("#blur3")]
var hintA=[$("#hint1"),$("#hint2"),$("#hint3")]
var gameA=[$("#game1"),$("#game2"),$("#game3")]
var icoA=[$("#rightIco1"),$("#rightIco2"),$("#rightIco3")]
function goGameHint(){
  TweenLite.set(blurA[0],{display:"none",rotation:0,scale:1,x:"-50%",y:"-50%"})
  TweenLite.set(blurA[1],{display:"none",rotation:0,scale:1,x:"-50%",y:"-50%"})
  TweenLite.set(blurA[2],{display:"none",rotation:0,scale:1,x:"-50%",y:"-50%"})

  TweenLite.set(blurA[nowGame],{display:"block"})

  TweenLite.set($("#goGameAni" ),{display:"block"})


  TweenLite.from($("#goGameBG" ),1,{opacity:0})
  TweenLite.set($("#page1" ),{display:"none",delay:1})

  TweenLite.from(blurA[nowGame],1.5,{scale:0.5,overwrite:0,opacity:0,ease:Elastic.easeOut})
  TweenLite.to(blurA[nowGame],2.5,{rotation:360*8,overwrite:0,ease:Cubic.easeOut})
  TweenLite.to(blurA[nowGame],1,{scale:8,opacity:0,delay:1.5})

  TweenLite.set($("#goGameAni" ),{display:"none",delay:2,opacity:1})

  TweenLite.set($("#gameHint" ),{display:"block",delay:1.5})
  TweenLite.set(hintA[0],{display:"none",opacity:1})
  TweenLite.set(hintA[1],{display:"none",opacity:1})
  TweenLite.set(hintA[2],{display:"none",opacity:1})
  TweenLite.set(hintA[nowGame],{display:"block"})
  TweenLite.from($("#gameHint" ),2,{opacity:0,delay:1})
  TweenLite.set(gameA[nowGame],{display:"block"})
}
$(".hint").click(function(){
  //TweenLite.set(gameA[nowGame],{display:"block"})
  TweenLite.to($("#gameHint" ),1,{display:"none",opacity:0})
})



//==================== Game 1 =================
var gameStateA=[0,0,0]//============0代表没玩，1代表玩了得一分，2代表玩了没得分


$("#g1btn1").click(function(){
  gameStateA[0]=2;
  gameEnd();
})
$("#g1btn2").click(function(){
  gameStateA[0]=1;
  gameEnd();
})
$("#g1btn3").click(function(){
  gameStateA[0]=2;
  gameEnd();
})

//==================== Game 2 =================
var musicStateA=[0,0,0]

$("#g2btn1").click(function(){
  gameStateA[1]=2;
  gameEnd();
  audio1.pause();
  audio2.pause();
  audio3.pause();
  musicStateA=[0,0,0]
  setMusicGif();
})
$("#g2btn2").click(function(){
  gameStateA[1]=1;
  gameEnd();
  audio1.pause();
  audio2.pause();
  audio3.pause();
  musicStateA=[0,0,0]
  setMusicGif();
})
$("#g2btn3").click(function(){
  gameStateA[1]=2;
  gameEnd();
  audio1.pause();
  audio2.pause();
  audio3.pause();
  musicStateA=[0,0,0]
  setMusicGif();
})

var audio1=document.getElementById("audio1");
var audio2=document.getElementById("audio2");
var audio3=document.getElementById("audio3");

$("#musicBtn1").click(function(){
  if(musicStateA[0]==0){
    audio1.play();
    audio2.pause();
    audio3.pause();
    musicStateA=[1,0,0]
  }else{
    audio1.pause();
    audio2.pause();
    audio3.pause();
    musicStateA=[0,0,0]
  }
  setMusicGif();
})

$("#musicBtn2").click(function(){
  if(musicStateA[1]==0){
    audio1.pause();
    audio2.play();
    audio3.pause();
    musicStateA=[0,1,0]
  }else{
    audio1.pause();
    audio2.pause();
    audio3.pause();
    musicStateA=[0,0,0]
  }
  setMusicGif();
})


$("#musicBtn3").click(function(){
  if(musicStateA[2]==0){
    audio1.pause();
    audio2.pause();
    audio3.play();
    musicStateA=[0,0,1]
  }else{
    audio1.pause();
    audio2.pause();
    audio3.pause();
    musicStateA=[0,0,0]
  }
  setMusicGif();
})
function setMusicGif(){
  TweenLite.set($("#gif1"),{opacity:musicStateA[0]})
  TweenLite.set($("#gif2"),{opacity:musicStateA[1]})
  TweenLite.set($("#gif3"),{opacity:musicStateA[2]})
}

//==================== Game 3 =================

var screenW
var screenH


screenW=document.body.offsetWidth 
screenH=document.body.offsetHeight

var oldX
var oldY

var nowX
var nowY

var ifPlayingGame3=0
var fire=$("#bigfire")

var fireSize=0


$("body").on('touchstart',function (e){
  oldX=e.originalEvent.touches[0].pageX
  oldY=e.originalEvent.touches[0].pageY

  nowX=e.originalEvent.touches[0].pageX
  nowY=e.originalEvent.touches[0].pageY
   

}).on('touchmove',function (e){
  oldX=nowX
  oldY=nowY


  nowX=e.originalEvent.touches[0].pageX
  nowY=e.originalEvent.touches[0].pageY
  if(ifPlayingGame3==1&&nowY<downline&&nowY>topline){
    fireSize+=Math.sqrt((nowY-oldY)*(nowY-oldY)+(nowX-oldX)*(nowX-oldX))/Math.sqrt(screenW*screenW+screenH*screenH)/2
    //console.log(fireSize) 
    console.log('nowY=',nowY,'   nowX=',nowX) 

    Time= new Date()
    nowTime=Time.getTime()
    if(nowTime-lastTime>10){
      addFire(nowX,nowY)
      lastTime=nowTime
    }


  }

})

var setInt
var topline=360
var downline=787

var stage = new createjs.Stage("mianCanvas");
//var sFire = new createjs.Bitmap("img/littleFire.png");

var Time=new Date()
var lastTime
var nowTime

game3();


function game3(){
  ifPlayingGame3=1
  topline=screenW/640*360
  downline=screenW/640*787
  setInt= window.setInterval(setFireSize,50);
  //window.clearInterval(setInt);

 // stage.addChild(sFire)
  createjs.Ticker.framerage = 30;
  createjs.Ticker.addEventListener("tick",handleTick);
  Time=new Date()
  lastTime=Time.getTime()
  TweenLite.set($("#g3BG2"),{display:"none"})
  TweenLite.set($("#theGif"),{display:"block",opacity:0})
}

function handleTick(event){
  stage.update()
}

function setFireSize(){

  fireSize-= 0.1/4




  fireSize=Math.max(fireSize,0)
  TweenLite.set(fire,{scale:fireSize,x:"-50%",y:"-50%",left:312/640*screenW,top:570/640*screenW})
  if(fireSize>=2){
    TweenLite.set($("#g3BG2"),{display:"block"})
    TweenLite.to(fire,1,{scale:4,x:"-50%",y:"-50%",left:312/640*screenW,top:570/640*screenW,opacity:0,onComplete:game3done})
      TweenLite.set($("#theGif"),{display:"none"})
   
  }
}

function game3done(){
  window.clearInterval(setInt);
  gameStateA[2]=1
  TweenLite.set($("#theGif"),{display:"block",x:24/640*screenW,y:277/640*screenW,width:600/640*screenW,height:356/640*screenW,opacity:1})
  TweenLite.to(fire,1.5,{onComplete:gameEnd})

 // gameEnd();
}
//var fireA=[]
function addFire(_x,_y){
  var sFire = new createjs.Bitmap("img/littleFire.png");
  stage.addChild(sFire)

  TweenLite.set(sFire,{width:100*Math.random(),height:100*Math.random(),scale:0,rotation:Math.random()*360})

  sFire.x=_x*640/screenW
  sFire.y=_y*1028/screenH
  TweenLite.to(sFire,.5,{scale:1.5*Math.random()+.5,overwrite:0})
  TweenLite.to(sFire,.25,{alpha:0,delay:.25})

}

//==================== 结果页 =================

$("#btnAgain").click(function(){
  TweenLite.to($("#resultPage"),.5,{opacity:0})
  TweenLite.set($("#resultPage"),{display:"none",delay:.5})
})

$("#btnShare1").click(function(){
  showShare()
})
$("#btnShare2").click(function(){
  showShare()
})
$("#shareLayer").click(function(){
  TweenLite.to($("#shareLayer"),.5,{opacity:0}) 
  TweenLite.set($("#shareLayer"),{display:"none",delay:.5})
})

$("#btnPrize1").click(function(){
  goPrize()
})
$("#btnPrize2").click(function(){
  goPrize()
})

$("#btnNext1").click(function(){
  nextGame()
})
$("#btnNext2").click(function(){
  nextGame()
})

function showShare(){
  TweenLite.set($("#shareLayer"),{display:"block",opacity:1})
  TweenLite.from($("#shareLayer"),.5,{opacity:0}) 
}
function nextGame(){
  if(gameStateA[0]==0){
    nowGame=0
    showGame()
  }else if(gameStateA[1]==0){
    nowGame=1
    showGame()
  }else if(gameStateA[2]==0){
    nowGame=2
    showGame()
  }else{
    alert("玩完了去抽奖")
    goPrize()
  }
}
function showGame(){
  TweenLite.to($("#resultPage"),.5,{opacity:0})
  TweenLite.set($("#resultPage"),{display:"none",delay:.5})
  TweenLite.set(gameA[0],{display:"none"})
  TweenLite.set(gameA[1],{display:"none"})
  TweenLite.set(gameA[2],{display:"none"})
  TweenLite.set(gameA[nowGame],{display:"block"})

  
  TweenLite.set($("#gameHint" ),{display:"block",opacity:1,overwrite:0})
  TweenLite.set(hintA[0],{display:"none",opacity:1})
  TweenLite.set(hintA[1],{display:"none",opacity:1})
  TweenLite.set(hintA[2],{display:"none",opacity:1})
  TweenLite.set(hintA[nowGame],{display:"block"})
  TweenLite.from($("#gameHint" ),.5,{opacity:0})

}
var rtA=[$("#r1t"),$("#r2t"),$("#r3t")]
var wtA=[$("#w1t"),$("#w2t"),$("#w3t")]
function gameEnd(){
    TweenLite.set(rtA[0],{display:"none"})
    TweenLite.set(rtA[1],{display:"none"})
    TweenLite.set(rtA[2],{display:"none"})
    TweenLite.set(wtA[0],{display:"none"})
    TweenLite.set(wtA[1],{display:"none"})
    TweenLite.set(wtA[2],{display:"none"})

  TweenLite.set($("#resultPage"),{display:"block",opacity:1})
  TweenLite.from($("#resultPage"),1,{opacity:0})
  if(gameStateA[nowGame]==1){//得一分
    TweenLite.set($("#rightBG"),{display:"block"})
    TweenLite.set($("#wrongBG"),{display:"none"})
    
    TweenLite.set(rtA[nowGame],{display:"block"})
  }else{
    TweenLite.set($("#rightBG"),{display:"none"})
    TweenLite.set($("#wrongBG"),{display:"block"})
    
    TweenLite.set(wtA[nowGame],{display:"block"})
  }


  for (var i = 0; i < 3; i++) {
    if (gameStateA[i]==1) {
      TweenLite.set(icoA[i],{display:"block"})
      TweenLite.to(icoA[i],.5,{opacity:1,delay:1.2})
    }else{
      TweenLite.set(icoA[i],{display:"none",opacity:0})
    }
  };
  

}
//==================== 抽奖页 =================
function goPrize(){
  alert("去抽奖")
}

//===========================================

var loadWechatConfig = function() {
  var hm, s, url;
  url = encodeURIComponent(window.location.href.split("#")[0]);
  hm = document.createElement('script');
  hm.src = "http://api.giccoo.com/api/config?url=" + url;
  s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(hm, s);
};
