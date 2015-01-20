# @codekit-prepend "../../libs/coffee/css3Prefix"
# @codekit-prepend "coffee/global"
# @codekit-prepend "../../libs/coffee/share"
# @codekit-prepend "../../libs/coffee/load"

# load list
loadList = [
	{id: "logo", src:"../libs/img/loading.png"}
]

_wechat_f = 
	"appid": "wxf7ed397bd943c472"
	"img_url": "http://m.giccoo.com/iwatch/img/share.jpg"
	"img_width": 300
	"img_height": 300
	"link": "http://m.giccoo.com/shrimp"
	"desc": "这道菜的关键是选择阿根廷红虾."
	"title": "我刚做了一道'红焖大虾'快来尝尝."
_wechat =
	"appid": "wxf7ed397bd943c472"
	"img_url": "http://m.giccoo.com/iwatch/img/share.jpg"
	"img_width": 300
	"img_height": 300
	"link": "http://m.giccoo.com/shrimp"
	"desc": "这道菜的关键是选择阿根廷红虾."
	"title": "我刚做了一道'红焖大虾'快来尝尝."

hosts = "http://g.giccoo.com"

refreshShare = (title,desc)->
	_wechat_f.title = title
	_wechat.title = title
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
	$routeProvider.when '/create',{
		templateUrl: "create.html"
		controller: "CreateController"
		controllerAs: "create"
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
	# refreshShare "我刚做了一道'{cm}'快来尝尝.","这道菜的关键是选择阿根廷红虾."

# 选择菜品
app.controller "CreateController", ($rootScope, $scope, $animate, $timeout, $location)->

# 分享
app.controller "ShareController", ($rootScope, $scope)->
	
	


