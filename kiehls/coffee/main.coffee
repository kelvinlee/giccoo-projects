# @codekit-prepend "coffee/css3Prefix"
# @codekit-prepend "../../libs/coffee/loadWechatConfig"
# @codekit-prepend "../../libs/coffee/IsPC"
# @codekit-prepend "../../libs/coffee/get"
# @codekit-prepend "../../libs/vue/vue-resetinput"
# @codekit-prepend "../../libs/vue/vue-player"
# @codekit-prepend "../../libs/vue/vue-register"
# @codekit-prepend "../../libs/coffee/pixi-base"
# @codekit-prepend "../../libs/coffee/String"
# @codekit-prepend "./UGC"

axios.defaults.withCredentials = true

TrueW = 640
TrueH = 1138
imageurl = "//api.giccoo.com/api/upload/image64/"
apiUrl = "//api.giccoo.com/kiehls"
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
	redirectUrl = "htts://m.giccoo.com/kiehls/"
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

	setShareWeb("K星首届冬日在线冲浪大赛开始了，让我们一起来浪~~","在线秒学冲浪，下一个刷榜的也许就是你","http://m.giccoo.com/kiehls/")

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
				# main.init()
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
			form:
				username: {id:"username", type: "input", label: "姓名", placeholder: "请填写姓名",value: ""}
				mobile: {id:"mobile", type: "number", label: "电话", placeholder: "请填写电话",value: ""}
				address: {id:"address", type: "input", label: "联系地址", placeholder: "请联系地址",value: ""}
			mask: 1
			text: ""
			nickname: ""
			mobile: ""
			sex: 0
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
			rankingShow: false
			registerShow: false
			shareNotePage: false
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
			yearName: "none"
			list: []
			insertId: 0
			score: 0
			hit: 1
		# watch:
		# 	nickname: (n,o)->
		# 		@.nickname = @.nickname.replace(/[\r\n]/g, "")
		# 		# console.log "n,o:",n,o
		# 		nickNameText = new Text "#{n} ",{fontFamily : 'Arial', fontSize: 32, fontWeight: "normal", fill : 0x6d4222, letterSpacing: 2, lineHeight: 40}
		# 		console.log "width:",nickNameText.width
		# 		if nickNameText.width > 296
		# 			# @.nickname = o
		# 			t = @.nickname.split("")
		# 			tx = ""
		# 			for i in [0...(t.length-1)]
		# 				tx += t[i]
		# 			@.nickname = tx
		# 			console.log tx
		# 			return false
				

		# 	message: (n,o)->
		# 		@.message = @.message.replace(/[\r\n]/g, "")
		# 		if @.message.length > 100#gblen() > 64
		# 			t = @.message.split("")
		# 			tx = ""
		# 			for i in t
		# 				tx += i
		# 				break if tx.length >= 100#gblen() >= 64
		# 			@.message = tx
		# 			return false
		methods:
			openYear: (year)->
				@.yearName = year
				@.pageIndex = 3
				@.logo = false
				setTimeout =>
					document.getElementById("manhua").scrollTop = 0
				,20

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
				# window.location.reload()
				# @.gameEnd = false
				@.rankingShow = false
				@.lotteryShow = false
				@.shareNotePage = false
				gameRestart()
			gobuy: ->
				window.location.href = "https://www.kiehls.com.cn/product/S0850901U.html?utm_source=kiehls-h5&utm_medium=h5&utm_campaign=E_kiehls-product-KLS00027"
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
			shareWeb:->
				if sys is "NeteaseMusic"
					CloudMusic.shareInApp()
					_cache = setTimeout =>
						@.getLottery()
						@.shareNotePage = false
					,5000
				else
					@.shareNotePage = true
				clearTimeout _cache
				
			share: ->
				# goFinal2()
				@.formBoxShow = false
				@.registerShow = false
				@.lotteryShow = false
				console.log "run share"
				# ugc.qrcode.visible = true
				ugc.app.renderer.render ugc.app.stage
				@.ugc = ugc.app.view.toDataURL("image/jpeg",0.6)
				image = @.ugc

				if @.wy
					folder = "kiehls"
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
				CloudMusic.open("https://m.giccoo.com/kiehls/")
			submit: (data)->
				console.log "data:",data
				if data.username is "" or data.username.length > 8 or data.username.length < 2
					return @.send "请输入2-8个字的姓名"
				if data.mobile is ""
					return @.send "请输入联系电话"
				if data.address is ""
					return @.send "请输入联系地址"
				data.id = @.lotteryInfo.id
				data.random = @.lotteryInfo.random
				return @.send "未找到您的中奖 ID" if not data.id?
				return @.send "未找到您的中奖 ID" if not data.random?
				
				axios.post "#{apiLink}active/kiehls/sendlottery/",data
				.then (msg)=>
					if msg.data.code is 200
						@.send "填写成功"
						@.lotteryEndShow = false
						@.regSubmited = true
					else
						@.send msg.data.reason
				.catch (err)=>
					@.send "服务器连接失败,请重试"
			getLottery: ->
				data = {
					random: 1+Math.floor Math.random()*19293
				}
				axios.post "#{apiLink}active/kiehls/getlottery/",data
				.then (msg)=>
					if msg.data.recode is 200
						@.lotteryInfo.id = msg.data.info.insertId
						@.lotteryInfo.random = msg.data.info.random
					@.lotteryShow = true
				.catch (err)=>
					console.log "err:",err
					@.send "请求错误,请重试"

			goWeb: ->
				window.location.href = "https://www.kiehls.com.cn/product/S0850901U.html?utm_source=kiehls-h5&utm_medium=h5&utm_campaign=E_kiehls-product-KLS00027"
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
			start: ->
				@.registerShow = true
			checkHit: ->
				max = 1501
				# max = @list[@list.length-1].score
				hit = Math.floor ((@.score+1)/(max+1))*100
				if hit >= 100
					hit = 90 + Math.floor Math.random()*6
				if @.score >= @list[@list.length-1].score
					hit = 99
				if @.score >= @list[0].score
					hit = 100
				@.hit = hit
			endGame: (score,time)->
				console.log "score:",score,time
				@.gameEnd = true
				@.rankingShow = true
				# 6s 200,
				@.score = score
				@.checkHit()
				data = 
					nickname: @.nickname
					sex: @.sex
					score: score
					time: time
				axios.post "#{apiLink}active/kiehls/score/",data
				.then (msg)=>
					console.log "msg:",msg.data
					if msg.data.code is 200
						setShareWeb("我在K星的极限冲浪保湿挑战赛中超过了全国#{@.hit}%的选手，等你来战！","快来，K星举办的首届网上冲浪大赛就差你一个了","http://m.giccoo.com/kiehls/?id=#{msg.data.info.insertId}")
						@.getList() if @.score > @.list[@.list.length-1].score
						@.insertId = msg.data.info.insertId
					else
						@.send msg.data.reason
					
				.catch (err)=>
					console.log "err:",err
					@.send "请求错误,请重试: #{JSON.stringify(err)}"

			startGame: ->
				# console.log "start game"
				# _public.note = false
				if @.nickname is ""
					return @.send "请输入姓名"
				if @.sex is 0
					return @.send "点击选择你的性别"
				@.pageIndex = 2
				@.registerShow = false
				gameBegin(@.sex) if gameBegin?

				# test
				# @.rankingShow = true
				# @.gameEnd = true

			goStep2: ->
				@.loading = true
				@.logo = true
				@.pageIndex = 2
				# setTimeout =>
				# 	@.pageIndex = 2
				# 	@.step = 2
				# ,500
				# setTimeout =>
				# 	@.loading = false
				# ,2500
			goBack: ->
				@.loading = false
				document.getElementById("manhua").scrollTop = 0
			goMore: ->
				@.step = 2
				@.loading = false
				document.getElementById("manhua").scrollTop = 0
			build: ->
				if @.nickname is ""
					@.send "请输入姓名"
					return false
				if @.message is ""
					@.send "请输入留言"
					return false
				@.pageIndex = 4
				@.logo = false
				ugc.init()
				@.goSubmit()
			getInfo: ->
				console.log "get info"
				axios.get "#{apiLink}active/kiehls/get/id/#{$_GET['id']}"
				.then (msg)=>
					console.log "msg:",msg.data.list
					@.score = msg.data.list.score
					@.pageIndex = 3
					@.checkHit()
				.catch (err)=>
					console.log "err:",err
			getList: ->
				axios.get "#{apiLink}active/kiehls/list/size/5"
				.then (msg)=>
					console.log "msg:",msg.data.list
					@.list = msg.data.list
					@.checkHit()
				.catch (err)=>
					console.log "err:",err
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
			ugc = new UGC({el: "ugc", w: 640, h: 640/TrueW*TrueH,callback: => console.log("callback") })
			console.log "h:",h
			# window.onresize = ->
			# 	console.log "resize:",document.documentElement.clientHeight
			# main.$root.$el.addEventListener "touchstart", (evt)->
			# 	_public.note = false
			@.getInfo() if $_GET["id"]?

			@.getList()

	CloudMusic.onShare (isSuccess,shareType)->
		if main.gameEnd
			main.getLottery()
			main.shareNotePage = false

