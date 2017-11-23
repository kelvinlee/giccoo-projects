Vue.component "player",
	template:'
		<div class="playsound">
			<div class="icon-play" :class="{play: playing, pause: !playing}" @click="change">
				<img :src="iconNow" />
			</div>
			<audio src="http://image.giccoo.com/projects/friso/mp3/rap.160.mp3" autoplay="true"></audio>
		</div>
		'
	data: ->
		return
			playing: false
			iconPlay: "http://image.giccoo.com/projects/libs/img/audio-play.png"
			iconStop: "http://image.giccoo.com/projects/libs/img/audio-stop.png"

	props:
		autoplay:
			default: true
	methods:
		playTime: (time)->
			@audio.currentTime = time
			@audio.play()
		play: ->
			@playing = true
		pause: ->
			@playing = false
		change: ->
			if @playing
				@audio.pause()
			else
				@audio.play()
			console.log "play"
	computed:
		iconNow: ->
			return if !@playing then @iconPlay else @iconStop

	mounted: (el)->
		console.log "autoplay:",@autoplay
		@audio = @$el.children[1]
		@audio.addEventListener "pause", @pause.bind @
		@audio.addEventListener "play", @play.bind @
		console.log @audio
