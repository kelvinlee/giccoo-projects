
riot.tag('food', '<div class="foods"> <div class="cp"> <div class="cp-1 fadeInUp animated delay-9"><img data-layzr="/BMWX1/img/cp-4-1.png"></div> <div class="cp-2 fadeInUp animated delay-7"> <div onclick="{show(0)}" class="p1"></div> <div onclick="{show(1)}" class="p2"></div> <div onclick="{show(2)}" class="p3"></div><img data-layzr="/BMWX1/img/cp-4-2.png"> </div> </div> </div> <div show="{showPage}" class="food-list fadeInUp animated"> <div id="slider-product" onclick="{close}"> <slider list="/BMWX1/img/food-1.jpg,/BMWX1/img/food-2.jpg,/BMWX1/img/food-3.jpg"></slider> </div> </div>', function(opts) {
    var self = this
    this.myslider = null
    this.showPage = false
    this.show = function(e) {
    	return function() {
    		console.log(self.tags.slider)
    		setTimeout(function(){
    		self.tags && self.tags.slider.setNumber(e)
    		},10)
    		self.showPage = true
    	}
    }.bind(this);
    this.close = function() {
    	self.showPage = false
    }.bind(this);
    this.on("mount",function(){








    })
  
});

riot.tag('navbar', '<div class="menu-1 {hide:menu}"> <div class="logo"><img src="img/logo.png"></div> <div onclick="{showMenu}" class="btn"><img src="img/navbar-btn.png"></div> </div> <div class="menu-2 {open:menu}"> <ul> <li><a onclick="{jump}" href="/">首页</a></li> <li><a onclick="{jump}" href="/activity">活动介绍</a></li> <li><a onclick="{jump}" href="/register">开启宴遇之旅 & 轻松惠享自由</a></li> <li><a onclick="{jump}" href="/food">时尚宴遇美食</a></li> <li><a onclick="{jump}" href="/bmwx1">遇见BMW X1</a></li> </ul> <div onclick="{hideMenu}" class="zw"></div> </div>', function(opts) {
    this.root.className = "navbar"
    this.menu = false
    this.hideMenu = function() {
    	this.menu = false
    }.bind(this);
    this.showMenu = function() {
    	this.menu = true
    }.bind(this);
    this.jump = function(evt) {

    	this.hideMenu()
    	riot.route(evt.target.getAttribute("href"))
    	return false
    }.bind(this);
  
});

