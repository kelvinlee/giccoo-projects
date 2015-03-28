class Game
	# 构建游戏
	constructor: (@name,curtain)->
		@stage = new PIXI.Stage(0xFFFFFF, true)
		@stage.interactive = true
		rendererOptions  = { antialias : true}
		@renderer = PIXI.autoDetectRenderer(620, 380,rendererOptions)
		document.getElementById(curtain).appendChild @renderer.view
		# @update()
		# requestAnimFrame @update.bind @
		PlayTest = new Player()
		@stage.addChild PlayTest

		@update()
	
	# 持续运行
	update: ->
		@renderer.render @stage
		requestAnimFrame @update.bind @

g = new Game("Gun","Curtain")