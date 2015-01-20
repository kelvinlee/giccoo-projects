# @codekit-prepend "game/game-note"
# @codekit-prepend "game/player-Bullet"
# @codekit-prepend "game/player-Character"
# @codekit-prepend "game/init"

# @codekit-prepend "socket/init"

# @codekit-prepend "../../libs/coffee/orientation"



bindOri ()->
	alert "normal"
,()->
	alert "heng"

app = angular.module('kelvin', ["ngRoute","ngTouch","ngAnimate"])
.config ["$routeProvider", "$locationProvider" ,($routeProvider, $locationProvider)->
	$routeProvider.when '/',{
		templateUrl: "home.html"
		controller: "HomeController"
		controllerAs: "home"
	}
]
game = {}
stage = {}
sock = {}
userid = "user"+parseInt Math.random()*1000
playerlist = {}
app.controller 'MainController', ($rootScope, $scope)->
	$rootScope.$on "$routeChangeSuccess", ->
		$(".loaded").removeClass "loaded"

app.controller 'HomeController', ($rootScope, $scope)->
	sock = new Socket "http://kelvin-air.local:8888", userid , ->
		# 定时发送同步请求.
		setInterval ->
			sync()
		,100

	sock.option.join = ->
		return false if not this.name?
		playerlist[this.name] = game.createPlayer this.name
		if this.name is userid
			playerlist[this.name].my()
	sock.option.removeuser = ->
		playerlist[this.name].dead() if playerlist[this.name]? and playerlist[this.name].dead?
		delete playerlist[this.name]
	sock.option.attack = ->
		return false if not playerlist[this.name]? or not playerlist[this.name].attacking?
		playerlist[this.name].attacking = this.attacking
	sock.option.jumping = ->
		return false if not playerlist[this.name]? or not playerlist[this.name].jumping?
		playerlist[this.name].jumping = this.jumping
	sock.option.moveing = ->
		return false if not playerlist[this.name]? or not playerlist[this.name].runing?
		playerlist[this.name].runing = this.moveing
		playerlist[this.name].refresh()
	sock.option.Direction = ->
		return false if not playerlist[this.name]? or not playerlist[this.name].Direction?
		if playerlist[this.name].Direction isnt this.Direction
			playerlist[this.name].refresh()
		playerlist[this.name].Direction = this.Direction
	sock.option.gotHit = ->
		return false if not playerlist[this.name]?
		playerlist[this.name].gotHit this.hit,this.Direction
		# console.log this
	sock.option.sync = ->
		return false if not playerlist[this.name]?
		playerlist[this.name].sync this
		console.log "延迟",this.delay if this.delay?

	$scope.$watch "loaded", ->
		$(".loaded").removeClass "loaded" if $scope.loaded
	$scope.$on "to-create", (evt,data)->
		# console.log "create:",evt,data
		stage = new createjs.Stage "GameCanvas"
		game = new Game(stage)
		# 创建用户自己本身
		# $rootScope.my = game.createPlayer "my"
		tick = (evt)->
			game.tick(evt)
			stage.update evt
		createjs.Ticker.addEventListener("tick", tick)
		sock.send "getPlayers", {all:"all"}
		console.log "请求获取所有人物数据:",userid
	
	
app.controller "AttackController",($scope,$rootScope)->
	$scope.$watch "attack", ->
		# $rootScope.my.attacking = $scope.attack
		sock.send "attack", {name:userid,attacking: $scope.attack}
		sync()
app.controller "MoveController",($scope,$rootScope)->
	$scope.$watch "moveing", ->
		# $rootScope.my.runing = $scope.moveing
		# $rootScope.my.refresh()
		sock.send "moveing", {name:userid,moveing: $scope.moveing}
	$scope.$watch "jumping", ->
		# $rootScope.my.jumping = $scope.jumping
		sock.send "jumping", {name:userid,jumping: $scope.jumping}
	$scope.$watch "Direction", ->
		# if $rootScope.my.Direction isnt $scope.Direction
			# $rootScope.my.refresh()
		# $rootScope.my.Direction = $scope.Direction
		sock.send "Direction", {name:userid,Direction: $scope.Direction}
	$scope.$watch "sync", ->
		return false if not playerlist[userid]? or typeof playerlist[userid].getSync isnt "function"
		sync()
sync = ->
	return false if not playerlist[userid]?
	data = playerlist[userid].getSync()
	return false if not data
	data.name = userid
	sock.send "sync", data


app.directive 'moveBox', ($swipe)->
	return {
		restrict: 'E'
		controller: 'MoveController'
		controllerAs: "MoveCont"
		link: (scope, elem, attrs)->
			scope.moveing = false
			scope.point = false
			scope.Direction = true
			scope.jumping = false
			scope.sync = false
			_default = {
				x:0
				y:0
			}
			star = (evt)->
				evt.preventDefault()
				# console.log evt.touches[0].pageX,evt.touches[0].pageY
				_default.x = evt.touches[0].pageX
				_default.y = evt.touches[0].pageY

				scope.$apply ()->
					scope.point = true
					scope.moveing = true
					scope.sync = true
					setTimeout ->
						$(elem.children()[0]).css
							left: evt.touches[0].pageX
							top: evt.touches[0].pageY
					,0
			move = (evt)->
				x = evt.touches[0].pageX
				y = evt.touches[0].pageY
				mote = (_default.x - x)
				evt.preventDefault()
				if mote > 10 && scope.Direction isnt false
					scope.$apply ()->
						scope.Direction = false
				else if mote < -10 && scope.Direction isnt true
					scope.$apply ()->
						scope.Direction = true
				moteY = (_default.y - y)
				# console.log moteY
				if moteY > 40 && scope.jumping isnt true
					scope.$apply ()->
						scope.jumping = true
				else if scope.jumping
					scope.$apply ()->
						scope.jumping = false
				
			end = (evt)->
				scope.$apply ()->
					scope.moveing = false
					scope.point = false
					scope.jumping = false
					scope.sync = false
			elem.bind "touchstart",star
			elem.bind "touchmove",move
			elem.bind "touchend",end
	}
app.directive 'attackBox', ($swipe)->
	return {
		restrict: 'E'
		controller: 'AttackController'
		controllerAs: "attackCont"
		link: (scope, elem, attrs)->
			scope.attack = false
			star = (evt)->
				evt.preventDefault()
				scope.$apply ()->
					scope.attack = true
			move = (evt)->
				evt.preventDefault()
			end = (evt)->
				scope.$apply ()->
					scope.attack = false
			elem.bind "touchstart",star
			elem.bind "touchsmove",move
			elem.bind "touchend",end

			# scope.attack = false
			# $swipe.bind elem,{
			# 	start: (e,evt)->
			# 	move: (e,evt)->
			# 	end: (e)->
			# 		scope.attack = true
			# 		console.log "attack",scope
			# }
	}
app.directive "myCanvas", ($swipe)->
	return {
		restrict: 'E'
		template: '<canvas></canvas>'
		replace: true
		link: (scope, elem, attrs)->
			scope.$emit "to-create", 'parent'
	}