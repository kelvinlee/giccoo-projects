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
      title: "汤达人元气音乐节",
      desc: "点击H5唤醒你的元气初心，更有机会获得元气音乐节门票",
      link: "http://m.giccoo.com/genki/",
      imgUrl: "http://m.giccoo.com/genki/img/ico.jpg",
      success: function() {},
      cancel: function() {}
    };

    var shareContent2;
    shareContent2 = {
      title: "【汤达人元气音乐节】点击H5唤醒你的元气初心，更有机会获得元气音乐节门票",
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
  

  setPage()
  setPart1()
  //setPart2()
  setPart3()
  //setPart4()
  getDefaultMessages(1,setPart4)

  pageLoop()
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////===============滚屏
var main=new PIXI.Container()
var bg=new pSprite("img/bgloop.jpg")
var bg2=new pSprite("img/bgloop.jpg")
var bg3=new pSprite("img/bgloop.jpg")
var bg4=new pSprite("img/bgloop.jpg")
var mainMask=new pSprite("img/main-mask.png")

function setPage(){
  pStage.addChild(bg,main,mainMask)
  pStage.interactive=true
  pStage.touchstart=touchStart
  main.mask=mainMask
  mainMask.height=stageH*14/13
  main.addChild(bg2,bg3,bg4)
  bg3.y=3090
  bg4.y=3090*2
}

var startY,endY,mouseYA,timeA,newPosition

function touchStart(_e){
  TweenLite.killTweensOf(main)
  TweenLite.killTweensOf($("#userText"))
  $("#UserTextarea1").blur();

  newPosition=main.y
  startY=_e.data.global.y
  //console.log(_e.data.global.y)
  pStage.touchmove=touchMove
  pStage.interactive=true
  pStage.touchend=touchEnd
  mouseYA=[0,0]
  timeA=[0,0]
  resetUserForm()
}
var heightLimit
function touchMove(_e){

  main.y=newPosition+(_e.data.global.y-startY)*2
  if(main.y>=0){    main.y=0  }
  if(main.y<=heightLimit) {main.y=heightLimit};//=======================高度限制
  mouseYA.push(_e.data.global.y)
  date=new Date()
  timeA.push(date.getTime())

  //console.log("theNewNowHeight+part4.y-217",theNewNowHeight+part4.y-217,"main.y",main.y)

  //TweenMax.set($("#userText"),{y:(theNewNowHeight+part4.y-217+main.y)/640*screenW})
}
function touchEnd(_e){
  pStage.touchmove=null
  pStage.interactive=true
  pStage.touchend=null

  var endY=main.y+1000*(mouseYA[mouseYA.length-1]-mouseYA[mouseYA.length-3])/(timeA[timeA.length-1]-timeA[timeA.length-3])/4
  if(endY>=0){    endY=0  }
  if(endY<=heightLimit) {endY=heightLimit};//=======================高度限制

  TweenMax.to(main,.5,{y:endY})

  //TweenMax.to($("#userText"),1,{y:(theNewNowHeight+part4.y-217+endY)/640*screenW})
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////===============
var ifSubmit=0
function pageLoop(){
  heightLimit=-nowHeight-part4.y+stageH-260-50

  requestAnimationFrame(pageLoop)
  renderer.render(pStage)
  if(main.y<=-(theNewNowHeight+part4.y-stageH+237+100)&&main.y>=-(nowHeight+part4.y-stageH+200)&&ifSubmit==0){
    //mainMask.height=stageH-237
    TweenMax.to(mainMask,.5,{height:stageH-237-ifInputing*100})
    TweenMax.to(userMessage,.5,{y:stageH-237-ifInputing*100})
    TweenMax.set($("#userText"),{display:"block"})
    //TweenMax.set($("#songText"),{display:"block"})
  }else{
    //mainMask.height=stageH*14/13
    TweenMax.to(mainMask,.5,{height:stageH*14/13})
    TweenMax.to(userMessage,.5,{y:stageH})
    TweenMax.set($("#userText"),{display:"none"})
    //TweenMax.set($("#songText"),{display:"none"})
  }
  TweenMax.set($("#userText"),{y:(stageH-237+20-ifInputing*100)/640*screenW})
  //TweenMax.set($("#songText"),{y:(stageH-56-ifInputing*100)/640*screenW})

  //bg.y=main.y/4
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