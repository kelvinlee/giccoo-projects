# @codekit-prepend "../../libs/coffee/css3Prefix"
# @codekit-prepend "coffee/global"
# @codekit-prepend "js/vendor/exif.js"
# @codekit-prepend "../../libs/js/megapix-image.js"
# @codekit-prepend "../../libs/coffee/share"

_wechat_f = 
	"appid": ""
	"img_url": "http://m.giccoo.com/iwatch/img/share.jpg"
	"img_width": 200
	"img_height": 200
	"link": ""
	"desc": "定制自己喜欢的款式，让Ta知道，你懂的！"
	"title": "Apple Watch 已入手，别告诉我还没上市，圣诞，任性！"
_wechat =
	"appid": ""
	"img_url": "http://m.giccoo.com/iwatch/img/share.jpg"
	"img_width": 200
	"img_height": 200
	"link": ""
	"desc": "定制自己喜欢的款式，让Ta知道，你懂的！"
	"title": "Apple Watch 已入手，别告诉我还没上市，圣诞，任性！"

hosts = "http://g.giccoo.com"
shareContent = {
	watchband : "watchband-1"
	watch: "edition"
	wall: "default"
	screen: "image" # timer 表示时间
}

refreshShare = ->
	url = "http://m.giccoo.com/iwatch/#/share/#{shareContent.watch}/#{shareContent.watchband}/#{shareContent.wall}"
	_wechat_f.link = url
	_wechat.link = url
	# console.log url
	reloadWechat()








app = angular.module('kelvin', ["ngRoute","ngTouch","ngAnimate"])

app.config ["$routeProvider", "$locationProvider" ,($routeProvider, $locationProvider)->
	$routeProvider.when('/',{templateUrl: "home.html"})
	$routeProvider.when('/share/:watch/:watchband/:wallpaper',{templateUrl: "share.html"})
]
app.controller 'MainController', ($rootScope, $scope)->
	$rootScope.$on "$routeChangeSuccess", ->
		$(".loaded").removeClass "loaded"

app.controller "ShareController" ,($rootScope,$scope,$location,$routeParams)->
	$rootScope.dialscreen = 
		timer : false
		wall : true
		timerSH: "hide"
		wallSH: "show"
	shareContent.watch = $routeParams.watch
	shareContent.watchband = $routeParams.watchband
	shareContent.wall = $routeParams.wallpaper
	refreshShare()

	# console.log $routeParams
	this.watch = "img/dial-"+$routeParams.watch+".png"
	this.watchband = $routeParams.watchband
	this.wall = $routeParams.wallpaper
	this.nurl = "img/dial-#{$routeParams.watch}-name.png"
	if this.wall is "default"
		$("#wallpager").removeClass "sharewall"
	else if this.wall.indexOf("dial-screen-bg") > -1
		$("#wallpager").css
			"background-image": "url(img/#{this.wall}.jpg)"
	else
		$("#wallpager").css
			"background-image": "url(http://g.giccoo.com/uploadDir/#{this.wall}.png)"

	try
		_hmt.push ['_trackEvent',shareContent.watch,shareContent.watchband,shareContent.wall]
	catch e
		console.log e
	
	this.timerfun = ->
		if $rootScope.dialscreen.timerSH is "show"
			$rootScope.dialscreen.timerSH = "hide"
			$rootScope.dialscreen.wallSH = "show"
		else
			$rootScope.dialscreen.timerSH = "show"
			$rootScope.dialscreen.wallSH = "hide"
	this.buy = ->
		$location.path "/"
	CheckTime = ($scope)->
		t = new Date()
		h = t.getHours()
		h = h%12
		m = t.getMinutes()
		hs = new Date().getHours()
		ms = new Date().getMinutes()
		# console.log h,m
		$scope.getHours = 180+h/12*360+m/60*30
		$scope.getMinutes = 180+m/60*360
		$scope.Hours = if hs>=10 then hs else "0"+hs
		$scope.Minutes = if ms>=10 then ms else "0"+ms
		setTimeout ->
			CheckTime $scope
			$scope.$apply()
		,10000

	CheckTime($scope)





app.controller "HomeController" ,($scope,$rootScope,$location)->
	$scope.share = {
		watch: "edition"
		watchband: "watchband-1"
		screen: "timer"
	}
	$rootScope.noteText = "轻触屏幕更换壁纸"
	this.showShare = (bool)->
		$rootScope.ShareWechat = bool

