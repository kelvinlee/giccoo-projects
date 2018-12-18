# @codekit-prepend "coffee/css3Prefix"
# @codekit-prepend "../../libs/coffee/loadWechatConfig"
# @codekit-prepend "../../libs/coffee/IsPC"
# @codekit-prepend "../../libs/vue/vue-player"
# @codekit-prepend "../../libs/vue/vue-slider"
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
	title1 = "点播圣诞星声"
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
			name: 'lenovo'
			title: 'lenovo'
			subTitle: "lenovo"
			text: ''
			picUrl: 'http://m.giccoo.com/lenovo/img/ico.jpg'
			link: 'http://m.giccoo.com/lenovo/'
		CloudMusic.setShareData shareData
	else
		loadWechatConfig()
		wx.ready ->
			shareContent =
				title: "lenovo"
				desc: "lenovo"
				link: "http://m.giccoo.com/lenovo/"
				imgUrl: "http://m.giccoo.com/lenovo/img/ico.jpg"
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
			wy: if sys is "NeteaseMusic" then true else false
			wx: false
			note: true
			playing: false
		methods:
			startGame: ->
				@.note = false
		mounted: ->
			document.addEventListener "WeixinJSBridgeReady", ->
				_public.wx = true
				_public.note = false
				_public.$children[0].change()

	loading = new Vue
		el: "#loading"
		data:
			progress: 0
			mounted: false
			progressOn: 0
		methods:
			next: ->
				document.getElementById('load').className += " fadeOut animated"
				main.mounted = true
				main.init()
				setTimeout ->
					document.getElementById('load').style.display = "none"
					_public.note = false if _public.wx
					# setTimeout ->
					# 	_public.note = false if _public.wy
					# ,3000
				,520
		mounted: ->
			@.mounted = true
			TrueH = document.documentElement.clientHeight
			TrueW = document.documentElement.clientWidth

			# @.next() # for test

			timein = setInterval =>
				@.progress += 3
				@.progress = @.progressOn if @.progress >= @.progressOn
				if @.progress >= 100
					@.progress = 100
					clearInterval timein
					_cache = setTimeout =>
						@.next()
					,1000
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
			logo: true
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
			nickname: "好久不见"
			message: "好久没听beyond的歌了，"
			messageIndex: 1
			messageInput: false
			musicName: ""
			white: false
			gameEnd: false
			formShow: false
			formBoxShow: false
			carIndex: 1
			yearName: "00"
		watch:
			message: (n,o)->
				@.message = @.message.replace(/[\r\n]/g, "")
				if @.message.length > 100#gblen() > 64
					t = @.message.split("")
					tx = ""
					for i in t
						tx += i
						break if tx.length >= 100#gblen() >= 64
					@.message = tx
					return false
		methods:
			openYear: (year)->
				@.yearName = year
				@.pageIndex = 3
				@.logo = false

			prev: ->
				@.$children[0].prev()
			next: ->
				@.$children[0].next()
			number: (n)->
				# @.carIndex = n
			select: ->
				console.log Math.abs @.$children[0].slideNumber
				@.carIndex = Math.abs @.$children[0].slideNumber
				@.step = 3

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
			gobuy: ->
				window.location.href = "http://www.baidu.com"
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
				# goFinal2()
				@.formBoxShow = false
				@.registerShow = false
				@.lotteryShow = false
				console.log "run share"
				# ugc.qrcode.visible = true
				ugc.app.renderer.render ugc.app.stage
				@.ugc = ugc.app.view.toDataURL()
				image = @.ugc

				if @.wy
					folder = "emoji"
					data = {
						image: image
						folder: folder
					}
					@.folder = folder
					return @.faild() unless image?
					return false if @.pushed
					axios.post imageurl,data
					.then (msg)=>
						if msg.data.recode is 200
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
				ugc.shareDone()
				# 抽奖
				# unless @.giveUp
				# 	setTimeout =>
				# 		@.getLottery()
				# 	,5000
			closeUGC: ->
				@.ugcShow = false
				ugc.shareDone()
			faild: (err)->
				@.pushed = false
				@.loading = false
			openSong: (id)->
				# id = [38576323,167740,139381,474567580,355992,28815250,109968,110083,163639,28785688,5271858,28838557,169794,27591641,5271855]
				# CloudMusic.song(id[resultNum])
				window.location.href = "https://music.163.com/#/song?id=#{id}"
			openMusic: (id)->
				# goList()
				# _public.$children[0].pause()
				if CloudMusic.isInApp()
					CloudMusic.playlist(id)
				else
					window.location.href = "https://music.163.com/#/playlist?id=#{id}"
			openInApp: ->
				CloudMusic.open("https://m.giccoo.com/emoji/")

			goSubmit: ->
				data = {
					username: @.nickname
					mobile:   @.mobile
				}
				axios.post "#{apiLink}active/autoSave/insert/database/draw/",data
				.then (msg)=>
					if msg.data.code is 200
						@.share()
					else
						@.send msg.data.reason
				.catch (err)=>
					console.log "err:",err
					@.send "请求错误,请重试"

			goWeb: ->
				window.location.href = "http://www.baidu.com/"
			goNote: ->
				@.singerIndex = resultA[1] + 1
				if @.singerIndex is 2
					@.singerIndex = 3
				else if @.singerIndex is 3
					@.singerIndex = 2
				@.pageNote = true
			init: ->
				# getStart()
			closeNote: ->
				@.pageNote = false
				goEnd()
			startGame: ->
				# console.log "start game"
				_public.note = false
			goStep2: ->
				@.loading = true
				@.logo = true
				setTimeout =>
					@.loading = false
					@.pageIndex = 2
					@.step = 2
				,2500
			build: ->
				@.pageIndex = 4
				@.logo = false
				ugc.init()
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
				_CDN+"img/bg2.jpg"
				_CDN+"img/filecover.png"
				_CDN+"img/ugc-title.png"
				_CDN+"img/ugc-content-3.png"
				_CDN+"img/ugc-content-4.png"
				_CDN+"img/ugc-content-5.png"
				_CDN+"img/btn-reload.png"
				_CDN+"img/btn-more.png"
				_CDN+"img/share-title.png"
				_CDN+"img/qr.png"
				_CDN+"img/huati.png"
			]
			window.imageList = window.imageList.concat(imageList2)
			ugc = new UGC({el: "ugc", w: 750, h: 750/TrueW*TrueH,callback: => console.log("callback") })
			console.log "h:",h
			# window.onresize = ->
			# 	console.log "resize:",document.documentElement.clientHeight
			# main.$root.$el.addEventListener "touchstart", (evt)->
			# 	_public.note = false


				
			

