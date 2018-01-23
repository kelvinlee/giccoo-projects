'use strict';

var ANIMATION_END_NAME, ANIMATION_END_NAMES, TRANSITION_END_NAME, TRANSITION_END_NAMES, VENDORS, css3Prefix, hidePage, i, imageList, imgs, j, len, loadAllImage, loadComper, loadFinished, loadWechatConfig, mTestElement, reButton, starEat, tags;

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
imageList = ["http://disk.giccoo.com/projects/dazhong/img/text-1.png", "http://disk.giccoo.com/projects/dazhong/img/text-2.png", "http://disk.giccoo.com/projects/dazhong/img/text-3.png", "http://disk.giccoo.com/projects/dazhong/img/text-4.png", "http://disk.giccoo.com/projects/dazhong/img/text-5.png", "http://disk.giccoo.com/projects/dazhong/img/text-6.png", "http://disk.giccoo.com/projects/dazhong/img/text-7.png", "http://disk.giccoo.com/projects/dazhong/img/text-8.png", "http://disk.giccoo.com/projects/dazhong/img/text-9.png", "http://disk.giccoo.com/projects/dazhong/img/text-10.png"];

// "img/cuisine-1.png"
// "img/cuisine-2.png"
// "img/cuisine-3.png"
// "img/cuisine-4.png"
// "img/cuisine-5.png"
// "img/cuisine-6.png"
// "img/cuisine-7.png"
// "img/cuisine-8.png"
// "img/cuisine-9.png"
// "img/cuisine-10.png"
imgs = [];

tags = null;

window.onload = function () {
  tags = riot.mount("*");
  setTimeout(function () {
    return loadAllImage();
  }, 500);
  if ($("body").height() <= 460) {
    $("body").addClass("i4");
  }
  $(".wechat").on("click", function () {
    return $(".wechat").hide();
  });
  $(".homepage .star .item")[0].addEventListener(ANIMATION_END_NAME, reButton);
  // loadWechatConfig()
  return wx.ready(function () {
    var AppMShareContent;
    AppMShareContent = {
      title: "玻璃心慎点！这间「青春食堂」总有一道美味能让你动容",
      desc: "好友围炉，赏味青春。这里有10段我只想和你分享的美味故事，不想听听吗？",
      link: "http://m.giccoo.com/dazhong/",
      imgUrl: "http://disk.giccoo.com/projects/dazhong/img/share.jpg",
      success: function success() {},
      // alert "success"
      cancel: function cancel() {}
    };
    // alert "cancel"
    wx.onMenuShareTimeline(AppMShareContent);
    wx.onMenuShareAppMessage(AppMShareContent);
    wx.onMenuShareQQ(AppMShareContent);
    return wx.onMenuShareWeibo(AppMShareContent);
  });
};

loadAllImage = function loadAllImage() {
  var Nmax, image, img, k, len1, max, now;
  max = imageList.length;
  Nmax = $("[data-src]").length;
  max = Nmax + max;
  now = 0;
  for (k = 0, len1 = imageList.length; k < len1; k++) {
    image = imageList[k];
    img = new Image();
    img.onload = function () {
      now++;
      loadComper(parseInt(now / max * 100));
      if (now >= max) {
        return loadFinished();
      }
    };
    img.src = image;
    imgs.push(img);
  }
  $("[data-src]").each(function () {
    return $(this).attr("src", $(this).attr("data-src"));
  });
  return $("[data-src]").on("load", function () {
    now++;
    loadComper(parseInt(now / max * 100));
    if (now >= max) {
      return loadFinished();
    }
  });
};

loadComper = function loadComper(m) {
  return $("#loading-text").text(m);
};

loadFinished = function loadFinished() {
  $(".loading").addClass("fadeOut animated");
  setTimeout(function () {
    $(".loading").hide();
    return $(".homepage").show();
  }, 500);
  console.log(ClickEvent);
  return ClickEvent('P1.0', 1);
};

hidePage = function hidePage() {
  $(".homepage").addClass("fadeOut animated");
  setTimeout(function () {
    $(".homepage").hide();
    return $(".otherpage").show();
  }, 500);
  console.log(ClickEvent);
  ClickEvent('BUT_1.0_Start');
  return ClickEvent('P2.0', 1);
};

starEat = function starEat() {
  $(".infopage").removeClass("fadeIn").addClass("fadeOut animated");
  setTimeout(function () {
    $(".infopage").hide();
    $(".select-page").show();
    return tags[1].init();
  }, 500);
  console.log(ClickEvent);
  ClickEvent('BUT_2.0_Eat');
  return ClickEvent('P3.0', 1);
};

loadWechatConfig = function loadWechatConfig() {
  var hm, s, url;
  url = encodeURIComponent(window.location.href.split("#")[0]);
  hm = document.createElement('script');
  hm.src = "http://api.giccoo.com/config?url=" + url;
  s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(hm, s);
};

reButton = function reButton() {
  $(".homepage .star .item").removeClass("rubberBand animated");
  return setTimeout(function () {
    return $(".homepage .star .item").addClass("rubberBand animated");
  }, 1000);
};
