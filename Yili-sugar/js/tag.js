
riot.tag('begin', '<div onclick="{nextPage}" class="shakeNote fadeInDown animated delay-5"><img data-layzr="/Yili-sugar/img/rotate.png"> <div class="hand"><img data-layzr="/Yili-sugar/img/rotate-hand.png"></div> </div> <div class="cp"> <div class="cp-2 fadeInLeft animated delay-7"><img data-layzr="/Yili-sugar/img/cp-1-2.png"></div> <div class="cp-3 fadeInRight animated delay-7"><img data-layzr="/Yili-sugar/img/cp-1-3.png"></div> <div class="bottle fadeInDown animated delay-9"><img data-layzr="/Yili-sugar/img/bottle.png"></div> <div class="cp-1 fadeInDown animated delay-11"><img data-layzr="/Yili-sugar/img/cp-1-1.png"></div> </div>', function(opts) {
    var self = this
    var SHAKE_THRESHOLD = 800
    var last_update = 0
    var acc = {x: 0,y: 0,z: 0}
    this.runing = false
    this.nextPage = function() {
    	if (self.runing) {return false}
    	self.runing = true
    	$(".page.begin").addClass("fadeOut animated")
    	setTimeout(function(){
    		$(".page.begin").removeClass("fadeOut animated").addClass("hide")
    		self.runing = false
    		self.update()
    	},550)
    	$(".page.content").removeClass("hide")
    	window.removeEventListener('devicemotion',self.deviceMotionHandler, false)
    }.bind(this);
    this.deviceMotionHandler = function(eventData) {
    	if (self.runing) {return false}
    	var acceleration, curTime, diffTime, speed;
    	acceleration = eventData.accelerationIncludingGravity;
    	curTime = new Date().getTime();
    	if ((curTime - last_update) > 100) {
    		diffTime = curTime - last_update;
    		last_update = curTime;
    		speed = Math.abs(acceleration.x + acceleration.y + acceleration.z - acc.x - acc.y - acc.z) / diffTime * 10000;
    		if (speed > SHAKE_THRESHOLD) {
    			self.nextPage()
    		}
    		acc.x = acceleration.x;
    		acc.y = acceleration.y;
    		return acc.z = acceleration.z;
    	}
    }
    this.on("mount",function(){
    	var over = function(){
    		window.addEventListener('devicemotion',self.deviceMotionHandler, false)
    		$(".shakeNote",self.root)[0].removeEventListener(ANIMATION_END_NAME,over)
    	}
    	$(".shakeNote",self.root)[0].addEventListener(ANIMATION_END_NAME,over)
    })
  
});

