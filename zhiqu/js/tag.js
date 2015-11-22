
riot.tag('gif', '<canvas width="{opts.width}" height="{opts.height}"></canvas>', function(opts) {
    var self = this
    var stage = null
    var playerSprite = null
    console.log(opts)
    this.count = parseInt(opts.count)
    this.url = opts.src
    this.play = opts.play
    this.animations = JSON.parse('{"normal": '+opts.normal+', "replay": '+opts.replay+', "stop": '+opts.stop+'}')
    console.log(self.animations)
    if (opts.id&&global) { global[opts.id] = self }
    this.init = function() {
    	stage = new createjs.Stage($("canvas",this.root)[0])
    	brandImages = []
    	for(var i=1;i<=self.count;i++) {
    		brandImages.push(self.url.replace("id",i))
    	}
    	playerSheet = new createjs.SpriteSheet({
    		"images": brandImages,
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
    }.bind(this);
  
});

riot.tag('playsound', '<div onclick="{change}" class="icon-play {type}"></div> <audio id="playgrounp" riot-src="{src}" autoplay="true" loop="loop"></audio>', function(opts) {
    var self = this
    this.src = opts.src
    this.icon = opts.icon





    this.type = null
    this.root.className += "playsound"
    this.change = function() {
    	var audio = document.getElementById("playgrounp")
    	if (self.type == "play") {
    		audio.pause()
    	}else{
    		audio.play()
    	}
    }.bind(this);
    this.on("mount",function(){
    	var audio = document.getElementById("playgrounp")
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
    	},100)
    }.bind(this);
    self.init()
  
});