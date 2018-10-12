random = 1+parseInt Math.random()*5
# imageList = []

class UGC
	builded: false
	default:
		w: 320
		h: 160
		running: true
	started: false
	over: false
	online: false
	blocks: []
	bottles: []
	enemys: []
	lights: []
	dom: {}
	_progress: 0
	lineMoving: false
	startTime: null
	loadNumber: 0
	constructor: (arg)->
		@.opts =
			el: "main"
			w: 750
			h: 1314
			trueH: 1314
			count: 6
			speed: 1
			alpha: 0.8
			defaultShow: true
			class: ""
			fillColor: 0x66CCFF
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
			forceCanvas: true
		@.app.view.className = @.opts.class if @.opts.class? and @.opts.class isnt ""
		@.stage = @.app.stage
		document.getElementById(@.opts.el).appendChild @.app.view
		console.log "imageList:",imageList.length
		PIXI.loader.add(imageList)
		.use(@.loaditem.bind(@))
		.load(@.build.bind(@))
		@.default.MH = @.opts.h * 0.65
	loaditem: ->
		@.loadNumber++
		loading.progressOn = parseInt @.loadNumber/(imageList.length)*100
		console.log "load:",@.loadNumber,loading.progressOn,@.loadNumber is imageList.length

		if @.loadNumber is imageList.length
			buildUGC.bind(@).call()
			@.opts.callback()
			# @.init()
			# console.log "aa"
			# @.stage.addChild Spr(_CDN+"img/texture.jpg")
	build: ->
		console.log "builded"
		buildUGC.bind(@).call()
		@.opts.callback()
		# @.init()
	init: ->
		nameList = ["","狼","猫","考拉","孔雀","鹿","狗","老虎"]
		colorList = [0xffffff,0x4c7b6d,0x924650,0x487795,0x5b4792,0x916846,0x495779,0x827a5d]
		ugcCont = new Container()
		bgColor = new Graphics()
		# bgColor.beginFill(colorList[main.ugcType])
		# bgColor.drawRect(0,0,640,@.opts.h)

		bg = Spr _CDN+"img/bg#{main.ugcType}.png"
		bg.scale.y = 1.07
		bg.pivot.y = 650
		bg.y = @.opts.h/2 + 77
		text = Spr _CDN+"img/ugc-t-#{main.ugcType}.png"
		people = Spr _CDN+"img/ugc-p-#{main.ugcType}.png"
		people.pivot.y = people.height
		people.pivot.x = 640/2
		light = Spr _CDN+"img/ugc-light.png"
		light.pivot.y = 650
		light.y = @.opts.h/2 + 77
		light.scale.y = 1.07
		title = Spr _CDN+"img/ugc-title.png"
		icon1 = Spr _CDN+"img/icon-ugc-1.png"
		icon2 = Spr _CDN+"img/icon-ugc-2.png"
		qrcode = Spr _CDN+"img/qrcode.png"

		title.y = 80
		people.y = @.opts.h/2 + 97
		people.x = 320
		text.y = people.y + 60
		icon1.y = text.y + text.height + 10
		icon1.x = 60
		icon2.y = text.y + text.height * 2 + 10 * 2
		icon2.x = 60

		musicName = new Container()

		musicName1 = new Text "《#{main.userInfo.songName}》",{fontFamily : 'Arial', fontSize: 26, fontWeight: "bold", fill : 0xffffff, letterSpacing: 4, lineHeight: 34}
		musicName2 = new Text "是你2018年最偏爱的一首歌",{fontFamily : 'Arial', fontSize: 22, fill : 0xffffff, letterSpacing: 4, lineHeight: 34}
		musicName3 = new Text "一共聆听了#{main.userInfo.playCnt}次，在你心中留下了不一样的印记。",{fontFamily : 'Arial', fontSize: 22, fill : 0xffffff, letterSpacing: 4, lineHeight: 34}
		musicName2.y = 4
		musicName2.x = musicName1.width + 5
		musicName3.y = 34

		musicName.addChild musicName1,musicName2,musicName3

		musicName.x = 60 + icon1.width + 20
		musicName.y = icon1.y + 10
		musicName.scale.x = 0.8

		dateName = new Container()

		dateName1 = new Text "#{main.dateText(main.userInfo.mostActiveDay.split(' ')[0])}",{fontFamily : 'Arial', fontSize: 26, fontWeight: "bold", fill : 0xffffff, letterSpacing: 4, lineHeight: 34}
		dateName2 = new Text "对你来说是特别的一天。",{fontFamily : 'Arial', fontSize: 22, fill : 0xffffff, letterSpacing: 4, lineHeight: 34}
		dateName3 = new Text "这一天你或许思绪万千吧。",{fontFamily : 'Arial', fontSize: 22, fill : 0xffffff, letterSpacing: 4, lineHeight: 34}
		dateName2.y = 4
		dateName2.x = dateName1.width + 5
		dateName3.y = 34

		dateName.addChild dateName1,dateName2,dateName3

		dateName.x = 60 + icon2.width + 20
		dateName.y = icon2.y
		dateName.scale.x = 0.8

		anName = new Text nameList[main.ugcType],{fontFamily : 'Arial', fontSize: 56, fill : 0xffffff, letterSpacing: 6, lineHeight: 34}
		anName.y = title.y + title.height + 20
		anName.x = 640/2 - anName.width/2
		anName.scale.x = 0.8
		qrcode.y = @.opts.h - qrcode.height - 20
		
		qrcode.visible = false

		if (anName.y + anName.height) > (people.y - people.height - 20)
			people.scale.set(0.82)

		banner = new Container()
		lastText = Spr _CDN+"img/ugc-last-text.png"
		btnShare = Spr _CDN+"img/btn-share.png"
		btnShare.pivot.x = btnShare.width/2
		btnReg = Spr _CDN+"img/btn-reg.png"
		btnReg.pivot.x = btnShare.width/2
		btnMore = Spr _CDN+"img/btn-more.png"
		btnMore.pivot.x = btnShare.width/2
		btnShare.x = 580/3 - 60
		btnReg.x = 580/3 * 2 - 60
		btnMore.x = 580/3 * 3 - 60
		lastText.y = btnShare.height + 10
		banner.addChild btnShare,btnReg,btnMore,lastText
		banner.y = dateName.y + dateName.height + 20
		console.log @.opts.h, banner.y

		max = dateName.y + dateName.height
		if qrcode.y < max
			ugcCont.y = -20
		qrcode.y = dateName.y + dateName.height + 20
		# 	console.log "smaller"
		# 	text.scale.set(0.8)
		# 	text.x = 320 - text.width/2
		# 	icon1.scale.set(0.8)
		# 	icon1.x += 10
		# 	icon2.scale.set(0.8)
		# 	icon2.x += 10
		# 	moveUp = 90
		# 	icon2.y -= 30 
		# 	icon1.y -= 30 
		# 	musicName.y -= 30 
		# 	dateName.y -= 30 
			# bg.y -= moveUp
			# text.y -= moveUp
			# light.y -= moveUp
			# people.y -= moveUp
			# title.y -= moveUp
			# anName.y -= moveUp



		ugcCont.addChild bgColor,bg,text,people,light,title,icon1,icon2,musicName,dateName,anName,qrcode,banner
		@.stage.addChildAt ugcCont,0

		btnShare.interactive = true
		btnShare.tap = ->
			if banner.visible
				console.log "tap"
				qrcode.visible = true
				banner.visible = false
				main.share()
		btnReg.interactive = true
		btnReg.tap = ->
			if banner.visible
				main.reg()
		btnMore.interactive = true
		btnMore.tap = ->
			if banner.visible
				main.more()

		@.dom.qrcode = qrcode
		@.dom.banner = banner


		# TweenMax.from(title,.5,{alpha:0,y:"-=50",delay: .5})
		# TweenMax.from(anName,.5,{alpha:0,y:"-=50",delay: .7})

		# TweenMax.from(text,.5,{alpha:0,y:"+=50",delay: .5})
		# TweenMax.from(icon1,.6,{alpha:0,y:"+=50",delay: .7})
		# TweenMax.from(musicName,.6,{alpha:0,y:"+=50",delay: .7})
		# TweenMax.from(icon2,.7,{alpha:0,y:"+=50",delay: .9})
		# TweenMax.from(dateName,.7,{alpha:0,y:"+=50",delay: .9})

		# TweenMax.from(banner,.7,{alpha:0,y:"+=50",delay: 1.1})

	back: ->
		@.dom.qrcode.visible = false
		@.dom.banner.visible = true
		


