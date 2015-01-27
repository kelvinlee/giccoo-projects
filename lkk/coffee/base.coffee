# @codekit-prepend "../../libs/js/min/preloadjs-0.4.1.min.js"
# @codekit-prepend "../../libs/coffee/css3Prefix"
# @codekit-prepend "../../libs/coffee/requestanimation"
# @codekit-prepend "coffee/global"
# @codekit-prepend "../../libs/coffee/share"
# @codekit-prepend "../../libs/coffee/load"

cdn = "http://disk.giccoo.com/projects/"
# cdn = "/"

# load list
loadList = [
	# {id: "logo", src: "#{cdn}libs/img/loading.png"}
	{id: "logo", src: "#{cdn}lkk/img/logo.png"}
	# {id: "star-page", src: "#{cdn}lkk/img/star-page.png"}
	# {id: "page-2-select", src: "#{cdn}lkk/img/page-2-select.png"}
	{id: "star-btn", src: "#{cdn}lkk/img/star-btn.png"}
	{id: "dish-1", src: "#{cdn}lkk/img/dish-1.png"}
	{id: "dish-2", src: "#{cdn}lkk/img/dish-2.png"}
	{id: "dish-3", src: "#{cdn}lkk/img/dish-3.png"}
	{id: "dish-4", src: "#{cdn}lkk/img/dish-4.png"}
	# {id: "dish-select", src: "#{cdn}lkk/img/page-2-select.png"}
	{id: "game-point", src: "#{cdn}lkk/img/game-point.png"}
]

# console.log loadList


_wechat_f = 
	"appid": ""
	"img_url": "http://disk.giccoo.com/projects/lkk/img/share.jpg"
	"img_width": 300
	"img_height": 300
	"link": "http://m.giccoo.com/lkk"
	"desc": "李锦记."
	"title": "李锦记"
_wechat =
	"appid": ""
	"img_url": "http://disk.giccoo.com/projects/lkk/img/share.jpg"
	"img_width": 300
	"img_height": 300
	"link": "http://m.giccoo.com/lkk"
	"desc": "李锦记."
	"title": "李锦记"

hosts = "http://g.giccoo.com"

refreshShare = (title,desc)->
	_wechat.title = "我用财神耗油完成了#{title}盘菜，打败了#{desc}%的人，不服来战！"
	_wechat_f.title = "我用财神耗油完成了#{title}盘菜，打败了#{desc}%的人，不服来战！"
	reloadWechat()
defaultShare = ->
	_wechat.title = "新春送财神，过个滋味年！"
	_wechat_f.title = "新春送财神，过个滋味年！"
	reloadWechat()


app = angular.module('kelvin', ["ngRoute","ngTouch","ngAnimate"])
.config ["$routeProvider", "$locationProvider" ,($routeProvider, $locationProvider)->
	$routeProvider.when '/',{
		templateUrl: "home.html"
		controller: "MainController"
		controllerAs: "main"
	}
	$routeProvider.when '/game',{
		templateUrl: "game.html"
	}
	$routeProvider.when '/share',{
		templateUrl: "share.html"
	# 	controller: "ShareController"
	# 	controllerAs: "share"
	}
]
# 主要加载
app.controller 'MainController', ($rootScope, $scope, $location, $http)->
	$rootScope.CanRun = true
	if $("body").height() <= 440
		$("body").addClass "iphone4"
	beginload $scope
		# for a in loadList
			# $("img[data-lz=#{a.id}]").attr "src", a.src
	$rootScope.$on "$routeChangeSuccess", ->
		LoadFinished "angular",$scope
	$scope.$watch "loaded", ->
		$(".loaded").removeClass "loaded" if $scope.loaded
	defaultShare()
	orientationChange = ->
		switch window.orientation
			when 0
				$scope.$apply ->
					$rootScope.ori = false
			when 90
				$scope.$apply ->
					$rootScope.ori = true
			when -90
				$scope.$apply ->
					$rootScope.ori = true
			else
				$scope.$apply ->
					$rootScope.ori = false

			
		
	window.addEventListener (if "onorientationchange" in window then "orientationchange" else "resize"), orientationChange, false
	
