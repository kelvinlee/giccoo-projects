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
      title: "让建筑消失",
      desc: "",
      link: "http://m.giccoo.com/hyatt/",
      imgUrl: "http://m.giccoo.com/hyatt/img/ico.jpg",
      success: function() {},
      cancel: function() {}
    };

    var shareContent2;
    shareContent2 = {
      title: "【让建筑消失】",
      desc: "",
      link: "http://m.giccoo.com/hyatt/",
      imgUrl: "http://m.giccoo.com/hyatt/img/ico.jpg",
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

function setup(){
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