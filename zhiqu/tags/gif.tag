
<gif>
  <div width="{opts.width}" height="{opts.height}" class="gif {opts.id} {played}"></div>
  <script>
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
    	//- console.log(opts.id,"拆分 load",parseInt(eval(opts["prepare"])[1]))
    	//- playList = eval(opts["prepare"])[1]
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
    reload() {
    	//- self.max = parseInt(opts.count)
    	//- console.log(self.max)
    	for (var i=parseInt(eval(opts["prepare"])[1])+1;i < self.count; i++) {
    		var image = new Image()
    		image.src = opts.src.replace("id",i+1)
    		image.onload = function(){
    			self._reload()
    		}
    		loads.push(image)
    	}
    	self.NotReinit = true
    	//- console.log(parseInt(self.count),parseInt(eval(opts["prepare"])[1])+1)
    	return parseInt(self.count) - parseInt(eval(opts["prepare"])[1])+1
    }
    _reload() {
    	self._loaded++
    	loadProgress()
    	if (parseInt(self._loaded/self.count*100) == 100) {
    		self.loaded = true
    		self.loadend()
    	}
    }
    load() {
    	self._loaded++
    	//- console.log(parseInt(self.loaded/self.max*100))
    	//- loadProgress(opts.id,parseInt(self._loaded/self.max*100))
    	loadProgress()
    	if (parseInt(self._loaded/self.max*100) == 100) {
    		self.loaded = true
    		self.loadend()
    	}
    }
    loadend() {
    	//- console.log(opts.id," loaded",loads)
    	loadGIF()
    	if (self.NotReinit) {return false}
    	self.init()
    }
    init() {
    	if (self.loaded && self.mounted) {
    		self.replay(opts.play)
    	}
    }
    replay(name){
    	//- if (name == self.next) { return false }
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
    		//- console.log(opts.id,name,self.now,self.now == self.max)
    		if (self.now == self.max) {
    			$(".gif",self.root).html(loads[self.now])
    			self.Stop = true
    			return true
    		}
    		then = Date.now()
    		self.animate()
    	}
    }
    animate() {
    	if (self.Stop) { return false }
    	now = Date.now()
    	var elapsed = now - then
    	if (elapsed > fpsInterval) {
    		then = now - (elapsed%fpsInterval)
    		// draw
    		$(".gif",self.root).html(loads[self.now])
    		self.now++
    		if (passmove && self.now >= passmove) {
    			passmove = false
    			passMoveFun(opts.id)
    		}
    		if (self.now > self.max) {
    			self.now = self.max
    			self.Stop = true
    			//-  && opts.stepto
    			
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
    }
    this.on("mount",function(){
    	//- $(".gif",self.root).html(loads[0])
    	self.mounted = true
    	self.init()
    })
  </script>
</gif>