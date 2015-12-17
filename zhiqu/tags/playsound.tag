
<playsound>
  <div onclick="{change}" class="icon-play {type}"></div>
  <audio id="{opts.id}-playgrounp" src="{src}" autoplay="true" loop="loop"></audio>
  <script>
    var self = this
    this.src = opts.src
    this.icon = opts.icon
    //- this.iconPlay = opts["icon-play"]
    //- this.iconStop = opts["icon-stop"]
    //- if (this.icon) {
    //- 	this.iconNow = this.iconStop
    //- }
    this.type = null
    this.root.className += "playsound"
    play() {
    	var audio = document.getElementById(opts.id+"-playgrounp")
    	audio.play()
    }
    stop() {
    	var audio = document.getElementById(opts.id+"-playgrounp")
    	audio.pause()
    }
    change() {
    	var audio = document.getElementById(opts.id+"-playgrounp")
    	if (self.type == "play") {
    		audio.pause()
    	}else{
    		audio.play()
    	}
    }
    this.on("mount",function(){
    	var audio = document.getElementById(opts.id+"-playgrounp")
    	audio.addEventListener("pause",function(){
    		//- self.iconNow = self.iconStop
    		self.type = "pause"
    		self.update()
    	})
    	audio.addEventListener("play",function(){
    		//- self.iconNow = self.iconPlay
    		self.type = "play"
    		self.update()
    	})
    })
  </script>
</playsound>