_shareLoaded = false
setShareWeb = (title,desc,link)->
	shareData = 
		name: 'kiehls'
		title: title
		subTitle: desc
		text: ''
		picUrl: 'http://m.giccoo.com/kiehls/img/ico.jpg'
		link: link
	shareContent =
		title: title
		desc: desc
		link: link
		imgUrl: "http://m.giccoo.com/kiehls/img/ico.jpg"
		success: ->
			# alert "success"
			if main.gameEnd
				main.getLottery()
				main.shareNotePage = false
		cancel: ->
			# alert "cancel"
			if main.gameEnd
				main.getLottery()
				main.shareNotePage = false
	if window.navigator.userAgent.indexOf("NeteaseMusic") > -1
		sys = "NeteaseMusic"
		CloudMusic.setShareData shareData
	else if not _shareLoaded
		loadWechatConfig()
		wx.ready ->
			_shareLoaded = true
			wx.onMenuShareTimeline shareContent
			wx.onMenuShareAppMessage shareContent
			wx.onMenuShareQQ shareContent
			wx.onMenuShareWeibo shareContent
	else
		wx.onMenuShareTimeline shareContent
		wx.onMenuShareAppMessage shareContent
		wx.onMenuShareQQ shareContent
		wx.onMenuShareWeibo shareContent


