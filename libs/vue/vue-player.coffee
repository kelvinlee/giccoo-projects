Vue.component "player",
	template:'
		<div class="player" :class="{play: playing, pause: !playing}" @click="change">
			<div class="icon-play" :class="{play: playing, pause: !playing}">
				<svg v-if="!icon" v-show="!playing" height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ytp-id-39"></use><path class="ytp-svg-fill" d="M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z"></path></svg>
				<svg v-if="!icon" v-show="playing" height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ytp-id-40"></use><path class="ytp-svg-fill" d="M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z"></path></svg>
			</div>
			<audio :src="src" :autoplay="autoplay" :preload="preload" :loop="loop"></audio>
			<img v-if="thumb" :src="thumb" />
		</div>
		'
	data: ->
		return
			playing: false
			stoped: false

	props:
		name:
			default: false
		src:
			default: "./mp3/bgm.mp3"
		thumb:
			default: false
		autoplay:
			default: false
		preload:
			default: false
		loop:
			default: false
		callback:
			default: false
		icon:
			default: false
	methods:
		play: ->
			temp = @$emit 'play', @
			@playing = true
		pause: ->
			temp = @$emit 'pause', @
			@audio.pause()
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
				_hmt? and _hmt.push(['_trackEvent', "adidas-originals-eqt", @name, "play", "-"])

	# computed:
	mounted: (el)->
		# console.log @name
		@audio = @$el.children[1]
		# console.log @audio
		# @audioOther = @$el.children[2]
		@audio.addEventListener "pause", @pause.bind @
		@audio.addEventListener "play", @play.bind @
		@audio.addEventListener "ended", @ended.bind @
		# @audio.play()
		# console.log @audio,@audioOther,@playing
