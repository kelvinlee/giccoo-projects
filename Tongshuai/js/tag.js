
riot.tag('menus', '<div show="{!menu1 &amp;&amp; !menu2}" class="menu-list"> <ul> <li onclick="{showForm}" class="fadeInLeft animated delay-5"><img data-layzr="/Tongshuai/img/menu-1.png"></li> <li onclick="{showInfo}" class="fadeInLeft animated delay-6"><img data-layzr="/Tongshuai/img/menu-2.png"></li> <li class="fadeInLeft animated delay-7"><a href="http://www.tongshuai.com/" target="_blank"><img data-layzr="/Tongshuai/img/menu-3.png"></a></li> </ul> </div> <div show="{menu1}" class="menu-item"> <form action="http://api.giccoo.com/tongshuai/insert/" method="post" onsubmit="{submit}" class="form"> <div class="form-grounp"> <label for="username"><img data-layzr="/Tongshuai/img/form-username.png"></label> <input id="username" type="text" name="username"> </div> <div class="form-grounp"> <label for="mobile"><img data-layzr="/Tongshuai/img/form-mobile.png"></label> <input id="mobile" type="text" name="mobile"> </div> <div class="form-btn"> <button type="submit" class="submit"><img data-layzr="/Tongshuai/img/submit.png"></button> </div> <div onclick="{hideForm}" class="back-icon"><img data-layzr="/Tongshuai/img/close.png"></div> </form> </div> <div show="{menu2}" onclick="{hideInfo}" class="menu-item"><img data-layzr="/Tongshuai/img/info.png"> <div class="back-icon"><img data-layzr="/Tongshuai/img/close.png"></div> </div>', function(opts) {
    var self = this
    this.root.className += " menu-items"
    this.menu1 = false
    this.menu2 = false
    this.showForm = function() {
    	this.menu1 = true
    }.bind(this);
    this.showInfo = function() {
    	this.menu2 = true
    }.bind(this);
    this.hideForm = function() {
    	this.menu1 = false
    }.bind(this);
    this.hideInfo = function() {
    	this.menu2 = false
    }.bind(this);
    
    this.submit = function() {
    	var list = $("form",this.root).serializeArray()
    	if ( $("[name=username]",this.root).val().length < 1 || $("[name=username]",this.root).val() == "") {
    		alert("姓名不能为空")
    		return false
    	}
    	var reg = /^1\d{10}$/
    	if (!reg.test($("[name=mobile]",this.root).val())) {
    		alert("手机号码格式不正确")
    		return false
    	}
    	$.post("http://api.giccoo.com/tongshuai/insert/",list,function(msg){
    		if (msg.recode == 200) {
    			alert("提交成功!")
    			self.menu1 = false
    			self.update()
    			riot.route("/notes/"+wonShare)
    		}else if(msg.recode == 203){
    			alert(msg.reason)
    			self.menu1 = false
    			self.update()
    		}else{
    			alert(msg.reason)
    		}
    	})
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
    		_store.can = false
    		this.passpage.bind(this)("up")
    	}
    	if (gone < -50) {
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

riot.tag('shareicon', '<yield></yield><a href="{parent.getUrl(icon)}" each="{icon in icons}" class="share-icon icon-{icon}"><img riot-src="/{parent.site}/img/icon-{icon}.png"></a>', function(opts) {
    var self = this
    var list = {
    	"wechat":"javascript:void(0)",
    	"qweibo":"http://v.t.qq.com/share/share.php?title={title}&url={url}&pic={pic}",
    	"renren":"http://share.renren.com/share/buttonshare.do?title={title}&link={url}&pic={pic}",
    	"weibo":"http://v.t.sina.com.cn/share/share.php?title={title}&url={url}&pic={pic}",
    	"qzone":"http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url={url}&title={title}&pic={pic}",
    	"facebook":"http://www.facebook.com/sharer/sharer.php?s=100&p[url]={url}}&p[title]={title}&p[summary]={title}&pic={pic}",
    	"twitter":"https://twitter.com/intent/tweet?text={title}&pic={pic}",
    	"kaixin":"http://www.kaixin001.com/rest/records.php?content={title}&url={url}&pic={pic}",
    	"douban": "http://www.douban.com/share/service?bm=&image={pic}&href={url}&updated=&name={title}"
    }
    this.root.className += " share-icons"
    this.icons = opts.icons.split(",")
    this.site = opts.site
    this.title = opts.title
    this.url = opts.url == "local"?window.location.href:opts.url
    this.pic = opts.pic
    this.getUrl = function(icon) {

    	var u = list[icon]
    	u = u.replace("{title}",encodeURIComponent(this.title))
    	u = u.replace("{url}",encodeURIComponent(this.url))
    	u = u.replace("{pic}",encodeURIComponent(this.pic))
    	return u
    }.bind(this);
  
});

riot.tag('share', '<div if="{opts.name==\'notes\'}" class="note-title fadeInLeft animated delay-5"><img src="/Tongshuai/img/note-title.png"></div> <div if="{opts.name!=\'notes\'}" class="share-title fadeInLeft animated delay-5"><img src="/Tongshuai/img/share-title.png"></div> <div class="t-shirt fadeInLeft animated delay-8"> <div class="clear"><img src="/Tongshuai/img/t-shirt.png"></div> <div if="{icon || text || stamp}" class="icons"> <div if="{icon}" class="icon1 {icon}"><img riot-src="/Tongshuai/img/{icon}.png"></div> <div if="{text}" class="icon2 {text}"><img riot-src="/Tongshuai/img/{text}-dark.png"></div> <div if="{stamp}" class="icon3 {stamp}"><img riot-src="/Tongshuai/img/{stamp}.png"></div> <div class="kv"><img src="/Tongshuai/img/kv-2.png"></div> </div> </div> <div if="{opts.name==\'notes\'}" class="share-icons fadeInLeft animated delay-10"> <div class="share"></div> <shareicon site="Tongshuai" title="“小行走大改变”，正年轻你的，还在等什么？" url="local" pic="http://disk.giccoo.com/projects/Tongshuai/img/share-pc.jpg" icons="douban,weibo,qzone,wechat"><span class="share-icon">分享到</span></shareicon> </div><a if="{opts.name!=\'notes\'}" href="#/" class="join fadeInLeft animated delay-10"><img src="/Tongshuai/img/join.png"></a>', function(opts) {
    var self = this
    Store[opts.name] = this
    var list = opts.action.split(",")
    this.icon = list[0] != "null"?list[0]:null
    this.text = list[1] != "null"?list[1]:null
    this.stamp = list[2] != "null"?list[2]:null
  
});

riot.tag('shirt', '<div class="t-shirt"> <div class="clear"><img data-layzr="/Tongshuai/img/t-shirt.png"></div> <div class="icons"> <div if="{icon}" class="icon1 {icon}"><img if="{icon}" riot-src="/Tongshuai/img/{icon}.png"></div> <div if="{text}" class="icon2 {text}"><img if="{text}" riot-src="/Tongshuai/img/{text}-dark.png"></div> <div if="{stamp}" class="icon3 {stamp}"><img if="{stamp}" riot-src="/Tongshuai/img/{stamp}.png"></div> <div class="kv"><img data-layzr="/Tongshuai/img/kv-2.png"></div> <div if="{icon || text || stamp}" onclick="{finished}" class="btn submit"><img src="/Tongshuai/img/finished.png"></div> <div if="{icon || text || stamp}" onclick="{clear}" class="btn reset"><img src="/Tongshuai/img/reset.png"></div><a href="#/homepage2/" class="btn back"><img data-layzr="/Tongshuai/img/back.png"></a> </div> </div> <div class="ctrl-box {ctrlbox}"> <div class="box-content"> <slider id="slider-icon" callback="{iconCheck}" class="l"> <div each="{parent.icons}" class="slide"> <div each="{a in icons}" onclick="{parent.parent.parent.selectIcon(a)}" class="item"><img data-layzr="/Tongshuai/img/{a}.png"></div> </div> </slider> <slider id="slider-text" callback="{textCheck}" class="l"> <div each="{parent.texts}" class="slide"> <div each="{t in icons}" onclick="{parent.parent.parent.selectText(t)}" class="item"><img data-layzr="/Tongshuai/img/{t}.png"></div> </div> </slider> <div class="slider-box"> <div class="slider"> <div each="{stamps}" class="slide"> <div each="{p in icons}" onclick="{parent.parent.selectStamp(p)}" class="item"><img data-layzr="/Tongshuai/img/{p}.png"></div> </div> </div> </div> </div> </div>', function(opts) {
    var self = this
    this.ctrlbox = "up"
    this.icons = [
    	{icons:["icon-1","icon-2","icon-3"]},
    	{icons:["icon-4","icon-5","icon-6"]},
    	{icons:["icon-7"]}
    ]
    this.texts = [
    	{icons:["text-1","text-2","text-3"]},
    	{icons:["text-4","text-5","text-6"]},
    	{icons:["text-7"]}
    ]
    this.stamps = [
    	{icons:["stamp-1","stamp-2","stamp-3"]}
    ]
    this.icon = null
    this.text = null
    this.stamp = null
    this.clear = function() {
    	this.icon = null
    	this.text = null
    	this.stamp = null
    	this.update()
    }.bind(this);
    this.selectIcon = function(icon) {

    	return function() {
    		self.icon = icon
    		self.update()
    	}
    }.bind(this);
    this.selectText = function(text) {

    	return function() {
    		self.text = text
    		self.update()
    	}
    }.bind(this);
    this.selectStamp = function(stamp) {
    	return function() {
    		self.stamp = stamp
    		self.update()
    	}
    }.bind(this);
    this.iconCheck = function(i) {

    	var Max = this.icons.length - 1
    	var ep = $("#slider-icon",this.root)
    	ep.removeClass("l r")
    	if (Math.abs(i) == 0) {
    		return ep.addClass("l")
    	}
    	if (Math.abs(i) == Max) {
    		return ep.addClass("r")
    	}
    	ep.addClass("l r")
    }.bind(this);
    this.textCheck = function(i) {
    	var Max = this.icons.length - 1
    	var ep = $("#slider-text",this.root)
    	ep.removeClass("l r")
    	if (Math.abs(i) == 0) {
    		return ep.addClass("l")
    	}
    	if (Math.abs(i) == Max) {
    		return ep.addClass("r")
    	}
    	ep.addClass("l r")
    }.bind(this);
    this.offset = {}
    this.touchstart = function(evt) {
    	var touch = evt.touches[0]
    	this.offset.y = touch.pageY
    	this.offset.move = true

    }
    this.touchmove = function(evt) {
    	var touch = evt.touches[0]
    	this.offset.deltaY = touch.pageY - this.offset.y

    	if (!this.offset.move) {return ''}
    	if (this.offset.deltaY > 10 || this.offset.deltaY < -10) {
    		evt.preventDefault()
    	}
    	if (this.offset.deltaY > 30) {
    		this.ctrlbox = "up"
    		this.offset.move = false
    		this.update()
    	}
    	if (this.offset.deltaY < -30) {
    		this.ctrlbox = "down"
    		this.offset.move = false
    		this.update()
    	}
    }
    this.touchend = function(evt) {
    
    }
    this.on("mount",function(){
    	var ep = $(".ctrl-box",this.root)[0]
    	ep.addEventListener("touchstart", this.touchstart.bind(this))
    	ep.addEventListener("touchmove", this.touchmove.bind(this))
    	ep.addEventListener("touchend", this.touchend.bind(this))
    })
    
    this.finished = function() {
    	wonShare = this.icon+","+this.text+","+this.stamp
    	riot.route("/menus/"+wonShare)
    }.bind(this);
  
});

riot.tag('slider', '<div riot-style="-webkit-transition-duration: {duration}s;transition-duration: {duration}s; -webkit-transform: translate3d({x}px,0,0); transform: translate3d({x}px,0,0);" class="slider"><yield></yield></div>', function(opts) {
    var self = this

    this.root.className += " slider-box"
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
    	var touch = evt.touches[0]

    	slider = $(".slider",this.root)
    	this.duration = 0
    	this.offset.deltaX = 0
    	this.startTime = +new Date()
    	this.offset.w = slider.width()
    	this.offset.x = touch.pageX
    	this.offset.y = touch.pageY
    	this.offset.lastw = this.x
    	this.offset.lastSlide = -(slider.find(".slide").length-1)
    	this.offset.scrollableArea = this.offset.w * slider.find(".slide").length


    	this.update()
    }
    this.touchmove = function(evt) {
    	var touch = evt.touches[0]
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
    	if (this.offset.deltaX > 10 || this.offset.deltaX < -10){
    		evt.preventDefault()
    	}



    	
    	this.update()
    }
    this.touchend = function(evt) {
    	if (this.offset.isScrolling || this.offset.deltaX == 0) {
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