class Player
	constructor: (@name,@game,@stage,@x = 150,@y = 150,@width = 36,@height = 29,@team) ->
		@playerGroup = new createjs.Container()
		@starMoveTime = new Date().getTime()
		@mybullets = 0
		# 移动速度
		@speed = 100
		@starX = 0
		@movend = true
		# 转向
		@Direction = true
		# 是否死亡
		@deaded = false
		# 是否在跑动
		@runing = false
		# 是否在攻击
		@attacking = false
		# 是否在跳跃
		@jumping = false
		# 是否漂浮状态
		@floating = false
		# 是否可以同步
		@syncing = true
		@body = {
			w: 36
			h: 29
		}
		if not @team?
			@team = @name
		@init()
	init: ()->
		# 初始化基础数据
		console.log "Create Player #{@name}"
		@doing = "normal"
		playerSheet = new createjs.SpriteSheet
			"images": ["img/people1.png","img/people2.png","img/people3.png","img/people4.png"]
			frames: {height:29,width:36,regX:1,regY:1,count:24}
			animations: {
				normal: [0,0, "normal"]
				run: [0,4, "run"]
				attack: [6,12, "normal", 0.7]
				dead: [18,23,"stop"]
				stop: [23,23]
			}
		@playerSprite = new createjs.Sprite(playerSheet, "normal")
		@playerGroup.canjumping = true
		# @playerSprite.regY = -29/2
		@playerGroup.y = @y
		@starX = @x
		@playerGroup.x = @starX
		@playerGroup.width = @width
		@playerGroup.height = @height
		# @playerSprite.skewY = 180
		# @playerSprite.skewX = 180
		@playerGroup.addChild @playerSprite
		@stage.addChild @playerGroup
	# 如果人物是我操作的,给一个标示符
	my: ->

	# 获取同步数据和发送同步数据
	sync: (data)->
		# x,y,jump,attack,mybullets,
		return false if not @syncing
		@playerGroup.x = data.x
		@mybullets = data.mybullets
		@Direction = data.Direction
		@refresh()
	getSync: ->
		return false if not @syncing
		data = {
			x : @playerGroup.x
			mybullets: @mybullets
			Direction: @Direction
		}
		return data
	# 变换方向和开始运动的时候刷新基础数据
	refresh: ->
		@starX = @playerGroup.x
		@starMoveTime = new Date().getTime()
	# 传送动作
	action: (action)->
		@playerSprite.gotoAndPlay action
	# 跳起
	jump: ->
		return false if not @jumping
		return false if not @playerGroup.canjumping
		@playerGroup.canjumping = false
		# 带有缓动
		# createjs.Tween.get(@playerSprite).to({y:100}, 400, createjs.Ease.cubicOut).to({y:150}, 300, createjs.Ease.cubicIn)
		taget = createjs.Tween.get(@playerGroup)
		tis = this
		jumpend = ->
			this.canjumping = true
		jumpup = ->
			# 这里用来判断跳跃
			createjs.Tween.get(this).to({y:150}, 300, createjs.Ease.quadIn).call(jumpend)
		handleChange = ->
			console.log tis.playerGroup.x
		taget.to({y:100}, 300, createjs.Ease.quadOut).call(jumpup)
		# .addEventListener("change", handleChange)
		# console.log createjs.Tween.removeTweens(tis.playerSprite)

	# 攻击方法
	attack: ->
		# 这里要给枪设置 时间间隔.
		return false if (new Date().getTime() - @attackPreTime) < 400
		@attackPreTime = new Date().getTime()
		@playerSprite.gotoAndPlay("attack")
		x = @playerGroup.x+36
		y = @playerGroup.y+29/2
		if not @Direction
			x = @playerGroup.x - 20
		B = new Bullet(@Direction,@mybullets,x,y)
		@game.bullteGround.addChild B.body
		@mybullets++
		# console.log @playerSprite.currentAnimation
		# @stage.update()
		# console.log @player.children
	# 保持移动
	keepRun: ->
		return false if @playerSprite.currentAnimation is "run"
		return false if not @runing
		@playerSprite.gotoAndPlay("run")
	# 死亡
	dead: ()->
		@playerSprite.gotoAndPlay("dead")
		@playerSprite.alpha = 1.5
		@deaded = true
		delete playerlist[@name]
	# 死亡后移除自己的相关数据.
	killself: ()->
		@stage.removeChild @playerGroup
	# 子弹位移计算.
	bullet: ->
		removeBullet = []
		bulletlife = 800
		Curve = 1.5
		for blt in @game.bullteGround.children
			# 这里注意,如果是子弹就是位移计算. 如果不是子弹如刀等武器按照动作计算.
			if blt.name is "bullet"
				continue if blt.stop?
				card = (new Date().getTime()-blt.Birthday)/1000
				if blt.Direction
					blt.x = blt.Defaultx + card*blt.speed
				else
					blt.x = blt.Defaultx - card*blt.speed
				blt.y = blt.y + card*Curve if blt.rotation >= 2
				blt.y = blt.y - card*Curve if blt.rotation <= -2

				if (blt.x > bulletlife) or (blt.x < -bulletlife) or blt.stop?
					removeBullet.push blt
				else
					@Collision {x:blt.x,y:blt.y,width:blt.width,height:blt.height,self:blt}
			# 弧线子弹只计算位置和移除
			# if blt.name is "bullet-Arc"
			# 砍刀计算工作结束.
			# if blt.name is "bullet-Melee"
		for blt in removeBullet
			@game.bullteGround.removeChild blt
	# 子弹碰撞计算.
	Collision: (blt)->
		# console.log blt
		enemys = @getEnemy()
		return false if not enemys?
		for name of enemys
			continue if name is @name
			e = enemys[name]
			continue if not @team? and e.team is @team
			enemy = e.playerGroup
			continue if enemy.deaded
			if (blt.x >= (enemy.x + enemy.width)) or ((blt.x + blt.width) <= enemy.x) or (blt.y >= (enemy.y + enemy.height)) or ((blt.y + blt.height) <= enemy.y)
				continue
			else
				# console.log e.name
				blt.self.alpha = 0
				blt.self.stop = true
				# e.dead()
				# console.log blt.self.Direction
				@Hit e,blt.self.Direction
	# 获取所有用户数据
	getEnemy: ->
		return playerlist
	# 发送我被击中的消息.
	Hit: (e,Direction)->
		# @name,击中了
		sock.send "hit", {name:e.name,by:@name,Direction:Direction}
	# 获得我被击中的消息.
	gotHit: (nums,Direction)->
		@syncing = false
		@floating = true

		tis = this
		taget = createjs.Tween.get(@playerSprite)
		wl = 100
		x = @playerGroup.x + (if Direction then wl else -wl)
		hx = @playerGroup.x + @playerSprite.width/2
		hy = @playerGroup.y + @playerSprite.height/2
		@game.note "HIT",hx,hy
		taget.to({x:x},300,createjs.Ease.cubicOut).call ->
			tis.playerSprite.x = 600 if tis.playerSprite.x > 600
			tis.playerSprite.x = 0 if tis.playerSprite.x < 0
			tis.refresh()
			tis.syncing = true
			tis.floating = false


	# 所有此人物的执行循环
	move: ->
		@playerSprite.alpha -= 0.05 if @deaded
		@killself() if @playerSprite.alpha <= 0
		@bullet()
		return false if @deaded
		
		@attack() if @attacking
		@keepRun() if @runing
		@jump() if @jumping

		return false if @floating
		if @Direction
			@playerSprite.skewY = 0
			@playerSprite.regX = 0
			return false if @playerGroup.x >= 600
			return false if not @runing
			@playerGroup.x = @starX + (new Date().getTime()-@starMoveTime)/1000*@speed
		else
			@playerSprite.skewY = 180
			@playerSprite.regX = 36
			return false if @playerGroup.x <= 0
			return false if not @runing
			@playerGroup.x = @starX - (new Date().getTime()-@starMoveTime)/1000*@speed