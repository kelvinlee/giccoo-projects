'use strict';

var ANIMATION_END_NAME, ANIMATION_END_NAMES, Store, TRANSITION_END_NAME, TRANSITION_END_NAMES, VENDORS, _history, begin, controllers, css3Prefix, i, j, layzr, len, mTestElement, routeFun, routeParser;

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

_history = [];

begin = false;

controllers = {
  before: function before(next) {
    if (!begin) {
      // You can do some thing here doesn't need waiting for page changed.
      // console.log "Alipay",alipay
      riot.route("/");
    }
    return next();
  },
  homepage: function homepage(action, id) {
    return Store.parallax && Store.parallax.animate("homepage");
  },
  activity: function activity(action, id) {
    return Store.parallax && Store.parallax.animate("activity");
  },
  register: function register(action, id) {
    return Store.parallax && Store.parallax.animate("register");
  },
  food: function food(action, id) {
    return Store.parallax && Store.parallax.animate("food");
  },
  bmwx1: function bmwx1(action, id) {
    return Store.parallax && Store.parallax.animate("bmwx1");
  }
};

routeFun = function routeFun(collection, action, id) {
  var fn;
  if (collection == null) {
    collection = "homepage";
  }
  console.log("route:", collection, action, id);
  fn = controllers[collection];
  return controllers["before"](function () {
    // console.log _history
    fn && fn(action, id);
    return _history.push([collection, action, id]);
  });
};

routeParser = function routeParser(path) {
  var paths;
  paths = path.split("/");
  return paths.clean("");
};

riot.route.parser(routeParser);

// 用于页面变化
riot.route(routeFun);

// 用于首页监测
riot.route.exec(routeFun);

riot.mount("*");

layzr = null;

window.onload = function () {
  $("#loading").hide();
  return layzr = new Layzr({
    callback: function callback(e) {}
  });
};

// alert e
