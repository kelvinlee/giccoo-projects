// Generated by CoffeeScript 1.9.1
var $_GET, ANIMATION_END_NAME, ANIMATION_END_NAMES, PostAward, PubUrl, TRANSITION_END_NAME, TRANSITION_END_NAMES, TWidth, TrunCheck, VENDORS, XList, _gifCount, _gifnow, awardList, backBottle, backBottleMain, bottleRunEnd, brandLoadEnd, brandShow, clearNone, contactusLoadEnd, css3Prefix, debug, fps, global, hideFirstPage, i, imageList, images, imgs, init, initNormal, k, len, loadEnd, loadGIF, loadProgress, loadStart, loadWechatConfig, loaded, logoLoadEnd, logoShow, mTestElement, mediaShow, openAward, openBottle, openBottleMain, openBrand, openMedia, opened, openid, page, pages, paoAudio, passMoveFun, randomAward, readyEmail, showAwardBox, startLoadPage, stop, strategyShow, tags, technologyHandRun, technologyShow, test;

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

for (k = 0, len = VENDORS.length; k < len; k++) {
  i = VENDORS[k];
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

paoAudio = null;

fps = 30;

randomAward = false;

openid = "";

PubUrl = "http://i.giccoo.com";

debug = false;

window.onload = function() {
  if (!debug) {
    openid = $_GET["openid"];
    if ((openid == null) || openid === "") {
      window.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxb3dd8b8d67e940c4&redirect_uri={url}&response_type=code&scope=snsapi_base&state=123#wechat_redirect".replace("{url}", encodeURIComponent(PubUrl + "/zhiqu/"));
      return false;
    }
  }
  $(".firstPage").show();
  $(".firstPage .content").on("click", init);
  loadWechatConfig();
  return wx.ready(function() {
    var shareContent;
    shareContent = {
      title: "致趣联媒实验室",
      desc: "科学实验表明：99%的移动广告预算可在这里被消耗！",
      link: "http://m.giccoo.com/zhiqu/",
      imgUrl: "http://disk.giccoo.com/projects/zhiqu/img/share.jpg",
      success: function() {},
      cancel: function() {}
    };
    wx.onMenuShareTimeline(shareContent);
    wx.onMenuShareAppMessage(shareContent);
    wx.onMenuShareQQ(shareContent);
    return wx.onMenuShareWeibo(shareContent);
  });
};

PostAward = function() {
  var data;
  console.log("post award");
  data = {
    openid: openid
  };
  return $.post(PubUrl + "/zhiqu/vote/to/", data, function(msg) {
    if (debug) {
      console.log(msg);
    }
    if (msg.recode === 200) {
      return showAwardBox();
    }
  });
};

readyEmail = false;

showAwardBox = function() {
  $(".award-box").show();
  $(".award-box .box .content,.award-box .text").on("click", function() {
    $(".award-box .bingo-box").hide();
    return $(".award-box .bingo-email").show();
  });
  return $(".award-box .bingo-email #submit").on("click", function() {
    var data, email, reg;
    if (readyEmail) {
      return alert("正在提交请稍后...");
    }
    reg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
    email = $("[name=email]").val();
    if (reg.test(email)) {
      readyEmail = true;
      data = {
        openid: openid,
        email: email
      };
      return $.post(PubUrl + "/zhiqu/vote/email/", data, function(msg) {
        readyEmail = false;
        if (msg.recode === 200) {
          alert("已经提交成功, 请等候我们的通知.");
          return $(".award-box").hide();
        } else {
          return alert(msg.reason);
        }
      });
    } else {
      return alert("Email 格式不正确");
    }
  });
};

loadWechatConfig = function() {
  var hm, s, url;
  url = encodeURIComponent(window.location.href.split("#")[0]);
  hm = document.createElement('script');
  hm.src = "http://api.giccoo.com/config?url=" + url;
  s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(hm, s);
};

initNormal = function() {
  setTimeout(function() {
    var all, run10, t;
    all = 0;
    t = new Date();
    i = 0;
    run10 = function() {
      i++;
      all = all + (new Date() - t);
      t = new Date();
      if (i >= 10) {
        fps = parseInt(1000 / all / i * 100);
        if (debug) {
          console.log("fps:", fps);
        }
        return false;
      }
      return requestAnimationFrame(run10);
    };
    return run10();
  }, 500);
  if (Cookies.get("randomAward") === "true") {
    randomAward = true;
  }
  $(".pages-strategy .p-notes").addClass("show");
  $(".pages-strategy .p-notes").on("click", function() {
    $(".pages-strategy .p-notes").removeClass("show");
    return Cookies.set("note-2", "true");
  });
  $(".pages-technology .p-notes").addClass("show");
  $(".pages-technology .p-notes").on("click", function() {
    $(".pages-technology .p-notes").removeClass("show");
    return Cookies.set("note-3", "true");
  });
  $(".bottle-logo-next").css({
    bottom: 164 - $("body").height() * 0.13 - 18
  });
  $(".pages-award .icon").on("click", openAward);
  $(".pages-media .bottle-media-movie").on("click", openMedia);
  $(".pages-brand .item").on("click", openBrand);
  $(".pages-media .icons .icon").on("touchstart", function(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    return $(".alert", this).addClass("on");
  });
  $(".pages-media .icons .icon").on("touchmove", function(evt) {
    evt.stopPropagation();
    return evt.preventDefault();
  });
  $(".pages-media .icons .icon").on("touchend", function(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    $(".alert", this).removeClass("on");
    if (!randomAward) {
      PostAward();
      return randomAward = true;
    }
  });
  $(".giveup").on("click", function() {
    $(".award-box").hide();
    randomAward = true;
    return Cookies.set("randomAward", true);
  });
  $(".pages-media .icons .icon .alert").on("touchstart", function(evt) {
    evt.stopPropagation();
    return evt.preventDefault();
  });
  $(".pages-media .icons .icon .alert").on("touchmove", function(evt) {
    evt.stopPropagation();
    return evt.preventDefault();
  });
  $(".pages-media .icons .icon .alert").on("touchend", function(evt) {
    evt.stopPropagation();
    return evt.preventDefault();
  });
  return $("#pop .close").on("click", function() {
    $("#pop").hide();
    return $("#pop .pop-content").html("");
  });
};

init = function() {
  $(".firstPage").addClass("on");
  $(".firstPage .loading .loadbox").addClass("replay");
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
  return $("[data-layzr]").each(function() {
    var img;
    img = new Image();
    img.onload = function() {
      now++;
      ep.text(parseInt(now / count * 60));
      if (now >= count) {
        return loadEnd();
      }
    };
    img.src = $(this).attr("data-layzr");
    $(this).after(img);
    return $(this).remove();
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
    return setTimeout(function() {
      return hideFirstPage();
    }, 500);
  }
};

loadEnd = function() {
  _gifCount = $("gif").length;
  riot.mount("*");
  initNormal();
  paoAudio = riot.mount("div#paoAudio", "playsound");
  paoAudio[0].stop();
  if (debug) {
    console.log("loaded.");
  }
  $(".homepage .p-notes").addClass("show");
  return $(".homepage .p-notes .note").on("click", function() {
    Cookies.set("note-1", "true");
    return $(".homepage .p-notes").removeClass("show");
  });
};

loadProgress = function() {};

startLoadPage = function(name, evt) {
  var _c, count, loadPageEnd, now, pageEnd, runProgress;
  if ((global != null) && (global["bottle" + name] != null)) {
    global["bottle" + name].replay("prepare");
  }
  now = 0;
  count = $("[data-layzr-" + name + "]").length;
  if (debug) {
    console.log(name, count);
  }
  _gifCount = 0;
  _gifnow = 0;
  pageEnd = 0;
  $(".progress").addClass("show");
  loadGIF = function() {};
  loadPageEnd = function() {
    pageEnd++;
    if (pageEnd < 2) {
      return false;
    }
    $(".progress").removeClass("show");
    setTimeout(function() {
      return $(".progress .line").css({
        width: "0%"
      });
    }, 800);
    if (_gifCount === 0) {
      loaded[name] = true;
      openBottleMain(evt, true);
    } else if (_gifnow >= _gifCount) {
      loaded[name] = true;
      openBottleMain(evt, true);
    }
    if (name === "strategy") {
      return setTimeout(function() {
        if ((global != null) && (global["strategyad"] != null)) {
          return global["strategyad"].replay("replay");
        }
      }, 1000);
    }
  };
  loadProgress = function() {
    _gifnow++;
    runProgress();
    if (_gifnow >= _gifCount) {
      return loadPageEnd();
    }
  };
  runProgress = function() {
    var v;
    v = parseInt((_gifnow + now) / (count + _gifCount) * 100);
    return $(".progress .line").css({
      width: v + "%"
    });
  };
  $("[data-layzr-" + name + "]").each(function() {
    var img;
    img = new Image();
    img.onload = function() {
      now++;
      runProgress();
      if (now >= count) {
        return loadPageEnd();
      }
    };
    img.src = $(this).attr("data-layzr-" + name);
    $(this).after(img);
    return $(this).remove();
  });
  if (name === "brand") {
    _c = parseInt($("#brands").attr("count"));
    riot.mount("div#brands", "gif");
    _c += global["bottlebrand"].reload();
    _gifCount = _c - 2;
  }
  if (name === "technology") {
    _c = parseInt($("#technologylogo").attr("count"));
    _c += parseInt($("#technologypeople5").attr("count"));
    _c += parseInt($("#technologypeople4").attr("count"));
    _c += parseInt($("#technologypeople3").attr("count"));
    _c += parseInt($("#technologypeople2").attr("count"));
    _c += parseInt($("#technologypeople1").attr("count"));
    _c += parseInt($("#technologyhand").attr("count"));
    riot.mount("div#technologylogo", "gif");
    riot.mount("div#technologypeople5", "gif");
    riot.mount("div#technologypeople4", "gif");
    riot.mount("div#technologypeople3", "gif");
    riot.mount("div#technologypeople2", "gif");
    riot.mount("div#technologypeople1", "gif");
    riot.mount("div#technologyhand", "gif");
    _c += global["bottletechnology"].reload();
    _gifCount = _c - 2;
  }
  if (name === "media") {
    _c = parseInt($("#bottlemediamovie").attr("count"));
    riot.mount("div#bottlemediamovie", "gif");
    _c += global["bottlemedia"].reload();
    _gifCount = _c - 2;
  }
  if (name === "logo") {
    _c = parseInt($("#logobg").attr("count"));
    _c += parseInt($("#logovitro").attr("count"));
    riot.mount("div#logobg", "gif");
    riot.mount("div#logovitro", "gif");
    _c += global["bottlelogo"].reload();
    _gifCount = _c - 2;
  }
  if (name === "strategy") {
    _c = parseInt($("#strategyhand").attr("count"));
    _c += parseInt($("#strategyarrowwhite").attr("count"));
    _c += parseInt($("#strategyarrowyellow1").attr("count"));
    _c += parseInt($("#strategyicons").attr("count"));
    _c += parseInt($("#strategypeople1").attr("count"));
    _c += parseInt($("#strategypeople2").attr("count"));
    _c += parseInt($("#strategyarrowyellow2").attr("count"));
    _c += parseInt($("#strategyad").attr("count"));
    riot.mount("div#strategyhand", "gif");
    riot.mount("div#strategyarrowwhite", "gif");
    riot.mount("div#strategyarrowyellow1", "gif");
    riot.mount("div#strategyicons", "gif");
    riot.mount("div#strategypeople1", "gif");
    riot.mount("div#strategypeople2", "gif");
    riot.mount("div#strategyarrowyellow2", "gif");
    riot.mount("div#strategyad", "gif");
    _c += global["bottlestrategy"].reload();
    _gifCount = _c - 2;
  }
  if (name === "contactus") {
    _c = parseInt($("#contactusfull").attr("count"));
    riot.mount("div#contactusfull", "gif");
    _c += global["bottlecontactus"].reload();
    _gifCount = _c - 2;
  }
  if (name === "award") {
    _c = global["bottleaward"].reload();
    _gifCount = _c - 2;
  }
  if (count === 0) {
    return loadPageEnd();
  }
};

hideFirstPage = function() {
  $(".firstPage .loading .box").hide();
  $(".firstPage .loading .box-text").show();
  if (global.bottlelogo == null) {
    alert("riot create fail.");
  }
  return setTimeout(function() {
    $(".main").show();
    $(".firstPage").addClass("fadeOut animated duration-10");
    return setTimeout(function() {
      return $(".firstPage").remove();
    }, 500);
  }, 2000);
};

passMoveFun = function(name) {
  name = name.replace("bottle", "");
  if (debug) {
    console.log("passMoveFun:", name);
  }
  $(".bottle-" + name).addClass("Mybottle");
  $(".main").addClass("page-" + name);
  $(".pages-" + name).show();
  return $(".pages-" + name).addClass("thispage");
};

openBottle = function(evt) {
  var name;
  if (opened) {
    return false;
  }
  if (debug) {
    console.log(evt);
  }
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

bottleRunEnd = function() {
  return paoAudio[0].stop();
};

openBottleMain = function(evt, pass) {
  var name;
  if (opened && pass !== true) {
    return false;
  }
  name = $(evt).attr("page-name");
  $(".pages-" + name).show();
  paoAudio[0].play();
  opened = true;
  if (loaded[name] !== true) {
    startLoadPage(name, evt);
    return false;
  }
  $(evt).next().addClass("on");
  if ((global != null) && (global["bottle" + name] != null)) {
    global["bottle" + name].replay("replay");
  }
  $(".bottle" + name + ".gif").removeClass("normal replay stop").addClass("replay");
  if (name === "brand") {
    brandShow();
    $(".pages-brand .bg").addClass("show");
  }
  if (name === "media") {
    mediaShow();
  }
  if (name === "strategy") {
    strategyShow();
  }
  if (name === "logo") {
    $(".pages-logo-bg .bg").addClass("show");
    logoShow();
  }
  if (name === "technology") {
    return technologyShow();
  }
};

backBottleMain = function() {
  var name;
  name = $(".thispage").attr("name");
  if (debug) {
    console.log("close", name);
  }
  if (name === "brand" && $(".thispage .bg").is(".show")) {
    $(".thispage .bg").removeClass("show");
    setTimeout(function() {
      return backBottleMain();
    }, 500);
    return false;
  }
  if (name === "logo" && $(".pages-logo-bg .bg").is(".show")) {
    $(".pages-logo-bg .bg").removeClass("show");
    setTimeout(function() {
      return backBottleMain();
    }, 500);
    return false;
  }
  $(".main").removeClass("page-" + name);
  $(".bottle-" + name + " .white").removeClass("on");
  $(".pages-" + name).removeClass("thispage");
  $(".bottle-" + name).removeClass("Mybottle");
  if ((global != null) && (global["bottle" + name] != null)) {
    global["bottle" + name].replay("normal");
  }
  $(".bottle" + name + ".gif").removeClass("normal replay stop").addClass("normal");
  paoAudio[0].stop();
  return clearNone();
};

awardList = [{}];

openBrand = function(evt) {
  var e, n;
  evt.stopPropagation();
  e = $(evt.target);
  n = e.attr("rel");
  $("#pop").show();
  $("#pop .pop-content").html("<img src='img/pages-brand-pop-" + n + ".png' /><div class='close close-" + n + "'></div>");
  return $("#pop .close").on("click", function() {
    $("#pop").hide();
    return $("#pop .pop-content").html("");
  });
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
    var stop;
    stop = true;
    opened = false;
    $(".pages-logo").hide();
    $(".pages-media").hide();
    $(".pages-award").hide();
    $(".pages-brand").hide();
    $(".pages-strategy").hide();
    $(".pages-technology").hide();
    $(".pages-contactus").hide();
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
    if ((global != null) && (global["strategyhand"] != null)) {
      global["strategyhand"].replay("normal");
    }
    if ((global != null) && (global["logobg"] != null)) {
      global["logobg"].replay("stop");
    }
    if ((global != null) && (global["logovitro"] != null)) {
      global["logovitro"].replay("stop");
    }
    if ((global != null) && (global["contactusfull"] != null)) {
      return global["contactusfull"].replay("normal");
    }
  }, 500);
};

brandShow = function() {
  $(".pages-brand .pop").hide();
  return $(".pages-brand .pop .pop-content").html("");
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
    global["strategyad"].replay("replay");
  }
  if ((global != null) && (global["strategyhand"] != null)) {
    global["strategyhand"].replay("replay");
  }
  $(".pages-strategy .item-box").on("click", function() {
    if ((global != null) && (global["strategyicons"] != null)) {
      return global["strategyicons"].replay("replay");
    }
  });
  return $(".pages-strategy .fcanvas").on("click", function() {
    if (debug) {
      console.log("test");
    }
    if ((global != null) && (global["strategyad"] != null)) {
      if (global["strategyad"].play === "stepto") {
        global["strategyad"].replay("stepend");
      }
      if (global["strategyad"].play === "replay") {
        return global["strategyad"].replay("stepto");
      }
    }
  });
};

