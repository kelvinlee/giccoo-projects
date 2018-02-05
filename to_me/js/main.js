var global = {};
var descA=["过去的一年里，你付出了哪些努力？未来的一年，你有什么小目标？","2018我要努力，手拿保温杯多蹦几场养身迪。","2018我要努力，找个最甜的人一起老去。","2018我要努力，把鹅厂猪厂狼厂的offer拿到手软。","2018我要努力，告别「油腻」，重回「鲜肉」。","2018我要努力，让发际线再低一点，低一点。","2018我要努力，成为更「耐撕」的职场白骨精。","2018我要努力，做一个精致的猪猪女孩。","2018我要努力，带上蛙儿子来一场说走就走的旅行。","2018我要努力，给我的爱豆疯狂打电话。","2018我要努力，不熬最深的夜，只敷最贵的面膜。","2018我要努力，瘦成一道闪电。","2018我要努力，读比去年多的书。","2018我要努力，自己动手做一桌菜。","2018我要努力，治好拖延症。","2018我要努力，赚人生第一桶金。"]
var descAnum=0
iniListenSound()
$(document).ready(function load (){

	loadWechatConfig();
  	wx.ready(function() {
    var shareContent;
    shareContent = {
      title: "2017这么努力，2018的小目标还远吗？",
      desc: descA[descAnum],
      link: "http://m.giccoo.com/to_me/",
      imgUrl: "http://m.giccoo.com/to_me/img/ico.jpg",
      success: function() {},
      cancel: function() {}
    };
    wx.onMenuShareTimeline(shareContent);
    wx.onMenuShareAppMessage(shareContent);
    wx.onMenuShareQQ(shareContent);
    return wx.onMenuShareWeibo(shareContent);
  });
    loading()
    riot.mount("*")



});

$('body')[0].addEventListener('touchmove', function (event) {event.preventDefault();}, false);//阻止了浏览器默认的下拉事件
var screenW
var screenH

screenW=document.body.offsetWidth 
screenH=document.body.offsetHeight

var bgm=$("#bgm")[0]
//微信端背景音乐播放
function iniListenSound(){
         document.addEventListener("WeixinJSBridgeReady", function(){
             bgm.play();
        }, false);
}


var loadWechatConfig = function() {
  var hm, s, url;
  url = encodeURIComponent(window.location.href.split("#")[0]);
  hm = document.createElement('script');
  hm.src = "http://api.giccoo.com/api/config?url=" + url;
  s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(hm, s);
};

var loadT=[$("#l1"),$("#l2"),$("#l3"),$("#l4"),$("#l5"),$("#l6"),$("#l7"),$("#l8"),$("#l9"),$("#l10")]

function loading(){
  screenW=document.body.offsetWidth 
  screenH=document.body.offsetHeight
  TweenLite.set($("#loadingPage"),{display:"block"})
    for (var i =  0; i < loadT.length; i++) {
      TweenLite.set(loadT[i],{top:"50%",y:"-50%"})
      TweenLite.from(loadT[i],1.5,{opacity:0,y:"+=30",delay:0.1*i+1,scaleX:1,overwrite:0})
      TweenLite.to(loadT[i],1.5,{opacity:0,y:"-=0",delay:3+.1*i+1,overwrite:0})
    };

    TweenLite.set($("#loadingPage"),{display:"none",delay:5-0+1,onComplete:showHomePage})//----------------------------------改这里

}

// var p1t1=$("#p1t1")
// var p1t2=$("#p1t2")
// var p1t3=$("#p1t3")
// var p1t4=$("#p1t4")

// var p1t1a=$("#p1t1a")
// var p1t2a=$("#p1t2a")
// var p1t3a=$("#p1t3a")
// var p1t4a=$("#p1t4a")

var drop1=$("#drop1")
var drop2=$("#drop2")
var drop1b=$("#drop1b")
var drop2b=$("#drop2b")

var line1=$("#line1")
var line2=$("#line2")

var p1r1=$("#p1r1")
var p1r1b=$("#p1r1b")
var p1r2=$("#p1r2")
var p1r2b=$("#p1r2b")
var p1r3=$("#p1r3")
var p1r3b=$("#p1r3b")
var p1btn1pic=$("#p1btn1pic")
var p1btn2pic=$("#p1btn2pic")
var p1btn3pic=$("#p1btn3pic")

var p1btn1=$("#p1btn1")
var p1btn2=$("#p1btn2")
var p1btn3=$("#p1btn3")

