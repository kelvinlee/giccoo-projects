"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tn, _CDN, _imgurl, _animate, ansStar, appStar, buildUGC, canvasImgs, createAnswer, createStar, getRandom, global, imageurl, init, load, loadWechatConfig, main, mark, musicName, myTime, myTimeDetail, myTimeLine, myTimeName, neteaseShareImage, pre, randomSort, scoreBox, scoreInfinity, scoreMusicTime, scoreShareTimes, scoreZore, shareMusicName, stars, sys, textsBox;

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

// @codekit-prepend "../../libs/coffee/randomSort"
// @codekit-prepend "../../libs/coffee/requestanimation"
// @codekit-prepend "../../libs/coffee/loadWechatConfig"
_CDN = "";

_imgurl = "";

global = {};

main = {};

pre = {};

load = {};

sys = null;

imageurl = "//api.giccoo.com/api/upload/image64/";

textsBox = [[["你是不识孤独滋味的少年", "永远意气风发", "永远活力四射", "抹上眼霜 你就是最亮的星"]], [["你的感知神经似乎不太敏感", "偶尔空虚，经常充实才是生活常态", "寂寞的时候默念咒语", "把大家都变成“发光”眼霜你就不孤独啦"], ["你有时候也想45度静静仰望天空", "但眼泪似乎不太掉得下来", "孤独的感觉总是像龙卷风一样袭来", "不过还好 “发光”眼霜是你的防护盾"]], [["好险", "你距离显性孤独人口只差最后一步", "你希望微信能被秒回", "也希望朋友圈都有人点赞", "但大家似乎都不太给面子"], ["或许你有酒", "或许你有远方", "可是有时候", "你还是愿意待在家里", "做一只听着歌默默生长的蘑菇"]], [["你像一只小刺猬", "想露出软软的肚皮", "被温柔抚摸", "可是很多人惧怕你坚硬的刺", "而选择远离"], ["「你怎么会喜欢这个」", "「我觉得那个地方不好玩」", "「一把年纪该结婚了」", "永远有人在喋喋不休", "而你只想让他们闭嘴"]], [["在努力，在奔跑", "一个人的路总是艰苦", "可是一个人", "也更加恣肆，更加自由", "不如把孤独当成甜品 一口吃掉"], ["你是个总觉得差一点点的人", "差一点点就饱了", "差一点点就满足了", "连百分百的孤独感", "都觉得差了一点点"]], [["你幻想自己是一只鱼", "以为7秒就能忘记那种寂寞的感觉 ", "其实你只是个忘用眼霜的人类", "黯淡到连自己都快被遗忘"]]];

scoreBox = [[11, 17, 1], [2, 5, 12], [7, 9, 23]];

scoreInfinity = false;

scoreZore = false;

scoreMusicTime = [8, 14, 28];

scoreShareTimes = [20, 15, 6];

myTimeLine = [20, 21, 22, 23, 24, 0, 1, 2, 3, 4];

// shareTimesLine = [20,15,6]
myTime = 20; // 分享时间

myTimeName = "晚上";

if (myTime <= 5) {
  myTimeName = "凌晨";
}

myTimeDetail = "20:25"; // 详细的分享时间

// shareTimes = 30 # 分享次数
// numberWith = 24249 # 多少人
musicName = "夜空中最亮的星"; // 一起听的歌

shareMusicName = ""; // 分享过的音乐 cheapest flight

