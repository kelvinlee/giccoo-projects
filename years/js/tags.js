
riot.tag2('box', '<div class="box-content"> <div class="box-bg"><img src="./img/listpage-bg.jpg"><img src="./img/listpage-bg.png"></div> <div class="title"><img src="./img/listpage-title.png"></div> <div class="video-box"> <div class="bg"><img src="./img/video-box.png"></div> <video width="620" height="340" controls="true" type="video/mp4" riot-src="http://m.giccoo.com/years/video/video-{now+1}.mp4" poster="http://m.giccoo.com/years/img/video-p.jpg" webkit-playsinline playsinline></video> </div> <div class="slider-list"> <div each="{value,i in list}" onclick="{SelectList(i)}" class="type-item {on: parent.now==i,before: (parent.now-1)==i,after: (parent.now+1)==i,afters: (parent.now+1)&lt;i}"><img riot-src="./img/type-{i+1}.png"></div> <div onclick="{SliderMovePre}" class="left"><img src="./img/arrow.png"></div> <div onclick="{SliderMoveNext}" class="right"><img src="./img/arrow.png"></div> </div> <div class="points"> <div each="{value,i in list}" class="point {on: parent.now == i}">{i}</div> </div> <p class="note-text">以下排名不分先后</p> <div class="list"> <div each="{item in list[now].list}" class="item"> <div class="left-title"> <h3>{item.name} </h3> </div> <div class="right-btns"><a href="javascript:void(0)" onclick="{ShowInfo(item)}" class="btn-info">查看</a><a if="{!parent.voteds[item.code]}" href="javascript:void(0)" onclick="{Vote(item.code)}" class="btn-vote">投票</a><a if="{parent.voteds[item.code]}" href="javascript:void(0)" class="on btn-vote">投票</a></div> <p>{item.company}<span><em>{parent.votes[item.code]?parent.votes[item.code]:0}</em> 票</span></p> <div class="line"><img src="./img/line.png"></div> </div> </div> </div> <div class="pop fadeIn animated {hide: !popshow}"> <div onclick="{ClosePop}" class="close"><img src="./img/btn-close.png"></div> <div class="content"> <h1>{popContent.name}</h1> <p class="company">{popContent.company}</p> <slider myid="mainSlider" repeat="true" list="http://image.giccoo.com/projects/years/moreimg/101-1.jpg,http://image.giccoo.com/projects/years/moreimg/101-2.jpg,http://image.giccoo.com/projects/years/moreimg/101-3.jpg" class="sliders"></slider> <div class="line"><img src="./img/line.png"></div> <p class="piao"><span>{votes[popContent.code]?votes[popContent.code]:0} </span>票</p> <div class="vote-btns"><a if="{!voteds[popContent.code]}" href="javascript:void(0)" onclick="{Vote(popContent.code)}" class="btn-vote">投票</a><a if="{voteds[popContent.code]}" href="javascript:void(0)" class="on btn-vote">投票</a></div> <p class="subtitle">案例介绍:</p> <p>{popContent.introduce}</p> <p class="subtitle">案例亮点:</p> <p>{popContent.spot}</p> </div> </div>', '', 'class="box"', function(opts) {
var self;

self = this;

this.list = productsinfo;

this.now = 1;

this.popshow = false;

this.popContent = {};

this.votes = votes;

this.voteds = voteds;

this.SelectList = function(i) {
  return function() {
    self.now = i;
    return self.update();
  };
};

this.SliderMovePre = function() {
  this.now--;
  if (this.now <= 0) {
    this.now = 0;
  }
  return this.update();
};

this.SliderMoveNext = function() {
  this.now++;
  if (this.now >= this.list.length - 1) {
    this.now = this.list.length - 1;
  }
  return this.update();
};

this.Vote = function(id) {
  return function() {
    if (openid === "err") {
      SendNote("请使用微信打开后投票");
      return false;
    }
    return $.get("http://i.giccoo.com/years/vote/to/" + id, {
      openid: openid
    }, function(msg) {
      if (msg.recode === 200) {
        SendNote("投票成功啦!");
        self.voteds[id] = 1;
        if (self.votes[id]) {
          self.votes[id]++;
        } else {
          self.votes[id] = 1;
        }
        return self.update();
      } else {
        return SendNote(msg.reason);
      }
    });
  };
};

this.ShowInfo = function(info) {
  return function() {
    self.popshow = true;
    self.popContent = info;
    self.tags.slider.updateList("http://m.giccoo.com/years/moreimg/" + self.popContent.code + "-1.jpg,http://m.giccoo.com/years/moreimg/" + self.popContent.code + "-2.jpg,http://m.giccoo.com/years/moreimg/" + self.popContent.code + "-3.jpg");
    return self.update();
  };
};

this.ClosePop = function() {
  this.popshow = false;
  return this.update();
};
}, '{ }');

