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
_CDN = "./"


neteaseShareImage = ->
	title1 = "快来玩游戏，赢Bobbi Brown正装粉底液！"
	picUrl = "https://image.giccoo.com/upload/Levi/"+main.shareImageLink+"@!large"
	redirectUrl = "https://m.giccoo.com/Levi/"
	# console.log picUrl,"orpheus://sharepic?picUrl="+encodeURIComponent(picUrl)+"&shareUrl="+encodeURIComponent(redirectUrl)+"&wbDesc="+encodeURIComponent(title1)+"&qqDesc="+encodeURIComponent(title1)
	window.location.href = "orpheus://sharepic?picUrl="+encodeURIComponent(picUrl)+"&shareUrl="+encodeURIComponent(redirectUrl)+"&wbDesc="+encodeURIComponent(title1)+"&qqDesc="+encodeURIComponent(title1)
	console.log "share href"

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
				title: "快来玩游戏，赢Bobbi Brown正装粉底液！"
				desc: "测测你的颜值能量，哪首歌代表你的颜值？~"
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
			progressOn: 100
		mounted: ->
			@.mounted = true
			timein = setInterval =>
				@.progress += 3
				@.progress = @.progressOn if @.progress >= @.progressOn
				if @.progress >= 100
					@.progress = 100
					clearInterval timein
					main.mounted = true
					setTimeout ->
						document.getElementById('load').className += " fadeOut animated"
						_public.note = false
						setTimeout ->
							document.getElementById('load').style.display = "none"
						,520
					,100
			,1000/20
			setTimeout =>
				init()
			,500

init = ->
	TrueH = document.documentElement.clientHeight
	TrueW = document.documentElement.clientWidth
	# console.log new Date().getTime() - startTime
	# document.body.style.height = TrueH+"px"
	# document.documentElement.className += " iphone4" if TrueW/TrueH >= 0.64
	TrueW = 640 if TrueW >= 640
	TrueH = 1138 if TrueH >= 1138
	smaller = TrueH*2 < 1100
	navH = Math.ceil TrueW / 640 * 94 / TrueH * 100
	console.log TrueW/TrueH < 0.52

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
			pageIndex: 2
			step: 1
			startgame: false
			BGColor: "#ffffff"
			XY: "pageY"
			ugc: null
			pushed: false
			shareImageLink: null
			
			singerIndex: 3
			cache: null
			audioId: null
			v: null
			recordStarting: false
			form:
				link: null
			text: ""
			nickname: ""
				
		methods:
			startbuild: ->
				# if @.v < 541
				# 	return alert "请先升级到最新版本的网易云音乐"
				@.pageIndex = 3

			recordStart: ->
				@.audioId = "123"
				return false 
				CloudMusic.orpheus('orpheus://recordvoice/record/start?limit=30')
				@.audioId = null
				@.recordStarting = true
				setTimeout =>
					@.recordStop()
				,30*1000-100
			recordStop: ->
				CloudMusic.orpheus('orpheus://recordvoice/record/end')
				@.recordStarting = false
			playAudio: ->
				CloudMusic.orpheus("orpheus://recordvoice/play/start?id=#{@.audioId}")
			uploadAudio: ->
				@.step = 3
				ugc.addCover()
				return false 
				CloudMusic.orpheus("orpheus://recordvoice/upload/start?id=#{@.audioId}")
			gotoAudio: ->
				@.step = 2
				ugc.uploadOverText.visible = false
			review: ->
				@.step = 5
				ugc.review()
			selectSingerStart: ->
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

			submit: ->
				return alert "您没有中奖" unless @.form.random?
				return alert "请输入您的姓名" if @.form.username is ""
				return alert "请输入您的联系方式" if @.form.mobile is ""
				return alert "请输入您的收货地址" if @.form.address is ""
				return alert "请点击选择色号" if @.form.color is ""
				# "//api.giccoo.com/mbenz-love/insert"
				# 
				axios.post "#{apiUrl}/update/",@.form
				.then (msg)=>
					if msg.data.recode is 200
						main.lotteryFormShow = false
					else
						alert msg.data.reason
				.catch (e)=>
					alert "提交失败请重试"
			over: ->
				if @.wy
					@.step = 5
				else
					@.pageInfoShow = true
				ugc.overUGC()
			share: (image)->
				data = {
					image: image
					folder: "Levi"
				}
				return @.faild() unless image?
				return false if @.pushed
				# @.ugcLoadPageShow = true
				@.loading = true
				axios.post imageurl,data
				.then (msg)=>
					if msg.data.recode is 200
						main.success(msg.data)
						# @.ugcLoadPageShow = false
					else
						main.faild(msg)
				.catch (e)=>
					# alert e
					main.faild(e)
				_hmt? and _hmt.push(['_trackEvent', "Levi", "share", "ugc", "-"])
			success: (data)->
				@.pushed = false
				@.loading = false
				@.shareImageLink = data.info
				neteaseShareImage()
				
			showInfoPage: ->
				@.pageInfoShow = true
			faild: (err)->
				@.pushed = false
				@.loading = false
				console.log "err:",err
			setugc: (link)->
				@.ugc = link
			changeImage: (evt)->
				img = document.getElementById "imageInput"
				console.log img.files.length
				self.max = img.files.length
				self.now = 0
				# for item in [0...img.files.length]
				getOrientation img.files[0],(orientation)->
					blob = createObjectURLfun(img.files[0])
					ugc.passImage blob,orientation
			# passImage: (blob)->

		watch:
			mounted: (n,o)->
				setTimeout =>
					@.pageIndex = 2 if @.pageIndex < 2
				,4000*3+500
			text: (n,o)->
				ugc.lyricUpdate @.text
			nickname: (n,o)->
				ugc.updateName @.nickname
		mounted: ->
			if sys is "NeteaseMusic"
				@.wy = true
			h = TrueH*2*(2-TrueW*2/750+0.01)
			# game = new Game({el: "game",h: h})
			ugc = new UGC({el: "ugc",trueH: TrueH})
			@.v = parseInt CloudMusic.getClientVersion().replace(/\./g,"")
			if window.api.recordEndCb?
				window.api.recordEndCb (data)=>
					console.log data
					@.audioId = data.localId
					@.recordStarting = false
			if window.api.uploadEndCb?
				window.api.uploadEndCb (data)=>
					console.log data