class Note
	# 子弹需要有威力参数,控制大小.
	constructor: (@type,@name,@stage,@game,@x=150,@y=150,@size=20)->
		@body = new createjs.Container()
		@body.name = @name
		@shape = new createjs.Shape()
		@fontSize = @size/4*3
		@text = new createjs.Text(@type, "bold #{@fontSize}px Arial", "#fbd81b")
		@text.textAlign = "center"
		@text.regY = @fontSize/7*4
		@brithday = new Date().getTime()
		@lift = 200
		@w = @size/4
		@RoundAnimation = true
		@fadeOut = false

		@body.x = @x
		@body.y = @y
		@text.rotation = Math.random()*(30) - 15

		@RoundAnimate()
		@body.addChild @shape,@text
		@stage.addChild @body

		tis = this
		createjs.Tween.get(@text).wait(50).to({scaleX:1.2,scaleY:1.2},200,createjs.Ease.backInOut).call ->
			createjs.Tween.get(tis.text).to({alpha:0},100).call ->
				tis.killself()
	killself: ->
		@stage.removeChild @body
		delete @game.notes[@name]
	RoundAnimate: ->
		if new Date().getTime()-@brithday>0
			n = (new Date().getTime()-@brithday)/@lift*@w
		else
			n = 0
		n = @w if n>=@w
		g = @shape.graphics
		g.clear()
		g.setStrokeStyle(@w-n, 'round', 'round')
		g.beginStroke("#fff")
		g.beginFill()
		g.drawCircle(0, 0, 20)
		if n>=@w
			@RoundAnimation = false 
			g.clear()
	move: ->
		@RoundAnimate() if @RoundAnimation

