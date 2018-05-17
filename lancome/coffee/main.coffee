 # @codekit-prepend "../../libs/coffee/randomSort"
 # @codekit-prepend "../../libs/coffee/requestanimation"
 # @codekit-prepend "../../libs/coffee/loadWechatConfig"

_CDN = ""
_imgurl = ""
global = {}
main = {}
pre = {}
load = {}
sys = null
imageurl = "//api.giccoo.com/api/upload/image64/"

textsBox = [
	[["你是不识孤独滋味的少年","永远意气风发","永远活力四射","抹上眼霜 你就是最亮的星"]]
	[["你的感知神经似乎不太敏感","偶尔空虚，经常充实才是生活常态","寂寞的时候默念咒语","把大家都变成“发光”眼霜你就不孤独啦"],["你有时候也想45度静静仰望天空","但眼泪似乎不太掉得下来","孤独的感觉总是像龙卷风一样袭来","不过还好 “发光”眼霜是你的防护盾"]]
	[["好险","你距离显性孤独人口只差最后一步","你希望微信能被秒回","也希望朋友圈都有人点赞","但大家似乎都不太给面子"],["或许你有酒","或许你有远方","可是有时候","你还是愿意待在家里","做一只听着歌默默生长的蘑菇"]]
	[["你像一只小刺猬","想露出软软的肚皮","被温柔抚摸","可是很多人惧怕你坚硬的刺","而选择远离"],["「你怎么会喜欢这个」","「我觉得那个地方不好玩」","「一把年纪该结婚了」","永远有人在喋喋不休","而你只想让他们闭嘴"]]
	[["在努力，在奔跑","一个人的路总是艰苦","可是一个人","也更加恣肆，更加自由","不如把孤独当成甜品 一口吃掉"],["你是个总觉得差一点点的人","差一点点就饱了","差一点点就满足了","连百分百的孤独感","都觉得差了一点点"]]
	[["你幻想自己是一只鱼","以为7秒就能忘记那种寂寞的感觉 ","其实你只是个忘用眼霜的人类","黯淡到连自己都快被遗忘"]]
]
scoreBox = [
	[11,17,1],
	[2,5,12],
	[7,9,23]
]
scoreInfinity = false
scoreZore = false
scoreMusicTime = [8,14,28]
scoreShareTimes= [20,15,6]
myTimeLine = [20,21,22,23,24,0,1,2,3,4]
# shareTimesLine = [20,15,6]

myTime = 20 # 分享时间
myTimeName = "晚上"
myTimeName = "凌晨" if myTime <= 5
myTimeDetail = "20:25" # 详细的分享时间
# shareTimes = 30 # 分享次数
# numberWith = 24249 # 多少人
musicName = "夜空中最亮的星" # 一起听的歌
shareMusicName = "" # 分享过的音乐 cheapest flight
canvasImgs = [
	"img/star.png"
	"img/answer-1-bg.jpg"
	"img/answer-1-mark-bg.jpg"
	"img/answer-2-bg.jpg"
	"img/mark-1.png"
	"img/mark-2.png"
	"img/item-elephant.png"
	"img/item-owl.png"
	"img/item-panda.png"
	"img/symbol.png"
]

getRandom = (length)->
	return parseInt(Math.random()*(length+1)-1)