riot.tag('content', '<div show="{!other &amp;&amp; !pop}" class="page-content"> <div class="content-page"></div> <div class="bg zoomIn animated delay-9"><img data-layzr="/Yili-sugar/img/sugar.png"></div> <div class="cp"> <div class="content"> <div class="bottle fadeInDown animated delay-5"><img data-layzr="/Yili-sugar/img/bottle.png"></div> <div class="cp-note fadeInDown animated delay-7"><img data-layzr="/Yili-sugar/img/cp-1-1.png"></div> <div onclick="{selectPage(1)}" class="btn btn-1"></div> <div onclick="{selectPage(2)}" class="btn btn-2"></div> <div onclick="{selectPage(3)}" class="btn btn-3"></div> <div onclick="{selectPage(4)}" class="btn btn-4"></div> </div> <div class="animated zoomIn animated cp-1 delay-12"><img data-layzr="/Yili-sugar/img/cp-2-1.png"></div> <div class="animated zoomIn animated cp-2 delay-14"><img data-layzr="/Yili-sugar/img/cp-2-2.png"></div> <div class="animated zoomIn animated cp-3 delay-16"><img data-layzr="/Yili-sugar/img/cp-2-3.png"></div> <div class="animated zoomIn animated cp-4 delay-18"><img data-layzr="/Yili-sugar/img/cp-2-4.png"></div> </div> </div> <div if="{other}" class="page-other fadeIn animated"> <div class="ad fadeInDown animated delay-5"><img src="/Yili-sugar/img/ad.png"></div> <div onclick="{back}" class="back fadeInDown animated delay-7"><img src="/Yili-sugar/img/back.png"></div> <div class="banner fadeInDown animated delay-9"><img src="/Yili-sugar/img/banner.png"></div> <div if="{otherPage == 1}" class="other-content fadeIn animated delay-14 o-1"><img data-src="/Yili-sugar/img/cp-3-1.jpg"><img data-src="/Yili-sugar/img/cp-3-2.jpg"><img data-src="/Yili-sugar/img/cp-3-3.jpg"><img data-src="/Yili-sugar/img/cp-3-4.jpg"><img data-src="/Yili-sugar/img/cp-3-5.jpg"><img data-src="/Yili-sugar/img/cp-3-6.jpg"><img data-src="/Yili-sugar/img/cp-3-7.jpg"> </div> <div if="{otherPage == 3}" class="other-content fadeIn animated delay-14 o-3"><img data-src="/Yili-sugar/img/cp-4-2.png"> <div class="manhua"><img data-src="/Yili-sugar/img/cp-4-1.jpg"></div> </div> <div if="{otherPage == 4}" class="other-content fadeIn animated delay-14 o-4"><img data-src="/Yili-sugar/img/cp-5-1.jpg"><img data-src="/Yili-sugar/img/cp-5-2.jpg"><img data-src="/Yili-sugar/img/cp-5-3.jpg"><img data-src="/Yili-sugar/img/cp-5-4.jpg"><img data-src="/Yili-sugar/img/cp-5-5.jpg"><img data-src="/Yili-sugar/img/cp-5-6.jpg"><img data-src="/Yili-sugar/img/cp-5-7.jpg"> </div> <div class="over fadeIn animated delay-11"><img data-src="/Yili-sugar/img/over.png"></div> <div class="share-list fadeIn animated delay-11"> <shareicon icons="wechat,weibo,douban,qzone" site="Yili-sugar" title="糖CUT派对邀你一起HIGH,现场各种高逼格小礼物满足你N型人格！" url="local" pic="http://disk.giccoo.com/projects/Yili-sugar/img/share-pc.jpg"></shareicon> </div> <div onclick="{backTop}" class="backTop fadeIn animated delay-11"><img data-src="/Yili-sugar/img/back-end.png"></div> </div> <div if="{pop}" class="pop fadeIn animated"> <div onclick="{back}" class="pop-content slideInDown animated delay-7 duration-10"><img data-src="/Yili-sugar/img/pop.jpg"></div> </div> <div show="{false}" class="loadlist"><img data-layzr="/Yili-sugar/img/ad.png"><img data-layzr="/Yili-sugar/img/back.png"><img data-layzr="/Yili-sugar/img/banner.png"></div>', function(opts) {
    var self = this
    this.other = false
    this.pop = false
    this.otherPage = 0
    this.selectPage = function(p) {
    	return function() {
    		if (p == 2) {
    			console.log(p)
    			self.pop = true
    			self.update()
    			setTimeout(function(){var layzr = new Layzr({selector: '[data-src]',attr:'data-src'})},10)
    			return false
    		}
    		self.other = true
    		self.otherPage = p
    		self.update()
    		setTimeout(function(){var layzr = new Layzr({selector: '[data-src]',attr:'data-src'})},10)
    	}
    }.bind(this);
    this.backTop = function() {
    	$(".page-other",self.root)[0].scrollTop = 0
    }.bind(this);
    this.back = function() {
    	self.pop = false
    	self.other = false
    	self.otherPage = 0
    	self.update()
    }.bind(this);
  
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
    document.title = this.title
    this.getUrl = function(icon) {

    	var u = list[icon]
    	u = u.replace("{title}",encodeURIComponent(this.title))
    	u = u.replace("{url}",encodeURIComponent(this.url))
    	u = u.replace("{pic}",encodeURIComponent(this.pic))
    	return u
    }.bind(this);
  
});