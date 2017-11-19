
$(document).ready(function load (){
	loadWechatConfig();
  	wx.ready(function() {
    var shareContent;
    shareContent = {
      title: "2017德克士100个改变",
      desc: "从数字化进阶智能化，从舒食转向新鲜，从消费升级为尊享",
      link: "http://m.giccoo.com/dicos/",
      imgUrl: "http://m.giccoo.com/dicos/img/ico.jpg",
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

$('body')[0].addEventListener('touchmove', function (event) {event.preventDefault();}, false);//阻止了浏览器默认的下拉事件

var loadWechatConfig = function() {
  var hm, s, url;
  url = encodeURIComponent(window.location.href.split("#")[0]);
  hm = document.createElement('script');
  hm.src = "http://api.giccoo.com/api/config?url=" + url;
  s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(hm, s);
};
//========总


var p1picA=[$("#p1pic1"),$("#p1pic2"),$("#p1pic3"),$("#p1pic4"),$("#p1pic5"),$("#p1pic6"),$("#p1pic7")];



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

var ifLR//判断左右动画还是上下动画
var nowPage=0
var innerBG=$("#innerBG")
var innerW
var innerH

var videoDiv=$("#video1")

//======================loading动画
function loading(){

  TweenLite.from($("#loadingBG"),.5,{opacity:0,delay:.5})

  TweenLite.set($("#loading1"),{x:"-50%",y:"-50%"})
  TweenLite.set($("#loading2"),{x:"-50%",y:"-50%"})
  TweenLite.set($("#loading3"),{x:"-50%",y:"-50%"})

  TweenLite.from($("#loading1"),1,{rotation:100,opacity:-1,scale:0.5,delay:1,overwrite:0,x:"-50%",y:"-50%"})
  TweenLite.from($("#loading2"),1,{opacity:0,scale:-10,delay:1.2,overwrite:0,ease:Elastic.easeOut,x:"-50%",y:"-50%"})
  TweenLite.from($("#loading3"),0.5,{rotation:180,opacity:0,scale:1.5,delay:1.4,overwrite:0,x:"-50%",y:"-50%"})

  TweenLite.to($("#loading1"),10,{rotation:1440,delay:2,x:"-50%",y:"-50%"})
  TweenLite.to($("#loading2"),10,{rotation:-360,delay:2,x:"-50%",y:"-50%"})
  TweenLite.to($("#loading3"),10,{rotation:360,delay:2,x:"-50%",y:"-50%"})

 TweenLite.to(this,12,{loadNum:100,delay:2,onComplete:loadingFinish})//<===========改这里
 
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
      TweenLite.to(p1picA[i],1.5,{scale:1,opacity:1,x:"-=180",y:"-=180",rotationX:0,rotationY:0,z:0,delay:.15*i,ease:Expo.easeOut})
    }else{
      //TweenLite.set(p1picA[i],{opacity:0,x:"-=180"})
      TweenLite.set(p1picA[i],{scale:1,opacity:0,x:"-=180",y:"-=180",rotationX:180,rotationY:180,z:1500,overwrite:0})
      //TweenLite.to(p1picA[i],1.5,{opacity:1,x:"+=180",delay:.15*i,ease:Expo.easeOut})
      TweenLite.to(p1picA[i],1.5,{scale:1,opacity:1,x:"+=180",y:"+=180",rotationX:0,rotationY:0,z:0,delay:.15*i,ease:Expo.easeOut})
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
  document.getElementById('audio').play()

  //屏幕自适应
  screenW=document.body.offsetWidth 
  screenH=document.body.offsetHeight
  if(screenW/screenH>=1234/2198){//胖屏幕，bg上下超出

    doorW=screenW
    doorH=screenW/1234*2198
    ifLR=1
    TweenLite.set(doorBG,{y:0})

  }else{//瘦屏幕，bg左右超出

    doorW=screenH/2198*1234
    doorH=screenH
    ifLR=0
    TweenLite.set(doorBG,{x:screenW-doorW})
  }

  doorBG.css({width:doorW,height:doorH})



})








//===============门口动画 page2





function page2in(){
  $("#audioPlay").css({display:"block"})
  // document.getElementById('audio').play()
  if(ifLR==1){//上下超出，上下移动
    TweenLite.set(doorBG,{y:screenH-doorH,onComplete:showZoomBtn})
    TweenLite.from(doorBG,3,{y:0})
  }else{
    TweenLite.set(doorBG,{x:0})
    TweenLite.from(doorBG,3,{x:screenW-doorW,onComplete:showZoomBtn})
  }


}

var videoH
var videoW


function page2zoomIn(){
  nowPage=1
  TweenLite.set($('#zoom'),{display:"none"})
  TweenLite.to($('#p2t'),1,{opacity:0,display:"none"})

  doorW=screenW/640*1234
  doorH=screenW/640*2198

  TweenLite.to(doorBG,2,{x:screenW/2-doorW*0.3185,y:screenH/2-doorH*0.707,width:doorW,height:doorH,ease:Quad.easeOut,onComplete:page2zoomIn2})
}

var foodW
var foodH
function page2zoomIn2(){

  doorW=screenW/640*1234*2
  doorH=screenW/640*2198*2

  TweenLite.to(doorBG,1,{display:"none",opacity:0,x:screenW/2-doorW*0.3185+80,y:screenH/2-doorH*0.707-80,width:doorW,height:doorH,ease:Quad.easeIn,onComplete:page3in})
  $("#page3").css({display:"block"})
  TweenLite.set($("#page2"),{display:"none",delay:1})
  innerH=screenH
  innerW=screenH/1000*1606
  TweenLite.set(innerBG,{x:0,y:0,width:innerW,height:innerH})

  videoW=innerW/1606*390
  videoH=innerH/1000*178
  TweenLite.set(videoDiv,{x:620/1000*innerH,y:178/1000*innerH,width:videoW,height:videoH})
  TweenLite.set($("#videoA"),{width:videoW,height:videoH})

  foodH=screenH*0.151
  foodW=screenH*0.151
  TweenLite.set($("#p4bg"),{x:innerW*0.3717,y:innerH*0.397,width:foodW,height:foodH,opacity:0})
  //TweenLite.set($("#p4door"),{x:innerW*0.3717,y:innerH*0.397,width:foodW,height:foodH,opacity:0})
  // alert(foodW)

}



//===============室内动画 page3


function page3in(){
  TweenLite.to(innerBG,6,{x:screenW-innerW+1,ease:Quad.easeInOut})
  //document.getElementById('videoA').play()
  showHand()

}
function showHand(){
  $("#phone").css({display:"block"})
  $("#screen2").css({display:"none"})
  $("#screen3").css({display:"none"})
  $("#screen4").css({display:"none"})
  $("#handR2").css({display:"none"})
  $("#p3t").css({display:"block"})
  TweenLite.from($("#handL"),1,{y:"+=500",x:"-=500",opacity:0,delay:3,onComplete:click1})
  TweenLite.from($("#screen1"),1,{y:"+=500",x:"-=500",opacity:0,delay:3})
  TweenLite.from($("#handR1"),1,{y:"+=500",x:"+=500",opacity:0,delay:3.8})
  TweenLite.from($("#p3t"),2,{y:"+=50",opacity:0,delay:3.8,ease:Elastic.easeOut})
}
function click1(){
  TweenLite.set($("#screen2"),{display:"block",opacity:0})
  TweenLite.set($("#screen3"),{display:"block",opacity:0})
  TweenLite.set($("#screen4"),{display:"block",opacity:0})
  TweenLite.set($("#handR2"),{display:"block",opacity:0})


  TweenLite.to($("#screen2"),0.5,{opacity:1,delay:1.15})

  TweenLite.set($("#handR1"),{opacity:0,delay:1,overwrite:0})
  TweenLite.set($("#handR2"),{opacity:1,delay:1,overwrite:0})

  TweenLite.set($("#handR1"),{opacity:1,delay:1.15,overwrite:0})
  TweenLite.set($("#handR2"),{opacity:0,delay:1.15,overwrite:0})



  TweenLite.to($("#screen3"),0.5,{opacity:1,delay:2.15})
  
  TweenLite.set($("#handR1"),{opacity:0,delay:2,overwrite:0})
  TweenLite.set($("#handR2"),{opacity:1,delay:2,overwrite:0})

  TweenLite.set($("#handR1"),{opacity:1,delay:2.15,overwrite:0})
  TweenLite.set($("#handR2"),{opacity:0,delay:2.15,overwrite:0})


  TweenLite.to($("#screen4"),0.5,{opacity:1,delay:3.15,onComplete:hideHand})

  
  TweenLite.set($("#handR1"),{opacity:0,delay:3,overwrite:0})
  TweenLite.set($("#handR2"),{opacity:1,delay:3,overwrite:0})

  TweenLite.set($("#handR1"),{opacity:1,delay:3.15,overwrite:0})
  TweenLite.set($("#handR2"),{opacity:0,delay:3.15,overwrite:0})

  TweenLite.to($("#handR1"),.8,{y:"+=500",x:"+=200",delay:3.15,ease:Expo.easeIn})
}

function hideHand(){
  TweenLite.to($("#phone"),.8,{y:"+=1000",x:"-=100",delay:.5,ease:Expo.easeIn})

  TweenLite.to(innerBG,2,{x:screenW/2-innerW*0.5087,y:screenH/2-innerH*0.447,scale:1.2,delay:1,ease:Quad.easeInOut,onComplete:p3end})
  TweenLite.to($("#p3t"),1,{opacity:0,display:"none",delay:1})
}

function p3end(){
  $("#p3t2").css({display:"block"})
  TweenLite.from($("#p3t2"),1.5,{y:"-=50",opacity:0,delay:0,ease:Elastic.easeOut})
  TweenLite.set($('#zoom'),{display:"block"})
}


function page3zoomIn(){
  nowPage=2
   TweenLite.set($('#zoom'),{display:"none"})
   TweenLite.set($("#p3t2"),{display:"none"})

   innerW/=0.151
   innerH/=0.151

   TweenLite.to(innerBG,1,{scale:1,width:innerW,height:innerH,x:screenW/2-0.4191*innerW,y:screenH/2-.473*innerH})

   //TweenLite.to($("#p4bg"),1,{opacity:1})
   //TweenLite.to($("#p4door"),1,{opacity:1})

   TweenLite.to($("#p4bg"),1,{x:innerW*0.3717,y:innerH*0.397,width:foodW/0.151,height:foodH/0.151,opacity:1,onComplete:openDoor})
   //TweenLite.to($("#p4door"),1,{x:innerW*0.3717,y:innerH*0.397,width:foodW/0.151,height:foodH/0.151,opacity:1,onComplete:openDoor}) 
   

}

function openDoor(){
  //TweenLite.set($("#page4"),{display:"block"})
  //TweenLite.set($("#p4door"),{"perspective":300,"-webkit-perspective":300,"transform-style":"preserve-3d","-webkit-transform-style":"preserve-3d"})
  TweenLite.set($("#p4door"),{display:"none"})
  TweenLite.set($("#p4door2"),{display:"block",width:screenH,opacity:5})

  //TweenLite.to($("#p4door2"),2,{rotationX:90*0.685,z:-screenH/3*0.596,top:"20.91%",display:"none",opacity:0,ease:Cubic.easeIn,onComplete:showP5})//23
  TweenLite.to($("#p4door2"),2,{rotationX:70,scale:0.45,display:"none",opacity:0,ease:Cubic.easeIn,onComplete:showP5})
}

function showP5(){
   TweenLite.set($("#page5"),{display:"block"})
   TweenLite.from($("#p5food"),.5,{y:"+=200",opacity:0,delay:1-1+1})
   TweenLite.from($("#p5logo"),1.5,{y:"-=100",opacity:0,ease:Elastic.easeOut,delay:1.2-1+1})
   TweenLite.from($("#p5bg"),.5,{y:"-=1000",opacity:0,delay:1.4-1})
   TweenLite.from($("#p5t"),1.5,{y:"-=100",opacity:0,ease:Elastic.easeOut,delay:1.2-1+1-.1})
   TweenLite.set($('#zoom'),{display:"block",delay:1.5-1,top:"-12%",left:"10%"})

}



var markH
var markW
var ifClickA=[0,0,0,0]

function page6in(){
 // alert("最后出鸡子了！") 
   TweenLite.to($("#p5food"),.5,{y:"+=200",opacity:0})
   TweenLite.to($("#p5logo"),.5,{y:"-=100",opacity:0})
   TweenLite.to($("#p5t"),.5,{y:"-=100",opacity:0})
   TweenLite.to($("#p5bg"),.5,{opacity:0})

   TweenLite.set($("#page5"),{display:"none",delay:0.5})
   TweenLite.set($("#page6"),{display:"block"})
   TweenLite.set($('#zoom'),{display:"none"})
   TweenLite.set($("#page3"),{display:"none"})


   TweenLite.from($("#p6t1"),1.5,{y:"+=50",opacity:0,ease:Elastic.easeOut,delay:0.5+0.1*0})
   TweenLite.from($("#p6t2"),1.5,{y:"+=50",opacity:0,ease:Elastic.easeOut,delay:0.5+0.1*1})
   TweenLite.from($("#p6t3"),1.5,{y:"+=50",opacity:0,ease:Elastic.easeOut,delay:0.5+0.1*2})
   TweenLite.from($("#chicken"),1.5,{y:"+=50",opacity:0,ease:Elastic.easeOut,delay:0.5+0.1*3})

   markW=screenW
   markH=screenW/640*652

   TweenLite.set($("#p6mark4"),{width:markW,height:markH})

   TweenLite.set($("#markV1"),{width:markW/640*109,height:markW/640*109,left:"14.53%",top:"65.80%"})
   TweenLite.set($("#markV2"),{width:markW/640*109,height:markW/640*109,left:"74.22%",top:"68.4%"})
   TweenLite.set($("#markX1"),{width:markW/640*109,height:markW/640*109,left:"12.19%",top:"4.75%"})//111
   TweenLite.set($("#markX2"),{width:markW/640*109,height:markW/640*109,left:"78.13%",top:"12.58%"})




   TweenLite.from($("#p6mark4"),1.5,{opacity:0,delay:0.5+0.1*4})



}

$("#markV1").click(function(){
  if(ifClickA[0]==0){
    ifClickA[0]=1
    TweenLite.set($("#markV1"),{opacity:1})
    TweenLite.from($("#markV1"),1.5,{opacity:0,scale:0,ease:Elastic.easeOut})
    checkResult()
  }
});
$("#markV2").click(function(){
  if(ifClickA[1]==0){
    ifClickA[1]=1
    TweenLite.set($("#markV2"),{opacity:1})
    TweenLite.from($("#markV2"),1.5,{opacity:0,scale:0,ease:Elastic.easeOut})
    checkResult()
  }
});
$("#markX1").click(function(){
  if(ifClickA[2]==0){
    ifClickA[2]=1
    TweenLite.set($("#markX1"),{opacity:1})
    TweenLite.from($("#markX1"),1.5,{opacity:0,scale:0,ease:Elastic.easeOut})
    //checkResult()
  }
});
$("#markX2").click(function(){
  if(ifClickA[3]==0){
    ifClickA[3]=1
    TweenLite.set($("#markX2"),{opacity:1})
    TweenLite.from($("#markX2"),1.5,{opacity:0,scale:0,ease:Elastic.easeOut})
    //checkResult()
  }
});


function checkResult(){

  if((ifClickA[0]+ifClickA[1])==2){
    //alert("ddd")
    TweenLite.set($("#p6hint"),{display:"block",delay:0})
    TweenLite.from($("#p6hint"),1.5,{opacity:0,y:"+=100",ease:Elastic.easeOut,onComplete:hideResult,delay:0})
    
    TweenLite.set($("#chicken"),{display:"none",delay:1.5})
    TweenLite.set($("#p6t1"),{display:"none",delay:1.5})
    TweenLite.set($("#p6t2"),{display:"none",delay:1.5})
    TweenLite.set($("#p6t3"),{display:"none",delay:1.5})
    TweenLite.set($("#p6mark4"),{display:"none",delay:1.5})
    TweenLite.set($("#markV1"),{display:"none",delay:1.5})
    TweenLite.set($("#markV2"),{display:"none",delay:1.5})
    TweenLite.set($("#markX1"),{display:"none",delay:1.5})
    TweenLite.set($("#markX2"),{display:"none",delay:1.5})

    TweenLite.set($("#page7"),{display:"block",delay:1.5,onComplete:setPage7})

    
  }
}


function hideResult(){
  TweenLite.set($("#p6hint"),{opacity:0,y:"-=100",display:"none"})
}





function setPage7(){
  TweenLite.set($('#btn1'),{display:"block"})
  TweenLite.set($('#btn2'),{display:"block"})
}


$("#btn1").click(function(){
  window.location.href="http://prj.verystar.cn/dicos-futureshop/index?wxqr_scene_id=113";
  
});


$("#btn2").click(function(){
  TweenLite.set($('#sharePage'),{display:"block"})
  TweenLite.from($('#sharePage'),1,{opacity:0})
  
});

$("#sharePage").click(function(){
  TweenLite.to($('#sharePage'),.5,{opacity:0,display:"none"})
  
});

//===============放大按钮动画=========



function showZoomBtn(){
  TweenLite.set($('#zoom'),{display:"block"})
  TweenLite.from($('#zoom'),1,{opacity:0})

  TweenLite.set($('#arrowL'),{opacity:0,x:"-=0",y:"-=0"})
  TweenLite.set($('#OL'),    {opacity:0,x:"-=0",y:"-=0"})
  TweenLite.set($('#arrowR'),{opacity:0,x:"+=0",y:"+=0"})
  TweenLite.set($('#OR'),    {opacity:0,x:"+=0",y:"+=0"})
  zoomAni1()
}

function zoomAni1(){


  TweenLite.to($('#arrowL'),1,{opacity:1,x:"-=10",y:"+=7.5",rotation:"+=0"  })
  TweenLite.to($('#OL'),    1,{opacity:1,x:"-=10",y:"+=7.5",rotation:"+=180",delay:.15})
  TweenLite.to($('#arrowR'),1,{opacity:1,x:"+=10",y:"-=7.5",rotation:"+=0"  })
  TweenLite.to($('#OR'),    1,{opacity:1,x:"+=10",y:"-=7.5",rotation:"+=180",delay:.15,onComplete:zoomAni2})
}

function zoomAni2(){

  TweenLite.to($('#arrowL'),1,{opacity:0,x:"-=20",y:"+=15",rotation:"+=0"  })
  TweenLite.to($('#OL'),    1,{opacity:0,x:"-=20",y:"+=15",rotation:"+=180",delay:.15})
  TweenLite.to($('#arrowR'),1,{opacity:0,x:"+=20",y:"-=15",rotation:"+=0"  })
  TweenLite.to($('#OR'),    1,{opacity:0,x:"+=20",y:"-=15",rotation:"+=180",delay:.15,onComplete:zoomAni3})
}

function zoomAni3(){
  TweenLite.to($('#arrowL'),0.1,{opacity:0,x:"+=30",y:"-=22.5"})
  TweenLite.to($('#OL'),    0.1,{opacity:0,x:"+=30",y:"-=22.5"})
  TweenLite.to($('#arrowR'),0.1,{opacity:0,x:"-=30",y:"+=22.5",onComplete:zoomAni1})
  TweenLite.to($('#OR'),    0.1,{opacity:0,x:"-=30",y:"+=22.5"})
}





//===============放大手势============



    var touchstartevent = [];
    var toucholdevent = [];
    //window.hinthide = false;
    $('#zoom').on('touchstart', function (e) {
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
      if (lengthFun(toucholdevent) - lengthFun(touchstartevent) > 50 ) {
        //alert("zoomIn")
        if (nowPage==0) {
          //document.getElementById('videoA').play()
          page2zoomIn()
          
        }else if(nowPage==1){
          page3zoomIn()
        }else if(nowPage==2){
          page6in()
        };

      }
      touchstartevent = [{}, {}];
      toucholdevent = [{}, {}];
    });
    function lengthFun(e) {
      return Math.sqrt((e[0].pageX - e[1].pageX) * (e[0].pageX - e[1].pageX) + (e[0].pageY - e[1].pageY) * (e[0].pageY - e[1].pageY));
    }

    $('#zoom').click(function(){
        if (nowPage==0) {
           //document.getElementById('videoA').play()
          page2zoomIn()
        }else if(nowPage==1){
          page3zoomIn()
        }else if(nowPage==2){
          page6in()
        };
    });



  
//==========音乐=======
var audio;
    function initAudio(id){
        audio=document.getElementById(id);
    };

    window.onload=function(){
        initAudio("audio");
         if (audio.paused) {
            $("#audioPlay").removeClass("stopM").addClass("playM")
            //this.style.backgrundImage='url("../img/musicOn.png")';
        }else{
            $("#audioPlay").removeClass("playM").addClass("stopM")
            //this.style.backgrundImage='url("../img/musicOff.png")';
        };
    }
    var ap=document.getElementById("audioPlay");
    $("#audioPlay").on("click",function(){
        if (audio.paused) {
            audio.play();
            $("#audioPlay").removeClass("playM").addClass("stopM")
            //this.style.backgrundImage='url("../img/musicOn.png")';
        }else{
            audio.pause();
            $("#audioPlay").removeClass("stopM").addClass("playM")
            //this.style.backgrundImage='url("../img/musicOff.png")';
        };
    });



