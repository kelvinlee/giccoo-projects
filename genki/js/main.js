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
      desc: "点击H5，许下你的2019元气愿望",
      link: "http://m.giccoo.com/genki/",
      imgUrl: "http://m.giccoo.com/genki/img/ico.jpg",
      success: function() {},
      cancel: function() {}
    };

    var shareContent2;
    shareContent2 = {
      title: "【汤达人元气音乐节】点击H5，许下你的2019元气愿望",
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
  CloudMusic.setShareData({
    name: '汤达人元气音乐节',
    title: '汤达人元气音乐节',
    subTitle: '点击H5，许下你的2019元气愿望',
    text: '汤达人元气音乐节',
    picUrl: 'https://m.giccoo.com/genki/img/ico.jpg',
    link: 'https://m.giccoo.com/genki/'
  }) 

  
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
  
  //setPart2_5()
  //setPart3()
  
  getDefaultMessages(1,setPart4)

  pageLoop()

  console.log($("#userSelector")[0].value)
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////===============滚屏
var main=new PIXI.Container()
var bg=new pSprite("//image.giccoo.com/projects/genki/img/bgloop1.jpg")
var bg2=new pSprite("//image.giccoo.com/projects/genki/img/bgloop1.jpg")
var bg3=new pSprite("//image.giccoo.com/projects/genki/img/bgloop1.jpg")
var bg4=new pSprite("//image.giccoo.com/projects/genki/img/bgloop1.jpg")
var mainMask=new pSprite("img/main-mask.png")
var icoA=[$("#ico1"),$("#ico2"),$("#ico3"),$("#ico4"),$("#ico5"),$("#ico6"),$("#ico7"),$("#ico8"),$("#ico9"),$("#ico10"),
$("#ico11"),$("#ico12"),$("#ico13"),$("#ico14"),$("#ico15"),$("#ico16"),$("#ico17"),$("#ico18"),$("#ico19"),$("#ico20"),
$("#ico21"),$("#ico22"),$("#ico23"),$("#ico24"),$("#ico25"),$("#ico26"),$("#ico27"),$("#ico28"),$("#ico29"),$("#ico30")]
function setPage(){
  pStage.addChild(bg,main,mainMask)
  pStage.interactive=true
  pStage.touchstart=touchStart
  main.mask=mainMask
  mainMask.height=stageH*14/13
  main.addChild(bg2,bg3,bg4)
  bg3.y=3090
  bg4.y=3090*2
  TweenMax.set(icoA[parseInt(Math.random()*30)],{display:"block"})
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
  heightLimit=-nowHeight-part4.y+stageH-260-50-260-40-680

  requestAnimationFrame(pageLoop)
  renderer.render(pStage)
  if(main.y<=-(theNewNowHeight+part4.y-stageH+237+100)&&ifSubmit==0){//&&main.y>=-(nowHeight+part4.y-stageH+200)
    TweenMax.to(mainMask,.5,{height:stageH-237-20-ifInputing*100})
    //TweenMax.to(userMessage,.5,{y:stageH-237-20-ifInputing*100})
    // TweenMax.set($("#userText"),{display:"block"})
    // TweenMax.set($("#songText"),{display:"block"})
    TweenMax.set($("#userForm"),{display:"block"})
  }else{
    TweenMax.to(mainMask,.5,{height:stageH*14/13})
    //TweenMax.to(userMessage,.5,{y:stageH})
    // TweenMax.set($("#userText"),{display:"none"})
    // TweenMax.set($("#songText"),{display:"none"})
    TweenMax.set($("#userForm"),{display:"none"})

  }
  // TweenMax.set($("#userText"),{y:(stageH-237+20-20-ifInputing*100)/640*screenW})
  // TweenMax.set($("#songText"),{y:(stageH-56-50-20-ifInputing*100)/640*screenW})


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