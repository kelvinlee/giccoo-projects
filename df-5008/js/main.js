var $_GET, _CDN, _imgurl, getRandom, global, init, load, loadWechatConfig, main, music_list, name_list, neteaseShare, noteText, post_url, pre, runLongTexts, stopWebViewScroll, sys, topic_list, updateShare;

_CDN = "";

_imgurl = "";

global = {};

main = {};

pre = {};

load = {};

post_url = "http://api.giccoo.com/df5008/insert/";

sys = "other";

noteText = "长按识别二维码，\n去往2018年的远方。";

name_list = ["心之所向\n即为吾乡", "淡泊明志\n宁静致远", "愿得浮生\n半日闲", "一屋两人\n三餐四季"];

music_list = [
  {
    name: "平凡之路",
    desc: "朴树",
    src: "http://music.163.com/song/media/outer/url?id=28815250"
  },
  {
    name: "咖喱咖喱",
    desc: "牛奶咖啡",
    src: "http://music.163.com/song/media/outer/url?id=476987525"
  },
  {
    name: "边走边喝",
    desc: "黄磊",
    src: "http://music.163.com/song/media/outer/url?id=92613"
  },
  {
    name: "微笑的仙人掌",
    desc: "彭靖惠",
    src: "http://music.163.com/song/media/outer/url?id=280668"
  },
  {
    name: "Friends",
    desc: "彭靖惠",
    src: "http://music.163.com/song/media/outer/url?id=280684"
  },
  {
    name: "国境之南",
    desc: "范逸臣",
    src: "http://music.163.com/song/media/outer/url?id=4873061"
  },
  {
    name: "下一站，幸福",
    desc: "彭靖惠",
    src: "http://music.163.com/song/media/outer/url?id=280649"
  },
  {
    name: "环游世界",
    desc: "小旺福",
    src: "http://music.163.com/song/media/outer/url?id=385640"
  },
  {
    name: "爱是有故事的旅行",
    desc: "李泉",
    src: "http://music.163.com/song/media/outer/url?id=111801"
  },
  {
    name: "Taipei City，台北城市",
    desc: "陈奕迅",
    src: "http://music.163.com/song/media/outer/url?id=67829"
  }
];

topic_list = ["点击留下自己的\n心境感悟"];

getRandom = function(length) {
  return parseInt(Math.random() * (length + 1) - 1);
};

