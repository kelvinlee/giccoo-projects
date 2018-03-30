
$(document).ready(function load (){
	loadWechatConfig();
  	wx.ready(function() {
    var shareContent;
    shareContent = {
      title: "智·混动 MAX秀",
      desc: "人人都是隐藏的跨界高手",
      link: "http://m.giccoo.com/maxshow/",
      imgUrl: "http://m.giccoo.com/maxshow/img/ico.jpg",
      success: function() {},
      cancel: function() {}
    };
    wx.onMenuShareTimeline(shareContent);
    wx.onMenuShareAppMessage(shareContent);
    wx.onMenuShareQQ(shareContent);
    return wx.onMenuShareWeibo(shareContent);
  });


    initAll()



});

$('body')[0].addEventListener('touchmove', function (event) {event.preventDefault();}, false);//阻止了浏览器默认的下拉事件
//$('body')[0].addEventListener('touchstart', function (event) {event.preventDefault();}, false);
$('#p0_btn')[0].addEventListener('touchstart', function (event) {event.preventDefault();}, false);
var screenW
var screenH

screenW=document.body.offsetWidth 
screenH=document.body.offsetHeight

var loadWechatConfig = function() {
  var hm, s, url;
  url = encodeURIComponent(window.location.href.split("#")[0]);
  hm = document.createElement('script');
  hm.src = "http://api.giccoo.com/api/config?url=" + url;
  s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(hm, s);
};

var stage = new createjs.Stage("mainCanvas");

