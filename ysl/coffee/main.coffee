# @codekit-prepend "coffee/css3Prefix"
# @codekit-prepend "../../libs/coffee/loadWechatConfig"
# @codekit-prepend "../../libs/coffee/IsPC"
# @codekit-prepend "../../libs/vue/vue-multi-player"
# @codekit-prepend "../../libs/vue/vue-video"
# @codekit-prepend "../../libs/coffee/pixi-base"
# @codekit-prepend "../../libs/coffee/String"
# @codekit-prepend "./UGC"

axios.defaults.withCredentials = true

TrueW = 640
TrueH = 1138
imageurl = "//api.giccoo.com/api/upload/image64/"
apiUrl = "//api.giccoo.com/lenovo"
# apiLink = "//localhost:3000/"
apiLink = "//g.giccoo.com/"
# apiLink = "http://192.168.3.53:3000/"
# apiUrl = "http://localhost:8881/Levi"
# /api/activity/lorealysl/userinfo
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
	title1 = "刻录你的2018"
	picUrl = "https://image.giccoo.com/upload/#{main.folder}/"+main.shareImageLink+"@!large"
	redirectUrl = "https://activity.music.163.com/lenovo/"
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
			name: 'YSL'
			title: '刻录你的2018'
			subTitle: " "
			text: ''
			picUrl: 'http://m.giccoo.com/ysl/img/ico.jpg'
			link: 'http://m.giccoo.com/ysl/?share=wy'
		CloudMusic.setShareData shareData
	else
		# CloudMusic.open('http://m.giccoo.com/ysl/')
		# return false
		loadWechatConfig()
		wx.ready ->
			shareContent =
				title: "刻录你的2018"
				desc: " "
				link: "http://m.giccoo.com/ysl/?share=wx"
				imgUrl: "http://m.giccoo.com/ysl/img/ico.jpg"
				success: ->
					# alert "success"
				cancel: ->
					# alert "cancel"
			wx.onMenuShareTimeline shareContent
			wx.onMenuShareAppMessage shareContent
			wx.onMenuShareQQ shareContent
			wx.onMenuShareWeibo shareContent

	TrueW = 640 if TrueW >= 640
	TrueH = 1138 if TrueH >= 1138
	smaller = TrueH*2 < 1200
	navH = Math.ceil TrueW / 640 * 94 / TrueH * 100
	TrueH = document.documentElement.clientHeight
	TrueW = document.documentElement.clientWidth

	_public = new Vue
		el: "#public"
		data:
			wy: if sys is "NeteaseMusic" then true else false
			wx: false
			note: true
			playing: false
			list: ["//image.giccoo.com/projects/ysl/mp3/bgm-1.mp3","//image.giccoo.com/projects/ysl/mp3/bgm-2.mp3","//image.giccoo.com/projects/ysl/mp3/bgm-3.mp3"]
		methods:
			startGame: ->
				@.note = false
		mounted: ->
			document.addEventListener "WeixinJSBridgeReady", ->
				_public.wx = true
			# 	_public.note = false
			# 	_public.$children[0].change()

	loading = new Vue
		el: "#loading"
		data:
			w: TrueW
			h: TrueH
			biger: TrueW/TrueH < 0.55
			smaller: smaller
			progress: 0
			mounted: false
			progressOn: 0
			number: 32743
			oldnumber: 32743
			moved: false
			end: false
			cant: true
			offset:
				y: 0
				deltaY: 0
		methods:
			start: (evt)->
				if evt.type is "mousedown"
					touch = evt
				else
					touch = evt.touches[0]
				@offset.y = touch.pageY
				@moved = true
			move: (evt)->
				evt.stoppropagation() if evt.stoppropagation?
				return false unless @moved or @.cant
				if evt.type is "mousemove"
					touch = evt
				else
					touch = evt.touches[0]
				deltaY = touch.pageY - (@offset.y)
				# console.log @offset.deltaY
				if Math.abs(deltaY) > 30
					@.next()
			end: (evt)->
				@moved = false
			next: ->
				return false if @.end or @.cant
				console.log "end?"
				@.moved = false
				@.end = true
				document.getElementById('load').className += " fadeOut animated"
				main.mounted = true
				main.init() if main.init?
				setTimeout ->
					clearInterval _startCache
					document.getElementById('load').style.display = "none"
					_public.note = false if _public.wx
					# setTimeout ->
					# 	_public.note = false if _public.wy
					# ,3000
				,520
				setTimeout =>
					getStart()
				,400
			get: ->
				axios.get "http://api.giccoo.com/count/get/yslnumber"
				.then (msg)=>
					# console.log msg.data.info[0]
					@.number = msg.data.info[0].count - 200
					if @.number>=0
						@.number = 0
					@.oldnumber = msg.data.info[0].count
				.catch (err)->
					console.log "err:",err
				# axios.get "//music.163.com/api/activity/lorealysl/userinfo"
				# .then (msg)=>
				# 	d = msg.data
				# 	if d.code is 200
				# 		main.userInfoGet = true
				# 		main.userInfo = d.data
		mounted: ->
			@.mounted = true
			
			@.get()
			# @.next() # for test
			# setTimeout =>
			# 	@.next()
			# ,200

			timein = setInterval =>
				@.progress += 3
				@.progress = @.progressOn if @.progress >= @.progressOn
				if @.progress >= 100
					@.progress = 100
					clearInterval timein
					_cache = setTimeout =>
						# @.next()
						@.cant = false
					,2000
					
					_startCache = setInterval =>
						@.number += 1+Math.floor Math.random()*3
						if @.number >= @.oldnumber
							clearInterval _startCache
					, 50
			,1000/20
	
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
			noteText: ""
			noteTime: null
			noteShow: false
			pageInfoShow: false
			pageIndex: 1
			step: 1
			singerIndex: 2
			logo: false
			startgame: false
			folder: ""
			BGColor: "#ffffff"
			XY: "pageY"
			ugc: null
			ugcsave: false
			ugcold: null
			pushed: false
			shareImageLink: null
			cache: null
			audioId: null
			v: null
			pageNote: false
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
			# form:
			# 	username: {id:"username", type: "input", label: "姓名", placeholder: "请填写姓名",value: ""}
			# 	mobile: {id:"mobile", type: "number", label: "电话", placeholder: "请填写电话",value: ""}
			# 	province: {id:"province", type: "select", label: "省份", link: "city", value: Object.keys(_citys)[0], options: _citys }
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
			bgmShow: false
			giveUp: false
			gameEnd: false
			noreg: false
			ugcShow: false
			regH: 100
			ugcType: 1
			questionShow: false
			questionIndex: 0
			userInfoGet: false
			userInfo: 
				userId: 0
				nickName: ""
				playCount: 0
				songId: 0
				songName: ""
				longestPlayDayPeriod: 0
				playTotalTime: 0
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
			shop: false
		# watch:
		methods:
			send: (text)->
				@.noteShow = true
				@.noteText = text
				clearTimeout @.noteTime
				@.noteTime = setTimeout =>
					@.noteShow = false
				,2000
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
				goFinal2() if goFinal2?
				@.formBoxShow = false
				@.registerShow = false
				@.lotteryShow = false
				console.log "run share"
				# ugc.qrcode.visible = true
				ugc.long.renderer.render ugc.long.stage
				@.ugc = ugc.long.view.toDataURL()
				image = @.ugc

				if @.wy
					folder = "ysl"
					data = {
						image: image
						folder: folder
					}
					@.folder = folder
					return @.faild() unless image?
					return false if @.pushed
					if @.ugcsave
						neteaseShareImage()
						shareDone() if shareDone?
						setTimeout =>
							@.getLottery()
						,5000
						return true
					axios.post imageurl,data
					.then (msg)=>
						if msg.data.recode is 200
							main.success(msg.data)
							@.ugcsave = true
						else
							main.faild(msg)
					.catch (e)=>
						# alert e
						main.faild(e)		
				else
					@.ugcShow = true
					setTimeout =>
						@.getLottery()
					,5000
					# ugc.back()
				# ugc.qrcode.visible = false
			success: (data)->
				@.shareImageLink = data.info
				@.pushed = false
				@.loading = false
				# ugc.back()
				neteaseShareImage()
				shareDone() if shareDone?
				# 抽奖
				# unless @.giveUp
				setTimeout =>
					@.getLottery()
				,5000
			getLottery: ->
				@.lotteryShow = true
			closeUGC: ->
				@.ugcShow = false
				shareDone() if shareDone?
			faild: (err)->
				@.pushed = false
				@.loading = false
			openSong: (id)->
				# id = [38576323,167740,139381,474567580,355992,28815250,109968,110083,163639,28785688,5271858,28838557,169794,27591641,5271855]
				# CloudMusic.song(id[resultNum])
				window.location.href = "https://music.163.com/#/song?id=#{id}"
			changeSond: (id)->
				list = ["//image.giccoo.com/projects/ysl/mp3/bgm-1.mp3","//image.giccoo.com/projects/ysl/mp3/bgm-2.mp3","//image.giccoo.com/projects/ysl/mp3/bgm-3.mp3"]
				@.bgmShow = true
				_public.$children[0].play(id)
				# _public.$children[0].src = list[id]
				# setTimeout =>
				# 	_public.$children[0].play()
				# ,20
			openMusic: (id)->
				# goList()
				# _public.$children[0].pause()
				if CloudMusic.isInApp()
					CloudMusic.playlist(id)
				else
					window.location.href = "https://music.163.com/#/playlist?id=#{id}"
			openInApp: ->
				CloudMusic.open("https://m.giccoo.com/ysl/")

			goWeb: ->
				# if _public.wx
				# 	# window.location.href = "https://market.m.taobao.com/app/tb-source-app/shopact/pages/index?wh_weex=true&pathInfo=shop/activity&userId=3626596873&shopId=471050084&pageId=188694514&alisite=true"
				# 	@.shop = true
				# else
				window.location.href = "https://market.m.taobao.com/app/tb-source-app/shopact/pages/index?wh_weex=true&pathInfo=shop/activity&userId=3626596873&shopId=471050084&pageId=188694514&alisite=true"
			gobuy: ->
				window.location.href = "http://www.baidu.com"
			init: ->
				# getStart()
			startGame: ->
				# console.log "start game"
				_public.note = false
		# watch:
		mounted: ->

			TrueH = document.documentElement.clientHeight
			TrueW = document.documentElement.clientWidth
			if sys is "NeteaseMusic"
				@.wy = true
			h = TrueH*2*(2-TrueW*2/750+0.01)
			# game = new Game({el: "game",h: h})
			@.wy = CloudMusic.isInApp()
			version = CloudMusic.getClientVersion().split(".")
			# @.getUserInfo (callback)=>
				# console.log imageList,@.muiscType @.userInfo.styleTop
			# @.ugcType = @.muiscType @.userInfo.styleTop
			imageList2 = [
			]
			window.imageList = window.imageList.concat(imageList2)
			ugc = new UGC({el: "ugc", w: 640, h: 640/TrueW*TrueH,callback: => })
			console.log "h:",h
			# window.onresize = ->
			# 	console.log "resize:",document.documentElement.clientHeight
			# main.$root.$el.addEventListener "touchstart", (evt)->
			# 	_public.note = false


				
			