window.onload = function() {
  // runAnimate()
  if (window.navigator.userAgent.indexOf("NeteaseMusic") > -1) {
    sys = "NeteaseMusic";
  } else {
    // stopWebViewScroll()
    loadWechatConfig();
    wx.ready(function() {
      var shareContent;
      shareContent = {
        title: "吾有心语，享，往远方",
        desc: "心之所向，即为远方。",
        link: "http://peugeot.music.163.com/df-5008/",
        imgUrl: "http://peugeot.music.163.com/df-5008/img/ico.jpg",
        success: function() {},
        // alert "success"
        cancel: function() {}
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

init = function() {
  return main = new Vue({
    el: "#main",
    data: {
      homepageShow: true,
      mount: false,
      loading: false,
      lastpage: false,
      buildshow: false,
      buildstep: 1,
      buildover: false,
      topic: topic_list[0],
      musicData: {},
      creatEnd: false,
      ugcsrc: null,
      ugc: false,
      qrsrc: null,
      qr: false,
      cacheArea: "",
      musicIndex: 0,
      contentIndex: 0,
      playing: false,
      wechatshare: false,
      audioSRC: music_list[0].src,
      form: {
        username: "",
        mobile: ""
      }
    },
    computed: {
      musicname: function() {
        return music_list[this.musicIndex].name;
      },
      musicdesc: function() {
        return music_list[this.musicIndex].desc;
      }
    },
    methods: {
      start: function() {
        this.buildshow = true;
        return this.homepageShow = false;
      },
      gobuild: function() {
        var i, l, len, texts;
        if (this.topic === topic_list[0]) {
          return alert("请输入您自己的心境感悟");
        } else if (this.topic.split("\n").length > 4) {
          return alert("请控制您丰富的感情在 4 行以内的文字.");
        } else if (this.topic.length <= 0) {
          return alert("请输入您自己的心境感悟");
        } else {
          texts = this.topic.split("\n");
          for (l = 0, len = texts.length; l < len; l++) {
            i = texts[l];
            console.log(i.replace(/[^\x00-\xff]/g, "01").length);
            if (i.replace(/[^\x00-\xff]/g, "01").length > 30) {
              return alert("请控制您丰富的感情,单行文字不能超过15个中文字符以内");
            }
          }
        }
        return this.buildstep = 2;
      },
      selectContent: function(evt, index) {
        // console.log evt,index
        return this.contentIndex = parseInt(index);
      },
      musicSelectPrev: function() {
        this.musicIndex += -1;
        if (this.musicIndex <= 0) {
          this.musicIndex = 0;
          return false;
        }
        return this.play();
      },
      musicSelectNext: function() {
        this.musicIndex += 1;
        if (this.musicIndex > (music_list.length - 1)) {
          this.musicIndex = music_list.length - 1;
          return false;
        }
        return this.play();
      },
      play: function() {
        this.audioSRC = music_list[this.musicIndex].src;
        document.getElementById("audio-music").addEventListener("play", this.changPlay.bind(this));
        document.getElementById("audio-music").addEventListener("pause", this.changEnd.bind(this));
        document.getElementById("audio-music").addEventListener("end", this.changEnd.bind(this));
        return document.getElementById("audio-music").play();
      },
      changPlay: function() {
        return this.playing = true;
      },
      changEnd: function() {
        return this.playing = false;
      },
      pause: function() {
        return document.getElementById("audio-music").pause();
      },
      buildimage: function() {
        var bg, canvas, ctx, self, writeText;
        if (this.contentIndex < 1 || this.contentIndex > 4) {
          return alert("请选择意愿场景");
        }
        // create canvas
        self = this;
        canvas = document.getElementById("result");
        canvas.width = 640;
        canvas.height = 1024;
        // canvas.className = "topall"
        ctx = canvas.getContext("2d");
        this.buildover = true;
        bg = new Image();
        bg.onload = function(evt) {
          ctx.drawImage(bg, 0, 0, bg.width, bg.height);
          return writeText();
        };
        bg.src = `./img/bg-${self.contentIndex}.jpg`;
        writeText = function() {
          var MAX, qr, removeH;
          ctx.fillStyle = "#fff";
          ctx.textAlign = 'center';
          ctx.font = "56px '微软雅黑'";
          ctx.shadowColor = 'rgba(0, 0, 0, 0.9)';
          ctx.shadowBlur = 5;
          runLongTexts(name_list[self.contentIndex - 1], ctx, 320, 440);
          ctx.fillStyle = "#fff";
          ctx.textAlign = 'center';
          ctx.font = "30px '微软雅黑'";
          MAX = self.topic.split('\n').length;
          removeH = MAX * (30 * 1);
          runLongTexts(self.topic, ctx, 320, 284 - removeH);
          ctx.font = "30px '微软雅黑' bold";
          ctx.fillText(self.musicname, 320, 790);
          ctx.font = "24px '微软雅黑'";
          ctx.fillText(self.musicdesc, 320, 830);
          
          // self.onUpload canvas.toDataURL("image/png")
          self.ugc = true;
          self.ugcsrc = canvas.toDataURL("image/png");
          // add logo
          // main.creatEnd = true
          qr = new Image();
          qr.onload = function() {
            ctx.textAlign = 'left';
            ctx.font = "20px '微软雅黑'";
            runLongTexts(noteText, ctx, 100, 1024 - 56);
            ctx.drawImage(qr, 10, 1024 - 80 - 10, 80, 80);
            self.qr = true;
            return self.qrsrc = canvas.toDataURL("image/png");
          };
          return qr.src = "./img/qrcode.png";
        };
        // writeText()
        this.buildshow = false;
        this.buildstep = 1;
        this.buildover = true;
        return this.lastpage = true;
      },
      share: function() {
        if (sys === "NeteaseMusic") {
          return neteaseShare();
        } else {
          return this.wechatshare = true;
        }
      },
      closeshare: function() {
        return this.wechatshare = false;
      },
      focusArea: function(evt) {
        if (topic_list.indexOf(this.topic) > -1) {
          this.cacheArea = this.topic + "";
          return this.topic = "";
        }
      },
      blurArea: function(evt) {
        if (this.topic === "") {
          return this.topic = this.cacheArea;
        }
      },
      onSubmit: function(evt) {
        var data, k, ref, reg, url, v;
        if (this.form.username.length < 1) {
          alert('姓名不能为空');
          return false;
        }
        if (this.form.mobile.length < 1) {
          alert('电话不能为空');
          return false;
        }
        reg = /^1\d{10}$/;
        if (!reg.test(this.form.mobile)) {
          alert('电话格式不正确');
          return false;
        }
        url = post_url;
        data = {};
        ref = this.form;
        // add content
        for (k in ref) {
          v = ref[k];
          data[k] = v;
        }
        data['content'] = main.topic;
        data['music'] = music_list[main.musicIndex].name;
        return axios.post(url, data).then(function(msg) {
          if (msg.data.recode === 200) {
            alert("参与成功");
            return main.lastpage = false;
          } else {
            return alert(msg.data.reason);
          }
        });
      }
    },
    mounted: function() {
      return setTimeout(function() {
        return main.mount = true;
      }, 100);
    }
  });
};

// canvas 轮训文字
runLongTexts = function(texts, ctx, x, y) {
  var all, list, text;
  all = texts.split('\n');
  if (texts.length > 0) {
    text = all[0];
    ctx.fillText(text.replace(' (可编辑)', ""), x, y);
    list = texts.replace(text + "\n", "");
    list = list.replace(text, "");
    y += parseInt(ctx.font) * 1.4;
    return runLongTexts(list, ctx, x, y);
  }
};

// 修改分享内容
updateShare = function(msg) {
  var id, imgUrl, shareContent;
  imgUrl = `http://image.giccoo.com/sayno/corona/${msg.filename}@!large`;
  if ((msg.info.insertId != null) && msg.info.insertId > 0) {
    id = "?id=" + msg.info.insertId;
  } else {
    id = "";
  }
  if (sys === "NeteaseMusic") {
    return _imgurl = imgUrl;
  } else {
    // neteaseShare id,imgUrl
    // img = new Image()
    // img.onload = ->
    // 	neteaseShare id,imgUrl
    // img.src = imgUrl
    main.shareNote = true;
    shareContent = {
      title: "吾有心语，享，往远方",
      desc: "心之所向，即为远方。",
      link: "http://m.giccoo.com/corona/" + id,
      imgUrl: "http://m.giccoo.com/corona/img/ico.jpg",
      success: function() {
        // alert "success"
        main.shareNote = false;
        return main.showaward(500);
      },
      cancel: function() {}
    };
    // alert "cancel"
    wx.onMenuShareTimeline(shareContent);
    wx.onMenuShareAppMessage(shareContent);
    wx.onMenuShareQQ(shareContent);
    return wx.onMenuShareWeibo(shareContent);
  }
};

neteaseShare = function() {
  var picUrl, redirectUrl, subTitle2, title1, title2;
  title1 = "吾有心语，享，往远方";
  picUrl = "http://peugeot.music.163.com/df-5008/img/ico.jpg";
  redirectUrl = "http://peugeot.music.163.com/df-5008/";
  title2 = "吾有心语，享，往远方";
  subTitle2 = "心之所向，即为远方。";
  window.location.href = "orpheus://share/" + encodeURIComponent(title1) + "/" + encodeURIComponent(picUrl) + "/" + encodeURIComponent(redirectUrl) + "/" + encodeURIComponent(title2) + "/" + encodeURIComponent(subTitle2);
  // window.location.href = "orpheus://sharepic?picUrl="+encodeURIComponent(picUrl)+"&shareUrl="+encodeURIComponent(redirectUrl)+"&wbDesc="+encodeURIComponent(title1)+"&qqDesc="+encodeURIComponent(title1)
  return console.log("run after?");
};

loadWechatConfig = function() {
  var hm, s, url;
  url = encodeURIComponent(window.location.href.split("#")[0]);
  hm = document.createElement('script');
  hm.src = "http://api.giccoo.com/api/config?url=" + url;
  s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(hm, s);
};

$_GET = (function() {
  var get, i, j, l, len, u, url;
  url = window.document.location.href.toString();
  u = url.split('?');
  if (typeof u[1] === 'string') {
    u = u[1].split('&');
    get = {};
    console.log(u);
    for (l = 0, len = u.length; l < len; l++) {
      i = u[l];
      j = i.split('=');
      get[j[0]] = j[1];
    }
    return get;
  } else {
    return {};
  }
})();

stopWebViewScroll = function() {
  var el, l, len, overscroll, ref, results;
  overscroll = function(el) {
    el.addEventListener('touchstart', function() {
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
    return el.addEventListener("touchmove", function(evt) {
      if (el.offsetHeight < el.scrollHeight) {
        return evt._isScroller = true;
      }
    });
  };
  document.addEventListener("touchmove", function(evt) {
    if (!evt._isScroller) {
      return evt.preventDefault();
    }
  });
  ref = document.querySelectorAll(".touch");
  // console.log document.querySelectorAll(".touch")
  results = [];
  for (l = 0, len = ref.length; l < len; l++) {
    el = ref[l];
    results.push(overscroll(el));
  }
  return results;
};
