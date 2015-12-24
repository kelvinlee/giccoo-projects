
riot.tag('brands', '<canvas width="{opts.width}" height="{opts.height}"></canvas>', function(opts) {
    var self = this
    var stage = null
    var playerSprite = null
    console.log(opts)
    this.count = parseInt(opts.count)
    this.url = opts.src
    this.play = opts.play
    this.animations = JSON.parse('{"normal": '+opts.normal+', "replay": '+opts.replay+', "stop": '+opts.stop+'}')
    console.log(self.animations)
    createjs.Ticker.setFPS(30)
    if (opts.id&&global) { global[opts.id] = self }
    this.init = function() {
    	stage = new createjs.Stage($("canvas",this.root)[0])
    	brandImages = []
    	for(var i=1;i<=self.count;i++) {
    		brandImages.push(self.url.replace("id",i))
    	}
    	playerSheet = new createjs.SpriteSheet({
    		images: brandImages,
    		framerate: 30,
    		frames: {
    			height: opts.height,
    			width: opts.width,
    			regX: 0,
    			regY: 0,
    			count: self.count
    		},
    		animations: self.animations
    	});
    	playerSprite = new createjs.Sprite(playerSheet, self.play);
    	stage.addChild(playerSprite)
    	stage.update()
    	createjs.Ticker.addEventListener("tick", self.tick)
    }.bind(this);
    
    this.tick = function(evt) {
    	stage.update()
    }.bind(this);
    
    this.on("mount",function(){
    	self.init()
    	self.update()
    })
    
    this.replay = function(name) {
    	playerSprite.gotoAndPlay(name)
    	console.log(name)
    }.bind(this);
  
});

riot.tag('gif', '<div width="{opts.width}" height="{opts.height}" class="gif {opts.id} {played}"></div>', function(opts) {
    var self = this
    var loads = []
    self.now = 0
    self.count = parseInt(opts.count)
    self.max = parseInt(opts.count)
    self._loaded = 0
    self.loaded = false
    self.mounted = false
    self.Stop = false
    self.play = opts.play
    self.delayFun = null
    
    var fpsInterval = 1000/30
    var then = Date.now()
    var startTime = then
    var now = Date.now()
    var passmove = false
    
    
    if (opts.id&&global) { global[opts.id] = self }
    if (opts.load) {


    	self.max = parseInt(eval(opts["prepare"])[1])+1
    }
    for (var i=0;i < self.max; i++) {
    	var image = new Image()
    	image.src = opts.src.replace("id",i+1)
    	image.onload = function(){
    		self.load(this)
    	}
    	loads.push(image)
    }
    this.reload = function() {


    	for (var i=parseInt(eval(opts["prepare"])[1])+1;i < self.count; i++) {
    		var image = new Image()
    		image.src = opts.src.replace("id",i+1)
    		image.onload = function(){
    			self._reload()
    		}
    		loads.push(image)
    	}
    	self.NotReinit = true

    	return parseInt(self.count) - parseInt(eval(opts["prepare"])[1])+1
    }.bind(this);
    this._reload = function() {
    	self._loaded++
    	loadProgress()
    	if (parseInt(self._loaded/self.count*100) == 100) {
    		self.loaded = true
    		self.loadend()
    	}
    }.bind(this);
    this.load = function() {
    	self._loaded++


    	loadProgress()
    	if (parseInt(self._loaded/self.max*100) == 100) {
    		self.loaded = true
    		self.loadend()
    	}
    }.bind(this);
    this.loadend = function() {

    	loadGIF()
    	if (self.NotReinit) {return false}
    	self.init()
    }.bind(this);
    this.init = function() {
    	if (self.loaded && self.mounted) {
    		self.replay(opts.play)
    	}
    }.bind(this);
    this.replay = function(name) {

    	self.play = name
    	clearTimeout(self.delayFun)
    	if (opts.passmove) {
    		passmove = parseInt(opts.passmove)
    	}
    	if (opts.prerun) {
    		eval(opts.prerun+"('"+name+"')")
    	}
    	if (name == "stop") {
    		self.now = parseInt(opts[name])
    		$(".gif",self.root).html(loads[self.now])
    		self.Stop = false
    	}
    	if (opts[name]) {
    		self.Stop = false
    		var playList = eval(opts[name])
    		self.now = playList[0]
    		self.max = playList[1]
    		self.next = playList[2]

    		if (self.now == self.max) {
    			$(".gif",self.root).html(loads[self.now])
    			self.Stop = true
    			return true
    		}
    		then = Date.now()
    		self.animate()
    	}
    }.bind(this);
    this.animate = function() {
    	if (self.Stop) { return false }
    	now = Date.now()
    	var elapsed = now - then
    	if (elapsed > fpsInterval) {
    		then = now - (elapsed%fpsInterval)

    		$(".gif",self.root).html(loads[self.now])
    		self.now++
    		if (passmove && self.now >= passmove) {
    			passmove = false
    			passMoveFun(opts.id)
    		}
    		if (self.now > self.max) {
    			self.now = self.max
    			self.Stop = true


    			if (opts.delay) {
    				self.delayFun = setTimeout(function(){
    					self.replay(self.next)
    				},opts.delay)
    				return false
    			}
    			if (opts.callback && self.play == "replay") {
    				eval(opts.callback+".call()")
    			}
    			if (opts.playend && self.play == "replay") {
    				eval(opts.playend+".call()")
    			}
    			self.replay(self.next)
    			return false 
    		}
    	}
    	if (fps >= 20) {
    		requestAnimationFrame(self.animate)
    	}else{
    		setTimeout(self.animate,1000/20)
    	}
    }.bind(this);
    this.on("mount",function(){

    	self.mounted = true
    	self.init()
    })
  
});

