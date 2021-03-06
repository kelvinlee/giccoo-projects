'use strict';

var ANIMATION_END_NAME, ANIMATION_END_NAMES, TRANSITION_END_NAME, TRANSITION_END_NAMES, VENDORS, _CDN, createTimeWait, css3Prefix, defaultY, fisrtPage, i, initPlanets, initVuePlanetInfoPage, initVuePlanetsMedal, j, jsList, k, lastPageShow, len, listLoaded, load, _loadAllScript, loadWechatConfig, loadedAll, mTestElement, markers, planetInfo, planetOpenList, planetinfopage, planetlastpage, planets, planetsList, planetstars, setAstarLight, shareContent;

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

Vue.component("player", {
  template: '<div class="playsound"> <div class="icon-play" :class="{play: playing, pause: !playing}" @click="change"> <img :src="iconNow" /> </div> <audio :src="src" autoplay="autoplay" preload="true" loop="loop"></audio> <audio :src="item" :id="\'music\'+index" preload="true" v-for="item,index in otherSrc"></audio> </div>',
  data: function data() {
    return {
      src: "./mp3/bgm.mp3",
      otherSrc: ["./mp3/turtle.mp3", "./mp3/beard.mp3", "./mp3/bird.mp3", "./mp3/cow.mp3", "./mp3/panda.mp3"],
      playing: false,
      stoped: false,
      iconPlay: "http://image.giccoo.com/projects/libs/img/audio-stop.png",
      iconStop: "http://image.giccoo.com/projects/libs/img/audio-play.png"
    };
  },
  props: {
    autoplay: {
      default: true
    }
  },
  methods: {
    pauseAll: function pauseAll() {
      var k, ref, results;
      results = [];
      for (i = k = 0, ref = this.otherSrc.length; 0 <= ref ? k < ref : k > ref; i = 0 <= ref ? ++k : --k) {
        results.push(document.getElementById("music" + i).pause());
      }
      return results;
    },
    playOther: function playOther(url) {
      var k, ref, results;
      // @audio.currentTime = time
      this.audio.pause();
      results = [];
      for (i = k = 0, ref = this.otherSrc.length; 0 <= ref ? k < ref : k > ref; i = 0 <= ref ? ++k : --k) {
        if (this.otherSrc.indexOf(url) === i) {
          results.push(document.getElementById("music" + i).play());
        } else {
          results.push(document.getElementById("music" + i).pause());
        }
      }
      return results;
    },
    reset: function reset() {
      if (!this.stoped) {
        this.audio.play();
        return this.pauseAll();
      }
    },
    // @audioOther.pause()
    play: function play() {
      return this.playing = true;
    },
    pause: function pause() {
      return this.playing = false;
    },
    otherend: function otherend() {
      if (!this.stoped) {
        return this.audio.play();
      }
    },
    change: function change() {
      if (this.playing) {
        this.audio.pause();
        this.stoped = true;
      } else {
        this.audio.play();
        this.stoped = false;
      }
      return this.pauseAll();
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
    var k, ref;
    this.audio = this.$el.children[1];
    // @audioOther = @$el.children[2]
    this.audio.addEventListener("pause", this.pause.bind(this));
    this.audio.addEventListener("play", this.play.bind(this));
    for (i = k = 0, ref = this.otherSrc.length; 0 <= ref ? k < ref : k > ref; i = 0 <= ref ? ++k : --k) {
      document.getElementById("music" + i).addEventListener("ended", this.otherend.bind(this));
    }
    return this.audio.play();
  }
});

// console.log @audio,@audioOther,@playing

// @codekit-prepend "coffee/css3Prefix"
// @codekit-prepend "./player.coffee"
_CDN = "http://image.giccoo.com/projects/friso-island/";

_CDN = "./";

planets = {};

planetsList = {};

planetinfopage = {};

planetlastpage = {};

planetstars = {};

planetInfo = {
  "planet-1": {
    url: "./mp3/turtle.mp3",
    question: "「乌龟脱了衣服之后会不会跑快一点？」",
    answers: [{
      author: "@落夏",
      avatar: "avatar-6.jpg",
      answer: "小乌龟脱了衣服会害羞的，所以我们还是不要为难它吧。"
    }, {
      author: "@sherry",
      avatar: "avatar-7.jpg",
      answer: "我去问过乌龟，他告诉我他没试过脱衣服，现在正在联系鳖，让鳖先试试"
    }, {
      author: "@潜心",
      avatar: "avatar-8.jpg",
      answer: "会的，小乌龟脱了壳身体光光会害羞，害羞捂着脸一溜烟儿就跑啦。"
    }, {
      author: "@小天的铠甲",
      avatar: "avatar-1.jpg",
      answer: "其实乌龟如果从小就不穿衣服，那他就会变成蜥蜴，跑的很快。如果长大了才意识到这个问题，那可以进行训练，变成忍者神龟，跑的很快。"
    }, {
      author: "@皇家美素佳儿",
      avatar: "avatar-0.jpg",
      answer: "小乌龟跑得慢，可它依然坚持跑完比赛。而皇家美素佳儿菲仕兰牧场创始于 1871年，具有已有140年悠久历史，新鲜直取皇家第一道奶源，坚持百年皇家品质。"
    }]
  },
  "planet-2": {
    url: "./mp3/beard.mp3",
    question: "「为什么喝完牛奶会有白胡子？」",
    answers: [{
      author: "@左左",
      avatar: "avatar-14.jpg",
      answer: "因为牛奶亲了你一下吖"
    }, {
      author: "@丁丁历险记",
      avatar: "avatar-15.jpg",
      answer: "孩子的每个天真问题，都值得被认真回答：那是牛奶，不是胡子！"
    }, {
      author: "@文妈Ellie",
      avatar: "avatar-16.jpg",
      answer: "因为你皮肤上细细的汗毛，也喜欢喝奶啊。"
    }, {
      author: "@植鹤",
      avatar: "avatar-17.jpg",
      answer: "哇哇哇，这好可爱。因为啊，就像爸爸喝咖啡会长黑胡子一样，小朋友不要喝可乐和咖啡哦"
    }, {
      author: "@皇家美素佳儿",
      avatar: "avatar-0.jpg",
      answer: "小小的白胡子是牛奶中的营养精华的天然乳脂，它比水分子有更强的吸附力，沾在嘴边就变成宝宝的小白胡子啦。皇家美素佳儿奶粉保留了牛奶中的这一道天然营养精华，所以宝宝喝的时候一定要舔干净哟。"
    }]
  },
  // {author:"@",avatar:".jpg",answer:""}
  "planet-3": {
    url: "./mp3/bird.mp3",
    question: "「小鸟怎么才能和小鱼成为朋友呢？」",
    answers: [{
      author: "@郭小野",
      avatar: "avatar-18.jpg",
      answer: "合体变身成「 飞鱼」，瞬间成为形影不离的好朋友。"
    }, {
      author: "@常住锁妖塔",
      avatar: "avatar-19.jpg",
      answer: "小鸟可以带着小鱼飞，去看天上的云彩啊。小鱼可以带着小鸟去看海底的海藻呢。(^V^)"
    }, {
      author: "@举栗子的松鼠",
      avatar: "avatar-20.jpg",
      answer: "小鸟只要对着小鱼缸\"啾\"一下，他们就成为朋友了哦，就像这样 [轻轻的啾一下宝贝]"
    }, {
      author: "@陈小洁",
      avatar: "avatar-21.jpg",
      answer: "海鸟跟鱼相爱，只是一场意外。"
    }, {
      author: "@皇家美素佳儿",
      avatar: "avatar-0.jpg",
      legal: true,
      answer: "小鸟可以陪小鱼看天上的云彩，小鱼可以带小鸟畅游海面。皇家美素佳儿新鲜直取皇家第一道奶源*，凝萃1:25**天然营养精华，和妈妈一起为北鼻找到大自然中滋养生命的奥秘，陪伴北鼻上天入地，一同成长。"
    }]
  },
  "planet-4": {
    url: "./mp3/cow.mp3",
    question: "「为什么小牛冬天不穿衣服也不会感冒呢？」",
    answers: [{
      author: "@Bonita是少女啊",
      avatar: "avatar-10.jpg",
      answer: "因为牛皮厚呀，吹不冻（动）呀"
    }, {
      author: "@之乎者也",
      avatar: "avatar-11.jpg",
      answer: "一.小牛会感冒，也怕冷，它会直打哆嗦。二.牛身上有毛，皮也比人类厚，相当于小孩穿毛衣了。"
    }, {
      author: "@农夫三拳",
      avatar: "avatar-12.jpg",
      answer: "因为小牛是喝牛奶长大的，小朋友也要多喝牛奶才能像小牛一样不生病。"
    }, {
      author: "@红岩魂",
      avatar: "avatar-13.jpg",
      answer: "因为牛皮厚，吹不冻呀。正儿八经滴说，奶牛平均体温是38.6 ℃左右，比人高一丢丢。在-15～40 ℃内的天里，它们的体温不会忽高忽低，而是保持恒定。小牛的临界温度低，比较能耐寒。所以在冬天里，小牛不穿衣服也不会怕冷。对啦，小牛从小喝奶牛妈妈的奶，提升耐寒能力。有爱的力量在，小牛一点也不冷。"
    }, {
      author: "@皇家美素佳儿",
      avatar: "avatar-0.jpg",
      answer: "荷兰菲仕兰自家牧场，那里的农夫对待小牛就像亲人一样。农夫会用手指给小牛练习吮吸能力，锻炼身体，让小牛更好地喝牛妈妈的奶。牛奶是奶牛妈妈对小牛的爱，让小牛不畏寒冷；皇家美素佳儿延续母爱的力量，为宝宝增强免疫力，守护宝宝身体棒棒。即便如此，宝宝冬天也一定要穿衣服保暖哦～"
    }]
  },
  "planet-5": {
    url: "./mp3/panda.mp3",
    question: "「大熊猫是用竹子在刷牙吗？」",
    answers: [{
      author: "@程泉",
      avatar: "avatar-1.jpg",
      answer: "熊猫爱吃竹子，但竹子刺多，总有些不乖的，卡在牙齿缝，所以要用竹子剔牙，就像你爱吃糖，可总有糖黏在牙齿上，所以要用糖把牙齿上的糖黏下来。不过呢，糖对牙齿有害，吃完记得刷牙哦。"
    }, {
      author: "@田月霞",
      avatar: "avatar-2.jpg",
      answer: "我们大熊猫是在吃竹子哦，因为竹子长得非常快，所以大熊猫可以吃很多很多的竹子。竹子里有糖、蛋白质，大熊猫会挑选不同类型的竹子吃，有的会挑便于消化排泄的竹子。而且大熊猫是会吃竹笋的！"
    }, {
      author: "@carl",
      avatar: "avatar-3.jpg",
      answer: "小宝宝，咱们哪个周末一起去动物园看看大熊猫，到底在用竹子干嘛，是吃竹子，还是在用竹子剔牙。"
    }, {
      author: "@冬霁",
      avatar: "avatar-4.jpg",
      answer: "大熊猫是在吃竹子，但是如果吃了竹子一不小心塞牙了，没准也会用竹子剔牙了吧。脑补，卖萌的大熊猫剔牙场景"
    }, {
      author: "@小风吹散大树叶",
      avatar: "avatar-5.jpg",
      answer: "只有牙齿不好的宝宝才会剔牙喔，所以你平时要好好刷牙，这样就不会塞牙了，熊猫宝宝也是这样的。熊猫宝宝用竹子剔牙可能是平时没有听熊猫妈妈的话好好刷牙。"
    }, {
      author: "@皇家美素佳儿",
      avatar: "avatar-0.jpg",
      legal: true,
      answer: "每一位宝宝在妈妈的心中都是萌萌的「大熊猫」，心头的「国宝」。皇家美素佳儿新鲜直取皇家第一道奶源*，凝萃1:25**天然营养精华，因珍稀而珍贵，助力宝宝多方位成长。"
    }]
  }
};

planetOpenList = [];

load = {};

fisrtPage = {};

lastPageShow = false;

createTimeWait = 1200; //对话创建时间间隔.

shareContent = {
  title: "知乎北鼻版-天真星球",
  desc: "快准备好知识，一起探索这个星球，穿越孩次元！",
  link: "http://m.giccoo.com/friso-island/",
  imgUrl: "http://m.giccoo.com/friso-island/img/share.jpg",
  success: function success() {},
  cancel: function cancel() {}
};

defaultY = 700;

markers = [{
  id: "balloon-1",
  x: 840 * 0,
  y: defaultY + 100,
  html: '<div class="planet-balloon-small balloon-1"><img src="' + _CDN + 'img/balloon-small.png"/></div>'
}, {
  id: "balloon-2",
  x: 840 * 1,
  y: defaultY + 200,
  html: '<div class="planet-balloon-small balloon-2"><img src="' + _CDN + 'img/balloon-small.png"/></div>'
}, {
  id: "balloon-3",
  x: 840 * 2.2,
  y: defaultY + 50,
  html: '<div class="planet-balloon-big balloon-3"><img src="' + _CDN + 'img/balloon-big.png"/></div>'
}, {
  id: "balloon-4",
  x: 840 * 3.9,
  y: defaultY + 400,
  html: '<div class="planet-balloon-small balloon-4"><img src="' + _CDN + 'img/balloon-small.png"/></div>'
}, {
  id: "balloon-5",
  x: 840 * 4.6,
  y: defaultY + 40,
  html: '<div class="planet-balloon-small balloon-5"><img src="' + _CDN + 'img/balloon-small.png"/></div>'
}, {
  id: "balloon-6",
  x: 840 * 5.4,
  y: defaultY + 140,
  html: '<div class="planet-balloon-big balloon-6"><img src="' + _CDN + 'img/balloon-big.png"/></div>'
}, {
  id: "balloon-7",
  x: 840 * 5.4 - 220,
  y: defaultY + 20,
  html: '<div class="planet-balloon-small balloon-7"><img src="' + _CDN + 'img/balloon-small.png"/></div>'
}, {
  id: "balloon-8",
  x: 840 * 4.6 - 120,
  y: defaultY + 140,
  html: '<div class="planet-balloon-big balloon-8"><img src="' + _CDN + 'img/balloon-big.png"/></div>'
}, {
  id: "balloon-9",
  x: 840 * 3.9 - 120,
  y: defaultY + 500,
  html: '<div class="planet-balloon-big balloon-9"><img src="' + _CDN + 'img/balloon-big.png"/></div>'
}, {
  id: "balloon-10",
  x: 840 * 2.2 - 220,
  y: defaultY + 150,
  html: '<div class="planet-balloon-small balloon-10"><img src="' + _CDN + 'img/balloon-small.png"/></div>'
}, {
  id: "balloon-11",
  x: 840 * 1 - 190,
  y: defaultY + 100,
  html: '<div class="planet-balloon-big balloon-11"><img src="' + _CDN + 'img/balloon-big.png"/></div>'
}, {
  id: "balloon-12",
  x: 840 * 0 + 170,
  y: defaultY + 200,
  html: '<div class="planet-balloon-big balloon-12"><img src="' + _CDN + 'img/balloon-big.png"/></div>'
}];

// for balloon
// for i in [0...5]
// 	bs = if Math.random()>0.5 then "big" else "small"
// 	ds = if bs is "big" then "small" else "big"
// 	markers.push 
// 		id: "balloon-"+(13+i)
// 		x: (5000/i)
// 		y: defaultY-parseInt (Math.random()*300)
// 		html: '<div class="planet-balloon-'+bs+' balloon-'+(12+i)+'"><img src="'+_CDN+'img/balloon-'+bs+'.png"/></div>'
// 	markers.push 
// 		id: "balloon-"+(13*2+i)
// 		x: (4700/i)
// 		y: 1500-parseInt (Math.random()*400)
// 		html: '<div class="planet-balloon-'+ds+' balloon-'+(12*2+i)+'"><img src="'+_CDN+'img/balloon-'+ds+'.png"/></div>'
for (i = k = 0; k < 20; i = ++k) {
  markers.push({
    id: "bird-" + i,
    x: 500 * (i % 10) - Math.random() * 400 + 100,
    y: defaultY + 400 * (i % 2) + parseInt(Math.random() * 200),
    html: '<div class="bird bird-' + i + '"></div>'
  });
}

markers = markers.concat([{
  id: "planet-1",
  x: 0,
  y: defaultY + 380,
  html: '<div id="planet-1" class="planet planet-1"><div class="cloud"><img src="' + _CDN + 'img/cloud-1.png" /></div><div class="cloud2"><img src="' + _CDN + 'img/cloud-2.png" /></div><div class="music-symbol"><img src="' + _CDN + 'img/music1.png" /></div><div class="music-symbol small"><img src="' + _CDN + 'img/music2.png" /></div><div class="music-symbol large"><img src="' + _CDN + 'img/music1.png" /></div><div class="music-symbol medium"><img src="' + _CDN + 'img/music2.png" /></div><div class="msg-note note-1"><div class="message"><p>哎，兔子又来找我赛跑</p></div></div><div class="msg-note note-2"><div class="message"><p>这次你脱了衣服试试</p></div></div><div v-if="overreaded" class="planet-medal animated fadeIn duration-10"><img src="' + _CDN + 'img/planet-medal.png" /></div><img src="' + _CDN + 'img/planet-1.png" /></div>'
}, {
  id: "planet-2",
  x: 500,
  y: defaultY + 200,
  html: '<div id="planet-2" class="planet planet-2"><div class="cloud"><img src="' + _CDN + 'img/cloud-1.png" /></div><div class="cloud2"><img src="' + _CDN + 'img/cloud-2.png" /></div><div class="music-symbol"><img src="' + _CDN + 'img/music1.png" /></div><div class="music-symbol small"><img src="' + _CDN + 'img/music2.png" /></div><div class="music-symbol large"><img src="' + _CDN + 'img/music1.png" /></div><div class="music-symbol medium"><img src="' + _CDN + 'img/music2.png" /></div><div class="msg-note note-1"><div class="message"><p>喝完牛奶长白胡子啦</p></div></div><div class="msg-note note-2"><div class="message"><p>奶牛偷偷亲了你一下吖</p></div></div><div v-if="overreaded" class="planet-medal animated fadeIn duration-10"><img src="' + _CDN + 'img/planet-medal.png" /></div><img src="' + _CDN + 'img/planet-2.png" /></div>'
}, {
  id: "planet-3",
  x: 1000,
  y: defaultY + 300,
  html: '<div id="planet-3" class="planet planet-3"><div class="cloud"><img src="' + _CDN + 'img/cloud-1.png" /></div><div class="cloud2"><img src="' + _CDN + 'img/cloud-2.png" /></div><div class="music-symbol"><img src="' + _CDN + 'img/music1.png" /></div><div class="music-symbol small"><img src="' + _CDN + 'img/music2.png" /></div><div class="music-symbol large"><img src="' + _CDN + 'img/music1.png" /></div><div class="music-symbol medium"><img src="' + _CDN + 'img/music2.png" /></div><div class="msg-note note-1"><div class="message"><p>小鸟，我想跟你一起玩</p></div></div><div class="msg-note note-2"><div class="message"><p>那你能先学会飞吗？</p></div></div><div v-if="overreaded" class="planet-medal animated fadeIn duration-10"><img src="' + _CDN + 'img/planet-medal.png" /></div><img src="' + _CDN + 'img/planet-3.png" /></div>'
}, {
  id: "planet-4",
  x: 1500,
  y: defaultY + 360,
  html: '<div id="planet-4" class="planet planet-4"><div class="cloud"><img src="' + _CDN + 'img/cloud-1.png" /></div><div class="cloud2"><img src="' + _CDN + 'img/cloud-2.png" /></div><div class="music-symbol"><img src="' + _CDN + 'img/music1.png" /></div><div class="music-symbol small"><img src="' + _CDN + 'img/music2.png" /></div><div class="music-symbol large"><img src="' + _CDN + 'img/music1.png" /></div><div class="music-symbol medium"><img src="' + _CDN + 'img/music2.png" /></div><div class="msg-note note-1"><div class="message"><p>哇，下❄️了</p></div></div><div class="msg-note note-2"><div class="message"><p>来首freestyle吧，哞～</p></div></div><div v-if="overreaded" class="planet-medal animated fadeIn duration-10"><img src="' + _CDN + 'img/planet-medal.png" /></div><img src="' + _CDN + 'img/planet-4.png" /></div>'
}, {
  id: "planet-5",
  x: 2000,
  y: defaultY + 260,
  html: '<div id="planet-5" class="planet planet-5"><div class="cloud"><img src="' + _CDN + 'img/cloud-1.png" /></div><div class="cloud2"><img src="' + _CDN + 'img/cloud-2.png" /></div><div class="music-symbol"><img src="' + _CDN + 'img/music1.png" /></div><div class="music-symbol small"><img src="' + _CDN + 'img/music2.png" /></div><div class="music-symbol large"><img src="' + _CDN + 'img/music1.png" /></div><div class="music-symbol medium"><img src="' + _CDN + 'img/music2.png" /></div><div class="msg-note note-1"><div class="message"><p>竹子好好吃</p></div></div><div class="msg-note note-2"><div class="message"><p>牙口棒，吃嘛嘛香</p></div></div><div v-if="overreaded" class="planet-medal animated fadeIn duration-10"><img src="' + _CDN + 'img/planet-medal.png" /></div><img src="' + _CDN + 'img/planet-5.png" /></div>'
}, {
  id: "planet-10",
  x: 2500,
  y: defaultY + 380,
  html: '<div id="planet-10" class="planet planet-1"><div class="cloud"><img src="' + _CDN + 'img/cloud-1.png" /></div><div class="cloud2"><img src="' + _CDN + 'img/cloud-2.png" /></div><div class="music-symbol"><img src="' + _CDN + 'img/music1.png" /></div><div class="music-symbol small"><img src="' + _CDN + 'img/music2.png" /></div><div class="music-symbol large"><img src="' + _CDN + 'img/music1.png" /></div><div class="music-symbol medium"><img src="' + _CDN + 'img/music2.png" /></div><div class="msg-note note-1"><div class="message"><p>哎，兔子又来找我赛跑</p></div></div><div class="msg-note note-2"><div class="message"><p>这次你脱了衣服试试</p></div></div><div v-if="overreaded" class="planet-medal animated fadeIn duration-10"><img src="' + _CDN + 'img/planet-medal.png" /></div><img src="' + _CDN + 'img/planet-1.png" /></div>'
}, {
  id: "planet-20",
  x: 3000,
  y: defaultY + 200,
  html: '<div id="planet-20" class="planet planet-2"><div class="cloud"><img src="' + _CDN + 'img/cloud-1.png" /></div><div class="cloud2"><img src="' + _CDN + 'img/cloud-2.png" /></div><div class="music-symbol"><img src="' + _CDN + 'img/music1.png" /></div><div class="music-symbol small"><img src="' + _CDN + 'img/music2.png" /></div><div class="music-symbol large"><img src="' + _CDN + 'img/music1.png" /></div><div class="music-symbol medium"><img src="' + _CDN + 'img/music2.png" /></div><div class="msg-note note-1"><div class="message"><p>喝完牛奶长白胡子啦</p></div></div><div class="msg-note note-2"><div class="message"><p>奶牛偷偷亲了你一下吖</p></div></div><div v-if="overreaded" class="planet-medal animated fadeIn duration-10"><img src="' + _CDN + 'img/planet-medal.png" /></div><img src="' + _CDN + 'img/planet-2.png" /></div>'
}, {
  id: "planet-30",
  x: 3500,
  y: defaultY + 300,
  html: '<div id="planet-30" class="planet planet-3"><div class="cloud"><img src="' + _CDN + 'img/cloud-1.png" /></div><div class="cloud2"><img src="' + _CDN + 'img/cloud-2.png" /></div><div class="music-symbol"><img src="' + _CDN + 'img/music1.png" /></div><div class="music-symbol small"><img src="' + _CDN + 'img/music2.png" /></div><div class="music-symbol large"><img src="' + _CDN + 'img/music1.png" /></div><div class="music-symbol medium"><img src="' + _CDN + 'img/music2.png" /></div><div class="msg-note note-1"><div class="message"><p>小鸟，我想跟你一起玩</p></div></div><div class="msg-note note-2"><div class="message"><p>那你能先学会飞吗？</p></div></div><div v-if="overreaded" class="planet-medal animated fadeIn duration-10"><img src="' + _CDN + 'img/planet-medal.png" /></div><img src="' + _CDN + 'img/planet-3.png" /></div>'
}, {
  id: "planet-40",
  x: 4000,
  y: defaultY + 360,
  html: '<div id="planet-40" class="planet planet-4"><div class="cloud"><img src="' + _CDN + 'img/cloud-1.png" /></div><div class="cloud2"><img src="' + _CDN + 'img/cloud-2.png" /></div><div class="music-symbol"><img src="' + _CDN + 'img/music1.png" /></div><div class="music-symbol small"><img src="' + _CDN + 'img/music2.png" /></div><div class="music-symbol large"><img src="' + _CDN + 'img/music1.png" /></div><div class="music-symbol medium"><img src="' + _CDN + 'img/music2.png" /></div><div class="msg-note note-1"><div class="message"><p>哇，下❄️了</p></div></div><div class="msg-note note-2"><div class="message"><p>来首freestyle吧，哞～</p></div></div><div v-if="overreaded" class="planet-medal animated fadeIn duration-10"><img src="' + _CDN + 'img/planet-medal.png" /></div><img src="' + _CDN + 'img/planet-4.png" /></div>'
}, {
  id: "planet-50",
  x: 4500,
  y: defaultY + 260,
  html: '<div id="planet-50" class="planet planet-5"><div class="cloud"><img src="' + _CDN + 'img/cloud-1.png" /></div><div class="cloud2"><img src="' + _CDN + 'img/cloud-2.png" /></div><div class="music-symbol"><img src="' + _CDN + 'img/music1.png" /></div><div class="music-symbol small"><img src="' + _CDN + 'img/music2.png" /></div><div class="music-symbol large"><img src="' + _CDN + 'img/music1.png" /></div><div class="music-symbol medium"><img src="' + _CDN + 'img/music2.png" /></div><div class="msg-note note-1"><div class="message"><p>竹子好好吃</p></div></div><div class="msg-note note-2"><div class="message"><p>牙口棒，吃嘛嘛香</p></div></div><div v-if="overreaded" class="planet-medal animated fadeIn duration-10"><img src="' + _CDN + 'img/planet-medal.png" /></div><img src="' + _CDN + 'img/planet-5.png" /></div>'
}]);

window.onload = function () {
  // initPlanets()
  // initVuePlanetInfoPage()
  // alert document.getElementsByTagName("body")[0].offsetHeight
  load = new Vue({
    el: "#load",
    data: {
      loadend: false
    }
  });
  planetstars = new Vue({
    el: "#navbar",
    data: {
      stars: [false, false, false, false, false],
      show: false,
      bgm: false
    },
    methods: {
      backNormal: function backNormal() {
        if (planetinfopage.opened) {
          return false;
        }
        if (planets !== {} && planets.stopGyroscopeControl != null) {
          planets.stopGyroscopeControl();
        }
        if (planets !== {} && planets.stopGyroscopeControl != null) {
          planets.startAutorotate();
        }
        if (planetinfopage.shownote != null) {
          planetinfopage.shownote = true;
          return planetinfopage.opendG = false;
        }
      }
    },
    mounted: function mounted() {}
  });
  // console.log "navbar end:",planetstars.$children[0].playing
  fisrtPage = new Vue({
    el: "#page-one",
    data: {
      notShowTime: true,
      info: [],
      texts: ["人类世界即将迎来新年的欢聚", "当然少不了宝宝们的戏份", "他们脑洞大开的十万个为什么", "你，准备好见招拆招了吗？", "&nbsp;", "在孩次元的宇宙中", "每一个天真星球", "有一群知识渊博的公民", "讨论着一个脑洞大开的天真提问", "&nbsp;", "即刻开始唤醒知识", "与皇家美素佳儿一起", "进入孩次元的宇宙", "探索天真星球"],
      mytimeout: null,
      overhide: true,
      animate: false
    },
    methods: {
      runMessage: function runMessage(i) {
        var _this = this;

        clearTimeout(this.mytimeout);
        if (i >= this.texts.length) {
          this.overhide = false;
          return false;
        }
        this.info.push(true);
        i++;
        return this.mytimeout = setTimeout(function () {
          _this.runMessage(i);
          return _this.autoScroll();
        }, 600);
      },
      autoScroll: function autoScroll() {
        var dom;
        dom = document.getElementById("textcontent");
        if (dom.scrollHeight < dom.offsetHeight) {
          return false;
        }
        return createjs.Tween.get(dom).wait(100).to({
          scrollTop: dom.scrollHeight
        }, 400, createjs.Ease.linear);
      },
      getStart: function getStart() {
        this.notShowTime = true;
        planetstars.show = true;
        planetstars.bgm = true;
        planetstars.$children[0].audio.play();
        // initPlanets()
        return initVuePlanetInfoPage();
      }
    },
    created: function created() {
      var _this2 = this;

      console.log("created. ready to animation");
      load.loadend = true;
      this.notShowTime = false;
      // @runMessage(0)
      document.getElementById("main").style.display = "block";
      return setTimeout(function () {
        return _this2.animate = true;
      }, 10);
    }
  });
  document.addEventListener("WeixinJSBridgeReady", function () {
    return planetstars.$children[0].audio.play();
  }, false);
  if (typeof wx !== "undefined" && wx !== null) {
    wx.ready(function () {
      wx.onMenuShareTimeline(shareContent);
      wx.onMenuShareAppMessage(shareContent);
      wx.onMenuShareQQ(shareContent);
      return wx.onMenuShareWeibo(shareContent);
    });
    return loadWechatConfig();
  }
};

loadedAll = function loadedAll() {
  return initVuePlanetInfoPage();
};

initVuePlanetInfoPage = function initVuePlanetInfoPage() {
  planetinfopage = new Vue({
    el: "#planet-page",
    data: {
      show: true,
      planetName: "planet-1",
      planet: planetInfo["planet-1"],
      info: [],
      openlist: planetOpenList,
      opened: false,
      shownote: false,
      shownotetext: true,
      opendG: false,
      moving: false,
      showstar: true,
      blur: false,
      cacheTimeout: {}
    },
    methods: {
      answersScroll: function answersScroll() {
        var dom;
        dom = document.getElementById("answers");
        if (dom.scrollHeight < dom.offsetHeight) {
          return false;
        }
        return createjs.Tween.get(dom).wait(100).to({
          scrollTop: dom.scrollHeight
        }, 400, createjs.Ease.linear);
      },
      keepgoing: function keepgoing() {
        this.opened = false;
        this.shownotetext = true;
        planetstars.$children[0].reset();
        planets.startGyroscopeControl();
        console.log("start");
        if (lastPageShow) {
          console.log("open last page");
          this.shownote = false;
          this.blur = true;
          planetstars.show = false;
          planets.stopGyroscopeControl();
          planets.startAutorotate();
          planetlastpage.opened = true;
          return true;
        }
        console.log(this.opendG, this.shownote);
        if (!this.opendG) {
          this.shownote = true;
          return planets.startAutorotate();
        }
      },
      startG: function startG() {
        this.shownote = false;
        this.opendG = true;
        return planets.startGyroscopeControl();
      },
      runMessage: function runMessage(i) {
        var _this3 = this;

        var n;
        if (!this.opened || i > this.planet.answers.length - 1) {
          this.moving = false;
          return false;
        }
        this.moving = true;
        n = i + 1;
        return this.cacheTimeout = setTimeout(function () {
          _this3.info.push(true);
          if (n > 1) {
            _this3.answersScroll();
          }
          return _this3.runMessage(n);
        }, createTimeWait);
      }
    },
    watch: {
      opened: function opened(val) {
        var _this4 = this;

        var self;
        if (val) {
          if (!planetsList[this.planetName].overreaded) {
            planetsList[this.planetName].overreaded = true;
            planetsList["planet-" + parseInt(this.planetName.replace("planet-", "")) * 10].overreaded = true;
            planetOpenList.push(true);
            setAstarLight();
          } else {
            this.showstar = false;
          }
          self = this;
          this.runMessage(0);
          return planets.stopGyroscopeControl();
        } else {
          clearTimeout(this.cacheTimeout);
          return setTimeout(function () {
            return _this4.info = [];
          }, 300);
        }
      }
    },
    mounted: function mounted() {
      return initPlanets();
    }
  });
  return planetlastpage = new Vue({
    el: "#planet-last-page",
    data: {
      opened: false
    }
  });
};

initVuePlanetsMedal = function initVuePlanetsMedal() {
  var l, results;
  console.log("init vue");
  results = [];
  for (i = l = 1; l < 6; i = ++l) {
    planetsList['planet-' + i] = new Vue({
      el: '#planet-' + i,
      data: {
        overreaded: false
      }
    });
    results.push(planetsList['planet-' + i * 10] = new Vue({
      el: '#planet-' + i * 10,
      data: {
        overreaded: false
      }
    }));
  }
  return results;
};

initPlanets = function initPlanets() {
  var e;
  try {
    planets = new PhotoSphereViewer({
      panorama: _CDN + "img/planet-bg.jpg",
      container: document.getElementById("planets"),
      // loading_html: '<div class="planet-loading ball-spin-fade-loader"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>'
      loading_txt: '加载中...',
      // fisheye: true
      gyroscope: true,
      time_anim: 0,
      latitude_range: [-3 * Math.PI / 12, 3 * Math.PI / 12],
      default_fov: 50,
      navbar: false,
      // [
      // 	"gyroscope"
      // 	{
      // 		id: 'my-button',
      // 		title: 'Hello world',
      // 		className: 'custom-button',
      // 		content: 'Custom',
      // 		onClick: ->
      // 			alert('Hello from custom button')
      // 	}
      // ]
      markers: markers
    });
    planets.on("ready", function () {
      console.log("ready");
      planetinfopage.shownote = true;
      // planets.startGyroscopeControl()
      return initVuePlanetsMedal();
    });
    // setTimeout ->
    // 	planets.startGyroscopeControl()
    // ,1000
    planets.on("select-marker", function (marker) {
      var id;
      console.log("id: ", marker.id);
      if (marker.id.indexOf("planet-") >= 0) {
        id = parseInt(marker.id.replace("planet-", ""));
        console.log(id, marker.id);
        id = id > 5 ? id / 10 : id;
        planetinfopage.planetName = "planet-" + id;
        planetinfopage.planet = planetInfo["planet-" + id];
        planetinfopage.showstar = true;
        planetinfopage.shownotetext = false;
        planetinfopage.opened = true;
        planetinfopage.shownote = false;
        return planetstars.$children[0].playOther(planetInfo["planet-" + id].url);
      }
    });
  } catch (error) {

    // longitude_range: [-3*Math.PI/4, 3*Math.PI/4]
    e = error;
    console.log("error:", e);
    planets = document.getElementById("planets");
    planets.innerHTML = "<div class='sorryContent'><div class='text'>很抱歉您的浏览器或手机系统版本过低,请升级到支持 WebGL 的版本后浏览.</div></div>";
  }

  // alert window.DeviceOrientationEvent
  // alert Sphoords.isDeviceOrientationSupported
  // planets.on 'ready', ->
  // 	planets.toggleDeviceOrientation()
  return console.log(document.getElementById("planets"));
};

setAstarLight = function setAstarLight() {
  var item, l, len1, m, n, ref, ref1, run;
  for (i = l = 0, ref = planetstars.stars.length; 0 <= ref ? l < ref : l > ref; i = 0 <= ref ? ++l : --l) {
    n = planetstars.stars.length - 1 - i;
    console.log(n, planetstars.stars.length - 1, n > 0);
    if (!planetstars.stars[n]) {
      Vue.set(planetstars.stars, n, true);
      break;
    }
  }
  run = true;
  ref1 = planetstars.stars;
  for (m = 0, len1 = ref1.length; m < len1; m++) {
    item = ref1[m];
    if (!item) {
      run = false;
      break;
    }
  }
  if (run) {
    console.log("You have all stars");
    return lastPageShow = true;
  }
};

jsList = ["min/three.min.js", "min/tweenjs.min.js", "min/D.min.js", "min/doT.min.js", "min/uevent.min.js", "min/photo-sphere-viewer.min.js", "Three.DeviceOrientationControls.js"];

listLoaded = 0;

_loadAllScript = function loadAllScript() {
  var i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

  var s, script;
  script = document.createElement("script");
  script.src = "/libs/js/" + jsList[i];
  script.onload = function () {
    if (jsList[i + 1] != null) {
      _loadAllScript(i + 1);
    }
    listLoaded++;
    if (listLoaded >= jsList.length) {
      return loadedAll();
    }
  };
  s = document.getElementsByTagName("script")[0];
  return s.parentNode.insertBefore(script, s);
};

// head = document.getElementsByTagName('head')[0]
// script = document.createElement('script')
// script.src = "/libs/js/"+list[i]
// head.appendChild(script)
loadWechatConfig = function loadWechatConfig() {
  var hm, s, url;
  url = encodeURIComponent(window.location.href.split("#")[0]);
  hm = document.createElement('script');
  hm.src = "http://api.giccoo.com/api/config?url=" + url;
  s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(hm, s);
};

// document.addEventListener 'DOMContentLoaded', ->
// 	audio = document.getElementById('bgm')
// 	audio.play()
// 	console.log "bgm play"
