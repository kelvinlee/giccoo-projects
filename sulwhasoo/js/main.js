var ANIMATION_END_NAME, ANIMATION_END_NAMES, Container, Graphics, IsPC, ParticleContainer, Sprite, TRANSITION_END_NAME, TRANSITION_END_NAMES, Text, Texture, TextureCache, VENDORS, _CDN, _public, autoDetectRenderer, css3Prefix, e, getId, getTe, i, images, imageurl, init, j, lastDate, lastName, lastTime, len1, loadWechatConfig, loader, loading, mTestElement, main, neteaseShareImage, options, passiveSupported, resource, resources, sended, shareName, sulwhasoo, sulwhasooCache, sys, ugcCache;

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
  if ((css3Prefix + "Transition") in mTestElement.style) {
    break;
  }
  css3Prefix = false;
}

if (css3Prefix) {
  TRANSITION_END_NAME = TRANSITION_END_NAMES[css3Prefix];
  ANIMATION_END_NAME = ANIMATION_END_NAMES[css3Prefix];
}

(function() {
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

loadWechatConfig = function() {
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
    get: function() {
      return passiveSupported = true;
    }
  });
  window.addEventListener("test", options, options);
  window.removeEventListener("test", options, options);
} catch (error) {
  e = error;
  passiveSupported = false;
}

