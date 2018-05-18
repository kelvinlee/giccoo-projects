"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Container, IsPC, ParticleContainer, Sprite, Texture, TextureCache, Tn, UGC, _CDN, _imgurl, _animate, autoDetectRenderer, cdn, _citys, cloud, _dealers, dog, e, getId, getRandom, getTe, global, imageurl, init, j, len, load, loadWechatConfig, loader, main, neteaseShareImage, options, p, passiveSupported, pre, provinces, rain, randomSort, resource, resources, smallJsonText, stars, startTime, sys;

randomSort = function randomSort(obj) {
  var newArr, oldarr, _randomSortFun;
  newArr = [];
  oldarr = obj;
  _randomSortFun = function randomSortFun(arr, newArr) {
    var random;
    if (arr.length === 1) {
      newArr.push(arr[0]);
      return newArr;
    }
    random = Math.ceil(Math.random() * arr.length) - 1;
    newArr.push(arr[random]);
    arr.splice(random, 1);
    return _randomSortFun(arr, newArr);
  };
  _randomSortFun(oldarr, newArr);
  return newArr;
};

getRandom = function getRandom(length) {
  return parseInt(Math.random() * (length + 1) - 1);
};

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

passiveSupported = false;

try {
  options = Object.defineProperty({}, "passive", {
    get: function get() {
      return passiveSupported = true;
    }
  });
  window.addEventListener("test", options, options);
  window.removeEventListener("test", options, options);
} catch (error) {
  e = error;
  passiveSupported = false;
}

Container = PIXI.Container;

ParticleContainer = PIXI.ParticleContainer;

autoDetectRenderer = PIXI.autoDetectRenderer;

loader = PIXI.loader;

resources = PIXI.loader.resources;

TextureCache = PIXI.utils.TextureCache;

Texture = PIXI.Texture;

Sprite = PIXI.Sprite;

resource = PIXI.loader.resources;

getTe = function getTe(id) {
  return resource[id].texture;
};

getId = function getId(id, link) {
  return loader.resources[link].textures[id];
};

// @codekit-prepend "../../libs/coffee/pixi-base"
cdn = "//image.giccoo.com/projects/mbenz-love/";

smallJsonText = cdn + "img/pages-small.json";

stars = function () {
  // star
  var stars = function () {
    function stars() {
      _classCallCheck(this, stars);
    }

    _createClass(stars, [{
      key: "loop",
      value: function loop(detail) {
        var j, len, ref, results, star;
        if (!this.moving || main.pageIndex !== 1) {
          return false;
        }
        ref = this.stars;
        results = [];
        for (j = 0, len = ref.length; j < len; j++) {
          star = ref[j];
          if (star.valpha >= 1) {
            star.alpha += 0.01 * detail;
          }
          if (star.valpha <= -1) {
            star.alpha -= 0.01 * detail;
          }
          if (star.alpha <= 0) {
            star.valpha = 1;
          }
          if (star.alpha >= 1) {
            results.push(star.valpha = -1);
          } else {
            results.push(void 0);
          }
        }
        return results;
      }
    }, {
      key: "build",
      value: function build() {
        var i, j, random, star;
        load.progressOn = 100;
        // console.log "bg all loaded"
        for (i = j = 1; j < 12; i = ++j) {
          star = new Sprite(getId("page-1-star-" + (i % 4 + 1) + ".png", smallJsonText));
          star.x = Math.random() * (640 - star.width);
          star.y = Math.random() * (420 - star.width) + 100;
          star.alpha = Math.random() * 1;
          star.valpha = [1, -1][Math.floor(Math.random() * 2)];
          if (i % 4 + 1 === 4) {
            random = Math.random() * 0.5 + 0.2;
            star.scale.x = random;
            star.scale.y = random;
          }
          this.stars.push(star);
          this.app.stage.addChild(star);
        }
        return this.app.ticker.add(this.loop.bind(this));
      }
    }, {
      key: "init",
      value: function init() {
        this.app = new PIXI.Application({
          width: 640,
          height: 1138,
          transparent: true,
          preserveDrawingBuffer: true
        });
        document.getElementById('stars').appendChild(this.app.view);
        return PIXI.loader.add([cdn + "img/pages-small.json", cdn + "img/page-7-dog-1.png", cdn + "img/page-7-dog-2.png", cdn + "img/page-7-dog-3.png", cdn + "img/page-7-dog-4.png", cdn + "img/page-7-dog-5.png"]).load(this.build.bind(this));
      }
    }]);

    return stars;
  }();

  ;

  stars.prototype.app = null;

  stars.prototype.moving = true;

  stars.prototype.stars = [];

  return stars;
}.call(undefined);

