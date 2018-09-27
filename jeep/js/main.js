"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var $_GET, ANIMATION_END_NAME, ANIMATION_END_NAMES, AnimatedSprite, Container, Graphics, IsPC, ParticleContainer, Sprite, TRANSITION_END_NAME, TRANSITION_END_NAMES, Text, Texture, TextureCache, TrueH, TrueW, UGC, VENDORS, _cache, _citys, _public, _runTime, _second, _startCache, _testTime, apiLink, apiUrl, autoDetectRenderer, createObjectURLfun, css3Prefix, getId, getOrientation, getTe, i, imageurl, init, l, len1, loadWechatConfig, loader, loading, mTestElement, main, musicIconCache, musicLineCache, neteaseShareImage, random, resource, resources, sended, sys, ugc, ugcCache;

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

for (l = 0, len1 = VENDORS.length; l < len1; l++) {
  i = VENDORS[l];
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

$_GET = function () {
  var get, j, len2, m, u, url;
  url = window.document.location.href.toString();
  u = url.split('?');

  if (typeof u[1] === 'string') {
    u = u[1].split('&');
    get = {};
    console.log(u);

    for (m = 0, len2 = u.length; m < len2; m++) {
      i = u[m];
      j = i.split('=');
      get[j[0]] = j[1];
    }

    return get;
  } else {
    return {};
  }
}();

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
    this.audio = this.$el.children[1]; // console.log @audio
    // @audioOther = @$el.children[2]

    this.audio.addEventListener("pause", this.pause.bind(this));
    this.audio.addEventListener("play", this.play.bind(this));
    return this.audio.addEventListener("ended", this.ended.bind(this));
  }
}); // @audio.play()
// console.log @audio,@audioOther,@playing

Vue.component("form-grounp", {
  template: '<div class="form"> <div v-for="item,index in form" class="form-group" :class="\'type-\'+type[item.type]+(item.class?\' \'+item.class:\'\')"> <label :for="item.id" v-if="item.label">{{item.label}}</label> <input :id="item.id" :placeholder="item.placeholder" v-if="type[item.type] == \'input\'" v-model="item.value" type="text"> <div v-if="type[item.type] == \'select\'" class="select"> <span>{{getOptionsName(item)}}</span> <select :id="item.id" v-model="item.value" v-if="!item.array"> <option v-for="(item, key) in item.options" :disabled="!item" :value="key">{{key}}</option> </select> <select :id="item.id" v-model="item.value" v-if="item.array"> <option v-for="(item, index) in item.options" :disabled="item.disabled" :value="item.val">{{item.name}}</option> </select> </div> </div> <div @click="submit" class="btn-submit"><img src="./img/btn-submit.png" /></div> </div>',
  data: function data() {
    return {
      submiting: false,
      type: {
        input: 'input',
        select: 'select',
        checkbox: 'checkbox'
      }
    };
  },
  props: {
    form: {
      default: {}
    }
  },
  watch: {
    form: {
      handler: function handler(v) {
        return console.log("form:", v);
      },
      deep: true
    }
  },
  methods: {
    getOptionsName: function getOptionsName(item) {
      var it, len2, m, ref;

      if (!item.array) {
        if (item.value === "") {
          return Object.keys(item.options)[0];
        }

        return item.value;
      } else {
        ref = item.options;

        for (m = 0, len2 = ref.length; m < len2; m++) {
          it = ref[m];

          if (it.val === item.value) {
            return it.name;
          }
        }

        return item.options[0].name;
      }
    },
    submit: function submit(evt) {
      var data, k, ref, v;
      data = {};
      console.log("first Time..");
      ref = this.form;

      for (k in ref) {
        v = ref[k];
        data[k] = v.value;
      } // console.log "submit:",data


      return this.$emit("submit", data);
    }
  },
  mounted: function mounted(el) {
    var k, ref, results, self, v; // console.log "el:",this,this.form

    self = this;
    ref = this.form;
    results = [];

    for (k in ref) {
      v = ref[k];

      if (v.type === "select") {
        console.log("form.".concat(k, ".options"));
        this.$watch("form.".concat(k, ".options"), function (val) {
          return console.log("changed:", val);
        }, {
          deep: true
        });
      }

      if (v.link != null && v.type === "select") {
        results.push(this.$watch("form.".concat(k), function (n, o) {
          var m, ref1, results1;

          if (self.form[n.link] == null) {
            return false;
          }

          self.form[n.link].options = n.options[n.value];

          if (self.form[n.link].array) {
            console.log(n.link, self.form[n.link].value, n.options[n.value][0].val);
            return self.form[n.link].value = n.options[n.value][0].val;
          } else {
            results1 = [];

            for (i = m = 0, ref1 = Object.keys(n.options[n.value]).length; 0 <= ref1 ? m < ref1 : m > ref1; i = 0 <= ref1 ? ++m : --m) {
              if (n.options[n.value][Object.keys(n.options[n.value])[i]]) {
                self.form[n.link].value = Object.keys(n.options[n.value])[i];
                break;
              } else {
                results1.push(void 0);
              }
            }

            return results1;
          }
        }, {
          deep: true
        }));
      } else {
        results.push(void 0);
      }
    }

    return results;
  }
});
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
}; // for fix ios 8 less


