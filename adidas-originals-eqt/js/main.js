'use strict';

var ANIMATION_END_NAME, ANIMATION_END_NAMES, TRANSITION_END_NAME, TRANSITION_END_NAMES, VENDORS, _CDN, css3Prefix, i, j, len, load, mTestElement, player;

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
  template: '<div class="playsound"> <div class="icon-play" :class="{play: playing, pause: !playing}" @click="change"> <img :src="iconNow" /> </div> <audio :src="src" :autoplay="autoplay" :preload="preload" :loop="loop"></audio> </div>',
  data: function data() {
    return {
      playing: false,
      stoped: false,
      iconPlay: "http://image.giccoo.com/projects/libs/img/audio-stop.png",
      iconStop: "http://image.giccoo.com/projects/libs/img/audio-play.png"
    };
  },
  props: {
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
    }
  },
  methods: {
    play: function play() {
      return this.playing = true;
    },
    pause: function pause() {
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
        return this.stoped = false;
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
    this.audio = this.$el.children[1];
    console.log(this.audio);
    // @audioOther = @$el.children[2]
    this.audio.addEventListener("pause", this.pause.bind(this));
    this.audio.addEventListener("play", this.play.bind(this));
    this.audio.addEventListener("ended", this.ended.bind(this));
    return this.audio.play();
  }
});

// console.log @audio,@audioOther,@playing
Vue.component("mp4", {
  template: '<div class="video"> <div v-if="andriod" class="icon-play" :class="{play: playing, pause: !playing}" @click="change"> <img :src="iconNow" /> </div> <video :class="{hide: andriod}" :width="width" :height="height" controls="true" :src="src" :id="videoid" x5-video-player-type="h5" x5-video-player-fullscreen="true" x-webkit-airplay="allow" webkit-playsinline playsinline :poster="poster"></video> <canvas v-if="andriod" :id="canvasid" :width="width" :height="height" @click="change"></canvas> </div>',
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
        return context.drawImage(poster, 0, 0, canvas.width, canvas.height);
      }
    },
    animate: function animate() {
      var canvas, context;
      canvas = document.getElementById(this.canvasid);
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
    if (isAndroid) {
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

player = {};

window.onload = function () {
  return load = new Vue({
    el: "#main",
    data: {
      loadend: false
    }
  });
};

// load.loadend = true

// player = new Vue
// 	el: "#player"
