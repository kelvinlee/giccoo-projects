"use strict";

var _updateNames, apiURL, ask, ask_award, ask_my, ask_update, awardBox, awardPop, initAward, initPop, openAward, shareContent, updateShareContent;

apiURL = "api.giccoo.com";

// apiURL = "localhost:8881"
axios.defaults.withCredentials = true;

_updateNames = {
  game1: false,
  game2: false,
  game3: false,
  share: false
};

awardPop = {};

awardBox = {};

shareContent = {
  title: "奇门遁甲，乾坤万象，其乐无穷，12.15日，燃情上映！",
  desc: "乾坤万象，其乐无穷，12.15日，燃情上映！",
  link: "http://m.giccoo.com/numerology/",
  imgUrl: "http://m.giccoo.com/numerology/img/ico.jpg",
  success: function success() {
    return ask_update(3);
  },
  cancel: function cancel() {}
};

window.onload = function () {
  var MK, body;
  body = document.getElementsByTagName("body")[0];
  MK = body.offsetWidth / body.offsetHeight;
  if (body.offsetHeight <= 480 || MK > 0.65) {
    body.className = "iphone4";
  }
  if (body.offsetWidth >= 640) {
    body.className = "pc";
  }
  // return ask(function (data) {
  //   var time;
  //   console.log(data);
  //   time = 0;
  //   if (data.info != null) {
  //     time = data.info.count - data.info.award;
  //   }
  //   initAward(time);
  //   return initPop();
  // });
};

openAward = function openAward() {
  return $("#award").fadeIn();
};

initAward = function initAward(time) {
  return awardBox = new Vue({
    el: "#award",
    data: {
      start: false,
      times: time,
      boxClass: "on"
    },
    methods: {
      go: function go() {
        var self;
        // @boxClass = "on"
        self = this;
        if (this.times - 1 > 0) {
          this.times = this.times - 1;
        }
        return ask_award(function (recode) {
          var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "none";
          var code = arguments[2];

          if (recode === 200) {
            self.boxClass = "open " + type;
            return setTimeout(function () {
              awardPop.type = type;
              awardPop.success = true;
              awardPop.code = code;
              return $("#award-over").fadeIn();
            }, 3500);
          } else {
            self.boxClass = "open none";
            return setTimeout(function () {
              awardPop.success = false;
              return $("#award-over").fadeIn();
            }, 3500);
          }
        });
      },
      my: function my() {
        return ask_my(function (info) {
          console.log(info[0]);
          if (info.length > 0) {
            awardPop.success = true;
            awardPop.type = info[0].type;
            awardPop.code = info[0].code;
            return $("#award-over").fadeIn();
          } else {
            awardPop.success = false;
            return $("#award-over").fadeIn();
          }
        });
      },
      back: function back() {
        return $("#award").fadeOut();
      },
      default: function _default() {
        return this.boxClass = "on";
      }
    }
  });
};

initPop = function initPop() {
  return awardPop = new Vue({
    el: "#award-over",
    data: {
      how: false,
      success: false,
      share: false,
      type: "ticket",
      code: "none"
    },
    methods: {
      openHow: function openHow() {
        return this.how = !this.how;
      },
      openShare: function openShare() {
        return this.share = !this.share;
      },
      close: function close() {
        awardBox.default();
        return $("#award-over").fadeOut();
      }
    }
  });
};

ask = function ask(callback) {
  return axios.get("http://" + apiURL + "/wechat/numerology/ask/").then(function (msg) {
    console.log("msg:", msg.data);
    if (msg.data.recode === 200) {
      return callback(msg.data);
    } else {
      return window.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx15cc4d73cb0b6437&redirect_uri={url}&response_type=code&scope=snsapi_base&state=123#wechat_redirect".replace("{url}", encodeURIComponent("http://" + apiURL + "/wechat/numerology/"));
    }
    // console.log "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx15cc4d73cb0b6437&redirect_uri={url}&response_type=code&scope=snsapi_base&state=123#wechat_redirect".replace("{url}",encodeURIComponent("http://"+apiURL+"/wechat/numerology/"))
  }).catch(function (err) {});
};

ask_update = function ask_update(i) {
  var name, names;
  names = ["game1", "game2", "game3", "share"];
  name = names[i];
  if (i < 3) {
    if (i === 0) {
      shareContent.title = "我的江湖绝学是雾隐门排行第五的“千里眼”！ 12.15日《奇门遁甲》全国首映，侠客天团强势来袭，热血江湖等你来战！";
    }
    if (i === 1) {
      shareContent.title = "我的江湖绝学是雾隐门排行第四的“顺风耳”！ 12.15日《奇门遁甲》全国首映，侠客天团强势来袭，热血江湖等你来战！";
    }
    if (i === 2) {
      shareContent.title = "我的江湖绝学是雾隐门排行第七的“霹雳火”！ 12.15日《奇门遁甲》全国首映，侠客天团强势来袭，热血江湖等你来战！";
    }
    updateShareContent(shareContent);
  }
  if (_updateNames[name]) {
    return false;
  }
  return axios.get("http://" + apiURL + "/wechat/numerology/update/").then(function (msg) {
    console.log("msg:", msg.data);
    if (msg.data.recode === 200) {
      _updateNames[name] = true;
      return awardBox.times = awardBox.times + 1;
    } else if (msg.data.recode === 201) {
      return alert("请使用微信打开此页面参与活动");
    }
    // else
  }).catch(function (err) {
    return alert("服务器请求失败,请重试");
  });
};

ask_award = function ask_award(callback) {
  return axios.get("http://" + apiURL + "/wechat/numerology/award/").then(function (msg) {
    console.log("msg:", msg.data);
    if (msg.data.recode === 200) {
      // msg.data.info.code
      return callback(200, msg.data.info.type, msg.data.info.code);
    } else if (msg.data.recode === 301) {
      return callback(301);
    } else {
      return alert(msg.data.reason);
    }
  }).catch(function (err) {
    return alert("服务器请求失败,请重试");
  });
};

ask_my = function ask_my(callback) {
  return axios.get("http://" + apiURL + "/wechat/numerology/my/").then(function (msg) {
    console.log("msg:", msg.data);
    if (msg.data.recode === 200) {
      return callback(msg.data.info);
    } else {
      return alert(msg.data.reason);
    }
  }).catch(function (err) {
    return alert("服务器请求失败,请重试");
  });
};

updateShareContent = function updateShareContent(shareContent) {
  console.log(shareContent);
  wx.onMenuShareTimeline(shareContent);
  wx.onMenuShareAppMessage(shareContent);
  wx.onMenuShareQQ(shareContent);
  return wx.onMenuShareWeibo(shareContent);
};
