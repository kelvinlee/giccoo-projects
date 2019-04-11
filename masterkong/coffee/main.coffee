# @codekit-prepend "coffee/css3Prefix"
# @codekit-prepend "../../libs/coffee/loadWechatConfig"
# @codekit-prepend "../../libs/coffee/IsPC"
# @codekit-prepend "../../libs/coffee/NumberToChinese"
# @codekit-prepend "../../libs/vue/vue-register"
# @codekit-prepend "../../libs/vue/vue-slider"
# @codekit-prepend "../../libs/coffee/get"
# @codekit-prepend "../../libs/coffee/String"
# @codekit-prepend "../../libs/coffee/pixi-base"
# @codekit-append "UGC"

# note: 防多次提交
# 分享图



Array::shuffle = (n) ->
  len = @length
  num = if n then Math.min(n, len) else len
  arr = @slice(0)
  arr.sort (a, b) ->
    Math.random() - 0.5
  arr.slice 0, num - 1


TrueW = 640
TrueH = 1138
_CDN = "./"
imageurl = "//api.giccoo.com/api/upload/image64/"
apiUrl = "//api.giccoo.com/masterkong"
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
messagelist = [
	{text:"同学聚会再次遇到却依然只敢偷偷看着你，你走过来对我说着：“你过的还好吗？”突然觉得，当年没有告白其实不算是一种遗憾。",name: "只对你有感觉1"}
	{text:"同学聚会再次遇到却依然只敢偷偷看着你，你走过来对我说着：“你过的还好吗？”突然觉得，当年没有告白其实不算是一种遗憾。",name: "只对你有感觉2"}
	{text:"同学聚会再次遇到却依然只敢偷偷看着你，你走过来对我说着：“你过的还好吗？”突然觉得，当年没有告白其实不算是一种遗憾。",name: "只对你有感觉3"}
	{text:"同学聚会再次遇到却依然只敢偷偷看着你，你走过来对我说着：“你过的还好吗？”突然觉得，当年没有告白其实不算是一种遗憾。",name: "只对你有感觉4"}
]
messagelist.shuffle()

neteaseShareImage = ->
	title1 = "画山成岳"
	picUrl = "https://image.giccoo.com/upload/#{main.folder}/"+main.shareImageLink+"@!large"
	redirectUrl = "https://activity.music.163.com/masterkong/"
	# console.log picUrl,"orpheus://sharepic?picUrl="+encodeURIComponent(picUrl)+"&shareUrl="+encodeURIComponent(redirectUrl)+"&wbDesc="+encodeURIComponent(title1)+"&qqDesc="+encodeURIComponent(title1)
	# window.location.href = "orpheus://sharepic?picUrl="+encodeURIComponent(picUrl)+"&shareUrl="+encodeURIComponent(redirectUrl)+"&wbDesc="+encodeURIComponent(title1)+"&qqDesc="+encodeURIComponent(title1)
	console.log "share href:",picUrl
	CloudMusic.sharePic({
		picUrl: picUrl,
		text: title1,
		link: redirectUrl
	})

loadList = [
	# "//cdnjs.cloudflare.com/ajax/libs/pixi.js/4.8.5/pixi.min.js"
	"//cdnjs.cloudflare.com/ajax/libs/gsap/2.0.2/TweenMax.min.js"
	"//cdnjs.cloudflare.com/ajax/libs/axios/0.18.0/axios.min.js"
	# "//cdnjs.cloudflare.com/ajax/libs/three.js/101/three.min.js"
	# "//image.giccoo.com/projects/libs/js/splitting.min.js"
	# "//cdnjs.cloudflare.com/ajax/libs/dat-gui/0.7.5/dat.gui.min.js"
	# "//cdnjs.cloudflare.com/ajax/libs/cannon.js/0.6.2/cannon.min.js"
	# "//cdnjs.cloudflare.com/ajax/libs/stats.js/r16/Stats.min.js"
	# "//cdnjs.cloudflare.com/ajax/libs/howler/2.0.15/howler.core.min.js"
	"//image.giccoo.com/projects/genki/js/music-jssdk-1.0.5.js"
	"//image.giccoo.com/projects/genki/js/ntes.id.js"
	# "//image.giccoo.com/projects/masterkong/js/THREE.MeshLine.js"
	# "js/libs.js?v=1"
]

