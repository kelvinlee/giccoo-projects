'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ANIMATION_END_NAME, ANIMATION_END_NAMES, AnimatedSprite, Container, Graphics, IsPC, ParticleContainer, Sprite, TRANSITION_END_NAME, TRANSITION_END_NAMES, Text, Texture, TextureCache, TrueH, TrueW, UGC, VENDORS, _CDN, _cache, _public, _runTime, _second, _startCache, _testTime, apiLink, apiUrl, autoDetectRenderer, createObjectURLfun, css3Prefix, getId, getOrientation, getTe, i, imageurl, init, j, len1, list, loadWechatConfig, loader, loading, mTestElement, main, musicIconCache, musicLineCache, neteaseShareImage, random, resource, resources, sended, sys, ugc, ugcCache;

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

_CDN = "./";

list = [_CDN + 'img/ugc-bg-1.jpg', _CDN + 'img/ugc-bg-2.jpg', _CDN + 'img/ugc-bg-3.jpg', _CDN + 'img/ugc-bg-4.jpg', _CDN + 'img/ugc-bg-5.jpg', _CDN + 'img/ugc-name-1.png', _CDN + 'img/ugc-name-2.png', _CDN + 'img/ugc-name-3.png', _CDN + 'img/ugc-name-4.png', _CDN + 'img/ugc-name-5.png', _CDN + 'img/ugc-note-text-1.png', _CDN + 'img/ugc-note-text-2.png', _CDN + 'img/ugc-note-text-3.png', _CDN + 'img/ugc-note-text-4.png', _CDN + 'img/ugc-note-text-5.png', _CDN + 'img/ugc-singer-1.png', _CDN + 'img/ugc-singer-2.png', _CDN + 'img/ugc-singer-3.png', _CDN + 'img/ugc-singer-4.png', _CDN + 'img/ugc-singer-5.png', _CDN + 'img/ugc-text-2.png', _CDN + 'img/ugc-border.png', _CDN + 'img/ugc-logo.png', _CDN + 'img/album-bg.png', _CDN + 'img/album-cover-' + random + '.png', _CDN + 'img/album-poster.png', _CDN + 'img/album-upload-text.png', _CDN + 'img/album-upload-over-text.png', _CDN + 'img/mask.png', _CDN + 'img/qrcode.png', _CDN + 'img/bo.png', _CDN + 'img/avatar.jpg'];

