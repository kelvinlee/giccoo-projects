var global = {};
var sys="other"//"NeteaseMusic"//"other"
$(document).ready(function load (){
  if (window.navigator.userAgent.indexOf("NeteaseMusic") > -1) {
    sys = "NeteaseMusic";
    
    TweenLite.set($("#btnshare"),{display:"block"})

  } else {
  iniListenSound()
	loadWechatConfig();

  	wx.ready(function() {
    var shareContent;
    shareContent = {
      title: "“让建筑消失”，和隈研吾一起创作属于自己的都市绿洲",
      desc: "30秒指尖趣味拼贴，把北京望京凯悦酒店打造成你的森林理想家",
      link: "http://m.giccoo.com/hyatt_1/",
      imgUrl: "http://m.giccoo.com/hyatt_1/img/ico.jpg",
      success: function() {},
      cancel: function() {}
    };

    var shareContent2;
    shareContent2 = {
      title: "“让建筑消失”，和隈研吾一起创作属于自己的都市绿洲",
      desc: "",
      link: "http://m.giccoo.com/hyatt_1/",
      imgUrl: "http://m.giccoo.com/hyatt_1/img/ico.jpg",
      success: function() {},
      cancel: function() {}
    };
    wx.onMenuShareTimeline(shareContent2);
    wx.onMenuShareAppMessage(shareContent);
    wx.onMenuShareQQ(shareContent);
    return wx.onMenuShareWeibo(shareContent);
  });
  }
  initAll()



});

var loadWechatConfig = function() {
  var hm, s, url;
  url = encodeURIComponent(window.location.href.split("#")[0]);
  hm = document.createElement('script');
  hm.src = "http://api.giccoo.com/api/config?url=" + url;
  s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(hm, s);
};

$('body')[0].addEventListener('touchmove', function (event) {event.preventDefault();}, false);//阻止了浏览器默认的下拉事件

var screenW,screenH

screenW=document.body.offsetWidth 
screenH=document.body.offsetHeight

var stageW=640
var stageH//screenH/screenW*640

var renderer
var pStage= new PIXI.Container()

//=========PIXI通用VAR
var pSprite=PIXI.Sprite.fromImage
var pTexture=PIXI.Texture.fromImage

var _NORMAL=PIXI.BLEND_MODES.NORMAL,
    _ADD=PIXI.BLEND_MODES.ADD,
    _MULTIPLY=PIXI.BLEND_MODES.MULTIPLY,
    _SCREEN=PIXI.BLEND_MODES.SCREEN

function initAll(){
  stageW=640
  stageH=screenH/screenW*640

  renderer=new PIXI.Application({width:640,height:stageH,transparent: true,preserveDrawingBuffer: true})
  document.body.appendChild(renderer.view);

  renderer.stage.addChild(pStage)//====

  renderer.view.style.position="absolute"
  renderer.view.style.width=renderer.view.style.height="100%"

  renderer.backgroundColor=0xffffff
  pageLoop()

  setup()

}

var logo=new pSprite("img/logo.png")
var mainPart=new PIXI.Container()
var whitebg=new PIXI.Graphics()

function setup(){
  whitebg.beginFill(0xffffff)
  whitebg.drawRect(0,0,640,stageH)
  pStage.addChild(whitebg,mainPart,logo)
  setBorder()
  setPage1()
  setPage2()
  //setPage3()
  setScorll()
 //$.post("http://git.giccoo.com/my/giccoo")
}

var borderAll=new PIXI.Container()

function setBorder(){
  var borderL=new PIXI.Graphics()
  var borderR=new PIXI.Graphics()
  var borderT=new PIXI.Graphics()
  var borderD=new PIXI.Graphics()


  borderL.beginFill(0xffffff)
  borderL.drawRect(0,0,640,10)
  borderR.beginFill(0xffffff)
  borderR.drawRect(630,0,640,stageH)
  borderT.beginFill(0xffffff)
  borderT.drawRect(0,0,10,stageH)
  borderD.beginFill(0xffffff)
  borderD.drawRect(0,stageH-10,640,stageH)
  borderAll.addChild(borderL,borderR,borderT,borderD)

  pStage.addChild(borderAll)
  borderAll.visible=false
  borderAll.alpha=0
}

function pageLoop(){
  requestAnimationFrame(pageLoop)
  renderer.render(pStage)
}



function savePic(){
  document.getElementById("pngHolder").innerHTML=""
  document.getElementById("pngHolder").appendChild(convertCanvasToImage(renderer.view)); 
  TweenLite.set($("#pngHolder"),{display:"block"})
  //TweenLite.set($("#shareHint"),{display:"block"})
}

function convertCanvasToImage(canvas) {
  var image = new Image();
  //image.crossOrigin="Anonymous"
  image.src = canvas.toDataURL("image/png");
  return image;
}

// $("#pngHolder").click(function(){
//   TweenLite.set($("#pngHolder"),{display:"none",opacity:1})
//   TweenLite.set($("#shareHint"),{display:"none"})
//   //footer.alpha=1
// })

//===============================滚屏幕

function setScorll(){
  pStage.interactive=true
  pStage.touchstart=touchStart
}

var startY
var nowPage=1
var pageUpDown
function touchStart(_e){
  startY=_e.data.global.y
  pStage.touchend=touchEnd
}
function touchEnd(_e){
  if(startY-_e.data.global.y>90&&nowPage==1){
    nowPage++
    pageUpDown=1
    goPage2()
    console.log("第二页")
  }else if(startY-_e.data.global.y<-90&&nowPage==2){
    nowPage--
    pageUpDown=-1
    goPage1()
    console.log("回第一页")
  }else if(startY-_e.data.global.y>90&&nowPage==2){
    nowPage++
    pageUpDown=1
    goPage3()
    console.log("第三页")
  }
  
}
function goPage1(){
  
  TweenLite.to(page2,.5,{y:stageH,onComplete:function(){
    borderAll.visible=false
  }})
}
var ifFirstP2=1
function goPage2(){
  borderAll.visible=true
  setP2Loop()
  TweenLite.to(page2,.5,{y:0,onComplete:function(){
    if(ifFirstP2==1){
      renderer.ticker.add(moveBG)//=====
      ifFirstP2=0
    }
  }})
  
}
var random3=0
function goPage3(){
  if(Math.random()>.5){
    random3=1
  }
  random3=0
  if(random3==1){
    setPage33()
    TweenLite.to(page3,.5,{y:stageH/2,onComplete:function(){
      page1.visible=false
      page2.visible=false
      //console.log("3??")
    }})
  }else{
    setPage3()
    TweenLite.to(page3,.5,{y:0,onComplete:function(){
      page1.visible=false
      page2.visible=false
      //console.log("3??")
    }})
  }
  
  
}


//=============BGM=========

var ifbgm=0
var bgm=$("#bgm")[0]
//微信端背景音乐播放...
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