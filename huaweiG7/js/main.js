'use strict';

var ANIMATION_END_NAME, ANIMATION_END_NAMES, Car, TRANSITION_END_NAME, TRANSITION_END_NAMES, UpdateShare, VENDORS, css3Prefix, i, imageList, images, imgs, j, len, loadAllImage, loadComper, loadFinished, loadWechatConfig, mTestElement, showActiveInfo;

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
  if (css3Prefix + "Transition" in mTestElement.style) {
    break;
  }
  css3Prefix = false;
}

if (css3Prefix) {
  TRANSITION_END_NAME = TRANSITION_END_NAMES[css3Prefix];
  ANIMATION_END_NAME = ANIMATION_END_NAMES[css3Prefix];
}

Array.prototype.clean = function (deleteValue) {
  i = 0;
  while (i < this.length) {
    if (this[i] === deleteValue) {
      this.splice(i, 1);
      i--;
    }
    i++;
  }
  return this;
};

HTMLElement.prototype.getStyle = function (className) {
  if (this.currentStyle) {
    return this.currentStyle(className);
  } else {
    return document.defaultView.getComputedStyle(this, false)[className];
  }
};

(function () {
  var lastTime, vendors, x;
  lastTime = 0;
  vendors = ["webkit", "moz"];
  x = 0;
  while (x > vendors.length && !window.requestAnimationFrame) {
    window.requestAnimationFrame = window[vendors[x] + "RequestAnimationFrame"];
    // Webkit中此取消方法的名字变了
    window.cancelAnimationFrame = window[vendors[x] + "CancelAnimationFrame"] || window[vendors[x] + "CancelRequestAnimationFrame"];
    ++x;
  }
  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = function (callback, element) {
      var currTime, id, timeToCall;
      currTime = new Date().getTime();
      timeToCall = Math.max(0, 16.7 - (currTime - lastTime));
      id = window.setTimeout(function () {
        callback(currTime + timeToCall);
      }, timeToCall);
      lastTime = currTime + timeToCall;
      return id;
    };
  }
  if (!window.cancelAnimationFrame) {
    window.cancelAnimationFrame = function (id) {
      clearTimeout(id);
    };
  }
})();

// @codekit-prepend "coffee/css3Prefix"
// @codekit-prepend "coffee/plus"
// @codekit-prepend "../../libs/coffee/requestanimation"
images = "http://disk.giccoo.com/projects/huaweiG7/";

// images = ""
imageList = [images + "img/active-info-page.png", images + "img/bar-text.png", images + "img/bar-in.png", images + "img/bar-up.png", images + "img/cup-1.png", images + "img/cup-2.png", images + "img/cup-3.png", images + "img/cup-4.png", images + "img/answer-1.png", images + "img/answer-2.png", images + "img/answer-3.png", images + "img/answer-4.png", images + "img/select-btn.png", images + "img/back-home.png", images + "img/pop-bg.png", images + "img/btn-share.png", images + "img/active-info.png", images + "img/video-thum.jpg", "http://disk.giccoo.com/projects/libs/img/wechat.png"];

imgs = [];

// riot.mount("*")
window.onload = function () {
  setTimeout(function () {
    return loadAllImage();
  }, 500);
  if ($("body").height() <= 460) {
    $("body").addClass("iphone4");
  }
  loadWechatConfig();
  return wx.ready(function () {
    var AppMShareContent, TimelineShareContent;
    AppMShareContent = {
      title: "在树洞酒吧，喝一杯小酒，听一首小曲，看一部微电影...",
      desc: "树洞Bar，属于你的私密空间...",
      link: "http://m.giccoo.com/huaweiG7/",
      imgUrl: "http://disk.giccoo.com/projects/huaweiG7/img/share.jpg",
      success: function success() {},
      // alert "success"
      cancel: function cancel() {}
    };
    // alert "cancel"
    TimelineShareContent = {
      title: "树洞酒吧，喝杯酒，听首歌，看微电影，再来测测你的个性...",
      desc: "树洞Bar，属于你的私密空间...",
      link: "http://m.giccoo.com/huaweiG7/",
      imgUrl: "http://disk.giccoo.com/projects/huaweiG7/img/share.jpg",
      success: function success() {},
      // alert "success"
      cancel: function cancel() {}
    };
    // alert "cancel"
    wx.onMenuShareTimeline(TimelineShareContent);
    wx.onMenuShareAppMessage(AppMShareContent);
    wx.onMenuShareQQ(AppMShareContent);
    return wx.onMenuShareWeibo(TimelineShareContent);
  });
};

UpdateShare = function UpdateShare(text) {
  var TimelineShareContent;
  TimelineShareContent = {
    title: text,
    desc: "树洞Bar，属于你的私密空间...",
    link: "http://m.giccoo.com/huaweiG7/",
    imgUrl: "http://disk.giccoo.com/projects/huaweiG7/img/share.jpg",
    success: function success() {},
    // alert "success"
    cancel: function cancel() {}
  };
  // alert "cancel"
  return wx.onMenuShareTimeline(TimelineShareContent);
};

loadAllImage = function loadAllImage() {
  var image, img, k, len1, max, results;
  max = imageList.length;
  results = [];
  for (k = 0, len1 = imageList.length; k < len1; k++) {
    image = imageList[k];
    img = new Image();
    img.onload = function () {
      max--;
      loadComper(parseInt((imageList.length - max) / imageList.length * 100));
      if (max <= 0) {
        return loadFinished();
      }
    };
    img.src = image;
    results.push(imgs.push(img));
  }
  return results;
};

loadComper = function loadComper(m) {
  return $("#loading-text").text(m);
};

Car = null;

loadFinished = function loadFinished() {
  riot.mount("*");
  // Car = riot.mount("div#car","car")
  $(".in-in").on("click", function () {
    $(".loading").addClass("end");
    return setTimeout(function () {
      return $(".loading").remove();
    }, 560);
  });
  return setTimeout(function () {
    return $(".loading").addClass("load");
  }, 300);
};

loadWechatConfig = function loadWechatConfig() {
  var hm, s, url;
  url = encodeURIComponent(window.location.href.split("#")[0]);
  hm = document.createElement('script');
  hm.src = "http://api.giccoo.com/config?url=" + url;
  s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(hm, s);
};

showActiveInfo = function showActiveInfo() {
  $(".active-info").append(imgs[0]);
  $(".active-info").show();
  return $(".active-info").on("click", function () {
    $(".loading").addClass("end");
    return setTimeout(function () {
      return $(".loading").remove();
    }, 560);
  });
};