riot.tag2('loader', '<div class="loader-icon"> <div if="{type == \'ball\'}" class="loader-inner ball-spin-fade-loader"> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> </div> <div if="{type == \'pacman\'}" class="loader-inner pacman"> <div></div> <div></div> <div></div> <div></div> <div></div> </div> </div> <div if="{opts.title != \'\'}" class="loader-text">{opts.title}</div><yield></yield>', '', '', function(opts) {
var self;

self = this;

this.type = opts.type != null ? opts.type : "ball";

_loader[opts.id] = self;

$(this.root).addClass("loader fadeIn animated");

this.loadend = function() {
  $(self.root).removeClass("fadeIn animated");
  $(self.root).addClass("fadeOut animated");
  return setTimeout(function() {
    return self.unmount();
  }, 500);
};
}, '{ }');

riot.tag2('note', '<div class="note-box"> <div class="note-content {animated:true,fadeInUp:!close,fadeOutUp:close}"> <div class="note-text"> <div class="icon-form"><img src="http://disk.giccoo.com/projects/showman/img/icon-alert-note.png"></div> {title} </div> </div> </div>', '', '', function(opts) {
var self;

self = this;

this.title = opts.title;

this.close = false;

this.time = opts.time != null ? parseInt(opts.time) : 3000;

$(this.root).addClass("note");

this.on("mount", function() {
  setTimeout(function() {
    return self.unmount();
  }, self.time);
  return setTimeout(function() {
    self.close = true;
    return self.update();
  }, self.time - 500);
});
}, '{ }');

