'use strict';

var ANIMATION_END_NAME, ANIMATION_END_NAMES, Store, TRANSITION_END_NAME, TRANSITION_END_NAMES, VENDORS, _history, begin, controllers, css3Prefix, hideShareWechat, i, j, layzr, len, loadOther, loadStart, mTestElement, qrcode, routeFun, routeParser, tm, wonShare;

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

_history = [];

wonShare = "";

begin = false;

controllers = {
  before: function before(collection, action, id, next) {
    // You can do some thing here doesn't need waiting for page changed.
    // console.log "Alipay",alipay
    $(".page.share").removeClass("show");
    if (!begin) {
      if (action != null) {
        riot.route("/share/" + action);
      } else {
        riot.route("/");
      }
    }
    if (action == null && (collection === "notes" || collection === "menus" || collection === "finishedPage")) {
      return riot.route("/" + collection + "/" + wonShare);
    }
    Store.parallax && Store.parallax.animate(collection);
    return next();
  },
  share: function share(action, id) {
    $(".page.share").addClass("show");
    // riot.mount("div#shares","share",{action:action})
    return setTimeout(function () {
      return riot.mount("div#shares", "share", {
        action: action,
        name: "share"
      });
    }, 1500);
  },
  // $(".pages").hide()
  finishedPage: function finishedPage(action, id) {
    if (action != null) {
      return riot.mount("div#finishedPage", "share", {
        action: action,
        name: "finishedPage"
      });
    }
  },
  notes: function notes(action, id) {
    if (action != null) {
      return riot.mount("div#notes", "share", {
        action: action,
        name: "notes"
      });
    }
  }
};

//notes
// action? && Store.notes && Store.notes.changed(action)
routeFun = function routeFun(collection, action, id) {
  var fn;
  if (collection == null) {
    collection = "homepage";
  }
  // console.log "route:",collection ,action ,id
  fn = controllers[collection];
  return controllers["before"](collection, action, id, function () {
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

layzr = null;

tm = null;

window.onload = function () {
  var ep;
  // $("#loading").hide()
  if (document.getElementById("qrcode").getStyle("display") === "block") {
    qrcode();
    return false;
  }
  riot.mount("*");
  ep = $(".load-progress .n");
  tm = setInterval(function () {
    if (parseInt(ep.html()) >= 90) {
      clearInterval(tm);
      return false;
    }
    return ep.html(parseInt(ep.html()) + parseInt(Math.random() * 5));
  }, 100);
  setTimeout(function () {
    return loadStart();
  }, 1000);
  // alert($("body").height())
  if ($("body").height() <= 460) {
    $("body").addClass("iphone4");
  }
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
        ep.html(parseInt(now / count * 100));
        setTimeout(function () {
          $("#loading").addClass("animated fadeOut");
          return loadOther();
        }, 1500);
        return setTimeout(function () {
          return $("#loading").hide();
        }, 1000);
      }
    }
  });
};

loadOther = function loadOther() {
  return layzr = new Layzr({
    selector: '[data-src]',
    attr: 'data-src'
  });
};
