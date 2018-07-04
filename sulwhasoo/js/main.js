"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var $_GET, Container, Graphics, IsPC, ParticleContainer, Sprite, Text, Texture, TextureCache, UGCTITLE, _CDN, _public, autoDetectRenderer, getId, getTe, images, imageurl, init, lastDate, lastName, lastTime, loadWechatConfig, loader, loading, main, neteaseShareImage, page1Images, resource, resources, sended, shareName, sulwhasoo, sulwhasooCache, sys, timeDouble, ugcCache;

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
  var get, i, j, k, len1, u, url;
  url = window.document.location.href.toString();
  u = url.split('?');
  if (typeof u[1] === 'string') {
    u = u[1].split('&');
    get = {};
    console.log(u);
    for (k = 0, len1 = u.length; k < len1; k++) {
      i = u[k];
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

// @codekit-prepend "../../libs/coffee/pixi-base"
_CDN = "./";

UGCTITLE = parseInt(Math.random() * 5 + 1);

images = [_CDN + "img/hand.png", _CDN + "img/that-girl.png", _CDN + "img/cloud-1.png", _CDN + "img/cloud-2.png", _CDN + "img/cloud-3.png", _CDN + "img/icon-symbol-1.png", _CDN + "img/icon-symbol-2.png", _CDN + "img/icon-symbol-3.png", _CDN + "img/icon-symbol-4.png", _CDN + "img/icon-symbol-5.png", _CDN + "img/point.png", _CDN + "img/product-border.png", _CDN + "img/product-item.png", _CDN + "img/product.png", _CDN + "img/product-light-1.png", _CDN + "img/product-light-2.png", _CDN + "img/product-bg.jpg", _CDN + "img/product-bg-end.jpg", _CDN + "img/page-1-title.png", _CDN + "img/page-1-title-null.png", _CDN + "img/page-2-title-null.png", _CDN + "img/page-2-title.png", _CDN + "img/page-3-title-null.png", _CDN + "img/page-3-title.png", _CDN + "img/page-4-title.png", _CDN + "img/page-4-title-null.png", _CDN + "img/page-5-title.png", _CDN + "img/page-6-title.png", _CDN + "img/moon.png", _CDN + "img/arrow.png", _CDN + "img/cd.png", _CDN + "img/cd-pointer.png", _CDN + "img/ball.png", _CDN + "img/phone.png", _CDN + "img/qrcode.png", _CDN + "img/star-1.png", _CDN + "img/star-2.png", _CDN + "img/light-1.png", _CDN + "img/light-2.png", _CDN + "img/light-3.png", _CDN + "img/ugc-1.png", _CDN + "img/ugc-2.png", _CDN + "img/ugc-2-1.png", _CDN + "img/ugc-3-1.png", _CDN + "img/ugc-4.png", _CDN + "img/ugc-4-1.png", _CDN + "img/ugc-4-2.png", _CDN + "img/ugc-5.png", _CDN + "img/ugc-5-1.png", _CDN + "img/ugc-5-2.png", _CDN + "img/ugc-5-3.png", _CDN + ("img/ugc-title-" + UGCTITLE + ".png")];

page1Images = [_CDN + "img/hand.png", _CDN + "img/that-girl.png", _CDN + "img/point.png", _CDN + "img/product-border.png", _CDN + "img/product-item.png", _CDN + "img/page-1-title-null.png", _CDN + "img/cloud-1.png", _CDN + "img/cloud-2.png", _CDN + "img/cloud-3.png", _CDN + "img/star-1.png", _CDN + "img/star-2.png"];

lastDate = null;

lastTime = null;

lastName = null;

shareName = null;

sulwhasoo = function () {
  // lastDate = "1987/1/2"
  // lastTime = "08:32"
  // lastName = "你不用才我是谁因为我也不知道"
  // shareName = "你不用才我是谁因为我也不知道"
  var sulwhasoo = function () {
    function sulwhasoo(arg) {
      _classCallCheck(this, sulwhasoo);

      var TrueH, TrueW;
      TrueH = document.documentElement.clientHeight;
      TrueW = document.documentElement.clientWidth;
      this.truew = TrueW;
      this.trueh = TrueH;
      this.opts = {
        el: "main",
        w: 750,
        h: 1333,
        speed: 1,
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
      PIXI.loader.add([_CDN + "img/icon-loading.png", _CDN + "img/star.png"]).load(this.build.bind(this));
    }

    _createClass(sulwhasoo, [{
      key: "loaded",
      value: function loaded(name) {
        var count;
        this.loadCount++;
        count = main.wy ? images.length : page1Images.length;
        this.maxProgress = Math.ceil(this.loadCount / count * 100);
        if (!main.wy) {
          this.loadText.text = "Loading..." + this.maxProgress + "%";
          if (this.maxProgress >= 100) {
            this.loadEnd();
          }
          return false;
        }
        if (!this.starLoad) {
          this.starLoad = true;
          return this.loadProgress();
        }
      }
    }, {
      key: "loadEnd",
      value: function loadEnd() {
        var _this = this;

        var _tar;
        _public.note = false;
        _tar = this.loading;
        _tar.scaleS = 1;
        // console.log @.loading.scale = 1.5
        return TweenLite.to(_tar, 1.5, {
          alpha: 0,
          onComplete: function onComplete() {
            _this.app.ticker.remove(_this._loopLoading);
            return _this.page1();
          },
          onUpdateParams: [_tar]
        });
      }
    }, {
      key: "loadProgress",
      value: function loadProgress() {
        var _this2 = this;

        var timein;
        return timein = setInterval(function () {
          _this2.progress += 3;
          if (_this2.progress >= _this2.maxProgress) {
            _this2.progress = _this2.maxProgress;
          }
          _this2.loadText.text = "Loading..." + _this2.progress + "%";
          if (_this2.progress >= 100) {
            clearInterval(timein);
            return setTimeout(function () {
              return _this2.loadEnd();
            }, 1000);
          }
        }, 1000 / 10);
      }

      // loading page

    }, {
      key: "build",
      value: function build() {
        var bg, canvasH, i, icon, k, size, star;
        this.default.canvasH = canvasH = document.getElementById(this.opts.el).clientHeight;
        console.log("created", canvasH, canvasH < this.default.h);
        if (canvasH < this.default.h) {
          main.biger = true;
        }
        bg = new Graphics();
        bg.beginFill(0x1e2c3b);
        bg.drawRect(0, 0, 750, 1333);
        this.stage.addChild(bg);
        this.loading = new Container();
        this.icon = icon = new Sprite(getTe(_CDN + "img/icon-loading.png"));
        icon.anchor.set(0.5, 0.5);
        icon.x = 750 / 2;
        icon.y = 1333 / 2 - 100;
        icon.rotation = 0;
        this.stars = [];
        for (i = k = 0; k < 18; i = ++k) {
          star = new Sprite(getTe(_CDN + "img/star.png"));
          star.anchor.set(0.5, 0.5);
          star.x = 750 / 2 - icon.width / 2 + Math.random() * icon.width;
          star.y = 1333 / 2 - 100 + Math.random() * 200;
          star.alpha = Math.random() * 0.5 + 0.2;
          star.speed = Math.random() * 2 + 1;
          size = Math.random() * 0.5 + 0.5;
          star.scale.set(size, size);
          this.loading.addChild(star);
          this.stars.push(star);
        }
        this.loading.addChild(icon);
        this.stage.addChild(this.loading);
        this._loopLoading = this.loopLoading.bind(this);
        this.app.ticker.add(this._loopLoading);
        // @.app.ticker.add @.tween
        this.loadText = new Text("Loading...0", {
          fontFamily: 'Arial',
          fontSize: 24,
          fill: 0xffffff,
          align: 'center'
        });
        this.loadText.x = 750 / 2 - this.loadText.width / 2;
        this.loadText.y = 1100;
        this.loading.addChild(this.loadText);
        if (this.opts.callback != null) {
          this.opts.callback();
        }
        // @.app.ticker.remove @._loopLoading
        if (!main.wy) {
          PIXI.loader.add(page1Images).use(this.loaded.bind(this)).load(this.build.bind(this));
        } else {
          PIXI.loader.add(images).use(this.loaded.bind(this)).load(this.build.bind(this));
        }
        return this.animation = true;
      }

      // page 1

    }, {
      key: "page1",
      value: function page1() {
        var _this3 = this;

        var bg, cloud, content, hand, i, k, l, p, point, product, productBorder, q, _runHand, size, star, title, woman, xylist;
        this.Index = 1;
        this.stage.removeChild(this.loading);
        this.cloud = new Container();
        this.cloud.alpha = 0;
        this.page = new Container();
        this.page2 = new Container();
        this.page2.alpha = this.page.alpha = 0;
        this.page2.x = this.page.x = 20;
        this.page2.y = this.page.y = 20;
        this.clouds = [];
        xylist = [{
          x: 750 / 2 - 100,
          y: 200
        }, {
          x: 750 / 2 + 100,
          y: 420
        }, {
          x: 750 / 2 - 100,
          y: 780
        }, {
          x: 750 / 2 + 100,
          y: 1150
        }, {
          x: 750 / 2 - 100,
          y: 1200
        }];
        for (i = k = 0; k < 5; i = ++k) {
          cloud = new Sprite(getTe(_CDN + ("img/cloud-" + (i % 3 + 1) + ".png")));
          cloud.anchor.set(0.5, 0.5);
          cloud.x = cloud.dex = xylist[i].x;
          cloud.y = cloud.dey = xylist[i].y;
          cloud.direction = Math.random() > 0.5 ? true : false;
          if (i === 3) {
            cloud.scale.set(1.3, 1.3);
          }
          if (i === 2) {
            cloud.scale.set(0.8, 0.8);
          }
          this.cloud.addChild(cloud);
          this.clouds.push(cloud);
        }
        woman = new Sprite(getTe(_CDN + "img/that-girl.png"));
        this.page.addChild(woman);
        content = new Container();
        content.y = 80;
        point = new Sprite(getTe(_CDN + "img/point.png"));
        point.x = 350;
        point.y = 800;
        point.alpha = 0;
        content.addChild(point);
        productBorder = new Sprite(getTe(_CDN + "img/product-border.png"));
        productBorder.scale.set(0.7, 0.7);
        productBorder.x = 420;
        productBorder.y = 760;
        productBorder.alpha = 0;
        content.addChild(productBorder);
        product = new Sprite(getTe(_CDN + "img/product-item.png"));
        product.scale.set(0.7, 0.7);
        product.x = 420;
        product.y = 760 - 4;
        product.alpha = 0;
        product.buttonMode = true;
        product.interactive = true;
        product.touchstart = product.click = function () {
          console.log("click product");
          if (_this3.animation) {
            return false;
          }
          if (!main.wy) {
            return window.location.href = "https://m.music.163.com/m/applink/?scheme=orpheus%3A%2F%2Fopenurl%3Furl%3Dhttps%3A%2F%2Factivity.music.163.com%2Fsulwhasoo%2F%26thirdfrom%3Dwx";
          }
          return _this3.page1Out();
        };
        content.addChild(product);
        // title = new Sprite getTe _CDN+"img/page-1-title.png"
        if (!main.wy) {
          title = new Sprite(getTe(_CDN + "img/page-1-title-null.png"));
        } else {
          title = new Sprite(getTe(_CDN + "img/page-1-title.png"));
        }
        title.y = 320;
        title.alpha = 0;
        content.addChild(title);
        hand = new Sprite(getTe(_CDN + "img/hand.png"));
        hand.anchor.set(0.5, 0.5);
        hand.x = 420 + product.width / 2;
        hand.y = 760 + product.height + 100;
        hand.alpha = 0;
        content.addChild(hand);
        this.page.addChild(content);
        this.bg = bg = new Container();
        for (i = l = 0; l < 50; i = ++l) {
          star = new Sprite(getTe(_CDN + ("img/star-" + (i % 2 + 1) + ".png")));
          star.x = Math.random() * (750 - star.width);
          star.y = Math.random() * (1333 - star.height);
          star.scale.set(0.2, 0.2);
          star.alpha = 0.5 + Math.random() * 0.5;
          this.bg.addChild(star);
        }
        for (i = p = 0; p < 20; i = ++p) {
          star = new Sprite(getTe(_CDN + ("img/star-" + (i % 2 + 1) + ".png")));
          star.x = Math.random() * (750 - star.width);
          star.y = Math.random() * (1333 - star.height);
          star.scale.set(0.3, 0.3);
          star.alpha = 0.5 + Math.random() * 0.5;
          this.bg.addChild(star);
        }
        this.largeStars = [];
        for (i = q = 0; q < 10; i = ++q) {
          star = new Sprite(getTe(_CDN + ("img/star-" + (i % 2 + 1) + ".png")));
          star.x = Math.random() * (750 - star.width);
          star.y = Math.random() * (1333 - star.height);
          size = Math.random() * 0.2;
          star.scale.set(0.4 + size, 0.4 + size);
          star.direction = true;
          star.speed = 0.2 + Math.random() * 0.8;
          star.wait = 1 + Math.random() * 1;
          this.bg.addChild(star);
          this.largeStars.push(star);
        }
        this.stage.addChild(this.bg);
        this.stage.addChild(this.page);
        this.stage.addChild(this.page2);
        this.stage.addChild(this.cloud);
        _runHand = function runHand() {
          hand.y = 760 + product.height - 15;
          hand.scale.set(1, 1);
          return TweenLite.to(hand, 0.5, {
            alpha: 1,
            onComplete: function onComplete() {
              return setTimeout(function () {
                hand.scale.set(0.9, 0.9);
                return setTimeout(function () {
                  hand.scale.set(1, 1);
                  return setTimeout(function () {
                    hand.scale.set(0.9, 0.9);
                    return setTimeout(function () {
                      hand.scale.set(1, 1);
                      return TweenLite.to(hand, 1, {
                        delay: 1,
                        alpha: 0,
                        onComplete: function onComplete() {
                          return _runHand();
                        }
                      });
                    }, 200);
                  }, 200);
                }, 200);
              }, 200);
            }
          });
        };
        TweenLite.to(this.cloud, .5, {
          alpha: 1,
          onComplete: function onComplete() {
            TweenLite.to(_this3.page, 2.5, {
              x: 0,
              y: 0,
              alpha: 1,
              ease: Cubic.linear,
              onComplete: function onComplete() {
                var time;
                _this3.app.ticker.add(_this3.loopCloud.bind(_this3));
                time = 0.5;
                TweenLite.to(point, time, {
                  x: 475,
                  ease: Circ.easeIn,
                  onComplete: function onComplete() {
                    return TweenLite.to(point, time, {
                      x: 590,
                      ease: Circ.easeOut
                    });
                  }
                });
                // onComplete: =>
                //   TweenLite.to point,time,
                //     x: 475, 
                //     ease: Circ.easeIn, 
                //     onComplete: =>
                //       TweenLite.to point,time,
                //         x: 350, 
                //         ease: Circ.easeOut
                return TweenLite.to(point, time, {
                  y: 680,
                  ease: Circ.easeOut,
                  onComplete: function onComplete() {
                    return TweenLite.to(point, time, {
                      y: 750,
                      ease: Circ.easeIn,
                      onComplete: function onComplete() {
                        return TweenLite.to(point, time, {
                          y: 800,
                          alpha: 0,
                          ease: Circ.easeOut,
                          onComplete: function onComplete() {
                            TweenLite.to(productBorder, time * 3, {
                              alpha: 0.8
                            });
                            _this3.animation = false;
                            // TweenLite.to point,time, 
                            //   y: 800, 
                            //   alpha: 0,
                            //   ease: Circ.easeIn,
                            //   onComplete: =>
                            TweenLite.to(product, time * 3, {
                              alpha: 1,
                              onComplete: function onComplete() {
                                return _this3.productLight(productBorder);
                              }
                            });
                            return TweenLite.to(title, time * 3, {
                              alpha: 1,
                              y: 1333 / 2 - title.height / 2 - 80,
                              onComplete: function onComplete() {
                                return _runHand();
                              }
                            });
                          }
                        });
                      }
                    });
                  }
                });
              }
            });
            TweenLite.to(point, 1, {
              alpha: 1,
              delay: 1
            });
            return _this3.showCloud();
          }
        });
        return this.app.ticker.add(this.loopBgStar.bind(this));
      }

      // 产品发光

    }, {
      key: "productLight",
      value: function productLight(item) {
        var _this4 = this;

        if (!this.page.visible) {
          return false;
        }
        return TweenLite.to(item, .3, {
          alpha: 0.2,
          onComplete: function onComplete() {
            return TweenLite.to(item, .6, {
              alpha: 1,
              onComplete: function onComplete() {
                return _this4.productLight(item);
              }
            });
          }
        });
      }

      // page 1 移除

    }, {
      key: "page1Out",
      value: function page1Out() {
        var _this5 = this;

        this.hideCloud();
        // 跳过中间页
        this.page2build();
        // @.page5build()
        return TweenLite.to(this.page, .7, {
          alpha: 0,
          x: 20,
          y: 20,
          onComplete: function onComplete() {

            // @.page.removeChildren()
            return _this5.page.visible = false;
          }
        });
      }

      // page 2

    }, {
      key: "page2build",
      value: function page2build() {
        var _this6 = this;

        var btn, _btnRun, date, moon, self, time, title, titleBG;
        // @.page2
        // unless lastDate?
        //   return @.page3build()
        this.Index = 2;
        this.animation = true;
        moon = new Sprite(getTe(_CDN + "img/moon.png"));
        moon.anchor.set(0.5, 0.01);
        moon.x = 750 / 2;
        moon.scale.set(1.01, 1.01);
        this.page2.addChild(moon);
        title = new Container();
        title.alpha = 0;
        if (lastDate == null) {
          titleBG = new Sprite(getTe(_CDN + "img/page-2-title-null.png"));
        } else {
          titleBG = new Sprite(getTe(_CDN + "img/page-2-title.png"));
          date = new Text(lastDate, {
            fontFamily: 'Arial',
            fontSize: 44,
            fill: 0x2a985d,
            align: 'left'
          });
          date.y = 142;
          time = new Text(lastTime, {
            fontFamily: 'Arial',
            fontSize: 44,
            fill: 0x2a985d,
            align: 'left'
          });
          time.y = 195;
          title.addChild(time);
          title.addChild(date);
        }
        title.x = 190;
        title.y = 750;
        title.addChild(titleBG);
        this.page2.addChild(title);
        btn = this.nextBtn();
        this.page2.addChild(btn);
        this.page2.buttonMode = true;
        this.page2.interactive = true;
        this.page2.touchstart = this.page2.click = function (data) {
          if (_this6.animation) {
            return false;
          }
          return _this6.page2Out();
        };
        TweenLite.to(this.page2, this.cloudTime, {
          x: 0,
          y: 0,
          alpha: 1,
          delay: .7,
          onComplete: function onComplete() {
            _this6.showCloud();
            _this6.moonswing(moon);
            TweenLite.to(title, 1.6, {
              alpha: 1
            });
            _this6.animation = false;
            return _btnRun();
          }
        });
        self = this;
        return _btnRun = function btnRun() {
          var y;
          if (!self.page2.visible) {
            return false;
          }
          y = btn.y;
          return TweenLite.to(btn, 1.8, {
            y: y + 10,
            alpha: 0,
            onComplete: function onComplete() {
              btn.alpha = 1;
              btn.y = y;
              return _btnRun();
            }
          });
        };
      }

      // 月亮摇摆

    }, {
      key: "moonswing",
      value: function moonswing(moon) {
        var _this7 = this;

        if (!this.page2.visible) {
          // moon.rotation
          return false;
        }
        return TweenLite.to(moon, 1.5, {
          rotation: 0.005,
          onComplete: function onComplete() {
            return TweenLite.to(moon, 1.5, {
              rotation: -0.005,
              onComplete: function onComplete() {
                return _this7.moonswing(moon);
              }
            });
          }
        });
      }

      // page 2 out

    }, {
      key: "page2Out",
      value: function page2Out() {
        var _this8 = this;

        this.hideCloud();
        // 跳过中间页
        this.page3build();
        return TweenLite.to(this.page2, .7, {
          alpha: 0,
          x: 20,
          y: 20,
          onComplete: function onComplete() {
            _this8.page2.removeChildren();
            return _this8.page2.visible = false;
          }
        });
      }

      // page 3

    }, {
      key: "page3build",
      value: function page3build() {
        var _this9 = this;

        var btn, _btnRun2, cd, cdPointer, name, _runCD, self, small, title, titleText;
        // unless lastName?
        //   return @.page4build()
        this.Index = 3;
        this.animation = true;
        this.page3 = new Container();
        this.page3.alpha = 0;
        this.page3.x = 20;
        this.page3.y = 20;
        cd = new Sprite(getTe(_CDN + "img/cd.png"));
        cd.anchor.set(0.5, 0.5);
        cd.x = 750 / 2;
        cd.y = cd.height - 120;
        this.page3.addChild(cd);
        cdPointer = new Sprite(getTe(_CDN + "img/cd-pointer.png"));
        cdPointer.anchor.set(1, 0);
        cdPointer.x = 750 - 100;
        cdPointer.y = 0;
        cdPointer.rotation = 0.7;
        this.page3.addChild(cdPointer);
        title = new Container();
        if (lastName == null) {
          titleText = new Sprite(getTe(_CDN + "img/page-3-title-null.png"));
        } else {
          titleText = new Sprite(getTe(_CDN + "img/page-3-title.png"));
          small = 10;
          name = new Text("\u300A" + lastName + "\u300B", {
            fontFamily: 'Arial',
            fontSize: 44 - small,
            fill: 0x2a985d,
            align: 'center'
          });
          // name.width = titleText.width
          name.y = 138 + small / 2;
          name.x = titleText.width / 2 - name.width / 2;
          title.addChild(name);
        }
        title.x = 750 / 2 - titleText.width / 2;
        title.y = cd.height + 230;
        title.addChild(titleText);
        this.page3.addChild(title);
        btn = this.nextBtn();
        this.page3.addChild(btn);
        this.stage.addChildAt(this.page3, 2);
        this.page3.buttonMode = true;
        this.page3.interactive = true;
        this.page3.touchstart = this.page3.click = function (data) {
          if (_this9.animation) {
            return false;
          }
          return _this9.page3Out();
        };
        TweenLite.to(this.page3, this.cloudTime, {
          x: 0,
          y: 0,
          alpha: 1,
          delay: .7,
          onComplete: function onComplete() {
            _this9.showCloud();
            _btnRun2();
            _this9.animation = false;
            return TweenLite.to(cdPointer, 1.7, {
              rotation: 0,
              onComplete: function onComplete() {
                return _runCD();
              }
            });
          }
        });
        self = this;
        _runCD = function runCD() {
          if (!self.page3.visible) {
            return false;
          }
          cd.rotation = 0;
          return TweenLite.to(cd, 6, {
            rotation: Math.PI * 2,
            onComplete: function onComplete() {
              return _runCD();
            }
          });
        };
        return _btnRun2 = function btnRun() {
          var y;
          if (!self.page3.visible) {
            return false;
          }
          y = btn.y;
          return TweenLite.to(btn, 1.8, {
            y: y + 10,
            alpha: 0,
            onComplete: function onComplete() {
              btn.alpha = 1;
              btn.y = y;
              return _btnRun2();
            }
          });
        };
      }
    }, {
      key: "page3Out",
      value: function page3Out() {
        var _this10 = this;

        this.hideCloud();
        // 跳过中间页
        this.page4build();
        return TweenLite.to(this.page3, .7, {
          alpha: 0,
          x: 20,
          y: 20,
          onComplete: function onComplete() {
            _this10.page3.removeChildren();
            return _this10.page3.visible = false;
          }
        });
      }
    }, {
      key: "page4build",
      value: function page4build() {
        var _this11 = this;

        var ball, btn, _btnRun3, item, name, phone, _runBall, self, small, title, titleText;
        // unless shareName?
        //   return @.page5build()
        this.Index = 4;
        this.animation = true;
        this.page4 = new Container();
        this.page4.alpha = 0;
        this.page4.x = 20;
        this.page4.y = 20;
        ball = new Container();
        item = new Sprite(getTe(_CDN + "img/ball.png"));
        phone = new Sprite(getTe(_CDN + "img/phone.png"));
        item.x = phone.x = 0;
        item.y = phone.y = 0;
        ball.x = 270;
        ball.y = 750;
        ball.width = item.width;
        ball.height = item.height;
        ball.addChild(phone);
        ball.addChild(item);
        this.page4.addChild(ball);
        title = new Container();
        if (shareName == null) {
          titleText = new Sprite(getTe(_CDN + "img/page-4-title-null.png"));
        } else {
          titleText = new Sprite(getTe(_CDN + "img/page-4-title.png"));
          small = 10;
          name = new Text("\u300A" + shareName + "\u300B", {
            fontFamily: 'Arial',
            fontSize: 42 - small,
            fill: 0x2a985d,
            align: 'left'
          });
          // name.width = titleText.width
          name.y = 238 + small / 2;
          name.x = 58;
          title.addChild(name);
        }
        title.x = 30;
        title.y = 630;
        title.alpha = 0;
        title.addChild(titleText);
        this.page4.addChild(title);
        btn = this.nextBtn();
        this.page4.addChild(btn);
        this.stage.addChildAt(this.page4, 2);
        this.page4.buttonMode = true;
        this.page4.interactive = true;
        this.page4.touchstart = this.page4.click = function (data) {
          console.log("page 4");
          if (_this11.animation) {
            return false;
          }
          return _this11.page4Out();
        };
        TweenLite.to(this.page4, this.cloudTime, {
          x: 0,
          y: 0,
          alpha: 1,
          delay: .7,
          onComplete: function onComplete() {
            _this11.showCloud();
            _btnRun3();
            _this11.animation = false;
            TweenLite.to(title, 0.7, {
              alpha: 1,
              delay: 2.7
            });
            TweenLite.to(ball, 3, {
              x: 300,
              ease: Cubic.easeIn,
              onComplete: function onComplete() {}
            });
            // runBall()
            return TweenLite.to(ball, 3, {
              y: 100,
              ease: Cubic.easeOut,
              onComplete: function onComplete() {
                return TweenLite.to(item, 12, {
                  y: -item.height - 100
                });
              }
            });
          }
        });
        // TweenLite.to ball,3,
        //   ease: Elastic.easeOut
        self = this;
        _btnRun3 = function btnRun() {
          var y;
          if (!self.page4.visible) {
            return false;
          }
          y = btn.y;
          return TweenLite.to(btn, 1.8, {
            y: y + 10,
            alpha: 0,
            onComplete: function onComplete() {
              btn.alpha = 1;
              btn.y = y;
              return _btnRun3();
            }
          });
        };
        return _runBall = function runBall() {
          TweenLite.to(ball, 2, {
            y: 280,
            ease: Cubic.easeIn
          });
          return TweenLite.to(ball, 2, {
            x: 290,
            ease: Cubic.easeOut,
            onComplete: function onComplete() {
              TweenLite.to(ball, 1.5, {
                y: 300,
                ease: Cubic.easeOut
              });
              return TweenLite.to(ball, 1.5, {
                x: 300,
                ease: Cubic.easeIn,
                onComplete: function onComplete() {
                  return _runBall();
                }
              });
            }
          });
        };
      }
    }, {
      key: "page4Out",
      value: function page4Out() {
        var _this12 = this;

        this.hideCloud();
        // 跳过中间页
        this.page5build();
        return TweenLite.to(this.page4, .7, {
          alpha: 0,
          x: 20,
          y: 20,
          onComplete: function onComplete() {
            _this12.page4.removeChildren();
            return _this12.page4.visible = false;
          }
        });
      }
    }, {
      key: "page5build",
      value: function page5build() {
        var _this13 = this;

        var btn, i, icon, iconTimes, icons, k, light1, light2, light3, lightL, lightS, page5ShowStep1, page5ShowStep2, page5ShowStep3, product, productBG, productBGEnd, _runSLlight, scaleX, self, step, title, titleLarge;
        this.Index = 5;
        this.animation = true;
        this.page5 = new Container();
        this.page5.alpha = 0;
        this.page5.x = 0;
        this.page5.y = 0;
        step = 0;
        // btn = @.nextBtn()
        // @.page5.addChild btn
        this.stage.addChildAt(this.page5, 2);
        this.page5.buttonMode = true;
        this.page5.interactive = true;
        this.page5.touchstart = this.page5.click = function (data) {
          console.log("page 5 click");
          if (step === 1) {
            page5ShowStep2();
          }
          if (_this13.animation) {
            return false;
          }
          return _this13.page5Out();
        };
        TweenLite.to(this.page5, this.cloudTime, {
          x: 0,
          y: 0,
          alpha: 1,
          delay: .7,
          onComplete: function onComplete() {
            _this13.showCloud();
            return page5ShowStep1();
          }
        });
        self = this;
        title = new Sprite(getTe(_CDN + "img/page-5-title.png"));
        title.anchor.set(0.5, 0.5);
        title.x = 750 / 2;
        title.y = 1333 / 2 + 100;
        title.alpha = 0;
        this.page5.addChild(title);
        icons = [];
        for (i = k = 0; k < 5; i = ++k) {
          icon = new Sprite(getTe(_CDN + ("img/icon-symbol-" + (i + 1) + ".png")));
          icon.anchor.set(0.5, 0.5);
          icon.x = 750 / 2 + 20 + 50 + i % 2 * -100;
          icon.y = -100 * (i + 1);
          icons.push(icon);
          this.page5.addChild(icon);
        }
        lightS = new Sprite(getTe(_CDN + "img/product-light-1.png"));
        lightS.anchor.set(0.5, 1);
        lightL = new Sprite(getTe(_CDN + "img/product-light-2.png"));
        lightL.anchor.set(0.5, 1);
        lightL.alpha = lightS.alpha = 0;
        lightS.x = lightL.x = 750 / 2;
        lightS.y = lightL.y = 1333 / 2 - 76;
        lightS.scaleX = 1;
        lightL.scaleX = 0.8;
        lightL.scale.set(0.8, 0.8);
        this.page5.addChild(lightS, lightL);
        productBG = new Sprite(getTe(_CDN + "img/product-bg.jpg"));
        productBG.alpha = 0;
        this.page5.addChild(productBG);
        light1 = new Sprite(getTe(_CDN + "img/light-1.png"));
        light1.anchor.set(0.5, 0.5);
        light1.x = 750 / 2;
        light1.y = light1.height / 2;
        light1.scale.set(0, 0);
        light2 = new Sprite(getTe(_CDN + "img/light-2.png"));
        light2.anchor.set(0.5, 0);
        light2.x = 750 / 2;
        light2.scale.set(1, 0);
        light3 = new Sprite(getTe(_CDN + "img/light-3.png"));
        light3.anchor.set(0.5, 0);
        light3.x = 750 / 2;
        light3.y = 1333 / 2 - 170;
        light3.scale.set(0, 0);
        light1.alpha = light2.alpha = light3.alpha = 0;
        this.page5.addChild(light1, light2, light3);
        // white bg
        product = new Sprite(getTe(_CDN + "img/product.png"));
        // product.anchor.set(0.5,0)
        // product.x = 750/2
        // product.y = 1333/2 - 80
        product.alpha = 0;
        // product.scale.set(0.99,0.99)
        this.page5.addChild(product);
        productBGEnd = new Sprite(getTe(_CDN + "img/product-bg-end.jpg"));
        productBGEnd.alpha = 0;
        this.page5.addChild(productBGEnd);
        titleLarge = new Sprite(getTe(_CDN + "img/page-6-title.png"));
        titleLarge.anchor.set(0.5, 1);
        titleLarge.alpha = 0;
        titleLarge.y = 100 + titleLarge.height;
        titleLarge.x = 750 / 2;
        scaleX = 1 - (1333 - this.trueh * 2) / 1333;
        if (scaleX < 1) {
          titleLarge.scale.set(scaleX, scaleX);
        }
        this.page5.addChild(titleLarge);
        btn = this.nextBtn();
        btn.alpha = 0;
        this.page5.addChild(btn);
        // @.page5.touchstart = @.page5.click = (data)=>
        //   console.log "page 5"
        //   return false if @.animation
        //   @.page5Out()
        iconTimes = 0;
        page5ShowStep1 = function page5ShowStep1() {
          return TweenLite.to(title, 0.7, {
            alpha: 1,
            delay: 0.7,
            y: 1333 / 2,
            onComplete: function onComplete() {
              btn.alpha = 1;
              return step = 1;
            }
          });
        };
        page5ShowStep2 = function page5ShowStep2() {
          var cloud, l, len1, ref;
          step = 2;
          _runSLlight();
          btn.alpha = 0;
          ref = _this13.clouds;
          for (l = 0, len1 = ref.length; l < len1; l++) {
            cloud = ref[l];
            TweenLite.to(cloud, 0.5, {
              alpha: 0
            });
          }
          return TweenLite.to(title, 0.7, {
            alpha: 0,
            y: 1333 / 2 - 100,
            onComplete: function onComplete() {
              TweenLite.to(lightL, 1.2, {
                alpha: 1,
                delay: 1.7
              });
              TweenLite.to(lightS, 1.2, {
                alpha: 1,
                delay: 1.7
              });
              return TweenLite.to(product, 0.7, {
                alpha: 1,
                onComplete: function onComplete() {
                  var p, results;
                  results = [];
                  for (i = p = 0; p < 5; i = ++p) {
                    icon = icons[i];
                    icon.y = -(100 * (i + 1));
                    TweenLite.to(icon, 3, {
                      y: 1333 / 2 - 40,
                      onComplete: function onComplete() {
                        iconTimes++;
                        return page5ShowStep3();
                      }
                    });
                    results.push(TweenLite.to(icon, 0.7, {
                      alpha: 0,
                      delay: 2.3
                    }));
                  }
                  return results;
                }
              });
            }
          });
        };
        page5ShowStep3 = function page5ShowStep3() {
          var l, len1;
          if (iconTimes < 5) {
            return false;
          }
          step = 3;
          console.log("run");
          for (l = 0, len1 = icons.length; l < len1; l++) {
            icon = icons[l];
            icon.visible = false;
          }
          TweenLite.to(productBG, 1, {
            alpha: 1,
            delay: 0.2
          });
          TweenLite.to(light2, 1, {
            alpha: 1,
            onUpdate: function onUpdate() {
              return light2.scale.set(1, light2.alpha);
            }
          });
          TweenLite.to(light1, 0.7, {
            alpha: 1,
            delay: 0.4,
            onUpdate: function onUpdate() {
              return light1.scale.set(light1.alpha, light1.alpha);
            }
          });
          TweenLite.to(light3, 0.5, {
            alpha: 1,
            delay: 0.8,
            onUpdate: function onUpdate() {
              return light3.scale.set(light3.alpha, light3.alpha);
            }
          });
          TweenLite.to(product, 1, {
            alpha: 0,
            delay: 0.2
          });
          return TweenLite.to(productBGEnd, 0.6, {
            alpha: 1,
            delay: 1.2,
            onComplete: function onComplete() {
              TweenLite.to(btn, 0.6, {
                alpha: 1
              });
              return TweenLite.to(titleLarge, 0.6, {
                alpha: 1,
                onComplete: function onComplete() {
                  return _this13.animation = false;
                }
              });
            }
          });
        };
        //   setTimeout =>
        //     @.page5Out()
        //   ,2000
        return _runSLlight = function runSLlight() {
          TweenLite.to(lightS, 0.7, {
            scaleX: 0.8,
            onUpdate: function onUpdate() {
              return lightS.scale.set(lightS.scaleX, lightS.scaleX);
            },
            onComplete: function onComplete() {
              return TweenLite.to(lightS, 0.7, {
                scaleX: 1,
                onUpdate: function onUpdate() {
                  return lightS.scale.set(lightS.scaleX, lightS.scaleX);
                }
              });
            }
          });
          return TweenLite.to(lightL, 0.7, {
            scaleX: 1,
            onUpdate: function onUpdate() {
              return lightL.scale.set(lightL.scaleX, lightL.scaleX);
            },
            onComplete: function onComplete() {
              return TweenLite.to(lightL, 0.7, {
                scaleX: 0.8,
                onUpdate: function onUpdate() {
                  return lightL.scale.set(lightL.scaleX, lightL.scaleX);
                },
                onComplete: function onComplete() {
                  return _runSLlight();
                }
              });
            }
          });
        };
      }
    }, {
      key: "page5Out",
      value: function page5Out() {
        var _this14 = this;

        this.hideCloud();
        this.page6build();
        return TweenLite.to(this.page5, .7, {
          alpha: 0,
          x: 20,
          y: 20,
          onComplete: function onComplete() {
            _this14.page5.removeChildren();
            return _this14.page5.visible = false;
          }
        });
      }
    }, {
      key: "page6build",
      value: function page6build() {
        var _this15 = this;

        var FixSize, i, icon, k, l, leftBtn, leftBtnEmpty, p, qrcode, rightBtn, rightBtnEmpty, _runArrow, _runUGC1BG, _runUGC2Item, _runUGC3BG, _runUGC4BG, _runUGC4Star, _runUGC5Light, star, ugc1, ugc1BG, ugc1Icons, ugc2, ugc2BG, ugc2Item, ugc3, ugc3BG, ugc3Icons, ugc3Item, ugc4, ugc4BG, ugc4BG2, ugc4Stars, ugc5, ugc5BG, ugc5Item1, ugc5Item2, ugc5Item3;
        this.Index = 6;
        this.animation = true;
        this.page6 = new Container();
        this.page6.alpha = 0;
        this.page6.x = 0;
        this.page6.y = 0;
        // btn = @.nextBtn()
        // @.page6.addChild btn
        this.stage.addChildAt(this.page6, 2);
        setTimeout(function () {
          return _this15.showCloud();
        }, 1700);
        TweenLite.to(this.page6, this.cloudTime, {
          x: 0,
          y: 0,
          alpha: 1,
          delay: 1.7,
          onComplete: function onComplete() {
            _this15.animation = false;
            return setTimeout(function () {
              return main.ugcBtn = true;
            }, 1000);
          }
        });
        FixSize = 70;
        this.ugc1 = ugc1 = new Container();
        ugc1BG = new Sprite(getTe(_CDN + "img/ugc-1.png"));
        ugc1BG.anchor.set(0.5, 0.5);
        ugc1BG.x = 750 / 2;
        ugc1BG.y = 1333 / 2 + FixSize;
        ugc1BG.rotation = 0;
        ugc1.addChild(ugc1BG);
        ugc1.alpha = 1;
        ugc1Icons = [];
        for (i = k = 0; k < 3; i = ++k) {
          icon = new Sprite(getTe(_CDN + ("img/icon-symbol-" + (i + 1) + ".png")));
          icon.anchor.set(0.5, 0.5);
          icon.x = icon.dx = 750 / 2 + 150 + i % 2 * icon.width / (i % 2 + 1);
          icon.y = icon.dy = 1333 / 2 + 100 - Math.random() * 100 + FixSize;
          icon.speed = 1 / 3 + Math.random() * 2;
          icon.direction = true;
          icon.alpha = Math.random() * 0.5;
          ugc1.addChild(icon);
          ugc1Icons.push(icon);
        }
        _runUGC1BG = function runUGC1BG() {
          return TweenLite.to(ugc1BG, 4, {
            rotation: 0.05,
            onComplete: function onComplete() {
              return TweenLite.to(ugc1BG, 4, {
                rotation: -0.05,
                onComplete: function onComplete() {
                  return _runUGC1BG();
                }
              });
            }
          });
        };
        _runUGC1BG();
        this.app.ticker.add(this.symbolRun.bind(this, ugc1Icons));
        this.page6.addChild(ugc1);
        this.ugc2 = ugc2 = new Container();
        ugc2BG = new Sprite(getTe(_CDN + "img/ugc-2.png"));
        ugc2BG.y = (1333 - ugc1BG.height) / 2 + 150 + FixSize;
        ugc2.addChild(ugc2BG);
        ugc2Item = new Sprite(getTe(_CDN + "img/ugc-2-1.png"));
        ugc2Item.anchor.set(0.5, 1);
        ugc2Item.x = 750 / 2 - 80;
        ugc2Item.y = 1333 / 2 + 120 + 150 + FixSize;
        ugc2Item.direction = true;
        ugc2.addChild(ugc2Item);
        ugc2.alpha = 0;
        _runUGC2Item = function runUGC2Item() {
          return TweenLite.to(ugc2Item, 0.5, {
            alpha: 0,
            delay: 2,
            onComplete: function onComplete() {
              ugc2Item.y = 1333 / 2;
              ugc2Item.x = 750 / 2 - 80;
              ugc2Item.rotation = 0.4;
              return TweenLite.to(ugc2Item, 1.5, {
                alpha: 1,
                x: 750 / 2,
                rotation: -0.2,
                y: 1333 / 2 + 120 + FixSize,
                onComplete: function onComplete() {
                  return TweenLite.to(ugc2Item, 1.5, {
                    x: 750 / 2 - 80,
                    rotation: 0,
                    y: 1333 / 2 + 120 + 150 + FixSize,
                    onComplete: function onComplete() {
                      return _runUGC2Item();
                    }
                  });
                }
              });
            }
          });
        };
        _runUGC2Item();
        this.page6.addChild(ugc2);
        this.ugc3 = ugc3 = new Container();
        ugc3BG = new Sprite(getTe(_CDN + "img/cd.png"));
        ugc3BG.anchor.set(0.5, 0.5);
        ugc3BG.x = 750 / 2;
        ugc3BG.y = 1333 / 2 + FixSize * 2;
        ugc3BG.scale.set(0.9, 0.9);
        ugc3.addChild(ugc3BG);
        ugc3Item = new Sprite(getTe(_CDN + "img/ugc-3-1.png"));
        ugc3Item.anchor.set(1, 0.5);
        ugc3Item.x = 800;
        ugc3Item.y = 1333 / 2 - 80 + FixSize * 2;
        ugc3.addChild(ugc3Item);
        ugc3.alpha = 0;
        _runUGC3BG = function runUGC3BG() {
          ugc3BG.rotation = 0;
          return TweenLite.to(ugc3BG, 6, {
            rotation: Math.PI * 2,
            onComplete: function onComplete() {
              return _runUGC3BG();
            }
          });
        };
        _runUGC3BG();
        ugc3Icons = [];
        for (i = l = 0; l < 3; i = ++l) {
          icon = new Sprite(getTe(_CDN + ("img/icon-symbol-" + (i + 1) + ".png")));
          icon.anchor.set(0.5, 0.5);
          icon.x = icon.dx = 750 / 2 - 250 + i * icon.width / 3;
          icon.y = icon.dy = 1333 / 2 + 300 - Math.random() * 100;
          icon.speed = 1 / 3 + Math.random() * 2;
          icon.direction = true;
          icon.alpha = Math.random() * 0.5;
          ugc3.addChild(icon);
          ugc3Icons.push(icon);
        }
        this.app.ticker.add(this.symbolRun.bind(this, ugc3Icons));
        this.page6.addChild(ugc3);
        this.ugc4 = ugc4 = new Container();
        ugc4BG = new Sprite(getTe(_CDN + "img/ugc-4.png"));
        ugc4BG.anchor.set(0.5, 0.5);
        ugc4BG.x = 750 / 2;
        ugc4BG.y = 1333 / 2 - 100 + FixSize * 2;
        ugc4BG2 = new Sprite(getTe(_CDN + "img/ugc-4-2.png"));
        ugc4BG2.anchor.set(0.5, 0.5);
        ugc4BG2.x = 750 / 2;
        ugc4BG2.y = 1333 / 2 - 100 + FixSize * 2;
        ugc4.addChild(ugc4BG, ugc4BG2);
        ugc4Stars = [];
        for (i = p = 0; p < 5; i = ++p) {
          star = new Sprite(getTe(_CDN + "img/ugc-4-1.png"));
          star.anchor.set(0.5, 0.5);
          star.x = star.dx = 800 + star.width * i;
          star.y = star.dy = -50 - star.height * i;
          star.toX = -star.width;
          star.toY = 1333 / 2;
          ugc4Stars.push(star);
          ugc4.addChild(star);
        }
        _runUGC4Star = function runUGC4Star() {
          var q, size;
          for (i = q = 0; q < 3; i = ++q) {
            star = ugc4Stars[i];
            star.x = star.dx;
            star.y = star.dy;
            star.alpha = 1;
            size = 0.3 + Math.random() * 0.5;
            star.scale.set(size, size);
            TweenLite.to(star, 1.4, {
              x: star.toX - Math.random() * 100,
              y: star.toY + Math.random() * 100,
              rotation: Math.PI * 4,
              alpha: 0,
              delay: i * 1
            });
          }
          // TweenLite.to star,0.4, {alpha: 0, delay: i*1+1-0.2}
          return setTimeout(function () {
            return _runUGC4Star();
          }, 6500);
        };
        _runUGC4Star();
        _runUGC4BG = function runUGC4BG() {
          return TweenLite.to(ugc4BG2, 2, {
            x: 750 / 2 + 10,
            onComplete: function onComplete() {
              return TweenLite.to(ugc4BG2, 2, {
                x: 750 / 2 - 10,
                onComplete: function onComplete() {
                  return TweenLite.to(ugc4BG2, 1, {
                    x: 750 / 2,
                    onComplete: function onComplete() {
                      return _runUGC4BG();
                    }
                  });
                }
              });
            }
          });
        };
        _runUGC4BG();
        ugc4.alpha = 0;
        this.page6.addChild(ugc4);
        this.ugc5 = ugc5 = new Container();
        ugc5BG = new Sprite(getTe(_CDN + "img/ugc-5.png"));
        ugc5Item1 = new Sprite(getTe(_CDN + "img/ugc-5-1.png"));
        ugc5Item2 = new Sprite(getTe(_CDN + "img/ugc-5-2.png"));
        ugc5Item3 = new Sprite(getTe(_CDN + "img/ugc-5-3.png"));
        ugc5Item1.alpha = ugc5Item2.alpha = ugc5Item3.alpha = 0;
        ugc5.addChild(ugc5Item1, ugc5Item2, ugc5Item3, ugc5BG);
        _runUGC5Light = function runUGC5Light() {
          TweenLite.to(ugc5Item1, 1, {
            alpha: 0.4,
            onComplete: function onComplete() {
              return TweenLite.to(ugc5Item1, 2, {
                alpha: 1
              });
            }
          });
          TweenLite.to(ugc5Item2, 1, {
            alpha: 0.4,
            delay: 1,
            onComplete: function onComplete() {
              return TweenLite.to(ugc5Item2, 2, {
                alpha: 1
              });
            }
          });
          TweenLite.to(ugc5Item3, 1, {
            alpha: 0.4,
            delay: 2,
            onComplete: function onComplete() {
              return TweenLite.to(ugc5Item3, 2, {
                alpha: 1
              });
            }
          });
          return setTimeout(function () {
            return _runUGC5Light();
          }, 5500);
        };
        _runUGC5Light();
        ugc5.alpha = 0;
        this.page6.addChild(ugc5);
        this.title = new Sprite(getTe(_CDN + ("img/ugc-title-" + UGCTITLE + ".png")));
        this.page6.addChild(this.title);
        this.ugcleftBtn = leftBtn = this.leftBtn();
        this.ugcrightBtn = rightBtn = this.rightBtn();
        this.page6.addChild(leftBtn, rightBtn);
        leftBtnEmpty = this.leftBtn();
        leftBtnEmpty.scale.set(2, 2);
        leftBtnEmpty.alpha = 0;
        // leftBtnEmpty.width = 200 
        // leftBtnEmpty.height = 200 
        // leftBtnEmpty.x = 0
        // leftBtnEmpty.y = 1333/2 - 100
        rightBtnEmpty = this.rightBtn();
        rightBtnEmpty.scale.set(2, 2);
        rightBtnEmpty.alpha = 0;
        // rightBtnEmpty.width = 200 
        // rightBtnEmpty.height = 200 
        // rightBtnEmpty.x = 750-200
        // rightBtnEmpty.y = 1333/2 - 100
        leftBtnEmpty.buttonMode = true;
        leftBtnEmpty.interactive = true;
        leftBtnEmpty.touchstart = leftBtnEmpty.click = function (data) {
          return _this15.selectUGC(true);
        };
        rightBtnEmpty.buttonMode = true;
        rightBtnEmpty.interactive = true;
        rightBtnEmpty.touchstart = rightBtnEmpty.click = function (data) {
          return _this15.selectUGC(false);
        };
        this.page6.addChild(leftBtnEmpty, rightBtnEmpty);
        _runArrow = function runArrow() {
          leftBtn.x = leftBtn.dx;
          leftBtn.alpha = 1;
          rightBtn.x = rightBtn.dx;
          rightBtn.alpha = 1;
          TweenLite.to(leftBtn, 2, {
            alpha: 0,
            x: main.biger ? 750 * 0.1 : 0,
            delay: 1
          });
          return TweenLite.to(rightBtn, 2, {
            alpha: 0,
            x: main.biger ? 750 * 0.9 : 750,
            delay: 1,
            onComplete: function onComplete() {
              return _runArrow();
            }
          });
        };
        _runArrow();
        this.qrcode = qrcode = new Sprite(getTe(_CDN + "img/qrcode.png"));
        qrcode.y = 1333 - qrcode.height;
        qrcode.visible = false;
        return this.page6.addChild(qrcode);
      }
    }, {
      key: "selectUGC",
      value: function selectUGC() {
        var puls = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        var callback = arguments[1];

        var i, item, k, results;
        if (!(this.page6 != null && this.page6.alpha >= 1)) {
          return false;
        }
        if (puls) {
          this.ugcIndex++;
        } else {
          this.ugcIndex--;
        }
        if (this.ugcIndex > 5) {
          this.ugcIndex = 1;
        }
        if (this.ugcIndex < 1) {
          this.ugcIndex = 5;
        }
        results = [];
        for (i = k = 1; k <= 5; i = ++k) {
          item = this["ugc" + i];
          if (i === this.ugcIndex) {
            results.push(TweenLite.to(item, 0.5, {
              alpha: 1,
              delay: 0.1,
              onComplete: function onComplete() {
                return callback && callback();
              }
            }));
          } else {
            results.push(TweenLite.to(item, 0.5, {
              alpha: 0
            }));
          }
        }
        return results;
      }
    }, {
      key: "get",
      value: function get() {
        this.qrcode.visible = true;
        this.ugcleftBtn.visible = false;
        this.ugcrightBtn.visible = false;
        this.app.renderer.render(this.app.stage);
        this.qrcode.visible = false;
        this.ugcleftBtn.visible = true;
        this.ugcrightBtn.visible = true;
        return this.app.view.toDataURL();
      }

      // next page btn

    }, {
      key: "nextBtn",
      value: function nextBtn() {
        var arrow1, arrow2, btn;
        btn = new Container();
        arrow1 = new Sprite(getTe(_CDN + "img/arrow.png"));
        arrow1.x = 0;
        arrow1.y = 0;
        arrow2 = new Sprite(getTe(_CDN + "img/arrow.png"));
        arrow2.x = 0;
        arrow2.y = arrow2.height - 20;
        btn.addChild(arrow1);
        btn.addChild(arrow2);
        btn.x = 750 / 2 - arrow1.width / 2;
        btn.y = (1333 - this.trueh * 2) / 2 + this.trueh * 2 - arrow1.height * 3 - 20;
        return btn;
      }
    }, {
      key: "leftBtn",
      value: function leftBtn() {
        var arrow, btn;
        btn = new Container();
        arrow = new Sprite(getTe(_CDN + "img/arrow.png"));
        arrow.rotation = Math.PI / 2;
        btn.addChild(arrow);
        btn.x = arrow.width;
        if (main.biger) {
          btn.x += 750 * 0.05;
        }
        btn.dx = btn.x;
        console.log("leftBtn", btn.x);
        btn.y = 1333 / 2 - arrow.height / 2;
        return btn;
      }
    }, {
      key: "rightBtn",
      value: function rightBtn() {
        var arrow, btn;
        btn = new Container();
        arrow = new Sprite(getTe(_CDN + "img/arrow.png"));
        arrow.rotation = -Math.PI / 2;
        btn.addChild(arrow);
        btn.x = 750 - arrow.width;
        if (main.biger) {
          btn.x -= 750 * 0.05;
        }
        btn.dx = btn.x;
        console.log("rightBtn", btn.x);
        btn.y = 1333 / 2 + arrow.height;
        return btn;
      }
    }, {
      key: "symbolRun",
      value: function symbolRun(icons, detail) {
        var icon, k, len1, results;
        // return false unless @.ugc1.alpha >= 1
        results = [];
        for (k = 0, len1 = icons.length; k < len1; k++) {
          icon = icons[k];
          icon.y -= icon.speed;
          if (icon.direction) {
            icon.alpha += 0.01;
            if (icon.alpha >= 1) {
              results.push(icon.direction = false);
            } else {
              results.push(void 0);
            }
          } else {
            icon.alpha -= 0.01;
            if (icon.alpha <= -0.1) {
              icon.direction = true;
              results.push(icon.y = icon.dy);
            } else {
              results.push(void 0);
            }
          }
        }
        return results;
      }
    }, {
      key: "hideCloud",
      value: function hideCloud() {
        var cloud, i, k, ref, results, y;
        results = [];
        for (i = k = 0, ref = this.clouds.length; 0 <= ref ? k < ref : k > ref; i = 0 <= ref ? ++k : --k) {
          cloud = this.clouds[i];
          y = cloud.y + Math.random() * 100 - 50;
          results.push(TweenLite.to(cloud, 3.5, {
            x: cloud.dex + Math.random() * 100 - 50,
            alpha: 1,
            y: y,
            delay: i * 0.1
          }));
        }
        return results;
      }
    }, {
      key: "showCloud",
      value: function showCloud() {
        var cloud, i, k, m, ref, results, size, to, y;
        // m = cloud.x > 750/2
        // if Math.random() > 0.5
        //   m = cloud.x < 750/2
        m = Math.random() > 0.5;
        size = 100;
        results = [];
        for (i = k = 0, ref = this.clouds.length; 0 <= ref ? k < ref : k > ref; i = 0 <= ref ? ++k : --k) {
          cloud = this.clouds[i];
          if (Math.random() > 0.5) {
            cloud.dx = to = 900 + Math.random() * size;
          } else {
            cloud.dx = to = -150 - Math.random() * size;
          }
          // if m 
          //   if cloud.dex >= 750/2
          //     cloud.dx = to = 900 + Math.random()*(size)
          //   else
          //     cloud.dx = to = -150 - Math.random()*(size)
          // else
          //   if cloud.dex <= 750/2
          //     cloud.dx = to = 900 + Math.random()*(size)
          //   else
          //     cloud.dx = to = -150 - Math.random()*(size)
          y = cloud.dey + Math.random() * (size * 2 * 2) - size * 2;
          results.push(TweenLite.to(cloud, 3.5, {
            x: to,
            y: y,
            alpha: 0.6,
            delay: i * 0.1
          }));
        }
        return results;
      }
    }, {
      key: "loopBgStar",
      value: function loopBgStar(detail) {
        var k, len1, ref, results, star;
        ref = this.largeStars;
        results = [];
        for (k = 0, len1 = ref.length; k < len1; k++) {
          star = ref[k];
          if (star.direction) {
            star.alpha -= 0.06 * star.speed * detail;
            if (star.alpha <= 0) {
              results.push(star.direction = !star.direction);
            } else {
              results.push(void 0);
            }
          } else {
            star.alpha += 0.02 * star.speed * detail;
            if (star.alpha >= star.wait) {
              results.push(star.direction = !star.direction);
            } else {
              results.push(void 0);
            }
          }
        }
        return results;
      }
    }, {
      key: "loopLoading",
      value: function loopLoading(detail) {
        var k, len1, ref, results, star;
        if (!this.default.running) {
          return false;
        }
        this.icon.rotation += 0.02 * detail;
        ref = this.stars;
        results = [];
        for (k = 0, len1 = ref.length; k < len1; k++) {
          star = ref[k];
          star.y += star.speed * detail;
          star.alpha -= 0.002 * star.speed * detail;
          if (star.alpha <= 0) {
            star.y = 1333 / 2 - 100;
            results.push(star.alpha = 1);
          } else {
            results.push(void 0);
          }
        }
        return results;
      }
    }, {
      key: "loopCloud",
      value: function loopCloud(detail) {
        var cloud, k, len1, ref, results;
        if (!this.default.running) {
          return false;
        }
        ref = this.clouds;
        results = [];
        for (k = 0, len1 = ref.length; k < len1; k++) {
          cloud = ref[k];
          if (cloud.direction) {
            cloud.x += (0.1 + Math.random() * 0.4) * detail;
            if (cloud.x > cloud.dx + 20) {
              results.push(cloud.direction = false);
            } else {
              results.push(void 0);
            }
          } else {
            cloud.x -= (0.1 + Math.random() * 0.2) * detail;
            if (cloud.x + 20 < cloud.dx) {
              results.push(cloud.direction = true);
            } else {
              results.push(void 0);
            }
          }
        }
        return results;
      }
    }]);

    return sulwhasoo;
  }();

  ;

  sulwhasoo.prototype.list = [];

  sulwhasoo.prototype.loadCount = 0;

  sulwhasoo.prototype.animation = false;

  sulwhasoo.prototype.Index = 0;

  sulwhasoo.prototype.ugcIndex = 1;

  sulwhasoo.prototype.progress = 0;

  sulwhasoo.prototype.maxProgress = 0;

  sulwhasoo.prototype.starLoad = false;

  sulwhasoo.prototype.cloudTime = 1.2;

  sulwhasoo.prototype.default = {
    w: 750,
    h: 1333,
    canvasH: 510,
    running: true
  };

  return sulwhasoo;
}.call(undefined);

// @codekit-prepend "../../libs/coffee/loadWechatConfig"
// @codekit-prepend "../../libs/coffee/IsPC"
// @codekit-prepend "../../libs/coffee/get"
// @codekit-prepend "../../libs/vue/vue-player"
// @codekit-prepend "./pixi-music-icon"
axios.defaults.withCredentials = true;

String.prototype.gblen = function () {
  var i, k, len, ref;
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

sulwhasooCache = null;

sys = "";

ugcCache = null;

sended = [false, false];

_CDN = "./";

neteaseShareImage = function neteaseShareImage() {
  var picUrl, redirectUrl, title1;
  title1 = "点击获取你的治愈音乐瓶";
  picUrl = "https://image.giccoo.com/upload/sulwhasoo/" + main.shareImageLink + "@!large";
  redirectUrl = "https://m.giccoo.com/sulwhasoo/";
  // console.log picUrl,"orpheus://sharepic?picUrl="+encodeURIComponent(picUrl)+"&shareUrl="+encodeURIComponent(redirectUrl)+"&wbDesc="+encodeURIComponent(title1)+"&qqDesc="+encodeURIComponent(title1)
  return window.location.href = "orpheus://sharepic?picUrl=" + encodeURIComponent(picUrl) + "&shareUrl=" + encodeURIComponent(redirectUrl) + "&wbDesc=" + encodeURIComponent(title1) + "&qqDesc=" + encodeURIComponent(title1);
};

window.onload = function () {
  if ($_GET["debug"]) {
    alert("onload");
  }
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
        title: "点击获取你的治愈音乐瓶",
        desc: "探索治愈音乐瓶，获取专属于你的小惊喜",
        link: "https://activity.music.163.com/sulwhasoo/",
        imgUrl: "https://activity.music.163.com/sulwhasoo/img/ico.jpg",
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
  if ($_GET["debug"]) {
    alert("sys:" + sys);
  }
  _public = new Vue({
    el: "#public",
    data: {
      note: true
    }
  });
  if ($_GET["debug"]) {
    alert("vue load");
  }
  return init();
};

init = function init() {
  var TrueH, TrueW, canvasH, navH, smaller;
  TrueH = document.documentElement.clientHeight;
  TrueW = document.documentElement.clientWidth;
  if (TrueW >= 640) {
    // console.log new Date().getTime() - startTime
    // document.body.style.height = TrueH+"px"
    // document.documentElement.className += " iphone4" if TrueW/TrueH >= 0.64
    TrueW = 640;
  }
  if (TrueH >= 1138) {
    TrueH = 1138;
  }
  // smaller = TrueW/640*1138 > TrueH
  navH = Math.ceil(TrueW / 640 * 94 / TrueH * 100);
  canvasH = document.getElementById("canvas").clientHeight;
  if (canvasH < TrueH) {
    smaller = true;
  }
  main = new Vue({
    el: "#main",
    data: {
      biger: false,
      wy: false,
      mounted: false,
      ugc: null,
      ugcSave: null,
      loading: false,
      shareImageLink: null,
      ugcBtn: false,
      pushed: false,
      default: {
        x: 0,
        animated: false
      },
      XY: "pageX",
      startX: 0,
      startY: 0,
      touching: true,
      touchmoving: false
    },
    watch: {
      ugcBtn: function ugcBtn(o, n) {
        console.log(o, n);
        if (o !== n) {
          if (!this.wy) {
            return this.ugcSave = sulwhasooCache.get();
          }
        }
      }
    },
    methods: {
      selectUGC: function selectUGC(up) {
        var _this16 = this;

        if (sulwhasooCache != null && sulwhasooCache.Index === 6) {
          sulwhasooCache.selectUGC(up, function () {});
          return setTimeout(function () {
            if (!_this16.wy) {
              return _this16.ugcSave = sulwhasooCache.get();
            }
          }, 600);
        }
      },
      start: function start(evt) {
        var touches;
        touches = evt.touches;
        this.startX = touches[0].clientX;
        this.startY = touches[0].clientY;
        this.touching = true;
        return this.touchmoving = 0;
      },
      move: function move(evt) {
        var nowX, nowY;
        if (!this.touching) {
          return false;
        }
        this.touchmoving += 1;
        nowX = evt.touches[0].clientX;
        nowY = evt.touches[0].clientY;
        if ((nowX - this.startX) * (nowX - this.startX) > (nowY - this.startY) * (nowY - this.startY) * 2) {
          if (nowX - this.startX > 80 && this.pagenow !== 0) {
            this.selectUGC(true);
            this.touching = false;
            return console.log("uuuu");
          } else if (nowX - this.startX < -80) {
            this.selectUGC(false);
            this.touching = false;
            return console.log("nnnn");
          }
        }
      },
      end: function end(evt) {
        if (this.touchmoving <= 2) {
          return false;
        }
        // console.log @pageUpDown,@touching,@touchmoving
        this.touching = false;
        return this.touchmoving = 0;
      },
      share: function share() {
        var data, image;
        image = sulwhasooCache.get();
        data = {
          image: image,
          folder: "sulwhasoo"
        };
        if (image == null) {
          return this.faild();
        }
        if (this.loading) {
          return false;
        }
        // @.ugcLoadPageShow = true
        this.loading = true;
        return axios.post(imageurl, data).then(function (msg) {
          if (msg.data.recode === 200) {
            return main.success(msg.data);
          } else {
            return main.faild();
          }
        }).catch(function (e) {
          // alert e
          return main.faild();
        });
      },
      success: function success(data) {
        console.log("post success");
        this.loading = false;
        this.shareImageLink = data.info;
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
      sulwhasooCache = new sulwhasoo({
        el: "canvas"
      });
      this.mounted = true;
      canvasH = document.getElementById("canvas").clientHeight;
      // setTimeout =>
      // 	canvasH = document.getElementById("canvas").clientHeight
      // 	@.biger = true if canvasH < TrueH
      // 	console.log canvasH,TrueH,@.biger
      // ,200
      return console.log("mounted");
    }
  });
  if ($_GET["debug"]) {
    alert("main load");
  }
  // axios.get "//qa-chip.igame.163.com/api/activity/sulwhasoo/userInfo?type=0"
  return axios.get("//music.163.com/api/activity/sulwhasoo/userInfo?type=1").then(function (msg) {
    var d, date;
    d = msg.data;
    // d = {"code":200,"msg":null,"data":{"latestSongName":"Strawberries & Cigarettes","latestTime":1522764106000,"latestShareSongName":"生命是场马拉松","hottestSongName":"Strawberries & Cigarettes","hottestSongArtistName":"Various Artists","hottestSongCount":18,"hottestArtistSong":["Cry On My Shoulder","Here We Are Again","Річка"]}}
    // console.log d
    if (d.code === 200) {
      if (d.data.latestSongName != null && d.data.latestSongName !== "") {
        lastName = d.data.latestSongName;
      }
      if (d.data.latestShareSongName != null && d.data.latestShareSongName !== "") {
        shareName = d.data.latestShareSongName;
      }
      if (d.data.latestTime != null && d.data.latestTime > 100 && d.data.latestShareSongName !== "") {
        date = new Date(d.data.latestTime);
        lastDate = date.getFullYear() + "\u5E74" + (date.getMonth() + 1) + "\u6708" + date.getDate() + "\u65E5";
        return lastTime = timeDouble(date.getHours()) + ":" + timeDouble(date.getMinutes());
      }
    }
  }).catch(function (err) {
    if ($_GET["debug"]) {
      return alert("ajax load faild");
    }
  });
};

timeDouble = function timeDouble(text) {
  if (text > 10) {
    return text;
  }
  return "0" + text;
};