canvasImgs = ["img/star.png", "img/answer-1-bg.jpg", "img/answer-1-mark-bg.jpg", "img/answer-2-bg.jpg", "img/mark-1.png", "img/mark-2.png", "img/item-elephant.png", "img/item-owl.png", "img/item-panda.png", "img/symbol.png"];

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
      console.log("wx ready");
      shareContent = {
        title: "点击测试你的孤独指数",
        desc: "与兰蔻一起，度过漫漫长夜",
        link: "http://m.giccoo.com/lancome/",
        imgUrl: "http://m.giccoo.com/lancome/img/ico.jpg",
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
  var TrueH, TrueW, smaller;
  TrueH = document.documentElement.clientHeight;
  TrueW = document.documentElement.clientWidth;
  console.log(TrueW, TrueH);
  if (TrueW >= 640) {
    // document.body.style.height = TrueH+"px"
    // document.documentElement.className += " iphone4" if TrueW/TrueH >= 0.64
    TrueW = 640;
  }
  if (TrueH >= 1138) {
    TrueH = 1138;
  }
  smaller = TrueW / TrueH - 640 / 1138;
  load = new Vue({
    el: "#loadtext",
    data: {
      progress: 0,
      mount: false,
      progressOn: 0
    },
    mounted: function mounted() {
      var _this = this;

      var timein;
      // @.progress = 10
      this.mount = true;
      createStar();
      return timein = setInterval(function () {
        _this.progress += 3;
        if (_this.progress >= _this.progressOn) {
          _this.progress = _this.progressOn;
        }
        if (_this.progress >= 100) {
          _this.progress = 100;
          clearInterval(timein);
          main.mount = true;
          return setTimeout(function () {
            // main.ugcpageShow = true
            main.homepageShow = true;
            // document.getElementById('load').style.display = "none"
            document.getElementById('load').className += " fadeOut animated";
            return setTimeout(function () {
              return document.getElementById('load').style.display = "none";
            }, 520);
          }, 100);
        }
      }, 1000 / 20);
    }
  });
  return main = new Vue({
    el: "#main",
    data: {
      pc: false,
      homepageShow: false,
      answerPageShow: false,
      ugcPageShow: false,
      waitPageShow: false,
      lastPageShow: false,
      waitPageBox: false,
      mount: false,
      audio: null,
      w: TrueW,
      h: TrueH,
      smaller: smaller,
      now: 0,
      answerCanvas: null,
      score: 0,
      scorebg: 1,
      musiclink: "",
      bgmlink: "//image.giccoo.com/projects/lancome/mp3/bgm.mp3",
      playing: false,
      bgmplaying: false,
      ugc: null,
      ugcbg: null,
      wy: false,
      wx: false,
      shareImageLink: "",
      questionMark: 0,
      answerList: [{
        question: ["\u6700\u8FD1\u4E00\u6B21" + myTimeName + myTimeDetail + "\u8FD8\u5728\u542C\u6B4C\u7684\u4F60\uFF0C\u89C9\u5F97\u90A3\u65F6\u8C01\u4F1A\u966A\u7740\u4F60\uFF1F"],
        answers: ["飞累了，借你家阳台<br/>歇歇的猫头鹰", "冰箱里那只<br/>舔着冰淇淋的蠢大象", "墙角边偷偷涂<br/>兰蔻“发光”眼霜的大熊猫"]
      }, {
        question: ["\u90A3\u4E00\u5929\uFF0C\u4E91\u6751\u548C\u4F60\u4E00\u8D77\u5728\u542C\u300A" + musicName + "\u300B\u7684\u4EBA\uFF0C\u6BD4\u82F1\u56FD\u7684\u6674\u5929\u8FD8\u5C11\uFF1B\u4F60\u89C9\u5F97\u4ED6\u4EEC\u90A3\u65F6\u5728\u5E72\u4EC0\u4E48\uFF1F", "\u90A3\u4E00\u5929\uFF0C\u4E91\u6751\u548C\u4F60\u4E00\u8D77\u5728\u542C\u300A" + musicName + "\u300B\u7684\u4EBA\uFF0C\u591A\u5230\u670D\u52A1\u5668\u762B\u75EA\uFF1B\u4F60\u89C9\u5F97\u4ED6\u4EEC\u90A3\u65F6\u5728\u5E72\u4EC0\u4E48\uFF1F", "\u90A3\u4E00\u5929\uFF0C\u4E91\u6751\u548C\u4F60\u4E00\u8D77\u5728\u542C\u300A" + musicName + "\u300B\u7684\u4EBA\uFF0C\u548C\u5927\u8FC1\u5F99\u65F6\u7684\u89D2\u9A6C\u4E00\u6837\u591A\uFF1B\u4F60\u89C9\u5F97\u4ED6\u4EEC\u90A3\u65F6\u5728\u5E72\u4EC0\u4E48\uFF1F", "\u90A3\u4E00\u5929\uFF0C\u4E91\u6751\u548C\u4F60\u4E00\u8D77\u5728\u542C\u300A" + musicName + "\u300B\u7684\u4EBA\uFF0C\u6BD4\u7406\u5DE5\u5927\u7684\u5973\u751F\u8FD8\u5C11\u3002\u4F60\u89C9\u5F97\u4ED6\u4EEC\u90A3\u65F6\u5728\u5E72\u4EC0\u4E48\uFF1F"],
        answers: ["敲击键盘", "窃窃私语聊天", "刷手机"]
      }, {
        question: [shareMusicName === "" ? "最近都没分享过歌曲的你，如果分享，觉得谁会点开听？" : "\u4E4B\u524D\u4ECE\u4E91\u97F3\u4E50\u5206\u4EAB\u8FC7\u4E00\u9996\u300A" + shareMusicName + "\u300B\u4F60\u89C9\u5F97\u8C01\u70B9\u5F00\u542C\u8FC7\uFF1F"],
        answers: ["最想让TA听到的那个人", "和我一样喜欢这类曲风的闺蜜", "我才不care有没有人点开听"]
      }],
      answers: [-1, -1, -1]
    },
    // computed:
    methods: {
      playbgm: function playbgm() {
        this.playing = !this.playing;
        this.bgmplaying = !this.bgmplaying;
        if (this.playing) {
          return document.getElementById("bgm").play();
        } else {
          return document.getElementById("bgm").pause();
        }
      },
      audioplay: function audioplay() {
        return this.playing = true;
      },
      audiopause: function audiopause() {
        return this.playing = false;
      },
      audiomusicplay: function audiomusicplay() {
        return this.audio.pause();
      },
      audiomusicpause: function audiomusicpause() {
        console.log("music ended:", this.bgmplaying);
        if (this.bgmplaying) {
          return this.audio.play();
        }
      },
      runScore: function runScore() {
        var i, j, ref, time;
        // 计算得分
        for (i = j = 0, ref = this.answers.length; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
          this.score += scoreBox[i][this.answers[i]];
        }
        time = myTimeLine.indexOf(myTime);
        switch (time) {
          case 0:
            this.score += scoreMusicTime[0];
            break;
          case 1 || 2 || 3:
            this.score += scoreMusicTime[0];
            break;
          case 4 || 5 || 6:
            this.score += scoreMusicTime[1];
            break;
          case 7 || 8:
            this.score += scoreMusicTime[2];
            break;
          case 9:
            this.score = "∞";
        }
        if (scoreInfinity) {
          this.score = "∞";
        }
        if (this.score <= 80) {
          if (this.questionMark === 0) {
            this.score += 16;
          }
          if (this.questionMark === 1) {
            this.score = 0;
          }
          if (this.questionMark === 2) {
            this.score += 6;
          }
          if (this.questionMark === 3) {
            this.score += 20;
          }
        }
        return console.log(this.score);
      },
      createUGC: function createUGC() {
        var _this2 = this;

        var box, ugcC;
        ugcC = new buildUGC();
        console.log(this.score === "∞" || this.score >= 0);
        ugcC.score = this.score === "∞" || this.score >= 0 ? this.score : Math.floor(Math.random() * 99 + 1);
        // ugcC.score = 99
        // ugcC.texts = textsBox[4][1]
        if (this.score === "∞") {
          ugcC.texts = textsBox[textsBox.length - 1][0];
          this.scorebg = 6;
        } else if (this.score <= 0) {
          ugcC.texts = textsBox[0][0];
          this.scorebg = 1;
        } else if (this.score < 40) {
          box = textsBox[1];
          ugcC.texts = box[Math.floor(Math.random() * box.length)];
          this.scorebg = 2;
        } else if (this.score < 60) {
          box = textsBox[2];
          ugcC.texts = box[Math.floor(Math.random() * box.length)];
          this.scorebg = 3;
        } else if (this.score < 80) {
          box = textsBox[3];
          ugcC.texts = box[Math.floor(Math.random() * box.length)];
          this.scorebg = 4;
        } else if (this.score <= 100) {
          box = textsBox[4];
          ugcC.texts = box[Math.floor(Math.random() * box.length)];
          this.scorebg = 5;
        } else {
          ugcC.texts = textsBox[0][0];
          this.scorebg = 1;
        }
        ugcC.init(function () {
          _this2.ugcbg = ugcC.app.renderer.extract.canvas().toDataURL();
          return ugcC.qr(function () {
            return setTimeout(function () {
              return _this2.ugc = ugcC.app.renderer.extract.base64();
            }, 100);
          });
        }, this.scorebg);
        return ugcC.app.view.style.display = "none";
      },
      upload: function upload() {
        var data, image;
        // console.log "upload:"
        image = this.ugc;
        data = {
          image: image,
          folder: "lancome"
        };
        if (image == null) {
          return main.faild();
        }
        return axios.post(imageurl, data).then(function (msg) {
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
        var _this3 = this;

        this.shareImageLink = data.info;
        neteaseShareImage();
        return setTimeout(function () {
          return _this3.lastPageShow = true;
        }, 3000);
      },
      faild: function faild() {
        return this.lastPageShow = true;
      },
      buildUGC: function buildUGC() {
        this.runScore();
        this.waitPageShow = true;
        // setTimeout =>
        // 	@.waitPageShow = false
        // 	@.ugcPageShow = true
        // ,3000
        return this.createUGC();
      },
      gotoUGC: function gotoUGC() {
        var _this4 = this;

        this.waitPageBox = true;
        return setTimeout(function () {
          _this4.waitPageShow = false;
          return _this4.ugcPageShow = true;
        }, 7000);
      },
      next: function next() {
        if (this.bgmplaying) {
          this.audio.play();
        }
        if (this.answers[this.now] <= -1) {
          return false;
        }
        if (this.now >= 2) {
          console.log("Done goto ugc");
          return this.buildUGC();
        } else {
          main.answerCanvas.nextAnswer();
          this.now++;
          return this.homepageShow = false;
        }
      },
      playSong: function playSong(i) {
        var _this5 = this;

        this.musiclink = "./mp3/mp3-" + i + ".mp3";
        return setTimeout(function () {
          return _this5.audiomusic.play();
        }, 1000 / 30);
      },
      select: function select(index) {
        console.log(index);
        this.answers[this.now] = index;
        Vue.set(this.answers, this.now, index);
        return this.answerCanvas.select(index);
      },
      gotoAnswer: function gotoAnswer() {
        var stars;
        // createAnswer()
        this.answerCanvas.init();
        this.answerPageShow = true;
        return stars = [];
      }
    },
    mounted: function mounted($el, e) {
      var _this6 = this;

      if (sys === "NeteaseMusic") {
        this.wy = true;
      }
      this.mount = true;
      this.questionMark = Math.floor(Math.random() * this.answerList[1].question.length);
      this.audio = document.getElementById("bgm");
      this.audiomusic = document.getElementById("music");
      // @.answerPageShow = true
      this.answerCanvas = new createAnswer();
      if (this.audio) {
        this.audio.addEventListener("play", this.audioplay.bind(this));
      }
      if (this.audio) {
        this.audio.addEventListener("pause", this.audiopause.bind(this));
      }
      if (this.audio) {
        this.audio.addEventListener("ended", this.audiopause.bind(this));
      }
      if (this.audiomusic) {
        this.audiomusic.addEventListener("play", this.audiomusicplay.bind(this));
      }
      if (this.audiomusic) {
        this.audiomusic.addEventListener("ended", this.audiomusicpause.bind(this));
      }
      return document.addEventListener("WeixinJSBridgeReady", function () {
        return _this6.wx = true;
      }, false);
    }
  });
};

buildUGC = function () {
  var buildUGC = function () {
    function buildUGC() {
      _classCallCheck(this, buildUGC);
    }

    _createClass(buildUGC, [{
      key: "build",
      value: function build() {
        var bg, index, j, last, lastY, qr, ref, score, t, text, title;
        bg = new PIXI.Sprite(PIXI.loader.resources["img/ugc-bg-" + this.id + ".jpg"].texture);
        title = new PIXI.Text('你的孤独指数是：', {
          fontSize: 30,
          fill: 0x2d799b,
          align: 'left'
        });
        title.x = 105;
        title.y = 200;
        score = new PIXI.Text(this.score, {
          fontSize: 115,
          fill: 0x2d799b,
          align: 'left'
        });
        score.x = 350;
        score.y = 200 - (115 - 15) / 2;
        this.app.stage.addChild(bg, title, score);
        lastY = 0;
        for (index = j = 0, ref = this.texts.length; 0 <= ref ? j < ref : j > ref; index = 0 <= ref ? ++j : --j) {
          text = this.texts[index];
          if (text === "都觉得差了一点点" && this.score === 100) {
            continue;
          }
          t = new PIXI.Text(text, {
            fontWeight: "lighter",
            fontSize: 24,
            fill: 0x2d799b,
            align: 'left'
          });
          t.x = 105;
          lastY = t.y = score.y + 115 + 10 + 24 * 2 * index;
          this.app.stage.addChild(t);
        }
        last = new PIXI.Text("兰蔻，陪你度过漫漫长夜", {
          fontSize: 30,
          fill: 0x2d799b,
          align: 'left'
        });
        last.x = 105;
        last.y = lastY + 24 + 30;
        this.app.stage.addChild(last);
        qr = new PIXI.Sprite(PIXI.loader.resources["img/ugc-qr.png"].texture);
        qr.x = 430;
        qr.y = 706;
        this.app.stage.addChild(qr);
        this.app.renderer.render(this.app.stage);
        return this.callback();
      }
    }, {
      key: "qr",
      value: function qr(callback) {
        return callback();
      }
    }, {
      key: "init",
      value: function init(callback, id) {
        this.callback = callback;
        this.id = id;
        this.app = new PIXI.Application({
          width: 640,
          height: 1138,
          transparent: true,
          preserveDrawingBuffer: true
        });
        this.app.view.className = "ugcCanvas";
        document.getElementById('ugcbg').appendChild(this.app.view);
        return PIXI.loader.add(["img/ugc-bg-" + id + ".jpg", "img/ugc-qr.png"]).load(this.build.bind(this));
      }
    }]);

    return buildUGC;
  }();

  ;

  buildUGC.prototype.app = null;

  buildUGC.prototype.callback = null;

  buildUGC.prototype.score = 0;

  buildUGC.prototype.id = 1;

  buildUGC.prototype.texts = ["你是个总觉得差一点点的人", "差一点点就饱了", "差一点点就满足了", "连百分百的孤独感都觉得差了一点点"];

  return buildUGC;
}.call(undefined);

stars = [];

appStar = [];

createStar = function createStar() {
  var build, gameLoop, n;
  appStar = new PIXI.Application({
    width: 640,
    height: 1138,
    transparent: true
  });
  console.log(appStar.view.className = "fadeIn animated");
  build = function build() {
    var circle, i, j, size, star;
    for (i = j = 0; j < 20; i = ++j) {
      star = new PIXI.Sprite(PIXI.loader.resources["img/star.png"].texture);
      star.x = Math.random() * 640;
      star.y = Math.random() * 1138;
      star.anchor.set(0.5, 0.5);
      size = (Math.random() * 80 + 20) / 100;
      star.scale.set(size, size);
      star.rotation = 0;
      star.v = size;
      star.life = 60 * (Math.random() * 9 + 1);
      star.lifeDefault = 60 * (Math.random() * 12 + 3);
      stars.push(star);
      appStar.stage.addChild(star);
      circle = new PIXI.Graphics();
      circle.beginFill([0xce64e5, 0x43d3aa, 0x888a76][i % 3]);
      circle.drawCircle(0, 0, 3);
      circle.endFill();
      circle.scale.set(size, size);
      circle.rotation = 0;
      circle.v = size;
      circle.x = Math.random() * 640;
      circle.y = Math.random() * 1138;
      circle.life = 60 * (Math.random() * 9 + 1);
      circle.lifeDefault = 60 * (Math.random() * 12 + 3);
      stars.push(circle);
      appStar.stage.addChild(circle);
    }
    appStar.ticker.add(gameLoop);
    return document.getElementById('stars').appendChild(appStar.view);
  };
  gameLoop = function gameLoop(delta) {
    var j, len, results, star;
    if (!(stars.length > 0)) {
      // console.log 60/delta
      return false;
    }
    results = [];
    for (j = 0, len = stars.length; j < len; j++) {
      star = stars[j];
      if (star.rotation >= 1) {
        star.rotation = 0;
      }
      star.rotation += 0.1 * delta * star.v;
      star.life -= 1;
      if (star.life <= 0) {
        star.alpha -= 0.02 * delta;
      } else if (star.alpha > 0 && star.alpha <= 1) {
        star.alpha += 0.05 * delta;
      }
      if (star.alpha <= 0) {
        star.alpha = 0.05 * delta;
        results.push(star.life = star.lifeDefault);
      } else {
        results.push(void 0);
      }
    }
    return results;
  };
  n = 0;
  return PIXI.loader.add(canvasImgs).load(build).onProgress.add(function () {
    n++;
    return load.progressOn = Math.floor(n / canvasImgs.length * 100);
  });
};

// console.log Math.floor(n/canvasImgs.length*100)
ansStar = [];

mark = null;

createAnswer = function () {
  var createAnswer = function () {
    function createAnswer() {
      _classCallCheck(this, createAnswer);
    }

    _createClass(createAnswer, [{
      key: "reset",

      // 重设灯光位置
      value: function reset() {
        var size;
        if (this.noreset) {
          return false;
        }
        size = Math.floor(Math.random() * 0.8 + 1.2);
        this.scaleP.x = size;
        this.scaleP.y = size;
        this.XY.x = Math.floor(Math.random() * 600);
        return this.XY.y = Math.floor(Math.random() * 600);
      }
    }, {
      key: "gameLoop2",
      value: function gameLoop2(delta) {
        var bg;
        if (!this.moving2) {
          return false;
        }
        bg = this.dom.bg2;
        if (bg.valpha <= 0) {
          bg.alpha -= 0.01 * delta;
          bg.x += -1 * delta;
          if (bg.alpha <= 0) {
            this.moving = false;
            this.answer2Over();
          }
        }
        if (this.dom.bg3 != null && this.dom.bg3.x >= 0) {
          this.dom.bg3.x += -1 * delta;
          this.dom.bg3.alpha += 0.02 * delta;
          if (this.dom.bg3.x <= 0) {
            return this.dom.bg3.x = 0;
          }
        }
      }
    }, {
      key: "gameLoop",
      value: function gameLoop(delta) {
        var answer1, bg, j, len, ref;
        if (!this.moving) {
          // console.log "1"
          return false;
        }
        mark = this.dom.mark;
        mark.x += (this.XY.x - mark.x) * 0.05 * delta;
        mark.y += (this.XY.y - mark.y) * 0.05 * delta;
        mark.scale.x += (this.scaleP.x - mark.scale.x) * 0.05 * delta;
        mark.scale.y += (this.scaleP.y - mark.scale.y) * 0.05 * delta;
        if (this.dom.page1.valpha <= 0) {
          this.dom.page1.alpha -= 0.02 * delta;
          if (this.dom.page1.alpha <= 0) {
            this.moving = false;
            this.answer1Over();
          }
        }
        if (this.dom.page1.vscale >= 2) {
          bg = this.dom.page1;
          // bg = @.dom.bg
          // abg = @.dom.answer1bg
          // mark = @.dom.mark
          // mark2 = @.dom.mark2
          bg.scale.x += (bg.vscale - bg.scale.x) * 0.05 * delta;
          bg.scale.y += (bg.vscale - bg.scale.y) * 0.05 * delta;
          bg.x += (bg.vx - bg.x) * 0.05 * delta;
          bg.y += (bg.vy - bg.y) * 0.05 * delta;
        }
        ref = [this.dom.answer11, this.dom.answer12, this.dom.answer13];
        // abg.scale.x = bg.scale.x
        // abg.scale.y = bg.scale.y
        // abg.x = bg.x
        // abg.y = bg.y
        // mark.alpha -= 0.05 * delta
        // mark2.alpha -= 0.05 * delta
        // answer1 = @.dom.answer11
        for (j = 0, len = ref.length; j < len; j++) {
          answer1 = ref[j];
          if (answer1.valpha) {
            if (answer1.alpha >= 1) {
              answer1.alpha = 1;
            }
            answer1.alpha += 0.05 * delta;
          } else {
            if (answer1.alpha <= 0) {
              answer1.alpha = 0;
            }
            answer1.alpha -= 0.05 * delta;
          }
        }
        if (Math.abs(mark.x - this.XY.x) < 1) {
          return this.reset();
        }
      }

      // 移除第二题背景

    }, {
      key: "answer2Over",
      value: function answer2Over() {
        var _this7 = this;

        this.moving2 = false;
        this.ansStar.stage.removeChild(this.dom.bg2, this.dom.music);
        this.ansStar.ticker.remove(this.gameLoop2);
        return Tn({
          x: 0
        }, {
          x: 100
        }, 600, function (res) {
          return _this7.dom.timeline.alpha = res.x / 100;
        });
      }

      // 移除第一题背景

    }, {
      key: "answer1Over",
      value: function answer1Over() {
        console.log("answer1Over");
        this.ansStar.stage.removeChild(this.dom.bg, this.dom.mark, this.dom.mark2, this.dom.answer1bg);
        this.ansStar.ticker.remove(this.gameLoop);
        return this.ansStar.ticker.add(this.gameLoop2.bind(this));
      }

      // 创建第三题背景

    }, {
      key: "build3",
      value: function build3() {
        var bg, screen, timeline, timeline1, timeline2, timeline3;
        this.t = 2; // need remove
        if (this.dom.bg2 != null) {
          this.dom.bg2.valpha = 0;
        }
        bg = this.dom.bg3 = new PIXI.Sprite(PIXI.loader.resources["img/answer-3-bg.jpg"].texture);
        bg.alpha = 0.6;
        bg.x = 100;
        this.ansStar.stage.addChildAt(this.dom.bg3, 0);
        screen = this.dom.screen = new PIXI.Container();
        timeline = this.dom.timeline = new PIXI.Sprite(PIXI.loader.resources["img/mobile-timeline.png"].texture);
        timeline.x = 220;
        timeline.y = 565;
        timeline.alpha = 0;
        timeline1 = this.dom.timeline1 = new PIXI.Sprite(PIXI.loader.resources["img/mobile-answer-1.png"].texture);
        timeline1.x = 272;
        timeline1.y = 685;
        timeline1.alpha = 0;
        timeline2 = this.dom.timeline2 = new PIXI.Sprite(PIXI.loader.resources["img/mobile-answer-2.png"].texture);
        timeline2.x = 272;
        timeline2.y = 685;
        timeline2.alpha = 0;
        timeline3 = this.dom.timeline3 = new PIXI.Sprite(PIXI.loader.resources["img/mobile-answer-3.png"].texture);
        timeline3.x = 272;
        timeline3.y = 685;
        timeline3.alpha = 0;
        screen.addChild(timeline, timeline1, timeline2, timeline3);
        return this.ansStar.stage.addChild(screen);
      }

      // 创建第二题背景

    }, {
      key: "build2",
      value: function build2() {
        var music, symbol1, symbol2, symbol3;
        this.dom.page1.vscale = 2.5;
        this.dom.page1.vx = -100;
        this.dom.page1.vy = -1138 / 5 * 5.5;
        this.dom.page1.valpha = 0;
        this.dom.bg2 = new PIXI.Sprite(PIXI.loader.resources["img/answer-2-bg.jpg"].texture);
        this.ansStar.stage.addChildAt(this.dom.bg2, 0);
        music = this.dom.music = new PIXI.Container();
        symbol1 = this.dom.symbol1 = new PIXI.Sprite(PIXI.loader.resources["img/symbol.png"].texture);
        symbol2 = this.dom.symbol2 = new PIXI.Sprite(PIXI.loader.resources["img/symbol.png"].texture);
        symbol3 = this.dom.symbol3 = new PIXI.Sprite(PIXI.loader.resources["img/symbol.png"].texture);
        symbol1.x = 99;
        symbol1.y = 690;
        symbol2.x = 110;
        symbol2.y = 717;
        symbol2.scale.x = 0.72;
        symbol2.scale.y = 0.72;
        symbol2.rotation = 0.3;
        symbol3.x = 128;
        symbol3.y = 720;
        symbol3.scale.x = 0.5;
        symbol3.scale.y = 0.5;
        symbol3.rotation = -0.4;
        symbol1.alpha = 0;
        symbol2.alpha = 0;
        symbol3.alpha = 0;
        music.addChild(symbol1, symbol2, symbol3);
        return this.ansStar.stage.addChild(this.dom.music);
      }

      // 创建第一题背景

    }, {
      key: "build",
      value: function build() {
        var answer1bg, bg, mark2, markbg;
        // background image
        this.dom.bg = new PIXI.Sprite(PIXI.loader.resources["img/answer-1-mark-bg.jpg"].texture);
        bg = this.dom.bg;
        this.dom.page1 = new PIXI.Container();
        this.dom.page1.alpha = 1;
        this.dom.answer1bg = new PIXI.Container();
        answer1bg = this.dom.answer1bg;
        answer1bg.alpha = 1;
        markbg = new PIXI.Sprite(PIXI.loader.resources["img/answer-1-bg.jpg"].texture);
        this.dom.page1.addChild(bg);
        // mark background image
        markbg.x = 0;
        markbg.y = 0;
        this.XY = new PIXI.Point();
        this.XY.x = 446;
        this.XY.y = 270;
        this.scaleP = new PIXI.Point();
        this.scaleP.x = 1.2;
        this.scaleP.y = 1.2;
        this.dom.mark = new PIXI.Sprite(PIXI.loader.resources["img/mark-1.png"].texture);
        this.dom.mark2 = new PIXI.Sprite(PIXI.loader.resources["img/mark-2.png"].texture);
        mark2 = this.dom.mark2;
        mark2.anchor.set(0.5);
        mark2.scale.set(1.4, 1);
        mark2.x = 512;
        mark2.y = 530;
        mark2.visible = false;
        mark = this.dom.mark;
        mark.x = this.XY.x;
        mark.y = this.XY.y;
        mark.anchor.set(0.5);
        mark.scale = this.scaleP;
        // mark = new PIXI.Container()
        // mark.addChild mark1
        answer1bg.addChild(markbg);
        answer1bg.mask = mark;
        this.dom.answer11 = new PIXI.Sprite(PIXI.loader.resources["img/item-owl.png"].texture);
        this.dom.answer11.anchor.set(0.5);
        this.dom.answer11.x = 450;
        this.dom.answer11.y = 310;
        this.dom.answer12 = new PIXI.Sprite(PIXI.loader.resources["img/item-elephant.png"].texture);
        this.dom.answer12.anchor.set(0.5);
        this.dom.answer12.x = 320;
        this.dom.answer12.y = 530;
        this.dom.answer13 = new PIXI.Sprite(PIXI.loader.resources["img/item-panda.png"].texture);
        this.dom.answer13.anchor.set(0.5);
        this.dom.answer13.x = 530;
        this.dom.answer13.y = 588;
        answer1bg.addChild(this.dom.answer11, this.dom.answer12, this.dom.answer13);
        this.dom.page1.addChild(mark, mark2, answer1bg);
        this.ansStar.stage.addChild(this.dom.page1);
        // @.ansStar.stage.addChild 
        // mark.clear()
        return this.ansStar.ticker.add(this.gameLoop.bind(this));
      }

      // 选择答案变更

    }, {
      key: "select",
      value: function select(i) {
        var _this8 = this;

        var target, tempX, tempY, tween;
        this.answers[this.t] = i;
        if (this.t === 0) {
          this.dom.answer11.valpha = false;
          this.dom.answer12.valpha = false;
          this.dom.answer13.valpha = false;
          clearTimeout(this.cache);
          switch (i) {
            case 0:
              this.dom.answer11.valpha = true;
              // @.dom.mark = new PIXI.Sprite PIXI.loader.resources["img/mark-1.png"].texture
              this.moving = true;
              this.noreset = true;
              this.XY.x = 446;
              this.XY.y = 270;
              this.scaleP.x = 1.2;
              this.scaleP.y = 1.2;
              this.dom.mark.visible = true;
              this.dom.mark2.visible = false;
              return this.dom.answer1bg.mask = this.dom.mark;
            case 1:
              this.dom.answer12.valpha = true;
              this.moving = true;
              this.noreset = true;
              this.XY.x = 230;
              this.XY.y = 420;
              this.scaleP.x = 1;
              this.scaleP.y = 1;
              return this.cache = setTimeout(function () {
                _this8.dom.mark.visible = false;
                _this8.dom.mark2.visible = true;
                return _this8.dom.answer1bg.mask = _this8.dom.mark2;
                // @.ansStar.stage.addChild @.dom.mark2
              }, 400);
            case 2:
              this.dom.answer13.valpha = true;
              // @.dom.mark = new PIXI.Sprite PIXI.loader.resources["img/mark-1.png"].texture
              this.moving = true;
              this.noreset = true;
              this.XY.x = 540;
              this.XY.y = 540;
              this.scaleP.x = 3.0;
              this.scaleP.y = 3.0;
              this.dom.mark.visible = true;
              this.dom.mark2.visible = false;
              return this.dom.answer1bg.mask = this.dom.mark;
          }
        } else if (this.t === 1) {
          // console.log @.t
          main.playSong(i);
          if (this.tween != null && this.tween.stop != null) {
            this.tween.stop();
          }
          tempX = {
            x: 0
          };
          tween = this.tween = new TWEEN.Tween(tempX).to({
            x: 100
          }, 2000).easing(TWEEN.Easing.Cubic.Out).onUpdate(function () {
            _this8.dom.symbol1.x = 99 - tempX.x * 0.3;
            if (tempX.x >= 90) {
              _this8.dom.symbol1.alpha = (100 - tempX.x) / 10;
            } else if (tempX.x <= 30) {
              _this8.dom.symbol1.alpha = (tempX.x - 20) / 10;
            } else {
              _this8.dom.symbol1.alpha = 1;
            }
            _this8.dom.symbol2.x = 110 - tempX.x * 0.2;
            if (tempX.x >= 90 - 10) {
              _this8.dom.symbol2.alpha = (100 - 10 - tempX.x) / 10;
            }
            if (tempX.x <= 20) {
              _this8.dom.symbol2.alpha = (tempX.x - 10) / 10;
            }
            _this8.dom.symbol3.x = 128 - tempX.x * 0.1;
            if (tempX.x >= 90 - 20) {
              _this8.dom.symbol3.alpha = (100 - 20 - tempX.x) / 10;
            }
            if (tempX.x <= 10) {
              return _this8.dom.symbol3.alpha = tempX.x / 10;
            }
          }).start();
          tempY = {
            y: 0
          };
          return tween = new TWEEN.Tween(tempY).to({
            y: -100
          }, 2000).easing(TWEEN.Easing.Cubic.In).onUpdate(function () {
            _this8.dom.symbol1.y = 690 + tempY.y * 0.5;
            _this8.dom.symbol2.y = 717 + tempY.y * 0.4;
            return _this8.dom.symbol3.y = 720 + tempY.y * 0.3;
          }).start();
        } else if (this.t === 2) {
          this.dom.timeline1.alpha = 0;
          this.dom.timeline2.alpha = 0;
          this.dom.timeline3.alpha = 0;
          target = null;
          switch (i) {
            case 0:
              target = this.dom.timeline1;
              break;
            case 1:
              target = this.dom.timeline2;
              break;
            case 2:
              target = this.dom.timeline3;
          }
          if (target != null) {
            if (this.tween != null && this.tween.stop != null) {
              this.tween.stop();
            }
            return this.tween = Tn({
              x: 0
            }, {
              x: 100
            }, 800, function (res) {
              return target.alpha = res.x / 100;
            });
          }
        }
      }

      // 下一题

    }, {
      key: "nextAnswer",
      value: function nextAnswer() {
        if (this.answers[this.t] <= -1) {
          return false;
        }
        this.t++;
        if (this.t === 1) {
          this.build2();
        }
        if (this.t === 2) {
          return this.build3();
        }
      }
    }, {
      key: "init",
      value: function init() {
        this.ansStar = new PIXI.Application({
          width: 640,
          height: 1138,
          transparent: true
        });
        document.getElementById('answer-bg').appendChild(this.ansStar.view);
        return PIXI.loader.add(["img/answer-3-bg.jpg", "img/mobile-timeline.png", "img/mobile-answer-1.png", "img/mobile-answer-2.png", "img/mobile-answer-3.png"]).load(this.build.bind(this));
      }
    }]);

    return createAnswer;
  }();

  ;

  createAnswer.prototype.ansStar = null;

  createAnswer.prototype.moving = true;

  createAnswer.prototype.moving2 = true;

  createAnswer.prototype.scaleP = null;

  createAnswer.prototype.XY = null;

  createAnswer.prototype.dom = {};

  createAnswer.prototype.noreset = false;

  createAnswer.prototype.cache = null;

  createAnswer.prototype.tween = null;

  createAnswer.prototype.answers = [-1, -1, -1];

  createAnswer.prototype.t = 0;

  return createAnswer;
}.call(undefined);

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