function showHomePage(){

  TweenLite.set($("#page0"),{display:"block"})
  setSlide()
  setTopBtn()
  titleAni()  
}
function titleAni(){
    
  nowBtn=0
  

  //====title
  var td=1//titleDelay

  TweenLite.set(drop1,{display:"block",x:"-50%",y:"-50%"})
  TweenLite.set(drop2,{display:"block",x:"-50%",y:"-50%"})
  TweenLite.set(drop1b,{display:"block",x:"-50%",y:"-50%"})
  TweenLite.set(drop2b,{display:"block",x:"-50%",y:"-50%"})

  TweenLite.set(drop1 ,{x:-screenW/2,y:screenW/640*200,scale:1,opacity:.5})
  TweenLite.set(drop1b,{x:0,y:screenW/640*240,scale:0,opacity:1})

  TweenLite.set(drop2 ,{x:screenW/2,y:screenW/640*240,scale:0,opacity:0.5})
  TweenLite.set(drop2b,{x:0,y:screenW/640*200,scale:0,opacity:0})

  TweenLite.to(drop1,4,{x:screenW*2,scaleX:2,delay:td+0,rotation:-0,opacity:0,ease:Linear.easeNone})
  TweenLite.to(drop1b,1,{x:0,scale:2.5,delay:td+.1,rotation:40,opacity:0,ease:Linear.easeNone})

  TweenLite.to(drop2,2,{scale:2.5,delay:td+.5,ease:Linear.easeNone})
  TweenLite.to(drop2b,1,{scale:3,delay:td+.6,opacity:1})

  //======line/t/logo
  TweenLite.set(line1,{display:"block",opacity:0.3})
  TweenLite.set(line2,{display:"block",opacity:0.3})

  TweenLite.from(line1,1.5,{y:"+=25",opacity:0,ease:Back.easeOut,delay:0.4})
  TweenLite.from(line2,1.5,{y:"+=25",opacity:0,ease:Back.easeOut,delay:0.6})

  TweenLite.from($("#p1t"),2.5,{y:"+=0",opacity:0,ease:Back.easeOut,delay:td+1.6})
  TweenLite.from($("#logo"),1.5,{y:"-=25",opacity:0,ease:Back.easeOut,delay:td+1.7,onComplete:showP1hint})
  

  //======ren
  TweenLite.set(p1r1,{y:"+=0"})
  TweenLite.set(p1r2,{y:"+=0"})
  TweenLite.set(p1r3,{y:"+=0"})
  TweenLite.set(p1r1b,{y:"+=0",opacity:0})
  TweenLite.set(p1r2b,{y:"+=0",opacity:0})
  TweenLite.set(p1r3b,{y:"+=0",opacity:0})
  TweenLite.set(p1btn1pic,{x:-25,opacity:0})
  TweenLite.set(p1btn2pic,{x:-25,opacity:0})
  TweenLite.set(p1btn3pic,{x:-25,opacity:0})



  TweenLite.from(p1r1,1,{opacity:0,y:"+=150",delay:1.0,ease:Back.easeOut})
  TweenLite.from(p1r2,1,{opacity:1,x:"+=350",delay:0.5,ease:Back.easeOut})
  TweenLite.from(p1r3,1,{opacity:1,x:"-=350",delay:0.1,ease:Back.easeOut})

  //=====btn
  TweenLite.set(p1btn1,{width:"35.16%",left:"29.38%",height:screenW/640*264+12,y:screenH-screenW/640*618,display:"block"})
  TweenLite.set(p1btn2,{width:"43.13%",left:0,height:screenW/640*354+12,bottom:0,display:"block"})
  TweenLite.set(p1btn3,{width:"52.97%",right:0,height:screenW/640*455+12,bottom:0,display:"block"})

}

//=====p1提示
var fristTime=1
function showP1hint(){
  if(fristTime==1){
    TweenLite.set($("#p1hint"),{display:"block"})
    TweenLite.from($("#p1hint"),.5,{opacity:0,y:"-=20",overwrite:0})
    TweenLite.to($("#p1hint"),.5,{opacity:0,overwrite:0,delay:2})
    TweenLite.set($("#p1hint"),{display:"none",delay:2.5})
  }
  
}

// $("#p1hint").click(function(){
//   TweenLite.set($("#p1hint"),{display:"none",delay:.5})
//   TweenLite.to($("#p1hint"),.5,{opacity:0})
// })


