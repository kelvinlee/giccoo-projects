class Game
	constructor: (@stage) ->
		@players = {}
		@notes = {}
		@.init()
	init: ()->
		# 设置一个背景
		@backgroundCont = new createjs.Container()
		@background = new createjs.Bitmap("img/background.png");
		@background.setTransform 0,0,0.4,0.4
		@backgroundCont.addChild @background

		@playGround = new createjs.Container()
		@bullteGround = new createjs.Container()
		@noteBackground = new createjs.Container()
		@userInterGround = new createjs.Container()

		@stage.addChild @backgroundCont,@playGround,@bullteGround,@noteBackground,@userInterGround
		# @test()
		# @note "HIT"
	tick: (evt)->
		# console.log @players
		for _player of @players
			@players[_player].move()
		for _note of @notes
			@notes[_note].move()

	createPlayer: (name)->
		return @players[name] = new Player(name,this,@playGround);
	getPlayer: (name)->
		return @players[name]
	note: (type="HIT",@x=0,@y=0,@size=20)->
		name = parseInt Math.random()*10000
		@notes[name] = new Note type,name,@noteBackground,this,@x,@y,@size

	test: ()->

		@testDom = new createjs.Shape()
		g = @test.graphics
		g.clear()
		g.setStrokeStyle(5, 'round', 'round')
		g.beginStroke("#fff")
		g.beginFill()
		g.drawCircle(150, 150, 14)

		@stage.addChild @testDom


