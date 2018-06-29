"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Container, Graphics, ParticleContainer, Sprite, Text, Texture, TextureCache, _CDN, animationLine, animationVoice, autoDetectRenderer, getId, getTe, loader, motionPath, resource, resources, test;

animationVoice = function () {
  var animationVoice = function () {
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
}.call(undefined);

motionPath = function () {
  var motionPath = function () {
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
      this.opts = Object.assign(this.opts, arg);
      // @image = image = new Image()
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
        ctx.drawImage(image, 0, 0, image.width, image.height);
        // imageData = ctx.getImageData(0, 0, @.image.width, @.image.height).data
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
        }

        // # 冒泡排序
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
        this.app.renderer.render(this.app.stage);
        // path = new Sprite resources[@.opts.path].texture
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
      }

      // @.path.sort (a,b)->
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

Text = PIXI.Text;

getTe = function getTe(id) {
  return resource[id].texture;
};

getId = function getId(id, link) {
  return loader.resources[link].textures[id];
};

// @codekit-prepend "../../libs/pixi/voice"
// @codekit-prepend "../../libs/pixi/motionpath"
// @codekit-prepend "../../libs/coffee/pixi-base"
_CDN = "./";

test = {};

animationLine = function () {
  var animationLine = function () {
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
      this.end = this.end.bind(this);
      // @.app.view.addEventListener "touchstart", @.start, false
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
        }

        //   @.line.direction = Math.random()*(Math.PI/2)
        // console.log @.default.y+@.default.MaxH,@.default.y
        if (this.default.x >= 320) {
          return this.line.x = -(this.default.x - 320);
        }
      }

      // console.log @.default

    }, {
      key: "start",
      value: function start(evt) {
        var touch;
        // console.log @,evt
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
}.call(undefined);

window.onload = function () {
  return test = new motionPath({
    el: "main"
  });
};
