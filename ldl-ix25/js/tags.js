
riot.tag2('first-page', '<div class="page page-movie first"> <div class="mark"><img src="./img/bg-mark.png"></div> <div class="first-cla"> <div class="box fadeOut animated delay-20"> <div class="text bounceIn animated"><img src="./img/moive-1-text.png"></div> <div class="banner rotateInDownLeft animated delay-3"> <div class="title zoomIn animated delay-6"><img src="./img/moive-1-2.png"></div><img src="./img/moive-1-1.png"> </div> </div> </div> <div class="second-cla fadeIn animated delay-18"> <div class="box fadeOut animated delay-40"> <div class="text bounceIn animated delay-20"><img src="./img/moive-2-text.png"></div> <div class="banner rotateInDownRight animated delay-23"><img src="./img/moive-2-1.png"></div> </div> </div> <div class="third-cla fadeIn animated delay-38"> <div class="box fadeOut animated delay-70"> <div class="text bounceIn animated delay-40"><img src="./img/moive-3-text.png"></div> <div class="banner fadeInUp animated duration-15 delay-43"><img src="./img/moive-3-1.png"></div> </div> </div> <div class="mian-cla fadeIn animated delay-70"> <div class="text"><img src="./img/page-first-text.png"> <div class="btn btn-next bounceIn animated delay-74"><img src="./img/btn-test.png"></div> </div> </div> </div> <div class="page page-note"> <div class="mark"><img src="./img/bg-mark.png"></div> <div class="bg"> </div> <div class="content content-first"> <div class="title"><img src="./img/page-test-title.png"></div> <div class="box box-test"> <div class="text"><img src="./img/page-test-content.png"></div> <div id="select-box" class="select-box"> <div class="line"><img src="./img/time-1.png"> <div class="left"><img src="./img/arrow.png"></div> <div class="right"><img src="./img/arrow.png"></div> </div> </div> <div class="btn btn-goto-test"><img src="./img/btn-test-start.png"></div> </div> <div class="box box-loading hide"> <div class="loading-box fadeInDown animated"> <div class="loading-big"><img src="./img/loading-box-big.png"></div> <div class="loading-small"><img src="./img/loading-box-small.png"></div> </div> <p class="fadeInDown animated delay-2">正在自动匹配<br>年龄和运动数据…</p> </div> </div> <div class="content content-second"> <div class="text"><img src="./img/page-note-text.png"> <div class="btn btn-goto-charge"><img src="./img/btn-test-next.png"></div> </div> </div> <div class="content content-over"> <div class="box box-fail hide"> <div class="title"><img src="./img/page-answer-title.png"></div> <div class="battery battery-no"><img src="./img/battery-box.png"> <div class="light"><img src="./img/battery-no.png"></div> </div> <div class="text"><img src="./img/note-no.png"></div> <div class="btn btn-recharge"><img src="./img/btn-recharge.png"></div> </div> <div class="box box-success hide"> <div class="title"><img src="./img/page-answer-title.png"></div> <div class="battery"><img src="./img/battery-full.png"></div> <div class="text"><img src="./img/note-full.png"></div> <div class="btn btn-recharge"><img src="./img/btn-recharge.png"></div> </div> </div> </div>', '', '', function(opts) {
this.on("mount", function() {
  return _Dom_Select.dom = riot.mount("#select-box", "select-box", {
    list: [
      {
        src: "img/time-1.png"
      }, {
        src: "img/time-2.png"
      }, {
        src: "img/time-3.png"
      }, {
        src: "img/time-4.png"
      }
    ]
  });
});
});

