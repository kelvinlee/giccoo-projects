'use strict';

var ANIMATION_END_NAME, ANIMATION_END_NAMES, Store, TRANSITION_END_NAME, TRANSITION_END_NAMES, VENDORS, _citys, changeMain, changePoint, css3Prefix, i, j, len, mLeft, mRight, mTestElement, mainSlider, moveLeft, moveRight, secondSlider, showTab, tabId, tabId2;

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

Array.prototype.clean = function (deleteValue) {
  i = 0;
  while (i < this.length) {
    if (this[i] === deleteValue) {
      this.splice(i, 1);
      i--;
    }
    i++;
  }
  return this;
};

HTMLElement.prototype.getStyle = function (className) {
  if (this.currentStyle) {
    return this.currentStyle(className);
  } else {
    return document.defaultView.getComputedStyle(this, false)[className];
  }
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

// @codekit-prepend "coffee/css3Prefix"
// @codekit-prepend "coffee/plus"
// @codekit-prepend "../../libs/coffee/requestanimation"
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
  code: "BJG",
  name: "沃尔沃汽车北京中汽南方百旺4S中心"
});

_citys["北京"]["北京"].push({
  code: "BJC",
  name: "沃尔沃汽车北京中汽南方亦庄4S中心"
});

_citys["北京"]["北京"].push({
  code: "BJC",
  name: "沃尔沃汽车北京中汽南方东四环展厅 "
});

_citys["北京"]["北京"].push({
  code: "BJE",
  name: "沃尔沃汽车北京中诚海华4S中心 "
});

_citys["甘肃"]["兰州"].push({
  code: "LZA",
  name: "沃尔沃汽车兰州福康4S中心"
});

_citys["河北"]["石家庄"].push({
  code: "HBC",
  name: "沃尔沃汽车石家庄冀东东沃4S中心"
});

_citys["河北"]["唐山"].push({
  code: "HBD",
  name: "沃尔沃汽车唐山庞大兴沃4S中心"
});

_citys["黑龙江"]["哈尔滨"].push({
  code: "HRA",
  name: "沃尔沃汽车黑龙江尊荣4S中心"
});

_citys["吉林"]["长春"].push({
  code: "CCA",
  name: "沃尔沃汽车长春盛荣4S中心"
});

_citys["辽宁"]["大连"].push({
  code: "DLA",
  name: "沃尔沃汽车大连尊荣亿方4S中心"
});

_citys["辽宁"]["大连"].push({
  code: "DLA",
  name: "沃尔沃汽车大连尊荣亿方城市展厅"
});

_citys["辽宁"]["沈阳"].push({
  code: "SYA",
  name: "沃尔沃汽车沈阳尊荣4S中心"
});

_citys["内蒙古"]["包头"].push({
  code: "MGC",
  name: "沃尔沃汽车包头庞大兴沃4S中心"
});

_citys["内蒙古"]["呼和浩特"].push({
  code: "MGB",
  name: "沃尔沃汽车呼和浩特庞大兴沃4S中心"
});

_citys["山东"]["济南"].push({
  code: "JND",
  name: "沃尔沃汽车济南富豪4S中心"
});

_citys["山东"]["青岛"].push({
  code: "QDA",
  name: "沃尔沃汽车青岛富豪4S中心"
});

_citys["山东"]["烟台"].push({
  code: "YTA",
  name: "沃尔沃汽车烟台富豪4S中心"
});

_citys["山西"]["太原"].push({
  code: "TYA",
  name: "沃尔沃汽车太原富豪新华夏4S中心"
});

_citys["陕西"]["西安"].push({
  code: "XAA",
  name: "沃尔沃汽车西安佳豪4S中心"
});

_citys["天津"]["天津"].push({
  code: "TJA",
  name: "沃尔沃汽车天津中汽南方4S中心"
});

_citys["新疆"]["乌鲁木齐"].push({
  code: "XJB",
  name: "沃尔沃汽车乌鲁木齐金涛4S中心"
});

_citys["安徽"]["合肥"].push({
  code: "HFA",
  name: "沃尔沃汽车合肥捷沃4S中心"
});

