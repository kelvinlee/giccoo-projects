'use strict';

var ANIMATION_END_NAME, ANIMATION_END_NAMES, TRANSITION_END_NAME, TRANSITION_END_NAMES, VENDORS, answerlists, apiURL, ask, css3Prefix, i, initLab, j, lab, len, load, loadWechatConfig, mTestElement, sendPost, shareContent, shareDescription, shareTitles, token;

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

// @codekit-prepend "coffee/css3Prefix"
Vue.component("slider", {
  template: '<div><div class="slider-list" v-bind:style="{transform: \'translate3d(\'+x+\'px,0,0)\',transitionDuration: duration+\'s\'}" ><slot/></div></div>',
  data: function data() {
    return {
      root: null,
      moving: false,
      timeout: null,
      now: 0,
      max: 2,
      time: 3000,
      delay: 3000,
      duration: 0,
      offset: {
        resistance: 1,
        lastSlide: 1,
        scrollableArea: 320,
        isScrolling: false,
        lastw: 0,
        w: 320,
        x: 0,
        y: 0,
        deltaX: 0,
        deltaY: 0
      },
      slideNumber: 0,
      move: false,
      startTime: 0,
      x: 0,
      y: 0
    };
  },
  props: ['overpage'],
  watch: {
    overpage: function overpage(newV, oldV) {
      if (newV) {
        // console.log(newV,oldV)
        return this.start();
      }
    }
  },
  // computed:
  // 	color: ->
  // 		return "#f2f2f2"
  methods: {
    start: function start() {
      var _this = this;

      this.stopAll();
      return this.timeout = setTimeout(function () {
        return _this.moveNext();
      }, this.time);
    },
    moveNext: function moveNext() {
      var _this2 = this;

      // console.log "move to next"
      this.stopAll();
      if (this.now >= this.max) {
        this.animationEnd();
        return false;
        this.now = 0;
        this.timeout = setTimeout(function () {
          return _this2.moveNext();
        }, 10);
        return false;
      } else {
        this.offset.w = this.$el.offsetWidth;
        this.duration = 0.5;
        this.now = this.now + 1;
        this.x = -(this.now * this.offset.w);
        this.setSlideNumber(0);
      }
      return this.timeout = setTimeout(function () {
        return _this2.moveNext();
      }, this.time);
    },
    stopAll: function stopAll() {
      return clearTimeout(this.timeout);
    },
    setSlideNumber: function setSlideNumber(offset) {
      var round, slideNumber;
      // if @moved
      round = offset ? this.offset.deltaX < 0 ? 'ceil' : 'floor' : 'round';
      slideNumber = Math[round](this.x / (this.offset.scrollableArea / this.list.length));
      slideNumber += offset;
      slideNumber = Math.min(slideNumber, 0);
      return this.slideNumber = Math.max(-(this.list.length - 1), slideNumber) % this.list.length;
    },
    // console.log @slideNumber
    touchstart: function touchstart(evt) {
      var touch;
      touch = evt.touches[0];
      this.duration = 0;
      this.moved = false;
      this.startTime = +new Date();
      this.offset.w = this.$el.offsetWidth;
      this.offset.x = touch.pageX;
      this.offset.y = touch.pageY;
      this.offset.lastw = this.x;
      this.offset.lastSlide = -(this.list.length - 1);
      this.offset.scrollableArea = this.offset.w * this.list.length;
      return this.setSlideNumber(0);
    },
    // console.log @offset
    touchmove: function touchmove(evt) {
      var pageX, touch;
      touch = evt.touches[0];
      this.offset.deltaX = touch.pageX - this.offset.x;
      pageX = touch.pageX;
      this.x = this.offset.deltaX / this.offset.resistance + this.offset.lastw;
      this.offset.resistance = this.slideNumber === 0 && this.offset.deltaX > 0 ? pageX / this.offset.w + 1.25 : this.slideNumber === this.offset.lastSlide && this.offset.deltaX < 0 ? (this.offset.w - Math.abs(pageX)) / this.offset.w + 1.25 : 1;
      // console.log touch.pageX,@offset.x,pageX,@offset.deltaX,@offset.resistance,@offset.lastw
      return this.moved = true;
    },
    touchend: function touchend(evt) {
      var oldslideNumber;
      if (this.moved) {
        oldslideNumber = this.slideNumber;
        this.setSlideNumber(+new Date() - this.startTime < 1000 && Math.abs(this.offset.deltaX) > 15 ? this.offset.deltaX < 0 ? -1 : 1 : 0);
        this.x = this.slideNumber * this.offset.w;
        this.duration = 0.2;
        if (this.slideNumber === 0 && oldslideNumber === -(this.list.length - 1)) {
          this.x = (oldslideNumber - 1) * this.offset.w;
        }
        if (oldslideNumber === 0 && this.slideNumber === -(this.list.length - 1)) {
          return this.x = 1 * this.offset.w;
        }
      }
    },
    animationEnd: function animationEnd() {
      this.$el.addEventListener('touchstart', this.touchstart.bind(this));
      this.$el.addEventListener('touchmove', this.touchmove.bind(this));
      return this.$el.addEventListener('touchend', this.touchend.bind(this));
    }
  },
  mounted: function mounted(el) {
    return this.list = this.$el.children[0].children;
  }
});

