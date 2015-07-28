class Bullet
	# 子弹需要有威力参数,控制大小.
	constructor: (@name,@Direction,@nums=0,@x=0,@y=0,@speed=450,@w = 30,@h = 2)->
		rotation = [2,0,-2,0]
		@body = new createjs.Shape()
		@body.fromid = @name
		@body.name = "bullet"
		@body.speed = @speed
		@body.Defaultx = @x
		@body.Defaulty = @y
		@body.x = @x
		@body.y = @y
		@body.Birthday = new Date().getTime()
		@body.Direction = @Direction
		@body.rotation = rotation[@nums%4]
		@body.width = @w
		@body.height = @h
		if not @Direction
			@body.skewY = 180
			@body.regX = @w
		@init()
	init: ->
		g = @body.graphics
		w = @w
		h = @h
		g.ss(0).moveTo(-5, -h).beginFill("rgba(0,0,0,0.8)").drawRoundRect(-w/8, h, w, h, h/2)
		g.beginFill("#fff")
		g.drawRoundRect(0,-h/2,w-2,h,1,h,h,1)
		g.setStrokeStyle(1, "round", "round").beginStroke("#fbd81b").moveTo(0,-h/2).arcTo(w, -h, w, h, h)
		g.setStrokeStyle(1, "round", "round").beginStroke("#fbd81b").moveTo(0,h/2).arcTo(w, h, w, -h, h)
		g.moveTo(0,h/2).lineTo(0, -h/2)
	Collision: ->

