
riot.tag('begin', '<div show="{firstpageShow}" class="firstpage {firstpageClass}"> <div class="content"> <div class="background animated fadeInLeft duration-10"><img data-layzr="http://disk.giccoo.com/projects/showman/img/huabiao.png"></div> <div class="dove animated fadeInRight duration-30 delay-10"><img data-layzr="http://disk.giccoo.com/projects/showman/img/dove.png"></div> <div class="cp"> <div class="cp-1 animated zoomIn duration-10 delay-10"><img data-layzr="http://disk.giccoo.com/projects/showman/img/cp-1-1.png"></div> <div class="cp-2 animated zoomIn duration-10 delay-15"><img data-layzr="http://disk.giccoo.com/projects/showman/img/cp-1-2.png"></div> <div class="cp-3 animated zoomIn duration-10 delay-20"><img data-layzr="http://disk.giccoo.com/projects/showman/img/cp-1-3.png"></div> <div class="stars animated fadeIn delay-25"> <div class="normal"><img data-layzr="http://disk.giccoo.com/projects/showman/img/star.png" class="star star-0 animated flash"><img data-layzr="http://disk.giccoo.com/projects/showman/img/star.png" class="star star-1 animated hinge"><img data-layzr="http://disk.giccoo.com/projects/showman/img/star.png" class="star star-2 animated rotateIn"><img data-layzr="http://disk.giccoo.com/projects/showman/img/star.png" class="star star-3 animated rotateOut"><img data-layzr="http://disk.giccoo.com/projects/showman/img/star.png" class="star star-4 animated flash"><img data-layzr="http://disk.giccoo.com/projects/showman/img/star.png" class="star star-5 animated flash"><img data-layzr="http://disk.giccoo.com/projects/showman/img/star.png" class="star star-6 animated hinge"><img data-layzr="http://disk.giccoo.com/projects/showman/img/star.png" class="star star-7 animated rotateIn"><img data-layzr="http://disk.giccoo.com/projects/showman/img/star.png" class="star star-8 animated rotateOut"><img data-layzr="http://disk.giccoo.com/projects/showman/img/star.png" class="star star-9 animated flash"> </div> </div> </div> <div onclick="{showNextPage}" class="btn animated bounceIn duration-10 delay-25"><img data-layzr="http://disk.giccoo.com/projects/showman/img/btn-1.png"></div> </div> </div> <div show="{notepageShow}" class="notepage {notepageClass}"> <div class="content"> <div class="banner"><img src="http://disk.giccoo.com/projects/showman/img/banner.jpg"></div> <div riot-style="top:{toppx}px" class="text-content"> <div class="text"> <p>由《中国保险报》、中保网主办的“2014中国保险年度人物”评选活动正式启动。该项活动是保险文化建设的重要载体。评选的目的是大力宣传保险业先进人物践行社会主义核心价值观，以及保险监管核心价值理念、保险行业核心价值理念的先进精神和优秀事迹。该项评选活动已历八届，在保险业内外弘扬了正能量，产生了广泛的社会影响。此次活动主题词为“创新、服务、规范”，旨在更好地体现保险业锐意创新、服务大众的突出形象。</p> <p>评选标准</p> <p> 入围“2014中国保险年度人物”评选的候选人，须是认可保险行业核心价值理念，并在2014年度中对中国保险业发展起到促进、推动作用或在社会上产生广泛反响的重大事件中的代表人物。具体评选标准如下： </p> <p>1. 创新力 候选人在2014年的表现对保险业改革创新产生重要促进作用。</p> <p>2. 产业影响力 候选人在保险业具有重要影响力。</p> <p>3. 公众影响力 候选人对社会公众层面产生了重要影响。</p> <p>4. 前瞻性 候选人对保险业发展大势具有良好的把握能力，具有引领保险业发展潮流的战略思维。</p> <p>5. 社会责任感 候选人具有良好的社会形象，具有保险业的大爱精神。</p> <p>&nbsp;</p> <p>&nbsp;</p> </div> <div class="hide-D"><img src="http://disk.giccoo.com/projects/showman/img/hide.png"></div> </div> <div onclick="{GameStart}" class="btn"><img src="http://disk.giccoo.com/projects/showman/img/btn-2.png"></div> </div> </div> <div show="{listpageShow}" class="listpage"> <div class="content"> <div class="banner"><img src="http://disk.giccoo.com/projects/showman/img/banner-last.png"></div> <div riot-style="top:{toppx2}px" class="list-content"> <div class="note-note"> <p>＊ 以下候选人按姓氏字母排序,点击字母快速定位。</p> </div> <div class="items"> <div each="{userlist}" class="item {abc}"> <div onclick="{parent.showInfo}" class="avatar"><img riot-src="http://disk.giccoo.com/projects/showman/img/{avatar}.jpg"></div> <div onclick="{parent.showInfo}" class="name"> <p class="username">{name}</p> <p class="subtitle">{subtitle}</p> </div> <div onclick="{parent.vote(uid)}" class="btn"><img src="http://disk.giccoo.com/projects/showman/img/vote-btn.png"></div> </div> </div> </div> <div riot-style="top:{toppx2}px" class="abc-list"><span each="{abc in abclist}" onclick="{parent.scrollToAbc}">{abc}</span></div> </div> </div> <div show="{detailpageShow}" class="detailpage"> <div class="content"> <div class="banner"><img src="http://disk.giccoo.com/projects/showman/img/banner-last.png"></div> <div onclick="{backlist}" class="back"><img src="http://disk.giccoo.com/projects/showman/img/back.png"></div> <div if="{userinfo}" riot-style="top:{toppx2+33}px" class="userinfo"> <div class="info"> <div class="avatar"><img src="http://disk.giccoo.com/projects/showman/img/avatar.jpg"></div> <div class="user-name"> <p class="usertitle">{userinfo.name}</p> <p class="subtitle">{userinfo.subtitle}</p> <p class="votes">得票: {userinfo.numbers}</p> <div onclick="{vote(userinfo.uid)}" class="btn"><img src="http://disk.giccoo.com/projects/showman/img/vote-btn.png"></div> </div> </div> <div class="description"> <p>{userinfo.description}</p> </div> </div> </div> </div> <div show="{focusUs}" class="focusUs"> <div class="box"> <div class="qcode"><img src="http://disk.giccoo.com/projects/showman/img/qrcode.jpg"></div> <div class="note-text"> <p>请使用微信打开此页面.</p> <p>长按二维码图片进行关注.</p> <p>请先关注我们的微信公众账号,然后参与投票.</p> <p>每人每天总计100票.</p> <p>对单个参评人最多每天投10票.</p> </div> <div onclick="{hideFocus}" class="close"><img src="http://disk.giccoo.com/projects/showman/img/icon-close.png"></div> </div> </div>', function(opts) {
    var self = this
    self.firstpageShow = true
    self.notepageShow = false
    self.listpageShow = false
    self.detailpageShow = false
    self.focusUs = false
    self.userlist = userinfo
    self.userinfo = false
    self.abclist = []
    for (var i=0;i < self.userlist.length; i++) {
    	if (self.abclist.indexOf(self.userlist[i].abc) < 0) {
    		self.abclist.push(self.userlist[i].abc)
    	}
    }
    self.toppx = $("body").width()/640*370
    self.toppx2 = $("body").width()/640*398
    this.showNextPage = function() {
    	self.firstpageShow = false
    	self.notepageShow = true
    	self.update()
    }.bind(this);
    this.GameStart = function() {
    	self.listpageShow = true
    	self.notepageShow = false
    	self.update()
    }.bind(this);
    this.showInfo = function(evt) {
    	self.listpageShow = false
    	self.detailpageShow = true
    	self.userinfo = evt.item
    	self.update()
    }.bind(this);
    this.backlist = function() {
    	self.listpageShow = !false
    	self.detailpageShow = !true
    	self.update()
    }.bind(this);
    this.vote = function(uid) {
    	return function() {
    		console.log(uid)
    		if (openid != "") {
    			$.get("http://i.giccoo.com/showman/vote/to/"+uid,{openid: openid},function(msg){
    				if (msg.recode == 200) {

    					SendNote("投票成功啦!")
    					for (var i = self.userlist.length-1; i >= 0 ; i--) {
    						if (self.userlist[i].uid == uid) {
    							self.userlist[i].numbers++
    							self.update()
    							break
    						}
    					}
    				}else if (msg.recode == 222) {
    					self.focusUs = true
    					self.update()
    				}else{

    					SendNote(msg.reason)
    				}
    			})
    		}else{
    			self.focusUs = true
    			self.update()
    		}
    	}
    }.bind(this);
    this.hideFocus = function() {
    	self.focusUs = false
    	self.update()
    }.bind(this);
    this.scrollToAbc = function(evt) {
    	var e = $("."+evt.item.abc,self.root).eq(0).offset()
    	var scrollTop = $(".list-content",self.root).scrollTop()

    	var temp = e.top + scrollTop - self.toppx2
    	$(".list-content",self.root).scrollTo(parseInt(temp))
    }.bind(this);
  
});

riot.tag('note', '<div class="note-box"> <div class="note-content {animated:true,fadeInUp:!close,fadeOutUp:close}"> <div class="note-text"> <div class="icon-form"><img src="http://disk.giccoo.com/projects/showman/img/icon-alert-note.png"></div> {title} </div> </div> </div>', function(opts) {
    var self = this
    this.title = opts.title
    this.close = false
    this.time = opts.time?parseInt(opts.time):1500
    $(this.root).addClass("note")

    this.on("mount",function(){
    	setTimeout(function(){
    		self.unmount()
    	},self.time)
    	setTimeout(function(){
    		self.close = true
    		self.update()
    	},self.time-500)
    })
  
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

riot.tag('shareicon', '<yield></yield><a href="{parent.getUrl(icon)}" each="{icon in icons}" class="share-icon icon-{icon}"><img riot-src="http://disk.giccoo.com/projects/{parent.site}/img/icon-{icon}.png"></a>', function(opts) {
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