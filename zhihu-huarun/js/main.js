"use strict";

var $_GET, _CDN, _imgurl, _learnmorelink, getRandom, global, init, load, loadWechatConfig, main, pre, stopWebViewScroll;

_CDN = "";

_imgurl = "";

global = {};

main = {};

pre = {};

load = {};

_learnmorelink = ["https://www.zhihu.com/question/268770483", "https://www.zhihu.com/question/268770615", "https://www.zhihu.com/question/268770266"];

getRandom = function getRandom(length) {
  return parseInt(Math.random() * (length + 1) - 1);
};

window.onload = function () {
  // runAnimate()
  loadWechatConfig();
  wx.ready(function () {
    var shareContent;
    shareContent = {
      title: "24小时健康享新家",
      desc: "华润漆A+系列，让你轻松24小时入住新家！",
      link: "http://m.giccoo.com/zhihu-huarun/",
      imgUrl: "http://m.giccoo.com/zhihu-huarun/img/ico.jpg",
      success: function success() {},
      // alert "success"
      cancel: function cancel() {}
    };
    // alert "cancel"
    wx.onMenuShareTimeline(shareContent);
    wx.onMenuShareAppMessage(shareContent);
    wx.onMenuShareQQ(shareContent);
    return wx.onMenuShareWeibo(shareContent);
  });
  return init();
};

init = function init() {
  var TrueH, TrueW, handleOrientationChange, mql;
  TrueH = document.documentElement.clientHeight;
  TrueW = document.documentElement.clientWidth;
  console.log(TrueW, TrueH);
  // document.body.style.height = TrueH+"px"
  if (TrueW / TrueH >= 0.64) {
    document.documentElement.className += " iphone4";
  }
  main = new Vue({
    el: "#main",
    data: {
      homepageShow: true,
      mount: false,
      loading: false,
      lastpage: false,
      roomIndex: 0,
      rotate: 90,
      w: TrueH,
      h: TrueW,
      maxRoom: 4,
      poping: false,
      popImage: "",
      learnmorelink: "",
      popmore: false,
      timeAnimate: false,
      default: {
        x: 0,
        animated: false
      }
    },
    computed: {
      room: function room() {
        return 'room';
      },
      XY: function XY() {
        if (this.rotate === 90) {
          return "pageY";
        } else {
          return "pageX";
        }
      }
    },
    methods: {
      openErr: function openErr(index) {
        console.log(index);
        this.poping = true;
        this.popmore = false;
        return this.popImage = "./img/room-" + index + "-pop.png";
      },
      openPop: function openPop(index) {
        console.log(index);
        this.poping = true;
        this.popmore = true;
        this.popImage = "./img/room-" + index + "-learnmore.png";
        return this.learnmorelink = _learnmorelink[index - 1];
      },
      changeRoom: function changeRoom() {
        return console.log(this.roomIndex);
      },
      moveNext: function moveNext() {
        console.log("xiayige", this.roomIndex);
        this.roomIndex += 1;
        if (this.roomIndex >= this.maxRoom) {
          return this.roomIndex = this.maxRoom;
        }
      },
      movePrev: function movePrev() {
        console.log("shangyige", this.roomIndex);
        this.roomIndex -= 1;
        if (this.roomIndex <= 0) {
          return this.roomIndex = 0;
        }
      },
      start: function start(evt) {
        var touch;
        touch = evt.touches[0];
        return this.default.x = touch[this.XY];
      },
      move: function move(evt) {
        var pageX, touch;
        evt.preventDefault();
        if (this.default.animated || this.poping) {
          return false;
        }
        touch = evt.touches[0];
        pageX = touch[this.XY];
        if (pageX - this.default.x > 50) {
          this.default.animated = true;
          this.movePrev();
        }
        if (pageX - this.default.x < -50) {
          this.default.animated = true;
          return this.moveNext();
        }
      },
      end: function end(evt) {
        return this.default.animated = false;
      }
    },
    mounted: function mounted($el, e) {
      var _this = this;

      this.mount = true;
      this.$el.addEventListener('touchstart', this.start.bind(this));
      this.$el.addEventListener('touchmove', this.move.bind(this));
      this.$el.addEventListener('touchend', this.end.bind(this));
      return setInterval(function () {
        _this.timeAnimate = true;
        return setTimeout(function () {
          return _this.timeAnimate = false;
        }, 1000);
      }, 3000);
    }
  });
  handleOrientationChange = function handleOrientationChange() {
    TrueH = document.documentElement.clientHeight;
    TrueW = document.documentElement.clientWidth;
    if (mql.matches) {
      main.rotate = 90;
      main.w = TrueH;
      return main.h = TrueW;
    } else {
      main.rotate = 0;
      return setTimeout(function () {
        TrueH = document.documentElement.clientHeight;
        TrueW = document.documentElement.clientWidth;
        main.w = TrueW;
        return main.h = TrueH;
      }, 1000);
    }
  };
  // alert main.rotate
  mql = window.matchMedia('(orientation: portrait)');
  mql.addListener(handleOrientationChange);
  return handleOrientationChange();
};

loadWechatConfig = function loadWechatConfig() {
  var hm, s, url;
  url = encodeURIComponent(window.location.href.split("#")[0]);
  hm = document.createElement('script');
  hm.src = "//api.giccoo.com/api/config?url=" + url;
  s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(hm, s);
};

$_GET = function () {
  var get, i, j, k, len, u, url;
  url = window.document.location.href.toString();
  u = url.split('?');
  if (typeof u[1] === 'string') {
    u = u[1].split('&');
    get = {};
    console.log(u);
    for (k = 0, len = u.length; k < len; k++) {
      i = u[k];
      j = i.split('=');
      get[j[0]] = j[1];
    }
    return get;
  } else {
    return {};
  }
}();

stopWebViewScroll = function stopWebViewScroll() {
  var el, k, len, overscroll, ref, results;
  overscroll = function overscroll(el) {
    el.addEventListener('touchstart', function () {
      var currentScroll, top, totalScroll;
      top = el.scrollTop;
      totalScroll = el.scrollHeight;
      currentScroll = top + el.offsetHeight;
      if (top === 0) {
        return el.scrollTop = 1;
      } else if (currentScroll === totalScroll) {
        return el.scrollTop = top - 1;
      }
    });
    // alert el.scrollTop
    return el.addEventListener("touchmove", function (evt) {
      if (el.offsetHeight < el.scrollHeight) {
        return evt._isScroller = true;
      }
    });
  };
  document.addEventListener("touchmove", function (evt) {
    if (!evt._isScroller) {
      return evt.preventDefault();
    }
  });
  ref = document.querySelectorAll(".touch");
  // console.log document.querySelectorAll(".touch")
  results = [];
  for (k = 0, len = ref.length; k < len; k++) {
    el = ref[k];
    results.push(overscroll(el));
  }
  return results;
};
