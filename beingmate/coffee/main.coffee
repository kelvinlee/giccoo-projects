# @codekit-prepend "coffee/css3Prefix"
 # @codekit-prepend "../../libs/coffee/requestanimation"
# @codekit-prepend "../../libs/coffee/loadWechatConfig"
# @codekit-prepend "../../libs/coffee/passiveSupport"
# @codekit-prepend "../../libs/coffee/IsPC"
# @codekit-prepend "../../libs/vue/vue-player"
# @codekit-prepend "./pixi-music-score"
# @codekit-prepend "./pixi-music-icon"

# 抽奖流程, 前几页的音符飘动
# ugc post, 分享设置, 后台抽奖流程

# animate = (time)->
# 	requestAnimationFrame animate
# 	TWEEN.update(time)
# requestAnimationFrame animate

# Tn = (from = {x: 0},to = {x: 100},time = 800,callback)->
# 	tempX = from
# 	tween = new TWEEN.Tween(tempX)
# 	.to(to, time)
# 	.easing(TWEEN.Easing.Cubic.Out)
# 	.onUpdate =>
# 		callback tempX
# 	.start()
# 	return tween

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
_public = {}
loading = {}
musicLineCache = null
musicIconCache = null
sys = ""
ugcCache = null
sended = [false,false]
_CDN = "./"

