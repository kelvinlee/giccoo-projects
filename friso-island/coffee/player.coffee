Vue.component "player",
	template:'
		<div class="playsound">
			<div class="icon-play" :class="{play: playing, pause: !playing}" @click="change">
				<img :src="iconNow" />
			</div>
			<audio :src="src" loop="loop"></audio>
			<audio :src="otherSrc"></audio>
		</div>
		'
	data: ->
		return
			src: "./mp3/bgm.mp3"
			otherSrc: ""
			playing: false
			stoped: false
			iconPlay: "http://image.giccoo.com/projects/libs/img/audio-play.png"
			iconStop: "http://image.giccoo.com/projects/libs/img/audio-stop.png"

	props:
		autoplay:
			default: true
	methods:
		playOther: (url)->
			# @audio.currentTime = time
			@audio.pause()
			@audioOther.src = url
			@audioOther.play()
			console.log "play other"
		reset: ->
			console.log "reset"
			if not @stoped
				@audio.play()
				@audioOther.pause()
		play: ->
			@playing = true
		pause: ->
			@playing = false
		otherend: ->
			console.log "end"
			@audio.play() if not @stoped
		change: ->
			if @playing
				@audio.pause()
				@stoped = true
			else
				@audio.play()
				@stoped = false
			@audioOther.pause()
			console.log "play"
	computed:
		iconNow: ->
			return if !@playing then @iconPlay else @iconStop

	mounted: (el)->
		console.log "autoplay:",@autoplay
		@audio = @$el.children[1]
		@audioOther = @$el.children[2]
		@audio.addEventListener "pause", @pause.bind @
		@audio.addEventListener "play", @play.bind @
		@audioOther.addEventListener "ended", @otherend.bind @
		console.log @audio,@audioOther,@playing
