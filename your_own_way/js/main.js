
var sys="other"

var shareHint=[]

$(document).ready(function load (){
	if (window.navigator.userAgent.indexOf("NeteaseMusic") > -1) {
    sys = "NeteaseMusic";
    
    TweenLite.set($("#shareHint_APP"),{display:"block"})
    shareHint.push($("#shareHint_APP"))
  } else {
    iniListenSound()
    $("#shareBtn").css({"display":"none"})
    TweenLite.set($("#shareHint_WX"),{display:"block"})
    shareHint.push($("#shareHint_WX"))
    loadWechatConfig();
  	wx.ready(function() {
    var shareContent;
    shareContent = {
      title: "走自己的路，你永远独一无二",
      desc: "愿为野马，四海为家",
      link: "https://mazda.music.163.com/your_own_way/",
      imgUrl: "https://mazda.music.163.com/your_own_way/img/ico.jpg",
      success: function() {},
      cancel: function() {}
    };
    wx.onMenuShareTimeline(shareContent);
    wx.onMenuShareAppMessage(shareContent);
    wx.onMenuShareQQ(shareContent);
    return wx.onMenuShareWeibo(shareContent);
   });

  }
    initAll()



});

var ifbgm=0
var bgm=$("#bgm")[0]
//微信端背景音乐播放
function iniListenSound(){
         document.addEventListener("WeixinJSBridgeReady", function(){
             bgm.play();
             ifbgm=1
             TweenLite.set($("#musicOff"),{opacity:0})
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

$("#video1").click(function(){
  //if(ifbgm==1){bgm.pause();}
  //alert("stop!")
  bgm.pause();
})



$("#shareBtn").click(neteaseShare)


function neteaseShare() {
  var picUrl, redirectUrl, subTitle2, title1, title2;
  title1 = "走自己的路，你永远独一无二";
  picUrl = "https://mazda.music.163.com/your_own_way/img/ico.jpg";
  redirectUrl = "https://mazda.music.163.com/your_own_way/";
  title2 = "走自己的路，你永远独一无二";
  subTitle2 = "愿为野马，四海为家";
  window.location.href = "orpheus://share/" + encodeURIComponent(title1) + "/" + encodeURIComponent(picUrl) + "/" + encodeURIComponent(redirectUrl) + "/" + encodeURIComponent(title2) + "/" + encodeURIComponent(subTitle2);
  // window.location.href = "orpheus://sharepic?picUrl="+encodeURIComponent(picUrl)+"&shareUrl="+encodeURIComponent(redirectUrl)+"&wbDesc="+encodeURIComponent(title1)+"&qqDesc="+encodeURIComponent(title1)
  return console.log("run after?");
};

$('body')[0].addEventListener('touchmove', function (event) {event.preventDefault();}, false);//阻止了浏览器默认的下拉事件
$('#p0_btn')[0].addEventListener('touchstart', function (event) {event.preventDefault();}, false);
var screenW
var screenH

screenW=document.body.offsetWidth 
screenH=document.body.offsetHeight

var loadWechatConfig = function() {
  var hm, s, url;
  url = encodeURIComponent(window.location.href.split("#")[0]);
  hm = document.createElement('script');
  hm.src = "//api.giccoo.com/api/config?url=" + url;
  s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(hm, s);
};

var stage = new createjs.Stage("mainCanvas");

function initAll(){
   createjs.Ticker.framerate = 60;
   //createjs.Ticker.timingMode = createjs.Ticker.RAF;
   createjs.Ticker.addEventListener("tick",handleTick);
   createjs.Ticker.addEventListener("tick",setFootPrints);

  setSky(50)
  skyMove.x=-1
  skyMove.y=0
  getStart()
  //ani1start()
  //tick();
}

//=============================每秒30次的HandleTick

function handleTick(){
    
  moveSky();
  stage.update();
}

//==================星空==================
var starA=[]
var skyMove={x:0,y:0}//[0,0]
//var skyScale={x:1,y:1}
var stage_star=new createjs.Container()
function setSky(_starNum){
  for (var i = 0; i < _starNum; i++) {
    //var AstarContainer = new createjs.Container()
    var Astar = new createjs.Bitmap("//image.giccoo.com/projects/your_own_way/img/star.png")
    stage.addChild(stage_star)
    stage_star.addChild(Astar)
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

  var ground = new createjs.Bitmap("//image.giccoo.com/projects/your_own_way/img/ground.png") 
  stage1.addChild(ground)
  ground.y=750
  ground.scaleX=640

  //========山

  for (var i = 0; i < 6; i++) {
    var a_hill= new createjs.Bitmap("//image.giccoo.com/projects/your_own_way/img/hill.png")
    stage1.addChild(a_hill)
    hillA.push(a_hill)
    a_hill.x=hill_xyScale[i][0]//+100
    a_hill.y=hill_xyScale[i][1]
    a_hill.scaleX=a_hill.scaleY=hill_xyScale[i][2]

  };

  //=======男孩走
  for (var i = 1; i <70 ; i++) {
    if(i<10){var str="//image.giccoo.com/projects/your_own_way/img/walk1/walk000"+i+".png"}else{var str="//image.giccoo.com/projects/your_own_way/img/walk1/walk00"+i+".png"}
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

  stage1.addChild(stage1fp)
  stage1.addChild(hillA[5])//====最近的山
  p0ani1()
}


//======脚印
var footPrints=[]
var creatFootPrint
var screenMove=[0,0]

var fpC= new createjs.Bitmap("//image.giccoo.com/projects/your_own_way/img/footprint.png")
function setFootPrints(){
  if(boy1.currentFrame==0){
    var fp= fpC.clone()// new createjs.Bitmap("//image.giccoo.com/projects/your_own_way/img/footprint.png")
    stage1fp.addChild(fp)
    footPrints.push(fp)
    fp.x=boy1.x
    fp.y=boy1.y+3
  }else if (boy1.currentFrame==35) {
    var fp= fpC.clone()//new createjs.Bitmap("//image.giccoo.com/projects/your_own_way/img/footprint.png")
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
    var p1title=new createjs.Bitmap("//image.giccoo.com/projects/your_own_way/img/p1title"+i+".png")
    stage.addChild(p1title)
    titleA.push(p1title)

    
    if(i==7){
      TweenLite.from(p1title,3,{y:p1title.y+50,alpha:0,delay:1+i*.5,ease:Back.easeOut,onComplete:p0ani3})
    }else{
      TweenLite.from(p1title,3,{y:p1title.y+50,alpha:0,delay:1+i*.5,ease:Back.easeOut})
    }

  };
}
var lookup= new createjs.Bitmap("//image.giccoo.com/projects/your_own_way/img/man_lookup.png")
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

var copy0urlA=["//image.giccoo.com/projects/your_own_way/img/copy0a.png","//image.giccoo.com/projects/your_own_way/img/copy0b.png","//image.giccoo.com/projects/your_own_way/img/copy0c.png","//image.giccoo.com/projects/your_own_way/img/copy0d.png","//image.giccoo.com/projects/your_own_way/img/copy0e.png","//image.giccoo.com/projects/your_own_way/img/copy0f.png","//image.giccoo.com/projects/your_own_way/img/copy0g.png","//image.giccoo.com/projects/your_own_way/img/copy0h.png","//image.giccoo.com/projects/your_own_way/img/copy0i.png"]
var copy0A=[]
var stage1b=new createjs.Container()
var p0btn = new createjs.Bitmap("//image.giccoo.com/projects/your_own_way/img/p0btn.png")
var p0t = new createjs.Bitmap("//image.giccoo.com/projects/your_own_way/img/p0t.png")
var p0glow = new createjs.Bitmap("//image.giccoo.com/projects/your_own_way/img/circle_glow.png")
function p0ani4(){
  screenMove=[0,0]
  skyMove.x=-1
  skyMove.y=0
  
  lookup.alpha=1
  stage1.removeChild(boy1)
  boy1.stop()
  createjs.Ticker.removeEventListener("tick",setFootPrints);
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
  TweenLite.to(p0glow,1.5,{scale:4,alpha:1,onComplete:goP1})
  for (var i = 0; i < copy0A.length; i++) {
    TweenLite.to(copy0A[i],1.5,{alpha:.5,x:Math.random()*100-50,y:Math.random()*100-50})
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


//============================第一页开始
var stage_1=new createjs.Container()
var downText=new createjs.Container()
var homeBtn=new createjs.Container()
var word1=new createjs.Bitmap("//image.giccoo.com/projects/your_own_way/img/word1.png")

var leafroot=new createjs.Shape()
var p1leaf1=new createjs.Bitmap("//image.giccoo.com/projects/your_own_way/img/p1leaf1.png")
var p1leaf2=new createjs.Bitmap("//image.giccoo.com/projects/your_own_way/img/p1leaf1.png")

var dotGlow=new createjs.Container()
var dotGlow2=new createjs.Container()

function ani1start(){
  stage.removeChild(stage1)
  stage.removeChild(stage1b)
  stage.removeChild(stage1fp)
  // TweenLite.to($(".musicBtn"),1,{opacity:0,display:"none"})
  // TweenLite.to($("#shareBtn"),1,{right:"4%"})

  setHint()
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

  setBoy()
  boy.alpha=0
  setDotGlow()
  homeBtn.alpha=0
  TweenLite.to(homeBtn,.5,{alpha:1,delay:6,onComplete:p1done})
  $("#home_btn").css({display:"none"})
}
function p1done(){
  $("#home_btn").css({display:"block"})
  showHint1(0)
}
//====光点汇聚

var ifani1=0
function setDotGlow(){
  var t1=3
  for (var i = 0; i < 200; i++) {
    var dot=new createjs.Bitmap("//image.giccoo.com/projects/your_own_way/img/star.png")
    dotGlow.addChild(dot)
    dot.regX=dot.regY=5
    dot.x=Math.random()*1600-800
    dot.y=Math.random()*1600-800
    dot.scaleX=dot.scaleY=Math.random()
    dot.alpha=0
    TweenLite.to(dot,1+Math.random()*3,{x:0,y:0,alpha:1,ease:Back.easeOut,delay:Math.random()+0+t1})

    var dot2=new createjs.Bitmap("//image.giccoo.com/projects/your_own_way/img/star.png")
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

  TweenLite.to(boy,2,{alpha:1,delay:2+t1})
  setTimeout(function(){
    stage_1.removeChild(dotGlow)
    stage_1.removeChild(dotGlow2)
    if(ifani1==0){
      boy.gotoAndPlay("standup")
    }  
  },5000+t1*1000)

}

//===========================第一页进入第二页
var stage_2=new createjs.Container()
var word2=new createjs.Bitmap("//image.giccoo.com/projects/your_own_way/img/word2.png")
function ani1end(){//=======点击触发
  stage.addChild(stage_2)
  boy.stop()
  ifani1=1
  boy.gotoAndPlay("jump")

  TweenLite.from(skyMove,1,{x:-16})


  TweenLite.to(stage_1,1,{x:-640,delay:.03})
  TweenLite.to(boy,1,{x:230,y:300,onComplete:ani2})
  TweenLite.to(homeBtn,1,{alpha:1,delay:2})
  TweenLite.set($("#home_btn"),{display:"block",delay:2})
  stage_2.addChild(word2)
  word2.regX=100
  word2.regY=50
  word2.x=740
  word2.y=486
  TweenLite.to(word2,1,{x:320})
  createjs.Ticker.addEventListener("tick",setQmark);
  showHint1(2)

}

function ani2(){
  boy.gotoAndPlay("walk")
  TweenLite.to(boy,2,{x:330,y:300,ease:Linear.easeNone,onComplete:ani2Stand})
}
function ani2Stand(){
  boy.gotoAndPlay("stand")
}
//===========================第二页进入第三页
var stage_3=new createjs.Container()
var word3=new createjs.Bitmap("//image.giccoo.com/projects/your_own_way/img/word3.png")

var stage_4=new createjs.Container()
var word4=new createjs.Bitmap("//image.giccoo.com/projects/your_own_way/img/word4.png")
function ani2end(){//=======点击触发
  boy.gotoAndPlay("jump")
  TweenLite.from(skyMove,1,{x:-16})

  TweenLite.to(boy,1,{x:230,y:250})
  TweenLite.to(word2,1,{x:-640,delay:.03,onComplete:ani3})
  
  stage.addChild(stage_3)
  stage_3.addChild(word3)
  word3.regX=100
  word3.regY=50
  word3.x=740
  word3.y=436
  TweenLite.to(word3,1,{x:320})

  stage.addChild(stage_4)
  stage_4.addChild(word4)
  word4.regX=123
  word4.regY=50
  word4.x=320
  word4.y=436
  stage_4.x=640

  showHomeBtn(1)
  showHint1(1)
}

function ani3(){
  stage.removeChild(stage_2)
  createjs.Ticker.removeEventListener("tick",setQmark);

}

function ani3end1(){//=======点击触发
  boy.gotoAndPlay("jump")
  TweenLite.from(skyMove,.5,{x:-16})

  TweenLite.to(stage_3,1,{x:-640,ease:Sine.easeNone})
  TweenLite.to(boy,.5,{x:230-150,y:boy.y-20,ease:Sine.easeOut,overwrite:0})
  TweenLite.to(boy,.5,{x:230,y:1000,ease:Sine.easeIn,onComplete:backToAni3,delay:.5})
  TweenLite.to(stage_4,1,{x:0,ease:Sine.easeNone})
}
function backToAni3(){
  //TweenLite.from(skyMove,.5,{x:16})
  TweenLite.to(stage_3,1,{x:0})
  TweenLite.to(stage_4,1,{x:640})
  TweenLite.set(boy,{x:230,y:250,alpha:0})
  TweenLite.to(boy,1,{alpha:1,ease:Elastic.easeOut,delay:1,onComplete:showHomeBtn})
  showHomeBtn(1)
  showHint2(1)
  setFlowerBlow()
}

function ani3end2(){//=======点击触发
  boy.gotoAndPlay("startrun")

  TweenLite.to(boy,.5,{x:boy.x+100,ease:Sine.easeNone,onComplete:ani3jump})
  flyflower()
}
function ani3jump(){

  TweenLite.from(skyMove,1,{x:-16})
  boy.gotoAndPlay("jump")
  TweenLite.to(boy,1,{x:180,y:boy.y+22,onComplete:ani4})
  TweenLite.to(stage_3,1,{x:-640})
  TweenLite.to(stage_4,1,{x:0})
  //setFlowerBlow()
  stage_4.addChild(flowerBlow)
  setTimeout(function(){
    flowerBlow.gotoAndPlay("blow")
  },500)
  
}
var ifani4=0
function ani4(){
  setTimeout(function(){
    boy.gotoAndPlay("walk")
  },200)
  
  TweenLite.to(boy,2,{x:325,y:boy.y-10,delay:.2,onComplete:boyStand,ease:Linear.easeNone})
  //stage_4.addChild(flowerBlow)
  showHomeBtn()
  showHint1(0)
}
function boyStand(){
  if(ifani4==0){
    boy.gotoAndStop("stand")
  }
}

function ani4end(){//====点击触发
  
   createjs.Ticker.removeEventListener("tick",flyingflower);
  ifani4=1
  boy.gotoAndPlay("startrun")
  TweenLite.to(stage_4,2,{x:-640,ease:Linear.easeNone,visible:false})
  ani5()
}

var stage_56=new createjs.Container()
var t500
function ani5(){
  TweenLite.to(boy,1,{x:280,rotation:10})
  stage.addChild(stage_56)
  t500=setInterval("addZi()",250)
  createjs.Ticker.addEventListener("tick",setFire);
  skyMove.x=-16
  showHomeBtn(1)
  $("#flame")[0].play()
  document.getElementById("flame").volume = 0.2;
  setTimeout(function(){
    $("#flame2")[0].play()
    document.getElementById("flame2").volume = 0.2;
  },500)
}

function ani5end(){
  TweenLite.to(boy,1,{x:280,rotation:0})
  ziA=["//image.giccoo.com/projects/your_own_way/img/word6a.png","//image.giccoo.com/projects/your_own_way/img/word6b.png"]
  createjs.Ticker.removeEventListener("tick",setFire);
  $("#flame")[0].pause()
  $("#flame2")[0].pause()
  showHomeBtn(1)
  showHint1(1)
}
function ani6end(){
  skyMove.x=-1
  boy.gotoAndPlay("fall")
  TweenLite.to(boy,1,{y:boy.y+150,rotation:15,onComplete:ani7})
  clearInterval(t500)
  word6break()
  showHomeBtn(2)
  $("#wind")[0].play()
  document.getElementById("wind").volume = 0.3;
  setTimeout(function(){
    $("#wind2")[0].play()
    document.getElementById("wind2").volume = 0.05;
  },900)
}
var stage_7=new createjs.Container()
function ani7(){
  stage.removeChild(stage_56)
  stage.removeChild(stage_6)
  stage.addChild(stage_7)
  setBalloon()
  setCloud()
}

function ani7end(){
  //自由消失,准备进迷茫
  ifLoop=0
  TweenLite.to(balloon,1,{alpha:0,scale:.5,x:640,y:0,onComplete:ani8})
  TweenLite.to(stage_Cloud,.5,{alpha:0,visible:false})
}
var stage_8=new createjs.Container()
function ani8(){
  stage.removeChild(stage_7)
  stage.addChild(stage_8)
  TweenLite.to(boy,1.5,{x:310,y:330,ease:Sine.easeInOut})//,ease:Linear.easeNone
  TweenLite.to(skyMove,1.5,{x:0,y:-16,ease:Linear.easeNone})
  createjs.Ticker.addEventListener("tick",confuse)
  //TweenLite.from(this,10,{confuse_R:600})
  showHomeBtn(1)
  showHint1(1)
}

var stage_9=new createjs.Container()
var word9=new createjs.Bitmap("//image.giccoo.com/projects/your_own_way/img/word9.png")
function ani8end(){
  createjs.Ticker.removeEventListener("tick",confuse)
  
  TweenLite.to(skyMove,1.5,{x:-1,y:0,ease:Linear.easeNone})

  stage.addChild(stage_9)
  word9.regX=95.5
  word9.regY=50.5
  stage_9.addChild(word9)
  word9.x=295+12
  word9.y=510
  TweenLite.from(word9,1.5,{alpha:0,y:1100-300,onComplete:ani9,ease:Linear.easeNone})
  TweenLite.to(boy,1.45,{rotation:-25,x:290+12,y:350,ease:Linear.easeNone})

}

function ani9(){
  TweenLite.set(boy,{rotation:0,x:322+12,y:320})
  console.log("x=",boy.x,"y=",boy.y)
  
  boy.gotoAndPlay("goThink")
  setBubble()
  bubble.gotoAndPlay("think")
  TweenLite.from(bubble,3,{scale:0,ease:Elastic.easeOut,delay:1.5})
  setBubbleDot()
  showHomeBtn(1)
  showHint1(1)
}
var stage_10=new createjs.Container()
var word10=new createjs.Bitmap("//image.giccoo.com/projects/your_own_way/img/word10.png")
var word10b=new createjs.Bitmap("//image.giccoo.com/projects/your_own_way/img/word10b.png")
var t500_flame
function ani9end(){
  ifDotLoop=0
  TweenLite.set(stage_9,{alpha:0,visible:false})
  //TweenLite.to(boy,1,{x:boy.x-52,onComplete:ani10})
  
  boy.gotoAndPlay("standup")
  stage.addChild(stage_10)
  stage_10.addChild(word10)
  stage_10.addChild(word10b)
  word10b.x=word10.x=209+52-40
  word10b.y=word10.y=304+160-2
  word10b.alpha=0
 // TweenLite.from(word10,2,{x:word10.x-150,ease:Elastic.easeOut,onComplete:ani10})
  //TweenLite.from(word10b,.5,{y:1000,ease:Sine.easeIn})
  TweenLite.to(skyMove,1,{x:0,y:32,onComplete:ani10})
  TweenLite.to(word10,1,{x:209,y:304})
  TweenLite.to(word10b,1,{x:209,y:304,alpha:1})
  TweenLite.to(boy,1,{x:boy.x-12,y:boy.y-158})
  createjs.Ticker.addEventListener("tick",stage_shake)
  t500_flame=setInterval(setRocket,250)
  //createjs.Ticker.addEventListener("tick",setRocket)
}

function ani10(){
  //createjs.Ticker.addEventListener("tick",stage_shake)
  //shakeLv=10
  console.log("ani10")
  TweenLite.to(shakeLv,5,{xy:10,t:.5})
  showHomeBtn(1)
  showHint1(1)
  
}
var t500_step
var stage_11=new createjs.Container()
function ani10end(){
  clearInterval(t500_flame)
  //createjs.Ticker.removeEventListener("tick",stage_shake)
  TweenLite.to(word10,1,{y:1100,alpha:0,visible:false})
  TweenLite.to(word10b,1,{y:1100,alpha:0,visible:false})
  TweenLite.to(skyMove,1,{x:-10,y:8})
  boy.gotoAndPlay("jump2")
  TweenLite.to(boy,1,{x:320-140+70,y:270,rotation:-5,onComplete:ani11,ease:Sine.easeIn})
  t500_step=setInterval(setStep,185)
  stage.addChild(stage_11)
  stage.addChild(boy)
  stage.addChild(downText)

}
function ani11(){
  boy.gotoAndPlay("startrun")
  showHomeBtn(1)
  showHint1(1)
}

function ani11end(){
  boy.gotoAndPlay("fall")
  TweenLite.to(boy,1,{rotation:90,y:"+=100",x:"+=180",overwrite:0})
  //TweenLite.to(boy,1,{rotation:45,y:"+=0",x:"+=0",overwrite:0,delay:1})
  clearInterval(t500_step)
  stepDisappear()
  ifStep=0
  skyMove.x=0
  skyMove.y=-16
  setWord12()
  word12.x=320
  word12.y=1800
  word12.alpha=1
  TweenLite.to(word12,1,{y:520,alpha:1,ease:Sine.easeIn,delay:1,onComplete:ani12})
}
function ani12(){
  boy.gotoAndPlay("lay")
  TweenLite.set(boy,{rotation:0,y:"-=40",x:"-=160"})

  TweenLite.to(skyMove,1,{x:-1,y:0})
  TweenLite.to(word12,1,{y:"-=100"}) 
  TweenLite.to(boy,1,{y:"-=100"})
  showHomeBtn(1) 
  showHint1(1)  
}
var word13=new createjs.Bitmap("//image.giccoo.com/projects/your_own_way/img/word13.png")
var stage_13=new createjs.Container()
function ani12end(){
  boy.gotoAndPlay("fall")
  breakWord12()
  boy.y+=50
  stage.addChild(stage_13)
  stage_13.addChild(word13)
  word13.regX=49
  word13.regY=0//88
  word13.x=320
  word13.y=500+500
  word13.alpha=0
  TweenLite.to(word13,1,{y:400,alpha:1,delay:1,onComplete:ani13,ease:Sine.easeIn})
}

function ani13(){
  boy.gotoAndPlay("goSitRain")
  boy.y-=20
  TweenLite.to(skyMove,1,{x:-1,y:0})
  setRain(150)
  createjs.Ticker.addEventListener("tick",moveRain)
  stage.addChild(stage_rain)
  showHomeBtn()
  showHint1(0)
  
  setTimeout(function(){
    document.getElementById("rain").volume = 1;
    document.getElementById("rain2").volume = 1;
  },500)
}
var stage_14=new createjs.Container()
function ani13end(){
  stage.addChild(stage_14)
  show14()
  boy.gotoAndPlay("standup")
}

function ani14(){
  boy.gotoAndPlay("startrun")
  showHomeBtn(1)
  showHint1(1)
  TweenLite.to(skyMove,1,{x:-8})
  TweenLite.to(rainMove,1,{x:-32,deg:45})
}

function ani14end(){
  TweenLite.to(stage_rain,3,{alpha:0,visible:false})
  TweenLite.to(word14,1,{alpha:0})
  TweenLite.to(word15,1,{alpha:0.3})
  //word14.alpha=0
  //word15.alpha=0.3
  word15.y=word14.y
  TweenLite.to(word14b,1,{alpha:0,visible:false})
  TweenLite.to(word15b,1,{alpha:1})
  addBoy()
  showHomeBtn(2)
  showHint1(2)
}
function ani15end(){
  boysStop()
  //video1[0].play()
}
var video_light= new createjs.Bitmap("//image.giccoo.com/projects/your_own_way/img/video_light.png")
var video1=$("#video1")
var video_title= new createjs.Bitmap("//image.giccoo.com/projects/your_own_way/img/video_title.png")
function showMV(){
   //bgm.pause();
   TweenLite.set($("#videoPlayBtn"),{display:"block"})
  for(var i=0;i<boys.length;i++){
    //TweenLite.to(boys[i],1,{y:"+=200"})
    
    if(boys[i].x>320){
      boys[i].gotoAndStop("look2")
    }else{
      boys[i].gotoAndStop("look1")
    }
  }
  // TweenLite.to(word15b,.5,{y:"+=200"})
  // TweenLite.to(word15,.5,{y:"+=200",alpha:0})
  //stage.addChildAt(video_light,stage.numChildren)
  stage.addChild(video_light)
  video_light.scaleX=0
  video_light.scaleY=1
  video_light.regX=143
  video_light.regY=404
  video_light.alpha=0
  video_light.x=320
  video_light.y=1000
  TweenLite.to(video_light,.5,{scaleY:2,scaleX:2,alpha:1})
  TweenLite.set(video1,{display:"block",opacity:0,top:"28%"})
  TweenLite.to(video1,.5,{opacity:1,top:"25%"})

  stage.addChild(video_title)
  video_title.y=-40+20
  TweenLite.from(video_title,1,{alpha:0})


  //video1[0].play()
  showHomeBtn(1)
}
$("#videoPlayBtn").click(function(){
  bgm.pause();
  video1[0].play();
  TweenLite.set($("#videoPlayBtn"),{display:"none"})
})


function hideMV(){
  //video1[0].pause()
  TweenLite.set($("#videoPlayBtn"),{display:"none"})
  TweenLite.to(video1,.99,{top:"50%",opacity:0,display:"none",onComplete:showEnd})
  TweenLite.to(video_light,1,{y:"+=250",visible:false,alpha:0})
  TweenLite.to(word15b,1,{y:"+=250",visible:false,alpha:0})
  for(var i=0;i<boys.length;i++){
    TweenLite.to(boys[i],1,{y:"+=250",visible:false,alpha:0})
  }
  skyMove.y=16
  TweenLite.to(skyMove,1,{y:0})
  TweenLite.to(video_title,1,{y:"+=250",alpha:0})
}

//===var end_bottom=new createjs.Bitmap("//image.giccoo.com/projects/your_own_way/img/end_bottom.png")

var end_bottom=new createjs.Bitmap("//image.giccoo.com/projects/your_own_way/img/end_bottom_b.png")
var end_bottom2=new createjs.Bitmap("//image.giccoo.com/projects/your_own_way/img/end_bottom2.png")
var end_copy=new createjs.Bitmap("//image.giccoo.com/projects/your_own_way/img/end_copy.png")
//===var end_copy1=new createjs.Bitmap("//image.giccoo.com/projects/your_own_way/img/end_copy_1b.png")
var end_copy1=new createjs.Bitmap("//image.giccoo.com/projects/your_own_way/img/end_copy_2b.png")
//===var end_map=new createjs.Bitmap("//image.giccoo.com/projects/your_own_way/img/end_map.jpg")

var end_map1=new createjs.Bitmap("//image.giccoo.com/projects/your_own_way/img/end_map1.jpg")
var end_map2=new createjs.Bitmap("//image.giccoo.com/projects/your_own_way/img/end_map2.jpg")
var end_map3=new createjs.Bitmap("//image.giccoo.com/projects/your_own_way/img/end_map3.jpg")
var end_map4=new createjs.Bitmap("//image.giccoo.com/projects/your_own_way/img/end_map4.jpg")
var end_map5=new createjs.Bitmap("//image.giccoo.com/projects/your_own_way/img/end_map5.jpg")
var end_map6=new createjs.Bitmap("//image.giccoo.com/projects/your_own_way/img/end_map6.jpg")
var end_map7=new createjs.Bitmap("//image.giccoo.com/projects/your_own_way/img/end_map7.jpg")
var end_map8=new createjs.Bitmap("//image.giccoo.com/projects/your_own_way/img/end_map8.jpg")

var endMapA=[end_map1,end_map2,end_map3,end_map4,end_map5,end_map6,end_map7,end_map8]
var stage_endmap=new createjs.Container()

//===var end_mark=new createjs.Bitmap("//image.giccoo.com/projects/your_own_way/img/end_mark.png")

var nowPic=0
var arrowL=new createjs.Bitmap("//image.giccoo.com/projects/your_own_way/img/arrow.png")
var arrowR=new createjs.Bitmap("//image.giccoo.com/projects/your_own_way/img/arrow.png")
function showEnd(){
  video1[0].pause()
  stage.addChild(end_bottom)
  stage.addChild(end_bottom2)
  stage.addChild(end_copy)
  stage.addChild(end_copy1)
  //===stage.addChild(end_map)
  stage.addChild(stage_endmap)
  //===stage.addChild(end_mark)
  end_bottom2.regX=end_bottom.regX=320
  end_bottom2.regY=end_bottom.regY=283
  end_bottom2.x=end_bottom.x=320
  end_bottom2.y=end_bottom.y=1000


  TweenLite.from(end_bottom,1,{alpha:0,y:1300,delay:.5})

  TweenLite.from(end_copy,.5,{scaleY:.75,y:-250,alpha:0})

  end_copy1.alpha=0

  //===end_mark.alpha=0
  end_bottom2.alpha=0


  stage_endmap.alpha=0
  stage_endmap.regX=198
  stage_endmap.regY=123.5
  stage_endmap.x=320
  stage_endmap.y=353

  for(var i=0;i<endMapA.length;i++){
    stage_endmap.addChild(endMapA[i])
    endMapA[i].alpha=0
    if(i==nowPic){
      endMapA[i].alpha=1
    }
  }
  stage_endmap.addChild(arrowL)
  stage_endmap.addChild(arrowR)

  arrowL.x=-250+198
  arrowR.x=250+198
  arrowL.y=arrowR.y=140
  arrowR.regX=arrowL.regX=20
  arrowR.regY=arrowL.regY=26
  arrowR.scaleX=-1

  setInterval(setPicLoop,5000)

  //===end_mark.y=-30

  TweenLite.set($("#endBtn1"),{display:"block"})
  TweenLite.set($("#endBtn2"),{display:"block"})

  TweenLite.to(shareHint[0],1,{opacity:1,onComplete:hintLoop1})
}
$("#endL").click(function(){
  nowPic--
  if(nowPic==-1){
    nowPic=endMapA.length-1
  }
  setPicLoop()
  nowPic++
  if(nowPic==endMapA.length){
    nowPic=0
  }
})
$("#endR").click(function(){
  nowPic++
  if(nowPic==endMapA.length){
    nowPic=0
  }
  setPicLoop()
  nowPic--
  if(nowPic==-1){
    nowPic=endMapA.length-1
  }
})

// arrowL.on("click",function(){
//   console.log("lll")
//   nowPic++
//   if(nowPic==endMapA.length){
//     nowPic=0
//   }
//   setPicLoop()
//   nowPic++
//   if(nowPic==0){
//     nowPic=endMapA.length
//   }
// })
// arrowR.on("click",function(){
//   console.log("rrr")
//   nowPic++
//   if(nowPic==endMapA.length){
//     nowPic=0
//   }
//   setPicLoop()
//   nowPic++
//   if(nowPic==0){
//     nowPic=endMapA.length
//   }
// })
function setPicLoop(){
  nowPic++
  if(nowPic==endMapA.length){
    nowPic=0
  }
  for(var i=0;i<endMapA.length;i++){
    TweenLite.to(endMapA[i],.5,{alpha:0})
    if(i==nowPic){
      TweenLite.to(endMapA[i],.5,{alpha:1})
    }
  }
}

function hintLoop1(){
  TweenLite.to(shareHint[0],1.5,{opacity:0.3,onComplete:hintLoop2})
}
function hintLoop2(){
  TweenLite.to(shareHint[0],1,{opacity:1,onComplete:hintLoop1})
}

var ifbtn1=0
$("#endBtn1").click(function(){
  if(ifbtn1==0){
    showEndLayer()
  }else{
    hideEndLayer()
  }

})

// $("#closeBtn").click(function(){
//   if(ifbtn1==0){
//     showEndLayer()
//   }else{
//     hideEndLayer()
//   }

// })
$("#endBtn2").click(function(){
  window.location.href="http://m.faw-mazda.com/cars/cx4/?utm_source=wangyiyunyinleSSL&utm_content=guanwang&utm_medium=guanwang&utm_campaign=20849691"
})

function showEndLayer(){
  TweenLite.to(end_bottom2,.5,{alpha:.5})
  TweenLite.to(end_copy,.5,{alpha:0})
  TweenLite.to(end_copy1,.5,{alpha:1,delay:.5})
  //===TweenLite.set(end_mark,.5,{y:-30})
  //===TweenLite.to(end_mark,.5,{y:0,alpha:1,delay:.6})
  TweenLite.set(stage_endmap,.5,{scale:.8,alpha:0})
  TweenLite.to(stage_endmap,.5,{scale:1,alpha:1,delay:.5})
  ifbtn1=1
  //TweenLite.set($("#closeBtn"),{display:"block"})
  TweenLite.set($("#endL"),{display:"block"})
  TweenLite.set($("#endR"),{display:"block"})
}

function hideEndLayer(){
  TweenLite.to(end_bottom2,.5,{alpha:0})
  TweenLite.to(end_copy,.5,{alpha:1,delay:.5})
  TweenLite.to(end_copy1,.5,{alpha:0})
  //===TweenLite.set(end_mark,.5,{y:0})
  //===TweenLite.to(end_mark,.5,{y:-30,alpha:0})
  TweenLite.set(stage_endmap,.5,{scale:1,alpha:1})
  TweenLite.to(stage_endmap,.5,{scale:.8,alpha:0})
  ifbtn1=0
  //TweenLite.set($("#closeBtn"),{display:"none"})
  TweenLite.set($("#endL"),{display:"none"})
  TweenLite.set($("#endR"),{display:"none"})
}