
$(document).ready(function load (){
	loadWechatConfig();
  	wx.ready(function() {
    var shareContent;
    shareContent = {
      title: "董事长拜年",
      desc: "祝春节快乐 合家幸福",
      link: "http://m.giccoo.com/chairman/",
      imgUrl: "http://m.giccoo.com/chairman/img/ico.jpg",
      success: function() {},
      cancel: function() {}
    };
    wx.onMenuShareTimeline(shareContent);
    wx.onMenuShareAppMessage(shareContent);
    wx.onMenuShareQQ(shareContent);
    return wx.onMenuShareWeibo(shareContent);
  });

    loadingAni()



});

$('body')[0].addEventListener('touchmove', function (event) {event.preventDefault();}, false);//阻止了浏览器默认的下拉事件
var screenW
var screenH



var loadWechatConfig = function() {
  var hm, s, url;
  url = encodeURIComponent(window.location.href.split("#")[0]);
  hm = document.createElement('script');
  hm.src = "http://api.giccoo.com/api/config?url=" + url;
  s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(hm, s);
};


function loadingAni(){
  screenW=document.body.offsetWidth 
  screenH=document.body.offsetHeight



  TweenLite.set($("#loadingBar"),{height:screenW/640*1000*15/1000-screenW/640*1000+screenH})
  TweenLite.to($("#loadingBar"),3,{width:"100%",onComplete:loadingAni2})
}

function loadingAni2(){
  // TweenLite.set($("#loadingBar"),{display:"none"})
  TweenLite.set($("#loadingBar"),{height:screenH-screenW/640*1000})
  TweenLite.set($("#loadingBG"),{display:"none"})
}
$("#videoLayer").click(function(){
  $("#video")[0].play()
})