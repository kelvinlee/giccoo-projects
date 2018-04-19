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
randomSort = (arr, newArr) ->
  if arr.length == 1
    newArr.push arr[0]
    return newArr
  random = Math.ceil(Math.random() * arr.length) - 1
  newArr.push arr[random]
  arr.splice random, 1
  randomSort arr, newArr

_answersList = [
	{lang:"cn",srcs:["//image.giccoo.com/projects/meizu-music/mp3/1-1.mp3","//image.giccoo.com/projects/meizu-music/mp3/1-2.mp3"],name:"遇见",wrong:"未,怀,始,刚,好,念,你,为,了,来,开,懂,的,我,乐,雨"}
	{lang:"cn",srcs:["//image.giccoo.com/projects/meizu-music/mp3/2-1.mp3","//image.giccoo.com/projects/meizu-music/mp3/2-2.mp3"],name:"隐形的翅膀",wrong:"半,挥,的,女,纪,天,左,人,边,着,使,念,孩"}
	{lang:"cn",srcs:["//image.giccoo.com/projects/meizu-music/mp3/3-1.mp3","//image.giccoo.com/projects/meizu-music/mp3/3-2.mp3"],name:"童话",wrong:"堂,镇,少,定,天,心,的,空,第,年,一,伤,次,边,定,里"}
	{lang:"cn",srcs:["//image.giccoo.com/projects/meizu-music/mp3/4-1.mp3","//image.giccoo.com/projects/meizu-music/mp3/4-2.mp3"],name:"思念是一种病",wrong:"爱,念,头,我,走,空,豆,格,红,豆,别,白"}
	{lang:"cn",srcs:["//image.giccoo.com/projects/meizu-music/mp3/5-1.mp3","//image.giccoo.com/projects/meizu-music/mp3/5-2.mp3"],name:"传奇",wrong:"风,笑,匆,年,约,往,向,定,迹,说,吹,浪,忘,书,那,麦"}
	{lang:"cn",srcs:["//image.giccoo.com/projects/meizu-music/mp3/6-1.mp3","//image.giccoo.com/projects/meizu-music/mp3/6-2.mp3"],name:"夜空中最亮的星",wrong:"梦,光,灿,子,心,闪,忆,闪,追,烂,赤"}
	{lang:"cn",srcs:["//image.giccoo.com/projects/meizu-music/mp3/8-1.mp3","//image.giccoo.com/projects/meizu-music/mp3/8-2.mp3"],name:"我的歌声里",wrong:"天,劲,方,几,只,曲,你,圆,金,乎,她,空,在"}
	{lang:"cn",srcs:["//image.giccoo.com/projects/meizu-music/mp3/9-1.mp3","//image.giccoo.com/projects/meizu-music/mp3/9-2.mp3"],name:"理想三旬",wrong:"人,月,四,初,天,梦,最,的,追,途,中,行,生,五"}
	{lang:"cn",srcs:["//image.giccoo.com/projects/meizu-music/mp3/10-1.mp3","//image.giccoo.com/projects/meizu-music/mp3/10-2.mp3"],name:"平凡之路",wrong:"生,歌,天,花,凡,人,城,乎,空,者,也,的,如,夏"}
	{lang:"cn",srcs:["//image.giccoo.com/projects/meizu-music/mp3/11-1.mp3","//image.giccoo.com/projects/meizu-music/mp3/11-2.mp3"],name:"成都",wrong:"重,和,桥,川,空,森,城,计,林,勒,都,安,庆,四,和,桥"}
	{lang:"en",srcs:["//image.giccoo.com/projects/meizu-music/mp3/12-1.mp3","//image.giccoo.com/projects/meizu-music/mp3/12-2.mp3"],name:"Numb",wrong:"what,in,new,end,divide,i've,done,the"}
	{lang:"en",srcs:["//image.giccoo.com/projects/meizu-music/mp3/13-1.mp3","//image.giccoo.com/projects/meizu-music/mp3/13-2.mp3"],name:"You Raise me up",wrong:"my,love,home,one,Yours"}
	{lang:"en",srcs:["//image.giccoo.com/projects/meizu-music/mp3/14-1.mp3","//image.giccoo.com/projects/meizu-music/mp3/14-2.mp3"],name:"Baby",wrong:"don't,love,my,you,shape,of,cry,everytime"}
	{lang:"en",srcs:["//image.giccoo.com/projects/meizu-music/mp3/15-1.mp3","//image.giccoo.com/projects/meizu-music/mp3/15-2.mp3"],name:"Rolling In The Deep",wrong:"end,Someone,You,skyfall,Like"}
	{lang:"en",srcs:["//image.giccoo.com/projects/meizu-music/mp3/16-1.mp3","//image.giccoo.com/projects/meizu-music/mp3/16-2.mp3"],name:"see you again",wrong:"faded,yours,funk,apologize,I'm,uptown"}
]
answersList = []
randomSort(_answersList,answersList)
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
	# init()

