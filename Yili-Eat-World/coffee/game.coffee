# 贪吃胃

# Note
# 返回弹窗事件
# 游戏暂停 Done
# 彩蛋
# 随机取 6 种食物  Done
# 食物自动死亡
# 游戏结束
# 样式调整


class Game
	# 构建游戏
	constructor: (@name,curtain,@scoreFun,@noteFun,@puttyFun,@over)->
		@stage = new PIXI.Stage()
		@stage.interactive = true
		@score = 0
		@milk = 0
		@stop = false
		@eat = {}

		rendererOptions  = { antialias : true , transparent: true}
		@renderer = PIXI.autoDetectRenderer(610, 610,rendererOptions)
		document.getElementById(curtain).appendChild @renderer.view
		# @update()
		# requestAnimFrame @update.bind @
		
		bg = new PIXI.Sprite.fromImage(cdn+'img/game-bg.png')
		@stage.addChild bg
		@MyPlayer = new Player()
		@foodList = [1,14,15,parseInt(Math.random()*(5-2))+2,parseInt(Math.random()*(9-6))+6,parseInt(Math.random()*(13-10))+10]
		@food = new Food(@foodList)
		@stage.addChild @food

		@handicap = new PIXI.Sprite.fromImage(cdn+'img/handicap.png')
		@handicap.w = @handicap.width
		@handicap.h = @handicap.height
		if @MyPlayer.moveTo is 1
			@handicap.x = 140
			@handicap.y = 440
		if @MyPlayer.moveTo is 2
			@handicap.x = 140
			@handicap.y = 180
		if @MyPlayer.moveTo is 3
			@handicap.x = 390
			@handicap.y = 180
			# @handicap.rotation = 45
		if @MyPlayer.moveTo is 4
			@handicap.x = 440
			@handicap.y = 280
			# @handicap.rotation = 90
		console.log "handicap:",@handicap.x,@handicap.y,@handicap.width,@handicap.height
		@stage.addChild @handicap

		@stage.addChild @MyPlayer
		# @createBoom 100,100
		@update()
	createBoom: (x,y)->
		boom = new PIXI.Sprite.fromImage(cdn+'img/game-boom.png')
		boom.x = x
		boom.y = y
		boom.anchor.x = 0.5
		boom.anchor.y = 0.5
		boom.scale = new PIXI.Point(0,0)
		@stage.addChild boom
		self = @stage
		tween = new TWEEN.Tween({x:0}).to({x:1},500).easing(TWEEN.Easing.Elastic.InOut).onUpdate ->
			boom.scale = new PIXI.Point(this.x,this.x)
		.start().onComplete ->
			self.removeChild boom
	changeD: (d)->
		return false if d>4 or d<1
		@MyPlayer.changeD(d)
	# 创建食物
	buildFood: ()->
		return false if @food?
		if @eat[@oldfood.id]?
			@eat[@oldfood.id]++
		else
			@eat[@oldfood.id] = 1
		if @oldfood.id is 1
			@milk++
			@MyPlayer.changeF()
		@noteFun(@oldfood.id)
		# 彩蛋判断
		eggs = 0
		for egg in @foodList
			if @eat[egg] > 0
				eggs++
		console.log eggs,@eat
		if eggs >= @foodList.length and @puttyFun?
			@puttyFun(@eat)
			@puttyFun = null
		@score += @oldfood.score
		@scoreFun()

		@addFood()
		@MyPlayer.changeS()
	
	addFood: ->
		@stage.removeChild @oldfood
		@food = new Food(@foodList)
		blt = @food
		enemy = @MyPlayer
		unless (blt.x >= (enemy.x + enemy.w)) or ((blt.x + blt.w) <= enemy.x) or (blt.y >= (enemy.y + enemy.h)) or ((blt.y + blt.h) <= enemy.y)
			# if @food.x > 305 and @food.x < 610-@food.w
			# 	@food.x = 610 - @food.w - enemy.x
			# if @food.x > 0 and @food.x < 305
			@food.x = 610 - @food.w - enemy.w
			@food.x = 0 if @food.x < 0
			@food.x = 610-enemy.w if @food.x > 610-@food.w
			# if @food.y > 305 and @food.y < 610-@food.h
			# 	@food.y += enemy.h
			# if @food.y > 0 and @food.y < 305
			@food.y = 610 - @food.h - enemy.h
			@food.y = 0 if @food.y < 0
			@food.y = 610-@food.h if @food.y > 610-@food.h
		enemy = @handicap
		unless (blt.x >= (enemy.x + enemy.w)) or ((blt.x + blt.w) <= enemy.x) or (blt.y >= (enemy.y + enemy.h)) or ((blt.y + blt.h) <= enemy.y)
			# alert "碰撞 墙壁"
			console.log @food.x,@food.y
			if @food.x > 305 and @food.x < 610-@food.w
				@food.x += @handicap.x-@handicap.w
			if @food.x > 0 and @food.x < 305
				@food.x -= @handicap.x+@handicap.w
			@food.x = 0 if @food.x < 0
			@food.x = 610-enemy.w if @food.x > 610-@food.w
			if @food.y >= 305 and @food.y <= 610-@food.h
				@food.y = @handicap.y+@handicap.h
			if @food.y > 0 and @food.y < 305
				@food.y = @handicap.y-@food.h
			@food.y = 0 if @food.y < 0
			@food.y = 610-@food.h if @food.y > 610-@food.h
			console.log @food.x,@food.y

		@stage.addChild @food
	# 碰撞检测	
	collision: ->
		blt = @MyPlayer
		if @food?
			enemy = @food
			# console.log blt.x,blt.y,blt.width
			unless (blt.x >= (enemy.x + enemy.w)) or ((blt.x + blt.w) <= enemy.x) or (blt.y >= (enemy.y + enemy.h)) or ((blt.y + blt.h) <= enemy.y)
				# console.log "hit"
				@oldfood = @food
				if @oldfood.id is 1
					@createBoom @MyPlayer.x+@MyPlayer.w/2,@MyPlayer.y+@MyPlayer.h/2
				@food = null
				@oldfood.dead @buildFood.bind @
		if @food? and @food.id isnt 1 and (new Date().getTime() - @food.brithy) >= 10000
			@oldfood = @food
			@food = null
			@addFood()

		if blt.x > (610-blt.size) or blt.x < 0 or blt.y > (610-blt.size) or blt.y < 0
			@GameOver("墙")
		if @handicap
			enemy = @handicap
			unless (blt.x >= (enemy.x + enemy.w)) or ((blt.x + blt.w) <= enemy.x) or (blt.y >= (enemy.y + enemy.h)) or ((blt.y + blt.h) <= enemy.y)
				@GameOver("遮挡")

	pause: ->
		@stop = true
		@pauseTime = new Date().getTime()
	play: ->
		@pauseTime = new Date().getTime() - @pauseTime
		@food.updateBrithy(@pauseTime)
		@MyPlayer.updateDefault()
		@stop = false
		@update()
	GameOver: (reason)->
		@MyPlayer.dead = true
		@pause()
		@over(@eat)
		console.log "死亡原因: ",reason
	# 持续运行
	update: ->
		return false if @stop
		@renderer.render @stage
		TWEEN.update()
		@MyPlayer.update() if @MyPlayer?
		@food.update() if @food?
		@collision()
		requestAnimFrame @update.bind @

