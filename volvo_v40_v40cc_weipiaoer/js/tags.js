
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

riot.tag2('register', '<form onsubmit="{submit}" class="form"> <div class="form-grounp"> <label for="username">姓名</label> <input id="username" type="text" name="username"> </div> <div class="form-grounp"> <label for="">性别</label> <div class="comb"> <label for="man">先生</label> <input id="man" type="radio" name="sex" value="先生" checked> <label for="woman">女士</label> <input id="woman" type="radio" name="sex" value="女士"> </div> </div> <div class="form-grounp"> <label for="mobile">手机号码</label> <input id="mobile" type="text" name="mobile"> </div> <div class="form-grounp"> <label for="province">所在省/市</label> <div class="comb"> <div class="select"><span>{provinceName}</span> <select id="province" name="province" onchange="{changeProvince}"> <option each="{name in province}" value="{name}">{name}</option> </select> </div> <div class="select"><span>{cityName}</span> <select id="city" name="city" onchange="{changeCity}"> <option each="{name in city}" value="{name}">{name}</option> </select> </div> </div> </div> <div class="form-grounp"> <label for="dealer">经销商</label> <div class="select"><span>{dealerName}</span> <select id="dealer" name="dealer" onchange="{changeDealer}"> <option each="{dealer}" value="{code}">{name}</option> </select> </div> </div> <div class="form-grounp"> <label for="type">试驾车型</label> <div class="select"><span>{typeName}</span> <select id="type" name="type" onchange="{changeType}"> <option each="{name in type}" value="{name}">{name}</option> </select> </div> </div> <div class="form-btn"> <button type="submit" class="submit"><img src="img/submit.png"></button> </div> </form>', '', '', function(opts) {
var city, dealer, name, province, self;

self = this;

this.cityData = _citys;

this.type = _type;

this.typeName = this.type[0];

province = [];

for (name in this.cityData) {
  province.push(name);
}

city = [];

for (name in this.cityData[province[0]]) {
  city.push(name);
}

dealer = this.cityData[province[0]][city[0]];

this.province = province;

this.city = city;

this.dealer = dealer;

this.provinceName = this.province[0];

this.cityName = this.city[0];

this.dealerName = this.dealer[0].name;

this.firstUpdate = true;

this.on('update', function() {
  if (this.firstUpdate) {
    return this.firstUpdate = false;
  }
  this.provinceName = $('[name=province]', this.root).val();
  this.cityName = $('[name=city]', this.root).val();
  this.dealerName = $('[name=dealer] [value=' + $('[name=dealer]', this.root).val() + ']', this.root).text();
});

this.changeType = function(evt) {
  this.typeName = $('[name=type]', self.root).val();
  self.update();
};

this.changeCity = function(evt) {
  var newCity, newName;
  newName = $('[name=province]', self.root).val();
  newCity = $('[name=city]', this.root).val();
  dealer = self.cityData[newName][newCity];
  self.dealer = dealer;
  self.update();
};

this.changeProvince = function(evt) {
  var newName;
  newName = $('[name=province]', self.root).val();
  city = [];
  for (name in self.cityData[newName]) {
    city.push(name);
  }
  dealer = self.cityData[newName][city[0]];
  self.city = city;
  self.dealer = dealer;
  self.update();
};

this.changeDealer = function(evt) {
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
    SendNote('姓名不能为空');
    return false;
  }
  if ($('[name=mobile]', this.root).val().length < 1 || $('[name=mobile]', this.root).val() === '') {
    SendNote('手机号码不能为空');
    return false;
  }
  $.post(opts.action, data, function(msg) {
    if (msg.recode === 200) {
      // SendNote('注册成功');
      // setTimeout(function() {
        // return backHome();
      // }, 1500);
      backHome();
    } else {
      SendNote(msg.reason);
    }
  });
  return false;
};
}, '{ }');

riot.tag2('slider', '<yield from="sub"></yield> <div riot-style="-webkit-transition-duration: {duration}s;transition-duration: {duration}s; -webkit-transform: translate3d({x}px,0,0); transform: translate3d({x}px,0,0);" class="slider"><yield from="content"></yield></div>', '', '', function(opts) {
var list, self, slider;

self = this;

list = opts.list + '';

this.list = list.split(',');

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

this.setNumber = function(i) {
  console.log(i, self.slideNumber);
  slider = $('.slider', this.root);
  this.offset.w = slider.width();
  self.duration = 0.2;
  self.x = -($('.slider', self.root).width() * i);
  if (this.repeat) {
    self.x -= this.list.length * this.offset.w;
  }
  self.slideNumber = i;
  self.update();
  opts.callback && eval(opts.callback + '(' + self.slideNumber + ')');
};

this.setSlideNumber = function(offset) {
  var round, slideNumber;
  round = void 0;
  slideNumber = void 0;
  if (this.moved) {
    round = offset ? (this.offset.deltaX < 0 ? 'ceil' : 'floor') : 'round';
    slideNumber = Math[round](this.x / (this.offset.scrollableArea / slider.find('.slide').length));
    slideNumber += offset;
    slideNumber = Math.min(slideNumber, 0);
    console.log(Math.max(-(slider.find('.slide').length - 1), slideNumber));
    this.slideNumber = Math.max(-(slider.find('.slide').length - 1), slideNumber) % this.list.length;
    opts.callback && eval(opts.callback + '(' + this.slideNumber + ')');
  }
};

this.touchstart = function(evt) {
  var touch;
  touch = void 0;
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
  pageX = void 0;
  touch = void 0;
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
    console.log(slide, TRANSITION_END_NAME);
    slide[0].addEventListener(TRANSITION_END_NAME, this.transition.bind(this));
  }
  return opts.end && opts.end(this);
});
}, '{ }');