app.controller 'gameController', ($rootScope, $scope, $location, $timeout)->
	android = if navigator.userAgent.indexOf('iPhone') > -1 then false else yes
	dishs = ['1','2','3','4']
	starUp = false
	starTime = 0
	this.gameStar = false
	this.dish = true
	this.starFrom = 0
	$scope.score = 0
	$scope.timer = 20
	$scope.run = "run"
	$("#dishs").html ""
	this.choose = (i)->
		this.starFrom = i - 1
		this.gameStar = true
		$timeout ->
			starTime = new Date().getTime()
			window.addEventListener('devicemotion',deviceMotionHandler, false)
			$rootScope.CanRun = true
			tis._checkDrop()
		,2600
	_lastTime = {
		x: 0
		y: 0
		z: 0
	}
	putTime = 0
	tis = this
	backtoNormal = ->
		$(".wrap").css
			"transform":"rotate(0deg)"
			"-webkit-transform":"rotate(0deg)"
		$("#Bottle").css
			"transform":"rotate(-90deg)"
			"-webkit-transform":"rotate(-90deg)"
		# $("#Bottle").attr "moved","true" if ($("#Bottle").attr("moved") isnt "true") and not $("#drop").is(".dropping")
	Dripping = (time)->
		# window.removeEventListener 'devicemotion',deviceMotionHandler
		if time-putTime > 600
			# $(".log").html $("#Bottle").height()+","+$("#Bottle").offset().top+","
			putTime = time
			if preload.getResult("game-point")?
				e = $ preload.getResult "game-point"
				clone = $("#drop").clone().html e.clone()
			else
				clone = $("#drop").clone().html "<img src='#{cdn}lkk/img/game-point.png' />"
			clone[0].addEventListener ANIMATION_END_NAME, (e)->
				$(this).remove()
				# starUp = true
				# $scope.$apply ->
					# $scope.timer = 0
			$(".page-game").append clone
			clone.css
				"top": "30%"
				"left": "50%"
			clone.addClass "dropping"
		# backtoNormal()
	deviceMotionHandler = (eventData)->
		acceleration = eventData.accelerationIncludingGravity
		# $(".log").html android+","+(90-acceleration.x*6)
		# acceleration.x = -acceleration.x if android
		return backtoNormal() if (Math.abs(parseInt(acceleration.x*100)) < 100) and (Math.abs(parseInt(acceleration.x*100)) > -100)
			# backtoNormal()
			
		if Math.abs(parseInt(acceleration.x*100)-_lastTime.x) > 15
			# $(".log").html parseInt(acceleration.x*100)+","+_lastTime.x
			# $(".wrap").css
			# 	"transform":"rotate(#{-acceleration.x*6}deg)"
			# 	"-webkit-transform":"rotate(#{-acceleration.x*6}deg)"
			if android
				$("#Bottle").css
					"transform":"rotate(#{-(90+acceleration.x*6)}deg)"
					"-webkit-transform":"rotate(#{-(90+acceleration.x*6)}deg)"
				Dripping new Date().getTime() if (90+acceleration.x*6)>100
			else
				$("#Bottle").css
					"transform":"rotate(#{-(90-acceleration.x*6)}deg)"
					"-webkit-transform":"rotate(#{-(90-acceleration.x*6)}deg)"
				Dripping new Date().getTime() if (90-acceleration.x*6)>100

		_lastTime.x = parseInt(acceleration.x*100)
	newdish = 0
	this._checkDrop = ->
		# console.log starUp,tis.gameStar
		checkHit()
		if new Date().getTime()-newdish > 1200
			newdish = new Date().getTime()
			addNewDish()
		window.requestAnimationFrame tis._checkDrop	if not starUp and $rootScope.CanRun
	addNewDish = ->
		if tis.starFrom >= dishs.length
			tis.starFrom = 0
		# lostTime = 5000 - (new Date().getTime()-starTime)/5
		lostTime = 2300
		item = $("<div>").addClass "item"
		if preload.getResult("dish-#{tis.starFrom+1}")?
			e = $ preload.getResult "dish-#{tis.starFrom+1}"
			item.append e.clone()
		else
			item.append "<img src=\"#{cdn}lkk/img/dish-#{tis.starFrom+1}.png\" />"
		item.css
			"animation-duration": "#{lostTime}ms"
			"-webkit-animation-duration": "#{lostTime}ms"
		item[0].addEventListener ANIMATION_END_NAME, (e)->
			$(this).remove()
		$("#dishs").append item
		tis.starFrom++
	checkHit = ->
		if $(".dropping").length > 0
			for i in [0...$(".dropping").length]
				d = $(".dropping").eq(i).offset()
				for j in [0...$("#dishs .item").length]
					e = $("#dishs .item").eq(j).offset()
					if (d.left >= (e.left + e.width)) or ((d.left + d.width) <= e.left) or (d.top >= (e.top + e.height)) or ((d.top + d.height) <= e.top)
						continue
					else
						# $scope.$apply -> 
						$scope.score += 100
						$scope.$apply()
						$(".dropping").eq(i).remove()
						$("#dishs .item").eq(j).addClass "hit"
						return true
		setTimeout ->
			$scope.$apply ->
				$scope.timer = parseInt (21000 - (new Date().getTime()-starTime))/1000
				if $scope.timer <= 0
					starUp = true
		,0
		yes
	$scope.$watch "timer", ->
		if $scope.timer <= 0
			window.removeEventListener 'devicemotion',deviceMotionHandler
			backtoNormal()
			$scope.run = ""
			$rootScope.score = $scope.score
			$location.path '/share'
			# console.log "Game over"
	# $("#Bottle").attr "moved","true"
	backtoNormal()

app.controller 'ShareController', ($rootScope, $scope, $location)->
	$rootScope.jd = false
	this.showpop = false
	this.recode = "test"
	this.score = if $rootScope.score? then $rootScope.score else -1

	if this.score is -1
		$location.path "/"
		return false
	else
		this.text = parseInt (this.score/1900)*100
		if this.text >= 100
			this.text = 99
		if this.text <= 0
			this.text = 1
		if this.text > 50
			this.text2 = "你是接财神的高手"
		else
			this.text2 = "要不要再试一次?"
	refreshShare $rootScope.score/100,this.text
	tis = this
	this.getPrize = ->
		this.showpop = true
	this.close = ->
		this.showpop = false
	this.regame = ->
		$location.path "/game"

app.controller 'FormController', ($rootScope, $scope, $location, $http)->
	$scope.formData = {}
	$scope.processForm = ->
		$http
		.post "http://api.giccoo.com/lkk/insert/", $scope.formData
		.success (data)->
			if data.recode isnt 200
				alert data.reason
			else
				$rootScope.jd = true
		.error (data)->
			# console.log $.param($scope.formData)
			alert "服务器连接出错了"

