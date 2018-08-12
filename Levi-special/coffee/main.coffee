# @codekit-prepend "coffee/css3Prefix"
# @codekit-prepend "../../libs/coffee/loadWechatConfig"
# @codekit-prepend "../../libs/coffee/IsPC"
# @codekit-prepend "../../libs/vue/vue-player"
# @codekit-prepend "../../libs/coffee/pixi-base"
# @codekit-prepend "../../Levi/coffee/CD"

message = [
	{id: 1,nickname:"",message:"结婚后就失去了独处空间,我已经穿着裤子在马桶上坐了1小时了"}
	{id: 2,nickname:"",message:"他们说以后还会常常喝醉。但像毕业这么开心的醉,大概不会有了"}
	{id: 3,nickname:"",message:"因为怕吵到妈妈,我爸总是静音看球,却管不住自己发出的音量"}
	{id: 4,nickname:"",message:"为什么有这么多解压的玩具？生活不易啊！"}
	{id: 5,nickname:"",message:"坚持早起运动的第三天,发现原来总有人比你起得更早"}
	{id: 6,nickname:"",message:"当年车后座的女孩,今天给我发来了请帖"}
]

isNumber = (obj)->
	return typeof(obj) is 'number' and isFinite(obj)    

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
_CDN = "//image.giccoo.com/projects/Levi-special/"
_cd = null

window.onload = ->
	if IsPC()
		# document.getElementById("qrcode").className += " show"
		return false
	if window.navigator.userAgent.indexOf("NeteaseMusic") > -1
		sys = "NeteaseMusic"
	else
		loadWechatConfig()
		wx.ready ->
			shareContent =
				title: "Levi’s声活唱片店"
				desc: "听见生活"
				link: "http://m.giccoo.com/Levi-special/"
				imgUrl: "http://m.giccoo.com/Levi-special/img/ico-s.jpg"
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
			out: false
			openShow: true
		methods:
			openMusic: ->
				fl = document.getElementById "fl"
				fl.play()
				clearTimeout _cache
				@.openShow = false
				setTimeout =>
					@.out = true
					setTimeout ->
						document.getElementById('loading').style.display = "none"
					,2020
				,700
		mounted: ->
			@.mounted = true
			timein = setInterval =>
				@.progress += 3
				@.progress = @.progressOn if @.progress >= @.progressOn
				if @.progress >= 100
					@.progress = 100
					clearInterval timein
					main.mounted = true
					_cache = setTimeout =>
						@.out = true
						setTimeout ->
							document.getElementById('loading').style.display = "none"
						,2020
					,3000
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
			note: true
			noteArrow: true
			videoPop: false
		methods:
			scroll: (evt)->
				
				# console.log evt.target,evt.target.scrollLeft,evt.target.scrollWidth,TrueW
				if evt.target.scrollLeft >= 10
					@.note = false
				else
					@.note = true
				if evt.target.scrollLeft >= (evt.target.scrollWidth - TrueW)
					console.log "over left"
			openTV: ->
				tv = document.getElementById "audiotv"
				tv.play()
				video = document.getElementById "video"
				video.play()
				setTimeout =>
					@.videoPop = true
				,1200
				_hmt? and _hmt.push(['_trackEvent', "Levi", "special", "open tv", "-"])
			openMZ: ->
				mz = document.getElementById "audiomz"
				mz.play()
				setTimeout =>
					window.location.href = "https://music.163.com/#/user/home?id=1529461944"
				,1000
			openCDM: ->
				cd = document.getElementById "audiocd"
				cd.play()
				setTimeout =>
					# window.location.href = "https://music.163.com/#/playlist?id=2328252403&userid=38753829"
					# console.log CloudMusic.isInApp(),""
					# CloudMusic.playlist(2328252403)
					if CloudMusic.isInApp()
						CloudMusic.playlist(2328252403)
					else
						window.location.href = "https://music.163.com/#/playlist?id=2328252403"
				,1000
				_hmt? and _hmt.push(['_trackEvent', "Levi", "special", "music list", "-"])
			startbuild: ->
				setTimeout =>
					window.location.href = "/Levi/"
				,300
				_hmt? and _hmt.push(['_trackEvent', "Levi", "special", "record", "-"])
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
				# @.btnMore = true
				music.ask id
				music.show = true
				music.now = id
				@.noteArrow = false
				

		mounted: ->
			h = TrueH*2*(2-TrueW*2/750+0.01)
			# ugc = new UGC({el: "game",trueH: TrueH})
			@.v = parseInt CloudMusic.getClientVersion().replace(/\./g,"")
			

	music = new Vue
		el: "#music"
		data:
			now: 1
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
			show: false
			info:
				nickname: ""
				avatar: ""
				music: ""
				message: ""
				singer: 1
		watch:
			now: (n,o)->
				@.bgm.pause()
				@.line = 1
				if @.now > 6
					@.now = 6
				else if @.now < 1
					@.now = 1
				else
					@.ask @.now

		methods:
			prev: ->
				@.now--
			next: ->
				@.now++
			canplay: ->
				if @.bgm.duration != Infinity
					m = Math.floor @.bgm.duration/60
					s = ten Math.floor @.bgm.duration%60
					m = 0
					s = "00" unless isNumber(@.bgm.duration)
					@.timeend = m+":"+s
				
			playRun: ->
				if @.bgm.duration != Infinity
					@.playProgress = @.bgm.currentTime/@.bgm.duration*100
					m = ten Math.floor @.bgm.duration/60
					s = ten Math.floor @.bgm.duration%60
					m = 99 if m > 99
					m = 0
					s = "00" unless isNumber(@.bgm.duration)
					@.timeend = m+":"+s
					m = ten Math.floor @.bgm.currentTime/60
					s = ten Math.floor @.bgm.currentTime%60
					m = 99 if m > 99
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
				# _cd.avatar "http://image.giccoo.com/upload/"+@.info.avatar+"@!large"
				_cd.avatar "/Levi-special/img/cd-#{@.info.avatar}.jpg"
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
				# axios.get "#{apiLink}active/Levi/info/id/#{id}"
				# .then (msg)=>
				# 	console.log msg.data
				# 	@.info = msg.data.info
				# 	@.mounted = true
				# 	@.cdUpdate()
				@.info = {
					nickname: ""
					avatar: id
					music: "//image.giccoo.com/projects/Levi-special/mp3/cd-new-#{id}.mp3"
					message: message[id-1].message
					singer: 3
				}
				@.mounted = true
				@.cdUpdate()
				@.bgm.currentTime = 0
				@.playProgress = 0
				@.playing = false
		mounted: ->
			_cd = new CD 
				el: "cd"
			@.bgm = document.getElementById "bgm"

ten = (i)->
	if i is NaN
		return "0"
	if i < 10
		return "0"+i
	return i