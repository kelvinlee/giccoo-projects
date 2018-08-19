# @codekit-prepend "coffee/css3Prefix"
# @codekit-prepend "../../libs/coffee/loadWechatConfig"
# @codekit-prepend "../../libs/coffee/IsPC"
# @codekit-prepend "../../libs/coffee/get"
# @codekit-prepend "../../libs/vue/vue-player"
# @codekit-prepend "../../libs/vue/vue-register"
# @codekit-prepend "../../libs/coffee/pixi-base"
# @codekit-prepend "./UGC"



String.prototype.gblen = -> 
	len = 0;	
	for i in [0...this.length]
		if this.charCodeAt(i)>127 or this.charCodeAt(i)==94
			len += 2
		else
			len++
	return len

TrueW = 640
TrueH = 1138
imageurl = "//api.giccoo.com/api/upload/image64/"
apiUrl = "//api.giccoo.com/df-308"
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
	title1 = "有故事的声活单曲"
	picUrl = "https://image.giccoo.com/upload/#{main.folder}/"+main.shareImageLink+"@!large"
	redirectUrl = "https://m.giccoo.com/Landrover24/"
	# console.log picUrl,"orpheus://sharepic?picUrl="+encodeURIComponent(picUrl)+"&shareUrl="+encodeURIComponent(redirectUrl)+"&wbDesc="+encodeURIComponent(title1)+"&qqDesc="+encodeURIComponent(title1)
	window.location.href = "orpheus://sharepic?picUrl="+encodeURIComponent(picUrl)+"&shareUrl="+encodeURIComponent(redirectUrl)+"&wbDesc="+encodeURIComponent(title1)+"&qqDesc="+encodeURIComponent(title1)
	console.log "share href:",picUrl
createObjectURLfun = (file)->
	if (window.webkitURL? || window.navigator.userAgent.indexOf("Chrome") >= 1 || window.navigator.userAgent.indexOf("Safari") >= 1) 
		return window.webkitURL.createObjectURL(file)
	else
		return window.URL.createObjectURL(file)
getOrientation = (file, callback) ->
  reader = new FileReader
  reader.onload = (e) ->
    view = new DataView(e.target.result)
    if view.getUint16(0, false) != 0xFFD8
      return callback(-2)
    length = view.byteLength
    offset = 2
    while offset < length
      if view.getUint16(offset + 2, false) <= 8
        return callback(-1)
      marker = view.getUint16(offset, false)
      offset += 2
      if marker == 0xFFE1
        if view.getUint32(offset += 2, false) != 0x45786966
          return callback(-1)
        little = view.getUint16(offset += 6, false) == 0x4949
        offset += view.getUint32(offset + 4, little)
        tags = view.getUint16(offset, little)
        offset += 2
        i = 0
        while i < tags
          if view.getUint16(offset + i * 12, little) == 0x0112
            return callback(view.getUint16(offset + i * 12 + 8, little))
          i++
      else if (marker & 0xFF00) != 0xFF00
        break
      else
        offset += view.getUint16(offset, false)
    callback -1
  reader.readAsArrayBuffer file
  return
