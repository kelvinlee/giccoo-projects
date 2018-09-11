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
      title: "元气音乐节",
      desc: "唤醒元气初心",
      link: "http://m.giccoo.com/genki/",
      imgUrl: "http://m.giccoo.com/genki/img/ico.jpg",
      success: function() {},
      cancel: function() {}
    };

    var shareContent2;
    shareContent2 = {
      title: "【元气音乐节】唤醒元气初心",
      desc: "",
      link: "http://m.giccoo.com/genki/",
      imgUrl: "http://m.giccoo.com/genki/img/ico.jpg",
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

  setPage()
  setPart1()
  setPart2()
  setPart3()
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////===============滚屏
var main=new PIXI.Container()
var bg=new pSprite("img/bgloop.jpg")

function setPage(){
  pStage.addChild(bg,main)
  pStage.interactive=true
  pStage.touchstart=touchStart
}

var startY,endY,mouseYA,timeA,newPosition

function touchStart(_e){
  TweenLite.killTweensOf(main)
  newPosition=main.y
  startY=_e.data.global.y
  console.log(_e.data.global.y)
  pStage.touchmove=touchMove
  pStage.interactive=true
  pStage.touchend=touchEnd
  mouseYA=[0,0]
  timeA=[0,0]
}
function touchMove(_e){
  main.y=newPosition+(_e.data.global.y-startY)//*2
  if(main.y>=0){    main.y=0  }
  if(main.y<=-11500) {main.y=-11500};//=======================高度限制
  mouseYA.push(_e.data.global.y)
  date=new Date()
  timeA.push(date.getTime())
}
function touchEnd(_e){
  pStage.touchmove=null
  pStage.interactive=true
  pStage.touchend=null

  var endY=main.y+1000*(mouseYA[mouseYA.length-1]-mouseYA[mouseYA.length-2])/(timeA[timeA.length-1]-timeA[timeA.length-2])
  if(endY>=0){    endY=0  }
  if(endY<=-11500) {endY=-11500};//=======================高度限制

  TweenMax.to(main,1,{y:endY})
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////===============
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