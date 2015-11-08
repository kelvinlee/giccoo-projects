
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

riot.tag('select-list', '<div class="logo"><img src="http://disk.giccoo.com/projects/huaweiG7/img/logo.png"></div> <div class="phone"><img src="http://disk.giccoo.com/projects/huaweiG7/img/phone.png"></div> <div show="{pageCup}" class="cup-select fadeIn animated"> <div class="notetitle">左右滑动，来杯酒，<br>测试下您的性格类型？</div> <div class="sliders"> <slider callback="{sliderFun}"> <div each="{cocktail in parent.cocktails}" class="slide"> <div class="cup"><img riot-src="{cocktail.thumb}"><span class="winename">{cocktail.name}</span></div> </div> </slider> <div onclick="{setSilderNumLeft}" class="left"><img src="http://disk.giccoo.com/projects/huaweiG7/img/left.png"></div> <div onclick="{setSilderNumRight}" class="right"><img src="http://disk.giccoo.com/projects/huaweiG7/img/right.png"></div> </div> <div onclick="{selectCup}" class="select"><img src="http://disk.giccoo.com/projects/huaweiG7/img/select-btn.png"></div> </div> <div show="{pagePop}" class="pop bounceInDown animated"> <div class="bg"><img src="http://disk.giccoo.com/projects/huaweiG7/img/pop-bg.png"> <div class="answer"><img riot-src="{cocktails[n].answer}"></div> <div onclick="{showVideos}" class="btn-video"><img src="http://disk.giccoo.com/projects/huaweiG7/img/btn-video.png"></div> </div> <div onclick="{showShare}" class="share-btn delay-10 fadeIn animated"><img src="http://disk.giccoo.com/projects/huaweiG7/img/btn-share.png"></div> </div> <div show="{pageVideos}" class="videos fadeIn animated"> <div class="video-screen"> <video if="{pageVideos &amp;&amp; v}" controls="true" riot-src="{v.mp4}" width="620" height="340" poster="{v.thum}" webkit-playsinline="webkit-playsinline"></video> <div if="{!v}" class="video-no"> <video width="620" height="340" controls="true" poster="http://disk.giccoo.com/projects/huaweiG7/img/video-thum.jpg" webkit-playsinline="webkit-playsinline"></video><span>即将上映</span> </div> </div> <div class="video-list"> <div each="{ video in videos }" onclick="{parent.changeVideo(video)}" class="video-btn"></div> </div> <div class="btns"> <div onclick="{showShare}" class="share-btn"><img src="http://disk.giccoo.com/projects/huaweiG7/img/btn-share.png"></div> <div onclick="{backHome}" class="back-home"><img src="http://disk.giccoo.com/projects/huaweiG7/img/back-home.png"></div> </div> </div> <div show="{pageShare}" onclick="{hideShare}" class="share-note fadeIn animated"><img src="/libs/img/wechat.png"></div>', function(opts) {
    var self = this
    this.pageCup = true
    this.pagePop = false
    this.pageVideos = false
    this.pageShare = false

    this.videos = [{mp4:"http://t.douban.com/img/files/file-144698473774769.mp4",thum:"http://disk.giccoo.com/projects/huaweiG7/img/video-thum.jpg"},false,false]
    this.v = this.videos[0]
    this.n = 0
    this.cocktails = [
    	{name:"血腥玛丽",thumb:"http://disk.giccoo.com/projects/huaweiG7/img/cup-1.png",answer:"http://disk.giccoo.com/projects/huaweiG7/img/answer-1.png",shareText:"一杯血腥玛丽竟然暴露了我的性格，你也来一杯？"},
    	{name:"玛格丽特",thumb:"http://disk.giccoo.com/projects/huaweiG7/img/cup-2.png",answer:"http://disk.giccoo.com/projects/huaweiG7/img/answer-2.png",shareText:"此时你也在喝一杯马特利特，在想Ta吗？"},
    	{name:"红葡萄酒",thumb:"http://disk.giccoo.com/projects/huaweiG7/img/cup-3.png",answer:"http://disk.giccoo.com/projects/huaweiG7/img/answer-3.png",shareText:"红葡萄变身性格分析师，敢来续杯么？"},
    	{name:"干马提尼",thumb:"http://disk.giccoo.com/projects/huaweiG7/img/cup-4.png",answer:"http://disk.giccoo.com/projects/huaweiG7/img/answer-4.png",shareText:"一杯酒，一种性格，你相信吗？"},
    ]
    this.selectCup = function() {
    	self.pageCup = false
    	self.pagePop = true
    	self.pageVideos = false
    	self.pageShare = false
    	UpdateShare(self.cocktails[self.n].shareText)
    }.bind(this);
    this.showVideos = function() {
    	self.pageCup = false
    	self.pagePop = false
    	self.pageVideos = true
    	self.pageShare = false
    }.bind(this);
    this.backHome = function() {

    	self.pageCup = true
    	self.pagePop = false
    	self.pageVideos = false
    	self.pageShare = false
    	UpdateShare("树洞酒吧，喝杯酒，听首歌，看微电影，再来测测你的个性...")
    }.bind(this);
    this.showShare = function() {
    	self.pageShare = true
    }.bind(this);
    this.hideShare = function() {
    	self.pageShare = false
    }.bind(this);
    this.sliderFun = function(n) {
    	this.n = Math.abs(n)
    	this.update()
    }.bind(this);
    this.changeVideo = function(video) {
    	return function() {
    		self.v = video
    		self.update()
    	}
    }.bind(this);
    this.setSilderNumLeft = function() {
    	if (self.n < self.cocktails.length-1) {
    		self.tags.slider.setNumber(self.n+1)
    		self.tags.slider.setSlideNumber(0)
    	}
    }.bind(this);
    this.setSilderNumRight = function() {
    	if (self.n > 0) {
    		self.tags.slider.setNumber(self.n-1)
    		self.tags.slider.setSlideNumber(0)
    	}
    }.bind(this);
  
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