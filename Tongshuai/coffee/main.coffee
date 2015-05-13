# @codekit-prepend "coffee/css3Prefix"
# @codekit-prepend "coffee/plus"
# @codekit-prepend "../../libs/coffee/requestanimation"
# @codekit-prepend "../../libs/coffee/qrcode"

Store = {}
_history = []
wonShare = ""
begin = false
controllers =
	before: (collection, action, id, next)->
		# You can do some thing here doesn't need waiting for page changed.
		# console.log "Alipay",alipay
		$(".page.share").removeClass("show")
		unless begin
			if action?
				riot.route("/share/"+action)
			else
				riot.route("/")
		if not action? and (collection is "notes" or collection is "menus" or collection is "finishedPage")
			return riot.route("/"+collection+"/"+wonShare)
		Store.parallax and Store.parallax.animate(collection)
		next()
	share: (action, id)->
		$(".page.share").addClass("show")
		# riot.mount("div#shares","share",{action:action})
		setTimeout ->
			riot.mount("div#shares","share",{action:action,name:"share"})
		,1500
		# $(".pages").hide()
	finishedPage: (action, id)->
		if action?
			riot.mount("div#finishedPage","share",{action:action,name:"finishedPage"})
	notes: (action, id)->
		if action?
			riot.mount("div#notes","share",{action:action,name:"notes"})
		#notes
		# action? && Store.notes && Store.notes.changed(action)


routeFun = (collection, action, id)->
	collection = "homepage" unless collection?
	# console.log "route:",collection ,action ,id
	fn = controllers[collection]
	controllers["before"] collection, action, id, ->
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
tm = null

window.onload = ->
	# $("#loading").hide()

	if document.getElementById("qrcode").getStyle("display") is "block"
		qrcode()
		return false
	ep = $(".load-progress .n")
	tm = setInterval ->
			if parseInt(ep.html()) >= 90
				clearInterval tm
				return false
			ep.html parseInt(ep.html())+parseInt(Math.random()*5)
		,100
	setTimeout -> 
		loadStart()
	,1000
	# alert($("body").height())
	if $("body").height() <= 460
		$("body").addClass "iphone4"

	$(document).on "click", ".icon-wechat", ->
		# console.log "abcd"
		$(".share-wechat").show()
hideShareWechat = ->
	# console.log "close"
	$(".share-wechat").hide()

loadStart = ->
	count = $("[data-layzr]").length
	now = 0
	ep = $(".load-progress .n")
	# return false
	# console.log(count)
	layzr = new Layzr
		callback: (e)->
			console.log e
			now++
			# console.log parseInt (now/count)*100
			if now >= count
				clearInterval tm
				ep.html parseInt (now/count)*100
				setTimeout ->
					$("#loading").addClass("animated fadeOut")
				,500
				setTimeout ->
					$("#loading").hide()
				,1000


