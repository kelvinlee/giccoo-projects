class Player
	# 构建用户
	constructor: (@name)->
		PIXI.Sprite.call @

		@player = new PIXI.Sprite()
		# 实际单位
		@size = 20
		# 缩放比例
		@sl = 0.3
		@w = @size * 3 * @scale
		@h = @size * 7 * @scale

		@createBody()
		@givemeaGun()
		@player.position.x = @size*1.5
		this.addChild @player
		this.position.x = 100
		this.position.y = 200
		# this.width = this.height = @sl
		# @player.scale.x = -1


	# 从 DisplayObjectContainer 继承
	@:: = Object.create(PIXI.Sprite.prototype)
	# 创建玩家造型 
	createBody: ->
		lineColor = 0x000000
		headerColor = 0x75F31F
		bodyColor = 0xfff000
		eyeColor = 0x000000
		handColor = 0xb4a900
		
		# 画一个头
		@header = new PIXI.Sprite()
		g = new PIXI.Graphics()
		g.lineStyle 2,lineColor
		g.beginFill(headerColor, 1)
		g.drawCircle(@size*0, @size*1, @size)
		@header.addChild g
		# 画眼睛
		@eye = new PIXI.Sprite()
		g = new PIXI.Graphics()
		g.lineStyle 0
		g.beginFill(eyeColor, 1)
		g.drawCircle(@size*0.3, @size*0.9, @size*0.2)
		g.drawCircle(@size*0.8, @size*0.9, @size*0.2)
		@eye.addChild g
		# 画身体
		@body = new PIXI.Sprite()
		g = new PIXI.Graphics()
		g.lineStyle 2,lineColor
		g.beginFill(bodyColor, 1)
		g.moveTo @size*-1.5,@size*2.5
		g.lineTo @size*1.5,@size*2.5
		g.lineTo @size*0.5,@size*7
		g.lineTo @size*-0.5,@size*7
		g.lineTo @size*-1.5,@size*2.5
		g.endFill()
		@body.addChild g

		@player.addChild @header
		@player.addChild @body
		@player.addChild @eye
	# 给我一把枪
	givemeaGun: ->
		@gun = new gun(@size)
		@player.addChild @gun

	# 更新动态数据
	update: ->