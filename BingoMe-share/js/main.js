// Generated by CoffeeScript 1.9.1
var ANIMATION_END_NAME, ANIMATION_END_NAMES, TRANSITION_END_NAME, TRANSITION_END_NAMES, VENDORS, css3Prefix, download, i, imgs, j, len, loadWechatConfig, mTestElement;

VENDORS = ["Moz", 'webkit', 'ms', 'O'];

TRANSITION_END_NAMES = {
  "Moz": "transitionend",
  "webkit": "webkitTransitionEnd",
  "ms": "MSTransitionEnd",
  "O": "oTransitionEnd"
};

ANIMATION_END_NAMES = {
  "Moz": "animationend",
  "webkit": "webkitAnimationEnd",
  "ms": "MSAnimationEnd",
  "O": "oAnimationEnd"
};

mTestElement = document.createElement("div");

for (j = 0, len = VENDORS.length; j < len; j++) {
  i = VENDORS[j];
  css3Prefix = i;
  if ((css3Prefix + "Transition") in mTestElement.style) {
    break;
  }
  css3Prefix = false;
}

if (css3Prefix) {
  TRANSITION_END_NAME = TRANSITION_END_NAMES[css3Prefix];
  ANIMATION_END_NAME = ANIMATION_END_NAMES[css3Prefix];
}

imgs = [];

download = null;

window.onload = function() {
  var MK;
  riot.mount("*");
  MK = $("body").width() / $("body").height();
  if ($("body").height() <= 460 || MK > 0.65) {
    $("body").addClass("iphone4");
  }
  loadWechatConfig();
  return wx.ready(function() {
    var shareContent;
    shareContent = {
      title: wxTitle,
      desc: wxDesc,
      link: window.location.href,
      imgUrl: wxImg,
      success: function() {},
      cancel: function() {}
    };
    wx.onMenuShareTimeline(shareContent);
    wx.onMenuShareAppMessage(shareContent);
    wx.onMenuShareQQ(shareContent);
    return wx.onMenuShareWeibo(shareContent);
  });
};

loadWechatConfig = function() {
  var hm, s, url;
  url = encodeURIComponent(window.location.href.split("#")[0]);
  hm = document.createElement('script');
  hm.src = "http://api.giccoo.com/config?url=" + url;
  s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(hm, s);
};