rain = function () {
  // rain
  var rain = function () {
    function rain() {
      _classCallCheck(this, rain);
    }

    _createClass(rain, [{
      key: "loop",
      value: function loop(detail) {
        var j, len, ref, results;
        if (!this.moving || main.pageIndex !== 4) {
          return false;
        }
        ref = this.rains;
        results = [];
        for (j = 0, len = ref.length; j < len; j++) {
          rain = ref[j];
          rain.x += 1 * detail;
          rain.y += rain.vy * detail;
          if (rain.y > 1138) {
            rain.y = -rain.height;
            results.push(rain.x = rain.vx);
          } else {
            results.push(void 0);
          }
        }
        return results;
      }
    }, {
      key: "build",
      value: function build() {
        var i, j, random;
        for (i = j = 1; j < 50; i = ++j) {
          rain = new Sprite(getId("page-4-rain-" + (i % 4 + 1) + ".png", smallJsonText));
          rain.x = 640 - rain.width * 1.5 - Math.random() * 640;
          rain.vx = rain.x;
          rain.y = Math.random() * (1138 - rain.width);
          rain.vy = Math.random() * 8 + 7;
          if (i % 4 + 1 === 4) {
            random = Math.random() * 0.5 + 0.2;
            rain.scale.x = random;
            rain.scale.y = random;
          }
          this.rains.push(rain);
          this.app.stage.addChild(rain);
        }
        return this.app.ticker.add(this.loop.bind(this));
      }
    }, {
      key: "init",
      value: function init() {
        this.app = new PIXI.Application({
          width: 640,
          height: 1138,
          transparent: true,
          preserveDrawingBuffer: true
        });
        document.getElementById('rain').appendChild(this.app.view);
        return PIXI.loader.add([]).load(this.build.bind(this));
      }
    }]);

    return rain;
  }();

  ;

  rain.prototype.app = null;

  rain.prototype.moving = true;

  rain.prototype.rains = [];

  return rain;
}.call(undefined);

cloud = function () {
  // cloud
  var cloud = function () {
    function cloud() {
      _classCallCheck(this, cloud);
    }

    _createClass(cloud, [{
      key: "loop",
      value: function loop(detail) {
        var j, len, ref, results;
        if (!this.moving || main.pageIndex !== 6) {
          return false;
        }
        ref = this.clouds;
        results = [];
        for (j = 0, len = ref.length; j < len; j++) {
          cloud = ref[j];
          cloud.x -= cloud.vx * detail;
          if (cloud.x < -cloud.width) {
            results.push(cloud.x = 640);
          } else {
            results.push(void 0);
          }
        }
        return results;
      }
    }, {
      key: "build",
      value: function build() {
        var i, j;
        for (i = j = 1; j < 4; i = ++j) {
          cloud = new Sprite(getId("page-6-cloud-" + (i % 3 + 1) + ".png", smallJsonText));
          cloud.x = Math.random() * (640 - cloud.width);
          cloud.vx = 0.2 + 0.2 * i;
          cloud.alpha = 0.2 + Math.random() * 0.3;
          cloud.y = Math.random() * 60 + i * 80;
          this.clouds.push(cloud);
          this.app.stage.addChild(cloud);
        }
        return this.app.ticker.add(this.loop.bind(this));
      }
    }, {
      key: "init",
      value: function init() {
        this.app = new PIXI.Application({
          width: 640,
          height: 1138,
          transparent: true,
          preserveDrawingBuffer: true
        });
        document.getElementById('cloud').appendChild(this.app.view);
        return PIXI.loader.add([]).load(this.build.bind(this));
      }
    }]);

    return cloud;
  }();

  ;

  cloud.prototype.app = null;

  cloud.prototype.moving = true;

  cloud.prototype.clouds = [];

  return cloud;
}.call(undefined);

dog = function () {
  // dog
  var dog = function () {
    function dog() {
      _classCallCheck(this, dog);
    }

    _createClass(dog, [{
      key: "loop",
      value: function loop(detail) {
        var i, j, n, next, ref, results;
        if (!this.moving || main.pageIndex !== 7) {
          return false;
        }
        results = [];
        for (n = j = 0, ref = this.dogs.length * 2; 0 <= ref ? j < ref : j > ref; n = 0 <= ref ? ++j : --j) {
          i = n % this.dogs.length;
          dog = this.dogs[i];
          if (dog.alpha === 1) {
            dog.vf -= detail;
            if (dog.vf <= 0) {
              dog.alpha = 0;
              dog.vf = this.frame;
              if (n > i) {
                next = i - 1;
              } else {
                next = i + 1;
              }
              if (next >= this.dogs.length) {
                next = 0;
              }
              this.dogs[next].alpha = 1;
            }
            break;
          } else {
            results.push(void 0);
          }
        }
        return results;
      }
    }, {
      key: "build",
      value: function build() {
        var i, j;
        // console.log resources
        for (i = j = 1; j < 5; i = ++j) {
          dog = new Sprite(resources[cdn + "img/page-7-dog-" + i + ".png"].texture);
          dog.alpha = 0;
          dog.vf = this.frame;
          this.dogs.push(dog);
          this.app.stage.addChild(dog);
        }
        this.dogs[0].alpha = 1;
        return this.app.ticker.add(this.loop.bind(this));
      }
    }, {
      key: "init",
      value: function init() {
        this.app = new PIXI.Application({
          width: 640,
          height: 1138,
          transparent: true,
          preserveDrawingBuffer: true
        });
        document.getElementById('dog').appendChild(this.app.view);
        return PIXI.loader.add([]).load(this.build.bind(this));
      }
    }]);

    return dog;
  }();

  ;

  dog.prototype.app = null;

  dog.prototype.moving = true;

  dog.prototype.dogs = [];

  dog.prototype.frame = 5;

  return dog;
}.call(undefined);

