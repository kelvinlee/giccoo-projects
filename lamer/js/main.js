'use strict';

var ANIMATION_END_NAME, ANIMATION_END_NAMES, EndLastFrame, FormHeight, FrameFun, Loader, SendNote, Stars, Store, TRANSITION_END_NAME, TRANSITION_END_NAMES, VENDORS, _loader, _startDate, _stepList, cdn, changeMain, css3Prefix, debug, global, _hideSelf, i, isMM, j, layzr, len, link, loadWechatConfig, loadedEnd, mTestElement, mainSlider, oldslideNumber, passFun, pc, _playerDraw, qrcode, riots, secondSlider, tabId, tabId2, taskData, tm, uid;

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

riots = [];

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
  // $("body").on "click", ->
  // 	setTimeout ->
  // 		$(".page-eight").addClass "on"
  // 	,2000
  // 	$("#video")[0].play()
  $(".loading .content").addClass("on");
  riots = riot.mount("*");
  setTimeout(function () {
    return loadedEnd();
  }, 2400);
  // first-load-src
  $("img[first-load-src]").each(function () {
    return $(this).attr("src", $(this).attr("first-load-src"));
  });
  // $("img[second-load-src]").each ->
  // 	$(this).attr "src",$(this).attr("second-load-src")

  // $("img[last-load-src]").each ->
  // 	$(this).attr "src",$(this).attr("last-load-src")
  document.querySelector('body').addEventListener("touchmove", function (e) {
    return e.preventDefault();
  });
  // loadedEnd()
  $(".page-one .btn").on("click", function () {
    $(".pages .page-one")[0].removeEventListener(ANIMATION_END_NAME, FrameFun);
    $(".pages .page-one").addClass("fadeOut animated");
    $(".pages .page-two")[0].addEventListener(ANIMATION_END_NAME, FrameFun);
    $(".pages .page-two").addClass("on");
    setTimeout(function () {
      return $(".pages .page-one").removeClass("on fadeOut animated");
    }, 500);
    // $(".pages .page-seven").addClass "on"
    // return
    return $("img[second-load-src]").each(function () {
      return $(this).attr("src", $(this).attr("second-load-src"));
    });
  });
  $(".page-four .btn-1").on("click", function () {
    $(".pages .page-four")[0].removeEventListener(ANIMATION_END_NAME, FrameFun);
    $(".pages .page-four").addClass("fadeOut animated");
    $(".pages .page-four-1")[0].addEventListener(ANIMATION_END_NAME, FrameFun);
    $(".pages .page-four-1").addClass("on");
    Stars(".page-four-3 .stars-1", 15);
    Stars(".page-four-3 .stars-2", 20);
    Stars(".page-four-3 .stars-3", 15);
    setTimeout(function () {
      return $(".pages .page-four").removeClass("on fadeOut animated");
    }, 550);
    return $("img[last-load-src]").each(function () {
      return $(this).attr("src", $(this).attr("last-load-src"));
    });
  });
  $(".page-four .btn-2").on("click", function () {
    $(".pages .page-four")[0].removeEventListener(ANIMATION_END_NAME, FrameFun);
    $(".pages .page-four").addClass("fadeOut animated");
    $(".pages .page-four-3")[0].addEventListener(ANIMATION_END_NAME, FrameFun);
    $(".pages .page-four-3").addClass("on");
    Stars(".page-four-3 .stars-1", 15);
    Stars(".page-four-3 .stars-2", 20);
    Stars(".page-four-3 .stars-3", 15);
    setTimeout(function () {
      return $(".pages .page-four").removeClass("on fadeOut animated");
    }, 550);
    return $("img[last-load-src]").each(function () {
      return $(this).attr("src", $(this).attr("last-load-src"));
    });
  });
  $(".page-five .btn-1").on("click", function () {
    $(".pages .page-five")[0].removeEventListener(ANIMATION_END_NAME, FrameFun);
    $(".pages .page-five").addClass("fadeOut animated");
    $(".pages .page-five-1")[0].addEventListener(ANIMATION_END_NAME, FrameFun);
    $(".pages .page-five-1").addClass("on");
    Stars(".page-five-3 .stars", 20);
    return setTimeout(function () {
      return $(".pages .page-five").removeClass("on fadeOut animated");
    }, 550);
  });
  $(".page-five .btn-2").on("click", function () {
    $(".pages .page-five")[0].removeEventListener(ANIMATION_END_NAME, FrameFun);
    $(".pages .page-five").addClass("fadeOut animated");
    $(".pages .page-five-3")[0].addEventListener(ANIMATION_END_NAME, FrameFun);
    $(".pages .page-five-3").addClass("on");
    Stars(".page-five-3 .stars", 20);
    return setTimeout(function () {
      return $(".pages .page-five").removeClass("on fadeOut animated");
    }, 550);
  });
  $(".page-six .btn-1").on("click", function () {
    // $("#video")[0].play()
    $(".pages .page-six")[0].removeEventListener(ANIMATION_END_NAME, FrameFun);
    $(".pages .page-six").addClass("fadeOut animated");
    $(".pages .page-seven")[0].addEventListener(ANIMATION_END_NAME, FrameFun);
    $(".pages .page-seven").addClass("on");
    Stars(".page-seven .stars-1", 15);
    Stars(".page-seven .stars-2", 15);
    Stars(".page-seven .stars-3", 15);
    return setTimeout(function () {
      return $(".pages .page-six").removeClass("on fadeOut animated");
    }, 550);
  });
  $(".page-seven .bg").on("click", function () {
    $("#video")[0].play();
    $(".pages .page-seven")[0].removeEventListener(ANIMATION_END_NAME, FrameFun);
    $(".pages .page-seven")[0].addEventListener(ANIMATION_END_NAME, _hideSelf);
    $(".pages .page-seven").addClass("fadeOut animated");
    $(".pages .page-eight")[0].addEventListener(ANIMATION_END_NAME, FrameFun);
    return $(".pages .page-eight").addClass("on");
  });
  // for video
  // $("#video")[0].addEventListener "play", ->
  // 	playerDraw()
  loadWechatConfig();
  wx.ready(function () {
    var shareContent;
    shareContent = {
      title: "麦克斯·贺伯博士的奇妙探险",
      desc: "",
      link: "http://m.giccoo.com/lamer/",
      imgUrl: "http://image.giccoo.com/projects/lamer/img/share.jpg",
      success: function success() {},
      // alert "success"
      cancel: function cancel() {}
    };
    // alert "cancel"
    wx.onMenuShareTimeline(shareContent);
    wx.onMenuShareAppMessage(shareContent);
    wx.onMenuShareQQ(shareContent);
    wx.onMenuShareWeibo(shareContent);
    $(riots[0].root).find("audio")[0].play();
    return true;
  });
  return true;
};

