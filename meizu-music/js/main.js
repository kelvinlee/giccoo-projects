"use strict";

var $_GET, IsPC, _CDN, _answersList, _imgurl, _learnmorelink, answersList, getRandom, global, init, load, loadWechatConfig, main, pre, _randomSort, stopWebViewScroll;

_CDN = "";

_imgurl = "";

global = {};

main = {};

pre = {};

load = {};

_learnmorelink = ["https://www.zhihu.com/question/268770483", "https://www.zhihu.com/question/268770615", "https://www.zhihu.com/question/268770266"];

_randomSort = function randomSort(arr, newArr) {
  var random;
  if (arr.length === 1) {
    newArr.push(arr[0]);
    return newArr;
  }
  random = Math.ceil(Math.random() * arr.length) - 1;
  newArr.push(arr[random]);
  arr.splice(random, 1);
  return _randomSort(arr, newArr);
};

_answersList = [{
  lang: "cn",
  srcs: ["//image.giccoo.com/projects/meizu-music/mp3/1-1.mp3", "//image.giccoo.com/projects/meizu-music/mp3/1-2.mp3"],
  name: "遇见",
  wrong: "未,怀,始,刚,好,念,你,为,了,来,开,懂,的,我,乐,雨"
}, {
  lang: "cn",
  srcs: ["//image.giccoo.com/projects/meizu-music/mp3/2-1.mp3", "//image.giccoo.com/projects/meizu-music/mp3/2-2.mp3"],
  name: "隐形的翅膀",
  wrong: "半,挥,的,女,纪,天,左,人,边,着,使,念,孩"
}, {
  lang: "cn",
  srcs: ["//image.giccoo.com/projects/meizu-music/mp3/3-1.mp3", "//image.giccoo.com/projects/meizu-music/mp3/3-2.mp3"],
  name: "童话",
  wrong: "堂,镇,少,定,天,心,的,空,第,年,一,伤,次,边,定,里"
}, {
  lang: "cn",
  srcs: ["//image.giccoo.com/projects/meizu-music/mp3/4-1.mp3", "//image.giccoo.com/projects/meizu-music/mp3/4-2.mp3"],
  name: "思念是一种病",
  wrong: "爱,念,头,我,走,空,豆,格,红,豆,别,白"
}, {
  lang: "cn",
  srcs: ["//image.giccoo.com/projects/meizu-music/mp3/5-1.mp3", "//image.giccoo.com/projects/meizu-music/mp3/5-2.mp3"],
  name: "传奇",
  wrong: "风,笑,匆,年,约,往,向,定,迹,说,吹,浪,忘,书,那,麦"
}, {
  lang: "cn",
  srcs: ["//image.giccoo.com/projects/meizu-music/mp3/6-1.mp3", "//image.giccoo.com/projects/meizu-music/mp3/6-2.mp3"],
  name: "夜空中最亮的星",
  wrong: "梦,光,灿,子,心,闪,忆,闪,追,烂,赤"
}, {
  lang: "cn",
  srcs: ["//image.giccoo.com/projects/meizu-music/mp3/8-1.mp3", "//image.giccoo.com/projects/meizu-music/mp3/8-2.mp3"],
  name: "我的歌声里",
  wrong: "天,劲,方,几,只,曲,你,圆,金,乎,她,空,在"
}, {
  lang: "cn",
  srcs: ["//image.giccoo.com/projects/meizu-music/mp3/9-1.mp3", "//image.giccoo.com/projects/meizu-music/mp3/9-2.mp3"],
  name: "理想三旬",
  wrong: "人,月,四,初,天,梦,最,的,追,途,中,行,生,五"
}, {
  lang: "cn",
  srcs: ["//image.giccoo.com/projects/meizu-music/mp3/10-1.mp3", "//image.giccoo.com/projects/meizu-music/mp3/10-2.mp3"],
  name: "平凡之路",
  wrong: "生,歌,天,花,凡,人,城,乎,空,者,也,的,如,夏"
}, {
  lang: "cn",
  srcs: ["//image.giccoo.com/projects/meizu-music/mp3/11-1.mp3", "//image.giccoo.com/projects/meizu-music/mp3/11-2.mp3"],
  name: "成都",
  wrong: "重,和,桥,川,空,森,城,计,林,勒,都,安,庆,四,和,桥"
}, {
  lang: "en",
  srcs: ["//image.giccoo.com/projects/meizu-music/mp3/12-1.mp3", "//image.giccoo.com/projects/meizu-music/mp3/12-2.mp3"],
  name: "Numb",
  wrong: "what,in,new,end,divide,i've,done,the"
}, {
  lang: "en",
  srcs: ["//image.giccoo.com/projects/meizu-music/mp3/13-1.mp3", "//image.giccoo.com/projects/meizu-music/mp3/13-2.mp3"],
  name: "You Raise me up",
  wrong: "my,love,home,one,Yours"
}, {
  lang: "en",
  srcs: ["//image.giccoo.com/projects/meizu-music/mp3/14-1.mp3", "//image.giccoo.com/projects/meizu-music/mp3/14-2.mp3"],
  name: "Baby",
  wrong: "don't,love,my,you,shape,of,cry,everytime"
}, {
  lang: "en",
  srcs: ["//image.giccoo.com/projects/meizu-music/mp3/15-1.mp3", "//image.giccoo.com/projects/meizu-music/mp3/15-2.mp3"],
  name: "Rolling In The Deep",
  wrong: "end,Someone,You,skyfall,Like"
}, {
  lang: "en",
  srcs: ["//image.giccoo.com/projects/meizu-music/mp3/16-1.mp3", "//image.giccoo.com/projects/meizu-music/mp3/16-2.mp3"],
  name: "see you again",
  wrong: "faded,yours,funk,apologize,I'm,uptown"
}];

