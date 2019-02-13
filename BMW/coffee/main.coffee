# @codekit-prepend "coffee/css3Prefix"
# @codekit-prepend "../../libs/coffee/loadWechatConfig"
# @codekit-prepend "../../libs/coffee/IsPC"
# @codekit-prepend "../../libs/vue/vue-register"
# @codekit-prepend "../../libs/vue/vue-player"
# @codekit-prepend "../../libs/vue/vue-video"
# @codekit-prepend "../../libs/coffee/String"

axios.defaults.withCredentials = true

TrueW = 640
TrueH = 1138
imageurl = "//api.giccoo.com/api/upload/image64/"
apiUrl = "//api.giccoo.com/BMW"
# apiLink = "//localhost:3000/"
apiLink = "//g.giccoo.com/"
# apiLink = "http://192.168.3.53:3000/"
# apiUrl = "http://localhost:8881/Levi"
main = {}
ugc = null
_public = {}
loading = {}
musicLineCache = null
musicIconCache = null
sys = ""
ugcCache = null
sended = [false,false]
_cache = null
_startCache = null
_runTime = null
_second = 0
_testTime = 0


neteaseShareImage = ->
	title1 = "画山成岳"
	picUrl = "https://image.giccoo.com/upload/#{main.folder}/"+main.shareImageLink+"@!large"
	redirectUrl = "https://activity.music.163.com/BMW/"
	# console.log picUrl,"orpheus://sharepic?picUrl="+encodeURIComponent(picUrl)+"&shareUrl="+encodeURIComponent(redirectUrl)+"&wbDesc="+encodeURIComponent(title1)+"&qqDesc="+encodeURIComponent(title1)
	# window.location.href = "orpheus://sharepic?picUrl="+encodeURIComponent(picUrl)+"&shareUrl="+encodeURIComponent(redirectUrl)+"&wbDesc="+encodeURIComponent(title1)+"&qqDesc="+encodeURIComponent(title1)
	console.log "share href:",picUrl
	CloudMusic.sharePic({
		picUrl: picUrl,
		text: title1,
		link: redirectUrl
	})

window.onload = ->
	TrueH = document.documentElement.clientHeight
	TrueW = document.documentElement.clientWidth

	lastY = 0

	if window.navigator.userAgent.indexOf("NeteaseMusic") > -1
		sys = "NeteaseMusic"
		shareData = 
			name: 'BMW'
			title: '型者本色X音乐先声'
			subTitle: "BMW1系X王嘉尔《Bimmer Ride》"
			text: ''
			picUrl: 'http://m.giccoo.com/bmw&wje/img/ico.jpg'
			link: 'http://m.giccoo.com/bmw&wje/'
		CloudMusic.setShareData shareData
	else
		loadWechatConfig()
		wx.ready ->
			shareContent =
				title: "型者本色X音乐先声"
				desc: "BMW1系X王嘉尔《Bimmer Ride》"
				link: "http://m.giccoo.com/bmw&wje/"
				imgUrl: "http://m.giccoo.com/bmw&wje/img/ico.jpg"
				success: ->
					# alert "success"
				cancel: ->
					# alert "cancel"
			wx.onMenuShareTimeline shareContent
			wx.onMenuShareAppMessage shareContent
			wx.onMenuShareQQ shareContent
			wx.onMenuShareWeibo shareContent

	# _public = new Vue
	# 	el: "#public"
	# 	data:
	# 		note: true
	# 		playing: false
	# 	mounted: ->
	# 		document.addEventListener "WeixinJSBridgeReady", ->
	# 			_public.$children[0].change()

	# loading = new Vue
	# 	el: "#loading"
	# 	data:
	# 		progress: 0
	# 		mounted: false
	# 		progressOn: 0
	# 	methods:
	# 		next: ->
	# 			document.getElementById('load').className += " fadeOut animated"
	# 			_public.note = false
	# 			main.mounted = true
	# 			setTimeout ->
	# 				document.getElementById('load').style.display = "none"
	# 			,520
	# 	mounted: ->
	# 		@.mounted = true
	# 		TrueH = document.documentElement.clientHeight
	# 		TrueW = document.documentElement.clientWidth

	# 		# @.next() # for test

	# 		timein = setInterval =>
	# 			@.progress += 3
	# 			@.progress = @.progressOn if @.progress >= @.progressOn
	# 			if @.progress >= 100
	# 				@.progress = 100
	# 				clearInterval timein
	# 				_cache = setTimeout =>
	# 					@.next()
	# 				,1000
	# 		,1000/20
	
	init()


