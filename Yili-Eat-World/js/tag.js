
riot.tag('begin', '<div show="{firstpageShow}" class="firstpage {firstpageClass}"> <div class="content"> <div class="cp"> <div class="cp-1 animated fadeInLeft delay-1"><img data-layzr="http://disk.giccoo.com/projects/Yili-Eat-World/img/cp-1-1.png"> <div class="cp-2 animated fadeInLeft delay-3"><img data-layzr="http://disk.giccoo.com/projects/Yili-Eat-World/img/cp-1-2.png"></div> </div> <div class="cp-4 animated fadeInRight delay-20"><img data-layzr="http://disk.giccoo.com/projects/Yili-Eat-World/img/cp-1-4.png"></div> <div class="cp-w animated fadeInRight delay-15"><img data-layzr="http://disk.giccoo.com/projects/Yili-Eat-World/img/stomach.png"></div> </div> <div class="items animated fadeIn delay-18"> <div class="item animated fadeIn item-1 delay-21"><img data-layzr="http://disk.giccoo.com/projects/Yili-Eat-World/img/icon-p1-1.png"></div> <div class="item animated fadeIn item-2 delay-22"><img data-layzr="http://disk.giccoo.com/projects/Yili-Eat-World/img/icon-p1-2.png"></div> <div class="item animated fadeIn item-3 delay-23"><img data-layzr="http://disk.giccoo.com/projects/Yili-Eat-World/img/icon-p1-3.png"></div> <div class="item animated fadeIn item-4 delay-24"><img data-layzr="http://disk.giccoo.com/projects/Yili-Eat-World/img/icon-p1-4.png"></div> <div class="item animated fadeIn item-5 delay-25"><img data-layzr="http://disk.giccoo.com/projects/Yili-Eat-World/img/icon-p1-5.png"></div> <div class="item animated fadeIn item-6 delay-26"><img data-layzr="http://disk.giccoo.com/projects/Yili-Eat-World/img/icon-p1-6.png"></div> </div> <div onclick="{nextPage}" class="button animated fadeInUp delay-25"><img data-layzr="http://disk.giccoo.com/projects/Yili-Eat-World/img/cp-1-5.png"> <div class="note animated fadeInRight delay-30"><img data-layzr="http://disk.giccoo.com/projects/Yili-Eat-World/img/cp-1-6.png"></div> </div> </div> </div> <div show="{notepageShow}" class="notepage {notepageClass}"> <div class="content"> <div class="cp"> <div class="cp-1 animated fadeInDown delay-5"><img data-layzr="http://disk.giccoo.com/projects/Yili-Eat-World/img/cp-2-1.png"> <div class="cp-2 animated fadeInLeft delay-6"><img data-layzr="http://disk.giccoo.com/projects/Yili-Eat-World/img/cp-2-7.png"></div> </div> <div class="cp-3 animated fadeInLeft delay-8"><img data-layzr="http://disk.giccoo.com/projects/Yili-Eat-World/img/cp-2-2.png"> <div class="cp-4 animated fadeInLeft delay-10"><img data-layzr="http://disk.giccoo.com/projects/Yili-Eat-World/img/cp-2-3.png"></div> <div class="cp-5 animated fadeInLeft delay-12"><img data-layzr="http://disk.giccoo.com/projects/Yili-Eat-World/img/cp-2-4.png"></div> </div> <div class="cp-w animated fadeInRight delay-15"><img data-layzr="http://disk.giccoo.com/projects/Yili-Eat-World/img/stomach.png"></div> </div> <div class="items animated fadeIn delay-18"> <div class="item animated fadeIn item-1 delay-21"><img data-layzr="http://disk.giccoo.com/projects/Yili-Eat-World/img/icon-p1-1.png"></div> <div class="item animated fadeIn item-2 delay-22"><img data-layzr="http://disk.giccoo.com/projects/Yili-Eat-World/img/icon-p1-2.png"></div> <div class="item animated fadeIn item-3 delay-23"><img data-layzr="http://disk.giccoo.com/projects/Yili-Eat-World/img/icon-p1-3.png"></div> <div class="item animated fadeIn item-4 delay-24"><img data-layzr="http://disk.giccoo.com/projects/Yili-Eat-World/img/icon-p1-4.png"></div> <div class="item animated fadeIn item-5 delay-25"><img data-layzr="http://disk.giccoo.com/projects/Yili-Eat-World/img/icon-p1-5.png"></div> <div class="item animated fadeIn item-6 delay-26"><img data-layzr="http://disk.giccoo.com/projects/Yili-Eat-World/img/icon-p1-6.png"></div> </div> <div onclick="{readyGame}" class="button animated fadeInUp delay-17"><img data-layzr="http://disk.giccoo.com/projects/Yili-Eat-World/img/cp-2-5.png"> <div class="note animated fadeInRight delay-20"><img data-layzr="http://disk.giccoo.com/projects/Yili-Eat-World/img/cp-2-6.png"></div> </div> </div> </div>', function(opts) {
    var self = this
    this.firstpageClass = ""
    this.firstpageShow = true
    this.notepageClass = ""
    this.notepageShow = false
    this.ready = false
    this.nextPage = function() {
    	this.notepageShow = true
    	this.firstpageClass = "animated fadeOut"
    	this.notepageClass = "animated fadeIn"
    	setTimeout(function(){
    		this.notepageClass = ""
    		self.firstpageShow = false
    		self.update()
    	},600)
    }.bind(this);
    this.readyGame = function() {
    	if (this.ready) {return false}
    	this.notepageClass = "animated fadeOut"
    	this.ready = true
    	setTimeout(function(){
    		self.root.className += "hide"
    		self.notepageShow = false
    		$(".page.game").removeClass("hide")
    		setTimeout(function(){
    			Store.game.build()
    		},500)
    		self.update()
    	},600)
    }.bind(this);
  
});

