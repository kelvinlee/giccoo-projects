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
	

window.onload = ->
	TrueH = document.documentElement.clientHeight
	TrueW = document.documentElement.clientWidth
	lastY = 0
	setShareWeb("科颜氏","欢迎参加游戏","http://m.giccoo.com/kiehls/")
	init()

init = ->
	TrueH = 1138 if TrueH >= 1138
	smaller = TrueH*2 < 1200
	navH = Math.ceil TrueW / 640 * 94 / TrueH * 100
	TrueH = document.documentElement.clientHeight
	TrueW = document.documentElement.clientWidth
	TrueW = 640 if TrueW >= 640

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
			mainPage: false
			formBoxShow: false
			carIndex: 1
			yearName: "none"
			list: []
			typeList: []
			typeShows: [true]
			insertId: 0
			type: 0
			type1: 0
			type2: 0
			type3: 0
			type1Name: ""
			type2Name: ""
			type3Name: ""
			articleInfo: {}

		# watch:
		# 	type1Name: (n,o)->
		# 		if n is ""
		# 			@.type1Name = "行业"
		methods:
			buildHTML: (html)->
				return html
			openMenu: (id)->
				if @.type is id
					@.type = 0
				else
					@.type = id
			selectType: (type,name,id)->
				if @["type"+type] == id
					@["type"+type] = 0
					@["type"+type+"Name"] = ""
				else
					@["type"+type] = id
					@["type"+type+"Name"] = name
				console.log @.type1,@.type2,@.type3
				console.log @.typeShows
				# setTimeout =>

				# ,200
			checkShow: (index,bool)->
				@.typeShows[index] = bool
				return bool
			prev: ->
				@.$children[0].prev()
			next: ->
				@.$children[0].next()
			number: (n)->
				# @.carIndex = n
			send: (text)->
				@.noteShow = true
				@.noteText = text
				clearTimeout @.noteTime
				@.noteTime = setTimeout =>
					@.noteShow = false
				,2000
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
				else
					@.shareNotePage = true
				clearTimeout _cache
				_cache = setTimeout =>
					@.getLottery()
					@.shareNotePage = false
				,5000
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
			
			getInfo: ->
				console.log "get info"
				axios.get "#{apiLink}active/qq/adGet/id/#{$_GET['id']}"
				.then (msg)=>
					
				.catch (err)=>
					console.log "err:",err
			getList: ->
				axios.get "#{apiLink}active/qq/adList/"
				.then (msg)=>
					# console.log "msg:",msg.data.list
					list = []
					for item in msg.data.list
						item.type3 = item.type3.split(",") if item.type3? and item.type3.indexOf(",") > -1
						item.title = item.title.replace(/\n/g, '<br/>')
						list.push item
					@.list = list
					console.log @.list
				.catch (err)=>
					console.log "err:",err
			getTypeList: ->
				axios.get "#{apiLink}active/qq/adTypeList/"
				.then (msg)=>
					# console.log "msg:",msg.data.list
					@.typeList = msg.data.list
				.catch (err)=>
					console.log "err:",err
			typeToText: (id)->
				for item in @.typeList
					if item.id is parseInt id
						return item.name
				return ""
			hashchange: ->
				hashURL = window.location.href.split("#")[1]
				console.log hashURL
				_cache = setTimeout =>
					@.articleInfo = {}
					document.getElementById("scrollbox").scrollTop = 0
				,300
				@.type = 0
				if hashURL is "/home"
					@.pageIndex = 1
				else if hashURL is "/list"
					@.pageIndex = 2
					@.mainPage = true
				else if hashURL? and hashURL isnt ""
					reg = /^\/id\/(.*)/i
					res = hashURL.match reg
					console.log res
					if res?
						clearTimeout _cache
						@.article res[1]
					else
						@.pageIndex = 2
						@.mainPage = true
				else
					@.pageIndex = 1
					goBack() if goBack?
			article: (id)->
				# console.log "id:",id
				# console.log window.location.href
				@.pageIndex = 3
				axios.get "#{apiLink}active/qq/adGet/id/#{id}"
				.then (msg)=>
					msg.data.info.title = msg.data.info.title.replace(/\n/g, '<br/>')
					@.articleInfo = msg.data.info
				.catch (err)=>
					console.log "err:",err
			

		# watch:
		mounted: ->
			TrueH = document.documentElement.clientHeight
			TrueW = document.documentElement.clientWidth
			TrueW = 640 if TrueW > 640

			if sys is "NeteaseMusic"
				@.wy = true
			h = TrueH*2*(2-TrueW*2/750+0.01)
			
			imageList2 = [
			]
			window.imageList = window.imageList.concat(imageList2)
			
			ugc = new UGC({el: "ugc", w: 640, h: 640/TrueW*TrueH,callback: => 
				setTimeout => 
					@.mainPage = true 
				,1200
			})
			@.getTypeList()
			@.getList()
			window.addEventListener "hashchange", @.hashchange.bind @
			@.hashchange()

_shareLoaded = false
setShareWeb = (title,desc,link)->
	shareData = 
		name: 'kiehls'
		title: title
		subTitle: desc
		text: ''
		picUrl: './img/ico.jpg'
		link: link
	shareContent =
		title: title
		desc: desc
		link: link
		imgUrl: "./img/ico.jpg"
		success: ->
			# alert "success"
		cancel: ->
			# alert "cancel"
	# if window.navigator.userAgent.indexOf("NeteaseMusic") > -1
	# 	sys = "NeteaseMusic"
	# 	# CloudMusic.setShareData shareData
	# else if not _shareLoaded
	# 	loadWechatConfig()
	# 	wx.ready ->
	# 		_shareLoaded = true
	# 		wx.onMenuShareTimeline shareContent
	# 		wx.onMenuShareAppMessage shareContent
	# 		wx.onMenuShareQQ shareContent
	# 		wx.onMenuShareWeibo shareContent
	# else
	# 	wx.onMenuShareTimeline shareContent
	# 	wx.onMenuShareAppMessage shareContent
	# 	wx.onMenuShareQQ shareContent
	# 	wx.onMenuShareWeibo shareContent


