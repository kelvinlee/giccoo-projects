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
      title: "定义我的燃动健身房",
      desc: "全场的燃点，是你没错了！",
      link: "http://m.giccoo.com/mygym/",
      imgUrl: "http://m.giccoo.com/mygym/img/ico.jpg",
      success: function() {},
      cancel: function() {}
    };
    wx.onMenuShareTimeline(shareContent);
    wx.onMenuShareAppMessage(shareContent);
    wx.onMenuShareQQ(shareContent);
    return wx.onMenuShareWeibo(shareContent);
  });
  }
  initAll()



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


//var renderer = PIXI.autoDetectRenderer(256,256);//PIXI.CanvasRenderer(256, 256);//autoDetectRenderer
var renderer// =new PIXI.Application()
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
  
  // document.getElementById("mainCanvas").width=640//screenW//640
  // document.getElementById("mainCanvas").height=stageH

  renderer=new PIXI.Application({width:640,height:stageH,transparent: true,preserveDrawingBuffer: true})//=====
  //renderer.forceCanvas=true
  //renderer.clearBeforeRender=false
  document.body.appendChild(renderer.view);
  //renderer.render(pStage)
  //renderer.resize(640,stageH)


  renderer.width=640//====
  renderer.height=stageH//====

  renderer.stage.addChild(pStage)//====

  renderer.view.style.position="absolute"
  renderer.view.style.width=renderer.view.style.height="100%"

  renderer.backgroundColor=0xffffff
  pageLoop()
  page1start()

  //alert("v7")
  
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

  PIXI.loader
    .add("img/boya.png","img/boya.json")
    .add("img/boyb.png","img/boyb.json")
    .add("img/girla.png","img/girla.json")
    .add("img/girlb.png","img/girlb.json")
    .load(setPage2)

}
var boyMove
var girlMove
function setPage2(){
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
  girlMove.x=320-25
  boyMove.y=girlMove.y=parseInt(p2btn1.y)-297-80

  setPage3()
  ani2()
}



function onp2btn1Up(){
    console.log("男")
    this.texture=p2btn1t1
    sex=1
    goPage3()
}
function onp2btn2Up(){
    console.log("女")
    this.texture=p2btn2t1
    sex=0
    goPage3()
}

var sex=0

function goPage3(){
  stage3.visible=true
  stage2.visible=false
  changeSex()
}
var stage3=new PIXI.Container()
var sq3=new PIXI.Graphics()
var sq4=new PIXI.Graphics()
var p3title=pSprite("img/p3title.png")
var p3table=new PIXI.Container()
function setPage3(){
  pStage.addChildAt(stage3,0)
  stage3.visible=false
  stage3.addChild(p3title)
  stage3.addChild(p3table)
  setP3table()
  setRoom()
  setP3bubble()
  setUploading()
  setItem()
}

function goPage4(){
  showUploading()
}
var uploading=new PIXI.Container()
var uploading123=new PIXI.Container()

var grids2
var uploading1=pSprite("img/uploading1.jpg")
var uploading2=pSprite("img/uploading2.jpg")
var uploading3=pSprite("img/uploading3.jpg")

var uploadingMask=new PIXI.Graphics()
var uploadingLine1=new PIXI.Graphics()
var uploadingLine2=new PIXI.Graphics()

