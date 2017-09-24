// Generated by CoffeeScript 1.12.7
var ANIMATION_END_NAME, ANIMATION_END_NAMES, IsPC, Loader, SendNote, Store, TRANSITION_END_NAME, TRANSITION_END_NAMES, VENDORS, _loader, css3Prefix, defaultTop, getdefaultTop, i, j, len, loadWechatConfig, mTestElement, qrcode, scrollTop, shareContent;

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

(function() {
  var lastTime, vendors, x;
  lastTime = 0;
  vendors = ["webkit", "moz"];
  x = 0;
  while (x > vendors.length && !window.requestAnimationFrame) {
    console.log("" + vendors[x]);
  }
  window.requestAnimationFrame = window[vendors[x] + "RequestAnimationFrame"];
  window.cancelAnimationFrame = window[vendors[x] + "CancelAnimationFrame"] || window[vendors[x] + "CancelRequestAnimationFrame"];
  ++x;
  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = function(callback, element) {
      var currTime, id, timeToCall;
      currTime = new Date().getTime();
      timeToCall = Math.max(0, 16.7 - (currTime - lastTime));
      id = window.setTimeout(function() {
        callback(currTime + timeToCall);
      }, timeToCall);
      lastTime = currTime + timeToCall;
      return id;
    };
  }
  if (!window.cancelAnimationFrame) {
    window.cancelAnimationFrame = function(id) {
      clearTimeout(id);
    };
  }
})();

qrcode = function() {
  return (function() {
    var hm, s;
    hm = document.createElement('script');
    hm.onload = function() {
      return new QRCode(document.getElementById("qrcode"), {
        width: 400,
        height: 400,
        text: window.location.href
      });
    };
    hm.src = '/libs/js/min/qrcode.min.js';
    s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(hm, s);
  })();
};

Store = {};

scrollTop = 0;

defaultTop = 0;

getdefaultTop = false;

shareContent = {
  title: "知乎·北鼻版",
  desc: "小宝宝的问题千奇百怪，又萌又天真。如果有一个「知乎北鼻版」 会发生神马?",
  link: "http://m.giccoo.com/friso/",
  imgUrl: "http://m.giccoo.com/friso/img/share.jpg",
  success: function() {},
  cancel: function() {}
};

window.onscroll = function(evt) {
  var top;
  top = document.scrollingElement.scrollTop;
  if (getdefaultTop && (top > defaultTop)) {
    return $(".logo").addClass("scroll");
  } else {
    return $(".logo").removeClass("scroll");
  }
};

window.onload = function() {
  var MK;
  MK = $("body").width() / $("body").height();
  defaultTop = $(".logo").offset().top;
  getdefaultTop = true;
  if ($("body").height() <= 460 || MK > 0.65) {
    $("body").addClass("iphone4");
  }
  riot.mount("*");
  $(".q-list").on("click", ".title", function(evt) {
    if ($(this).parent().is(".on")) {
      return $(this).parent().removeClass("on");
    } else {
      return $(this).parent().addClass("on");
    }
  });
  $(".main .logo").on("click", function(evt) {
    scrollTop = document.scrollingElement.scrollTop;
    document.body.style.top = -scrollTop + 'px';
    $("body").addClass("pop-open");
    $(".pop").addClass("on");
    return _hmt.push(['_trackEvent', "friso", "移动端浮层", "打开", "-"]);
  });
  $(".pop .close").on("click", function(evt) {
    $("body").removeClass("pop-open");
    $(".pop").removeClass("on");
    document.scrollingElement.scrollTop = scrollTop;
    document.body.style.top = 0;
    return _hmt.push(['_trackEvent', "friso", "移动端浮层", "关闭", "-"]);
  });
  $(".main,.pop").on("click", "a", function(evt) {
    var self;
    _hmt.push(['_trackEvent', "friso", "页面外跳", "" + $(this).attr("href"), "-"]);
    self = this;
    return setTimeout(function() {
      return window.location.href = $(self).attr("href");
    }, 10);
  });
  if (IsPC() && $(".main").is(".mobile")) {
    return window.location.href = "pc.html";
  }
  if (typeof wx !== "undefined" && wx !== null) {
    console.log("load wx");
    wx.ready(function() {
      wx.onMenuShareTimeline(shareContent);
      wx.onMenuShareAppMessage(shareContent);
      wx.onMenuShareQQ(shareContent);
      return wx.onMenuShareWeibo(shareContent);
    });
    loadWechatConfig();
  }
  return true;
};

IsPC = function() {
  var Agents, flag, userAgentInfo, v;
  userAgentInfo = navigator.userAgent;
  Agents = new Array('Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod');
  flag = true;
  v = 0;
  while (v < Agents.length) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = false;
      break;
    }
    v++;
  }
  return flag;
};

loadWechatConfig = function() {
  var hm, s, url;
  url = encodeURIComponent(window.location.href.split("#")[0]);
  hm = document.createElement('script');
  hm.src = "http://api.giccoo.com/api/config?url=" + url;
  s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(hm, s);
};

SendNote = function(msg, time) {
  if (time == null) {
    time = 3000;
  }
  $("body").append("<note title='" + msg + ("' time='" + time + "'></note>"));
  return riot.mount("note");
};

_loader = {};

Loader = function(id, title, type, time, more) {
  if (title == null) {
    title = "";
  }
  if (type == null) {
    type = "ball";
  }
  if (time == null) {
    time = 0;
  }
  if (more == null) {
    more = "";
  }
  if ($("#" + id).length > 0) {
    return _loader[id].loadend();
  }
  $("body").append("<loader id='" + id + "' title='" + title + "' type='" + type + ("' time='" + time + "'>" + more + "</loader>"));
  return riot.mount("loader");
};
