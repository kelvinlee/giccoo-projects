'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ANIMATION_END_NAME, ANIMATION_END_NAMES, AnimatedSprite, Container, Graphics, IsPC, ParticleContainer, Sprite, TRANSITION_END_NAME, TRANSITION_END_NAMES, Text, Texture, TextureCache, TrueH, TrueW, UGC, VENDORS, _cache, _citys, _public, _runTime, _second, _startCache, _testTime, apiLink, apiUrl, autoDetectRenderer, createObjectURLfun, css3Prefix, getId, getOrientation, getTe, i, imageurl, init, j, len1, loadWechatConfig, loader, loading, mTestElement, main, musicIconCache, musicLineCache, neteaseShareImage, playAudio, random, resource, resources, sended, stopAllAudio, sys, ugc, ugcCache;

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
Vue.component("form-grounp", {
  template: '<div class="form"> <div v-for="item,index in form" class="form-group" :class="\'type-\'+type[item.type]+(item.class?\' \'+item.class:\'\')"> <label :for="item.id" v-if="item.label">{{item.label}}</label> <input :id="item.id" :placeholder="item.placeholder" v-if="type[item.type] == \'input\'" v-model="item.value" type="text"> <div v-if="type[item.type] == \'select\'" class="select"> <span>{{getOptionsName(item)}}</span> <select :id="item.id" v-model="item.value" v-if="!item.array"> <option v-for="(item, key) in item.options" :value="key">{{key}}</option> </select> <select :id="item.id" v-model="item.value" v-if="item.array"> <option v-for="(item, index) in item.options" :value="item.val">{{item.name}}</option> </select> </div> </div> <div @click="submit" class="btn-submit"><img src="./img/btn-submit.png" /></div> </div>',
  data: function data() {
    return {
      submiting: false,
      type: {
        input: 'input',
        select: 'select',
        checkbox: 'checkbox'
      }
    };
  },
  props: {
    form: {
      default: {}
    }
  },
  methods: {
    getOptionsName: function getOptionsName(item) {
      var it, l, len2, ref;
      if (!item.array) {
        if (item.value === "") {
          return Object.keys(item.options)[0];
        }
        return item.value;
      } else {
        ref = item.options;
        for (l = 0, len2 = ref.length; l < len2; l++) {
          it = ref[l];
          if (it.val === item.value) {
            return it.name;
          }
        }
        return item.options[0].name;
      }
      return "k";
    },
    submit: function submit(evt) {
      return console.log("submit");
    }
  },
  mounted: function mounted(el) {
    var k, ref, results, self, v;
    console.log("el:", this, this.form);
    self = this;
    ref = this.form;
    results = [];
    for (k in ref) {
      v = ref[k];
      if (v.link != null && v.type === "select") {
        results.push(this.$watch('form.' + k, function (n, o) {
          if (self.form[n.link] == null) {
            return false;
          }
          // for it in n.options
          //   if it.val is n.value
          self.form[n.link].options = n.options[n.value];
          if (self.form[n.link].array) {
            console.log(n.link, self.form[n.link].value, n.options[n.value][0].val);
            return self.form[n.link].value = n.options[n.value][0].val;
          } else {
            return self.form[n.link].value = Object.keys(n.options[n.value])[0];
          }
        }, {
          deep: true
        }));
      } else {
        results.push(void 0);
      }
    }
    return results;
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

_citys = {};

_citys["北京"] = {};

_citys["甘肃"] = {};

_citys["河北"] = {};

_citys["黑龙江"] = {};

_citys["吉林"] = {};

_citys["辽宁"] = {};

_citys["内蒙古"] = {};

_citys["山东"] = {};

_citys["山西"] = {};

_citys["陕西"] = {};

_citys["天津"] = {};

_citys["新疆"] = {};

_citys["安徽"] = {};

_citys["河南"] = {};

_citys["湖北"] = {};

_citys["江苏"] = {};

_citys["江西"] = {};

_citys["上海"] = {};

_citys["浙江"] = {};

_citys["福建"] = {};

_citys["广东"] = {};

_citys["广西"] = {};

_citys["贵州"] = {};

_citys["海南"] = {};

_citys["湖南"] = {};

_citys["四川"] = {};

_citys["云南"] = {};

_citys["重庆"] = {};

_citys["宁夏"] = {};

_citys["青海"] = {};

_citys["北京"]["北京"] = [];

_citys["甘肃"]["兰州"] = [];

_citys["河北"]["石家庄"] = [];

_citys["河北"]["唐山"] = [];

_citys["黑龙江"]["哈尔滨"] = [];

_citys["吉林"]["长春"] = [];

_citys["辽宁"]["大连"] = [];

_citys["辽宁"]["沈阳"] = [];

_citys["内蒙古"]["包头"] = [];

_citys["内蒙古"]["呼和浩特"] = [];

_citys["山东"]["济南"] = [];

_citys["山东"]["青岛"] = [];

_citys["山东"]["烟台"] = [];

_citys["山西"]["太原"] = [];

_citys["陕西"]["西安"] = [];

_citys["天津"]["天津"] = [];

_citys["新疆"]["乌鲁木齐"] = [];

_citys["安徽"]["合肥"] = [];

_citys["河南"]["郑州"] = [];

_citys["湖北"]["武汉"] = [];

_citys["江苏"]["常州"] = [];

_citys["江苏"]["南通"] = [];

_citys["江苏"]["苏州"] = [];

_citys["江苏"]["无锡"] = [];

_citys["江苏"]["扬州"] = [];

_citys["江西"]["南昌"] = [];

_citys["上海"]["上海"] = [];

_citys["浙江"]["杭州"] = [];

_citys["浙江"]["嘉兴"] = [];

_citys["浙江"]["宁波"] = [];

_citys["浙江"]["绍兴"] = [];

_citys["浙江"]["台州"] = [];

_citys["浙江"]["温州"] = [];

_citys["福建"]["泉州"] = [];

_citys["广东"]["东莞"] = [];

_citys["广东"]["佛山"] = [];

_citys["广东"]["广州"] = [];

_citys["广东"]["揭阳"] = [];

_citys["广东"]["汕头"] = [];

_citys["广东"]["深圳"] = [];

_citys["广东"]["中山"] = [];

_citys["广东"]["珠海"] = [];

_citys["广西"]["南宁"] = [];

_citys["贵州"]["贵阳"] = [];

_citys["海南"]["海口"] = [];

_citys["湖南"]["长沙"] = [];

_citys["四川"]["成都"] = [];

_citys["云南"]["昆明"] = [];

_citys["重庆"]["重庆"] = [];

_citys["山东"]["潍坊"] = [];

_citys["河北"]["保定"] = [];

_citys["江苏"]["南京"] = [];

_citys["辽宁"]["鞍山"] = [];

_citys["陕西"]["榆林"] = [];

_citys["山东"]["济宁"] = [];

_citys["山东"]["临沂"] = [];

_citys["山东"]["淄博"] = [];

_citys["山东"]["泰安"] = [];

_citys["山东"]["东营"] = [];

_citys["河北"]["邯郸"] = [];

_citys["四川"]["乐山"] = [];

_citys["黑龙江"]["大庆"] = [];

_citys["宁夏"]["银川"] = [];

_citys["内蒙古"]["赤峰"] = [];

_citys["青海"]["西宁"] = [];

_citys["河南"]["洛阳"] = [];

_citys["山西"]["大同"] = [];

_citys["广西"]["桂林"] = [];

_citys["浙江"]["湖州"] = [];

_citys["江苏"]["徐州"] = [];

_citys["福建"]["厦门"] = [];

_citys["江苏"]["泰州"] = [];

_citys["广西"]["柳州"] = [];

_citys["江西"]["赣州"] = [];

_citys["江苏"]["镇江"] = [];

_citys["河南"]["平顶山"] = [];

_citys["福建"]["福州"] = [];

_citys["辽宁"]["锦州"] = [];

_citys["福建"]["龙岩"] = [];

_citys["河南"]["安阳"] = [];

_citys["山东"]["威海"] = [];

_citys["江苏"]["盐城"] = [];

_citys["安徽"]["阜阳"] = [];

_citys["四川"]["绵阳"] = [];

_citys["福建"]["三明"] = [];

_citys["河南"]["商丘"] = [];

_citys["江西"]["九江"] = [];

_citys["安徽"]["芜湖"] = [];

_citys["山东"]["滨州"] = [];

_citys["江苏"]["常熟"] = [];

_citys["江西"]["上饶"] = [];

_citys["山东"]["德州"] = [];

_citys["河北"]["邢台"] = [];

_citys["云南"]["红河"] = [];

_citys["福建"]["漳州"] = [];

_citys["湖南"]["株洲"] = [];

_citys["四川"]["南充"] = [];

_citys["湖北"]["襄阳"] = [];

_citys["河南"]["南阳"] = [];

_citys["陕西"]["咸阳"] = [];

_citys["福建"]["莆田"] = [];

_citys["吉林"]["吉林"] = [];

_citys["陕西"]["宝鸡"] = [];

_citys["陕西"]["延安"] = [];

_citys["浙江"]["义乌"] = [];

_citys["河南"]["新乡"] = [];

_citys["河北"]["沧州"] = [];

_citys["山西"]["临汾"] = [];

_citys["浙江"]["舟山"] = [];

_citys["山西"]["运城"] = [];

_citys["广东"]["江门"] = [];

_citys["湖北"]["宜昌"] = [];

_citys["广西"]["钦州"] = [];

_citys["广东"]["湛江"] = [];

_citys["浙江"]["衢州"] = [];

_citys["浙江"]["金华"] = [];

_citys["江苏"]["连云港"] = [];

_citys["四川"]["泸州"] = [];

_citys["安徽"]["蚌埠"] = [];

_citys["湖南"]["怀化"] = [];

_citys["广东"]["清远"] = [];

_citys["北京"]["北京"].push({
  val: "BJG",
  name: "沃尔沃汽车北京中汽南方百旺4S中心"
});

_citys["北京"]["北京"].push({
  val: "BJC",
  name: "沃尔沃汽车北京中汽南方亦庄4S中心"
});

_citys["北京"]["北京"].push({
  val: "BJC",
  name: "沃尔沃汽车北京中汽南方东四环展厅 "
});

_citys["北京"]["北京"].push({
  val: "BJE",
  name: "沃尔沃汽车北京中诚海华4S中心 "
});

_citys["甘肃"]["兰州"].push({
  val: "LZA",
  name: "沃尔沃汽车兰州福康4S中心"
});

_citys["河北"]["石家庄"].push({
  val: "HBC",
  name: "沃尔沃汽车石家庄冀东东沃4S中心"
});

_citys["河北"]["唐山"].push({
  val: "HBD",
  name: "沃尔沃汽车唐山庞大兴沃4S中心"
});

_citys["黑龙江"]["哈尔滨"].push({
  val: "HRA",
  name: "沃尔沃汽车黑龙江尊荣4S中心"
});

_citys["吉林"]["长春"].push({
  val: "CCA",
  name: "沃尔沃汽车长春盛荣4S中心"
});

_citys["辽宁"]["大连"].push({
  val: "DLA",
  name: "沃尔沃汽车大连尊荣亿方4S中心"
});

_citys["辽宁"]["大连"].push({
  val: "DLA",
  name: "沃尔沃汽车大连尊荣亿方城市展厅"
});

_citys["辽宁"]["沈阳"].push({
  val: "SYA",
  name: "沃尔沃汽车沈阳尊荣4S中心"
});

_citys["内蒙古"]["包头"].push({
  val: "MGC",
  name: "沃尔沃汽车包头庞大兴沃4S中心"
});

_citys["内蒙古"]["呼和浩特"].push({
  val: "MGB",
  name: "沃尔沃汽车呼和浩特庞大兴沃4S中心"
});

_citys["山东"]["济南"].push({
  val: "JND",
  name: "沃尔沃汽车济南富豪4S中心"
});

_citys["山东"]["青岛"].push({
  val: "QDA",
  name: "沃尔沃汽车青岛富豪4S中心"
});

_citys["山东"]["烟台"].push({
  val: "YTA",
  name: "沃尔沃汽车烟台富豪4S中心"
});

_citys["山西"]["太原"].push({
  val: "TYA",
  name: "沃尔沃汽车太原富豪新华夏4S中心"
});

_citys["陕西"]["西安"].push({
  val: "XAA",
  name: "沃尔沃汽车西安佳豪4S中心"
});

_citys["天津"]["天津"].push({
  val: "TJA",
  name: "沃尔沃汽车天津中汽南方4S中心"
});

_citys["新疆"]["乌鲁木齐"].push({
  val: "XJB",
  name: "沃尔沃汽车乌鲁木齐金涛4S中心"
});

_citys["安徽"]["合肥"].push({
  val: "HFA",
  name: "沃尔沃汽车合肥捷沃4S中心"
});

_citys["河南"]["郑州"].push({
  val: "HNB",
  name: "沃尔沃汽车郑州锦堂盛4S中心"
});

_citys["湖北"]["武汉"].push({
  val: "WHA",
  name: "沃尔沃汽车武汉富豪4S中心"
});

_citys["江苏"]["常州"].push({
  val: "CZA",
  name: "沃尔沃汽车常州富豪4S中心"
});

_citys["江苏"]["南通"].push({
  val: "NTA",
  name: "沃尔沃汽车南通东沃4S中心"
});

_citys["江苏"]["苏州"].push({
  val: "SUA",
  name: "沃尔沃汽车苏州世之贸4S中心"
});

_citys["江苏"]["苏州"].push({
  val: "SUB",
  name: "沃尔沃汽车苏州通孚祥4S中心"
});

_citys["江苏"]["无锡"].push({
  val: "WXB",
  name: "沃尔沃汽车无锡东方吉羊4S中心"
});

_citys["江苏"]["扬州"].push({
  val: "YZA",
  name: "沃尔沃汽车扬州富豪4S中心"
});

_citys["江西"]["南昌"].push({
  val: "NCA",
  name: "沃尔沃汽车南昌绿地名沃4S中心"
});

_citys["上海"]["上海"].push({
  val: "SHC",
  name: "沃尔沃汽车上海通孚祥4S中心 "
});

_citys["上海"]["上海"].push({
  val: "SHD",
  name: "沃尔沃汽车上海永达4S中心"
});

_citys["浙江"]["杭州"].push({
  val: "HZA",
  name: "沃尔沃汽车杭州世之贸4S中心"
});

_citys["浙江"]["杭州"].push({
  val: "HZC",
  name: "沃尔沃汽车浙江元通元瑞4S中心"
});

_citys["浙江"]["嘉兴"].push({
  val: "JXA",
  name: "沃尔沃汽车嘉兴元通元瑞4S中心"
});

_citys["浙江"]["宁波"].push({
  val: "NBB",
  name: "沃尔沃汽车宁波元通元瑞4S中心"
});

_citys["浙江"]["绍兴"].push({
  val: "SXA",
  name: "沃尔沃汽车绍兴海昌4S中心"
});

_citys["浙江"]["台州"].push({
  val: "TZA",
  name: "沃尔沃汽车台州凯和4S中心"
});

_citys["浙江"]["温州"].push({
  val: "WZA",
  name: "沃尔沃汽车温州东昌4S中心"
});

_citys["福建"]["泉州"].push({
  val: "QZA",
  name: "沃尔沃汽车泉州鸿海4S中心"
});

_citys["广东"]["东莞"].push({
  val: "DGA",
  name: "沃尔沃汽车东莞中汽南方4S中心"
});

_citys["广东"]["佛山"].push({
  val: "NHA",
  name: "沃尔沃汽车佛山富豪城市展厅"
});

_citys["广东"]["佛山"].push({
  val: "NHA",
  name: "沃尔沃汽车佛山富豪4S中心"
});

_citys["广东"]["广州"].push({
  val: "GZB",
  name: "沃尔沃汽车广州永安富豪4S中心"
});

_citys["广东"]["揭阳"].push({
  val: "JYA",
  name: "沃尔沃汽车揭阳恒丰4S中心"
});

_citys["广东"]["汕头"].push({
  val: "STA",
  name: "沃尔沃汽车汕头恒康4S中心 "
});

_citys["广东"]["深圳"].push({
  val: "SZA",
  name: "沃尔沃汽车深圳中汽南方4S中心"
});

_citys["广东"]["深圳"].push({
  val: "SZB",
  name: "沃尔沃汽车深圳天汽南方4S中心"
});

_citys["广东"]["中山"].push({
  val: "ZSA",
  name: "沃尔沃汽车中山中汽南方4S中心"
});

_citys["广东"]["珠海"].push({
  val: "ZHA",
  name: "沃尔沃汽车珠海中汽南方4S中心"
});

_citys["广西"]["南宁"].push({
  val: "NNA",
  name: "沃尔沃汽车南宁弘瑞4S中心"
});

_citys["贵州"]["贵阳"].push({
  val: "GYA",
  name: "沃尔沃汽车贵州天鼎4S中心"
});

_citys["海南"]["海口"].push({
  val: "HKA",
  name: "沃尔沃汽车海南天昌达4S中心"
});

_citys["湖南"]["长沙"].push({
  val: "CSA",
  name: "沃尔沃汽车长沙中汽南方4S中心"
});

_citys["四川"]["成都"].push({
  val: "CDA",
  name: "沃尔沃汽车成都三和4S中心"
});

_citys["四川"]["成都"].push({
  val: "CDC",
  name: "沃尔沃汽车成都通孚祥4S中心"
});

_citys["云南"]["昆明"].push({
  val: "KMA",
  name: "沃尔沃汽车昆明富豪4S中心"
});

_citys["重庆"]["重庆"].push({
  val: "CQA",
  name: "沃尔沃汽车重庆西南富豪4S中心"
});

_citys["山东"]["潍坊"].push({
  val: "JNC",
  name: "沃尔沃汽车潍坊诺德4S中心"
});

_citys["重庆"]["重庆"].push({
  val: "CQC",
  name: "沃尔沃汽车重庆龙华沃华4S中心"
});

_citys["北京"]["北京"].push({
  val: "BJK",
  name: "沃尔沃汽车北京海之沃4S中心"
});

_citys["上海"]["上海"].push({
  val: "SHF",
  name: "沃尔沃汽车上海通孚祥宝山4S中心"
});

_citys["山西"]["太原"].push({
  val: "TYA",
  name: "沃尔沃汽车太原富豪新华夏平阳展厅"
});

_citys["河北"]["保定"].push({
  val: "HBE",
  name: "沃尔沃汽车保定庞大兴沃4S中心"
});

_citys["江苏"]["南京"].push({
  val: "NJB",
  name: "沃尔沃汽车江苏世贸泰信东盛4S中心"
});

_citys["辽宁"]["鞍山"].push({
  val: "ASA",
  name: "沃尔沃汽车鞍山尊荣4S中心"
});

_citys["山东"]["济南"].push({
  val: "JNF",
  name: "沃尔沃汽车山东新富豪4S中心"
});

_citys["北京"]["北京"].push({
  val: "BJL",
  name: "沃尔沃汽车北京中汽南方中关村4S中心"
});

_citys["陕西"]["榆林"].push({
  val: "YLA",
  name: "沃尔沃汽车榆林佳豪金鼎4S中心"
});

_citys["云南"]["昆明"].push({
  val: "KMB",
  name: "沃尔沃汽车云南华沃4S中心"
});

_citys["北京"]["北京"].push({
  val: "BJH",
  name: "沃尔沃汽车北京燕豪金港4S中心"
});

_citys["广东"]["东莞"].push({
  val: "DGB",
  name: "沃尔沃汽车东莞世沃4S中心"
});

_citys["山东"]["济宁"].push({
  val: "JNE",
  name: "沃尔沃汽车济宁恒昌4S中心"
});

_citys["山东"]["临沂"].push({
  val: "LYA",
  name: "沃尔沃汽车临沂富豪4S中心"
});

_citys["广东"]["佛山"].push({
  val: "SDB",
  name: "沃尔沃汽车顺德世维4S中心 "
});

_citys["广东"]["广州"].push({
  val: "GZC",
  name: "沃尔沃汽车广州世祥4S中心"
});

_citys["江苏"]["无锡"].push({
  val: "WXC",
  name: "沃尔沃汽车无锡富绅城市展厅"
});

_citys["陕西"]["西安"].push({
  val: "XAC",
  name: "沃尔沃汽车陕西佳骏4S中心"
});

_citys["山东"]["淄博"].push({
  val: "JNB",
  name: "沃尔沃汽车淄博奥德达4S中心"
});

_citys["山东"]["青岛"].push({
  val: "QDB",
  name: "沃尔沃汽车青岛富融4S中心"
});

_citys["山东"]["泰安"].push({
  val: "TAA",
  name: "沃尔沃汽车泰安富豪4S中心"
});

_citys["山东"]["东营"].push({
  val: "DYA",
  name: "沃尔沃汽车东营富豪4S中心"
});

_citys["河北"]["邯郸"].push({
  val: "HBF",
  name: "沃尔沃汽车邯郸庞大兴沃4S中心"
});

_citys["四川"]["乐山"].push({
  val: "CDC",
  name: "沃尔沃汽车乐山通孚祥城市展厅"
});

_citys["黑龙江"]["大庆"].push({
  val: "DQA",
  name: "沃尔沃汽车大庆尊荣4S中心"
});

_citys["宁夏"]["银川"].push({
  val: "YCB",
  name: "沃尔沃汽车银川宁夏佳丰4S中心"
});

_citys["上海"]["上海"].push({
  val: "SHG",
  name: "沃尔沃汽车上海永达嘉沃4S中心"
});

_citys["浙江"]["杭州"].push({
  val: "HZD",
  name: "沃尔沃汽车浙江万友维修站"
});

_citys["内蒙古"]["赤峰"].push({
  val: "MGE",
  name: "沃尔沃汽车赤峰庞大兴沃4S中心"
});

_citys["浙江"]["杭州"].push({
  val: "HZF",
  name: "沃尔沃汽车杭州中沃4S中心"
});

_citys["辽宁"]["沈阳"].push({
  val: "SYC",
  name: "沃尔沃汽车沈阳尊荣富沃4S中心"
});

_citys["北京"]["北京"].push({
  val: "BJM",
  name: "沃尔沃汽车北京元之沃4S中心"
});

_citys["天津"]["天津"].push({
  val: "TJC",
  name: "沃尔沃汽车天津通孚祥4S中心"
});

_citys["青海"]["西宁"].push({
  val: "QHA",
  name: "沃尔沃汽车西宁赛亚金孚4S中心"
});

_citys["河南"]["洛阳"].push({
  val: "HND",
  name: "沃尔沃汽车洛阳恒信瑞沃4S中心"
});

_citys["北京"]["北京"].push({
  val: "BJK",
  name: "沃尔沃汽车北京海之沃城市展厅"
});

_citys["山西"]["大同"].push({
  val: "BJK",
  name: "沃尔沃汽车大同雁之沃城市展厅"
});

_citys["广西"]["桂林"].push({
  val: "NNA",
  name: "沃尔沃汽车桂林弘瑞城市展厅"
});

_citys["甘肃"]["兰州"].push({
  val: "LZC",
  name: "沃尔沃汽车兰州庞大兴沃4S中心"
});

_citys["湖北"]["武汉"].push({
  val: "WHC",
  name: "沃尔沃汽车武汉富融4S中心"
});

_citys["四川"]["成都"].push({
  val: "CDD",
  name: "沃尔沃汽车成都长征沃尔沃4S中心"
});

_citys["河南"]["郑州"].push({
  val: "HNC",
  name: "沃尔沃汽车郑州市郑州鼎沃4S中心"
});

_citys["浙江"]["湖州"].push({
  val: "HZE",
  name: "沃尔沃汽车湖州瑞杰4S中心"
});

_citys["江苏"]["无锡"].push({
  val: "JYB",
  name: "沃尔沃汽车江阴东方沃邦4S中心"
});

_citys["江苏"]["徐州"].push({
  val: "XZA",
  name: "沃尔沃汽车徐州世贸泰信汽车4S中心"
});

_citys["上海"]["上海"].push({
  val: "SHH",
  name: "沃尔沃汽车上海永达申杰4S"
});

_citys["广东"]["广州"].push({
  val: "GZA",
  name: "沃尔沃汽车广东中汽南方天河城市展厅"
});

_citys["福建"]["厦门"].push({
  val: "XMA",
  name: "沃尔沃汽车厦门新成功4S中心"
});

_citys["吉林"]["长春"].push({
  val: "CCB",
  name: "沃尔沃汽车长春维信4S中心"
});

_citys["安徽"]["合肥"].push({
  val: "HFC",
  name: "沃尔沃汽车合肥瑞杰4S中心"
});

_citys["江苏"]["泰州"].push({
  val: "TZD",
  name: "沃尔沃汽车泰州富豪4S中心"
});

_citys["福建"]["厦门"].push({
  val: "XMB",
  name: "沃尔沃汽车厦门中升沃茂4S中心"
});

_citys["江苏"]["无锡"].push({
  val: "YXA",
  name: "沃尔沃汽车宜兴东方沃邦4S中心"
});

_citys["广西"]["柳州"].push({
  val: "NNC",
  name: "沃尔沃汽车柳州弘耀 4S中心"
});

_citys["云南"]["昆明"].push({
  val: "KMC",
  name: "沃尔沃汽车昆明庞润荣沃4S中心"
});

_citys["福建"]["泉州"].push({
  val: "QZB",
  name: "沃尔沃汽车泉州中升沃茂 4S中心"
});

_citys["黑龙江"]["哈尔滨"].push({
  val: "HRB",
  name: "沃尔沃汽车哈尔滨尊荣亿方4S中心"
});

_citys["江西"]["赣州"].push({
  val: "GAA",
  name: "沃尔沃汽车赣州绿地祥沃4S中心"
});

_citys["湖北"]["武汉"].push({
  val: "WHE",
  name: "沃尔沃汽车武汉恒信瑞沃4S中心 "
});

_citys["江苏"]["镇江"].push({
  val: "ZJA",
  name: "沃尔沃汽车镇江世贸泰信4S中心"
});

_citys["陕西"]["西安"].push({
  val: "XAD",
  name: "沃尔沃汽车西安天润4S中心"
});

_citys["河南"]["平顶山"].push({
  val: "HNE",
  name: "沃尔沃汽车平顶山市丰海4S中心"
});

_citys["辽宁"]["大连"].push({
  val: "DLB",
  name: "沃尔沃大连尊荣汽车4S中心"
});

_citys["福建"]["福州"].push({
  val: "FZB",
  name: "沃尔沃汽车福州吉诺富豪4S中心"
});

_citys["辽宁"]["锦州"].push({
  val: "JZA",
  name: "沃尔沃汽车锦州尊荣4S中心"
});

_citys["广东"]["深圳"].push({
  val: "SZC",
  name: "沃尔沃汽车深圳德顺行龙岗展厅"
});

_citys["福建"]["龙岩"].push({
  val: "LYB",
  name: "沃尔沃汽车龙岩英瑞福4S中心"
});

_citys["湖南"]["长沙"].push({
  val: "CSC",
  name: "沃尔沃汽车长沙建沃4S中心"
});

_citys["贵州"]["贵阳"].push({
  val: "GYB",
  name: "沃尔沃汽车贵阳中沃4S中心"
});

_citys["河南"]["安阳"].push({
  val: "AYA",
  name: "沃尔沃汽车安阳东安4S中心"
});

_citys["山东"]["威海"].push({
  val: "WHD",
  name: "沃尔沃汽车 威海 威海富豪 4S中心 "
});

_citys["江苏"]["盐城"].push({
  val: "YCC",
  name: "沃尔沃汽车盐城东昌4S中心"
});

_citys["安徽"]["阜阳"].push({
  val: "FYA",
  name: "沃尔沃汽车阜阳瑞杰豪骏4S中心"
});

_citys["四川"]["绵阳"].push({
  val: "MYA",
  name: "沃尔沃汽车绵阳通孚祥4S中心"
});

_citys["福建"]["三明"].push({
  val: "SMA",
  name: "沃尔沃汽车三明吉诺富豪4S中心"
});

_citys["河南"]["商丘"].push({
  val: "SQA",
  name: "沃尔沃汽车商丘商沃4S中心"
});

_citys["河北"]["保定"].push({
  val: "BDB",
  name: "沃尔沃汽车保定轩宇骐骥4S中心"
});

_citys["江西"]["九江"].push({
  val: "JJA",
  name: "沃尔沃汽车九江福沃4S中心"
});

_citys["上海"]["上海"].push({
  val: "SHI",
  name: "沃尔沃汽车上海东昌4S中心"
});

_citys["江苏"]["苏州"].push({
  val: "SUD",
  name: "沃尔沃汽车苏州东昌4S中心"
});

_citys["浙江"]["宁波"].push({
  val: "NBA",
  name: "沃尔沃汽车宁波丰颐4S中心"
});

_citys["上海"]["上海"].push({
  val: "SHA",
  name: "沃尔沃汽车上海世之沃浦西4S中心"
});

_citys["安徽"]["芜湖"].push({
  val: "HFB",
  name: "沃尔沃汽车芜湖豪骏4S中心"
});

_citys["河北"]["唐山"].push({
  val: "TSC",
  name: "沃尔沃汽车唐山凯骐4S中心"
});

_citys["山东"]["滨州"].push({
  val: "BZA",
  name: "沃尔沃汽车滨州东泰4S中心"
});

_citys["江苏"]["常熟"].push({
  val: "SUC",
  name: "沃尔沃汽车常熟通孚祥3S中心"
});

_citys["江西"]["南昌"].push({
  val: "NCB",
  name: "沃尔沃汽车南昌东沃4S中心"
});

_citys["江西"]["上饶"].push({
  val: "SRA",
  name: "沃尔沃汽车上饶名一4S中心"
});

_citys["山东"]["德州"].push({
  val: "DZA",
  name: "沃尔沃汽车德州瑞沃4S中心"
});

_citys["河北"]["邢台"].push({
  val: "XTA",
  name: "沃尔沃汽车邢台蓝池4S中心"
});

_citys["云南"]["红河"].push({
  val: "HHA",
  name: "沃尔沃汽车红河沃捷4S中心"
});

_citys["福建"]["漳州"].push({
  val: "ZZC",
  name: "沃尔沃汽车漳州新成功4S店中心"
});

_citys["湖南"]["株洲"].push({
  val: "ZZA",
  name: "沃尔沃汽车株洲德顺4S中心"
});

_citys["四川"]["南充"].push({
  val: "NAA",
  name: "沃尔沃汽车南充品信4S中心"
});

_citys["湖北"]["襄阳"].push({
  val: "XYC",
  name: "沃尔沃汽车襄阳建银4S中心"
});

_citys["广东"]["深圳"].push({
  val: "SZD",
  name: "沃尔沃汽车深圳鼎沃3S中心"
});

_citys["湖北"]["武汉"].push({
  val: "WHF",
  name: "沃尔沃汽车武汉建银4S中心"
});

_citys["重庆"]["重庆"].push({
  val: "CQD",
  name: "沃尔沃汽车重庆万友都成4S中心"
});

_citys["安徽"]["合肥"].push({
  val: "HFD",
  name: "沃尔沃汽车合肥恒信4S中心"
});

_citys["广西"]["桂林"].push({
  val: "GLA",
  name: "沃尔沃汽车桂林广汇3S中心"
});

_citys["浙江"]["宁波"].push({
  val: "NBD",
  name: "沃尔沃汽车宁波沃龙4S中心"
});

_citys["河南"]["南阳"].push({
  val: "NYA",
  name: "沃尔沃汽车南阳和谐4S中心"
});

_citys["陕西"]["咸阳"].push({
  val: "XYA",
  name: "沃尔沃汽车咸阳新丰泰4S中心"
});

_citys["福建"]["莆田"].push({
  val: "PTA",
  name: "沃尔沃汽车莆田吉诺4S中心"
});

_citys["福建"]["福州"].push({
  val: "FZA",
  name: "沃尔沃汽车福州中汽南方4S中心"
});

_citys["广东"]["广州"].push({
  val: "GZD",
  name: "沃尔沃汽车广州广物君沃4S中心"
});

_citys["吉林"]["吉林"].push({
  val: "JLA",
  name: "沃尔沃汽车吉林市吉林维信4S中心"
});

_citys["陕西"]["宝鸡"].push({
  val: "BJZ",
  name: "沃尔沃汽车宝鸡宝沃4S中心"
});

_citys["陕西"]["延安"].push({
  val: "YAA",
  name: "沃尔沃汽车延安广汇4S中心"
});

_citys["山东"]["济南"].push({
  val: "JNG",
  name: "沃尔沃汽车济南京泰4S中心"
});

_citys["浙江"]["义乌"].push({
  val: "YWA",
  name: "沃尔沃汽车义乌金沃维修站"
});

_citys["四川"]["成都"].push({
  val: "CDE",
  name: "沃尔沃汽车成都广汇4S中心"
});

_citys["广东"]["深圳"].push({
  val: "SZC",
  name: "沃尔沃汽车深圳德顺4S中心"
});

_citys["河南"]["新乡"].push({
  val: "XXA",
  name: "沃尔沃汽车新乡东安4S中心"
});

_citys["重庆"]["重庆"].push({
  val: "CQE",
  name: "沃尔沃汽车重庆万友3S中心"
});

_citys["北京"]["北京"].push({
  val: "BJO",
  name: "沃尔沃汽车北京正通鼎沃3S中心"
});

_citys["浙江"]["温州"].push({
  val: "WZD",
  name: "沃尔沃汽车温州荣沃4S中心"
});

_citys["江苏"]["苏州"].push({
  val: "SUB",
  name: "沃尔沃汽车昆山通孚祥展厅"
});

_citys["河南"]["郑州"].push({
  val: "HNF",
  name: "沃尔沃汽车郑州中沃4S中心"
});

_citys["河北"]["沧州"].push({
  val: "HBH",
  name: "沃尔沃汽车沧州广汇4S中心"
});

_citys["河北"]["石家庄"].push({
  val: "HBG",
  name: "沃尔沃汽车石家庄瑞沃4S中心"
});

_citys["四川"]["成都"].push({
  val: "CDF",
  name: "沃尔沃汽车成都建国4S中心"
});

_citys["江苏"]["南京"].push({
  val: "NJA",
  name: "沃尔沃汽车南京世贸泰信4S中心"
});

_citys["山西"]["临汾"].push({
  val: "LFA",
  name: "沃尔沃汽车临汾海之沃4S中心"
});

_citys["浙江"]["舟山"].push({
  val: "ZSB",
  name: "沃尔沃汽车舟山永杰4S中心"
});

_citys["山西"]["运城"].push({
  val: "YUA",
  name: "沃尔沃汽车运城海之沃4S中心"
});

_citys["河南"]["郑州"].push({
  val: "HNH",
  name: "沃尔沃汽车郑州东沃4S中心"
});

_citys["重庆"]["重庆"].push({
  val: "CQF",
  name: "沃尔沃重庆高新璟沃4S中心"
});

_citys["陕西"]["西安"].push({
  val: "XAE",
  name: "沃尔沃西安天一汇通4S中心"
});

_citys["江苏"]["南京"].push({
  val: "NJC",
  name: "沃尔沃汽车南京天泓凯润4S中心"
});

_citys["广东"]["江门"].push({
  val: "JMA",
  name: "沃尔沃汽车江门元柏通4S中心"
});

_citys["浙江"]["嘉兴"].push({
  val: "HAA",
  name: "沃尔沃汽车海宁弘丰4S中心"
});

_citys["上海"]["上海"].push({
  val: "SHJ",
  name: "沃尔沃汽车上海永达沃尔沃4S中心"
});

_citys["广东"]["佛山"].push({
  val: "FSA",
  name: "沃尔沃汽车佛山南方骏沃4S中心"
});

_citys["湖北"]["宜昌"].push({
  val: "YCD",
  name: "沃尔沃汽车宜昌恒信瑞沃4S中心"
});

_citys["广东"]["深圳"].push({
  val: "SZF",
  name: "沃尔沃汽车深圳市德智行4S中心"
});

_citys["广西"]["钦州"].push({
  val: "QAA",
  name: "沃尔沃汽车钦州恒沃4S中心"
});

_citys["广东"]["湛江"].push({
  val: "ZAA",
  name: "沃尔沃汽车湛江合沃4s中心"
});

_citys["浙江"]["衢州"].push({
  val: "QUA",
  name: "沃尔沃汽车衢州君悦瑞沃4S中心"
});

_citys["浙江"]["金华"].push({
  val: "JHC",
  name: "沃尔沃汽车金华中沃4S中心"
});

_citys["广东"]["深圳"].push({
  val: "SZE",
  name: "沃尔沃汽车深圳德利行4S中心"
});

_citys["湖南"]["长沙"].push({
  val: "CSD",
  name: "沃尔沃汽车长沙德熙行4S中心"
});

_citys["江苏"]["连云港"].push({
  val: "LYC",
  name: "沃尔沃汽车连云港伟途4S中心"
});

_citys["天津"]["天津"].push({
  val: "TJD",
  name: "沃尔沃汽车天津荣沃4S中心"
});

_citys["四川"]["泸州"].push({
  val: "LZD",
  name: "沃尔沃汽车泸州市泸州中沃4S中心"
});

_citys["江苏"]["南通"].push({
  val: "NTB",
  name: "沃尔沃汽车南通市南通文峰恒信行4S中心"
});

_citys["安徽"]["蚌埠"].push({
  val: "BBA",
  name: "沃尔沃汽车蚌埠市蚌埠永达沃尔沃4S中心"
});

_citys["湖南"]["怀化"].push({
  val: "HUA",
  name: "沃尔沃汽车怀化仁达4S中心"
});

_citys["广东"]["广州"].push({
  val: "GZE",
  name: "沃尔沃汽车广州南方骏沃4S中心"
});

_citys["广东"]["清远"].push({
  val: "QYA",
  name: "沃尔沃汽车清远南方骏沃4S中心"
});

random = 1 + parseInt(Math.random() * 5);

UGC = function () {
  // imageList = []
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
      console.log("imageList:", imageList.length);
      // .add('a-1',"#{_CDN}mp3/a-1.mp3")
      // .add('a-2',"#{_CDN}mp3/a-2.mp3")
      // .add('b-1',"#{_CDN}mp3/b-1.mp3")
      // .add('b-2',"#{_CDN}mp3/b-2.mp3")
      // .add('c-1',"#{_CDN}mp3/c-1.mp3")
      // .add('c-2',"#{_CDN}mp3/c-2.mp3")
      PIXI.loader.add(imageList).use(this.loaditem.bind(this)).load(buildUGC.bind(this));
      this.default.MH = this.opts.h * 0.65;
    }

    _createClass(UGC, [{
      key: 'loaditem',
      value: function loaditem() {
        this.loadNumber++;
        loading.progressOn = parseInt(this.loadNumber / imageList.length * 100);
        // console.log @.loadNumber,loading.progressOn,@.loadNumber is imageList.length
        if (this.loadNumber === imageList.length) {
          return buildUGC.bind(this).call();
        }
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
// @codekit-prepend "../../libs/vue/vue-register"
// @codekit-prepend "../../libs/coffee/pixi-base"
// @codekit-prepend "./dealer"
// @codekit-prepend "./UGC"
String.prototype.gblen = function () {
  var l, len, ref;
  len = 0;
  for (i = l = 0, ref = this.length; 0 <= ref ? l < ref : l > ref; i = 0 <= ref ? ++l : --l) {
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
  redirectUrl = "https://m.giccoo.com/lancomeGEN/";
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
  // document.body.addEventListener "touchstart", (evt)->
  // 	lastY = evt.touches[0].clientY
  // document.body.addEventListener "touchmove", (evt)->
  // 	y = evt.touches[0].clientY
  // 	st = this.scrollTop
  // 	if y isnt lastY
  // 		evt.preventDefault()
  // 	lastY = y
  // ,{passive: false}
  if (window.navigator.userAgent.indexOf("NeteaseMusic") > -1) {
    sys = "NeteaseMusic";
  } else {
    loadWechatConfig();
    wx.ready(function () {
      var shareContent;
      shareContent = {
        title: "自信心声，因我而生",
        desc: "渴望拥有外在的光芒，就更应该聆听自己内心的身音",
        link: "http://m.giccoo.com/lancomeGEN/",
        imgUrl: "http://m.giccoo.com/lancomeGEN/img/ico.jpg",
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
      note: true,
      playing: false
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
      next: function next() {
        document.getElementById('load').className += " fadeOut animated";
        _public.note = false;
        return setTimeout(function () {
          return document.getElementById('load').style.display = "none";
        }, 520);
      }
    },
    mounted: function mounted() {
      var _this = this;

      var timein;
      this.mounted = true;
      TrueH = document.documentElement.clientHeight;
      TrueW = document.documentElement.clientWidth;
      return timein = setInterval(function () {
        _this.progress += 2;
        if (_this.progress >= _this.progressOn) {
          _this.progress = _this.progressOn;
        }
        if (_this.progress >= 100) {
          _this.progress = 100;
          clearInterval(timein);
          main.mounted = true;
          return _cache = setTimeout(function () {
            return _this.next();
          }, 200);
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
  console.log(TrueW, TrueH, _citys);
  return main = new Vue({
    el: "#main",
    data: {
      w: TrueW,
      h: TrueH,
      biger: TrueW / TrueH < 0.55,
      smaller: smaller,
      afterH: smaller ? TrueH * 1.15 - 1029 * (TrueW / 750) : TrueH - 1029 * (TrueW / 750),
      wy: false,
      mounted: true,
      loading: false,
      lotteryShow: false,
      pageInfoShow: false,
      pageIndex: 2,
      step: 1,
      singerIndex: 1,
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
        nickname: {
          id: "nickname",
          type: "input",
          label: "昵称",
          placeholder: "请填写姓名",
          value: ""
        },
        mobile: {
          id: "mobile",
          type: "input",
          label: "电话",
          placeholder: "请填写电话",
          value: ""
        },
        province: {
          id: "province",
          type: "select",
          label: "省份",
          link: "city",
          value: "",
          options: _citys
        },
        city: {
          id: "city",
          type: "select",
          label: "城市",
          link: "dealer",
          value: "",
          options: _citys["北京"]
        },
        dealer: {
          id: "city",
          type: "select",
          label: "经销商",
          array: true,
          value: "",
          options: _citys["北京"]["北京"]
        }
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
      canUpload: true,
      handCover: false,
      last_update: 0,
      lastX: 0,
      lastY: 0,
      lastZ: 0,
      speed: 4000,
      maxSpeed: 0,
      swing: false
    },
    methods: {
      showAnswerPage: function showAnswerPage() {
        this.pageIndex = 2;
        if (!_public.playing) {
          _public.playing = true;
        }
        return setTimeout(function () {
          return setup();
        }, 300);
      },
      openPop: function openPop() {
        return this.lotteryShow = true;
      },
      openWeb: function openWeb() {
        console.log("open web");
        return window.location.href = "https://www.lancome.com.cn/landingpage/advanced-genifique?utm_source=NeteaseMusic&utm_medium=DISP&utm_content=06-02NeteaseMusic_H5&utm_campaign=CN_20180803_GEN1+1_LPD_LAN_FS_Regular_NVD_DISP_MO";
      },
      sharePost: function sharePost() {
        ugc.app.renderer.render(ugc.app.stage);
        this.ugc = ugc.app.view.toDataURL();
        return setLottery();
      },
      share: function share() {
        var data, folder, image;
        image = this.ugc;
        folder = "lancomeGEN";
        data = {
          image: image,
          folder: folder
        };
        this.folder = folder;
        if (image == null) {
          return this.faild();
        }
        if (this.pushed) {
          return false;
        }
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
        this.shareImageLink = data.info;
        this.pushed = false;
        this.loading = false;
        return neteaseShareImage();
      },
      faild: function faild(err) {
        this.pushed = false;
        this.loading = false;
        return console.log("err:", err);
      },
      setugc: function setugc(link) {
        return this.ugc = link;
      },
      pageHand: function pageHand() {
        var _this2 = this;

        this.pageIndex = 3;
        setTimeout(function () {
          return _this2.swing = true;
        }, 300);
        return setTimeout(function () {
          return finishAll();
        }, 700);
      },
      deviceMotionHandler: function deviceMotionHandler(evt) {
        var acceleration, curTime, diffTime, speed, x, y, z;
        if (!this.swing) {
          return false;
        }
        acceleration = evt.accelerationIncludingGravity;
        curTime = new Date().getTime();
        // console.log curTime-@.last_update
        if (curTime - this.last_update > 10) {
          diffTime = curTime - this.last_update;
          this.last_update = curTime;
          x = acceleration.x;
          y = acceleration.y;
          z = acceleration.z;
          speed = Math.sqrt((x - this.lastX) * (x - this.lastX) + (y - this.lastY) * (y - this.lastY) + (z - this.lastZ) * (z - this.lastZ)) / diffTime * 10000;
          // console.log x,y,z,@.speed,speed
          if (speed > this.speed) {
            this.maxSpeed += 1;
            if (this.maxSpeed >= 10) {
              this.swing = false;
              this.nextPage();
            }
          }
          this.lastX = x;
          this.lastY = y;
          return this.lastZ = z;
        }
      },
      nextPage: function nextPage() {
        console.log("next page run");
        return this.pageIndex = 2;
      }
    },
    // watch:
    mounted: function mounted() {
      var h, version;
      TrueH = document.documentElement.clientHeight;
      TrueW = document.documentElement.clientWidth;
      if (sys === "NeteaseMusic") {
        this.wy = true;
      }
      h = TrueH * 2 * (2 - TrueW * 2 / 750 + 0.01);
      // game = new Game({el: "game",h: h})
      ugc = new UGC({
        el: "ugc",
        w: 640,
        h: 640 / TrueW * TrueH
      });
      version = CloudMusic.getClientVersion().split(".");
      if (window.DeviceMotionEvent) {
        window.addEventListener('devicemotion', this.deviceMotionHandler.bind(this), false);
        this.handCover = false;
        return console.log("devicemotion");
      } else {
        return this.handCover = true;
      }
    }
  });
};

playAudio = function playAudio(id) {
  var audio;
  audio = document.getElementById(id);
  console.log('play ' + id, audio, audio.play());
  audio.play();
  return audio.addEventListener("ended", function () {
    stopAllAudio();
    return hideAnswer();
  }, false);
};

stopAllAudio = function stopAllAudio() {
  var audio, item, l, len2, results;
  results = [];
  for (l = 0, len2 = musicA.length; l < len2; l++) {
    item = musicA[l];
    audio = document.getElementById(item[0]);
    audio.pause();
    audio = document.getElementById(item[1]);
    results.push(audio.pause());
  }
  return results;
};
