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
	# {id: "logo", src: "#{cdn}libs/img/loading.png"}
	{id: "logo", src: "#{cdn}adidas/img/logo.png"}
	{id: "m-1", src: "#{cdn}adidas/img/m-1.jpg"}
	{id: "w-1", src: "#{cdn}adidas/img/w-1.jpg"}
	# {id: "crown-logo", src: "#{cdn}crown/img/crown-logo.png"}
	# {id: "crown-logo2", src: "#{cdn}crown/img/crown-logo.jpg"}
	# {id: "page-home-subtitle", src: "#{cdn}crown/img/page-home-subtitle.jpg"}
	# {id: "page-home-engine", src: "#{cdn}crown/img/page-home-engine.jpg"}
	
]

# console.log loadList


_wechat_f = 
	"appid": ""
	"img_url": "http://disk.giccoo.com/projects/adidas/img/share.jpg"
	"img_width": 300
	"img_height": 300
	"link": "http://m.giccoo.com/adidas"
	"desc": "陈冠希、蔡依林引领街头潮流，演绎经典zx family鞋款"
	"title": "陈冠希、蔡依林引领街头潮流，演绎经典zx family鞋款"
_wechat =
	"appid": ""
	"img_url": "http://disk.giccoo.com/projects/adidas/img/share.jpg"
	"img_width": 300
	"img_height": 300
	"link": "http://m.giccoo.com/adidas"
	"desc": "陈冠希、蔡依林引领街头潮流，演绎经典zx family鞋款"
	"title": "陈冠希、蔡依林引领街头潮流，演绎经典zx family鞋款"

hosts = "http://g.giccoo.com"

defaultShare = (title)->
	_wechat.title = title
	_wechat_f.title = title
	reloadWechat()

pages = ['men2','men3','men4','men5','men6','women2','women3','store']
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
		return $rootScope.from = "up" if oldPage is "-1"
		return $rootScope.from = "up" if newPage is oldPage
		if pages.indexOf(newPage) > pages.indexOf(oldPage)
			$rootScope.from = "up"
		else
			$rootScope.from = "down"
		# alert "success: "+$rootScope.from
# 主要加载
app.controller 'MainController', ($rootScope, $scope, $location, $http)->
	# console.log "aa"
	$rootScope.hideSubLogo = true
	$rootScope.CanRun = true
	if $("body").height() <= 440
		$("body").addClass "iphone4"
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
		return $rootScope.from = "same" if newPage is oldPage
		# console.log newPage,oldPage,pages.indexOf(newPage),pages.indexOf(oldPage)
		# if pages.indexOf(newPage) > pages.indexOf(oldPage)
		# 	$rootScope.from = "down"
		# else
		# 	$rootScope.from = "up"
		# alert "start: "+$rootScope.from

app.controller 'HomeController', ($rootScope, $scope, $location)->
	$rootScope.home = "home"
	# $scope.pagename = "home"
	
app.controller 'storeController', ($rootScope, $scope, $location, $timeout)->
	$scope.city = "beijing"
	# $scope.area = "0"
	tis = this
	this.changeCity = ->
		# console.log $scope.city
		tis.area = eval($scope.city)
		$scope.area = tis.area[0]
		tis.shoplist = tis.area[0].list
		
		# console.log tis.area
	this.changed = ->
		# console.log $scope.area
		tis.shoplist = $scope.area.list
		return true
	this.changeCity()
	if $rootScope.home isnt "home"
		$location.path "/" unless debug

app.controller 'swipeController', ($rootScope, $scope, $location, $timeout)->
	# stop()
	
	$scope.runPageX = (bool)->
		# console.log "x",bool
		if $rootScope.swipeleft or $rootScope.swiperight
			return false
		$scope.$apply ->
			if bool	
				$rootScope.swipeleft = "left"
			else
				$rootScope.swiperight = "right"
			$rootScope.hideSubLogo = false
		return false
	$scope.runPage = (bool,nextPage)->
		# console.log bool,nextPage
		$scope.$apply ->
			# if bool
			# 	$rootScope.from = "down"
			# else
			# 	$rootScope.from = "up"
			# $timeout ->
			$location.path('/'+nextPage)
			# ,5
	if $rootScope.home isnt "home"
		$location.path "/" unless debug