UGC = function () {
  // ugc
  var UGC = function () {
    _createClass(UGC, [{
      key: "loop",
      value: function loop(detail) {
        if (!this.moving) {
          return false;
        }
      }
    }]);

    function UGC(options) {
      _classCallCheck(this, UGC);

      this.id = options.id;
      this.bg = options.bg;
      this.wy = options.wy;
      this.background = options.background;
      this.w = options.w;
      this.h = options.h;
      this.ugc = options.ugc;
      this.small = options.small;

      this.init();
    }

    _createClass(UGC, [{
      key: "get",
      value: function get() {
        var _this = this;

        this.qr.x = 20;
        this.qr.y = 1138 + 4 - 20 - this.qr.height;
        return setTimeout(function () {
          _this.saveUGC = _this.app.view.toDataURL();
          return _this.ugc();
        }, 100);
      }
    }, {
      key: "build",
      value: function build() {
        var animate, bg, mark, qr, qr2, save, saveText, text;
        // console.log resources["img/page-#{@.id}-bg.jpg"].texture
        bg = new Sprite(resources[cdn + "img/page-" + this.id + "-bg.jpg"].texture);
        this.app.stage.addChild(bg);
        if (this.bg != null) {
          animate = new Sprite(PIXI.Texture.fromCanvas(this.bg));
          this.app.stage.addChild(animate);
        }
        this.mark = mark = new Sprite(resources[cdn + "img/mark.png"].texture);
        mark.x = (640 - mark.width) / 2;
        mark.y = (1138 - mark.height) / 2;

        // title = new Sprite resources["img/ugc-title.png"].texture
        // @.app.stage.addChild title
        qr = this.qr = new Sprite(resources[cdn + "img/ugc-qr-1.png"].texture);
        text = new Sprite(resources[cdn + "img/ugc-" + this.id + "-" + this.random + ".png"].texture);
        this.app.stage.addChild(qr);
        this.app.stage.addChild(text);
        this.app.renderer.render(this.app.stage);
        this.saveUGC = this.app.view.toDataURL();
        this.ugc();
        // title.alpha = 0
        qr.alpha = 0;
        qr2 = this.qr2 = new Sprite(resources[cdn + "img/ugc-qr.png"].texture);
        // @.qr.x = 35
        // @.qr.y = 1138 + 4 - 35 - @.qr.height
        this.app.stage.addChildAt(mark, 2);
        text.y = 60;
        // title2 = new Sprite resources["img/ugc-title-2.png"].texture
        // @.app.stage.addChild title2
        saveText = cdn + "img/long-save.png";
        if (this.wy != null && this.wy) {
          saveText = cdn + "img/save-text.png";
        }
        save = new Sprite(resources[saveText].texture);
        this.app.stage.addChild(save, qr2);
        if (this.id === 3) {
          text.scale.x = 0.9;
          text.scale.y = 0.9;
          text.x += text.width * 0.1 / 2;
        }
        if (this.small != null && this.small) {
          mark.scale.x = 1;
          mark.scale.y = 0.8;
          // mark.x += mark.width*0.1/2
          mark.y += mark.height * (1 - mark.scale.y) / 2;
          // console.log mark.y
          if (mark.y > 200) {
            // title2.y = 50
            text.y += 50;
          }
          qr2.scale.x = 0.9;
          qr2.scale.y = 0.9;
          save.scale.x = 0.9;
          save.scale.y = 0.9;
        } else {
          mark.y -= 36;
          text.y -= 36;
        }
        // title2.y -= 36
        text.y += 40;
        save.x = 640 - mark.x - save.width - 20;
        save.y = mark.y + mark.height - save.height - 20;
        qr2.x = mark.x + 20;
        return qr2.y = mark.y + mark.height - qr2.height - 20;
      }

      // @.over()

    }, {
      key: "init",
      value: function init() {
        this.app = new PIXI.Application({
          width: 640,
          height: 1138,
          transparent: true,
          preserveDrawingBuffer: true
        });
        document.getElementById('ugc').appendChild(this.app.view);
        this.random = Math.floor(Math.random() * 5 + 1);
        return PIXI.loader.add([cdn + "img/page-" + this.id + "-bg.jpg", cdn + "img/ugc-qr.png", cdn + "img/ugc-qr-1.png", cdn + "img/mark.png", cdn + "img/long-save.png", cdn + "img/save-text.png", cdn + "img/ugc-title-2.png", cdn + "img/ugc-" + this.id + "-" + this.random + ".png"]).load(this.build.bind(this));
      }
    }]);

    return UGC;
  }();

  ;

  UGC.prototype.app = null;

  UGC.prototype.moving = true;

  UGC.prototype.saveUGC = null;

  UGC.prototype.qr = null;

  UGC.prototype.mark = null;

  UGC.prototype.random = 1;

  return UGC;
}.call(undefined);

