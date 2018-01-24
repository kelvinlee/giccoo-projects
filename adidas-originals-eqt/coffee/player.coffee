Vue.component "player",
	template:'
		<div class="playsound">
			<div class="icon-play" :class="{play: playing, pause: !playing}" @click="change">
				<img :src="iconNow" />
			</div>
			<audio :src="src" :autoplay="autoplay" :preload="preload" :loop="loop"></audio>
		</div>
		'
	data: ->
		return
			playing: false
			stoped: false
			iconPlay: "http://image.giccoo.com/projects/libs/img/audio-stop.png"
			iconStop: "http://image.giccoo.com/projects/libs/img/audio-play.png"

	props:
		src:
			default: "./mp3/bgm.mp3"
		autoplay:
			default: false
		preload:
			default: false
		loop:
			default: false
	methods:
		play: ->
			@playing = true
		pause: ->
			@playing = false
		ended: ->
			@playing = false
		change: ->
			if @playing
				@audio.pause()
				@stoped = true
			else
				@audio.play()
				@stoped = false
	computed:
		iconNow: ->
			return if !@playing then @iconPlay else @iconStop

	mounted: (el)->
		@audio = @$el.children[1]
		console.log @audio
		# @audioOther = @$el.children[2]
		@audio.addEventListener "pause", @pause.bind @
		@audio.addEventListener "play", @play.bind @
		@audio.addEventListener "ended", @ended.bind @
		@audio.play()
		# console.log @audio,@audioOther,@playing
