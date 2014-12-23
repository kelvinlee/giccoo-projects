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
	"desc": "各种表带,表盘我都挑花眼了."
	"title": "刚买了个 Apple Watch , 用着还不错, 你也要来一个吗?"
_wechat =
	"appid": ""
	"img_url": "http://m.giccoo.com/iwatch/img/share.jpg"
	"img_width": 200
	"img_height": 200
	"link": ""
	"desc": "各种表带,表盘我都挑花眼了."
	"title": "刚买了个 Apple Watch , 用着还不错, 你也要来一个吗?"

hosts = "http://g.giccoo.com"
shareContent = {
	watchband : "watchband-2"
	watch: "watch"
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
.config ["$routeProvider", "$locationProvider" ,($routeProvider, $locationProvider)->
	$routeProvider.when '/',{
		templateUrl: "home.html"
		controller: "MainController"
		controllerAs: "main"
	}
	$routeProvider.when '/share',{
		templateUrl: "share.html"
	}
]
.controller 'MainController', ($rootScope, $scope)->
	$rootScope.$on "$routeChangeSuccess", ->
		# $(".loaded").removeClass "loaded"



app.controller "HomeController" ,($scope,$rootScope,$location)->
	$scope.share = {
		watch: "watch"
		watchband: "watchband-2"
		screen: "timer"
	}
	$rootScope.noteText = "轻触屏幕更换壁纸"
	this.showShare = (bool)->
		$rootScope.ShareWechat = bool

