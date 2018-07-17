HIT = new Bump()

class Game
	default:
		w: 320
		h: 160
		running: true
		margin: 200
		blockCount: 35
		bottleCount: 3
		bottleEat: 0
		MH: 900
	lastNumber: 1 + parseInt Math.random()*7
	started: false
	over: false
	online: false
	blocks: []
	bottles: []
	enemys: []
	lights: []
	_progress: 0
	startTime: null
	scoreNumber: 3
	enemyIndex: [1,7,15,23,33]
	buildList: [4,9,14,19,24,34,39,44]
	constructor: (arg)->
		@.opts =
			el: "main"
			w: 750
			h: 1333
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
			"#{_CDN}img/person.json"
			"#{_CDN}img/person-jump.png"
			"#{_CDN}img/person-stop.png"
			"#{_CDN}img/person-small.png"
			"#{_CDN}img/progress-bg.png"
			"#{_CDN}img/hand.png"
			"#{_CDN}img/block.png"
			"#{_CDN}img/build-first.png"
			"#{_CDN}img/build-1.png"
			"#{_CDN}img/build-2.png"
			"#{_CDN}img/build-3.png"
			"#{_CDN}img/build-4.png"
			"#{_CDN}img/build-5.png"
			"#{_CDN}img/build-6.png"
			"#{_CDN}img/build-7.png"
			"#{_CDN}img/build-8.png"
			"#{_CDN}img/build-last-bg.png"
			"#{_CDN}img/build-last-front.png"
			"#{_CDN}img/light.png"
			"#{_CDN}img/moon.png"
			"#{_CDN}img/bottle.png"
			"#{_CDN}img/brush.png"
			"#{_CDN}img/enemy-1.png"
			"#{_CDN}img/enemy-2.png"
			"#{_CDN}img/enemy-3.png"
			"#{_CDN}img/enemy-4.png"
			"#{_CDN}img/enemy-5.png"
			"#{_CDN}img/game-info-title.png"
			"#{_CDN}img/note-text-1.png"
			"#{_CDN}img/note-text-2.png"
			"#{_CDN}img/note-text-3.png"
			"#{_CDN}img/btn-start.png"
			"#{_CDN}img/btn-share.png"
			"#{_CDN}img/btn-game-info.png"
			"#{_CDN}img/btn-long-save.png"
			"#{_CDN}img/logo.png"
			"#{_CDN}img/cd.png"
			"#{_CDN}img/cd-pointer.png"
			"#{_CDN}img/cd-text.png"
			"#{_CDN}img/finished.png"
			"#{_CDN}img/qrcode.png"
			"#{_CDN}img/game-bg-1.png"
			"#{_CDN}img/game-bg-2.png"
			"#{_CDN}img/game-bg-3.png"
			"#{_CDN}img/game-bg-4.png"
			"#{_CDN}img/game-bg-5.png"
			"#{_CDN}img/game-bg-6.png"
			"#{_CDN}img/game-bg-7.png"
			"#{_CDN}img/game-bg-8.png"
			"#{_CDN}img/game-bg-9.png"
			"#{_CDN}img/game-bg-10.png"
			"#{_CDN}img/game-bg-11.png"
			"#{_CDN}img/last-text-#{@.lastNumber}.png"
		])
		.add("jump", "#{_CDN}mp3/jump.mp3")
		.add("enemy", "#{_CDN}mp3/enemy.mp3")
		.add("win", "#{_CDN}mp3/win.mp3")
		.load(@.build.bind(@))
		@.default.MH = @.opts.h * 0.65
	build: ->
		@.background = background = new Container()
		@.game = game = new Container()

		game.buttonMode = true
		game.interactive = true
		game.touchstart = game.click = ()=>
			@.jump()

		# bg color
		for i in [0...11]
			bgColor = new Sprite getTe "#{_CDN}img/game-bg-#{i+1}.png"
			bgColor.anchor.set(0,1)
			bgColor.x = 0
			bgColor.y = @.opts.h - 1000*i
			bgColor.width = @.opts.w
			background.addChild bgColor
		
		# build
		buildFirst = new Sprite getTe "#{_CDN}img/build-first.png"
		buildFirst.y = @.opts.h-buildFirst.height
		background.addChild buildFirst
		game.addChild background

		# note plant
		@.notePlank = notePlank = new Container()
		bg = new Graphics()
		bg.beginFill(0x000000)
		bg.drawRect(0,0,@.opts.w,@.opts.h)
		bg.alpha = 0.7
		notePlank.addChild bg
		title = new Sprite getTe "#{_CDN}img/game-info-title.png"
		title.x = 80
		title.y = 80
		btnStart = new Sprite getTe "#{_CDN}img/btn-start.png"
		btnInfo = new Sprite getTe "#{_CDN}img/btn-game-info.png"
		btnStart.anchor.set(0.5,0.5)
		btnInfo.anchor.set(0.5,0.5)
		btnStart.x = btnInfo.x = 750/2
		btnStart.y = @opts.h - 100 - 20 - btnInfo.height - btnStart.height
		btnInfo.y = @opts.h - 100 - btnInfo.height

		btnStart.buttonMode = true
		btnStart.interactive = true
		btnStart.touchstart = btnStart.click = ()=>
			@.start()
		btnInfo.buttonMode = true
		btnInfo.interactive = true
		btnInfo.touchstart = btnInfo.click = ()=>
			return false if @.started
			main.showInfoPage()
		
		notePlank.addChild title,btnStart,btnInfo

		game.addChild notePlank
		
		# brush
		brush = new Sprite getTe "#{_CDN}img/brush.png"
		brush.anchor.set(0.05,0.95)
		brush.alpha = 0

		# block
		last = 4
		buildCount = 8
		buildMax = 8
		for item in [0...@.default.blockCount]
			count = parseInt(Math.random()*2+2)
			count = 4 if (item+1)%5 <= 0
			count = 1 if @.enemyIndex.indexOf(item) > -1
			count = 2 if last is 1 and count is 1
			count = 4 if item is @.default.blockCount-1
			count = 4 if item is 0
			block = new Block({count: count, direction: item%2})
			block.sprite.y = @.default.MH - (item * @.default.margin)
			block.id = item
			block.count = count
			background.addChild block.sprite
			@.blocks.push block
			last = count
			if @.enemyIndex.indexOf(item) > -1
				enemy = new Enemy({block: block, brush: brush, id: @.enemyIndex.indexOf(item)+1})
				@.enemys.push enemy
				game.addChild enemy.sprite
			else if item > 0 and item < (@.default.blockCount-1)
				# 建筑物
				if buildCount > 0 and @.buildList.indexOf(item) > -1
					buildCount--
					build = new Sprite getTe "#{_CDN}img/build-#{buildMax-buildCount}.png"
					build.x = if buildCount%2 is 0 then 0 else 750-build.width
					build.y = block.sprite.y - build.height
					background.addChild build
				# 部分概率没有瓶子
				if item is 2 or Math.random() > 0.1
					bottle = new Bottle({block: block})
					@.bottles.push bottle
					bottle.sprite.alpha = 0 if item isnt 2
					game.addChild bottle.sprite

		# lastBuild
		lastBuild = new Container()
		lastBuildBG = new Sprite getTe "#{_CDN}img/build-last-bg.png"
		lastBuildBG.anchor.set(0,1)
		lastBuildFront = new Sprite getTe "#{_CDN}img/build-last-front.png"
		lastBuildFront.anchor.set(0,1)
		lastBuild.y = @.default.MH - (@.default.blockCount-1) * @.default.margin
		light1 = new Sprite getTe "#{_CDN}img/light.png"
		light1.anchor.set(0.5,1)
		light1.x = 140
		light1.rotation = (-0.3 + Math.random()*(0.6))
		light1.direction = light1.rotation > 0
		light1.speed = (Math.random()*100)/10000
		@.lights.push light1
		light2 = new Sprite getTe "#{_CDN}img/light.png"
		light2.anchor.set(0.5,1)
		light2.x = 750/2+50
		light2.rotation = (-0.3 + Math.random()*(0.6))
		light2.direction = light2.rotation > 0
		light2.speed = (Math.random()*100)/10000
		@.lights.push light2
		light3 = new Sprite getTe "#{_CDN}img/light.png"
		light3.anchor.set(0.5,1)
		light3.x = 750/2+150
		light3.rotation = (-0.3 + Math.random()*(0.6))
		light3.direction = light3.rotation > 0
		light3.speed = (Math.random()*100)/10000
		@.lights.push light3
		moon = new Sprite getTe "#{_CDN}img/moon.png"
		moon.x = 20
		moon.y = -240 - moon.height
		@.finished = finished = new Sprite getTe "#{_CDN}img/finished.png"
		finished.scale.set(0.8,0.8) if @.opts.h <= 1100
		finished.x = @.opts.w/2 - finished.width/2 - 92
		finished.y = lastBuildFront.y - 200 - finished.height
		finished.alpha = 0
		lastBuild.addChild moon,lastBuildBG,light1,light2,light3,lastBuildFront,finished

		backgroundColor = new Graphics()
		backgroundColor.y = @.default.MH - (@.default.blockCount-1) * @.default.margin - @.opts.h
		backgroundColor.beginFill(0x231b56)
		# backgroundColor.fillColor()
		backgroundColor.drawRect(0,0,@.opts.w,@.opts.h)
		# add star
		for i in [0...15]
			backgroundColor.beginFill(0xffffff,0.5+Math.random()*0.5)
			size = 1+Math.random()*6
			x = Math.random()*(@opts.w-size*2)
			y = Math.random()*(@opts.w*1.2-size*2)
			backgroundColor.drawCircle(x,y,size)

		background.addChild backgroundColor,lastBuild

		# person
		@.player = player = new Person({MH: @.default.MH,jumpH: @.default.margin + 30, stand: @.movingCamera.bind(@)})
		player.sprite.x = 750/2
		player.sprite.y = @.default.MH

		game.addChild brush
		game.addChild player.sprite

		@.stage.addChild game

		# notePlank
		notePlayer = new Sprite getTe "#{_CDN}img/note-text-1.png"
		notePlayer.x = 750/2 - 30 - notePlayer.width
		notePlayer.y = @.default.MH - notePlayer.height/2 - player.sprite.height/2
		notePlank.addChild notePlayer

		if @.bottles[0].sprite.x < 750/2
			noteBottle = new Sprite getTe "#{_CDN}img/note-text-2.png"
			noteBottle.x = @.bottles[0].sprite.x + 40
		else
			noteBottle = new Sprite getTe "#{_CDN}img/note-text-3.png"
			noteBottle.x = @.bottles[0].sprite.x - 40 - noteBottle.width
		noteBottle.y = @.bottles[0].sprite.y - noteBottle.height/2
		notePlank.addChild noteBottle

		# scorePlank
		@.scorePlank = scorePlank = new Container()
		scorePlank.alpha = 0
		bottle = new Sprite getTe "#{_CDN}img/bottle.png"
		bottle.x = @.opts.w - 210
		bottle.y = 40
		bottle.scale.set(0.6,0.6)

		@.text = text = new Text "X 03",{fontFamily : 'Arial', fontSize: 50, fill : 0x000000, align : 'right'}
		text.x = @.opts.w - 190/2 - text.width/2
		text.y = 40 + bottle.height/2 - text.height/2

		scorePlank.addChild bottle,text

		progressBG = new Sprite getTe "#{_CDN}img/progress-bg.png"
		progressBG.y = @.opts.h - 20 - progressBG.height
		@.personSmall = personSmall = new Sprite getTe "#{_CDN}img/person-small.png"
		personSmall.x = 20
		personSmall.y = @.opts.h - 20 - progressBG.height

		scorePlank.addChild progressBG,personSmall
		@.stage.addChild scorePlank
		@.hand = hand = new Sprite getTe "#{_CDN}img/hand.png"
		hand.anchor.set(0.5,0.5)
		hand.x = @.opts.w/2
		hand.y = @opts.h - 200
		hand.alpha = 0
		@.stage.addChild hand
	start: ->
		return false if @.started
		@.started = true
		@.player.start()
		@._playMove = @.player.move.bind(@.player)
		@.app.ticker.add @._playMove
		@.app.ticker.add @.running.bind @
		for bottle in @.bottles
			bottle.sprite.alpha = 1
		TweenLite.to @.scorePlank, 0.5, {alpha: 1}
		TweenLite.to @.notePlank, 0.5, 
			alpha: 0
			onComplete: =>
				@.online = true
		runHand = =>
			return false unless @.hand.visible
			hand = @.hand
			TweenLite.to hand,1,
				alpha: 1
				y: @opts.h - 300
				onComplete: =>
					hand.scale.set(0.7,0.7)
					setTimeout =>
						hand.scale.set(1,1)
					,200 * 1
					setTimeout =>
						hand.scale.set(0.7,0.7)
					,200 * 2
					setTimeout =>
						hand.scale.set(1,1)
						runHand()
						TweenLite.to hand,1,
							alpha: 0
							onComplete: =>
								hand.y = @opts.h - 200
								runHand()
					,200 * 3
		runHand()
		@.startTime = new Date().getTime()
	gameEnd: ->
		@.app.ticker.remove @._playMove
		@.player.over()
		@.over = true
		to = @.game.y + (@.opts.h - @.default.MH) + @.default.margin - @.blocks[0].sprite.height
		# console.log "to:",to,@.game.y

		overPage = new Container()
		top = 60
		top = 120 if @.opts.h >= 1300
		m = 30
		logo = new Sprite getTe "#{_CDN}img/logo.png"
		logo.y = top
		cd = new Sprite getTe "#{_CDN}img/cd.png"
		cd.anchor.set(0.5,0)
		cd.scale.set(0.8,0.8) if @.opts.h <= 1100
		cd.x = @.opts.w/2
		cd.y = top+logo.height+m
		# text = new Text "我的颜值能量",{fontFamily : 'Arial', fontWeight: "normal", fontSize: 30, fill : 0x000000, align : 'center'}
		# text.x = @.opts.w/2 - text.width/2
		# text.y = cd.y + cd.height/2 - text.height * 1.2
		text = new Sprite getTe "#{_CDN}img/cd-text.png"
		text.scale.set(0.8,0.8) if @.opts.h <= 1100
		text.x = @.opts.w/2 - text.width/2
		text.y = cd.y + cd.height/2 - text.height * 1.4
		fontSize = 56
		fontSize = 56*0.8 if @.opts.h <= 1100
		scoreText = new Text "0",{fontFamily : 'Arial', fontWeight: "normal", fontSize: fontSize, fill : 0x000000, align : 'center'}
		scoreText.x = @.opts.w/2 - scoreText.width/2
		scoreText.y = cd.y + cd.height/2 - text.height * 0.2
		cdPointer = new Sprite getTe "#{_CDN}img/cd-pointer.png"
		cdPointer.scale.set(0.8,0.8) if @.opts.h <= 1100
		cdPointer.x = 100
		cdPointer.x = 140 if @.opts.h <= 1100
		cdPointer.y = top+logo.height+m

		lastText = new Sprite getTe "#{_CDN}img/last-text-#{@.lastNumber}.png"
		lastText.anchor.set(0.5,0)
		lastText.scale.set(0.8,0.8) if @.opts.h <= 1100
		lastText.x = 750/2
		lastText.y = cd.y + cd.height + m

		if main.wy
			@.btnShare = btnShare = new Sprite getTe "#{_CDN}img/btn-share.png"
			btnShare.buttonMode = true
			btnShare.interactive = true
			btnShare.touchstart = btnShare.click = ()=>
				qrcode.visible = true
				btnShare.visible = false
				@.app.renderer.render @.app.stage
				main.share @.app.view.toDataURL()
				qrcode.visible = false
				btnShare.visible = true
		else
			btnShare = new Sprite getTe "#{_CDN}img/btn-long-save.png"
		btnShare.alpha = 0
		btnShare.x = 750/2 - btnShare.width/2
		btnShare.y = cd.y + cd.height + m*2 + lastText.height

		@.qrcode = qrcode = new Sprite getTe "#{_CDN}img/qrcode.png"
		qrcode.y = cd.y + cd.height + m*1.4 + lastText.height
		qrcode.visible = false

		overPage.addChild logo,cd,text,scoreText,cdPointer,lastText,btnShare,qrcode
		overPage.alpha = 0
		@.stage.addChild overPage

		PIXI.sound.play('win')

		TweenLite.to @.game, 1.5,
			y: to
			onComplete: =>
				fto = @.finished.y
				@.finished.y = @.finished.y - 100
				TweenLite.to @.finished, 1,
					alpha: 1
					y: fto
				TweenLite.to @.scorePlank,0.7,
					alpha: 0
				TweenLite.to overPage,0.7,
					alpha: 1
					onComplete: =>
						scoreText.tmp = 0
						n = new Date().getTime() - @.startTime
						if n > 2*60*1000
							n = Math.random()*10
						else
							n = 10 + Math.random()*(@.scoreNumber+@.default.blockCount)
						score = @.scoreNumber*100 + @.default.blockCount*50 + n
						TweenLite.to scoreText,2,
							tmp: score
							onUpdate: =>
								scoreText.text = parseInt scoreText.tmp
								scoreText.x = 750/2 - scoreText.width/2
							onComplete: =>
								TweenLite.to btnShare,0.7,
									alpha: 1
									onComplete: =>
										unless main.wy
											qrcode.visible = true
											btnShare.visible = false
											@.app.renderer.render @.app.stage
											main.setugc @.app.view.toDataURL()
											qrcode.visible = false
											btnShare.visible = true

	myBottleNumber: (n)->
		@.scoreNumber = n
		return "0#{n}" if n < 10
		return n
	pause: ->
		@.player.pause = true
	restart: ->
		@.player.pause = false
	weatherChange: ->
		# console.log "weather",@.game.y
		main.BGColor = "#f8e4b7" if @.game.y > 2000
		main.BGColor = "#f5ce98" if @.game.y > 3000
		main.BGColor = "#fb9257" if @.game.y > 4000
		main.BGColor = "#fc945a" if @.game.y > 5000
		main.BGColor = "#a26171" if @.game.y > 6000
		main.BGColor = "#3f2789" if @.game.y > 7000
		main.BGColor = "#231b56" if @.game.y > 8000


	updateScore: ->
		n = 0
		for bottle in @.bottles
			unless bottle.alive
				n++
		t = 0
		for enemy in @.enemys
			t++ unless enemy.alive
		@.text.text = "X #{@.myBottleNumber(n + @.default.bottleCount - t)}"
	movingCamera: ->
		return false unless @.online
		if @.player.block.id is (@.default.blockCount-1)
			console.log "game over"
			@.gameEnd()
			return false
		to = @.default.MH - @.player.block.sprite.y
		TweenLite.to @.game,0.7,
			y: to
			onComplete: =>
				@.weatherChange()
	updateProgress: (block)->
		progress = @.blocks.indexOf(block)/(@.blocks.length-1)
		# @.personSmall.x = 20 + 700*progress
		# console.log progress,@.personSmall.x
		TweenLite.to @.personSmall,0.3,
			x: 20 + 700*progress

	running: (detail)->
		return false unless @.online
		for light in @.lights
			if light.direction
				light.rotation -= light.speed * detail
				light.direction = !light.direction if light.rotation <= -0.3
			else
				light.rotation += light.speed * detail
				light.direction = !light.direction if light.rotation >= 0.3

		for enemy in @.enemys
			if enemy.alive
				if enemy.checkHit @.player.sprite
					@.updateScore()
					@.hitEnemy()
		for bottle in @.bottles
			if bottle.alive
				if bottle.checkHit @.player.sprite
					@.updateScore()
		unless @.player.block?
			for block in @.blocks
				if @.player.checkBlockOn block
					@.updateProgress block
					break
	hitEnemy: ->
		@.player.blink()
	jump: ->
		# @.hand.visible = false
		return false unless @.online
		return false if @.over
		@.hand.visible = false
		@.player.jump()

