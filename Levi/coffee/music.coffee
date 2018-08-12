# @codekit-prepend "coffee/css3Prefix"
# @codekit-prepend "../../libs/coffee/loadWechatConfig"
# @codekit-prepend "../../libs/coffee/IsPC"
# @codekit-prepend "../../libs/vue/vue-player"
# @codekit-prepend "../../libs/coffee/pixi-base"
# @codekit-prepend "../../libs/coffee/get"
# @codekit-prepend "./CD"


String.prototype.gblen = -> 
	len = 0;	
	for i in [0...this.length]
		if this.charCodeAt(i)>127 or this.charCodeAt(i)==94
			len += 2
		else
			len++
	return len

sys = null
main = null
_cd = null
apiLink = "//g.giccoo.com/"
# apiLink = "http://192.168.3.45:3000/"
_CDN = "./"

window.onload = ->
	if IsPC()
		document.getElementById("qrcode").className += " show"
		return false
	if window.navigator.userAgent.indexOf("NeteaseMusic") > -1
		sys = "NeteaseMusic"
	else
		loadWechatConfig()
		wx.ready ->
			shareContent =
				title: "这好像是我第一次把声音交给别人"
				desc: "糟糕，是惊喜的感觉"
				link: window.location.href
				imgUrl: "http://m.giccoo.com/Levi/img/ico.jpg"
				success: ->
					# alert "success"
				cancel: ->
					# alert "cancel"
			wx.onMenuShareTimeline shareContent
			wx.onMenuShareAppMessage shareContent
			wx.onMenuShareQQ shareContent
			wx.onMenuShareWeibo shareContent

	init()

isNumber = (obj)->
	return typeof(obj) is 'number' and isFinite(obj)    

init = ->
	TrueH = document.documentElement.clientHeight
	TrueW = document.documentElement.clientWidth
	# console.log new Date().getTime() - startTime
	# document.body.style.height = TrueH+"px"
	# document.documentElement.className += " iphone4" if TrueW/TrueH >= 0.64
	TrueW = 640 if TrueW >= 640
	TrueH = 1138 if TrueH >= 1138
	smaller = TrueH*2 < 1200
	navH = Math.ceil TrueW / 640 * 94 / TrueH * 100
	smaller = TrueW/TrueH > 0.65
	console.log TrueW/TrueH

	main = new Vue
		el: "#music"
		data:
			w: TrueW
			h: TrueH
			biger: TrueW/TrueH < 0.54
			smaller: smaller
			afterH: if smaller then TrueH*1.15-1029*(TrueW/750) else TrueH-1029*(TrueW/750)
			wy: false
			mounted: false
			msgList: []
			bgm: null
			playing: false
			timeing: "0:00"
			timeend: "0:00"
			playProgress: 0
			line: 1
			info:
				nickname: ""
				avatar: ""
				music: ""
				message: ""
				singer: 1
		watch:
			playing: (n,o)->
				unless n
					_cd.stop()
				else
					_cd.play()
		methods:
			loadedmetadata: ->
				if @.bgm.duration != Infinity
					m = Math.floor @.bgm.duration/60
					s = ten Math.floor @.bgm.duration%60
					m = 0
					s = "00" unless isNumber(@.bgm.duration)
					@.timeend = m+":"+s
			canplay: ->
				if @.bgm.duration != Infinity
					m = Math.floor @.bgm.duration/60
					s = ten Math.floor @.bgm.duration%60
					m = 0
					s = "00" unless isNumber(@.bgm.duration)
					@.timeend = m+":"+s
				
			playRun: (evt)->
				if @.bgm.duration != Infinity
					@.playProgress = @.bgm.currentTime/@.bgm.duration*100
					m = Math.floor @.bgm.duration/60
					s = ten Math.floor @.bgm.duration%60
					m = 0
					s = "00" unless isNumber(@.bgm.duration)
					@.timeend = m+":"+s
					m = Math.floor @.bgm.currentTime/60
					s = ten Math.floor @.bgm.currentTime%60
					m = 99 if parseInt(m) > 99
					@.timeing = m+":"+s
					n = 100/@.msgList.length
					@.line = Math.ceil @.playProgress/n
			play: ->
				if @.playing
					@.bgm.pause()
				else
					@.bgm.play()
					_hmt? and _hmt.push(['_trackEvent', "Levi", "record", "User B Journey Page-Stop Playing", "-"])
			playtype: ->
				console.log "play"
				@.playing = true

			cdUpdate: ->
				_cd.avatar "http://image.giccoo.com/upload/"+@.info.avatar+"?x-oss-process=image/format,jpg,quality,q_60/crop,x_129,y_279,w_416,h_416"
				texts = @.info.message.split("")
				newlist = _cd.lyricUpdate @.info.message.split("")
				@.msgList = newlist


			ask: (id)->
				axios.get "#{apiLink}active/Levi/info/id/#{id}"
				.then (msg)=>
					console.log msg.data
					@.info = msg.data.info
					@.mounted = true
					@.cdUpdate()
				document.addEventListener "WeixinJSBridgeReady", =>
					console.log "bgm play by bridge2"
					setTimeout =>
						@.bgm.play()
					,400
			next: ->
				if @.wy
					url = "https://activity.music.163.com/Levi/"
				else
					url = "http://levi.arkrdigital.com/music/"
				setTimeout =>
					window.location.href = url
				,300
				_hmt? and _hmt.push(['_trackEvent', "Levi", "record", "User B Journey Page-Make Yours", "-"])
		mounted: ->
			if sys is "NeteaseMusic"
				@.wy = true
			id = $_GET["id"]
			_cd = new CD 
				el: "cd"
				callback: =>
					@.ask id

			@.bgm = document.getElementById "bgm"
			

			

ten = (i)->
	if i is NaN
		return "0"
	if i < 10
		return "0"+i
	return i
