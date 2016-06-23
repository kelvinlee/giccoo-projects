
riot.tag2('register', '<form onsubmit="{submit}" class="form"> <div class="form-grounp"> <label for="username">姓名:</label> <input id="username" type="text" name="username"> </div> <div class="form-grounp"> <label for="">性别:</label> <div class="comb"> <label for="man">先生</label> <input id="man" type="radio" name="sex" value="先生" checked="checked"> <label for="woman">女士</label> <input id="woman" type="radio" name="sex" value="女士"> </div> </div> <div class="form-grounp"> <label for="mobile">手机号码:</label> <input id="mobile" type="text" name="mobile"> </div> <div class="form-grounp"> <label for="province">所在省/市:</label> <div class="comb"> <div class="select"><span>{provinceName}</span> <select id="province" name="province" onchange="{changeProvince}"> <option each="{name in province}" value="{name}">{name}</option> </select> </div> <div class="select"><span>{cityName}</span> <select id="city" name="city" onchange="{changeCity}"> <option each="{name in city}" value="{name}">{name}</option> </select> </div> </div> </div> <div class="form-grounp"> <label for="dealer">选择经销商:</label> <div class="select"><span>{dealerName}</span> <select id="dealer" name="dealer" onchange="{changeDealer}"> <option each="{dealer}" value="{code}">{name}</option> </select> </div> </div> </form>', '', '', function(opts) {
    var self = this
    this.cityData = _citys
    Store.register = this
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

riot.tag2('slider', '<div riot-style="-webkit-transition-duration: {duration}s;transition-duration: {duration}s; -webkit-transform: translate3d({x}px,0,0); transform: translate3d({x}px,0,0);" class="slider"> <div each="{bgimg in list}" class="slide"> <div class="bg"><img riot-src="{bgimg}"></div> </div> </div>', '', '', function(opts) {
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
    if (opts.myid) {
    	eval(opts.myid+" = this;")
    }
    this.setNumber = function(i) {
    	self.duration = 0.2
    	self.x = -($(".slider",self.root).width() * i)
    	self.update()
    }
    this.setSlideNumber = function(offset) {
    	round = (offset ? (this.offset.deltaX < 0 ? "ceil" : "floor") : "round")
    	slideNumber = Math[round](this.x / (this.offset.scrollableArea / slider.find(".slide").length))
    	slideNumber += offset
    	slideNumber = Math.min(slideNumber, 0)
    	this.slideNumber = Math.max(-(slider.find(".slide").length - 1), slideNumber);
    	opts.callback && eval(opts.callback+"("+this.slideNumber+")")

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
    	if (!opts.pd) {
    		evt.preventDefault()
    	}

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
    	this.root.addEventListener("touchstart", this.touchstart.bind(this))
    	this.root.addEventListener("touchmove", this.touchmove.bind(this))
    	this.root.addEventListener("touchend", this.touchend.bind(this))
    	opts.end && opts.end(this)
    })
}, '{ }');