var circleA=[]
var circleLine={_end:0}//360
function setUploading(){
  pStage.addChild(uploading)
  uploading.visible=false
  pStage.addChild(logo)
  grids2=new PIXI.extras.TilingSprite(grid,640,stageH)
  uploading.addChild(grids2)
  uploading.addChild(uploading123)
  uploading.addChild(uploadingMask)
  uploading123.addChild(uploading3)
  uploading123.addChild(uploading2)
  uploading123.addChild(uploading1)
  uploading3.pivot.x=uploading3.pivot.y=uploading2.pivot.x=uploading2.pivot.y=uploading1.pivot.x=uploading1.pivot.y=227.5
  uploading3.x=uploading2.x=uploading1.x=320
  uploading3.y=uploading2.y=uploading1.y=stageH/2

  uploadingMask.beginFill(0x00dd00,1)
  uploadingMask.drawCircle(0,0,227.5)
  uploadingMask.position.set(320,stageH/2)

  uploading123.mask=uploadingMask
  TweenLite.from(uploadingMask.scale,.5,{x:0,y:0})

  uploading.addChild(uploadingLine1)
  uploading.addChild(uploadingLine2)

  uploadingLine1.beginFill(0x000000,0)
  uploadingLine1.lineStyle(16,0x808080,1,1)
  uploadingLine1.drawCircle(320,stageH/2,265)

  circleA=[]
  var _r=265
  for (var i = 0; i <= 360; i++) {
    var _x
    var _y
    _x=_r*Math.cos((i-90)/360*2*Math.PI)
    _y=_r*Math.sin((i-90)/360*2*Math.PI)
    circleA.push(_x+320)
    circleA.push(_y+stageH/2)
    //console.log(_x,_y)
  };
}
function showUploading(){
  uploading.visible=true
  circleLine._end=0
  TweenLite.set(uploading1,{alpha:1})
  TweenLite.set(uploading2,{alpha:1})

  TweenLite.to(uploading1,.5,{alpha:0,delay:1.5})
  TweenLite.to(uploading2,.5,{alpha:0,delay:3.5})

  //=========画圆环
  TweenLite.to(circleLine,5.5,{_end:360,onComplete:hideUploading,ease:Linear.easeNone,onUpdate:function(){//=========改这里
    uploadingLine2.clear()
    uploadingLine2.beginFill(0x000000,0)
    uploadingLine2.lineStyle(16,0xe9c049,1,1)
    uploadingLine2.drawPolygon(circleA.slice(0,parseInt(circleLine._end)*2))
  }})
}
function hideUploading(){
  uploading.visible=false
  showPage4()
}
//===========================page4

var p4titleBG=new PIXI.Graphics()
var p4t1=new PIXI.Text('111',{fontSize: 30})
var p4t2=new PIXI.Text('222',{fontSize: 22})
var stage4=new PIXI.Container()
var p4title=new PIXI.Container()

var random5
var footer00=pSprite("img/p4footer00.jpg")
var footer01=pSprite("img/p4footer01.jpg")
var footer02=pSprite("img/p4footer02.jpg")
var footer03=pSprite("img/p4footer03.jpg")
var footer04=pSprite("img/p4footer04.jpg")

var footer10=pSprite("img/p4footer10.jpg")
var footer11=pSprite("img/p4footer11.jpg")
var footer12=pSprite("img/p4footer12.jpg")
var footer13=pSprite("img/p4footer13.jpg")
var footer14=pSprite("img/p4footer14.jpg")
var footerA=[footer00,footer01,footer02,footer03,footer04,footer10,footer11,footer12,footer13,footer14]

var footer=new PIXI.Container()
var footerBG=new PIXI.Graphics()
var p4btn1=pSprite("img/p4btn1.png")
var p4btn2=pSprite("img/p4btn2.png")
var p4btn3=pSprite("img/p4btn3.png")
var p4btn4=pSprite("img/p4btn4.png")
var p4btnA=[p4btn1,p4btn2,p4btn3,p4btn4]

var p4down1=pSprite("img/p4down1.png")
var p4down2=pSprite("img/p4down2.png")
var p4down3=pSprite("img/p4down3.png")
var p4down4=pSprite("img/p4down4.png")
var p4down5=pSprite("img/p4down5.png")

var p4downt00=new PIXI.Texture.fromImage("img/p4downt00.png")
var p4downt01=new PIXI.Texture.fromImage("img/p4downt01.png")
var p4downt02=new PIXI.Texture.fromImage("img/p4downt02.png")
var p4downt03=new PIXI.Texture.fromImage("img/p4downt03.png")
var p4downt04=new PIXI.Texture.fromImage("img/p4downt04.png")

var p4downt10=new PIXI.Texture.fromImage("img/p4downt10.png")
var p4downt11=new PIXI.Texture.fromImage("img/p4downt11.png")
var p4downt12=new PIXI.Texture.fromImage("img/p4downt12.png")
var p4downt13=new PIXI.Texture.fromImage("img/p4downt13.png")
var p4downt14=new PIXI.Texture.fromImage("img/p4downt14.png")


var p4downTA=[[p4downt00,p4downt01,p4downt02,p4downt03,p4downt04],[p4downt10,p4downt11,p4downt12,p4downt13,p4downt14]]

var p4downT=new PIXI.Sprite(p4downt00)
var p4downA=[p4down1,p4down2,p4down3,p4down4,p4down5,p4downT]