class Player
	# 构建用户
	constructor: (@name)->
		PIXI.Sprite.call @

		self = this

		@size = 150*0.8
		@maxSpeed = 400
		@speed = 100
		@speedGrow = 0.1

		# @moveTo = 3
		@moveTo = parseInt(Math.random()*4)+1
		@dead = false
		@brithy = true
		@superTime = null


		@player = new PIXI.Sprite.fromImage(cdn+'img/game-p-stomach.png')
		@player.scale = new PIXI.Point(0.65,0.65)
		this.addChild @player
		console.log "add body",@player.width,@width

		@x = 610/2 - @size/2
		@y = 610/2 - @size/2
		@starX = @x
		@starY = @y
		@starMoveTime = new Date().getTime()
		# @player.anchor.x = 0.5
		# @player.anchor.y = 0.5
		@w = @player.width
		@h = @player.height
		# self.scale = new PIXI.Point(0,0)
		# @player.fromImage = "img/game-p-lufei.png"
		# tween = new TWEEN.Tween({x:0}).to({x:1},1000).easing(TWEEN.Easing.Elastic.InOut).onUpdate ->
		# 	self.scale = new PIXI.Point(this.x,this.x)
		# .start().onComplete ->
		# 	self.brithy = true
		
	@:: = Object.create(PIXI.Sprite.prototype)
	changeF: (normal = false)->
		nameList = ["lufei","gangtiexia","huluwa","mingren"]
		name = "stomach"
		unless normal
			name = nameList[parseInt(Math.random()*(nameList.length-1))]
		this.removeChild @player
		@player = new PIXI.Sprite.fromImage(cdn+'img/game-p-'+name+'.png')
		@player.scale = new PIXI.Point(0.65,0.65)
		this.addChild @player
		self = this
		clearTimeout @superTime
		return true if normal
		@superTime = setTimeout ->
			self.changeF(true)
		,5000
	changeD: (d)->
		return false if d>4 or d<1
		return false if @moveTo is parseInt d
		@updateDefault()
		@moveTo = parseInt d
	changeS: ->
		return false if @speed >= @maxSpeed
		@updateDefault()
		@speed = @speed + @speed*@speedGrow
		@speed = @maxSpeed if @speed >= @maxSpeed
		# console.log @speed
	updateDefault: ->
		@starMoveTime = new Date()
		@starX = @x
		@starY = @y
	# 更新动态数据
	update: ->
		# return false unless @brithy
		return false if @dead
		if @moveTo is 1
			return this.y = @starY - (new Date().getTime()-@starMoveTime)/1000*@speed
		if @moveTo is 3
			return this.y = @starY + (new Date().getTime()-@starMoveTime)/1000*@speed
		if @moveTo is 2
			return this.x = @starX + (new Date().getTime()-@starMoveTime)/1000*@speed
		if @moveTo is 4
			return this.x = @starX - (new Date().getTime()-@starMoveTime)/1000*@speed

