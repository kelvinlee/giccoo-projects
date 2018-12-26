Vue.component "mp4",
	template:'
		<div class="video">
			<div v-if="andriod" class="icon-play" :class="{hide: playing, pause: !playing}" @click="change">
				<div class="icon">
				<svg v-show="!playing" height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ytp-id-39"></use><path class="ytp-svg-fill" d="M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z"></path></svg>
				<svg v-show="playing" height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ytp-id-40"></use><path class="ytp-svg-fill" d="M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z"></path></svg>
				</div>
			</div>
			<!--  -->
			<video v-if="!playsinline" :width="width" :height="height" :controls="controls" :src="src" :id="videoid" :poster="poster"></video>
			<video v-if="playsinline" :class="{hide: andriod}" :width="width" :height="height" :controls="controls" :src="src" :id="videoid" :poster="poster" x5-video-player-type="h5" x5-video-player-fullscreen="true" x-webkit-airplay="allow" webkit-playsinline playsinline></video>
			<canvas v-if="andriod" :id="canvasid" :width="width" :height="height" @click="change"></canvas>
		</div>
		'
	data: ->
		return
			playing: false
			stoped: false
			andriod: false
			
	props:
		playsinline:
			default: false
		controls:
			default: false
		videoid:
			default: "video"
		src:
			default: "./mp3/bgm.mp3"
		autoplay:
			default: false
		preload:
			default: false
		loop:
			default: false
		poster:
			default: false
		width:
			default: 1920
		height:
			default: 1080
	computed:
		canvasid: ->
			return @videoid+"-canvas"
		# iconNow: ->
		# 	return if !@playing then @iconPlay else @iconStop
	methods:
		play: ->
			@video.play() if @video
			@playing = true
			@.$emit "play", {playing: true}
		pause: ->
			@playing = false
			@.$emit "pause", {playing: false}
		stop: ->
			@video.pause() if @video 
			@.$emit "stop", {playing: false}
		ended: ->
			@playing = false
		change: ->
			if @playing
				@video.pause()
				@stoped = true
			else
				@video.play()
				@stoped = false
				@animate()

		initCanvas: ->
			canvas = document.getElementById(@canvasid)
			context = canvas.getContext('2d')
			if @poster
				poster = new Image()
				poster.src = @poster
				poster.onload = ->
					context.drawImage(poster,0,0,canvas.width,canvas.height)

		animate: ->
			canvas = document.getElementById(@canvasid)
			return false unless canvas
			context = canvas.getContext('2d')
			context.drawImage(@video,0,0,canvas.width,canvas.height)
			if not @stoped
				requestAnimationFrame @animate.bind @

	mounted: (el)->
		u = navigator.userAgent
		isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1
		@video = document.getElementById @videoid
		@video.addEventListener "pause", @pause.bind @
		@video.addEventListener "playing", @play.bind @
		@video.addEventListener "ended", @ended.bind @
		if isAndroid and @playsinline
			@andriod = true
			setTimeout =>
				@initCanvas()
			,20