function showPage4(){
  hideBorder()
  pStage.addChild(stage4)
  pStage.addChild(logo)

  stage4.visible=true
  stage4.addChild(p4title)

  p4title.addChild(p4titleBG)
  p4title.addChild(p4t1)
  p4title.addChild(p4t2)

  p4t1.text=$("#UserTextarea1")[0].value
  p4t2.text="by："+$("#UserTextarea2")[0].value
  p4t1.position.set(30,30)
  p4t2.position.set(30,63)
  p4titleBG.clear()
  p4titleBG.beginFill(0xffffff,1)
  p4titleBG.drawRect(0,0,640,109)

  //======footer
  random5=parseInt(Math.random()*5)
  for (var i = 0; i < 10; i++) {
    stage4.addChild(footerA[i])
    footerA[i].y=stageH-265
    if(i==sex*5+random5){
      footerA[i].visible=true
    }else{
      footerA[i].visible=false
    }
  };
  //======footerBtnGroup
  stage4.addChild(footer)
  footer.addChild(footerBG)
  footerBG.beginFill(0xe9c049,1)
  footerBG.drawRect(0,stageH-264,640,264)
  var btnX=[18,78,243,412]
  var i
  for (i = 0; i < p4btnA.length; i++) {
    footer.addChild(p4btnA[i])
    p4btnA[i].y=stageH-97+100
    p4btnA[i].rotation=0.5
    p4btnA[i].x=btnX[i]
    p4btnA[i].interactive=true
    TweenLite.to(p4btnA[i],1.5,{y:stageH-97,ease:Elastic.easeOut,delay:.3+.1*i,rotation:0})
  };

  p4btn1.tap=goBackP3
  p4btn2.tap=onPicBtn
  //p4btn3.tap=goBackP3
  p4btn4.tap=goLink

  p4downT.texture=p4downTA[sex][random5]

  for (i = 0; i < p4downA.length; i++) {
    footer.addChild(p4downA[i])
    p4downA[i].position.set(320,stageH-212+150)
    p4downA[i].pivot.set(320,100)
    p4downA[i].rotation=Math.pow(-1,i)*.5
    p4downA[i].alpha=0
    // p4btnA[i].rotation=0.5
    // p4btnA[i].x=btnX[i]
    TweenLite.to(p4downA[i],2,{alpha:1,y:stageH-212,ease:Elastic.easeOut,delay:.05*i,rotation:0})
  };
}

function goBackP3(){
  stage4.visible=false
  p3table.visible=true
}

function goLink(){
  window.location.href='https://music.163.com/#/playlist?id=2313379164'
}
function onPicBtn(){
  if(sys!="other"){
    TweenLite.to(footer,.1,{alpha:0,onComplete:neteaseGo})
  }else{
    TweenLite.to(footer,.5,{alpha:0,onComplete:savePic})
  }
  
}
function savePic(){
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
function neteaseGo(){


  //var ctx=$("#mainCanvas")[0].getContext('2d')
  //ctx.drawImage(renderer.view,0,0,640,stageH)
  //upload($("#mainCanvas")[0].toDataURL("image/png"))
  renderer.render(renderer.stage)
  upload(renderer.view.toDataURL())

  //TweenLite.set($("#mainCanvas"),{display:"block","z-index":100})
}
function upload(image) {
        var data;
        // console.log "upload:"
        data = {
          image: image,
          folder:"mygym"
        };
        return axios.post(imageurl, data).then(function (msg) {
          if (msg.data.recode === 200) {
            //return main.success(msg.data);
            console.log(msg.data.info)
            neteaseShareImage(msg.data.info)

          } else {

          }
        }).catch(function (e) {

        });
}

var imageurl = "http://api.giccoo.com/api/upload/image64/";

function neteaseShareImage(_picurl) {
  var picUrl, redirectUrl, title1;
  title1 = "定义我的燃动健身房";
  picUrl = "http://image.giccoo.com/upload/mygym/" + _picurl + "@!large";
  redirectUrl = "http://m.giccoo.com/mygym/";
  console.log("orpheus://sharepic?picUrl=" + encodeURIComponent(picUrl) + "&shareUrl=" + encodeURIComponent(redirectUrl) + "&wbDesc=" + encodeURIComponent(title1) + "&qqDesc=" + encodeURIComponent(title1));
  return window.location.href = "orpheus://sharepic?picUrl=" + encodeURIComponent(picUrl) + "&shareUrl=" + encodeURIComponent(redirectUrl) + "&wbDesc=" + encodeURIComponent(title1) + "&qqDesc=" + encodeURIComponent(title1);
};