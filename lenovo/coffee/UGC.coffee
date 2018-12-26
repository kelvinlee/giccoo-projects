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
		bg = new Spr _CDN+"img/bg2.jpg"
		bg.width = @.opts.w
		bg.height = @.opts.h
		huati = new Spr _CDN+"img/huati.png"
		huati.y = @.opts.h - huati.height
		logo = new Spr _CDN+"img/logo.png"
		logo.y = @.opts.h - logo.height - @.opts.h * 0.015
		file = new Container()
		filecover = new Spr _CDN+"img/filecover.png"
		titlebg = new Spr _CDN+"img/ugc-title.png"
		titlebg.y = 40
		contentimg = new Spr _CDN+"img/ugc-content-#{main.carIndex+1}.png"
		overimg = new Spr _CDN+"img/ugc-content-over-#{main.carIndex+1}.png"


		nickname = new Text "#{main.nickname} ",{fontFamily : 'Arial', fontSize: 32, fontWeight: "normal", fill : 0x6d4222, letterSpacing: 2, lineHeight: 40}
		nickname.x = 122 + (296 - nickname.width)/2
		nickname.y = titlebg.y + (titlebg.height - nickname.height)/2 + 6

		contentimg.y = titlebg.y + titlebg.height 
		overimg.y = contentimg.y
		overimg.visible = false

		text = main.message
		text = text.replace(/<br\/>/g,"\n")
		messageSize = 20
		if text.length <= 15
			messageSize = 26
		message = new Text "#{text} ",{fontFamily : 'Arial', breakWords: true, wordWrapWidth: 505, wordWrap: true, fontSize: messageSize, fill : 0x6d4222, fontStyle: "normal",fontWeight: "normal", letterSpacing: 0, lineHeight: 28}
		# message.width = 500
		message.x = 125
		if text.length <= 15
			message.x = (@.opts.w - message.width)/2
		message.y = contentimg.y + contentimg.height - 40

		btnShare = new Spr _CDN+"img/share-title.png"
		btnReload = new Spr _CDN+"img/btn-reload.png"
		btnMore = new Spr _CDN+"img/btn-more.png"
		console.log message.height
		btnShare.y = message.y + 140 + 20
		btnReload.y = btnShare.y + btnShare.height + 10
		btnReload.x = 120
		btnMore.y = btnShare.y + btnShare.height + 10
		btnMore.x = btnReload.x + btnReload.width + 20
		btnShare.interactive = true
		btnReload.interactive = true
		btnMore.interactive = true
		btnShare.tap = @.share.bind @
		btnReload.tap = ->
			window.location.reload()
		btnMore.tap = ->
			window.location.href = "https://mactivity.lenovo.com.cn/activity/marketing/xyxs/wyy/index.html?pmf_source=P0000000982M0066"

		qr = new Spr _CDN+"img/qr.png"
		qr.y = btnShare.y - btnShare.height + 63
		qr.visible = false

		mark = new Spr _CDN+"img/mark-#{main.yearName}.png"
		if main.yearName is "80"
			mark.y = @.opts.h - mark.height
		else
			mark.y = (@.opts.h - mark.height)/2

		file.addChild filecover, titlebg, overimg, contentimg, nickname, message, btnShare, btnReload, btnMore, qr
		# file.scale.set(0.8,0.8)
		file.y = (@.opts.h - file.height)/2
		if (file.y + file.height) > (huati.y - huati.height*0.5)
			file.y -= huati.height * 0.23
		else
			file.y -= @.opts.h * 0.05
		console.log "Y:",file.y,file.y + file.height,(huati.y + huati.height*0.5)
		if file.y <= 10
			file.y = 10
		@.stage.addChild bg, huati, logo, file, mark
		@.btnShare = btnShare
		@.btnReload = btnReload
		@.btnMore = btnMore
		@.contentimg = contentimg
		@.overimg = overimg
		@.huati = huati
		@.qr = qr
		@.file = file
		@.oldFileY = file.y

	share: ->
		@.btnShare.visible = false
		@.btnReload.visible = false
		@.btnMore.visible = false
		@.huati.visible = false
		@.contentimg.visible = false
		@.qr.visible = true
		@.overimg.visible = true
		@.file.y = (@.opts.h - @.file.height)/2
		main.share()
	shareDone: ->
		@.btnShare.visible = true
		@.btnReload.visible = true
		@.btnMore.visible = true
		@.huati.visible = true
		@.contentimg.visible = true
		@.qr.visible = false
		@.overimg.visible = false
		@.file.y = @.oldFileY


	

		