window.onload = ->
	# runAnimate()
	if window.navigator.userAgent.indexOf("NeteaseMusic") > -1
		sys = "NeteaseMusic"
	else
		loadWechatConfig()
		wx.ready ->
			console.log "wx ready"
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
	smaller = (TrueW/TrueH-640/1138)
	load = new Vue
		el: "#loadtext"
		data:
			progress: 0
			mount: false
			progressOn: 0
		mounted: ->
			# @.progress = 10
			@.mount = true
			createStar()
			timein = setInterval =>
				@.progress += 3
				@.progress = @.progressOn if @.progress >= @.progressOn
				if @.progress >= 100
					@.progress = 100
					clearInterval timein
					main.mount = true
					setTimeout ->
						# main.ugcpageShow = true
						main.homepageShow = true
						# document.getElementById('load').style.display = "none"
						document.getElementById('load').className += " fadeOut animated"
						setTimeout =>
							document.getElementById('load').style.display = "none"
						,520
					,100
			,1000/20

	main = new Vue
		el: "#main"
		data:
			pc: false
			homepageShow: false
			answerPageShow: false
			ugcPageShow: false
			waitPageShow: false
			lastPageShow: false
			waitPageBox: false
			mount: false
			audio: null
			w: TrueW
			h: TrueH
			smaller: smaller
			now: 0
			answerCanvas: null
			score: 0
			scorebg: 1
			musiclink: ""
			bgmlink: "//image.giccoo.com/projects/lancome/mp3/bgm.mp3"
			playing: false
			bgmplaying: false
			ugc: null
			ugcbg: null
			wy: false
			wx: false
			shareImageLink: ""
			questionMark: 0
			answerList: [
				{
					question: ["最近一次#{myTimeName}#{myTimeDetail}还在听歌的你，觉得那时谁会陪着你？"]
					answers: [
						"飞累了，借你家阳台<br/>歇歇的猫头鹰",
						"冰箱里那只<br/>舔着冰淇淋的蠢大象",
						"墙角边偷偷涂<br/>兰蔻“发光”眼霜的大熊猫"
					]
				},{
					question: 
						[
							"那一天，云村和你一起在听《#{musicName}》的人，比英国的晴天还少；你觉得他们那时在干什么？"
							"那一天，云村和你一起在听《#{musicName}》的人，多到服务器瘫痪；你觉得他们那时在干什么？"
							"那一天，云村和你一起在听《#{musicName}》的人，和大迁徙时的角马一样多；你觉得他们那时在干什么？"
							"那一天，云村和你一起在听《#{musicName}》的人，比理工大的女生还少。你觉得他们那时在干什么？"
						]
					answers: [
						"敲击键盘",
						"窃窃私语聊天",
						"刷手机"
					]
				},{
					question: [
						if shareMusicName is "" then "最近都没分享过歌曲的你，如果分享，觉得谁会点开听？" else "之前从云音乐分享过一首《#{shareMusicName}》你觉得谁点开听过？"
					]
					answers: [
						"最想让TA听到的那个人",
						"和我一样喜欢这类曲风的闺蜜",
						"我才不care有没有人点开听"
					]
				}
			]
			answers: [-1,-1,-1]
		# computed:
		methods:
			playbgm: ->
				@playing = !@playing
				@bgmplaying = !@bgmplaying
				if @playing
					document.getElementById("bgm").play()
				else
					document.getElementById("bgm").pause()
			audioplay: ->
				@.playing = true
			audiopause: ->
				@.playing = false
			audiomusicplay: ->
				@.audio.pause()
			audiomusicpause: ->
				console.log "music ended:", @.bgmplaying
				@.audio.play() if @.bgmplaying

			runScore: ->
				# 计算得分
				for i in [0...@.answers.length]
					@.score += scoreBox[i][@.answers[i]]
				time = myTimeLine.indexOf(myTime)
				switch time
					when 0
						@.score += scoreMusicTime[0]
					when 1 or 2 or 3
						@.score += scoreMusicTime[0]
					when 4 or 5 or 6
						@.score += scoreMusicTime[1]
					when 7 or 8
						@.score += scoreMusicTime[2]
					when 9
						@.score = "∞"
				@.score = "∞" if scoreInfinity
				if @.score <= 80
					@.score += 16 if @.questionMark is 0
					@.score = 0 if @.questionMark is 1
					@.score += 6 if @.questionMark is 2
					@.score += 20 if @.questionMark is 3
						


				console.log @.score

			createUGC: ->
				ugcC = new buildUGC()
				console.log @.score is "∞" or @.score >= 0
				ugcC.score = if @.score is "∞" or @.score >= 0 then @.score else Math.floor Math.random()*99+1
				# ugcC.score = 99
				# ugcC.texts = textsBox[4][1]
				if @.score is "∞"
					ugcC.texts = textsBox[textsBox.length-1][0]
					@.scorebg = 6
				else if @.score <= 0
					ugcC.texts = textsBox[0][0]
					@.scorebg = 1
				else if @.score < 40
					box = textsBox[1]
					ugcC.texts = box[Math.floor(Math.random()*box.length)]
					@.scorebg = 2
				else if @.score < 60
					box = textsBox[2]
					ugcC.texts = box[Math.floor(Math.random()*box.length)]
					@.scorebg = 3
				else if @.score < 80
					box = textsBox[3]
					ugcC.texts = box[Math.floor(Math.random()*box.length)]
					@.scorebg = 4
				else if @.score <= 100
					box = textsBox[4]
					ugcC.texts = box[Math.floor(Math.random()*box.length)]
					@.scorebg = 5
				else
					ugcC.texts = textsBox[0][0]
					@.scorebg = 1
				
				ugcC.init =>
					@.ugcbg = ugcC.app.renderer.extract.canvas().toDataURL()
					ugcC.qr =>
						setTimeout =>
							@.ugc = ugcC.app.renderer.extract.base64()
						,100
				,@.scorebg
				ugcC.app.view.style.display = "none"
			upload: ->
				# console.log "upload:"
				image = @.ugc
				data = {
					image: image
					folder: "lancome"
				}
				unless image?
					return main.faild()
				axios.post imageurl,data
				.then (msg)->
					if msg.data.recode is 200
						main.success(msg.data)
					else
						main.faild()
				.catch (e)->
					# alert e
					main.faild()
			ask: ->
				# 获取网易云数据
				axios.get "//qa-ysr.igame.163.com/api/activity/lancome/userInfo"
				.then (msg)=>
					alert JSON.stringify msg.data
				.catch (err)->
					alert err
				
			success: (data)->
				@.shareImageLink = data.info
				neteaseShareImage()
				setTimeout =>
					@.lastPageShow = true
				,3000
			faild: ->
				@.lastPageShow = true
			buildUGC: ->
				@.runScore()

				@.waitPageShow = true
				# setTimeout =>
				# 	@.waitPageShow = false
				# 	@.ugcPageShow = true
				# ,3000
				@.createUGC()
			gotoUGC: ->
				@.waitPageBox = true
				setTimeout =>
					@.waitPageShow = false
					@.ugcPageShow = true
				,7000
			next: ->
				@.audio.play() if @.bgmplaying
				return false if @.answers[@.now] <= -1
				if @.now >= 2
					console.log "Done goto ugc"
					@.buildUGC()
				else
					main.answerCanvas.nextAnswer()
					@.now++
					@.homepageShow = false
			
			playSong: (i)->
				@.musiclink = "./mp3/mp3-#{i}.mp3"
				setTimeout =>
					@.audiomusic.play()
				,1000/30

			select: (index)->
				console.log index
				@.answers[@.now] = index
				Vue.set @.answers,@.now,index
				@.answerCanvas.select index

			gotoAnswer: ->
				# createAnswer()
				return false if not @.wy
				@.answerCanvas.init()
				@.answerPageShow = true
				stars = []

		mounted: ($el,e)->
			if sys is "NeteaseMusic"
				@.wy = true
			@.mount = true
			@.questionMark = Math.floor(Math.random()*@.answerList[1].question.length)
			@.audio = document.getElementById "bgm"
			@.audiomusic = document.getElementById "music"
			# @.answerPageShow = true
			@.answerCanvas = new createAnswer()

			@.audio.addEventListener "play", @.audioplay.bind(@) if @.audio
			@.audio.addEventListener "pause", @.audiopause.bind(@) if @.audio
			@.audio.addEventListener "ended", @.audiopause.bind(@) if @.audio
			@.audiomusic.addEventListener "play", @.audiomusicplay.bind(@) if @.audiomusic
			@.audiomusic.addEventListener "ended", @.audiomusicpause.bind(@) if @.audiomusic
			document.addEventListener "WeixinJSBridgeReady",=>
				@.wx = true
			,false