_citys["河南"]["郑州"].push({
  code: "HNB",
  name: "沃尔沃汽车郑州锦堂盛4S中心"
});

_citys["湖北"]["武汉"].push({
  code: "WHA",
  name: "沃尔沃汽车武汉富豪4S中心"
});

_citys["江苏"]["常州"].push({
  code: "CZA",
  name: "沃尔沃汽车常州富豪4S中心"
});

_citys["江苏"]["南通"].push({
  code: "NTA",
  name: "沃尔沃汽车南通东沃4S中心"
});

_citys["江苏"]["苏州"].push({
  code: "SUA",
  name: "沃尔沃汽车苏州世之贸4S中心"
});

_citys["江苏"]["苏州"].push({
  code: "SUB",
  name: "沃尔沃汽车苏州通孚祥4S中心"
});

_citys["江苏"]["无锡"].push({
  code: "WXB",
  name: "沃尔沃汽车无锡东方吉羊4S中心"
});

_citys["江苏"]["扬州"].push({
  code: "YZA",
  name: "沃尔沃汽车扬州富豪4S中心"
});

_citys["江西"]["南昌"].push({
  code: "NCA",
  name: "沃尔沃汽车南昌绿地名沃4S中心"
});

_citys["上海"]["上海"].push({
  code: "SHC",
  name: "沃尔沃汽车上海通孚祥4S中心 "
});

_citys["上海"]["上海"].push({
  code: "SHD",
  name: "沃尔沃汽车上海永达4S中心"
});

_citys["浙江"]["杭州"].push({
  code: "HZA",
  name: "沃尔沃汽车杭州世之贸4S中心"
});

_citys["浙江"]["杭州"].push({
  code: "HZC",
  name: "沃尔沃汽车浙江元通元瑞4S中心"
});

_citys["浙江"]["嘉兴"].push({
  code: "JXA",
  name: "沃尔沃汽车嘉兴元通元瑞4S中心"
});

_citys["浙江"]["宁波"].push({
  code: "NBB",
  name: "沃尔沃汽车宁波元通元瑞4S中心"
});

_citys["浙江"]["绍兴"].push({
  code: "SXA",
  name: "沃尔沃汽车绍兴海昌4S中心"
});

_citys["浙江"]["台州"].push({
  code: "TZA",
  name: "沃尔沃汽车台州凯和4S中心"
});

_citys["浙江"]["温州"].push({
  code: "WZA",
  name: "沃尔沃汽车温州东昌4S中心"
});

_citys["福建"]["泉州"].push({
  code: "QZA",
  name: "沃尔沃汽车泉州鸿海4S中心"
});

_citys["广东"]["东莞"].push({
  code: "DGA",
  name: "沃尔沃汽车东莞中汽南方4S中心"
});

_citys["广东"]["佛山"].push({
  code: "NHA",
  name: "沃尔沃汽车佛山富豪城市展厅"
});

_citys["广东"]["佛山"].push({
  code: "NHA",
  name: "沃尔沃汽车佛山富豪4S中心"
});

_citys["广东"]["广州"].push({
  code: "GZB",
  name: "沃尔沃汽车广州永安富豪4S中心"
});

_citys["广东"]["揭阳"].push({
  code: "JYA",
  name: "沃尔沃汽车揭阳恒丰4S中心"
});

_citys["广东"]["汕头"].push({
  code: "STA",
  name: "沃尔沃汽车汕头恒康4S中心 "
});

_citys["广东"]["深圳"].push({
  code: "SZA",
  name: "沃尔沃汽车深圳中汽南方4S中心"
});

_citys["广东"]["深圳"].push({
  code: "SZB",
  name: "沃尔沃汽车深圳天汽南方4S中心"
});

_citys["广东"]["中山"].push({
  code: "ZSA",
  name: "沃尔沃汽车中山中汽南方4S中心"
});

_citys["广东"]["珠海"].push({
  code: "ZHA",
  name: "沃尔沃汽车珠海中汽南方4S中心"
});

