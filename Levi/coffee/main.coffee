# @codekit-prepend "coffee/css3Prefix"
# @codekit-prepend "../../libs/coffee/loadWechatConfig"
# @codekit-prepend "../../libs/coffee/IsPC"
# @codekit-prepend "../../libs/vue/vue-player"
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
	redirectUrl = "https://m.giccoo.com/Levi/"
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
	if IsPC()
		document.getElementById("qrcode").className += " show"
		return false
	if window.navigator.userAgent.indexOf("NeteaseMusic") > -1
		sys = "NeteaseMusic"
	else
		loadWechatConfig()
		wx.ready ->
			shareContent =
				title: "有故事的声活单曲"
				desc: "有故事的声活单曲~"
				link: "http://m.giccoo.com/Levi/"
				imgUrl: "http://m.giccoo.com/Levi/img/ico.jpg"
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
	loading = new Vue
		el: "#loading"
		data:
			progress: 0
			mounted: false
			progressOn: 0
		methods:
			openMusic: ->
				# bgm = document.getElementById "bgm"
				# bgm.currentTime = _second
				# bgm.play()
				PIXI.sound.play("bgm")
				main.openBtnShow = false
				@.next()
			next: ->
				document.getElementById('load').className += " fadeOut animated"
				_public.note = false
				setTimeout ->
					document.getElementById('load').style.display = "none"
				,520
		mounted: ->
			@.mounted = true
			timein = setInterval =>
				@.progress += 2
				@.progress = @.progressOn if @.progress >= @.progressOn
				if @.progress >= 100
					@.progress = 100
					clearInterval timein
					main.mounted = true
					_cache = setTimeout =>
						@.next()
					,2000
			,1000/20
	init()

