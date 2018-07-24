riot.tag2('parallax', '<yield></yield>', '', '', function(opts) {
var _store, allClass, begin, self;

_store = {
  can: true
};

self = this;

Store.parallax = this;

this.nowPage = null;

begin = true;

this.defaultPoint = {
  x: 0,
  y: 0,
  returnTranN: true,
  returnTranO: true
};

this.start = function(evt) {
  var touch;
  if (self.nowPage === null) {
    self.nowPage = $(".page.first", self.root)[0];
    Store.nowPage = self.nowPage;
  }
  if (!_store.can) {
    return false;
  }
  touch = evt.touches[0];
  this.defaultPoint.x = touch.pageX;
  this.defaultPoint.y = touch.pageY;
  return true;
};

this.move = function(evt) {
  var gone, touch;
  if (!_store.can) {
    return false;
  }
  touch = evt.touches[0];
  gone = this.defaultPoint.y - touch.pageY;
  evt.preventDefault();
  if (gone > 50) {
    _store.can = false;
    this.passpage.bind(this)("up");
  }
  if (gone < -50) {
    _store.can = false;
    this.passpage.bind(this)("down");
  }
  return true;
};

this.end = function(e) {
  if (!_store.can) {
    return false;
  }
  if ($(this.nowPage).attr("up") === null && $(this.nowPage).attr("down") === null) {
    _store.can = false;
    self.root.removeEventListener("touchstart", self.start);
    self.root.removeEventListener("touchmove", self.move);
    return self.root.removeEventListener("touchend", self.end);
  }
};

allClass = "riot-up riot-up-active riot-up-leave riot-down riot-down-active riot-down-leave riot-left riot-left-active  riot-left-leave riot-right riot-right-active  riot-right-leave";

this.passpage = function(direction) {
  var select;
  select = $(this.nowPage).attr(direction);
  if (select) {
    return self.animate(select);
  } else {
    return _store.can = true;
  }
};

this.changepage = function(name) {
  return self.animate(name);
};

this.animate = function(select) {
  var direction, newpage, oldpage;
  oldpage = self.nowPage;
  // console.log(select);
  self.oldpage = oldpage;
  if (self.oldpage == null) {
    self.oldpage = $(".page.first", self.root)[0];
  }
  self.nowPage = $(".page." + select, self.root)[0];
  console.log(self.oldpage,oldpage,self.nowPage);
  if (oldpage === self.nowPage) {
    return false;
  }
  self.nowPage;
  newpage = self.nowPage;
  direction = "up";
  if ($(oldpage).index() > $(newpage).index()) {
    direction = "down";
  }
  oldpage.addEventListener(TRANSITION_END_NAME, self.oldpageFinished);
  self.defaultPoint.returnTranN = true;
  newpage.addEventListener(TRANSITION_END_NAME, self.newpageFinished);
  self.defaultPoint.returnTranO = true;
  $(newpage).hide().removeClass(allClass).addClass("riot-" + direction);
  $(newpage).show();
  $(oldpage).removeClass(allClass);
  setTimeout(function() {
    $(oldpage).addClass("riot-" + direction + "-leave");
    return $(newpage).removeClass(allClass).addClass("riot-" + direction + "-active");
  }, 100);
  return self.update();
};

this.newpageFinished = function(evt) {
  if (self.defaultPoint.returnTranN) {
    self.defaultPoint.returnTranN = false;
  }
  self.newpage && self.newpage.removeEventListener(TRANSITION_END_NAME, self.newpageFinished);
  self.newpage && self.newpage.removeEventListener(TRANSITION_END_NAME, self.oldpageFinished);
  $(self.newpage).removeClass(allClass);
  return _store.can = true;
};

this.oldpageFinished = function(evt) {
  if (self.defaultPoint.returnTranO) {
    self.defaultPoint.returnTranO = false;
    $(self.oldpage).hide();
  }
  self.oldpage && self.oldpage.removeEventListener(TRANSITION_END_NAME, self.newpageFinished);
  self.oldpage && self.oldpage.removeEventListener(TRANSITION_END_NAME, self.oldpageFinished);
  $(self.oldpage).removeClass(allClass);
  return _store.can = true;
};

this.on("mount", function() {
  self.nowPage = $(".page.first", self.root)[0];
  self.oldpage = $(".page.first", self.root)[0];
});

this.root.addEventListener("touchstart", this.start.bind(this));

this.root.addEventListener("touchmove", this.move.bind(this));

this.root.addEventListener("touchend", this.end.bind(this));
});

