
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
var bgAll= new createjs.Shape()


function initAll(){
  document.getElementById("mainCanvas").width=640//screenW//640
  document.getElementById("mainCanvas").height=screenH/screenW*640
  //screenW=640
  screenH=document.getElementById("mainCanvas").height
  createjs.Ticker.framerate = 30;
  createjs.Ticker.addEventListener("tick",handleTick);
  bgAll.graphics.beginFill("#ffacc6").drawRect(0,0,640,screenH);
  stage.addChild(bgAll)
  ani1()
}
function handleTick(){
  stage.update();
}

var stage_1=new createjs.Container()
function ani1(){
  stage.addChild(stage_1)
  setPage1()
  ani1_showQ()
  setFlyKey()
  showBtn(4)
  addMask()
}

function ani1end(){
  ifkey=0
  stage_1.removeChild(blackScreen)
  //TweenLite.to(stage_1,.5,{y:-screenH,onComplete:ani2})
  TweenLite.to(p1Mask,.5,{scale:0,onComplete:ani2})
  setPage2()
  showPage2()
}
function removeStage1(){
  stage.removeChild(stage_1)
  stage.removeChild(p1Mask)
}
function ani2(){
  removeStage1()
}
function ani2end(){
  console.log("消失！！！！")
  //TweenLite.to(p2btn3,.5,{alpha:0,scale:0.5})
  stage.removeChild(stage_2)
  ani3()
}
function ani3(){
  setPage3()
  p3addMask()
  showBtn(4)
}
function ani3end(){
  console.log("gogogo")
  ifp3t=0
  stage.removeChild(stage_3)
  setPage4()
  TweenLite.set($("#logo"),{display:"none"})
  stage.removeChild(blackScreen)
  
  TweenLite.set($("#p4L"),{display:"block"})
  TweenLite.set($("#p4R"),{display:"block"})
}