riot.tag('main', ' <div class="main"> <div class="homepage"> <div class="bottle bottle-logo"><img data-layzr="img/bottle-logo.png"> <div id="bottlelogo" width="480" height="620" count="63" normal="normal" replay="stop" stop="stop" play="normal" src="img/animate/bottle-logo/logo.png" onload="test()" class="gif bottlelogo normal"> <div class="gif-content"><img data-layzr="img/animate/bottle-logo/logo.png"></div> </div> <div onclick="openBottleMain(this)" page-name="logo" class="on-button"></div> </div> <div class="bottle bottle-strategy"><img data-layzr="img/bottle-strategy.png"> <div id="bottlestrategy" width="850" height="200" count="78" normal="replay" replay="stop" stop="stop" play="normal" src="img/animate/bottle-strategy/strategy.png" class="gif bottlestrategy normal"> <div class="gif-content"><img data-layzr="img/animate/bottle-strategy/strategy.png"></div> </div> <div class="shadow"><img data-layzr="img/bottle-strategy-shadow.png"></div> <div onclick="openBottleMain(this)" page-name="strategy" class="on-button"></div> </div> <div class="bottle bottle-technology"><img data-layzr="img/bottle-technology.png"> <div id="bottletechnology" width="800" height="260" count="60" normal="normal" replay="stop" stop="stop" play="normal" src="img/animate/bottle-technology/technology.png" class="gif bottletechnology normal"> <div class="gif-content"><img data-layzr="img/animate/bottle-technology/technology.png"></div> </div> <div class="shadow"><img data-layzr="img/bottle-technology-shadow.png"></div> <div onclick="openBottleMain(this)" page-name="technology" class="on-button"></div> </div> <div class="bottle bottle-brand"><img data-layzr="img/bottle-brand.png"> <div id="bottlebrand" width="300" height="750" count="51" normal="normal" replay="stop" stop="stop" play="normal" src="img/animate/bottle-brand/brand.png" class="gif bottlebrand normal"> <div class="gif-content"><img data-layzr="img/animate/bottle-brand/brand.png"></div> </div> <div onclick="openBottleMain(this)" page-name="brand" class="on-button"></div> <div class="bubbles"> <div class="bubble bubble-1"><img data-layzr="img/homepage-bubble.png"></div> <div class="bubble bubble-2"><img data-layzr="img/homepage-bubble.png"></div> <div class="bubble bubble-3"><img data-layzr="img/homepage-bubble.png"></div> </div> </div> <div class="bottle bottle-media"><img data-layzr="img/bottle-media.png"> <div id="bottlemedia" width="380" height="380" count="76" normal="normal" replay="stop" stop="stop" play="normal" src="img/animate/bottle-media/media.png" class="gif bottlemedia normal"> <div class="gif-content"><img data-layzr="img/animate/bottle-media/media.png"></div> </div> <div class="shadow"><img data-layzr="img/bottle-media-shadow.png"></div> <div onclick="openBottleMain(this)" page-name="media" class="on-button"></div> </div> <div class="bottle bottle-contactus"> <div id="bottlecontactus" width="480" height="480" count="66" normal="normal" replay="stop" stop="stop" play="normal" src="img/animate/bottle-contactus/contactus.png" class="gif bottlecontactus normal"> <div class="gif-content"><img data-layzr="img/animate/bottle-contactus/contactus.png"></div> </div> <div class="shadow"><img data-layzr="img/bottle-contactus-shadow.png"></div> <div onclick="openBottleMain(this)" page-name="contactus" class="on-button"></div> </div> <div class="bottle bottle-award"> <div id="bottleaward" width="600" height="300" count="82" normal="normal" replay="stop" stop="stop" play="normal" src="img/animate/bottle-award/award.png" class="gif bottleaward normal"> <div class="gif-content"><img data-layzr="img/animate/bottle-award/award.png"></div> </div> <div class="shadow"><img data-layzr="img/bottle-award-shadow.png"></div> <div onclick="openBottleMain(this)" page-name="award" class="on-button"></div> </div> <div class="bottle middle-tower"><img data-layzr="img/middle-tower.png"></div> <div class="bottle left-tower"><img data-layzr="img/search-tower.png"></div> <div class="bottle right-tower"><img data-layzr="img/time-tower.png"> <div class="timer"><img data-layzr="img/right-tower-timer.png"> <timer></timer> </div> </div> <div class="bottle last-bottle"><img data-layzr="img/bottom-bottle.png"></div> <div class="bottle bottle-fire-1"><img data-layzr="img/bottle-lighter.png"> <div class="fire"><img data-layzr="img/bottle-lighter-fire.png"></div> </div> <div class="bottle bottle-fire-2"><img data-layzr="img/bottle-lighter.png"> <div class="fire"><img data-layzr="img/bottle-lighter-fire.png"></div> </div> <div class="bottle bottle-search tada animated infinite duration-15"><img data-layzr="img/magn.png"></div> </div> <div class="pages-technology"> <div onclick="backBottleMain(\'technology\')" class="content"> <div class="m-top"> <div class="bg"><img data-layzr="img/pages-technology-top.png"></div> <div class="gear gear-1"><img data-layzr="img/technology/gear-1.png"></div> <div class="gear gear-2"><img data-layzr="img/technology/gear-2.png"></div> <div class="gear gear-3"><img data-layzr="img/technology/gear-3.png"></div> <div class="item-lighter"><img data-layzr="img/pages-strategy-lighter.png"></div> <div class="item-bt"><img data-layzr="img/technology/bt-1.png"> <div class="full"><img data-layzr="img/technology/bt-2.png"></div> </div> <div class="box-logo"><img data-layzr="img/technology/box.png"></div> <div class="logo"> <gif id="technologylogo" width="170" height="200" delay="3300" normal="normal" replay="replay" stop="stop" play="replay" count="51" src="img/animate/bottle-technology/logo.png"></gif> </div> <div class="item-light-red"><img data-layzr="img/pages-strategy-light-red.png"></div> <div class="item-light-blue"><img data-layzr="img/pages-strategy-light-blue.png"></div> <div class="item-comp"> <div class="item item-1"></div> <div class="item item-2"></div> <div class="item item-3"></div> <div class="item item-4"></div> </div> <div class="b-boxs-boxs"> <div class="b-boxs"> <div class="b-box-box first"> <div class="b-m b-m-5"> <div class="b-c"><img data-layzr="img/technology/b-5.png"></div> </div> <div class="b-m b-m-4"> <div class="b-c"><img data-layzr="img/technology/b-4.png"></div> </div> <div class="b-m b-m-3"> <div class="b-c"><img data-layzr="img/technology/b-3.png"></div> </div> <div class="b-m b-m-2"> <div class="b-c"><img data-layzr="img/technology/b-2.png"></div> </div> <div class="b-m b-m-1"> <div class="b-c"><img data-layzr="img/technology/b-1.png"></div> </div> </div> <div class="b-box-box"> <div class="b-m b-m-5"> <div class="b-c"><img data-layzr="img/technology/b-5.png"></div> </div> <div class="b-m b-m-4"> <div class="b-c"><img data-layzr="img/technology/b-4.png"></div> </div> <div class="b-m b-m-3"> <div class="b-c"><img data-layzr="img/technology/b-3.png"></div> </div> <div class="b-m b-m-2"> <div class="b-c"><img data-layzr="img/technology/b-2.png"></div> </div> <div class="b-m b-m-1"> <div class="b-c"><img data-layzr="img/technology/b-1.png"></div> </div> </div> <div class="b-box-box"> <div class="b-m b-m-5"><img data-layzr="img/technology/b-5.png"></div> <div class="b-m b-m-4"><img data-layzr="img/technology/b-4.png"></div> <div class="b-m b-m-3"><img data-layzr="img/technology/b-3.png"></div> <div class="b-m b-m-2"><img data-layzr="img/technology/b-2.png"></div> <div class="b-m b-m-1"><img data-layzr="img/technology/b-1.png"></div> </div> </div> </div> <div class="m-hand"> <div class="line"></div> <div class="hand"><img data-layzr="img/technology/hand.png"> <div class="hand-box"> <div class="b b-1"><img data-layzr="img/technology/b-1.png"></div> <div class="b b-2"><img data-layzr="img/technology/b-2.png"></div> <div class="b b-3"><img data-layzr="img/technology/b-3.png"></div> <div class="b b-4"><img data-layzr="img/technology/b-4.png"></div> <div class="b b-5"><img data-layzr="img/technology/b-5.png"></div> </div> </div> </div> <div class="texts"> <div class="text-box first"> <div class="text text-1"><img data-layzr="img/technology/t-1.png"></div> <div class="text text-2"><img data-layzr="img/technology/t-2.png"></div> <div class="text text-3"><img data-layzr="img/technology/t-3.png"></div> <div class="text text-4"><img data-layzr="img/technology/t-4.png"></div> <div class="text text-5"><img data-layzr="img/technology/t-5.png"></div> </div> <div class="text-box"> <div class="text text-1"><img data-layzr="img/technology/t-1.png"></div> <div class="text text-2"><img data-layzr="img/technology/t-2.png"></div> <div class="text text-3"><img data-layzr="img/technology/t-3.png"></div> <div class="text text-4"><img data-layzr="img/technology/t-4.png"></div> <div class="text text-5"><img data-layzr="img/technology/t-5.png"></div> </div> <div class="text-box"> <div class="text text-1"><img data-layzr="img/technology/t-1.png"></div> <div class="text text-2"><img data-layzr="img/technology/t-2.png"></div> <div class="text text-3"><img data-layzr="img/technology/t-3.png"></div> <div class="text text-4"><img data-layzr="img/technology/t-4.png"></div> <div class="text text-5"><img data-layzr="img/technology/t-5.png"></div> </div> </div> </div> <div class="lights"> <div class="light i-1"><img data-layzr="img/technology/l-1.png"></div> <div class="light i-2"><img data-layzr="img/technology/l-2.png"></div> <div class="light i-3"><img data-layzr="img/technology/l-3.png"></div> <div class="light i-4"><img data-layzr="img/technology/l-4.png"></div> <div class="light i-5"><img data-layzr="img/technology/l-5.png"></div> </div> <div class="m-bottom"> <div class="bg"><img data-layzr="img/pages-technology-bottom.png"></div> <div class="peoples"> <div class="p-box"> <div class="people p-5"> <div class="normal"><img data-layzr="img/technology/p-0.png"></div> </div> <div class="people p-4"> <div class="normal"><img data-layzr="img/technology/p-0.png"></div> </div> <div class="people p-3"> <div class="normal"><img data-layzr="img/technology/p-0.png"></div> </div> <div class="people p-2"> <div class="normal"><img data-layzr="img/technology/p-0.png"></div> </div> <div class="people p-1"> <div class="normal"><img data-layzr="img/technology/p-0.png"></div> </div> </div> <div class="p-box index"> <div class="people p-5"> <div class="normal"><img data-layzr="img/technology/p-0.png"></div> <div class="over"><img data-layzr="img/technology/p-5.png"></div> </div> <div class="people p-4"> <div class="normal"><img data-layzr="img/technology/p-0.png"></div> <div class="over"><img data-layzr="img/technology/p-4.png"></div> </div> <div class="people p-3"> <div class="normal"><img data-layzr="img/technology/p-0.png"></div> <div class="over"><img data-layzr="img/technology/p-3.png"></div> </div> <div class="people p-2"> <div class="normal"><img data-layzr="img/technology/p-0.png"></div> <div class="over"><img data-layzr="img/technology/p-2.png"></div> </div> <div class="people p-1"> <div class="normal"><img data-layzr="img/technology/p-0.png"></div> <div class="over"><img data-layzr="img/technology/p-1.png"></div> </div> </div> <div class="p-box"> <div class="people p-5"> <div class="normal"><img data-layzr="img/technology/p-0.png"></div> <div class="over"><img data-layzr="img/technology/p-5.png"></div> </div> <div class="people p-4"> <div class="normal"><img data-layzr="img/technology/p-0.png"></div> <div class="over"><img data-layzr="img/technology/p-4.png"></div> </div> <div class="people p-3"> <div class="normal"><img data-layzr="img/technology/p-0.png"></div> <div class="over"><img data-layzr="img/technology/p-3.png"></div> </div> <div class="people p-2"> <div class="normal"><img data-layzr="img/technology/p-0.png"></div> <div class="over"><img data-layzr="img/technology/p-2.png"></div> </div> <div class="people p-1"> <div class="normal"><img data-layzr="img/technology/p-0.png"></div> <div class="over"><img data-layzr="img/technology/p-1.png"></div> </div> </div> </div> <div class="icons"> <div class="icon-box first"> <div class="icon icon-1"><img data-layzr="img/technology/i-1.png"></div> <div class="icon icon-2"><img data-layzr="img/technology/i-2.png"></div> <div class="icon icon-3"><img data-layzr="img/technology/i-3.png"></div> <div class="icon icon-4"><img data-layzr="img/technology/i-4.png"></div> <div class="icon icon-5"><img data-layzr="img/technology/i-5.png"></div> </div> <div class="icon-box"> <div class="icon icon-1"><img data-layzr="img/technology/i-1.png"></div> <div class="icon icon-2"><img data-layzr="img/technology/i-2.png"></div> <div class="icon icon-3"><img data-layzr="img/technology/i-3.png"></div> <div class="icon icon-4"><img data-layzr="img/technology/i-4.png"></div> <div class="icon icon-5"><img data-layzr="img/technology/i-5.png"></div> </div> <div class="icon-box"> <div class="icon icon-1"><img data-layzr="img/technology/i-1.png"></div> <div class="icon icon-2"><img data-layzr="img/technology/i-2.png"></div> <div class="icon icon-3"><img data-layzr="img/technology/i-3.png"></div> <div class="icon icon-4"><img data-layzr="img/technology/i-4.png"></div> <div class="icon icon-5"><img data-layzr="img/technology/i-5.png"></div> </div> </div> </div> </div> </div> <div class="pages-award"> <div class="bg"><img data-layzr="img/pages-award-bg.png"></div> <div onclick="backBottleMain(\'award\')" class="content"> <div class="icons icons-1"> <div rel="1" class="icon"><img data-layzr="img/pages-award-icon-1.png"></div> <div rel="2" class="icon"><img data-layzr="img/pages-award-icon-2.png"></div> </div> <div class="icons icons-2"> <div rel="3" class="icon"><img data-layzr="img/pages-award-icon-3.png"></div> <div rel="4" class="icon"><img data-layzr="img/pages-award-icon-4.png"></div> <div rel="5" class="icon"><img data-layzr="img/pages-award-icon-5.png"></div> </div> <div class="icons icons-3"> <div rel="6" class="icon"><img data-layzr="img/pages-award-icon-6.png"></div> <div rel="7" class="icon"><img data-layzr="img/pages-award-icon-7.png"></div> </div> <div class="other other-1"><img data-layzr="img/pages-award-other-1.png"></div> <div class="other other-2"><img data-layzr="img/pages-award-other-2.png"></div> </div> </div> <div class="pages-media"> <div class="bg"><img data-layzr="img/pages-media-bg.png"></div> <div onclick="backBottleMain(\'media\')" class="content"> <div class="icons icons-1"> <div rel="1" class="icon"><img data-layzr="img/pages-media-icon-1.png"></div> <div rel="2" class="icon"><img data-layzr="img/pages-media-icon-2.png"></div> <div rel="3" class="icon"><img data-layzr="img/pages-media-icon-3.png"></div> <div rel="4" class="icon"><img data-layzr="img/pages-media-icon-4.png"></div> <div rel="5" class="icon"><img data-layzr="img/pages-media-icon-5.png"></div> <div rel="6" class="icon"><img data-layzr="img/pages-media-icon-6.png"></div> </div> <div class="icons icons-2"> <div rel="7" class="icon"><img data-layzr="img/pages-media-icon-7.png"></div> <div rel="8" class="icon"><img data-layzr="img/pages-media-icon-8.png"></div> <div rel="9" class="icon"><img data-layzr="img/pages-media-icon-9.png"></div> <div rel="10" class="icon"><img data-layzr="img/pages-media-icon-10.png"></div> <div rel="11" class="icon"><img data-layzr="img/pages-media-icon-11.png"></div> <div rel="12" class="icon"><img data-layzr="img/pages-media-icon-12.png"></div> </div> <div class="bottles bottle-1"> <div class="icon"><img data-layzr="img/pages-media-bottle-1.png"></div> <div class="icon"><img data-layzr="img/pages-media-bottle-2.png"></div> <div class="icon"><img data-layzr="img/pages-media-bottle-3.png"></div> <div class="icon"><img data-layzr="img/pages-media-bottle-4.png"></div> </div> <div class="bottles bottle-2"> <div class="icon"><img data-layzr="img/pages-media-bottle-5.png"></div> <div class="icon"><img data-layzr="img/pages-media-bottle-6.png"></div> <div class="icon"><img data-layzr="img/pages-media-bottle-7.png"></div> </div> </div> </div> <div class="pages-logo"> <div class="bg"></div> <div onclick="backBottleMain(\'logo\')" class="content"> <div class="logo-page-bottle"></div> <div class="bottle bottle-logo-next"><img data-layzr="img/bottle-logo-next.png"> <div class="text fadeIn animated delay-20"><img data-layzr="img/pages-logo-text.png"></div> <div class="white-1"><img data-layzr="img/bottle-logo-next-white-1.png"></div> <div class="white-2"><img data-layzr="img/bottle-logo-next-white-2.png"></div> <div class="white-3"><img data-layzr="img/bottle-logo-next-white-3.png"></div> <div class="white-4"><img data-layzr="img/bottle-logo-next-white-4.png"></div> </div> </div> </div> <div class="pages-brand"> <div onclick="backBottleMain(\'brand\')" class="content"> <div class="brands-item"> </div> <div class="ctrls"> <div rel="1" class="item item-1"></div> <div rel="2" class="item item-2"></div> <div rel="3" class="item item-3"></div> </div> </div> </div> <div class="pages-strategy"> <div onclick="backBottleMain(\'strategy\')" class="content"> <div class="m-top"><img data-layzr="img/pages-strategy-m-top.png"> <div class="item-tv"> <div class="item-logo"><img data-layzr="img/pages-strategy-logo.png"></div> </div> <div class="item-switch"><img data-layzr="img/pages-strategy-switch.png"></div> <div class="item-light-red"><img data-layzr="img/pages-strategy-light-red.png"></div> <div class="item-light-blue"><img data-layzr="img/pages-strategy-light-blue.png"></div> <div class="item-light-all"> <div class="lights"><img data-layzr="img/pages-strategy-light-all-1.png"></div> <div class="lights"><img data-layzr="img/pages-strategy-light-all-2.png"></div> <div class="lights"><img data-layzr="img/pages-strategy-light-all-3.png"></div> <div class="lights"><img data-layzr="img/pages-strategy-light-all-4.png"></div> </div> <div class="item-pointer"></div> <div class="item-arrow"> <div class="arrow arrow1"><img data-layzr="img/pages-strategy-arrow-yellow.png"></div> <div class="arrow arrow2"><img data-layzr="img/pages-strategy-arrow-yellow.png"></div> <div class="arrow arrow3"><img data-layzr="img/pages-strategy-arrow-yellow.png"></div> <div class="arrow arrow4"><img data-layzr="img/pages-strategy-arrow-yellow.png"></div> <div class="arrow arrow5"><img data-layzr="img/pages-strategy-arrow-yellow.png"></div> </div> <div class="item-screw"><img data-layzr="img/pages-strategy-screw.png"></div> <div class="item-icloud-1"><img data-layzr="img/pages-strategy-icloud-1.png"></div> <div class="item-icloud-2"><img data-layzr="img/pages-strategy-icloud-2.png"></div> <div class="item-icloud-3"><img data-layzr="img/pages-strategy-icloud-3.png"></div> <div class="item-lines"> <div class="line1"><img data-layzr="img/pages-strategy-line-1.png"></div> <div class="line2"><img data-layzr="img/pages-strategy-line-2.png"></div> </div> <div class="item-lighter"><img data-layzr="img/pages-strategy-lighter.png"></div> <div class="item-icons"> <gif id="strategyicons" width="300" height="300" count="43" normal="normal" replay="replay" delay="4000" stop="0" play="replay" src="img/animate/strategy-icons/strategy.png"></gif> <div class="box"><img data-layzr="img/pages-strategy-box.png"></div> </div> </div> <div class="m-bottom"> <div class="line1"></div> <div class="line2"></div> <div class="bg"><img data-layzr="img/pages-strategy-m-bottom.png"> <div class="p1"> <gif id="strategypeople1" width="150" height="150" normal="replay" replay="replay" stop="stop" play="replay" count="41" src="img/animate/brandbg/brand-id.png"></gif> </div> <div class="p2"> <gif id="strategypeople2" width="150" height="150" normal="replay" replay="replay" stop="stop" play="replay" count="41" src="img/animate/brandbg/brand-id.png"></gif> </div> <div class="parts1"><img data-layzr="img/pages-strategy-parts-red.png"></div> <div class="parts2"><img data-layzr="img/pages-strategy-parts-yellow.png"></div> <div class="parts3"><img data-layzr="img/pages-strategy-parts-roulette.png"></div> <div class="fcanvas"> <div class="item-arrow"> <div class="arrow arrow1"><img data-layzr="img/pages-strategy-arrow-yellow.png"></div> <div class="arrow arrow2"><img data-layzr="img/pages-strategy-arrow-yellow.png"></div> <div class="arrow arrow3"><img data-layzr="img/pages-strategy-arrow-yellow.png"></div> <div class="arrow arrow4"><img data-layzr="img/pages-strategy-arrow-yellow.png"></div> <div class="arrow arrow5"><img data-layzr="img/pages-strategy-arrow-yellow.png"></div> </div> <div class="items"> <div class="item"><img data-layzr="img/pages-strategy-canvas-1.png"></div> <div class="item"><img data-layzr="img/pages-strategy-canvas-2.png"></div> </div> </div> </div> </div> </div> </div> <div class="pages-contactus"> <div onclick="backBottleMain(\'contactus\')" class="content"> <div class="text"><img data-layzr="img/pages-contactus-text.png"></div> <div class="qrcode"><img data-layzr="img/pages-contactus-qrcode.png"></div> <div class="drops"><img data-layzr="img/pages-contactus-drops.png"></div> <div class="bubbles"> <div class="bubble bubble-1"><img data-layzr="img/homepage-bubble.png"></div> <div class="bubble bubble-2"><img data-layzr="img/homepage-bubble.png"></div> <div class="bubble bubble-3"><img data-layzr="img/homepage-bubble.png"></div> <div class="bubble bubble-4"><img data-layzr="img/homepage-bubble.png"></div> <div class="bubble bubble-5"><img data-layzr="img/homepage-bubble.png"></div> <div class="bubble bubble-6"><img data-layzr="img/homepage-bubble.png"></div> <div class="bubble bubble-7"><img data-layzr="img/homepage-bubble.png"></div> <div class="bubble bubble-8"><img data-layzr="img/homepage-bubble.png"></div> <div class="bubble bubble-9"><img data-layzr="img/homepage-bubble.png"></div> <div class="bubble bubble-10"><img data-layzr="img/homepage-bubble.png"></div> </div> <div class="music"> <div class="c1"></div> <div class="c2"></div> <div class="c3"></div> <div class="line"></div> </div> <div class="pointer"><img data-layzr="img/pages-contactus-pointer.png"></div> <div class="bg"><img data-layzr="img/pages-contactus-bg.png"></div> </div> </div> </div>', function(opts) {
    var self = this
    this.on("mount",function(){
    	loadStart()
    })
  
});