_citys["广西"]["南宁"].push({
  code: "NNA",
  name: "沃尔沃汽车南宁弘瑞4S中心"
});

_citys["贵州"]["贵阳"].push({
  code: "GYA",
  name: "沃尔沃汽车贵州天鼎4S中心"
});

_citys["海南"]["海口"].push({
  code: "HKA",
  name: "沃尔沃汽车海南天昌达4S中心"
});

_citys["湖南"]["长沙"].push({
  code: "CSA",
  name: "沃尔沃汽车长沙中汽南方4S中心"
});

_citys["四川"]["成都"].push({
  code: "CDA",
  name: "沃尔沃汽车成都三和4S中心"
});

_citys["四川"]["成都"].push({
  code: "CDC",
  name: "沃尔沃汽车成都通孚祥4S中心"
});

_citys["云南"]["昆明"].push({
  code: "KMA",
  name: "沃尔沃汽车昆明富豪4S中心"
});

_citys["重庆"]["重庆"].push({
  code: "CQA",
  name: "沃尔沃汽车重庆西南富豪4S中心"
});

_citys["山东"]["潍坊"].push({
  code: "JNC",
  name: "沃尔沃汽车潍坊诺德4S中心"
});

_citys["重庆"]["重庆"].push({
  code: "CQC",
  name: "沃尔沃汽车重庆龙华沃华4S中心"
});

_citys["北京"]["北京"].push({
  code: "BJK",
  name: "沃尔沃汽车北京海之沃4S中心"
});

_citys["上海"]["上海"].push({
  code: "SHF",
  name: "沃尔沃汽车上海通孚祥宝山4S中心"
});

_citys["山西"]["太原"].push({
  code: "TYA",
  name: "沃尔沃汽车太原富豪新华夏平阳展厅"
});

_citys["河北"]["保定"].push({
  code: "HBE",
  name: "沃尔沃汽车保定庞大兴沃4S中心"
});

_citys["江苏"]["南京"].push({
  code: "NJB",
  name: "沃尔沃汽车江苏世贸泰信东盛4S中心"
});

_citys["辽宁"]["鞍山"].push({
  code: "ASA",
  name: "沃尔沃汽车鞍山尊荣4S中心"
});

_citys["山东"]["济南"].push({
  code: "JNF",
  name: "沃尔沃汽车山东新富豪4S中心"
});

_citys["北京"]["北京"].push({
  code: "BJL",
  name: "沃尔沃汽车北京中汽南方中关村4S中心"
});

_citys["陕西"]["榆林"].push({
  code: "YLA",
  name: "沃尔沃汽车榆林佳豪金鼎4S中心"
});

_citys["云南"]["昆明"].push({
  code: "KMB",
  name: "沃尔沃汽车云南华沃4S中心"
});

_citys["北京"]["北京"].push({
  code: "BJH",
  name: "沃尔沃汽车北京燕豪金港4S中心"
});

_citys["广东"]["东莞"].push({
  code: "DGB",
  name: "沃尔沃汽车东莞世沃4S中心"
});

_citys["山东"]["济宁"].push({
  code: "JNE",
  name: "沃尔沃汽车济宁恒昌4S中心"
});

_citys["山东"]["临沂"].push({
  code: "LYA",
  name: "沃尔沃汽车临沂富豪4S中心"
});

_citys["广东"]["佛山"].push({
  code: "SDB",
  name: "沃尔沃汽车顺德世维4S中心 "
});

_citys["广东"]["广州"].push({
  code: "GZC",
  name: "沃尔沃汽车广州世祥4S中心"
});

_citys["江苏"]["无锡"].push({
  code: "WXC",
  name: "沃尔沃汽车无锡富绅城市展厅"
});

_citys["陕西"]["西安"].push({
  code: "XAC",
  name: "沃尔沃汽车陕西佳骏4S中心"
});

_citys["山东"]["淄博"].push({
  code: "JNB",
  name: "沃尔沃汽车淄博奥德达4S中心"
});

_citys["山东"]["青岛"].push({
  code: "QDB",
  name: "沃尔沃汽车青岛富融4S中心"
});