riot.tag2('register', '<form onsubmit="{submit}" class="form">  <div class="form-grounp">     <label for="username">姓 名</label>     <input id="username" type="text" name="username">   </div>  <div class="form-grounp">     <label for="mobile">手 机</label>     <input id="mobile" type="text" name="mobile">   </div>  <div class="form-grounp"> <label for="province">省/市</label> <div class="comb"> <div class="select"><span>{provinceName}</span> <select id="province" name="province" onchange="{changeProvince}"> <option each="{name in province}" value="{name}">{name}</option> </select> </div> <div class="select"><span>{cityName}</span> <select id="city" name="city" onchange="{changeCity}"> <option each="{name in city}" value="{name}">{name}</option> </select></div> </div>  </div>  <div class="form-grounp"> <label for="dealer">经销商</label> <div class="select"><span>{dealerName}</span> <select id="dealer" name="dealer" onchange="{changeDealer}"> <option each="{dealer}" value="{code}">{name}</option> </select> </div></div><div class="form-btn"><div id="gobackbtn" class="submit"><img src="img/gobackbtn.png"></div> <button type="submit" class="submit"><img src="img/submit.png"></button></div></form>', '', '', function(opts) {
    var self = this
    this.cityData = _citys
    var province = []
    for (name in this.cityData) {
    	province.push(name)
    }
    var city = []
    for (name in this.cityData[province[0]]) {
    	city.push(name)
    }
    var dealer = this.cityData[province[0]][city[0]]
    this.province = province
    this.city = city
    this.dealer = dealer

    this.provinceName = this.province[0]
    this.cityName = this.city[0]
    this.dealerName = this.dealer[0].name
    this.firstUpdate = true
    this.on("update",function(){
    	if (this.firstUpdate) {return this.firstUpdate = false}
    	this.provinceName = $("[name=province]",this.root).val()
    	this.cityName = $("[name=city]",this.root).val()
    	this.dealerName = $("[name=dealer] [value="+$("[name=dealer]",this.root).val()+"]",this.root).text()
    })
    this.changeCity = function(evt) {
    	var newName = $("[name=province]",self.root).val()
    	var newCity = $("[name=city]",this.root).val()
    	var dealer = self.cityData[newName][newCity]
    	self.dealer = dealer
    	self.update()
    }.bind(this)
    this.changeProvince = function(evt) {
    	var newName = $("[name=province]",self.root).val()
    	var city = []
    	for (name in self.cityData[newName]) {
    		city.push(name)
    	}
    	var dealer = self.cityData[newName][city[0]]
    	self.city = city
    	self.dealer = dealer
    	self.update()
    }.bind(this)
    this.changeDealer = function(evt) {
    	self.update()
    }.bind(this)
    this.submit = function() {
    	var data = $("form",this.root).serializeArray()
    	data.push({name:"dealername",value:self.dealerName})
    	if ( $("[name=username]",this.root).val().length < 1 || $("[name=username]",this.root).val() == "") {
    		alert("姓名不能为空")
    		return false
    	}
    	if ( $("[name=mobile]",this.root).val().length < 1 || $("[name=mobile]",this.root).val() == "") {
    		alert("手机号码不能为空")
    		return false
    	}
    	$.post(opts.action,data,function(msg){

    		if (msg.recode == 200) {
    			alert("注册成功")

    		}else{
    			alert(msg.reason)
    		}
    	})
    	return false
    }.bind(this)
}, '{ }');

