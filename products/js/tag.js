
riot.tag('begin', '<div show="{firstpageShow}" class="firstpage {firstpageClass}"> <div class="pageone"> <div class="title {fadeOutUp: notepageShow, animated: notepageShow}"><img data-layzr="/product/img/2015.png"></div> <div class="home-2 {fadeOut: notepageShow, animated: notepageShow}"><img data-layzr="/product/img/home-2.png"></div> <div class="home-1 {fadeOutDown: notepageShow, animated: notepageShow}"><img data-layzr="/product/img/home-1.png"></div> <div class="stars {fadeOut: notepageShow, animated: notepageShow}"> <div class="normal"><img data-layzr="/product/img/star.png" class="star star-0 animated flash"><img data-layzr="/product/img/star.png" class="star star-1 animated rotateIn"><img data-layzr="/product/img/star.png" class="star star-2 animated rotateIn"><img data-layzr="/product/img/star.png" class="star star-3 animated rotateOut"><img data-layzr="/product/img/star.png" class="star star-4 animated flash"><img data-layzr="/product/img/star.png" class="star star-5 animated flash"><img data-layzr="/product/img/star.png" class="star star-6 animated rotateOut"><img data-layzr="/product/img/star.png" class="star star-7 animated rotateIn"><img data-layzr="/product/img/star.png" class="star star-8 animated rotateOut"><img data-layzr="/product/img/star.png" class="star star-9 animated flash"> </div> </div> </div> <div show="{notepageShow}" class="pagetwo fadeIn animated delay-5"> <div class="title"><img data-layzr="/product/img/2015-sub.png"></div> <div riot-style="top:{toppx}px" class="text-content"> <div class="text"> <p>由中国保险报业股份有限公司发起，《中国保险报》、中保网和新浪财经共同主办的“2015年度保险产品评选”活动今日正式启动，现将本次评选活动的主要情况公告如下。</p> <p>【评选活动背景及意义】</p> <p>本次评选活动是对中国保险业2015年极具影响力的保险产品的评选，评选活动兼顾社会公众和专家学者意见，具有广泛性、代表性和影响力，将为保险企业在社会公众中展示自身产品和延伸产品服务提供平台，评选活动结合大众媒体的广泛宣传，对广大消费者了解保险产品、正确消费保险产品起到很好的引导作用。</p> <p>【评选奖项设置】</p> <p>1.年度健康保险产品;2.年度养老保险产品;3.年度终身寿险产品;</p> <p>4.年度两全保险产品;5.年度少儿保险产品;6.年度投资型保险产品;</p> <p>7.年度综合保障计划;8.年度意外保险产品;9.年度责任保险产品;</p> <p>10.年度机动车辆保险产品及服务;11.年度互联网保险产品;12.年度创新保险产品。</p> <p>【评选标准】</p> <p>专家评选委员会将从市场表现、市场好评度、公司服务水平和社会效益等方向重点考察参评产品。专家评委由来自不同背景、机构、组织的专家所组成，最大程度保证评选的公正、客观，专家评委包括部分保险公司产品研发和产品市场推广部门负责人、高校保险院系及社团组织机关负责人和财经媒体负责人。</p> <p>【评选办法和流程】</p> <p>1.产品征集。时间：2015年10月12日—2015年12月16日。</p> <p>2.网络公示。将参选产品上传到中保网和新浪网进行网络公示。</p> <p>时间：2015年10月12日—2015年12月底。</p> <p>3.微信投票。时间：2015年12月18日—2015年12月25日。</p> <p>4.报纸投票和专家投票。《中国保险报》公布参选保险产品，并开始报纸投票;与此同时，组成专家评委会对参选保险产品进行专家投票。时间：2015年12月18日—2015年12月25日。</p> <p>5.评委会根据网络投票、报纸投票和专家评委投票进行综合评定，确定最终评选结果。</p> <p>时间：2015年12月26日—2016年1月上旬。</p> <p>6.2015年度保险产品揭晓并颁奖，对部分获奖产品进行宣传报道。</p> <p>时间：2016年1月上旬—2016年3月。</p> <p>【评选活动运作管理】</p> <p>1.评委会秘书处：评委会秘书处设在《中国保险报》、中保网。</p> <p>2.联系电话：010-63998207，63998310，63998201。</p> </div> </div> <div onclick="{GameStart}" class="btn"><img src="/product/img/in-btn.png"></div> </div> </div> <div show="{listpageShow}" class="listpage"> <div class="content"> <div class="banner"><img src="/product/img/banner.png"></div> <div riot-style="top:{toppx2}px" show="{!detailpageShow}" class="list-content"> <div class="items"> <div each="{p in productlist}" onclick="{parent.showInfo(p)}" class="item"> <div class="name"><img data-layzr="/product/img/b-{parent.productlist.indexOf(p)+1}.png"></div> </div> </div> </div> <div riot-style="top:{toppx2}px" show="{detailpageShow}" class="detailpage"> <div class="title-box"> <div onclick="{backlist}" class="back"><img data-layzr="/product/img/back-btn.png"></div> <div class="title">{detail.name}</div> </div> <div class="items"> <div each="{item in detail.list}" class="item"> <div onclick="{showHide}" class="numbs">编号 {item.code}</div> <div onclick="{showHide}" class="name">{item.name}</div> <div class="vote"> <div onclick="{vote(item.code)}" class="on"><img src="/product/img/vote-on.png"></div> <div if="{item.on}" class="off"><img src="/product/img/vote-off.png"></div> </div> <div class="description">{item.description}</div> </div> </div> </div> </div> </div> <div show="{focusUs}" class="focusUs"> <div class="box"> <div class="qcode"><img src="/product/img/qrcode.jpg"></div> <div class="note-text"> <p>请使用微信打开此页面.</p> <p>长按二维码图片进行关注.</p> <p>请先关注我们的微信公众账号,然后参与投票.</p> <p>每人只能参与1票.</p> </div> <div onclick="{hideFocus}" class="close"><img src="/product/img/icon-close.png"></div> </div> </div>', function(opts) {
    var self = this
    self.firstpageShow = true
    self.notepageShow = false
    self.listpageShow = false
    self.detailpageShow = false
    self.focusUs = false
    self.productlist = productlist
    self.userinfo = false
    self.canRun = true
    self.abclist = []
    for (var i=0;i < self.productlist.length; i++) {
    	if (self.abclist.indexOf(self.productlist[i].abc) < 0) {
    		self.abclist.push(self.productlist[i].abc)
    	}
    }
    self.toppx = $("body").width()/640*200
    self.toppx2 = $("body").width()/640*320
    setTimeout(function(){
    	self.notepageShow = true
    	self.update()
    },6000)
    this.updateVote = function() {
    	for (i in voteList) {
    		for (n in self.detail.list) {
    			var m = self.detail.list[n]
    			if (voteList[i].product == m.code || m.on == true) {
    				m.on = true
    			}else{
    				m.on = false
    			}
    		}
    	}
    	self.update()
    }.bind(this);
    this.showNextPage = function() {
    	self.firstpageShow = false
    	self.notepageShow = true
    	self.update()
    }.bind(this);
    this.GameStart = function() {
    	self.firstpageShow = false
    	self.listpageShow = true
    	self.notepageShow = false
    	self.update()
    }.bind(this);
    this.showHide = function(evt) {
    	console.log()
    	if ($(evt.target).parents(".item").is(".on")) {
    		$(evt.target).parents(".item").removeClass("on")
    	}else{
    		$(evt.target).parents(".item").addClass("on")
    	}
    }.bind(this);
    this.showInfo = function(detail) {
    	return function() {

    		self.detailpageShow = true
    		self.detail = detail
    		self.updateVote()

    	}
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


    			if (!self.canRun) { return false }
    			self.canRun = false
    			$.get("http://kelvin-air.local:8990/product/vote/to/"+uid,{openid: openid},function(msg){
    				self.canRun = true
    				if (msg.recode == 200) {

    					SendNote("投票成功啦!")
    					voteList.push({product: uid})
    					self.updateVote()
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