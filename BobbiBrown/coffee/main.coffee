# @codekit-prepend "coffee/css3Prefix"
# @codekit-prepend "../../libs/coffee/loadWechatConfig"
# @codekit-prepend "../../libs/coffee/IsPC"
# @codekit-prepend "../../libs/vue/vue-player"
# @codekit-prepend "../../libs/coffee/pixi-base"
# @codekit-prepend "./game-main"
# @codekit-prepend "./game-person"
# @codekit-prepend "./game-block"
# @codekit-prepend "./game-bottle"
# @codekit-prepend "./game-enemy"

String.prototype.gblen = -> 
	len = 0;	
	for i in [0...this.length]
		if this.charCodeAt(i)>127 or this.charCodeAt(i)==94
			len += 2
		else
			len++
	return len

imageurl = "//api.giccoo.com/api/upload/image64/"
main = {}
game = null
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
	picUrl = "https://image.giccoo.com/upload/BobbiBrown/"+main.shareImageLink+"@!large"
	redirectUrl = "https://m.giccoo.com/BobbiBrown/"
	# console.log picUrl,"orpheus://sharepic?picUrl="+encodeURIComponent(picUrl)+"&shareUrl="+encodeURIComponent(redirectUrl)+"&wbDesc="+encodeURIComponent(title1)+"&qqDesc="+encodeURIComponent(title1)
	window.location.href = "orpheus://sharepic?picUrl="+encodeURIComponent(picUrl)+"&shareUrl="+encodeURIComponent(redirectUrl)+"&wbDesc="+encodeURIComponent(title1)+"&qqDesc="+encodeURIComponent(title1)
	console.log "share href"


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
				link: "http://m.giccoo.com/BobbiBrown/"
				imgUrl: "http://m.giccoo.com/BobbiBrown/img/ico.jpg"
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
	smaller = TrueW/640*1138 > TrueH
	navH = Math.ceil TrueW / 640 * 94 / TrueH * 100
	console.log TrueW/TrueH < 0.52

	main = new Vue
		el: "#main"
		data:
			w: TrueW
			h: TrueH
			biger: TrueW/TrueH < 0.52
			wy: false
			mounted: false
			loading: false
			pagebuildShow: false
			pageInfoShow: false
			startgame: false
			BGColor: "#ffffff"
			XY: "pageY"
			ugc: null
			pushed: false
			shareImageLink: null
			lottery: false
			lotteryShow: false
			lotteryFormShow: true
			form:
				username: ""
				mobile: ""
				address: ""
				color: "0号 PORCELAIN瓷白"
				random: null
		methods:
			submit: ->
				return alert "您没有中奖" unless @.form.random?
				return alert "请输入您的姓名" if @.form.username is ""
				return alert "请输入您的联系方式" if @.form.mobile is ""
				return alert "请输入您的收货地址" if @.form.address is ""
				return alert "请点击选择色号" if @.form.color is ""
				# "//api.giccoo.com/mbenz-love/insert"
				# 
				axios.post "//api.giccoo.com/BobbiBrown/update/",@.form
				.then (msg)=>
					if msg.data.recode is 200
						main.lotteryFormShow = true
					else
						alert msg.data.reason
				.catch (e)=>
					alert "提交失败请重试"
			share: (image)->
				data = {
					image: image
					folder: "BobbiBrown"
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
			success: (data)->
				@.pushed = false
				@.loading = false
				@.shareImageLink = data.info
				neteaseShareImage()
				setTimeout =>
					@.getLottery()
				,5000
			showInfoPage: ->
				@.pageInfoShow = true
			faild: (err)->
				@.pushed = false
				@.loading = false
				console.log "err:",err
			setugc: (link)->
				@.ugc = link
				setTimeout =>
					@.getLottery()
				,5000
			restart: ->
				window.location.reload()
			getLottery: ->
				# console.log "lottery"
				axios.get "//api.giccoo.com/BobbiBrown/getaward"
				.then (msg)=>
					if msg.data.Time and msg.data.award
						@.form.random = msg.data.random
						@.lottery = true
				@.lotteryShow = true
		mounted: ->
			if sys is "NeteaseMusic"
				@.wy = true
			h = TrueH*2*(2-TrueW*2/750+0.01)
			game = new Game({el: "game",h: h})