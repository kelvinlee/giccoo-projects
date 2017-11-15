
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
  loading();




});


var loadWechatConfig = function() {
  var hm, s, url;
  url = encodeURIComponent(window.location.href.split("#")[0]);
  hm = document.createElement('script');
  hm.src = "http://api.giccoo.com/api/config?url=" + url;
  s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(hm, s);
};
//========总

var container=$('body')
TweenMax.set(container, {perspective:500,"-webkit-perspective": 500})
var p1picA=[$("#p1pic1"),$("#p1pic2"),$("#p1pic3"),$("#p1pic4"),$("#p1pic5"),$("#p1pic6"),$("#p1pic7")];


//======================loading动画
var loadNum=0.0
var setInt= window.setInterval(function(){
  $("#loadingNum").text(parseInt(loadNum));
 },100);
// var loop1=1
var screenW//屏幕宽
var screenH//屏幕高
var doorBG=$("#fdoor")
var doorW//门背景宽
var doorH//门背景高


function loading(){

  TweenLite.from($("#loadingBG"),.5,{opacity:0,delay:.5})

  TweenLite.set($("#loading1"),{x:"-50%",y:"-50%"})
  TweenLite.set($("#loading2"),{x:"-50%",y:"-50%"})
  TweenLite.set($("#loading3"),{x:"-50%",y:"-50%"})

  TweenLite.from($("#loading1"),1,{rotation:100,opacity:-1,scale:0.5,delay:1,overwrite:0,x:"-50%",y:"-50%"})
  TweenLite.from($("#loading2"),1,{opacity:0,scale:-10,delay:1.2,overwrite:0,ease:Elastic.easeOut,x:"-50%",y:"-50%"})
  TweenLite.from($("#loading3"),0.5,{rotation:180,opacity:0,scale:1.5,delay:1.4,overwrite:0,x:"-50%",y:"-50%"})

  TweenLite.to($("#loading1"),10,{rotation:1440,delay:2,x:"-50%",y:"-50%"})
  TweenLite.to($("#loading2"),10,{rotationZ:-360,delay:2,x:"-50%",y:"-50%"})
  TweenLite.to($("#loading3"),10,{rotation:360,delay:2,x:"-50%",y:"-50%"})

 TweenLite.to(this,1,{loadNum:300,delay:2,onComplete:loadingFinish})//<===========改这里
 
}


function loadingFinish(){
  //alert("loading完成");
  TweenLite.to($(loadingPage),1,{opacity:0,display:"none",onComplete:page1in})
  $("#page1").css({display:"block"})
  window.clearInterval(setInt);
  for (var i = 0; i < p1picA.length; i++) {
      TweenLite.set(p1picA[i],{opacity:0})
  };
   TweenLite.set($("#p1pic8"),{opacity:0})
   TweenLite.set($("#p1t"),{opacity:0})
}
//===================loading动画结束


function page1in(){
  //alert("第一页显示")
  for (var i = 0; i < p1picA.length; i++) {
    if(i==0||i==1||i==5||i==6){
      TweenLite.set(p1picA[i],{scale:1,opacity:0,x:"+=180",y:"+=180",rotationX:180,rotationY:180,z:1500,overwrite:0})
      TweenLite.to(p1picA[i],5.5,{scale:1,opacity:1,x:"-=180",y:"-=180",rotationX:0,rotationY:0,z:0,delay:.15*i,ease:Expo.easeOut})
    }else{
      //TweenLite.set(p1picA[i],{opacity:0,x:"-=180"})
      TweenLite.set(p1picA[i],{scale:1,opacity:0,x:"-=180",y:"-=180",rotationX:180,rotationY:180,z:1500,overwrite:0})
      //TweenLite.to(p1picA[i],1.5,{opacity:1,x:"+=180",delay:.15*i,ease:Expo.easeOut})
      TweenLite.to(p1picA[i],5.5,{scale:1,opacity:1,x:"+=180",y:"+=180",rotationX:0,rotationY:0,z:0,delay:.15*i,ease:Expo.easeOut})
    }
  };
  TweenLite.set($("#p1pic8"),{opacity:1})
  TweenLite.from($("#p1pic8"),1.2,{opacity:0,scale:2.2,delay:1.5,ease:Expo.easeOut,onComplete:page1done})


}
function page1done(){

  $(".p1btn").css({display:"block",opacity:0})
  $("#p1t").css({opacity:0})

  TweenLite.to($("#p1t"),1,{opacity:1,ease:Expo.easeOut})//,onComplete:page1Tloop

  TweenLite.to($("#p1btn3"),1,{opacity:1,scale:.6,delay:0.1,ease:Back.easeOut})
  TweenLite.to($("#p1btn2"),1,{opacity:1,scale:.6,delay:0.2,ease:Back.easeOut})
  TweenLite.to($("#p1btn1"),1,{opacity:1,scale:.6,delay:0.3,ease:Back.easeOut})
  TweenLite.to($("#p1btn4"),1,{opacity:1,scale:.6,delay:0.4,ease:Back.easeOut,onComplete:page1loop})

}
// function page1Tloop(){
//   TweenLite.to($("#p1t"),1.85,{opacity:.3,onComplete:page1TloopB})
// }
// function page1TloopB(){
//   TweenLite.to($("#p1t"),1.85,{opacity:1,onComplete:page1Tloop})
// }
function page1loop(){
  // if(loop1==1){
    TweenLite.to($("#p1btn3"),.3,{opacity:1,scale:.9,rotation:"+=30",delay:0.0,ease:Back.easeOut})
    TweenLite.to($("#p1btn2"),.3,{opacity:1,scale:.9,rotation:"-=30",delay:0.05,ease:Back.easeOut})
    TweenLite.to($("#p1btn1"),.3,{opacity:1,scale:.9,rotation:"-=30",delay:0.10,ease:Back.easeOut})
    TweenLite.to($("#p1btn4"),.3,{opacity:1,scale:.9,rotation:"+=30",delay:0.15,ease:Back.easeOut,onComplete:page1loopB})
  // }
}

