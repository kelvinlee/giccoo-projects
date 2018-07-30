class UGC
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
	_progress: 0
	startTime: null
	constructor: (arg)->
		@.opts =
			el: "game"
			w: 6961
			h: 1344
			trueH: 1344
			count: 6
			speed: 1
			alpha: 0.8
			defaultShow: true
			class: ""
			fillColor: 0x66CCFF
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
			"#{_CDN}img/bg.jpg"
			"#{_CDN}img/note.png"
			"#{_CDN}img/text-1.png"
			"#{_CDN}img/tv-front.png"
			"#{_CDN}img/tv-bg.png"
			"#{_CDN}img/tv-note.png"
			"#{_CDN}img/cd-note.png"
		])
		.load(@.build.bind(@))
		@.default.MH = @.opts.h * 0.65
	build: ->
		@.box = box = new Container()
		bg = new Sprite getTe "#{_CDN}img/bg.jpg"
		box.addChild bg
		@.note = note = new Sprite getTe "#{_CDN}img/note.png"
		note.x = 750 - note.width - 40
		note.y = @.opts.trueH - note.height
		box.addChild note
		text1 = new Sprite getTe "#{_CDN}img/text-1.png"
		text1.x = 40
		text1.y = 140
		box.addChild text1

		tv = new Container()
		tvbg = new Sprite getTe "#{_CDN}img/tv-bg.png"
		tvFront = new Sprite getTe "#{_CDN}img/tv-front.png"
		tv.addChild tvbg,tvFront
		tv.x = 1800
		tv.y = 440
		box.addChild tv
		tvNote = new Sprite getTe "#{_CDN}img/tv-note.png"
		tvNote.x = 1800 - 76
		tvNote.y = 440 - tvNote.height + 70
		box.addChild tvNote

		cdNote = new Sprite getTe "#{_CDN}img/cd-note.png"
		cdNote.x = 2520
		cdNote.y = 650
		box.addChild cdNote

		@.stage.addChild box
	nextPage: ->
		to = @.box.x - 750
		TweenMax.to @.box,0.4,
			x: to
	prevPage: ->
		to = @.box.x + 750
		TweenMax.to @.box,0.4,
			x: to