neteaseShareImage = ->
	title1 = "最幸运的你，藏在你爱的音乐里"
	picUrl = "https://image.giccoo.com/upload/beingmate/"+main.shareImageLink+"@!large"
	redirectUrl = "https://m.giccoo.com/beingmate/"
	# console.log picUrl,"orpheus://sharepic?picUrl="+encodeURIComponent(picUrl)+"&shareUrl="+encodeURIComponent(redirectUrl)+"&wbDesc="+encodeURIComponent(title1)+"&qqDesc="+encodeURIComponent(title1)
	window.location.href = "orpheus://sharepic?picUrl="+encodeURIComponent(picUrl)+"&shareUrl="+encodeURIComponent(redirectUrl)+"&wbDesc="+encodeURIComponent(title1)+"&qqDesc="+encodeURIComponent(title1)


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
				title: "最幸运的你，藏在你爱的音乐里"
				desc: "立即测试幸运指数，找出藏在奶粉罐里的秘密吧~"
				link: "http://m.giccoo.com/beingmate/"
				imgUrl: "http://m.giccoo.com/beingmate/img/ico.jpg"
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
			pagebuildShow: false
			pagelastShow: false
			popmoreinfoShow: false
			poplotteryShow: false
			regisiterSuccessShow: false
			loading: false
			lottery: "coupons" #award coupons 
			index: 0
			pageIndex: 0
			maxPage: 4
			animateIndex: 1
			animationCache: null
			nickname: "刻下你的名字"
			ugc: null
			ugcSave: null
			shareImageLink: null
			pushed: false
			form:
				username: ""
				mobile: ""
				id: ""
				random: null
			default:
				x: 0
				animated: false
			XY: "pageY"
		watch:
			pageIndex: (n,o)->
				# console.log n,o
				if n isnt o and (n is 1 or n is 2 or n is 3)
					@.animationRun() 
				else
					clearInterval @.animationCache
					musicLineCache.default.running = false
					musicIconCache.default.running = false

		methods:
			getLottery: ->
				if @.lottery is "award"
					@.poplotteryShow = true
				else
					window.location.href = "https://taoquan.taobao.com/coupon/unify_apply.htm?sellerId=1603022933&activityId=c88eca642a5c4b5d987bc7245a8899f6"

			animationRun: ->
				musicLineCache.default.running = true
				musicIconCache.default.running = true
				@.animationCache = setInterval =>
					@.animateIndex += 1
					@.animateIndex = 0 if @.animateIndex >= 3
				,4000
			moveNext: ->
				@.pageIndex += 1
				if @.pageIndex >= @.maxPage
					@.pageIndex = @.maxPage
			movePrev: ->
				@.pageIndex -= 1
				if @.pageIndex <= 0
					@.pageIndex = 0
			start: (evt)->
				return false if this.default.animated
				# evt.preventDefault()
				this.noteMsg = false
				touch = if evt.touches? then evt.touches[0] else evt
				this.default.x = touch[@XY]
				_public.note = false
			move: (evt)->
				return false if this.default.animated or this.poping
				evt.preventDefault()
				touch = if evt.touches? then evt.touches[0] else evt
				pageX = touch[@XY]
				if (pageX - this.default.x) > 50
					this.default.animated = true
					this.movePrev()
				if (pageX - this.default.x) < -50
					this.default.animated = true
					this.moveNext()
			end: (evt)->
				# this = @
				this.default.animated = false
			focus: (evt)->
				@.nickname = "" if @.nickname is "刻下你的名字"
			blur: (evt)->
				@.nickname = "刻下你的名字" if @.nickname is ""
			gotobuild: (evt)->
				if @.nickname is "" or @.nickname is "刻下你的名字"
					alert "请刻下你的名字"
					return false
				if @.nickname.gblen() > 16
					alert "名字只能在16个字符以内,中文占2个字符"
					return false
				@.poping = true
				@.pagebuildShow = true
				id = parseInt(escape(@.nickname).replace(/[^0-9|a-z]/ig,""),36)%5+1
				unless id >= 1 or id <= 5
					id = 1
				@.loading = true
				ugcCache = new UGC({
					id: id,
					callback: =>
						@.ugc = ugcCache.getNormal()
						@.ugcSave = ugcCache.get()
						@.loading = false
				})
				unless @.wy
					setTimeout =>
						@.pagelastShow = true
					,5000

			submit: ->
				return alert "请输入用户名" if @.form.username is ""
				return alert "请输入联系电话" if @.form.mobile is ""
				return alert "请输入身份证" if @.form.id is ""
				# "//api.giccoo.com/mbenz-love/insert"
				# 
				axios.post "//api.giccoo.com/beingmate/update/",@.form
				.then (msg)=>
					if msg.data.recode is 200
						main.regisiterSuccessShow = true
					else
						alert msg.data.reason
				.catch (e)=>
					alert "提交失败请重试"
			share: ->
				image = ugcCache.get()
				data = {
					image: image
					folder: "beingmate"
				}
				return @.faild() unless image?
				return false if @.pushed
				# @.ugcLoadPageShow = true
				@.loading = true
				axios.post imageurl,data
				.then (msg)=>
					@.pushed = true
					if msg.data.recode is 200
						main.success(msg.data)
						# @.ugcLoadPageShow = false
					else
						main.faild()
				.catch (e)=>
					# alert e
					main.faild()
			success: (data)->
				console.log "post success"
				@.loading = false
				@.shareImageLink = data.info
				setTimeout =>
					@.pagelastShow = true
					axios.get "//api.giccoo.com/beingmate/getaward"
					.then (msg)=>
						console.log(msg.data)
						if msg.data.Time and msg.data.award
							@.form.random = msg.data.random
							@.lottery = "award"

				,8000
				neteaseShareImage()
				
			faild: ->
				@.loading = false

		mounted: ->
			if sys is "NeteaseMusic"
				@.wy = true
			# if not musicLineCache?
			musicLineCache = new musicScore({el: "lineGB1"})
			new musicScore({el: "lineGB2"})
			new musicScore({el: "lineGB3"})
			
			musicIconCache = new musicIcon({
				el: "musicIcon1",
				speed: 0.8, 
				callback: => 
					new musicIcon
						el: "musicIcon2",
						speed: 0.8
						callback: =>
							new musicIcon({el: "musicIcon3",speed: 0.8})
					musicIconCDCache = new musicIconCD({el: "musicIconCD"})
					musicIconCDCache2 = new musicIconCD({
						el: "musicIconCD2", 
						list: [
							{x: 250,y: 480}
							{x: 450,y: 380}
							{x: 190,y: 440}
							{x: 80,y: 440}
							{x: 520,y: 460}
							{x: 130,y: 260}
							{x: 550,y: 460}
						]
					})
			})
			console.log "mounted"

