
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
    
    var fpsInterval = 1000/30
    var then = Date.now()
    var startTime = then
    var now = Date.now()
    
    if (opts.id&&global) { global[opts.id] = self }
    for (var i=0;i < self.max; i++) {
    	var image = new Image()
    	image.src = opts.src.replace("id",i+1)
    	image.onload = function(){
    		self.load()
    	}
    	loads.push(image)
    }
    load() {
    	self._loaded++
    	//- console.log(parseInt(self.loaded/self.max*100))
    	if (parseInt(self._loaded/self.max*100) == 100) {
    		self.loaded = true
    		self.loadend()
    	}
    }
    loadend() {
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
    		console.log(opts.id,name,self.now,self.now == self.max)
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
    		if (self.now > self.max) {
    			self.now = self.max
    			if (opts.delay && self.play != "stepend") {
    				setTimeout(function(){
    					self.replay(self.next)
    				},opts.delay)
    				return false
    			}
    			self.replay(self.next)
    			return false 
    		}
    	}
    	requestAnimationFrame(self.animate)
    }
    this.on("mount",function(){
    	self.mounted = true
    	self.init()
    })
  </script>
</gif>