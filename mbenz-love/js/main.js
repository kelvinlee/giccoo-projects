"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var IsPC, Sprite, Tn, _CDN, _imgurl, _animate, getRandom, global, imageurl, init, load, loadWechatConfig, loader, main, neteaseShareImage, pre, randomSort, res, stars, sys;

randomSort = function randomSort(obj) {
  var newArr, oldarr, _randomSortFun;
  newArr = [];
  oldarr = obj;
  _randomSortFun = function randomSortFun(arr, newArr) {
    var random;
    if (arr.length === 1) {
      newArr.push(arr[0]);
      return newArr;
    }
    random = Math.ceil(Math.random() * arr.length) - 1;
    newArr.push(arr[random]);
    arr.splice(random, 1);
    return _randomSortFun(arr, newArr);
  };
  _randomSortFun(oldarr, newArr);
  return newArr;
};

getRandom = function getRandom(length) {
  return parseInt(Math.random() * (length + 1) - 1);
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

loadWechatConfig = function loadWechatConfig() {
  var hm, s, url;
  url = encodeURIComponent(window.location.href.split("#")[0]);
  hm = document.createElement('script');
  hm.src = "//api.giccoo.com/api/config?url=" + url;
  s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(hm, s);
};

IsPC = function IsPC() {
  var Agents, flag, userAgentInfo, v;
  userAgentInfo = navigator.userAgent;
  Agents = new Array('Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod');
  flag = true;
  v = 0;
  while (v < Agents.length) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = false;
      break;
    }
    v++;
  }
  return flag;
};

Sprite = PIXI.Sprite;

loader = PIXI.loader;

res = PIXI.loader.resources;

stars = function () {
  // star
  var stars = function () {
    function stars() {
      _classCallCheck(this, stars);
    }

    _createClass(stars, [{
      key: "loop",
      value: function loop(detail) {
        var j, len, ref, results, star;
        if (!this.moving) {
          return false;
        }
        ref = this.stars;
        results = [];
        for (j = 0, len = ref.length; j < len; j++) {
          star = ref[j];
          if (star.valpha >= 1) {
            star.alpha += 0.02 * detail;
          }
          if (star.valpha <= -1) {
            star.alpha -= 0.02 * detail;
          }
          if (star.alpha <= 0) {
            star.valpha = 1;
          }
          if (star.alpha >= 1) {
            results.push(star.valpha = -1);
          } else {
            results.push(void 0);
          }
        }
        return results;
      }
    }, {
      key: "build",
      value: function build() {
        var i, j, star;
        console.log(this.stars);
        for (i = j = 1; j < 10; i = ++j) {
          star = new Sprite(res["img/page-1-star-" + (i % 3 + 1) + ".png"].texture);
          star.x = Math.random() * (640 - star.width);
          star.y = Math.random() * (420 - star.width) + 100;
          star.alpha = Math.random() * 1;
          star.valpha = [1, -1][Math.floor(Math.random() * 2)];
          this.stars.push(star);
          this.app.stage.addChild(star);
        }
        console.log(this.stars);
        return this.app.ticker.add(this.loop.bind(this));
      }
    }, {
      key: "init",
      value: function init() {
        this.app = new PIXI.Application({
          width: 640,
          height: 1138,
          transparent: true,
          preserveDrawingBuffer: true
        });
        document.getElementById('stars').appendChild(this.app.view);
        return PIXI.loader.add(["img/page-1-star-1.png", "img/page-1-star-2.png", "img/page-1-star-3.png"]).load(this.build.bind(this));
      }
    }]);

    return stars;
  }();

  ;

  stars.prototype.app = null;

  stars.prototype.moving = true;

  stars.prototype.stars = [];

  return stars;
}.call(undefined);

// rain

// @codekit-prepend "../../libs/coffee/randomSort"
// @codekit-prepend "../../libs/coffee/requestanimation"
// @codekit-prepend "../../libs/coffee/loadWechatConfig"
// @codekit-prepend "../../libs/coffee/ispc"
// @codekit-prepend "./pixi"
_CDN = "";

_imgurl = "";

global = {};

main = {};

pre = {};

load = {};

sys = null;

imageurl = "//api.giccoo.com/api/upload/image64/";

getRandom = function getRandom(length) {
  return parseInt(Math.random() * (length + 1) - 1);
};

