var global = {};
var sys="other"
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
      title: "高考，你准备好了吗",
      desc: "",
      link: "http://m.giccoo.com/gaokao/",
      imgUrl: "http://m.giccoo.com/gaokao/img/ico.jpg",
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
  riot.mount("*")




});




var wlType=3//0文科 1理科
var examType=parseInt(Math.random()*4)//abcd卷
var nowQ=0
var lastQ=0

var allAnswer=[ [ [2,2,4,1,3,1,1,3,2,2],[4,1,4,3,3,1,3,3,4,4],[4,3,3,4,3,3,4,3,4,4],[3,2,3,4,3,4,2,3,4,3] ],
                [ [2,2,4,1,3,1,4,4,2,1],[4,1,4,3,3,1,2,4,2,4],[4,3,3,4,3,3,2,4,1,4],[3,2,3,4,3,4,2,4,2,2] ] ]

var btnType  =[ [ [0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,2,0,1,0,0],[0,3,0,0,0,2,2,1,0,0],[0,0,0,0,0,0,0,1,0,0] ],
                [ [0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,2,0,0,0,0],[0,3,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0] ] ]

var userAnswer=[0,0,0,0,0,0,0,0,0,0]



//$('body')[0].addEventListener('touchmove', function (event) {event.preventDefault();}, false);//阻止了浏览器默认的下拉事件
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


$("#shareBtn").click(neteaseShare)

function neteaseShare() {
  var picUrl, redirectUrl, subTitle2, title1, title2;
  title1 = "高考，你准备好了吗";
  picUrl = "http://m.giccoo.com/gaokao/img/ico.jpg";
  redirectUrl = "http://m.giccoo.com/gaokao/";
  title2 = "高考，你准备好了吗";
  subTitle2 = "";
  window.location.href = "orpheus://share/" + encodeURIComponent(title1) + "/" + encodeURIComponent(picUrl) + "/" + encodeURIComponent(redirectUrl) + "/" + encodeURIComponent(title2) + "/" + encodeURIComponent(subTitle2);
  // window.location.href = "orpheus://sharepic?picUrl="+encodeURIComponent(picUrl)+"&shareUrl="+encodeURIComponent(redirectUrl)+"&wbDesc="+encodeURIComponent(title1)+"&qqDesc="+encodeURIComponent(title1)
  return console.log("run after?");
};

var stage = new createjs.Stage("mainCanvas");

function initAll(){
  stageW=640
  stageH=screenH/screenW*640

  document.getElementById("mainCanvas").width=640//screenW//640
  document.getElementById("mainCanvas").height=stageH

  createjs.Ticker.framerate = 30;
  //createjs.Ticker.timingMode = createjs.Ticker.RAF;
  createjs.Ticker.addEventListener("tick",handleTick);

  goLoading();
}

function handleTick(){
  stage.update();
}

var stage1=new createjs.Container()
var p1bg=new createjs.Bitmap("img/bg.jpg")

function goLoading(){
  stage.addChild(stage1)
  stage1.addChild(p1bg)
  TweenLite.set(p1bg,{scaleX:1,scaleY:stageH/1000})

  setP1title()
  p1title.gotoAndPlay("shake")
  TweenLite.set(p1title,{regX:320,regY:150.5,x:320,y:425.5/1000*stageH})

  setLoadingBar()

}
var p1btn=$("#p1btn")
function showP1(){
  TweenLite.to(p1title,1,{y:(425.5-167)})
  setP1btn()
  p1go.gotoAndPlay("shake")
  TweenLite.set(p1go,{y:stageH})
  TweenLite.to(p1go,1,{y:stageH-188,delay:.1})
  setP1pic()
  setLogo()
  logo("white")
  TweenLite.set(p1btn,{display:"block"})
}
p1btn.click(function(){
  TweenLite.set(p1btn,{display:"none"})
  goP2()
})

var stage2=new createjs.Container()
var p2bg=new createjs.Bitmap("img/p2bg.jpg")
var userName=$("#userName")
var UserTextarea=$("#UserTextarea")
var type1btn=$("#type1btn")
var type2btn=$("#type2btn")