apiURL = "api.giccoo.com";

load = {};

lab = {};

token = null;

shareContent = {
  title: "雅诗兰黛美肌万能研究室",
  desc: "品牌合作Html5页面，用户可点击进入进行答题，生成属于自己的肌肤报告。",
  link: "http://m.giccoo.com/esteelauder/",
  imgUrl: "http://m.giccoo.com/esteelauder/img/share.jpg",
  success: function success() {},
  cancel: function cancel() {}
};

answerlists = [[{
  selected: false,
  text: "小细纹干嘛大惊小怪？可能最近笑太多！",
  id: 3
}, {
  selected: false,
  text: "照镜子感觉老了许多，先补水再说！",
  id: 2
}, {
  selected: false,
  text: "没事按摩一下，皱纹慢慢会消失！",
  id: 1
}], [{
  selected: false,
  text: "面色不均匀，压点粉饼就好了~",
  id: 3
}, {
  selected: false,
  text: "面色发黄？涂点腮红拯救一下！",
  id: 2
}, {
  selected: false,
  text: "脸色有点暗沉，多睡两觉补一补~",
  id: 1
}], [{
  selected: false,
  text: "小脸不Q弹，补点胶原蛋白~~",
  id: 3
}, {
  selected: false,
  text: "脸不紧致，赶紧用按摩仪提拉一下！",
  id: 2
}, {
  selected: false,
  text: "粗糙起皮，做个去角质就好啦~~",
  id: 1
}]];

answerlists[0].sort(function () {
  if (Math.random() > 0.5) {
    return -1;
  } else {
    return 1;
  }
});

answerlists[1].sort(function () {
  if (Math.random() > 0.5) {
    return -1;
  } else {
    return 1;
  }
});

answerlists[2].sort(function () {
  if (Math.random() > 0.5) {
    return -1;
  } else {
    return 1;
  }
});

shareTitles = ["鲜嫩丝滑奶茶肌", "光泽亮润陶瓷肌", "吹弹可破蛋白肌"];

shareDescription = ["但是你的皱纹一带一条指数偏高", "但是你的脸色亮度有待提升", "但是你的小脸紧致程度有所下降"];

// window.WeiboJS.init
// 	appkey: "1605288503"
// 	debug: true
// 	timestamp: new Date().getTime()
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
  return load = new Vue({
    el: '#load',
    data: {
      loadend: false,
      show: true,
      number: 0,
      animatedNumber: 0
    },
    watch: {
      number: function number(newValue, oldValue) {
        var _animate, vm;
        vm = this;
        _animate = function animate() {
          // console.log TWEEN.update()
          if (TWEEN.update()) {
            requestAnimationFrame(_animate);
          }
        };
        new TWEEN.Tween({
          tweeningNumber: oldValue
        }).easing(TWEEN.Easing.Quadratic.Out).to({
          tweeningNumber: newValue
        }, 700).onUpdate(function () {
          vm.animatedNumber = this.tweeningNumber.toFixed(0);
        }).start();
        _animate();
      },
      animatedNumber: function animatedNumber(newValue, oldValue) {
        var _this3 = this;

        if (parseInt(newValue) === 100) {
          return setTimeout(function () {
            _this3.loadend = true;
            return lab.started = true;
          }, 100);
        }
      }
    },
    mounted: function mounted() {
      this.number = 15;
      console.log(this, this.$el);
      return ask();
    }
  });
};