_food_history = []
class Food
	# 构建用户
	constructor: (random)->
		PIXI.Sprite.call @
		# console.log random
		@id = random[parseInt(Math.random()*(random.length))]
		# console.log "id:",@id
		if _food_history.length > 2 and _food_history[_food_history.length-1] isnt 1 and _food_history[_food_history.lenght-2] isnt 1
			@id = 1
		if _food_history.length > 20
			_food_history = []
		_food_history.push @id
		@food = new PIXI.Sprite.fromImage(cdn+'img/game-item-'+@id+'.png')
		@brithy = new Date()
		@Fainting = false
		@FaintingTime = 1000+Math.random()*4000

		this.addChild @food
		this.anchor = new PIXI.Point(40,50)
		this.scale = new PIXI.Point(0,0)
		self = this
		self.w = self.food.width
		self.h = self.food.height
		this.x = Math.random()*(610 - @food.width)
		this.y = Math.random()*(610 - @food.height)
		this.anchor.x = 0.5
		this.anchor.y = 0.5
		# console.log "food brithy:",this.x,this.y
		tween = new TWEEN.Tween({x:0}).to({x:1},1000).easing(TWEEN.Easing.Elastic.InOut).onUpdate ->
			self.scale = new PIXI.Point(this.x,this.x)
		.start()
		@score = 13
		if @id is 2 or @id is 3 or @id is 4 or @id is 5
			@score = 8
		if @id is 6 or @id is 7 or @id is 8 or @id is 9
			@score = 9
		if @id is 10 or @id is 11 or @id is 12 or @id is 13
			@score = 15
		if @id is 14
			@score = 10
		if @id is 15
			@score = 12
		
		# if @id isnt 1
		# 	@burn()

	@:: = Object.create(PIXI.Sprite.prototype)
	updateBrithy: (time)->
		@brithy += time
	burn: ->
		self = this
		unless @Fainting
			if (new Date().getTime() - @brithy) >= @FaintingTime
				@Fainting = true
				self.removeChild self.food
				self.food = new PIXI.Sprite.fromImage(cdn+'img/game-item-'+self.id+'-old.png')
				self.addChild self.food
				self.score = parseInt self.score/2

		# ,1000+Math.random()*4000

	dead: (callback)->
		tween = new TWEEN.Tween({x:1}).to({x:0},100).easing(TWEEN.Easing.Elastic.InOut).onUpdate ->
			self.alpha = this.x
		.start().onComplete callback
	getWH: ->
	update: ->
		if @id isnt 1
			@burn()
