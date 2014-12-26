# @codekit-prepend "../../libs/js/preloadjs-0.4.1.min.js"
# @codekit-prepend "../../libs/coffee/css3Prefix"
# @codekit-prepend "coffee/global"
# @codekit-prepend "js/vendor/exif.js"
# @codekit-prepend "../../libs/js/megapix-image.js"
# @codekit-prepend "../../libs/coffee/share"
# @codekit-prepend "../../libs/coffee/load"

# load list
loadList = [
	{id: "logo", src:"../libs/img/loading.png"}
	{id: "first-frame", src: "img/first-frame.png"}
	{id: "plane", src: "img/plane.png"}
	{id: "title-shrimp", src: "img/title-shrimp.png"}
	{id: "title-vegetable", src: "img/title-vegetable.png"}
	{id: "vegetable-Broccoli", src: "img/vegetable-Broccoli.png"}
	{id: "vegetable-Carrot", src: "img/vegetable-Carrot.png"}
	{id: "timer", src: "img/timer.png"}
	{id: "score", src: "img/score.png"}
	{id: "progress-bg", src: "img/progress-bg.png"}
	{id: "stoves-bg", src: "img/stoves-bg.png"}
	{id: "score-up", src: "img/score-up.png"}
	{id: "score-down", src: "img/score-down.png"}
	{id: "shrimp-dead", src: "img/shrimp-dead.png"}
	{id: "stoves", src: "img/stoves.png"}
	{id: "note", src: "img/note.png"}
	{id: "success-img", src: "img/success-img.png"}
	{id: "title-success", src: "img/title-success.png"}
	{id: "star", src: "img/star.png"}
	{id: "success-text", src: "img/success-text.png"}
	{id: "share-plane", src: "img/share-plane.png"}
	{id: "btns", src: "img/btns.png"}
	{id: "followus", src: "img/followus.png"}

	# {id: "", src: ""}
]

_wechat_f = 
	"appid": ""
	"img_url": "http://m.giccoo.com/shrimp/img/share.jpg"
	"img_width": 200
	"img_height": 200
	"link": ""
	"desc": "这道菜的关键是选择阿根廷红虾."
	"title": "我刚做了一道'红焖大虾'快来尝尝."
_wechat =
	"appid": ""
	"img_url": "http://m.giccoo.com/shrimp/img/share.jpg"
	"img_width": 200
	"img_height": 200
	"link": ""
	"desc": "这道菜的关键是选择阿根廷红虾."
	"title": "我刚做了一道'红焖大虾'快来尝尝."

hosts = "http://g.giccoo.com"

refreshShare = (title,desc)->
	# url = "http://m.giccoo.com/iwatch/#/share/#{shareContent.watch}/#{shareContent.watchband}/#{shareContent.wall}"
	arr = ["日式炸虾","DIY麻辣虾","油焖大虾","清蒸大虾","椒盐虾","麻辣虾","香辣虾","红酒番茄虾","红烧大虾","油闷大虾","白灼虾","油爆大虾","日式鲜虾饭团","玉米香菇虾肉饺","美国烤虾串"]
	cm = arr[Math.floor Math.random()*arr.length]
	_wechat_f.title = title.replace "{cm}",cm
	_wechat.title = title.replace "{cm}",cm
	_wechat_f.desc = desc
	_wechat.desc = desc
	reloadWechat()


app = angular.module('kelvin', ["ngRoute","ngTouch","ngAnimate"])
.config ["$routeProvider", "$locationProvider" ,($routeProvider, $locationProvider)->
	$routeProvider.when '/',{
		templateUrl: "home.html"
		controller: "MainController"
		controllerAs: "main"
	}
	$routeProvider.when '/select',{
		templateUrl: "select.html"
		controller: "SelectController"
		controllerAs: "select"
	}
	$routeProvider.when '/share',{
		templateUrl: "share.html"
		controller: "ShareController"
		controllerAs: "share"
	}
]
# 主要加载
app.controller 'MainController', ($rootScope, $scope)->
	beginload $scope
	$rootScope.$on "$routeChangeSuccess", ->
		LoadFinished "angular",$scope
	$scope.$watch "loaded", ->
		$(".loaded").removeClass "loaded" if $scope.loaded

	refreshShare "我刚做了一道'{cm}'快来尝尝.","这道菜的关键是选择阿根廷红虾."

