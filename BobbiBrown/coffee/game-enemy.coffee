class Enemy
	alive: true
	constructor: (arg)->
		@.opts =
			w: 750/4
			h: 20
			block: null
			brush: null
			id: null
		@.opts = Object.assign @.opts,arg
		@.init()
	init: ->
		@.sprite = sprite = new Sprite getTe "#{_CDN}img/enemy-#{@.opts.id}.png"
		sprite.anchor.set(0.5,0.5)
		sprite.scale.set(0.7,0.7)
		sprite.x = @.opts.block.sprite.x + @.opts.block.sprite.width/2 #+ sprite.width/2 + Math.random()*(@.opts.block.sprite.width-sprite.width*2)
		sprite.y = @.opts.block.sprite.y - sprite.height/2
		
	checkHit: (person)->
		# console.log "hit",person.y
		return false unless @.alive
		data = 
			x: person.x
			y: person.y-person.height/2
			width: person.width
			height: person.height
		if HIT.hit(data,@.sprite)
			@.out()
			return true
		return false

	out: ->
		@.alive = false
		@.opts.brush.scale.set(1,1)
		@.opts.brush.x = @.sprite.x - @.opts.brush.width
		@.opts.brush.y = @.sprite.y + @.opts.brush.height
		if @.opts.brush.x < 0
			@.opts.brush.scale.set(-1,1)
			@.opts.brush.x = @.sprite.x + @.opts.brush.width
		TweenLite.to @.opts.brush,0.5,
			rotation: Math.PI * 0.1
			alpha: 1
			onComplete: =>
				TweenLite.to @.opts.brush,0.3,
					rotation: -Math.PI * 0.1
					onComplete: =>
						TweenLite.to @.opts.brush,0.3,
							rotation: Math.PI * 0.1
							onComplete: =>
								TweenLite.to @.sprite,0.7,
									alpha: 0
								TweenLite.to @.opts.brush,0.3,
									rotation: -Math.PI * 0.1
									onComplete: =>
										TweenLite.to @.opts.brush,0.3,
											rotation: Math.PI * 0.1
											alpha: 0
											onComplete: =>
										

		# TweenLite.to @.sprite,0.7,
		# 	alpha: 0
		# 	y: @.sprite.y - @.sprite.height/2
		# 	onUpdate: =>
		# 		@.sprite.scale.set(@.sprite.alpha,@.sprite.alpha)
		# 	onComplete: =>


