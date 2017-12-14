
$(document).ready(function load (){
	loadWechatConfig();
  	wx.ready(function() {
    var shareContent;
    shareContent = {
      title: "知食日报",
      desc: "",
      link: "http://m.giccoo.com/zhihunews/",
      imgUrl: "http://m.giccoo.com/zhihunews/img/ico.jpg",
      success: function() {},
      cancel: function() {}
    };
    wx.onMenuShareTimeline(shareContent);
    wx.onMenuShareAppMessage(shareContent);
    wx.onMenuShareQQ(shareContent);
    return wx.onMenuShareWeibo(shareContent);
  });


    loadingAni()
    setPage1()

});

$('body')[0].addEventListener('touchmove', function (event) {event.preventDefault();}, false);//阻止了浏览器默认的下拉事件
var screenW
var screenH

screenW=document.body.offsetWidth 
screenH=document.body.offsetHeight

var loading

// function initLoading(){
//     loading = new Vue({
//       el:"#loading",
//       data:{
//         ifShow: false,
//         barWidth:"0%"
//       },
//       methods:{
//         enter: function (el, done) {
//           TweenLite.to(this,1,{barWidth:"100%",onComplete:done})
//           setTimeout(function(){
//             loading.ifShow=false;
//           },1000)
//         },
//         leave: function (el, done) {
//           TweenLite.to(el,1,{opacity:0,onComplete:done})
//         }
//       },
//       mounted:function(el){
//           this.ifShow=true;
//       }
      
//     })
// }

var ifHint=1

function loadingAni(){
  //initLoading()
  TweenLite.to($("#loadingBar1"),2,{width:"100%"})
  TweenLite.to($("#loading"),1,{opacity:0,delay:2})
  TweenLite.set($("#loading"),{display:"none",delay:3})

  TweenLite.to($("#p1hand"),1,{left:"12%",delay:2,onComplete:moveHand})

  TweenLite.to($("#p1hint"),1,{opacity:0,delay:6,onComplete:killHint})

  TweenLite.set($("#page1"),{display:"block"})
}
function killHint(){
  TweenLite.set($("#p1hint"),{display:"none"})
  ifHint=0
  setPage()
}

function setPage(){
    $('.content')[0].addEventListener('touchstart',startTouch,false)
    $('.content')[0].addEventListener('touchmove',moveTouch,false)
    $('.content')[0].addEventListener('touchend',endTouch,false)
}
//===========================================================================================翻页

  var nowPage = 0;
  var startX = 0;
  var startScrollTop;
  var pageUpDown =-1
  var pageA=[$('#page1'),$('#page2'),$('#page3'),$('#page5'),$('#page6'),$('#page7')]


  function startTouch(event){
    startX=event.touches[0].clientX
    pageUpDown=0

  }
  function moveTouch(event){
    var nowX=event.touches[0].clientX
    if (nowX-startX>80&&nowPage!=0) {
      pageUpDown=1
    }else if (nowX-startX< -80&&nowPage!=5) {
      pageUpDown=-1
    }else{
      pageUpDown=0
    };    
  }
  function endTouch(event){
    if (pageUpDown == 1) {
      //alert("上一页")
      nowPage--
    }else if (pageUpDown == -1) {
      //alert("下一页")
      nowPage++
    }else if (pageUpDown==0) {
      //alert("不翻页")
    };
    goPage()
    //pageAni()
  }
  function goPage(){
    for (var i = 0; i < pageA.length; i++) {
      // pageA[i].removeClass('up');
      // pageA[i].removeClass('down');
      // pageA[i].removeClass('show');

      if(i>(nowPage+1)||i<(nowPage-1)){
        pageA[i].css({"display":"none"})
      }else{
        pageA[i].css({"display":"block"})
      }


      if (i<nowPage) {TweenLite.to(pageA[i],.8,{rotationY:-180,left:"-100%",z:500})};
      if (i>nowPage) {TweenLite.to(pageA[i],.8,{rotationY:0,left:"0%",z:0});};
      if (i==nowPage) {TweenLite.to(pageA[i],.8,{rotationY:0,left:"0%",z:0});};
    }; 
  }


//===========================================================================================翻页

function moveHand(){
  TweenLite.to($("#p1hand"),1.5,{left:"-12%",onComplete:moveHand2})
}
function moveHand2(){
  if(ifHint==1){
    TweenLite.to($("#p1hand"),1.5,{left:"12%",onComplete:moveHand})
  }
  
}


var myDate=new Date()
var yearNum
var MonthNum
var DayNum
var dateStr=""


function setPage1(){
  
  TweenLite.set($("#p1videoPic"),{y:253/640*screenW})
  TweenLite.set($(".mainPart"),{y:78/640*screenW,height:screenH-(78+64+10)/640*screenW})
  TweenLite.set($(".mainPart2"),{y:(78+0)/640*screenW,height:screenH-(78+64+10)/640*screenW})
  TweenLite.set($(".yearDiv"),{x:21/640*screenW,y:10/640*screenW,height:35/640*screenW,width:82/640*screenW})
  TweenLite.set($(".dateDiv"),{x:(21+82+5)/640*screenW,y:10/640*screenW,height:35/640*screenW,width:82/640*screenW})
  TweenLite.set($(".yearDiv1"),{y:185/640*screenW})
  TweenLite.set($("#playBtn"),{y:336/640*screenW})
  TweenLite.set($("#videoDiv"),{y:336/640*screenW})

  yearNum=myDate.getFullYear()
  MonthNum=myDate.getMonth()
  DayNum=myDate.getDate()
  dateStr=parseInt(MonthNum+1)+"."+parseInt(DayNum)
  for (var i = 0; i <document.getElementsByClassName("yearDiv").length; i++) {
    document.getElementsByClassName("yearDiv")[i].innerHTML=parseInt(yearNum)
    document.getElementsByClassName("dateDiv")[i].innerHTML=dateStr
  };
  document.getElementsByClassName("yearDiv1")[0].innerHTML=parseInt(MonthNum+1)+"/"+parseInt(DayNum)+"/"+parseInt(yearNum)


  
}

$("#playBtn").click(function(){
  $("#video")[0].play()
  TweenLite.set($("#playBtn"),{display:"none"})
  TweenLite.set($("#video"),{display:"block"})
})

$("#video").click(function(){
  $("#video")[0].pause()
  TweenLite.set($("#playBtn"),{display:"block"})
})

$("#p3btn").click(function(){
  window.location.href = "https://www.zhihu.com/question/263562501"
})

$("#p1hint").click(function(){
  TweenLite.to($("#p1hint"),.5,{opacity:0,onComplete:killHint})
})


var loadWechatConfig = function() {
  var hm, s, url;
  url = encodeURIComponent(window.location.href.split("#")[0]);
  hm = document.createElement('script');
  hm.src = "http://api.giccoo.com/api/config?url=" + url;
  s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(hm, s);
};
