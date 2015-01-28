# @codekit-prepend "../../libs/js/min/preloadjs-0.4.1.min.js"
# @codekit-prepend "../../libs/coffee/css3Prefix"
# @codekit-prepend "../../libs/coffee/requestanimation"
# @codekit-prepend "coffee/global"
# @codekit-prepend "../../libs/coffee/share"
# @codekit-prepend "../../libs/coffee/load"

# load list
cdn = "http://disk.giccoo.com/projects"
# cdn = ""

loadList = [
	{id: "logo", src:"#{cdn}/libs/img/loading.png"}
	{id: "bg", src: "#{cdn}/ccb/img/bg.jpg"}
	{id: "btn-pass", src: "#{cdn}/ccb/img/btn-pass.png"}
	{id: "icon-sound", src: "#{cdn}/ccb/img/icon-sound.png"}
	{id: "y1", src: "#{cdn}/ccb/img/y1.png"}
	{id: "y2", src: "#{cdn}/ccb/img/y2.png"}
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
app.controller 'MainController', ($rootScope, $scope, $location, $timeout)->
	$scope.shakeYYY = ""
	$scope.src = "yyy"
	$scope.soundoff = ""
	if $("body").height() <= 440
		$("body").addClass "iphone4"
	beginload $scope,()->
		for a in loadList
			$("img[data-lz=#{a.id}]").attr "src", a.src
	$rootScope.$on "$routeChangeSuccess", ->
		LoadFinished "angular",$scope
	$scope.$watch "loaded", ->
		if $scope.loaded
			$(".loaded").removeClass "loaded" 
			$scope.starPage = true
			if $(".move").length>0
				$(".move")[0].addEventListener ANIMATION_END_NAME, (e)->
					$scope.$apply ->
						$scope.shakeYYY = "shakeAll"
						$timeout ->
							$scope.src = "yy"
						,100
						$timeout ->
							$scope.src = "y"
						,500
						$timeout ->
							$location.path "/game"
						,2000
						# $scope.
	$scope.closeSound = ->
		if $scope.soundoff is "on"
			document.getElementById("audiobg").pause()
			# $scope.soundoff = "off"
		else
			document.getElementById("audiobg").play()
			# $scope.soundoff = "on"

	refreshShare()
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

	

app.controller 'GameController', ($rootScope, $scope, $location, $timeout)->
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
	this.hideweiban = ->
		this.weiban = false
	this.gameStar = ->
		this.gameBegin = true
		# this.gameOver = true
		this.putYYY()
		this.starTime = new Date().getTime()
		this.checkTime()
	this.checkTime = ->
		timeLife = 30
		n = (new Date().getTime() - this.starTime)/1000
		this.timer = timeLife - parseInt n
		if n >= timeLife
			$scope.gameOver = true
			return "over"
		$timeout ->
			tis.checkTime()
		,200
	this.putYYY = ->
		data = {name:"y",class:"y",style:{top:"100px",left:"100px"}}
		if parseInt(Math.random()*3) is 0
			data.name = "yyy"
			data.class = "yyy"
		data.style.top = (30+parseInt(Math.random()*(mubu.height)*0.8))+"px"
		data.style.left = parseInt(Math.random()*(mubu.width)*0.9)+"px"
		$timeout ->
			return false if $scope.gameOver
			lifeName = parseInt(Math.random()*10000)
			tis.items[lifeName] = data
			tis.putYYY()
			$timeout ->
				delete tis.items[lifeName]
			,10000
		,300
	this.hitYYY = (e)->
		# console.log e,tis.items[e]
		dom = tis.items[e]
		if dom.name is "y"
			delete tis.items[e]
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
		refreshShare ""




# app.controller 'ShareController', ($rootScope, $scope, $location)->
	