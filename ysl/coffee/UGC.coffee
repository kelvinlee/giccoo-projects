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
	y: 0
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
	firstTime: (move)->
		return false if @long?
		@long = new PIXI.Application
			width: @.opts.w
			height: @.opts.h * 3.9 + Math.abs move
			transparent: true
			preserveDrawingBuffer: true
			# forceCanvas: true
		@.longC = new Container()
		@.long.stage.addChild @.longC
	takeUGC: (move = 0)->
		@.app.renderer.render @.app.stage
		data = @.app.view.toDataURL()

		page1 = new PIXI.Sprite.fromImage(data)
		page1.y = @.longC.height + move
		page1.texture.baseTexture.on 'loaded', =>
			@.longC.addChild page1
			@.sendUGC()
		@.y++
	sendUGC: ->
		if @.y >= 4
			qrcode = new Spr(_CDN+"img/qr.jpg")
			qrcode.y = @.longC.height
			@long.stage.addChild qrcode
		@.long.renderer.render @.long.stage