class buildUGC
	app: null
	callback: null
	score: 0
	id: 1
	texts: ["你是个总觉得差一点点的人","差一点点就饱了","差一点点就满足了","连百分百的孤独感都觉得差了一点点"]
	build: ->
		bg = new PIXI.Sprite PIXI.loader.resources["img/ugc-bg-#{@.id}.jpg"].texture

		title = new PIXI.Text('你的孤独指数是：',{fontSize: 30, fill : 0x2d799b, align : 'left'});
		title.x = 105
		title.y = 200

		score = new PIXI.Text( @.score,{fontSize: 115, fill : 0x2d799b, align : 'left'});
		score.x = 350
		score.y = 200 - (115-15)/2

		@.app.stage.addChild bg,title,score
		lastY = 0
		for index in [0...@.texts.length]
			text = @.texts[index]
			continue if text is "都觉得差了一点点" and @.score is 100
			t = new PIXI.Text(text ,{fontWeight: "lighter", fontSize: 24, fill : 0x2d799b, align : 'left'});
			t.x = 105
			lastY = t.y = score.y + 115 + 10 + 24*2*index
			@.app.stage.addChild t

		last = new PIXI.Text("兰蔻，陪你度过漫漫长夜" ,{fontSize: 30, fill : 0x2d799b, align : 'left'});
		last.x = 105
		last.y = lastY + 24 + 30
		@.app.stage.addChild last

		qr = new PIXI.Sprite PIXI.loader.resources["img/ugc-qr.png"].texture
		qr.x = 430
		qr.y = 706

		@.app.stage.addChild qr

		@.app.renderer.render @.app.stage

		@.callback()
	qr: (callback)->
		callback()
	init: (callback,id)->
		@.callback = callback
		@.id = id
		@app = new PIXI.Application
			width: 640
			height: 1138
			transparent: true
			preserveDrawingBuffer: true
		@.app.view.className = "ugcCanvas"
		document.getElementById('ugcbg').appendChild @.app.view
		PIXI.loader.add([
			"img/ugc-bg-#{id}.jpg"
			"img/ugc-qr.png"
		]).load(@.build.bind(@))