app.controller "DailController", ($scope,$rootScope,$http)->
	$rootScope.dialscreen = 
		timer : true
		wall : false
		timerSH: "show"
		wallSH: "hide"
	
	CheckTime = ($scope)->
		t = new Date()
		h = t.getHours()
		h = h%12
		m = t.getMinutes()
		hs = new Date().getHours()
		ms = new Date().getMinutes()
		# console.log h,m
		$scope.getHours = 180+h/12*360+m/60*30
		$scope.getMinutes = 180+m/60*360
		$scope.Hours = if hs>=10 then hs else "0"+hs
		$scope.Minutes = if ms>=10 then ms else "0"+ms
		setTimeout ->
			CheckTime $scope
			$scope.$apply()
		,10000

	CheckTime($scope)
	this.timerfun = ->
		$rootScope.dialscreen.timerSH = "hide"
		$rootScope.dialscreen.wallSH = "show"
		$rootScope.uploadFile = true if not $rootScope.android4
	tis = this
	this.wallfun = (bool)->
		$rootScope.ShareWechat = bool
	setTimeout ->
		tis.timerfun()
		$scope.$apply()
	,5000
	

CreateImg = (file,$scope)->
	url = my.createObjectURL file
	# return _ios7putToCanvas(file) if _ios7

	canvas = document.createElement("canvas")
	$(canvas).attr
		"width": "270"
		"height": "325"
		"id": "imgcanvas"
	# $(".upimage").append canvas
	$img = new Image()
	$img.onload = ->
		EXIF.getData $img, ->
			info = EXIF.getTag $img, "Orientation"
			# console.log info
			mpImg = new MegaPixImage(file)
			# console.log mpImg.render
			mpImg.render canvas, { maxWidth: 270, minHeight: 325 }, ->
				if info? and info is 6
					_canvas = document.createElement("canvas")
					$(_canvas).attr
						"width": canvas.height
						"height": canvas.width
					ctx = _canvas.getContext("2d")
					ctx.rotate Math.PI/2
					ctx.drawImage canvas,0,-canvas.height,canvas.width,canvas.height
					canvas = _canvas
				
				$scope.imgData = canvas.toDataURL("image/png") 
				$scope.$apply() 
	$img.src = url

app.controller "SlideController",($scope,$location,$rootScope,$http,$animate)->
	# console.log $scope
	this.slider = _slider
	this.watchbandimg = {"watch":"watchband-2","edition":"watchband-1","sport":"watchband-7"}
	this.watchbandimgs= _watchbandimgs
	this.watchbandbg = {"watch":"show","edition":"show","sport":"show"}
	this.name = "watch"
	this.note = "show"
	this.isAnimate = false
	tis = this
	$rootScope.uploadFile = false
	# console.log $rootScope
	$scope.watchbandimg = 1

	this.changeD = (evt)->
		now = tis.watchbandimgs[tis.name].indexOf tis.watchbandimg[tis.name]
		now++
		now = 0 if now > tis.watchbandimgs[tis.name].length - 1
		tis.watchbandimg[tis.name] = tis.watchbandimgs[tis.name][now]
		$animate.removeClass($("##{tis.name}bg")[0],"hide").then ->
			tis.isAnimate = false
		$scope.watchbandimg++
		$scope.$apply()
		
	this.watchband = (name)->
		return false if this.isAnimate
		this.isAnimate = true
		this.name = name
		this.note = "hide"
		$animate.addClass($("##{name}bg")[0],"hide").then this.changeD
		return true

	this.selectBGShow = ->
		return false if $rootScope.android4show? and $rootScope.android4show is "show"
		$rootScope.android4show = "show"

	this.selectBG = (i)->
		return false if $rootScope.android4show isnt "show"
		$(".dialscreen .wall").css "background-image":"url(img/dial-screen-bg-#{i}.jpg)"
		shareContent.wall = "dial-screen-bg-#{i}"
		if i>=4
			$(".dialscreen .wall").css "background-image":"url(img/dial-screen-bg.jpg)"
			shareContent.wall = "dial-screen-bg"
		refreshShare()
		$rootScope.android4show = "hide"


	nav = navigator.userAgent.toLowerCase()
	# console.log nav.indexOf "android"
	if nav.indexOf("android")> -1
		arr = Math.abs(nav.split("android")[1].split(";")[0].replace(".",""))
		arr = if arr<100 then arr*10 else arr
		if arr > 440
			$rootScope.android4 = true 

	$scope.$watch "watchbandimg", ->
		shareContent.watchband = tis.watchbandimg[_slider[Math.abs($scope.iwatchTabs)].name]
		refreshShare()

	$scope.$watch "iwatchTabs", ->
		shareContent.watch = _slider[Math.abs($scope.iwatchTabs)].name
		refreshShare()

	$scope.$watch "inputFile", ->
		CreateImg $scope.inputFile,$scope if $scope.inputFile?
	$scope.$watch "imgData", ->
		if $scope.imgData?
			$(".dialscreen .wall").css "background-image":"url(#{$scope.imgData})"
			$rootScope.noteText = "图片上传中.."
			# console.log $scope.imgData
			uploadIMG $scope.imgData
			$rootScope.uploadFile = false

	
	uploadIMG = (data)->
		data = data.replace "data:image/png;base64,",""
		$http.post "#{hosts}/image/upload", {data:data}
		.success (data,status, headers, config)->
			$rootScope.noteText = "上传成功,立即分享"
			shareContent.wall = data.filename
			refreshShare()
		.error (err)->
			$rootScope.noteText = "上传失败,十分抱歉"
			$rootScope.uploadFile = true if not $rootScope.android4