app.controller 'menController', ($rootScope, $scope, $location, $timeout)->
	this.note = true
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
	$rootScope.$watch "swipeleft", (n)->
		# console.log "left now"
		if $rootScope.swipeleft is "left"
			tis.note = false
			tis.open = "open"
			tis.noctrl = "up"
			$(".men.mark-img").addClass "open"
app.controller 'women2Controller',($rootScope, $scope, $location, $timeout)->
	# alert "women2-controller"
	setTimeout ->
		$("[ng-view]").each ->
			# alert $(this).attr("class")
	,10

app.controller 'womenController', ($rootScope, $scope, $location, $timeout)->
	this.note = true
	tis = this
	this.popshow = false
	this.canclick = true
	this.noctrl = "all"
	this.open = "slideToRight delay-15 duration-5"
	this.Pop = (show)->
		# console.log show
		return false unless tis.canclick
		tis.canclick = false
		unless tis.note
			tis.popshow = show
			setTimeout ->
				tis.canclick = true
			,200
	$rootScope.$watch "swiperight", (n)->
		# console.log "right now"
		if $rootScope.swiperight is "right"
			tis.note = false
			tis.open = "open"
			tis.noctrl = "up"
			$(".women.mark-img").addClass "open"



app.controller 'touchidController', ($rootScope, $scope, $location, $timeout)->
	this.light = "none"
	this.sex = "male"
	this.birthday = 0
	timeout = {}
	tis = this
	$rootScope.sex = this.sex
	this.select = ->
		if tis.sex is "male"
			tis.sex = "female"
		else
			tis.sex = "male"
		$rootScope.sex = tis.sex
	$(".touch-id").on 'touchstart', (evt)->
		evt.preventDefault()
		$scope.$apply ->
			timeout = $timeout ->
				$location.path '/share'
			,2000
			tis.light = "block"
	$(".touch-id").on 'touchend', (evt)->
		evt.preventDefault()
		# console.log "touched end"
		$scope.$apply ->
			tis.light = "none"
			$timeout.cancel(timeout)

app.controller 'shareController', ($rootScope, $scope, $location)->
	female = ["熟女范儿","汉子范儿","文艺范儿","高冷范儿","卖萌范儿","纠结范儿"]
	male = ["型男范儿","闷骚范儿","暖男范儿","土豪范儿","清新范儿","逆袭范儿"]
	this.text = ""
	this.wechat = false
	unless $rootScope.sex?
		return $location.path "/" unless debug
	if $rootScope.sex is "female"
		this.text = female[Math.floor(Math.random()*female.length)]
	else
		this.text = male[Math.floor(Math.random()*male.length)]
	this.text = this.text.replace "范儿",""
	defaultShare "【我是#{this.text}范儿！】来测你的范儿！"
	BindShare "【我是#{this.text}范儿！】来测你的范儿！","http://m.giccoo.com/crown/","http://m.giccoo.com/crown/img/share.jpg"
	this.pop = (text,o)->
		if text is "wechat"
			return this.wechat = true
		return window.location.href = $(o).attr "href"

	this.close = ->
		this.wechat = false



app.directive "parallax", ($location)->
	return {
		restrict: 'EA'
		link: (scope, elem, attrs)->
			# console.log attrs["ctrlleft"]
			# console.log attrs["nextPage"]
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
				goneX = _d.x - touch.pageX
				# console.log "move",gone,goneX
				if goneX < -20 and not _d.run and attrs["ctrlleft"] is "left"
					scope.runPageX true
				if goneX > 20 and not _d.run and attrs["ctrlright"] is "right"
					scope.runPageX false
				if attrs["noctrl"] isnt "all"
					if gone < -50 and not _d.run and attrs["noctrl"] isnt "up"
						scope.runPage true,attrs["prepage"]
					if gone > 50 and not _d.run and attrs["noctrl"] isnt "down"
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