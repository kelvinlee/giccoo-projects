_CDN = "//image.giccoo.com/projects/zhihu-wow8/"

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
		copyNumber =
			"death": 4
			"demon": 1
			"dryad": 2
			"huntsman": 2
			"mage": 2
			"monk": 3
			"paladin": 3
			"pastor": 3
			"shaman": 2
			"stalker": 3
			"warlock": 2
			"warrior": 2
		random = Math.floor(Math.random()*copyNumber[@.opts.name]+1)
		PIXI.loader.add([
			"#{_CDN}img/r-#{@.opts.name}.jpg"
			"#{_CDN}img/r-#{@.opts.name}-copy-1.png"
			"#{_CDN}img/small-logo.png"
			"#{_CDN}img/qrcode.png"
		])
		.load(@.build.bind(@))
		@.default.MH = @.opts.h * 0.65
	build: ->
		bg = new Sprite getTe "#{_CDN}img/r-#{@.opts.name}.jpg"
		text = new Sprite getTe "#{_CDN}img/r-#{@.opts.name}-copy-1.png"
		@.logo = logo = new Sprite getTe "#{_CDN}img/small-logo.png"
		@.qrcode = qrcode = new Sprite getTe "#{_CDN}img/qrcode.png"
		# qrcode.y = bg.height - qrcode.height - 200
		@.stage.addChild bg,text,logo,qrcode
		
		@.app.renderer.render @.app.stage
		main.ugc = @.app.view.toDataURL()

		qrcode.alpha = 0
		logo.alpha = 0
	save: ->
		@.qrcode.alpha = 0
		@.logo.alpha = 1
		
		TweenMax.to @.qrcode,0.2,
			alpha: 1
			delay: 1
			onComplete: =>
				@.app.renderer.render @.app.stage
				main.ugcsave = @.app.view.toDataURL()
				@.hide()
		# @.qrcode.visible = false
		# @.logo.visible = false
	hide: ->
		@.qrcode.alpha = 0
		@.logo.alpha = 0

