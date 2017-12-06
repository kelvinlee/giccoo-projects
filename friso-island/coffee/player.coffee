Vue.component "player",
	template:'
		<div class="playsound">
			<div class="icon-play" :class="{play: playing, pause: !playing}" @click="change">
				<img :src="iconNow" />
			</div>
			<audio :src="src" autoplay="autoplay" preload="true" loop="loop"></audio>
			<audio :src="item" :id="\'music\'+index" preload="true" v-for="item,index in otherSrc"></audio>
		</div>
		'
	data: ->
		return
			src: "./mp3/bgm.mp3"
			otherSrc: ["./mp3/turtle.mp3","./mp3/beard.mp3","./mp3/bird.mp3","./mp3/cow.mp3","./mp3/panda.mp3"]
			playing: false
			stoped: false
			iconPlay: "http://image.giccoo.com/projects/libs/img/audio-stop.png"
			iconStop: "http://image.giccoo.com/projects/libs/img/audio-play.png"

	props:
		autoplay:
			default: true
	methods:
		pauseAll: ->
			for i in [0...@otherSrc.length]
				document.getElementById("music"+i).pause()
		playOther: (url)->
			# @audio.currentTime = time
			@audio.pause()
			for i in [0...@otherSrc.length]
				if @otherSrc.indexOf(url) is i
					document.getElementById("music"+i).play()
				else
					document.getElementById("music"+i).pause()
		reset: ->
			if not @stoped
				@audio.play()
				@audioOther.pause()
		play: ->
			@playing = true
		pause: ->
			@playing = false
		otherend: ->
			@audio.play() if not @stoped
		change: ->
			if @playing
				@audio.pause()
				@stoped = true
			else
				@audio.play()
				@stoped = false
				
			@pauseAll()
	computed:
		iconNow: ->
			return if !@playing then @iconPlay else @iconStop

	mounted: (el)->
		@audio = @$el.children[1]
		# @audioOther = @$el.children[2]
		@audio.addEventListener "pause", @pause.bind @
		@audio.addEventListener "play", @play.bind @
		for i in [0...@otherSrc.length]
			document.getElementById("music"+i).addEventListener "ended", @otherend.bind @
		@audio.play()
		# console.log @audio,@audioOther,@playing