logoShow = function() {
  if ((global != null) && (global["logobg"] != null)) {
    global["logobg"].replay("normal");
  }
  if ((global != null) && (global["logovitro"] != null)) {
    return global["logovitro"].replay("normal");
  }
};

logoLoadEnd = function() {
  if (debug) {
    console.log("logoLoadEnd");
  }
  if ((global != null) && (global["logobg"] != null)) {
    global["logobg"].replay("replay");
  }
  if ((global != null) && (global["logovitro"] != null)) {
    return global["logovitro"].replay("replay");
  }
};

contactusLoadEnd = function() {
  if ((global != null) && (global["contactusfull"] != null)) {
    return global["contactusfull"].replay("replay");
  }
};

brandLoadEnd = function() {
  if ((global != null) && (global["brands"] != null)) {
    return global["brands"].replay("normal");
  }
};

technologyShow = function() {
  var stop;
  $(".pages-technology .box-logo").on("click", function() {
    if ((global != null) && (global["technologylogo"] != null)) {
      return global["technologylogo"].replay("replay");
    }
  });
  if (debug) {
    console.log("T start");
  }
  stop = false;
  return TrunCheck();
};

technologyHandRun = function(name) {
  if (name === "replay") {
    if (debug) {
      return console.log(name);
    }
  }
};

