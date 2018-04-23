"use strict";

var _CDN, _END, _answersList, _imgurl, answersList, getRandom, global, imageurl, init, load, loadWechatConfig, main, neteaseShare, neteaseShareImage, randomSort, _runLongText, sys;

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

loadWechatConfig = function loadWechatConfig() {
  var hm, s, url;
  url = encodeURIComponent(window.location.href.split("#")[0]);
  hm = document.createElement('script');
  hm.src = "//api.giccoo.com/api/config?url=" + url;
  s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(hm, s);
};

// @codekit-prepend "../../libs/coffee/randomSort"
// @codekit-prepend "../../libs/coffee/loadWechatConfig"
_CDN = "";

_imgurl = "";

global = {};

main = {};

load = {};

sys = "";

imageurl = "//api.giccoo.com/api/upload/image64/";

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

_END = {
  100: [{
    desc: "听歌识曲胜过AI的",
    name: "绝代音雄"
  }, {
    desc: "资深音乐委员会的",
    name: "曲库专家"
  }, {
    desc: "绝迹江湖，音乐即生命的",
    name: "灵魂歌者"
  }, {
    desc: "蝉联榜首开口让人跪的",
    name: "天生歌神"
  }, {
    desc: "在我的BGM中不会输的",
    name: "至尊狂神"
  }, {
    desc: "精通六国音乐全方位无死穴的",
    name: "天选之人"
  }, {
    desc: "音乐界敢称第二没人敢称第一的",
    name: "独孤求败"
  }, {
    desc: "喝速溶咖啡都要配上交响圆舞曲的",
    name: "音乐世家"
  }, {
    desc: "就是难不倒行走中的",
    name: "音乐百科全书"
  }, {
    desc: "地下室堆满了珍藏专辑的",
    name: "音乐鉴赏师"
  }],
  80: [{
    desc: "听歌百万不唱一首的",
    name: "音乐指导家"
  }, {
    desc: "每晚都在修炼深藏不漏的",
    name: "浴室演唱家"
  }, {
    desc: "成功打败听歌识曲功能的",
    name: "社会人儿"
  }, {
    desc: "手握10T硬盘坐拥百箱专辑的",
    name: "人肉点唱机"
  }, {
    desc: "站在潮流尖端跟紧节奏自由摇摆的",
    name: "音乐大咖"
  }, {
    desc: "千年一遇公认最具潜力的",
    name: "杰出青年"
  }, {
    desc: "猜歌界让对手闻风丧胆的",
    name: "隐世高人"
  }, {
    desc: "被神选中凡人无法超越的",
    name: "一代宗师"
  }, {
    desc: "拥有超大内存和相对音感的 ",
    name: "人形MP3"
  }, {
    desc: "越努力越幸运十三亿奇迹的 ",
    name: "全民导师"
  }],
  60: [{
    desc: "常驻街头唱功一流的",
    name: "地下音乐狂"
  }, {
    desc: "录音棚里起的比公鸡还早的",
    name: "逐梦音乐圈少年"
  }, {
    desc: "唱歌app里略有些粉丝的",
    name: "当代网红歌手"
  }, {
    desc: "大吉大利靠听歌吃鸡的",
    name: "不羁玩家"
  }, {
    desc: "陶醉型忘词不忘摇摆的",
    name: "歌唱王者"
  }, {
    desc: "站在潮流尖端跟紧节奏自顾摇摆的",
    name: "音乐大咖"
  }, {
    desc: "昼伏夜出耳机即本体的",
    name: "乐坛劳模"
  }, {
    desc: "正在强势崛起小有见解的",
    name: "音乐评论家"
  }, {
    desc: "拥有超强爆发力即将走红的",
    name: "乐坛新秀"
  }, {
    desc: "常年出没于各大音乐节的",
    name: "VIP会员"
  }],
  40: [{
    desc: "刚入坑还一脸茫然的",
    name: "萌新小白"
  }, {
    desc: "革命尚未成功需再接再厉的",
    name: "后起之秀"
  }, {
    desc: "徘徊在及格边缘只差临门一脚的",
    name: "音乐系学生"
  }, {
    desc: "听得清也听不清只能听个大概的",
    name: "差不多听者"
  }, {
    desc: "出租屋里写不出好歌的",
    name: "唱作型歌手"
  }, {
    desc: "某大学乐队里第108号的",
    name: "替补主唱"
  }, {
    desc: "身为音痴也不放弃的",
    name: "空响奋斗家"
  }, {
    desc: "绝不妥切做一条平凡咸鱼的",
    name: "燃乐爱好者"
  }, {
    desc: "剑走偏锋爱热门更爱小众音乐的",
    name: "魔幻鬼才"
  }, {
    desc: "一切随缘不强求的",
    name: "佛系听众"
  }],
  20: [{
    desc: "什么歌听起来都差不多的",
    name: "差不多先生"
  }, {
    desc: "冷板凳上待业多年的",
    name: "候补DJ"
  }, {
    desc: "在浴室唱哭淋浴头的",
    name: "灵魂歌唱家"
  }, {
    desc: "坐看台合唱也会被嫌弃的",
    name: "超级粉丝"
  }, {
    desc: "五音不全蔓延至听觉系统的",
    name: "音乐隔膜人"
  }, {
    desc: "离歌神还差一个珠穆朗玛峰的",
    name: "普通路人"
  }, {
    desc: "中世纪凭想象力听歌的",
    name: "练歌术士"
  }, {
    desc: "在地下室努力听歌扒谱的",
    name: "五杀乐队主唱"
  }, {
    desc: "一站上舞台就腿抖的",
    name: "后补练习生"
  }],
  0: [{
    desc: "从外太空飞来威胁地球音乐的",
    name: "音律破坏王"
  }, {
    desc: "来自外星对人类音乐一无所知的",
    name: "宇宙音痴"
  }, {
    desc: "问世间歌为何物的",
    name: "音乐绝缘体"
  }, {
    desc: "黑珍珠号上唱歌破音的",
    name: "水手练习生"
  }, {
    desc: "各大音乐网站上听歌曲数均为零的",
    name: "音乐黑洞"
  }, {
    desc: "一开嗓就让人人敬而远之的",
    name: "旋律怪物"
  }, {
    desc: "从小就让音乐老师头痛无解的",
    name: "音乐困难生"
  }]
};