window.onload = ->
	TrueH = document.documentElement.clientHeight
	TrueW = document.documentElement.clientWidth
	# console.log "body:",document.body.clientWidth,document.body.clientHeight
	if IsPC()
		document.getElementById("qrcode").className += " show"
		return false
	lastY = 0

	# 停止上下滚动 / 注意有竖向滚动条会被禁止 (理论可以加到只不能上下滚动上.)
	# document.body.addEventListener "touchstart", (evt)->
	# 	lastY = evt.touches[0].clientY
	# document.body.addEventListener "touchmove", (evt)->
	# 	y = evt.touches[0].clientY
	# 	st = this.scrollTop
	# 	if y isnt lastY
	# 		evt.preventDefault()
	# 	lastY = y
	# ,{passive: false}


	if window.navigator.userAgent.indexOf("NeteaseMusic") > -1
		sys = "NeteaseMusic"
	else
		loadWechatConfig()
		wx.ready ->
			shareContent =
				title: "测测你不可T代的性格"
				desc: "听音乐测性格，赢取东标308免费使用权。"
				link: "http://m.giccoo.com/df308/"
				imgUrl: "http://m.giccoo.com/df308/img/ico.jpg"
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

	# loading = new Vue
	# 	el: "#loading"
	# 	data:
	# 		progress: 0
	# 		mounted: false
	# 		progressOn: 0
	# 	methods:
	# 		next: ->
	# 			document.getElementById('load').className += " fadeOut animated"
	# 			# _public.note = false
	# 			main.mounted = true
	# 			setTimeout ->
	# 				document.getElementById('load').style.display = "none"
	# 			,520
	# 	mounted: ->
	# 		@.mounted = true
	# 		TrueH = document.documentElement.clientHeight
	# 		TrueW = document.documentElement.clientWidth
	# 		timein = setInterval =>
	# 			@.progress += 2
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
			videoIndex: 1
			videoIndexOld: 1
			lr: true
			form:
				username: {id:"username", type: "input", label: "姓名", placeholder: "请填写姓名",value: ""}
				mobile: {id:"mobile", type: "input", label: "电话", placeholder: "请填写电话",value: ""}
				address: {id:" address", type: "input", label: "城市", placeholder: "请填写城市",value: ""}
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
				info: null
			regSubmited: false
			giveUp: false
			gameEnd: false
		watch:
			videoIndex: (n,o)->
				@.videoIndexOld = o
				stopAllVideo()
				document.getElementById("video-#{n}").play()

		methods:
			endPage: ->
				main.registerShow = true
				# showResult()
				stopAllAudio()
			gameStart: ->
				@.pageIndex = 2
				_public.note = false
				setup()
				playAudio "answer-1"

			goUGC: ->
				@.lotteryShow = true

			getLottery: ->
				@.registerShow = false
				axios.post "#{apiLink}active/landrover24/lottery/",{lottery: true}
				.then (msg)=>
					if msg.data.code is 200 and msg.data.info?
						@.lotteryInfo.info = msg.data.info
					@.goUGC()
				.catch (err)=>
					@.goUGC()

			submit: (data)->
				console.log "data:",data
				if data.username is "" or data.username.length > 8 or data.username.length < 2
					return alert "请输入2-8个字的姓名"
				if data.mobile is ""
					return alert "请输入联系电话"
				if data.address is ""
					return alert "请输入联系地址"
				
				axios.post "#{apiLink}active/landrover24/insert/",data
				.then (msg)=>
					if msg.data.code is 200
						alert "填写成功"
						@.registerShow = false
						@.regSubmited = true
						if @.gameEnd
							@.share()
					else
						alert msg.data.reason
				.catch (err)=>
					alert "服务器连接失败,请重试"

			openForm: ->
				if @.regSubmited
					@.share()
				else
					@.registerShow = true
			giveupAward: ->
				@.registerShow = false
				@.giveup = true
				@.share()
			sharePost: ->
				ugc.app.renderer.render ugc.app.stage
				@.ugc = ugc.app.view.toDataURL()
				
			share: ->
				console.log "run share"
				image = @.ugc
				folder = "Landrover24"
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
			success: (data)->
				@.shareImageLink = data.info
				@.pushed = false
				@.loading = false
				neteaseShareImage()
				# 抽奖
				unless @.giveUp
					setTimeout =>
						@.getLottery()
					,5000
			faild: (err)->
				@.pushed = false
				@.loading = false
			
			nextPage: ->
				console.log "next page run"
				@.pageIndex = 2
			openInApp: (type = 0,video = 0,music = 0)->
				if type is 0
					CloudMusic.open("https://m.giccoo.com/Landrover/")
				else
					CloudMusic.open("https://m.giccoo.com/Landrover/?type=#{type}&video=#{video}&music=#{music}")
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
			ugc = new UGC({el: "ugc", w: 640, h: 640/TrueW*TrueH})


stopAllVideo = ->
	for i in [1..6]
		document.getElementById("video-#{i}").pause()