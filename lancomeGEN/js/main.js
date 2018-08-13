'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ANIMATION_END_NAME, ANIMATION_END_NAMES, AnimatedSprite, Container, Graphics, IsPC, ParticleContainer, Sprite, TRANSITION_END_NAME, TRANSITION_END_NAMES, Text, Texture, TextureCache, TrueH, TrueW, UGC, VENDORS, _cache, _public, _runTime, _second, _startCache, _testTime, apiLink, apiUrl, autoDetectRenderer, createObjectURLfun, css3Prefix, getId, getOrientation, getTe, i, imageurl, init, j, len1, loadWechatConfig, loader, loading, mTestElement, main, musicIconCache, musicLineCache, neteaseShareImage, playAudio, random, resource, resources, sended, stopAllAudio, sys, ugc, ugcCache;

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

Text = PIXI.Text;

AnimatedSprite = PIXI.extras.AnimatedSprite;

getTe = function getTe(id) {
  return resource[id].texture;
};

getId = function getId(id, link) {
  return loader.resources[link].textures[id];
};

// for fix ios 8 less
if (Number.isInteger == null) {
  Number.isInteger = function (int) {
    return int >= 0;
  };
}

random = 1 + parseInt(Math.random() * 5);

UGC = function () {
  // imageList = []
  var UGC = function () {
    function UGC(arg) {
      _classCallCheck(this, UGC);

      this.opts = {
        el: "main",
        w: 750,
        h: 1314,
        trueH: 1314,
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
        preserveDrawingBuffer: true,
        forceCanvas: true
      });
      if (this.opts.class != null && this.opts.class !== "") {
        this.app.view.className = this.opts.class;
      }
      this.stage = this.app.stage;
      document.getElementById(this.opts.el).appendChild(this.app.view);
      console.log("imageList:", imageList.length);
      // .add('a-1',"#{_CDN}mp3/a-1.mp3")
      // .add('a-2',"#{_CDN}mp3/a-2.mp3")
      // .add('b-1',"#{_CDN}mp3/b-1.mp3")
      // .add('b-2',"#{_CDN}mp3/b-2.mp3")
      // .add('c-1',"#{_CDN}mp3/c-1.mp3")
      // .add('c-2',"#{_CDN}mp3/c-2.mp3")
      PIXI.loader.add(imageList).use(this.loaditem.bind(this)).load(buildUGC.bind(this));
      this.default.MH = this.opts.h * 0.65;
    }

    _createClass(UGC, [{
      key: 'loaditem',
      value: function loaditem() {
        this.loadNumber++;
        loading.progressOn = parseInt(this.loadNumber / imageList.length * 100);
        // console.log @.loadNumber,loading.progressOn,@.loadNumber is imageList.length
        if (this.loadNumber === imageList.length) {
          return buildUGC.bind(this).call();
        }
      }
    }]);

    return UGC;
  }();

  ;

  UGC.prototype.builded = false;

  UGC.prototype.default = {
    w: 320,
    h: 160,
    running: true
  };

  UGC.prototype.started = false;

  UGC.prototype.over = false;

  UGC.prototype.online = false;

  UGC.prototype.blocks = [];

  UGC.prototype.bottles = [];

  UGC.prototype.enemys = [];

  UGC.prototype.lights = [];

  UGC.prototype._progress = 0;

  UGC.prototype.lineMoving = false;

  UGC.prototype.startTime = null;

  UGC.prototype.loadNumber = 0;

  return UGC;
}.call(undefined);

// @codekit-prepend "coffee/css3Prefix"
// @codekit-prepend "../../libs/coffee/loadWechatConfig"
// @codekit-prepend "../../libs/coffee/IsPC"
// @codekit-prepend "../../libs/vue/vue-player"
// @codekit-prepend "../../libs/coffee/pixi-base"
// @codekit-prepend "./UGC"
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

TrueW = 640;

TrueH = 1138;

imageurl = "//api.giccoo.com/api/upload/image64/";