// @codekit-prepend "../../libs/coffee/randomSort"
// @codekit-prepend "../../libs/coffee/requestanimation"
// @codekit-prepend "../../libs/coffee/loadWechatConfig"
// @codekit-prepend "../../libs/coffee/ispc"
// @codekit-prepend "../../libs/coffee/passiveSupport"
// @codekit-prepend "./pixi"

// 法国。荷兰。巴西，英国，韩国，泰国，日本
_CDN = "";

_imgurl = "";

global = {};

main = {};

pre = {};

load = {};

sys = null;

imageurl = "//api.giccoo.com/api/upload/image64/";

provinces = ["江苏", "浙江", "安徽", "上海", "北京", "吉林", "辽宁", "山东", "天津", "河南", "湖南", "广东", "福建", "江西", "四川", "重庆", "贵州", "云南", "湖北", "陕西"];

_citys = [];

_dealers = [];

startTime = new Date().getTime();

for (j = 0, len = provinces.length; j < len; j++) {
  p = provinces[j];
  _citys[p] = [];
  _dealers[p] = {};
}

_citys["江苏"].push("常州市");

_dealers["江苏"]["常州市"] = [];

_citys["浙江"].push("杭州市");

_dealers["浙江"]["杭州市"] = [];

_citys["安徽"].push("合肥市");

_dealers["安徽"]["合肥市"] = [];

_citys["浙江"].push("嘉兴市");

_dealers["浙江"]["嘉兴市"] = [];

_citys["浙江"].push("义乌市");

_dealers["浙江"]["义乌市"] = [];

_citys["江苏"].push("南京市");

_dealers["江苏"]["南京市"] = [];

_citys["江苏"].push("南通市");

_dealers["江苏"]["南通市"] = [];

_citys["浙江"].push("宁波市");

_dealers["浙江"]["宁波市"] = [];

_citys["上海"].push("上海");

_dealers["上海"]["上海"] = [];

_citys["浙江"].push("绍兴市");

_dealers["浙江"]["绍兴市"] = [];

_citys["江苏"].push("苏州市");

_dealers["江苏"]["苏州市"] = [];

_citys["浙江"].push("台州市");

_dealers["浙江"]["台州市"] = [];

_citys["浙江"].push("温州市");

_dealers["浙江"]["温州市"] = [];

_citys["江苏"].push("无锡市");

_dealers["江苏"]["无锡市"] = [];

_citys["江苏"].push("扬州市");

_dealers["江苏"]["扬州市"] = [];

_citys["北京"].push("北京");

_dealers["北京"]["北京"] = [];

_citys["吉林"].push("长春市");

_dealers["吉林"]["长春市"] = [];

_citys["辽宁"].push("大连市");

_dealers["辽宁"]["大连市"] = [];

_citys["山东"].push("济南市");

_dealers["山东"]["济南市"] = [];

_citys["山东"].push("青岛市");

_dealers["山东"]["青岛市"] = [];

_citys["辽宁"].push("沈阳市");

_dealers["辽宁"]["沈阳市"] = [];

_citys["天津"].push("天津");

_dealers["天津"]["天津"] = [];

_citys["河南"].push("郑州市");

_dealers["河南"]["郑州市"] = [];

_citys["湖南"].push("长沙市");

_dealers["湖南"]["长沙市"] = [];

_citys["广东"].push("东莞市");

_dealers["广东"]["东莞市"] = [];

_citys["广东"].push("佛山市");

_dealers["广东"]["佛山市"] = [];

_citys["福建"].push("福州市");

_dealers["福建"]["福州市"] = [];

_citys["广东"].push("广州市");

_dealers["广东"]["广州市"] = [];

_citys["江西"].push("南昌市");

_dealers["江西"]["南昌市"] = [];

_citys["广东"].push("深圳市");

_dealers["广东"]["深圳市"] = [];

_citys["福建"].push("厦门市");

_dealers["福建"]["厦门市"] = [];

_citys["广东"].push("珠海市");

_dealers["广东"]["珠海市"] = [];

_citys["四川"].push("乐山市");

_dealers["四川"]["乐山市"] = [];

_citys["四川"].push("成都市");

_dealers["四川"]["成都市"] = [];

_citys["重庆"].push("重庆");

_dealers["重庆"]["重庆"] = [];

_citys["贵州"].push("贵阳市");

_dealers["贵州"]["贵阳市"] = [];

_citys["云南"].push("昆明市");

_dealers["云南"]["昆明市"] = [];

_citys["湖北"].push("武汉市");

_dealers["湖北"]["武汉市"] = [];

_citys["陕西"].push("西安市");

_dealers["陕西"]["西安市"] = [];

_dealers["江苏"]["常州市"].push("常州万帮汽车销售服务有限公司");

_dealers["浙江"]["杭州市"].push("杭州东星行汽车维修有限公司");

