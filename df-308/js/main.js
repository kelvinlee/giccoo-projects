'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ANIMATION_END_NAME, ANIMATION_END_NAMES, AnimatedSprite, Container, Graphics, IsPC, ParticleContainer, Sprite, TRANSITION_END_NAME, TRANSITION_END_NAMES, Text, Texture, TextureCache, TrueH, TrueW, UGC, VENDORS, _cache, _citys, _public, _runTime, _second, _startCache, _testTime, apiLink, apiUrl, autoDetectRenderer, createObjectURLfun, css3Prefix, getId, getOrientation, getTe, i, imageurl, init, j, len1, loadWechatConfig, loader, loading, mTestElement, main, musicIconCache, musicLineCache, musicList, neteaseShareImage, playAudio, random, resource, resources, sended, stopAllAudio, sys, ugc, ugcCache;

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
    },
    submit: function submit(evt) {
      var data, k, ref, v;
      data = {};
      console.log("first Time..");
      ref = this.form;
      for (k in ref) {
        v = ref[k];
        data[k] = v.value;
      }
      // console.log "submit:",data
      return this.$emit("submit", data);
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

_citys["请选择省份"] = {
  "请选择城市": [{
    name: "请选择经销商",
    val: "请选择经销商"
  }]
};

_citys["北京市"] = {};

_citys["天津市"] = {};

_citys["河北省"] = {};

_citys["山西省"] = {};

_citys["内蒙古自治区"] = {};

_citys["辽宁省"] = {};

_citys["吉林省"] = {};

_citys["黑龙江省"] = {};

_citys["山东省"] = {};

_citys["上海市"] = {};

_citys["江苏省"] = {};

_citys["浙江省"] = {};

_citys["安徽省"] = {};

_citys["江西省"] = {};

_citys["河南省"] = {};

_citys["湖北省"] = {};

_citys["湖南省"] = {};

_citys["广东省"] = {};

_citys["广西壮族自治区"] = {};

_citys["海南省"] = {};

_citys["福建省"] = {};

_citys["贵州省"] = {};

_citys["云南省"] = {};

_citys["重庆市"] = {};

_citys["四川省"] = {};

_citys["西藏自治区"] = {};

_citys["陕西省"] = {};

_citys["甘肃省"] = {};

_citys["青海省"] = {};

_citys["宁夏回族自治区"] = {};

_citys["新疆维吾尔自治区"] = {};

_citys["北京市"]["北京市"] = [];

_citys["天津市"]["天津市"] = [];

_citys["河北省"]["石家庄市"] = [];

_citys["河北省"]["唐山市"] = [];

_citys["河北省"]["秦皇岛市"] = [];

_citys["河北省"]["邯郸市"] = [];

_citys["河北省"]["邢台市"] = [];

_citys["河北省"]["保定市"] = [];

_citys["河北省"]["张家口市"] = [];

_citys["河北省"]["承德市"] = [];

_citys["河北省"]["沧州市"] = [];

_citys["河北省"]["廊坊市"] = [];

_citys["山西省"]["太原市"] = [];

_citys["山西省"]["大同市"] = [];

_citys["山西省"]["阳泉市"] = [];

_citys["山西省"]["长治市"] = [];

_citys["山西省"]["晋城市"] = [];

_citys["山西省"]["运城市"] = [];

_citys["山西省"]["忻州市"] = [];

_citys["山西省"]["临汾市"] = [];

_citys["内蒙古自治区"]["呼和浩特市"] = [];

_citys["内蒙古自治区"]["包头市"] = [];

_citys["内蒙古自治区"]["赤峰市"] = [];

_citys["内蒙古自治区"]["通辽市"] = [];

_citys["内蒙古自治区"]["鄂尔多斯市"] = [];

_citys["内蒙古自治区"]["呼伦贝尔市"] = [];

_citys["内蒙古自治区"]["巴彦淖尔市"] = [];

_citys["内蒙古自治区"]["乌兰察布市"] = [];

_citys["内蒙古自治区"]["兴安盟"] = [];

_citys["辽宁省"]["沈阳市"] = [];

_citys["辽宁省"]["大连市"] = [];

_citys["辽宁省"]["抚顺市"] = [];

_citys["辽宁省"]["朝阳市"] = [];

_citys["吉林省"]["长春市"] = [];

_citys["吉林省"]["吉林市"] = [];

_citys["吉林省"]["四平"] = [];

_citys["吉林省"]["延边朝鲜族自治州"] = [];

_citys["吉林省"]["松原市"] = [];

_citys["黑龙江省"]["哈尔滨市"] = [];

_citys["黑龙江省"]["齐齐哈尔市"] = [];

_citys["黑龙江省"]["大庆市"] = [];

_citys["黑龙江省"]["牡丹江市"] = [];

_citys["黑龙江省"]["绥化市"] = [];

_citys["山东省"]["济南市"] = [];

_citys["山东省"]["青岛市"] = [];

_citys["山东省"]["淄博市"] = [];

_citys["山东省"]["枣庄市"] = [];

_citys["山东省"]["东营市"] = [];

_citys["山东省"]["烟台市"] = [];

_citys["山东省"]["潍坊市"] = [];

_citys["山东省"]["济宁市"] = [];

_citys["山东省"]["泰安市"] = [];

_citys["山东省"]["威海市"] = [];

_citys["山东省"]["日照市"] = [];

_citys["山东省"]["莱芜市"] = [];

_citys["山东省"]["临沂市"] = [];

_citys["山东省"]["德州市"] = [];

_citys["山东省"]["聊城市"] = [];

_citys["山东省"]["滨州市"] = [];

_citys["山东省"]["菏泽市"] = [];

_citys["上海市"]["上海市"] = [];

_citys["江苏省"]["南京市"] = [];

_citys["江苏省"]["无锡市"] = [];

_citys["江苏省"]["徐州市"] = [];

_citys["江苏省"]["常州市"] = [];

_citys["江苏省"]["苏州市"] = [];

_citys["江苏省"]["南通市"] = [];

_citys["江苏省"]["连云港市"] = [];

_citys["江苏省"]["淮安市"] = [];

_citys["江苏省"]["盐城市"] = [];

_citys["江苏省"]["扬州市"] = [];

_citys["江苏省"]["镇江市"] = [];

_citys["江苏省"]["泰州市"] = [];

_citys["江苏省"]["宿迁市"] = [];

_citys["浙江省"]["杭州市"] = [];

_citys["浙江省"]["宁波市"] = [];

_citys["浙江省"]["温州市"] = [];

_citys["浙江省"]["嘉兴市"] = [];

_citys["浙江省"]["湖州市"] = [];

_citys["浙江省"]["绍兴市"] = [];

_citys["浙江省"]["金华市"] = [];

_citys["浙江省"]["舟山市"] = [];

_citys["浙江省"]["台州市"] = [];

_citys["安徽省"]["合肥市"] = [];

_citys["安徽省"]["芜湖市"] = [];

_citys["安徽省"]["蚌埠市"] = [];

_citys["安徽省"]["马鞍山市"] = [];

_citys["安徽省"]["淮北市"] = [];

_citys["安徽省"]["安庆市"] = [];

_citys["安徽省"]["黄山市"] = [];

_citys["安徽省"]["阜阳市"] = [];

_citys["安徽省"]["宿州市"] = [];

_citys["安徽省"]["宣城市"] = [];

_citys["江西省"]["南昌市"] = [];

_citys["江西省"]["景德镇市"] = [];

_citys["江西省"]["萍乡市"] = [];

_citys["江西省"]["九江市"] = [];

_citys["江西省"]["新余市"] = [];

_citys["江西省"]["赣州市"] = [];

_citys["江西省"]["吉安市"] = [];

_citys["江西省"]["宜春市"] = [];

_citys["江西省"]["抚州市"] = [];

_citys["江西省"]["上饶市"] = [];

_citys["河南省"]["郑州市"] = [];

_citys["河南省"]["开封市"] = [];

_citys["河南省"]["洛阳市"] = [];

_citys["河南省"]["平顶山市"] = [];

_citys["河南省"]["安阳市"] = [];

_citys["河南省"]["鹤壁市"] = [];

_citys["河南省"]["新乡市"] = [];

_citys["河南省"]["焦作市"] = [];

_citys["河南省"]["濮阳市"] = [];

_citys["河南省"]["许昌市"] = [];

_citys["河南省"]["漯河市"] = [];

_citys["河南省"]["三门峡市"] = [];

_citys["河南省"]["南阳市"] = [];

_citys["河南省"]["商丘市"] = [];

_citys["河南省"]["信阳市"] = [];

_citys["河南省"]["周口市"] = [];

_citys["河南省"]["驻马店市"] = [];

_citys["湖北省"]["武汉市"] = [];

_citys["湖北省"]["咸宁市"] = [];

_citys["湖北省"]["黄石市"] = [];

_citys["湖北省"]["十堰市"] = [];

_citys["湖北省"]["襄阳市"] = [];

_citys["湖北省"]["鄂州市"] = [];

_citys["湖北省"]["孝感市"] = [];

_citys["湖北省"]["黄冈市"] = [];

_citys["湖北省"]["随州市"] = [];

_citys["湖北省"]["宜昌市"] = [];

_citys["湖北省"]["荆门市"] = [];

_citys["湖北省"]["荆州市"] = [];

_citys["湖北省"]["恩施土家族苗族自治州"] = [];

_citys["湖北省"]["潜江市"] = [];

_citys["湖南省"]["长沙市"] = [];

_citys["湖南省"]["岳阳市"] = [];

_citys["湖南省"]["常德市"] = [];

_citys["湖南省"]["湘西土家族苗族自治州"] = [];

_citys["湖南省"]["株洲市"] = [];

_citys["湖南省"]["湘潭市"] = [];

_citys["湖南省"]["衡阳市"] = [];

_citys["湖南省"]["邵阳市"] = [];

_citys["湖南省"]["郴州市"] = [];

_citys["湖南省"]["娄底市"] = [];

_citys["广东省"]["广州市"] = [];

_citys["广东省"]["韶关市"] = [];

_citys["广东省"]["深圳市"] = [];

_citys["广东省"]["珠海市"] = [];

_citys["广东省"]["汕头市"] = [];

_citys["广东省"]["佛山市"] = [];

_citys["广东省"]["江门市"] = [];

_citys["广东省"]["湛江市"] = [];

_citys["广东省"]["茂名市"] = [];

_citys["广东省"]["肇庆市"] = [];

_citys["广东省"]["惠州市"] = [];

_citys["广东省"]["梅州市"] = [];

_citys["广东省"]["河源市"] = [];

_citys["广东省"]["阳江市"] = [];

_citys["广东省"]["清远市"] = [];

_citys["广东省"]["东莞市"] = [];

_citys["广东省"]["中山市"] = [];

_citys["广东省"]["潮州市"] = [];

_citys["广西壮族自治区"]["南宁市"] = [];

_citys["广西壮族自治区"]["柳州市"] = [];

_citys["广西壮族自治区"]["桂林市"] = [];

_citys["广西壮族自治区"]["梧州市"] = [];

_citys["广西壮族自治区"]["北海市"] = [];

_citys["广西壮族自治区"]["钦州市"] = [];

_citys["广西壮族自治区"]["贵港市"] = [];

_citys["广西壮族自治区"]["百色市"] = [];

_citys["广西壮族自治区"]["贺州市"] = [];

_citys["广西壮族自治区"]["河池市"] = [];

_citys["海南省"]["海口市"] = [];

_citys["海南省"]["三亚市"] = [];

_citys["福建省"]["福州市"] = [];

_citys["福建省"]["厦门市"] = [];

_citys["福建省"]["莆田市"] = [];

_citys["福建省"]["三明市"] = [];

_citys["福建省"]["泉州市"] = [];

_citys["福建省"]["漳州市"] = [];

_citys["福建省"]["龙岩市"] = [];

_citys["贵州省"]["贵阳市"] = [];

_citys["贵州省"]["六盘水市"] = [];

_citys["贵州省"]["遵义市"] = [];

_citys["贵州省"]["安顺市"] = [];

_citys["贵州省"]["铜仁地区"] = [];

_citys["贵州省"]["黔西南布依族苗族自治州"] = [];

_citys["贵州省"]["毕节地区"] = [];

_citys["贵州省"]["黔东南苗族侗族自治州"] = [];

_citys["贵州省"]["黔南布依族苗族自治州"] = [];

_citys["云南省"]["昆明市"] = [];

_citys["云南省"]["曲靖市"] = [];

_citys["云南省"]["玉溪市"] = [];

_citys["云南省"]["保山市"] = [];

_citys["云南省"]["昭通市"] = [];

_citys["云南省"]["普洱市"] = [];

_citys["云南省"]["临沧市"] = [];

_citys["云南省"]["楚雄彝族自治州"] = [];

_citys["云南省"]["红河哈尼族彝族自治州"] = [];

_citys["云南省"]["文山壮族苗族自治州"] = [];

_citys["云南省"]["大理白族自治州"] = [];

_citys["重庆市"]["重庆市"] = [];

_citys["四川省"]["成都市"] = [];

_citys["四川省"]["自贡市"] = [];

_citys["四川省"]["攀枝花市"] = [];

_citys["四川省"]["泸州市"] = [];

_citys["四川省"]["德阳市"] = [];

_citys["四川省"]["绵阳市"] = [];

_citys["四川省"]["广元市"] = [];

_citys["四川省"]["遂宁市"] = [];

_citys["四川省"]["内江市"] = [];

_citys["四川省"]["乐山市"] = [];

_citys["四川省"]["南充市"] = [];

_citys["四川省"]["眉山市"] = [];

_citys["四川省"]["宜宾市"] = [];

_citys["四川省"]["广安市"] = [];

_citys["四川省"]["达州市"] = [];

_citys["四川省"]["雅安市"] = [];

_citys["四川省"]["巴中市"] = [];

_citys["四川省"]["资阳市"] = [];

_citys["西藏自治区"]["拉萨市"] = [];

_citys["陕西省"]["西安市"] = [];

_citys["陕西省"]["宝鸡市"] = [];

_citys["陕西省"]["咸阳市"] = [];

_citys["陕西省"]["渭南市"] = [];

_citys["陕西省"]["汉中市"] = [];

_citys["陕西省"]["榆林市"] = [];

_citys["陕西省"]["安康市"] = [];

_citys["甘肃省"]["兰州市"] = [];

_citys["甘肃省"]["天水市"] = [];

_citys["甘肃省"]["武威市"] = [];

_citys["甘肃省"]["张掖市"] = [];

_citys["甘肃省"]["平凉市"] = [];

_citys["甘肃省"]["酒泉市"] = [];

_citys["甘肃省"]["庆阳市"] = [];

_citys["甘肃省"]["临夏回族自治州"] = [];

_citys["青海省"]["西宁市"] = [];

_citys["宁夏回族自治区"]["银川市"] = [];

_citys["宁夏回族自治区"]["固原市"] = [];

_citys["新疆维吾尔自治区"]["乌鲁木齐市"] = [];

_citys["新疆维吾尔自治区"]["昌吉回族自治州"] = [];

_citys["新疆维吾尔自治区"]["阿克苏地区"] = [];

_citys["新疆维吾尔自治区"]["伊犁哈萨克自治州"] = [];

_citys["北京市"]["北京市"].push({
  name: "北京标龙京津汽车销售服务有限责任公司",
  val: "60590H"
});

_citys["北京市"]["北京市"].push({
  name: "北京嘉瑞雅汽车销售服务有限公司",
  val: "60620R"
});

_citys["北京市"]["北京市"].push({
  name: "北京汇京德通汽车销售服务有限责任公司",
  val: "65440F"
});

_citys["北京市"]["北京市"].push({
  name: "北京博瑞祥致汽车销售服务有限公司",
  val: "61850C"
});

_citys["北京市"]["北京市"].push({
  name: "北京汇京柯曼汽车贸易发展有限公司",
  val: "60570L"
});

_citys["北京市"]["北京市"].push({
  name: "北京元丰正通汽车销售服务有限公司",
  val: "65985X"
});

_citys["北京市"]["北京市"].push({
  name: "北京鹏翰贸易有限公司",
  val: "60030Z"
});

_citys["北京市"]["北京市"].push({
  name: "北京怡合瑞狮汽车销售服务有限公司",
  val: "65450G"
});

_citys["北京市"]["北京市"].push({
  name: "北京金泰凯迪汽车销售服务有限公司",
  val: "61950L"
});

_citys["天津市"]["天津市"].push({
  name: "天津市九州紫鑫汽车销售服务有限公司",
  val: "63100Q"
});

_citys["天津市"]["天津市"].push({
  name: "天津市润濠汽车销售服务有限公司",
  val: "61370F"
});

_citys["天津市"]["天津市"].push({
  name: "天津盛鼎汽车销售服务有限公司",
  val: "65988A"
});

_citys["天津市"]["天津市"].push({
  name: "天津标顺汽车销售有限公司",
  val: "63810T"
});

_citys["天津市"]["天津市"].push({
  name: "天津彤远汽车贸易有限公司",
  val: "63700T"
});

_citys["河北省"]["石家庄市"].push({
  name: "河北盛威汽车贸易有限公司",
  val: "60600U"
});

_citys["河北省"]["石家庄市"].push({
  name: "石家庄隆汇汽车销售服务有限公司",
  val: "65882K"
});

_citys["河北省"]["石家庄市"].push({
  name: "河北传兴汽车贸易有限公司",
  val: "65996J"
});

_citys["河北省"]["唐山市"].push({
  name: "唐山市冀东通汽车销售服务有限公司",
  val: "60310D"
});

_citys["河北省"]["唐山市"].push({
  name: "北京金泰凯迪汽车销售服务有限公司唐山分公司",
  val: "65943B"
});

_citys["河北省"]["秦皇岛市"].push({
  name: "秦皇岛庞大雄狮汽车销售服务有限公司",
  val: "63860Q"
});

_citys["河北省"]["邯郸市"].push({
  name: "邯郸市华尚汽车销售服务有限公司",
  val: "63450H"
});

_citys["河北省"]["邯郸市"].push({
  name: "邯郸市庞大龙腾汽车销售服务有限公司",
  val: "62020M"
});

_citys["河北省"]["邢台市"].push({
  name: "邢台德澳汽车销售有限公司",
  val: "64570X"
});

_citys["河北省"]["邢台市"].push({
  name: "邢台传龙汽车销售服务有限公司",
  val: "64960L"
});

_citys["河北省"]["保定市"].push({
  name: "保定轩宇雄狮汽车贸易有限公司",
  val: "62600T"
});

_citys["河北省"]["保定市"].push({
  name: "保定市中冀威狮汽车贸易有限公司",
  val: "61730X"
});

_citys["河北省"]["保定市"].push({
  name: "保定市合硕贸易有限公司",
  val: "65560U"
});

_citys["河北省"]["保定市"].push({
  name: "涿州市辉泓汽车销售服务有限公司",
  val: "64270Z"
});

_citys["河北省"]["保定市"].push({
  name: "定州驿达汽车销售有限公司",
  val: "64440D"
});

_citys["河北省"]["张家口市"].push({
  name: "张家口市九福汽车销售服务有限公司",
  val: "63980Z"
});

_citys["河北省"]["张家口市"].push({
  name: "张家口天卓汽车销售服务有限公司",
  val: "65963Y"
});

_citys["河北省"]["承德市"].push({
  name: "承德万狮汽车销售有限公司",
  val: "65730M"
});

_citys["河北省"]["沧州市"].push({
  name: "沧州运生汽车销售服务有限公司",
  val: "62130G"
});

_citys["河北省"]["沧州市"].push({
  name: "沧州捷远汽车贸易有限公司",
  val: "64550C"
});

_citys["河北省"]["沧州市"].push({
  name: "任丘市恒祥汽车销售服务有限公司",
  val: "65710K"
});

_citys["河北省"]["廊坊市"].push({
  name: "廊坊日泽昌汽车销售有限公司",
  val: "64600L"
});

_citys["山西省"]["太原市"].push({
  name: "山西金裕晟汽车贸易有限公司",
  val: "65970F"
});

_citys["山西省"]["太原市"].push({
  name: "山西昌安达汽车销售服务有限公司",
  val: "65991D"
});

_citys["山西省"]["大同市"].push({
  name: "大同市钢致汽车销售有限公司",
  val: "65895Z"
});

_citys["山西省"]["阳泉市"].push({
  name: "阳泉市欣通承达汽车销售服务有限公司",
  val: "63710Y"
});

_citys["山西省"]["长治市"].push({
  name: "长治市福联汽车销售服务有限公司",
  val: "65850A"
});

_citys["山西省"]["晋城市"].push({
  name: "晋城市宏运杰汽车销售有限公司",
  val: "65550T"
});

_citys["山西省"]["运城市"].push({
  name: "山西诺维兰集团运城瑞恒汽车销售服务有限公司",
  val: "64800Y"
});

_citys["山西省"]["忻州市"].push({
  name: "忻州市忻府区金坤汽车贸易有限公司",
  val: "63240X"
});

_citys["山西省"]["临汾市"].push({
  name: "临汾市江山铭泰汽车销售有限公司",
  val: "65936U"
});

_citys["山西省"]["临汾市"].push({
  name: "临汾临运尧辉汽车销售服务有限公司",
  val: "65570V"
});

_citys["内蒙古自治区"]["呼和浩特市"].push({
  name: "内蒙古利丰泰隆汽车服务有限公司",
  val: "60420Y"
});

_citys["内蒙古自治区"]["包头市"].push({
  name: "包头市金陆汽车销售服务有限公司",
  val: "64210B"
});

_citys["内蒙古自治区"]["赤峰市"].push({
  name: "赤峰晟源汽车服务有限责任公司",
  val: "65510N"
});

_citys["内蒙古自治区"]["赤峰市"].push({
  name: "赤峰龙昊汽车贸易有限公司",
  val: "65640C"
});

_citys["内蒙古自治区"]["通辽市"].push({
  name: "通辽市万庆汽车销售服务有限公司",
  val: "62150D"
});

_citys["内蒙古自治区"]["鄂尔多斯市"].push({
  name: "鄂尔多斯市成兴汽车有限公司",
  val: "65875C"
});

_citys["内蒙古自治区"]["呼伦贝尔市"].push({
  name: "呼伦贝尔市大鹏润达汽车贸易有限公司",
  val: "63820H"
});

_citys["内蒙古自治区"]["巴彦淖尔市"].push({
  name: "巴彦淖尔市巴运小轿车销售有限公司",
  val: "64540B"
});

_citys["内蒙古自治区"]["乌兰察布市"].push({
  name: "内蒙古万方汽车销售服务有限公司",
  val: "65876D"
});

_citys["内蒙古自治区"]["兴安盟"].push({
  name: "兴安盟骏腾汽车销售服务有限公司",
  val: "64950W"
});

_citys["辽宁省"]["沈阳市"].push({
  name: "沈阳汇诚汽车销售服务有限公司",
  val: "63110T"
});

_citys["辽宁省"]["沈阳市"].push({
  name: "沈阳庞大龙腾汽车销售服务有限公司",
  val: "62350W"
});

_citys["辽宁省"]["大连市"].push({
  name: "大连新东升汽车销售服务有限公司",
  val: "65860L"
});

_citys["辽宁省"]["抚顺市"].push({
  name: "抚顺千和汽车销售有限公司",
  val: "64900F"
});

_citys["辽宁省"]["朝阳市"].push({
  name: "朝阳鸿盛汽车销售服务有限公司",
  val: "63260C"
});

_citys["吉林省"]["长春市"].push({
  name: "吉林省瀚宇汽车销售服务有限公司",
  val: "64520C"
});

_citys["吉林省"]["长春市"].push({
  name: "吉林省联孚汽车销售服务有限公司",
  val: "62800K"
});

_citys["吉林省"]["吉林市"].push({
  name: "吉林市万华汽车销售服务有限公司",
  val: "61460D"
});

_citys["吉林省"]["四平"].push({
  name: "四平源宸汽车服务有限公司",
  val: "64190S"
});

_citys["吉林省"]["延边朝鲜族自治州"].push({
  name: "延边北方汽车销售服务有限公司",
  val: "65965A"
});

_citys["吉林省"]["松原市"].push({
  name: "松原市龙翔汽车贸易有限公司",
  val: "66005U"
});

_citys["黑龙江省"]["哈尔滨市"].push({
  name: "黑龙江骏鹰大通汽车销售服务有限公司",
  val: "60290G"
});

_citys["黑龙江省"]["哈尔滨市"].push({
  name: "黑龙江东顺汽车销售服务有限公司",
  val: "64750H"
});

_citys["黑龙江省"]["齐齐哈尔市"].push({
  name: "齐齐哈尔市皓民汽车销售有限公司",
  val: "63890Q"
});

_citys["黑龙江省"]["大庆市"].push({
  name: "大庆市威龙汽车贸易有限公司",
  val: "61670G"
});

_citys["黑龙江省"]["大庆市"].push({
  name: "大庆市成通鑫业汽车销售服务有限公司",
  val: "64760D"
});

_citys["黑龙江省"]["牡丹江市"].push({
  name: "牡丹江中信恒安汽车销售服务有限公司",
  val: "65690H"
});

_citys["黑龙江省"]["绥化市"].push({
  name: "绥化市世佳汽车销售服务有限责任公司",
  val: "64120S"
});

_citys["山东省"]["济南市"].push({
  name: "山东泰通汽车销售服务有限公司",
  val: "60270K"
});

_citys["山东省"]["济南市"].push({
  name: "济南志和永茂汽车销售服务有限公司",
  val: "64100J"
});

_citys["山东省"]["济南市"].push({
  name: "济南百得通汽车销售服务有限公司",
  val: "65952L"
});

_citys["山东省"]["青岛市"].push({
  name: "青岛宝狮汽车销售服务有限公司",
  val: "60750G"
});

_citys["山东省"]["青岛市"].push({
  name: "青岛信和汽车销售有限公司",
  val: "63030B"
});

_citys["山东省"]["青岛市"].push({
  name: "青岛信腾汽车销售服务有限公司",
  val: "65922D"
});

_citys["山东省"]["青岛市"].push({
  name: "青岛金惠盛泰汽车销售服务有限公司",
  val: "64350J"
});

_citys["山东省"]["青岛市"].push({
  name: "青岛华德汽车销售服务有限公司",
  val: "64880P"
});

_citys["山东省"]["淄博市"].push({
  name: "淄博金锐狮汽车销售有限公司",
  val: "61780B"
});

_citys["山东省"]["枣庄市"].push({
  name: "枣庄德威汽车销售有限公司",
  val: "65962X"
});

_citys["山东省"]["东营市"].push({
  name: "东营天狮汽车销售服务有限公司",
  val: "61100M"
});

_citys["山东省"]["烟台市"].push({
  name: "烟台陆通汽车销售服务有限公司",
  val: "60720Z"
});

_citys["山东省"]["烟台市"].push({
  name: "烟台麦特威狮汽车销售有限公司",
  val: "65480K"
});

_citys["山东省"]["烟台市"].push({
  name: "莱阳市广致汽车销售有限公司",
  val: "65540S"
});

_citys["山东省"]["烟台市"].push({
  name: "莱州市豪骏汽车销售服务有限公司",
  val: "64380L"
});

_citys["山东省"]["烟台市"].push({
  name: "栖霞欣瑞汽车销售服务有限公司",
  val: "63970Q"
});

_citys["山东省"]["潍坊市"].push({
  name: "潍坊泰通汽车销售服务有限公司",
  val: "62060F"
});

_citys["山东省"]["潍坊市"].push({
  name: "临朐富康汽车销售服务有限公司",
  val: "65911S"
});

_citys["山东省"]["潍坊市"].push({
  name: "青州隆益达汽车贸易有限公司",
  val: "65928K"
});

_citys["山东省"]["潍坊市"].push({
  name: "寿光华裕汽车销售服务有限公司",
  val: "65490L"
});

_citys["山东省"]["潍坊市"].push({
  name: "安丘恒锦汽车销售服务有限公司",
  val: "65610Z"
});

_citys["山东省"]["潍坊市"].push({
  name: "高密隆兴车业有限公司",
  val: "63150G"
});

_citys["山东省"]["潍坊市"].push({
  name: "昌邑市大昌汽车贸易有限公司",
  val: "65961W"
});

_citys["山东省"]["济宁市"].push({
  name: "济宁裕龙汽车销售服务有限公司",
  val: "61050H"
});

_citys["山东省"]["济宁市"].push({
  name: "济宁华源兴狮汽车销售服务有限公司",
  val: "64580J"
});

_citys["山东省"]["济宁市"].push({
  name: "邹城市元润汽车销售服务有限公司",
  val: "65873A"
});

_citys["山东省"]["泰安市"].push({
  name: "泰安市华君东狮汽车销售服务有限公司",
  val: "61150S"
});

_citys["山东省"]["威海市"].push({
  name: "威海鑫钰汽车销售服务有限公司",
  val: "65810W"
});

_citys["山东省"]["威海市"].push({
  name: "威海鑫狮汽车销售服务有限公司",
  val: "61210G"
});

_citys["山东省"]["日照市"].push({
  name: "日照志美欣业汽车销售服务有限公司",
  val: "65260L"
});

_citys["山东省"]["莱芜市"].push({
  name: "莱芜市全润经贸有限公司",
  val: "65230H"
});

_citys["山东省"]["临沂市"].push({
  name: "临沂睿狮汽车销售服务有限公司",
  val: "62570K"
});

_citys["山东省"]["临沂市"].push({
  name: "临沂骏狮汽车贸易有限公司",
  val: "60890J"
});

_citys["山东省"]["德州市"].push({
  name: "德州天狮汽车销售服务有限公司",
  val: "61470P"
});

_citys["山东省"]["德州市"].push({
  name: "德州华迈汽车销售有限公司",
  val: "65917Y"
});

_citys["山东省"]["聊城市"].push({
  name: "聊城市金辰汽车销售服务有限公司",
  val: "61970H"
});

_citys["山东省"]["滨州市"].push({
  name: "滨州市狮瑞汽车销售有限公司",
  val: "61160C"
});

_citys["山东省"]["滨州市"].push({
  name: "山东滨州运翔汽车销售服务有限公司",
  val: "65848Y"
});

_citys["山东省"]["菏泽市"].push({
  name: "菏泽优创客汽车销售服务有限公司",
  val: "65959U"
});

_citys["上海市"]["上海市"].push({
  name: "上海宝狮汽车销售服务有限公司",
  val: "60900V"
});

_citys["上海市"]["上海市"].push({
  name: "上海陆狮汽车销售服务有限公司",
  val: "60080D"
});

_citys["上海市"]["上海市"].push({
  name: "上海海标汽车销售有限公司",
  val: "61700P"
});

_citys["上海市"]["上海市"].push({
  name: "上海申焕汽车销售服务有限公司",
  val: "65944C"
});

_citys["上海市"]["上海市"].push({
  name: "上海炜业龙阳汽车销售服务有限公司",
  val: "60770D"
});

_citys["上海市"]["上海市"].push({
  name: "上海子熠涵德汽车销售有限公司",
  val: "65893X"
});

_citys["上海市"]["上海市"].push({
  name: "上海冠隆汽车销售服务有限公司",
  val: "62770C"
});

_citys["江苏省"]["南京市"].push({
  name: "江苏天泓标远汽车服务有限公司",
  val: "62890H"
});

_citys["江苏省"]["南京市"].push({
  name: "江苏狮海文化发展有限公司",
  val: "65886P"
});

_citys["江苏省"]["南京市"].push({
  name: "江苏万帮外汽汽车有限公司",
  val: "60180M"
});

_citys["江苏省"]["南京市"].push({
  name: "江苏致尚汽车销售服务有限公司",
  val: "63120U"
});

_citys["江苏省"]["南京市"].push({
  name: "江苏致成汽车销售服务有限公司",
  val: "60320P"
});

_citys["江苏省"]["南京市"].push({
  name: "江苏金能汽车销售有限公司",
  val: "61790M"
});

_citys["江苏省"]["无锡市"].push({
  name: "无锡京汽汽车销售有限责任公司",
  val: "60130H"
});

_citys["江苏省"]["无锡市"].push({
  name: "无锡宝狮龙汽车销售服务有限公司",
  val: "62140T"
});

_citys["江苏省"]["无锡市"].push({
  name: "无锡东方龙泰汽车销售服务有限公司",
  val: "60230S"
});

_citys["江苏省"]["无锡市"].push({
  name: "江阴市吉诚汽车有限公司",
  val: "61000D"
});

_citys["江苏省"]["无锡市"].push({
  name: "宜兴市致盛汽车销售服务有限公司",
  val: "64470Y"
});

_citys["江苏省"]["徐州市"].push({
  name: "邳州市亿达汽车销售服务有限公司",
  val: "65590X"
});

_citys["江苏省"]["常州市"].push({
  name: "常州冠亚恒通汽车销售服务有限公司",
  val: "60730K"
});

_citys["江苏省"]["常州市"].push({
  name: "常州欧狮汽车销售服务有限公司",
  val: "61270X"
});

_citys["江苏省"]["苏州市"].push({
  name: "苏州众和汽车销售服务有限公司",
  val: "60390R"
});

_citys["江苏省"]["苏州市"].push({
  name: "苏州银狮汽车销售服务有限公司",
  val: "60470C"
});

_citys["江苏省"]["苏州市"].push({
  name: "吴江畅远汽车销售服务有限公司",
  val: "62530S"
});

_citys["江苏省"]["苏州市"].push({
  name: "张家港众和汽车销售服务有限公司",
  val: "61380S"
});

_citys["江苏省"]["苏州市"].push({
  name: "昆山力狮汽车销售服务有限公司",
  val: "61250A"
});

_citys["江苏省"]["苏州市"].push({
  name: "昆山市海宝汽车销售服务有限公司",
  val: "65680G"
});

_citys["江苏省"]["苏州市"].push({
  name: "太仓华悦汽车销售服务有限公司",
  val: "63680T"
});

_citys["江苏省"]["南通市"].push({
  name: "南京朗驰集团南通朗瑞汽车销售服务有限公司",
  val: "62980F"
});

_citys["江苏省"]["南通市"].push({
  name: "江苏太平洋汽车集团如东福港有限公司",
  val: "64420R"
});

_citys["江苏省"]["南通市"].push({
  name: "如皋市三洋汽车销售服务有限公司",
  val: "61760E"
});

_citys["江苏省"]["连云港市"].push({
  name: "江苏致和汽车贸易有限公司",
  val: "64340L"
});

_citys["江苏省"]["淮安市"].push({
  name: "淮安广益汽车销售服务有限公司",
  val: "65978P"
});

_citys["江苏省"]["淮安市"].push({
  name: "江苏蓝致汽车销售服务有限公司",
  val: "65932P"
});

_citys["江苏省"]["盐城市"].push({
  name: "盐城贤德汽车有限公司",
  val: "64640Y"
});

_citys["江苏省"]["盐城市"].push({
  name: "森风集团盐城明德汽车有限公司",
  val: "61330M"
});

_citys["江苏省"]["扬州市"].push({
  name: "扬州宏远宝狮汽车有限公司",
  val: "63430Y"
});

_citys["江苏省"]["镇江市"].push({
  name: "丹阳市龙泉汽贸有限公司",
  val: "65967C"
});

_citys["江苏省"]["泰州市"].push({
  name: "泰州市致远汽车销售服务有限公司",
  val: "61580J"
});

_citys["江苏省"]["宿迁市"].push({
  name: "宿迁美翔车业有限公司",
  val: "65915W"
});

_citys["浙江省"]["杭州市"].push({
  name: "杭州和洵汽车销售服务有限公司",
  val: "61610S"
});

_citys["浙江省"]["杭州市"].push({
  name: "浙江康诚汽车销售服务有限公司",
  val: "62700B"
});

_citys["浙江省"]["宁波市"].push({
  name: "宁波众致汽车销售服务有限公司",
  val: "65995H"
});

_citys["浙江省"]["温州市"].push({
  name: "温州尊龙汽车销售服务有限公司",
  val: "60210V"
});

_citys["浙江省"]["嘉兴市"].push({
  name: "嘉兴市思源汽车有限公司",
  val: "60930C"
});

_citys["浙江省"]["湖州市"].push({
  name: "湖州长运瑞狮汽车销售服务有限公司",
  val: "65977N"
});

_citys["浙江省"]["湖州市"].push({
  name: "德清长运汽车销售服务有限公司",
  val: "65910R"
});

_citys["浙江省"]["绍兴市"].push({
  name: "绍兴森美洪达汽车有限公司",
  val: "60950Z"
});

_citys["浙江省"]["绍兴市"].push({
  name: "绍兴康致汽车有限公司",
  val: "65150S"
});

_citys["浙江省"]["金华市"].push({
  name: "金华金风汽车贸易有限公司",
  val: "61120J"
});

_citys["浙江省"]["金华市"].push({
  name: "义乌悦狮汽车销售服务有限公司",
  val: "65931N"
});

_citys["浙江省"]["金华市"].push({
  name: "东阳市雄狮汽车销售服务有限公司",
  val: "64730D"
});

_citys["浙江省"]["舟山市"].push({
  name: "舟山腾狮汽车销售服务有限公司",
  val: "65903H"
});

_citys["浙江省"]["台州市"].push({
  name: "台州市鑫硕汽车销售服务有限公司",
  val: "65000T"
});

_citys["浙江省"]["台州市"].push({
  name: "台州博致汽车销售服务有限公司",
  val: "65650D"
});

_citys["安徽省"]["合肥市"].push({
  name: "安徽致远汽车销售服务有限公司",
  val: "60340L"
});

_citys["安徽省"]["合肥市"].push({
  name: "合肥大名银狮汽车销售服务有限公司",
  val: "63590A"
});

_citys["安徽省"]["合肥市"].push({
  name: "安徽致恒汽车销售服务有限公司",
  val: "65919A"
});

_citys["安徽省"]["芜湖市"].push({
  name: "芜湖华盈汽车销售服务有限公司",
  val: "65942A"
});

_citys["安徽省"]["蚌埠市"].push({
  name: "蚌埠福晟汽车贸易有限公司",
  val: "65923E"
});

_citys["安徽省"]["马鞍山市"].push({
  name: "马鞍山利马汽车销售服务有限公司",
  val: "65856G"
});

_citys["安徽省"]["淮北市"].push({
  name: "淮北市金成汽车销售有限公司",
  val: "63050H"
});

_citys["安徽省"]["安庆市"].push({
  name: "安庆华龙汽贸有限公司",
  val: "65858J"
});

_citys["安徽省"]["黄山市"].push({
  name: "黄山市致兴汽车销售有限公司",
  val: "63930H"
});

_citys["安徽省"]["阜阳市"].push({
  name: "阜阳市银狮汽车销售服务有限公司",
  val: "61750U"
});

_citys["安徽省"]["宿州市"].push({
  name: "宿州润标汽车销售服务有限公司",
  val: "63840S"
});

_citys["安徽省"]["宣城市"].push({
  name: "宣城市致鑫汽车销售服务有限公司",
  val: "63230X"
});

_citys["江西省"]["南昌市"].push({
  name: "江西车名家汽车销售服务有限公司",
  val: "65971G"
});

_citys["江西省"]["南昌市"].push({
  name: "江西亿鑫行汽车销售服务有限公司",
  val: "64170J"
});

_citys["江西省"]["景德镇市"].push({
  name: "景德镇市万顺鑫汽车贸易有限公司",
  val: "63020Z"
});

_citys["江西省"]["萍乡市"].push({
  name: "萍乡市佳顺汽车销售服务有限公司",
  val: "65900E"
});

_citys["江西省"]["九江市"].push({
  name: "九江市万顺鑫汽车销售服务有限责任公司",
  val: "65918Z"
});

_citys["江西省"]["新余市"].push({
  name: "新余宏狮汽车销售服务有限公司",
  val: "65937V"
});

_citys["江西省"]["赣州市"].push({
  name: "赣州诚致汽车销售服务有限公司",
  val: "61010P"
});

_citys["江西省"]["赣州市"].push({
  name: "江西裕龙汽车销售服务有限公司",
  val: "63920G"
});

_citys["江西省"]["吉安市"].push({
  name: "吉安市汇峰汽车销售服务有限公司",
  val: "62260Y"
});

_citys["江西省"]["宜春市"].push({
  name: "宜春欣致汽车销售服务有限公司",
  val: "65976M"
});

_citys["江西省"]["宜春市"].push({
  name: "江西星光汽车销售服务有限公司",
  val: "65939X"
});

_citys["江西省"]["抚州市"].push({
  name: "抚州广润汽车销售有限公司",
  val: "65966B"
});

_citys["江西省"]["上饶市"].push({
  name: "上饶市兆丰汽车销售服务有限公司",
  val: "62460R"
});

_citys["河南省"]["郑州市"].push({
  name: "河南神源汽车销售有限公司",
  val: "60050W"
});

_citys["河南省"]["郑州市"].push({
  name: "河南威佳致广汽车销售服务有限公司",
  val: "65934S"
});

_citys["河南省"]["郑州市"].push({
  name: "河南威佳致达汽车销售有限公司",
  val: "65933R"
});

_citys["河南省"]["郑州市"].push({
  name: "河南威佳致诚汽车销售有限公司",
  val: "65935T"
});

_citys["河南省"]["开封市"].push({
  name: "开封凯标汽车销售服务有限公司",
  val: "62430H"
});

_citys["河南省"]["洛阳市"].push({
  name: "洛阳市安丰机电设备有限公司",
  val: "65888S"
});

_citys["河南省"]["洛阳市"].push({
  name: "洛阳亨诚汽车服务有限公司",
  val: "60940N"
});

_citys["河南省"]["洛阳市"].push({
  name: "洛阳亨致汽车销售有限公司",
  val: "65904J"
});

_citys["河南省"]["平顶山市"].push({
  name: "平顶山亨致车业有限公司",
  val: "65889T"
});

_citys["河南省"]["安阳市"].push({
  name: "安阳乐志汽车销售服务有限公司",
  val: "65986Y"
});

_citys["河南省"]["鹤壁市"].push({
  name: "鹤壁中兴汽车销售服务有限公司",
  val: "65907M"
});

_citys["河南省"]["新乡市"].push({
  name: "新乡市天源汽车商贸有限公司",
  val: "61480A"
});

_citys["河南省"]["焦作市"].push({
  name: "焦作市华顺汽车贸易有限公司",
  val: "61340Y"
});

_citys["河南省"]["濮阳市"].push({
  name: "濮阳市致美汽车销售服务有限公司",
  val: "65905K"
});

_citys["河南省"]["许昌市"].push({
  name: "许昌亨诚汽车服务有限公司",
  val: "65898C"
});

_citys["河南省"]["漯河市"].push({
  name: "漯河润东德众汽车销售有限公司",
  val: "64650L"
});

_citys["河南省"]["三门峡市"].push({
  name: "三门峡市腾狮汽车销售服务有限公司",
  val: "63130Q"
});

_citys["河南省"]["南阳市"].push({
  name: "南阳市豫宛车业有限公司",
  val: "61220T"
});

_citys["河南省"]["商丘市"].push({
  name: "商丘市银狮汽车销售服务有限公司",
  val: "62090N"
});

_citys["河南省"]["商丘市"].push({
  name: "商丘市贺泰汽车销售有限公司",
  val: "65938W"
});

_citys["河南省"]["信阳市"].push({
  name: "信阳合众致信汽车销售服务有限公司",
  val: "65955P"
});

_citys["河南省"]["周口市"].push({
  name: "周口市通泰汽车销售服务有限公司",
  val: "65906L"
});

_citys["河南省"]["驻马店市"].push({
  name: "驻马店市鼎泰汽车销售服务有限公司",
  val: "63170Z"
});

_citys["湖北省"]["武汉市"].push({
  name: "东风鸿泰汽车销售有限公司武汉江岸分公司",
  val: "64250D"
});

_citys["湖北省"]["武汉市"].push({
  name: "武汉精华致远汽车销售服务有限公司",
  val: "65949H"
});

_citys["湖北省"]["武汉市"].push({
  name: "武汉万隆尚鸿汽车销售服务有限公司",
  val: "60120X"
});

_citys["湖北省"]["武汉市"].push({
  name: "东风鸿泰汽车销售有限公司武汉沙湖分公司",
  val: "62660H"
});

_citys["湖北省"]["武汉市"].push({
  name: "武汉兆丰标龙汽车销售服务有限公司",
  val: "62380D"
});

_citys["湖北省"]["武汉市"].push({
  name: "东风鸿泰南湖武汉汽车销售服务有限公司",
  val: "62540C"
});

_citys["湖北省"]["武汉市"].push({
  name: "东风鸿泰武汉关山汽车销售服务有限公司",
  val: "63780W"
});

_citys["湖北省"]["武汉市"].push({
  name: "武汉市神龙鸿泰汽车销售服务有限公司沌口分公司",
  val: "62500J"
});

_citys["湖北省"]["咸宁市"].push({
  name: "东风鸿泰汽车销售有限公司咸宁分公司",
  val: "66002R"
});

_citys["湖北省"]["黄石市"].push({
  name: "黄石银狮汽车销售服务有限公司",
  val: "65947F"
});

_citys["湖北省"]["黄石市"].push({
  name: "东风鸿泰汽车销售有限公司黄石分公司",
  val: "65999M"
});

_citys["湖北省"]["十堰市"].push({
  name: "十堰亨运宏鑫汽车销售服务有限公司",
  val: "64300S"
});

_citys["湖北省"]["十堰市"].push({
  name: "十堰中威汽车销售服务有限公司",
  val: "60510W"
});

_citys["湖北省"]["襄阳市"].push({
  name: "东风鸿泰襄阳汽车销售服务有限公司",
  val: "62870L"
});

_citys["湖北省"]["襄阳市"].push({
  name: "襄阳鹏驰汽车销售有限公司",
  val: "61180Z"
});

_citys["湖北省"]["鄂州市"].push({
  name: "东风鸿泰鄂州汽车销售服务有限公司",
  val: "65842S"
});

_citys["湖北省"]["孝感市"].push({
  name: "孝感精诚杰盟汽车销售服务有限公司",
  val: "66000N"
});

_citys["湖北省"]["黄冈市"].push({
  name: "黄冈鼎睿汽车销售服务有限公司",
  val: "65877E"
});

_citys["湖北省"]["随州市"].push({
  name: "随州市天龙汽车销售服务有限公司",
  val: "62300S"
});

_citys["湖北省"]["宜昌市"].push({
  name: "宜昌交运集团麟至汽车销售服务有限公司",
  val: "60670V"
});

_citys["湖北省"]["宜昌市"].push({
  name: "宜昌和顺汽车销售服务有限公司",
  val: "63500Y"
});

_citys["湖北省"]["荆门市"].push({
  name: "荆门狮源汽车销售服务有限公司",
  val: "62390P"
});

_citys["湖北省"]["荆州市"].push({
  name: "荆州市狮源汽车销售服务有限公司",
  val: "63720J"
});

_citys["湖北省"]["荆州市"].push({
  name: "荆州腾源汽车销售服务有限公司",
  val: "65987Z"
});

_citys["湖北省"]["恩施土家族苗族自治州"].push({
  name: "恩施州交运运输集团昌鸿汽车销售服务有限责任公司",
  val: "62230R"
});

_citys["湖北省"]["潜江市"].push({
  name: "潜江市利通汽车服务有限公司",
  val: "65843T"
});

_citys["湖南省"]["长沙市"].push({
  name: "长沙市鹏驰汽车销售有限公司",
  val: "60260Z"
});

_citys["湖南省"]["长沙市"].push({
  name: "湖南华洋华狮汽车销售服务有限公司",
  val: "62790Z"
});

_citys["湖南省"]["长沙市"].push({
  name: "长沙鑫广合汽车销售服务有限公司",
  val: "65930M"
});

_citys["湖南省"]["长沙市"].push({
  name: "湖南兰天天致汽车销售有限公司",
  val: "65983V"
});

_citys["湖南省"]["长沙市"].push({
  name: "长沙兰天天狮汽车销售有限公司",
  val: "62950Y"
});

_citys["湖南省"]["长沙市"].push({
  name: "湖南华洋兴狮汽车销售服务有限公司",
  val: "65940Y"
});

_citys["湖南省"]["岳阳市"].push({
  name: "岳阳华致汽车有限公司",
  val: "65740N"
});

_citys["湖南省"]["常德市"].push({
  name: "常德双星星致汽车销售服务有限公司",
  val: "62250M"
});

_citys["湖南省"]["湘西土家族苗族自治州"].push({
  name: "湖南辉悦汽车有限公司",
  val: "65847X"
});

_citys["湖南省"]["株洲市"].push({
  name: "株洲市兰天天宇汽车销售有限公司",
  val: "63650Z"
});

_citys["湖南省"]["湘潭市"].push({
  name: "湘潭鑫致汽车销售服务有限公司",
  val: "65974K"
});

_citys["湖南省"]["衡阳市"].push({
  name: "衡阳华佳汽车销售服务有限公司",
  val: "61800Y"
});

_citys["湖南省"]["邵阳市"].push({
  name: "邵阳市宝威汽车销售服务有限公司",
  val: "65580W"
});

_citys["湖南省"]["郴州市"].push({
  name: "郴州市恒信投资有限公司",
  val: "62310C"
});

_citys["湖南省"]["娄底市"].push({
  name: "娄底市高科汽车贸易有限公司",
  val: "65780T"
});

_citys["广东省"]["广州市"].push({
  name: "广州市美狮汽车销售服务有限公司",
  val: "60119W"
});

_citys["广东省"]["广州市"].push({
  name: "广东广物标远汽车贸易有限公司",
  val: "60760T"
});

_citys["广东省"]["广州市"].push({
  name: "广州鸿标汽车销售服务有限公司",
  val: "60980G"
});

_citys["广东省"]["广州市"].push({
  name: "广州市骏狮汽车销售有限公司",
  val: "65854E"
});

_citys["广东省"]["韶关市"].push({
  name: "韶关市宝利达汽车销售服务有限公司",
  val: "63420S"
});

_citys["广东省"]["深圳市"].push({
  name: "深圳市卡瑞汽车贸易有限公司",
  val: "60800L"
});

_citys["广东省"]["深圳市"].push({
  name: "深圳市和致汽车销售服务有限公司",
  val: "60780P"
});

_citys["广东省"]["深圳市"].push({
  name: "深圳市友车友汽车销售服务有限公司",
  val: "60610E"
});

_citys["广东省"]["深圳市"].push({
  name: "深圳日鼎汽车贸易有限公司",
  val: "65855F"
});

_citys["广东省"]["珠海市"].push({
  name: "珠海市海标贸易有限公司",
  val: "61300E"
});

_citys["广东省"]["汕头市"].push({
  name: "汕头市粤通汽车销售服务有限公司",
  val: "64400Z"
});

_citys["广东省"]["佛山市"].push({
  name: "佛山市粤和富汽车销售服务有限公司",
  val: "65890U"
});

_citys["广东省"]["佛山市"].push({
  name: "佛山市鼎致汽车销售服务有限公司",
  val: "60410M"
});

_citys["广东省"]["佛山市"].push({
  name: "佛山市顺德区弘致汽车销售服务有限公司",
  val: "65956R"
});

_citys["广东省"]["江门市"].push({
  name: "江门市汇正汽车销售服务有限公司",
  val: "65941Z"
});

_citys["广东省"]["江门市"].push({
  name: "江门市大合明志汽车销售服务有限公司",
  val: "65869W"
});

_citys["广东省"]["湛江市"].push({
  name: "湛江市利致汽车销售服务有限公司",
  val: "65997K"
});

_citys["广东省"]["茂名市"].push({
  name: "茂名广物标远汽车销售服务有限公司",
  val: "65280N"
});

_citys["广东省"]["肇庆市"].push({
  name: "肇庆美轮庆志汽车有限公司",
  val: "65310S"
});

_citys["广东省"]["惠州市"].push({
  name: "惠州市和致汽车销售服务有限公司",
  val: "65891V"
});

_citys["广东省"]["惠州市"].push({
  name: "惠州昇泰汽车销售服务有限公司",
  val: "65989B"
});

_citys["广东省"]["梅州市"].push({
  name: "梅州市宏成汽车销售服务有限公司",
  val: "65100M"
});

_citys["广东省"]["河源市"].push({
  name: "河源市骏马通汽车销售有限公司",
  val: "65868V"
});

_citys["广东省"]["阳江市"].push({
  name: "阳江市广宝源汽车销售服务有限公司",
  val: "64280Y"
});

_citys["广东省"]["清远市"].push({
  name: "清远市圆展汽车销售服务有限公司",
  val: "64710S"
});

_citys["广东省"]["东莞市"].push({
  name: "东莞市广物骏标汽车销售有限公司",
  val: "60650Y"
});

_citys["广东省"]["东莞市"].push({
  name: "东莞市新标汽车贸易有限公司",
  val: "64790D"
});

_citys["广东省"]["东莞市"].push({
  name: "东莞市广物正远汽车贸易有限公司",
  val: "64140G"
});

_citys["广东省"]["中山市"].push({
  name: "中山市永达汽车贸易有限公司",
  val: "60280W"
});

_citys["广东省"]["中山市"].push({
  name: "中山市海成汽车贸易有限公司",
  val: "63090A"
});

_citys["广东省"]["潮州市"].push({
  name: "潮州市长威汽车销售服务有限公司",
  val: "65950J"
});

_citys["广西壮族自治区"]["南宁市"].push({
  name: "广西弘致汽车销售服务有限公司",
  val: "61550B"
});

_citys["广西壮族自治区"]["南宁市"].push({
  name: "广西弘狮汽车销售服务有限公司",
  val: "60100A"
});

_citys["广西壮族自治区"]["南宁市"].push({
  name: "广西恒久汽车服务有限公司",
  val: "65830Y"
});

_citys["广西壮族自治区"]["南宁市"].push({
  name: "广西吉巨汽车销售服务有限公司",
  val: "65899D"
});

_citys["广西壮族自治区"]["柳州市"].push({
  name: "柳州弘狮汽车销售服务有限公司",
  val: "61130V"
});

_citys["广西壮族自治区"]["桂林市"].push({
  name: "桂林盛霖汽车销售有限公司",
  val: "65520P"
});

_citys["广西壮族自治区"]["桂林市"].push({
  name: "桂林弘狮诚致汽车销售服务有限公司",
  val: "60870M"
});

_citys["广西壮族自治区"]["梧州市"].push({
  name: "梧州市弘标汽车销售服务有限公司",
  val: "64860W"
});

_citys["广西壮族自治区"]["北海市"].push({
  name: "北海弘狮汽车销售服务有限公司",
  val: "62220E"
});

_citys["广西壮族自治区"]["钦州市"].push({
  name: "钦州市白马汽车销售服务有限公司",
  val: "62990S"
});

_citys["广西壮族自治区"]["贵港市"].push({
  name: "贵港市中麒汽车销售服务有限公司",
  val: "65160G"
});

_citys["广西壮族自治区"]["百色市"].push({
  name: "广西润凯汽车销售服务有限公司",
  val: "65630B"
});

_citys["广西壮族自治区"]["贺州市"].push({
  name: "贺州市和通汽车销售服务有限公司",
  val: "65894Y"
});

_citys["广西壮族自治区"]["河池市"].push({
  name: "河池通华汽车贸易服务有限公司",
  val: "64820H"
});

_citys["海南省"]["海口市"].push({
  name: "海南保力汽车销售服务有限公司",
  val: "62210U"
});

_citys["海南省"]["海口市"].push({
  name: "海南保福德汽车销售服务有限公司",
  val: "65973J"
});

_citys["海南省"]["三亚市"].push({
  name: "三亚亚兴汽车销售服务有限公司",
  val: "64810S"
});

_citys["福建省"]["福州市"].push({
  name: "福建吉诺佳宏汽车有限公司",
  val: "60480N"
});

_citys["福建省"]["福州市"].push({
  name: "福州联胜联众汽车销售有限公司",
  val: "61390C"
});

_citys["福建省"]["福州市"].push({
  name: "福州吉诺瑞狮汽车有限公司",
  val: "65670F"
});

_citys["福建省"]["厦门市"].push({
  name: "厦门永达丰汽车销售有限公司",
  val: "60370U"
});

_citys["福建省"]["厦门市"].push({
  name: "厦门凯旋万豪汽车销售服务有限公司",
  val: "65901F"
});

_citys["福建省"]["厦门市"].push({
  name: "厦门展狮汽车有限公司",
  val: "65250K"
});

_citys["福建省"]["厦门市"].push({
  name: "厦门兴荣辉洋汽车销售服务有限公司",
  val: "62480M"
});

_citys["福建省"]["莆田市"].push({
  name: "福建神威汽车销售服务有限公司",
  val: "61570Y"
});

_citys["福建省"]["三明市"].push({
  name: "三明丰顺达成汽车销售服务有限公司",
  val: "65980S"
});

_citys["福建省"]["泉州市"].push({
  name: "泉州荣成汽车销售服务有限公司",
  val: "65210Q"
});

_citys["福建省"]["泉州市"].push({
  name: "泉州福景汽车销售服务有限公司",
  val: "61770R"
});

_citys["福建省"]["泉州市"].push({
  name: "福建丰顺达成汽车销售服务有限公司",
  val: "65660E"
});

_citys["福建省"]["泉州市"].push({
  name: "福建丰豪汽车销售服务有限公司",
  val: "62510V"
});

_citys["福建省"]["漳州市"].push({
  name: "漳州丰和元汽车销售有限公司",
  val: "61440G"
});

_citys["福建省"]["龙岩市"].push({
  name: "龙岩市胜华成汽车销售有限公司",
  val: "61310R"
});

_citys["贵州省"]["贵阳市"].push({
  name: "贵州乾通东远汽车销售服务有限公司",
  val: "60220F"
});

_citys["贵州省"]["贵阳市"].push({
  name: "贵州三狮汽车销售服务有限公司",
  val: "62400A"
});

_citys["贵州省"]["六盘水市"].push({
  name: "贵州宏宇嘉信汽车贸易有限公司",
  val: "63510H"
});

_citys["贵州省"]["遵义市"].push({
  name: "遵义市凯欣致远贸易服务有限公司",
  val: "65957S"
});

_citys["贵州省"]["遵义市"].push({
  name: "遵义乾坤汽车销售服务有限公司",
  val: "64330Z"
});

_citys["贵州省"]["安顺市"].push({
  name: "贵州万利源瑞狮汽车销售服务有限公司",
  val: "65380Z"
});

_citys["贵州省"]["铜仁地区"].push({
  name: "铜仁市银锐汽车销售有限公司",
  val: "65981T"
});

_citys["贵州省"]["黔西南布依族苗族自治州"].push({
  name: "兴义市恒信德龙汽车销售服务有限公司",
  val: "63630X"
});

_citys["贵州省"]["毕节地区"].push({
  name: "贵州佰润力昂汽车销售服务有限公司",
  val: "65130B"
});

_citys["贵州省"]["黔东南苗族侗族自治州"].push({
  name: "贵州众恒致昇汽车销售服务有限公司",
  val: "63790K"
});

_citys["贵州省"]["黔南布依族苗族自治州"].push({
  name: "都匀恒信华致汽车销售服务有限公司",
  val: "64970D"
});

_citys["云南省"]["昆明市"].push({
  name: "云南都市车迷宝狮汽车贸易有限公司",
  val: "60700C"
});

_citys["云南省"]["昆明市"].push({
  name: "云南东峻天狮汽车销售服务有限公司",
  val: "65190K"
});

_citys["云南省"]["昆明市"].push({
  name: "云南东峻天致汽车销售服务有限公司",
  val: "65953M"
});

_citys["云南省"]["曲靖市"].push({
  name: "曲靖益州汽车销售服务有限公司",
  val: "65968D"
});

_citys["云南省"]["玉溪市"].push({
  name: "玉溪东峻天耀汽车销售服务有限公司",
  val: "65972H"
});

_citys["云南省"]["保山市"].push({
  name: "保山黔通汽车销售服务有限公司",
  val: "65340V"
});

_citys["云南省"]["昭通市"].push({
  name: "昭通市振翔商贸有限公司",
  val: "63490Z"
});

_citys["云南省"]["普洱市"].push({
  name: "普洱鸿达悦致汽车销售服务有限公司",
  val: "65878F"
});

_citys["云南省"]["临沧市"].push({
  name: "临沧添福源福致汽车销售有限公司",
  val: "65964Z"
});

_citys["云南省"]["楚雄彝族自治州"].push({
  name: "楚雄昊跃汽车销售服务有限公司",
  val: "63550C"
});

_citys["云南省"]["红河哈尼族彝族自治州"].push({
  name: "红河东峻天恒汽车销售服务有限公司",
  val: "65979R"
});

_citys["云南省"]["文山壮族苗族自治州"].push({
  name: "文山联赢汽车经贸有限责任公司",
  val: "65170W"
});

_citys["云南省"]["大理白族自治州"].push({
  name: "大理汇正汽车销售服务有限公司",
  val: "65975L"
});

_citys["重庆市"]["重庆市"].push({
  name: "重庆百事达华德汽车销售服务有限公司",
  val: "62120W"
});

_citys["重庆市"]["重庆市"].push({
  name: "重庆东风南方汽车销售服务有限公司渝旺分公司",
  val: "60710N"
});

_citys["重庆市"]["重庆市"].push({
  name: "重庆同捷汽车销售有限公司",
  val: "62360G"
});

_citys["重庆市"]["重庆市"].push({
  name: "重庆集大成汽车销售服务有限公司",
  val: "65330U"
});

_citys["重庆市"]["重庆市"].push({
  name: "重庆市江津区骄维汽车销售有限公司",
  val: "65913U"
});

_citys["重庆市"]["重庆市"].push({
  name: "重庆新明致汽车销售服务有限公司",
  val: "65760R"
});

_citys["四川省"]["成都市"].push({
  name: "成都天致汽车销售服务有限公司",
  val: "62670U"
});

_citys["四川省"]["成都市"].push({
  name: "成都精典东越汽车销售有限公司",
  val: "62640L"
});

_citys["四川省"]["成都市"].push({
  name: "四川安捷汽车技术服务有限公司",
  val: "60200J"
});

_citys["四川省"]["成都市"].push({
  name: "成都集大成汽车销售服务有限公司",
  val: "60160R"
});

_citys["四川省"]["成都市"].push({
  name: "四川申蓉泓翰汽车销售服务有限公司",
  val: "61520U"
});

_citys["四川省"]["成都市"].push({
  name: "四川明嘉汽车贸易服务有限公司",
  val: "60560A"
});

_citys["四川省"]["成都市"].push({
  name: "四川申蓉泓锦汽车销售服务有限公司",
  val: "63060J"
});

_citys["四川省"]["成都市"].push({
  name: "成都明嘉宝驰汽车销售服务有限公司",
  val: "65846W"
});

_citys["四川省"]["成都市"].push({
  name: "成都市众邦欣狮汽车销售服务有限责任公司",
  val: "65946E"
});

_citys["四川省"]["成都市"].push({
  name: "四川安捷致信汽车销售服务有限公司",
  val: "63330A"
});

_citys["四川省"]["成都市"].push({
  name: "成都中鑫海汽车服务有限公司",
  val: "64320C"
});

_citys["四川省"]["自贡市"].push({
  name: "自贡新业汽车销售有限公司",
  val: "63040A"
});

_citys["四川省"]["攀枝花市"].push({
  name: "攀枝花申蓉新源汽车销售服务有限公司",
  val: "62650X"
});

_citys["四川省"]["泸州市"].push({
  name: "泸州市浩翔贸易有限公司",
  val: "61910T"
});

_citys["四川省"]["德阳市"].push({
  name: "中国第二重型机械集团德阳万路运业有限公司",
  val: "61040X"
});

_citys["四川省"]["德阳市"].push({
  name: "德阳市明致汽车销售服务有限公司",
  val: "62820G"
});

_citys["四川省"]["绵阳市"].push({
  name: "绵阳新华商贸有限公司",
  val: "60360H"
});

_citys["四川省"]["绵阳市"].push({
  name: "四川中致汇汽车销售服务有限公司",
  val: "65993F"
});

_citys["四川省"]["广元市"].push({
  name: "广元市嘉鹏汽车销售服务有限公司",
  val: "65969E"
});

_citys["四川省"]["遂宁市"].push({
  name: "遂宁天致汽车销售服务有限公司",
  val: "62320N"
});

_citys["四川省"]["内江市"].push({
  name: "内江嘉盛明致汽车销售有限公司",
  val: "65908N"
});

_citys["四川省"]["乐山市"].push({
  name: "乐山天牛华申汽车销售服务有限公司",
  val: "62630A"
});

_citys["四川省"]["南充市"].push({
  name: "南充金鞍车业有限公司",
  val: "61900G"
});

_citys["四川省"]["眉山市"].push({
  name: "眉山泓翰车业有限公司",
  val: "61880K"
});

_citys["四川省"]["宜宾市"].push({
  name: "宜宾建国汽车销售服务有限公司",
  val: "65120Y"
});

_citys["四川省"]["广安市"].push({
  name: "广安东创昌升车业有限公司",
  val: "63640G"
});

_citys["四川省"]["达州市"].push({
  name: "达州市鸿杉汽车贸易有限公司",
  val: "64830D"
});

_citys["四川省"]["雅安市"].push({
  name: "雅安极致汽车销售有限公司",
  val: "65110Y"
});

_citys["四川省"]["巴中市"].push({
  name: "巴中龙兴汽车销售服务有限责任公司",
  val: "65927J"
});

_citys["四川省"]["资阳市"].push({
  name: "资阳天致汽车销售服务有限公司",
  val: "64180Z"
});

_citys["西藏自治区"]["拉萨市"].push({
  name: "拉萨市协合汽车贸易有限公司",
  val: "61810J"
});

_citys["陕西省"]["西安市"].push({
  name: "西安天一汽车销售服务有限公司",
  val: "65400B"
});

_citys["陕西省"]["西安市"].push({
  name: "陕西威标汽车销售服务有限公司",
  val: "60190Y"
});

_citys["陕西省"]["西安市"].push({
  name: "陕西鹏飞汽车销售服务有限公司",
  val: "64680S"
});

_citys["陕西省"]["宝鸡市"].push({
  name: "宝鸡佳驰汽车销售服务有限公司",
  val: "61720L"
});

_citys["陕西省"]["咸阳市"].push({
  name: "陕西安乘汽车服务有限公司",
  val: "64420X"
});

_citys["陕西省"]["渭南市"].push({
  name: "渭南乾丰汽车销售服务有限公司",
  val: "62970V"
});

_citys["陕西省"]["汉中市"].push({
  name: "汉中恒信华致汽车销售服务有限公司",
  val: "64310H"
});

_citys["陕西省"]["榆林市"].push({
  name: "榆林市杰隆汽车销售服务有限责任公司",
  val: "61230D"
});

_citys["陕西省"]["安康市"].push({
  name: "陕西中达兴盛汽车销售服务有限公司",
  val: "64920A"
});

_citys["甘肃省"]["兰州市"].push({
  name: "甘肃神驰汽车销售有限责任公司",
  val: "60440V"
});

_citys["甘肃省"]["兰州市"].push({
  name: "甘肃金致宝狮汽车销售服务有限公司",
  val: "65994G"
});

_citys["甘肃省"]["兰州市"].push({
  name: "甘肃卓力汽车销售服务有限公司",
  val: "64930L"
});

_citys["甘肃省"]["天水市"].push({
  name: "天水天行泰汽车贸易有限公司",
  val: "65982U"
});

_citys["甘肃省"]["武威市"].push({
  name: "武威黎庆汽车销售服务有限公司",
  val: "65881J"
});

_citys["甘肃省"]["张掖市"].push({
  name: "张掖市天宜汽车销售服务有限公司",
  val: "65700J"
});

_citys["甘肃省"]["平凉市"].push({
  name: "甘肃金泰源汽车销售服务有限公司",
  val: "64840P"
});

_citys["甘肃省"]["酒泉市"].push({
  name: "酒泉汇通行汽车贸易有限公司",
  val: "65990C"
});

_citys["甘肃省"]["庆阳市"].push({
  name: "庆阳华岳汽车销售服务有限公司",
  val: "65853D"
});

_citys["甘肃省"]["临夏回族自治州"].push({
  name: "临夏实达汽车销售有限公司",
  val: "65880H"
});

_citys["青海省"]["西宁市"].push({
  name: "青海兴达汽车销售有限责任公司",
  val: "61590V"
});

_citys["青海省"]["西宁市"].push({
  name: "青海俊华汽车销售服务有限公司",
  val: "64430Q"
});

_citys["宁夏回族自治区"]["银川市"].push({
  name: "宁夏仁和致利汽车销售服务有限公司",
  val: "60990T"
});

_citys["宁夏回族自治区"]["银川市"].push({
  name: "宁夏标龙汽车销售服务有限公司",
  val: "63080F"
});

_citys["宁夏回族自治区"]["固原市"].push({
  name: "固原正通和汽车销售服务有限公司",
  val: "65800V"
});

_citys["新疆维吾尔自治区"]["乌鲁木齐市"].push({
  name: "新疆永祥恒兴汽车销售有限公司",
  val: "65470J"
});

_citys["新疆维吾尔自治区"]["昌吉回族自治州"].push({
  name: "新疆华兴汽车销售服务有限公司",
  val: "65360X"
});

_citys["新疆维吾尔自治区"]["阿克苏地区"].push({
  name: "阿克苏汇达汽车销售有限公司",
  val: "62000R"
});

_citys["新疆维吾尔自治区"]["伊犁哈萨克自治州"].push({
  name: "伊犁迅捷汽车服务有限责任公司",
  val: "65300R"
});

_citys["上海市"]["上海市"].push({
  name: "上海森宏汽车销售有限公司",
  val: "69502V"
});

_citys["江苏省"]["南京市"].push({
  name: "江苏法标汽车销售服务有限公司",
  val: "69503W"
});

_citys["陕西省"]["西安市"].push({
  name: "陕西恒亚汽车销售服务有限公司",
  val: "69501U"
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

apiUrl = "//api.giccoo.com/df-308";

// apiLink = "//g.giccoo.com/"
apiLink = "http://192.168.3.53:3000/";

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
  redirectUrl = "https://m.giccoo.com/df308/";
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
        title: "测测你不可T代的性格",
        desc: "听音乐测性格，赢取东标308免费使用权。",
        link: "http://m.giccoo.com/df308/",
        imgUrl: "http://m.giccoo.com/df308/img/ico.jpg",
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
        // _public.note = false
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
          }, 1000);
        }
      }, 1000 / 20);
    }
  });
  return init();
};

