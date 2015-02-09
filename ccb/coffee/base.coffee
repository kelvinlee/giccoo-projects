# @codekit-prepend "../../libs/js/min/preloadjs-0.4.1.min.js"
# @codekit-prepend "../../libs/coffee/css3Prefix"
# @codekit-prepend "../../libs/coffee/requestanimation"
# @codekit-prepend "coffee/global"
# @codekit-prepend "../../libs/coffee/share"
# @codekit-prepend "../../libs/coffee/load"

# load list
debug = false
cdn = "/"
cdn = "http://disk.giccoo.com/projects/" unless debug
# cdn = "http://disk.giccoo.com/projects/"


loadList = [
	{id: "logo", src:"#{cdn}libs/img/loading.png"}
	{id: "bg", src: "#{cdn}ccb/img/bg.jpg"}
	{id: "river1", src: "#{cdn}ccb/img/river1.png"}
	{id: "river2", src: "#{cdn}ccb/img/river2.png"}
	{id: "btn-pass", src: "#{cdn}ccb/img/btn-pass.png"}
	{id: "icon-sound", src: "#{cdn}ccb/img/icon-sound.png"}
	{id: "y1", src: "#{cdn}ccb/img/y1.png"}
	{id: "y2", src: "#{cdn}ccb/img/y2.png"}
]

_wechat_f = 
	"appid": ""
	"img_url": "http://m.giccoo.com/ccb/img/share.jpg"
	"img_width": 300
	"img_height": 300
	"link": "http://m.giccoo.com/ccb"
	"desc": "建设银行抓羊年大钱."
	"title": "建设银行抓羊年大钱"
_wechat =
	"appid": ""
	"img_url": "http://m.giccoo.com/ccb/img/share.jpg"
	"img_width": 300
	"img_height": 300
	"link": "http://m.giccoo.com/ccb"
	"desc": "建设银行抓羊年大钱."
	"title": "建设银行抓羊年大钱"

hosts = "http://g.giccoo.com"

refreshShare = (title,desc)->
	_wechat.title = title
	_wechat_f.title = title
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
	$routeProvider.when '/:rd', {
		templateUrl: "home.html"
		controller: "MainController"
		controllerAs: "main"
	}
]
_tempH = 0
finishedRiver = ->
	console.log "load river",$(".bgimg").height()
	setTimeout ->
		if _tempH <= $(".bgimg").height()
			_tempH = $(".bgimg").height()
		$(".mubus").css
			"height": _tempH+"px"
	,10
# 主要加载
app.controller 'MainController', ($rootScope, $scope, $location, $timeout)->
	$scope.shakeYYY = ""
	$scope.src = "yyy"
	$scope.soundoff = "off"
	if $("body").height() <= 440
		$("body").addClass "iphone4"
	beginload $scope,()->
		for a in loadList
			$("img[data-lz=#{a.id}]").attr "src", a.src
	$rootScope.$on "$routeChangeSuccess", ->
		LoadFinished "angular",$scope
	$scope.$watch "loaded", ->
		if $scope.loaded
			# console.log preload.getResult("bg").height
			$scope.starPage = true
			$(".loaded").removeClass "loaded"
			finishedRiver()
			if $(".move").length>0
				$(".move")[0].addEventListener ANIMATION_END_NAME, (e)->
					return false if $(e.target).is(".river1") or $(e.target).is(".river2")
					$scope.$apply ->
						$scope.shakeYYY = "shakeAll"
						$timeout ->
							$scope.src = "yy"
						,20
						$timeout ->
							$scope.src = "y"
						,100
						$timeout ->
							$scope.pass() unless debug
						,2500
						# $scope.
	$scope.closeSound = ->
		if $scope.soundoff is "on"
			document.getElementById("audiobg").pause()
			# $scope.soundoff = "off"
		else
			document.getElementById("audiobg").play()
			# $scope.soundoff = "on"

	if $(".river").length > 0
		$scope.river = ""
		$scope.runRiver = ->
			$timeout ->
				$scope.river = if $scope.river is "" then "on" else ""
				$scope.runRiver()
			,300
		$scope.runRiver()
	# refreshShare()
	if $("#audiobg").length > 0
		audiobg = document.getElementById("audiobg")
		audiobg.addEventListener "pause", ()->
			# alert "已经暂停"
			$scope.$apply ->
				$scope.soundoff = "off"
		audiobg.addEventListener "play", ()->
			# alert "开始播放"
			$scope.$apply ->
				$scope.soundoff = "on"
	$scope.weiban = false
	$scope.hideweiban = ->
		$scope.starPage = false
		$location.path "/game"
	$scope.pass = ->
		$scope.weiban = true
		$scope.starPage = false
	$scope.$watch "weiban",->
		if $scope.weiban
			$timeout ->
				audiobg.pause()
				$location.path "/game" unless debug
			,5000