apiUrl = "//api.giccoo.com/lancomeGEN";

apiLink = "//g.giccoo.com/";

// apiLink = "http://192.168.3.45:3000/"
// apiUrl = "http://localhost:8881/Levi"
main = {};

ugc = null;

_public = {};

loading = {};

musicLineCache = null;

musicIconCache = null;

sys = "";

ugcCache = null;

sended = [false, false];

_cache = null;

_startCache = null;

_runTime = null;

_second = 0;

_testTime = 0;

neteaseShareImage = function neteaseShareImage() {
  var picUrl, redirectUrl, title1;
  title1 = "有故事的声活单曲";
  picUrl = 'https://image.giccoo.com/upload/' + main.folder + '/' + main.shareImageLink + "@!large";
  redirectUrl = "https://m.giccoo.com/lancomeGEN/";
  // console.log picUrl,"orpheus://sharepic?picUrl="+encodeURIComponent(picUrl)+"&shareUrl="+encodeURIComponent(redirectUrl)+"&wbDesc="+encodeURIComponent(title1)+"&qqDesc="+encodeURIComponent(title1)
  window.location.href = "orpheus://sharepic?picUrl=" + encodeURIComponent(picUrl) + "&shareUrl=" + encodeURIComponent(redirectUrl) + "&wbDesc=" + encodeURIComponent(title1) + "&qqDesc=" + encodeURIComponent(title1);
  return console.log("share href:", picUrl);
};

createObjectURLfun = function createObjectURLfun(file) {
  if (window.webkitURL != null || window.navigator.userAgent.indexOf("Chrome") >= 1 || window.navigator.userAgent.indexOf("Safari") >= 1) {
    return window.webkitURL.createObjectURL(file);
  } else {
    return window.URL.createObjectURL(file);
  }
};

getOrientation = function getOrientation(file, callback) {
  var reader;
  reader = new FileReader();
  reader.onload = function (e) {
    var length, little, marker, offset, tags, view;
    view = new DataView(e.target.result);
    if (view.getUint16(0, false) !== 0xFFD8) {
      return callback(-2);
    }
    length = view.byteLength;
    offset = 2;
    while (offset < length) {
      if (view.getUint16(offset + 2, false) <= 8) {
        return callback(-1);
      }
      marker = view.getUint16(offset, false);
      offset += 2;
      if (marker === 0xFFE1) {
        if (view.getUint32(offset += 2, false) !== 0x45786966) {
          return callback(-1);
        }
        little = view.getUint16(offset += 6, false) === 0x4949;
        offset += view.getUint32(offset + 4, little);
        tags = view.getUint16(offset, little);
        offset += 2;
        i = 0;
        while (i < tags) {
          if (view.getUint16(offset + i * 12, little) === 0x0112) {
            return callback(view.getUint16(offset + i * 12 + 8, little));
          }
          i++;
        }
      } else if ((marker & 0xFF00) !== 0xFF00) {
        break;
      } else {
        offset += view.getUint16(offset, false);
      }
    }
    return callback(-1);
  };
  reader.readAsArrayBuffer(file);
};

