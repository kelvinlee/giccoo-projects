class gun
	constructor: (@size)->
		PIXI.Sprite.call @
		lineColor = 0x000000
		# 创建枪
		gunColor = 0x888888
		@gun = new PIXI.Sprite()
		g = new PIXI.Graphics()
		g.lineStyle 2,lineColor
		g.beginFill(gunColor, 1)
		g.drawRoundedRect 0, 0, @size*2, @size*0.5, @size*0.1
		g.drawRoundedRect 0, 0, @size*0.5, @size*1, @size*0.1
		@gun.addChild g
		@gun.position.x = @size*1.8
		@gun.position.y = @size*3.3

		# 创建手
		handColor = 0x00ff00
		# 左手
		@leftHand = new PIXI.Sprite()
		g = new PIXI.Graphics()
		g.lineStyle 2,lineColor
		g.beginFill(handColor, 1)
		g.drawCircle(0, 0, @size*0.4)
		@leftHand.addChild g
		@leftHand.position.x = @size*-2
		@leftHand.position.y = @size*4
		# 右手
		@rightHand = new PIXI.Sprite()
		g = new PIXI.Graphics()
		g.lineStyle 2,lineColor
		g.beginFill(handColor, 1)
		g.drawCircle(0, 0, @size*0.4)
		@rightHand.addChild g
		@rightHand.position.x = @size*2
		@rightHand.position.y = @size*4

		this.addChild @leftHand
		this.addChild @rightHand
		this.addChild @gun
	@:: = Object.create(PIXI.Sprite.prototype)
	GunFill: ->
		
