'use strict';

var ANIMATION_END_NAME, ANIMATION_END_NAMES, Store, TRANSITION_END_NAME, TRANSITION_END_NAMES, VENDORS, cdn, css3Prefix, debug, hideShareWechat, i, j, layzr, len, loadStart, mTestElement, qrcode, tm;

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
window.onload = function () {
  var ep, loader;
  // $("#loading").hide()
  if (document.getElementById("qrcode").getStyle("display") === "block") {
    qrcode();
    return false;
  }
  riot.mount("*");
  ep = $(".load-progress .n");
  tm = setInterval(function () {
    if (parseInt(ep.html()) >= 96) {
      clearInterval(tm);
      return false;
    }
    return ep.html(parseInt(ep.html()) + parseInt(Math.random() * 5) + "%");
  }, 100);
  if ($("body").height() <= 460) {
    $("body").addClass("iphone4");
  }
  loader = new PIXI.AssetLoader([cdn + "img/game-bg.png", cdn + "img/game-p-stomach.png", cdn + "img/game-p-lufei.png", cdn + "img/game-p-gangtiexia.png", cdn + "img/game-p-huluwa.png", cdn + "img/game-p-mingren.png", cdn + "img/game-boom.png", cdn + "img/handicap.png", cdn + "img/game-item-1.png", cdn + "img/game-item-2.png", cdn + "img/game-item-3.png", cdn + "img/game-item-4.png", cdn + "img/game-item-5.png", cdn + "img/game-item-6.png", cdn + "img/game-item-7.png", cdn + "img/game-item-8.png", cdn + "img/game-item-9.png", cdn + "img/game-item-10.png", cdn + "img/game-item-11.png", cdn + "img/game-item-12.png", cdn + "img/game-item-13.png", cdn + "img/game-item-14.png", cdn + "img/game-item-15.png", cdn + "img/game-item-16.png", cdn + "img/game-item-17.png", cdn + "img/game-item-18.png", cdn + "img/game-item-2-old.png", cdn + "img/game-item-3-old.png", cdn + "img/game-item-4-old.png", cdn + "img/game-item-5-old.png", cdn + "img/game-item-6-old.png", cdn + "img/game-item-7-old.png", cdn + "img/game-item-8-old.png", cdn + "img/game-item-9-old.png", cdn + "img/game-item-10-old.png", cdn + "img/game-item-11-old.png", cdn + "img/game-item-12-old.png", cdn + "img/game-item-13-old.png", cdn + "img/game-item-14-old.png", cdn + "img/game-item-15-old.png", cdn + "img/game-item-16-old.png", cdn + "img/game-item-17-old.png", cdn + "img/game-item-18-old.png"]);
  loader.onComplete = function () {
    return loadStart();
  };
  loader.load();
  return $(document).on("click", ".icon-wechat", function () {
    // console.log "abcd"
    return $(".share-wechat").show();
  });
};

hideShareWechat = function hideShareWechat() {
  // console.log "close"
  return $(".share-wechat").hide();
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
      console.log(e);
      now++;
      // console.log parseInt (now/count)*100
      if (now >= count) {
        clearInterval(tm);
        ep.html(parseInt(now / count * 100) + "%");
        setTimeout(function () {
          $("#loading").addClass("animated fadeOut");
          return $(".page.begin").removeClass("hide");
          // Store.game.build()
        }, 1500);
        return setTimeout(function () {
          return $("#loading").hide();
        }, 1000);
      }
    }
  });
};

// loadOther = ->
// 	layzr = new Layzr
// 		selector: '[data-src]'
// 		attr:'data-src'
