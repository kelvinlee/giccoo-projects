# @codekit-prepend "coffee/css3Prefix"
# @codekit-prepend "../../libs/pixi/voice"
# @codekit-prepend "../../libs/coffee/pixi-base"
# @codekit-prepend "../../libs/coffee/loadWechatConfig"
# @codekit-prepend "../../libs/vue/vue-slider"
main = {}


window.onload = ->

	loadWechatConfig()
	wx.ready ->
		shareContent =
			title: "#混在街头#"
			desc: "#混在街头#"
			link: "http://m.giccoo.com/adidas-originals-i5923/"
			imgUrl: "http://m.giccoo.com/adidas-originals-i5923/img/ico.jpg"
			success: ->
				# alert "success"
			cancel: ->
				# alert "cancel"
		wx.onMenuShareTimeline shareContent
		wx.onMenuShareAppMessage shareContent
		wx.onMenuShareQQ shareContent
		wx.onMenuShareWeibo shareContent

	init()
	

init = ->
	main = new Vue
		el: "#main"
		data:
			mounted: false
			playing: false
			videoplaying: false
			videolink: "//image.giccoo.com/projects/adidas-originals-i5923/video/2.mp4"
			index: 0
			musiclink: ""
		watch:
			index: (ov,nv)->
				if ov isnt nv
					@.voice.rebuildAll() if @.voice?

		methods:
			end: (evt)->
				@.playing = false
				@.voice.pause()
			play: (evt)->
				@.playing = true
				@.voice.play()
				# @.voice.play() if @.index is 0
			playMusic: (id)->
				if @.index is id and @.playing
					return @.audio.pause()

				@.musiclink = "//image.giccoo.com/projects/adidas-originals-i5923/mp3/#{id}.mp3"
				@.index = id
				setTimeout =>
					@.audio.play()
				,100
			playvideo: ()->
				if @.videoplaying
					@.video.pause()
				else
					@.video.play()
			videoplay: (evt)->
				@.videoplaying = true
			videoend: (evt)->
				@.videoplaying = false
			number: (n)->
				# console.log "a",n
				

		mounted: ->
			@.mounted = true
			@.audio = document.getElementById "bgm"
			@.video = document.getElementById "videoid"
			@.voice = new animationVoice({el: "playervoice",h: 180,fillColor: 0xFFFFFF})
			

