# @codekit-prepend "coffee/css3Prefix"
# @codekit-prepend "../../libs/coffee/loadWechatConfig"
# @codekit-prepend "../../libs/coffee/IsPC"
# @codekit-prepend "../../libs/vue/vue-register"
# @codekit-prepend "../../libs/vue/vue-player"
# @codekit-prepend "../../libs/coffee/String"

axios.defaults.withCredentials = true

TrueW = 640
TrueH = 1138
imageurl = "//api.giccoo.com/api/upload/image64/"
apiUrl = "//api.giccoo.com/YearOfThePig"
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
	redirectUrl = "https://activity.music.163.com/YearOfThePig/"
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
			name: 'YearOfThePig'
			title: 'Title'
			subTitle: "Description"
			text: ''
			picUrl: 'http://m.giccoo.com/YearOfThePig/img/ico.jpg'
			link: 'http://m.giccoo.com/YearOfThePig/'
		CloudMusic.setShareData shareData
	else
		loadWechatConfig()
		wx.ready ->
			shareContent =
				title: "Title"
				desc: "Description"
				link: "http://m.giccoo.com/YearOfThePig/"
				imgUrl: "http://m.giccoo.com/YearOfThePig/img/ico.jpg"
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

	loading = new Vue
		el: "#loading"
		data:
			progress: 0
			mounted: false
			progressOn: 100
			isrun: false
		computed:
			progressText: ->
				return NumberToChinese @.progress
		methods:
			runHand: ->
				return false if @.isrun
				maxH = document.documentElement.clientHeight
				@.isrun = true
				handLeft = document.getElementsByClassName("hand-left")[0]
				handRight = document.getElementsByClassName("hand-right")[0]
				bag = document.getElementsByClassName("lucky-bag")[0]
				shadow = document.getElementsByClassName("bag-shadow")[0]

				downTime = 1.2
				upTime = 0.6
				TweenMax.to handRight,downTime,{"y": maxH/2-maxH*0.1}
				TweenMax.to handLeft,downTime,{"y": maxH/2-maxH*0.1}

				TweenMax.to handRight,downTime,{"rotation": 10}
				TweenMax.to handLeft,downTime,{"rotation": -10}

				TweenMax.to handRight,upTime,{"y": -maxH*0.1,delay: downTime*1.2}
				TweenMax.to handLeft,upTime,{"y": -maxH*0.1,delay: downTime*1.2}
				TweenMax.to shadow,upTime*2/3,{"scale": 0,delay: downTime*1.2}
				TweenMax.to bag,upTime,{
					"y": -(maxH/2),
					delay: downTime*1.2, 
					onComplete: =>
						console.log "aa"
						@.next()
				}

			next: ->
				document.getElementById('load').className += " fadeOut animated"
				_public.note = false
				main.mounted = true
				main.runHand()
				setTimeout ->
					document.getElementById('load').style.display = "none"
					main.pageIndex = 1
				,520
		mounted: ->
			@.mounted = true
			TrueH = document.documentElement.clientHeight
			TrueW = document.documentElement.clientWidth

			# @.next() # for test

			timein = setInterval =>
				@.progress += 3
				@.progress = @.progressOn if @.progress >= @.progressOn
				if @.progress >= 70
					@.runHand()
				if @.progress >= 100
					@.progress = 100
					clearInterval timein
			,1000/20
	
	init()

init = ->
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
			pageIndex: 0
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
			nickname: ""
			message: ""
			messageIndex: 1
			messageInput: false
			musicName: ""
			white: false
			gameEnd: false
			formShow: true
			formBoxShow: false
			carIndex: 1
			allow: true
		watch:
			carIndex: (n,o)->
				@.carIndex = 1 if @.carIndex >= 3
			answer1: (n,o)->
				console.log "answer1 changed:",n
				q1(n) if q1?
				@.white = if n is 3 then false else true
			answer2: (n,o)->
				console.log "answer2 changed:",n
				q2(n) if q2?
			"answer3.c1": (n,o)->
				@.answer3Change n,o
			"answer3.c2": (n,o)->
				@.answer3Change n,o
			"answer3.c3": (n,o)->
				@.answer3Change n,o
			"answer3.c4": (n,o)->
				@.answer3Change n,o
			nickname: (n,o)->
				@.nickname = @.nickname.replace(/[\r\n]/g, "")
				if @.nickname.length > 10
					t = @.nickname.split("")
					tx = ""
					for i in t
						tx += i
						break if tx.length >= 10
					@.nickname = tx
					return false #alert "字数限制10个中文字符20个英文字符" 
			message: (n,o)->
				t = n.split('\n')
				if t.length > 4
					@.message = @.message.replace(/^\s+|\s+$/g,'')
				for line in t
					if line.gblen() > 32
						return @.message = o
		methods:
			runHand: ->
				return false unless @.allow 
				bag = document.getElementsByClassName("home-handbag")[0]
				lr = Math.random() > 0.5
				bag.className = "home-handbag #{if lr then 'right' else 'left'}"
				times = 2+Math.floor Math.random()*8
				outTime = 1
				TweenMax.set bag, {y: Math.random()*TrueH*0.3}
				TweenMax.to bag,outTime,{
					x: if lr then -TrueW/3 else TrueW/3
				}
				TweenMax.to bag,outTime/5,{
					yoyo: true
					rotation: 5
					repeat: times
					transformOrigin: if lr then "right bottom" else "left bottom"
					delay: outTime
					onComplete: =>
						TweenMax.to bag,outTime/2,{
							rotation: 0
						}
						TweenMax.to bag,outTime/2,{
							x: 0
							onComplete: =>
								setTimeout =>
									@.runHand()
								,200+1000*Math.random()
						}
				}


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
				@.$children[0].stop()
			videoPause: ->
				_public.$children[0].play() if @.bgmPlay
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
			version = CloudMusic.getClientVersion().split(".")

chnNumChar = ["零","一","二","三","四","五","六","七","八","九"]
chnUnitSection = ["","万","亿","万亿","亿亿"]
chnUnitChar = ["","十","百","千"]
SectionToChinese = (section) ->
	strIns = ''
	chnStr = ''
	unitPos = 0
	oldSection = section
	zero = true
	while section > 0
		v = section % 10
		if v == 0
			if !zero
				zero = true
				chnStr = chnNumChar[v] + chnStr
		else
			zero = false
			strIns = chnNumChar[v]
			strIns += chnUnitChar[unitPos]
			chnStr = strIns + chnStr
		unitPos++
		section = Math.floor(section / 10)
	return chnStr.substr(1) if oldSection >= 10 and oldSection < 20
	return chnStr
NumberToChinese = (num) ->
	unitPos = 0
	strIns = ''
	chnStr = ''
	needZero = false
	if num == 0
		return chnNumChar[0]
	while num > 0
		section = num % 10000
		if needZero
			chnStr = chnNumChar[0] + chnStr
		strIns = SectionToChinese(section)
		strIns += if section != 0 then chnUnitSection[unitPos] else chnUnitSection[0]
		chnStr = strIns + chnStr
		needZero = section < 1000 and section > 0
		num = Math.floor(num / 10000)
		unitPos++
	chnStr

tryThis = (msg)->
	console.log "msg:",msg