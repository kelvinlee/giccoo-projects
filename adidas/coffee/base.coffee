# @codekit-prepend "../../libs/js/min/preloadjs-0.4.1.min.js"
# @codekit-prepend "../../libs/coffee/css3Prefix"
# @codekit-prepend "../../libs/coffee/requestanimation"
# @codekit-prepend "coffee/global"
# @codekit-prepend "../../libs/coffee/share"
# @codekit-prepend "../../libs/coffee/load"

# @codekit-prepend "city"

debug = false
# cdn = "http://disk.giccoo.com/projects/"
cdn = "/"

# load list
loadList = [
	{id: "logo", src: "img/logo.png"}
	{id: "m-1", src: "img/m-1.jpg"}
	{id: "m-2", src: "img/m-2.jpg"}
	{id: "m-3", src: "img/m-3.jpg"}
	{id: "w-1", src: "img/w-1.jpg"}
	# {id: "logo", src: "#{cdn}adidas/img/loading.png"}
]

# console.log loadList


_wechat_f = 
	"appid": ""
	"img_url": "http://campaign.douban.com/files/campaign/Adidas/img/share.jpg"
	"img_width": 300
	"img_height": 300
	"link": "http://campaign.douban.com/files/campaign/Adidas/default.html"
	"desc": "陈冠希、蔡依林引领街头潮流，演绎经典zx family鞋款"
	"title": "陈冠希、蔡依林引领街头潮流，演绎经典zx family鞋款"
_wechat =
	"appid": ""
	"img_url": "http://campaign.douban.com/files/campaign/Adidas/img/share.jpg"
	"img_width": 300
	"img_height": 300
	"link": "http://campaign.douban.com/files/campaign/Adidas/default.html"
	"desc": "陈冠希、蔡依林引领街头潮流，演绎经典zx family鞋款"
	"title": "陈冠希、蔡依林引领街头潮流，演绎经典zx family鞋款"

# hosts = "http://g.giccoo.com"

defaultShare = (title)->
	_wechat.title = title
	_wechat_f.title = title
	reloadWechat()

pages = ['men1','men2','men3','men4',"men5",'women1','women2','women3','store']
app = angular.module('kelvin', ["ngRoute","ngTouch","ngAnimate"])
.config ["$routeProvider", "$locationProvider" ,($routeProvider, $locationProvider)->
	$routeProvider.when '/',{
		templateUrl: "home.html"
		controller: "HomeController"
	}
	$routeProvider.when '/rd',{
		templateUrl: "home.html"
		controller: "HomeController"
	}
	for page in pages
		$routeProvider.when '/'+page,{
			templateUrl: "#{page}.html"
		}
	$routeProvider.when '/:rd', {
		templateUrl: "home.html"
		controller: "HomeController"
	}
]
app.run ($rootScope, $location)->
	history = []
	# console.log "history",history
	$rootScope.$on '$routeChangeSuccess', ->

		newPage = $location.$$path.replace('/','')
		oldPage = if history[history.length-1]? then history[history.length-1].replace('/','') else "-1"

		history.push $location.$$path
		# return $rootScope.from = "same" if oldPage is "-1"
		# return $rootScope.from = "same" if newPage is oldPage
		return $rootScope.from = "left" if newPage is "men1" and oldPage is ""
		return $rootScope.from = "right" if newPage is "women1" and oldPage is ""

		if pages.indexOf(newPage) > pages.indexOf(oldPage)
			$rootScope.from = "up"
		else
			$rootScope.from = "down"
keyWH = {w:1,h:1}
# 主要加载
app.controller 'MainController', ($rootScope, $scope, $location, $http)->
	# console.log "aa"
	$rootScope.CanRun = true
	if $("body").height() <= 440
		$("body").addClass "iphone4"
	if $("body").height() > 500 or $("body").width() > 320
		s1 = $("body").height()/500
		s2 = keyWH.w = keyWH.h = $("body").width()/320
		keyWH.w = keyWH.h = s1 if s1>s2
		console.log keyWH
	beginload $scope
	$rootScope.$on "$routeChangeSuccess", ->
		LoadFinished "angular",$scope
	$scope.$watch "loaded", ->
		$(".loaded").removeClass "loaded" if $scope.loaded
	defaultShare "陈冠希、蔡依林引领街头潮流，演绎经典zx family鞋款"
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
	# $scope.path = $location.path()	

	$scope.$on '$locationChangeStart',(evt, absNewUrl, absOldUrl) ->
		# console.log('start', absNewUrl.split("#")[1], absOldUrl.split("#")[1])
		newPage = absNewUrl.split("#")[1]
		oldPage = absOldUrl.split("#")[1]
		$scope.path = if newPage is "/" then "home" else newPage.replace("/","")
		# return $rootScope.from = "same" if newPage is oldPage
		# console.log newPage,oldPage,pages.indexOf(newPage),pages.indexOf(oldPage)
		if pages.indexOf(newPage) > pages.indexOf(oldPage)
			$rootScope.from = "up"
		else
			$rootScope.from = "down"

app.controller 'HomeController', ($rootScope, $scope, $location)->
	$rootScope.home = "home"
	# $scope.pagename = "home"

app.controller 'swipeController', ($rootScope, $scope, $location)->
	# stop()
	$scope.runPageX = (bool)->
		# alert bool
		$scope.$apply ->
			if bool
				$location.path("/men1")
			else
				$location.path("/women1")

	$scope.runPage = (bool,nextpage)->
		# console.log bool
		$scope.$apply ->
			$location.path('/'+nextpage)
	if $rootScope.home isnt "home"
		$location.path "/" unless debug

