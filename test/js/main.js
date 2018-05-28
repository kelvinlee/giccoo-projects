"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Container, Graphics, ParticleContainer, Sprite, Texture, TextureCache, _CDN, animationLine, animationVoice, autoDetectRenderer, getId, getTe, loader, resource, resources, test;

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

animationVoice = function () {
  var animationVoice = function () {
    function animationVoice(arg) {
      _classCallCheck(this, animationVoice);

      this.opts = {
        el: "main",
        w: 640,
        h: 1138,
        count: 40,
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
        var grap;
        grap = this.grap = new Graphics();
        // @.add()
        this.stage.addChild(this.grap);
        // console.log @.app.ticker.FPS
        return this.app.ticker.add(this.loop.bind(this));
      }
    }, {
      key: "add",
      value: function add() {
        var grap, h, w, y;
        grap = this.grap;
        grap.beginFill(this.opts.fillColor);
        h = Math.random() * this.opts.h * 0.95 + this.opts.h * 0.05;
        w = this.opts.w / (this.opts.count * 2);
        y = (this.opts.h - h) / 2;
        grap.drawRect(this.default.x, y, w, h);
        return this.default.x -= w * 2;
      }

      // if grap.width > @.opts.w
      //   grap.x -= w*2

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
        if (!this.moved) {
          return false;
        }
        if (this.grap.x <= this.grap.width) {
          this.grap.x += this.opts.w / (this.opts.count * 3) * detail;
        }
        if (new Date().getTime() >= this.default.date + 50) {
          this.add();
          return this.default.date = new Date().getTime();
        }
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

  animationVoice.prototype.moved = false;

  return animationVoice;
}.call(undefined);

window.onload = function () {
  return test = new animationVoice({
    el: "main",
    h: 200
  });
};
