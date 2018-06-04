# @codekit-prepend "coffee/css3Prefix"
# @codekit-prepend "../../libs/pixi/voice"
# @codekit-prepend "../../libs/coffee/pixi-base"
# @codekit-prepend "../../libs/coffee/loadWechatConfig"
# @codekit-prepend "../../libs/vue/vue-slider"
main = {}
sended = [false,false]

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
				@.musiclink = "//image.giccoo.com/projects/adidas-originals-i5923/mp3/#{id}-test.mp3"
				@.index = id
				setTimeout =>
					@.audio.play()
				,50
				list = ['TIED TOGETHER','Angel','SOS','Bring it Back Round','Educated','FEMME Double Trouble','Fire With Fire']
				_smq.push(['custom','Homepage','Music',list[id]]) if _smq?
			playvideo: ()->
				if @.videoplaying
					@.video.pause()
				else
					@.video.play()
			videoplay: (evt)->
				@.videoplaying = true
				_smq.push(['custom','Homepage','VideoView','Jackson']) if _smq?
			videoend: (evt)->
				@.videoplaying = false
			number: (n)->
				# console.log "a",n
			gotoAd: (i)->
				setTimeout =>
					window.location.href = "https://www.adidas.com.cn/campaign/originals_i5923?utm_source=Neteaseh5&utm_medium=display&utm_campaign=2018-I5923-JUN&utm_content=H5-landing"
				,100
				list = ['Jackson1','Angelababy','YM','AdrianneHo','Jackson2','Jackson3']
				_smq.push(['custom','Homepage','go to EC',list[i]]) if _smq?
				return false
			scroll: ->
				# console.log window.scrollY,
				if window.scrollY >= document.documentElement.clientHeight/3 and not sended[0]
					sended[0] = true
					_smq.push(['pageview', '/homepage','二屏']) if _smq?
					# console.log "erping"
				if window.scrollY >= document.documentElement.clientHeight and not sended[1]
					sended[1] = true
					_smq.push(['pageview', '/homepage','三屏']) if _smq?
					# console.log "sanping"
		mounted: ->
			@.mounted = true
			@.audio = document.getElementById "bgm"
			@.video = document.getElementById "videoid"
			@.voice = new animationVoice({el: "playervoice",h: 180,fillColor: 0xFFFFFF})
			window.onscroll = @.scroll
			