stop = false;

XList = [-62, 30, 122, 214, 306];

TWidth = 460 / 5;

TrunCheck = function() {
  var last;
  if (stop) {
    return false;
  }
  last = 0;
  $(".p-box.index .people").each(function(i) {
    var x;
    x = $(this).offset().left;
    if (i === 0 && x <= XList[i] && global["technologypeople" + (i + 1)].play === "normal") {
      global["technologypeople" + (i + 1)].replay("replay");
      return true;
    }
    if (i === 0 && x >= XList[i] + TWidth * 3.5 && global["technologypeople" + (i + 1)].play !== "normal") {
      global["technologypeople" + (i + 1)].replay("normal");
      return true;
    }
    if (i === 0) {
      return true;
    }
    if (global["technologypeople" + (i + 1)].play === "normal" && x >= XList[i] + TWidth * i) {
      return global["technologypeople" + (i + 1)].replay("replay");
    } else if (x <= XList[i]) {
      return global["technologypeople" + (i + 1)].replay("normal");
    } else if (x >= XList[i] + TWidth * 4.92 && global["technologypeople" + (i + 1)].play !== "normal") {
      return global["technologypeople" + (i + 1)].replay("normal");
    }
  });
  if ($(".pages-technology .line").height() >= 80 && (global["technologyhand"].play !== "stop" && global["technologyhand"].play !== "replay")) {
    global["technologyhand"].replay("replay");
  }
  if ($(".pages-technology .line").height() <= 50 && (global["technologyhand"].play !== "normal")) {
    global["technologyhand"].replay("normal");
  }
  return requestAnimationFrame(TrunCheck);
};

$_GET = (function() {
  var get, j, l, len1, u, url;
  url = window.document.location.href.toString();
  u = url.split('?');
  if (typeof u[1] === 'string') {
    u = u[1].split('&');
    get = {};
    if (debug) {
      console.log(u);
    }
    for (l = 0, len1 = u.length; l < len1; l++) {
      i = u[l];
      j = i.split('=');
      get[j[0]] = j[1];
    }
    return get;
  } else {
    return {};
  }
})();
