
$(document).ready(function load (){
  iniListenSound()
	loadWechatConfig();
  	wx.ready(function() {
    var shareContent;
    shareContent = {
      title: "你的美妆预算花对地方了吗？",
      desc: "",
      link: "http://m.giccoo.com/qq_makeup/",
      imgUrl: "http://m.giccoo.com/qq_makeup/img/ico.jpg",
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


//$('body')[0].addEventListener('touchmove', function (event) {event.preventDefault();}, false);//阻止了浏览器默认的下拉事件
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
  setTimeout(setSlide,4000)
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
  
  setPage4()
  TweenLite.set($("#logo"),{display:"none"})
  stage.removeChild(blackScreen)
  
  TweenLite.set($("#p4L"),{display:"block"})
  TweenLite.set($("#p4R"),{display:"block"})
  showBtn(.5)
}
var stage_5=new createjs.Container()
function ani4end(){
  console.log("问题来了")
  TweenLite.to(stage_4,.75,{y:-screenH,onComplete:ani5})
  stage.addChild(stage_5)
  stage_5.y=screenH
  TweenLite.to(stage_5,.75,{y:0})
  setPage5()
  TweenLite.set($("#p4L"),{display:"none"})
  TweenLite.set($("#p4R"),{display:"none"})
}

function ani5(){
  stage.removeChild(stage_4)

}
var stage_6=new createjs.Container()
function ani5end(){
  
  stage.addChild(stage_6)
  setPage6()
  ani6()
}
var case1=new createjs.Container()
var case2=new createjs.Container()
var case3=new createjs.Container()
var case4=new createjs.Container()

var case1b=new createjs.Container()
var case2b=new createjs.Container()
var case3b=new createjs.Container()
var case4b=new createjs.Container()

var caseEnd=new createjs.Container()
var caseA=[]
var casebA=[]
var caseBtnA=[[],[],[],[]]
var caseBtnNumA=[2,3,2,1]

function ani6end(){
  setTimeout(function(){
    stage.removeChild(stage_6)
  },1500)
  caseA=[case1,case2,case3,case4]
  casebA=[case1b,case2b,case3b,case4b]
  for (var i = 1; i <= 4; i++) {
    var caseBG=new createjs.Bitmap("img/casebg"+i+".jpg")
    var caseBGdown=new createjs.Bitmap("img/casebgdown.jpg")
    var caseCopy=new createjs.Bitmap("img/case"+i+"copy.png")
    var pinkBG=pinkScreen.clone()

    caseA[i-1].addChild(pinkBG)
    caseA[i-1].addChild(caseBG)
    caseA[i-1].addChild(caseBGdown)
    caseA[i-1].addChild(caseCopy)
    caseBGdown.y=screenH-408
    stage.addChild(caseA[i-1])
    if(2!=1){
      caseA[i-1].y=screenH
    }

    var caseBGb=new createjs.Bitmap("img/casebg"+i+".jpg")
    var caseBGdownb=new createjs.Bitmap("img/casebgdown.jpg")
    var caseCopyb=new createjs.Bitmap("img/case"+i+"btn.png")
    var pinkBGb=pinkScreen.clone()

    casebA[i-1].addChild(pinkBGb)
    casebA[i-1].addChild(caseBGb)
    casebA[i-1].addChild(caseBGdownb)
    casebA[i-1].addChild(caseCopyb)
    caseBGdownb.y=screenH-408
    stage.addChild(casebA[i-1])
    casebA[i-1].y=screenH

    // for (var j = 1; j <= caseBtnNumA[i-1]; j++) {
      
    //   var caseBtn=new createjs.Bitmap("img/case"+i+"btn"+j+".png")

    //   caseA[i-1].addChild(caseBtn)
    //   caseBtnA[j-1].push(caseBtn)
    //   TweenLite.to(caseBtn,1,{alpha:.5,delay:(j-1)*.02,onComplete:btnLoop,onCompleteParams:[caseBtn]})
    // };

  };
  var endTop=new createjs.Bitmap("img/endtop.jpg")
  var enddown=new createjs.Bitmap("img/casebgdown.jpg")
  var endCopy=new createjs.Bitmap("img/endcopy.png")
  caseEnd.addChild(endTop)
  caseEnd.addChild(enddown)
  caseEnd.addChild(endCopy)
  enddown.y=screenH-408
  stage.addChild(caseEnd)
  caseEnd.y=screenH

  ifnowEnd=1
  //setSlide()
  goPage()
  TweenLite.set($("#end_arrow"),{display:"block"})

  setCaseBtn()
}
$("#end_arrow").click(function(){
  nowCase++
  goPage()
})
function btnLoop(_tar){
  //TweenLite.set(_tar,{alpha:1})
  TweenLite.to(_tar,.5,{alpha:1,onComplete:btnLoop2,onCompleteParams:[_tar]})
}
function btnLoop2(_tar){
  //TweenLite.set(_tar,{alpha:1})
  TweenLite.to(_tar,.5,{alpha:.5,onComplete:btnLoop,onCompleteParams:[_tar],ease:Linear.easeNone})
}