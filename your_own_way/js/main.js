
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
    //console.log(starA[i].x);
    starA[i].y+=skyMove[1]*(starA[i].scaleY*starA[i].scaleY*starA[i].scaleY*starA[i].scaleY)



    starA[i].alpha=Math.random()*60


    if(starA[i].x<0){starA[i].x+= 640;starA[i].y=Math.random()*1000}
    if(starA[i].x>640){starA[i].x-=640;starA[i].y=Math.random()*1000}
    if(starA[i].y<0){starA[i].y+=1000;starA[i].x=Math.random()*640}
    if(starA[i].y>1000){starA[i].y-=1000;starA[i].x=Math.random()*640}
  };
  
}

//===================走路===============
var walk1bA=[]
function getStart(){
  for (var i = 0; i <69 ; i++) {
    if(i<9){
      var str="img/walk1/walk000"+(i+1).toString()+".png"
    }else{
      var str="img/walk1/walk00"+(i+1).toString()+".png"
    }
    walk1bA.push(str)
  };


  var manWalk_b = new createjs.SpriteSheet({
              "images": walk1bA, //动画人物图片来自base64编码字符串
              "frames": {"height": 100,  "width": 50},
              "animations": { run: [0,68]}
          });
          
      var character = new createjs.Sprite(manWalk_b, "run");
      character.framerate = 10; 
      character.play();//播放动画
      stage.addChild(character);
      character.x=320
      character.y=800
      

  
}