# 选择菜品
app.controller "SelectController", ($rootScope, $scope, $animate, $timeout, $location)->
	this.Shrimplist = ["","",""]
	this.Vegetablelist = ["","","","","",""]
	this.progress = "note-pop"
	this.starTime = null
	this.RandomProgress = ""
	this.TimerText = "20'00"
	this.ScoreText = 0
	this.OverScore = 0
	this.flame = 0
	this.animateCache = null
	acc = {x:0,y:0,z:0}
	SHAKE_THRESHOLD = 800
	last_update = 0
	# false
	$scope.selectFinished = false
	$scope.gameStar = false
	tis = this
	$scope.$watch "selectFinished", ->
		tis.blur = "blur-show" if $scope.selectFinished

	this.selectShrimp = (n)->
		return "" if tis.Shrimplist[n-1] is "hide"
		tis.stop = false
		ep = $(".shrimp-list span").eq(n-1)
		os = ep.offset()
		tis.Shrimplist[n-1] = "hide"
		e = $(".shrimp-moving span").eq(n-1)[0]
		st = $(".stove")
		tis.ScoreText += 50 + parseInt Math.random()*300
		$animate.addClass e, 'on', {
			from: {
				"top": os.top+"px"
				"left": os.left+"px"
				"width": os.width+"px"
				"height": os.height+"px"
			}
			to:{
				"top": st.offset().top+"px"
				"left": (st.offset().left+st.offset().width/2-os.width/2)+"px"
			}
		}
		.then ->
			tis.rock = "rock"
			$scope.$apply()
			$timeout ->
				tis.rock = ""
				t = true
				for hide in tis.Shrimplist
					if hide isnt "hide"
						t = false
						break
				tis.movend = true if t
			,500
	this.selectVegetable = (n)->
		return "" if tis.Vegetablelist[n] is "hide" or $(".vegetable-list span.hide").length >= 3
		ep = $(".vegetable-list span").eq(n)
		os = ep.offset()
		tis.Vegetablelist[n] = "hide"
		e = $(".vegetable-moving span").eq(n)[0]
		st = $(".stove")
		tis.ScoreText += 100 + parseInt Math.random()*200
		$animate.addClass e, 'on', {
			from: {
				"top": os.top+"px"
				"left": os.left+"px"
				"width": os.width+"px"
				"height": os.height+"px"
			}
			to:{
				"top": st.offset().top+"px"
				"left": (st.offset().left+st.offset().width/2-os.width/2)+"px"
			}
		}
		.then ->
			tis.rock = "rock"
			$scope.$apply()
			$timeout ->
				tis.rock = ""
				t = 0
				for hide in tis.Vegetablelist
					t++ if hide is "hide"
				$scope.selectFinished = true if t >= 3
			,500
	this.GameStar = ->
		return "" if $scope.gameStar
		tis.blur = ""
		$scope.gameStar = true
		tis.progress = "readyStar"
		$timeout ->
			tis.progress = "slow"
		,500
		setTimeout ->
			# console.log "game start"
			tis.starTime = new Date().getTime()
			tis.OverScore = tis.ScoreText
			tis.TimerStart()
			tis.TimerRun()
			tis.StarMotion true
		,600
		setTimeout ->
			tis.stopAll()
		,20600
	this.TimerStart = ->
		elem = $(".timer-shrimp")[0]
		tis.progress = "slow"
		$scope.$apply ->
			$timeout ->
				tis.animateCache = $animate.addClass elem, "on", {
					from: {
						"left": "10%"
					}
					to:{
						"left": "90%"
					}
				}
				tis.animateCache.then ->
					tis.finished()
			,100
			# tis.TimerStart()
	this.finished = ->
		return "" if tis.stop
		elem = $(".timer-shrimp")[0]
		tis.progress = "readyStar"
		$scope.$apply ->
			$timeout ->
				tis.RandomProgress = "l"+parseInt(Math.random()*10)
				elem.removeAttribute "style"
				$animate.removeClass elem, "on"
				.then ->
					tis.TimerStart()
			,100
	this.TimerRun = ->
		return "" if tis.stop is true
		$timeout ->
			if tis.flame >= 5
				tis.flame = 0
			else
				tis.flame += 1
			t = parseInt((20000 - (new Date().getTime() - tis.starTime))/10)
			if t < 50
				tis.TimerText = "0'00"
			else
				tis.TimerText = parseInt(t/100)+"'"+if t%100 < 10 then "0"+t%100 else t%100
			if tis.OverScore > tis.ScoreText
				tis.ScoreText += parseInt (tis.OverScore-tis.ScoreText)/20
			else if tis.OverScore < tis.ScoreText + 20
				tis.ScoreText -= parseInt (tis.ScoreText-tis.OverScore)/10
			else
				tis.ScoreText = tis.OverScore

			tis.TimerRun()
		,1000/30
	this.StarMotion = (bool)->
		if bool
			window.addEventListener('devicemotion',tis.deviceMotionHandler, false) if window.DeviceMotionEvent?
		else
			window.removeEventListener('devicemotion',tis.deviceMotionHandler, false) if window.DeviceMotionEvent?
	this.deviceMotionHandler = (eventData)->
		acceleration = eventData.accelerationIncludingGravity
		curTime = new Date().getTime()
		if (curTime - last_update ) > 100
			diffTime = curTime - last_update
			last_update = curTime
			speed = Math.abs(acceleration.x + acceleration.y + acceleration.z - acc.x - acc.y - acc.z)/diffTime*10000
			# console.log speed
			tis.CheckShrimp() if speed > SHAKE_THRESHOLD
			acc.x = acceleration.x
			acc.y = acceleration.y
			acc.z = acceleration.z
	this.CheckShrimp = ->
		return "" if tis.fireon
		elem = $(".Stoves")[0]
		t = new Date().getTime()
		tis.fireon = true
		es = $(".timer-shrimp").offset()
		eg = $(".progress-green").offset()
		# console.log es.left > eg.left-es.width && es.left < eg.left+eg.width-es.width
		if es.left > eg.left-es.width && es.left < eg.left+eg.width-es.width
			tis.ScoreRun true
		else
			tis.ScoreRun false
		$animate.addClass elem, "fire"
		.then ->
			# console.log "over", new Date().getTime() - t, elem
			$scope.$apply ->
				$animate.removeClass elem, "fire"
				tis.fireon = false
	this.ScoreRun = (bool)->
		return "" if tis.stop
		elem = if bool then $(".score-item-up")[0] else $(".score-item-down")[0]
		if bool
			tis.OverScore += 600
		else
			tis.OverScore -= 200
		# console.log tis.OverScore
		$animate.addClass elem, "on"
		.then ->
			$scope.$apply ->
				$animate.removeClass elem, "on"
	this.stopAll = ->
		$scope.$apply ->
			tis.stop = true
			tis.StarMotion false
			elem = $(".timer-shrimp")[0]
			l0 = $(".progress").offset()
			l1 = $(".timer-shrimp").offset()
			lc = (l1.left-l0.left)/l0.width*100
			tis.progress = "stop"
			$animate.cancel tis.animateCache
			# setTimeout ->
			refreshShare "我刚做了一道价值#{tis.ScoreText}元的'{cm}'快来尝尝.","这道菜的关键是选择阿根廷红虾."
			$rootScope.sharetext = "我刚做了一道价值#{tis.ScoreText}元的'{cm}'快来尝尝."
			$rootScope.sharedesc = "这道菜的关键是选择阿根廷红虾."
			$(".timer-shrimp").css
				left: (lc+6)+"%"
			$timeout ->
				$location.path "/share"
			, 500
	# this.StarMotion true
	this.shrimp = true

# 分享
app.controller "ShareController", ($rootScope, $scope)->
	if not $rootScope.sharetext? 
		$rootScope.sharetext = "我刚做了一道'红焖大虾'快来尝尝."
		$rootScope.sharedesc = "这道菜的关键是选择阿根廷红虾."
	BindShare $rootScope.sharetext,"http://m.giccoo.com/shrimp",""
	tis = this
	this.showWechat = (bool)->
		tis.shareWechat = bool
	this.showPlane = ->
		if tis.sharePlane
			tis.sharePlane = false
		else
			tis.sharePlane = true
	this.shareWechat = false
	this.sharePlane = false		
	


