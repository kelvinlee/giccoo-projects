
<player>
  <audio id="player" src="{music.src}" autoplay="{autoplay}"></audio>
  <script>
    var self = this
    self.list = opts.list
    self.autoplay = true //- 是否自动播放
    self.playing = false //- 是否正在播放
    self.now = 0 //- 正在播放的歌曲序号
    self.music = self.list[self.now] //- 正在播放歌曲的数据
    play() {
    	document.getElementById("player").play()
    }
    pause() {
    	document.getElementById("player").pause()	
    }
    pre() {
    	self.now = self.now - 1
    	if (self.now < 0) {
    		self.now = self.list.length-1
    	}
    	self.music = self.list[self.now]
    	self.update()
    	self.play()
    	opts.change && opts.change(self._type())
    }
    next() {
    	self.now = self.now + 1
    	if (self.now >= self.list.length) {
    		self.now = 0
    	}
    	self.music = self.list[self.now]
    	self.update()
    	self.play()
    	opts.change && opts.change(self._type())
    }
    _type() {
    	var d = document.getElementById("player").duration
    	var t = document.getElementById("player").currentTime
    	return {playing: self.playing,now: self.now,duration: d,currentTime: t}
    }
    _play(evt) {
    	self.playing = true
    	opts.change && opts.change(self._type())
    }
    _pause(evt) {
    	self.playing = true
    	opts.change && opts.change(self._type())
    }
    _ended(evt) {
    	self.next()
    }
    _timeupdate(evt) {
    	opts.change && opts.change(self._type())
    }
    this.on("mount",function(){
    	document.getElementById("player").addEventListener("play",self._play)
    	document.getElementById("player").addEventListener("pause",self._pause)
    	document.getElementById("player").addEventListener("ended",self._ended)
    	document.getElementById("player").addEventListener("timeupdate",self._timeupdate)
    })
  </script>
</player>