riot.tag('parallax', '<yield></yield>', function(opts) {
    var _store = {can: true}
    var self = this
    Store.parallax = this
    this.nowPage = null
    begin = true

    this.defaultPoint = {
    	x: 0,
    	y: 0,
    	returnTranN: true,
    	returnTranO: true
    }

    this.start = function(evt) {

    	if (! _store.can) {return false}

    	touch = evt.touches[0]
    	this.defaultPoint.x = touch.pageX
    	this.defaultPoint.y = touch.pageY

    	return true
    }.bind(this);

    this.move = function(evt) {
    	if (! _store.can) {return false}
    	touch = evt.touches[0]
    	gone = this.defaultPoint.y - touch.pageY

    		evt.preventDefault()

    	if (gone > 50) {
    		console.log(gone)
    		_store.can = false
    		this.passpage.bind(this)("up")
    	}
    	if (gone < -50) {
    		console.log(gone)
    		_store.can = false
    		this.passpage.bind(this)("down")
    	}
    	return true
    }.bind(this);

    this.end = function(e) {
    	
    }.bind(this);
    var allClass = "riot-up riot-up-active riot-up-leave riot-down riot-down-active riot-down-leave riot-left riot-left-active  riot-left-leave riot-right riot-right-active  riot-right-leave"

    this.passpage = function(direction) {
    	var select = $(this.nowPage).attr(direction)
    	console.log(direction,select,typeof select)
    	if (select) {
    		riot.route("/"+select)
    	}else{
    		_store.can = true
    	}
    }
    this.animate = function(select) {
    	var oldpage = self.nowPage
    	self.oldpage = oldpage
    	self.nowPage = $(".page."+select,self.root)[0]
    	if (oldpage == self.nowPage) {return false}
    	self.nowPage
    	var newpage = self.nowPage
    	var direction = "up"

    	if ($(oldpage).index() > $(newpage).index()) {direction = "down"}

    	oldpage.addEventListener(TRANSITION_END_NAME,self.oldpageFinished)
    	self.defaultPoint.returnTranN = true
    	newpage.addEventListener(TRANSITION_END_NAME,self.newpageFinished)
    	self.defaultPoint.returnTranO = true
    	$(newpage).hide().removeClass(allClass).addClass("riot-"+direction)
    	$(newpage).show()
    	$(oldpage).removeClass(allClass)
    	setTimeout(function(){
    		$(oldpage).addClass("riot-"+direction+"-leave")
    		$(newpage).removeClass(allClass).addClass("riot-"+direction+"-active")
    	},100)
    	self.update()
    }
    this.newpageFinished = function(evt) {

    	if (self.defaultPoint.returnTranN) {
    		self.defaultPoint.returnTranN = false
    	}
    	self.newpage && self.newpage.removeEventListener(TRANSITION_END_NAME,self.newpageFinished)
    	self.newpage && self.newpage.removeEventListener(TRANSITION_END_NAME,self.oldpageFinished)
    	$(self.newpage).removeClass(allClass)
    	_store.can = true
    }
    this.oldpageFinished = function(evt) {

    	if (self.defaultPoint.returnTranO) {

    		self.defaultPoint.returnTranO = false
    		$(self.oldpage).hide()
    	}
    	self.oldpage && self.oldpage.removeEventListener(TRANSITION_END_NAME,self.newpageFinished)
    	self.oldpage && self.oldpage.removeEventListener(TRANSITION_END_NAME,self.oldpageFinished)
    	$(self.oldpage).removeClass(allClass)
    	_store.can = true
    }



    this.on("mount",function(){
    	this.nowPage = $(".page",this.root)[0]
    	Store.nowPage = this.nowPage
    })
    
    this.root.addEventListener("touchstart",this.start.bind(this))
    this.root.addEventListener("touchmove",this.move.bind(this))
    this.root.addEventListener("touchend",this.end.bind(this))


  
});

riot.tag('register', '<form onsubmit="{submit}" class="form fadeInLeft animated delay-6"> <div class="form-grounp"> <label for="username">姓名:</label> <input id="username" type="text" name="username"> </div> <div class="form-grounp"> <label for="mobile">手机号码:</label> <input id="mobile" type="text" name="mobile"> </div> <div class="form-grounp"> <label for="city">所在城市:</label> <div class="select"><span>{cityName}</span> <select id="city" name="city" onchange="{changeSelect}"> <option each="{name in city}" value="{name}">{name}</option> </select> </div> </div> <div class="form-check"> <div class="checkbox"> <input type="checkbox" checked="checked" name="state" value="1"> </div> <label>我已阅读并接受数据使用声明 法律声明＊</label> </div> <div class="form-btn"> <button type="submit" class="submit"><img src="/BMWX1/img/submit.png"></button> </div> </form>', function(opts) {
    var self = this

    this.city = ["昆明","成都","武汉","郑州","其他"]

    this.cityName = this.city[0]




















    this.changeSelect = function(evt) {
    	var val = $(evt.target).val()
    	$(evt.target).prev().text(val)
    	return true
    }.bind(this);
    this.submit = function() {
    	var list = $("form",this.root).serializeArray()
    	var checked = false
    	
    	for (var i = list.length-1; i >= 0 ;i-- ) {
    		if (list[i].name == "state") {
    				checked = true
    		}
    	}

    	if (!checked) {
    		alert("请选择我已阅读并接受数据使用声明 法律声明＊")
    		return false
    	}
    	if ( $("[name=username]",this.root).val().length < 1 || $("[name=username]",this.root).val() == "") {
    		alert("姓名不能为空")
    		return false
    	}
    	var reg = /^0?1[0-9][0-9]\d{9}$/
    	if (reg.test($("[name=mobile]",this.root).val())) {
    		alert("手机号码格式不正确")
    		return false
    	}
    
    	$.post("http://api.giccoo.com/bmwx1/insert/",list,function(msg){
    		if (msg.recode == 200) {
    			alert("提交成功!")
    		}else{
    			alert(msg.reason)
    		}
    	})

    	return false
    }.bind(this);
  
});