function page1loopB(){
  // if(loop1==1){
    TweenLite.to($("#p1btn3"),1,{opacity:1,scale:.6,rotation:"+=60",delay:0.10,ease:Back.easeOut})
    TweenLite.to($("#p1btn2"),1,{opacity:1,scale:.6,rotation:"-=60",delay:0.20,ease:Back.easeOut})
    TweenLite.to($("#p1btn1"),1,{opacity:1,scale:.6,rotation:"-=60",delay:0.30,ease:Back.easeOut})
    TweenLite.to($("#p1btn4"),1,{opacity:1,scale:.6,rotation:"+=60",delay:0.40,ease:Back.easeOut,onComplete:page1loop})
  // }
}

$("#page1").click(function(){
 // alert("下一页")

 TweenLite.killTweensOf($("#p1btn1"))
 TweenLite.killTweensOf($("#p1btn2"))
 TweenLite.killTweensOf($("#p1btn3"))
 TweenLite.killTweensOf($("#p1btn4"))
 // loop1=0
  TweenLite.to($("#p1btn3"),.4,{opacity:0,scale:1.6,rotation:"+=0",delay:0.10-0.1,display:"none"})
  TweenLite.to($("#p1btn2"),.4,{opacity:0,scale:1.6,rotation:"-=0",delay:0.15-0.1,display:"none"})
  TweenLite.to($("#p1btn1"),.4,{opacity:0,scale:1.6,rotation:"-=0",delay:0.20-0.1,display:"none"})
  TweenLite.to($("#p1btn4"),.4,{opacity:0,scale:1.6,rotation:"+=0",delay:0.25-0.1,display:"none"})

  TweenLite.to($("#page1"),.4,{delay:0.3,opacity:0,display:"none",onComplete:page2in})
  $("#page2").css({display:"block"})


  //屏幕自适应
  screenW=document.body.offsetWidth 
  screenH=document.body.offsetHeight
  if(screenW/screenH>=1234/2198){

    doorW=screenW
    doorH=screenW/1234*2198

  }else{

    doorW=screenH/2198*1234
    doorH=screenH

  }

  doorBG.css({width:doorW,height:doorH})



})

//===============门口动画 page2

    var touchstartevent = [];
    var toucholdevent = [];
    //window.hinthide = false;
    $('#page2').on('touchstart', function (e) {
      touchstartevent = [{}, {}];
      toucholdevent = [{}, {}];
    }).on('touchmove', function (e) {
      if (e.originalEvent.touches.length >= 2) {
        toucholdevent[0].pageX = e.originalEvent.touches[0].pageX;
        toucholdevent[0].pageY = e.originalEvent.touches[0].pageY;
        toucholdevent[1].pageX = e.originalEvent.touches[1].pageX;
        toucholdevent[1].pageY = e.originalEvent.touches[1].pageY;
        if (!touchstartevent[0].pageY) {
          touchstartevent[0].pageX = e.originalEvent.touches[0].pageX;
          touchstartevent[0].pageY = e.originalEvent.touches[0].pageY;
          touchstartevent[1].pageX = e.originalEvent.touches[1].pageX;
          touchstartevent[1].pageY = e.originalEvent.touches[1].pageY;
        }
      }
    }).on('touchend', function (e) {
      if (!touchstartevent[0].pageY) return;
      if (lengthFun(toucholdevent) - lengthFun(touchstartevent) > 100 ) {
        //window.gameEnd = true;
        //stage.children[0].play();
        alert("zoomIn")
      }
      touchstartevent = [{}, {}];
      toucholdevent = [{}, {}];
    });
    function lengthFun(e) {
      return Math.sqrt((e[0].pageX - e[1].pageX) * (e[0].pageX - e[1].pageX) + (e[0].pageY - e[1].pageY) * (e[0].pageY - e[1].pageY));
    }



function page2in(){
  
}
  


