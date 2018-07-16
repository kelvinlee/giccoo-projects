class Block
	sprite: null
	constructor: (arg)->
		@.opts =
			w: 750/4
			h: 20
			id: null
			count: 1
		@.opts = Object.assign @.opts,arg
		@.init()
	init: ->
		@.sprite = new Container()
		for i in [0...@.opts.count]
			block = new Sprite getTe "#{_CDN}img/block.png"
			block.x = i * block.width
			@.sprite.addChild block
		if @.opts.count < 4 and Math.random() > 0.5
			@.sprite.x = 750-@.opts.count*block.width


	PersonOn: (person)->

