'use strict';

var ANIMATION_END_NAME, ANIMATION_END_NAMES, EndLastFrame, FormHeight, FrameFun, Loader, SendNote, Store, TRANSITION_END_NAME, TRANSITION_END_NAMES, VENDORS, _loader, _startDate, _stepList, cdn, changeMain, css3Prefix, debug, global, i, isMM, j, layzr, len, link, loadWechatConfig, loadedEnd, mTestElement, mainSlider, oldslideNumber, pc, qrcode, secondSlider, tabId, tabId2, taskData, tm, uid;

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
// @codekit-prepend "../../libs/coffee/requestanimation"
// @codekit-prepend "../../libs/coffee/qrcode"
Store = {};

layzr = null;

tm = null;

oldslideNumber = 0;

debug = false;

cdn = "";

isMM = false;

FormHeight = 0;

// cdn = "http://disk.giccoo.com/projects/Yili-Eat-World/" unless debug
global = {};

link = "http://api.giccoo.com";

mainSlider = {};

secondSlider = {};

tabId = 0;

tabId2 = 0;

_stepList = ["40,000", "70,000", "120,000"];

debug = false;

if (debug) {
  uid = "30102250";
  pc = "ad6ca3d5d8db6eb4af38dbeb13527470012669a8";
  localStorage.clear();
}

_startDate = new Date();

_startDate.setMonth(7);

_startDate.setDate(13);

_startDate.setHours(0);

_startDate.setMinutes(0);

_startDate.setSeconds(0);

_startDate.setMilliseconds(0);

taskData = [{
  startDate: _startDate,
  endDate: new Date(_startDate.getTime() + 10 * 24 * 60 * 60 * 1000)
}];

window.onload = function () {
  var MK;
  MK = $("body").width() / $("body").height();
  if ($("body").height() <= 460 || MK > 0.65) {
    $("body").addClass("iphone4");
  }
  $(".loading .text").addClass("on");
  riot.mount("*");
  setTimeout(function () {
    return loadedEnd();
  }, 2400);
  document.querySelector('body').addEventListener("touchmove", function (e) {
    return e.preventDefault();
  });
  // loadedEnd()
  $(".btn-reset").on("click", function () {
    // $(".page-reset .content-box").removeClass "on"
    _hmt.push(['_trackEvent', "lincoln_mkz", "充值1小时", "-", "-"]);
    $(".page-reset .content-box").removeClass("on").addClass("next");
    return $(".page-reset .content-pos").addClass("on");
  });
  $(".btn-run-next").on("click", function () {
    $(".page-reset .content-box").removeClass("on next");
    $(".page-reset .content-pos").removeClass("on");
    $(".page-reset .content-select").addClass("on");
    return _hmt.push(['_trackEvent', "lincoln_mkz", "确认充值", "-", "-"]);
  });
  $(".btn-start").on("click", function () {
    var id;
    id = Math.abs(mainSlider.slideNumber);
    id += 1;
    $(".page-answer").removeClass("answer-1 answer-2 answer-3 answer-4").addClass('on answer-' + id);
    $(".page-reset").removeClass("fadeIn").addClass("fadeOut");
    $(".page-answer img").each(function (i) {
      var src;
      src = $(this).attr("old-no-src");
      if (src) {
        return $(this).attr("src", src.replace("answer-x", "answer-" + id));
      }
    });
    return _hmt.push(['_trackEvent', "lincoln_mkz", "开启新可能", '' + id, "-"]);
  });
  $(".btn-answer-last").on("click", function () {
    $(".page-transition").addClass("on");
    return _hmt.push(['_trackEvent', "lincoln_mkz", "一起来揭秘", "-", "-"]);
  });
  $(".form-register .title").on("click", function () {
    if (Math.abs(parseInt($(".form-register").css("bottom"))) <= 0) {
      $(".form-register").css({
        "bottom": -FormHeight + "px"
      });
    } else {
      $(".form-register").css({
        "bottom": 0
      });
    }
    return _hmt.push(['_trackEvent', "lincoln_mkz", "打开/关闭试驾信息", "-", "-"]);
  });
  loadWechatConfig();
  wx.ready(function () {
    var shareContent;
    shareContent = {
      title: "第25小时的精彩",
      desc: "如果拥有了一天的第25个小时,你会为你的人生增添什么样的可能?",
      link: "http://m.giccoo.com/lincoln_mkz/",
      imgUrl: "http://image.giccoo.com/projects/lincoln_mkz/img/share.jpg",
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
  return true;
};

loadWechatConfig = function loadWechatConfig() {
  var hm, s, url;
  url = encodeURIComponent(window.location.href.split("#")[0]);
  hm = document.createElement('script');
  hm.src = "http://api.giccoo.com/api/config?url=" + url;
  s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(hm, s);
};

EndLastFrame = function EndLastFrame(evt) {
  if ($(evt.target).is(".text")) {
    return setTimeout(function () {
      return $(".page-last").addClass("on");
    }, 1700);
  }
};

loadedEnd = function loadedEnd() {
  $(".loading").addClass("rollOut animated duration-5");
  $(".pages .page-frame").addClass("on");
  $(".pages .page-frame")[0].addEventListener(ANIMATION_END_NAME, FrameFun);
  $(".pages .page-transition")[0].addEventListener(ANIMATION_END_NAME, EndLastFrame);
  // $(".pages .page-transition")[0].addEventListener ANIMATION_END_NAME, EndLastFrame
  FormHeight = $(".form-register").height() - 95 / 640 * $(".form-register").width();
  $(".form-register").css({
    "bottom": -FormHeight + "px"
  });
  $(".pages .page-last").removeClass("on");
  console.log(FormHeight);
  return $("img[no-src]").each(function () {
    return $(this).attr("src", $(this).attr("no-src"));
  });
};

FrameFun = function FrameFun(evt) {
  if ($(evt.target).is(".frame-4")) {
    $(".loading").addClass("hide");
    $(".pages .page-frame").removeClass("on");
    return $(".pages .page-reset .content-box").addClass("on");
  }
};

changeMain = function changeMain() {};

SendNote = function SendNote(msg) {
  var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3000;

  $("body").append("<note title='" + msg + ('\' time=\'' + time + '\'></note>'));
  return riot.mount("note");
};

_loader = {};

Loader = function Loader(id) {
  var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "ball";
  var time = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var more = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "";

  if ($("#" + id).length > 0) {
    return _loader[id].loadend();
  }
  $("body").append("<loader id='" + id + "' title='" + title + "' type='" + type + ('\' time=\'' + time + '\'>' + more + '</loader>'));
  return riot.mount("loader");
};
