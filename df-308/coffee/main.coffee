# @codekit-prepend "coffee/css3Prefix"
# @codekit-prepend "../../libs/coffee/loadWechatConfig"
# @codekit-prepend "../../libs/coffee/IsPC"
# @codekit-prepend "../../libs/vue/vue-player"
# @codekit-prepend "../../libs/vue/vue-register"
# @codekit-prepend "../../libs/coffee/pixi-base"
# @codekit-prepend "./dealer"
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
apiUrl = "//api.giccoo.com/Levi"
apiLink = "//g.giccoo.com/"
# apiLink = "http://192.168.3.45:3000/"
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
	redirectUrl = "https://m.giccoo.com/lancomeGEN/"
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
				title: "自信心声，因我而生"
				desc: "渴望拥有外在的光芒，就更应该聆听自己内心的身音"
				link: "http://m.giccoo.com/lancomeGEN/"
				imgUrl: "http://m.giccoo.com/lancomeGEN/img/ico.jpg"
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
			note: true
			playing: false

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
				setTimeout ->
					document.getElementById('load').style.display = "none"
				,520
		mounted: ->
			@.mounted = true
			TrueH = document.documentElement.clientHeight
			TrueW = document.documentElement.clientWidth
			timein = setInterval =>
				@.progress += 2
				@.progress = @.progressOn if @.progress >= @.progressOn
				if @.progress >= 100
					@.progress = 100
					clearInterval timein
					main.mounted = true
					_cache = setTimeout =>
						@.next()
					,200
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
	console.log TrueW,TrueH,_citys

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
			lotteryShow: false
			pageInfoShow: false
			pageIndex: 2
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
			form:
				nickname: {id:"nickname", type: "input", label: "昵称", placeholder: "请填写姓名",value: ""}
				mobile: {id:"mobile", type: "input", label: "电话", placeholder: "请填写电话",value: ""}
				province: {id:"province", type: "select", label: "省份", link: "city", value: "", options: _citys }
				city: {id:"city", type: "select", label: "城市", link: "dealer",value: "", options: _citys["北京"] }
				dealer: {id:"city", type: "select", label: "经销商", array: true, value: "", options: _citys["北京"]["北京"] }

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
		methods:
			showAnswerPage: ->
				@.pageIndex = 2
				unless _public.playing
					_public.playing = true
				setTimeout =>
					setup()
				,300
			openPop: ->
				@.lotteryShow = true

			openWeb: ->
				console.log "open web"
				window.location.href = "https://www.lancome.com.cn/landingpage/advanced-genifique?utm_source=NeteaseMusic&utm_medium=DISP&utm_content=06-02NeteaseMusic_H5&utm_campaign=CN_20180803_GEN1+1_LPD_LAN_FS_Regular_NVD_DISP_MO"
			sharePost: ->
				ugc.app.renderer.render ugc.app.stage
				@.ugc = ugc.app.view.toDataURL()
				setLottery()
			share: ->
				image = @.ugc
				folder = "lancomeGEN"
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
			faild: (err)->
				@.pushed = false
				@.loading = false
				console.log "err:",err
			setugc: (link)->
				@.ugc = link
			pageHand: ->
				@.pageIndex = 3
				setTimeout =>
					@.swing = true
				,300
				setTimeout =>
					finishAll()
				,700
			deviceMotionHandler: (evt)->
				return false unless @.swing
				acceleration = evt.accelerationIncludingGravity
				curTime = new Date().getTime()
				# console.log curTime-@.last_update
				if (curTime-@.last_update)> 10
					diffTime = curTime - @.last_update
					@.last_update = curTime
					x = acceleration.x
					y = acceleration.y
					z = acceleration.z
					speed = Math.sqrt( ( x - @.lastX ) * ( x - @.lastX ) + ( y - @.lastY ) * ( y - @.lastY ) + ( z - @.lastZ ) * ( z - @.lastZ ) ) / diffTime * 10000
					# console.log x,y,z,@.speed,speed
					if speed > @.speed
						@.maxSpeed += 1
						if @.maxSpeed >= 10
							@.swing = false
							@.nextPage()
					@.lastX = x
					@.lastY = y
					@.lastZ = z
			nextPage: ->
				console.log "next page run"
				@.pageIndex = 2
		# watch:
		mounted: ->
			TrueH = document.documentElement.clientHeight
			TrueW = document.documentElement.clientWidth
			if sys is "NeteaseMusic"
				@.wy = true
			h = TrueH*2*(2-TrueW*2/750+0.01)
			# game = new Game({el: "game",h: h})
			ugc = new UGC({el: "ugc", w: 640, h: 640/TrueW*TrueH})
			version = CloudMusic.getClientVersion().split(".")

			if window.DeviceMotionEvent
				window.addEventListener('devicemotion',@.deviceMotionHandler.bind(@),false)
				@.handCover = false
				console.log "devicemotion"
			else
				@.handCover = true

playAudio = (id)->
	audio = document.getElementById(id)
	console.log "play #{id}",audio,audio.play()
	audio.play()
	audio.addEventListener "ended", ->
		stopAllAudio()
		hideAnswer()
	,false

stopAllAudio = ->
	for item in musicA
		audio = document.getElementById item[0]
		audio.pause()
		audio = document.getElementById item[1]
		audio.pause()