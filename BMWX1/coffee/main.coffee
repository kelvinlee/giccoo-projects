# @codekit-prepend "coffee/css3Prefix"
# @codekit-prepend "coffee/plus"
# @codekit-prepend "../../libs/coffee/requestanimation"

Store = {}
_history = []
begin = false
controllers =
	before: (next)->
		# You can do some thing here doesn't need waiting for page changed.
		# console.log "Alipay",alipay
		riot.route("/") unless begin
			
		next()
	homepage: (action, id)->
		Store.parallax and Store.parallax.animate("homepage")
	activity: (action, id)->
		Store.parallax and Store.parallax.animate("activity")
	register: (action, id)->
		Store.parallax and Store.parallax.animate("register")
	food: (action, id)->
		Store.parallax and Store.parallax.animate("food")
	bmwx1: (action, id)->
		Store.parallax and Store.parallax.animate("bmwx1")

routeFun = (collection, action, id)->
	collection = "homepage" unless collection?
	console.log "route:",collection ,action ,id
	fn = controllers[collection]
	controllers["before"] ->
		# console.log _history
		fn and fn(action,id)
		_history.push [collection,action,id]

routeParser = (path)->
	paths = path.split("/")
	return paths.clean("")

riot.route.parser routeParser
# 用于页面变化
riot.route routeFun
# 用于首页监测
riot.route.exec routeFun

riot.mount("*")

layzr = null

window.onload = ->
	$("#loading").hide()
	layzr = new Layzr
		callback: (e)->
			# alert e