window.onload = function () {
  // runAnimate()
  if (window.navigator.userAgent.indexOf("NeteaseMusic") > -1) {
    sys = "NeteaseMusic";
  } else {
    loadWechatConfig();
    wx.ready(function () {
      var shareContent;
      shareContent = {
        title: "点击测试你的孤独指数",
        desc: "与兰蔻一起，度过漫漫长夜",
        link: "http://m.giccoo.com/lancome/",
        imgUrl: "http://m.giccoo.com/lancome/img/ico.jpg",
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
  }
  return init();
};

_animate = function animate(time) {
  requestAnimationFrame(_animate);
  return TWEEN.update(time);
};

requestAnimationFrame(_animate);

init = function init() {
  var TrueH, TrueW, smaller;
  TrueH = document.documentElement.clientHeight;
  TrueW = document.documentElement.clientWidth;
  console.log(TrueW, TrueH);
  if (TrueW >= 640) {
    // document.body.style.height = TrueH+"px"
    // document.documentElement.className += " iphone4" if TrueW/TrueH >= 0.64
    TrueW = 640;
  }
  if (TrueH >= 1138) {
    TrueH = 1138;
  }
  smaller = TrueW / 640 * 1138 > TrueH;
  load = new Vue({
    el: "#load",
    data: {
      progress: 0,
      mount: false,
      progressOn: 0
    },
    computed: {
      progressText: function progressText() {
        var html, i, j, ref, text;
        html = "";
        text = this.progress.toString();
        for (i = j = 0, ref = text.length; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
          html += "<span class='font font-" + text[i] + "'>" + text[i] + "</span>";
        }
        return html + '<span class="font font-last">%</span>';
      }
    },
    mounted: function mounted() {
      var _this = this;

      var timein;
      // @.progress = 10
      this.mount = true;
      return timein = setInterval(function () {
        _this.progress += 3;
        if (_this.progress >= 100) {
          clearInterval(timein);
          _this.progress = 100;
          main.build();
          return main.homepageShow = true;
        }
      }, 1000 / 20);
    }
  });
  return main = new Vue({
    el: "#main",
    data: {
      pc: false,
      smaller: smaller,
      homepageShow: false,
      recordPageShow: false,
      ugcPageShow: false,
      regisiterPageShow: false,
      lastPageShow: false,
      mount: false,
      audio: null,
      playing: "play",
      noteMsg: true,
      w: TrueW,
      h: TrueH,
      maxPage: 8,
      pageIndex: 0,
      moving: true,
      musiclink: "mp3/bgm.mp3",
      default: {
        x: 0,
        animated: false
      },
      XY: "pageX"
    },
    // computed:
    methods: {
      gameStart: function gameStart(Id) {
        return console.log("id:", Id);
      },
      play: function play() {
        if (this.playing === "stop") {
          return this.audio.pause();
        } else {
          return this.audio.play();
        }
      },
      audioplay: function audioplay() {
        return this.playing = "stop";
      },
      audiopause: function audiopause() {
        return this.playing = "play";
      },
      build: function build() {
        this.page1BG = new stars();
        return this.page1BG.init();
      },
      moveNext: function moveNext() {
        // console.log "xiayige",@.pageIndex
        this.pageIndex += 1;
        if (this.pageIndex >= this.maxPage) {
          return this.pageIndex = this.maxPage;
        }
      },
      movePrev: function movePrev() {
        // console.log "shangyige",@.pageIndex
        this.pageIndex -= 1;
        if (this.pageIndex <= 0) {
          return this.pageIndex = 0;
        }
      },
      start: function start(evt) {
        var touch;
        console.log(evt);
        this.noteMsg = false;
        touch = evt.touches != null ? evt.touches[0] : evt;
        return this.default.x = touch[this.XY];
      },
      move: function move(evt) {
        var pageX, touch;
        evt.preventDefault();
        if (this.default.animated || this.poping) {
          return false;
        }
        touch = evt.touches != null ? evt.touches[0] : evt;
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
      if (sys === "NeteaseMusic") {
        this.wy = true;
      }
      this.mount = true;
      this.audio = document.getElementById("bgm");
      if (IsPC()) {
        this.$el.addEventListener('mousedown', this.start.bind(this));
        this.$el.addEventListener('mousemove', this.move.bind(this));
        this.$el.addEventListener('mouseup', this.end.bind(this));
        this.pc = true;
      }
      this.$el.addEventListener('touchstart', this.start.bind(this));
      this.$el.addEventListener('touchmove', this.move.bind(this));
      this.$el.addEventListener('touchend', this.end.bind(this));
      if (this.audio) {
        this.audio.addEventListener("play", this.audioplay.bind(this));
      }
      if (this.audio) {
        this.audio.addEventListener("pause", this.audiopause.bind(this));
      }
      if (this.audio) {
        return this.audio.addEventListener("ended", this.audiopause.bind(this));
      }
    }
  });
};

Tn = function Tn() {
  var from = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    x: 0
  };
  var to = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    x: 100
  };
  var time = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 800;
  var callback = arguments[3];

  var tempX, tween;
  tempX = from;
  tween = new TWEEN.Tween(tempX).to(to, time).easing(TWEEN.Easing.Cubic.Out).onUpdate(function () {
    return callback(tempX);
  }).start();
  return tween;
};

neteaseShareImage = function neteaseShareImage() {
  var picUrl, redirectUrl, title1;
  title1 = "点击测试你的孤独指数";
  picUrl = "https://image.giccoo.com/upload/lancome/" + main.shareImageLink + "@!large";
  redirectUrl = "https://m.giccoo.com/lancome/";
  console.log("orpheus://sharepic?picUrl=" + encodeURIComponent(picUrl) + "&shareUrl=" + encodeURIComponent(redirectUrl) + "&wbDesc=" + encodeURIComponent(title1) + "&qqDesc=" + encodeURIComponent(title1));
  return window.location.href = "orpheus://sharepic?picUrl=" + encodeURIComponent(picUrl) + "&shareUrl=" + encodeURIComponent(redirectUrl) + "&wbDesc=" + encodeURIComponent(title1) + "&qqDesc=" + encodeURIComponent(title1);
};
