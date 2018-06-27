'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ANIMATION_END_NAME, ANIMATION_END_NAMES, Container, Graphics, IsPC, ParticleContainer, Sprite, TRANSITION_END_NAME, TRANSITION_END_NAMES, Texture, TextureCache, UGC, VENDORS, _CDN, _public, autoDetectRenderer, css3Prefix, e, getId, getTe, i, imageurl, init, j, len1, loadWechatConfig, loader, loading, mTestElement, main, musicIcon, musicIconCD, musicIconCache, musicLineCache, musicScore, neteaseShareImage, options, passiveSupported, resource, resources, sended, sys, ugcCache;

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

for (j = 0, len1 = VENDORS.length; j < len1; j++) {
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

passiveSupported = false;

try {
  options = Object.defineProperty({}, "passive", {
    get: function get() {
      return passiveSupported = true;
    }
  });
  window.addEventListener("test", options, options);
  window.removeEventListener("test", options, options);
} catch (error) {
  e = error;
  passiveSupported = false;
}

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

Vue.component("player", {
  template: '<div class="player" :class="{play: playing, pause: !playing}" @click="change"> <div class="icon-play" :class="{play: playing, pause: !playing}"> <svg v-if="!icon" v-show="!playing" height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ytp-id-39"></use><path class="ytp-svg-fill" d="M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z"></path></svg> <svg v-if="!icon" v-show="playing" height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ytp-id-40"></use><path class="ytp-svg-fill" d="M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z"></path></svg> </div> <audio :src="src" :autoplay="autoplay" :preload="preload" :loop="loop"></audio> <img v-if="thumb" :src="thumb" /> </div>',
  data: function data() {
    return {
      playing: false,
      stoped: false
    };
  },
  props: {
    name: {
      default: false
    },
    src: {
      default: "./mp3/bgm.mp3"
    },
    thumb: {
      default: false
    },
    autoplay: {
      default: false
    },
    preload: {
      default: false
    },
    loop: {
      default: false
    },
    callback: {
      default: false
    },
    icon: {
      default: false
    }
  },
  methods: {
    play: function play() {
      var temp;
      temp = this.$emit('play', this);
      return this.playing = true;
    },
    pause: function pause() {
      var temp;
      temp = this.$emit('pause', this);
      this.audio.pause();
      return this.playing = false;
    },
    ended: function ended() {
      return this.playing = false;
    },
    change: function change() {
      if (this.playing) {
        this.audio.pause();
        return this.stoped = true;
      } else {
        this.audio.play();
        this.stoped = false;
        return typeof _hmt !== "undefined" && _hmt !== null && _hmt.push(['_trackEvent', "adidas-originals-eqt", this.name, "play", "-"]);
      }
    }
  },
  // computed:
  mounted: function mounted(el) {
    console.log(this.name);
    this.audio = this.$el.children[1];
    // console.log @audio
    // @audioOther = @$el.children[2]
    this.audio.addEventListener("pause", this.pause.bind(this));
    this.audio.addEventListener("play", this.play.bind(this));
    return this.audio.addEventListener("ended", this.ended.bind(this));
  }
});

// @audio.play()
// console.log @audio,@audioOther,@playing
Container = PIXI.Container;

ParticleContainer = PIXI.ParticleContainer;

autoDetectRenderer = PIXI.autoDetectRenderer;

loader = PIXI.loader;

resources = PIXI.loader.resources;

TextureCache = PIXI.utils.TextureCache;

Texture = PIXI.Texture;

Sprite = PIXI.Sprite;

Graphics = PIXI.Graphics;

resource = PIXI.loader.resources;

getTe = function getTe(id) {
  return resource[id].texture;
};

getId = function getId(id, link) {
  return loader.resources[link].textures[id];
};

musicScore = function () {
  // @codekit-prepend "../../libs/coffee/pixi-base"
  var musicScore = function () {
    function musicScore(arg) {
      _classCallCheck(this, musicScore);

      this.opts = {
        el: "main",
        w: 640,
        h: 640,
        count: 4,
        alpha: 0.2,
        speed: 0.1,
        lineHeight: 20,
        defaultShow: true,
        class: "",
        fillColor: 0x66CCFF
      };
      this.opts = Object.assign(this.opts, arg);
      this.default.h = document.documentElement.clientHeight;
      this.default.w = document.documentElement.clientWidth;
      this.default.ratio = this.opts.w / this.default.w;
      this.app = new PIXI.Application({
        width: this.opts.w,
        height: this.opts.h,
        transparent: true,
        preserveDrawingBuffer: true
      });
      if (this.opts.class != null && this.opts.class !== "") {
        this.app.view.className = this.opts.class;
      }
      this.stage = this.app.stage;
      document.getElementById(this.opts.el).appendChild(this.app.view);
      PIXI.loader.add([]).load(this.build.bind(this));
    }

    _createClass(musicScore, [{
      key: 'build',
      value: function build() {
        var detail, grap, k, ref, x, xend, y, y2, y3;
        detail = 1;
        grap = this.grap = new Graphics();
        grap.lineStyle(4, 0xFFFFFF, 1);
        if (this.default.up) {
          this.default.x += this.opts.speed * detail;
          this.default.y += this.opts.speed * detail;
          if (this.default.x > this.default.max) {
            this.default.up = false;
          }
        } else {
          this.default.x -= this.opts.speed * detail;
          this.default.y -= this.opts.speed * detail;
          if (Math.abs(this.default.x) > this.default.max) {
            this.default.up = true;
          }
        }
        x = 0 - Math.abs(this.default.x);
        xend = 640 + Math.abs(this.default.x);
        for (i = k = 0, ref = this.opts.count; 0 <= ref ? k < ref : k > ref; i = 0 <= ref ? ++k : --k) {
          y = 100 + i * this.opts.lineHeight + this.default.y * 0.5;
          grap.moveTo(x, y);
          grap.bezierCurveTo(x, y, 160 + this.default.x, y - 40 + this.default.y, xend / 2, y + this.opts.lineHeight * 1.5);
          y2 = y + this.opts.lineHeight * 1.5;
          y3 = y2 + this.opts.lineHeight * 1.5;
          grap.moveTo(xend / 2, y2);
          grap.bezierCurveTo(xend / 2, y2, 480 + this.default.x, y3 + 40 + this.default.y, xend, y3);
        }
        grap.alpha = this.opts.alpha;
        return this.stage.addChild(grap);
      }

      // @.app.ticker.add @.loop.bind @

    }, {
      key: 'loop',
      value: function loop(detail) {
        var grap, k, ref, results, x, xend, y, y2, y3;
        if (!this.default.running) {
          return false;
        }
        grap = this.grap;
        grap.clear();
        grap.lineStyle(4, 0xFFFFFF, 1);
        if (this.default.up) {
          this.default.x += this.opts.speed * detail;
          this.default.y += this.opts.speed * detail;
          if (this.default.x > this.default.max) {
            this.default.up = false;
          }
        } else {
          this.default.x -= this.opts.speed * detail;
          this.default.y -= this.opts.speed * detail;
          if (Math.abs(this.default.x) > this.default.max) {
            this.default.up = true;
          }
        }
        x = 0 - Math.abs(this.default.x);
        xend = 640 + Math.abs(this.default.x);
        results = [];
        for (i = k = 0, ref = this.opts.count; 0 <= ref ? k < ref : k > ref; i = 0 <= ref ? ++k : --k) {
          y = 100 + i * this.opts.lineHeight + this.default.y * 0.5;
          grap.moveTo(x, y);
          grap.bezierCurveTo(x, y, 160 + this.default.x, y - 40 + this.default.y, xend / 2, y + this.opts.lineHeight * 1.5);
          y2 = y + this.opts.lineHeight * 1.5;
          y3 = y2 + this.opts.lineHeight * 1.5;
          grap.moveTo(xend / 2, y2);
          results.push(grap.bezierCurveTo(xend / 2, y2, 480 + this.default.x, y3 + 40 + this.default.y, xend, y3));
        }
        return results;
      }
    }]);

    return musicScore;
  }();

  ;

  musicScore.prototype.default = {
    date: new Date().getTime(),
    x: 0,
    y: 0,
    max: 10,
    up: true,
    running: true
  };

  return musicScore;
}.call(undefined);

Container = PIXI.Container;

ParticleContainer = PIXI.ParticleContainer;

autoDetectRenderer = PIXI.autoDetectRenderer;

loader = PIXI.loader;

resources = PIXI.loader.resources;

TextureCache = PIXI.utils.TextureCache;

Texture = PIXI.Texture;

Sprite = PIXI.Sprite;

Graphics = PIXI.Graphics;

resource = PIXI.loader.resources;

getTe = function getTe(id) {
  return resource[id].texture;
};

getId = function getId(id, link) {
  return loader.resources[link].textures[id];
};

musicIcon = function () {
  // @codekit-prepend "../../libs/coffee/pixi-base"
  var musicIcon = function () {
    function musicIcon(arg) {
      _classCallCheck(this, musicIcon);

      this.opts = {
        el: "main",
        w: 640,
        h: 400,
        count: 6,
        speed: 1,
        alpha: 0.8,
        defaultShow: true,
        class: "",
        fillColor: 0x66CCFF
      };
      this.opts = Object.assign(this.opts, arg);
      this.default.h = document.documentElement.clientHeight;
      this.default.w = document.documentElement.clientWidth;
      this.default.ratio = this.opts.w / this.default.w;
      this.app = new PIXI.Application({
        width: this.opts.w,
        height: this.opts.h,
        transparent: true,
        preserveDrawingBuffer: true
      });
      if (this.opts.class != null && this.opts.class !== "") {
        this.app.view.className = this.opts.class;
      }
      this.stage = this.app.stage;
      document.getElementById(this.opts.el).appendChild(this.app.view);
      PIXI.loader.add([_CDN + "img/music-icon-1.png", _CDN + "img/music-icon-2.png"]).load(this.build.bind(this));
    }

    _createClass(musicIcon, [{
      key: 'build',
      value: function build() {
        var icon, k, ref, scale;
        for (i = k = 0, ref = this.opts.count; 0 <= ref ? k < ref : k > ref; i = 0 <= ref ? ++k : --k) {
          icon = new Sprite(resources[_CDN + ('img/music-icon-' + (i % 2 + 1) + '.png')].texture);
          icon.x = Math.random() * this.opts.w;
          icon.y = Math.random() * (this.opts.h - icon.height);
          icon.turnSpeed = Math.random() - 0.8;
          icon.direction = Math.random() * Math.PI * 2;
          icon.speed = this.opts.speed + Math.random() * this.opts.speed;
          icon.alpha = Math.random() * 0.3 + 0.2;
          scale = Math.random() * 0.5 + 0.3;
          icon.scale.set(scale, scale);
          this.list.push(icon);
          this.stage.addChild(icon);
        }
        this.app.ticker.add(this.loop.bind(this));
        if (this.opts.callback != null) {
          return this.opts.callback();
        }
      }
    }, {
      key: 'loop',
      value: function loop(detail) {
        var icon, k, len2, ref, results;
        if (!this.default.running) {
          return false;
        }
        ref = this.list;
        results = [];
        for (k = 0, len2 = ref.length; k < len2; k++) {
          icon = ref[k];
          icon.direction += icon.turnSpeed * 0.005;
          icon.x += Math.sin(icon.direction) * icon.speed * detail;
          // icon.y += Math.cos(icon.direction) * icon.speed
          if (icon.x > this.opts.w) {
            icon.x = 0;
            icon.y = Math.random() * (this.opts.h - icon.height);
          }
          if (icon.x < -icon.width) {
            icon.x = this.opts.w;
            results.push(icon.y = Math.random() * (this.opts.h - icon.height));
          } else {
            results.push(void 0);
          }
        }
        return results;
      }
    }]);

    return musicIcon;
  }();

  ;

  musicIcon.prototype.list = [];

  musicIcon.prototype.default = {
    w: 320,
    h: 160,
    running: true
  };

  return musicIcon;
}.call(undefined);

musicIconCD = function () {
  var musicIconCD = function () {
    function musicIconCD(arg) {
      _classCallCheck(this, musicIconCD);

      this.opts = {
        el: "main",
        w: 640,
        h: 640,
        list: [{
          x: 250,
          y: 480
        }, {
          x: 190,
          y: 440
        }, {
          x: 130,
          y: 380
        }, {
          x: 80,
          y: 440
        }, {
          x: 20,
          y: 360
        }],
        speed: 1,
        alpha: 0.8,
        defaultShow: true,
        class: "",
        fillColor: 0x66CCFF
      };
      this.opts = Object.assign(this.opts, arg);
      this.default.h = document.documentElement.clientHeight;
      this.default.w = document.documentElement.clientWidth;
      this.default.ratio = this.opts.w / this.default.w;
      this.app = new PIXI.Application({
        width: this.opts.w,
        height: this.opts.h,
        transparent: true,
        preserveDrawingBuffer: true
      });
      if (this.opts.class != null && this.opts.class !== "") {
        this.app.view.className = this.opts.class;
      }
      this.stage = this.app.stage;
      document.getElementById(this.opts.el).appendChild(this.app.view);
      PIXI.loader.add([]).load(this.build.bind(this));
    }

    _createClass(musicIconCD, [{
      key: 'build',
      value: function build() {
        var icon, k, ref;
        for (i = k = 0, ref = this.opts.list.length; 0 <= ref ? k < ref : k > ref; i = 0 <= ref ? ++k : --k) {
          icon = new Sprite(resources[_CDN + ('img/music-icon-' + (i % 2 + 1) + '.png')].texture);
          icon.x = this.opts.list[i].x;
          icon.dx = this.opts.list[i].x;
          icon.y = this.opts.list[i].y;
          icon.dy = this.opts.list[i].y;
          icon.turnSpeed = Math.random() + 0.2;
          icon.direction = Math.PI * 2;
          icon.speed = this.opts.speed + Math.random() * this.opts.speed;
          icon.alpha = Math.random() * 0.5 + 0.5;
          icon.scale.set(0.5 + i % 5 * 0.1, 0.5 + i % 5 * 0.1);
          this.list.push(icon);
          this.stage.addChild(icon);
        }
        return this.app.ticker.add(this.loop.bind(this));
      }
    }, {
      key: 'loop',
      value: function loop(detail) {
        var icon, k, len2, ref, results;
        if (!this.default.running) {
          return false;
        }
        ref = this.list;
        results = [];
        for (k = 0, len2 = ref.length; k < len2; k++) {
          icon = ref[k];
          icon.direction += icon.turnSpeed * 0.005;
          icon.x -= Math.sin(icon.direction * 10) * 0.5 * detail;
          icon.y -= Math.cos(icon.direction) * 0.2 * detail;
          icon.alpha -= 0.003 * detail;
          if (icon.alpha <= 0 || icon.x <= -icon.width || icon.y <= -icon.height || icon.x > this.opts.w || icon.y > this.opts.h) {
            icon.direction = Math.PI * 2;
            icon.x = icon.dx;
            icon.y = icon.dy;
            results.push(icon.alpha = 1);
          } else {
            results.push(void 0);
          }
        }
        return results;
      }
    }]);

    return musicIconCD;
  }();

  ;

  musicIconCD.prototype.list = [];

  musicIconCD.prototype.default = {
    w: 320,
    h: 160,
    running: true
  };

  return musicIconCD;
}.call(undefined);

// @codekit-prepend "coffee/css3Prefix"
// @codekit-prepend "../../libs/coffee/requestanimation"
// @codekit-prepend "../../libs/coffee/loadWechatConfig"
// @codekit-prepend "../../libs/coffee/passiveSupport"
// @codekit-prepend "../../libs/coffee/IsPC"
// @codekit-prepend "../../libs/vue/vue-player"
// @codekit-prepend "./pixi-music-score"
// @codekit-prepend "./pixi-music-icon"

// 抽奖流程, 前几页的音符飘动
// ugc post, 分享设置, 后台抽奖流程

// animate = (time)->
// 	requestAnimationFrame animate
// 	TWEEN.update(time)
// requestAnimationFrame animate

// Tn = (from = {x: 0},to = {x: 100},time = 800,callback)->
// 	tempX = from
// 	tween = new TWEEN.Tween(tempX)
// 	.to(to, time)
// 	.easing(TWEEN.Easing.Cubic.Out)
// 	.onUpdate =>
// 		callback tempX
// 	.start()
// 	return tween
String.prototype.gblen = function () {
  var k, len, ref;
  len = 0;
  for (i = k = 0, ref = this.length; 0 <= ref ? k < ref : k > ref; i = 0 <= ref ? ++k : --k) {
    if (this.charCodeAt(i) > 127 || this.charCodeAt(i) === 94) {
      len += 2;
    } else {
      len++;
    }
  }
  return len;
};

imageurl = "//api.giccoo.com/api/upload/image64/";

main = {};

_public = {};

loading = {};

musicLineCache = null;

musicIconCache = null;

sys = "";

ugcCache = null;

sended = [false, false];

_CDN = "./";

neteaseShareImage = function neteaseShareImage() {
  var picUrl, redirectUrl, title1;
  title1 = "最幸运的你，藏在你爱的音乐里";
  picUrl = "https://image.giccoo.com/upload/beingmate/" + main.shareImageLink + "@!large";
  redirectUrl = "https://m.giccoo.com/beingmate/";
  // console.log picUrl,"orpheus://sharepic?picUrl="+encodeURIComponent(picUrl)+"&shareUrl="+encodeURIComponent(redirectUrl)+"&wbDesc="+encodeURIComponent(title1)+"&qqDesc="+encodeURIComponent(title1)
  return window.location.href = "orpheus://sharepic?picUrl=" + encodeURIComponent(picUrl) + "&shareUrl=" + encodeURIComponent(redirectUrl) + "&wbDesc=" + encodeURIComponent(title1) + "&qqDesc=" + encodeURIComponent(title1);
};

window.onload = function () {
  if (IsPC()) {
    document.getElementById("qrcode").className += " show";
    return false;
  }
  if (window.navigator.userAgent.indexOf("NeteaseMusic") > -1) {
    sys = "NeteaseMusic";
  } else {
    loadWechatConfig();
    wx.ready(function () {
      var shareContent;
      shareContent = {
        title: "最幸运的你，藏在你爱的音乐里",
        desc: "最幸运的你，藏在你爱的音乐里",
        link: "http://m.giccoo.com/beingmate/",
        imgUrl: "http://m.giccoo.com/beingmate/img/ico.jpg",
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
  _public = new Vue({
    el: "#public",
    data: {
      note: true
    }
  });
  return loading = new Vue({
    el: "#loading",
    data: {
      progress: 0,
      mounted: false,
      progressOn: 100
    },
    mounted: function mounted() {
      var _this = this;

      var timein;
      this.mounted = true;
      timein = setInterval(function () {
        _this.progress += 3;
        if (_this.progress >= _this.progressOn) {
          _this.progress = _this.progressOn;
        }
        if (_this.progress >= 100) {
          _this.progress = 100;
          clearInterval(timein);
          main.mounted = true;
          return setTimeout(function () {
            document.getElementById('load').className += " fadeOut animated";
            _public.note = false;
            return setTimeout(function () {
              return document.getElementById('load').style.display = "none";
            }, 520);
          }, 100);
        }
      }, 1000 / 20);
      return setTimeout(function () {
        return init();
      }, 500);
    }
  });
};

init = function init() {
  return main = new Vue({
    el: "#main",
    data: {
      wy: false,
      mounted: false,
      pagebuildShow: false,
      pagelastShow: false,
      popmoreinfoShow: false,
      poplotteryShow: false,
      regisiterSuccessShow: false,
      loading: false,
      lottery: "coupons", //award coupons 
      index: 0,
      pageIndex: 0,
      maxPage: 2,
      animateIndex: 1,
      animationCache: null,
      nickname: "刻下你的名字",
      ugc: null,
      ugcSave: null,
      shareImageLink: null,
      pushed: false,
      form: {
        username: "",
        mobile: "",
        id: "",
        random: null
      },
      default: {
        x: 0,
        animated: false
      },
      XY: "pageY"
    },
    watch: {
      pageIndex: function pageIndex(n, o) {
        // console.log n,o
        if (n !== o && n === 1) {
          return this.animationRun();
        } else {
          clearInterval(this.animationCache);
          musicLineCache.default.running = false;
          return musicIconCache.default.running = false;
        }
      }
    },
    methods: {
      getLottery: function getLottery() {
        if (this.lottery === "award") {
          return this.poplotteryShow = true;
        } else {
          return window.location.href = "https://taoquan.taobao.com/coupon/unify_apply.htm?sellerId=1603022933&activityId=c88eca642a5c4b5d987bc7245a8899f6";
        }
      },
      animationRun: function animationRun() {
        var _this2 = this;

        musicLineCache.default.running = true;
        musicIconCache.default.running = true;
        return this.animationCache = setInterval(function () {
          _this2.animateIndex += 1;
          if (_this2.animateIndex >= 3) {
            return _this2.animateIndex = 0;
          }
        }, 4000);
      },
      moveNext: function moveNext() {
        this.pageIndex += 1;
        if (this.pageIndex >= this.maxPage) {
          return this.pageIndex = this.maxPage;
        }
      },
      movePrev: function movePrev() {
        this.pageIndex -= 1;
        if (this.pageIndex <= 0) {
          return this.pageIndex = 0;
        }
      },
      start: function start(evt) {
        var touch;
        if (this.default.animated) {
          return false;
        }
        // evt.preventDefault()
        this.noteMsg = false;
        touch = evt.touches != null ? evt.touches[0] : evt;
        this.default.x = touch[this.XY];
        return _public.note = false;
      },
      move: function move(evt) {
        var pageX, touch;
        if (this.default.animated || this.poping) {
          return false;
        }
        evt.preventDefault();
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
        // this = @
        return this.default.animated = false;
      },
      focus: function focus(evt) {
        console.log(this.nickname);
        if (this.nickname === "刻下你的名字") {
          return this.nickname = "";
        }
      },
      blur: function blur(evt) {
        if (this.nickname === "") {
          return this.nickname = "刻下你的名字";
        }
      },
      gotobuild: function gotobuild(evt) {
        var _this3 = this;

        var id;
        if (this.nickname === "" || this.nickname === "刻下你的名字") {
          alert("请刻下你的名字");
          return false;
        }
        if (this.nickname.gblen() > 16) {
          alert("名字只能在16个字符以内,中文占2个字符");
          return false;
        }
        this.poping = true;
        this.pagebuildShow = true;
        id = parseInt(escape(this.nickname).replace(/[^0-9|a-z]/ig, ""), 36) % 5 + 1;
        if (!(id >= 1 || id <= 5)) {
          id = 1;
        }
        this.loading = true;
        return ugcCache = new UGC({
          id: id,
          callback: function callback() {
            _this3.ugc = ugcCache.getNormal();
            _this3.ugcSave = ugcCache.get();
            return _this3.loading = false;
          }
        });
      },
      submit: function submit() {
        if (this.form.username === "") {
          return alert("请输入用户名");
        }
        if (this.form.mobile === "") {
          return alert("请输入联系电话");
        }
        if (this.form.id === "") {
          return alert("请输入身份证");
        }
        // "//api.giccoo.com/mbenz-love/insert"

        return axios.post("//api.giccoo.com/beingmate/update/", this.form).then(function (msg) {
          if (msg.data.recode === 200) {
            return main.regisiterSuccessShow = true;
          } else {
            return alert(msg.data.reason);
          }
        }).catch(function (e) {
          return alert("提交失败请重试");
        });
      },
      share: function share() {
        var _this4 = this;

        var data, image;
        image = ugcCache.get();
        data = {
          image: image,
          folder: "beingmate"
        };
        if (image == null) {
          return this.faild();
        }
        if (this.pushed) {
          return false;
        }
        // @.ugcLoadPageShow = true
        this.loading = true;
        return axios.post(imageurl, data).then(function (msg) {
          _this4.pushed = true;
          if (msg.data.recode === 200) {
            return main.success(msg.data);
          } else {
            // @.ugcLoadPageShow = false
            return main.faild();
          }
        }).catch(function (e) {
          // alert e
          return main.faild();
        });
      },
      success: function success(data) {
        var _this5 = this;

        console.log("post success");
        this.loading = false;
        this.shareImageLink = data.info;
        setTimeout(function () {
          _this5.pagelastShow = true;
          return axios.get("//api.giccoo.com/beingmate/getaward").then(function (msg) {
            console.log(msg.data);
            if (msg.data.Time && msg.data.award) {
              _this5.form.random = msg.data.random;
              return _this5.lottery = "award";
            }
          });
        }, 1000);
        return neteaseShareImage();
      },
      faild: function faild() {
        return this.loading = false;
      }
    },
    mounted: function mounted() {
      if (sys === "NeteaseMusic") {
        this.wy = true;
      }
      // if not musicLineCache?
      musicLineCache = new musicScore({
        el: "lineGB"
      });
      musicIconCache = new musicIcon({
        el: "musicIcon",
        speed: 0.8,
        callback: function callback() {
          var musicIconCDCache, musicIconCDCache2;
          musicIconCDCache = new musicIconCD({
            el: "musicIconCD"
          });
          return musicIconCDCache2 = new musicIconCD({
            el: "musicIconCD2",
            list: [{
              x: 250,
              y: 480
            }, {
              x: 450,
              y: 380
            }, {
              x: 190,
              y: 440
            }, {
              x: 80,
              y: 440
            }, {
              x: 520,
              y: 460
            }, {
              x: 130,
              y: 260
            }, {
              x: 550,
              y: 460
            }]
          });
        }
      });
      return console.log("mounted");
    }
  });
};

UGC = function () {
  var UGC = function () {
    function UGC(arg) {
      _classCallCheck(this, UGC);

      this.opts = {
        el: "ugc",
        w: 750,
        h: 1333,
        list: [{
          x: 540,
          y: 863
        }, {
          x: 590,
          y: 803
        }, {
          x: 630,
          y: 750
        }, {
          x: 540,
          y: 710
        }, {
          x: 630,
          y: 680
        }],
        defaultShow: true,
        class: "",
        fillColor: 0x66CCFF,
        id: 1,
        callback: function callback() {}
      };
      this.opts = Object.assign(this.opts, arg);
      this.default.h = document.documentElement.clientHeight;
      this.default.w = document.documentElement.clientWidth;
      this.default.ratio = this.opts.w / this.default.w;
      this.app = new PIXI.Application({
        width: this.opts.w,
        height: this.opts.h,
        transparent: true,
        preserveDrawingBuffer: true
      });
      if (this.opts.class != null && this.opts.class !== "") {
        this.app.view.className = this.opts.class;
      }
      this.stage = this.app.stage;
      document.getElementById(this.opts.el).appendChild(this.app.view);
      PIXI.loader.add([_CDN + "img/page-build-bg.jpg", _CDN + "img/page-build-text.png", _CDN + "img/page-build-title.png", _CDN + ('img/page-build-text-' + this.opts.id + '.png'), _CDN + ('img/page-build-title-' + this.opts.id + '.png'), _CDN + "img/page-build-score-bg.png", _CDN + "img/page-build-score.png", _CDN + "img/page-build-qrcode.png"]).load(this.build.bind(this));
    }

    _createClass(UGC, [{
      key: 'build',
      value: function build() {
        var bg, flower, icon, k, l, line, mtext, mtitle, nickname, ref, score, text, title;
        bg = new Sprite(resources[_CDN + "img/page-build-bg.jpg"].texture);
        this.stage.addChild(bg);
        title = new Sprite(resources[_CDN + "img/page-build-title.png"].texture);
        title.x = 400;
        title.y = 250;
        this.stage.addChild(title);
        mtitle = new Sprite(resources[_CDN + ('img/page-build-title-' + this.opts.id + '.png')].texture);
        mtitle.x = this.opts.w / 2;
        mtitle.y = 330;
        mtitle.scale.set(0.7, 0.7);
        mtitle.anchor.set(0.5, 0);
        this.stage.addChild(mtitle);
        text = new Sprite(resources[_CDN + "img/page-build-text.png"].texture);
        text.x = this.opts.w / 2;
        text.y = 500;
        text.anchor.set(0.5, 0);
        this.stage.addChild(text);
        for (i = k = 0; k < 5; i = ++k) {
          score = i <= this.opts.id - 1 ? "" : "-bg";
          flower = new Sprite(resources[_CDN + ('img/page-build-score' + score + '.png')].texture);
          flower.x = i * flower.width + 165;
          flower.y = 580;
          flower.scale.set(0.7, 0.7);
          flower.anchor.set(0.5, 0);
          this.stage.addChild(flower);
        }
        mtext = new Sprite(resources[_CDN + ('img/page-build-text-' + this.opts.id + '.png')].texture);
        mtext.x = this.opts.w / 2;
        mtext.y = 700;
        mtext.scale.set(0.7, 0.7);
        mtext.anchor.set(0.5, 0);
        this.stage.addChild(mtext);
        nickname = new PIXI.Text(main.nickname, {
          fontFamily: "Arial",
          fontSize: 32,
          fill: "white"
        });
        nickname.x = 200;
        nickname.y = 254;
        nickname.anchor.set(0.5, 0);
        this.stage.addChild(nickname);
        line = new Graphics();
        line.lineStyle(4, 0xFFFFFF, 1);
        line.moveTo(60, 300);
        line.lineTo(340, 300);
        line.y = 4;
        this.stage.addChild(line);
        for (i = l = 0, ref = this.opts.list.length; 0 <= ref ? l < ref : l > ref; i = 0 <= ref ? ++l : --l) {
          icon = new Sprite(resources[_CDN + ('img/music-icon-' + (i % 2 + 1) + '.png')].texture);
          icon.x = this.opts.list[i].x;
          icon.dx = this.opts.list[i].x;
          icon.y = this.opts.list[i].y;
          icon.dy = this.opts.list[i].y;
          icon.turnSpeed = Math.random() + 0.2;
          icon.direction = Math.PI * 2;
          icon.speed = this.opts.speed + Math.random() * this.opts.speed;
          icon.alpha = Math.random() * 0.5 + 0.5;
          icon.scale.set(0.5 + i % 5 * 0.1, 0.5 + i % 5 * 0.1);
          this.list.push(icon);
          this.stage.addChild(icon);
        }
        this.app.ticker.add(this.loop.bind(this));
        if (this.opts.callback != null) {
          return this.opts.callback();
        }
      }
    }, {
      key: 'loop',
      value: function loop(detail) {
        var icon, k, len2, ref, results;
        if (!this.default.running) {
          return false;
        }
        ref = this.list;
        results = [];
        for (k = 0, len2 = ref.length; k < len2; k++) {
          icon = ref[k];
          icon.direction += icon.turnSpeed * 0.005;
          icon.x -= Math.sin(icon.direction * 10) * 0.5 * detail;
          icon.y -= Math.cos(icon.direction) * 0.2 * detail;
          icon.alpha -= 0.003 * detail;
          if (icon.alpha <= 0 || icon.x <= -icon.width || icon.y <= -icon.height || icon.x > this.opts.w || icon.y > this.opts.h) {
            icon.direction = Math.PI * 2;
            icon.x = icon.dx;
            icon.y = icon.dy;
            results.push(icon.alpha = 1);
          } else {
            results.push(void 0);
          }
        }
        return results;
      }
    }, {
      key: 'getNormal',
      value: function getNormal() {
        this.app.renderer.render(this.app.stage);
        return this.app.view.toDataURL();
      }
    }, {
      key: 'get',
      value: function get() {
        var ugc;
        ugc = new Sprite(resources[_CDN + "img/page-build-qrcode.png"].texture);
        ugc.scale.set(750 / 1080, 750 / 1080);
        ugc.x = 0;
        ugc.y = 1333 - ugc.height - 100;
        this.stage.addChild(ugc);
        this.app.renderer.render(this.app.stage);
        ugc.alpha = 0;
        return this.app.view.toDataURL();
      }
    }]);

    return UGC;
  }();

  ;

  UGC.prototype.default = {
    w: 320,
    h: 160,
    running: true
  };

  UGC.prototype.list = [];

  return UGC;
}.call(undefined);
