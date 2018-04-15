"use strict";

var loadWechatConfig;

window.onload = function () {
  // runAnimate()
  console.log(document.documentElement.clientWidth * 0.74);
  document.getElementById("logo").style.top = document.documentElement.clientWidth * 0.60 + "px";
  loadWechatConfig();
  return wx.ready(function () {
    var shareContent;
    shareContent = {
      title: "新电器生活主义研讨会",
      desc: "有哪些家电见证了你生活中的「新开始」？",
      link: "http://m.giccoo.com/zhihu-suning418/",
      imgUrl: "http://m.giccoo.com/zhihu-suning418/img/ico.jpg",
      success: function success() {},
      // alert "success"
      cancel: function cancel() {}
    };
    // alert "cancel"
    wx.onMenuShareTimeline(shareContent);
    wx.onMenuShareAppMessage(shareContent);
    wx.onMenuShareQQ(shareContent);
    return wx.onMenuShareWeibo(shareContent);
  });
};

loadWechatConfig = function loadWechatConfig() {
  var hm, s, url;
  url = encodeURIComponent(window.location.href.split("#")[0]);
  hm = document.createElement('script');
  hm.src = "//api.giccoo.com/api/config?url=" + url;
  s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(hm, s);
};