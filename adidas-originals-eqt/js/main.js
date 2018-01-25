'use strict';

var ANIMATION_END_NAME, ANIMATION_END_NAMES, TRANSITION_END_NAME, TRANSITION_END_NAMES, VENDORS, _CDN, css3Prefix, finger, i, j, len, load, mTestElement, main, player;

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

for (j = 0, len = VENDORS.length; j < len; j++) {
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

Vue.component("player", {
  template: '<div class="player" :class="{play: playing, pause: !playing}" @click="change"> <div class="icon-play" :class="{play: playing, pause: !playing}"> <svg v-show="!playing" height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ytp-id-39"></use><path class="ytp-svg-fill" d="M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z"></path></svg> <svg v-show="playing" height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ytp-id-40"></use><path class="ytp-svg-fill" d="M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z"></path></svg> </div> <audio :src="src" :autoplay="autoplay" :preload="preload" :loop="loop"></audio> <img v-if="thumb" :src="thumb" /> </div>',
  data: function data() {
    return {
      playing: false,
      stoped: false,
      iconPlay: "http://image.giccoo.com/projects/libs/img/audio-stop.png",
      iconStop: "http://image.giccoo.com/projects/libs/img/audio-play.png"
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
  computed: {
    iconNow: function iconNow() {
      if (!this.playing) {
        return this.iconPlay;
      } else {
        return this.iconStop;
      }
    }
  },
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
Vue.component("mp4", {
  template: '<div class="video"> <div v-if="andriod" class="icon-play" :class="{hide: playing, pause: !playing}" @click="change"> <svg v-show="!playing" height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ytp-id-39"></use><path class="ytp-svg-fill" d="M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z"></path></svg> <svg v-show="playing" height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ytp-id-40"></use><path class="ytp-svg-fill" d="M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z"></path></svg> </div> <!--  --> <video v-if="!playsinline" :width="width" :height="height" controls="true" :src="src" :id="videoid" :poster="poster"></video> <video v-if="playsinline" :class="{hide: andriod}" :width="width" :height="height" controls="true" :src="src" :id="videoid" :poster="poster" x5-video-player-type="h5" x5-video-player-fullscreen="true" x-webkit-airplay="allow" webkit-playsinline playsinline></video> <canvas v-if="andriod" :id="canvasid" :width="width" :height="height" @click="change"></canvas> </div>',
  data: function data() {
    return {
      playing: false,
      stoped: false,
      andriod: false,
      iconPlay: "http://image.giccoo.com/projects/libs/img/audio-stop.png",
      iconStop: "http://image.giccoo.com/projects/libs/img/audio-play.png"
    };
  },
  props: {
    playsinline: {
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
    },
    iconNow: function iconNow() {
      if (!this.playing) {
        return this.iconPlay;
      } else {
        return this.iconStop;
      }
    }
  },
  methods: {
    play: function play() {
      return this.playing = true;
    },
    pause: function pause() {
      return this.playing = false;
    },
    stop: function stop() {
      if (this.video) {
        return this.video.pause();
      }
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
        typeof _hmt !== "undefined" && _hmt !== null && _hmt.push(['_trackEvent', "adidas-originals-eqt", "video", "play", "-"]);
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
    if (isAndroid && this.playsinline) {
      this.andriod = true;
      this.video = document.getElementById(this.videoid);
      this.video.addEventListener("pause", this.pause.bind(this));
      this.video.addEventListener("playing", this.play.bind(this));
      this.video.addEventListener("ended", this.ended.bind(this));
      return setTimeout(function () {
        return _this.initCanvas();
      }, 20);
    }
  }
});

// @codekit-prepend "coffee/css3Prefix"
// @codekit-prepend "../../libs/coffee/requestanimation"
// @codekit-prepend "./player.coffee"
// @codekit-prepend "./video.coffee"
_CDN = "http://image.giccoo.com/projects/adidas-originals-eqt/";

_CDN = "./";

load = {};

main = {};

finger = {};

player = {};

window.onload = function () {
  var pop;
  load = new Vue({
    el: "#load",
    data: {
      loadend: false
    }
  });

  // finger = new Vue
  // 	el: "#fingers"
  // 	data:
  // 		y: 0
  pop = new Vue({
    el: "#videopop",
    data: {
      show: false
    },
    methods: {
      close: function close() {
        this.show = false;
        main.opend = false;
        return console.log(this.$children[0].stop());
      }
    }
  });
  return main = new Vue({
    el: "#main",
    data: {
      opend: false,
      total: 0,
      default: {
        y: 0,
        x: 0
      },
      y: 0,
      x: 0,
      duration: 0,
      leftnote: false
    },
    methods: {
      pause: function pause() {
        return this.leftnote = false;
      },
      stopall: function stopall(self) {
        var item, k, len1, ref;
        ref = this.$children;
        for (k = 0, len1 = ref.length; k < len1; k++) {
          item = ref[k];
          if (self !== item) {
            item.pause();
          }
        }
        return this.leftnote = self === this.$children[0];
      },
      touchstart: function touchstart(evt) {
        var touch;
        touch = evt.touches;
        this.default.y = touch[0].pageY;
        return this.duration = 0;
      },
      // @opend = true
      touchmove: function touchmove(evt) {
        var tempY, touch;
        touch = evt.touches;
        tempY = touch[0].pageY - this.default.y;
        if (this.$el.scrollTop <= 0 && this.y >= 0 && tempY > 0) {
          this.y = tempY / (1 + tempY / 300);
          evt.preventDefault();
          console.log(this.y);
          if (this.y <= 0) {
            return this.y = 0;
          }
        }
      },
      touchend: function touchend(evt) {
        if (this.y > 100) {
          this.showPop();
        }
        this.duration = 0.6 * this.y / 300;
        return this.y = 0;
      },
      showPop: function showPop() {
        if (this.opend) {
          return false;
        }
        this.opend = true;
        pop.show = true;
        return this.stopall(null);
      },
      start: function start(evt) {
        var touch;
        touch = evt.touches;
        return this.default.x = touch[0].pageX;
      },
      move: function move(evt) {
        var tempX, touch;
        touch = evt.touches;
        tempX = touch[0].pageX - this.default.x;
        if ((tempX > 50 || tempX < -50) && this.leftnote) {
          return this.showPop();
        }
      },
      end: function end(evt) {}
    },
    watch: {
      y: function y(val) {
        return finger.y = val;
      }
    },
    mounted: function mounted(el) {
      setTimeout(function () {
        return load.loadend = true;
      }, 1000);
      console.log(el, this.$children[0].thumb);
      // scroll top 
      // @$el.addEventListener "touchstart", @touchstart.bind @
      // @$el.addEventListener "touchmove", @touchmove.bind @
      // @$el.addEventListener "touchend", @touchend.bind @
      // scroll left
      this.$el.addEventListener("touchstart", this.start.bind(this));
      this.$el.addEventListener("touchmove", this.move.bind(this));
      return this.$el.addEventListener("touchend", this.end.bind(this));
    }
  });
};

// load.loadend = true

// player = new Vue
// 	el: "#player"
