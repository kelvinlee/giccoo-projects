'use strict';

var ANIMATION_END_NAME, ANIMATION_END_NAMES, TRANSITION_END_NAME, TRANSITION_END_NAMES, VENDORS, _CDN, css3Prefix, finger, i, initMain, j, len, load, mTestElement, main, player;

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

Vue.component("mp4", {
  template: '<div class="video"> <div v-if="andriod" class="icon-play" :class="{hide: playing, pause: !playing}" @click="change"> <svg v-show="!playing" height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ytp-id-39"></use><path class="ytp-svg-fill" d="M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z"></path></svg> <svg v-show="playing" height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ytp-id-40"></use><path class="ytp-svg-fill" d="M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z"></path></svg> </div> <!--  --> <video v-if="!playsinline" :width="width" :height="height" controls="true" :src="src" :id="videoid" :poster="poster"></video> <video v-if="playsinline" :class="{hide: andriod}" :width="width" :height="height" controls="true" :src="src" :id="videoid" :poster="poster" x5-video-player-type="h5" x5-video-player-fullscreen="true" x-webkit-airplay="allow" webkit-playsinline playsinline></video> <canvas v-if="andriod" :id="canvasid" :width="width" :height="height" @click="change"></canvas> </div>',
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

Vue.component("pages", {
  template: '<div class="pages"> <slot></slot> </div>',
  data: function data() {
    return {
      count: 0,
      startX: 0,
      startY: 0,
      pageUpDown: 0,
      touching: false,
      touchmoving: 0
    };
  },
  props: {
    pagenow: {
      default: 0
    }
  },
  watch: {
    pagenow: function pagenow(now, old) {
      var dom, v;
      console.log("pagenow:", now, old);
      if (now >= this.count) {
        return false;
      }
      v = now - old;
      dom = this.$el.children[now];
      this.setNow(dom);
      if (v > 0) {
        dom = this.$el.children[old];
        return this.leave(dom);
      } else {
        dom = this.$el.children[now];
        return this.enter(dom);
      }
    }
  },
  methods: {
    leave: function leave(el) {
      return TweenLite.to(el, 1.6, {
        rotationY: -180,
        left: "-100%",
        zIndex: 100,
        z: 600,
        onComplete: function onComplete() {
          return el.style = "";
        }
      });
    },
    enter: function enter(el) {
      TweenLite.set(el, {
        rotationY: -180,
        left: "-100%",
        zIndex: 100,
        z: 600
      });
      return TweenLite.to(el, .6, {
        rotationY: 0,
        left: "0%",
        zIndex: 100,
        z: 0,
        onComplete: function onComplete() {
          return el.style = "";
        }
      });
    },
    setNow: function setNow(el) {
      var item, k, len1, ref;
      ref = this.$el.children;
      for (k = 0, len1 = ref.length; k < len1; k++) {
        item = ref[k];
        item.className = item.className.replace(" on", "");
      }
      if (el != null) {
        return el.className += " on";
      }
    },
    start: function start(evt) {
      var touches;
      // @pagenow = @pagenow+1 if @pagenow < @count 
      // console.log "start:",@pagenow
      // temp = @$emit 'next', @
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
          return this.pageUpDown = 1;
        } else if (nowX - this.startX < -80) {
          return this.pageUpDown = -1;
        } else {
          return this.pageUpDown = 0;
        }
      }
    },
    end: function end(evt) {
      var temp;
      if (this.touchmoving < 3) {
        return false;
      }
      console.log(this.pageUpDown, this.touching, this.touchmoving);
      if (this.pageUpDown === 1) {
        if (this.pagenow > 0) {
          this.pagenow = this.pagenow - 1;
        }
        temp = this.$emit('prev', this);
      } else if (this.pageUpDown === -1) {
        if (this.pagenow < this.count - 1) {
          this.pagenow = this.pagenow + 1;
        }
        temp = this.$emit('next', this);
      }
      this.pageUpDown = 0;
      this.touching = false;
      return this.touchmoving = 0;
    }
  },
  mounted: function mounted(el) {
    this.$el.addEventListener("touchstart", this.start.bind(this));
    this.$el.addEventListener("touchmove", this.move.bind(this));
    this.$el.addEventListener("touchend", this.end.bind(this));
    this.count = this.$el.children.length;
    console.log(this.$el.children[0], this.pagenow);
    return this.setNow(this.$el.children[0]);
  }
});

// @codekit-prepend "coffee/css3Prefix"
// @codekit-prepend "../../libs/coffee/requestanimation"
// @codekit-prepend "./video.coffee"
// @codekit-prepend "./pages.coffee"
_CDN = "http://image.giccoo.com/projects/zhishinews/";

_CDN = "./";

load = {};

main = {};

finger = {};

player = {};

window.onload = function () {
  return load = new Vue({
    el: "#load",
    data: {
      loadend: false
    },
    mounted: function mounted(el) {
      initMain();
      return setTimeout(function () {
        return load.loadend = true;
      }, 3000);
    }
  });
};

initMain = function initMain() {
  player = new Vue({
    el: "#videopop",
    data: {
      src: "http://image.giccoo.com/projects/adidas-originals-eqt/video/video.mp4",
      poster: "./img/video.jpg",
      show: false
    },
    methods: {
      close: function close() {
        this.show = false;
        return this.$children[0].stop();
      },
      play: function play() {
        return this.$children[0].play();
      }
    }
  });
  return main = new Vue({
    el: "#main",
    data: {
      pagenow: 0,
      tab: true
    },
    methods: {
      changetab: function changetab() {
        return this.tab = !this.tab;
      },
      changeplayer: function changeplayer(src, poster) {
        player.src = src;
        player.poster = poster;
        player.show = true;
        return player.play();
      }
    }
  });
};

// nextPage: (self)->
// 	@pagenow = self.pagenow
// console.log "next pagenow:",@pagenow