var typeMark=new createjs.Shape()
var boy=new createjs.Bitmap("img/boy.png")
var p2start=$("#p2start")
function goP2(){//========================准考证页
  TweenLite.set($("#btnshare"),{display:"none"})
  stage.addChildAt(stage2,0)
  stage2.addChild(p2bg)
  TweenLite.set(p2bg,{y:stageH,regY:1386})
  p1title.visible=false
  p1go.visible=false
  TweenLite.to(p1bg,.5,{scaleY:0,y:stageH})
  for (var i = 1; i <= 10; i++) {
    TweenLite.set(p1picA[i-1],{alpha:0,delay:i*.05,onComplete:removeTar,onCompleteParams:[p1picA[i-1]]})
  };
  logo("black")
  TweenLite.set(userName,{display:"block",bottom:(320+30)/stageH*screenH,left:309/640*screenW,height:63/640*screenW,width:272/640*screenW})
  TweenLite.set(UserTextarea,{"font-size":50/640*screenW})
  TweenLite.set(type1btn,{height:100/640*screenW,width:80/640*screenW,bottom:190/640*screenW,left:404/640*screenW,display:"block"})
  TweenLite.set(type2btn,{height:100/640*screenW,width:80/640*screenW,bottom:190/640*screenW,left:487/640*screenW,display:"block"})
  typeMark.graphics.beginFill("#989898").drawRect(0, 0, 17, 6);
  stage2.addChild(typeMark)

  TweenLite.set(typeMark,{alpha:0})
  
  stage2.addChild(boy)
  TweenLite.set(boy,{y:200/1000*stageH,regY:140,regX:126,x:126})
  //TweenLite.from(boy,2,{scale:0,ease:Elastic.easeOut})

  setUserPic()
  TweenLite.set(p2start,{display:"block"})
}
function removeTar(_tar){
  p1pic.removeChild(_tar)
}


function goP3(){//====================开始考试
  //stage.removeChild(stage2)
  TweenLite.to(boy,1,{alpha:0})
  logo("black")

}

//==================结果页
var stage4=new createjs.Container()
var p4bg=new createjs.Bitmap("img/p4bg.png")
var p4bgABCDA=["img/p4bga.png","img/p4bgb.png","img/p4bgc.png","img/p4bgd.png"]
var p4bgtypeA=["img/p4bgtype0.png","img/p4bgtype1.png"]

var p4bgABCD
var p4bgtype
var boy2=boy.clone()

var endCopy

var score1=new createjs.Text("150","28px Arial", "#000000")
var score2=new createjs.Text("150","28px Arial", "#000000")
var score3=new createjs.Text("150","28px Arial", "#000000")
var score4=new createjs.Text("150","28px Arial", "#000000")
var score5=new createjs.Text("150","28px Arial", "#000000")
var score12345A=[score1,score2,score3,score4,score5]

var userInputName=new createjs.Text("哈哈哈哈哈","50px Arial", "#000000")
var userPhoto
function goP4(){
  if(sys!="other"){
    TweenLite.set($("#btnshare"),{display:"block"})
  }
  TweenLite.set(btnA,{display:"none"})
  TweenLite.set(btnB,{display:"none"})
  TweenLite.set(btnC,{display:"none"})
  TweenLite.set(btnD,{display:"none"})

  TweenLite.set($("#submitBtn"),{display:"none"})
  TweenLite.set($("#nextBtn"),{display:"none"})
  TweenLite.set($("#backBtn"),{display:"none"})

  stage.addChild(stage4)
  TweenLite.from(stage4,.5,{alpha:0,onComplete:savePic})

  
  TweenLite.set($("#endBtns"),{display:"block",opacity:0})
  TweenLite.to($("#endBtns"),.5,{display:"block",opacity:1})


  logo("white")
  stage4.addChild(p4bg)
  TweenLite.set(p4bg,{regY:1300,y:stageH})

  p4bgABCD=new createjs.Bitmap(p4bgABCDA[examType])
  p4bgtypeA=new createjs.Bitmap(p4bgtypeA[wlType])

  stage4.addChild(p4bgABCD)
  stage4.addChild(p4bgtypeA)
  TweenLite.set(p4bgABCD,{regY:1300,y:stageH})
  TweenLite.set(p4bgtypeA,{regY:1300,y:stageH})

  var _scale=1
  if(stageH<1000&&stageH>900){
    var _scale=(stageH-900)/100
  }else if(stageH<=900){
    _scale=0
  }
  stage4.addChild(boy2)
  TweenLite.set(boy2,{y:200/1000*stageH-60*(1-_scale),regY:140-40*(1-_scale),regX:126,x:126,scale:.7+.3*_scale})

  if(finalScore[4]*75<=300){
    endCopy=new createjs.Bitmap("img/endcopy1.png")
  }else if(finalScore[4]*75>300&&finalScore[4]*75<=450){
    endCopy=new createjs.Bitmap("img/endcopy2.png")
  }else if(finalScore[4]*75>450&&finalScore[4]*75<=600){
    endCopy=new createjs.Bitmap("img/endcopy3.png")
  }else if(finalScore[4]*75>600&&finalScore[4]*75<750){
    endCopy=new createjs.Bitmap("img/endcopy4.png")
  }else if(finalScore[4]*75==750){
    endCopy=new createjs.Bitmap("img/endcopy5.png")
  }
  stage4.addChild(endCopy)
  TweenLite.set(endCopy,{y:200/1000*stageH-9-60*(1-_scale),regY:131-40*(1-_scale),regX:188,x:188,scale:.7+.3*_scale})

  for (var i = 0; i <5 ; i++) {
    stage4.addChild(score12345A[i])
    score12345A[i].text=finalScore[i]*75
    score12345A[i].textAlign="center"
    TweenLite.set(score12345A[i],{y:stageH-157,x:109+i*105})

  };


  userInputName.text=UserInput.value
  userInputName.textAlign="center"
  stage4.addChild(userInputName)
  TweenLite.set(userInputName,{x:437,y:stageH-451})

  userPhoto=new createjs.Bitmap(convertCanvasToImage($("#imageCtrl")[0]))
  
  //document.getElementById("pngHolder").appendChild(convertCanvasToImage($("#imageCtrl")[0]));
  stage4.addChild(userPhoto)
  TweenLite.set(userPhoto,{y:stageH-485,x:61})

  TweenLite.set($("#endbtn1"),{display:"block"})
  TweenLite.set($("#endbtn2"),{display:"block"})
  TweenLite.set($("#endbtn3"),{display:"block"})
}
function savePic(){
  document.getElementById("pngHolder").appendChild(convertCanvasToImage($("#mainCanvas")[0]));
  //TweenLite.set($("#pngHolder"),{display:"block",opacity:1})
}
$("#btnshare").click(function(){

})

