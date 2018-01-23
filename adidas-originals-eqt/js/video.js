"use strict";

Vue.component("mp4", {
  template: '<div class="video"> <div v-if="andriod" class="icon-play" :class="{play: playing, pause: !playing}" @click="change"> <img :src="iconNow" /> </div> <video :src="src" :id="videoid" x5-video-player-type="h5" x5-video-player-fullscreen="true" x-webkit-airplay="allow" webkit-playsinline playsinline :poster="poster"></video> <canvas :id="canvasid" :width="width" :height="height"></canvas> </div>',
  data: function data() {
    return {
      playing: false,
      stoped: false,
      andriod: false
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
    }
  }
});