init = ->
	
	# console.log new Date().getTime() - startTime
	# document.body.style.height = TrueH+"px"
	# document.documentElement.className += " iphone4" if TrueW/TrueH >= 0.64
	TrueW = 640 if TrueW >= 640
	TrueH = 1138 if TrueH >= 1138
	smaller = TrueH*2 < 1200
	navH = Math.ceil TrueW / 640 * 94 / TrueH * 100
	TrueH = document.documentElement.clientHeight
	TrueW = document.documentElement.clientWidth
	console.log TrueW,TrueH

	main = new Vue
		el: "#main"
		data:
			w: TrueW
			h: TrueH
			biger: TrueW/TrueH < 0.55
			smaller: smaller
			afterH: if smaller then TrueH*1.15-1029*(TrueW/750) else TrueH-1029*(TrueW/750)
			wy: false
			mounted: true
			loading: false
			playing: false
			noteText: ""
			noteTime: null
			noteShow: false
			noteType: true
			pageInfoShow: false
			pageIndex: 1
			step: 1
			singerIndex: 1
			bgmPlay: false
			startgame: false
			folder: ""
			BGColor: "#ffffff"
			XY: "pageY"
			ugc: null
			ugcsave: null
			ugcold: null
			pushed: false
			shareImageLink: null
			cache: null
			audioId: null
			v: null
			recordStarting: false
			authorization: false
			norecord: true
			uploaded: false
			imageUpdate: false
			allowPopShow: false
			count: 0
			videoIndex: 0
			videoIndexOld: 0
			lr: true
			form:
				sex: {id:"sex", type: "select", link: "city", array: true, value: 0, options: [{name:"请选择称谓(男士/女士)",val:0},{name:"男士",val:1},{name:"女士",val:2}] }
				firstname: {id:"firstname", type: "input", placeholder: "请填写姓",value: ""}
				username: {id:"username", type: "input", placeholder: "请填写名",value: ""}
				mobile: {id:"mobile", type: "number", placeholder: "请填写电话号码",value: ""}
			# 	city: {id:"city", type: "select", label: "城市", link: "dealer",value: Object.keys(_citys["请选择省份"])[0], options: _citys["请选择省份"] }
			mask: 1
			text: ""
			nickname: ""
			mobile: ""
			musicLink: ""
			logId: ""
			openBtnShow: true
			default:
				x: 0
			videoPop: false
			canUpload: true
			handCover: false
			last_update: 0
			lastX: 0
			lastY: 0
			lastZ: 0
			speed: 4000
			maxSpeed: 0
			swing: false
			registerShow: false
			lotteryShow: false
			lotteryEndShow: false
			lotteryInfo: 
				id: null
				random: null
			regSubmited: false
			giveUp: false
			gameEnd: false
			noreg: false
			ugcShow: false
			regH: 100
			ugcType: 1
			questionShow: false
			questionIndex: 0
			answer1: 1
			answer2: 0
			answer3: 
				c1: false
				c2: false
				c3: false
				c4: false
			nickname: ""
			message: ""
			messageIndex: 1
			messageInput: false
			musicName: ""
			white: false
			gameEnd: false
			formShow: false
			formBoxShow: false
			carIndex: 1
			allow: false
			videoTime: false
		methods:
			playMusic: ->
				console.log "playing music"
				for item in @.$children
					item.video? && item.video.pause()
			playVideo: ->
				console.log "playing video"
				# @.$children[0].audio? && @.$children[0].audio.pause()
				for item in @.$children
					item.audio? && item.audio.pause()
			submit: (data)->
				console.log "data:",data
				if data.sex is 0 or data.sex is "0"
					return alert "请选择称谓"
				if data.firstname is "" or data.firstname.length > 2 or data.firstname.length < 1
					return alert "请输入1-2个字的姓"
				if data.username is "" or data.username.length > 8 or data.username.length < 1
					return alert "请输入1-8个字的名"
				if data.mobile is ""
					return alert "请输入联系电话"
				if not @.allow
					return alert "请您阅读并接受个人信息保护"

				axios.post "#{apiLink}active/autoSave/insert/database/bmw/",data
				.then (msg)=>
					if msg.data.code is 200
						alert "填写成功"
					else
						alert msg.data.reason
				.catch (err)=>
					console.log err
					alert "服务器连接失败,请重试."

			send: (text,type = true)->
				@.noteShow = true
				@.noteText = text
				@.noteType = type
				clearTimeout @.noteTime
				@.noteTime = setTimeout =>
					@.noteShow = false
				,2000
			answer3Change: (n,o)->
				console.log "answer3 changed."
				q3([@.answer3.c1,@.answer3.c2,@.answer3.c3,@.answer3.c4]) if q3?
			messageShow: ->
				@.messageInput = true
				document.getElementById("message").focus()
				document.getElementById("message").select()
			messageFoucs: ->
				if @.message is ""
					@.messageInput = true
				console.log "focus"
			messageBlur: ->
				if @.message is ""
					@.messageInput = false
			messageSelectLeft: ->
				@.messageIndex--
				if @.messageIndex <= 1
					return @.messageIndex = 1
			messageSelectRight: ->
				@.messageIndex++
				if @.messageIndex >= @.messageList.length
					return @.messageIndex = @.messageList.length
			over: ->
				@.questionShow = false
				ugc.init()
				setTimeout =>
					@.gameEnd = true
				,2000
			regame: ->
				window.location.reload()
			dateText: (date)->
				console.log date.replace(/-/g,"/")
				d = new Date date.replace(/-/g,"/")
				return d.getFullYear()+"年"+(d.getMonth()+1)+"月"+d.getDate()+"日"
			
			goUGC: ->
				@.lotteryShow = true

			sharePost: (base64)->
				@.gameEnd = true
				ugc.app.renderer.render ugc.app.stage
				# @.ugc = ugc.app.view.toDataURL()
				@.ugc = base64
			restart: ->
				window.location.reload()
			goshare: ->
				# goShare()
				@.share()

			share: ->
				goFinal2()
				@.formBoxShow = false
				@.registerShow = false
				@.lotteryShow = false
				console.log "run share"
				# ugc.qrcode.visible = true
				ugc.app.renderer.render ugc.app.stage
				@.ugc = ugc.app.view.toDataURL()
				ugc.buildUGC(ugc.app.view.toDataURL())
			callShare: (img)->
				@.ugc = img if img?
				image = @.ugc

				if @.wy
					folder = "drawboard"
					data = {
						image: image
						folder: folder
					}
					@.folder = folder
					return @.faild() unless image?
					return false if @.pushed
					if @.shareImageLink?
						@.pushed = false
						@.loading = false
						# ugc.back()
						neteaseShareImage()
						shareDone() if shareDone?
						return true
					axios.post imageurl,data
					.then (msg)=>
						if msg.data.code is 200
							main.success(msg.data)
						else
							main.faild(msg)
					.catch (e)=>
						# alert e
						main.faild(e)		
				else
					@.ugcShow = true
					# ugc.back()
				# ugc.qrcode.visible = false
			success: (data)->
				@.shareImageLink = data.info
				@.pushed = false
				@.loading = false
				# ugc.back()
				neteaseShareImage()
				shareDone()
				# 抽奖
				# unless @.giveUp
				# 	setTimeout =>
				# 		@.getLottery()
				# 	,5000
			closeUGC: ->
				@.ugcShow = false
				shareDone()
			faild: (err)->
				@.pushed = false
				@.loading = false
			openSong: ->
				id = [169794,166317,112678,144143,64497,163639,28853351,153476,5271858,186980,170749,5276250,27591641,32922491,144380,5250828,28785688,186272,210866,555984413]
				# CloudMusic.song(id[resultNum])
				window.location.href = "https://music.163.com/#/song?id=#{id[resultNum]}"
			openMusic: (id)->
				# goList()
				# _public.$children[0].pause()
				if CloudMusic.isInApp()
					CloudMusic.playlist(id)
				else
					window.location.href = "https://music.163.com/#/playlist?id=#{id}"
			openInApp: ->
				CloudMusic.open("https://m.giccoo.com/draw-board/")
			goNext: ->
				@.videoStop()
				@.pageIndex = 2
				clearInterval _startCache

			goShow: ->
				return @.send "请输入您的昵称" if @.nickname is ""
				@.pageIndex = 2
				@.formShow = true
				goFinal1()
			goNickname: ->
				clearInterval _startCache
				@.pageIndex = 3
				# @.carIndex = Math.floor(Math.random()*2+1)
			goSubmit: ->
				data = {
					username: @.nickname
					mobile: @.mobile
				}
				axios.post "#{apiLink}active/autoSave/insert/database/draw/",data
				.then (msg)=>
					if msg.data.code is 200
						@.send "恭喜您预约成功"
						@.formBoxShow = false
						setTimeout =>
							@.share()
						,2000
					else
						@.send msg.data.reason
				.catch (err)=>
					console.log "err:",err
					@.send "请求错误,请重试"

			goWeb: ->
				window.location.href = "https://tharu.svw-volkswagen.com/"
			focusEvt: (evt)->
				# document.getElementById("mobile").scrollIntoViewIfNeeded()
				console.log "height:",document.body.scrollHeight,evt
				# _startCache = setInterval =>
				# 	document.body.scrollTop = document.body.scrollHeight
				# ,100
			blurEvt: (evt)->
				clearInterval _startCache
			videoplay: (data)->
				console.log "videoPlay",data
				@.bgmPlay = _public.$children[0].playing
				_public.$children[0].pause() if data.playing
			videoStop: ->
				@.$children[0].stop() if @.$children[0].video?
				@.$children[1].stop() if @.$children[1].video?
				@.$children[2].stop() if @.$children[2].video?
			videoPause: ->
				_public.$children[0].play() if @.bgmPlay
			showNote: ->
				alert "今晚7:30 火力全开"

		# watch:
		mounted: ->
			# _startCache = setInterval =>
			# 	@.carIndex++
			# ,2500
			@.carIndex = Math.floor(Math.random()*2+1)
			console.log @.carIndex
			TrueH = document.documentElement.clientHeight
			TrueW = document.documentElement.clientWidth
			if sys is "NeteaseMusic"
				@.wy = true
			h = TrueH*2*(2-TrueW*2/750+0.01)
			# game = new Game({el: "game",h: h})
			@.wy = CloudMusic.isInApp()
			@.videoTime = new Date() >= new Date("2019-2-14 19:30")
			# @.videoTime = true
			version = CloudMusic.getClientVersion().split(".")
			

				

				
			
tryThis = (msg)->
	console.log "msg:",msg
