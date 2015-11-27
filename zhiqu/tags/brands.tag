
<brands>
  <canvas width="{opts.width}" height="{opts.height}"></canvas>
  <script>
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
    init() {
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
    }
    
    tick(evt) {
    	stage.update()
    }
    
    this.on("mount",function(){
    	self.init()
    	self.update()
    })
    
    replay(name) {
    	playerSprite.gotoAndPlay(name)
    	console.log(name)
    }
  </script>
</brands>