//======
var nowBtn=0
p1btn1.click(function(){
  if(nowBtn!=1){
    nowBtn=1
    console.log("显示第一人")
    showPeople(0)
  }else{
    console.log("去第一人")
    goPeople()
  }
})
p1btn2.click(function(){
  if(nowBtn!=2){
    nowBtn=2
    //console.log("显示第一人")
    showPeople(1)
  }else{
    //console.log("去第一人")
    goPeople()
  }
})
p1btn3.click(function(){
  if(nowBtn!=3){
    nowBtn=3
    //console.log("显示第一人")
    showPeople(2)
  }else{
    //console.log("去第一人")
    goPeople()
  }
})
var pA=[p1r1,p1r2,p1r3]
var pbA=[p1r1b,p1r2b,p1r3b]
var pbtnA=[p1btn1pic,p1btn2pic,p1btn3pic]

var peopleA=[$(".people1"),$(".people2"),$(".people3")]

function showPeople(pNum){
  for (var i = 0; i < 3; i++) {
    TweenLite.to(pA[i],.5,{bottom:-25,opacity:1})
    TweenLite.to(pbA[i],.5,{bottom:-25,opacity:0})
    TweenLite.to(pbtnA[i],.5,{x:-25,bottom:-0,opacity:0})
  };
  TweenLite.to(pA[pNum],.5,{bottom:0,opacity:1})
  TweenLite.to(pbA[pNum],.5,{bottom:0,opacity:1})
  TweenLite.to(pbtnA[pNum],.5,{x:0,bottom:0,opacity:1,ease:Back.easeOut})
}
function goPeople(){
    TweenLite.set(p1btn1,{display:"none"})
    TweenLite.set(p1btn2,{display:"none"})
    TweenLite.set(p1btn3,{display:"none"})
    for (var i = 0; i < 3; i++) {
      TweenLite.set(pA[i],{bottom:-25,opacity:1})
      TweenLite.set(pbA[i],{bottom:-25,opacity:0})
      TweenLite.set(pbtnA[i],{x:-25,bottom:-0,opacity:0})
    };
    nowPage=1
    goPage()
    
}
//===================== 文章下按钮 =====================
$("#btnGo").click(function(){
  nowPage=4
  goPage()
})


//===================== 出现下一步按钮 =====================
var ifDone=0
$("#userUGC").click(function(){
  if(ifDone==0){
    TweenLite.set($("#btnStart"),{display:"block"})
    ifDone=1
  }
})

$("#btnStart").click(function(){
  TweenLite.set($("#btnStart"),{display:"none"})
  TweenLite.set($("#btnChangeT"),{display:"none"})
  TweenLite.set($("#mask1"),{display:"none"})
  TweenLite.set($("#QR"),{display:"block"})
  TweenLite.set($(".icon-restart"),{display:"none"})
  TweenLite.set($(".icon-rotation"),{display:"none"})
  TweenLite.set($("#doneLayer"),{display:"block",opacity:0})
  TweenLite.set($("#audioPlay"),{display:"none",opacity:0})
  TweenLite.to($("#doneLayer"),1,{opacity:1})
  

  descAnum=nowT+1
  loadWechatConfig();
  wx.ready(function() {
    var shareContent;
    shareContent = {
      title: "2017这么努力，2018的小目标还远吗？",
      desc: descA[descAnum],
      link: "http://m.giccoo.com/to_me/",
      imgUrl: "http://m.giccoo.com/to_me/img/ico.jpg",
      success: function() {},
      cancel: function() {}
    };
    wx.onMenuShareTimeline(shareContent);
    wx.onMenuShareAppMessage(shareContent);
    wx.onMenuShareQQ(shareContent);
    return wx.onMenuShareWeibo(shareContent);
  
  });
})

$("#doneLayer").click(function(){
  TweenLite.set($("#doneLayer"),{display:"none",delay:1})
  TweenLite.to($("#doneLayer"),1,{opacity:0})
  TweenLite.set($("#fakeL"),{display:"block"})

})

//===================== 切换文案 =====================
var tA=[$("#t1"),$("#t2"),$("#t3"),$("#t4"),$("#t5"),$("#t6"),$("#t7"),$("#t8"),$("#t9"),$("#t10"),$("#t11"),$("#t12"),$("#t13"),$("#t14"),$("#t15")]
var nowT=0
var btnChangeT=$("#btnChangeT")
function setT(){
   TweenLite.set($("#QR"),{display:"none"})
  nowT=parseInt(Math.random()*15)
  TweenLite.set($(".tAll"),{display:"none"})
  TweenLite.set(tA[nowT],{display:"block"})
  TweenLite.set(btnChangeT,{width:"50%",left:"25%",height:screenW/640*116,y:screenW/640*347})
}
function changeT(){
  TweenLite.set($(".tAll"),{display:"none"})
  TweenLite.set(tA[nowT],{display:"block",x:0+screenW/640*12})
  TweenLite.from(tA[nowT],1.5,{x:screenW/6,ease:Elastic.easeOut})
}
btnChangeT.click(function(){
    nowT++
    if (nowT==15) {
      nowT=0
    };
    changeT()
})

