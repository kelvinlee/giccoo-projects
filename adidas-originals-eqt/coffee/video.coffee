Vue.component "mp4",
	template:'
		<div class="video">
			<div v-if="andriod" class="icon-play" :class="{play: playing, pause: !playing}" @click="change">
				<img :src="iconNow" />
			</div>
			<video :class="{hide: andriod}" :width="width" :height="height" controls="true" :src="src" :id="videoid" x5-video-player-type="h5" x5-video-player-fullscreen="true" x-webkit-airplay="allow" webkit-playsinline playsinline :poster="poster"></video>
			<canvas v-if="andriod" :id="canvasid" :width="width" :height="height" @click="change"></canvas>
		</div>
		'
	data: ->
		return
			playing: false
			stoped: false
			andriod: false
			iconPlay: "http://image.giccoo.com/projects/libs/img/audio-stop.png"
			iconStop: "http://image.giccoo.com/projects/libs/img/audio-play.png"
			
	props:
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
		iconNow: ->
			return if !@playing then @iconPlay else @iconStop
	methods:
		play: ->
			@playing = true
		pause: ->
			@playing = false
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
				context.drawImage(poster,0,0,canvas.width,canvas.height)

		animate: ->
			canvas = document.getElementById(@canvasid)
			context = canvas.getContext('2d')
			context.drawImage(@video,0,0,canvas.width,canvas.height)
			if not @stoped
				requestAnimationFrame @animate.bind @

	mounted: (el)->
		u = navigator.userAgent
		isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1
		if isAndroid
			@andriod = true
			@video = document.getElementById @videoid
			@video.addEventListener "pause", @pause.bind @
			@video.addEventListener "playing", @play.bind @
			@video.addEventListener "ended", @ended.bind @
			setTimeout =>
				@initCanvas()
			,20


