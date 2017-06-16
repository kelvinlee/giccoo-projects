
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

  setup1();



});

var pen= new Image();
pen.src="img/pen.png"
var can1=$("#can1");
var ctx=can1[0].getContext("2d");
var screenW=document.documentElement.clientWidth; 
var screenH=document.documentElement.clientHeight; 
var nowX=0
var nowY=0
var lastX=0
var lastY=0
var dx=0
var dy=0
var speed=0

function setup1(){
  pen.onload=function(){
    setup();
  }
}


var loadWechatConfig = function() {
  var hm, s, url;
  url = encodeURIComponent(window.location.href.split("#")[0]);
  hm = document.createElement('script');
  hm.src = "http://api.giccoo.com/api/config?url=" + url;
  s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(hm, s);
};

document.querySelector('body').addEventListener("touchmove",stopMove,false)
function stopMove(event){
  event.preventDefault()
}

function setup(){



  ctx.drawImage(pen,-10,-10,50,50);
  can1[0].addEventListener('touchstart',startTouch,false)
  can1[0].addEventListener('touchmove',moveTouch,false)
  can1[0].addEventListener('touchend',endTouch,false)




}

function startTouch(event){
  lastX=event.touches[0].clientX/screenW*640
  lastY=event.touches[0].clientY/screenW*640
      
}
function moveTouch(event){

  nowX=event.touches[0].clientX/screenW*640
  nowY=event.touches[0].clientY/screenW*640

 // ctx.drawImage(pen,nowX,nowY,50,50);

  dx=nowX-lastX
  dy=nowY-lastY

  speed=Math.sqrt(dx*dx+dy*dy)/(640*640*2)*8000//0-1
  console.log(speed)



  for (var i = 0; i < 50; i++) {
    ctx.drawImage(pen,lastX+dx/50*i-(50-50*speed)/2,lastY+dy/50*i-(50-50*speed)/2,50-50*speed,50-50*speed);
  };

  lastX=event.touches[0].clientX/screenW*640
  lastY=event.touches[0].clientY/screenW*640
}
function endTouch(event){
    
} 