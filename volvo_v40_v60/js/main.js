'use strict';

var ANIMATION_END_NAME, ANIMATION_END_NAMES, TRANSITION_END_NAME, TRANSITION_END_NAMES, VENDORS, _citys, changePoint, css3Prefix, i, j, len, mTestElement, showTab, tabId;

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
_citys = {};

_citys["北京"] = {};

_citys["甘肃"] = {};

_citys["河北"] = {};

_citys["黑龙江"] = {};

_citys["吉林"] = {};

_citys["辽宁"] = {};

_citys["内蒙古"] = {};

_citys["山东"] = {};

_citys["山西"] = {};

_citys["陕西"] = {};

_citys["天津"] = {};

_citys["新疆"] = {};

_citys["安徽"] = {};

_citys["河南"] = {};

_citys["湖北"] = {};

_citys["江苏"] = {};

_citys["江西"] = {};

_citys["上海"] = {};

_citys["浙江"] = {};

_citys["福建"] = {};

_citys["广东"] = {};

_citys["广西"] = {};

_citys["贵州"] = {};

_citys["海南"] = {};

_citys["湖南"] = {};

_citys["四川"] = {};

_citys["云南"] = {};

_citys["重庆"] = {};

_citys["宁夏"] = {};

_citys["青海"] = {};

_citys["北京"]["北京"] = [];

_citys["甘肃"]["兰州"] = [];

_citys["河北"]["石家庄"] = [];

_citys["河北"]["唐山"] = [];

_citys["黑龙江"]["哈尔滨"] = [];

_citys["吉林"]["长春"] = [];

_citys["辽宁"]["大连"] = [];

_citys["辽宁"]["沈阳"] = [];

_citys["内蒙古"]["包头"] = [];

_citys["内蒙古"]["呼和浩特"] = [];

_citys["山东"]["济南"] = [];

_citys["山东"]["青岛"] = [];

_citys["山东"]["烟台"] = [];

_citys["山西"]["太原"] = [];

_citys["陕西"]["西安"] = [];

_citys["天津"]["天津"] = [];

_citys["新疆"]["乌鲁木齐"] = [];

_citys["安徽"]["合肥"] = [];

_citys["河南"]["郑州"] = [];

_citys["湖北"]["武汉"] = [];

_citys["江苏"]["常州"] = [];

_citys["江苏"]["南通"] = [];

_citys["江苏"]["苏州"] = [];

_citys["江苏"]["无锡"] = [];

_citys["江苏"]["扬州"] = [];

_citys["江西"]["南昌"] = [];

_citys["上海"]["上海"] = [];

_citys["浙江"]["杭州"] = [];

_citys["浙江"]["嘉兴"] = [];

_citys["浙江"]["宁波"] = [];

_citys["浙江"]["绍兴"] = [];

_citys["浙江"]["台州"] = [];

_citys["浙江"]["温州"] = [];

_citys["福建"]["泉州"] = [];

_citys["广东"]["东莞"] = [];

_citys["广东"]["佛山"] = [];

_citys["广东"]["广州"] = [];

_citys["广东"]["揭阳"] = [];

_citys["广东"]["汕头"] = [];

_citys["广东"]["深圳"] = [];

_citys["广东"]["中山"] = [];

_citys["广东"]["珠海"] = [];

_citys["广西"]["南宁"] = [];

_citys["贵州"]["贵阳"] = [];

_citys["海南"]["海口"] = [];

_citys["湖南"]["长沙"] = [];

_citys["四川"]["成都"] = [];

_citys["云南"]["昆明"] = [];

_citys["重庆"]["重庆"] = [];

_citys["山东"]["潍坊"] = [];

_citys["河北"]["保定"] = [];

_citys["江苏"]["南京"] = [];

_citys["辽宁"]["鞍山"] = [];

_citys["陕西"]["榆林"] = [];

_citys["山东"]["济宁"] = [];

_citys["山东"]["临沂"] = [];

_citys["山东"]["淄博"] = [];

_citys["山东"]["泰安"] = [];

_citys["山东"]["东营"] = [];

_citys["河北"]["邯郸"] = [];

_citys["四川"]["乐山"] = [];

_citys["黑龙江"]["大庆"] = [];

_citys["宁夏"]["银川"] = [];

_citys["内蒙古"]["赤峰"] = [];

_citys["青海"]["西宁"] = [];

_citys["河南"]["洛阳"] = [];

_citys["山西"]["大同"] = [];

_citys["广西"]["桂林"] = [];

_citys["浙江"]["湖州"] = [];

_citys["江苏"]["徐州"] = [];

_citys["福建"]["厦门"] = [];

_citys["江苏"]["泰州"] = [];

_citys["广西"]["柳州"] = [];

_citys["福建"]["福州"] = [];

_citys["江西"]["赣州"] = [];

_citys["江苏"]["镇江"] = [];

_citys["河南"]["平顶山"] = [];

_citys["辽宁"]["锦州"] = [];

_citys["福建"]["龙岩"] = [];

_citys["河南"]["安阳"] = [];

_citys["山东"]["威海"] = [];

_citys["江苏"]["盐城"] = [];

_citys["安徽"]["阜阳"] = [];

_citys["四川"]["绵阳"] = [];

_citys["福建"]["三明"] = [];

_citys["河南"]["商丘"] = [];

_citys["江西"]["九江"] = [];

_citys["安徽"]["芜湖"] = [];

_citys["山东"]["滨州"] = [];

_citys["江苏"]["常熟"] = [];

_citys["江西"]["上饶"] = [];

_citys["山东"]["德州"] = [];

_citys["河北"]["邢台"] = [];

_citys["云南"]["红河"] = [];

_citys["福建"]["漳州"] = [];

_citys["湖南"]["株洲"] = [];

_citys["四川"]["南充"] = [];

_citys["湖北"]["襄阳"] = [];

_citys["河南"]["南阳"] = [];

_citys["陕西"]["咸阳"] = [];

_citys["福建"]["莆田"] = [];

_citys["吉林"]["吉林"] = [];

_citys["浙江"]["金华"] = [];

_citys["陕西"]["宝鸡"] = [];

_citys["陕西"]["延安"] = [];

_citys["浙江"]["义乌"] = [];

_citys["河南"]["新乡"] = [];

_citys["河北"]["沧州"] = [];

_citys["山西"]["临汾"] = [];

_citys["浙江"]["舟山"] = [];

_citys["山西"]["运城"] = [];

_citys["广东"]["江门"] = [];

window.onload = function () {
  riot.mount("*");
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

tabId = 1;

changePoint = function changePoint(i) {
  var e;
  console.log(Math.abs(i));
  e = $(".contents .item").eq(tabId - 1);
  $(".points span", e).removeClass("on");
  return $(".points span", e).eq(Math.abs(i)).addClass("on");
};

showTab = function showTab(i) {
  $(".tabs .item").removeClass("on");
  $(".tabs .item").eq(i - 1).addClass("on");
  $(".contents .item").hide();
  $(".contents .item").eq(i - 1).show();
  return tabId = i;
};

showTab(1);
