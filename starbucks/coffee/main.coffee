# @codekit-prepend "coffee/css3Prefix"
# @codekit-prepend "../../libs/coffee/loadWechatConfig"
# @codekit-prepend "../../libs/coffee/IsPC"
# @codekit-prepend "../../libs/vue/vue-player"
# @codekit-prepend "../../libs/coffee/pixi-base"
# @codekit-prepend "../../libs/coffee/String"
# @codekit-prepend "./UGC"

axios.defaults.withCredentials = true

TrueW = 640
TrueH = 1138
imageurl = "//api.giccoo.com/api/upload/image64/"
apiUrl = "//api.giccoo.com/starbucks"
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
	redirectUrl = "https://activity.music.163.com/starbucks/"
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

	_public = new Vue
		el: "#public"
		data:
			note: true
			playing: false
		mounted: ->
			document.addEventListener "WeixinJSBridgeReady", ->
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
				_public.note = false
				main.mounted = true
				setTimeout ->
					document.getElementById('load').style.display = "none"
				,520
		mounted: ->
			@.mounted = true
			TrueH = document.documentElement.clientHeight
			TrueW = document.documentElement.clientWidth

			# @.next() # for test

			timein = setInterval =>
				@.progress += 2
				@.progress = @.progressOn if @.progress >= @.progressOn
				if @.progress >= 100
					@.progress = 100
					clearInterval timein
					_cache = setTimeout =>
						@.next()
					,1000
			,1000/20
	
	init()

	CloudMusic.setShareData
		name: 'starbucks',
		title: '点播圣诞星声',
		subTitle: '点播圣诞星声',
		text: '',
		picUrl: 'http://m.giccoo.com/starbucks/img/ico.jpg',
		link: 'http://m.giccoo.com/starbucks/'

init = ->
	
	# console.log new Date().getTime() - startTime
	# document.body.style.height = TrueH+"px"
	# document.documentElement.className += " iphone4" if TrueW/TrueH >= 0.64
	TrueW = 640 if TrueW >= 640
	TrueH = 1138 if TrueH >= 1138
	smaller = TrueH*2 < 1200
	navH = Math.ceil TrueW / 640 * 94 / TrueH * 100
	# console.log TrueW,TrueH

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
			singerIndex: 1
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
			# form:
			# 	username: {id:"username", type: "input", label: "姓名", placeholder: "请填写姓名",value: ""}
			# 	mobile: {id:"mobile", type: "number", label: "电话", placeholder: "请填写电话",value: ""}
			# 	province: {id:"province", type: "select", label: "省份", link: "city", value: Object.keys(_citys)[0], options: _citys }
			# 	city: {id:"city", type: "select", label: "城市", link: "dealer",value: Object.keys(_citys["请选择省份"])[0], options: _citys["请选择省份"] }
			mask: 1
			text: ""
			nickname: ""
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
			messageList: [
				"我知道你不是真的想加班<br/>难道就这样抱着遗憾<br/>一直到深夜"
				"When I'm with you <br/>I know I'm standing with an army"
				"There is only one thing I need the most<br/>Please make my wish come true<br/>Because all I want for Christmas is you"
				"年轻人为这季节都很兴奋<br/>用简讯互传圣诞祝福<br/>可我只想花点心思<br/>让你们感到幸福"
			]
			buyAn: false
			white: false
			gameEnd: false
		watch:
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
			send: (text)->
				@.noteShow = true
				@.noteText = text
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
			nextQuestion: ->
				if @.questionIndex is 1 and @.answer2 is 0
					return @.send "请选择一位你的专属 DJ 吧"
				if @.questionIndex is 2 and !@.answer3.c1 and !@.answer3.c2 and !@.answer3.c3 and !@.answer3.c4
					return @.send "请选择几种礼物装点一下吧"
				if @.questionIndex is 3 and @.nickname is ""
					return @.send "请填写名称（Honey/母亲大人/给自己）"
				

				if @.questionIndex is 4
					return @.over()

				@.questionIndex++
			backQuestion: ->
				@.questionIndex--
				
				if @.questionIndex is 1
					@.answer3.c1 = false
					@.answer3.c2 = false
					@.answer3.c3 = false
					@.answer3.c4 = false
				
			over: ->
				@.questionShow = false
				ugc.init()
				setTimeout =>
					@.gameEnd = true
				,2000
			regame: ->
				window.location.reload()
			gobuy: ->
				window.location.href = "https://pro.m.jd.com/mall/active/FhZb3W2CXuZKnkZ2Wy57f8NefsH/index.html"
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
				@.registerShow = false
				@.lotteryShow = false
				console.log "run share"
				ugc.qrcode.visible = true
				ugc.app.renderer.render ugc.app.stage
				@.ugc = ugc.app.view.toDataURL()
				image = @.ugc

				if @.wy
					folder = "starbucks"
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
				ugc.qrcode.visible = false
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
			faild: (err)->
				@.pushed = false
				@.loading = false
			openMusic: (id)->
				# goList()
				# _public.$children[0].pause()
				if CloudMusic.isInApp()
					CloudMusic.playlist(id)
				else
					window.location.href = "https://music.163.com/#/playlist?id=#{id}"
			openInApp: ->
				CloudMusic.open("https://m.giccoo.com/starbucks/")
		# watch:
		mounted: ->
			TrueH = document.documentElement.clientHeight
			TrueW = document.documentElement.clientWidth
			setInterval =>
				@.buyAn = !@.buyAn
			, 1200
			@.wy = true if sys is "NeteaseMusic"
			h = TrueH*2*(2-TrueW*2/750+0.01)
			# game = new Game({el: "game",h: h})
			@.wy = CloudMusic.isInApp()
			version = CloudMusic.getClientVersion().split(".")
			# @.getUserInfo (callback)=>
				# console.log imageList,@.muiscType @.userInfo.styleTop
			# @.ugcType = @.muiscType @.userInfo.styleTop
			imageList2 = [
				_CDN+"img/envelope.png"
				_CDN+"img/post-card-mark.png"
				_CDN+"img/logo-black.png"
				_CDN+"img/m-1.png"
				_CDN+"img/m-2.png"
				_CDN+"img/m-3.png"
				_CDN+"img/m-4.png"
				_CDN+"img/qrcode-black.png"
				_CDN+"img/qrcode-white.png"
			]
			window.imageList = window.imageList.concat(imageList2)
			ugc = new UGC({el: "ugc", w: 640, h: 640/TrueW*TrueH,callback: => console.log("callback") })

				
			

