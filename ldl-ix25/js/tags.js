
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

riot.tag2('register', '<form onsubmit="{submit}"> <div class="form-grounp"> <label for="username">姓名</label> <input id="username" type="text" name="username"> </div> <div class="form-grounp"> <label for="">性别</label> <div class="comb"> <label for="man">先生</label> <input id="man" type="radio" name="sex" value="先生" checked> <label for="woman">女士</label> <input id="woman" type="radio" name="sex" value="女士"> </div> </div> <div class="form-grounp"> <label for="mobile">手机号码</label> <input id="mobile" type="text" name="mobile"> </div> <div class="form-grounp"> <label for="province">所在省/市</label> <div class="comb"> <div class="select"><span>{provinceName}</span> <select id="province" name="province" onchange="{changeProvince}"> <option each="{cityData}" value="{name}">{name}</option> </select> </div> <div class="select"><span>{cityName}</span> <select id="city" name="city" onchange="{changeCity}"> <option each="{city}" value="{name}">{name}</option> </select> </div> </div> </div> <div class="form-btn"> <button type="submit" class="submit"><img src="img/submit-lottery.png"></button> </div> </form>', '', '', function(opts) {
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
    SendNote('姓名不能为空');
    return false;
  }
  if ($('[name=mobile]', this.root).val().length < 1 || $('[name=mobile]', this.root).val() === '') {
    SendNote('手机号码不能为空');
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

riot.tag2('select-box', '<div class="select-box-list"> <div class="line"><img riot-src="{list[0].src}"></div> <div each="{item in list}" onclick="{goto(item)}" class="item {item.class}"><img riot-src="{item.src}"></div> </div>', '', '', function(opts) {
var i, it, j, ref, self;

self = this;

this.list = opts.list;

this["default"] = 2;

this.duration = 0.2;

console.log(this.list);

i = this["default"];

for (it = j = 0, ref = self.list.length; 0 <= ref ? j < ref : j > ref; it = 0 <= ref ? ++j : --j) {
  if (i === it) {
    self.list[it]["class"] = "on-3";
  } else if (i - 1 === it) {
    self.list[it]["class"] = "on-2";
  } else if (i - 2 === it) {
    self.list[it]["class"] = "on-1";
  } else if (i + 1 === it) {
    self.list[it]["class"] = "on-4";
  } else {
    self.list[it]["class"] = "";
  }
}

this.goto = function(item) {
  return function() {
    return self.setNumber(self.list.indexOf(item));
  };
};

this.setNumber = function(i) {
  var k, ref1, results;
  results = [];
  for (it = k = 0, ref1 = self.list.length; 0 <= ref1 ? k < ref1 : k > ref1; it = 0 <= ref1 ? ++k : --k) {
    if (i === it) {
      self.list[it]["class"] = "on-3";
      results.push(self["default"] = i);
    } else if (i - 1 === it) {
      results.push(self.list[it]["class"] = "on-2");
    } else if (i - 2 === it) {
      results.push(self.list[it]["class"] = "on-1");
    } else if (i + 1 === it) {
      results.push(self.list[it]["class"] = "on-4");
    } else {
      results.push(self.list[it]["class"] = "");
    }
  }
  return results;
};
}, '{ }');

riot.tag2('slider', '<yield></yield> <div riot-style="-webkit-transition-duration: {duration}s;transition-duration: {duration}s; -webkit-transform: translate3d({x}px,0,0); transform: translate3d({x}px,0,0);" class="slider"> <div each="{bgimg in list}" class="slide"> <div class="bg"><img riot-src="{bgimg}"></div> </div> </div>', '', '', function(opts) {
var list, self, slider;

self = this;

list = opts.list + "";

this.list = list.split(",");

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

slider = $(".slider", this.root);

this.moved = false;

if (opts.myid) {
  eval(opts.myid + " = this");
}

this.setNumber = function(i) {
  self.duration = 0.2;
  self.x = -($(".slider", self.root).width() * i);
  return self.update();
};

this.setSlideNumber = function(offset) {
  var round, slideNumber;
  console.log(offset);
  if (this.moved) {
    round = offset ? (this.offset.deltaX < 0 ? "ceil" : "floor") : "round";
    slideNumber = Math[round](this.x / (this.offset.scrollableArea / slider.find(".slide").length));
    slideNumber += offset;
    slideNumber = Math.min(slideNumber, 0);
    this.slideNumber = Math.max(-(slider.find(".slide").length - 1), slideNumber);
    console.log(opts.callback, typeof opts.callback);
    opts.callback && eval(opts.callback + "(" + this.slideNumber + ")");
  }
};

this.touchstart = function(evt) {
  var touch;
  touch = evt.touches[0];
  slider = $(".slider", this.root);
  this.duration = 0;
  this.moved = false;
  this.startTime = +new Date();
  this.offset.w = slider.width();
  this.offset.x = touch.pageX;
  this.offset.y = touch.pageY;
  this.offset.lastw = this.x;
  this.offset.lastSlide = -(slider.find(".slide").length - 1);
  this.offset.scrollableArea = this.offset.w * slider.find(".slide").length;
  this.setSlideNumber(0);
  return this.update();
};

this.touchmove = function(evt) {
  var pageX, touch;
  touch = evt.touches[0];
  this.offset.deltaX = touch.pageX - this.offset.x;
  pageX = touch.pageX;
  this.x = this.offset.deltaX / this.offset.resistance + this.offset.lastw;
  this.offset.resistance = this.slideNumber === 0 && this.offset.deltaX > 0 ? pageX / this.offset.w + 1.25 : (this.slideNumber === this.offset.lastSlide && this.offset.deltaX < 0 ? (this.offset.w - Math.abs(pageX)) / this.offset.w + 1.25 : 1);
  this.moved = true;
  evt.preventDefault();
  console.log(Math.abs(pageX), this.offset.w);
  return this.update();
};

this.touchend = function(evt) {
  console.log(this.moved);
  if (this.moved) {
    this.setSlideNumber(+(new Date) - this.startTime < 1000 && Math.abs(this.offset.deltaX) > 15 ? (this.offset.deltaX < 0 ? -1 : 1) : 0);
    this.x = this.slideNumber * this.offset.w;
    this.duration = 0.2;
    this.update();
  }
  return this.moved = false;
};

this.on("mount", function() {
  slider = $(this.root);
  slider[0].addEventListener("touchstart", this.touchstart.bind(this));
  slider[0].addEventListener("touchmove", this.touchmove.bind(this));
  slider[0].addEventListener("touchend", this.touchend.bind(this));
  return opts.end && opts.end(this);
});
}, '{ }');