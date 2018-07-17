class Person
	sprite: null
	isJump: false
	jumping: false
	pause: false
	block: null
	direction: "left"
	# oldDirection: "left"
	speed: 4
	default:
		speed: 4
	constructor: (arg)->
		@.opts =
			w: 750/4
			h: 20
			jumpH: 100
			HM: 900
			stand: ->
		@.opts = Object.assign @.opts,arg
		@.init()

	init: ->
		@.sprite = new Container()
		# sprite = new Sprite getTe "#{_CDN}img/person.png"
		exTe = []
		for i in [1..4]
			item =  PIXI.Texture.fromFrame "person-#{i}.png"
			exTe.push item
		@.personSprite = person = new AnimatedSprite exTe
		person.anchor.set(0.5,1)
		person.scale.set(0.3,0.3)
		person.animationSpeed = 0.1
		person.gotoAndStop(0)
		@.jumpSprite = jump = new Sprite getTe "#{_CDN}img/person-jump.png"
		jump.anchor.set(0.5,1)
		jump.scale.set(0.3,0.3)
		jump.visible = false
		@.stopSprite = stop = new Sprite getTe "#{_CDN}img/person-stop.png"
		stop.anchor.set(0.5,1)
		stop.scale.set(0.3,0.3)
		stop.visible = false

		@.sprite.addChild person,jump,stop
		# console.log @.sprite.width,@.sprite.height
	start: ->
		@.personSprite.gotoAndPlay(0)
	jump: ->
		return false if @.jumping
		@.jumping = true
		old = @.sprite.y
		to = old - @.opts.jumpH
		@.block = null
		@.speed = @.default.speed * 1.5
		@.personSprite.visible = false
		@.jumpSprite.visible = true
		PIXI.sound.play('jump')
		TweenLite.to @.sprite,0.7,
			y: to
			onComplete: =>
				@.isJump = true

	blink: ->
		PIXI.sound.play('enemy')
		TweenLite.to @.sprite,0.2,
			alpha: 0.4
			onComplete: =>
				TweenLite.to @.sprite,0.3,
					alpha: 1
					onComplete: =>
						TweenLite.to @.sprite,0.2,
							alpha: 0.4
							onComplete: =>
								TweenLite.to @.sprite,0.3,
									alpha: 1
									onComplete: =>
										TweenLite.to @.sprite,0.2,
											alpha: 0.4
											onComplete: =>
												TweenLite.to @.sprite,0.3,
													alpha: 1
													onComplete: =>
														TweenLite.to @.sprite,0.2,
															alpha: 0.4
															onComplete: =>
																TweenLite.to @.sprite,0.3,
																	alpha: 1

	standBlock: (x,y)->
		@.personSprite.visible = true
		@.jumpSprite.visible = false
		@.isJump = false
		@.jumping = false
		@.speed = @.default.speed
		@.sprite.x = x 
		@.sprite.y = y
		@.opts.stand()
		

	checkBlockOn: (block)->
		return false unless @.isJump
		# console.log block.sprite.x
		if HIT.hit({x: @.sprite.x,y: @.sprite.y},block.sprite)
			@.block = block
			@.standBlock @.sprite.x, block.sprite.y
			return true
		# person = @.sprite
		# if (person.x-person.width/2) >= block.sprite.x and (person.x+person.width/2) <= (block.sprite.x+block.sprite.width)
		# 	if (person.y) >= block.sprite.y and (person.y) <= (block.sprite.y+block.sprite.height)
		# 		@.block = block
		# 		@.standBlock @.sprite.x,block.sprite.y
		return false
	over: ->
		if @.sprite.x > 750/2 - 92
			@.sprite.scale.set(1,1)
		else
			@.sprite.scale.set(-1,1)
		TweenLite.to @.sprite,1.7,
			x: 750/2 - 92
			onComplete: =>
				# 横幅出现
				@.personSprite.gotoAndStop(1)
				@.personSprite.visible = false
				@.stopSprite.visible = true

	move: (detail)->
		return false if @.pause
		# console.log @.direction,detail,@.speed,@.sprite.x
		if @.direction is "left"
			x = if @.block? then @.block.sprite.x+@.sprite.width/2 else @.sprite.width/2
			x = @.sprite.width/2 if @.isJump
			@.sprite.x -= @.speed * detail
			if @.sprite.x <= x
				@.direction = "right" 
				@.sprite.scale.set(-1,1)

		if @.direction is "right"
			x = if @.block? then if @.block.sprite.x+@.block.sprite.width > 750+@.sprite.width/2 then 750+@.sprite.width/2 else @.block.sprite.x+@.block.sprite.width else 750+@.sprite.width/2
			x = 750+@.sprite.width/2 if @.isJump
			@.sprite.x += @.speed * detail
			if @.sprite.x >= x
				@.direction = "left" 
				@.sprite.scale.set(1,1)

		if @.isJump
			@.speed += 0.1
			@.sprite.y += (@.speed * 2) * detail
		else if @.block?
			@.sprite.y = @.block.sprite.y
			# console.log @.sprite.y, @.block.sprite.y
		# else if @.sprite.y > @.opts.HM
		# 	@.sprite.y = @.opts.HM

				