_dealers["浙江"]["杭州市"].push("杭州中升之星汽车销售服务有限公司");

_dealers["浙江"]["杭州市"].push("浙江之信汽车有限公司");

_dealers["浙江"]["杭州市"].push("浙江星杭汽车有限公司");

_dealers["安徽"]["合肥市"].push("合肥利之星汽车服务有限公司");

_dealers["浙江"]["嘉兴市"].push("嘉兴宝利德汽车有限公司");

_dealers["浙江"]["义乌市"].push("义乌利星汽车有限公司");

_dealers["浙江"]["义乌市"].push("义乌市新徽汽车销售服务有限公司");

_dealers["浙江"]["义乌市"].push("义乌欧龙汽车销售服务有限公司");

_dealers["江苏"]["南京市"].push("南京万帮新区汽车销售服务有限公司");

_dealers["江苏"]["南京市"].push("南京中升之星汽车销售服务有限公司");

_dealers["江苏"]["南京市"].push("南京宁星汽车维修服务有限公司");

_dealers["江苏"]["南通市"].push("南通之星汽车维修服务有限公司");

_dealers["江苏"]["南通市"].push("南通文峰伟恒汽车销售服务有限公司");

_dealers["浙江"]["宁波市"].push("宁波利星汽车服务有限公司");

_dealers["浙江"]["宁波市"].push("浙江慈吉之星汽车有限公司");

_dealers["上海"]["上海"].push("上海东华之星汽车维修服务有限公司");

_dealers["上海"]["上海"].push("上海东驰汽车有限公司");

_dealers["上海"]["上海"].push("上海中升之星汽车销售服务有限公司");

_dealers["上海"]["上海"].push("上海冠松之星汽车销售服务有限公司");

_dealers["上海"]["上海"].push("上海利星汽车维修有限公司");

_dealers["上海"]["上海"].push("上海宝利德汽车有限公司");

_dealers["上海"]["上海"].push("上海星瀚汽车维修服务有限公司");

_dealers["上海"]["上海"].push("上海汇之星汽车维修服务有限公司");

_dealers["上海"]["上海"].push("上海闵星汽车服务有限公司");

_dealers["浙江"]["绍兴市"].push("绍兴之星汽车有限公司");

_dealers["江苏"]["苏州市"].push("常熟中升之星汽车销售服务有限公司");

_dealers["江苏"]["苏州市"].push("苏州元星汽车服务有限公司");

_dealers["江苏"]["苏州市"].push("苏州海星汽车销售服务有限公司");

_dealers["江苏"]["苏州市"].push("苏州海星高新汽车销售服务有限公司");

_dealers["浙江"]["台州市"].push("台州德星汽车有限公司");

_dealers["浙江"]["温州市"].push("温州之星汽车有限公司");

_dealers["江苏"]["无锡市"].push("无锡中升星辉汽车销售服务有限公司");

_dealers["江苏"]["无锡市"].push("江阴利之星汽车维修服务有限公司");

_dealers["江苏"]["扬州市"].push("扬州利之星汽车维修服务有限公司");

_dealers["北京"]["北京"].push("利星行平治（北京）汽车有限公司");

_dealers["北京"]["北京"].push("北京中升之星汽车销售服务有限公司");

_dealers["北京"]["北京"].push("北京博瑞祥驰汽车销售服务有限公司");

_dealers["北京"]["北京"].push("北京波士瑞达汽车销售服务有限公司");

_dealers["北京"]["北京"].push("北京百得利之星汽车销售有限公司");

_dealers["吉林"]["长春市"].push("长春华星行汽车销售服务有限公司");

_dealers["辽宁"]["大连市"].push("大连中升之星汽车销售服务有限公司");

_dealers["山东"]["济南市"].push("济南之星汽车服务有限公司");

_dealers["山东"]["青岛市"].push("青岛三合汽车销售有限公司");

_dealers["山东"]["青岛市"].push("青岛之星汽车服务有限公司");

_dealers["辽宁"]["沈阳市"].push("辽宁之星汽车维修服务有限公司");

_dealers["天津"]["天津"].push("天津市庞大之星汽车销售服务有限公司");

_dealers["河南"]["郑州市"].push("郑州利星汽车有限公司");

_dealers["湖南"]["长沙市"].push("湖南仁孚汽车销售服务有限公司");

_dealers["广东"]["东莞市"].push("东莞溢华汽车销售服务有限公司");

_dealers["广东"]["佛山市"].push("佛山中升之星汽车销售服务有限公司");

_dealers["福建"]["福州市"].push("福州东星汽车维修服务有限公司");

_dealers["广东"]["广州市"].push("广东仁孚怡邦汽车销售服务有限公司");

_dealers["广东"]["广州市"].push("广州市龙星行汽车销售服务有限公司");

_dealers["广东"]["广州市"].push("广州鸿粤星辉汽车销售服务有限公司");

_dealers["江西"]["南昌市"].push("南昌迎星汽车销售服务有限公司");

_dealers["江西"]["南昌市"].push("江西华宏星汽车有限公司");

