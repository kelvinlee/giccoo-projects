
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
   createjs.Ticker.framerage = 50;
   createjs.Ticker.addEventListener("tick",handleTick);
  setSky(50)
  skyMove=[-1,0]
  getStart()
  tick();
}


//======================时间控制

var fps = 30;
var now;
var then = Date.now();
var interval = 1000/fps;
var delta;
window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

function tick() {
　　if(window.requestAnimationFrame)
   {
　　    requestAnimationFrame(tick);
　　    now = Date.now();
　　    delta = now - then;
　　    if (delta > interval) {
        // 这里不能简单then=now，否则还会出现上边简单做法的细微时间差问题。例如fps=10，每帧100ms，而现在每16ms（60fps）执行一次draw。16*7=112>100，需要7次才实际绘制一次。这个情况下，实际10帧需要112*10=1120ms>1000ms才绘制完成。
　　　　    then = now - (delta % interval);
　　　　    handleTick(); // ... Code for Drawing the Frame ...
　　    }
   }
   else
   {
       setTimeout(tick, interval);
　　　　handleTick();
   }
}


//=============================每秒30次的HandleTick

function handleTick(){
  setFootPrints()
  moveSky();
  stage.update();
}

//==================星空==================
var starA=[]
var skyMove=[0,0]
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
    starA[i].x+=skyMove[0]*(starA[i].scaleY*starA[i].scaleY*starA[i].scaleY*starA[i].scaleY)
    starA[i].y+=skyMove[1]*(starA[i].scaleY*starA[i].scaleY*starA[i].scaleY*starA[i].scaleY)

    starA[i].alpha=Math.random()*60

    if(starA[i].x<0){starA[i].x+= 640;starA[i].y=Math.random()*1000}
    if(starA[i].x>640){starA[i].x-=640;starA[i].y=Math.random()*1000}
    if(starA[i].y<0){starA[i].y+=1000;starA[i].x=Math.random()*640}
    if(starA[i].y>1000){starA[i].y-=1000;starA[i].x=Math.random()*640}
  };
  
}

//===================第一页===============
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
  p1ani1()
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
function p1ani1(){
  var t1=5
  screenMove=[0,0]
  skyMove=[-1,0]
  //boy1.x=(320-25)*(6-t1)/6
  TweenLite.to(boy1,t1,{x:320-25,ease:Linear.easeNone,onComplete:p1ani2})

    //=======标题1
  

  for (var i = 1; i < 8; i++) {
    var p1title=new createjs.Bitmap("img/p1title"+i+".png")
    stage.addChild(p1title)
    titleA.push(p1title)

    
    if(i==7){
      TweenLite.from(p1title,3,{y:p1title.y+50,alpha:0,delay:1+i*.5,ease:Back.easeOut,onComplete:p1ani3})
    }else{
      TweenLite.from(p1title,3,{y:p1title.y+50,alpha:0,delay:1+i*.5,ease:Back.easeOut})
    }

  };
}
function p1ani2(){
  screenMove=[-1,0]
  skyMove=[-1.5,0]
}
function p1ani3(){
  for (var i = 1; i < 8; i++) {    
    if(i==7){
      TweenLite.to(titleA[i-1],3,{x:-320,alpha:0,delay:i*0,ease:Linear.easeNone,onComplete:p1ani4})
    }else{
      TweenLite.to(titleA[i-1],3,{x:-320,alpha:0,delay:i*0,ease:Linear.easeNone})
    }

  };
}


function p1ani4(){
  screenMove=[0,0]
  skyMove=[0,3]
  var lookup= new createjs.Bitmap("img/man_lookup.png")
  stage1.addChild(lookup)
  lookup.x=boy1.x
  lookup.y=boy1.y
  stage1.removeChild(boy1)
  boy1.stop()
  TweenLite.to(stage1,4,{y:500})
}