answersList = [];

_randomSort(_answersList, answersList);

getRandom = function getRandom(length) {
  return parseInt(Math.random() * (length + 1) - 1);
};

window.onload = function () {
  // runAnimate()
  loadWechatConfig();
  return wx.ready(function () {
    var shareContent;
    shareContent = {
      title: "24小时健康享新家",
      desc: "华润漆A+系列，让你轻松24小时入住新家！",
      link: "http://m.giccoo.com/zhihu-huarun/",
      imgUrl: "http://m.giccoo.com/zhihu-huarun/img/ico.jpg",
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
};

// init()
init = function init() {
  var TrueH, TrueW, timein;
  TrueH = document.documentElement.clientHeight;
  TrueW = document.documentElement.clientWidth;
  console.log(TrueW, TrueH);
  // document.body.style.height = TrueH+"px"
  // document.documentElement.className += " iphone4" if TrueW/TrueH >= 0.64
  timein = null;
  load = new Vue({
    el: "#loadtext",
    data: {
      progress: 0
    },
    mounted: function mounted() {
      var _this = this;

      // @.progress = 10
      return timein = setInterval(function () {
        _this.progress += 3;
        if (_this.progress >= 100) {
          _this.progress = 100;
          clearInterval(timein);
          main.mount = true;
          return setTimeout(function () {
            main.homepageShow = true;
            return document.getElementById('load').style.display = "none";
          }, 100);
        }
      }, 1000 / 20);
    }
  });
  return main = new Vue({
    el: "#main",
    data: {
      homepageShow: false,
      gamepageShow: false,
      gameNotePop: false,
      ugcpageShow: false,
      notepageShow: false,
      mount: false,
      loading: false,
      w: TrueW,
      h: TrueH,
      audio: null,
      nickname: "test",
      gameMusicLink: "",
      markList: "??????????????????",
      answerName: "",
      lang: "cn",
      answers: [-1, -1, -1, -1, -1],
      now: 0,
      MAX: 4,
      answer: [],
      gameStarted: false,
      showAnswerPop: false,
      playing: false,
      date: {
        start: null,
        int: null
      },
      second: 16,
      timeout: null
    },
    computed: {
      XY: function XY() {
        return "pageX";
      }
    },
    methods: {
      checkMusic: function checkMusic() {},
      startGame: function startGame() {
        if (this.nickname === "") {
          alert("请输入你的名字");
          return false;
        }
        this.homepageShow = false;
        this.gamepageShow = true;
        return this.gameNotePop = true;
      },
      gameStart: function gameStart() {
        this.gameNotePop = false;
        this.gameStarted = true;
        this.now = 0;
        return this.gameRun();
      },
      gameRun: function gameRun() {
        var temp;
        this.second = 16;
        this.answerName = "";
        this.answer = [];
        clearTimeout(this.timeout);
        this.timeout = null;
        temp = [];
        this.markList = [];
        this.lang = answersList[this.now].lang;
        if (answersList[this.now].lang === "cn") {
          temp = answersList[this.now].wrong.split(",");
          temp = temp.concat(answersList[this.now].name.split(""));
        } else {
          temp = answersList[this.now].wrong.split(",");
          temp = temp.concat(answersList[this.now].name.split(" "));
        }
        this.audio.src = answersList[this.now].srcs[Math.random() > 0.5 ? 0 : 1];
        _randomSort(temp, this.markList);
        console.log("start time run");
        this.date.start = new Date();
        return this.runtime();
      },
      runtime: function runtime() {
        var _this2 = this;

        clearInterval(this.date.int);
        this.date.int = null;
        this.date.int = setInterval(function () {
          _this2.second = Math.floor(16 - (new Date().getTime() - _this2.date.start.getTime()) / 1000);
          if (_this2.second < 0) {
            return _this2.second = 0;
          }
          // console.log @.second
        }, 1000 / 20);
        this.timeout = setTimeout(function () {
          return _this2.timeoutshow();
        }, 15000);
        // @.audio.addEventListener 'timeupdate', @.timeupdate.bind @
        this.audio.currentTime = 0;
        return this.audio.play();
      },
      timeupdate: function timeupdate(evt) {
        return console.log(evt);
      },
      timeoutshow: function timeoutshow() {
        var answer;
        this.answers[this.now] = 2;
        answer = answersList[this.now];
        return this.showAnswer(answer.name);
      },
      selectMark: function selectMark(mark) {
        if (this.showAnswerPop) {
          return false;
        }
        return this.answer.push(mark);
      },
      delectOne: function delectOne() {
        if (this.showAnswerPop) {
          return false;
        }
        return this.answer.pop();
      },
      checkAnswer: function checkAnswer() {
        var answer, my;
        if (this.answers[this.now] > -1) {
          return false;
        }
        answer = answersList[this.now];
        my = "";
        if (answer.lang === "cn") {
          my = this.answer.join('');
        } else {
          my = this.answer.join(' ');
        }
        console.log(my, answer.name);
        this.answers[this.now] = my === answer.name ? 1 : 0;
        return this.showAnswer(answer.name);
      },
      showAnswer: function showAnswer(answerName) {
        clearTimeout(this.timeout);
        this.timeout = null;
        clearInterval(this.date.int);
        this.date.int = null;
        this.answerName = answerName;
        console.log(this.timeout);
        return this.showAnswerPop = true;
      },
      // if @.answers[@.now] is 1
      // else
      nextMusic: function nextMusic() {
        this.now++;
        this.showAnswerPop = false;
        return this.gameRun();
      },
      gameEnd: function gameEnd() {
        var item, k, len, ref, soure;
        this.homepageShow = false;
        this.gamepageShow = false;
        soure = 100;
        ref = main.answers;
        for (k = 0, len = ref.length; k < len; k++) {
          item = ref[k];
          if (item !== 1) {
            soure -= 20;
          }
        }
        return console.log("soure:", soure);
      }
    },
    mounted: function mounted($el, e) {
      var _this3 = this;

      // @.mount = true
      // @.gamepageShow = true
      // @.gameNotePop = true
      this.audio = document.getElementById("audio");
      this.audio.addEventListener("play", function () {
        return _this3.playing = true;
      });
      this.audio.addEventListener("ended", function () {
        return _this3.playing = false;
      });
      return console.log(answersList, this.audio);
    }
  });
};

loadWechatConfig = function loadWechatConfig() {
  var hm, s, url;
  url = encodeURIComponent(window.location.href.split("#")[0]);
  hm = document.createElement('script');
  hm.src = "//api.giccoo.com/api/config?url=" + url;
  s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(hm, s);
};

$_GET = function () {
  var get, i, j, k, len, u, url;
  url = window.document.location.href.toString();
  u = url.split('?');
  if (typeof u[1] === 'string') {
    u = u[1].split('&');
    get = {};
    console.log(u);
    for (k = 0, len = u.length; k < len; k++) {
      i = u[k];
      j = i.split('=');
      get[j[0]] = j[1];
    }
    return get;
  } else {
    return {};
  }
}();

stopWebViewScroll = function stopWebViewScroll() {
  var el, k, len, overscroll, ref, results;
  overscroll = function overscroll(el) {
    el.addEventListener('touchstart', function () {
      var currentScroll, top, totalScroll;
      top = el.scrollTop;
      totalScroll = el.scrollHeight;
      currentScroll = top + el.offsetHeight;
      if (top === 0) {
        return el.scrollTop = 1;
      } else if (currentScroll === totalScroll) {
        return el.scrollTop = top - 1;
      }
    });
    // alert el.scrollTop
    return el.addEventListener("touchmove", function (evt) {
      if (el.offsetHeight < el.scrollHeight) {
        return evt._isScroller = true;
      }
    });
  };
  document.addEventListener("touchmove", function (evt) {
    if (!evt._isScroller) {
      return evt.preventDefault();
    }
  });
  ref = document.querySelectorAll(".touch");
  // console.log document.querySelectorAll(".touch")
  results = [];
  for (k = 0, len = ref.length; k < len; k++) {
    el = ref[k];
    results.push(overscroll(el));
  }
  return results;
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
