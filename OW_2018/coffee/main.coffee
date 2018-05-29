# @codekit-prepend "coffee/css3Prefix"
# @codekit-prepend "../../libs/coffee/loadWechatConfig"
# @codekit-prepend "../../libs/vue/vue-slider"

main = {}


window.onload = ->

	loadWechatConfig()
	wx.ready ->
		shareContent =
			title: "《守望先锋》2018周年庆，守望英雄到来"
			desc: "这个世界需要更多的英雄，你和我都是平凡的英雄"
			link: "http://m.giccoo.com/OW_2018/"
			imgUrl: "http://m.giccoo.com/OW_2018/img/ico.jpg"
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
			playing: false
			index: 0
			musiclink: ""
		methods:
			end: (evt)->
				@.playing = false
			play: (evt)->
				@.playing = true
			playMusic: (id)->
				if @.index is id and @.playing
					return @.audio.pause()

				@.musiclink = "./mp3/#{id}.mp3"
				@.index = id
				setTimeout =>
					@.audio.play()
				,100

		mounted: ->
			@.audio = document.getElementById "bgm"
