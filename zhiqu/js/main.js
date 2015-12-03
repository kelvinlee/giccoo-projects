// Generated by CoffeeScript 1.9.1
var ANIMATION_END_NAME, ANIMATION_END_NAMES, TRANSITION_END_NAME, TRANSITION_END_NAMES, VENDORS, _gifCount, _gifnow, awardList, backBottle, backBottleMain, brandShow, clearNone, css3Prefix, global, hideFirstPage, i, imageList, images, imgs, init, j, len, loadEnd, loadGIF, loadStart, loaded, logoShow, mTestElement, mediaShow, openAward, openBottle, openBottleMain, openBrand, openMedia, opened, page, pages, startLoadPage, strategyShow, tags, technologyShow, test;

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

Array.prototype.clean = function(deleteValue) {
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

HTMLElement.prototype.getStyle = function(className) {
  if (this.currentStyle) {
    return this.currentStyle(className);
  } else {
    return document.defaultView.getComputedStyle(this, false)[className];
  }
};

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

images = "";

imageList = [];

imgs = [];

page = ["page-brand"];

pages = [".pages-brand"];

opened = false;

global = {};

loaded = [];

tags = null;

window.onload = function() {
  $(".bottle-logo-next").css({
    bottom: 164 - $("body").height() * 0.13 - 18
  });
  $(".pages-award .icon").on("click", openAward);
  $(".pages-media .bottle-media-movie").on("click", openMedia);
  $(".pages-brand .item").on("click", openBrand);
  $(".firstPage .content").on("click", init);
  $(".pages-media .icons-1 .icon").on("touchstart", function(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    return $(".alert", this).addClass("on");
  });
  $(".pages-media .icons-1 .icon").on("touchmove", function(evt) {
    evt.stopPropagation();
    return evt.preventDefault();
  });
  $(".pages-media .icons-1 .icon").on("touchend", function(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    return $(".alert", this).removeClass("on");
  });
  $(".pages-brand .content").css({
    "margin-top": -(1136 - $("body").height()) + "px"
  });
  return $("#pop .close").on("click", function() {
    $("#pop").hide();
    return $("#pop .pop-content").html("");
  });
};

init = function() {
  $(".firstPage").addClass("on");
  return setTimeout(function() {
    return loadStart();
  }, 1500);
};

test = function() {};

loadStart = function() {
  var count, ep, now;
  count = $("[data-layzr]").length;
  now = 0;
  ep = $("#loading-text");
  $("[data-layzr]").on("load", function() {
    now++;
    ep.text(parseInt(now / count * 60));
    if (now >= count) {
      return loadEnd();
    }
  });
  return $("[data-layzr]").each(function() {
    return $(this).attr("src", $(this).attr("data-layzr"));
  });
};

_gifCount = 0;

_gifnow = 0;

loadGIF = function() {
  var ep;
  _gifnow++;
  ep = $("#loading-text");
  ep.text(parseInt(60 + _gifnow / _gifCount * 40));
  if (_gifnow >= _gifCount) {
    return hideFirstPage();
  }
};

loadEnd = function() {
  _gifCount = $("gif").length;
  riot.mount("*");
  return console.log(_gifCount);
};

startLoadPage = function(name, evt) {
  var count, loadPageEnd, now;
  if ((global != null) && (global["bottle" + name] != null)) {
    global["bottle" + name].replay("prepare");
  }
  now = 0;
  count = $("[data-layzr-" + name + "]").length;
  console.log(name, count);
  _gifCount = 0;
  _gifnow = 0;
  loadGIF = function() {
    _gifnow++;
    if (_gifnow >= _gifCount) {
      return loadPageEnd();
    }
  };
  loadPageEnd = function() {
    if (_gifCount === 0) {
      loaded[name] = true;
      openBottleMain(evt);
    } else if (_gifnow >= _gifCount) {
      loaded[name] = true;
      openBottleMain(evt);
    }
    if (name === "strategy") {
      return setTimeout(function() {
        if ((global != null) && (global["strategyad"] != null)) {
          return global["strategyad"].replay("replay");
        }
      }, 1000);
    }
  };
  $("[data-layzr-" + name + "]").on("load", function() {
    now++;
    if (now >= count) {
      return loadPageEnd();
    }
  });
  $("[data-layzr-" + name + "]").each(function() {
    return $(this).attr("src", $(this).attr("data-layzr-" + name));
  });
  if (name === "brand") {
    riot.mount("div#brandbg", "gif");
    riot.mount("div#brands", "gif");
    _gifCount = 2;
  }
  if (name === "technology") {
    riot.mount("div#technologylogo", "gif");
    _gifCount = 1;
  }
  if (name === "media") {
    riot.mount("div#bottlemediamovie", "gif");
    _gifCount = 1;
  }
  if (name === "logo") {
    riot.mount("div#logobg", "gif");
    riot.mount("div#logobottle", "gif");
    riot.mount("div#logovitro", "gif");
    _gifCount = 3;
  }
  if (name === "strategy") {
    riot.mount("div#strategyarrowwhite", "gif");
    riot.mount("div#strategyarrowyellow1", "gif");
    riot.mount("div#strategyicons", "gif");
    riot.mount("div#strategypeople1", "gif");
    riot.mount("div#strategypeople2", "gif");
    riot.mount("div#strategyarrowyellow2", "gif");
    riot.mount("div#strategyad", "gif");
    _gifCount = 7;
  }
  if (count === 0) {
    return loadPageEnd();
  }
};

hideFirstPage = function() {
  $(".firstPage").addClass("fadeOut animated");
  return setTimeout(function() {
    return $(".firstPage").remove();
  }, 500);
};

openBottle = function(evt) {
  var name;
  if (opened) {
    return false;
  }
  console.log(evt);
  name = $(evt).attr("page-name");
  $(evt).next().addClass("on");
  $(".bottle-" + name).addClass("Mybottle");
  $(".homepage").addClass("page-" + name);
  $(".pages-" + name).show();
  setTimeout(function() {
    return $(".pages-" + name).addClass("thispage");
  }, 1);
  return opened = true;
};

backBottle = function(name) {
  $(".homepage").removeClass("page-" + name);
  $(".bottle-" + name + " .white").removeClass("on");
  $(".pages-" + name).removeClass("thispage");
  $(".bottle-" + name).removeClass("Mybottle");
  setTimeout(function() {
    return $(".pages-" + name).hide();
  }, 2000);
  return opened = false;
};

openBottleMain = function(evt) {
  var name;
  if (opened) {
    return false;
  }
  name = $(evt).attr("page-name");
  if (loaded[name] !== true) {
    startLoadPage(name, evt);
    return false;
  }
  $(evt).next().addClass("on");
  $(".bottle-" + name).addClass("Mybottle");
  $(".main").addClass("page-" + name);
  $(".pages-" + name).show();
  $(".pages-" + name).addClass("thispage");
  if ((global != null) && (global["bottle" + name] != null)) {
    global["bottle" + name].replay("replay");
  }
  opened = true;
  $(".bottle" + name + ".gif").removeClass("normal replay stop").addClass("replay");
  if (name === "brand") {
    brandShow();
  }
  if (name === "media") {
    mediaShow();
  }
  if (name === "strategy") {
    strategyShow();
  }
  if (name === "logo") {
    logoShow();
  }
  if (name === "technology") {
    return technologyShow();
  }
};

backBottleMain = function() {
  var name;
  name = $(".thispage").attr("name");
  console.log("close", name);
  $(".main").removeClass("page-" + name);
  $(".bottle-" + name + " .white").removeClass("on");
  $(".pages-" + name).removeClass("thispage");
  $(".bottle-" + name).removeClass("Mybottle");
  if ((global != null) && (global["bottle" + name] != null)) {
    global["bottle" + name].replay("normal");
  }
  $(".bottle" + name + ".gif").removeClass("normal replay stop").addClass("normal");
  return clearNone();
};

awardList = [{}];

openBrand = function(evt) {
  var e, n;
  evt.stopPropagation();
  e = $(evt.target);
  n = e.attr("rel");
  $("#pop").show();
  return $("#pop .pop-content").html("<img src='img/pages-brand-pop-" + n + ".png' />");
};

openAward = function(evt) {
  var e, n;
  evt.stopPropagation();
  e = $(evt.target).parents(".icon");
  n = e.attr("rel");
  $(".pages-award .pop").show();
  $(".pages-award .pop .pop-content").html('<div class="alert-' + n + '"><img src="img/pages-award-alert-' + n + '.jpg" /></div>');
  return $(".pages-award .pop").on("click", function() {
    return $(".pages-award .pop").hide();
  });
};

openMedia = function(evt) {
  var e, n;
  evt.stopPropagation();
  e = $(evt.target).parents(".icon");
  n = e.attr("rel");
  $(".pages-media .pop").show();
  return $(".pages-media .pop").on("click", function() {
    return $(".pages-media .pop").hide();
  });
};

clearNone = function() {
  return setTimeout(function() {
    opened = false;
    if ((global != null) && (global["brandbg"] != null)) {
      global["brandbg"].replay("normal");
    }
    if ((global != null) && (global["brands"] != null)) {
      global["brands"].replay("stop");
    }
    if ((global != null) && (global["bottlemediamovie"] != null)) {
      global["bottlemediamovie"].replay("stop");
    }
    if ((global != null) && (global["strategypeople1"] != null)) {
      global["strategypeople1"].replay("stop");
    }
    if ((global != null) && (global["strategypeople2"] != null)) {
      global["strategypeople2"].replay("stop");
    }
    if ((global != null) && (global["strategyicons"] != null)) {
      global["strategyicons"].replay("stop");
    }
    if ((global != null) && (global["strategyarrowyellow1"] != null)) {
      global["strategyarrowyellow1"].replay("stop");
    }
    if ((global != null) && (global["strategyarrowyellow2"] != null)) {
      global["strategyarrowyellow2"].replay("stop");
    }
    if ((global != null) && (global["strategyad"] != null)) {
      global["strategyad"].replay("stop");
    }
    if ((global != null) && (global["logobg"] != null)) {
      global["logobg"].replay("stop");
    }
    if ((global != null) && (global["logobottle"] != null)) {
      global["logobottle"].replay("stop");
    }
    if ((global != null) && (global["logovitro"] != null)) {
      return global["logovitro"].replay("stop");
    }
  }, 500);
};

brandShow = function() {
  $(".pages-brand .pop").hide();
  $(".pages-brand .pop .pop-content").html("");
  return setTimeout(function() {
    if ((global != null) && (global["brandbg"] != null)) {
      global["brandbg"].replay("replay");
    }
    if ((global != null) && (global["brands"] != null)) {
      return global["brands"].replay("normal");
    }
  }, 1700);
};

mediaShow = function() {
  if ((global != null) && (global["bottlemediamovie"] != null)) {
    return global["bottlemediamovie"].replay("replay");
  }
};

strategyShow = function() {
  if ((global != null) && (global["strategypeople1"] != null)) {
    global["strategypeople1"].replay("replay");
  }
  if ((global != null) && (global["strategypeople2"] != null)) {
    global["strategypeople2"].replay("replay");
  }
  if ((global != null) && (global["strategyicons"] != null)) {
    global["strategyicons"].replay("replay");
  }
  if ((global != null) && (global["strategyarrowyellow1"] != null)) {
    global["strategyarrowyellow1"].replay("replay");
  }
  if ((global != null) && (global["strategyarrowyellow2"] != null)) {
    global["strategyarrowyellow2"].replay("replay");
  }
  if ((global != null) && (global["strategyarrowwhite"] != null)) {
    global["strategyarrowwhite"].replay("replay");
  }
  if ((global != null) && (global["strategyad"] != null)) {
    return global["strategyad"].replay("replay");
  }
};

logoShow = function() {
  if ((global != null) && (global["logobg"] != null)) {
    global["logobg"].replay("normal");
  }
  if ((global != null) && (global["logobottle"] != null)) {
    global["logobottle"].replay("normal");
  }
  if ((global != null) && (global["logovitro"] != null)) {
    global["logovitro"].replay("normal");
  }
  return setTimeout(function() {
    if ((global != null) && (global["logobg"] != null)) {
      global["logobg"].replay("replay");
    }
    if ((global != null) && (global["logobottle"] != null)) {
      global["logobottle"].replay("replay");
    }
    return setTimeout(function() {
      if ((global != null) && (global["logovitro"] != null)) {
        return global["logovitro"].replay("replay");
      }
    }, 400);
  }, 2400);
};

technologyShow = function() {
  if ((global != null) && (global["technologylogo"] != null)) {
    return global["technologylogo"].replay("replay");
  }
};
