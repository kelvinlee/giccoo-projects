"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var $_GET, ANIMATION_END_NAME, ANIMATION_END_NAMES, AnimatedSprite, Container, Graphics, IsPC, ParticleContainer, Sprite, TRANSITION_END_NAME, TRANSITION_END_NAMES, Text, Texture, TextureCache, TrueH, TrueW, UGC, VENDORS, _cache, _citys, _public, _runTime, _second, _startCache, _testTime, apiLink, apiUrl, autoDetectRenderer, createObjectURLfun, css3Prefix, getId, getOrientation, getTe, i, imageurl, init, l, len1, loadWechatConfig, loader, loading, mTestElement, main, musicIconCache, musicLineCache, neteaseShareImage, random, resource, resources, sended, sys, ugc, ugcCache;

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

for (l = 0, len1 = VENDORS.length; l < len1; l++) {
  i = VENDORS[l];
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

$_GET = function () {
  var get, j, len2, m, u, url;
  url = window.document.location.href.toString();
  u = url.split('?');

  if (typeof u[1] === 'string') {
    u = u[1].split('&');
    get = {};
    console.log(u);

    for (m = 0, len2 = u.length; m < len2; m++) {
      i = u[m];
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
    this.audio = this.$el.children[1]; // console.log @audio
    // @audioOther = @$el.children[2]

    this.audio.addEventListener("pause", this.pause.bind(this));
    this.audio.addEventListener("play", this.play.bind(this));
    return this.audio.addEventListener("ended", this.ended.bind(this));
  }
}); // @audio.play()
// console.log @audio,@audioOther,@playing

Vue.component("form-grounp", {
  template: '<div class="form"> <div v-for="item,index in form" class="form-group" :class="\'type-\'+type[item.type]+(item.class?\' \'+item.class:\'\')"> <label :for="item.id" v-if="item.label">{{item.label}}</label> <input :id="item.id" :placeholder="item.placeholder" v-if="type[item.type] == \'input\'" v-model="item.value" type="text"> <div v-if="type[item.type] == \'select\'" class="select"> <span>{{getOptionsName(item)}}</span> <select :id="item.id" v-model="item.value" v-if="!item.array"> <option v-for="(item, key) in item.options" :disabled="!item" :value="key">{{key}}</option> </select> <select :id="item.id" v-model="item.value" v-if="item.array"> <option v-for="(item, index) in item.options" :disabled="item.disabled" :value="item.val">{{item.name}}</option> </select> </div> </div> <div @click="submit" class="btn-submit"><img src="./img/btn-submit.png" /></div> </div>',
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
  watch: {
    form: {
      handler: function handler(v) {
        return console.log("form:", v);
      },
      deep: true
    }
  },
  methods: {
    getOptionsName: function getOptionsName(item) {
      var it, len2, m, ref;

      if (!item.array) {
        if (item.value === "") {
          return Object.keys(item.options)[0];
        }

        return item.value;
      } else {
        ref = item.options;

        for (m = 0, len2 = ref.length; m < len2; m++) {
          it = ref[m];

          if (it.val === item.value) {
            return it.name;
          }
        }

        return item.options[0].name;
      }
    },
    submit: function submit(evt) {
      var data, k, ref, v;
      data = {};
      console.log("first Time..");
      ref = this.form;

      for (k in ref) {
        v = ref[k];
        data[k] = v.value;
      } // console.log "submit:",data


      return this.$emit("submit", data);
    }
  },
  mounted: function mounted(el) {
    var k, ref, results, self, v; // console.log "el:",this,this.form

    self = this;
    ref = this.form;
    results = [];

    for (k in ref) {
      v = ref[k];

      if (v.type === "select") {
        console.log("form.".concat(k, ".options"));
        this.$watch("form.".concat(k, ".options"), function (val) {
          return console.log("changed:", val);
        }, {
          deep: true
        });
      }

      if (v.link != null && v.type === "select") {
        results.push(this.$watch("form.".concat(k), function (n, o) {
          var m, ref1, results1;

          if (self.form[n.link] == null) {
            return false;
          }

          self.form[n.link].options = n.options[n.value];

          if (self.form[n.link].array) {
            console.log(n.link, self.form[n.link].value, n.options[n.value][0].val);
            return self.form[n.link].value = n.options[n.value][0].val;
          } else {
            results1 = [];

            for (i = m = 0, ref1 = Object.keys(n.options[n.value]).length; 0 <= ref1 ? m < ref1 : m > ref1; i = 0 <= ref1 ? ++m : --m) {
              if (n.options[n.value][Object.keys(n.options[n.value])[i]]) {
                self.form[n.link].value = Object.keys(n.options[n.value])[i];
                break;
              } else {
                results1.push(void 0);
              }
            }

            return results1;
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
}; // for fix ios 8 less


if (Number.isInteger == null) {
  Number.isInteger = function (int) {
    return int >= 0;
  };
}

_citys = {};
_citys["请选择省份"] = {
  "请选择城市": [{
    name: "请选择经销商",
    val: "请选择经销商"
  }]
};
_citys["北京"] = {};
_citys["上海"] = {};
_citys["天津"] = {};
_citys["重庆"] = {};
_citys["河北"] = {};
_citys["山西"] = {};
_citys["内蒙古"] = {};
_citys["辽宁"] = {};
_citys["吉林"] = {};
_citys["黑龙江"] = {};
_citys["江苏"] = {};
_citys["浙江"] = {};
_citys["安徽"] = {};
_citys["福建"] = {};
_citys["江西"] = {};
_citys["山东"] = {};
_citys["河南"] = {};
_citys["湖北"] = {};
_citys["湖南"] = {};
_citys["广东"] = {};
_citys["广西"] = {};
_citys["海南"] = {};
_citys["四川"] = {};
_citys["贵州"] = {};
_citys["云南"] = {};
_citys["西藏"] = {};
_citys["陕西"] = {};
_citys["甘肃"] = {};
_citys["宁夏"] = {};
_citys["青海"] = {};
_citys["新疆"] = {};
_citys["北京"]["东城"] = [];
_citys["北京"]["西城"] = [];
_citys["北京"]["崇文"] = [];
_citys["北京"]["宣武"] = [];
_citys["北京"]["朝阳"] = [];
_citys["北京"]["丰台"] = [];
_citys["北京"]["石景山"] = [];
_citys["北京"]["海淀"] = [];
_citys["北京"]["门头沟"] = [];
_citys["北京"]["房山"] = [];
_citys["北京"]["通州"] = [];
_citys["北京"]["顺义"] = [];
_citys["北京"]["昌平"] = [];
_citys["北京"]["大兴"] = [];
_citys["北京"]["平谷"] = [];
_citys["北京"]["怀柔"] = [];
_citys["北京"]["密云"] = [];
_citys["北京"]["延庆"] = [];
_citys["上海"]["黄浦"] = [];
_citys["上海"]["卢湾"] = [];
_citys["上海"]["徐汇"] = [];
_citys["上海"]["长宁"] = [];
_citys["上海"]["静安"] = [];
_citys["上海"]["普陀"] = [];
_citys["上海"]["闸北"] = [];
_citys["上海"]["虹口"] = [];
_citys["上海"]["杨浦"] = [];
_citys["上海"]["闵行"] = [];
_citys["上海"]["宝山"] = [];
_citys["上海"]["嘉定"] = [];
_citys["上海"]["浦东"] = [];
_citys["上海"]["金山"] = [];
_citys["上海"]["松江"] = [];
_citys["上海"]["青浦"] = [];
_citys["上海"]["南汇"] = [];
_citys["上海"]["奉贤"] = [];
_citys["上海"]["崇明"] = [];
_citys["天津"]["和平"] = [];
_citys["天津"]["东丽"] = [];
_citys["天津"]["河东"] = [];
_citys["天津"]["西青"] = [];
_citys["天津"]["河西"] = [];
_citys["天津"]["津南"] = [];
_citys["天津"]["南开"] = [];
_citys["天津"]["北辰"] = [];
_citys["天津"]["河北"] = [];
_citys["天津"]["武清"] = [];
_citys["天津"]["红挢"] = [];
_citys["天津"]["塘沽"] = [];
_citys["天津"]["汉沽"] = [];
_citys["天津"]["大港"] = [];
_citys["天津"]["宁河"] = [];
_citys["天津"]["静海"] = [];
_citys["天津"]["宝坻"] = [];
_citys["天津"]["蓟县"] = [];
_citys["重庆"]["万州"] = [];
_citys["重庆"]["涪陵"] = [];
_citys["重庆"]["渝中"] = [];
_citys["重庆"]["大渡口"] = [];
_citys["重庆"]["江北"] = [];
_citys["重庆"]["沙坪坝"] = [];
_citys["重庆"]["九龙坡"] = [];
_citys["重庆"]["南岸"] = [];
_citys["重庆"]["北碚"] = [];
_citys["重庆"]["万盛"] = [];
_citys["重庆"]["双挢"] = [];
_citys["重庆"]["渝北"] = [];
_citys["重庆"]["巴南"] = [];
_citys["重庆"]["黔江"] = [];
_citys["重庆"]["长寿"] = [];
_citys["重庆"]["綦江"] = [];
_citys["重庆"]["潼南"] = [];
_citys["重庆"]["铜梁"] = [];
_citys["重庆"]["大足"] = [];
_citys["重庆"]["荣昌"] = [];
_citys["重庆"]["壁山"] = [];
_citys["重庆"]["梁平"] = [];
_citys["重庆"]["城口"] = [];
_citys["重庆"]["丰都"] = [];
_citys["重庆"]["垫江"] = [];
_citys["重庆"]["武隆"] = [];
_citys["重庆"]["忠县"] = [];
_citys["重庆"]["开县"] = [];
_citys["重庆"]["云阳"] = [];
_citys["重庆"]["奉节"] = [];
_citys["重庆"]["巫山"] = [];
_citys["重庆"]["巫溪"] = [];
_citys["重庆"]["石柱"] = [];
_citys["重庆"]["秀山"] = [];
_citys["重庆"]["酉阳"] = [];
_citys["重庆"]["彭水"] = [];
_citys["重庆"]["江津"] = [];
_citys["重庆"]["合川"] = [];
_citys["重庆"]["永川"] = [];
_citys["重庆"]["南川"] = [];
_citys["河北"]["石家庄"] = [];
_citys["河北"]["邯郸"] = [];
_citys["河北"]["邢台"] = [];
_citys["河北"]["保定"] = [];
_citys["河北"]["张家口"] = [];
_citys["河北"]["承德"] = [];
_citys["河北"]["廊坊"] = [];
_citys["河北"]["唐山"] = [];
_citys["河北"]["秦皇岛"] = [];
_citys["河北"]["沧州"] = [];
_citys["河北"]["衡水"] = [];
_citys["山西"]["太原"] = [];
_citys["山西"]["大同"] = [];
_citys["山西"]["阳泉"] = [];
_citys["山西"]["长治"] = [];
_citys["山西"]["晋城"] = [];
_citys["山西"]["朔州"] = [];
_citys["山西"]["吕梁"] = [];
_citys["山西"]["忻州"] = [];
_citys["山西"]["晋中"] = [];
_citys["山西"]["临汾"] = [];
_citys["山西"]["运城"] = [];
_citys["内蒙古"]["呼和浩特"] = [];
_citys["内蒙古"]["包头"] = [];
_citys["内蒙古"]["乌海"] = [];
_citys["内蒙古"]["赤峰"] = [];
_citys["内蒙古"]["呼伦贝尔盟"] = [];
_citys["内蒙古"]["阿拉善盟"] = [];
_citys["内蒙古"]["哲里木盟"] = [];
_citys["内蒙古"]["兴安盟"] = [];
_citys["内蒙古"]["乌兰察布盟"] = [];
_citys["内蒙古"]["锡林郭勒盟"] = [];
_citys["内蒙古"]["巴彦淖尔盟"] = [];
_citys["内蒙古"]["伊克昭盟"] = [];
_citys["辽宁"]["沈阳"] = [];
_citys["辽宁"]["大连"] = [];
_citys["辽宁"]["鞍山"] = [];
_citys["辽宁"]["抚顺"] = [];
_citys["辽宁"]["本溪"] = [];
_citys["辽宁"]["丹东"] = [];
_citys["辽宁"]["锦州"] = [];
_citys["辽宁"]["营口"] = [];
_citys["辽宁"]["阜新"] = [];
_citys["辽宁"]["辽阳"] = [];
_citys["辽宁"]["盘锦"] = [];
_citys["辽宁"]["铁岭"] = [];
_citys["辽宁"]["朝阳"] = [];
_citys["辽宁"]["葫芦岛"] = [];
_citys["吉林"]["长春"] = [];
_citys["吉林"]["吉林"] = [];
_citys["吉林"]["四平"] = [];
_citys["吉林"]["辽源"] = [];
_citys["吉林"]["通化"] = [];
_citys["吉林"]["白山"] = [];
_citys["吉林"]["松原"] = [];
_citys["吉林"]["白城"] = [];
_citys["吉林"]["延边"] = [];
_citys["黑龙江"]["哈尔滨"] = [];
_citys["黑龙江"]["齐齐哈尔"] = [];
_citys["黑龙江"]["牡丹江"] = [];
_citys["黑龙江"]["佳木斯"] = [];
_citys["黑龙江"]["大庆"] = [];
_citys["黑龙江"]["绥化"] = [];
_citys["黑龙江"]["鹤岗"] = [];
_citys["黑龙江"]["鸡西"] = [];
_citys["黑龙江"]["黑河"] = [];
_citys["黑龙江"]["双鸭山"] = [];
_citys["黑龙江"]["伊春"] = [];
_citys["黑龙江"]["七台河"] = [];
_citys["黑龙江"]["大兴安岭"] = [];
_citys["江苏"]["南京"] = [];
_citys["江苏"]["镇江"] = [];
_citys["江苏"]["苏州"] = [];
_citys["江苏"]["南通"] = [];
_citys["江苏"]["扬州"] = [];
_citys["江苏"]["盐城"] = [];
_citys["江苏"]["徐州"] = [];
_citys["江苏"]["连云港"] = [];
_citys["江苏"]["常州"] = [];
_citys["江苏"]["无锡"] = [];
_citys["江苏"]["宿迁"] = [];
_citys["江苏"]["泰州"] = [];
_citys["江苏"]["淮安"] = [];
_citys["浙江"]["杭州"] = [];
_citys["浙江"]["宁波"] = [];
_citys["浙江"]["温州"] = [];
_citys["浙江"]["嘉兴"] = [];
_citys["浙江"]["湖州"] = [];
_citys["浙江"]["绍兴"] = [];
_citys["浙江"]["金华"] = [];
_citys["浙江"]["衢州"] = [];
_citys["浙江"]["舟山"] = [];
_citys["浙江"]["台州"] = [];
_citys["浙江"]["丽水"] = [];
_citys["安徽"]["合肥"] = [];
_citys["安徽"]["芜湖"] = [];
_citys["安徽"]["蚌埠"] = [];
_citys["安徽"]["马鞍山"] = [];
_citys["安徽"]["淮北"] = [];
_citys["安徽"]["铜陵"] = [];
_citys["安徽"]["安庆"] = [];
_citys["安徽"]["黄山"] = [];
_citys["安徽"]["滁州"] = [];
_citys["安徽"]["宿州"] = [];
_citys["安徽"]["池州"] = [];
_citys["安徽"]["淮南"] = [];
_citys["安徽"]["巢湖"] = [];
_citys["安徽"]["阜阳"] = [];
_citys["安徽"]["六安"] = [];
_citys["安徽"]["宣城"] = [];
_citys["安徽"]["亳州"] = [];
_citys["福建"]["福州"] = [];
_citys["福建"]["厦门"] = [];
_citys["福建"]["莆田"] = [];
_citys["福建"]["三明"] = [];
_citys["福建"]["泉州"] = [];
_citys["福建"]["漳州"] = [];
_citys["福建"]["南平"] = [];
_citys["福建"]["龙岩"] = [];
_citys["福建"]["宁德"] = [];
_citys["江西"]["南昌"] = [];
_citys["江西"]["景德镇"] = [];
_citys["江西"]["九江"] = [];
_citys["江西"]["鹰潭"] = [];
_citys["江西"]["萍乡"] = [];
_citys["江西"]["新余"] = [];
_citys["江西"]["赣州"] = [];
_citys["江西"]["吉安"] = [];
_citys["江西"]["宜春"] = [];
_citys["江西"]["抚州"] = [];
_citys["江西"]["上饶"] = [];
_citys["山东"]["济南"] = [];
_citys["山东"]["青岛"] = [];
_citys["山东"]["淄博"] = [];
_citys["山东"]["枣庄"] = [];
_citys["山东"]["东营"] = [];
_citys["山东"]["烟台"] = [];
_citys["山东"]["潍坊"] = [];
_citys["山东"]["济宁"] = [];
_citys["山东"]["泰安"] = [];
_citys["山东"]["威海"] = [];
_citys["山东"]["日照"] = [];
_citys["山东"]["莱芜"] = [];
_citys["山东"]["临沂"] = [];
_citys["山东"]["德州"] = [];
_citys["山东"]["聊城"] = [];
_citys["山东"]["滨州"] = [];
_citys["山东"]["菏泽"] = [];
_citys["河南"]["郑州"] = [];
_citys["河南"]["开封"] = [];
_citys["河南"]["洛阳"] = [];
_citys["河南"]["平顶山"] = [];
_citys["河南"]["安阳"] = [];
_citys["河南"]["鹤壁"] = [];
_citys["河南"]["新乡"] = [];
_citys["河南"]["焦作"] = [];
_citys["河南"]["濮阳"] = [];
_citys["河南"]["许昌"] = [];
_citys["河南"]["漯河"] = [];
_citys["河南"]["三门峡"] = [];
_citys["河南"]["南阳"] = [];
_citys["河南"]["商丘"] = [];
_citys["河南"]["信阳"] = [];
_citys["河南"]["周口"] = [];
_citys["河南"]["驻马店"] = [];
_citys["河南"]["济源"] = [];
_citys["湖北"]["武汉"] = [];
_citys["湖北"]["宜昌"] = [];
_citys["湖北"]["荆州"] = [];
_citys["湖北"]["襄阳"] = [];
_citys["湖北"]["黄石"] = [];
_citys["湖北"]["荆门"] = [];
_citys["湖北"]["黄冈"] = [];
_citys["湖北"]["十堰"] = [];
_citys["湖北"]["恩施"] = [];
_citys["湖北"]["潜江"] = [];
_citys["湖北"]["天门"] = [];
_citys["湖北"]["仙桃"] = [];
_citys["湖北"]["随州"] = [];
_citys["湖北"]["咸宁"] = [];
_citys["湖北"]["孝感"] = [];
_citys["湖北"]["鄂州"] = [];
_citys["湖南"]["长沙"] = [];
_citys["湖南"]["常德"] = [];
_citys["湖南"]["株洲"] = [];
_citys["湖南"]["湘潭"] = [];
_citys["湖南"]["衡阳"] = [];
_citys["湖南"]["岳阳"] = [];
_citys["湖南"]["邵阳"] = [];
_citys["湖南"]["益阳"] = [];
_citys["湖南"]["娄底"] = [];
_citys["湖南"]["怀化"] = [];
_citys["湖南"]["郴州"] = [];
_citys["湖南"]["永州"] = [];
_citys["湖南"]["湘西"] = [];
_citys["湖南"]["张家界"] = [];
_citys["广东"]["广州"] = [];
_citys["广东"]["深圳"] = [];
_citys["广东"]["珠海"] = [];
_citys["广东"]["汕头"] = [];
_citys["广东"]["东莞"] = [];
_citys["广东"]["中山"] = [];
_citys["广东"]["佛山"] = [];
_citys["广东"]["韶关"] = [];
_citys["广东"]["江门"] = [];
_citys["广东"]["湛江"] = [];
_citys["广东"]["茂名"] = [];
_citys["广东"]["肇庆"] = [];
_citys["广东"]["惠州"] = [];
_citys["广东"]["梅州"] = [];
_citys["广东"]["汕尾"] = [];
_citys["广东"]["河源"] = [];
_citys["广东"]["阳江"] = [];
_citys["广东"]["清远"] = [];
_citys["广东"]["潮州"] = [];
_citys["广东"]["揭阳"] = [];
_citys["广东"]["云浮"] = [];
_citys["广西"]["南宁"] = [];
_citys["广西"]["柳州"] = [];
_citys["广西"]["桂林"] = [];
_citys["广西"]["梧州"] = [];
_citys["广西"]["北海"] = [];
_citys["广西"]["防城港"] = [];
_citys["广西"]["钦州"] = [];
_citys["广西"]["贵港"] = [];
_citys["广西"]["玉林"] = [];
_citys["广西"]["贺州"] = [];
_citys["广西"]["百色"] = [];
_citys["广西"]["河池"] = [];
_citys["海南"]["海口"] = [];
_citys["海南"]["三亚"] = [];
_citys["四川"]["成都"] = [];
_citys["四川"]["绵阳"] = [];
_citys["四川"]["德阳"] = [];
_citys["四川"]["自贡"] = [];
_citys["四川"]["攀枝花"] = [];
_citys["四川"]["广元"] = [];
_citys["四川"]["内江"] = [];
_citys["四川"]["乐山"] = [];
_citys["四川"]["南充"] = [];
_citys["四川"]["宜宾"] = [];
_citys["四川"]["广安"] = [];
_citys["四川"]["达川"] = [];
_citys["四川"]["雅安"] = [];
_citys["四川"]["眉山"] = [];
_citys["四川"]["甘孜"] = [];
_citys["四川"]["凉山"] = [];
_citys["四川"]["泸州"] = [];
_citys["贵州"]["贵阳"] = [];
_citys["贵州"]["六盘水"] = [];
_citys["贵州"]["遵义"] = [];
_citys["贵州"]["安顺"] = [];
_citys["贵州"]["铜仁"] = [];
_citys["贵州"]["黔西南"] = [];
_citys["贵州"]["毕节"] = [];
_citys["贵州"]["黔东南"] = [];
_citys["贵州"]["黔南"] = [];
_citys["云南"]["昆明"] = [];
_citys["云南"]["大理"] = [];
_citys["云南"]["曲靖"] = [];
_citys["云南"]["玉溪"] = [];
_citys["云南"]["昭通"] = [];
_citys["云南"]["楚雄"] = [];
_citys["云南"]["红河"] = [];
_citys["云南"]["文山"] = [];
_citys["云南"]["思茅"] = [];
_citys["云南"]["西双版纳"] = [];
_citys["云南"]["保山"] = [];
_citys["云南"]["德宏"] = [];
_citys["云南"]["丽江"] = [];
_citys["云南"]["怒江"] = [];
_citys["云南"]["迪庆"] = [];
_citys["云南"]["临沧"] = [];
_citys["西藏"]["拉萨"] = [];
_citys["西藏"]["日喀则"] = [];
_citys["西藏"]["山南"] = [];
_citys["西藏"]["林芝"] = [];
_citys["西藏"]["昌都"] = [];
_citys["西藏"]["阿里"] = [];
_citys["西藏"]["那曲"] = [];
_citys["陕西"]["西安"] = [];
_citys["陕西"]["宝鸡"] = [];
_citys["陕西"]["咸阳"] = [];
_citys["陕西"]["铜川"] = [];
_citys["陕西"]["渭南"] = [];
_citys["陕西"]["延安"] = [];
_citys["陕西"]["榆林"] = [];
_citys["陕西"]["汉中"] = [];
_citys["陕西"]["安康"] = [];
_citys["陕西"]["商洛"] = [];
_citys["甘肃"]["兰州"] = [];
_citys["甘肃"]["嘉峪关"] = [];
_citys["甘肃"]["金昌"] = [];
_citys["甘肃"]["白银"] = [];
_citys["甘肃"]["天水"] = [];
_citys["甘肃"]["酒泉"] = [];
_citys["甘肃"]["张掖"] = [];
_citys["甘肃"]["武威"] = [];
_citys["甘肃"]["定西"] = [];
_citys["甘肃"]["陇南"] = [];
_citys["甘肃"]["平凉"] = [];
_citys["甘肃"]["庆阳"] = [];
_citys["甘肃"]["临夏"] = [];
_citys["甘肃"]["甘南"] = [];
_citys["宁夏"]["银川"] = [];
_citys["宁夏"]["石嘴山"] = [];
_citys["宁夏"]["吴忠"] = [];
_citys["宁夏"]["固原"] = [];
_citys["青海"]["西宁"] = [];
_citys["青海"]["海东"] = [];
_citys["青海"]["海南"] = [];
_citys["青海"]["海北"] = [];
_citys["青海"]["黄南"] = [];
_citys["青海"]["玉树"] = [];
_citys["青海"]["果洛"] = [];
_citys["青海"]["海西"] = [];
_citys["新疆"]["乌鲁木齐"] = [];
_citys["新疆"]["石河子"] = [];
_citys["新疆"]["克拉玛依"] = [];
_citys["新疆"]["伊犁"] = [];
_citys["新疆"]["巴音郭勒"] = [];
_citys["新疆"]["昌吉"] = [];
_citys["新疆"]["克孜勒苏柯尔克孜"] = [];
_citys["新疆"]["博尔塔拉"] = [];
_citys["新疆"]["吐鲁番"] = [];
_citys["新疆"]["哈密"] = [];
_citys["新疆"]["喀什"] = [];
_citys["新疆"]["和田"] = [];
_citys["新疆"]["阿克苏"] = [];
_citys["内蒙古"]["鄂尔多斯"] = [];
_citys["内蒙古"]["通辽"] = [];
_citys["广西"]["来宾"] = [];
_citys["广西"]["崇左"] = [];
_citys["海南"]["琼北"] = [];
_citys["海南"]["琼南"] = [];
_citys["江苏"]["常熟"] = [];
_citys["江苏"]["昆山"] = [];
_citys["江苏"]["张家港"] = [];
_citys["江苏"]["太仓"] = [];
_citys["宁夏"]["中卫"] = [];
_citys["四川"]["遂宁"] = [];
_citys["四川"]["资阳"] = [];
_citys["四川"]["巴中"] = [];
_citys["四川"]["阿坝"] = [];
_citys["新疆"]["塔城"] = [];
_citys["新疆"]["阿勒泰"] = [];
_citys["云南"]["普洱"] = [];
_citys["浙江"]["余慈"] = [];
_citys["浙江"]["乐清"] = [];
_citys["海南"]["昌江"] = [];
_citys["海南"]["东方"] = [];
_citys["海南"]["儋州"] = [];
_citys["海南"]["定安"] = [];
_citys["海南"]["陵水"] = [];
_citys["海南"]["文昌"] = [];
_citys["海南"]["白沙"] = [];
_citys["新疆"]["阿拉尔"] = [];
_citys["新疆"]["米泉"] = [];
_citys["新疆"]["五家渠"] = [];
_citys["内蒙古"]["东胜"] = [];
_citys["江苏"]["泰兴"] = [];
_citys["江苏"]["靖江"] = [];
_citys["江苏"]["兴化"] = [];
random = 1 + parseInt(Math.random() * 5);

UGC = function () {
  // imageList = []
  var UGC =
  /*#__PURE__*/
  function () {
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
      PIXI.loader.add(imageList).use(this.loaditem.bind(this)).load(this.build.bind(this));
      this.default.MH = this.opts.h * 0.65;
    }

    _createClass(UGC, [{
      key: "loaditem",
      value: function loaditem() {
        this.loadNumber++;
        loading.progressOn = parseInt(this.loadNumber / imageList.length * 100);
        console.log("load:", this.loadNumber, loading.progressOn, this.loadNumber === imageList.length);

        if (this.loadNumber === imageList.length) {
          return buildUGC.bind(this).call();
        }
      }
    }, {
      key: "build",
      value: function build() {
        console.log("builded");
        return buildUGC.bind(this).call();
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
}.call(void 0);

loadWechatConfig = function loadWechatConfig() {
  var hm, s, url;
  url = encodeURIComponent(window.location.href.split("#")[0]);
  hm = document.createElement('script');
  hm.src = "//api.giccoo.com/api/config?url=" + url;
  s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(hm, s);
};

$_GET = function () {
  var get, j, len2, m, u, url;
  url = window.document.location.href.toString();
  u = url.split('?');

  if (typeof u[1] === 'string') {
    u = u[1].split('&');
    get = {};
    console.log(u);

    for (m = 0, len2 = u.length; m < len2; m++) {
      i = u[m];
      j = i.split('=');
      get[j[0]] = j[1];
    }

    return get;
  } else {
    return {};
  }
}();

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
}; // for fix ios 8 less


if (Number.isInteger == null) {
  Number.isInteger = function (int) {
    return int >= 0;
  };
}

$_GET = function () {
  var get, j, len2, m, u, url;
  url = window.document.location.href.toString();
  u = url.split('?');

  if (typeof u[1] === 'string') {
    u = u[1].split('&');
    get = {};
    console.log(u);

    for (m = 0, len2 = u.length; m < len2; m++) {
      i = u[m];
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
    this.audio = this.$el.children[1]; // console.log @audio
    // @audioOther = @$el.children[2]

    this.audio.addEventListener("pause", this.pause.bind(this));
    this.audio.addEventListener("play", this.play.bind(this));
    return this.audio.addEventListener("ended", this.ended.bind(this));
  }
}); // @audio.play()
// console.log @audio,@audioOther,@playing

Vue.component("form-grounp", {
  template: '<div class="form"> <div v-for="item,index in form" class="form-group" :class="\'type-\'+type[item.type]+(item.class?\' \'+item.class:\'\')"> <label :for="item.id" v-if="item.label">{{item.label}}</label> <input :id="item.id" :placeholder="item.placeholder" v-if="type[item.type] == \'input\'" v-model="item.value" type="text"> <div v-if="type[item.type] == \'select\'" class="select"> <span>{{getOptionsName(item)}}</span> <select :id="item.id" v-model="item.value" v-if="!item.array"> <option v-for="(item, key) in item.options" :disabled="!item" :value="key">{{key}}</option> </select> <select :id="item.id" v-model="item.value" v-if="item.array"> <option v-for="(item, index) in item.options" :disabled="item.disabled" :value="item.val">{{item.name}}</option> </select> </div> </div> <div @click="submit" class="btn-submit"><img src="./img/btn-submit.png" /></div> </div>',
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
  watch: {
    form: {
      handler: function handler(v) {
        return console.log("form:", v);
      },
      deep: true
    }
  },
  methods: {
    getOptionsName: function getOptionsName(item) {
      var it, len2, m, ref;

      if (!item.array) {
        if (item.value === "") {
          return Object.keys(item.options)[0];
        }

        return item.value;
      } else {
        ref = item.options;

        for (m = 0, len2 = ref.length; m < len2; m++) {
          it = ref[m];

          if (it.val === item.value) {
            return it.name;
          }
        }

        return item.options[0].name;
      }
    },
    submit: function submit(evt) {
      var data, k, ref, v;
      data = {};
      console.log("first Time..");
      ref = this.form;

      for (k in ref) {
        v = ref[k];
        data[k] = v.value;
      } // console.log "submit:",data


      return this.$emit("submit", data);
    }
  },
  mounted: function mounted(el) {
    var k, ref, results, self, v; // console.log "el:",this,this.form

    self = this;
    ref = this.form;
    results = [];

    for (k in ref) {
      v = ref[k];

      if (v.type === "select") {
        console.log("form.".concat(k, ".options"));
        this.$watch("form.".concat(k, ".options"), function (val) {
          return console.log("changed:", val);
        }, {
          deep: true
        });
      }

      if (v.link != null && v.type === "select") {
        results.push(this.$watch("form.".concat(k), function (n, o) {
          var m, ref1, results1;

          if (self.form[n.link] == null) {
            return false;
          }

          self.form[n.link].options = n.options[n.value];

          if (self.form[n.link].array) {
            console.log(n.link, self.form[n.link].value, n.options[n.value][0].val);
            return self.form[n.link].value = n.options[n.value][0].val;
          } else {
            results1 = [];

            for (i = m = 0, ref1 = Object.keys(n.options[n.value]).length; 0 <= ref1 ? m < ref1 : m > ref1; i = 0 <= ref1 ? ++m : --m) {
              if (n.options[n.value][Object.keys(n.options[n.value])[i]]) {
                self.form[n.link].value = Object.keys(n.options[n.value])[i];
                break;
              } else {
                results1.push(void 0);
              }
            }

            return results1;
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
}; // for fix ios 8 less


if (Number.isInteger == null) {
  Number.isInteger = function (int) {
    return int >= 0;
  };
}

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
}; // @codekit-prepend "coffee/css3Prefix"
// @codekit-prepend "../../libs/coffee/loadWechatConfig"
// @codekit-prepend "../../libs/coffee/IsPC"
// @codekit-prepend "../../libs/coffee/get"
// @codekit-prepend "../../libs/vue/vue-player"
// @codekit-prepend "../../libs/vue/vue-register"
// @codekit-prepend "../../libs/coffee/pixi-base"
// @codekit-prepend "./dealer"
// @codekit-prepend "./UGC"


String.prototype.gblen = function () {
  var len, m, ref;
  len = 0;

  for (i = m = 0, ref = this.length; 0 <= ref ? m < ref : m > ref; i = 0 <= ref ? ++m : --m) {
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
apiUrl = "//api.giccoo.com/jeep"; // apiLink = "//localhost:3000/"

apiLink = "//g.giccoo.com/"; // apiLink = "http://192.168.3.53:3000/"
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
  title1 = "一首歌HOLD住人生大场面";
  picUrl = "https://image.giccoo.com/upload/".concat(main.folder, "/") + main.shareImageLink + "@!large";
  redirectUrl = "https://m.giccoo.com/Landrover24/"; // console.log picUrl,"orpheus://sharepic?picUrl="+encodeURIComponent(picUrl)+"&shareUrl="+encodeURIComponent(redirectUrl)+"&wbDesc="+encodeURIComponent(title1)+"&qqDesc="+encodeURIComponent(title1)

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
  TrueW = document.documentElement.clientWidth; // console.log "body:",document.body.clientWidth,document.body.clientHeight
  // if IsPC()
  // 	document.getElementById("qrcode").className += " show"
  // 	return false

  lastY = 0; // 停止上下滚动 / 注意有竖向滚动条会被禁止 (理论可以加到只不能上下滚动上.)
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
        title: "一首歌HOLD住人生大场面",
        desc: "一首歌HOLD住人生大场面",
        link: "http://m.giccoo.com/jeep/",
        imgUrl: "http://m.giccoo.com/jeep/img/ico.jpg",
        success: function success() {},
        // alert "success"
        cancel: function cancel() {}
      }; // alert "cancel"

      wx.onMenuShareTimeline(shareContent);
      wx.onMenuShareAppMessage(shareContent);
      wx.onMenuShareQQ(shareContent);
      return wx.onMenuShareWeibo(shareContent);
    });
  } // _public = new Vue
  // 	el: "#public"
  // 	data:
  // 		note: true
  // 		playing: false


  loading = new Vue({
    el: "#loading",
    data: {
      progress: 0,
      mounted: false,
      progressOn: 0
    },
    methods: {
      next: function next() {
        document.getElementById('load').className += " fadeOut animated"; // _public.note = false

        main.mounted = true;
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
          return _cache = setTimeout(function () {
            return _this.next();
          }, 1000);
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
  console.log(TrueW, TrueH);
  return main = new Vue({
    el: "#main",
    data: {
      w: TrueW,
      h: TrueH,
      biger: TrueW / TrueH < 0.55,
      smaller: smaller,
      afterH: smaller ? TrueH * 1.15 - 1029 * (TrueW / 750) : TrueH - 1029 * (TrueW / 750),
      wy: false,
      mounted: false,
      loading: false,
      pageInfoShow: false,
      pageIndex: 1,
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
      videoIndex: 0,
      videoIndexOld: 0,
      lr: true,
      form: {
        username: {
          id: "username",
          type: "input",
          label: "姓名",
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
          value: Object.keys(_citys)[0],
          options: _citys
        },
        city: {
          id: "city",
          type: "select",
          label: "城市",
          link: "dealer",
          value: Object.keys(_citys["请选择省份"])[0],
          options: _citys["请选择省份"]
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
      swing: false,
      registerShow: false,
      lotteryShow: false,
      lotteryEndShow: false,
      lotteryInfo: {
        id: null,
        random: null
      },
      regSubmited: false,
      giveUp: false,
      gameEnd: false,
      noreg: false,
      ugcShow: false,
      regH: 100
    },
    watch: {
      videoIndex: function videoIndex(n, o) {
        this.videoIndexOld = o; // stopAllVideo()

        document.getElementById("video-".concat(n)).load();
        return document.getElementById("video-".concat(n)).play();
      }
    },
    methods: {
      closeReg: function closeReg() {
        return this.registerShow = false;
      },
      openReg: function openReg(size) {
        this.regH = 100 - size;
        return this.registerShow = true;
      },
      gameStart: function gameStart() {
        this.pageIndex = 2;
        _public.note = false;
        setup();
        return playAudio("answer-1");
      },
      goUGC: function goUGC() {
        return this.lotteryShow = true;
      },
      getLotteryList: function getLotteryList() {
        var _this2 = this;

        return axios.post("".concat(apiLink, "active/soupdaren/list/"), {
          lottery: true
        }).then(function (msg) {
          var item, len2, list, m, ref;

          if (msg.data.code === 200) {
            list = msg.data.list;
            ref = _this2.form.type.options;

            for (m = 0, len2 = ref.length; m < len2; m++) {
              item = ref[m];

              if (list[item.val]) {
                item.disabled = true;
              }
            }

            return main.$children[0].form.type.options[0].name = main.$children[0].form.type.options[0].name + " ";
          }
        });
      },
      // console.log _citys
      // @.form.type.options = _citys
      getLottery: function getLottery() {
        var _this3 = this;

        return axios.post("".concat(apiLink, "active/soupdaren/lottery/"), {
          lottery: true
        }).then(function (msg) {
          if (msg.data.code === 200 && msg.data.info != null) {
            _this3.lotteryInfo.id = msg.data.info.id;
            _this3.lotteryInfo.random = msg.data.info.random;
            return _this3.registerShow = true;
          } else {
            return _this3.lotteryShow = true;
          }
        }).catch(function (err) {
          return _this3.lotteryShow = true;
        });
      },
      submit: function submit(data) {
        var _this4 = this;

        console.log("data:", data);

        if (data.username === "" || data.username.length > 8 || data.username.length < 2) {
          return alert("请输入2-8个字的姓名");
        }

        if (data.mobile === "") {
          return alert("请输入联系电话");
        }

        if (data.province === "" || data.province === "请选择省份") {
          return alert("请选择省份");
        }

        if (data.city === "" || data.city === "请选择城市") {
          return alert("请选择城市");
        }

        return axios.post("".concat(apiLink, "active/autoSave/insert/dataBase/jeep/"), data).then(function (msg) {
          if (msg.data.code === 200) {
            _this4.registerShow = false;
            _this4.regSubmited = true;
            return _this4.lotteryShow = true;
          } else {
            // if @.gameEnd
            // 	@.share()
            return alert(msg.data.reason);
          }
        }).catch(function (err) {
          return alert("服务器连接失败,请重试");
        });
      },
      openForm: function openForm() {
        // return false if @.noreg
        if (this.regSubmited) {
          return this.share();
        } else {
          return this.registerShow = true;
        }
      },
      giveupAward: function giveupAward() {
        this.registerShow = false;
        this.giveUp = true;
        return this.share();
      },
      sharePost: function sharePost(base64) {
        this.gameEnd = true;
        ugc.app.renderer.render(ugc.app.stage); // @.ugc = ugc.app.view.toDataURL()

        return this.ugc = base64;
      },
      restart: function restart() {
        return window.location.reload();
      },
      goshare: function goshare() {
        return goShare();
      },
      share: function share() {
        var data, folder, image;
        this.registerShow = false;
        this.lotteryShow = false;
        console.log("run share");
        ugc.app.renderer.render(ugc.app.stage);
        this.ugc = ugc.app.view.toDataURL();
        image = this.ugc;

        if (this.wy) {
          folder = "jeep";
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
        } else {
          this.ugcShow = true;
          return shareDone();
        }
      },
      success: function success(data) {
        this.shareImageLink = data.info;
        this.pushed = false;
        this.loading = false;
        neteaseShareImage();
        return shareDone();
      },
      // 抽奖
      // unless @.giveUp
      // 	setTimeout =>
      // 		@.getLottery()
      // 	,5000
      faild: function faild(err) {
        this.pushed = false;
        return this.loading = false;
      },
      openMusic: function openMusic(id) {
        // goList()
        if (CloudMusic.isInApp()) {
          return CloudMusic.playlist(id);
        } else {
          return window.location.href = "https://music.163.com/#/playlist?id=".concat(id);
        }
      },
      nextPage: function nextPage() {
        console.log("next page run");

        if (this.nickname === "") {
          return alert("请输入你的名字");
        }

        letsRock(this.nickname);
        return this.pageIndex = 2;
      },
      openInApp: function openInApp() {
        return CloudMusic.open("https://m.giccoo.com/jeep/");
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

      h = TrueH * 2 * (2 - TrueW * 2 / 750 + 0.01); // game = new Game({el: "game",h: h})

      this.wy = CloudMusic.isInApp();
      version = CloudMusic.getClientVersion().split(".");
      return ugc = new UGC({
        el: "ugc",
        w: 640,
        h: 640 / TrueW * TrueH
      });
    }
  });
}; // @.getLotteryList()
// listenAudio()
// if parseInt($_GET["type"]) is 2
// 	@.regSubmited = true
// stopAllVideo = ->
// 	for i in [1..6]
// 		document.getElementById("video-#{i}").pause()
// musicList = ['music-1','music-2','music-3','music-4','music-5','music-6']
// playAudio = (id)->
// 	console.log("not err 6")
// 	stopAllAudio()
// 	console.log("not err 7")
// 	audio = document.getElementById(id)
// 	console.log("not err 8")
// 	audio.play()
// 	console.log("play music")
// 	# audio.load()
// 	# setTimeout =>
// 	# 	audio.play()
// 	# ,250
// 	# setTimeout =>
// 	# 	discPlay()
// 	# ,300
// listenAudio = ->
// 	for item in musicList
// 		audio = document.getElementById item
// 		audio.addEventListener "play", ->
// 			console.log "play"
// 			discPlay()
// 		,false
// 		audio.addEventListener "pause", ->
// 			console.log "pause"
// 			discStop()
// 		,false
// 		audio.addEventListener "ended", ->
// 			console.log "ended"
// 			discStop()
// 		,false
// stopAllAudio = (name)->
// 	console.log("not err 9")
// 	for item in musicList
// 		audio = document.getElementById item
// 		console.log("not err 10")
// 		audio.pause()
// 		console.log("not err 11")
// 		PIXI.sound.pause(item) if item isnt name and isAndroid
// 		console.log("not err 12")
//# sourceMappingURL=main.js.map