function initAll(){
   //createjs.Ticker.framerage = 100;
   createjs.Ticker.timingMode = createjs.Ticker.RAF;
   createjs.Ticker.addEventListener("tick",handleTick);
  setSky(50)
  skyMove.x=-1
  skyMove.y=0
   //======getStart()
  ani1start()
  //tick();
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
//=============================每秒30次的HandleTick

function handleTick(){
    //======setFootPrints()
  moveSky();
  stage.update();
}

//==================星空==================
var starA=[]
var skyMove={x:0,y:0}//[0,0]
function setSky(_starNum){
  for (var i = 0; i < _starNum; i++) {
    //var AstarContainer = new createjs.Container()
    var Astar = new createjs.Bitmap("img/star.png")
    stage.addChild(Astar)
    //stage.addChild(AstarContainer)
    starA.push(Astar)
    Astar.x=Math.random()*640
    Astar.y=Math.random()*1000
    Astar.scaleX=Astar.scaleY=Math.random()*Math.random()*1.5//*.8+.2

  };
}

function moveSky(){
  for (var i = 0; i < starA.length; i++) {
    starA[i].x+=skyMove.x*(starA[i].scaleY*starA[i].scaleY*starA[i].scaleY*starA[i].scaleY)
    starA[i].y+=skyMove.y*(starA[i].scaleY*starA[i].scaleY*starA[i].scaleY*starA[i].scaleY)

    starA[i].alpha=Math.random()*60

    if(starA[i].x<0){starA[i].x+= 640;starA[i].y=Math.random()*1000}
    if(starA[i].x>640){starA[i].x-=640;starA[i].y=Math.random()*1000}
    if(starA[i].y<0){starA[i].y+=1000;starA[i].x=Math.random()*640}
    if(starA[i].y>1000){starA[i].y-=1000;starA[i].x=Math.random()*640}
  };
  
}

//===================首页动画开始===============
var walk1bA=[]
var stage1 = new createjs.Container()
var stage1fp = new createjs.Container()
var hillA=[]
var hill_xyScale=[[453,659,.82],[386,717,.4],[59,629,1.2],[550,700,.65],[185,694,.84],[366+200,794,1.8]]
var boy1
function getStart(){

  stage.addChild(stage1)
  //========地面

  var ground = new createjs.Bitmap("img/ground.png") 
  stage1.addChild(ground)
  ground.y=750
  ground.scaleX=640

  //========山

  for (var i = 0; i < 6; i++) {
    var a_hill= new createjs.Bitmap("img/hill.png")
    stage1.addChild(a_hill)
    hillA.push(a_hill)
    a_hill.x=hill_xyScale[i][0]//+100
    a_hill.y=hill_xyScale[i][1]
    a_hill.scaleX=a_hill.scaleY=hill_xyScale[i][2]

    //TweenLite.to(a_hill,20,{x:a_hill.x-300,delay:6})

  };

  //=======男孩走
  for (var i = 1; i <70 ; i++) {
    if(i<10){var str="img/walk1/walk000"+i+".png"}else{var str="img/walk1/walk00"+i+".png"}
    walk1bA.push(str)
  };

  var manWalk_black = new createjs.SpriteSheet({
              "images": walk1bA, //动画人物图片来自base64编码字符串
              "frames": {"height": 100,  "width": 50},
              "animations": { run: [0,68]}
          });
          
  boy1 = new createjs.Sprite(manWalk_black, "run");
  //character.framerate = 30; 
  boy1.play();//播放动画
  stage1.addChild(boy1);
  stage1.addChild(hillA[5])

  boy1.x=0
  boy1.y=780

  //TweenLite.to(boy1,6,{x:320-25,ease:Linear.easeNone})



  stage1.addChild(stage1fp)
  stage1.addChild(hillA[5])//====最近的山
  p0ani1()
}


//======脚印
var footPrints=[]
var creatFootPrint
var screenMove=[0,0]


function setFootPrints(){
  if(boy1.currentFrame==0){
    var fp= new createjs.Bitmap("img/footprint.png")
    stage1fp.addChild(fp)
    footPrints.push(fp)
    fp.x=boy1.x
    fp.y=boy1.y+3
  }else if (boy1.currentFrame==35) {
    var fp= new createjs.Bitmap("img/footprint.png")
    stage1fp.addChild(fp)
    footPrints.push(fp)
    fp.x=boy1.x
    fp.y=boy1.y-3
  };
  moveFootPrints()
  moveHills()
}

function moveFootPrints(){
  for (var i =  0; i < footPrints.length; i++) {
    footPrints[i].x+=screenMove[0]
    footPrints[i].y+=screenMove[1]

  };
}
function moveHills(){
  hillA[0].x+=screenMove[0]*.1
  hillA[0].y+=screenMove[1]*.1
  hillA[1].x+=screenMove[0]*.12
  hillA[1].y+=screenMove[1]*.12
  hillA[2].x+=screenMove[0]*.14
  hillA[2].y+=screenMove[1]*.14
  hillA[3].x+=screenMove[0]*.16
  hillA[3].y+=screenMove[1]*.16
  hillA[4].x+=screenMove[0]*.18
  hillA[4].y+=screenMove[1]*.18
  hillA[5].x+=screenMove[0]*4
  hillA[5].y+=screenMove[1]*4
}

var titleA=[]
function p0ani1(){
  var t1=5
  screenMove=[0,0]
  skyMove.x=-1//=[-1,0]
  //boy1.x=(320-25)*(6-t1)/6
  TweenLite.to(boy1,t1,{x:320-25,ease:Linear.easeNone,onComplete:p0ani2})

    //=======标题1
  

  for (var i = 1; i < 8; i++) {
    var p1title=new createjs.Bitmap("img/p1title"+i+".png")
    stage.addChild(p1title)
    titleA.push(p1title)

    
    if(i==7){
      TweenLite.from(p1title,3,{y:p1title.y+50,alpha:0,delay:1+i*.5,ease:Back.easeOut,onComplete:p0ani3})
    }else{
      TweenLite.from(p1title,3,{y:p1title.y+50,alpha:0,delay:1+i*.5,ease:Back.easeOut})
    }

  };
}
var lookup= new createjs.Bitmap("img/man_lookup.png")
function p0ani2(){
  screenMove=[-1,0]
  skyMove.x=-1.5//
  stage1.addChild(lookup)
  lookup.x=boy1.x
  lookup.y=boy1.y
  lookup.alpha=0
}
function p0ani3(){
  for (var i = 1; i < 8; i++) {    
    if(i==7){
      TweenLite.to(titleA[i-1],3,{x:-320,alpha:0,delay:i*0,ease:Linear.easeNone,onComplete:p0ani4})
    }else{
      TweenLite.to(titleA[i-1],3-Math.random(),{x:-320,alpha:0,delay:i*0,ease:Linear.easeNone})
    }

  };
}

var copy0urlA=["img/copy0a.png","img/copy0b.png","img/copy0c.png","img/copy0d.png","img/copy0e.png","img/copy0f.png","img/copy0g.png","img/copy0h.png","img/copy0i.png"]
var copy0A=[]
var stage1b=new createjs.Container()
var p0btn = new createjs.Bitmap("img/p0btn.png")
var p0t = new createjs.Bitmap("img/p0t.png")
var p0glow = new createjs.Bitmap("img/circle_glow.png")
function p0ani4(){
  screenMove=[0,0]
  skyMove.x=-1
  skyMove.y=0
  
  lookup.alpha=1
  stage1.removeChild(boy1)
  boy1.stop()
  TweenLite.set(skyMove,{x:0,y:8,delay:.5,overwrite:0})
  TweenLite.to(skyMove,3,{x:-1,y:0,delay:.5})
  TweenLite.to(stage1,4,{y:700,delay:.5,scaleY:.7})

  stage.addChild(stage1b)
  for (var i = 0; i < copy0urlA.length; i++) {
    var copy0=new createjs.Bitmap(copy0urlA[i])
    stage1b.addChild(copy0)
    copy0A.push(copy0)
    TweenLite.from(copy0,1.5,{y:-200,alpha:0,delay:1-i*.05})
  };


  setTimeout(function(){
      stage1b.addChild(p0btn)
      stage1b.addChild(p0t)
      stage1b.addChild(p0glow)

      p0glow.regX=50
      p0glow.regY=50
      p0glow.x=320
      p0glow.y=840
      p0glow.scaleX=p0glow.scaleY=2
      TweenLite.from(p0btn,1,{alpha:0,y:20,delay:.1})
      TweenLite.from(p0t,1,{alpha:0,y:20,delay:.2})
      TweenLite.from(p0glow,1,{scale:0,alpha:0,delay:.3})

      $("#p0_btn")[0].addEventListener("touchstart",p0btnDown)
      $("#p0_btn")[0].addEventListener("touchend",p0btnUp)
  },2500)
}


var canGo=1
function p0btnDown(){
  canGo=1
  TweenLite.to(p0glow,2,{scale:4,alpha:1,onComplete:goP1})
  for (var i = 0; i < copy0A.length; i++) {
    TweenLite.to(copy0A[i],2,{alpha:.5,x:Math.random()*100-50,y:Math.random()*100-50})
  };
}
function p0btnUp(){
  canGo=0
  TweenLite.to(p0glow,.5,{scale:0,alpha:0})
  for (var i = 0; i < copy0A.length; i++) {
    TweenLite.to(copy0A[i],.5,{alpha:1,x:0,y:0})
  };
}
function goP1(){
  if(canGo==1){
    $("#p0_btn")[0].removeEventListener("touchstart",p0btnDown)
    $("#p0_btn")[0].removeEventListener("touchend",p0btnUp)
    TweenLite.to(p0glow,.5,{scale:8,alpha:0})
    for (var i = 0; i < copy0A.length; i++) {
      TweenLite.to(copy0A[i],.5,{alpha:0,x:0,y:0})
    };
    TweenLite.to(p0btn,.5,{alpha:0})
    TweenLite.to(p0t,.5,{alpha:0})
    ani1start()//========================进入第一动画
  }
}

//============================首页动画结束
//============================公用
var nowPage=1
//==========下一个 按钮
$("#home_btn").click(function(){
  $("#home_btn").css({display:"none"})
  nowPage++
  TweenLite.to(homeBtn,.5,{alpha:0})
  nextText()
  switch(nowPage){
    case 2:
      ani1end();
      break;
  }
})
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
//==========下按钮
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

//========== 坐->站起来
var standupA=[]
var manSit
function setManSit(){
  for (var i = 1; i <71 ; i++) {
    if(i<10){var str="img/standup/man000"+i+".png"}else{var str="img/standup/man00"+i+".png"}
    standupA.push(str)
  };

  var manStandup_s = new createjs.SpriteSheet({
              "images": standupA, //动画人物图片来自base64编码字符串
              "frames": {"height": 150,  "width": 100},
              "animations": { run: [0,69]}
          });
          
  manSit = new createjs.Sprite(manStandup_s, "run");
  manSit.stop();//播放动画
  stage_1.addChild(manSit);
  manSit.x=344
  manSit.y=265
  manSit.addEventListener("animationend",function(event){
    manSit.stop();
    manJump.alpha=1
  })
  manSit.alpha=0
}

//========== 小跳
var jumpA=[]
var manJump
function setManJump(){
  for (var i = 1; i <42 ; i++) {
    if(i<10){var str="img/jump_s/man000"+i+".png"}else{var str="img/jump_s/man00"+i+".png"}
    jumpA.push(str)
    jumpA.push(str)
  };

  var manJump_s = new createjs.SpriteSheet({
              "images": jumpA, //动画人物图片来自base64编码字符串
              "frames": {"height": 150,  "width": 100},
              "animations": { run: [0,81]}
              // "framerate": 20

          });
          
  manJump = new createjs.Sprite(manJump_s, "run");
  manJump.stop();//播放动画
  stage.addChild(manJump);
  manJump.x=344
  manJump.y=265
  manJump.addEventListener("animationend",function(event){
    manJump.stop();
  })
  manJump.alpha=0
}


//============================第一页开始
var stage_1=new createjs.Container()
var downText=new createjs.Container()
var homeBtn=new createjs.Container()
var word1=new createjs.Bitmap("img/word1.png")

var leafroot=new createjs.Shape()
var p1leaf1=new createjs.Bitmap("img/p1leaf1.png")
var p1leaf2=new createjs.Bitmap("img/p1leaf1.png")

var dotGlow=new createjs.Container()
var dotGlow2=new createjs.Container()

function ani1start(){
  $("#p0_btn").css({display:"none"})
  stage.addChild(stage_1)
  stage.addChild(downText)
  stage.addChild(homeBtn)
  initText()
  initHomeBtn()

  stage_1.addChild(word1)
  word1.regX=100
  word1.regY=50
  word1.x=320
  word1.y=436

  setManJump()

  //========树苗
  var t2=0

  stage_1.addChild(leafroot)
  leafroot.graphics.beginFill("#ffffff").drawRect(0,0,3,-3);
  leafroot.x=250
  leafroot.y=390
  TweenLite.to(leafroot,8,{scaleY:10,ease:Elastic.easeOut,delay:1+t2})
  stage_1.addChild(p1leaf1)
  stage_1.addChild(p1leaf2)
  p1leaf1.x=p1leaf2.x=251
  p1leaf1.y=p1leaf2.y=387
  p1leaf1.rotation=225//180
  p1leaf2.rotation=225//270
  p1leaf1.scaleX=p1leaf1.scaleY=1/10
  p1leaf2.scaleX=p1leaf2.scaleY=.6/10
  TweenLite.to(p1leaf1,8,{scale:1,rotation:180,y:387-27,ease:Elastic.easeOut,delay:1+t2})
  TweenLite.to(p1leaf2,8,{scale:.6,rotation:270,y:387-27,ease:Elastic.easeOut,delay:1+t2})

  setManSit()
  setDotGlow()
  homeBtn.alpha=0
  TweenLite.to(homeBtn,.5,{alpha:1,delay:6,onComplete:p1done})
  $("#home_btn").css({display:"none"})
}
function p1done(){
  $("#home_btn").css({display:"block"})
}
//====光点汇聚

function setDotGlow(){
  var t1=3
  for (var i = 0; i < 200; i++) {
    var dot=new createjs.Bitmap("img/star.png")
    dotGlow.addChild(dot)
    dot.regX=dot.regY=5
    dot.x=Math.random()*1600-800
    dot.y=Math.random()*1600-800
    dot.scaleX=dot.scaleY=Math.random()
    dot.alpha=0
    TweenLite.to(dot,1+Math.random()*3,{x:0,y:0,alpha:1,ease:Back.easeOut,delay:Math.random()+0+t1})

    var dot2=new createjs.Bitmap("img/star.png")
    dotGlow2.addChild(dot2)
    dot2.regX=dot2.regY=5
    dot2.x=Math.random()*800-400
    dot2.y=Math.random()*800-400
    dot2.scaleX=dot2.scaleY=Math.random()
    dot2.alpha=0
    TweenLite.to(dot2,1+Math.random()*3,{rotation:Math.random()*720,x:0,y:0,alpha:.1,scale:Math.random()*8,ease:Back.easeOut,delay:Math.random()+t1,overwrite:0})
    TweenLite.to(dot2,1+Math.random(),{alpha:0,delay:3.5+t1})
  };
  stage_1.addChild(dotGlow)
  dotGlow.x=385
  dotGlow.y=385
  stage_1.addChild(dotGlow2)
  dotGlow2.x=385
  dotGlow2.y=385
  TweenLite.to(dotGlow,5,{rotation:720,ease:Linear.easeNone,delay:t1})
  TweenLite.to(dotGlow2,5,{rotation:1360,ease:Linear.easeNone,delay:t1})

  TweenLite.to(manSit,2,{alpha:1,delay:2+t1})
  setTimeout(function(){
    stage_1.removeChild(dotGlow)
    stage_1.removeChild(dotGlow2)
    manSit.play()
  },5000+t1*1000)

}

//===========================第一页进入第二页
var stage_2=new createjs.Container()
var word2=new createjs.Bitmap("img/word2.png")
function ani1end(){
  stage_1.removeChild(manSit)
  stage.addChild(stage_2)
  manJump.alpha=1
  manJump.play()
  TweenLite.to(stage_1,1,{x:-640})
  TweenLite.to(manJump,1,{x:230,y:250})
  TweenLite.to(homeBtn,1,{alpha:1})
  TweenLite.set($("home_btn"),{display:"block",delay:1})
  stage_2.addChild(word2)
  word2.regX=100
  word2.regY=50
  word2.x=740
  word2.y=436
  TweenLite.to(word2,1,{x:320})
  createjs.Ticker.addEventListener("tick",setQmark);
}
var qMarkA=[]
function setQmark(){
  
  if (Math.random()>.0) {
    var qMark=new createjs.Bitmap("img/qmark.png")
    stage_2.addChild(qMark)
    qMarkA.push(qMark)
    qMark.regX=13
    qMark.regY=22
    qMark.scaleX=qMark.scaleY=Math.random()+.5
    qMark.x=word2.x+Math.random()*300-150
    qMark.y=word2.y+Math.random()*100-50-10
    qMark.alpha=0
    TweenLite.to(qMark,2+Math.random(),{x:(qMark.x+word2.x)/2,scale:0,y:qMark.y-(200+Math.random()*150),rotation:Math.random()*180-90,alpha:.5,visible:"false"})
  };
}
