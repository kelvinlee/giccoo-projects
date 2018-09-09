var global = {};
var sys="other"//"NeteaseMusic"//"other"
$(document).ready(function load (){
 //  if (window.navigator.userAgent.indexOf("NeteaseMusic") > -1) {
 //    sys = "NeteaseMusic";
    
 //    TweenLite.set($("#btnshare"),{display:"block"})

 //  } else {
 //  //iniListenSound()
	// loadWechatConfig();

 //  	wx.ready(function() {
 //    var shareContent;
 //    shareContent = {
 //      title: "定义我的燃动健身房",
 //      desc: "新高尔夫，点“燃”你的理想健身房！",
 //      link: "http://m.giccoo.com/mygym/",
 //      imgUrl: "http://m.giccoo.com/mygym/img/ico.jpg",
 //      success: function() {},
 //      cancel: function() {}
 //    };

 //    var shareContent2;
 //    shareContent2 = {
 //      title: "【定义我的燃动健身房】新高尔夫，点“燃”你的理想健身房！",
 //      desc: "",
 //      link: "http://m.giccoo.com/mygym/",
 //      imgUrl: "http://m.giccoo.com/mygym/img/ico.jpg",
 //      success: function() {},
 //      cancel: function() {}
 //    };
 //    wx.onMenuShareTimeline(shareContent2);
 //    wx.onMenuShareAppMessage(shareContent);
 //    wx.onMenuShareQQ(shareContent);
 //    return wx.onMenuShareWeibo(shareContent);
 //  });
 //  }
  initAll()



});

// var loadWechatConfig = function() {
//   var hm, s, url;
//   url = encodeURIComponent(window.location.href.split("#")[0]);
//   hm = document.createElement('script');
//   hm.src = "http://api.giccoo.com/api/config?url=" + url;
//   s = document.getElementsByTagName('script')[0];
//   s.parentNode.insertBefore(hm, s);
// };

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
  iniListenSound()
  stageW=640
  stageH=screenH/screenW*640

  renderer=new PIXI.Application({width:640,height:stageH,transparent: true,preserveDrawingBuffer: true})
  document.body.appendChild(renderer.view);

  renderer.stage.addChild(pStage)//====

  renderer.view.style.position="absolute"
  renderer.view.style.width=renderer.view.style.height="100%"

  renderer.backgroundColor=0x008ee2
  pageLoop()
  setup()
}

function pageLoop(){
  requestAnimationFrame(pageLoop)
  renderer.render(pStage)
}
var upLayer=new PIXI.Container()
var midLayer=new PIXI.Container()
var downLayer=new PIXI.Container()
function setup(){
  setBG()
  pStage.addChild(downLayer,midLayer,upLayer)
  setArrow()
  setLogo()
  setTouch()
  setAllPage()

  setWave234()
  setTag()
  setHeader()
  setHeader12_16()
  setP12bg()
  setWhiteBG()

  setPage0()
  setPage1()
  setPage2()

  setPage3()
  setPage4()
  setPage5()
  setPage6()

  setPage7()
  setPage8()
  setPage9()
  setPage10()
  setPage11()
  setPage12()
  setPage13()
  setPage14()
  setPage15()
  setPage16()
  setPage17()

}


// function savePic(){

//   document.getElementById("pngHolder").innerHTML=""
//   document.getElementById("pngHolder").appendChild(convertCanvasToImage(renderer.view)); 
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
//   renderer.render(renderer.stage)
//   upload(renderer.view.toDataURL())
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

var ifbgm=0
var bgm=$("#bgm")[0]
//微信端背景音乐播放...
function iniListenSound(){
         document.addEventListener("WeixinJSBridgeReady", function(){
             bgm.play();
             ifbgm=1
             //TweenLite.set($("#musicOff"),{opacity:0})
        }, false);
}
$("#musicOff").click(function(){
  if(ifbgm==0){
    bgm.play();
    //TweenLite.set($("#musicOff"),{opacity:0})
  }else{
    bgm.pause();
    //TweenLite.set($("#musicOff"),{opacity:1})
  }
  ifbgm++
  if(ifbgm==2){ifbgm=0}

})