app.controller 'homeController', ($rootScope)->
	$rootScope.home = true

app.controller 'GameController', ($rootScope, $scope, $location, $timeout)->
	return $location.path '/' unless $rootScope.home
	this.wechat = false
	this.weiban = true
	this.gameBegin = false
	$scope.gameOver = false
	this.score = 0
	this.timer = 20
	this.Transcend = 1
	tis = this
	$timeout ->
		tis.weiban = false
	,5000
	mubu = {
		width: $("body").width()
		height: $("body").height()
	}
	this.items = {}
	$(document).on "touchstart",".item", (evt)->
		evt.preventDefault()
		lifeName = $(this).data "key"
		$scope.$apply ->
			delete tis.hitYYY lifeName

	this.hideweiban = ->
		this.weiban = false
	this.gameStar = ->
		this.gameBegin = true
		# this.gameOver = true
		this.putYYY()
		this.starTime = new Date().getTime()
		this.checkTime()
	this.checkTime = ->
		timeLife = 60
		n = (new Date().getTime() - this.starTime)/1000
		this.timer = timeLife - parseInt n
		if n >= timeLife
			$scope.gameOver = true
			return "over"
		$timeout ->
			tis.checkTime()
		,200
	this.putYYY = ->
		totleLife = 5000
		life = (new Date().getTime() - this.starTime)
		life = life/10
		life = 4000 if life>4000
		life = 0 if life<=0 or isNaN(life)
		# console.log parseInt life
		data = {name:"y",class:"y",style:{"transition-duration":(totleLife-life)+"ms",top:"100px",left:"100px"}}
		if parseInt(Math.random()*2) is 0
			data.name = "yyy"
			data.class = "yyy"
		data.style.top = "-80px"
		data.style.left = parseInt(Math.random()*(mubu.width)*0.8)+"px"
		max = 600 - (life/10)
		min = 350
		$timeout ->
			return false if $scope.gameOver
			lifeName = parseInt(Math.random()*10000)
			tis.items[lifeName] = data
			tis.putYYY()
			$timeout ->
				delete tis.items[lifeName]
				setTimeout ->
					if $(".item-#{lifeName}.y").length > 0
						$scope.$apply ->
							$scope.gameOver = true
					$(".item-#{lifeName}").remove()
				,10
			,totleLife-life-20
		,parseInt(Math.random()*(max-min)+min)
	this.hitYYY = (e)->
		# console.log e,tis.items[e]
		dom = tis.items[e]
		if dom.name is "y"
			delete tis.items[e]
			setTimeout -> $(".item-#{e}").remove()
			tis.score += 100
			audio = document.getElementById "audiocoin"
			audio.currentTime = 0
			audio.play()
		else
			$scope.gameOver = true
			audio = document.getElementById "audioyyy"
			audio.currentTime = 0
			audio.play()
	this.regame = ->
		$location.path "/"
	this.showShare = ->
		if this.wechat
			this.wechat = false
		else
			this.wechat = true
	$scope.$watch "gameOver", ->
		tis.Transcend = parseInt tis.score / 40
		if tis.Transcend >= 100
			tis.Transcend = 99
		else if tis.Transcend <= 0
			tis.Transcend = 1
		if $scope.gameOver
			refreshShare "我抓到#{tis.score/100}只￥财！你也来试试手气吧！"




# app.controller 'ShareController', ($rootScope, $scope, $location)->
	