answersList = randomSort(_answersList);

window.onload = function () {
  // neteaseShare()
  // runAnimate()
  if (window.navigator.userAgent.indexOf("NeteaseMusic") > -1) {
    sys = "NeteaseMusic";
  } else {
    // window.newsappAPI.share.invokeShare
    // 	wxUrl: "http://m.giccoo.com/meizu-music/"
    // 	wxImg: "http://m.giccoo.com/meizu-music/img/ico.jpg"
    // 	wxTitle: "哈喽！点击解密你的音乐DNA"
    // 	wxText: "哪个才是隐藏在你基因中的音乐DNA？"
    // 	wbImg: "http://m.giccoo.com/meizu-music/img/ico.jpg"
    loadWechatConfig();
    wx.ready(function () {
      var shareContent;
      shareContent = {
        title: "哈喽！点击解密你的音乐DNA",
        desc: "哪个才是隐藏在你基因中的音乐DNA？",
        link: "http://m.giccoo.com/meizu-music/",
        imgUrl: "http://m.giccoo.com/meizu-music/img/ico.jpg",
        success: function success() {
          // alert "success"
          return main.shareSuccessShow = true;
        },
        cancel: function cancel() {
          // alert "cancel"
          return main.shareSuccessShow = false;
        }
      };
      wx.onMenuShareTimeline(shareContent);
      wx.onMenuShareAppMessage(shareContent);
      wx.onMenuShareQQ(shareContent);
      return wx.onMenuShareWeibo(shareContent);
    });
  }
  return init();
};

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
      progress: 0,
      mount: true
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
            // main.ugcpageShow = true
            // main.buildUGC()
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
      wy: false,
      homepageShow: false,
      gamepageShow: false,
      gameNotePop: false,
      ugcpageShow: false,
      notepageShow: false,
      shareSuccessShow: false,
      errorShow: false,
      mount: false,
      loading: false,
      w: TrueW,
      h: TrueH,
      audio: null,
      nickname: "",
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
      timeout: null,
      shareImageLink: "",
      ugcqr: "",
      ugc: ""
    },
    computed: {
      XY: function XY() {
        return "pageX";
      }
    },
    methods: {
      regame: function regame() {
        return window.location.href = '//m.giccoo.com/meizu-music/?time=' + new Date().getTime();
      },
      // window.location.href = "http://m.giccoo.com/meizu-music/#regame"
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
        this.markList = randomSort(temp);
        console.log("start time run");
        this.date.start = new Date();
        return this.runtime();
      },
      runtime: function runtime() {
        var _this2 = this;

        clearTimeout(this.timeout);
        this.timeout = null;
        this.timeout = setTimeout(function () {
          return _this2.timeoutshow();
        }, 1000 * this.second);
        clearInterval(this.date.int);
        this.date.int = null;
        this.date.int = setInterval(function () {
          _this2.second = Math.floor(16 - (new Date().getTime() - _this2.date.start.getTime()) / 1000);
          if (_this2.second < 0) {
            return _this2.second = 0;
          }
          // console.log @.second
        }, 1000 / 20);
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
        this.errorShow = false;
        return this.answer.push(mark);
      },
      delectOne: function delectOne() {
        if (this.showAnswerPop) {
          return false;
        }
        this.errorShow = false;
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
        if (my !== answer.name) {
          return this.error();
        }
        this.answers[this.now] = my === answer.name ? 1 : 0;
        return this.showAnswer(answer.name);
      },
      error: function error() {
        return this.errorShow = true;
      },
      showAnswer: function showAnswer(answerName) {
        clearTimeout(this.timeout);
        this.timeout = null;
        clearInterval(this.date.int);
        this.date.int = null;
        this.answerName = answerName;
        this.errorShow = false;
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
        var i, item, len, list, ref, soure;
        this.audio.pause();
        this.homepageShow = false;
        this.gamepageShow = false;
        soure = 100;
        ref = main.answers;
        for (i = 0, len = ref.length; i < len; i++) {
          item = ref[i];
          if (item !== 1) {
            soure -= 20;
          }
        }
        list = _END[soure];
        item = list[Math.floor(Math.random() * list.length)];
        return this.buildUGC(item, soure);
      },
      buildUGC: function buildUGC(item) {
        var _this3 = this;

        var soure = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;

        var bg, canvas, ctx, writeText;
        this.loading = true;
        console.log(item);
        if (item == null) {
          item = {
            desc: "就是难不倒行走中的",
            name: "音乐百科全书"
          };
        }
        canvas = document.getElementById("result");
        canvas.width = 640;
        canvas.height = 1138;
        // canvas.className = "topall"
        ctx = canvas.getContext("2d");
        bg = new Image();
        bg.onload = function (evt) {
          ctx.drawImage(bg, 0, 0, bg.width, bg.height);
          return writeText(ctx);
        };
        bg.src = "./img/ugc/" + soure + ".jpg";
        return writeText = function writeText(ctx) {
          var qr, y;
          ctx.fillStyle = "#fff";
          ctx.textAlign = 'left';
          // ctx.shadowColor = 'rgba(0, 0, 0, 0.9)';
          // ctx.shadowBlur = 5;
          ctx.font = "normal normal 36px '微软雅黑'";
          // ctx.fillText(@.nickname,110,226)
          y = _runLongText(ctx, _this3.nickname, 180, 110, 226, 36 * 1.4);
          ctx.font = "normal normal 23px '微软雅黑'";
          ctx.fillText("您的经典值是", 110, y + 36);
          ctx.font = "italic bold 94px '微软雅黑'";
          ctx.textAlign = 'center';
          ctx.fillText(soure, 350, 226 + 36);
          ctx.textAlign = 'left';
          ctx.font = "normal normal 30px '微软雅黑'";
          // ctx.fillText(item.desc,110,226+36+80)
          y = _runLongText(ctx, item.desc, 30 * 15 + 5, 110, y + 36 + 80, 36 * 1.4);
          ctx.font = "normal bold 50px '微软雅黑'";
          ctx.fillText(item.name, 110, y + 50 + 10);
          _this3.ugc = canvas.toDataURL("image/png");
          qr = new Image();
          qr.onload = function () {
            ctx.drawImage(qr, 640 - qr.width - 70, 1138 - qr.height - 46, qr.width, qr.height);
            _this3.ugcqr = canvas.toDataURL("image/png");
            _this3.loading = false;
            return _this3.ugcpageShow = true;
          };
          return qr.src = "./img/ugc/qr.png";
        };
      },
      shareWeb: function shareWeb() {
        var _this4 = this;

        neteaseShare();
        return setTimeout(function () {
          return _this4.shareSuccessShow = true;
        }, 6000);
      },
      shareImage: function shareImage() {
        this.loading = true;
        return this.upload(this.ugcqr);
      },
      // if sys is "NeteaseMusic"
      // neteaseShareImage()
      upload: function upload(image) {
        var data;
        // console.log "upload:"
        data = {
          image: image,
          folder: "meizumusic"
        };
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
        var _this5 = this;

        // 上传分享
        // console.log data.info
        this.loading = false;
        this.shareImageLink = data.info;
        neteaseShareImage();
        return setTimeout(function () {
          return _this5.shareSuccessShow = true;
        }, 6000);
      },
      faild: function faild() {
        // 换成长按保存
        return this.loading = false;
      }
    },
    mounted: function mounted($el, e) {
      var _this6 = this;

      // @.wy = true
      if (sys === "NeteaseMusic") {
        this.wy = true;
      }
      // @.mount = true
      // @.gamepageShow = true
      // @.gameNotePop = true
      this.audio = document.getElementById("audio");
      this.audio.addEventListener("play", function () {
        return _this6.playing = true;
      });
      return this.audio.addEventListener("ended", function () {
        return _this6.playing = false;
      });
    }
  });
};

