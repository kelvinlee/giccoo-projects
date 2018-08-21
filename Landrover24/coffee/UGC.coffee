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
		.add('music-1',"#{_CDN}mp3/m0.mp3")
		.add('music-2',"#{_CDN}mp3/m1.mp3")
		.add('music-3',"#{_CDN}mp3/m2.mp3")
		.add('music-4',"#{_CDN}mp3/m3.mp3")
		.add('music-5',"#{_CDN}mp3/m4.mp3")
		.add('music-6',"#{_CDN}mp3/m5.mp3")
		# .use(@.loaditem.bind(@))
		.load(buildUGC.bind(@))
		@.default.MH = @.opts.h * 0.65
	loaditem: ->
		@.loadNumber++
		loading.progressOn = parseInt @.loadNumber/(imageList.length)*100
		# console.log @.loadNumber,loading.progressOn,@.loadNumber is imageList.length

		if @.loadNumber is imageList.length
			buildUGC.bind(@).call()

