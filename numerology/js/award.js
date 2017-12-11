"use strict";

var _updateNames, apiURL, ask, ask_award, ask_my, ask_update, awardBox, awardPop, gameFailUpdateShareContent, initAward, initNote, initPlayer, initPop, myAward, myCount, note, openAward, player, shareContent, updateShareContent;

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

myCount = 0;

myAward = 0;

note = {};

player = {};

shareContent = {
  title: "奇罗万象，万法归宗。12月15日《奇门遁甲》全国首映，侠客天团热血登场，与雾隐门一起大战天外来妖！",
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
  return ask(function (data) {
    var time;
    console.log(data);
    time = 0;
    if (data.info != null) {
      myCount = data.info.count;
      myAward = data.info.award;
      time = data.info.count - data.info.award;
    }
    initAward(time);
    initPop();
    initNote();
    return initPlayer();
  });
};

initPlayer = function initPlayer() {
  return player = new Vue({
    el: "#bgmCtrl",
    data: {
      audio: null,
      src: "./mp3/bgm.mp3",
      playing: false,
      stoped: false,
      iconPlay: "http://image.giccoo.com/projects/libs/img/audio-stop.png",
      iconStop: "http://image.giccoo.com/projects/libs/img/audio-play.png"
    },
    methods: {
      play: function play() {
        return this.playing = true;
      },
      pause: function pause() {
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
      this.audio = document.getElementById("bgm");
      console.log("audio:", this.audio);
      // @audioOther = @$el.children[2]
      this.audio.addEventListener("pause", this.pause.bind(this));
      return this.audio.addEventListener("play", this.play.bind(this));
    }
  });
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
      boxClass: "on",
      awarding: false
    },
    methods: {
      go: function go() {
        var self;
        if (this.awarding) {
          // @boxClass = "on"
          return false;
        }
        if (myCount <= 0) {
          note.send("你未达到抽奖资格<br/>分享到朋友圈可获得一次抽奖机会！");
          return false;
        }
        if (myAward >= 4) {
          note.send("啊哦~今日抽奖机会已经全部用完，明天再来战！");
          return false;
        }
        if (this.times <= 0) {
          note.send("参加游戏或分享活动获得抽奖次数");
          return false;
        }
        self = this;
        if (this.times - 1 >= 0) {
          this.times = this.times - 1;
        }
        myAward++;
        this.awarding = true;
        return ask_award(function (recode) {
          var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "none";
          var code = arguments[2];

          if (recode === 200) {
            self.boxClass = "open " + type;
            return setTimeout(function () {
              awardPop.type = type;
              awardPop.success = true;
              awardPop.code = code;
              awardBox.awarding = false;
              $("#award-over").fadeIn();
              return document.getElementById("zhongjiang").play();
            }, 3500);
          } else {
            self.boxClass = "open none";
            return setTimeout(function () {
              awardPop.success = false;
              awardBox.awarding = false;
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
      // resetGame()
      default: function _default() {
        return this.boxClass = "on";
      }
    }
  });
};

initNote = function initNote() {
  return note = new Vue({
    el: "#note",
    data: {
      notetext: "",
      showtime: 4000,
      timeout: null,
      show: false,
      boxshow: false
    },
    methods: {
      close: function close() {
        clearTimeout(this.timeout);
        this.show = false;
        return this.boxshow = false;
      },
      send: function send(text) {
        var self;
        clearTimeout(this.timeout);
        self = this;
        self.notetext = text;
        self.show = true;
        return this.boxshow = true;
      }
    }
  });
};

// @timeout = setTimeout ->
// 	self.boxshow = false
// 	setTimeout ->
// 		self.show = false
// 	,500
// ,@showtime
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
      shareContent.title = "原来我的江湖绝学是“千里眼”！快来与我一起勇闯热血江湖！";
    }
    if (i === 1) {
      shareContent.title = "原来我的江湖绝学是“顺风耳”！快来与我一起勇闯热血江湖！";
    }
    if (i === 2) {
      shareContent.title = "原来我的江湖绝学是“霹雳火”！快来与我一起勇闯热血江湖！";
    }
    updateShareContent(shareContent);
  }
  if (_updateNames[name]) {
    return false;
  }
  myCount++;
  return axios.get("http://" + apiURL + "/wechat/numerology/update/").then(function (msg) {
    console.log("msg:", msg.data);
    if (msg.data.recode === 200) {
      _updateNames[name] = true;
      return awardBox.times = awardBox.times + 1;
    } else if (msg.data.recode === 201) {
      return note.send("请使用微信打开此页面参与活动");
    }
    // else
  }).catch(function (err) {
    return note.send("服务器请求失败,请重试");
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
      return note.send(msg.data.reason);
    }
  }).catch(function (err) {
    return note.send("服务器请求失败,请重试");
  });
};

ask_my = function ask_my(callback) {
  return axios.get("http://" + apiURL + "/wechat/numerology/my/").then(function (msg) {
    console.log("msg:", msg.data);
    if (msg.data.recode === 200) {
      return callback(msg.data.info);
    } else {
      return note.send(msg.data.reason);
    }
  }).catch(function (err) {
    return note.send("服务器请求失败,请重试");
  });
};

gameFailUpdateShareContent = function gameFailUpdateShareContent() {
  shareContent.title = "侠士，妖人祸国，遁甲现世，快来与我一起除魔卫道！";
  return updateShareContent(shareContent);
};

updateShareContent = function updateShareContent(shareContent) {
  console.log(shareContent);
  wx.onMenuShareTimeline(shareContent);
  wx.onMenuShareAppMessage(shareContent);
  wx.onMenuShareQQ(shareContent);
  return wx.onMenuShareWeibo(shareContent);
};
