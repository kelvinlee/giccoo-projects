_CDN = "./"

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
			el: "main"
			w: 1080
			h: 1920
			trueH: 1314
			count: 6
			speed: 1
			alpha: 0.8
			defaultShow: true
			class: ""
			name: "death"
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
			"#{_CDN}img/r-#{@.opts.name}.jpg"
			"#{_CDN}img/small-logo.png"
			"#{_CDN}img/qrcode.png"
		])
		.load(@.build.bind(@))
		@.default.MH = @.opts.h * 0.65
	build: ->
		bg = new Sprite getTe "#{_CDN}img/r-#{@.opts.name}.jpg"
		@.logo = logo = new Sprite getTe "#{_CDN}img/small-logo.png"
		@.qrcode = qrcode = new Sprite getTe "#{_CDN}img/qrcode.png"
		qrcode.y = bg.height - qrcode.height - 200
		@.stage.addChild bg,logo,qrcode
		qrcode.visible = false
		logo.visible = false
	save: ->
		@.logo.visible = true
		@.app.renderer.render @.app.stage
		main.ugc = @.app.view.toDataURL()
		@.qrcode.visible = true
		@.app.renderer.render @.app.stage
		main.ugcsave = @.app.view.toDataURL()
		@.qrcode.visible = false
		@.logo.visible = false

