
riot.tag('bingo', '<div class="bingo"> <div onclick="{checkRight}" class="bingo-img shadow"><img riot-src="http://disk.giccoo.com/BingoMe/{opts.url}"> <div if="{right}" riot-style="top: {like.y}px; left: {like.x}px" class="like bounceIn animated"><img src="http://disk.giccoo.com/projects/BingoMe-share/img/like.png"></div> </div> <div class="bingo-info"> <div class="time">{opts.time}</div> <div class="views">{opts.views}</div> <div class="bingoone">{opts.bingoone}</div> </div> </div>', function(opts) {
    var self = this
    self.right = false
    self.like = {x: 0, y: 0}
    this.checkRight = function(evt) {
    	if (self.right) { return false }
    	self.right = true
    	console.log(evt.pageX,evt.pageY,$(".bingo-img",self.root).offset())
    	self.like.x = evt.pageX - $(".bingo-img",self.root).offset().left - 30
    	self.like.y = evt.pageY - $(".bingo-img",self.root).offset().top - 30
    	self.update()
    	setTimeout(function(){

    		download.showQR()
    	},1000);
    }.bind(this);
  
});

riot.tag('download', '<div class="download"> <div if="{system == \'ios\'}" onclick="{showQR}" class="ios"><img src="http://disk.giccoo.com/projects/BingoMe-share/img/ios-download.png"></div> <div if="{system == \'android\'}" class="andriod"> <p>安卓正在紧张开发中...</p> </div> <div if="{system == \'other\'}" class="other"> <p>暂时只支持 iOS 和 Andriod</p> </div> </div> <div if="{qrcode}" class="qrcode fadeIn animated"> <div onclick="{closeQR}" class="close"><img src="http://disk.giccoo.com/projects/BingoMe-share/img/icon-close.png"></div> <div class="image"><img src="http://disk.giccoo.com/projects/BingoMe-share/img/qrcode.png"></div> <div class="text"> <p>想知道答案在哪吗?<br>长按二维码进行下载吧!</p> </div> </div>', function(opts) {
    var self = this
    download = this
    self.system = "ios"
    self.qrcode = false

    var ua = navigator.userAgent.toLowerCase()
    if (/iphone|ipad|ipod/.test(ua)) {
    	self.system = "ios"
    } else if (/android/.test(ua)) {
    	self.system = "android"
    } else {
    	self.system = "other"
    }
    this.showQR = function() {
    	self.qrcode = true
    	self.update()
    }.bind(this);
    this.closeQR = function() {
    	self.qrcode = false
    	self.update()
    }.bind(this);
  
});

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

riot.tag('recommend-list', '<div class="bingos"> <div each="{item in list}" class="item shadow"><img riot-src="http://disk.giccoo.com/BingoMe/{item}"></div> </div>', function(opts) {
    var self = this
    self.list = opts.urls.split(",")
  
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

riot.tag('user-info', '<div class="user"> <div class="avatar shadow"><img riot-src="http://disk.giccoo.com/BingoMe/{opts.avatar}"> </div> <div class="question shadow"> <p>{opts.question}</p> </div> <div class="nickname">{opts.nickname}</div> </div>', function(opts) {var self = this
});