_citys["山东"]["泰安"].push({
  code: "TAA",
  name: "沃尔沃汽车泰安富豪4S中心"
});

_citys["山东"]["东营"].push({
  code: "DYA",
  name: "沃尔沃汽车东营富豪4S中心"
});

_citys["河北"]["邯郸"].push({
  code: "HBF",
  name: "沃尔沃汽车邯郸庞大兴沃4S中心"
});

_citys["四川"]["乐山"].push({
  code: "CDC",
  name: "沃尔沃汽车乐山通孚祥城市展厅"
});

_citys["黑龙江"]["大庆"].push({
  code: "DQA",
  name: "沃尔沃汽车大庆尊荣4S中心"
});

_citys["宁夏"]["银川"].push({
  code: "YCB",
  name: "沃尔沃汽车银川宁夏佳丰4S中心"
});

_citys["上海"]["上海"].push({
  code: "SHG",
  name: "沃尔沃汽车上海永达嘉沃4S中心"
});

_citys["浙江"]["杭州"].push({
  code: "HZD",
  name: "沃尔沃汽车浙江万友维修站"
});

_citys["内蒙古"]["赤峰"].push({
  code: "MGE",
  name: "沃尔沃汽车赤峰庞大兴沃4S中心"
});

_citys["浙江"]["杭州"].push({
  code: "HZF",
  name: "沃尔沃汽车杭州中沃4S中心"
});

_citys["辽宁"]["沈阳"].push({
  code: "SYC",
  name: "沃尔沃汽车沈阳尊荣富沃4S中心"
});

_citys["北京"]["北京"].push({
  code: "BJM",
  name: "沃尔沃汽车北京元之沃4S中心"
});

_citys["天津"]["天津"].push({
  code: "TJC",
  name: "沃尔沃汽车天津通孚祥4S中心"
});

_citys["青海"]["西宁"].push({
  code: "QHA",
  name: "沃尔沃汽车西宁赛亚金孚4S中心"
});

_citys["河南"]["洛阳"].push({
  code: "HND",
  name: "沃尔沃汽车洛阳恒信瑞沃4S中心"
});

_citys["北京"]["北京"].push({
  code: "BJK",
  name: "沃尔沃汽车北京海之沃城市展厅"
});

_citys["山西"]["大同"].push({
  code: "BJK",
  name: "沃尔沃汽车大同雁之沃城市展厅"
});

_citys["广西"]["桂林"].push({
  code: "NNA",
  name: "沃尔沃汽车桂林弘瑞城市展厅"
});

_citys["甘肃"]["兰州"].push({
  code: "LZC",
  name: "沃尔沃汽车兰州庞大兴沃4S中心"
});

_citys["湖北"]["武汉"].push({
  code: "WHC",
  name: "沃尔沃汽车武汉富融4S中心"
});

_citys["四川"]["成都"].push({
  code: "CDD",
  name: "沃尔沃汽车成都长征沃尔沃4S中心"
});

_citys["河南"]["郑州"].push({
  code: "HNC",
  name: "沃尔沃汽车郑州市郑州鼎沃4S中心"
});

_citys["浙江"]["湖州"].push({
  code: "HZE",
  name: "沃尔沃汽车湖州瑞杰4S中心"
});

_citys["江苏"]["无锡"].push({
  code: "JYB",
  name: "沃尔沃汽车江阴东方沃邦4S中心"
});

_citys["江苏"]["徐州"].push({
  code: "XZA",
  name: "沃尔沃汽车徐州世贸泰信汽车4S中心"
});

_citys["上海"]["上海"].push({
  code: "SHH",
  name: "沃尔沃汽车上海永达申杰4S"
});

_citys["广东"]["广州"].push({
  code: "GZA",
  name: "沃尔沃汽车广东中汽南方天河城市展厅"
});

_citys["福建"]["厦门"].push({
  code: "XMA",
  name: "沃尔沃汽车厦门新成功4S中心"
});

_citys["吉林"]["长春"].push({
  code: "CCB",
  name: "沃尔沃汽车长春维信4S中心"
});