_playerDraw = function playerDraw() {
  var c, canvas, h, v, w;
  // console.log c,v,w,h
  v = document.getElementById('video');
  canvas = document.getElementById('player');
  c = canvas.getContext('2d');
  w = 620;
  h = 360;
  c.drawImage(v, 0, 0, w, h);
  // setTimeout(playerDraw,20,c,v,w,h)
  return requestAnimationFrame(_playerDraw);
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
  $(".loading").addClass("fadeOut animated duration-5");
  $(".pages .page-one").addClass("on");
  $(".pages .page-one")[0].addEventListener(ANIMATION_END_NAME, FrameFun);
  Stars(".page-one .stars-1", 20);
  Stars(".page-one .stars-2", 20);
  Stars(".page-one .stars-3", 20);
  return setTimeout(function () {
    return $(".loading").remove();
  }, 550);
};

FrameFun = function FrameFun(evt) {
  var parent, wait;
  if ($(evt.target).is(".last")) {
    // 等待1秒
    parent = $(evt.target).parents(".page");
    wait = parseInt(parent.attr("wait"));
    return setTimeout(function () {
      return passFun(evt);
    }, wait);
  }
};

passFun = function passFun(evt) {
  var parent;
  parent = $(evt.target).parents(".page");
  parent[0].removeEventListener(ANIMATION_END_NAME, FrameFun);
  parent[0].addEventListener(ANIMATION_END_NAME, _hideSelf);
  // console.log parent.attr("next"),parent,$(parent.attr("next"))
  if (parent.attr("next")) {
    console.log("next page");
    parent.addClass("fadeOut animated");
    $(parent.attr("next")).addClass("on");
    $(parent.attr("next"))[0].addEventListener(ANIMATION_END_NAME, FrameFun);
    if ($(parent.attr("next")).is(".page-nine")) {
      Stars(".page-nine .stars-1", 20);
      Stars(".page-nine .stars-2", 20);
      return Stars(".page-nine .stars-3", 20);
    }
  } else {
    // if $(parent.attr("next")).is ".page-eight"
    // 	$("#video")[0].play()
    // if $(parent.attr("next")).is ".page-nine"
    // 	$("#video")[0].pause()
    return console.log("stop this");
  }
};

_hideSelf = function hideSelf(evt) {
  $(evt.target).removeClass("on fadeOut animated");
  $(evt.target)[0].removeEventListener(ANIMATION_END_NAME, _hideSelf);
  return $(evt.target).find(".stars").html("");
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

Stars = function Stars(target, num) {
  var delay, duration, index, k, randomX, randomY, ref, results, size, star, stars;
  stars = $(target);
  results = [];
  for (index = k = 0, ref = num; 0 <= ref ? k < ref : k > ref; index = 0 <= ref ? ++k : --k) {
    randomX = Math.random() * 100;
    randomY = Math.random() * 100;
    delay = parseInt(Math.random() * 500);
    duration = parseInt(Math.random() * 1500 + 1500);
    size = Math.random() * 2 + 1;
    star = $("<div>");
    star.addClass("star");
    star.css({
      "top": randomX + "%",
      "left": randomY + "%",
      "width": size + "px",
      "height": size + "px",
      "animation-delay": delay + "ms",
      "animation-duration": duration + "ms"
    });
    results.push(stars.append(star));
  }
  return results;
};

// console.log star