if (Number.isInteger == null) {
  Number.isInteger = function (int) {
    return int >= 0;
  };
}

random = 1 + parseInt(Math.random() * 5);

UGC = function () {
  // imageList = []
  var UGC =
  /*#__PURE__*/
  function () {
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
      PIXI.loader.add(imageList).use(this.loaditem.bind(this)).load(this.build.bind(this));
      this.default.MH = this.opts.h * 0.65;
    }

    _createClass(UGC, [{
      key: "loaditem",
      value: function loaditem() {
        this.loadNumber++;
        loading.progressOn = parseInt(this.loadNumber / imageList.length * 100);
        console.log("load:", this.loadNumber, loading.progressOn, this.loadNumber === imageList.length);

        if (this.loadNumber === imageList.length) {
          return buildUGC.bind(this).call();
        }
      }
    }, {
      key: "build",
      value: function build() {
        console.log("builded");
        return buildUGC.bind(this).call();
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
}.call(void 0); // @codekit-prepend "coffee/css3Prefix"
// @codekit-prepend "../../libs/coffee/loadWechatConfig"
// @codekit-prepend "../../libs/coffee/IsPC"
// @codekit-prepend "../../libs/coffee/get"
// @codekit-prepend "../../libs/vue/vue-player"
// @codekit-prepend "../../libs/vue/vue-register"
// @codekit-prepend "../../libs/coffee/pixi-base"
// @codekit-prepend "./UGC"


String.prototype.gblen = function () {
  var len, m, ref;
  len = 0;

  for (i = m = 0, ref = this.length; 0 <= ref ? m < ref : m > ref; i = 0 <= ref ? ++m : --m) {
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
apiUrl = "//api.giccoo.com/jeep"; // apiLink = "//localhost:3000/"

apiLink = "//g.giccoo.com/"; // apiLink = "http://192.168.3.53:3000/"
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
_citys = [{
  name: "2018.10.01 武汉",
  val: "武汉"
}, {
  name: "2018.10.11 西安",
  val: "西安"
}, {
  name: "2018.10.20 杭州",
  val: "杭州"
}, {
  name: "2018.10.20 沈阳",
  val: "沈阳"
}, {
  name: "2018.10.27 北京",
  val: "北京"
}, {
  name: "2018.10.27 成都",
  val: "成都"
}, {
  name: "2018.11.03 广州",
  val: "广州"
}];

neteaseShareImage = function neteaseShareImage() {
  var picUrl, redirectUrl, title1;
  title1 = "元气初心音乐馆";
  picUrl = "https://image.giccoo.com/upload/".concat(main.folder, "/") + main.shareImageLink + "@!large";
  redirectUrl = "https://m.giccoo.com/Landrover24/"; // console.log picUrl,"orpheus://sharepic?picUrl="+encodeURIComponent(picUrl)+"&shareUrl="+encodeURIComponent(redirectUrl)+"&wbDesc="+encodeURIComponent(title1)+"&qqDesc="+encodeURIComponent(title1)

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
  TrueW = document.documentElement.clientWidth; // console.log "body:",document.body.clientWidth,document.body.clientHeight
  // if IsPC()
  // 	document.getElementById("qrcode").className += " show"
  // 	return false

  lastY = 0; // 停止上下滚动 / 注意有竖向滚动条会被禁止 (理论可以加到只不能上下滚动上.)
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
        title: "元气初心音乐馆",
        desc: "测测隐藏在音乐世界中的‘你’",
        link: "http://m.giccoo.com/jeep/",
        imgUrl: "http://m.giccoo.com/jeep/img/ico.jpg",
        success: function success() {},
        // alert "success"
        cancel: function cancel() {}
      }; // alert "cancel"

      wx.onMenuShareTimeline(shareContent);
      wx.onMenuShareAppMessage(shareContent);
      wx.onMenuShareQQ(shareContent);
      return wx.onMenuShareWeibo(shareContent);
    });
  } // _public = new Vue
  // 	el: "#public"
  // 	data:
  // 		note: true
  // 		playing: false


  loading = new Vue({
    el: "#loading",
    data: {
      progress: 0,
      mounted: false,
      progressOn: 0
    },
    methods: {
      next: function next() {
        document.getElementById('load').className += " fadeOut animated"; // _public.note = false

        main.mounted = true;
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
          return _cache = setTimeout(function () {
            return _this.next();
          }, 1000);
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
      mounted: false,
      loading: false,
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
      videoIndex: 0,
      videoIndexOld: 0,
      lr: true,
      form: {
        username: {
          id: "username",
          type: "input",
          label: "姓名",
          placeholder: "请填写姓名",
          value: ""
        },
        mobile: {
          id: "mobile",
          type: "input",
          label: "电话",
          placeholder: "请填写电话",
          value: ""
        },
        address: {
          id: "address",
          type: "input",
          label: "收货地址",
          placeholder: "请填写收货地址",
          value: ""
        },
        type: {
          id: "type",
          type: "select",
          label: "举办地",
          array: true,
          placeholder: "请填写举办地",
          value: _citys[0].val,
          options: _citys
        }
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
      swing: false,
      registerShow: false,
      lotteryShow: false,
      lotteryEndShow: false,
      lotteryInfo: {
        id: null,
        random: null
      },
      regSubmited: false,
      giveUp: false,
      gameEnd: false,
      noreg: false,
      ugcShow: false
    },
    watch: {
      videoIndex: function videoIndex(n, o) {
        this.videoIndexOld = o; // stopAllVideo()

        document.getElementById("video-".concat(n)).load();
        return document.getElementById("video-".concat(n)).play();
      }
    },
    methods: {
      closeReg: function closeReg() {
        return this.registerShow = false;
      },
      endPage: function endPage() {
        main.registerShow = true; // showResult()

        return stopAllAudio();
      },
      gameStart: function gameStart() {
        this.pageIndex = 2;
        _public.note = false;
        setup();
        return playAudio("answer-1");
      },
      goUGC: function goUGC() {
        return this.lotteryShow = true;
      },
      getLotteryList: function getLotteryList() {
        var _this2 = this;

        return axios.post("".concat(apiLink, "active/soupdaren/list/"), {
          lottery: true
        }).then(function (msg) {
          var item, len2, list, m, ref;

          if (msg.data.code === 200) {
            list = msg.data.list;
            ref = _this2.form.type.options;

            for (m = 0, len2 = ref.length; m < len2; m++) {
              item = ref[m];

              if (list[item.val]) {
                item.disabled = true;
              }
            }

            return main.$children[0].form.type.options[0].name = main.$children[0].form.type.options[0].name + " ";
          }
        });
      },
      // console.log _citys
      // @.form.type.options = _citys
      getLottery: function getLottery() {
        var _this3 = this;

        return axios.post("".concat(apiLink, "active/soupdaren/lottery/"), {
          lottery: true
        }).then(function (msg) {
          if (msg.data.code === 200 && msg.data.info != null) {
            _this3.lotteryInfo.id = msg.data.info.id;
            _this3.lotteryInfo.random = msg.data.info.random;
            return _this3.registerShow = true;
          } else {
            return _this3.lotteryShow = true;
          }
        }).catch(function (err) {
          return _this3.lotteryShow = true;
        });
      },
      submit: function submit(data) {
        var _this4 = this;

        console.log("data:", data);

        if (data.username === "" || data.username.length > 8 || data.username.length < 2) {
          return alert("请输入2-8个字的姓名");
        }

        if (data.mobile === "") {
          return alert("请输入联系电话");
        }

        if (data.address === "") {
          return alert("请输入收货地址");
        }

        if (this.lotteryInfo.id != null) {
          data.id = this.lotteryInfo.id;
        } else {
          return alert("很抱歉没有中奖,可再次参与提高中奖几率");
        }

        if (this.lotteryInfo.random != null) {
          data.random = this.lotteryInfo.random;
        } else {
          return alert("很抱歉没有中奖,可再次参与提高中奖几率");
        }

        return axios.post("".concat(apiLink, "active/soupdaren/update/"), data).then(function (msg) {
          if (msg.data.code === 200) {
            alert("填写成功");
            _this4.registerShow = false;
            return _this4.regSubmited = true;
          } else {
            // if @.gameEnd
            // 	@.share()
            return alert(msg.data.reason);
          }
        }).catch(function (err) {
          return alert("服务器连接失败,请重试");
        });
      },
      openForm: function openForm() {
        // return false if @.noreg
        if (this.regSubmited) {
          return this.share();
        } else {
          return this.registerShow = true;
        }
      },
      giveupAward: function giveupAward() {
        this.registerShow = false;
        this.giveUp = true;
        return this.share();
      },
      sharePost: function sharePost(base64) {
        this.gameEnd = true;
        ugc.app.renderer.render(ugc.app.stage); // @.ugc = ugc.app.view.toDataURL()

        return this.ugc = base64;
      },
      restart: function restart() {
        return window.location.reload();
      },
      share: function share() {
        var data, folder, image;
        console.log("run share");
        ugc.app.renderer.render(ugc.app.stage);
        this.ugc = ugc.app.view.toDataURL();
        image = this.ugc;

        if (this.wy) {
          folder = "jeep";
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
        } else {
          this.ugcShow = true;
          return shareDone();
        }
      },
      success: function success(data) {
        this.shareImageLink = data.info;
        this.pushed = false;
        this.loading = false;
        neteaseShareImage();
        return shareDone();
      },
      // 抽奖
      // unless @.giveUp
      // 	setTimeout =>
      // 		@.getLottery()
      // 	,5000
      faild: function faild(err) {
        this.pushed = false;
        return this.loading = false;
      },
      openMusic: function openMusic() {
        // goList()
        if (CloudMusic.isInApp()) {
          return CloudMusic.playlist(2419204335);
        } else {
          return window.location.href = "https://music.163.com/#/playlist?id=2419204335";
        }
      },
      nextPage: function nextPage() {
        console.log("next page run");

        if (this.nickname === "") {
          return alert("请输入你的名字");
        }

        letsRock(this.nickname);
        return this.pageIndex = 2;
      },
      openInApp: function openInApp() {
        return CloudMusic.open("https://m.giccoo.com/jeep/");
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

      h = TrueH * 2 * (2 - TrueW * 2 / 750 + 0.01); // game = new Game({el: "game",h: h})

      this.wy = CloudMusic.isInApp();
      version = CloudMusic.getClientVersion().split(".");
      ugc = new UGC({
        el: "ugc",
        w: 640,
        h: 640 / TrueW * TrueH
      });
      return this.getLotteryList();
    }
  });
}; // listenAudio()
// if parseInt($_GET["type"]) is 2
// 	@.regSubmited = true
// stopAllVideo = ->
// 	for i in [1..6]
// 		document.getElementById("video-#{i}").pause()
// musicList = ['music-1','music-2','music-3','music-4','music-5','music-6']
// playAudio = (id)->
// 	console.log("not err 6")
// 	stopAllAudio()
// 	console.log("not err 7")
// 	audio = document.getElementById(id)
// 	console.log("not err 8")
// 	audio.play()
// 	console.log("play music")
// 	# audio.load()
// 	# setTimeout =>
// 	# 	audio.play()
// 	# ,250
// 	# setTimeout =>
// 	# 	discPlay()
// 	# ,300
// listenAudio = ->
// 	for item in musicList
// 		audio = document.getElementById item
// 		audio.addEventListener "play", ->
// 			console.log "play"
// 			discPlay()
// 		,false
// 		audio.addEventListener "pause", ->
// 			console.log "pause"
// 			discStop()
// 		,false
// 		audio.addEventListener "ended", ->
// 			console.log "ended"
// 			discStop()
// 		,false
// stopAllAudio = (name)->
// 	console.log("not err 9")
// 	for item in musicList
// 		audio = document.getElementById item
// 		console.log("not err 10")
// 		audio.pause()
// 		console.log("not err 11")
// 		PIXI.sound.pause(item) if item isnt name and isAndroid
// 		console.log("not err 12")
//# sourceMappingURL=main.js.map
