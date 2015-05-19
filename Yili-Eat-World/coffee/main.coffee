# @codekit-prepend "coffee/css3Prefix"
# @codekit-prepend "coffee/plus"
# @codekit-prepend "../../libs/coffee/requestanimation"
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
			ep.html parseInt(ep.html())+parseInt(Math.random()*5)+"%"
		,100
	if $("body").height() <= 460
		$("body").addClass "iphone4"
	
	loader = new PIXI.AssetLoader [
		cdn+"img/game-bg.png"
		cdn+"img/game-p-stomach.png"
		cdn+"img/game-p-lufei.png"
		cdn+"img/game-p-gangtiexia.png"
		cdn+"img/game-p-huluwa.png"
		cdn+"img/game-p-mingren.png"

		cdn+"img/game-boom.png"
		cdn+"img/handicap.png"
		cdn+"img/game-item-1.png"
		cdn+"img/game-item-2.png"
		cdn+"img/game-item-3.png"
		cdn+"img/game-item-4.png"
		cdn+"img/game-item-5.png"
		cdn+"img/game-item-6.png"
		cdn+"img/game-item-7.png"
		cdn+"img/game-item-8.png"
		cdn+"img/game-item-9.png"
		cdn+"img/game-item-10.png"
		cdn+"img/game-item-11.png"
		cdn+"img/game-item-12.png"
		cdn+"img/game-item-13.png"
		cdn+"img/game-item-14.png"
		cdn+"img/game-item-15.png"
		cdn+"img/game-item-16.png"
		cdn+"img/game-item-17.png"
		cdn+"img/game-item-18.png"
		cdn+"img/game-item-2-old.png"
		cdn+"img/game-item-3-old.png"
		cdn+"img/game-item-4-old.png"
		cdn+"img/game-item-5-old.png"
		cdn+"img/game-item-6-old.png"
		cdn+"img/game-item-7-old.png"
		cdn+"img/game-item-8-old.png"
		cdn+"img/game-item-9-old.png"
		cdn+"img/game-item-10-old.png"
		cdn+"img/game-item-11-old.png"
		cdn+"img/game-item-12-old.png"
		cdn+"img/game-item-13-old.png"
		cdn+"img/game-item-14-old.png"
		cdn+"img/game-item-15-old.png"
		cdn+"img/game-item-16-old.png"
		cdn+"img/game-item-17-old.png"
		cdn+"img/game-item-18-old.png"
		
	]
	loader.onComplete = ()->
		loadStart()
	loader.load()
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
	console.log(count)
	layzr = new Layzr
		callback: (e)->
			console.log e
			now++
			# console.log parseInt (now/count)*100
			if now >= count
				clearInterval tm
				ep.html parseInt((now/count)*100)+"%"
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