init = ->
	TrueH = document.documentElement.clientHeight
	TrueW = document.documentElement.clientWidth
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
			biger: TrueW/TrueH < 0.52
			smaller: smaller
			afterH: if smaller then TrueH*1.15-1029*(TrueW/750) else TrueH-1029*(TrueW/750)
			wy: false
			mounted: false
			loading: false
			pagebuildShow: false
			pageInfoShow: false
			pageIndex: 1
			step: 1
			singerIndex: 3
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
				link: null
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
		methods:
			start: (evt)->
				touch = evt.touches[0]
				# console.log touch
				@.default.x = touch.clientX
			move: (evt)->
				touch = evt.touches[0]
				moveX = touch.clientX - @.default.x
				n = -1
				n = 1 if moveX < 0
				numb = parseInt Math.abs(moveX)/50
				if numb >= 1
					@.singerIndex += n
					@.default.x = touch.clientX

			end: (evt)->
			maxlengthnickname: ->
				console.log @.nickname.gblen()
			openMusic: ->
				# bgm = document.getElementById "bgm"
				# bgm.currentTime = _second
				# bgm.play()
				PIXI.sound.play("bgm",{start: _second})
				@.openBtnShow = false
			skip: ->
				# bgm = document.getElementById "bgm"
				# bgm.pause()
				PIXI.sound.stop("bgm")
				@.pageIndex = 2
			startbuild: ->
				unless @.v
					return alert "请先升级到最新版本的网易云音乐"
				@.pageIndex = 3
			recordStart: ->
				# recordStartCb
				return false if @.recordStarting
				CloudMusic.orpheus('orpheus://recordvoice/record/start?limit=15')
				# _startCache = setTimeout =>
				# 	ugc.cover.visible = true
				# 	ugc.startLine()
				# 	@.audioId = null
				# 	@.count = 15
				# 	@.recordStarting = true
				# 	clearInterval _runTime
				# 	_time = new Date().getTime()
				# 	_runTime = setInterval =>
				# 		@.count = 15 - parseInt (new Date().getTime() - _time)/1000
				# 		@.count = 0 if @.count < 0
				# 	,1000/10
				# 	_cache = setTimeout =>
				# 		@.recordStop()
				# 	,10*1000+100
				# ,1000
				
			recordStop: ->
				CloudMusic.orpheus('orpheus://recordvoice/record/end')
				@.recordStarting = false
				@.authorization = true
				clearTimeout _cache
				clearInterval _runTime
				ugc.stopLine()
				_cache = setTimeout =>
					@.authorization = false
					@.uploadAudio()
				,800
			playAudio: ->
				# alert @.audioId
				CloudMusic.orpheus("orpheus://recordvoice/play/start?id=#{@.audioId}")

			uploadAudio: ->
				@.step = 3
				ugc.addCover()
				CloudMusic.orpheus("orpheus://recordvoice/play/end?id=#{@.audioId}")
				return false
			gotoAudio: ->
				return alert "请输入你的名字" if @.nickname is ""
				return alert "名字限制10个中文字符20个英文字符" if @.nickname.gblen() > 20
				return alert "请上传一张专辑封面" unless @.imageUpdate
				@.step = 2
				ugc.uploadOverText.visible = false
			selectSingerStart: ->
				return alert "请输入你发声了什么?" if @.text is ""
				return alert "字数限制32个中文字符64个英文字符" if @.text.gblen() > 64
				@.step = 4
				ugc.albumInfo @.singerIndex
			singerPrev: ->
				@.singerIndex--
				if @.singerIndex < 1
					return @.singerIndex = 1
				ugc.albumInfo @.singerIndex
			singerNext: ->
				@.singerIndex++
				if @.singerIndex > 5
					return @.singerIndex = 5
				ugc.albumInfo @.singerIndex
			over: ->
				if @.wy
					@.step = 5
				else
					@.pageInfoShow = true
				return false if @.loading
				_hmt? and _hmt.push(['_trackEvent', "Levi", "share", "ugc", "-"])
				if @.uploaded
					neteaseShareImage()
					return false
			uploadAll: ->
				@.loading = true
				# console.log "authorization:",@.authorization
				console.log "授权:#{@.authorization},是否接受到录音回调#{@.norecord}"
				if @.authorization and not @.norecord
					CloudMusic.orpheus("orpheus://recordvoice/upload/start?id=#{@.audioId}")
				else
					@.authorization = false
					@.createLog()
			review: ->
				# @.step = 5
				# ugc.review()
				@.allowShow()
			allowShow: ->
				@.allowPopShow = true
			allowFALSE: ->
				return false if @.loading
				# @.loading = true
				@.authorization = false
				@.allowPopShow = false
				ugc.review()
				@.step = 5
				@.uploadAll()
			allowTRUE: ->
				return false if @.loading
				@.authorization = true
				@.allowPopShow = false
				ugc.review()
				@.step = 5
				@.uploadAll()
			createLog: ->
				# @.nickname,@.shareImageLink,@.musicLink,@.singerIndex,@.text,@.authorization
				console.log "createLog:",@.authorization,@.norecord
				unless @.authorization
					ugc.overUGC()
					return false
				data = {
					nickname: @.nickname
					music: @.musicLink
					singer: @.singerIndex
					message: @.text
					allow: @.authorization
					mask: @.mask
				}
				axios.post "#{apiLink}active/Levi/insert",data
				.then (msg)=>
					# alert JSON.stringify msg
					if msg.data.info.insertId?
						@.logId = msg.data.info.insertId
						ugc.overUGC(msg.data.info.insertId)
					else
						ugc.overUGC()
				.catch (e)=>
					@.loading = false	
			share: (image)->
				folder = "Levi"
				if @.authorization
					folder = "Levis"
				data = {
					image: image
					folder: folder
				}
				@.folder = folder
				console.log "folder:",folder
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
				# post and update ugc info
				# @.nickname,@.shareImageLink,@.musicLink,@.singerIndex,@.text,@.authorization
				@.uploaded = true
				unless @.authorization
					@.loading = false
					# neteaseShareImage()
					return true
				data = {
					id: @.logId
					avatar: @.folder+"/"+@.shareImageLink
				}
				if @.logId?
					axios.post "#{apiLink}active/Levi/update",data
					.then (msg)=>
						# alert JSON.stringify msg
						@.pushed = false
						@.loading = false
						# neteaseShareImage()
					.catch (e)=>
						@.pushed = false
						@.loading = false
						# neteaseShareImage()
				# else
					# neteaseShareImage()
			showInfoPage: ->
				@.pageInfoShow = true
			faild: (err)->
				@.pushed = false
				@.loading = false
				console.log "err:",err
			setugc: (link)->
				@.ugc = link
			changeImage: (evt)->
				@.imageUpdate = true
				img = document.getElementById "imageInput"
				console.log "file:",img.files.length,img.files[0]
				return false if img.files.length < 1
				getOrientation img.files[0],(orientation)=>
					blob = createObjectURLfun(img.files[0])
					ugc.passImage blob,orientation

			# passImage: (blob)->
		watch:
			singerIndex: (n,o)->
				if n > 5
					@.singerIndex = 5
				else if n < 1
					@.singerIndex = 1
				else
					ugc.albumInfo @.singerIndex
			# text: (n,o)->
			# 	# alert "字数限制32个中文字符64个英文字符" if @.text.gblen() > 64
			# 	console.log n
			mounted: (n,o)->
				time = new Date().getTime()
				setTimeout =>
					@.pageIndex = 2 if @.pageIndex < 2
					clearInterval _cache
					# console.log _second
					bgm = document.getElementById "bgm"
					bgm.pause()
				,22*1000+500
				_cache = setInterval =>
					_second = (new Date().getTime() - time)/1000
				,1000/20
			text: (n,o)->
				if @.text.gblen() > 64
					t = @.text.split("")
					tx = ""
					for i in t
						tx += i
						break if tx.gblen() >= 64
					@.text = tx
					return alert "字数限制32个中文字符64个英文字符" 
				ugc.lyricUpdate @.text
			nickname: (n,o)->
				if @.nickname.gblen() > 20
					t = @.nickname.split("")
					tx = ""
					for i in t
						tx += i
						break if tx.gblen() >= 20
					@.nickname = tx
					return alert "字数限制10个中文字符20个英文字符" 
				ugc.updateName @.nickname
		mounted: ->
			if sys is "NeteaseMusic"
				@.wy = true
			h = TrueH*2*(2-TrueW*2/750+0.01)
			# game = new Game({el: "game",h: h})
			ugc = new UGC({el: "ugc",trueH: TrueH})
			version = CloudMusic.getClientVersion().split(".")
			if version.length >= 3
				@.v = version[0] >= 5 and version[1] >= 4 and version[2] >= 1
			else
				@.v = false
			# @.v = parseInt CloudMusic.getClientVersion().replace(/\./g,"")
			console.log "version:",CloudMusic.getClientVersion(),@.v
			# alert window.api.recordEndCb?
			# alert window.api.uploadEndCb?
			# if window.api.recordEndCb?
			# ?x-oss-process=image/format,jpg,quality,q_60/crop,x_130,y_282,w_410,h_410
			
			window.api.recordStartCb = (data)=>
				_testTime = new Date().getTime()
				console.log "record start:",data,_testTime
				@.norecord = false
				clearTimeout _startCache
				if data.code is 200
					ugc.cover.visible = true
					ugc.startLine()
					@.audioId = null
					@.count = 15
					@.recordStarting = true
					clearInterval _runTime
					_time = new Date().getTime()
					_runTime = setInterval =>
						@.count = 15 - parseInt (new Date().getTime() - _time)/1000
						@.count = 0 if @.count < 0
					,1500/10
				else
					@.authorization = false
					@.uploadAudio()
					clearTimeout _cache
			window.api.recordEndCb = (data)=>
				console.log "record end:",data,(new Date().getTime()-_testTime)/1000
				if data.code is 200 and data.localId isnt "(null)"
					@.audioId = data.localId
				else
					@.authorization = false
					@.uploadAudio()
				@.canUpload = true
				@.norecord = false
				@.recordStarting = false
				clearTimeout _cache
				clearInterval _runTime
				ugc.stopLine()
				ugc.saveLine()
			window.api.uploadEndCb = (data)=>
				console.log "record upload:",data
				# console.log "上传音频:#{JSON.stringify(data)}"
				if data.code is 200
					@.musicLink = data.playUrl
					@.createLog()
				else
					@.authorization = false
					@.createLog()
			window.api.recordvoicePlayCb = (data)=>
				if data.action is "start"
					main.canUpload = false
					ugc.startLine()
				else
					main.canUpload = true
					ugc.stopLine()
				console.log data.action,@.canUpload
			console.log "update: v9 remove"
