# @codekit-prepend "coffee/css3Prefix"
# @codekit-prepend "coffee/plus"
# @codekit-prepend "../../libs/coffee/requestanimation"

imageList = [
	"img/button-eat.png"
	"img/button-info.png"
	"img/button-list.png"
	"img/button-random.png"
	"img/home-bg.jpg"
	"img/home-logo.png"
	"img/home-text.png"
	"img/icon-back.png"
	"img/icon-play.png"
	"img/icon-save.png"
	"img/icon-star.png"
	"img/logo.png"
	"img/select-line.png"
	"img/start.png"
	"img/wechat.png"
	"img/box.png"
	"img/cuisine-1.png"
	"img/cuisine-2.png"
	"img/cuisine-3.png"
	"img/cuisine-4.png"
	"img/cuisine-5.png"
	"img/cuisine-6.png"
	"img/cuisine-7.png"
	"img/cuisine-8.png"
	"img/cuisine-9.png"
	"img/cuisine-10.png"
]
imgs = []
# riot.mount("*")

window.onload = ->
	setTimeout ->
		loadAllImage()
	,500
	if $("body").height() <= 460
		$("body").addClass "i4"
	$(".wechat").on "click",->
		$(".wechat").hide()

loadAllImage = ->
	max = imageList.length
	for image in imageList
		img = new Image()
		img.onload = ->
			max--
			loadComper parseInt (imageList.length-max)/imageList.length*100
			loadFinished() if max <= 0
		img.src = image
		imgs.push(img)
loadComper = (m)->
	$("#loading-text").text m

tags = null
loadFinished = ->
	tags = riot.mount("*")
	$(".loading").addClass "fadeOut animated"
	setTimeout ->
		$(".loading").hide()
		$(".homepage").show()
	,500

hidePage = ->
	$(".homepage").addClass "fadeOut animated"
	setTimeout ->
		$(".homepage").hide()
		$(".otherpage").show()
	,500

starEat = ->
	$(".infopage").removeClass("fadeIn").addClass "fadeOut animated"
	setTimeout ->
		$(".infopage").hide()
		$(".select-page").show()
		tags[1].init()
	,500