//===================== 浮层动画 =====================
function setPage4(){
    TweenLite.set($("#hintLayer"),{display:"block",opacity:0})
    TweenLite.to($("#hintLayer"),1,{opacity:1,overwrite:0,delay:.5})

    TweenLite.set($("#doneLayer"),{display:"none",opacity:0})
    TweenLite.set($("#fakeL"),{display:"none"})
}

$("#hintLayer").click(function(){
    TweenLite.to($("#hintLayer"),1,{opacity:0})
    TweenLite.set($("#hintLayer"),{display:"none",delay:1})
})

//===================== 顶部按钮 =====================

var topBtnClose=$("#topBtn0")
var topBtn1=$("#topBtn1")
var topBtn2=$("#topBtn2")
var topBtn3=$("#topBtn3")
var topBtn4=$("#topBtn4")
var topBtnOpen=$("#topBtnOpen")

function setTopBtn(){
  TweenLite.set(topBtnClose,{x:screenW/640*258,display:"none"})
  TweenLite.set(topBtn1   ,{x:screenW/640*329,display:"none"})
  TweenLite.set(topBtn2   ,{x:screenW/640*401,display:"none"})
  TweenLite.set(topBtn3   ,{x:screenW/640*473,display:"none"})
  TweenLite.set(topBtn4   ,{x:screenW/640*547,display:"none"})
  TweenLite.set(topBtnOpen,{x:screenW/640*547,display:"block"})
}

function showTopBtn(){
  setTopBtn()

  TweenLite.set(topBtnClose,{x:screenW/640*258,display:"block",opacity:1})
  TweenLite.set(topBtn1    ,{x:screenW/640*329,display:"block",opacity:1})
  TweenLite.set(topBtn2    ,{x:screenW/640*401,display:"block",opacity:1})
  TweenLite.set(topBtn3    ,{x:screenW/640*473,display:"block",opacity:1})
  TweenLite.set(topBtn4    ,{x:screenW/640*547,display:"block",opacity:1})
  TweenLite.set(topBtnOpen,{x:screenW/640*547,delay:1})

  TweenLite.from(topBtnClose,1.0,{x:screenW/640*258+35,opacity:0,ease:Elastic.easeOut,delay:0.05*4})
  TweenLite.from(topBtn1    ,1.0,{x:screenW/640*329+35,opacity:0,ease:Elastic.easeOut,delay:0.05*3})
  TweenLite.from(topBtn2    ,1.0,{x:screenW/640*401+35,opacity:0,ease:Elastic.easeOut,delay:0.05*2})
  TweenLite.from(topBtn3    ,1.0,{x:screenW/640*473+35,opacity:0,ease:Elastic.easeOut,delay:0.05*1})
  TweenLite.from(topBtn4    ,1.0,{x:screenW/640*547+35,opacity:0,ease:Elastic.easeOut,delay:0.05*0})
  TweenLite.to(topBtnOpen,.5,{x:screenW/640*547-55,opacity:0})
}

function hideTopBtn(){
  TweenLite.set(topBtnClose,{x:screenW/640*258,display:"none",delay:.7})
  TweenLite.set(topBtn1   ,{x:screenW/640*329,display:"none",delay:.7})
  TweenLite.set(topBtn2   ,{x:screenW/640*401,display:"none",delay:.7})
  TweenLite.set(topBtn3   ,{x:screenW/640*473,display:"none",delay:.7})
  TweenLite.set(topBtn4   ,{x:screenW/640*547,display:"none",delay:.7})

  TweenLite.to(topBtnClose,.5,{x:screenW/640*258+35,opacity:0,delay:0.05*0})
  TweenLite.to(topBtn1    ,.5,{x:screenW/640*329+35,opacity:0,delay:0.05*1})
  TweenLite.to(topBtn2    ,.5,{x:screenW/640*401+35,opacity:0,delay:0.05*2})
  TweenLite.to(topBtn3    ,.5,{x:screenW/640*473+35,opacity:0,delay:0.05*3})
  TweenLite.to(topBtn4    ,.5,{x:screenW/640*547+35,opacity:0,delay:0.05*4})

  TweenLite.set(topBtnOpen,{x:screenW/640*547,opacity:1,display:"block"})

  TweenLite.from(topBtnOpen,.5,{x:screenW/640*547-55,opacity:0})
}