stars = []
appStar = []
createStar = ->
	appStar = new PIXI.Application
		width: 640
		height: 1138
		transparent: true
	console.log appStar.view.className = "fadeIn animated"
	
	build = =>
		for i in [0...20]
			star = new PIXI.Sprite PIXI.loader.resources["img/star.png"].texture
			star.x = Math.random()*640
			star.y = Math.random()*1138
			star.anchor.set(0.5,0.5)
			size = (Math.random()*80+20)/100
			star.scale.set(size,size)
			star.rotation = 0
			star.v = size
			star.life = 60*(Math.random()*9+1)
			star.lifeDefault = 60*(Math.random()*12+3)
			stars.push star
			appStar.stage.addChild star
			circle = new PIXI.Graphics()
			circle.beginFill([0xce64e5,0x43d3aa,0x888a76][i%3])
			circle.drawCircle(0, 0, 3)
			circle.endFill()
			circle.scale.set(size,size)
			circle.rotation = 0
			circle.v = size
			circle.x = Math.random()*640
			circle.y = Math.random()*1138
			circle.life = 60*(Math.random()*9+1)
			circle.lifeDefault = 60*(Math.random()*12+3)
			stars.push circle


			appStar.stage.addChild circle

		appStar.ticker.add gameLoop
		document.getElementById('stars').appendChild appStar.view
	gameLoop = (delta)=>
		# console.log 60/delta
		return false unless stars.length > 0
		for star in stars
			star.rotation = 0 if star.rotation >= 1
			star.rotation += 0.1 * delta * star.v
			star.life -= 1
			if star.life <= 0
				star.alpha -= 0.02 * delta
			else if star.alpha > 0 and star.alpha <= 1
				star.alpha += 0.05 * delta
			if star.alpha <= 0
				star.alpha = 0.05 * delta
				star.life = star.lifeDefault

	n = 0
	PIXI.loader.add(canvasImgs).load(build).onProgress.add =>
		n++
		load.progressOn = Math.floor(n/canvasImgs.length*100)
		# console.log Math.floor(n/canvasImgs.length*100)

ansStar = []
mark = null