_citys["安徽"]["合肥"].push({
  code: "HFC",
  name: "沃尔沃汽车合肥瑞杰4S中心"
});

_citys["江苏"]["泰州"].push({
  code: "TZD",
  name: "沃尔沃汽车泰州富豪4S中心"
});

_citys["福建"]["厦门"].push({
  code: "XMB",
  name: "沃尔沃汽车厦门中升沃茂4S中心"
});

_citys["江苏"]["无锡"].push({
  code: "YXA",
  name: "沃尔沃汽车宜兴东方沃邦4S中心"
});

_citys["广西"]["柳州"].push({
  code: "NNC",
  name: "沃尔沃汽车柳州弘耀 4S中心"
});

_citys["云南"]["昆明"].push({
  code: "KMC",
  name: "沃尔沃汽车昆明庞润荣沃4S中心"
});

_citys["福建"]["泉州"].push({
  code: "QZB",
  name: "沃尔沃汽车泉州中升沃茂 4S中心"
});

_citys["黑龙江"]["哈尔滨"].push({
  code: "HRB",
  name: "沃尔沃汽车哈尔滨尊荣亿方4S中心"
});

_citys["江西"]["赣州"].push({
  code: "GAA",
  name: "沃尔沃汽车赣州绿地祥沃4S中心"
});

_citys["湖北"]["武汉"].push({
  code: "WHE",
  name: "沃尔沃汽车武汉恒信瑞沃4S中心 "
});

_citys["江苏"]["镇江"].push({
  code: "ZJA",
  name: "沃尔沃汽车镇江世贸泰信4S中心"
});

_citys["陕西"]["西安"].push({
  code: "XAD",
  name: "沃尔沃汽车西安天润4S中心"
});

_citys["河南"]["平顶山"].push({
  code: "HNE",
  name: "沃尔沃汽车平顶山市丰海4S中心"
});

_citys["辽宁"]["大连"].push({
  code: "DLB",
  name: "沃尔沃大连尊荣汽车4S中心"
});

_citys["福建"]["福州"].push({
  code: "FZB",
  name: "沃尔沃汽车福州吉诺富豪4S中心"
});

_citys["辽宁"]["锦州"].push({
  code: "JZA",
  name: "沃尔沃汽车锦州尊荣4S中心"
});

_citys["广东"]["深圳"].push({
  code: "SZC",
  name: "沃尔沃汽车深圳德顺行龙岗展厅"
});

_citys["福建"]["龙岩"].push({
  code: "LYB",
  name: "沃尔沃汽车龙岩英瑞福4S中心"
});

_citys["湖南"]["长沙"].push({
  code: "CSC",
  name: "沃尔沃汽车长沙建沃4S中心"
});

_citys["贵州"]["贵阳"].push({
  code: "GYB",
  name: "沃尔沃汽车贵阳中沃4S中心"
});

_citys["河南"]["安阳"].push({
  code: "AYA",
  name: "沃尔沃汽车安阳东安4S中心"
});

_citys["山东"]["威海"].push({
  code: "WHD",
  name: "沃尔沃汽车 威海 威海富豪 4S中心 "
});

_citys["江苏"]["盐城"].push({
  code: "YCC",
  name: "沃尔沃汽车盐城东昌4S中心"
});

_citys["安徽"]["阜阳"].push({
  code: "FYA",
  name: "沃尔沃汽车阜阳瑞杰豪骏4S中心"
});

_citys["四川"]["绵阳"].push({
  code: "MYA",
  name: "沃尔沃汽车绵阳通孚祥4S中心"
});

_citys["福建"]["三明"].push({
  code: "SMA",
  name: "沃尔沃汽车三明吉诺富豪4S中心"
});

_citys["河南"]["商丘"].push({
  code: "SQA",
  name: "沃尔沃汽车商丘商沃4S中心"
});

_citys["河北"]["保定"].push({
  code: "BDB",
  name: "沃尔沃汽车保定轩宇骐骥4S中心"
});

_citys["江西"]["九江"].push({
  code: "JJA",
  name: "沃尔沃汽车九江福沃4S中心"
});