riot.tag2('main-page', '<div class="page page-main"> <div class="mark"><img src="./img/bg-mark.png"></div> <div class="bg"></div> <div class="content main"> <div class="title fadeInUp animated delay-5"><img src="./img/page-main-title.png"></div> <div class="medal fadeInUp animated delay-6 medal-list"> <div class="medals"> <div onclick="{openMedal(0)}" class="item item-1"> <div class="off"><img src="./img/medal-1-off.png"></div> <div class="on fadeIn duration-10 animated {medals[0]}"><img src="./img/medal-1-on.png"></div> <div class="light {hide: waiting[0]}"><img src="./img/light.png"></div> </div> <div onclick="{openMedal(1)}" class="item item-2"> <div class="off"><img src="./img/medal-2-off.png"></div> <div class="on fadeIn duration-10 animated {medals[1]}"><img src="./img/medal-2-on.png"></div> <div class="light {hide: waiting[1]}"><img src="./img/light.png"></div> </div> <div onclick="{openMedal(2)}" class="item item-3"> <div class="off"><img src="./img/medal-3-off.png"></div> <div class="on fadeIn duration-10 animated {medals[2]}"><img src="./img/medal-3-on.png"></div> <div class="light {hide: waiting[2]}"><img src="./img/light.png"></div> </div> </div> </div> <div class="progress fadeInUp animated delay-7"> <div riot-style="width: {progress}%" class="progress-lin"></div> </div> <div class="text fadeInUp animated delay-8"><img src="./img/page-main-pro-text.png"></div> <div class="note-text fadeInUp animated delay-9 {notalone: lotterybtn}"><img riot-src="./img/{noteText}"></div> <div onclick="{Getlottery}" class="btn btn-start fadeInUp animated delay-2 {hide: !lotterybtn}"><img src="./img/btn-start.png"></div> </div> <div class="content award award-fail hide"> <div class="lottery-box fadeInDown animated"><img src="./img/lottery-box-off.png"></div> <div class="text fadeInDown animated delay-2"><img src="./img/award-text-fail.png"></div> <div class="btn btn-share fadeInDown animated delay-4"><img src="./img/btn-share.png"></div> <div class="car-banner fadeInUp animated delay-5"><img src="./img/car.png"></div> </div> <div class="content award award-success hide"> <div class="lottery-box fadeInDown animated delay-2"><img src="./img/lottery-box-on.png"></div> <div class="lottery-fireworks fadeInDown animated delay-0 duration-10"><img src="./img/fireworks.png"></div> <div class="text fadeInDown animated delay-4"><img src="./img/award-text-success.png"></div> <div onclick="{openSubmit}" class="btn btn-submit fadeInDown animated delay-6"><img src="./img/btn-submit.png"></div> <div class="car-banner fadeInUp animated delay-7"><img src="./img/car.png"></div> </div> <div class="pop zoomIn animated {hide: !pop}"> <div onclick="{closePop}" class="pop-content"> <div class="medal"><img riot-src="./img/lottery-{popid}.png"> <div class="light"><img src="./img/light.png"></div> </div> <div class="text"><img riot-src="./img/lottery-text-{popid}.png"></div> </div> </div> <div class="pop zoomIn animated {hide: formHide}"> <div class="form-content"> <form onsubmit="{submit}" class="form"> <div class="form-grounp"> <label>姓名:</label> <input type="text" name="username"> </div> <div class="form-grounp"> <label>电话:</label> <input type="text" name="mobile"> </div> <div class="form-grounp"> <label>联系地址:</label> <input type="text" name="address"> </div> <div class="form-btn"> <button type="submit" class="submit"><img src="img/submit-lottery.png"></button> </div> </form> </div> </div> </div>', '', '', function(opts) {
var item, j, ref, self;

self = this;

this.sending = false;

this.formHide = true;

this._init = false;

this.progress = 0;

if (localStorage.getItem("medals")) {
  this.medals = JSON.parse(localStorage.getItem("medals"));
} else {
  this.medals = ["hide", "hide", "hide"];
}

this.waiting = [true, true, true];

for (item = j = 0, ref = this.medals.length; 0 <= ref ? j < ref : j > ref; item = 0 <= ref ? ++j : --j) {
  if (this.medals[item] === "") {
    this.waiting[item] = true;
  }
}

this.pop = false;

this.popid = 1;

this.lotterybtn = false;

if (localStorage.getItem("alreadylottery")) {
  this.alreadylottery = true;
  this.noteText = "page-main-note-over.png";
} else {
  this.alreadylottery = false;
  this.noteText = "page-main-note.png";
}

if (!self.alreadylottery && self.medals[0] === "" && self.medals[1] === "" && self.medals[2] === "") {
  this.noteText = "page-main-note-over.png";
  self.lotterybtn = true;
}

localStorage.setItem("opend", "true");

this.closePop = function() {
  self.pop = false;
  self._init = false;
  self.updateStep();
  if (!self.alreadylottery && self.medals[0] === "" && self.medals[1] === "" && self.medals[2] === "") {
    this.noteText = "page-main-note-over.png";
    return self.lotterybtn = true;
  }
};

this.updateProgress = function(han) {
  if (han > 100) {
    han = 100;
  }
  self.progress = han;
  return self.update();
};

this.updateMedals = function(opens) {
  this.medals = opens;
  return self.update();
};

this.openMedal = function(id) {
  return function() {
    if (self.medals[id] === "") {
      return "";
    }
    self.pop = true;
    self.popid = id + 1;
    self.medals[id] = "";
    self.waiting[id] = true;
    self.update();
    return localStorage.setItem("medals", JSON.stringify(self.medals));
  };
};

this.updateStep = function() {
  var _first, _second, i, k;
  if (self._init) {
    return false;
  }
  self._init = true;
  console.log("Update step", parseInt(_FullStep / 50000 * 100));
  self.updateProgress(parseInt(_FullStep / 50000 * 100));
  _first = false;
  _second = 0;
  for (i = k = 0; k < 5; i = ++k) {
    if (_taskOverDate[new Date(_startDate.getTime() + i * 24 * 60 * 60 * 1000).getDate()] > 5000) {
      _first = true;
    }
    if (_taskOverDate[new Date(_startDate.getTime() + i * 24 * 60 * 60 * 1000).getDate()] > 10000) {
      _second += 1;
    }
  }
  console.log("first", _first);
  if (self.medals[0] === "hide" && _first) {
    self.waiting[0] = false;
    self.openMedal(0)();
    self.update();
    return false;
  }
  if (self.medals[1] === "hide" && _second >= 2) {
    self.waiting[1] = false;
    self.openMedal(1)();
    self.update();
    return false;
  }
  if (self.medals[2] === "hide" && _FullStep >= 50000) {
    self.waiting[2] = false;
    self.openMedal(2)();
    self.update();
    return false;
  }
};

this.Getlottery = function() {
  var data;
  console.log("fail");
  if (self.medals[0] === "hide") {
    return SendNote("请先点亮第一个徽章");
  }
  if (self.medals[1] === "hide") {
    return SendNote("请先点亮第二个徽章");
  }
  if (self.medals[2] === "hide") {
    return SendNote("请先点亮最后徽章");
  }
  data = [];
  data.push({
    name: 'uid',
    value: uid
  });
  data.push({
    name: 'pc',
    value: pc
  });
  data.push({
    name: 'step',
    value: _FullStep
  });
  if (self.sending) {
    return false;
  }
  self.sending = true;
  return $.post("http://localhost:8881/ldl-ix25/check", data, function(msg) {
    self.sending = false;
    $(".pages .page-main .content.main").addClass("hide");
    if (msg.recode === 200) {
      $(".pages .page-main .content.award-success").removeClass("hide");
    } else {
      $(".pages .page-main .content.award-fail").removeClass("hide");
    }
    return localStorage.setItem("alreadylottery", "true");
  });
};

this.on("mount", function() {
  if (_taskOverDate[23] || _taskOverDate[24] || _taskOverDate[25]) {
    return self.updateStep();
  }
});

this.openSubmit = function() {
  self.formHide = false;
  return self.update();
};

this.submit = function() {
  var data;
  data = $('form', this.root).serializeArray();
  data.push({
    name: 'uid',
    value: uid
  });
  data.push({
    name: 'pc',
    value: pc
  });
  data.push({
    name: 'step',
    value: _FullStep
  });
  console.log(data);
  if ($('[name=username]', this.root).val().length < 1 || $('[name=username]', this.root).val() === '') {
    SendNote('姓名不能为空');
    return false;
  }
  if ($('[name=mobile]', this.root).val().length < 1 || $('[name=mobile]', this.root).val() === '') {
    SendNote('手机号码不能为空');
    return false;
  }
  if ($('[name=address]', this.root).val().length < 1 || $('[name=address]', this.root).val() === '') {
    SendNote('联系地址不能为空');
    return false;
  }
  $.post("http://localhost:8881/ldl-ix25/update", data, function(msg) {
    if (msg.recode === 200) {
      SendNote('注册成功');
      self.formHide = true;
      self.lotterybtn = false;
      $(".pages .page-main .content.main").removeClass("hide");
      $(".pages .page-main .content.award-success").addClass("hide");
      self.update();
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

riot.tag2('select-box', '<div class="select-box-list"><yield></yield> <div each="{item in list}" onclick="{goto(item)}" class="item {item.class}"><img riot-src="{item.src}"></div> </div>', '', '', function(opts) {
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