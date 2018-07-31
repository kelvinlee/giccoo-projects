# @codekit-prepend "coffee/css3Prefix"
# @codekit-prepend "../../libs/coffee/loadWechatConfig"
# @codekit-prepend "../../libs/coffee/IsPC"
# @codekit-prepend "../../libs/vue/vue-player"
# @codekit-prepend "../../libs/coffee/pixi-base"
# @codekit-prepend "../../Levi/coffee/CD"


String.prototype.gblen = -> 
	len = 0;	
	for i in [0...this.length]
		if this.charCodeAt(i)>127 or this.charCodeAt(i)==94
			len += 2
		else
			len++
	return len

TrueW = 640
TrueH = 1138
imageurl = "//api.giccoo.com/api/upload/image64/"
apiUrl = "//api.giccoo.com/Levi"
apiLink = "//g.giccoo.com/"
# apiLink = "http://192.168.3.45:3000/"
# apiUrl = "http://localhost:8881/Levi"
main = {}
music = {}
ugc = null
_public = {}
loading = {}
musicLineCache = null
musicIconCache = null
sys = ""
ugcCache = null
sended = [false,false]
_cache = null
_CDN = "./"
_cd = null

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
				title: "有故事的声活单曲"
				desc: "有故事的声活单曲~"
				link: "http://m.giccoo.com/Levi-special/"
				imgUrl: "http://m.giccoo.com/Levi-special/img/ico.jpg"
				success: ->
					# alert "success"
				cancel: ->
					# alert "cancel"
			wx.onMenuShareTimeline shareContent
			wx.onMenuShareAppMessage shareContent
			wx.onMenuShareQQ shareContent
			wx.onMenuShareWeibo shareContent
	
	_public = new Vue
		el: "#public"
		data:
			note: true
	loading = new Vue
		el: "#loading"
		data:
			progress: 0
			mounted: false
			progressOn: 100
		mounted: ->
			@.mounted = true
			timein = setInterval =>
				@.progress += 1 + Math.round Math.random()
				@.progress = @.progressOn if @.progress >= @.progressOn
				if @.progress >= 100
					@.progress = 100
					clearInterval timein
					main.mounted = true
					setTimeout ->
						document.getElementById('load').className += " fadeZoomOut animated"
						_public.note = false
						setTimeout ->
							document.getElementById('load').style.display = "none"
						,1020
					,300
			,1000/20
			setTimeout =>
				init()
			,500

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
	console.log TrueW,TrueH

	main = new Vue
		el: "#main"
		data:
			w: TrueW
			h: TrueH
			biger: TrueW/TrueH < 0.52
			smaller: smaller
			afterH: if smaller then TrueH*1.15-1029*(TrueW/750) else TrueH-1029*(TrueW/750)
			wy: false
			mounted: false
			loading: false
			pagebuildShow: false
			pageInfoShow: false
			pageIndex: 2
			step: 1
			startgame: false
			folder: ""
			BGColor: "#ffffff"
			XY: "pageY"
			ugc: null
			ugcold: null
			pushed: false
			shareImageLink: null
			singerIndex: 3
			cache: null
			audioId: null
			v: null
			recordStarting: false
			authorization: false
			uploaded: false
			imageUpdate: false
			btnMore: false
			form:
				link: null
			mask: 1
			text: ""
			nickname: ""
			musicLink: ""
			default:
				x: 0
				moving: false
		methods:
			startbuild: ->
			start: (evt)->
				touch = evt.touches[0]
				@.default.x = touch.clientX
				@.default.moving = true
			move: (evt)->
				return false unless @.default.moving
				touch = evt.touches[0]
				targetX = touch.clientX
				m = @.default.x - targetX
				if m > 50
					@.default.moving = false
					ugc.nextPage()
				if m < -50
					@.default.moving = false
					ugc.prevPage()
			end: (evt)->
				@.default.moving = false
			openCD: (id)->
				@.btnMore = true
				music.ask id
				music.show = true

		mounted: ->
			h = TrueH*2*(2-TrueW*2/750+0.01)
			# ugc = new UGC({el: "game",trueH: TrueH})
			@.v = parseInt CloudMusic.getClientVersion().replace(/\./g,"")
			

	music = new Vue
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
			line: 0
			show: false
			info:
				nickname: ""
				avatar: ""
				music: ""
				message: ""
				singer: 1
		methods:
			canplay: ->
				console.log @.bgm.duration
			playRun: ->
				@.playProgress = @.bgm.currentTime/@.bgm.duration*100
				m = Math.floor @.bgm.duration/60
				s = ten Math.floor @.bgm.duration%60
				@.timeend = m+":"+s
				m = Math.floor @.bgm.currentTime/60
				s = ten Math.floor @.bgm.currentTime%60
				@.timeing = m+":"+s
				n = 100/@.msgList.length
				@.line = Math.ceil @.playProgress/n
			play: ->
				if @.playing
					@.bgm.pause()
					_cd.stop()
				else
					@.bgm.play()
					_cd.play()
			playtype: ->
				console.log "play"
				@.playing = true

			cdUpdate: ->
				_cd.avatar "http://image.giccoo.com/upload/"+@.info.avatar+"@!large"
				texts = @.info.message.split("")
				list = []
				n = -1
				lineH = 32
				for i in [0...texts.length]
					if i%8 is 0
						n++ 
						list[n] = ""
					list[n] += texts[i]+" "
				@.msgList = list
			ask: (id)->
				axios.get "#{apiLink}active/Levi/info/id/#{id}"
				.then (msg)=>
					console.log msg.data
					@.info = msg.data.info
					@.mounted = true
					@.cdUpdate()
		mounted: ->
			_cd = new CD 
				el: "cd"
			@.bgm = document.getElementById "bgm"