app.directive "slidersList", ($swipe)->
	return {
		restrict: 'EA'
		templateUrl: "slider.html"
		link: (scope, elem, attrs)->
			attrs.$addClass "slider-normal"
			scope[attrs.id] = 0 if not scope[attrs.id]?
			slider = elem[0].children[0]
			$swipe.bind elem,{
				default: {
					lastSlide: 0
					resistance: 1
					lastw: 0
					w: 0
					x: 0
					y: 0
				}
				slideNumber: 0
				deltaX: 0
				deltaY: 0
				startTime: 0
				scrollableArea: 0
				isScrolling: false
				setSlideNumber: (offset)->
					round = (if offset then ((if this.deltaX < 0 then "ceil" else "floor")) else "round")
					slideNumber = Math[round](this.getScroll() / (this.scrollableArea / slider.children.length))
					slideNumber += offset
					slideNumber = Math.min(slideNumber, 0)
					this.slideNumber = Math.max(-(slider.children.length - 1), slideNumber);
					scope[attrs.id] = this.slideNumber
					scope.$apply()

				getScroll: ->
					if 'webkitTransform' of slider.style
						translate3d = slider.style.webkitTransform.match /translate3d\(([^,]*)/
						ret = if translate3d? then translate3d[1] else 0
						return parseInt ret, 10
				start: (e,evt)->
					this.startTime = +new Date()
					this.default.w = $(elem[0].children[0]).width()
					this.default.x = e.x
					this.default.y = e.y
					this.deltaX = 0
					this.deltaY = 0
					this.lastSlide = -(slider.children.length - 1)
					this.lastw = this.getScroll()
					this.scrollableArea = this.default.w * slider.children.length
					this.setSlideNumber(0)
					slider.style['-webkit-transition-duration'] = 0;

				move: (e,evt)->
					this.deltaX = e.x - this.default.x
					this.deltaY = e.y - this.default.y
					pageX = e.x
					pageY = e.y
					this.isScrolling = Math.abs(this.deltaY)>Math.abs(this.deltaX) if not this.isScrolling?
					return "" if this.isScrolling
					offsetX = (this.deltaX / this.default.resistance) + this.lastw
					resistance = (if this.slideNumber is 0 and this.deltaX > 0 then (pageX / this.default.w) + 1.25 else (if this.slideNumber is this.lastSlide and this.deltaX < 0 then (Math.abs(pageX) / this.default.w) + 1.25 else 1))
					evt.preventDefault()
					slider.style.webkitTransform = 'translate3d(' + offsetX + 'px,0,0)'

				end: (e)->
					return "" if this.isScrolling
					this.setSlideNumber (if (+new Date()) - this.startTime < 1000 and Math.abs(this.deltaX) > 15 then ((if this.deltaX < 0 then -1 else 1)) else 0)
					this.backOver()

				backOver: ->
					offsetX = this.slideNumber * this.default.w;
					slider.style['-webkit-transition-duration'] = '.2s';
					slider.style.webkitTransform = 'translate3d(' + offsetX + 'px,0,0)'
			}
		# compile: (elem, attrs)->
			# console.log "compile",attrs
	}

app.directive "file", ()->
	return {
		restrict: "E"
		template: '<input type="file" />'
		replace: true
		require: 'ngModel'
		link: (scope, elem, attr, ctrl)->
			listener = ->
				scope.$apply ()->
					if attr.multiple then ctrl.$setViewValue(elem[0].files) else ctrl.$setViewValue(elem[0].files[0])
			elem.bind 'change', listener
	}

# public var
_slider = [
	{name:"edition",nurl:"img/dial-edition-name.png",url:"img/dial-edition.png"}
	{name:"watch",nurl:"img/dial-watch-name.png",url:"img/dial-watch.png"}
	{name:"sport",nurl:"img/dial-sport-name.png",url:"img/dial-sport.png"}
]
_watchbandimgs = {
	"edition":["watchband-1","watchband-7","watchband-9","watchband-5"]
	"watch":["watchband-2","watchband-4","watchband-8","watchband-3"]
	"sport":["watchband-7","watchband-9","watchband-6","watchband-5"]
}