riot.tag('slider', '<div riot-style="-webkit-transition-duration: {duration}s;transition-duration: {duration}s; -webkit-transform: translate3d({x}px,0,0); transform: translate3d({x}px,0,0);" class="slider"> <div each="{bgimg in list}" class="slide"> <div class="bg"><img data-layzr="{bgimg}"></div> </div> </div>', function(opts) {
    var self = this
    this.list = opts.list.split(",")
    this.duration = 0.2
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
    }
    this.slideNumber = 0
    this.x = 0
    this.y = 0
    var slider = $(".slider",this.root)
    this.setNumber = function(i) {
    	self.duration = 0
    	self.x = -($(".slider",self.root).width() * i)
    	self.update()
    }
    this.setSlideNumber = function(offset) {
    	round = (offset ? (this.offset.deltaX < 0 ? "ceil" : "floor") : "round")
    	slideNumber = Math[round](this.x / (this.offset.scrollableArea / slider.find(".slide").length))
    	slideNumber += offset
    	slideNumber = Math.min(slideNumber, 0)
    	this.slideNumber = Math.max(-(slider.find(".slide").length - 1), slideNumber);
    	opts.callback && opts.callback(this.slideNumber)
    }
    this.touchstart = function(evt) {
    	touch = evt.touches[0]

    	slider = $(".slider",this.root)
    	this.duration = 0
    	this.startTime = +new Date()
    	this.offset.w = slider.width()
    	this.offset.x = touch.pageX
    	this.offset.y = touch.pageY
    	this.offset.lastw = this.x
    	this.offset.lastSlide = -(slider.find(".slide").length-1)
    	this.offset.scrollableArea = this.offset.w * slider.find(".slide").length
    	this.setSlideNumber(0)
    	this.update()
    }
    this.touchmove = function(evt) {
    	touch = evt.touches[0]
    	this.offset.deltaX = touch.pageX - this.offset.x
    	pageX = touch.pageX
    	if (this.isScrolling == null) {
    		this.offset.isScrolling = Math.abs(this.offset.deltaX)>Math.abs(this.offset.deltaX)
    	}
    	if (this.offset.isScrolling) {
    		return ""
    	}
    	this.x = this.offset.deltaX / this.offset.resistance + this.offset.lastw
    	this.offset.resistance = this.slideNumber === 0 && this.offset.deltaX > 0 ? pageX / this.offset.w + 1.25 : (this.slideNumber === this.offset.lastSlide && this.offset.deltaX < 0 ? (this.offset.w-Math.abs(pageX)) / this.offset.w + 1.25 : 1)
    	evt.preventDefault()




    	this.update()
    }
    this.touchend = function(evt) {
    	if (this.offset.isScrolling) {
    		return ""
    	}
    	this.setSlideNumber(((+new Date()) - this.startTime < 1000 && Math.abs(this.offset.deltaX) > 15 ? (this.offset.deltaX < 0 ? -1 : 1) : 0));
    	this.x = this.slideNumber * this.offset.w
    	this.duration = 0.2

    	this.update()
    }
    this.on("mount",function(){
    	slider = $(".slider",this.root)
    	slider[0].addEventListener("touchstart", this.touchstart.bind(this))
    	slider[0].addEventListener("touchmove", this.touchmove.bind(this))
    	slider[0].addEventListener("touchend", this.touchend.bind(this))
    	opts.end && opts.end(this)
    })
  
});