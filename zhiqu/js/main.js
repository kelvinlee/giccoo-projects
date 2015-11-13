// Generated by CoffeeScript 1.9.1
var ANIMATION_END_NAME, ANIMATION_END_NAMES, TRANSITION_END_NAME, TRANSITION_END_NAMES, VENDORS, backBottle, css3Prefix, i, imageList, images, imgs, j, len, mTestElement, openBottle, page, pages;

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

imageList = ["http://disk.giccoo.com/projects/libs/img/wechat.png"];

imgs = [];

page = ["page-brand"];

pages = [".pages-brand"];

window.onload = function() {};

openBottle = function(evt) {
  var name;
  console.log(evt);
  name = $(evt).attr("page-name");
  $(evt).next().addClass("on");
  $(".homepage").addClass("page-" + name);
  $(".pages-" + name).show();
  setTimeout(function() {
    return $(".pages-" + name).addClass("thispage");
  }, 1);
  return console.log(name);
};

backBottle = function(name) {
  $(".homepage").removeClass("page-" + name);
  $(".bottle-" + name + " .white").removeClass("on");
  $(".pages-" + name).removeClass("thispage");
  return setTimeout(function() {
    return $(".pages-" + name).hide();
  }, 2000);
};
