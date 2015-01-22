preload = null
# 必要加载的图片
loadList = [
	{id: "logo", src:"../libs/img/loading.png"}
]
beginload = ($scope,callback)->
	return "" if preload?
	handleComplete = ->
		LoadFinished "img",$scope,callback
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
LoadFinished = (name,$scope,callback)->
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
		if name isnt "angular"
			$scope.$apply ->
				callback.call() if typeof(callback) is "function"
