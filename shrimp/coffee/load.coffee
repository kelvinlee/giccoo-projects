preload = null
# 必要加载的图片
loadList = [
	{id: "logo", src:"../libs/img/loading.png"}
	{id: "bg", src:"img/bg.jpg"}
	{id: "plane", src:"img/plane.png"}
	{id: "stoves", src:"img/stoves.png"}
	{id: "stoves-bg", src:"img/stoves-bg.png"}
	{id: "shrimp-live", src:"img/shrimp-live.png"}
	{id: "shrimp-bg", src:"img/shrimp-bg.png"}
	# {id: "stoves-bg", src:"img/stoves-bg.png"}
]
beginload = ($scope)->
	return "" if preload?
	handleComplete = ->
		LoadFinished "img",$scope
	preload = new createjs.LoadQueue()
	preload.on('fileload',handleFileLoad,this)
	preload.on('complete',handleComplete,this)
	preload.loadManifest loadList
_Progress = 0
handleFileLoad = ->
	_Progress++
	Percentage = Math.ceil((_Progress/loadList.length)*100)
	# console.log Percentage
	
_finishedlist = [{name:"img",load:false},{name:"angular",load:false}]
LoadFinished = (name,$scope)->
	for a in _finishedlist
		if a.name is name
			a.load = true
	gotoNext = true
	for a in _finishedlist
		if a.load is false
			gotoNext = false
			break
	if gotoNext
		$scope.loaded = true 
		$scope.$apply() if name isnt "angular"
