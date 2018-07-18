
$(document).ready(function load (){
  //iniListenSound()
	loadWechatConfig();
  initAll()
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





});

$('body')[0].addEventListener('touchmove', function (event) {event.preventDefault();}, false);//阻止了浏览器默认的下拉事件

var screenW
var screenH

screenW=document.body.offsetWidth 
screenH=document.body.offsetHeight

var stageW=640
var stageH//screenH/screenW*640

var loadWechatConfig = function() {
  var hm, s, url;
  url = encodeURIComponent(window.location.href.split("#")[0]);
  hm = document.createElement('script');
  hm.src = "http://api.giccoo.com/api/config?url=" + url;
  s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(hm, s);
};

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

//var stage = new createjs.Stage("mainCanvas");

var renderer = PIXI.autoDetectRenderer(256,256);//PIXI.CanvasRenderer(256, 256);
var pStage= new PIXI.Container()


//=========PIXI通用VAR
//NORMAL ADD MULTIPLY SCREEN OVERLAY DARKEN LIGHTEN COLOR_DODGE COLOR_BURN 
//HARD_LIGHT SOFT_LIGHT DIFFERENCE EXCLUSION HUE SATURATION COLOR LUMINOSITY
//var BM=PIXI.BLEND_MODES
var pSprite=PIXI.Sprite.fromImage

var _NORMAL=PIXI.BLEND_MODES.NORMAL,
    _ADD=PIXI.BLEND_MODES.ADD,
    _MULTIPLY=PIXI.BLEND_MODES.MULTIPLY,
    _SCREEN=PIXI.BLEND_MODES.SCREEN
    // ,_OVERLAY=PIXI.BLEND_MODES.OVERLAY,
    // _DARKEN=PIXI.BLEND_MODES.DARKEN,
    // _LIGHTEN=PIXI.BLEND_MODES.LIGHTEN,
    // _COLOR_DODGE=PIXI.BLEND_MODES.COLOR_DODGE,
    // _COLOR_BURN=PIXI.BLEND_MODES.COLOR_BURN,
    // _HARD_LIGHT=PIXI.BLEND_MODES.HARD_LIGHT,
    // _SOFT_LIGHT=PIXI.BLEND_MODES.SOFT_LIGHT,
    // _DIFFERENCE=PIXI.BLEND_MODES.DIFFERENCE,
    // _EXCLUSION=PIXI.BLEND_MODES.EXCLUSION,
    // _HUE=PIXI.BLEND_MODES.HUE,
    // _SATURATION=PIXI.BLEND_MODES.SATURATION,
    // _COLOR=PIXI.BLEND_MODES.COLOR,
    // _LUMINOSITY=PIXI.BLEND_MODES.LUMINOSITY

function initAll(){
  stageW=640
  stageH=screenH/screenW*640
  
  document.body.appendChild(renderer.view);
  renderer.render(pStage)
  renderer.resize(640,stageH)
  renderer.view.style.position="absolute"
  renderer.view.style.width=renderer.view.style.height="100%"

  renderer.backgroundColor=0xffffff
  pageLoop()
  page1start()
  
}

function pageLoop(){
  requestAnimationFrame(pageLoop)
  renderer.render(pStage)
}

var logo=pSprite("img/logo.png")
var title=pSprite("img/p1title.png")
var titleMask=pSprite("img/p1titlemask.png")
var titleLight=pSprite("img/p1title_light.png")
var title1=pSprite("img/p1title1.png")
var title2=pSprite("img/p1title2.png")
var title3=pSprite("img/p1title3.png")
var title4=pSprite("img/p1title4.png")
var p1bg=pSprite("img/p1bg1.jpg")
var p1bgc=pSprite("img/p1bgc.png")

var p1car=pSprite("img/p1pic1.png")
var p1pic2=pSprite("img/p1pic2.png")
var p1pic3=pSprite("img/p1pic3.png")
var p1pic4=pSprite("img/p1pic4.png")
var p1pic5=pSprite("img/p1pic5.png")
var p1pic6=pSprite("img/p1pic6.png")

var p1picA=[p1car,p1pic6,p1pic5,p1pic4,p1pic3,p1pic2]

var p1btn=pSprite("img/p1btn.png")
var p1btnT=pSprite("img/p1btn_t.png")
var p1btnBG1=pSprite("img/p1btn_t_bg1.png")
var p1btnBG2=pSprite("img/p1btn_t_bg2.png")

var circle1=new PIXI.Graphics()
var circle2=new PIXI.Graphics()

var stage1=new PIXI.Container()
function page1start(){
  pStage.addChild(stage1)
  pStage.addChild(logo)

  stage1.addChild(p1bg)
  stage1.addChild(p1bgc)
  p1bgc.blendMode=_MULTIPLY

  for (var i = 0; i < p1picA.length; i++) {
    stage1.addChild(p1picA[i])
    p1picA[i].x=320
    p1picA[i].y=538/1000*stageH
    p1picA[i].pivot.set(320,147.5)
    
  };

  stage1.addChild(title4)
  stage1.addChild(title3)
  stage1.addChild(title2)
  stage1.addChild(title1)
  stage1.addChild(title)
  stage1.addChild(titleMask)
  stage1.addChild(titleLight)
  titleLight.mask=titleMask

  titleLight.x=titleMask.x=title.x=title1.x=title2.x=title3.x=title4.x=320//1000*stageH
  titleLight.y=titleMask.y=title.y=title1.y=title2.y=title3.y=title4.y=285-50//1000*stageH
  titleLight.pivot.y=titleMask.pivot.y=title.pivot.y=title1.pivot.y=title2.pivot.y=title3.pivot.y=title4.pivot.y=119
  titleLight.pivot.x=titleMask.pivot.x=title.pivot.x=title1.pivot.x=title2.pivot.x=title3.pivot.x=title4.pivot.x=320

  titleLight.x=-320
  titleLight.blendMode=_SCREEN
  
  stage1.addChild(circle1)
  stage1.addChild(circle2)

  stage1.addChild(p1btnBG1)
  stage1.addChild(p1btnBG2)
  stage1.addChild(p1btnT)
  stage1.addChild(p1btn)

  p1btn.pivot.set(85.5,85.5)
  p1btn.position.set(320,stageH-109)


  p1btnBG2.pivot.x=p1btnBG1.pivot.x=p1btnT.pivot.x=320
  p1btnBG2.pivot.y=p1btnBG1.pivot.y=p1btnT.pivot.y=72.5
  p1btnBG2.x=p1btnBG1.x=p1btnT.x=320
  p1btnBG2.y=p1btnBG1.y=p1btnT.y=stageH-128

 
  ani1()

  p1btn.interactive=true
  p1btn.buttonMode=true

  //p1btn.on('touchstart',onButtonUp)
  p1btn.touchstart = onButtonDown
  p1btn.touchend = onButtonUp
  //p1btn.touchstart = p1btn.click = onButtonUp
  //p1btn.touchstart = onButtonUp
}

function onButtonDown(){
  console.log("touchDown")
  p1aniDown()
}
function onButtonUp(){
  console.log("touchUp")
  p1aniUp()
}
// function handleTick(){
//   stage.update();
// }