_citys["上海"]["上海"].push({
  code: "SHI",
  name: "沃尔沃汽车上海东昌4S中心"
});

_citys["江苏"]["苏州"].push({
  code: "SUD",
  name: "沃尔沃汽车苏州东昌4S中心"
});

_citys["浙江"]["宁波"].push({
  code: "NBA",
  name: "沃尔沃汽车宁波丰颐4S中心"
});

_citys["上海"]["上海"].push({
  code: "SHA",
  name: "沃尔沃汽车上海世之沃浦西4S中心"
});

_citys["安徽"]["芜湖"].push({
  code: "HFB",
  name: "沃尔沃汽车芜湖豪骏4S中心"
});

_citys["河北"]["唐山"].push({
  code: "TSC",
  name: "沃尔沃汽车唐山凯骐4S中心"
});

_citys["山东"]["滨州"].push({
  code: "BZA",
  name: "沃尔沃汽车滨州东泰4S中心"
});

_citys["江苏"]["常熟"].push({
  code: "SUC",
  name: "沃尔沃汽车常熟通孚祥3S中心"
});

_citys["江西"]["南昌"].push({
  code: "NCB",
  name: "沃尔沃汽车南昌东沃4S中心"
});

_citys["江西"]["上饶"].push({
  code: "SRA",
  name: "沃尔沃汽车上饶名一4S中心"
});

_citys["山东"]["德州"].push({
  code: "DZA",
  name: "沃尔沃汽车德州瑞沃4S中心"
});

_citys["河北"]["邢台"].push({
  code: "XTA",
  name: "沃尔沃汽车邢台蓝池4S中心"
});

_citys["云南"]["红河"].push({
  code: "HHA",
  name: "沃尔沃汽车红河沃捷4S中心"
});

_citys["福建"]["漳州"].push({
  code: "ZZC",
  name: "沃尔沃汽车漳州新成功4S店中心"
});

_citys["湖南"]["株洲"].push({
  code: "ZZA",
  name: "沃尔沃汽车株洲德顺4S中心"
});

_citys["四川"]["南充"].push({
  code: "NAA",
  name: "沃尔沃汽车南充品信4S中心"
});

_citys["湖北"]["襄阳"].push({
  code: "XYC",
  name: "沃尔沃汽车襄阳建银4S中心"
});

_citys["广东"]["深圳"].push({
  code: "SZD",
  name: "沃尔沃汽车深圳鼎沃3S中心"
});

_citys["湖北"]["武汉"].push({
  code: "WHF",
  name: "沃尔沃汽车武汉建银4S中心"
});

_citys["重庆"]["重庆"].push({
  code: "CQD",
  name: "沃尔沃汽车重庆万友都成4S中心"
});

_citys["安徽"]["合肥"].push({
  code: "HFD",
  name: "沃尔沃汽车合肥恒信4S中心"
});

_citys["广西"]["桂林"].push({
  code: "GLA",
  name: "沃尔沃汽车桂林广汇3S中心"
});

_citys["浙江"]["宁波"].push({
  code: "NBD",
  name: "沃尔沃汽车宁波沃龙4S中心"
});

_citys["河南"]["南阳"].push({
  code: "NYA",
  name: "沃尔沃汽车南阳和谐4S中心"
});

_citys["陕西"]["咸阳"].push({
  code: "XYA",
  name: "沃尔沃汽车咸阳新丰泰4S中心"
});

_citys["福建"]["莆田"].push({
  code: "PTA",
  name: "沃尔沃汽车莆田吉诺4S中心"
});

_citys["福建"]["福州"].push({
  code: "FZA",
  name: "沃尔沃汽车福州中汽南方4S中心"
});

_citys["广东"]["广州"].push({
  code: "GZD",
  name: "沃尔沃汽车广州广物君沃4S中心"
});

_citys["吉林"]["吉林"].push({
  code: "JLA",
  name: "沃尔沃汽车吉林市吉林维信4S中心"
});

