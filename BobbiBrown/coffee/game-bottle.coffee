class Bottle
	alive: true
	constructor: (arg)->
		@.opts =
			w: 750/4
			h: 20
			block: null
		@.opts = Object.assign @.opts,arg
		@.init()
	init: ->
		@.sprite = sprite = new Sprite getTe "#{_CDN}img/bottle.png"
		sprite.anchor.set(0.5,0.5)
		sprite.scale.set(0.8,0.8)
		sprite.x = @.opts.block.sprite.x + sprite.width/2 + Math.random()*(@.opts.block.sprite.width-sprite.width*2)
		sprite.y = @.opts.block.sprite.y - sprite.height/2
		if sprite.x > (750 - sprite.width*2)
			sprite.x = 750 - sprite.width*2
		if sprite.x < sprite.width/2
			sprite.x = sprite.width/2
		
	checkHit: (person)->
		# console.log "hit",person.y
		return false unless @.alive
		# console.log (person.x),(person.x+person.width/2),(@.sprite.x-@.sprite.width/2),(@.sprite.x+@.sprite.width/2)
		# if (person.x-person.width/2) >= (@.sprite.x-@.sprite.width/2) and (person.x+person.width/2) <= (@.sprite.x+@.sprite.width/2)
		# 	console.log (person.y-person.height),person.y,(@.sprite.y+@.sprite.height/2),(@.sprite.y+@.sprite.height/2)
		# 	if (person.y-person.height) >= (@.sprite.y-@.sprite.height/2) and (person.y) <= (@.sprite.y+@.sprite.height/2)
		# 		@.out()
		# 		return true
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
		TweenLite.to @.sprite,0.7,
			alpha: 0
			y: @.sprite.y - @.sprite.height/2
			onUpdate: =>
				@.sprite.scale.set(@.sprite.alpha,@.sprite.alpha)
			onComplete: =>