IsPC = function() {
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
  data: function() {
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
    play: function() {
      var temp;
      temp = this.$emit('play', this);
      return this.playing = true;
    },
    pause: function() {
      var temp;
      temp = this.$emit('pause', this);
      this.audio.pause();
      return this.playing = false;
    },
    ended: function() {
      return this.playing = false;
    },
    change: function() {
      if (this.playing) {
        this.audio.pause();
        return this.stoped = true;
      } else {
        this.audio.play();
        this.stoped = false;
        return (typeof _hmt !== "undefined" && _hmt !== null) && _hmt.push(['_trackEvent', "adidas-originals-eqt", this.name, "play", "-"]);
      }
    }
  },
  // computed:
  mounted: function(el) {
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

getTe = function(id) {
  return resource[id].texture;
};

getId = function(id, link) {
  return loader.resources[link].textures[id];
};

// @codekit-prepend "../../libs/coffee/pixi-base"
_CDN = "./";

images = [_CDN + "img/that-girl.png", _CDN + "img/cloud-1.png", _CDN + "img/cloud-2.png", _CDN + "img/cloud-3.png", _CDN + "img/icon-symbol-1.png", _CDN + "img/icon-symbol-2.png", _CDN + "img/icon-symbol-3.png", _CDN + "img/icon-symbol-4.png", _CDN + "img/icon-symbol-5.png", _CDN + "img/point.png", _CDN + "img/product-border.png", _CDN + "img/product-item.png", _CDN + "img/product.png", _CDN + "img/product-light-1.png", _CDN + "img/product-light-2.png", _CDN + "img/product-bg.jpg", _CDN + "img/product-bg-end.jpg", _CDN + "img/page-1-title.png", _CDN + "img/page-2-title.png", _CDN + "img/page-3-title.png", _CDN + "img/page-4-title.png", _CDN + "img/page-5-title.png", _CDN + "img/page-6-title.png", _CDN + "img/moon.png", _CDN + "img/arrow.png", _CDN + "img/cd.png", _CDN + "img/cd-pointer.png", _CDN + "img/ball.png", _CDN + "img/bubble.png", _CDN + "img/light-1.png", _CDN + "img/light-2.png", _CDN + "img/light-3.png", _CDN + "img/ugc-1.png", _CDN + "img/ugc-2.png", _CDN + "img/ugc-2-1.png", _CDN + "img/ugc-3-1.png", _CDN + "img/ugc-4.png", _CDN + "img/ugc-4-1.png", _CDN + "img/ugc-5.png", _CDN + "img/ugc-5-1.png", _CDN + "img/ugc-5-2.png", _CDN + "img/ugc-5-3.png"];

lastDate = "2018年4月23日";

lastTime = "01:19";

lastName = "《我好想你》";

shareName = "《喜帖街》";

sulwhasoo = (function() {
  class sulwhasoo {
    constructor(arg) {
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
      if ((this.opts.class != null) && this.opts.class !== "") {
        this.app.view.className = this.opts.class;
      }
      this.stage = this.app.stage;
      document.getElementById(this.opts.el).appendChild(this.app.view);
      PIXI.loader.add([_CDN + "img/icon-loading.png", _CDN + "img/star.png"]).load(this.build.bind(this));
    }

    loaded(name) {
      var progress;
      this.loadCount++;
      progress = Math.ceil(this.loadCount / images.length * 100);
      if (progress >= 100) {
        return setTimeout(() => {
          return this.loadEnd();
        }, 1000);
      }
    }

    // loading page
    build() {
      var icon, k, size, star;
      this.loading = new Container();
      this.icon = icon = new Sprite(getTe(_CDN + "img/icon-loading.png"));
      icon.anchor.set(0.5, 0.5);
      icon.x = 750 / 2;
      icon.y = 1333 / 2 - 100;
      icon.rotation = 0;
      this.stars = [];
      for (i = k = 0; k < 8; i = ++k) {
        star = new Sprite(getTe(_CDN + "img/star.png"));
        star.anchor.set(0.5, 0.5);
        star.x = 750 / 2 - icon.width / 2 + (icon.width / i);
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
      if (this.opts.callback != null) {
        // @.app.ticker.add @.tween
        this.opts.callback();
      }
      // @.app.ticker.remove @._loopLoading
      PIXI.loader.add(images).use(this.loaded.bind(this)).load(this.build.bind(this));
      return this.animation = true;
    }

    // page 1
    page1() {
      var cloud, k, point, product, productBorder, title, woman, xylist;
      this.stage.removeChild(this.loading);
      this.cloud = new Container();
      this.cloud.alpha = 0;
      this.page = new Container();
      this.page2 = new Container();
      this.page2.alpha = this.page.alpha = 0;
      this.page2.x = this.page.x = 20;
      this.page2.y = this.page.y = 20;
      this.clouds = [];
      xylist = [
        {
          x: 750 / 2 - 100,
          y: 200
        },
        {
          x: 750 / 2 + 100,
          y: 420
        },
        {
          x: 750 / 2 - 100,
          y: 780
        },
        {
          x: 750 / 2 + 100,
          y: 1150
        },
        {
          x: 750 / 2 - 100,
          y: 1200
        }
      ];
      for (i = k = 0; k < 5; i = ++k) {
        cloud = new Sprite(getTe(_CDN + `img/cloud-${i % 3 + 1}.png`));
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
      point = new Sprite(getTe(_CDN + "img/point.png"));
      point.x = 350;
      point.y = 800;
      point.alpha = 0;
      this.page.addChild(point);
      productBorder = new Sprite(getTe(_CDN + "img/product-border.png"));
      productBorder.scale.set(0.7, 0.7);
      productBorder.x = 420;
      productBorder.y = 760;
      productBorder.alpha = 0;
      this.page.addChild(productBorder);
      product = new Sprite(getTe(_CDN + "img/product-item.png"));
      product.scale.set(0.7, 0.7);
      product.x = 420;
      product.y = 760;
      product.alpha = 0;
      product.buttonMode = true;
      product.interactive = true;
      product.touchstart = product.click = () => {
        console.log("click product", this.animation);
        if (this.animation) {
          return false;
        }
        return this.page1Out();
      };
      this.page.addChild(product);
      title = new Sprite(getTe(_CDN + "img/page-1-title.png"));
      title.y = 200;
      title.alpha = 0;
      this.page.addChild(title);
      this.stage.addChild(this.page);
      this.stage.addChild(this.page2);
      this.stage.addChild(this.cloud);
      return TweenLite.to(this.cloud, .5, {
        alpha: 1,
        onComplete: () => {
          TweenLite.to(this.page, 2.5, {
            x: 0,
            y: 0,
            alpha: 1,
            ease: Cubic.linear,
            onComplete: () => {
              var time;
              this.app.ticker.add(this.loopCloud.bind(this));
              time = 0.5;
              TweenLite.to(point, time, {
                x: 475,
                ease: Circ.easeIn,
                onComplete: () => {
                  return TweenLite.to(point, time, {
                    x: 590,
                    ease: Circ.easeOut,
                    onComplete: () => {
                      return TweenLite.to(point, time, {
                        x: 475,
                        ease: Circ.easeIn,
                        onComplete: () => {
                          return TweenLite.to(point, time, {
                            x: 350,
                            ease: Circ.easeOut
                          });
                        }
                      });
                    }
                  });
                }
              });
              return TweenLite.to(point, time, {
                y: 680,
                ease: Circ.easeOut,
                onComplete: () => {
                  return TweenLite.to(point, time, {
                    y: 800,
                    ease: Circ.easeIn,
                    onComplete: () => {
                      return TweenLite.to(point, time, {
                        y: 900,
                        ease: Circ.easeOut,
                        onComplete: () => {
                          TweenLite.to(productBorder, time * 3, {
                            alpha: 0.8
                          });
                          return TweenLite.to(point, time, {
                            y: 800,
                            ease: Circ.easeIn,
                            onComplete: () => {
                              return TweenLite.to(point, time, {
                                alpha: 0,
                                onComplete: () => {
                                  this.animation = false;
                                  TweenLite.to(product, time * 3, {
                                    alpha: 1,
                                    onComplete: () => {
                                      return this.productLight(productBorder);
                                    }
                                  });
                                  return TweenLite.to(title, time * 3, {
                                    alpha: 1,
                                    y: 1333 / 2 - title.height / 2 - 120
                                  });
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
            }
          });
          TweenLite.to(point, 1, {
            alpha: 1,
            delay: 1
          });
          return this.showCloud();
        }
      });
    }

    // 产品发光
    productLight(item) {
      if (!this.page.visible) {
        return false;
      }
      return TweenLite.to(item, .6, {
        alpha: 0.6,
        onComplete: () => {
          return TweenLite.to(item, .6, {
            alpha: 1,
            onComplete: () => {
              return this.productLight(item);
            }
          });
        }
      });
    }

    // page 1 移除
    page1Out() {
      this.hideCloud();
      // 跳过中间页
      // @.page2build()
      this.page6build();
      return TweenLite.to(this.page, .7, {
        alpha: 0,
        x: 20,
        y: 20,
        onComplete: () => {
          
          // @.page.removeChildren()
          return this.page.visible = false;
        }
      });
    }

    // page 2
    page2build() {
      var btn, btnRun, date, moon, self, time, title, titleBG;
      // @.page2
      this.animation = true;
      moon = new Sprite(getTe(_CDN + "img/moon.png"));
      moon.anchor.set(0.5, 0.01);
      moon.x = 750 / 2;
      moon.scale.set(1.01, 1.01);
      this.page2.addChild(moon);
      title = new Container();
      title.alpha = 0;
      titleBG = new Sprite(getTe(_CDN + "img/page-2-title.png"));
      title.addChild(titleBG);
      title.x = 190;
      title.y = 750;
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
      this.page2.addChild(title);
      btn = this.nextBtn();
      this.page2.addChild(btn);
      this.page2.buttonMode = true;
      this.page2.interactive = true;
      this.page2.touchstart = this.page2.click = (data) => {
        if (this.animation) {
          return false;
        }
        return this.page2Out();
      };
      TweenLite.to(this.page2, 1.2, {
        x: 0,
        y: 0,
        alpha: 1,
        delay: .7,
        onComplete: () => {
          this.showCloud();
          this.moonswing(moon);
          TweenLite.to(title, 1.6, {
            alpha: 1
          });
          this.animation = false;
          return btnRun();
        }
      });
      self = this;
      return btnRun = function() {
        var y;
        if (!self.page2.visible) {
          return false;
        }
        y = btn.y;
        return TweenLite.to(btn, 1.8, {
          y: y + 10,
          alpha: 0,
          onComplete: () => {
            btn.alpha = 1;
            btn.y = y;
            return btnRun();
          }
        });
      };
    }

    // 月亮摇摆
    moonswing(moon) {
      if (!this.page2.visible) {
        // moon.rotation
        return false;
      }
      return TweenLite.to(moon, 1.5, {
        rotation: 0.005,
        onComplete: () => {
          return TweenLite.to(moon, 1.5, {
            rotation: -0.005,
            onComplete: () => {
              return this.moonswing(moon);
            }
          });
        }
      });
    }

    // page 2 out
    page2Out() {
      this.hideCloud();
      // 跳过中间页
      this.page3build();
      return TweenLite.to(this.page2, .7, {
        alpha: 0,
        x: 20,
        y: 20,
        onComplete: () => {
          this.page2.removeChildren();
          return this.page2.visible = false;
        }
      });
    }

    // page 3
    page3build() {
      var btn, btnRun, cd, cdPointer, name, runCD, self, title, titleText;
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
      titleText = new Sprite(getTe(_CDN + "img/page-3-title.png"));
      title.x = 750 / 2 - titleText.width / 2;
      title.y = cd.height + 230;
      title.addChild(titleText);
      name = new Text(lastName, {
        fontFamily: 'Arial',
        fontSize: 44,
        fill: 0x2a985d,
        align: 'center'
      });
      // name.width = titleText.width
      name.y = 138;
      name.x = titleText.width / 2 - name.width / 2;
      title.addChild(name);
      this.page3.addChild(title);
      btn = this.nextBtn();
      this.page3.addChild(btn);
      this.stage.addChildAt(this.page3, 2);
      this.page3.buttonMode = true;
      this.page3.interactive = true;
      this.page3.touchstart = this.page3.click = (data) => {
        if (this.animation) {
          return false;
        }
        return this.page3Out();
      };
      TweenLite.to(this.page3, 1.2, {
        x: 0,
        y: 0,
        alpha: 1,
        delay: .7,
        onComplete: () => {
          this.showCloud();
          btnRun();
          this.animation = false;
          return TweenLite.to(cdPointer, 1.7, {
            rotation: 0,
            onComplete: function() {
              return runCD();
            }
          });
        }
      });
      self = this;
      runCD = function() {
        if (!self.page3.visible) {
          return false;
        }
        cd.rotation = 0;
        return TweenLite.to(cd, 4.7, {
          rotation: 1,
          onComplete: () => {
            return runCD();
          }
        });
      };
      return btnRun = function() {
        var y;
        if (!self.page3.visible) {
          return false;
        }
        y = btn.y;
        return TweenLite.to(btn, 1.8, {
          y: y + 10,
          alpha: 0,
          onComplete: () => {
            btn.alpha = 1;
            btn.y = y;
            return btnRun();
          }
        });
      };
    }

    page3Out() {
      this.hideCloud();
      // 跳过中间页
      this.page4build();
      return TweenLite.to(this.page3, .7, {
        alpha: 0,
        x: 20,
        y: 20,
        onComplete: () => {
          this.page3.removeChildren();
          return this.page3.visible = false;
        }
      });
    }

    page4build() {
      var ball, btn, btnRun, name, runBall, self, title, titleText;
      this.animation = true;
      this.page4 = new Container();
      this.page4.alpha = 0;
      this.page4.x = 20;
      this.page4.y = 20;
      ball = new Sprite(getTe(_CDN + "img/ball.png"));
      ball.x = 200;
      ball.y = 700;
      this.page4.addChild(ball);
      title = new Container();
      titleText = new Sprite(getTe(_CDN + "img/page-4-title.png"));
      title.x = 30;
      title.y = 630;
      title.alpha = 0;
      title.addChild(titleText);
      name = new Text(shareName, {
        fontFamily: 'Arial',
        fontSize: 42,
        fill: 0x2a985d,
        align: 'left'
      });
      // name.width = titleText.width
      name.y = 238;
      name.x = 58;
      title.addChild(name);
      this.page4.addChild(title);
      btn = this.nextBtn();
      this.page4.addChild(btn);
      this.stage.addChildAt(this.page4, 2);
      this.page4.buttonMode = true;
      this.page4.interactive = true;
      this.page4.touchstart = this.page4.click = (data) => {
        console.log("page 4");
        if (this.animation) {
          return false;
        }
        return this.page4Out();
      };
      TweenLite.to(this.page4, 1.2, {
        x: 0,
        y: 0,
        alpha: 1,
        delay: .7,
        onComplete: () => {
          this.showCloud();
          btnRun();
          this.animation = false;
          TweenLite.to(title, 0.7, {
            alpha: 1,
            delay: 2.7
          });
          TweenLite.to(ball, 3, {
            x: 300,
            ease: Cubic.easeIn,
            onComplete: () => {
              return runBall();
            }
          });
          return TweenLite.to(ball, 3, {
            y: 300,
            ease: Cubic.easeOut
          });
        }
      });
      // TweenLite.to ball,3,
      //   ease: Elastic.easeOut
      self = this;
      btnRun = function() {
        var y;
        if (!self.page4.visible) {
          return false;
        }
        y = btn.y;
        return TweenLite.to(btn, 1.8, {
          y: y + 10,
          alpha: 0,
          onComplete: () => {
            btn.alpha = 1;
            btn.y = y;
            return btnRun();
          }
        });
      };
      return runBall = function() {
        TweenLite.to(ball, 2, {
          y: 280,
          ease: Cubic.easeIn
        });
        return TweenLite.to(ball, 2, {
          x: 290,
          ease: Cubic.easeOut,
          onComplete: () => {
            TweenLite.to(ball, 1.5, {
              y: 300,
              ease: Cubic.easeOut
            });
            return TweenLite.to(ball, 1.5, {
              x: 300,
              ease: Cubic.easeIn,
              onComplete: () => {
                return runBall();
              }
            });
          }
        });
      };
    }

    page4Out() {
      this.hideCloud();
      // 跳过中间页
      this.page5build();
      return TweenLite.to(this.page4, .7, {
        alpha: 0,
        x: 20,
        y: 20,
        onComplete: () => {
          this.page4.removeChildren();
          return this.page4.visible = false;
        }
      });
    }

    page5build() {
      var icon, iconTimes, icons, k, light1, light2, light3, lightL, lightS, page5ShowStep1, page5ShowStep2, page5ShowStep3, product, productBG, productBGEnd, runSLlight, scaleX, self, title, titleLarge;
      this.animation = true;
      this.page5 = new Container();
      this.page5.alpha = 0;
      this.page5.x = 0;
      this.page5.y = 0;
      // btn = @.nextBtn()
      // @.page5.addChild btn
      this.stage.addChildAt(this.page5, 2);
      // @.page5.buttonMode = true
      // @.page5.interactive = true
      // @.page5.touchstart = @.page5.click = (data)=>
      //   return false if @.animation
      //   @.page5Out()
      TweenLite.to(this.page5, 1.2, {
        x: 0,
        y: 0,
        alpha: 1,
        delay: .7,
        onComplete: () => {
          this.showCloud();
          this.animation = false;
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
        icon = new Sprite(getTe(_CDN + `img/icon-symbol-${i + 1}.png`));
        icon.anchor.set(0.5, 0.5);
        icon.x = 750 / 2 - 80 + (160 / 5) * i;
        icon.y = -10 - (50 * i % 3);
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
      iconTimes = 0;
      page5ShowStep1 = () => {
        return TweenLite.to(title, 0.7, {
          alpha: 1,
          delay: 0.7,
          y: 1333 / 2,
          onComplete: () => {
            var cloud, l, len2, ref;
            ref = this.clouds;
            for (l = 0, len2 = ref.length; l < len2; l++) {
              cloud = ref[l];
              TweenLite.to(cloud, 0.5, {
                alpha: 0,
                delay: 2
              });
            }
            return TweenLite.to(title, 0.7, {
              alpha: 0,
              delay: 2,
              y: 1333 / 2 - 100,
              onComplete: () => {
                return page5ShowStep2();
              }
            });
          }
        });
      };
      page5ShowStep2 = () => {
        runSLlight();
        TweenLite.to(lightL, 0.5, {
          alpha: 1,
          delay: 0.4
        });
        TweenLite.to(lightS, 0.5, {
          alpha: 1,
          delay: 0.4
        });
        return TweenLite.to(product, 0.7, {
          alpha: 1,
          onComplete: () => {
            var l, results;
            results = [];
            for (i = l = 0; l < 5; i = ++l) {
              icon = icons[i];
              results.push(TweenLite.to(icon, 3 + Math.random() * (0.2 * (i + 1)), {
                y: 1333 / 2,
                delay: i % 3 * 0.2,
                onComplete: () => {
                  iconTimes++;
                  return page5ShowStep3();
                }
              }));
            }
            return results;
          }
        });
      };
      page5ShowStep3 = () => {
        if (iconTimes < 5) {
          return false;
        }
        console.log("run");
        TweenLite.to(productBG, 1, {
          alpha: 1,
          delay: 0.2
        });
        TweenLite.to(light2, 1, {
          alpha: 1,
          onUpdate: () => {
            return light2.scale.set(1, light2.alpha);
          }
        });
        TweenLite.to(light1, 0.7, {
          alpha: 1,
          delay: 0.4,
          onUpdate: () => {
            return light1.scale.set(light1.alpha, light1.alpha);
          }
        });
        TweenLite.to(light3, 0.5, {
          alpha: 1,
          delay: 0.8,
          onUpdate: () => {
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
          onComplete: () => {
            return TweenLite.to(titleLarge, 0.6, {
              alpha: 1,
              onComplete: () => {
                return setTimeout(() => {
                  return this.page5Out();
                }, 2000);
              }
            });
          }
        });
      };
      return runSLlight = function() {
        TweenLite.to(lightS, 0.7, {
          scaleX: 0.8,
          onUpdate: function() {
            return lightS.scale.set(lightS.scaleX, lightS.scaleX);
          },
          onComplete: function() {
            return TweenLite.to(lightS, 0.7, {
              scaleX: 1,
              onUpdate: function() {
                return lightS.scale.set(lightS.scaleX, lightS.scaleX);
              }
            });
          }
        });
        return TweenLite.to(lightL, 0.7, {
          scaleX: 1,
          onUpdate: function() {
            return lightL.scale.set(lightL.scaleX, lightL.scaleX);
          },
          onComplete: function() {
            return TweenLite.to(lightL, 0.7, {
              scaleX: 0.8,
              onUpdate: function() {
                return lightL.scale.set(lightL.scaleX, lightL.scaleX);
              },
              onComplete: function() {
                return runSLlight();
              }
            });
          }
        });
      };
    }

    page5Out() {
      this.hideCloud();
      this.page6build();
      return TweenLite.to(this.page5, .7, {
        alpha: 0,
        x: 20,
        y: 20,
        onComplete: () => {
          this.page5.removeChildren();
          return this.page5.visible = false;
        }
      });
    }

    page6build() {
      var k, star, ugc1, ugc1BG, ugc2, ugc2BG, ugc2Item, ugc3, ugc3BG, ugc3Item, ugc4, ugc4BG, ugc4Stars, ugc5, ugc5BG, ugc5Item1, ugc5Item2, ugc5Item3;
      this.animation = true;
      this.page6 = new Container();
      this.page6.alpha = 0;
      this.page6.x = 0;
      this.page6.y = 0;
      // btn = @.nextBtn()
      // @.page6.addChild btn
      this.stage.addChildAt(this.page6, 2);
      TweenLite.to(this.page6, 1.2, {
        x: 0,
        y: 0,
        alpha: 1,
        delay: .7,
        onComplete: () => {
          this.showCloud();
          return this.animation = false;
        }
      });
      ugc1 = new Container();
      ugc1BG = new Sprite(getTe(_CDN + "img/ugc-1.png"));
      ugc1BG.y = (1333 - ugc1BG.height) / 2;
      ugc1.addChild(ugc1BG);
      ugc1.alpha = 0;
      this.page6.addChild(ugc1);
      ugc2 = new Container();
      ugc2BG = new Sprite(getTe(_CDN + "img/ugc-2.png"));
      ugc2BG.y = (1333 - ugc1BG.height) / 2 + 150;
      ugc2.addChild(ugc2BG);
      ugc2Item = new Sprite(getTe(_CDN + "img/ugc-2-1.png"));
      ugc2Item.anchor.set(0.5, 1);
      ugc2Item.x = 750 / 2 - 80;
      ugc2Item.y = 1333 / 2 + 120 + 150;
      ugc2.addChild(ugc2Item);
      ugc2.alpha = 0;
      this.page6.addChild(ugc2);
      ugc3 = new Container();
      ugc3BG = new Sprite(getTe(_CDN + "img/cd.png"));
      ugc3BG.anchor.set(0.5, 0.5);
      ugc3BG.x = 750 / 2;
      ugc3BG.y = 1333 / 2;
      ugc3BG.scale.set(0.9, 0.9);
      ugc3.addChild(ugc3BG);
      ugc3Item = new Sprite(getTe(_CDN + "img/ugc-3-1.png"));
      ugc3Item.anchor.set(1, 0.5);
      ugc3Item.x = 800;
      ugc3Item.y = 1333 / 2 - 80;
      ugc3.addChild(ugc3Item);
      ugc3.alpha = 0;
      this.page6.addChild(ugc3);
      ugc4 = new Container();
      ugc4BG = new Sprite(getTe(_CDN + "img/ugc-4.png"));
      ugc4BG.anchor.set(0.5, 0.5);
      ugc4BG.x = 750 / 2;
      ugc4BG.y = 1333 / 2 - 100;
      ugc4.addChild(ugc4BG);
      ugc4Stars = [];
      for (i = k = 0; k < 5; i = ++k) {
        star = new Sprite(getTe(_CDN + "img/ugc-4-1.png"));
        star.anchor.set(0.5, 0.5);
        star.x = 800 + star.width * i;
        star.y = -50 - star.height * i;
        star.toX = -star.width;
        star.toY = 1333 / 2;
        ugc4Stars.push(star);
        ugc4.addChild(star);
      }
      ugc4.alpha = 0;
      this.page6.addChild(ugc4);
      ugc5 = new Container();
      ugc5BG = new Sprite(getTe(_CDN + "img/ugc-5.png"));
      ugc5Item1 = new Sprite(getTe(_CDN + "img/ugc-5-1.png"));
      ugc5Item2 = new Sprite(getTe(_CDN + "img/ugc-5-2.png"));
      ugc5Item3 = new Sprite(getTe(_CDN + "img/ugc-5-3.png"));
      ugc5.addChild(ugc5Item1, ugc5Item2, ugc5Item3, ugc5BG);
      return this.page6.addChild(ugc5);
    }

    // next page btn
    nextBtn() {
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

    hideCloud() {
      var cloud, k, len2, ref, results;
      ref = this.clouds;
      results = [];
      for (k = 0, len2 = ref.length; k < len2; k++) {
        cloud = ref[k];
        results.push(TweenLite.to(cloud, 1.5, {
          x: cloud.dex,
          alpha: 1
        }));
      }
      return results;
    }

    showCloud() {
      var cloud, k, len2, ref, results, to;
      ref = this.clouds;
      results = [];
      for (k = 0, len2 = ref.length; k < len2; k++) {
        cloud = ref[k];
        if (cloud.x > 750 / 2) {
          cloud.dx = to = 950;
        } else {
          cloud.dx = to = -200;
        }
        results.push(TweenLite.to(cloud, 1.5, {
          x: to,
          alpha: 0.6
        }));
      }
      return results;
    }

    loadEnd() {
      var _tar;
      _tar = this.loading;
      _tar.scaleS = 1;
      // console.log @.loading.scale = 1.5
      return TweenLite.to(_tar, .5, {
        scaleS: 2,
        onUpdate: (res) => {
          
          // console.log res.scaleS
          res.scale.set(res.scaleS, res.scaleS);
          _tar.x = -(750 / 2 * (res.scaleS - 1));
          _tar.y = -(1333 / 2 * (res.scaleS - 1));
          return _tar.alpha = 2 - res.scaleS;
        },
        onComplete: () => {
          this.app.ticker.remove(this._loopLoading);
          return this.page1();
        },
        onUpdateParams: [_tar]
      });
    }

    loopLoading(detail) {
      var k, len2, ref, results, star;
      if (!this.default.running) {
        return false;
      }
      this.icon.rotation += 0.02 * detail;
      ref = this.stars;
      results = [];
      for (k = 0, len2 = ref.length; k < len2; k++) {
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

    loopCloud(detail) {
      var cloud, k, len2, ref, results;
      if (!this.default.running) {
        return false;
      }
      ref = this.clouds;
      results = [];
      for (k = 0, len2 = ref.length; k < len2; k++) {
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

  };

  sulwhasoo.prototype.list = [];

  sulwhasoo.prototype.loadCount = 0;

  sulwhasoo.prototype.animation = false;

  sulwhasoo.prototype.default = {
    w: 750,
    h: 1333,
    running: true
  };

  return sulwhasoo;

}).call(this);


// @codekit-prepend "coffee/css3Prefix"
// @codekit-prepend "../../libs/coffee/requestanimation"
// @codekit-prepend "../../libs/coffee/loadWechatConfig"
// @codekit-prepend "../../libs/coffee/passiveSupport"
// @codekit-prepend "../../libs/coffee/IsPC"
// @codekit-prepend "../../libs/vue/vue-player"
// @codekit-prepend "./pixi-music-icon"

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
String.prototype.gblen = function() {
  var k, len, ref;
  len = 0;
  for (i = k = 0, ref = this.length; (0 <= ref ? k < ref : k > ref); i = 0 <= ref ? ++k : --k) {
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

neteaseShareImage = function() {
  var picUrl, redirectUrl, title1;
  title1 = "最幸运的你，藏在你爱的音乐里";
  picUrl = "https://image.giccoo.com/upload/beingmate/" + main.shareImageLink + "@!large";
  redirectUrl = "https://m.giccoo.com/beingmate/";
  // console.log picUrl,"orpheus://sharepic?picUrl="+encodeURIComponent(picUrl)+"&shareUrl="+encodeURIComponent(redirectUrl)+"&wbDesc="+encodeURIComponent(title1)+"&qqDesc="+encodeURIComponent(title1)
  return window.location.href = "orpheus://sharepic?picUrl=" + encodeURIComponent(picUrl) + "&shareUrl=" + encodeURIComponent(redirectUrl) + "&wbDesc=" + encodeURIComponent(title1) + "&qqDesc=" + encodeURIComponent(title1);
};

window.onload = function() {
  if (IsPC()) {
    document.getElementById("qrcode").className += " show";
    return false;
  }
  if (window.navigator.userAgent.indexOf("NeteaseMusic") > -1) {
    sys = "NeteaseMusic";
  } else {
    loadWechatConfig();
    wx.ready(function() {
      var shareContent;
      shareContent = {
        title: "最幸运的你，藏在你爱的音乐里",
        desc: "最幸运的你，藏在你爱的音乐里",
        link: "http://m.giccoo.com/beingmate/",
        imgUrl: "http://m.giccoo.com/beingmate/img/ico.jpg",
        success: function() {},
        // alert "success"
        cancel: function() {}
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
  return init();
};

init = function() {
  var TrueH, TrueW, navH, smaller;
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
  smaller = TrueW / 640 * 1138 > TrueH;
  navH = Math.ceil(TrueW / 640 * 94 / TrueH * 100);
  console.log(TrueW / TrueH < 0.52);
  return main = new Vue({
    el: "#main",
    data: {
      biger: TrueW / TrueH < 0.52,
      wy: false,
      mounted: false,
      ugc: null,
      ugcSave: null,
      shareImageLink: null,
      default: {
        x: 0,
        animated: false
      },
      XY: "pageY"
    },
    // watch:
    methods: {
      nextPage: function() {}
    },
    mounted: function() {
      if (sys === "NeteaseMusic") {
        this.wy = true;
      }
      // if not musicLineCache?
      sulwhasooCache = new sulwhasoo({
        el: "canvas"
      });
      this.mounted = true;
      return console.log("mounted");
    }
  });
};
