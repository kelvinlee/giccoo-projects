
riot.tag('playsound', '<div if="{icon}" onclick="{change}" class="icon-play {type}"><img riot-src="{iconNow}"></div> <audio id="playgrounp" riot-src="{src}" autoplay="true" loop="loop"></audio>', function(opts) {
    var self = this
    this.src = opts.src
    this.icon = opts.icon
    this.iconPlay = opts["icon-play"]
    this.iconStop = opts["icon-stop"]
    if (this.icon) {
    	this.iconNow = this.iconStop
    }
    this.type = null
    this.root.className += "playsound"
    this.change = function() {
    	var audio = document.getElementById("playgrounp")
    	if (this.iconNow == this.iconPlay) {
    		audio.pause()
    	}else{
    		audio.play()
    	}
    }.bind(this);
    this.on("mount",function(){
    	var audio = document.getElementById("playgrounp")
    	audio.addEventListener("pause",function(){
    		self.iconNow = self.iconStop
    		self.type = "pause"
    		self.update()
    	})
    	audio.addEventListener("play",function(){
    		self.iconNow = self.iconPlay
    		self.type = "play"
    		self.update()
    	})
    })
  
});

riot.tag('select-list', '<div class="logo"><img data-src="img/logo.png"></div> <div step="1" max="2" class="page page-1 on"> <div class="rivers"> <div class="river river-1"> <div class="item"><img src="img/item-bl.png"></div> <div class="item"><img src="img/item-bl.png"></div> <div class="item"><img src="img/item-bl.png"></div> <div class="item"><img src="img/item-bl.png"></div> <div class="item"><img src="img/item-bl.png"></div> <div class="item"><img src="img/item-bl.png"></div> <div class="item"><img src="img/item-bl.png"></div> <div class="item"><img src="img/item-bl.png"></div> <div class="item"><img src="img/item-bl.png"></div> <div class="item"><img src="img/item-bl.png"></div> <div class="item"><img src="img/item-bl.png"></div> <div class="item"><img src="img/item-bl.png"></div> </div> <div class="river river-2"> <div class="item"><img src="img/item-bl.png"></div> <div class="item"><img src="img/item-bl.png"></div> <div class="item"><img src="img/item-bl.png"></div> <div class="item"><img src="img/item-bl.png"></div> <div class="item"><img src="img/item-bl.png"></div> <div class="item"><img src="img/item-bl.png"></div> <div class="item"><img src="img/item-bl.png"></div> <div class="item"><img src="img/item-bl.png"></div> <div class="item"><img src="img/item-bl.png"></div> <div class="item"><img src="img/item-bl.png"></div> <div class="item"><img src="img/item-bl.png"></div> <div class="item"><img src="img/item-bl.png"></div> </div> <div class="river river-3"> <div class="item"><img src="img/item-bl.png"></div> <div class="item"><img src="img/item-bl.png"></div> <div class="item"><img src="img/item-bl.png"></div> <div class="item"><img src="img/item-bl.png"></div> <div class="item"><img src="img/item-bl.png"></div> <div class="item"><img src="img/item-bl.png"></div> <div class="item"><img src="img/item-bl.png"></div> <div class="item"><img src="img/item-bl.png"></div> <div class="item"><img src="img/item-bl.png"></div> <div class="item"><img src="img/item-bl.png"></div> <div class="item"><img src="img/item-bl.png"></div> <div class="item"><img src="img/item-bl.png"></div> </div> <div class="river river-4"> <div class="item"><img src="img/item-bl.png"></div> <div class="item"><img src="img/item-bl.png"></div> <div class="item"><img src="img/item-bl.png"></div> <div class="item"><img src="img/item-bl.png"></div> <div class="item"><img src="img/item-bl.png"></div> <div class="item"><img src="img/item-bl.png"></div> <div class="item"><img src="img/item-bl.png"></div> <div class="item"><img src="img/item-bl.png"></div> <div class="item"><img src="img/item-bl.png"></div> <div class="item"><img src="img/item-bl.png"></div> <div class="item"><img src="img/item-bl.png"></div> <div class="item"><img src="img/item-bl.png"></div> </div> <div class="river river-5"> <div class="item"><img data-src="img/item-blm.png"></div> <div class="item"><img data-src="img/item-blm.png"></div> <div class="item"><img data-src="img/item-blm.png"></div> <div class="item"><img data-src="img/item-blm.png"></div> <div class="item"><img data-src="img/item-blm.png"></div> <div class="item"><img data-src="img/item-blm.png"></div> <div class="item"><img data-src="img/item-blm.png"></div> <div class="item"><img data-src="img/item-blm.png"></div> <div class="item"><img data-src="img/item-blm.png"></div> <div class="item"><img data-src="img/item-blm.png"></div> <div class="item"><img data-src="img/item-blm.png"></div> <div class="item"><img data-src="img/item-blm.png"></div> </div> <div class="lw lw-1"><img data-src="img/p-1-p.png"></div> <div class="lw lw-2"><img data-src="img/p-1-y.png"></div> <div class="lw lw-3"><img data-src="img/p-1-m.png"></div> <div class="lw lw-4"><img data-src="img/p-1-b.png"></div> </div> <div class="bg"></div> <div class="banner fadeIn animated delay-5"><img data-src="img/banner.png"></div> <div class="banner-text fadeIn animated delay-7"><img data-src="img/banner-text.png"></div> <div class="haibao-note bounceIn animated delay-5"> <div class="box"><img data-src="img/haibao-note.png"></div> </div> <div class="haibao fadeInUp animated delay-5"> <div class="haibao-list"> <div class="item item-4"><img data-src="img/film-4.png"> <div class="item-click-4"></div> </div> <div class="item item-3"><img data-src="img/film-3.png"> <div class="item-click-3"></div> </div> <div class="item item-2"><img data-src="img/film-2.png"> <div class="item-click-2"></div> </div> <div class="item item-1"><img data-src="img/film-1.png"> <div class="item-click-1"></div> </div> </div> </div> <div id="phone" onclick="{showPop}" class="phone"> <div class="over"></div> <div class="phone-item"><img data-src="img/phone.png"></div><img data-src="img/piao.jpg"> </div> </div> <div step="1" max="4" class="page page-2"> <div class="film-box"> <div class="film film-1"> <div class="bg"><img data-src="img/film-bg.png"> <div class="content"><img data-src="img/film-1.jpg"></div> <div class="bainian"><img data-src="img/mate8-bainian.png"></div> <div onclick="{goGame}" class="link"><img data-src="img/link.png"></div> </div> </div> <div class="film film-2"> <div class="bg"><img data-src="img/film-bg.png"> <div class="content"><img data-src="img/film-2.jpg"></div> <div class="bainian"><img data-src="img/mate8-bainian.png"></div> <div onclick="{goGame}" class="link"><img data-src="img/link.png"></div> </div> </div> <div class="film film-3"> <div class="bg"><img data-src="img/film-bg.png"> <div class="content"><img data-src="img/film-3.jpg"></div> <div class="bainian"><img data-src="img/mate8-bainian.png"></div> <div onclick="{goGame}" class="link"><img data-src="img/link.png"></div> </div> </div> <div class="film film-4"> <div class="bg"><img data-src="img/film-bg.png"> <div class="content"><img data-src="img/film-4.jpg"></div> <div class="bainian"><img data-src="img/mate8-bainian.png"></div> <div onclick="{goGame}" class="link"><img data-src="img/link.png"></div> </div> </div> </div> </div> <div class="page page-3"> <div class="bg {boxrun}"><img data-src="img/bg-line.jpg"></div> <div onclick="{closeShare}" class="share"><img data-src="img/share.png"></div> <div onclick="{runGame}" class="box {boxrun}"> <div class="mk"><img data-src="img/box-bg.png"> <div class="line-box"> <div class="line line-1"> <div class="ls"> <ul> <li><img data-src="img/run-4.png"></li> <li><img data-src="img/run-1.png"></li> <li><img data-src="img/run-2.png"></li> <li><img data-src="img/run-3.png"></li> </ul> <ul> <li><img data-src="img/run-4.png"></li> <li><img data-src="img/run-1.png"></li> <li><img data-src="img/run-2.png"></li> <li><img data-src="img/run-3.png"></li> </ul> <ul> <li><img data-src="img/run-4.png"></li> <li><img data-src="img/run-1.png"></li> <li><img data-src="img/run-2.png"></li> <li><img data-src="img/run-3.png"></li> </ul> <ul> <li><img data-src="img/run-4.png"></li> <li><img data-src="img/run-1.png"></li> <li><img data-src="img/run-2.png"></li> <li><img data-src="img/run-3.png"></li> </ul> </div> </div> <div class="line line-2"> <div class="ls"> <ul> <li><img data-src="img/run-2.png"></li> <li><img data-src="img/run-1.png"></li> <li><img data-src="img/run-3.png"></li> <li><img data-src="img/run-4.png"></li> </ul> <ul> <li><img data-src="img/run-2.png"></li> <li><img data-src="img/run-1.png"></li> <li><img data-src="img/run-3.png"></li> <li><img data-src="img/run-4.png"></li> </ul> <ul> <li><img data-src="img/run-2.png"></li> <li><img data-src="img/run-1.png"></li> <li><img data-src="img/run-3.png"></li> <li><img data-src="img/run-4.png"></li> </ul> <ul> <li><img data-src="img/run-2.png"></li> <li><img data-src="img/run-1.png"></li> <li><img data-src="img/run-3.png"></li> <li><img data-src="img/run-4.png"></li> </ul> </div> </div> <div class="line line-3"> <div class="ls"> <ul> <li><img data-src="img/run-3.png"></li> <li><img data-src="img/run-1.png"></li> <li><img data-src="img/run-4.png"></li> <li><img data-src="img/run-2.png"></li> </ul> <ul> <li><img data-src="img/run-3.png"></li> <li><img data-src="img/run-1.png"></li> <li><img data-src="img/run-4.png"></li> <li><img data-src="img/run-2.png"></li> </ul> <ul> <li><img data-src="img/run-3.png"></li> <li><img data-src="img/run-1.png"></li> <li><img data-src="img/run-4.png"></li> <li><img data-src="img/run-2.png"></li> </ul> <ul> <li><img data-src="img/run-3.png"></li> <li><img data-src="img/run-1.png"></li> <li><img data-src="img/run-4.png"></li> <li><img data-src="img/run-2.png"></li> </ul> </div> </div> </div> <div class="hongbao"> <div class="box-m"><img data-src="img/hongbao.png"></div> </div> </div> <div class="hand"><img data-src="img/box-hand.png"> <div class="stars"> <div class="star star-1"><img data-src="img/star.png"></div> <div class="star star-2"><img data-src="img/star.png"></div> <div class="star star-3"><img data-src="img/star.png"></div> <div class="star star-4"><img data-src="img/star.png"></div> <div class="star star-5"><img data-src="img/star.png"></div> </div> </div> </div> <div onclick="{showPop}" class="piao {boxrun}"> <div class="over"></div><img data-src="img/piao.png"> <div class="pop"><img data-src="img/pop.png"></div> </div> </div> <div class="next"><img data-src="img/next.png"></div> <div show="{pop}" onclick="{closePop}" class="note-page fadeIn animated"> <div class="close"><img data-src="img/icon-close.png"></div> <div class="content"><img data-src="img/pop.png"></div> </div>', function(opts) {
    var self = this
    self.boxrun = ""
    self.pop = false
    target = null
    _default = {x: 0,y: 0}
    _can = true
    this.closeShare = function() {
    	$(".share",self.root).hide()
    }.bind(this);
    this.showPop = function() {
    	if (self.boxrun != "") { return false }
    	self.pop = true
    	console.log(self.pop)
    	self.update()
    }.bind(this);
    this.closePop = function() {
    	self.pop = false
    	self.update()
    }.bind(this);
    this.runGame = function() {
    	if (self.boxrun != "") { return false }
    	console.log("starGame")
    	self.closePop()
    	$(".line-1 .ls",self.root)[0].addEventListener(ANIMATION_END_NAME,function(){

    		self.boxrun = "run end"
    		self.update()
    	})
    	$(".page-3 .hongbao",self.root)[0].addEventListener(TRANSITION_END_NAME,function(){

    		setTimeout(function(){
    			window.location.href = relinkTo
    		},300)
    	})
    	self.boxrun = "run star"
    	self.update()
    	setTimeout(function(){
    		self.boxrun = "run"
    		self.update()
    	},2000)
    }.bind(this);
    this.starGame = function() {
    	$(".next",self.root).hide()
    }.bind(this);
    this.goGame = function() {
    	$(".page",self.root).removeClass("on")
    	$(".page-3",self.root).addClass("on")
    }.bind(this);
    this.stepRun = function(target,run) {

    	if (run) {
    		max = parseInt(target.attr("max"))
    		step = parseInt(target.attr("step"))

    		if (step < max) {
    			target.attr("step",step+1)
    		}else{
    			target.removeClass("on")
    			target.next().addClass("on")
    			if (target.is(".page-3") || target.next().is(".page-3")) {
    				self.starGame()
    			}
    		}
    	}else{
    		step = parseInt(target.attr("step"))
    		if (step > 1) {
    			target.attr("step",step-1)
    		}else{
    			if (target.is(".page-1")) { return false }
    			target.removeClass("on")
    			target.prev().addClass("on")
    		}
    	}
    }.bind(this);
    this.PageTouchstart = function(evt) {
    	touch = evt.touches[0]
    	target = $(evt.target).is(".page") ? $(evt.target) : $(evt.target).parents(".page")
    	_default.x = touch.pageX
    	_default.y = touch.pageY
    	console.log(target)
    }.bind(this);
    this.PageTouchmove = function(evt) {
    	touch = evt.touches[0]
    	delta = touch.pageY - _default.y
    	evt.preventDefault()
    	if (!_can) {return false}
    	console.log("move: ",delta)
    	if (delta > 50) { 
    		_can = false
    		self.stepRun(target,false) 
    	}
    
    	if (delta < -50) { 
    		_can = false
    		self.stepRun(target,true) 
    	}
    }.bind(this);
    this.PageTouchend = function(evt) {
    	_can = true
    }.bind(this);
    
    this.phoneTouchstart = function(evt) {
    	evt.stopPropagation()
    	evt.preventDefault()
    	$(".phone .pop,.piao .pop",this.root).show()
    }.bind(this);
    this.phoneTouchend = function(evt) {
    	evt.stopPropagation()
    	evt.preventDefault()
    	$(".phone .pop,.piao .pop",this.root).hide()	
    }.bind(this);
    this.on("mount", function(){






    	pageOne = $(".page-1",self.root)
    	pageOne[0].addEventListener("touchstart", self.PageTouchstart)
    	pageOne[0].addEventListener("touchmove", self.PageTouchmove)
    	pageOne[0].addEventListener("touchend", self.PageTouchend)
    	pageTwo = $(".page-2",self.root)
    	pageTwo[0].addEventListener("touchstart", self.PageTouchstart)
    	pageTwo[0].addEventListener("touchmove", self.PageTouchmove)
    	pageTwo[0].addEventListener("touchend", self.PageTouchend)
    	console.log("mount")
    
    })
  
});

riot.tag('slider', '<div riot-style="-webkit-transition-duration: {duration}s;transition-duration: {duration}s; -webkit-transform: translate3d({x}px,0,0); transform: translate3d({x}px,0,0);" class="slider"><yield></yield></div>', function(opts) {
    var self = this

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
    	setTimeout(function(){
    		opts.callback && opts.callback(Math.abs(self.x / $(".slider",self.root).width()))
    	},1)
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