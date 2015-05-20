# @codekit-prepend "coffee/css3Prefix"
# @codekit-prepend "coffee/plus"
# @codekit-prepend "../../libs/coffee/qrcode"

Store = {}
layzr = null
tm = null

debug = false
cdn = ""
# cdn = "http://disk.giccoo.com/projects/Yili-Eat-World/" unless debug

window.onload = ->
	# $("#loading").hide()

	if document.getElementById("qrcode").getStyle("display") is "block"
		qrcode()
		return false
	riot.mount("*")
	ep = $(".load-progress .n")
	tm = setInterval ->
			if parseInt(ep.html()) >= 96
				clearInterval tm
				return false
			ep.html parseInt(ep.html())+parseInt(Math.random()*5)
		,100
	if $("body").height() <= 460
		$("body").addClass "iphone4"
	setTimeout ->
		loadStart()
	,1000
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
	timer = setTimeout ->
		backUp("data-layzr")
		finished()
	,2000
	# return false
	# alert(count)
	try
		layzr = new Layzr
			selector: '[data-layzr]'
			attr:'data-layzr'
			callback: (e)->
				# console.log e
				clearTimeout timer
				now++
				# alert(now)
				# console.log parseInt (now/count)*100
				if now >= count
					clearInterval tm
					ep.html parseInt((now/count)*100)
					finished()
	catch e
		console.log "error"

# loadOther = ->
# 	layzr = new Layzr
# 		selector: '[data-src]'
# 		attr:'data-src'
finished = ->
	setTimeout ->
		$("#loading").addClass("animated fadeOut")
		$(".page.begin").removeClass("hide")
		# Store.game.build()
	,1500
	setTimeout ->
		$("#loading").hide()
	,1000		
backUp = (data)->
	$("["+data+"]").each ->
		link = $(this).attr(data)
		$(this).attr "src",link
		$(this).removeAttr data
	