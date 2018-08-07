var global = {};
var sys="other"//"NeteaseMusic"//"other"
var __url="http://m.giccoo.com/mygym/"
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
      title: "定义我的燃动健身房",
      desc: "新高尔夫，点“燃”你的理想健身房！",
      link: __url,
      imgUrl: "http://m.giccoo.com/mygym/img/ico.jpg",
      success: function() {},
      cancel: function() {}
    };

    var shareContent2;
    shareContent2 = {
      title: "【定义我的燃动健身房】新高尔夫，点“燃”你的理想健身房！",
      desc: "",
      link: __url,
      imgUrl: "http://m.giccoo.com/mygym/img/ico.jpg",
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

var app
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

  app=new PIXI.Application({width:640,height:stageH,transparent: false,preserveDrawingBuffer: true})
  document.body.appendChild(app.view);
  app.stage=new PIXI.display.Stage();
  app.stage.addChild(pStage)//====

  app.view.style.position="absolute"
  app.view.style.width=app.view.style.height="100%"

  app.backgroundColor=0x000000
  pageLoop()
  startPage1()
}

function pageLoop(){
  requestAnimationFrame(pageLoop)
  app.render(pStage)
}

function startPage1(){
  setPage1()
}

//===============存图
// function savePic(){
//   document.getElementById("pngHolder").innerHTML=""
//   document.getElementById("pngHolder").appendChild(convertCanvasToImage(app.view)); 
//   TweenLite.set($("#pngHolder"),{display:"block"})
//   TweenLite.set($("#shareHint"),{display:"block"})
// }

// function convertCanvasToImage(canvas) {
//   var image = new Image();
//   //image.crossOrigin="Anonymous"
//   image.src = canvas.toDataURL("image/png");
//   return image;
// }

// $("#pngHolder").click(function(){
//   TweenLite.set($("#pngHolder"),{display:"none",opacity:1})
//   TweenLite.set($("#shareHint"),{display:"none"})
//   footer.alpha=1
// })
//==========网易云
// function neteaseGo(){
//   app.render(app.stage)
//   upload(app.view.toDataURL())
// }
// function upload(image) {
//         var data;
//         // console.log "upload:"
//         data = {
//           image: image,
//           folder:"mygym"
//         };
//         return axios.post(imageurl, data).then(function (msg) {
//           if (msg.data.recode === 200) {
//             //return main.success(msg.data);
//             console.log(msg.data.info)
//             neteaseShareImage(msg.data.info)
//           } else {

//           }
//         }).catch(function (e) {

//         });
// }

// var imageurl = "http://api.giccoo.com/api/upload/image64/";

// function neteaseShareImage(_picurl) {
//   var picUrl, redirectUrl, title1;
//   title1 = "定义我的燃动健身房";
//   picUrl = "http://image.giccoo.com/upload/mygym/" + _picurl + "@!large";
//   redirectUrl = "http://m.giccoo.com/mygym/";
//   console.log("orpheus://sharepic?picUrl=" + encodeURIComponent(picUrl) + "&shareUrl=" + encodeURIComponent(redirectUrl) + "&wbDesc=" + encodeURIComponent(title1) + "&qqDesc=" + encodeURIComponent(title1));
//   return window.location.href = "orpheus://sharepic?picUrl=" + encodeURIComponent(picUrl) + "&shareUrl=" + encodeURIComponent(redirectUrl) + "&wbDesc=" + encodeURIComponent(title1) + "&qqDesc=" + encodeURIComponent(title1);
// };
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