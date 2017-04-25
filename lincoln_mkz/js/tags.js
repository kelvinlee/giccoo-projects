
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

riot.tag2('lottery', '<form onsubmit="{submit}"> <div class="form-grounp"> <label for="username">真实姓名</label> <input id="username" type="text" name="username"> </div> <div class="form-grounp"> <label for="mobile">手机号码</label> <input id="mobile" type="text" name="mobile"> </div> <div class="form-grounp"> <label for="adr">邮寄地址</label> <input id="adr" type="text" name="adr"> </div> <div class="form-btn"> <button type="submit" class="submit"><img src="img/submit-lottery.png"></button> </div> </form>', '', '', function(opts) {
var self;

self = this;

this.submit = function() {
  var data;
  data = $('form', this.root).serializeArray();
  if ($('[name=username]', this.root).val().length < 1 || $('[name=username]', this.root).val() === '') {
    alert('真实姓名不能为空');
    return false;
  }
  if ($('[name=mobile]', this.root).val().length < 1 || $('[name=mobile]', this.root).val() === '') {
    alert('手机号码不能为空');
    return false;
  }
  if ($('[name=adr]', this.root).val().length < 1 || $('[name=adr]', this.root).val() === '') {
    alert(' 联系地址不能为空');
    return false;
  }
  $.post(opts.action, data, function(msg) {
    if (msg.recode === 200) {
      eval(opts.callback + "()");
    } else {
      SendNote(msg.reason);
    }
  });
  return false;
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

riot.tag2('register', '<form onsubmit="{submit}" class="form"> <div class="form-grounp"> <label for="username">姓名</label> <input id="username" type="text" name="username"> </div> <div class="form-grounp"> <label for="">性别</label> <div class="comb"> <label for="man">先生</label> <input id="man" type="radio" name="sex" value="先生" checked> <label for="woman">女士</label> <input id="woman" type="radio" name="sex" value="女士"> </div> </div> <div class="form-grounp"> <label for="mobile">手机号码</label> <input id="mobile" type="text" name="mobile"> </div> <div class="form-grounp"> <label for="province">所在省/市</label> <div class="comb"> <div class="select"><span>{provinceName}</span> <select id="province" name="province" onchange="{changeProvince}"> <option each="{cityData}" value="{name}">{name}</option> </select> </div> <div class="select"><span>{cityName}</span> <select id="city" name="city" onchange="{changeCity}"> <option each="{city}" value="{name}">{name}</option> </select> </div> </div> </div> <div class="form-btn"> <button type="submit" class="submit"><img src="img/submit.png"></button> </div> </form>', '', '', function(opts) {
var city, dealer, name, province, self;

self = this;

this.changeCity = function(evt) {
  this.update();
};

this.changeProvince = function(evt) {
  var i, name;
  name = $('[name=province]', this.root).val();
  i = this.cityData.length - 1;
  while (i >= 0) {
    if (this.cityData[i].name === name) {
      this.city = this.cityData[i]['sub'];
      this.update();
      return true;
    }
    i--;
  }
  return true;
};

this.changeDealer = function(evt) {
  self.update();
};

this.changeBudget = function(evt) {
  var newName;
  newName = $('[name=budget]', self.root).val();
  self.budgetName = newName;
  self.update();
};

this.changeBuytime = function(evt) {
  var newName;
  newName = $('[name=buytime]', self.root).val();
  self.buytimeName = newName;
  self.update();
};

this.changeType = function(evt) {
  var newName;
  newName = $('[name=type]', self.root).val();
  self.typeName = newName;
  self.update();
};

this.submit = function() {
  var data;
  data = $('form', this.root).serializeArray();
  data.push({
    name: 'dealername',
    value: self.dealerName
  });
  if ($('[name=username]', this.root).val().length < 1 || $('[name=username]', this.root).val() === '') {
    alert('姓名不能为空');
    return false;
  }
  if ($('[name=mobile]', this.root).val().length < 1 || $('[name=mobile]', this.root).val() === '') {
    alert('手机号码不能为空');
    return false;
  }
  $.post(opts.action, data, function(msg) {
    if (msg.recode === 200) {
      SendNote('注册成功');
    } else {
      SendNote(msg.reason);
    }
  });
  return false;
};

this.cityData = cityData;

this.city = this.cityData[0]['sub'];

this.provinceName = this.cityData[0].name;

this.cityName = this.city[0].name;

province = [];

for (name in this.cityData) {
  name = name;
  province.push(name);
}

city = [];

for (name in this.cityData[province[0]]) {
  name = name;
  city.push(name);
}

dealer = this.cityData[province[0]][city[0]];

this.firstUpdate = true;

this.on('update', function() {
  if (this.firstUpdate) {
    return this.firstUpdate = false;
  }
  this.provinceName = $('[name=province]', this.root).val();
  this.cityName = $('[name=city]', this.root).val();
});
}, '{ }');

riot.tag2('slider', '<div onclick="{moveLeft}" class="left"><img riot-src="{opts.left}"></div> <div onclick="{moveRight}" class="right"><img riot-src="{opts.right}"></div> <div riot-style="-webkit-transition-duration: {duration}s;transition-duration: {duration}s; -webkit-transform: translate3d({x}px,0,0); transform: translate3d({x}px,0,0);" class="slider"> <div each="{bgimg in list}" if="{repeat}" class="slide"> <div class="bg"><img riot-src="{bgimg.bg}"></div> </div> <div each="{bgimg in list}" if="{repeat}" class="slide"> <div class="bg"><img riot-src="{bgimg.bg}"></div> </div> <div each="{bgimg in list}" class="slide"> <div class="bg"><img riot-src="{bgimg.bg}"></div> </div> </div>', '', '', function(opts) {
var i, item, list, ref, self, slider;

self = this;

list = opts.list + '';

list = list.split(',');

this.list = [];

for (item = i = 0, ref = list.length; 0 <= ref ? i < ref : i > ref; item = 0 <= ref ? ++i : --i) {
  this.list[item] = {
    bg: list[item]
  };
}

this.repeat = opts.repeat ? true : false;

this.duration = 0;

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
  this.x = 0;
}

this.moveLeft = function(evt) {
  this.moved = true;
  slider = $('.slider', this.root);
  this.offset.w = slider.find(".slide").width();
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
  this.offset.w = slider.find(".slide").width();
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
  console.log("offset:", offset);
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
  this.offset.w = slider.find(".slide").width();
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
      self.offset.w = slide.find(".slide").width();
      self.x = -self.list.length * self.offset.w;
      console.log("2:" + self.x);
      return self.update();
    }, 500);
  }
  return opts.end && opts.end(this);
});
}, '{ }');