riot.tag2('slider', '<yield></yield> <div riot-style="-webkit-transition-duration: {duration}s;transition-duration: {duration}s; -webkit-transform: translate3d({x}px,0,0); transform: translate3d({x}px,0,0);" class="slider"> <div riot-if="{repeat}" each="{bgimg in list}" class="slide"> <div class="bg"><img riot-src="{bgimg}"></div> </div><div riot-if="{repeat}" each="{bgimg in list}" class="slide"> <div class="bg"><img riot-src="{bgimg}"></div> </div><div each="{bgimg in list}" class="slide"> <div class="bg"><img riot-src="{bgimg}"></div> </div> </div>', '', '', function(opts) {
var list, self, slider;

self = this;

list = opts.list + "";

this.list = list.split(",");

this.repeat = opts.repeat?true:false

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

this.Lx = 0

this.Ly = 0;

slider = $(".slider", this.root);

this.moved = false;

if (opts.myid) {
  eval(opts.myid + " = this");
}

this.setNumber = function(i) {
  console.log(i,self.slideNumber);
  slider = $("#"+opts.myid);
  self.offset.w = slider.width();
  self.duration = 0.2;
  self.x = -(slider.width() * i);
  
  if (self.repeat) {
    self.x = -(self.list.length * self.offset.w) - (slider.width() * i);
  }
  console.log(slider,slider.width(),self.offset.w,self.repeat);
  self.slideNumber = i
  slider.find(".slider").css({
    "-webkit-transition-duration": "0.2s",
    "transition-duration": "0.2s",
    "-webkit-transform": "translate3d("+self.x+"px,0,0)",
    "transform": "translate3d("+self.x+"px,0,0)"
  })

  self.update();
};

this.setSlideNumber = function(offset) {
  var round, slideNumber;
  if (this.moved) {
    round = offset ? (this.offset.deltaX < 0 ? "ceil" : "floor") : "round";
    slideNumber = Math[round](this.x / (this.offset.scrollableArea / slider.find(".slide").length));
    slideNumber += offset;
    slideNumber = Math.min(slideNumber, 0);
    console.log(Math.max(-(slider.find(".slide").length - 1), slideNumber));
    this.slideNumber = Math.max(-(slider.find(".slide").length - 1), slideNumber) % this.list.length ;
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
  if (this.repeat && this.x == 0) {
    this.x = - this.list.length * this.offset.w
  }
  this.offset.lastw = this.x;
  this.offset.lastSlide = -(this.list.length - 1);
  this.offset.scrollableArea = this.offset.w * slider.find(".slide").length;
  this.setSlideNumber(0);
  console.log("move start");
  return this.update();
};

this.touchmove = function(evt) {
  var pageX, touch;
  touch = evt.touches[0];
  this.offset.deltaX = touch.pageX - this.offset.x;
  pageX = touch.pageX;
  if (this.repeat) {
    this.x = this.offset.deltaX + this.offset.lastw;
  }else{
    this.x = this.offset.deltaX / this.offset.resistance + this.offset.lastw;
    this.offset.resistance = this.slideNumber === 0 && this.offset.deltaX > 0 ? pageX / this.offset.w + 1.25 : (this.slideNumber === this.offset.lastSlide && this.offset.deltaX < 0 ? (this.offset.w - Math.abs(pageX)) / this.offset.w + 1.25 : 1);
  }
  
  this.moved = true;
  evt.preventDefault();
  // console.log(Math.abs(pageX), this.offset.w);
  return this.update();
};

this.touchend = function(evt) {
  console.log(this.moved);
  if (this.moved) {
    var oldslideNumber = this.slideNumber;
    this.setSlideNumber(+(new Date) - this.startTime < 1000 && Math.abs(this.offset.deltaX) > 15 ? (this.offset.deltaX < 0 ? -1 : 1) : 0);
    this.x = this.slideNumber * this.offset.w;
    console.log("my number:",this.slideNumber,oldslideNumber)
    if (this.slideNumber == 0 && oldslideNumber == -(this.list.length-1)) {
      this.x = (oldslideNumber-1) * this.offset.w;
    }
    if (oldslideNumber == 0 && this.slideNumber == -(this.list.length-1)) {
      this.x = 1 * this.offset.w;
    }
    if (this.repeat) {
      this.x -= this.list.length * this.offset.w;
    }
    console.log(this.Rx,this.x,this.repeat)
    this.duration = 0.2;
    this.update();
  }
  return this.moved = false;
};

this.transition = function(evt) {
  // return false;
  console.log(this.x , -( (this.list.length) * this.offset.w));
  if (this.x < -( (this.list.length * 2 - 1) * this.offset.w)) {
    this.x = - this.list.length * this.offset.w;
    // this.Rx = this.x + (this.list.length-1) * this.offset.w;
    // this.Lx = this.x - (this.list.length-1) * this.offset.w;
    this.duration = 0;
    this.slideNumber = 0;
    this.update();
    opts.callback && eval(opts.callback + "(" + this.slideNumber + ")");
  }
  if (this.x > -( (this.list.length) * this.offset.w)) {
    this.x = - (this.list.length*2-1) * this.offset.w;
    // this.Rx = this.x + (this.list.length-1) * this.offset.w;
    // this.Lx = this.x - (this.list.length-1) * this.offset.w;
    this.duration = 0;
    this.slideNumber = -(this.list.length-1);
    this.update();
    opts.callback && eval(opts.callback + "(" + this.slideNumber + ")");
  }
}

this.on("mount", function() {
  slider = $(this.root);
  slider[0].addEventListener("touchstart", this.touchstart.bind(this));
  slider[0].addEventListener("touchmove", this.touchmove.bind(this));
  slider[0].addEventListener("touchend", this.touchend.bind(this));
  if (this.repeat) {
    slide = $(".slider",this.root);
    console.log(slide,TRANSITION_END_NAME);
    slide[0].addEventListener(TRANSITION_END_NAME, this.transition.bind(this));
  }
  return opts.end && opts.end(this);
});
}, '{ }');