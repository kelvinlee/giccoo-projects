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
		@.qrcode = qrcode = new Spr _CDN+"img/qrcode-"+(if main.white then 'white' else 'black')+".png"
		qrcode.scale.set(640/750,640/750)
		qrcode.x = 68
		qrcode.y = @.opts.h - qrcode.height - 68/2
		qrcode.visible = false

		postCard = new Container()
		logo = Spr _CDN+"img/logo-#{if not main.white then 'white' else 'black'}.png"
		logo.y = 10
		bg = Spr _CDN+"img/envelope.png"
		bg.scale.set(640/750,640/750)
		bg.x = (@.opts.w-bg.width)/2
		mark = Spr _CDN+"img/post-card-mark.png"
		mark.scale.set(640/750,640/750)
		mark.x = (@.opts.w-mark.width)/2
		mn = Spr _CDN+"img/m-"+main.answer1+".png"
		mn.scale.set(640/750,640/750)
		mn.x = (@.opts.w-mark.width)/2 - 10

		nickname = new Text "#{main.nickname}",{fontFamily : 'Arial', fontSize: 32, fontWeight: "bold", fill : 0x000000, letterSpacing: 2, lineHeight: 34}
		nickname.x = 160
		nickname.y = 42

		text = ""
		if main.message is ""
			text = main.messageList[main.messageIndex-1]
		else
			text = main.message
		text = text.replace(/<br\/>/g,"\n")
		message = new Text "#{text}",{fontFamily : 'Arial', fontSize: 22, fill : 0x000000, fontStyle: "italic",fontWeight: "normal", letterSpacing: 0, lineHeight: 34}
		message.x = 160
		message.y = 42 + 34 + 34/2
		if message.height <= 34*2
			message.y += 34
		else if message.height <= 34
			message.y += 34 * 3

		postCard.y = logo.height + logo.y + 5
		postCard.addChild bg, mark, nickname, message, mn
		@.stage.addChild logo, postCard, qrcode
		@.postCard = postCard

		TweenMax.from(postCard,1.2,{alpha:0,y:"-=#{postCard.height+logo.height}",yoyo:true,delay: .7})
		


