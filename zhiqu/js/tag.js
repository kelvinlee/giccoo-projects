
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