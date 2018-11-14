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
apiUrl = "//api.giccoo.com/canda"
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
	redirectUrl = "https://activity.music.163.com/canda/"
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

	CloudMusic.setShareData
		name: 'canda',
		title: '点播圣诞星声',
		subTitle: '点播圣诞星声',
		text: '',
		picUrl: 'http://m.giccoo.com/canda/img/ico.jpg',
		link: 'http://m.giccoo.com/canda/'

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
			shopShow: false
			musicShow: false
			shareShow: false
			items: []
			carIndex: 1
		computed:
			listTemp: ->
				list = @.items
				arrTemp = []
				index = 0
				sectionCount = 4
				for i in [0...list.length]
					index = parseInt i/sectionCount
					if arrTemp.length <= index
						arrTemp.push []
					arrTemp[index].push list[i]
				console.log "arrTemp:",arrTemp
				return arrTemp

		watch:
			# carIndex: (n,o)->
			# 	@.carIndex = 1 if @.carIndex >= 3
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
			moveLeft: ->
				slider = @.$children[0]
				slider.prev()
			moveRight: ->
				slider = @.$children[0]
				slider.next()
			send: (text)->
				@.noteShow = true
				@.noteText = text
				clearTimeout @.noteTime
				@.noteTime = setTimeout =>
					@.noteShow = false
				,2000
			regame: ->
				window.location.reload()
			gobuy: ->
				window.location.href = "http://www.baidu.com"
			dateText: (date)->
				console.log date.replace(/-/g,"/")
				d = new Date date.replace(/-/g,"/")
				return d.getFullYear()+"年"+(d.getMonth()+1)+"月"+d.getDate()+"日"
			
			gotoUGC: (id)->
				# @.lotteryShow = true
				@.musicShow = false
				goEnd(id) if goEnd?
				setTimeout =>
					@.shareShow = true
				,500
				
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
				ugc.app.renderer.render ugc.app.stage
				@.ugc = ugc.app.view.toDataURL()
				image = @.ugc

				if @.wy
					folder = "canda"
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
					@.lotteryBox()
					# ugc.back()
				# ugc.qrcode.visible = false
			lotteryBox: ->
				_cache = setTimeout =>
					@.lotteryShow = true
					@.ugcShow = false
				,5000
			success: (data)->
				@.shareImageLink = data.info
				@.pushed = false
				@.loading = false
				# ugc.back()
				neteaseShareImage()
				shareDone() if shareDone?
				# 抽奖
				# unless @.giveUp
				@.lotteryBox()
				
			closeUGC: ->
				clearTimeout _cache
				@.lotteryShow = true
				@.ugcShow = false
				shareDone() if shareDone?
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
				CloudMusic.open("https://m.giccoo.com/canda/")
			goNext: ->
				@.pageIndex = 1
				@.formBoxShow = false
				@.cache()
				@.cache = null
			goShow: (callback)->
				@.pageIndex = 1
				@.formBoxShow = true
				@.cache = callback

			goNickname: ->
				clearInterval _startCache
				@.pageIndex = 3
				@.carIndex = 1 + parseInt Math.random()*2
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
			focusEvt: (evt)->
				# document.getElementById("mobile").scrollIntoViewIfNeeded()
				console.log "height:",document.body.scrollHeight,evt
				# _startCache = setInterval =>
				# 	document.body.scrollTop = document.body.scrollHeight
				# ,100
			blurEvt: (evt)->
				clearInterval _startCache
			shop: (id)->
				# console.log @.$children[0].x
				@.carIndex = id
				@.shopShow = true
				@.$children[0].x = 0
				shopItemsList = [
					[
						{type:"clothes",name:"女式撞色工装棉服"}
						{type:"clothes",name:"男式印花羽绒服"}
						{type:"clothes",name:"女式撞色羽绒服"}
						{type:"clothes",name:"男式印花毛衣"}
						{type:"clothes",name:"女式两穿羽绒服"}
						{type:"clothes",name:"男式连帽派克大衣"}
						{type:"clothes",name:"男式印花羽绒服"}
						{type:"clothes",name:"女式冲锋夹棉外套"}
						{type:"clothes",name:"女式印花针织衫"}
						{type:"clothes",name:"男童羽绒服"}
						{type:"clothes",name:"女婴舒适厚棉"}
						{type:"clothes",name:"女童连帽斗篷"}
					]
					[
						{type:"pants",name:"男式格子休闲裤"}
						{type:"pants",name:"女式条纹针织裙"}
						{type:"pants",name:"男式苏格兰方格裙"}
						{type:"pants",name:"女式卷边牛仔裤+腰包"}
						{type:"pants",name:"女式家常碎花秋裤"}
						{type:"pants",name:"男式拼接牛仔"}
					]
					[
						{type:"hats",name:"女式仿皮草围巾"}
						{type:"hats",name:"男式保暖毛线帽"}
						{type:"hats",name:"男式大披肩"}
						{type:"hats",name:"女式加绒雪地靴"}
						{type:"hats",name:"开光佛珠手串"}
						{type:"hats",name:"冬季PM2.5防霾口罩"}
					]
					[
						{type:"others",name:"橘猫"}
						{type:"others",name:"热咖啡"}
						{type:"others",name:"暖宝宝"}
						{type:"others",name:"火锅"}
						{type:"others",name:"电热毯"}
						{type:"others",name:"保温杯"}
					]
				]
				@.items = shopItemsList[id-1]
			musicList: ->
				@.musicShow = true

			showlotteryCode: ->
				@.lotteryShow = false
				@.lotteryEndShow = true
			pickItem: (item)->
				console.log "pick:",item
				@.shopShow = false
				go2(@.carIndex,item) if go2?
			selectItem: (item,link)->
				# return false if item.on
				console.log "item:",item
				for it in @.items
					if item.name == it.name
						it.on = true
					else
						it.on = false
				@.$forceUpdate()
				setItem(@.carIndex,link)
				# item.on = true

		# watch:
		mounted: ->
			# _startCache = setInterval =>
			# 	@.carIndex++
			# ,2500

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
			# setTimeout =>
			# 	@.shop 1
			# ,2000
