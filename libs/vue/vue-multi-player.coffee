Vue.component "multiplayer",
	template:'
		<div class="player" :class="{play: playing, pause: !playing}" @click="change">
			<div class="icon-play" :class="{play: playing, pause: !playing}">
				<svg v-if="!icon" v-show="!playing" height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ytp-id-39"></use><path class="ytp-svg-fill" d="M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z"></path></svg>
				<svg v-if="!icon" v-show="playing" height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ytp-id-40"></use><path class="ytp-svg-fill" d="M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z"></path></svg>
			</div>
			<audio v-for="link in src" :src="link" :autoplay="autoplay" :preload="preload" :loop="loop"></audio>
			<img v-if="thumb" :src="thumb" />
			<slot></slot>
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
			default: ["./mp3/bgm.mp3"]
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
		id:
			default: 0
	methods:
		play: (id = 0)->
			return false if not @audio[id]?
			temp = @$emit 'play', @
			# @audio.load()
			@.pauseAll()
			@audio[id].play()
			@.id = id
			@playing = true
		played: ->
			@playing = true
		pause: ->
			temp = @$emit 'pause', @
			# @.pauseAll()
			@playing = false
		ended: ->
			@playing = false
		pauseAll: ->
			for item in @audio
				item.pause()
		change: ->
			if @playing
				@.pauseAll()
				@stoped = true
			else
				@audio[@id].play()
				@stoped = false

	# computed:
	mounted: (el)->
		# console.log @name
		@audio = @$el.getElementsByTagName("audio")
		# console.log @$el.getElementsByTagName("audio")
		# console.log @audio
		# @audioOther = @$el.children[2]
		for item in @audio
			item.addEventListener "pause", @pause.bind @
			item.addEventListener "play", @played.bind @
			item.addEventListener "ended", @ended.bind @
		# @audio.play()
		# console.log @audio,@audioOther,@playing
