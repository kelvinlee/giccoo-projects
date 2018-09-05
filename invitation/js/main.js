var global = {};
var sys="other"//"NeteaseMusic"//"other"
$(document).ready(function load (){
  if (window.navigator.userAgent.indexOf("NeteaseMusic") > -1) {
    sys = "NeteaseMusic";
    
    TweenLite.set($("#btnshare"),{display:"block"})

  } else {
  //iniListenSound()
	loadWechatConfig();

  	wx.ready(function() {
    var shareContent;
    shareContent = {
      title: "呼吸绿洲",
      desc: "",
      link: "http://m.giccoo.com/invitation/",
      imgUrl: "http://m.giccoo.com/invitation/img/ico.jpg",
      success: function() {},
      cancel: function() {}
    };

    var shareContent2;
    shareContent2 = {
      title: "",
      desc: "",
      link: "http://m.giccoo.com/invitation/",
      imgUrl: "http://m.giccoo.com/invitation/img/ico.jpg",
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
  setPage1()
}

function pageLoop(){
  requestAnimationFrame(pageLoop)
  renderer.render(pStage)
}



function savePic(){

  document.getElementById("pngHolder").innerHTML=""
  document.getElementById("pngHolder").appendChild(convertCanvasToImage(renderer.view)); 
  TweenLite.set($("#pngHolder"),{display:"block"})
  TweenLite.set($("#shareHint"),{display:"block"})
}

function convertCanvasToImage(canvas) {
  var image = new Image();
  //image.crossOrigin="Anonymous"
  image.src = canvas.toDataURL("image/png");
  return image;
}

$("#pngHolder").click(function(){
  TweenLite.set($("#pngHolder"),{display:"none",opacity:1})
  TweenLite.set($("#shareHint"),{display:"none"})
  footer.alpha=1
})

var page1=new PIXI.Container()
var bg=new pSprite("img/bg.jpg")
var bg2=new pSprite("img/bg.jpg")
var p1mask=new pSprite("img/mask.png")

var p1t1=new pSprite("img/p1t1.png")
var p1t2=new pSprite("img/p1t2.png")
var p1t3=new pSprite("img/p1t3.png")
var p1t4=new pSprite("img/p1t4.png")
var p1t5=new pSprite("img/p1t5.png")

var p1title1=new pSprite("img/p1title1.png")
var p1title2=new pSprite("img/p1title2.png")
var p1title3=new pSprite("img/p1title3.png")
var p1title4=new pSprite("img/p1title4.png")

var p1tA=[]

var logo=new pSprite("img/logo.png")

function setPage1(){
  pStage.addChild(bg)
  bg.pivot.set(320,650)
  bg.position.set(320+1,stageH/2+2)
  bg.width=642

  pStage.addChild(bg2)
  bg2.pivot.set(320,650)
  bg2.position.set(320,stageH/2)

  pStage.addChild(p1mask)
  
  bg2.mask=p1mask

  p1mask.pivot.set(320,650)
  p1mask.position.set(320+5,stageH/2+5)
  TweenMax.to(p1mask,.6,{y:"+=50",yoyo:true,repeat:1000,ease:Linear.easeNone})
  //TweenMax.to(bg,5.3,{x:"+=0",y:"-=2",yoyo:true,repeat:1000,ease:Linear.easeNone})

  pStage.addChild(page1)

  pStage.addChild(logo)
  logo.position.set(0,stageH/2-416)

  p1tA=[p1title1,p1title2,p1title3,p1title4,p1t1,p1t2,p1t3,p1t4,p1t5]

  var i
  for (i = 0; i < p1tA.length; i++) {
    page1.addChild(p1tA[i])
    p1tA[i].pivot.set(320,500)
    p1tA[i].position.set(320,stageH/2)
    TweenMax.from(p1tA[i],1.5,{alpha:0,y:"+=50",delay:.15*i,overwirte:0})
    if(i<4){
      TweenMax.to(p1tA[i],2,{y:"-=20",delay:2.5+.5*i,repeat:1000,yoyo:true,ease:Sine.easeInOut})
    }
  };



  

}

//=============BGM=========

// var ifbgm=0
// var bgm=$("#bgm")[0]
// //微信端背景音乐播放...
// function iniListenSound(){
//          document.addEventListener("WeixinJSBridgeReady", function(){
//              bgm.play();
//              ifbgm=1
//              TweenLite.set($("#musicOff"),{opacity:0})
//         }, false);
// }
// $("#musicOff").click(function(){
//   if(ifbgm==0){
//     bgm.play();
//     TweenLite.set($("#musicOff"),{opacity:0})
//   }else{
//     bgm.pause();
//     TweenLite.set($("#musicOff"),{opacity:1})
//   }
//   ifbgm++
//   if(ifbgm==2){ifbgm=0}

// })