// console.log answersList,@.audio
neteaseShare = function neteaseShare() {
  var picUrl, redirectUrl, subTitle2, title1, title2;
  title1 = "哈喽！点击解密你的音乐DNA";
  picUrl = "http://m.giccoo.com/meizu-music/img/ico.jpg";
  redirectUrl = "http://m.giccoo.com/meizu-music/";
  title2 = "哈喽！点击解密你的音乐DNA";
  subTitle2 = "哪个才是隐藏在你基因中的音乐DNA？";
  return window.location.href = "orpheus://share/" + encodeURIComponent(title1) + "/" + encodeURIComponent(picUrl) + "/" + encodeURIComponent(redirectUrl) + "/" + encodeURIComponent(title2) + "/" + encodeURIComponent(subTitle2);
};

neteaseShareImage = function neteaseShareImage() {
  var picUrl, redirectUrl, title1;
  title1 = "哈喽！点击解密你的音乐DNA";
  picUrl = "http://image.giccoo.com/upload/meizumusic/" + main.shareImageLink + "@!large";
  redirectUrl = "http://m.giccoo/meizu-music/";
  console.log("orpheus://sharepic?picUrl=" + encodeURIComponent(picUrl) + "&shareUrl=" + encodeURIComponent(redirectUrl) + "&wbDesc=" + encodeURIComponent(title1) + "&qqDesc=" + encodeURIComponent(title1));
  return window.location.href = "orpheus://sharepic?picUrl=" + encodeURIComponent(picUrl) + "&shareUrl=" + encodeURIComponent(redirectUrl) + "&wbDesc=" + encodeURIComponent(title1) + "&qqDesc=" + encodeURIComponent(title1);
};

// 计算长文字
_runLongText = function runLongText(ctx, longText, maxW, x, y, lineH) {
  var i, innerText, long, metrics, ref, text;
  // console.log maxW
  innerText = "";
  long = false;
  if (longText == null && longText.length <= 0) {
    return y;
  }
  for (text = i = 0, ref = longText.length; 0 <= ref ? i < ref : i > ref; text = 0 <= ref ? ++i : --i) {
    // console.log longText[text]
    innerText += longText[text];
    metrics = ctx.measureText(innerText);
    // console.log metrics , maxW
    if (metrics.width >= maxW) {
      ctx.fillText(innerText, x, y);
      longText = longText.replace(innerText, "");
      y = _runLongText(ctx, longText, maxW, x, y + lineH, lineH);
      long = true;
      break;
    }
  }
  if (!long) {
    ctx.fillText(innerText, x, y);
  }
  return y;
};
