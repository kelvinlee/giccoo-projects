 # @codekit-prepend "../../libs/coffee/randomSort"
 # @codekit-prepend "../../libs/coffee/requestanimation"
 # @codekit-prepend "../../libs/coffee/loadWechatConfig"
 # @codekit-prepend "../../libs/coffee/ispc"
 # @codekit-prepend "./pixi"


_CDN = ""
_imgurl = ""
global = {}
main = {}
pre = {}
load = {}
sys = null
imageurl = "//api.giccoo.com/api/upload/image64/"


getRandom = (length)->
	return parseInt(Math.random()*(length+1)-1)
window.onload = ->
	# runAnimate()
	if window.navigator.userAgent.indexOf("NeteaseMusic") > -1
		sys = "NeteaseMusic"
	else
		loadWechatConfig()
		wx.ready ->
			shareContent =
				title: "点击测试你的孤独指数"
				desc: "与兰蔻一起，度过漫漫长夜"
				link: "http://m.giccoo.com/lancome/"
				imgUrl: "http://m.giccoo.com/lancome/img/ico.jpg"
				success: ->
					# alert "success"
				cancel: ->
					# alert "cancel"
			wx.onMenuShareTimeline shareContent
			wx.onMenuShareAppMessage shareContent
			wx.onMenuShareQQ shareContent
			wx.onMenuShareWeibo shareContent
	init()

animate = (time)->
	requestAnimationFrame animate
	TWEEN.update(time)
requestAnimationFrame animate

init = ->
	TrueH = document.documentElement.clientHeight
	TrueW = document.documentElement.clientWidth
	console.log TrueW,TrueH
	# document.body.style.height = TrueH+"px"
	# document.documentElement.className += " iphone4" if TrueW/TrueH >= 0.64
	TrueW = 640 if TrueW >= 640
	TrueH = 1138 if TrueH >= 1138
	smaller = TrueW/640*1138 > TrueH

	load = new Vue
		el: "#load"
		data:
			progress: 0
			mount: false
			progressOn: 0
		computed:
			progressText: ->
				html = ""
				text = @.progress.toString()
				for i in [0...text.length]
					html += "<span class='font font-#{text[i]}'>#{text[i]}</span>"
				return html+'<span class="font font-last">%</span>'
		mounted: ->
			# @.progress = 10
			@.mount = true
			timein = setInterval =>
				@.progress += 3
				if @.progress >= 100
					clearInterval timein
					@.progress = 100
					main.build()
					main.homepageShow = true
					
			,1000/20

	main = new Vue
		el: "#main"
		data:
			pc: false
			smaller: smaller
			homepageShow: false
			recordPageShow: false
			ugcPageShow: false
			regisiterPageShow: false
			lastPageShow: false
			mount: false
			audio: null
			playing: "play"
			noteMsg: true
			w: TrueW
			h: TrueH
			maxPage: 8
			pageIndex: 0
			moving: true
			musiclink: "mp3/bgm.mp3"
			default:
				x: 0
				animated: false
			XY: "pageX"
		# computed:
		methods:
			gameStart: (Id)->
				console.log "id:",Id
			play: ->
				if @.playing is "stop"
					@.audio.pause()
				else
					@.audio.play()
			audioplay: ->
				@.playing = "stop"
			audiopause: ->
				@.playing = "play"

			build: ->
				@.page1BG = new stars()
				@.page1BG.init()


			moveNext: ->
				# console.log "xiayige",@.pageIndex
				@.pageIndex += 1
				if @.pageIndex >= @.maxPage
					@.pageIndex = @.maxPage

			movePrev: ->
				# console.log "shangyige",@.pageIndex
				@.pageIndex -= 1
				if @.pageIndex <= 0
					@.pageIndex = 0
			start: (evt)->
				console.log evt
				@.noteMsg = false
				touch = if evt.touches? then evt.touches[0] else evt
				@.default.x = touch[@XY]
			move: (evt)->
				evt.preventDefault()
				return false if @.default.animated or @.poping
				touch = if evt.touches? then evt.touches[0] else evt
				pageX = touch[@XY]
				if (pageX - @.default.x) > 50
					@.default.animated = true
					@.movePrev()
				if (pageX - @.default.x) < -50
					@.default.animated = true
					@.moveNext()
			end: (evt)->
				@.default.animated = false

		mounted: ($el,e)->
			if sys is "NeteaseMusic"
				@.wy = true
			@.mount = true
			@.audio = document.getElementById "bgm"
			if IsPC()
				@.$el.addEventListener 'mousedown', @.start.bind @
				@.$el.addEventListener 'mousemove', @.move.bind @
				@.$el.addEventListener 'mouseup', @.end.bind @
				@.pc = true
			@.$el.addEventListener 'touchstart', @.start.bind @
			@.$el.addEventListener 'touchmove', @.move.bind @
			@.$el.addEventListener 'touchend', @.end.bind @
			@.audio.addEventListener "play", @.audioplay.bind @ if @.audio
			@.audio.addEventListener "pause", @.audiopause.bind @ if @.audio
			@.audio.addEventListener "ended", @.audiopause.bind @ if @.audio



Tn = (from = {x: 0},to = {x: 100},time = 800,callback)->
	tempX = from
	tween = new TWEEN.Tween(tempX)
	.to(to, time)
	.easing(TWEEN.Easing.Cubic.Out)
	.onUpdate =>
		callback tempX
	.start()
	return tween

neteaseShareImage = ->
	title1 = "点击测试你的孤独指数"
	picUrl = "https://image.giccoo.com/upload/lancome/"+main.shareImageLink+"@!large"
	redirectUrl = "https://m.giccoo.com/lancome/"
	console.log "orpheus://sharepic?picUrl="+encodeURIComponent(picUrl)+"&shareUrl="+encodeURIComponent(redirectUrl)+"&wbDesc="+encodeURIComponent(title1)+"&qqDesc="+encodeURIComponent(title1)
	window.location.href = "orpheus://sharepic?picUrl="+encodeURIComponent(picUrl)+"&shareUrl="+encodeURIComponent(redirectUrl)+"&wbDesc="+encodeURIComponent(title1)+"&qqDesc="+encodeURIComponent(title1)

