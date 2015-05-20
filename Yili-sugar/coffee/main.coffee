# @codekit-prepend "coffee/css3Prefix"
# @codekit-prepend "coffee/plus"
# @codekit-prepend "../../libs/coffee/requestanimation"
# @codekit-prepend "../../libs/coffee/qrcode"

Store = {}
layzr = null
tm = null

debug = true
cdn = ""
cdn = "http://disk.giccoo.com/projects/Yili-Eat-World/" unless debug

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
	# return false
	# alert(count)
	layzr = new Layzr
		callback: (e)->
			# console.log e
			now++
			# alert(now)
			# console.log parseInt (now/count)*100
			if now >= count
				clearInterval tm
				ep.html parseInt((now/count)*100)
				setTimeout ->
					$("#loading").addClass("animated fadeOut")
					$(".page.begin").removeClass("hide")
					# Store.game.build()
				,1500
				setTimeout ->
					$("#loading").hide()
				,1000

# loadOther = ->
# 	layzr = new Layzr
# 		selector: '[data-src]'
# 		attr:'data-src'