_citys["陕西"]["宝鸡"].push({
  code: "BJZ",
  name: "沃尔沃汽车宝鸡宝沃4S中心"
});

_citys["陕西"]["延安"].push({
  code: "YAA",
  name: "沃尔沃汽车延安广汇4S中心"
});

_citys["山东"]["济南"].push({
  code: "JNG",
  name: "沃尔沃汽车济南京泰4S中心"
});

_citys["浙江"]["义乌"].push({
  code: "YWA",
  name: "沃尔沃汽车义乌金沃维修站"
});

_citys["四川"]["成都"].push({
  code: "CDE",
  name: "沃尔沃汽车成都广汇4S中心"
});

_citys["广东"]["深圳"].push({
  code: "SZC",
  name: "沃尔沃汽车深圳德顺4S中心"
});

_citys["河南"]["新乡"].push({
  code: "XXA",
  name: "沃尔沃汽车新乡东安4S中心"
});

_citys["重庆"]["重庆"].push({
  code: "CQE",
  name: "沃尔沃汽车重庆万友3S中心"
});

_citys["北京"]["北京"].push({
  code: "BJO",
  name: "沃尔沃汽车北京正通鼎沃3S中心"
});

_citys["浙江"]["温州"].push({
  code: "WZD",
  name: "沃尔沃汽车温州荣沃4S中心"
});

_citys["江苏"]["苏州"].push({
  code: "SUB",
  name: "沃尔沃汽车昆山通孚祥展厅"
});

_citys["河南"]["郑州"].push({
  code: "HNF",
  name: "沃尔沃汽车郑州中沃4S中心"
});

_citys["河北"]["沧州"].push({
  code: "HBH",
  name: "沃尔沃汽车沧州广汇4S中心"
});

_citys["河北"]["石家庄"].push({
  code: "HBG",
  name: "沃尔沃汽车石家庄瑞沃4S中心"
});

_citys["四川"]["成都"].push({
  code: "CDF",
  name: "沃尔沃汽车成都建国4S中心"
});

_citys["江苏"]["南京"].push({
  code: "NJA",
  name: "沃尔沃汽车南京世贸泰信4S中心"
});

_citys["山西"]["临汾"].push({
  code: "LFA",
  name: "沃尔沃汽车临汾海之沃4S中心"
});

_citys["浙江"]["舟山"].push({
  code: "ZSB",
  name: "沃尔沃汽车舟山永杰4S中心"
});

_citys["山西"]["运城"].push({
  code: "YUA",
  name: "沃尔沃汽车运城海之沃4S中心"
});

_citys["河南"]["郑州"].push({
  code: "HNH",
  name: "沃尔沃汽车郑州东沃4S中心"
});

_citys["重庆"]["重庆"].push({
  code: "CQF",
  name: "沃尔沃重庆高新璟沃4S中心"
});

_citys["陕西"]["西安"].push({
  code: "XAE",
  name: "沃尔沃西安天一汇通4S中心"
});

_citys["江苏"]["南京"].push({
  code: "NJC",
  name: "沃尔沃汽车南京天泓凯润4S中心"
});

_citys["广东"]["江门"].push({
  code: "JMA",
  name: "沃尔沃汽车江门元柏通4S中心"
});

_citys["浙江"]["嘉兴"].push({
  code: "HAA",
  name: "沃尔沃汽车海宁弘丰4S中心"
});

_citys["上海"]["上海"].push({
  code: "SHJ",
  name: "沃尔沃汽车上海永达沃尔沃4S中心"
});

_citys["广东"]["佛山"].push({
  code: "FSA",
  name: "沃尔沃汽车佛山南方骏沃4S中心"
});

_citys["湖北"]["宜昌"].push({
  code: "YCD",
  name: "沃尔沃汽车宜昌恒信瑞沃4S中心"
});

_citys["广东"]["深圳"].push({
  code: "SZF",
  name: "沃尔沃汽车深圳市德智行4S中心"
});

_citys["广西"]["钦州"].push({
  code: "QAA",
  name: "沃尔沃汽车钦州恒沃4S中心"
});