init = function init() {
  var _data;

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
    data: (_data = {
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
        },
        dealer: {
          id: "city",
          type: "select",
          array: true,
          value: _citys["请选择省份"]["请选择城市"][0].val,
          options: _citys["请选择省份"]["请选择城市"]
        }
      },
      lotform: {
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
        address: {
          id: " address",
          type: "input",
          label: "地址",
          placeholder: "请填写地址",
          value: ""
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
      registerShow: false
    }, _defineProperty(_data, 'lotteryShow', false), _defineProperty(_data, 'lotteryInfo', {
      id: null,
      random: null
    }), _data),
    methods: {
      gameStart: function gameStart() {
        this.pageIndex = 2;
        _public.note = false;
        setup();
        return playAudio("answer-1");
      },
      goUGC: function goUGC() {
        this.lotteryShow = false;
        return setTimeout(function () {
          return showResult();
        }, 300);
      },
      getLottery: function getLottery() {
        var _this2 = this;

        this.registerShow = false;
        return axios.post(apiLink + 'active/df308/lottery/', {}).then(function (msg) {
          if (msg.data.code === 200 && msg.data.id != null) {
            _this2.lotteryInfo.id = msg.data.id;
            _this2.lotteryInfo.random = msg.data.random;
            return _this2.lotteryShow = true;
          } else {
            return _this2.goUGC();
          }
        }).catch(function (err) {
          return _this2.goUGC();
        });
      },
      lotsubmit: function lotsubmit(data) {
        var _this3 = this;

        console.log("data:", data);
        if (data.username === "" || data.username.length > 8 || data.username.length < 2) {
          return alert("请输入2-8个字的姓名");
        }
        if (data.mobile === "") {
          return alert("请输入联系电话");
        }
        if (data.address === "") {
          return alert("请选择省份");
        }
        data['id'] = this.lotteryInfo.id;
        data['random'] = this.lotteryInfo.random;
        return axios.post(apiLink + 'active/df308/update/', data).then(function (msg) {
          if (msg.data.code === 200) {
            alert("填写成功");
            return _this3.goUGC();
          } else {
            return alert(msg.data.reason);
          }
        }).catch(function (err) {
          return alert("服务器连接失败,请重试");
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
        if (data.dealer === "" || data.dealer === "请选择经销商") {
          return alert("请选择经销商");
        }
        return axios.post(apiLink + 'active/df308/register/', data).then(function (msg) {
          if (msg.data.code === 200) {
            alert("填写成功");
            return _this4.getLottery();
          } else {
            return alert(msg.data.reason);
          }
        }).catch(function (err) {
          return alert("服务器连接失败,请重试.");
        });
      },
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
        return window.location.href = "http://www.peugeot.com.cn/308musicfestival/";
      },
      sharePost: function sharePost() {
        ugc.app.renderer.render(ugc.app.stage);
        this.ugc = ugc.app.view.toDataURL();
        // setLottery()
        return this.share();
      },
      share: function share() {
        var data, folder, image;
        image = this.ugc;
        folder = "df308";
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
        var _this5 = this;

        this.pageIndex = 3;
        setTimeout(function () {
          return _this5.swing = true;
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

musicList = ['answer-1', 'answer-2', 'answer-3', 'answer-4'];

playAudio = function playAudio(id) {
  var audio;
  audio = document.getElementById(id);
  console.log('play ' + id);
  setTimeout(function () {
    audio.play();
    return discPlay();
  }, 300);
  audio.addEventListener("pause", function () {
    return discStop();
  }, false);
  return audio.addEventListener("ended", function () {
    return discStop();
  }, false);
};

stopAllAudio = function stopAllAudio() {
  var audio, item, l, len2, results;
  results = [];
  for (l = 0, len2 = musicList.length; l < len2; l++) {
    item = musicList[l];
    audio = document.getElementById(item);
    results.push(audio.pause());
  }
  return results;
};
