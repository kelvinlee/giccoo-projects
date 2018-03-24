
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
  // createjs.Ticker.framerage = 50;
  // createjs.Ticker.addEventListener("tick",handleTick);
  setSky(1)
  skyMove=[-31.3,0]
  getStart()
  handleTick()
}

function handleTick(){
  moveSky();
  
  stage.update();
  requestAnimationFrame(function(){
    handleTick();
  })
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
    Astar.y=Math.random()*640
    Astar.scaleX=Astar.scaleY=Math.random()*.8+.2
  };
}

function moveSky(){
  for (var i = 0; i < starA.length; i++) {
    starA[i].x+=skyMove[i]*starA[i].scaleX*starA[i].scaleX*starA[i].scaleX*starA[i].scaleX
    console.log(starA[i].x);
    // starA[i].y+=skyMove[1]*starA[i].scaleX*starA[i].scaleX*starA[i].scaleX*starA[i].scaleX

    if(starA[i].x<0){starA[i].x = 640}
    // if(starA[i].x>640){starA[i].x-=640}
    // if(starA[i].y<0){starA[i].y+=640}
    // if(starA[i].y>640){starA[i].y-=640}
  };
  
}

//====================================
function getStart(){

  // TweenLite.to(sFire,.5,{scale:1.5*Math.random()+.5,overwrite:0})
  // TweenLite.to(sFire,.25,{alpha:0,delay:.25})
}