_citys["广东"]["湛江"].push({
  code: "ZAA",
  name: "沃尔沃汽车湛江合沃4s中心"
});

_citys["浙江"]["衢州"].push({
  code: "QUA",
  name: "沃尔沃汽车衢州君悦瑞沃4S中心"
});

_citys["浙江"]["金华"].push({
  code: "JHC",
  name: "沃尔沃汽车金华中沃4S中心"
});

_citys["广东"]["深圳"].push({
  code: "SZE",
  name: "沃尔沃汽车深圳德利行4S中心"
});

_citys["湖南"]["长沙"].push({
  code: "CSD",
  name: "沃尔沃汽车长沙德熙行4S中心"
});

_citys["江苏"]["连云港"].push({
  code: "LYC",
  name: "沃尔沃汽车连云港伟途4S中心"
});

_citys["天津"]["天津"].push({
  code: "TJD",
  name: "沃尔沃汽车天津荣沃4S中心"
});

_citys["四川"]["泸州"].push({
  code: "LZD",
  name: "沃尔沃汽车泸州市泸州中沃4S中心"
});

_citys["江苏"]["南通"].push({
  code: "NTB",
  name: "沃尔沃汽车南通市南通文峰恒信行4S中心"
});

_citys["安徽"]["蚌埠"].push({
  code: "BBA",
  name: "沃尔沃汽车蚌埠市蚌埠永达沃尔沃4S中心"
});

_citys["湖南"]["怀化"].push({
  code: "HUA",
  name: "沃尔沃汽车怀化仁达4S中心"
});

_citys["广东"]["广州"].push({
  code: "GZE",
  name: "沃尔沃汽车广州南方骏沃4S中心"
});

_citys["广东"]["清远"].push({
  code: "QYA",
  name: "沃尔沃汽车清远南方骏沃4S中心"
});

Store = {};

window.onload = function () {
  riot.mount("*");
  $(".show-pop").on("click", function () {
    i = $(this).index() + 1;
    $(".pop .content").html('<img src="img/pop-' + i + '.png" />');
    return $(".pop").show();
  });
  $(".pop").on("click", function () {
    return $(".pop").hide();
  });
  $(".backTop").on("click", function () {
    return window.scrollTo(0, $(".form").offset().top - 30);
  });
  $(".left").on("click", moveLeft);
  $(".right").on("click", moveRight);
  $(".left2").on("click", mLeft);
  $(".right2").on("click", mRight);
  return $("#submit").on("click", function () {
    return Store.register.submit();
  });
};

mainSlider = {};

secondSlider = {};

tabId = 0;

tabId2 = 0;

changePoint = function changePoint(i) {
  console.log(Math.abs(i));
  tabId2 = Math.abs(i);
  // e = $(".contents .item").eq(tabId-1)
  $(".points span").removeClass("on");
  return $(".points span").eq(Math.abs(i)).addClass("on");
};

changeMain = function changeMain(i) {
  return tabId = Math.abs(i);
};

mLeft = function mLeft() {
  tabId2--;
  if (tabId2 < 0) {
    tabId2 = 0;
  }
  secondSlider.setNumber(tabId2);
  $(".points span").removeClass("on");
  return $(".points span").eq(tabId2).addClass("on");
};

mRight = function mRight() {
  tabId2++;
  if (tabId2 > 6) {
    tabId2 = 6;
  }
  secondSlider.setNumber(tabId2);
  $(".points span").removeClass("on");
  return $(".points span").eq(tabId2).addClass("on");
};

moveLeft = function moveLeft() {
  tabId--;
  if (tabId < 0) {
    tabId = 0;
  }
  return mainSlider.setNumber(tabId);
};

moveRight = function moveRight() {
  tabId++;
  if (tabId > 4) {
    tabId = 4;
  }
  return mainSlider.setNumber(tabId);
};

showTab = function showTab(i) {
  $(".tabs .item").removeClass("on");
  $(".tabs .item").eq(i - 1).addClass("on");
  $(".contents .item").hide();
  $(".contents .item").eq(i - 1).show();
  return tabId = i;
};

showTab(1);