initLab = function initLab() {
  return lab = new Vue({
    el: "#lab",
    data: {
      started: false,
      startquestion: false,
      startprinter: false,
      answerFinished: false,
      answer: 0,
      score: [0, 0, 0],
      nickname: "",
      waiting: false,
      printerover: false,
      overpage: false,
      sended: false,
      sharesuccess: false,
      shownote: false,
      touchdata: "up",
      printer: {
        title: "鲜嫩丝滑奶茶肌",
        description: "但是你的脸色亮度有待提升"
      },
      answerlist: answerlists,
      answerShow: [true, true, true]
    },
    // computed:
    // 	answers: ->
    // 		return @answerlist[@answer]
    methods: {
      startGo: function startGo() {
        this.started = false;
        return this.startquestion = true;
      },
      selecteFun: function selecteFun(answer, indexP, index) {
        console.log(indexP, this.answer);
        if (this.waiting || this.answerFinished || this.answer === 3) {
          return false;
        }
        if (indexP !== this.answer) {
          return false;
        }
        // console.log @answer
        answer.selected = true;
        if (this.answer < 2) {
          this.answerShow[this.answer] = false;
        }
        if (this.answer <= 2) {
          this.score[this.answer] = answer.id;
        }
        this.answer = this.answer + 1;
        if (this.answer === 3) {
          return this.answerFinished = true;
        }
      },
      startPrinterFun: function startPrinterFun() {
        var p;
        this.started = false;
        this.startquestion = false;
        this.startprinter = true;
        this.printerover = true;
        p = document.getElementById("printer-page");
        if (this.score[0] >= this.score[1] && this.score[0] >= this.score[2]) {
          this.printer.title = shareTitles[0];
        } else if (this.score[1] >= this.score[2] && this.score[1] >= this.score[0]) {
          this.printer.title = shareTitles[1];
        } else if (this.score[2] >= this.score[1] && this.score[2] >= this.score[0]) {
          this.printer.title = shareTitles[2];
        } else {
          this.printer.title = shareTitles[0];
        }
        if (this.score[2] <= this.score[1] && this.score[2] <= this.score[0]) {
          return this.printer.description = shareDescription[2];
        } else if (this.score[1] <= this.score[2] && this.score[1] <= this.score[0]) {
          return this.printer.description = shareDescription[1];
        } else if (this.score[0] <= this.score[1] && this.score[0] <= this.score[2]) {
          return this.printer.description = shareDescription[0];
        } else {
          return this.printer.description = shareDescription[2];
        }
      },
      // console.log @sendPostFun
      sendPostFun: function sendPostFun() {
        var self;
        if (this.sended) {
          // console.log @sended
          return false;
        }
        self = this;
        return axios.get("http://" + apiURL + "/esteelauder/shareTo/?id=" + this.score.join("-")).then(function (msg) {
          if (msg.data.recode === 200) {
            self.sended = true;
            self.sharesuccess = true;
          }
          if (msg.data.recode !== 200) {
            // alert msg 
            return console.log(msg);
          }
        });
      },
      // alert "发布成功"
      closeshare: function closeshare() {
        this.sharesuccess = false;
        return this.sended = false;
      },
      closenote: function closenote() {
        return this.shownote = false;
      },
      openNoteFun: function openNoteFun() {
        // console.log "openNoteFun",de
        return this.shownote = true;
      },
      gotoProFun: function gotoProFun(de) {
        if (!this.printerover) {
          return false;
        }
        this.printerover = false;
        return this.overpage = true;
      }
    },
    directives: {
      touch: {
        default: {
          x: 0,
          y: 0,
          start: false,
          moving: false
        },
        inserted: function inserted(el) {},
        bind: function bind(el, binding, vnode) {
          el.addEventListener("touchstart", binding.def.touchstart.bind(binding));
          el.addEventListener("touchmove", binding.def.touchmove.bind(binding));
          el.addEventListener("touchend", binding.def.touchend.bind(binding));
          el.addEventListener("mousedown", binding.def.touchstart.bind(binding));
          el.addEventListener("mousemove", binding.def.touchmove.bind(binding));
          return el.addEventListener("mouseup", binding.def.touchend.bind(binding));
        },
        touchstart: function touchstart(evt) {
          var touch;
          evt.preventDefault();
          if (evt.type === "mousedown") {
            this.def.default.x = evt.pageX;
            this.def.default.y = evt.pageY;
            return this.def.default.start = true;
          } else {
            touch = evt.touches[0];
            this.def.default.x = touch.pageX;
            this.def.default.y = touch.pageY;
            return this.def.default.start = true;
          }
        },
        touchmove: function touchmove(evt) {
          var deY, touch;
          evt.preventDefault();
          if (!this.def.default.start) {
            return false;
          }
          if (evt.type === "mousemove") {
            touch = evt;
          } else {
            touch = evt.touches[0];
          }
          this.def.default.moving = true;
          deY = this.def.default.y - touch.pageY;
          if (deY > 50) {
            this.def.default.start = false;
            this.value("up");
            return false;
          }
          if (deY < -50) {
            this.def.default.start = false;
            this.value("down");
            return false;
          }
        },
        touchend: function touchend(evt) {
          evt.preventDefault();
          this.def.default.start = false;
          return this.def.default.moving = false;
        }
      }
    }
  });
};

ask = function ask() {
  // WB2.logout ->
  // 	console.log WB2.checkLogin()
  // return false
  axios.defaults.withCredentials = true;
  return axios.get("http://" + apiURL + "/esteelauder/ask").then(function (msg) {
    console.log("msg:", msg.data);
    if (msg.data.recode === 200) {
      load.number = 100;
      token = msg.data.token;
    } else {
      window.location.href = "https://api.weibo.com/oauth2/authorize?client_id=1605288503&response_type=code&redirect_uri=http://" + apiURL + "/esteelauder/";
    }
    // load.number = 100
    return initLab();
  }).catch(function (err) {
    return initLab();
  });
};

sendPost = function sendPost(callback) {
  return axios.get("http://" + apiURL + "/esteelauder/shareTo").then(function (msg) {
    if (msg.data.recode === 200) {
      callback();
    }
    if (msg.data.recode !== 200) {
      // alert msg 
      return console.log(msg);
    }
  });
};

loadWechatConfig = function loadWechatConfig() {
  var hm, s, url;
  url = encodeURIComponent(window.location.href.split("#")[0]);
  hm = document.createElement('script');
  hm.src = "http://api.giccoo.com/api/config?url=" + url;
  s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(hm, s);
};