riot.tag('game', '<div show="{!lastPage}" class="game-box"> <div if="{puttyP}" class="putty animated fadeInLeft"><img src="http://disk.giccoo.com/projects/Yili-Eat-World/img/game-over-plate.png"> <div class="content"> <div each="{puttyList}" class="item"> <div class="icon-item"><img riot-src="http://disk.giccoo.com/projects/Yili-Eat-World/img/game-item-{name}.png"><span>X{value}</span></div> </div> </div> </div> <div class="game-plate"> <div class="notes-msg"> <div each="{notes}" class="note {noteClass}"><img src="http://disk.giccoo.com/projects/Yili-Eat-World/img/note-bg.png"> <div class="text"><img riot-src="http://disk.giccoo.com/projects/Yili-Eat-World/img/note-content-{noteNum}.png"></div> </div> </div> <div class="canvas"> <div id="Curtain"></div> </div> <div class="plates"> <div class="plate milknumber"><img data-layzr="http://disk.giccoo.com/projects/Yili-Eat-World/img/icon-box.png"> <div class="text-content"><span class="icon"><img data-layzr="http://disk.giccoo.com/projects/Yili-Eat-World/img/icon-note-milk.png"></span><span class="milk">{milk}</span></div> </div> <div class="plate score"><img data-layzr="http://disk.giccoo.com/projects/Yili-Eat-World/img/icon-box.png"> <div class="text-content"><span class="icon"><img data-layzr="http://disk.giccoo.com/projects/Yili-Eat-World/img/icon-note-score.png"></span><span class="score">{score}</span></div> </div> </div> </div> <div show="{gameoverP}" class="gameover animated fadeIn duration-2"><img data-layzr="http://disk.giccoo.com/projects/Yili-Eat-World/img/game-over.png"></div> </div> <div show="{lastPage}" class="active-over"> <div class="over-list fadeInDown animated delay-9"> <div class="title"><img data-layzr="http://disk.giccoo.com/projects/Yili-Eat-World/img/game-over-all.png"></div> <div class="content"> <div each="{puttyList}" class="item"> <div class="icon-item"><img riot-src="http://disk.giccoo.com/projects/Yili-Eat-World/img/game-item-{name}.png"><span>X{value}</span></div> </div> </div> </div> <div class="over-score"> <p>获得 {score} 能量</p> </div> <div class="over-title fadeInDown animated delay-5"><img data-layzr="http://disk.giccoo.com/projects/Yili-Eat-World/img/game-over-title.png"> <div class="over-title-text tada animated delay-9"><img riot-src="http://disk.giccoo.com/projects/Yili-Eat-World/img/game-over-title-{overtitle}.png"></div> </div> <div class="over-note fadeInDown animated delay-11"><img data-layzr="http://disk.giccoo.com/projects/Yili-Eat-World/img/game-over-note.png"></div> <div id="share-icons" class="share-icons fadeInDown animated delay-13"> </div> <div onclick="{resetGame}" class="over-regame fadeInDown animated delay-7"><img data-layzr="http://disk.giccoo.com/projects/Yili-Eat-World/img/again.png"></div> </div><img data-layzr="http://disk.giccoo.com/projects/Yili-Eat-World/img/game-over-plate.png" style="display:none"><img data-layzr="http://disk.giccoo.com/projects/Yili-Eat-World/img/reset-game.png" style="display:none"><img data-layzr="http://disk.giccoo.com/projects/Yili-Eat-World/img/note-content-1.png" style="display:none"><img data-layzr="http://disk.giccoo.com/projects/Yili-Eat-World/img/note-content-2.png" style="display:none"><img data-layzr="http://disk.giccoo.com/projects/Yili-Eat-World/img/note-content-3.png" style="display:none"><img data-layzr="http://disk.giccoo.com/projects/Yili-Eat-World/img/note-content-4.png" style="display:none"><img data-layzr="http://disk.giccoo.com/projects/Yili-Eat-World/img/note-content-5.png" style="display:none">', function(opts) {
    var self = this
    var tween = null
    var retime = 0
    this.game = null
    this.gameoverP = false
    this.lastPage = false
    this.puttyP = false
    this.note = false
    this.notes = []
    this.noteClass = ""
    Store.game = this
    this.score = 0
    this.milk = 0
    this.overtitle = 1
    this.puttyList = []

    this.defaultPoint = {
    	x: 0,
    	y: 0,
    	returnTranN: true,
    	returnTranO: true
    }
    this.start = function(evt) {
    	var touch = evt.touches[0]
    	this.defaultPoint.x = touch.pageX
    	this.defaultPoint.y = touch.pageY
    }.bind(this);
    this.move = function(evt) {
    	var touch = evt.touches[0]
    	var _y = this.defaultPoint.y - touch.pageY
    	var _x = this.defaultPoint.x - touch.pageX
    	evt.preventDefault()
    	if (_y < -20 || _y > 20 || _x < -20 || _x > 20) {
    		if (Math.abs(_y) > Math.abs(_x)) {
    			if (_y < -20) { return self.game.changeD(3) }
    			if (_y > 20) { return self.game.changeD(1) }
    		}else{
    			if (_x < -20) {return self.game.changeD(2) }
    			if (_x > 20) {return self.game.changeD(4) }
    		}
    	}
    }.bind(this);
    this.end = function(evt) {
    
    }.bind(this);
    this.root.addEventListener("touchstart",this.start.bind(this))
    this.root.addEventListener("touchmove",this.move.bind(this))
    this.root.addEventListener("touchend",this.end.bind(this))
    this.build = function(){
    	$("#Curtain canvas").remove()
    	self.game = new Game("eat-world","Curtain",this.scoreFun.bind(this),this.noteFun.bind(this),this.puttyFun.bind(this),this.gameover.bind(this))
    }
    this.gameover = function(list) {
    	console.log("over")
    	$("#share-icons").html("")
    	self.puttyList = []
    	for (var food in list) {
    		console.log(food)
    		self.puttyList.push({name:food,value:list[food]})
    	}

    	var nameList = ["吃货","吃霸","吃鬼","吃神","吃仙"]
    	self.overtitle = parseInt(self.score/100)
    	if (self.overtitle > nameList.length-1) {
    		self.overtitle = nameList.length - 1
    	}
    	var name = nameList[self.overtitle]
    	var howmany = parseInt(self.score/300*100)
    	var number = parseInt((new Date().getTime() - new Date(1431878400000).getTime()) / 1000 / 60 * 4000/(24*60))
    	howmany = howmany>99? 99 : howmany < 1 ? 1 : howmany

    	riot.mount("div#share-icons","shareicon",{
    		site:"Yili-Eat-World",
    		title:"我是第"+number+"名"+nameList[self.overtitle]+",获得"+self.score+"能量,战胜"+howmany+"%对手,不服?来吃！",
    		url: "local",
    		pic: "http://disk.giccoo.com/projects/Yili-Eat-World/img/share-pc.jpg",
    		icons: "wechat,weibo,qweibo,douban"
    	})
    	self.overtitle += 2
    	self.gameoverP = true
    	self.update()
    	setTimeout(function(){
    		self.lastPage = true
    		self.update()
    	},1500)
    }
    this.goon = function() {
    	self.puttyP = false
    	setTimeout(function(){
    		self.game.play()
    	},1000)
    	self.update()
    }.bind(this);
    this.resetGame = function() {

    	if (self.game == null) {return false}
    	if (retime >= 3) {
    		window.location.reload()
    		return ''
    	}
    	retime++
    	self.game = null
    	self.gameoverP = false
    	self.lastPage = false
    	self.puttyP = false
    	self.note = false
    	self.notes = []
    	self.noteClass = ""

    	self.score = 0
    	self.milk = 0
    	self.overtitle = 1
    	self.puttyList = []
    	$("#Curtain canvas").remove()
    	self.update()
    	setTimeout(function(){
    		self.build()
    	},1000)
    }.bind(this);
    this.puttyFun = function(list) {
    	console.log("彩蛋",list)
    	self.puttyList = []
    	for (var food in list) {
    		console.log(food)
    		self.puttyList.push({name:food,value:list[food]})
    	}
    	self.puttyP = true
    	self.game.pause()
    	self.update()
    	setTimeout(function(){
    		self.goon()
    	},5000)
    }
    this.noteFun = function(id) {
    	if (id >= 2 && id <= 5) {
    		self.notes.push({noteClass: "animated fadeInUp",noteNum: "vegetables"})
    	}
    	if (id >= 6 && id <= 9) {
    		self.notes.push({noteClass: "animated fadeInUp",noteNum: "fruit"})
    	}
    	if (id >= 10 && id <= 13) {
    		self.notes.push({noteClass: "animated fadeInUp",noteNum: "meat"})
    	}
    	if (id >= 16 && id <= 18) {
    		self.notes.push({noteClass: "animated fadeInUp",noteNum: "nuts"})
    	}
    	if (id == 1) {
    		self.notes.push({noteClass: "animated fadeInUp",noteNum: parseInt(Math.random()*5)+1})
    	}
    	if (id == 15) {
    		self.notes.push({noteClass: "animated fadeInUp",noteNum: "egg"})
    	}
    	if (id == 14) {
    		self.notes.push({noteClass: "animated fadeInUp",noteNum: "cookie"})
    	}
    	console.log("Milk 提示",id)

    	setTimeout(function(){
    		for(var i=0; i<=self.notes.length-1;i++) {
    			if (self.notes[i].noteClass == "animated fadeOutDown") {
    				self.notes.clean(self.notes[i])
    				break
    			}
    		}
    		for(var i=0; i<=self.notes.length-1;i++) {
    			if (self.notes[i].noteClass == "animated fadeInUp"){
    				self.notes[i].noteClass = "animated fadeOutDown"
    				self.update()
    				break
    			}
    		}
    	},3500)
    }
    this.scoreFun = function() {
    	console.log(self.game.score)
    	self.milk = self.game.milk
    	if (tween) {
    		tween.stop()
    	}
    	tween = new TWEEN.Tween({x:self.score}).to({x:self.game.score},1000).onUpdate(function(){
    		self.score = parseInt(this.x)
    		self.update()
    	}).start()
    	self.update()
    }
  
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