topBtnOpen.click(function(){
  showTopBtn()
})

topBtnClose.click(function(){
  hideTopBtn()
})

topBtn1.click(function(){
  if(nowBtn!=1){
    nowBtn=1
    nowPage=1
    goPage()
    hideTopBtn()
  }
})

topBtn2.click(function(){
  if(nowBtn!=2){
    nowBtn=2
    nowPage=1
    goPage()
    hideTopBtn()
  }
})

topBtn3.click(function(){
  if(nowBtn!=3){
    nowBtn=3
    nowPage=1
    goPage()
    hideTopBtn()
  }
})

topBtn4.click(function(){
 // nowBtn=0
 hideTopBtn()
  nowPage=0
  goPage()
  
})


//===================== 翻页 =====================

var nowPage = 0;
var startY = 0;
var startScrollTop;
var pageUpDown =0
var sliderA=[$('#page0'),$('#page1'),$('#page2'),$('#page3'),$('#page4')]


function setSlide(){
  $('.content')[0].addEventListener('touchstart',startTouch,false)
  $('.content')[0].addEventListener('touchmove',moveTouch,false)
  $('.content')[0].addEventListener('touchend',endTouch,false)
}

  
function startTouch(event){

      startY=event.touches[0].clientY
      pageUpDown=0
    }
    function moveTouch(event){
      var nowY=event.touches[0].clientY
      event.preventDefault();
      if (nowY-startY>80&&nowPage!=0) {
        pageUpDown=1
      }else if (nowY-startY< -80&&nowPage!=3) {
        pageUpDown=-1
      }else{
        pageUpDown=0
      };  
    }
    function endTouch(event){
      if (pageUpDown == 1&&nowBtn!=0) {
        //alert("上一页")
        nowPage--
        goPage()
      }else if (pageUpDown == -1&&nowBtn!=0) {
        //alert("下一页")
        nowPage++
        goPage()
      }else if (pageUpDown==0) {
        //alert("不翻页")
      };  
    } 
    function goPage(){
      TweenLite.set(peopleA[0],{display:"none"})
      TweenLite.set(peopleA[1],{display:"none"})
      TweenLite.set(peopleA[2],{display:"none"})
      TweenLite.set(peopleA[nowBtn-1],{display:"block"})
       for (var i = 0; i < sliderA.length; i++) {
        if (i<nowPage) {
          TweenLite.to(sliderA[i],.5,{top:"-100%",display:'none'})//,ease:Back.easeOut
        };
        if (i==nowPage) {
          TweenLite.to(sliderA[i],.5,{top:"0%",display:'block'})
          //TweenLite.set(colorBG,{'background-color':colorA[i]})
          //if (i==0||i==8) {arrowDown.css({'display':'none'})}else{arrowDown.css({'display':'block'})};
          //if (i!=0) {btnBack.css({'display':'block'})}else{btnBack.css({'display':'none'})};
           if(i==0){
              titleAni()
           }

           if (i==0||i==4) {
              TweenLite.set($(".btnGroup"),{display:"none"})
           }else{
              TweenLite.set($(".btnGroup"),{display:"block"})
           }

           if (i==4) {
              setPage4();
              setT();
           };
        };
        if (i>nowPage) {
          TweenLite.to(sliderA[i],.5,{top:"100%",display:'none'})
        };
       }
    }

//===================== 翻页 =====================

   var audio;
    function initAudio1(id){
        audio=document.getElementById(id);
    };

    window.onload=function(){
        initAudio1("bgm");
         if (audio.paused) {
            $("#audioPlay").removeClass("stopM").addClass("playM")
            //this.style.backgrundImage='url("../img/musicOn.png")';
        }else{
            $("#audioPlay").removeClass("playM").addClass("stopM")
            //this.style.backgrundImage='url("../img/musicOff.png")';
        };
    }
    var ap=document.getElementById("audioPlay");
    $("#audioPlay").on("click",function(){
        if (audio.paused) {
            audio.play();
            $("#audioPlay").removeClass("playM").addClass("stopM")
            //this.style.backgrundImage='url("../img/musicOn.png")';
        }else{
            audio.pause();
            $("#audioPlay").removeClass("stopM").addClass("playM")
            //this.style.backgrundImage='url("../img/musicOff.png")';
        };
    });