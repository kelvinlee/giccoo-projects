
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
var pSprite=PIXI.Sprite.fromImage
var pTexture=PIXI.Texture.fromImage


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
//============================================//============================================p1 第一页
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
  p1aniDown()
}
function onButtonUp(){
  p1aniUp()
}

//============================================//============================================p2 第二页

var stage2=new PIXI.Container()
var whitebg=new PIXI.Graphics()
var sq1=new PIXI.Graphics()
var sq2=new PIXI.Graphics()

var grid=pTexture("img/grid.png")
var grids//=new PIXI.extras.TilingSprite(grid,640,1000)

var p2title1=pSprite("img/p2title1.png")
var p2title2=pSprite("img/p2title2.png")
var p2title3=pSprite("img/p2title3.png")

var p2btn1t1=PIXI.Texture.fromImage("img/p2btn1.png")
var p2btn2t1=PIXI.Texture.fromImage("img/p2btn2.png")
var p2btn1t2=PIXI.Texture.fromImage("img/p2btn1down.png")
var p2btn2t2=PIXI.Texture.fromImage("img/p2btn2down.png")

var p2btn1=new PIXI.Sprite(p2btn1t1)
var p2btn2=new PIXI.Sprite(p2btn2t1)

var p2boy=pSprite("img/p2boy.png")
var p2girl=pSprite("img/p2girl.png")



function page2Start(){
  pStage.addChildAt(stage2,1)
  stage2.addChild(whitebg)


  whitebg.beginFill(0xffffff,1)
  whitebg.drawRect(0,0,640,stageH)

  TweenLite.from(stage2,.5,{alpha:0,onComplete:function(){pStage.removeChild(stage1)}})

  grids=new PIXI.extras.TilingSprite(grid,640,stageH-220)
  grids.y=110
  stage2.addChild(grids)

  sq1.beginFill(0x000000,0)
  sq1.lineStyle(2,0x000000,1,1)
  sq1.drawRect(0,0,640,stageH-220)
  stage2.addChild(sq1)

  sq2.beginFill(0x000000,0)
  sq2.lineStyle(1.5,0x000000,.5,1)
  sq2.drawRect(0,0,640,stageH-220)
  stage2.addChild(sq2)

  sq1.pivot.set(320,stageH/2-110)
  sq1.position.set(320,stageH/2)
  sq2.pivot.set(320,stageH/2-110)
  sq2.position.set(320,stageH/2)
  grids.mask=sq1
  TweenLite.from(sq1.scale,1,{y:0.5,ease:Back.easeOut})
  TweenLite.from(sq2.scale,1,{y:0.5,ease:Back.easeOut})

  stage2.addChild(p2title3)
  stage2.addChild(p2title2)
  stage2.addChild(p2title1)

  p2title1.x=p2title2.x=p2title3.x=320
  p2title1.y=p2title2.y=p2title3.y=stageH/2-208*stageH/1000
  p2title1.pivot.x=p2title2.pivot.x=p2title3.pivot.x=320
  p2title1.pivot.y=p2title2.pivot.y=p2title3.pivot.y=80.5


  stage2.interactive=true
  p2btn1.interactive=true
  p2btn2.interactive=true

  p2btn1.touchstart=function(){this.texture=p2btn1t2}
  p2btn2.touchstart=function(){this.texture=p2btn2t2}
  stage2.touchend=function(){p2btn1.texture=p2btn1t1;p2btn2.texture=p2btn2t1}
  p2btn1.touchend=onp2btn1Up
  p2btn2.touchend=onp2btn2Up


  stage2.addChild(p2btn1)
  stage2.addChild(p2btn2)

  p2btn1.pivot.x=p2btn2.pivot.x=147
  p2btn1.pivot.y=p2btn2.pivot.y=85.5

  p2btn1.position.set(169,stageH-236*stageH/1000)
  p2btn2.position.set(471,stageH-236*stageH/1000)

  // stage2.addChild(p2boy)
  // stage2.addChild(p2girl)

  // p2boy.y=p2girl.y=p2btn1.y-297-80





  PIXI.loader
    .add("img/boya.png","img/boya.json")
    .add("img/boyb.png","img/boyb.json")
    .add("img/girla.png","img/girla.json")
    .add("img/girlb.png","img/girlb.json")
    .load(setBoyGirl)

}
var boyMove
var girlMove
function setBoyGirl(){
  var boyTextures=[],i;

  for (i = 1; i <= 50; i++) {
    var texture=PIXI.Texture.fromFrame("boy00"+i+".png")
    boyTextures.push(texture)
  };

  for (i = 0; i < 50; i++) {
    boyMove=new PIXI.extras.AnimatedSprite(boyTextures)
  };
  stage2.addChild(boyMove)
  boyMove.animationSpeed=.5
  boyMove.play()

  var girlTextures=[]

  for (i = 1; i <= 50; i++) {
    var texture=PIXI.Texture.fromFrame("girl00"+i+".png")  
    girlTextures.push(texture)
  };

  for (i = 0; i < 50; i++) {
    girlMove=new PIXI.extras.AnimatedSprite(girlTextures)
  };
  stage2.addChild(girlMove)
  girlMove.animationSpeed=.4
  girlMove.play()
  girlMove.x=320
  boyMove.y=girlMove.y=parseInt(p2btn1.y)-297-80


  ani2()
}



function onp2btn1Up(){
    console.log("男")
    this.texture=p2btn1t1
}
function onp2btn2Up(){
    console.log("女")
    this.texture=p2btn2t1
}