class UGC
	default:
		w: 320
		h: 160
		running: true
	list: []
	constructor: (arg)->
		@.opts =
			el: "ugc"
			w: 750
			h: 1333
			list: [
				{x: 540,y: 863}
				{x: 590,y: 803}
				{x: 630,y: 750}
				{x: 540,y: 710}
				{x: 630,y: 680}
			]
			defaultShow: true
			class: ""
			fillColor: 0x66CCFF
			id: 1
			callback: ->
		@.opts = Object.assign @.opts,arg
		@.default.h = document.documentElement.clientHeight
		@.default.w = document.documentElement.clientWidth
		@.default.ratio = @.opts.w / @.default.w
		@app = new PIXI.Application
			width: @.opts.w
			height: @.opts.h
			transparent: true
			preserveDrawingBuffer: true
		@.app.view.className = @.opts.class if @.opts.class? and @.opts.class isnt ""
		@.stage = @.app.stage
		document.getElementById(@.opts.el).appendChild @.app.view
		PIXI.loader.add([
			_CDN+"img/page-build-bg.jpg",
			_CDN+"img/page-build-text.png",
			_CDN+"img/page-build-title.png",
			_CDN+"img/page-build-text-#{@.opts.id}.png",
			_CDN+"img/page-build-title-#{@.opts.id}.png",
			_CDN+"img/page-build-score-bg.png",
			_CDN+"img/page-build-score.png",
			_CDN+"img/page-build-qrcode.png"
			_CDN+"img/page-build-logo.png"
		]).load(@.build.bind(@))
	build: ->
		bg = new Sprite resources[_CDN+"img/page-build-bg.jpg"].texture
		@.stage.addChild bg

		title = new Sprite resources[_CDN+"img/page-build-title.png"].texture
		title.x = 400
		title.y = 250
		@.stage.addChild title

		logo = new Sprite resources[_CDN+"img/page-build-logo.png"].texture
		@.stage.addChild logo

		mtitle = new Sprite resources[_CDN+"img/page-build-title-#{@.opts.id}.png"].texture
		mtitle.x = @.opts.w/2
		mtitle.y = 330
		mtitle.scale.set(0.7,0.7)
		mtitle.anchor.set(0.5, 0)
		@.stage.addChild mtitle

		text = new Sprite resources[_CDN+"img/page-build-text.png"].texture
		text.x = @.opts.w/2
		text.y = 500
		text.anchor.set(0.5, 0)
		@.stage.addChild text

		for i in [0...5]
			score = if i <= @.opts.id-1 then "" else "-bg"
			flower = new Sprite resources[_CDN+"img/page-build-score#{score}.png"].texture
			flower.x = i*flower.width+165
			flower.y = 580
			flower.scale.set(0.7,0.7)
			flower.anchor.set(0.5, 0)
			@.stage.addChild flower

		mtext = new Sprite resources[_CDN+"img/page-build-text-#{@.opts.id}.png"].texture
		mtext.x = @.opts.w/2
		mtext.y = 700
		mtext.scale.set(0.7,0.7)
		mtext.anchor.set(0.5, 0)
		@.stage.addChild mtext

		nickname = new PIXI.Text(
			main.nickname,
			{fontFamily: "Arial", fontSize: 40, fill: "white"})
		nickname.x = 200 - 6
		nickname.y = 254
		nickname.anchor.set(0.5, 0)
		@.stage.addChild nickname

		line = new Graphics()
		line.lineStyle(4, 0xFFFFFF, 1)
		line.moveTo(60,300)
		line.lineTo(340,300)
		line.y = 4
		@.stage.addChild line

		for i in [0...@.opts.list.length]
			icon = new Sprite resources[_CDN+"img/music-icon-#{i%2+1}.png"].texture
			icon.x = @.opts.list[i].x
			icon.dx = @.opts.list[i].x
			icon.y = @.opts.list[i].y
			icon.dy = @.opts.list[i].y
			icon.turnSpeed = Math.random() + 0.2
			icon.direction = Math.PI * 2
			icon.speed = @.opts.speed + Math.random() * @.opts.speed
			icon.alpha = Math.random()*0.5 + 0.5
			icon.scale.set(0.5+(i%5*0.1),0.5+(i%5*0.1))
			@.list.push icon
			@.stage.addChild icon
		@.app.ticker.add @.loop.bind @
		@.opts.callback() if @.opts.callback?
	loop: (detail)->
		return false if not @.default.running
		for icon in @.list
			icon.direction += icon.turnSpeed * 0.005
			icon.x -= Math.sin(icon.direction * 10) *0.5 * detail
			icon.y -= Math.cos(icon.direction) * 0.2 * detail
			icon.alpha -= 0.003 * detail
			if icon.alpha <= 0 or icon.x <= -icon.width or icon.y <= -icon.height or icon.x > @.opts.w or icon.y > @.opts.h
				icon.direction = Math.PI * 2
				icon.x = icon.dx
				icon.y = icon.dy
				icon.alpha = 1
	getNormal: ->
		@.app.renderer.render @.app.stage
		return @.app.view.toDataURL()
	get: ->
		ugc = new Sprite resources[_CDN+"img/page-build-qrcode.png"].texture
		ugc.scale.set(800/1080,800/1080)
		ugc.x = -34
		ugc.y = 1333 - ugc.height - 100
		@.stage.addChild ugc
		@.app.renderer.render @.app.stage
		ugc.alpha = 0
		return @.app.view.toDataURL()


