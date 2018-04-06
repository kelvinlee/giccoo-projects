_CDN = ""
_imgurl = ""
global = {}
main = {}
pre = {}
load = {}

getRandom = (length)->
	return parseInt(Math.random()*(length+1)-1)
window.onload = ->
	# runAnimate()
	if window.navigator.userAgent.indexOf("zhihu") > -1
		sys = "zhihu"
	else
		loadWechatConfig()
		wx.ready ->
			shareContent =
				title: "吾有心语，享，往远方"
				desc: "心之所向，即为远方。"
				link: "https://peugeot.music.163.com/df-5008/"
				imgUrl: "https://peugeot.music.163.com/df-5008/img/ico.jpg"
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
	if TrueW/TrueH >= 0.64
		document.documentElement.className += " iphone4"

	main = new Vue
		el: "#main"
		data:
			homepageShow: true
			mount: false
			loading: false
			lastpage: false
			roomIndex: 0
			rotate: 90
			w: TrueH
			h: TrueW
			maxRoom: 4
			default:
				x: 0
				animated: false
		computed:
			room: ->
				return 'room'
			XY: ->
				return if @.rotate is 90 then "pageY" else "pageX"
		methods:
			changeRoom: ->
				console.log @roomIndex
			moveNext: ->
				console.log "xiayige",@.roomIndex
				@.roomIndex += 1
				if @.roomIndex >= @.maxRoom
					@.roomIndex = @.maxRoom

			movePrev: ->
				console.log "shangyige",@.roomIndex
				@.roomIndex -= 1
				if @.roomIndex <= 0
					@.roomIndex = 0
			start: (evt)->
				touch = evt.touches[0]
				@.default.x = touch[@XY]
			move: (evt)->
				return false if @.default.animated
				touch = evt.touches[0]
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
			@.$el.addEventListener 'touchstart', @.start.bind @
			@.$el.addEventListener 'touchmove', @.move.bind @
			@.$el.addEventListener 'touchend', @.end.bind @
	handleOrientationChange = ->
		TrueH = document.documentElement.clientHeight
		TrueW = document.documentElement.clientWidth
		if mql.matches
			main.rotate = 90
			main.w = TrueH
			main.h = TrueW
		else
			main.rotate = 0
			main.w = TrueW
			main.h = TrueH
		console.log main.rotate
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