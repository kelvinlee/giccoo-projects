
<gif>
  <div width="{opts.width}" height="{opts.height}" class="gif {opts.id} {played}"></div>
  <script>
    var self = this
    var delay = parseInt(opts.delay)?parseInt(opts.delay):0
    this.played = opts.play
    if (opts.id&&global) { global[opts.id] = self }
    replay(name) {
    	self.played = name
    	self.update()
    }
    animate(evt) {
    	//- console.log(opts.id,"animate end")
    	var old = opts[self.played]
    	self.played = "normal"
    	self.update()
    	console.log(opts.id,"animate")
    	
    	setTimeout(function(){
    		self.replay(old)
    	},delay+1)
    }
    self.on("mount",function(){
    	if (opts.normal == "replay" && opts.replay == "replay" && opts.play == "replay") {
    	}else{
    		$(".gif",self.root)[0].addEventListener(ANIMATION_END_NAME,self.animate)
    	}
    })
  </script>
</gif>