function neteaseShare() {
  var picUrl, redirectUrl, subTitle2, title1, title2;
  title1 = "高考，你准备好了吗";
  picUrl = "http://m.giccoo.com/gaokao";
  redirectUrl = "http://m.giccoo.com/gaokao";
  title2 = "高考，你准备好了吗";
  subTitle2 = "";
  window.location.href = "orpheus://share/" + encodeURIComponent(title1) + "/" + encodeURIComponent(picUrl) + "/" + encodeURIComponent(redirectUrl) + "/" + encodeURIComponent(title2) + "/" + encodeURIComponent(subTitle2);
  // window.location.href = "orpheus://sharepic?picUrl="+encodeURIComponent(picUrl)+"&shareUrl="+encodeURIComponent(redirectUrl)+"&wbDesc="+encodeURIComponent(title1)+"&qqDesc="+encodeURIComponent(title1)
  return console.log("run after?");
};


var data
$("#endbtn1").click(function(){//===网易
  if(sys=="other"){
    TweenLite.set($("#pngHolder"),{display:"block",opacity:1})
    TweenLite.set($("#shareHint"),{display:"block"})
  }else{
    upload($("#mainCanvas")[0].toDataURL("image/png"))
  }
  
})
var imageurl = "http://api.giccoo.com/api/upload/image64/";

function neteaseShareImage(_picurl) {
  var picUrl, redirectUrl, title1;
  title1 = "高考，你准备好了吗";
  picUrl = "http://image.giccoo.com/upload/gaokao/" + _picurl + "@!large";
  redirectUrl = "http://m.giccoo.com/gaokao/";
  console.log("orpheus://sharepic?picUrl=" + encodeURIComponent(picUrl) + "&shareUrl=" + encodeURIComponent(redirectUrl) + "&wbDesc=" + encodeURIComponent(title1) + "&qqDesc=" + encodeURIComponent(title1));
  return window.location.href = "orpheus://sharepic?picUrl=" + encodeURIComponent(picUrl) + "&shareUrl=" + encodeURIComponent(redirectUrl) + "&wbDesc=" + encodeURIComponent(title1) + "&qqDesc=" + encodeURIComponent(title1);
};
function upload(image) {
        var data;
        // console.log "upload:"
        data = {
          image: image,
          folder:"gaokao"
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

$("#pngHolder").click(function(){
  TweenLite.set($("#pngHolder"),{display:"none",opacity:1})
  TweenLite.set($("#shareHint"),{display:"none"})
})

var closeBtn=$("#closeBtn")
var answerA=[[$("#p4ansewr0_0"),$("#p4ansewr0_1"),$("#p4ansewr0_2"),$("#p4ansewr0_3")],[$("#p4ansewr1_0"),$("#p4ansewr1_1"),$("#p4ansewr1_2"),$("#p4ansewr1_3")]]
$("#endbtn2").click(function(){
  TweenLite.set($("#rightAnswer"),{display:"block",height:673/640*screenW})
  TweenLite.set(answerA[wlType][examType],{display:"block"})

  
  TweenLite.set(closeBtn,{display:"block",width:"7.5%",right:0,y:screenH-(673+51)/640*screenW})
})
closeBtn.click(function(){
  TweenLite.set(closeBtn,{display:"none"})
  TweenLite.set($("#rightAnswer"),{display:"none"})
})
$("#endbtn3").click(function(){
  window.location.href="http://www.hbyangyuan.com/"
})

function convertCanvasToImage(canvas) {
  var image = new Image();
  //image.crossOrigin="Anonymous"
  image.src = canvas.toDataURL("image/png");
  return image;
}