// Generated by CoffeeScript 1.10.0
var Loader, SendNote, Store, _loader, cdn, debug, global, isMM, layzr, link, mainSlider, secondSlider, tabId, tabId2, tm;

Array.prototype.clean = function(deleteValue) {
  var i;
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

Store = {};

layzr = null;

tm = null;

debug = false;

cdn = "";

isMM = false;

global = {};

link = "http://api.giccoo.com";

mainSlider = {};

secondSlider = {};

tabId = 0;

tabId2 = 0;

window.onload = function() {
  var h;
  h = $("body").height() - $(".bg").height();
  console.log("h", h);
  if ((h / 2) < 0) {
    return $(".bg").css({
      "bottom": (h / 2) + "px"
    });
  }
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