UGC = function () {
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
      PIXI.loader.add(list).add("bgm", _CDN + 'mp3/bgm.mp3').use(this.loaditem.bind(this)).load(this.build.bind(this));
      this.default.MH = this.opts.h * 0.65;
    }

    _createClass(UGC, [{
      key: 'loaditem',
      value: function loaditem() {
        this.loadNumber++;
        loading.progressOn = parseInt(this.loadNumber / (list.length + 1) * 100);
        if (this.loadNumber === list.length + 1) {
          return this.build();
        }
      }
    }, {
      key: 'build',
      value: function build() {
        var album, albumBG, albumPoster, border, content, uploadOverText, uploadText, userName;
        if (this.builded) {
          return false;
        }
        this.builded = true;
        this.trueH = 750 / TrueW * TrueH;
        this.content = content = new Container();
        border = new Sprite(getTe(_CDN + 'img/ugc-border.png'));
        // border.anchor.set(0,1)
        content.addChild(border);
        content.y = -(this.opts.h - this.trueH) - TrueH * (750 / TrueW) * 0.4 - 20;
        // console.log @.opts.h,@.trueH
        this.album = album = new Container();
        this.albumBG = albumBG = new Sprite(getTe(_CDN + 'img/album-bg.png'));
        albumPoster = new Sprite(getTe(_CDN + 'img/album-poster.png'));
        albumPoster.y = (albumBG.height - albumPoster.height) / 2;
        this.uploadText = uploadText = new Sprite(getTe(_CDN + 'img/album-upload-text.png'));
        uploadText.y = albumPoster.y;
        this.uploadOverText = uploadOverText = new Sprite(getTe(_CDN + 'img/album-upload-over-text.png'));
        uploadOverText.y = albumPoster.y;
        uploadOverText.visible = false;

        // dropShadow : true ,dropShadowBlur: 2,dropShadowAlpha: 0.3,dropShadowColor : '#000000'
        this.userName = userName = new Text("", {
          fontFamily: 'Arial',
          fontSize: 38,
          fill: 0xffffff,
          align: 'left'
        });
        album.addChild(albumBG, albumPoster, uploadText, uploadOverText, userName);
        album.scale.set(0.92, 0.92);
        album.x = (this.opts.w - album.width) / 2;
        if (main.smaller) {
          album.scale.set(0.8, 0.8);
          album.x = (this.opts.w - album.width) / 2;
        }
        if (main.biger) {
          album.scale.set(1, 1);
          album.x = (this.opts.w - album.width) / 2;
        }
        this.stage.addChild(content, album);
        // @.albumInfo album,1
        // @.lyricUpdate "abc"

        // for test remenber remove all
        return this.newCover();
      }
    }, {
      key: 'newCover',
      value: function newCover() {
        var border, box, cover, k, line, mask;
        this.cover = cover = new Container();
        box = new Container();
        cover.x = 126;
        cover.y = 169;
        border = new Graphics();
        border.beginFill(0xffffff);
        border.drawRect(0, -50, 10, 516);
        box.addChild(border);
        this.lineList = list = [];
        for (i = k = 0; k < 16; i = ++k) {
          line = new Sprite(getTe(_CDN + 'img/bo.png'));
          line.anchor.set(0, 0.5);
          line.width = 25;
          line.x = 10 + line.width * i;
          line.y = line.height / 2;
          line.sy = line.scale.y = 1.5 + Math.random() * 1;
          line.de = Math.random() > 0.5;
          line.speed = 1 + Math.random() * 6;
          // line.alpha = 0.7
          box.addChild(line);
          list.push(line);
        }
        border = new Graphics();
        border.beginFill(0xffffff);
        border.drawRect(list[list.length - 1].x + 25 - 0.22, -50, 10.22, 516);
        box.addChild(border);
        // console.log line.x,line.width,line.scale.x
        // @.lineList = list = []
        // for i in [0...16]
        // 	line = new Graphics()
        // 	line.beginFill(0xffffff)
        // 	line.drawRect(0,0,26,((416-50)/2))
        // 	line.drawRect(0,((416-50)/2)+50,26,((416-50)/2))
        // 	line.drawRect(0,((416-50)/2),6,50)
        // 	line.drawRect(20,((416-50)/2),6,50)
        // 	line.closePath()
        // 	line.width = 30
        // 	line.x = if i isnt 0 then line.width + list[list.length-1].x - 0.21 else -1
        // 	box.addChild line
        // 	list.push line
        // box.scale.set(1.01,1.01)
        mask = new Graphics();
        mask.beginFill(0xffffff);
        mask.drawRect(0, 0, 418, 416);
        cover.addChild(box);
        box.mask = mask;
        cover.addChild(mask);
        this.album.addChild(cover);
        this.app.ticker.add(this.updateLine.bind(this));
        cover.visible = false;
        return cover.alpha = 0.7;
      }
    }, {
      key: 'startLine',
      value: function startLine() {
        var item, k, len2, ref;
        ref = this.lineList;
        for (k = 0, len2 = ref.length; k < len2; k++) {
          item = ref[k];
          item.scale.y = item.sy;
        }
        this._time = new Date().getTime();
        return this.lineMoving = true;
      }
    }, {
      key: 'stopLine',
      value: function stopLine() {
        var item, k, len2, ref, results;
        this._time = new Date().getTime();
        this.lineMoving = false;
        ref = this.lineList;
        results = [];
        for (k = 0, len2 = ref.length; k < len2; k++) {
          item = ref[k];
          if (item.ry != null) {
            results.push(item.scale.y = item.ry);
          } else {
            results.push(void 0);
          }
        }
        return results;
      }
    }, {
      key: 'saveLine',
      value: function saveLine() {
        var item, k, len2, ref, results;
        ref = this.lineList;
        results = [];
        for (k = 0, len2 = ref.length; k < len2; k++) {
          item = ref[k];
          results.push(item.ry = item.scale.y);
        }
        return results;
      }
    }, {
      key: 'updateLine',
      value: function updateLine(detail) {
        var index, item, k, m, ref, results;
        if (!this.lineMoving) {
          return false;
        }
        m = parseInt((new Date().getTime() - this._time) / 1000);
        if (m > 5) {
          m = 5;
        }
        results = [];
        for (index = k = 0, ref = this.lineList.length; 0 <= ref ? k < ref : k > ref; index = 0 <= ref ? ++k : --k) {
          item = this.lineList[index];
          if (item.de) {
            item.scale.y += item.speed * detail * 0.02;
          } else {
            item.scale.y -= item.speed * detail * 0.03;
          }
          if (item.scale.y > 6) {
            item.scale.y = 6;
            item.de = !item.de;
            item.speed = 3 + Math.random() * 7;
          }
          if (item.scale.y <= item.sy) {
            item.scale.y = item.sy;
            item.de = !item.de;
            results.push(item.speed = 5 + Math.random() * 5);
          } else {
            results.push(void 0);
          }
        }
        return results;
      }
    }, {
      key: 'passImage',
      value: function passImage(src, orientation) {
        var _this = this;

        var avatar;
        if (this.avatar != null) {
          this.album.removeChild(this.avatar);
        }
        this.avatar = new Container();
        avatar = Sprite.fromImage(src);
        // alert orientation
        return avatar.texture.baseTexture.on('loaded', function () {
          var mask1;
          console.log("avatar:", avatar.width, avatar.height);
          avatar.anchor.set(0.5, 0.5);
          // avatar.mask = mask
          avatar.scale.set(416 / avatar.width, 416 / avatar.width);
          avatar.x = avatar.width / 2;
          avatar.y = 205;
          _this.avatar.addChild(avatar);
          _this.avatar.x = 128;
          _this.avatar.y = 169;
          _this.album.addChildAt(_this.avatar, 3);
          // mask1 = new Sprite getTe "#{_CDN}img/mask.png"
          mask1 = new Graphics();
          mask1.beginFill(0xffffff);
          mask1.drawRect(0, 0, 416, 416);
          mask1.x = 128;
          mask1.y = 169;
          _this.album.addChild(mask1);
          avatar.mask = mask1;
          console.log("orientation:", orientation);
          if (orientation === 6) {
            avatar.rotation = Math.PI * 0.5;
            avatar.scale.x += avatar.scale.x * 0.4;
            avatar.scale.y += avatar.scale.y * 0.4;
          }
          if (orientation === 3) {
            avatar.rotation = Math.PI;
            avatar.scale.x += avatar.scale.x * 0.4;
            avatar.scale.y += avatar.scale.y * 0.4;
          }
          // avatar.x += 410
          _this.uploadOverText.visible = true;
          return _this.uploadText.visible = false;
        });
      }
    }, {
      key: 'updateName',
      value: function updateName(text) {
        var k, len2, t, tx;
        t = text.split("");
        tx = "";
        for (k = 0, len2 = t.length; k < len2; k++) {
          i = t[k];
          tx += i;
          if (tx.gblen() >= 20) {
            break;
          }
        }
        this.userName.text = tx;
        this.userName.x = 124;
        return this.userName.y = 172 + 410 + 20;
      }
    }, {
      key: 'addCover',
      value: function addCover() {
        this.uploadOverText.visible = false;
        return this.uploadText.visible = false;
      }

      // @.albumCover = albumCover = new Sprite getTe "#{_CDN}img/album-cover-#{random}.png"
      // albumCover.y = (@.albumBG.height-albumCover.height)/2
      // albumCover.alpha = 0
      // @.album.addChild albumCover
      // TweenLite.to albumCover,1,
      // 	alpha: 1

    }, {
      key: 'albumInfo',
      value: function albumInfo(i) {
        var Texts, bg, bgMask, musicName, singerName;
        if (this.albumInfoCont != null) {
          this.album.removeChild(this.albumInfoCont);
        }
        if (this.bg != null) {
          this.content.removeChild(this.bg);
        }
        this.index = i;
        this.albumInfoCont = new Container();
        singerName = new Sprite(getTe(_CDN + 'img/ugc-singer-' + i + '.png'));
        singerName.y = 782 - singerName.height - 50;
        musicName = new Sprite(getTe(_CDN + 'img/ugc-name-' + i + '.png'));
        Texts = new Sprite(getTe(_CDN + 'img/ugc-text-2.png'));
        Texts.y = 782 - Texts.height - 64;
        musicName.y = Texts.y - musicName.height - 10;
        this.albumInfoCont.addChild(singerName, musicName, Texts);
        this.album.addChild(this.albumInfoCont);
        this.bg = bg = new Sprite(getTe(_CDN + 'img/ugc-bg-' + i + '.jpg'));
        // console.log @.content.y,@.bg.y = -@.content.y
        this.bg.y = -this.content.y / 2;
        this.bgMask = bgMask = new Graphics();
        bgMask.beginFill(0xffffff);
        bgMask.drawRect(0, 0, this.content.width, this.content.height);
        this.content.addChildAt(this.bg, 0);
        this.content.addChild(bgMask);
        return this.bg.mask = bgMask;
      }
    }, {
      key: 'lyricUpdate',
      value: function lyricUpdate(text) {
        var index, k, l, lineH, n, ref, ref1, t, temp, texts, tmp;
        if (text.length > 32) {
          //gblen() > 64
          return false;
        }
        if (this.lyric != null) {
          this.album.removeChild(this.lyric);
        }
        this.lyric = new Container();
        // text = "每次送他去机场，真的都很累。因为"
        texts = text.split("");
        list = [[]];
        n = 0;
        lineH = 32;
        temp = new Text("啊啊啊啊啊啊啊啊".split("").join("   "), {
          fontFamily: 'Arial',
          fontSize: 24,
          fill: 0xffffff,
          align: 'left'
        });
        // console.log temp.width
        tmp = new Text("", {
          fontFamily: 'Arial',
          fontSize: 24,
          fill: 0xffffff,
          align: 'left'
        });
        for (index = k = 0, ref = texts.length; 0 <= ref ? k < ref : k > ref; index = 0 <= ref ? ++k : --k) {
          tmp.text = list[n].join("   ");
          // if list[n].join("").length >= 8#.gblen() >= 16
          if (tmp.width >= temp.width - 10) {
            n++;
            list[n] = [];
          }
          list[n].push(texts[index]);
        }
        console.log(list);
        for (i = l = 0, ref1 = list.length; 0 <= ref1 ? l < ref1 : l > ref1; i = 0 <= ref1 ? ++l : --l) {
          if (i >= 4) {
            continue;
          }
          t = i % 4 * 0.2;
          text = new Text(list[i].join("   "), {
            fontFamily: 'Arial',
            fontSize: 24,
            fill: 0xffffff,
            align: 'center'
          });
          text.alpha = 1 - t;
          text.y = lineH * 4 - (4 - (i % 4 + 1)) * lineH; //+ (4-list.length)*lineH
          text.x = (this.opts.w - temp.width) / 2; //@.opts.w/2 - text.width/2
          console.log(text.width);
          this.lyric.addChild(text);
        }
        return this.album.addChild(this.lyric);
      }
    }, {
      key: 'review',
      value: function review() {
        var logo, note;
        this.content.y += 250;
        this.logo = logo = new Sprite(getTe(_CDN + 'img/ugc-logo.png'));
        logo.y = this.content.height - logo.height - 40;
        this.note = note = new Sprite(getTe(_CDN + 'img/ugc-note-text-' + this.index + '.png'));
        note.y = logo.y - note.height - 20;
        // console.log note.y,logo.y
        if (main.biger) {
          this.album.y = 70;
        }
        this.content.addChild(logo, note);
        this.content.removeChild(this.bgMask);
        this.bg.y = 0;
        return this.bg.mask = null;
      }
    }, {
      key: 'buildQR',
      value: function buildQR(url, callback) {
        var _this2 = this;

        var qrcodeMake;
        qrcodeMake = new QRCode("qrcode", _defineProperty({
          text: url,
          width: 140,
          height: 140,
          colorDark: "#000000"
        }, 'colorDark', "#000000"));
        console.log(qrcodeMake._el.lastChild);
        return qrcodeMake._el.lastChild.onload = function () {
          var border, qrcode, qrcodeBg, qrcodeQR, text;
          border = 5;
          _this2.qrcode = qrcode = new Container();
          text = new Sprite(getTe(_CDN + 'img/qrcode.png'));
          text.x = 20;
          text.y = 20;
          qrcodeBg = new Graphics();
          qrcodeBg.beginFill(0xffffff);
          qrcodeBg.drawRect(0, 0, 140 + border * 2, 140 + border * 2);
          qrcodeQR = Sprite.fromImage(qrcodeMake._el.lastChild.src);
          qrcodeQR.texture.baseTexture.on('loaded', function () {
            qrcodeQR.x = border;
            qrcodeQR.y = border;
            qrcode.x = 40;
            qrcode.y = _this2.content.height - 140 + border * 2 - 60;
            return callback();
          });
          qrcode.addChild(qrcodeBg, qrcodeQR, text);
          qrcode.visible = false;
          return _this2.content.addChild(qrcode);
        };
      }
    }, {
      key: 'overUGC',
      value: function overUGC() {
        var _this3 = this;

        var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

        var url;
        if (id != null) {
          url = 'http://m.giccoo.com/Levi/music.html?id=' + id;
        } else {
          url = "http://levi.arkrdigital.com/music/";
        }
        return this.buildQR(url, function () {
          _this3.app.renderer.render(_this3.app.stage);
          main.ugcold = _this3.app.view.toDataURL();
          _this3.app.view.style.visibility = "hidden";
          _this3.album.scale.set(1, 1);
          _this3.album.x = 0;
          _this3.album.y = 110;
          _this3.content.y = 0;
          _this3.qrcode.visible = true;
          _this3.logo.y -= _this3.qrcode.height + 40;
          _this3.note.y -= _this3.qrcode.height + 40;
          _this3.app.renderer.render(_this3.app.stage);
          if (main.wy) {
            return main.share(_this3.app.view.toDataURL("image/jpeg", 0.6));
          } else {
            return main.setugc(_this3.app.view.toDataURL());
          }
        });
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

apiUrl = "//api.giccoo.com/Levi";

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
  redirectUrl = "https://m.giccoo.com/Levi/";
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
  document.body.addEventListener("touchstart", function (evt) {
    return lastY = evt.touches[0].clientY;
  });
  document.body.addEventListener("touchmove", function (evt) {
    var st, y;
    y = evt.touches[0].clientY;
    st = this.scrollTop;
    if (y !== lastY) {
      evt.preventDefault();
    }
    return lastY = y;
  }, {
    passive: false
  });
  if (window.navigator.userAgent.indexOf("NeteaseMusic") > -1) {
    sys = "NeteaseMusic";
  } else {
    loadWechatConfig();
    wx.ready(function () {
      var shareContent;
      shareContent = {
        title: "有故事的声活单曲",
        desc: "有故事的声活单曲",
        link: "http://m.giccoo.com/Levi/",
        imgUrl: "http://m.giccoo.com/Levi/img/ico.jpg",
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
  loading = new Vue({
    el: "#loading",
    data: {
      progress: 0,
      mounted: false,
      progressOn: 0
    },
    methods: {
      openMusic: function openMusic() {
        // bgm = document.getElementById "bgm"
        // bgm.currentTime = _second
        // bgm.play()
        PIXI.sound.play("bgm");
        main.openBtnShow = false;
        this.next();
        return typeof _hmt !== "undefined" && _hmt !== null && _hmt.push(['_trackEvent', "Levi", "record", "open music", "-"]);
      },
      next: function next() {
        document.getElementById('load').className += " fadeOut animated";
        _public.note = false;
        return setTimeout(function () {
          return document.getElementById('load').style.display = "none";
        }, 520);
      }
    },
    mounted: function mounted() {
      var _this4 = this;

      var timein;
      this.mounted = true;
      TrueH = document.documentElement.clientHeight;
      TrueW = document.documentElement.clientWidth;
      console.log("after load:", TrueW, TrueH);
      return timein = setInterval(function () {
        _this4.progress += 2;
        if (_this4.progress >= _this4.progressOn) {
          _this4.progress = _this4.progressOn;
        }
        if (_this4.progress >= 100) {
          _this4.progress = 100;
          clearInterval(timein);
          main.mounted = true;
          return _cache = setTimeout(function () {
            return _this4.next();
          }, 2000);
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
      biger: TrueW / TrueH < 0.52,
      smaller: smaller,
      afterH: smaller ? TrueH * 1.15 - 1029 * (TrueW / 750) : TrueH - 1029 * (TrueW / 750),
      wy: false,
      mounted: false,
      loading: false,
      pagebuildShow: false,
      pageInfoShow: false,
      pageIndex: 1,
      step: 1,
      singerIndex: 3,
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
      canUpload: true
    },
    methods: {
      watchAD: function watchAD() {
        var video;
        video = document.getElementById("video");
        video.play();
        this.videoPop = true;
        return typeof _hmt !== "undefined" && _hmt !== null && _hmt.push(['_trackEvent', "Levi", "record", "Watch Video", "-"]);
      },
      start: function start(evt) {
        var touch;
        touch = evt.touches[0];
        // console.log touch
        return this.default.x = touch.clientX;
      },
      move: function move(evt) {
        var moveX, n, numb, touch;
        touch = evt.touches[0];
        moveX = touch.clientX - this.default.x;
        n = -1;
        if (moveX < 0) {
          n = 1;
        }
        numb = parseInt(Math.abs(moveX) / 50);
        if (numb >= 1) {
          this.singerIndex += n;
          return this.default.x = touch.clientX;
        }
      },
      end: function end(evt) {},
      maxlengthnickname: function maxlengthnickname() {
        return console.log(this.nickname.gblen());
      },
      openMusic: function openMusic() {
        // bgm = document.getElementById "bgm"
        // bgm.currentTime = _second
        // bgm.play()
        PIXI.sound.play("bgm", {
          start: _second
        });
        this.openBtnShow = false;
        return typeof _hmt !== "undefined" && _hmt !== null && _hmt.push(['_trackEvent', "Levi", "record", "open music", "-"]);
      },
      skip: function skip() {
        // bgm = document.getElementById "bgm"
        // bgm.pause()
        PIXI.sound.stop("bgm");
        this.pageIndex = 2;
        return typeof _hmt !== "undefined" && _hmt !== null && _hmt.push(['_trackEvent', "Levi", "record", "Skip", "-"]);
      },
      startbuild: function startbuild() {
        if (!CloudMusic.isInApp()) {
          return CloudMusic.open("https://activity.music.163.com/Levi/");
        }
        if (!this.v) {
          return alert("请先升级到最新版本的网易云音乐");
        }
        this.pageIndex = 3;
        return typeof _hmt !== "undefined" && _hmt !== null && _hmt.push(['_trackEvent', "Levi", "record", "Start to produce", "-"]);
      },
      recordStart: function recordStart() {
        if (this.recordStarting) {
          // recordStartCb
          return false;
        }
        CloudMusic.orpheus('orpheus://recordvoice/record/start?limit=15');
        if (this.audioId != null) {
          return typeof _hmt !== "undefined" && _hmt !== null && _hmt.push(['_trackEvent', "Levi", "record", "Rerecord", "-"]);
        } else {
          return typeof _hmt !== "undefined" && _hmt !== null && _hmt.push(['_trackEvent', "Levi", "record", "Record", "-"]);
        }
      },
      // _startCache = setTimeout =>
      // 	ugc.cover.visible = true
      // 	ugc.startLine()
      // 	@.audioId = null
      // 	@.count = 15
      // 	@.recordStarting = true
      // 	clearInterval _runTime
      // 	_time = new Date().getTime()
      // 	_runTime = setInterval =>
      // 		@.count = 15 - parseInt (new Date().getTime() - _time)/1000
      // 		@.count = 0 if @.count < 0
      // 	,1000/10
      // 	_cache = setTimeout =>
      // 		@.recordStop()
      // 	,10*1000+100
      // ,1000
      recordStop: function recordStop() {
        var _this5 = this;

        CloudMusic.orpheus('orpheus://recordvoice/record/end');
        typeof _hmt !== "undefined" && _hmt !== null && _hmt.push(['_trackEvent', "Levi", "record", "Stop Recording", "-"]);
        this.recordStarting = false;
        this.authorization = true;
        clearTimeout(_cache);
        clearInterval(_runTime);
        ugc.stopLine();
        return _cache = setTimeout(function () {
          _this5.authorization = false;
          return _this5.uploadAudio();
        }, 800);
      },
      playAudio: function playAudio() {
        // alert @.audioId
        if (this.canUpload) {
          CloudMusic.orpheus('orpheus://recordvoice/play/start?id=' + this.audioId);
          return typeof _hmt !== "undefined" && _hmt !== null && _hmt.push(['_trackEvent', "Levi", "record", "Listen", "-"]);
        } else {
          return CloudMusic.orpheus('orpheus://recordvoice/play/end?id=' + this.audioId);
        }
      },
      uploadAudio: function uploadAudio() {
        this.step = 3;
        ugc.addCover();
        CloudMusic.orpheus('orpheus://recordvoice/play/end?id=' + this.audioId);
        typeof _hmt !== "undefined" && _hmt !== null && _hmt.push(['_trackEvent', "Levi", "record", "Upload sound", "-"]);
        return false;
      },
      gotoAudio: function gotoAudio() {
        if (this.nickname === "") {
          return alert("请输入你的名字");
        }
        if (this.nickname.length > 10) {
          return alert("名字限制10个字符");
        }
        if (!this.imageUpdate) {
          return alert("请上传一张专辑封面");
        }
        this.step = 2;
        ugc.uploadOverText.visible = false;
        return typeof _hmt !== "undefined" && _hmt !== null && _hmt.push(['_trackEvent', "Levi", "record", "Upload icon+name", "-"]);
      },
      selectSingerStart: function selectSingerStart() {
        if (this.text === "") {
          return alert("请输入你发声了什么?");
        }
        if (this.text.length > 32) {
          // return alert "字数限制32个中文字符64个英文字符" if @.text.gblen() > 64
          return alert("字数限制32个字符");
        }
        this.step = 4;
        ugc.albumInfo(this.singerIndex);
        return typeof _hmt !== "undefined" && _hmt !== null && _hmt.push(['_trackEvent', "Levi", "record", "Upload story", "-"]);
      },
      singerPrev: function singerPrev() {
        this.singerIndex--;
        if (this.singerIndex < 1) {
          return this.singerIndex = 1;
        }
        return ugc.albumInfo(this.singerIndex);
      },
      singerNext: function singerNext() {
        this.singerIndex++;
        if (this.singerIndex > 5) {
          return this.singerIndex = 5;
        }
        return ugc.albumInfo(this.singerIndex);
      },
      over: function over() {
        if (this.wy) {
          this.step = 5;
        } else {
          this.pageInfoShow = true;
        }
        if (this.loading) {
          return false;
        }
        typeof _hmt !== "undefined" && _hmt !== null && _hmt.push(['_trackEvent', "Levi", "record", "Share to social", "-"]);
        if (this.uploaded) {
          neteaseShareImage();
          return false;
        }
      },
      uploadAll: function uploadAll() {
        this.loading = true;
        // console.log "authorization:",@.authorization
        console.log('\u6388\u6743:' + this.authorization + ',\u662F\u5426\u63A5\u53D7\u5230\u5F55\u97F3\u56DE\u8C03' + this.norecord);
        if (this.authorization && !this.norecord) {
          return CloudMusic.orpheus('orpheus://recordvoice/upload/start?id=' + this.audioId);
        } else {
          this.authorization = false;
          return this.createLog();
        }
      },
      gotoMore: function gotoMore() {
        setTimeout(function () {
          return window.location.href = "/Levi-special/";
        }, 200);
        return typeof _hmt !== "undefined" && _hmt !== null && _hmt.push(['_trackEvent', "Levi", "record", "Link to Netease Music Hub", "-"]);
      },
      review: function review() {
        // @.step = 5
        // ugc.review()
        this.allowShow();
        return typeof _hmt !== "undefined" && _hmt !== null && _hmt.push(['_trackEvent', "Levi", "record", 'Chose Musician-' + this.singerIndex, "-"]);
      },
      allowShow: function allowShow() {
        return this.allowPopShow = true;
      },
      allowFALSE: function allowFALSE() {
        if (this.loading) {
          return false;
        }
        // @.loading = true
        this.authorization = false;
        this.allowPopShow = false;
        ugc.review();
        this.step = 5;
        this.uploadAll();
        return typeof _hmt !== "undefined" && _hmt !== null && _hmt.push(['_trackEvent', "Levi", "record", "Authorization - norecord", "-"]);
      },
      allowTRUE: function allowTRUE() {
        if (this.loading) {
          return false;
        }
        this.authorization = true;
        this.allowPopShow = false;
        ugc.review();
        this.step = 5;
        this.uploadAll();
        return typeof _hmt !== "undefined" && _hmt !== null && _hmt.push(['_trackEvent', "Levi", "record", "Authorization - Yes", "-"]);
      },
      createLog: function createLog() {
        var _this6 = this;

        var data;
        // @.nickname,@.shareImageLink,@.musicLink,@.singerIndex,@.text,@.authorization
        console.log("createLog:", this.authorization, this.norecord);
        if (!this.authorization) {
          ugc.overUGC();
          return false;
        }
        data = {
          nickname: this.nickname,
          music: this.musicLink,
          singer: this.singerIndex,
          message: this.text,
          allow: this.authorization,
          mask: this.mask
        };
        return axios.post(apiLink + 'active/Levi/insert', data).then(function (msg) {
          // alert JSON.stringify msg
          if (msg.data.info.insertId != null) {
            _this6.logId = msg.data.info.insertId;
            return ugc.overUGC(msg.data.info.insertId);
          } else {
            return ugc.overUGC();
          }
        }).catch(function (e) {
          return _this6.loading = false;
        });
      },
      share: function share(image) {
        var data, folder;
        console.log(image);
        folder = "Levi";
        if (this.authorization) {
          folder = "Levis";
        }
        data = {
          image: image,
          folder: folder
        };
        this.folder = folder;
        console.log("folder:", folder);
        if (image == null) {
          return this.faild();
        }
        if (this.pushed) {
          return false;
        }

        // axios.post "http://localhost:8881/api/upload/image64/",data
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
        var _this7 = this;

        this.shareImageLink = data.info;
        // post and update ugc info
        // @.nickname,@.shareImageLink,@.musicLink,@.singerIndex,@.text,@.authorization
        this.uploaded = true;
        if (!this.authorization) {
          this.loading = false;
          // neteaseShareImage()
          return true;
        }
        data = {
          id: this.logId,
          avatar: this.folder + "/" + this.shareImageLink
        };
        if (this.logId != null) {
          return axios.post(apiLink + 'active/Levi/update', data).then(function (msg) {
            // alert JSON.stringify msg
            _this7.pushed = false;
            return _this7.loading = false;
            // neteaseShareImage()
          }).catch(function (e) {
            _this7.pushed = false;
            return _this7.loading = false;
          });
        }
      },
      // neteaseShareImage()
      // else
      // neteaseShareImage()
      showInfoPage: function showInfoPage() {
        return this.pageInfoShow = true;
      },
      faild: function faild(err) {
        this.pushed = false;
        this.loading = false;
        return console.log("err:", err);
      },
      setugc: function setugc(link) {
        return this.ugc = link;
      },
      changeImage: function changeImage(evt) {
        var img;
        this.imageUpdate = true;
        img = document.getElementById("imageInput");
        console.log("file:", img.files.length, img.files[0]);
        if (img.files.length < 1) {
          return false;
        }
        return getOrientation(img.files[0], function (orientation) {
          var blob;
          blob = createObjectURLfun(img.files[0]);
          return ugc.passImage(blob, orientation);
        });
      }
    },
    // passImage: (blob)->
    watch: {
      singerIndex: function singerIndex(n, o) {
        if (n > 5) {
          return this.singerIndex = 5;
        } else if (n < 1) {
          return this.singerIndex = 1;
        } else {
          return ugc.albumInfo(this.singerIndex);
        }
      },
      // text: (n,o)->
      // 	# alert "字数限制32个中文字符64个英文字符" if @.text.gblen() > 64
      // 	console.log n
      mounted: function mounted(n, o) {
        var _this8 = this;

        var time;
        time = new Date().getTime();
        setTimeout(function () {
          if (_this8.pageIndex < 2) {
            _this8.pageIndex = 2;
          }
          clearInterval(_cache);
          return PIXI.sound.stop('bgm');
        }, 14 * 1000 + 500);
        return _cache = setInterval(function () {
          return _second = (new Date().getTime() - time) / 1000;
        }, 1000 / 20);
      },
      text: function text(n, o) {
        var k, len2, t, tx;
        if (this.text.length > 32) {
          //gblen() > 64
          t = this.text.split("");
          tx = "";
          for (k = 0, len2 = t.length; k < len2; k++) {
            i = t[k];
            tx += i;
            if (tx.length >= 32) {
              //gblen() >= 64
              break;
            }
          }
          this.text = tx;
          return false; //alert "字数限制32个中文字符64个英文字符" 
        }
        return ugc.lyricUpdate(this.text);
      },
      nickname: function nickname(n, o) {
        var k, len2, t, tx;
        if (this.nickname.length > 10) {
          t = this.nickname.split("");
          tx = "";
          for (k = 0, len2 = t.length; k < len2; k++) {
            i = t[k];
            tx += i;
            if (tx.length >= 10) {
              break;
            }
          }
          this.nickname = tx;
          return false; //alert "字数限制10个中文字符20个英文字符" 
        }
        return ugc.updateName(this.nickname);
      }
    },
    mounted: function mounted() {
      var _this9 = this;

      var h, version;
      TrueH = document.documentElement.clientHeight;
      TrueW = document.documentElement.clientWidth;
      console.log("after main:", TrueW, TrueH);
      if (sys === "NeteaseMusic") {
        this.wy = true;
      }
      h = TrueH * 2 * (2 - TrueW * 2 / 750 + 0.01);
      // game = new Game({el: "game",h: h})
      ugc = new UGC({
        el: "ugc",
        trueH: TrueH
      });
      version = CloudMusic.getClientVersion().split(".");
      // version = "5.4.".split(".")
      this.v = false;
      if (version.length >= 3) {
        if (parseInt(version[0]) > 5) {
          this.v = true;
        } else if (parseInt(version[0]) === 5) {
          if (parseInt(version[1]) > 4) {
            this.v = true;
          } else if (parseInt(version[1]) === 4) {
            if (parseInt(version[2]) >= 1) {
              this.v = true;
            }
          }
        }
      }
      // @.v = parseInt CloudMusic.getClientVersion().replace(/\./g,"")
      console.log("version:", CloudMusic.getClientVersion(), version, this.v);
      // alert window.api.recordEndCb?
      // alert window.api.uploadEndCb?
      // if window.api.recordEndCb?
      // ?x-oss-process=image/format,jpg,quality,q_60/crop,x_130,y_282,w_410,h_410
      window.api.recordStartCb = function (data) {
        var _time;
        _testTime = new Date().getTime();
        console.log("record start:", data, _testTime);
        _this9.norecord = false;
        clearTimeout(_startCache);
        if (data.code === 200) {
          ugc.cover.visible = true;
          ugc.startLine();
          _this9.audioId = null;
          _this9.count = 15;
          _this9.recordStarting = true;
          clearInterval(_runTime);
          _time = new Date().getTime();
          return _runTime = setInterval(function () {
            _this9.count = 15 - parseInt((new Date().getTime() - _time) / 1000);
            if (_this9.count < 0) {
              return _this9.count = 0;
            }
          }, 1500 / 10);
        } else {
          _this9.authorization = false;
          _this9.uploadAudio();
          return clearTimeout(_cache);
        }
      };
      window.api.recordEndCb = function (data) {
        console.log("record end:", data, (new Date().getTime() - _testTime) / 1000);
        if (data.code === 200 && data.localId !== "(null)") {
          _this9.audioId = data.localId;
        } else {
          _this9.authorization = false;
          _this9.uploadAudio();
        }
        _this9.canUpload = true;
        _this9.norecord = false;
        _this9.recordStarting = false;
        clearTimeout(_cache);
        clearInterval(_runTime);
        ugc.stopLine();
        return ugc.saveLine();
      };
      window.api.uploadEndCb = function (data) {
        console.log("record upload:", data);
        // console.log "上传音频:#{JSON.stringify(data)}"
        if (data.code === 200) {
          _this9.musicLink = data.playUrl;
          return _this9.createLog();
        } else {
          _this9.authorization = false;
          return _this9.createLog();
        }
      };
      window.api.recordvoicePlayCb = function (data) {
        if (data.action === "start") {
          main.canUpload = false;
          ugc.startLine();
        } else {
          main.canUpload = true;
          ugc.stopLine();
        }
        return console.log(data.action, _this9.canUpload);
      };
      return console.log("update: v11 min-height");
    }
  });
};
