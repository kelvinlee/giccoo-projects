class CD
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
			w: 750
			h: 750
			trueH: 750
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
			"#{_CDN}img/music-cd.png"
			"#{_CDN}img/music-pointer.png"
		])
		.load(@.build.bind(@))
		@.default.MH = @.opts.h * 0.65
	build: ->
		@.pointer = pointer = new Sprite getTe "#{_CDN}img/music-pointer.png"
		pointer.anchor.set(0.75,0.25)
		pointer.x = @.opts.w/2
		pointer.y = pointer.height*0.25
		@.cd = cd = new Sprite getTe "#{_CDN}img/music-cd.png"
		cd.anchor.set(0.5,0.5)
		cd.x = @.opts.w/2
		cd.y = cd.height/2 + pointer.height/2 + 20 
		@.stage.addChild cd,pointer
		@.opts.callback() if @.opts.callback?

	avatar: (url)->
		@.stage.removeChild @.cdCenter if @.cdCenter?
		@.cdCenter = new Container()
		avatar = Sprite.fromImage url
		avatar.width = 416
		avatar.height = 416
		mask1 = new Graphics()
		mask1.beginFill(0xffffff)
		mask1.drawCircle(205,205,205)
		# avatar.x = -130
		# avatar.y = -282
		@.cdCenter.addChild mask1
		avatar.mask = mask1

		@.cdCenter.addChild avatar
		@.stage.addChild @.cdCenter
		@.cdCenter.x = @.opts.w/2
		@.cdCenter.y = @.cd.y
		@.cdCenter.pivot.x = 410/2
		@.cdCenter.pivot.y = 410/2
		@.cdCenter.scale.set(0.6,0.6)
		@.cdCenter.alpha = 0
		# @.cdCenter.rotation = 0.5
		TweenMax.to @.cdCenter,1,
			alpha: 1
	stopAll: ->
		TweenMax.killTweensOf @.pointer
		TweenMax.killTweensOf @.cdCenter
		TweenMax.killTweensOf @.cd
	play: ->
		@.stopAll()
		TweenMax.to @.pointer,1,
			rotation: -0.4

		TweenMax.to @.cdCenter,15,
			rotation: Math.PI*2*3
			repeat: 10
		TweenMax.to @.cd,15,
			rotation: Math.PI*2*3
			repeat: 10
	stop: ->
		@.stopAll()
		TweenMax.to @.pointer,1,
			rotation: 0
		@.cdCenter.rotation = 0
		@.cd.rotation = 0

