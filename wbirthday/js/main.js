
$(document).ready(function load (){
	//loadWechatConfig();
  	wx.ready(function() {
    var shareContent;
    shareContent = {
      title: "",
      desc: "人",
      link: "http://m.giccoo.com/wbirthday/",
      imgUrl: "http://m.giccoo.com/wbirthday/img/ico.jpg",
      success: function() {},
      cancel: function() {}
    };
    wx.onMenuShareTimeline(shareContent);
    wx.onMenuShareAppMessage(shareContent);
    wx.onMenuShareQQ(shareContent);
    return wx.onMenuShareWeibo(shareContent);
  });

  setSlide();



});


var loadWechatConfig = function() {
  var hm, s, url;
  url = encodeURIComponent(window.location.href.split("#")[0]);
  hm = document.createElement('script');
  hm.src = "http://api.giccoo.com/api/config?url=" + url;
  s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(hm, s);
};


function setSlide(){
    var nowPage = 0;
    var startY = 0;
    var startScrollTop;
    var pageUpDown =0
    var sliderA=[$('#page0'),$('#page2'),$('#page3'),$('#page4'),$('#page5'),$('#page6'),$('#page7'),$('#page8'),$('#page9'),$('#page10'),$('#page11'),$('#page12'),$('#page13')]
    $('.content')[0].addEventListener('touchstart',startTouch,false)
    $('.content')[0].addEventListener('touchmove',moveTouch,false)
    $('.content')[0].addEventListener('touchend',endTouch,false)
    function startTouch(event){
      startY=event.touches[0].clientY
      pageUpDown=0
    }
    function moveTouch(event){
      var nowY=event.touches[0].clientY
      event.preventDefault();
      if (nowY-startY>80&&nowPage!=0) {
        pageUpDown=1
      }else if (nowY-startY< -80&&nowPage!=12) {
        pageUpDown=-1
      }else{
        pageUpDown=0
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
    } 
    function goPage(){
       for (var i = 0; i < sliderA.length; i++) {
        if (i<nowPage) {
          TweenLite.to(sliderA[i],.5,{top:"-100%"})//,ease:Back.easeOut
        };
        if (i==nowPage) {
          TweenLite.to(sliderA[i],.5,{top:"0%"})
          // if (i==0) {ani1()};
          // if (i==1) {ani2()};
          // if (i==2) {ani3()};
          if (i>0&&i<13) {pageAni1(i-1)};
        };
        if (i>nowPage) {
          TweenLite.to(sliderA[i],.5,{top:"100%"})
        };
       }
    }
        $(".goend").click(function(){
      nowPage=10
      goPage()
    })
    $("#btnShare").click(function(){
      $("#shareLayer").css({"display":"block"})
      TweenLite.to($("#shareLayer"),1,{opacity:1})
      $("#logo").css({"opacity":.5})
    })
    $("#shareLayer").click(function(){
      TweenLite.to($("#shareLayer"),1,{opacity:0,display:"none"})
    })


    $("#btnSubmit").click(function(){
      $("#doneLayer").css({"display":"block"})
      TweenLite.to($("#doneLayer"),1,{opacity:1})
    })

  function pageAni1(i){
    var picN=[$("#p2pic"),$("#p3pic"),$("#p4pic"),$("#p5pic"),$("#p6pic"),$("#p7pic"),$("#p8pic"),$("#p9pic"),$("#p10pic"),$("#p11pic"),$("#p12pic")];
    var tN=[$("#p2t"),$("#p3t"),$("#p4t"),$("#p5t"),$("#p6t"),$("#p7t"),$("#p8t"),$("#p9t"),$("#p10t"),$("#p11t"),$("#p12t")];
    var yN=[$("#p2y"),$("#p3y"),$("#p4y"),$("#p5y"),$("#p6y"),$("#p7y"),$("#p8y"),$("#p9y"),$("#p10y"),$("#p11y"),$("#p12y")];

    //bigN.css({"opacity":0,"left":"0%"})
    picN[i].css({"opacity":1,"top":"0%"})
   tN[i].css({"opacity":1,"bottom":"0%"})
    //car.css({"opacity":0,"top":"100%"})
    //end.css({"opacity":0,"top":"100%"})
 

    //TweenLite.to(bigN,4,{opacity:1,left:"50%",ease:Quint.easeOut})
    TweenLite.from(picN[i],1,{opacity:0,rotationZ:30,scale:16})
    TweenLite.from(tN[i],2,{opacity:0,delay:.5})
    TweenLite.from(yN[i],.5,{opacity:0,"bottom":"-10%",delay:.1})


  }
    
    
  }

   var audio;
    function initAudio(id){
        audio=document.getElementById(id);
    };

    window.onload=function(){
        initAudio("audio");
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