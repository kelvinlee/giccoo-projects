"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AnimatedSprite, Container, Graphics, ParticleContainer, Spr, Sprite, Text, Texture, TextureCache, _CDN, _shareLoaded, animationLine, animationVoice, autoDetectRenderer, getId, getTe, loadWechatConfig, loader, main, motionPath, resource, resources, setShareWeb, test;

animationVoice = function () {
  var animationVoice =
  /*#__PURE__*/
  function () {
    function animationVoice(arg) {
      _classCallCheck(this, animationVoice);

      this.opts = {
        el: "main",
        w: 640,
        h: 1138,
        count: 100,
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

    _createClass(animationVoice, [{
      key: "build",
      value: function build() {
        var i, j, ref;

        for (i = j = 0, ref = this.opts.count + 3; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
          this.add(i);
        }

        return this.app.ticker.add(this.loop.bind(this));
      }
    }, {
      key: "add",
      value: function add(i) {
        var grap, h, w, y;
        grap = new Graphics();
        grap.beginFill(this.opts.fillColor);
        h = Math.random() * this.opts.h * 0.95 + this.opts.h * 0.05;
        w = this.opts.w / (this.opts.count * 2);
        y = (this.opts.h - h) / 2;
        grap.drawRect(0, y, w, h);
        grap.x = -w * 2 * i;

        if (this.opts.defaultShow) {
          grap.x = w * 2 * i;
        }

        this.voices.push(grap);
        this.stage.addChild(grap);
        return grap;
      }
    }, {
      key: "rebuild",
      value: function rebuild(grap) {
        var h, w, y;
        grap.clear();
        grap.beginFill(this.opts.fillColor);
        grap.alpha = 1;
        h = Math.random() * this.opts.h * 0.95 + this.opts.h * 0.05;
        w = this.opts.w / (this.opts.count * 2);
        y = (this.opts.h - h) / 2;
        return grap.drawRect(0, y, w, h);
      }
    }, {
      key: "rebuildAll",
      value: function rebuildAll() {
        var grap, i, j, ref, results, w;
        results = [];

        for (i = j = 0, ref = this.voices.length; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
          grap = this.voices[i];
          this.rebuild(grap);
          w = this.opts.w / (this.opts.count * 2);
          results.push(grap.x = -w * 2 * i);
        }

        return results;
      }
    }, {
      key: "clear",
      value: function clear() {
        this.grap.clear();
        this.grap.x = 0;
        return this.default.x = 0;
      }
    }, {
      key: "stop",
      value: function stop() {
        this.clear();
        return this.moved = false;
      }
    }, {
      key: "pause",
      value: function pause() {
        return this.moved = false;
      }
    }, {
      key: "play",
      value: function play() {
        return this.moved = true;
      }
    }, {
      key: "loop",
      value: function loop(detail) {
        var grap, j, len, ref, results;

        if (!this.moved) {
          return false;
        }

        ref = this.voices;
        results = [];

        for (j = 0, len = ref.length; j < len; j++) {
          grap = ref[j];
          grap.x += this.opts.w / (this.opts.count * 3) * detail;

          if ((this.opts.w - grap.x) / this.opts.w * 100 <= 30) {
            grap.alpha -= 0.01 * detail;
          }

          if (grap.x > this.opts.w) {
            grap.x = 0;
            results.push(this.rebuild(grap));
          } else {
            results.push(void 0);
          }
        }

        return results;
      }
    }]);

    return animationVoice;
  }();

  ;
  animationVoice.prototype.default = {
    x: 0,
    y: 0,
    w: 640,
    h: 1138,
    preX: 0,
    ratio: 1,
    date: new Date().getTime()
  };
  animationVoice.prototype.voice = {
    x: 0,
    y: 0,
    w: 4,
    MaxH: 100
  };
  animationVoice.prototype.voices = [];
  animationVoice.prototype.moved = false;
  return animationVoice;
}.call(void 0);

loadWechatConfig = function loadWechatConfig() {
  var hm, s, url;
  url = encodeURIComponent(window.location.href.split("#")[0]);
  hm = document.createElement('script');
  hm.src = "//api.giccoo.com/api/config?url=" + url;
  s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(hm, s);
};

motionPath = function () {
  var motionPath =
  /*#__PURE__*/
  function () {
    function motionPath(arg) {
      _classCallCheck(this, motionPath);

      this.opts = {
        el: "main",
        path: "img/path.png",
        w: 640,
        h: 640,
        count: 100,
        class: "",
        fillColor: 0x66CCFF
      };
      this.opts = Object.assign(this.opts, arg); // @image = image = new Image()
      // image.src = @.opts.path
      // image.onload = @.readPath.bind @

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
      PIXI.loader.add([this.opts.path]).load(this.build.bind(this));
    }

    _createClass(motionPath, [{
      key: "build",
      value: function build() {
        var canvas, ctx, grap, i, image, imageData, j, k, l, path, ref, ref1, ref2, x, y;
        canvas = document.createElement("canvas");
        path = new Sprite(resources[this.opts.path].texture);
        image = path._texture.baseTexture.source;
        canvas.width = image.width;
        canvas.height = image.height;
        ctx = canvas.getContext("2d");
        ctx.drawImage(image, 0, 0, image.width, image.height); // imageData = ctx.getImageData(0, 0, @.image.width, @.image.height).data

        for (x = j = 0, ref = image.width; 0 <= ref ? j <= ref : j >= ref; x = 0 <= ref ? ++j : --j) {
          for (y = k = 0, ref1 = image.height; 0 <= ref1 ? k <= ref1 : k >= ref1; y = 0 <= ref1 ? ++k : --k) {
            imageData = ctx.getImageData(x, y, 1, 1).data;

            if (imageData[0] !== 0) {
              this.path.push({
                x: x,
                y: y
              });
            }
          }
        } // # 冒泡排序
        // paths = []
        // paths.push @.path[0]
        // clonePath = @.path.concat()
        // for i in [1...@.path.length]
        //   last = paths[paths.length-1]
        //   start = paths.length
        //   for j in [0...clonePath.length-1]
        //     # console.log Math.abs( (clonePath[j].x+clonePath[j].y) - (last.x+last.y) )
        //     if Math.abs(clonePath[j].x - last.x) <= 3 and Math.abs(clonePath[j].y - last.y) <= 3
        //     # if Math.abs( (clonePath[j].x+clonePath[j].y) - (last.x+last.y) ) <= 5
        //       paths.push clonePath[j]
        //       clonePath.splice j,1
        //       break
        // console.log paths
        // @.path = paths
        // # 对比排序
        // @.path.sort (a,b)->
        //   return a.y - b.y if Math.abs(a.x-b.x) <= 1 and Math.abs(a.y-b.y) <= 1
        //   return a.x - b.x


        grap = new Graphics();
        grap.beginFill(this.opts.fillColor);
        grap.lineStyle(2, this.opts.fillColor, 1);
        grap.moveTo(this.path[0].x, this.path[0].y);

        for (i = l = 1, ref2 = this.path.length; 1 <= ref2 ? l < ref2 : l > ref2; i = 1 <= ref2 ? ++l : --l) {
          grap.lineTo(this.path[i].x, this.path[i].y);
        }

        this.stage.addChild(grap);
        this.app.renderer.render(this.app.stage); // path = new Sprite resources[@.opts.path].texture
        // @.stage.addChild path
        // @.app.renderer.render @.app.stage
        // pixels = @.app.renderer.plugins.extract.pixels()
        // for i in [0...(640*640)]
        //   r = pixels[4*i+0]
        //   g = pixels[4*i+1]
        //   b = pixels[4*i+2]
        //   if r isnt 0
        //     @.path.push {x: i%640,y: Math.floor(i/640)}
        // console.log start
        // next = true
        // while next
        //   n = @.path.length-1
        //   prev = @.path[n]
        //   out = false
        //   for x in [-1..1]
        //     for y in [-1..1]
        //       imageData = ctx.getImageData(prev.x+x, prev.y+y, 1, 1).data
        //       if imageData[0] isnt 0 and prev.x isnt prev.x+x and prev.y isnt prev.y+y
        //         @.path.push {x: prev.x+x, y: prev.y+y}
        //         out = true
        //         break
        //     break if out
        //   if n >= (@.path.length - 1) or @.path.length > 2000
        //     next = false

        return console.log("end", this.path);
      } // @.path.sort (a,b)->
      //   return a.x < b.x
      //   m = a.x+a.y
      //   n = b.x+b.y
      //   return not Math.abs(m-n) > 5
      //   return Math.abs(a.x+a.y-b.x-b.y) > 5
      // @.writeLine()

    }, {
      key: "writeLine",
      value: function writeLine() {
        var i, j, m, n, ref, results;
        this.n = 0;
        results = [];

        for (i = j = 0, ref = this.path.length - 1; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
          m = this.path[i].x + this.path[i].y;
          n = this.path[i + 1].x + this.path[i + 1].y;

          if (Math.abs(m - n) > 5) {
            results.push(console.log(i, this.path[i], this.path[i + 1]));
          } else {
            results.push(void 0);
          }
        }

        return results;
      }
    }]);

    return motionPath;
  }();

  ;
  motionPath.prototype.path = [];
  return motionPath;
}.call(void 0);

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

Spr = function Spr(id) {
  return new Sprite(getTe(id));
};

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

Vue.component("mp4", {
  template: '<div class="video"> <div v-if="andriod" class="icon-play" :class="{hide: playing, pause: !playing}" @click="change"> <div class="icon"> <svg v-show="!playing" height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ytp-id-39"></use><path class="ytp-svg-fill" d="M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z"></path></svg> <svg v-show="playing" height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ytp-id-40"></use><path class="ytp-svg-fill" d="M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z"></path></svg> </div> </div> <!--  --> <video v-if="!playsinline" :width="width" :height="height" :controls="controls" :src="src" :id="videoid" :poster="poster"></video> <video v-if="playsinline" :class="{hide: andriod}" :width="width" :height="height" :controls="controls" :src="src" :id="videoid" :poster="poster" x5-video-player-type="h5" x5-video-player-fullscreen="true" x-webkit-airplay="allow" webkit-playsinline playsinline></video> <canvas v-if="andriod" :id="canvasid" :width="width" :height="height" @click="change"></canvas> </div>',
  data: function data() {
    return {
      playing: false,
      stoped: false,
      andriod: false
    };
  },
  props: {
    playsinline: {
      default: false
    },
    controls: {
      default: false
    },
    videoid: {
      default: "video"
    },
    src: {
      default: "./mp3/bgm.mp3"
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
    poster: {
      default: false
    },
    width: {
      default: 1920
    },
    height: {
      default: 1080
    }
  },
  computed: {
    canvasid: function canvasid() {
      return this.videoid + "-canvas";
    }
  },
  // iconNow: ->
  // 	return if !@playing then @iconPlay else @iconStop
  methods: {
    play: function play() {
      if (this.video) {
        this.video.play();
      }

      this.playing = true;
      return this.$emit("play", {
        playing: true
      });
    },
    pause: function pause() {
      this.playing = false;
      return this.$emit("pause", {
        playing: false
      });
    },
    stop: function stop() {
      if (this.video) {
        this.video.pause();
      }

      return this.$emit("stop", {
        playing: false
      });
    },
    ended: function ended() {
      return this.playing = false;
    },
    change: function change() {
      if (this.playing) {
        this.video.pause();
        return this.stoped = true;
      } else {
        this.video.play();
        this.stoped = false;
        return this.animate();
      }
    },
    initCanvas: function initCanvas() {
      var canvas, context, poster;
      canvas = document.getElementById(this.canvasid);
      context = canvas.getContext('2d');

      if (this.poster) {
        poster = new Image();
        poster.src = this.poster;
        return poster.onload = function () {
          return context.drawImage(poster, 0, 0, canvas.width, canvas.height);
        };
      }
    },
    animate: function animate() {
      var canvas, context;
      canvas = document.getElementById(this.canvasid);

      if (!canvas) {
        return false;
      }

      context = canvas.getContext('2d');
      context.drawImage(this.video, 0, 0, canvas.width, canvas.height);

      if (!this.stoped) {
        return requestAnimationFrame(this.animate.bind(this));
      }
    }
  },
  mounted: function mounted(el) {
    var _this = this;

    var isAndroid, u;
    u = navigator.userAgent;
    isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;
    this.video = document.getElementById(this.videoid);
    this.video.addEventListener("pause", this.pause.bind(this));
    this.video.addEventListener("playing", this.play.bind(this));
    this.video.addEventListener("ended", this.ended.bind(this));

    if (isAndroid && this.playsinline) {
      this.andriod = true;
      return setTimeout(function () {
        return _this.initCanvas();
      }, 20);
    }
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

Spr = function Spr(id) {
  return new Sprite(getTe(id));
};

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

Spr = function Spr(id) {
  return new Sprite(getTe(id));
};

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

Spr = function Spr(id) {
  return new Sprite(getTe(id));
};

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

Spr = function Spr(id) {
  return new Sprite(getTe(id));
};

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

Spr = function Spr(id) {
  return new Sprite(getTe(id));
};

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
} // @codekit-prepend "../../libs/pixi/voice"
// @codekit-prepend "../../libs/coffee/loadWechatConfig"
// @codekit-prepend "../../libs/pixi/motionpath"
// @codekit-prepend "../../libs/coffee/pixi-base"
// @codekit-prepend "../../libs/vue/vue-video"


_CDN = "./";
test = {};
main = null;

animationLine = function () {
  var animationLine =
  /*#__PURE__*/
  function () {
    function animationLine(arg) {
      _classCallCheck(this, animationLine);

      this.default.h = document.documentElement.clientHeight;
      this.default.w = document.documentElement.clientWidth;
      this.default.ratio = 640 / this.default.w;
      this.app = new PIXI.Application({
        width: 640,
        height: 1138,
        transparent: true,
        preserveDrawingBuffer: true
      });
      this.app.view.className = "ugcCanvas";
      this.stage = this.app.stage;
      document.getElementById('main').appendChild(this.app.view);
      this.start = this.start.bind(this);
      this.move = this.move.bind(this);
      this.end = this.end.bind(this); // @.app.view.addEventListener "touchstart", @.start, false
      // @.app.view.addEventListener "touchmove", @.move, false
      // @.app.view.addEventListener "touchend", @.end, false

      PIXI.loader.add([]).load(this.build.bind(this));
    }

    _createClass(animationLine, [{
      key: "build",
      value: function build() {
        var line;
        line = this.line = new Graphics();
        this.line.speed = 5;
        this.line.direction = Math.random() * (Math.PI / 2);
        this.line.moveTo(0, this.default.h / 2);
        this.default.y = this.default.h / 2;
        this.stage.addChild(this.line);
        this.default.MaxX = this.default.changX;
        this.default.centerY = this.default.h / 2;
        return this.app.ticker.add(this.loop.bind(this));
      }
    }, {
      key: "loop",
      value: function loop(detail) {
        this.default.x += this.line.speed;
        this.default.y += Math.cos(this.line.direction) * this.line.speed;
        this.line.lineStyle(4, 0x99CCFF, 1);
        this.line.lineTo(this.default.x, this.default.y);

        if (this.default.x >= this.default.MaxX) {
          this.default.MaxX = this.default.MaxX + this.default.changX;
          this.line.direction = Math.random() * Math.PI;
        }

        if (this.default.y >= this.default.centerY + this.default.MaxH) {
          this.default.y = this.default.centerY + this.default.MaxH;
        }

        if (this.default.y <= this.default.centerY - this.default.MaxH) {
          this.default.y = this.default.centerY - this.default.MaxH;
        } //   @.line.direction = Math.random()*(Math.PI/2)
        // console.log @.default.y+@.default.MaxH,@.default.y


        if (this.default.x >= 320) {
          return this.line.x = -(this.default.x - 320);
        }
      } // console.log @.default

    }, {
      key: "start",
      value: function start(evt) {
        var touch; // console.log @,evt

        touch = evt.touches != null ? evt.touches[0] : evt;
        this.default.x = touch.pageX * this.default.ratio;
        this.default.y = touch.pageY * this.default.ratio;
        this.line.lineStyle(4, 0x99CCFF, 1);
        return this.line.moveTo(this.default.x, this.default.y);
      }
    }, {
      key: "move",
      value: function move(evt) {
        var touch;
        touch = evt.touches != null ? evt.touches[0] : evt;
        this.line.lineStyle(4, 0x99CCFF, 1);
        return this.line.lineTo(touch.pageX * this.default.ratio, touch.pageY * this.default.ratio);
      }
    }, {
      key: "end",
      value: function end(evt) {}
    }, {
      key: "removeTouch",
      value: function removeTouch() {
        this.app.view.removeEventListener("touchstart", this.start);
        this.app.view.removeEventListener("touchmove", this.move);
        return this.app.view.removeEventListener("touchend", this.end);
      }
    }]);

    return animationLine;
  }();

  ;
  animationLine.prototype.default = {
    x: 0,
    y: 0,
    w: 640,
    h: 1138,
    MaxX: 0,
    centerY: 0,
    MaxH: 100,
    changX: 80,
    preX: 0,
    ratio: 1
  };
  return animationLine;
}.call(void 0);

window.onload = function () {
  setShareWeb("Test", "Test", "http://m.giccoo.com/test/");
  return main = new Vue({
    el: "#main",
    data: {
      progress: 0,
      mounted: false,
      progressOn: 0,
      localId: ""
    },
    methods: {
      startRecord: function startRecord() {
        console.log("startRecord");
        return wx.startRecord();
      },
      stopRecord: function stopRecord() {
        console.log("stopRecord");
        return wx.stopRecord({
          success: function success(res) {
            return main.localId = res.localId;
          },
          fail: function fail(res) {
            return console.log(JSON.stringify(res));
          }
        });
      },
      playRecord: function playRecord() {
        console.log("playRecord");
        return wx.playVoice({
          localId: this.localId
        });
      }
    },
    mounted: function mounted() {
      return wx.onVoiceRecordEnd({
        complete: function complete(res) {
          return main.localId = res.localId;
        }
      });
    }
  });
};

_shareLoaded = false;

setShareWeb = function setShareWeb(title, desc, link) {
  var shareContent, shareData, sys;
  shareData = {
    name: 'kiehls',
    title: title,
    subTitle: desc,
    text: '',
    picUrl: 'http://m.giccoo.com/kiehls/img/ico.jpg',
    link: link
  };
  shareContent = {
    title: title,
    desc: desc,
    link: link,
    imgUrl: "http://m.giccoo.com/kiehls/img/ico.jpg",
    success: function success() {
      // alert "success"
      if (main.gameEnd) {
        main.getLottery();
        return main.shareNotePage = false;
      }
    },
    cancel: function cancel() {
      // alert "cancel"
      if (main.gameEnd) {
        main.getLottery();
        return main.shareNotePage = false;
      }
    }
  };

  if (window.navigator.userAgent.indexOf("NeteaseMusic") > -1) {
    sys = "NeteaseMusic";
    return CloudMusic.setShareData(shareData);
  } else if (!_shareLoaded) {
    loadWechatConfig();
    return wx.ready(function () {
      _shareLoaded = true;
      wx.onMenuShareTimeline(shareContent);
      wx.onMenuShareAppMessage(shareContent);
      wx.onMenuShareQQ(shareContent);
      wx.onMenuShareWeibo(shareContent);
      return wx.checkJsApi({
        jsApiList: ["startRecord", "stopRecord", "onVoiceRecordEnd", "playVoice"],
        success: function success(res) {
          return console.log("debug:", res);
        }
      });
    });
  } else {
    wx.onMenuShareTimeline(shareContent);
    wx.onMenuShareAppMessage(shareContent);
    wx.onMenuShareQQ(shareContent);
    return wx.onMenuShareWeibo(shareContent);
  }
};

//# sourceMappingURL=main.js.map