_dealers["广东"]["深圳市"].push("深圳市仁孚特力汽车服务有限公司");

_dealers["广东"]["深圳市"].push("深圳市大兴宝德汽车销售服务有限公司");

_dealers["广东"]["深圳市"].push("深圳市鹏峰汽车销售服务有限公司");

_dealers["福建"]["厦门市"].push("厦门市东之星汽车销售有限公司");

_dealers["广东"]["珠海市"].push("珠海仁孚汽车销售服务有限公司");

_dealers["四川"]["乐山市"].push("四川华星锦业汽车销售服务有限公司");

_dealers["四川"]["成都市"].push("成都仁孚汽车销售服务有限公司");

_dealers["重庆"]["重庆"].push("仁孚美源(重庆)汽车服务有限公司南岸分公司");

_dealers["重庆"]["重庆"].push("仁孚美源(重庆)汽车服务有限公司");

_dealers["重庆"]["重庆"].push("重庆商社麒兴汽车销售服务有限公司");

_dealers["重庆"]["重庆"].push("重庆星顺汽车有限公司");

_dealers["贵州"]["贵阳市"].push("贵州贵星汽车销售服务有限公司");

_dealers["云南"]["昆明市"].push("云南俊星汽车销售有限公司");

_dealers["湖北"]["武汉市"].push("武汉星威汽车销售服务有限公司");

_dealers["陕西"]["西安市"].push("西安利之星汽车有限公司");