window.onload = function () {
  var lastY;
  TrueH = document.documentElement.clientHeight;
  TrueW = document.documentElement.clientWidth;
  // console.log "body:",document.body.clientWidth,document.body.clientHeight
  if (IsPC()) {
    document.getElementById("qrcode").className += " show";
    return false;
  }
  lastY = 0;
  // 停止上下滚动 / 注意有竖向滚动条会被禁止 (理论可以加到只不能上下滚动上.)
  // document.body.addEventListener "touchstart", (evt)->
  // 	lastY = evt.touches[0].clientY
  // document.body.addEventListener "touchmove", (evt)->
  // 	y = evt.touches[0].clientY
  // 	st = this.scrollTop
  // 	if y isnt lastY
  // 		evt.preventDefault()
  // 	lastY = y
  // ,{passive: false}
  if (window.navigator.userAgent.indexOf("NeteaseMusic") > -1) {
    sys = "NeteaseMusic";
  } else {
    loadWechatConfig();
    wx.ready(function () {
      var shareContent;
      shareContent = {
        title: "自信心声，因我而生",
        desc: "渴望拥有外在的光芒，就更应该聆听自己内心的身音",
        link: "http://m.giccoo.com/lancomeGEN/",
        imgUrl: "http://m.giccoo.com/lancomeGEN/img/ico.jpg",
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
      note: true,
      playing: false
    }
  });
  loading = new Vue({
    el: "#loading",
    data: {
      progress: 0,
      mounted: false,
      progressOn: 0
    },
    methods: {
      next: function next() {
        document.getElementById('load').className += " fadeOut animated";
        _public.note = false;
        return setTimeout(function () {
          return document.getElementById('load').style.display = "none";
        }, 520);
      }
    },
    mounted: function mounted() {
      var _this = this;

      var timein;
      this.mounted = true;
      TrueH = document.documentElement.clientHeight;
      TrueW = document.documentElement.clientWidth;
      return timein = setInterval(function () {
        _this.progress += 2;
        if (_this.progress >= _this.progressOn) {
          _this.progress = _this.progressOn;
        }
        if (_this.progress >= 100) {
          _this.progress = 100;
          clearInterval(timein);
          main.mounted = true;
          return _cache = setTimeout(function () {
            return _this.next();
          }, 200);
        }
      }, 1000 / 20);
    }
  });
  return init();
};

init = function init() {
  var navH, smaller;
  if (TrueW >= 640) {

    // console.log new Date().getTime() - startTime
    // document.body.style.height = TrueH+"px"
    // document.documentElement.className += " iphone4" if TrueW/TrueH >= 0.64
    TrueW = 640;
  }
  if (TrueH >= 1138) {
    TrueH = 1138;
  }
  smaller = TrueH * 2 < 1200;
  navH = Math.ceil(TrueW / 640 * 94 / TrueH * 100);
  console.log(TrueW, TrueH);
  return main = new Vue({
    el: "#main",
    data: {
      w: TrueW,
      h: TrueH,
      biger: TrueW / TrueH < 0.55,
      smaller: smaller,
      afterH: smaller ? TrueH * 1.15 - 1029 * (TrueW / 750) : TrueH - 1029 * (TrueW / 750),
      wy: false,
      mounted: true,
      loading: false,
      lotteryShow: false,
      pageInfoShow: false,
      pageIndex: 1,
      step: 1,
      singerIndex: 1,
      startgame: false,
      folder: "",
      BGColor: "#ffffff",
      XY: "pageY",
      ugc: null,
      ugcsave: null,
      ugcold: null,
      pushed: false,
      shareImageLink: null,
      cache: null,
      audioId: null,
      v: null,
      recordStarting: false,
      authorization: false,
      norecord: true,
      uploaded: false,
      imageUpdate: false,
      allowPopShow: false,
      count: 0,
      form: {
        link: null
      },
      mask: 1,
      text: "",
      nickname: "",
      musicLink: "",
      logId: "",
      openBtnShow: true,
      default: {
        x: 0
      },
      videoPop: false,
      canUpload: true,
      handCover: false,
      last_update: 0,
      lastX: 0,
      lastY: 0,
      lastZ: 0,
      speed: 4000,
      maxSpeed: 0,
      swing: false
    },
    methods: {
      showAnswerPage: function showAnswerPage() {
        this.pageIndex = 2;
        if (!_public.playing) {
          _public.playing = true;
        }
        return setTimeout(function () {
          return setup();
        }, 300);
      },
      openPop: function openPop() {
        return this.lotteryShow = true;
      },
      openWeb: function openWeb() {
        console.log("open web");
        return window.location.href = "https://www.lancome.com.cn/landingpage/advanced-genifique?utm_source=NeteaseMusic&utm_medium=DISP&utm_content=06-02NeteaseMusic_H5&utm_campaign=CN_20180803_GEN1+1_LPD_LAN_FS_Regular_NVD_DISP_MO";
      },
      sharePost: function sharePost() {
        ugc.app.renderer.render(ugc.app.stage);
        this.ugc = ugc.app.view.toDataURL();
        return setLottery();
      },
      share: function share() {
        var data, folder, image;
        image = this.ugc;
        folder = "lancomeGEN";
        data = {
          image: image,
          folder: folder
        };
        this.folder = folder;
        if (image == null) {
          return this.faild();
        }
        if (this.pushed) {
          return false;
        }
        return axios.post(imageurl, data).then(function (msg) {
          if (msg.data.recode === 200) {
            return main.success(msg.data);
          } else {
            return main.faild(msg);
          }
        }).catch(function (e) {
          // alert e
          return main.faild(e);
        });
      },
      success: function success(data) {
        this.shareImageLink = data.info;
        this.pushed = false;
        this.loading = false;
        return neteaseShareImage();
      },
      faild: function faild(err) {
        this.pushed = false;
        this.loading = false;
        return console.log("err:", err);
      },
      setugc: function setugc(link) {
        return this.ugc = link;
      },
      pageHand: function pageHand() {
        var _this2 = this;

        this.pageIndex = 3;
        setTimeout(function () {
          return _this2.swing = true;
        }, 300);
        return setTimeout(function () {
          return finishAll();
        }, 700);
      },
      deviceMotionHandler: function deviceMotionHandler(evt) {
        var acceleration, curTime, diffTime, speed, x, y, z;
        if (!this.swing) {
          return false;
        }
        acceleration = evt.accelerationIncludingGravity;
        curTime = new Date().getTime();
        // console.log curTime-@.last_update
        if (curTime - this.last_update > 10) {
          diffTime = curTime - this.last_update;
          this.last_update = curTime;
          x = acceleration.x;
          y = acceleration.y;
          z = acceleration.z;
          speed = Math.sqrt((x - this.lastX) * (x - this.lastX) + (y - this.lastY) * (y - this.lastY) + (z - this.lastZ) * (z - this.lastZ)) / diffTime * 10000;
          // console.log x,y,z,@.speed,speed
          if (speed > this.speed) {
            this.maxSpeed += 1;
            if (this.maxSpeed >= 10) {
              this.swing = false;
              this.nextPage();
            }
          }
          this.lastX = x;
          this.lastY = y;
          return this.lastZ = z;
        }
      },
      nextPage: function nextPage() {
        console.log("next page run");
        return this.pageIndex = 2;
      }
    },
    // watch:
    mounted: function mounted() {
      var h, version;
      TrueH = document.documentElement.clientHeight;
      TrueW = document.documentElement.clientWidth;
      if (sys === "NeteaseMusic") {
        this.wy = true;
      }
      h = TrueH * 2 * (2 - TrueW * 2 / 750 + 0.01);
      // game = new Game({el: "game",h: h})
      ugc = new UGC({
        el: "ugc",
        w: 640,
        h: 640 / TrueW * TrueH
      });
      version = CloudMusic.getClientVersion().split(".");
      if (window.DeviceMotionEvent) {
        window.addEventListener('devicemotion', this.deviceMotionHandler.bind(this), false);
        this.handCover = false;
        return console.log("devicemotion");
      } else {
        return this.handCover = true;
      }
    }
  });
};

playAudio = function playAudio(id) {
  var audio;
  audio = document.getElementById(id);
  console.log('play ' + id, audio, audio.play());
  audio.play();
  return audio.addEventListener("ended", function () {
    stopAllAudio();
    return hideAnswer();
  }, false);
};

stopAllAudio = function stopAllAudio() {
  var audio, item, k, len2, results;
  results = [];
  for (k = 0, len2 = musicA.length; k < len2; k++) {
    item = musicA[k];
    audio = document.getElementById(item[0]);
    audio.pause();
    audio = document.getElementById(item[1]);
    results.push(audio.pause());
  }
  return results;
};
