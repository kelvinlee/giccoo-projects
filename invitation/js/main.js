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
  setPage2()
  setPage3()
}

function pageLoop(){
  requestAnimationFrame(pageLoop)
  renderer.render(pStage)
}



function savePic(){

  document.getElementById("pngHolder").innerHTML=""
  document.getElementById("pngHolder").appendChild(convertCanvasToImage(renderer.view)); 
  TweenLite.set($("#pngHolder"),{display:"block"})
  //TweenLite.set($("#shareHint"),{display:"block"})
}

function convertCanvasToImage(canvas) {
  var image = new Image();
  //image.crossOrigin="Anonymous"
  image.src = canvas.toDataURL("image/png");
  return image;
}

// $("#pngHolder").click(function(){
//   TweenLite.set($("#pngHolder"),{display:"none",opacity:1})
//   TweenLite.set($("#shareHint"),{display:"none"})
//   footer.alpha=1
// })

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
var p1arrow=new pSprite("img/p1arrow.png")
var p1endt=new pSprite("img/p1endt.png")

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

  page1.addChild(p1arrow)
  page1.addChild(p1endt)

  p1arrow.y=stageH-55
  p1endt.y=stageH-103

  TweenMax.to(p1arrow,.6,{y:"+=10",repeat:5000,yoyo:true,ease:Sine.easeIn})

  pStage.interactive=true
  pStage.touchstart=touchStart
  

}

var startY
function touchStart(_e){
  startY=_e.data.global.y
  pStage.touchend=touchEnd
}
function touchEnd(_e){
  if(startY-_e.data.global.y>90){
    goPage2()
  }
}


function goPage2(){
  pStage.interactive=false
  pStage.touchstart=null
  console.log("dddd")
  TweenMax.to(page1,.5,{alpha:0,y:-stageH/4,onComplete:function(){page1.visible=false}})
  page2.visible=true
  title.visible=true
  p2A=[title,p2t1,p2t2,p2t3,p2bg,p2endt,p2btn]
  for (var i = 0; i < p2A.length; i++) {
    TweenMax.from(p2A[i],.6,{alpha:0,y:"+=136",delay:.2+.05*i})
  };
  p2btn.interactive=true
  p2btn.touchstart=goPage3
}

var page2=new PIXI.Container()
var title=new pSprite("img/title.png")
var p2t1=new pSprite("img/p2t1.png")
var p2t2=new pSprite("img/p2t2.png")
var p2t3=new pSprite("img/p2t3.png")
var p2bg=new pSprite("img/p2bg.png")
var p2endt=new pSprite("img/p2endt.png")
var p2btn=new pSprite("img/p2btn.png")
var p2A=[]

function setPage2(){
  pStage.addChild(page2)
  page2.visible=false
  pStage.addChild(title)
  title.visible=false
  p2A=[p2t1,p2t2,p2t3,p2bg,p2endt,p2btn]
  var i
  for (i = 0; i < p2A.length; i++) {
    page2.addChildAt(p2A[i],0)
    p2A[i].pivot.set(320,500)
    p2A[i].position.set(320,stageH/2)
  };
  title.y=stageH/2-337
  p2endt.y=stageH-145+500
  p2btn.y=stageH-83+500
  
}
var page3=new PIXI.Container()
var p3t=new pSprite("img/p3t.png")
var p3bg=new pSprite("img/p3bg.png")
function setPage3(){
  pStage.addChild(page3)
  page3.addChild(p3bg)
  page3.addChild(p3t)

  p3t.pivot.set(320,500)
  p3t.position.set(320,stageH/2)

  p3bg.pivot.set(320,260)
  p3bg.position.set(320,stageH*.65-253/2+15)
  page3.visible=false


}
function goPage3(){
  console.log("333")
  page3.visible=true
  TweenMax.to(page2,.5,{alpha:0,y:-stageH/8,onComplete:function(){page2.visible=false}})
  //TweenMax.from(page3,.5,{alpha:0,y:"+=20",onComplete:setPage4})//============================改这里
  TweenMax.from(page3,.5,{alpha:0,y:"+=20",onComplete:function(){reg.show = true}})//============================改这里
}
var page4=new PIXI.Container()
var border=new PIXI.Container()
var b_up=new pSprite("img/b_up.png")
var b_down=new pSprite("img/b_down.png")
var b_mid=new pSprite("img/b_mid.png")
var p4bg=new pSprite("img/p4bg.png")
var t0,t1,t2,t3
var textA=["亲爱的Apple","北京望京凯悦酒店\n“呼吸绿洲”\n欢迎您的莅临\n与我们一起悦享自然","时间 | 9月22日11-12点555\n地点 | 北京坊 东广场","* 每个时段名额有限，请准时参加"]

var userName111="大苹果"
var userDate111="9月22日"
var userTime111="11-12点"

function setPage4(){
  pStage.addChild(page4)
  page4.visible=false

  page4.addChild(p4bg)
  p4bg.pivot.set(320,500)
  p4bg.position.set(320,stageH/2)


  page4.addChild(border)
  border.addChild(b_up)
  border.addChild(b_down)
  border.addChild(b_mid)
  b_down.y=stageH-300
  b_mid.y=200
  b_mid.height=stageH-300-200

  userTime111=userTime111.substr(0,6)
  textA[0]="亲爱的"+userName111
  textA[2]="时间 | "+userDate111+userTime111+"\n地点 | 北京坊 东广场"

  t0 = new PIXI.Text(textA[0], {
        fontSize: 27,
        fill: 'white',
        align: 'center',
        letterSpacing:3
    });

  t1 = new PIXI.Text(textA[1], {
        fontSize: 22,
        fill: 'white',
        align: 'center',
        lineHeight: 32,
        letterSpacing:3
    });
  t2 = new PIXI.Text(textA[2], {
        fontSize: 22,
        fill: 'white',
        align: 'center',
        letterSpacing:3
    });
  t3 = new PIXI.Text(textA[3], {
        fontSize: 18,
        fill: 'white',
        align: 'center',
        letterSpacing:3
    });

  t0.position.set(320-t0.width/2,stageH/2-121)
  t1.position.set(320-t1.width/2,stageH/2-43)
  t2.position.set(320-t2.width/2,stageH/2+126)
  t3.position.set(320-t3.width/2,stageH/2+211)




  page4.addChild(t0,t1,t2,t3)

  
  
}
function goPage4(){
  page4.visible=true
  TweenMax.to(page3,.5,{alpha:0,y:-stageH/8,onComplete:function(){page3.visible=false}})
  TweenMax.set($("#p4down"),{display:"block"})
  TweenMax.from($("#p4down"),1,{opacity:0,bottom:-10,onComplete:function(){savePic()}})
  
}
function goPage5() {
  // 注册成功会调用 goPage5()
  reg.show = false // true 会显示
  // 如果reg 需要俱下对其 （默认剧中） 就把html上的reg 加一个down （没有top）
  var name = reg.form.username.value
  var date = reg.form.province.value
  var time = reg.form.city.value

  userName111=name
  userDate111=date
  userTime111=time

  setPage4()
  goPage4()
  console.log(userName111,userDate111,userTime111)
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