class createAnswer
	ansStar : null
	moving : true
	moving2: true
	scaleP : null
	XY : null
	dom: {}
	noreset: false
	cache: null
	tween: null
	answers: [-1,-1,-1]
	t: 0
	# 重设灯光位置
	reset: ->
		return false if @.noreset
		size = Math.floor(Math.random() * 0.8+1.2)
		@.scaleP.x = size
		@.scaleP.y = size
		@.XY.x = Math.floor(Math.random() * 600)
		@.XY.y = Math.floor(Math.random() * 600)
	
	gameLoop2: (delta)->
		return false unless @.moving2
		bg = @.dom.bg2
		if bg.valpha <= 0
			bg.alpha -= 0.01 * delta
			bg.x += -1 * delta
			if bg.alpha <= 0
				@.moving = false
				@.answer2Over()

		if @.dom.bg3? and @.dom.bg3.x >= 0
			@.dom.bg3.x += -1 * delta
			@.dom.bg3.alpha += 0.02 * delta
			@.dom.bg3.x = 0 if @.dom.bg3.x <= 0

	gameLoop: (delta)->
		# console.log "1"
		return false unless @.moving
		mark = @.dom.mark
		mark.x += (@.XY.x - mark.x) * 0.05 * delta
		mark.y += (@.XY.y - mark.y) * 0.05 * delta
		mark.scale.x += (@.scaleP.x - mark.scale.x) * 0.05 * delta
		mark.scale.y += (@.scaleP.y - mark.scale.y) * 0.05 * delta
		if @.dom.page1.valpha <= 0
			@.dom.page1.alpha -= 0.02 * delta
			if @.dom.page1.alpha <= 0
				@.moving = false
				@.answer1Over()

		if @.dom.page1.vscale >= 2
			bg = @.dom.page1
			# bg = @.dom.bg
			# abg = @.dom.answer1bg
			# mark = @.dom.mark
			# mark2 = @.dom.mark2
			bg.scale.x += (bg.vscale - bg.scale.x) * 0.05 * delta
			bg.scale.y += (bg.vscale - bg.scale.y) * 0.05 * delta
			bg.x += (bg.vx - bg.x) * 0.05 * delta
			bg.y += (bg.vy - bg.y) * 0.05 * delta
			# abg.scale.x = bg.scale.x
			# abg.scale.y = bg.scale.y
			# abg.x = bg.x
			# abg.y = bg.y
			# mark.alpha -= 0.05 * delta
			# mark2.alpha -= 0.05 * delta
		# answer1 = @.dom.answer11
		for answer1 in [@.dom.answer11,@.dom.answer12,@.dom.answer13]
			if answer1.valpha
				answer1.alpha = 1 if answer1.alpha >= 1
				answer1.alpha += 0.05 * delta
			else
				answer1.alpha = 0 if answer1.alpha <= 0
				answer1.alpha -= 0.05 * delta

		if (Math.abs(mark.x - @.XY.x) < 1)
			@.reset()
	
	# 移除第二题背景
	answer2Over: ->
		@.moving2 = false
		@.ansStar.stage.removeChild @.dom.bg2,@.dom.music
		@.ansStar.ticker.remove @.gameLoop2
		Tn {x:0},{x:100},600, (res)=>
			@.dom.timeline.alpha = res.x/100

	# 移除第一题背景
	answer1Over: ->
		console.log "answer1Over"
		@.ansStar.stage.removeChild @.dom.bg,@.dom.mark,@.dom.mark2,@.dom.answer1bg
		@.ansStar.ticker.remove @.gameLoop
		@.ansStar.ticker.add @.gameLoop2.bind @

	# 创建第三题背景
	build3: ->
		@.t = 2 # need remove
		@.dom.bg2.valpha = 0 if @.dom.bg2?

		bg = @.dom.bg3 = new PIXI.Sprite PIXI.loader.resources["img/answer-3-bg.jpg"].texture
		bg.alpha = 0.6
		bg.x = 100
		@.ansStar.stage.addChildAt @.dom.bg3,0

		screen = @.dom.screen = new PIXI.Container()
		timeline = @.dom.timeline = new PIXI.Sprite PIXI.loader.resources["img/mobile-timeline.png"].texture
		timeline.x = 220
		timeline.y = 565
		timeline.alpha = 0

		timeline1 = @.dom.timeline1 = new PIXI.Sprite PIXI.loader.resources["img/mobile-answer.json"].textures['mobile-answer-1.png']
		timeline1.x = 272
		timeline1.y = 685
		timeline1.alpha = 0

		timeline2 = @.dom.timeline2 = new PIXI.Sprite PIXI.loader.resources["img/mobile-answer.json"].textures['mobile-answer-2.png']
		timeline2.x = 272
		timeline2.y = 685
		timeline2.alpha = 0

		timeline3 = @.dom.timeline3 = new PIXI.Sprite PIXI.loader.resources["img/mobile-answer.json"].textures['mobile-answer-3.png']
		timeline3.x = 272
		timeline3.y = 685
		timeline3.alpha = 0

		screen.addChild timeline,timeline1,timeline2,timeline3
		@.ansStar.stage.addChild screen

	# 创建第二题背景
	build2: ->
		@.dom.page1.vscale = 2.5
		@.dom.page1.vx = -100
		@.dom.page1.vy = -1138/5*5.5
		@.dom.page1.valpha = 0

		@.dom.bg2 = new PIXI.Sprite PIXI.loader.resources["img/answer-2-bg.jpg"].texture
		@.ansStar.stage.addChildAt @.dom.bg2,0
		
		music = @.dom.music = new PIXI.Container()
		symbol1 = @.dom.symbol1 = new PIXI.Sprite PIXI.loader.resources["img/symbol.png"].texture
		symbol2 = @.dom.symbol2 = new PIXI.Sprite PIXI.loader.resources["img/symbol.png"].texture
		symbol3 = @.dom.symbol3 = new PIXI.Sprite PIXI.loader.resources["img/symbol.png"].texture
		symbol1.x = 99
		symbol1.y = 690
		symbol2.x = 110
		symbol2.y = 717
		symbol2.scale.x = 0.72
		symbol2.scale.y = 0.72
		symbol2.rotation = 0.3
		symbol3.x = 128
		symbol3.y = 720
		symbol3.scale.x = 0.5
		symbol3.scale.y = 0.5
		symbol3.rotation = -0.4
		symbol1.alpha = 0
		symbol2.alpha = 0
		symbol3.alpha = 0
		music.addChild symbol1,symbol2,symbol3
		@.ansStar.stage.addChild @.dom.music

	# 创建第一题背景
	build: ->
		# background image
		@.dom.bg = new PIXI.Sprite PIXI.loader.resources["img/answer-1-mark-bg.jpg"].texture
		bg = @.dom.bg
		@.dom.page1 = new PIXI.Container()
		@.dom.page1.alpha = 1
		@.dom.answer1bg = new PIXI.Container()
		answer1bg = @.dom.answer1bg
		answer1bg.alpha = 1
		markbg = new PIXI.Sprite PIXI.loader.resources["img/answer-1-bg.jpg"].texture
		@.dom.page1.addChild bg
		# mark background image
		markbg.x = 0
		markbg.y = 0

		@.XY = new PIXI.Point()
		@.XY.x = 446
		@.XY.y = 270
		@.scaleP = new PIXI.Point()
		@.scaleP.x = 1.2
		@.scaleP.y = 1.2
		@.dom.mark = new PIXI.Sprite PIXI.loader.resources["img/mark-1.png"].texture
		@.dom.mark2 = new PIXI.Sprite PIXI.loader.resources["img/mark-2.png"].texture
		mark2 = @.dom.mark2
		mark2.anchor.set(0.5)
		mark2.scale.set(1.4,1)
		mark2.x = 512
		mark2.y = 530
		mark2.visible = false

		mark = @.dom.mark
		mark.x = @.XY.x
		mark.y = @.XY.y
		mark.anchor.set(0.5)
		mark.scale = @.scaleP
		# mark = new PIXI.Container()
		# mark.addChild mark1
		answer1bg.addChild markbg
		answer1bg.mask = mark
		
		@.dom.answer11 = new PIXI.Sprite PIXI.loader.resources["img/item-owl.png"].texture
		@.dom.answer11.anchor.set(0.5)
		@.dom.answer11.x = 450
		@.dom.answer11.y = 310
		@.dom.answer12 = new PIXI.Sprite PIXI.loader.resources["img/item-elephant.png"].texture
		@.dom.answer12.anchor.set(0.5)
		@.dom.answer12.x = 320
		@.dom.answer12.y = 530
		@.dom.answer13 = new PIXI.Sprite PIXI.loader.resources["img/item-panda.png"].texture
		@.dom.answer13.anchor.set(0.5)
		@.dom.answer13.x = 530
		@.dom.answer13.y = 588
		answer1bg.addChild @.dom.answer11,@.dom.answer12,@.dom.answer13

		@.dom.page1.addChild mark,mark2,answer1bg
		@.ansStar.stage.addChild @.dom.page1
		# @.ansStar.stage.addChild 
		# mark.clear()
		@.ansStar.ticker.add @.gameLoop.bind @
	
	# 选择答案变更
	select: (i)->
		@.answers[@.t] = i
		if @.t is 0
			@.dom.answer11.valpha = false
			@.dom.answer12.valpha = false
			@.dom.answer13.valpha = false
			clearTimeout @.cache
			switch i
				when 0
					@.dom.answer11.valpha = true
					# @.dom.mark = new PIXI.Sprite PIXI.loader.resources["img/mark-1.png"].texture
					@.moving = true
					@.noreset = true
					@.XY.x = 446
					@.XY.y = 270
					@.scaleP.x = 1.2
					@.scaleP.y = 1.2
					@.dom.mark.visible = true
					@.dom.mark2.visible = false
					@.dom.answer1bg.mask = @.dom.mark
				when 1
					@.dom.answer12.valpha = true
					@.moving = true
					@.noreset = true
					@.XY.x = 230
					@.XY.y = 420
					@.scaleP.x = 1
					@.scaleP.y = 1
					@.cache = setTimeout =>
						@.dom.mark.visible = false
						@.dom.mark2.visible = true
						@.dom.answer1bg.mask = @.dom.mark2
						# @.ansStar.stage.addChild @.dom.mark2
					,400
				when 2
					@.dom.answer13.valpha = true
					# @.dom.mark = new PIXI.Sprite PIXI.loader.resources["img/mark-1.png"].texture
					@.moving = true
					@.noreset = true
					@.XY.x = 540
					@.XY.y = 540
					@.scaleP.x = 3.0
					@.scaleP.y = 3.0
					@.dom.mark.visible = true
					@.dom.mark2.visible = false
					@.dom.answer1bg.mask = @.dom.mark
		else if @.t is 1
			# console.log @.t
			main.playSong i
			@.tween.stop() if @.tween? and @.tween.stop?
			tempX = {x: 0}
			tween = @.tween = new TWEEN.Tween(tempX)
			.to({x: 100}, 2000)
			.easing(TWEEN.Easing.Cubic.Out)
			.onUpdate =>
				@.dom.symbol1.x = 99 - tempX.x * 0.3
				if tempX.x >= 90
					@.dom.symbol1.alpha = (100-tempX.x)/10 
				else if tempX.x <= 30
					@.dom.symbol1.alpha = (tempX.x-20)/10
				else
					@.dom.symbol1.alpha = 1
				@.dom.symbol2.x = 110 - tempX.x * 0.2
				@.dom.symbol2.alpha = (100-10-tempX.x)/10 if tempX.x >= 90-10
				@.dom.symbol2.alpha = (tempX.x-10)/10 if tempX.x <= 20

				@.dom.symbol3.x = 128 - tempX.x * 0.1
				@.dom.symbol3.alpha = (100-20-tempX.x)/10 if tempX.x >= 90-20
				@.dom.symbol3.alpha = tempX.x/10 if tempX.x <= 10
			.start()

			tempY = {y: 0}
			tween = new TWEEN.Tween(tempY)
			.to({y: -100}, 2000)
			.easing(TWEEN.Easing.Cubic.In)
			.onUpdate =>
				@.dom.symbol1.y = 690+tempY.y*0.5
				@.dom.symbol2.y = 717+tempY.y*0.4
				@.dom.symbol3.y = 720+tempY.y*0.3
			.start()
		else if @.t is 2
			@.dom.timeline1.alpha = 0
			@.dom.timeline2.alpha = 0
			@.dom.timeline3.alpha = 0
			target = null
			switch i
				when 0
					target = @.dom.timeline1
				when 1
					target = @.dom.timeline2
				when 2
					target = @.dom.timeline3
			if target?
				@.tween.stop() if @.tween? and @.tween.stop?
				@.tween = Tn {x: 0},{x: 100},800, (res)=>
					target.alpha = res.x/100
	# 下一题
	nextAnswer: ->
		return false if @.answers[@.t] <= -1
		@.t++
		if @.t is 1
			@.build2()
		if @.t is 2
			@.build3()

	init: ->
		@ansStar = new PIXI.Application
			width: 640
			height: 1138
			transparent: true
		document.getElementById('answer-bg').appendChild @.ansStar.view
		PIXI.loader.add([
			"img/mobile-answer.json"
			"img/answer-3-bg.jpg"
			"img/mobile-timeline.png"
		]).load(@.build.bind(@))

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
