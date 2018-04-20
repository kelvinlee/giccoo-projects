_CDN = ""
_imgurl = ""
global = {}
main = {}
pre = {}
load = {}
_learnmorelink = [
	"https://www.zhihu.com/question/268770483"
	"https://www.zhihu.com/question/268770615"
	"https://www.zhihu.com/question/268770266"
]
getRandom = (length)->
	return parseInt(Math.random()*(length+1)-1)
window.onload = ->
	# runAnimate()
	loadWechatConfig()
	wx.ready ->
		shareContent =
			title: "24小时健康享新家"
			desc: "华润漆A+系列，让你轻松24小时入住新家！"
			link: "http://m.giccoo.com/zhihu-huarun/"
			imgUrl: "http://m.giccoo.com/zhihu-huarun/img/ico.jpg"
			success: ->
				# alert "success"
			cancel: ->
				# alert "cancel"
		wx.onMenuShareTimeline shareContent
		wx.onMenuShareAppMessage shareContent
		wx.onMenuShareQQ shareContent
		wx.onMenuShareWeibo shareContent
	init()

init = ->
	TrueH = document.documentElement.clientHeight
	TrueW = document.documentElement.clientWidth
	console.log TrueW,TrueH
	# document.body.style.height = TrueH+"px"
	# document.documentElement.className += " iphone4" if TrueW/TrueH >= 0.64
		

	main = new Vue
		el: "#main"
		data:
			pc: false
			homepageShow: true
			mount: false
			loading: false
			lastpage: false
			roomIndex: 0
			rotate: 90
			w: TrueH
			h: TrueW
			maxRoom: 4
			poping: false
			popImage: ""
			learnmorelink: ""
			popmore: false
			timeAnimate: false
			default:
				x: 0
				animated: false
		computed:
			room: ->
				return 'room'
			XY: ->
				return if @.rotate is 90 then "pageY" else "pageX"
		methods:
			openErr: (index)->
				console.log index
				@.poping = true
				@.popmore = false
				@.popImage = "./img/room-#{index}-pop.png"
				_hmt? and _hmt.push(['_trackEvent', "huarun", "病毒", index, "-"])
			openPop: (index)->
				console.log index
				@.poping = true
				@.popmore = true
				@.popImage = "./img/room-#{index}-learnmore.png"
				@.learnmorelink = _learnmorelink[index-1]
				_hmt? and _hmt.push(['_trackEvent', "huarun", "危害", index, "-"])
			goto: (link)->
				# console.log link
				setTimeout =>
					window.location.href = link
				,100
				_hmt? and _hmt.push(['_trackEvent', "huarun", "了解更多", link, "-"])
			moveNext: ->
				# console.log "xiayige",@.roomIndex
				@.roomIndex += 1
				if @.roomIndex >= @.maxRoom
					@.roomIndex = @.maxRoom

			movePrev: ->
				# console.log "shangyige",@.roomIndex
				@.roomIndex -= 1
				if @.roomIndex <= 0
					@.roomIndex = 0
			start: (evt)->
				console.log evt
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
			@.mount = true
			
			if IsPC()
				@.$el.addEventListener 'mousedown', @.start.bind @
				@.$el.addEventListener 'mousemove', @.move.bind @
				@.$el.addEventListener 'mouseup', @.end.bind @
				@.pc = true
			@.$el.addEventListener 'touchstart', @.start.bind @
			@.$el.addEventListener 'touchmove', @.move.bind @
			@.$el.addEventListener 'touchend', @.end.bind @

			setInterval =>
				@.timeAnimate = true
				setTimeout =>
					@.timeAnimate = false
				,1000
			,3000

	handleOrientationChange = ->
		TrueH = document.documentElement.clientHeight
		TrueW = document.documentElement.clientWidth
		if mql.matches
			main.rotate = 90
			main.w = TrueH
			main.h = TrueW
		else
			main.rotate = 0
			setTimeout ->
				TrueH = document.documentElement.clientHeight
				TrueW = document.documentElement.clientWidth
				main.w = TrueW
				main.h = TrueH
			,1000
		# alert main.rotate
	mql = window.matchMedia('(orientation: portrait)')
	mql.addListener(handleOrientationChange)
	handleOrientationChange()

loadWechatConfig = ->
	url = encodeURIComponent window.location.href.split("#")[0]
	hm = document.createElement('script')
	hm.src = "//api.giccoo.com/api/config?url="+url
	s = document.getElementsByTagName('script')[0]
	s.parentNode.insertBefore hm, s
	return

$_GET = do ->
	url = window.document.location.href.toString()
	u = url.split('?')
	if typeof u[1] == 'string'
		u = u[1].split('&')
		get = {}
		console.log u
		for i in u
			j = i.split('=')
			get[j[0]] = j[1]
		get
	else
		{}

stopWebViewScroll = ->
	overscroll = (el)->
		el.addEventListener 'touchstart', ->
			top = el.scrollTop
			totalScroll = el.scrollHeight
			currentScroll = top + el.offsetHeight
			if top is 0
				el.scrollTop = 1
			else if currentScroll is totalScroll
				el.scrollTop = top-1
			# alert el.scrollTop
		el.addEventListener "touchmove", (evt)->
			if el.offsetHeight < el.scrollHeight
				evt._isScroller = true
	document.addEventListener "touchmove", (evt)->
		unless evt._isScroller
			evt.preventDefault()
	# console.log document.querySelectorAll(".touch")
	for el in document.querySelectorAll(".touch")
		overscroll el

IsPC = ->
	userAgentInfo = navigator.userAgent
	Agents = new Array('Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod')
	flag = true
	v = 0
	while v < Agents.length
		if userAgentInfo.indexOf(Agents[v]) > 0
			flag = false
			break
		v++
	flag	