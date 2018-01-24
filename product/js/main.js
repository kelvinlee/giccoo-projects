'use strict';

var $_GET, ANIMATION_END_NAME, ANIMATION_END_NAMES, SendNote, Store, TRANSITION_END_NAME, TRANSITION_END_NAMES, VENDORS, cdn, css3Prefix, debug, finishedLoad, i, k, layzr, len, loadStart, loadWechatConfig, mTestElement, qrcode, tm;

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

for (k = 0, len = VENDORS.length; k < len; k++) {
  i = VENDORS[k];
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

qrcode = function qrcode() {
  return function () {
    var hm, s;
    hm = document.createElement('script');
    hm.onload = function () {
      return new QRCode(document.getElementById("qrcode"), {
        width: 400,
        height: 400,
        text: window.location.href
      });
    };
    hm.src = '/libs/js/min/qrcode.min.js';
    s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(hm, s);
  }();
};

// @codekit-prepend "coffee/css3Prefix"
// @codekit-prepend "coffee/plus"
// @codekit-prepend "../../libs/coffee/requestanimation"
// @codekit-prepend "../../libs/coffee/qrcode"
Store = {};

layzr = null;

tm = null;

debug = false;

cdn = "";

// cdn = "http://disk.giccoo.com/projects/Yili-Eat-World/" unless debug
(function ($) {
  return $.extend($.fn, {
    scrollTo: function scrollTo(m) {
      var n, old, smoothScroll, that, timer;
      n = this.scrollTop();
      old = this.scrollTop();
      timer = null;
      that = this;
      smoothScroll = function smoothScroll(m) {
        var per;
        per = Math.round((m - old) / 15);
        n = n + per;
        // console.log n,m,per,old
        if (n >= m && m > old || n <= m && m < old || per === 0) {
          window.clearInterval(timer);
          n = m;
          that.scrollTop(n);
          return false;
        }
        return that.scrollTop(n);
      };
      return timer = window.setInterval(function () {
        return smoothScroll(m);
      }, 1000 / 30);
    }
  });
})(Zepto);

$(document).ready(function () {
  riot.mount("*");
  loadStart();
  if ($_GET["err"] != null) {
    return false;
  }
  if (openid === "") {
    window.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxb3dd8b8d67e940c4&redirect_uri={url}&response_type=code&scope=snsapi_base&state=123#wechat_redirect".replace("{url}", encodeURIComponent("http://i.giccoo.com/product/"));
    return false;
  }
  loadWechatConfig();
  return wx.ready(function () {
    var shareContent;
    shareContent = {
      title: "2015 年度保险产品评选",
      desc: "为您喜爱的保险产品投一票！",
      link: "http://i.giccoo.com/product/",
      imgUrl: "http://disk.giccoo.com/projects/product/img/share.jpg",
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
});

// finishedLoad()
loadWechatConfig = function loadWechatConfig() {
  var hm, s, url;
  url = window.location.href.split("#")[0];
  hm = document.createElement('script');
  hm.src = "http://i.giccoo.com/config?url=" + url;
  s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(hm, s);
};

loadStart = function loadStart() {
  var count, ep, now;
  count = $("[data-layzr]").length;
  now = 0;
  ep = $(".load-progress .n");
  // return false
  console.log(count);
  return layzr = new Layzr({
    callback: function callback(e) {
      // console.log e
      now++;
      // console.log parseInt (now/count)*100
      if (now >= count) {
        clearInterval(tm);
        ep.html(parseInt(now / count * 100) + "%");
        setTimeout(function () {
          $("#loading").addClass("animated fadeOut");
          $(".page.begin").removeClass("hide");
          return Store.begin.build();
        }, 1500);
        return setTimeout(function () {
          return finishedLoad();
        }, 2000);
      }
    }
  });
};

SendNote = function SendNote(msg) {
  var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2000;

  $("body").append("<note title='" + msg + ('\' time=\'' + time + '\'></note>'));
  return riot.mount("note");
};

$_GET = function () {
  var get, j, l, len1, u, url;
  url = window.document.location.href.toString();
  u = url.split('?');
  if (typeof u[1] === 'string') {
    u = u[1].split('&');
    get = {};
    console.log(u);
    for (l = 0, len1 = u.length; l < len1; l++) {
      i = u[l];
      j = i.split('=');
      get[j[0]] = j[1];
    }
    return get;
  } else {
    return {};
  }
}();

finishedLoad = function finishedLoad() {
  $("#loading").hide();
  if ($_GET["err"] != null) {
    return SendNote(decodeURI($_GET["err"]));
  }
};