window.onload = ->
	TrueH = document.documentElement.clientHeight
	TrueW = document.documentElement.clientWidth

	lastY = 0

	if window.navigator.userAgent.indexOf("NeteaseMusic") > -1
		sys = "NeteaseMusic"
		shareData = 
			name: 'masterkong'
			title: '康师傅'
			subTitle: "康师傅"
			text: ''
			picUrl: 'http://m.giccoo.com/masterkong/img/ico.jpg'
			link: 'http://m.giccoo.com/masterkong/'
		CloudMusic.setShareData shareData
	else
		loadWechatConfig()
		wx.ready ->
			shareContent =
				title: "康师傅"
				desc: "康师傅"
				link: "http://m.giccoo.com/masterkong/"
				imgUrl: "http://m.giccoo.com/masterkong/img/ico.jpg"
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
			progressOn: 0
			objs: 0
			imgs: 0
			jss: 0
			isrun: false
		computed:
			progressText: ->
				return NumberToChinese @.progress
		methods:
			updateImgs: (i,n)->
				# console.log "imgs:",i
				@.imgs = i
				@.progressOn = Math.floor (@.objs+@.imgs+@jss)/2
			updateJSs: (i)->
				@.jss = i
				@.progressOn = Math.floor (@.objs+@.imgs+@jss)/2
			
			next: ->
				document.getElementById('load').className += " fadeOut animated"
				_public.note = false
				main.mounted = true
				setTimeout ->
					document.getElementById('load').style.display = "none"
					main.pageIndex = 1
					# main.registerShow = false
					buildUGC.bind(ugc).call()
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
					setTimeout => 
						@.next() 
					, 1000
					clearInterval timein
			,1000/20
	
	queue = new createjs.LoadQueue()
	queue.setMaxConnections(100)
	queue.on "complete", ->
		axios.defaults.withCredentials = true
		init()
		# buildSound()
	queue.on "progress", (e)->
		percentage = Math.round(e.progress * 100)
		loading.updateJSs percentage
		# console.log "percentage:",percentage
	queue.loadManifest loadList


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
			text: "请输入内容"
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
			questionPage: false
			questionPageShow: false
			questionHas: false
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
			times: 0
			edit: false
			messageNote: true
			cacheArea: "请输入内容"
			messagelist: messagelist
			questionlist: ["我们第一次牵手是那一天？","我的生日是哪一天？"]
			hasquestion: false
			question: ""
			answer: ""
			sendData : {}
			bagIndex: 1
			backgoundIndex: 1
			getData: {}
		watch:
			question: (n,o)->
				@.question = o if @.question.gblen() > 12*2
			nickname: (n,o)->
				@.nickname = o if @.nickname.gblen() > 8*2

			text: (n,o)->
				# t = @.toBr(@.text).split("<br/>")
				# if t.length > 4
				# 	return @.text = o
				# for item in t
				# 	if item.length >= 14
				# 		@.text = o
				# 		break
				if @.text.gblen() > 56*2 # or @.text.length > 100
					@.text = o 
				else
					@.text = @.text.replace(/[\r\n]/g,"")

		methods:
			selectMessage: ->
				@.registerShow = true
			toBr: (text)->
				return text.replace(/[\r\n]/g,"<br/>")
			send: (text,type = true)->
				@.noteShow = true
				@.noteText = text
				@.noteType = type
				clearTimeout @.noteTime
				@.noteTime = setTimeout =>
					@.noteShow = false
				,2000
			focusArea: (evt)->
				@text = "" if @.text is @cacheArea
			blurArea: (evt)->
				@text = @cacheArea if @text is ""
			goNext: ->
				return @.send("请填写你的名字") if @.nickname is ""
				return @.send("请输入内容") if @.edit and (@.text is "" or @.text is @cacheArea)
				@.registerShow = false
				data = {
					nickname: @.nickname
					message: ""
					musicname: ""
				}
				if @.edit
					data.musicname = ""
					data.message = @.text
				else
					i = Math.abs @.$children[0].slideNumber
					data.musicname = @.messagelist[i].name
					data.message = @.messagelist[i].text
				console.log data
				@.sendData = data
				showPage4(data) if showPage4?

			moveLeft: (i = 0)->
				slider = @.$children[i]
				slider.prev()
			moveRight: (i = 0)->
				slider = @.$children[i]
				slider.next()
			editMessage: ->
				@.times++
				if @.times >= 2
					console.log "double click"
					@.edit = true
				setTimeout =>
					@.times = 0
				,300
			openQuestion: ->
				@.hasquestion = true
				@.lotteryShow = true
			submit: ->
				if @.hasquestion
					i = Math.abs @.$children[1].slideNumber
					question = @.questionlist[i]
					@.sendData.question = question
					@.sendData.answer = @.question
					return @.send "请输入答案" if @.question is ""
				@.sendData.bag = @.bagIndex
				@.sendData.background = @.backgoundIndex
				# ajax , back an id
				# http://m.gicco.com/masterkong/?id=1
				# showUGC1("http://m.gicco.com/masterkong/?id=1") if showUGC1?
				axios.post apiLink+"active/autoSave/new/db/masterkong",@.sendData
				.then (msg)=>
					if msg.data.code is 200
						console.log msg.data.info.insertId
						if @.hasquestion
							@.lotteryShow = false
							showUGC2("http://m.giccoo.com/masterkong/?id=#{msg.data.info.insertId}") if showUGC2?
						else
							showUGC1("http://m.giccoo.com/masterkong/?id=#{msg.data.info.insertId}") if showUGC1?
					else
						console.log "err:",msg
				.catch (e)=>
					# alert e
					main.faild(e)	
			getInfo: (id)->
				axios.post apiLink+"active/masterkong/get/db/masterkong",{id: id}
				.then (msg)=>
					# console.log msg.data.info
					if msg.data.code is 200 and msg.data.info?
						console.log "msg:",msg.data.info
						@.questionPage = true
						@.questionHas = true if msg.data.info.question? and msg.data.info.question isnt ""
						@.getData = msg.data.info
					else
						@.getStart()
				.catch (e)=>
					console.log "miss info:",e
					@.getStart()
			checkAnswer: ->
				console.log "answer:",@answer
				return @.send "请输入答案" if @answer is ""

				axios.post apiLink+"active/masterkong/check/db/masterkong",{id: $_GET["id"],answer: @.answer}
				.then (msg)=>
					if msg.data.code is 200
						@.questionPageShow = false
						showUGC3() if showUGC3?
					else
						@.send "答案不正确,请再想想"
				.catch (e)=>
					@.send "答案不正确,请再想想"

			getStart: ->
				console.log "start"

			hideNote: ->
				@.messageNote=false
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
				# goFinal() if goFinal?
				# showQR() if showQR?
				@.formBoxShow = false
				@.registerShow = false
				@.lotteryShow = false
				console.log "run share"
				@.callshare()
				
			callshare: ->
				ugc.app.renderer.render ugc.app.stage
				@.ugc = ugc.app.view.toDataURL()
				# ugc.buildUGC(ugc.app.view.toDataURL())

				if @.wy
					folder = "masterkong"
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
			if $_GET["id"]?
				@.getInfo($_GET["id"])
			else
				@.getStart()

tryThis = (msg)->
	console.log "msg:",msg


# @codekit-append "../js/build.js"