app.controller 'storeController', ($rootScope, $scope, $location, $timeout)->
	# alert "store"
	$scope.city = "beijing"
	# $scope.area = "0"
	tis = this
	this.changeCity = ->
		# console.log $scope.city
		tis.area = eval($scope.city)
		$scope.area = tis.area[0]
		tis.shoplist = tis.area[0].list
		return true
		# console.log tis.area
	this.changed = ->
		# console.log $scope.area
		tis.shoplist = $scope.area.list
		return true
	this.changeCity()
	if $rootScope.home isnt "home"
		$location.path "/" unless debug

app.controller 'menController', ($scope, $location, $timeout)->
	this.note = false
	tis = this
	this.popshow = false
	this.canclick = true
	this.noctrl = "all"
	this.open = "slideToLeft delay-15 duration-5"
	this.Pop = (show)->
		# console.log show
		return false unless tis.canclick
		tis.canclick = false
		unless tis.note
			tis.popshow = show
			$timeout ->
				tis.canclick = true
			,200
app.controller 'womenController', ($scope, $location, $timeout)->
	this.note = false
	tis = this
	this.popshow = false
	this.canclick = true
	this.noctrl = "all"
	this.open = "slideToLeft delay-15 duration-5"
	this.Pop = (show)->
		# console.log show
		return false unless tis.canclick
		tis.canclick = false
		unless tis.note
			tis.popshow = show
			$timeout ->
				tis.canclick = true
			,200




app.directive "parallay", ($location)->
	return {
		restrict: 'EA'
		link: (scope, elem, attrs)->
			# console.log attrs["noCtrl"]
			_d = {
				x: 0
				y: 0
				birthday: 0
				run: false
			}
			elem.on "touchstart", (evt)->
				touch = evt.touches[0]
				_d.x = touch.pageX
				_d.y = touch.pageY
				_d.birthday = new Date().getTime()
			elem.on "touchmove", (evt)->
				touch = evt.touches[0]
				gone = _d.x - touch.pageX
				# console.log "move",gone
				if gone < -50 and not _d.run and attrs["noCtrl"] isnt "up"
					scope.runPageX true,attrs["prepage"]
				if gone > 50 and not _d.run and attrs["noCtrl"] isnt "down"
					scope.runPageX false,attrs["nextpage"]
				evt.preventDefault()
			elem.on "touchend", (evt)->
				# scope.runPage true
				_d.run = false
	}

app.directive "parallax", ($location)->
	return {
		restrict: 'EA'
		link: (scope, elem, attrs)->
			# console.log attrs["noCtrl"]
			_d = {
				x: 0
				y: 0
				birthday: 0
				run: false
			}
			elem.on "touchstart", (evt)->
				touch = evt.touches[0]
				_d.x = touch.pageX
				_d.y = touch.pageY
				_d.birthday = new Date().getTime()
			elem.on "touchmove", (evt)->
				touch = evt.touches[0]
				gone = _d.y - touch.pageY
				# console.log "move",gone
				if gone < -50 and not _d.run and attrs["noCtrl"] isnt "up"
					scope.runPage true,attrs["prepage"]
				if gone > 50 and not _d.run and attrs["noCtrl"] isnt "down"
					scope.runPage false,attrs["nextpage"]
				evt.preventDefault()
			elem.on "touchend", (evt)->
				# scope.runPage true
				_d.run = false
	}

app.directive 'scrollBox', ->
	return {
		restrict: 'EA'
		link: (scope, elem, attrs)->
			# console.log elem,$(elem[0]).offset()
			_d = {
				x: 0
				y: 0
				w: 0
				h: 0
				starY: 0
				maxH: 0
				birthday: 0
				run: false
				direction: null
			}
			getScroll = ->
				if 'webkitTransform' of elem[0].style
					translate3d = elem[0].style.webkitTransform.match /translate3d\(([^)]+)\)/
					ret = if translate3d? then translate3d[1].split(",") else [0,0,0]
					return parseInt ret[1],10
			# console.log TRANSITION_END_NAMES
			
			elem.on "touchstart", (evt)->
				touch = evt.touches[0]
				_d.x = touch.pageX
				_d.y = touch.pageY - getScroll()
				_d.starY = getScroll()
				_d.maxH = $(elem[0]).offset().height
				_d.birthday = new Date().getTime()
				_d.direction = null
				elem[0].style['-webkit-transition-duration'] = 0
			elem.on "touchmove", (evt)->
				evt.preventDefault()
				touch = evt.touches[0]
				moveY = touch.pageY - _d.y
				# console.log _d.starY,moveY
				if _d.starY > moveY
					_d.direction = true
				else
					_d.direction = false
				# 计算阻力
				elem[0].style.webkitTransform = 'translate3d(0,'+moveY+'px,0)'
			elem.on "touchend", (evt)->
				life = new Date().getTime() - _d.birthday
				goon = life - 300
				# console.log goon,_d.direction
				if goon < 0
					offsetX = getScroll() + if _d.direction then goon else -goon
				else
					offsetX = getScroll() + if _d.direction then -1 else 1
				_d.run = true
				offsetX = getScroll() unless _d.direction?
				elem[0].style['-webkit-transition-duration'] = '.2s'
				elem[0].style.webkitTransform = 'translate3d(0,' + offsetX + 'px,0)'

			elem[0].addEventListener TRANSITION_END_NAME, (e)->
				if _d.run
					_d.run = false
					maxH = -_d.maxH + $(elem[0]).parent().height()
					if getScroll() < maxH
						elem[0].style.webkitTransform = 'translate3d(0,' + maxH + 'px,0)'
					if getScroll() > 0
						elem[0].style.webkitTransform = 'translate3d(0,0,0)'
			
	}