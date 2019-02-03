# @codekit-prepend "coffee/css3Prefix"
# @codekit-prepend "../../libs/coffee/loadWechatConfig"
# @codekit-prepend "../../libs/coffee/IsPC"
# @codekit-prepend "../../libs/vue/vue-register"
# @codekit-prepend "../../libs/vue/vue-player"
# @codekit-prepend "../../libs/coffee/String"
# @codekit-prepend "../../libs/coffee/pixi-base"
# @codekit-prepend "UGC"
# @codekit-prepend "sound"

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
			title: '新年福袋被偷走了，你的福贴还在里面呢! 快点抢回来吧~'
			subTitle: "可恶的小猪你别跑,把我的福袋还回来!!!"
			text: ''
			picUrl: 'http://m.giccoo.com/YearOfThePig/img/ico.jpg'
			link: 'http://m.giccoo.com/YearOfThePig/'
		CloudMusic.setShareData shareData
	else
		loadWechatConfig()
		wx.ready ->
			shareContent =
				title: "新年福袋被偷走了，你的福贴还在里面呢! 快点抢回来吧~"
				desc: "可恶的小猪你别跑,把我的福袋还回来!!!"
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
			progressOn: 10
			isrun: false
		computed:
			progressText: ->
				return NumberToChinese @.progress
		methods:
			updateMax: (i)->
				@.progressOn = Math.floor(i/6)*100
			runHand: ->
				return false if @.isrun
				maxH = document.documentElement.clientHeight
				@.isrun = true
				handLeft = document.getElementsByClassName("hand-left")[0]
				handRight = document.getElementsByClassName("hand-right")[0]
				bag = document.getElementsByClassName("lucky-bag")[0]
				shadow = document.getElementsByClassName("bag-shadow")[0]

				downTime = 1.2
				upTime = 0.5
				TweenMax.to handRight,downTime,{"y": maxH/2-maxH*0.1}
				TweenMax.to handLeft,downTime,{"y": maxH/2-maxH*0.1}

				TweenMax.to handRight,downTime,{"rotation": 10}
				TweenMax.to handLeft,downTime,{"rotation": -10}

				TweenMax.to handRight,upTime,{"y": -maxH*0.1,delay: downTime*1.5}
				TweenMax.to handLeft,upTime,{"y": -maxH*0.1,delay: downTime*1.5}
				TweenMax.to shadow,upTime*2/3,{"scale": 0,delay: downTime*1.5}
				TweenMax.to bag,upTime,{
					"y": -(maxH/2),
					delay: downTime*1.5, 
					onComplete: =>
						@.next()
				}
			next: ->
				document.getElementById('load').className += " fadeOut animated"
				_public.note = false
				main.mounted = true
				setTimeout ->
					document.getElementById('load').style.display = "none"
					main.pageIndex = 1
					setTimeout ->
						main.runHand()
					,520
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
			canPlay: true
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
			messageShow: false
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
			formShow: true
			formBoxShow: false
			gameEndBtns: false
			msgIndex: 1
			allow: true
			shaked: false
			bgImg: null
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
			over: ->
				@.questionShow = false
				ugc.init()
			regame: ->
				window.location.reload()
			dateText: (date)->
				console.log date.replace(/-/g,"/")
				d = new Date date.replace(/-/g,"/")
				return d.getFullYear()+"年"+(d.getMonth()+1)+"月"+d.getDate()+"日"
			goUGC: ->
				@.lotteryShow = true
			sharePost: (base64)->
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
				showQR() if showQR?
				@.formBoxShow = false
				@.registerShow = false
				@.lotteryShow = false
				console.log "run share"
				if @.bgImg?
					@.callshare()
				else
					bgImg = renderer.domElement.toDataURL()
					@.bgImg = new Sprite.fromImage(bgImg)

					# ugc.qrcode.visible = true
					ugc.app.stage.addChildAt @.bgImg,0
					@.bgImg.texture.baseTexture.on 'loaded', =>
					# @.ugc = bgImg
						@.bgImg.scale.set(750/@.bgImg.width)
						@.callshare()
			callshare: ->
				ugc.app.renderer.render ugc.app.stage
				@.ugc = ugc.app.view.toDataURL()
				# ugc.buildUGC(ugc.app.view.toDataURL())

				if @.wy
					folder = "pig"
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
						# ugc.app.stage.removeChild @.bgImg
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
				shareDone() if shareDone?
				# ugc.app.stage.removeChild @.bgImg
				# 抽奖
				# unless @.giveUp
				# 	setTimeout =>
				# 		@.getLottery()
				# 	,5000
			closeUGC: ->
				@.ugcShow = false
				shareDone() if shareDone?
				# ugc.app.stage.removeChild @.bgImg
			faild: (err)->
				@.pushed = false
				@.loading = false
			openSong: ->
				id = [169794,166317,112678,144143,64497,163639,28853351,153476,5271858,186980,170749,5276250,27591641,32922491,144380,5250828,28785688,186272,210866,555984413]
				# CloudMusic.song(id[resultNum])
				window.location.href = "https://music.163.com/#/song?id=#{id[resultNum]}"
			openInApp: ->
				CloudMusic.open("https://m.giccoo.com/draw-board/")
			goNext: ->
				setTest()
				ModLoaded()
				@.pageIndex = 2
				setTimeout =>
					@.runShakeHand()
				,1000
			runShakeHand: ->
				return false if @.shaked
				hand = document.getElementById "shakeHand"
				dt = 0.3
				repeatTime = 14
				hand.className = "hand hold"
				TweenMax.to hand,dt,{x: 10, rotation: 13, transformOrigin: "center bottom",}
				TweenMax.to hand,dt*2,{x: -10, rotation: -13, transformOrigin: "center bottom", delay: dt}
				TweenMax.to hand,dt*2,{x: 10, rotation: 13, transformOrigin: "center bottom", delay: dt*3}
				TweenMax.to hand,dt/2,{x: -10, rotation: -13, yoyo: true,repeat: repeatTime, transformOrigin: "center bottom", delay: dt*5}
				TweenMax.to hand,dt/2,{
					x: 0
					rotation: 0
					transformOrigin: "center bottom"
					delay: dt*5+dt/2*repeatTime
					onComplete: =>
						hand.className = "hand"
						setTimeout =>
							@.runShakeHand()
						,1000
				}
			runGift: ->
				@.messageShow = true
				msgs = [
					"有对象吗?",
					"结婚了吗?",
					"朋友们都结婚了吧?",
					"年终奖多少啊?",
					"买房了吗?",
					"你看你又胖啦!",
					"这么大岁数了要努力呀!"
				]
				# @.message = msgs[Math.floor(Math.random() * msgs.length)]
				document.getElementById("subtitles").innerHTML = "<div data-splitting>#{msgs[@.msgIndex]}</div>"
				Splitting()
				@.msgIndex = (@.msgIndex+1)%msgs.length
				SOUND.runRandomHit()
			gameOver: ->
				console.log "Start"
				@.gameEnd = true
			openNote: ->
				# clearTimeout _cache
				@.registerShow = true
				# _cache = setTimeout =>
				document.getElementById("note-text").innerHTML = "<div data-splitting>“对，点这里！”</div><div data-splitting>“咦，咱们俩的手好像啊~”</div>"
				Splitting()
				# ,400

			mute: ->
				@.canPlay = !@.canPlay
				unless @.canPlay
					SOUND.giftEnd.pause()
					SOUND.g.pause()
					SOUND.hit1.pause()
					SOUND.hit2.pause()
					SOUND.hit3.pause()
					SOUND.hit4.pause()

		mounted: ->
			TrueH = document.documentElement.clientHeight
			TrueW = document.documentElement.clientWidth
			if sys is "NeteaseMusic"
				@.wy = true
			h = TrueH*2*(2-TrueW*2/750+0.01)
			@.wy = CloudMusic.isInApp()
			version = CloudMusic.getClientVersion().split(".")
			ugc = new UGC({el: "ugc", w: 750, h: 750/TrueW*TrueH,callback: => })
			document.getElementById("sence").appendChild initAll()

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


# @codekit-append "../js/phy.js"
# @codekit-append "../js/Fog.js"
# @codekit-append "../js/gift.js"
# @codekit-append "../js/ani.js"
# @codekit-append "../js/pig.js"
# @codekit-append "../js/build.js"