riot.tag('playsound', '<div onclick="{change}" class="icon-play {type}"></div> <audio id="{opts.id}-playgrounp" riot-src="{src}" autoplay="true" loop="loop"></audio>', function(opts) {
    var self = this
    this.src = opts.src
    this.icon = opts.icon





    this.type = null
    this.root.className += "playsound"
    this.play = function() {
    	var audio = document.getElementById(opts.id+"-playgrounp")
    	audio.play()
    }.bind(this);
    this.stop = function() {
    	var audio = document.getElementById(opts.id+"-playgrounp")
    	audio.pause()
    }.bind(this);
    this.change = function() {
    	var audio = document.getElementById(opts.id+"-playgrounp")
    	if (self.type == "play") {
    		audio.pause()
    	}else{
    		audio.play()
    	}
    }.bind(this);
    this.on("mount",function(){
    	var audio = document.getElementById(opts.id+"-playgrounp")
    	audio.addEventListener("pause",function(){

    		self.type = "pause"
    		self.update()
    	})
    	audio.addEventListener("play",function(){

    		self.type = "play"
    		self.update()
    	})
    })
  
});

riot.tag('timer', '<div riot-style="transform: rotate({hour_deg}deg); -webkit-transform: rotate({hour_deg}deg)" class="hour">{hour}</div> <div riot-style="transform: rotate({mint_deg}deg); -webkit-transform: rotate({mint_deg}deg)" class="mint">{mint}</div> <div riot-style="transform: rotate({sec_deg}deg); -webkit-transform: rotate({sec_deg}deg)" class="sec">{sec}</div>', function(opts) {
    var self = this
    this.root.className = "timer-box"
    
    this.init = function() {
    	self.hour = new Date().getHours()
    	self.mint = new Date().getMinutes()
    	self.sec = new Date().getSeconds()
    	self.hour_deg = 360/12 * self.hour
    	self.mint_deg = 360/60 * self.mint
    	self.sec_deg = 360/60 * self.sec
    	self.update()
    	setTimeout(function(){
    		self.init()
    	},500)
    }.bind(this);
    self.init()
  
});