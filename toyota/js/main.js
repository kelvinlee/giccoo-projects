
$(document).ready(function load (){
	loadWechatConfig();
  	wx.ready(function() {
    var shareContent;
    shareContent = {
      title: "不服极限，行者无界",
      desc: "以执念，唤醒每个人的挑战基因",
      link: "http://m.giccoo.com/toyota/",
      imgUrl: "http://m.giccoo.com/toyota/img/ico.png",
      success: function() {},
      cancel: function() {}
    };
    wx.onMenuShareTimeline(shareContent);
    wx.onMenuShareAppMessage(shareContent);
    wx.onMenuShareQQ(shareContent);
    return wx.onMenuShareWeibo(shareContent);
  });


  initPage()




});



$('body')[0].addEventListener('touchmove', function (event) {event.preventDefault();}, false);//阻止了浏览器默认的下拉事件
var screenW
var screenH

screenW=document.body.offsetWidth 
screenH=document.body.offsetHeight

var loadWechatConfig = function() {
  var hm, s, url;
  url = encodeURIComponent(window.location.href.split("#")[0]);
  hm = document.createElement('script');
  hm.src = "http://api.giccoo.com/api/config?url=" + url;
  s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(hm, s);
};



function initPage(){
  screenW=document.body.offsetWidth 
  screenH=document.body.offsetHeight
  setSlide();
  TweenLite.set($('#page1'),{display:"block",top:0})
  TweenLite.set($('#dot1'),{display:"block"})
  TweenLite.set($('#p2pic1'),{left:0})
  TweenLite.set($('#p2title1'),{left:0})
  TweenLite.set($('#videoDiv1'),{opacity:0})
  TweenLite.set($('#videoDiv2'),{top:-(screenW/640*1138-screenH)/2})
}
var p2A=[$("#p2t1"),$("#p2t2"),$("#p2t3")]
var p4A=[$("#p4t1"),$("#p4t2"),$("#p4t3"),$("#p4t4"),$("#p4t5")]

$("#p4btn").click(function(){
  window.location.href = "http://www.toyota.com.cn/olympic/mobile/Olympics-Paralympics/"
})
$('#videoDiv1').click(function(){
  TweenLite.set($('#videoDiv1'),{opacity:1})
  $('#video1')[0].play()
})

function ani2(){
  for (var i = 0; i < p2A.length; i++) {
    TweenLite.set(p2A[i],{y:"-50%"})
    TweenLite.from(p2A[i],.8,{y:"+=50",opacity:0,ease:Back.easeOut,delay:0.1*i})
  };
  //TweenLite.from($("#p4btn"),.8,{bottom:-50,opacity:0,ease:Back.easeOut,delay:2})
}

function ani4(){
  for (var i = 0; i < p4A.length; i++) {
    TweenLite.from(p4A[i],.8,{y:"+=50",opacity:0,ease:Back.easeOut,delay:0.1*i})
  };
}

//===================== 翻页 =====================

var nowPage = 0;
var nowLayer = 0;
var startY = 0;
var startX = 0;
var startScrollTop;
var pageUpDown =0
var pageLR =0
var sliderA=[$('#page1'),$('#page2'),$('#page3'),$('#page4')]
var sliderB=[$('#p2pic1'),$('#p2pic2'),$('#p2pic3'),$('#p2pic4')]
var sliderBT=[$('#p2title1'),$('#p2title2'),$('#p2title3'),$('#p2title4')]
var dotA=[$('#dot1'),$('#dot2'),$('#dot3'),$('#dot4')]

function setSlide(){
  $('.content')[0].addEventListener('touchstart',startTouch,false)
  $('.content')[0].addEventListener('touchmove',moveTouch,false)
  $('.content')[0].addEventListener('touchend',endTouch,false)
}

  
function startTouch(event){

      startY=event.touches[0].clientY
      startX=event.touches[0].clientX
      pageUpDown=0
      pageLR=0
    }
    function moveTouch(event){
      var nowY=event.touches[0].clientY
      var nowX=event.touches[0].clientX
      event.preventDefault();
      if (nowY-startY>80&&nowPage!=0) {
        pageUpDown=1
      }else if (nowY-startY< -80&&nowPage!=3) {
        pageUpDown=-1
      }else{
        pageUpDown=0
      }; 

      if (nowX-startX>80&&nowLayer!=0&&nowPage==1) {
        pageLR=1
      }else if (nowX-startX< -80&&nowLayer!=3&&nowPage==1) {
        pageLR=-1
      }else{
        pageLR=0
      }; 
    }
    function endTouch(event){
      if (pageUpDown == 1) {
        //alert("上一页")
        nowPage--
        goPage()
      }else if (pageUpDown == -1) {
        //alert("下一页")
        nowPage++
        goPage()
      }else if (pageUpDown==0) {
        //alert("不翻页")
      }; 


      if (pageLR == 1) {
        //alert("上一页")
        //console.log("<")
        nowLayer--
        goLayer()
      }else if (pageLR == -1) {
        //alert("下一页")
        //console.log(">")
        nowLayer++
        goLayer()
      }else if (pageLR==0) {
        //alert("不翻页")
        //console.log("0")
      }; 
    } 
    function goLayer(){
       for (var i = 0; i < sliderB.length; i++) {
        TweenLite.set(dotA[i],{display:"none"})
        if (i<nowLayer) {
          TweenLite.to(sliderB[i],.5,{left:"-100%",display:'none',ease:Back.easeOut})//,ease:Back.easeOut
          TweenLite.to(sliderBT[i],.5,{left:"-100%",display:'none',ease:Back.easeOut,delay:.1})
        };
        if (i==nowLayer) {
          TweenLite.to(sliderB[i],.5,{left:"0%",display:'block',ease:Back.easeOut})
          TweenLite.to(sliderBT[i],.5,{left:"0%",display:'block',ease:Back.easeOut,delay:.1})
          TweenLite.set(dotA[i],{display:"block"})
        };
        if (i>nowLayer) {
          TweenLite.to(sliderB[i],.5,{left:"100%",display:'none',ease:Back.easeOut})
          TweenLite.to(sliderBT[i],.5,{left:"100%",display:'none',ease:Back.easeOut,delay:.1})
        };

       }
    }

    function goPage(){

       for (var i = 0; i < sliderA.length; i++) {
        if (i<nowPage) {
          TweenLite.to(sliderA[i],.5,{top:"-100%",display:'none'})//,ease:Back.easeOut
        };
        if (i==nowPage) {
          TweenLite.to(sliderA[i],.5,{top:"0%",display:'block'})
          if (i==1) {ani2()};
          if (i==3) {ani4()};
          if (i!=0) {
            TweenLite.set($('#videoDiv1'),{opacity:0})
            $('#video1')[0].pause()
          };

          if (i==2) {
            $('#video2')[0].play()
          }else{
            $('#video2')[0].pause()
          };

        };
        if (i>nowPage) {
          TweenLite.to(sliderA[i],.5,{top:"100%",display:'none'})
        };
       }
    }

//===================== 翻页 =====================