load = new Vue({
  el: "#load",
  data: {
    progress: 0,
    mount: false,
    kill: false,
    progressOn: 50 + Math.floor(Math.random() * 30)
  },
  computed: {
    progressText: function progressText() {
      var html, i, k, ref, text;
      html = "";
      text = this.progress.toString();
      for (i = k = 0, ref = text.length; 0 <= ref ? k < ref : k > ref; i = 0 <= ref ? ++k : --k) {
        html += "<span class='font font-" + text[i] + "'>" + text[i] + "</span>";
      }
      return html + '<span class="font font-last">%</span>';
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    var timein;
    // @.progress = 10
    this.mount = true;
    return timein = setInterval(function () {
      _this2.progress += 2;
      if (_this2.progress > _this2.progressOn) {
        _this2.progress = _this2.progressOn;
      }
      if (_this2.progress >= 100) {
        clearInterval(timein);
        console.log("loaded:", (new Date().getTime() - startTime) / 1000, "s");
        _this2.progress = 100;
        _this2.mount = false;
        return setTimeout(function () {
          return _this2.kill = true;
        }, 700);
      }
    }, 1000 / 20);
  }
});

getRandom = function getRandom(length) {
  return parseInt(Math.random() * (length + 1) - 1);
};

window.onload = function () {
  // runAnimate()
  if (window.navigator.userAgent.indexOf("NeteaseMusic") > -1) {
    sys = "NeteaseMusic";
  } else {
    loadWechatConfig();
    wx.ready(function () {
      var shareContent;
      shareContent = {
        title: "爱有千万种风情，我只要一种独行",
        desc: "大声告诉你，这一种才是我要的爱情！",
        link: "http://m.giccoo.com/mbenz-love/",
        imgUrl: "http://m.giccoo.com/mbenz-love/img/ico.jpg",
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
  return init();
};

_animate = function animate(time) {
  requestAnimationFrame(_animate);
  return TWEEN.update(time);
};

requestAnimationFrame(_animate);

init = function init() {
  var TrueH, TrueW, navH, smaller;
  TrueH = document.documentElement.clientHeight;
  TrueW = document.documentElement.clientWidth;
  if (TrueW >= 640) {
    // console.log new Date().getTime() - startTime
    // document.body.style.height = TrueH+"px"
    // document.documentElement.className += " iphone4" if TrueW/TrueH >= 0.64
    TrueW = 640;
  }
  if (TrueH >= 1138) {
    TrueH = 1138;
  }
  // alert TrueW+","+TrueH
  smaller = TrueW / 640 * 1138 > TrueH;
  navH = Math.ceil(TrueW / 640 * 94 / TrueH * 100);
  return main = new Vue({
    el: "#main",
    data: {
      navH: navH,
      pc: false,
      wy: false,
      smaller: smaller,
      homepageShow: false,
      recordPageShow: false,
      ugcPageShow: false,
      ugcLoadPageShow: false,
      regisiterPageShow: false,
      lastPageShow: false,
      recording: false,
      mount: false,
      audio: null,
      playing: "play",
      noteMsg: true,
      w: TrueW,
      h: TrueH,
      maxPage: 7,
      pageIndex: 0,
      moving: true,
      musiclink: "//image.giccoo.com/projects/mbenz-love/mp3/bgm.mp3",
      pageBG: [],
      ugc: null,
      ugcbg: null,
      pauseClick: false,
      pushed: false,
      default: {
        x: 0,
        animated: false
      },
      XY: "pageX",
      form: _defineProperty({
        username: "",
        mobile: "",
        sex: 1,
        detail: 1,
        dealer: "",
        province: "",
        city: ""
      }, "detail", 1),
      provinces: provinces,
      cache: null
    },
    computed: {
      citys: function citys() {
        if (this.form.province === "") {
          return [];
        }
        return _citys[this.form.province];
      },
      dealers: function dealers() {
        if (this.form.city === "") {
          return [];
        }
        return _dealers[this.form.province][this.form.city];
      }
    },
    watch: {
      "form.province": function formProvince(newVal, oldVal) {
        return this.form.city = "";
      },
      "form.city": function formCity(newVal, oldVal) {
        return this.form.dealer = "";
      }
    },
    methods: {
      gameStart: function gameStart(Id) {
        var _this3 = this;

        var _ugc;
        // console.log "id:",Id
        _ugc = new UGC({
          id: Id,
          wy: this.wy,
          w: this.w,
          h: this.h,
          small: this.smaller,
          bg: this.pageBG[Id] != null ? this.pageBG[Id].app.view : null,
          background: function background() {
            return _this3.ugcbg = _ugc.saveUGC;
          },
          ugc: function ugc() {
            _this3.ugc = _ugc.saveUGC;
            return _this3.ugcLoadPageShow = false;
          }
        });
        this.recordPageShow = true;
        // @.ugcLoadPageShow = true
        // console.log @.$el
        this.$el.removeEventListener('touchstart', this.start);
        this.$el.removeEventListener('touchmove', this.move);
        this.$el.removeEventListener('touchend', this.end);
        this.pauseClick = true;
        setTimeout(function () {
          return _this3.pauseClick = false;
        }, 300);
        return typeof _hmt !== "undefined" && _hmt !== null && _hmt.push(['_trackEvent', "mbenzlove", "nation", Id, "-"]);
      },
      recordStart: function recordStart(evt) {
        var self;
        if (this.pauseClick) {
          return false;
        }
        self = main;
        self.recording = true;
        self.cache = setTimeout(function () {
          self.ugcPageShow = true;
          return self.recordPageShow = false;
        }, 5000);
        return event.preventDefault();
      },
      recordEnd: function recordEnd(evt) {
        var self;
        if (this.pauseClick) {
          return false;
        }
        self = main;
        self.ugcPageShow = true;
        self.recordPageShow = false;
        clearTimeout(self.cache);
        // self.recording = false
        return event.preventDefault();
      },
      play: function play() {
        if (this.playing === "stop") {
          return this.audio.pause();
        } else {
          return this.audio.play();
        }
      },
      audioplay: function audioplay() {
        return this.playing = "stop";
      },
      audiopause: function audiopause() {
        return this.playing = "play";
      },
      submit: function submit() {
        var _this4 = this;

        if (this.form.username === "") {
          return alert("请输入用户名");
        }
        if (this.form.mobile === "") {
          return alert("请输入联系电话");
        }
        if (this.form.province === "") {
          return alert("请选择省份");
        }
        if (this.form.city === "") {
          return alert("请选择城市");
        }
        if (this.form.dealer === "") {
          return alert("请选择经销商");
        }
        if (this.form.detail !== 1) {
          return alert("请选择将资料提交给主办方");
        }
        // "//api.giccoo.com/mbenz-love/insert"

        return axios.post("//api.giccoo.com/mbenz-love/insert/", this.form).then(function (msg) {
          if (msg.data.recode === 200) {
            alert("提交成功");
            return _this4.regisiterPageShow = false;
          } else {
            return alert(msg.data.reason);
          }
        }).catch(function (e) {
          return alert("提交失败请重试");
        });
      },
      getIp: function getIp() {
        var _this5 = this;

        return axios.get("//api.giccoo.com/api/ip/", {}).then(function (msg) {
          var address, city, item, k, l, len1, len2, ref, results;
          // console.log msg
          if (msg.data.recode === 200 && msg.data.info.content.address_detail != null) {
            address = msg.data.info.content.address_detail;
            // console.log address
            // address = {city:"北京市",province:"北京市"}
            results = [];
            for (k = 0, len1 = provinces.length; k < len1; k++) {
              item = provinces[k];
              if (address.province.indexOf(item) > -1) {
                _this5.form.province = item;
                ref = _this5.citys;
                for (l = 0, len2 = ref.length; l < len2; l++) {
                  city = ref[l];
                  if (address.city.indexOf(city) > -1) {
                    setTimeout(function () {
                      _this5.form.city = city;
                      return setTimeout(function () {
                        return _this5.form.dealer = _this5.dealers[0];
                      }, 10);
                    }, 10);
                    break;
                  }
                }
                break;
              } else {
                results.push(void 0);
              }
            }
            return results;
          }
        });
      },
      share: function share() {
        var data, image;
        image = this.ugc;
        data = {
          image: image,
          folder: "mbenzlove"
        };
        if (image == null) {
          return main.faild();
        }
        if (this.pushed) {
          return false;
        }
        return axios.post(imageurl, data).then(function (msg) {
          main.pushed = true;
          if (msg.data.recode === 200) {
            return main.success(msg.data);
          } else {
            return main.faild();
          }
        }).catch(function (e) {
          // alert e
          return main.faild();
        });
      },
      success: function success(data) {
        this.shareImageLink = data.info;
        return neteaseShareImage();
      },
      faild: function faild() {},
      build: function build() {
        this.pageBG[1] = new stars();
        this.pageBG[1].init();
        this.pageBG[4] = new rain();
        this.pageBG[4].init();
        this.pageBG[6] = new cloud();
        this.pageBG[6].init();
        this.pageBG[7] = new dog();
        return this.pageBG[7].init();
      },
      moveNext: function moveNext() {
        // console.log "xiayige",@.pageIndex
        this.pageIndex += 1;
        if (this.pageIndex >= this.maxPage) {
          return this.pageIndex = this.maxPage;
        }
      },
      movePrev: function movePrev() {
        // console.log "shangyige",@.pageIndex
        this.pageIndex -= 1;
        if (this.pageIndex <= 0) {
          return this.pageIndex = 0;
        }
      },
      start: function start(evt) {
        var self, touch;
        self = main;
        if (self.default.animated) {
          // evt.preventDefault()
          return false;
        }
        if (self.noteMsg) {
          self.audio.play();
        }
        self.noteMsg = false;
        touch = evt.touches != null ? evt.touches[0] : evt;
        return self.default.x = touch[this.XY];
      },
      move: function move(evt) {
        var pageX, self, touch;
        self = main;
        if (self.default.animated || self.poping) {
          return false;
        }
        if (!passiveSupported) {
          evt.preventDefault();
        }
        touch = evt.touches != null ? evt.touches[0] : evt;
        pageX = touch[this.XY];
        if (pageX - self.default.x > 50) {
          self.default.animated = true;
          self.movePrev();
        }
        if (pageX - self.default.x < -50) {
          self.default.animated = true;
          return self.moveNext();
        }
      },
      end: function end(evt) {
        var self;
        self = main;
        return self.default.animated = false;
      }
    },
    mounted: function mounted($el, e) {
      var _this6 = this;

      if (sys === "NeteaseMusic") {
        this.wy = true;
      }
      this.mount = true;
      this.build();
      this.getIp();
      load.progressOn = 95;
      this.audio = document.getElementById("bgm");
      this.recordDom = document.getElementById("record");
      // console.log IsPC()
      if (IsPC()) {
        this.$el.addEventListener('mousedown', this.start, passiveSupported ? {
          passive: true
        } : false);
        this.$el.addEventListener('mousemove', this.move, passiveSupported ? {
          passive: true
        } : false);
        this.$el.addEventListener('mouseup', this.end, passiveSupported ? {
          passive: true
        } : false);
        this.recordDom.addEventListener('mousedown', this.recordStart, passiveSupported ? {
          passive: true
        } : false);
        this.recordDom.addEventListener('mouseup', this.recordEnd, passiveSupported ? {
          passive: true
        } : false);
        this.pc = true;
      } else {
        this.$el.addEventListener('touchstart', this.start, passiveSupported ? {
          passive: true
        } : false);
        this.$el.addEventListener('touchmove', this.move, passiveSupported ? {
          passive: true
        } : false);
        this.$el.addEventListener('touchend', this.end, passiveSupported ? {
          passive: true
        } : false);
        this.recordDom.addEventListener('touchstart', this.recordStart, false);
        this.recordDom.addEventListener('touchend', this.recordEnd, false);
      }
      if (this.audio) {
        this.audio.addEventListener("play", this.audioplay, false);
      }
      if (this.audio) {
        this.audio.addEventListener("pause", this.audiopause, false);
      }
      if (this.audio) {
        this.audio.addEventListener("ended", this.audiopause, false);
      }
      return document.addEventListener("WeixinJSBridgeReady", function () {
        return _this6.audio.play();
      }, false);
    }
  });
};

Tn = function Tn() {
  var from = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    x: 0
  };
  var to = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    x: 100
  };
  var time = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 800;
  var callback = arguments[3];

  var tempX, tween;
  tempX = from;
  tween = new TWEEN.Tween(tempX).to(to, time).easing(TWEEN.Easing.Cubic.Out).onUpdate(function () {
    return callback(tempX);
  }).start();
  return tween;
};

neteaseShareImage = function neteaseShareImage() {
  var picUrl, redirectUrl, title1;
  title1 = "点击测试你的孤独指数";
  picUrl = "https://image.giccoo.com/upload/lancome/" + main.shareImageLink + "@!large";
  redirectUrl = "https://m.giccoo.com/lancome/";
  console.log("orpheus://sharepic?picUrl=" + encodeURIComponent(picUrl) + "&shareUrl=" + encodeURIComponent(redirectUrl) + "&wbDesc=" + encodeURIComponent(title1) + "&qqDesc=" + encodeURIComponent(title1));
  return window.location.href = "orpheus://sharepic?picUrl=" + encodeURIComponent(picUrl) + "&shareUrl=" + encodeURIComponent(redirectUrl) + "&wbDesc=" + encodeURIComponent(title1) + "&qqDesc=" + encodeURIComponent(title1);
};