init = ->
	TrueH = document.documentElement.clientHeight
	TrueW = document.documentElement.clientWidth
	console.log TrueW,TrueH
	# document.body.style.height = TrueH+"px"
	# document.documentElement.className += " iphone4" if TrueW/TrueH >= 0.64
	timein = null
	load = new Vue
		el: "#loadtext"
		data:
			progress: 0
		mounted: ->
			# @.progress = 10
			timein = setInterval =>
				@.progress += 3
				if @.progress >= 100
					@.progress = 100
					clearInterval timein
					main.mount = true
					setTimeout ->
						main.homepageShow = true
						document.getElementById('load').style.display = "none"
					,100
			,1000/20

	main = new Vue
		el: "#main"
		data:
			homepageShow: false
			gamepageShow: false
			gameNotePop: false
			ugcpageShow: false
			notepageShow: false
			mount: false
			loading: false
			w: TrueW
			h: TrueH
			audio: null
			nickname: "test"
			gameMusicLink: ""
			markList: "??????????????????"
			answerName: ""
			lang: "cn"
			answers: [-1,-1,-1,-1,-1]
			now: 0
			MAX: 4
			answer: []
			gameStarted: false
			showAnswerPop: false
			playing: false
			date:
				start: null
				int: null
			second: 16
			timeout: null
		computed:
			XY: ->
				return "pageX"
		methods:
			checkMusic: ->
			startGame: ->
				if @.nickname is ""
					alert "请输入你的名字"
					return false
				@.homepageShow = false
				@.gamepageShow = true
				@.gameNotePop = true
			gameStart: ->
				@.gameNotePop = false
				@.gameStarted = true
				@.now = 0
				@.gameRun()
			gameRun: ->
				@.second = 16
				@.answerName = ""
				@.answer = []
				clearTimeout @.timeout
				@.timeout = null
				temp = []
				@.markList = []
				@.lang = answersList[@.now].lang
				if answersList[@.now].lang is "cn"
					temp = answersList[@.now].wrong.split(",")
					temp = temp.concat answersList[@.now].name.split("")
				else
					temp = answersList[@.now].wrong.split(",")
					temp = temp.concat answersList[@.now].name.split(" ")
				@.audio.src = answersList[@.now].srcs[if Math.random() > 0.5 then 0 else 1]
				randomSort(temp,@.markList)
				console.log "start time run"
				@.date.start = new Date()
				@.runtime()
			runtime: ->
				clearInterval @.date.int
				@.date.int = null
				@.date.int = setInterval =>
					@.second = Math.floor 16 - (new Date().getTime() - @.date.start.getTime())/1000
					@.second = 0 if @.second < 0
					# console.log @.second
				,1000/20
				@.timeout = setTimeout =>
					@.timeoutshow()
				,15000
				# @.audio.addEventListener 'timeupdate', @.timeupdate.bind @
				@.audio.currentTime = 0
				@.audio.play()
			timeupdate: (evt)->
				console.log evt
			timeoutshow: ->
				@.answers[@.now] = 2
				answer = answersList[@.now]
				@.showAnswer(answer.name)
			selectMark: (mark)->
				return false if @.showAnswerPop
				@.answer.push mark
			delectOne: ->
				return false if @.showAnswerPop
				@.answer.pop()
			checkAnswer: ->
				return false if @.answers[@.now] > -1
				answer = answersList[@.now]
				my = ""
				if answer.lang is "cn"
					my = @.answer.join('')
				else
					my = @.answer.join(' ')
				console.log my,answer.name
				@.answers[@.now] = if my is answer.name then 1 else 0
				@.showAnswer(answer.name)
			showAnswer: (answerName)->
				clearTimeout @.timeout
				@.timeout = null
				clearInterval @.date.int
				@.date.int = null
				@answerName = answerName
				console.log @.timeout
				@.showAnswerPop = true
				# if @.answers[@.now] is 1
				# else
			nextMusic: ->
				@.now++
				@.showAnswerPop = false
				@.gameRun()
			gameEnd: ->
				@.homepageShow = false
				@.gamepageShow = false
				soure = 100
				for item in main.answers
					soure -= 20 if item isnt 1
				console.log "soure:",soure
		mounted: ($el,e)->
			# @.mount = true
			# @.gamepageShow = true
			# @.gameNotePop = true
			@.audio = document.getElementById("audio")
			@.audio.addEventListener "play", =>
				@.playing = true
			@.audio.addEventListener "ended", =>
				@.playing = false
			console.log answersList,@.audio

			

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