riot.tag2('slider', '<div riot-style="-webkit-transition-duration: {duration}s;transition-duration: {duration}s; -webkit-transform: translate3d({x}px,0,0); transform: translate3d({x}px,0,0);" class="slider"> <div each="{bgimg in list}" if="{repeat}" class="slide"> <div class="bg"><img riot-src="{bgimg.bg}"></div> </div> <div each="{bgimg in list}" if="{repeat}" class="slide"> <div class="bg"><img riot-src="{bgimg.bg}"></div> </div> <div each="{bgimg in list}" class="slide"> <div class="bg"><img riot-src="{bgimg.bg}"></div> </div> </div>', '', '', function(opts) {
var i, item, list, ref, self, slider, text;

self = this;

list = opts.list + '';

list = list.split(',');

text = opts.text + '';

text = text.split(',');

this.list = [];

for (item = i = 0, ref = list.length; 0 <= ref ? i < ref : i > ref; item = 0 <= ref ? ++i : --i) {
  this.list[item] = {
    bg: list[item],
    text: text[item]
  };
}

this.repeat = opts.repeat ? true : false;

this.duration = 0.2;

this.offset = {
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
};

this.slideNumber = 0;

this.x = 0;

this.y = 0;

this.Rx = 0;

this.Ry = 0;

this.Lx = 0;

this.Ly = 0;

slider = $('.slider', this.root);

this.moved = false;

if (opts.myid) {
  eval(opts.myid + ' = this');
}

if (this.repeat) {
  this.x = -this.list.length * this.offset.w;
}

this.updateList = function(list) {
  var j, ref1;
  console.log(list);
  list = list + '';
  list = list.split(',');
  self.list = [];
  for (item = j = 0, ref1 = list.length; 0 <= ref1 ? j < ref1 : j > ref1; item = 0 <= ref1 ? ++j : --j) {
    self.list[item] = {
      bg: list[item]
    };
  }
  return self.update();
};

this.moveLeft = function(evt) {
  this.moved = true;
  slider = $('.slider', this.root);
  this.offset.w = slider.width();
  this.slideNumber--;
  this.x = this.slideNumber * this.offset.w;
  if (this.repeat) {
    this.x -= this.list.length * this.offset.w;
  }
  this.duration = 0.2;
  return this.update();
};

this.moveRight = function(evt) {
  this.moved = true;
  slider = $('.slider', this.root);
  this.offset.w = slider.width();
  this.slideNumber++;
  this.x = this.slideNumber * this.offset.w;
  if (this.repeat) {
    this.x -= this.list.length * this.offset.w;
  }
  this.duration = 0.2;
  return this.update();
};

this.setSlideNumber = function(offset) {
  var round, slideNumber;
  if (this.moved) {
    round = offset ? (this.offset.deltaX < 0 ? 'ceil' : 'floor') : 'round';
    slideNumber = Math[round](this.x / (this.offset.scrollableArea / slider.find('.slide').length));
    slideNumber += offset;
    slideNumber = Math.min(slideNumber, 0);
    this.slideNumber = Math.max(-(slider.find('.slide').length - 1), slideNumber) % this.list.length;
    console.log(this.slideNumber);
    opts.callback && eval(opts.callback + '(' + this.slideNumber + ')');
  }
};

this.touchstart = function(evt) {
  var touch;
  touch = evt.touches[0];
  slider = $('.slider', this.root);
  this.duration = 0;
  this.moved = false;
  this.startTime = +(new Date);
  this.offset.w = slider.width();
  this.offset.x = touch.pageX;
  this.offset.y = touch.pageY;
  if (this.repeat && this.x === 0) {
    this.x = -this.list.length * this.offset.w;
  }
  this.offset.lastw = this.x;
  this.offset.lastSlide = -(this.list.length - 1);
  this.offset.scrollableArea = this.offset.w * slider.find('.slide').length;
  this.setSlideNumber(0);
  console.log('move start');
  return this.update();
};

this.touchmove = function(evt) {
  var pageX, touch;
  touch = evt.touches[0];
  this.offset.deltaX = touch.pageX - this.offset.x;
  pageX = touch.pageX;
  if (this.repeat) {
    this.x = this.offset.deltaX + this.offset.lastw;
  } else {
    this.x = this.offset.deltaX / this.offset.resistance + this.offset.lastw;
    this.offset.resistance = this.slideNumber === 0 && this.offset.deltaX > 0 ? pageX / this.offset.w + 1.25 : this.slideNumber === this.offset.lastSlide && this.offset.deltaX < 0 ? (this.offset.w - Math.abs(pageX)) / this.offset.w + 1.25 : 1;
  }
  this.moved = true;
  evt.preventDefault();
  return this.update();
};

this.touchend = function(evt) {
  var oldslideNumber;
  console.log(this.moved);
  if (this.moved) {
    oldslideNumber = this.slideNumber;
    this.setSlideNumber(+(new Date) - this.startTime < 1000 && Math.abs(this.offset.deltaX) > 15 ? (this.offset.deltaX < 0 ? -1 : 1) : 0);
    this.x = this.slideNumber * this.offset.w;
    console.log('my number:', this.slideNumber, oldslideNumber);
    if (this.slideNumber === 0 && oldslideNumber === -(this.list.length - 1)) {
      this.x = (oldslideNumber - 1) * this.offset.w;
    }
    if (oldslideNumber === 0 && this.slideNumber === -(this.list.length - 1)) {
      this.x = 1 * this.offset.w;
    }
    if (this.repeat) {
      this.x -= this.list.length * this.offset.w;
    }
    this.duration = 0.2;
    this.update();
  }
  return this.moved = false;
};

this.transition = function(evt) {
  console.log(this.x, -(this.list.length * this.offset.w));
  if (this.x < -((this.list.length * 2 - 1) * this.offset.w)) {
    this.x = -this.list.length * this.offset.w;
    this.duration = 0;
    this.slideNumber = 0;
    this.update();
    opts.callback && eval(opts.callback + '(' + this.slideNumber + ')');
  }
  if (this.x > -(this.list.length * this.offset.w)) {
    this.x = -(this.list.length * 2 - 1) * this.offset.w;
    this.duration = 0;
    this.slideNumber = -(this.list.length - 1);
    this.update();
    opts.callback && eval(opts.callback + '(' + this.slideNumber + ')');
  }
};

this.on('mount', function() {
  var slide;
  slider = $(this.root);
  slider[0].addEventListener('touchstart', this.touchstart.bind(this));
  slider[0].addEventListener('touchmove', this.touchmove.bind(this));
  slider[0].addEventListener('touchend', this.touchend.bind(this));
  if (this.repeat) {
    slide = $('.slider', this.root);
    slide[0].addEventListener(TRANSITION_END_NAME, this.transition.bind(this));
    setTimeout(function() {
      self.offset.w = $(".pages").width();
      self.x = -self.list.length * self.offset.w;
      return self.update();
    }, 500);
  }
  return opts.end && opts.end(this);
});
}, '{ }');