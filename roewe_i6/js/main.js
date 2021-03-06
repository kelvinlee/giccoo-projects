'use strict';

var ANIMATION_END_NAME, ANIMATION_END_NAMES, SendNote, Store, TRANSITION_END_NAME, TRANSITION_END_NAMES, VENDORS, _type, changeMain, changePoint, css3Prefix, i, j, len, mTestElement, mainSlider, moveLeft, moveRight, secondSlider, showTab, tabId, tabId2;

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
Store = {};

_type = [{
  name: "银色",
  img: "silver"
}, {
  name: "青色",
  img: "cyan"
}, {
  name: "蓝色",
  img: "blue"
}, {
  name: "红色",
  img: "red"
}, {
  name: "黑色",
  img: "black"
}, {
  name: "白色",
  img: "white"
}];

window.onload = function () {
  var MK;
  riot.mount("*");
  MK = $(".pages").width() / $(".pages").height();
  if ($(".pages").height() <= 460 || MK > 0.72) {
    $("body").addClass("iphone4");
  }
  $(".infopage .title .bar-1").on("click", function () {
    $(".infopage").removeClass("bar-1 bar-2");
    return $(".infopage").addClass("bar-1");
  });
  $(".infopage .title .bar-2").on("click", function () {
    $(".infopage").removeClass("bar-1 bar-2");
    return $(".infopage").addClass("bar-2");
  });
  $(".register .title").on("click", function () {
    $(".register").addClass("on");
    return $(".register").css({
      "transform": "translate3d(0,0,0)"
    });
  });
  $(".register .close").on("click", function () {
    var Rhh;
    $(".register").removeClass("on");
    Rhh = $(".register-form").height();
    return $(".register").css({
      "transform": 'translate3d(0,' + Rhh + 'px,0)'
    });
  });
  setTimeout(function () {
    var Rhh;
    Rhh = $(".register-form").height() + 4;
    console.log(Rhh, $("body").height());
    $(".register").css({
      "transform": 'translate3d(0,' + Rhh + 'px,0)'
    });
    return $(".register").addClass("show");
  }, 500);
  // $(".left").on "click", moveLeft
  // $(".right").on "click", moveRight
  $(".pages .nextpoint").on("click", function () {
    return Store.parallax.passpage("up");
  });
  $(".show-pop").on("click", function () {
    i = $(this).index() + 1;
    $(".pop .content").html('<img src="img/pop-' + i + '.png" />');
    return $(".pop").show();
  });
  $(".pop").on("click", function () {
    return $(".pop").hide();
  });
  return $(".backTop").on("click", function () {
    return window.scrollTo(0, $(".form").offset().top);
  });
};

// $(".left").on "click", moveLeft
// $(".right").on "click", moveRight
mainSlider = {};

secondSlider = {};

tabId = 0;

tabId2 = 0;

changePoint = function changePoint(i) {
  console.log(Math.abs(i));
  tabId2 = Math.abs(i);
  // e = $(".contents .item").eq(tabId-1)
  $(".points span").removeClass("on");
  return $(".points span").eq(Math.abs(i)).addClass("on");
};

changeMain = function changeMain(i) {
  return tabId = Math.abs(i);
};

moveLeft = function moveLeft() {
  tabId--;
  // if tabId < 0
  // tabId = 7
  return mainSlider.setNumber(tabId);
};

moveRight = function moveRight() {
  tabId++;
  // if tabId > 7
  // tabId = 0
  return mainSlider.setNumber(tabId);
};

showTab = function showTab(i) {
  $(".tabs .item").removeClass("on");
  $(".tabs .item").eq(i - 1).addClass("on");
  $(".contents .item").hide();
  $(".contents .item").eq(i - 1).show();
  return tabId = i;
};

showTab(1);

SendNote = function SendNote(msg) {
  var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3000;

  $("body").append("<note title='" + msg + ('\' time=\'' + time + '\'></note>'));
  return riot.mount("note");
};
