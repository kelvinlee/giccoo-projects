# @codekit-prepend "coffee/css3Prefix"


# images = "http://disk.giccoo.com/projects/huaweiG7/"
# images = ""
# imageList = [
# 	"img/banner-text.png"
# 	"img/banner.jpg"
# 	"img/banner.png"
# 	"img/bg-line.jpg"
# 	"img/box-bg.png"
# 	"img/box-hand.png"
# 	"img/film-1.jpg"
# 	"img/film-2.jpg"
# 	"img/film-3.jpg"
# 	"img/film-4.jpg"
# 	"img/film-bg.png"
# 	"img/haibao-note.jpg"
# 	"img/haibao.png"
# 	"img/hongbao.png"
# 	"img/item-bl.png"
# 	"img/item-blm.png"
# 	"img/logo.png"
# 	"img/next.png"
# 	"img/p-1-b.png"
# 	"img/p-1-m.png"
# 	"img/p-1-p.png"
# 	"img/p-1-y.png"
# 	"img/piao.jpg"
# 	"img/piao.png"
# 	"img/pop.png"
# 	"img/run-1.png"
# 	"img/run-2.png"
# 	"img/run-3.png"
# 	"img/run-4.png"
# ]
imgs = []
# riot.mount("*")

window.onload = ->
	riot.mount("*")
	setTimeout ->
		loadAllImage()
	,500
	MK = $("body").width()/$("body").height()

	if $("body").height() <= 460 or MK > 0.65
		$("body").addClass "iphone4"

	# wx = {}
	# loadWechatConfig()
	# wx.ready ->
	# 	shareContent =
	# 		title: ""
	# 		desc: ""
	# 		link: "http://m.giccoo.com/Mate8/"
	# 		imgUrl: "http://disk.giccoo.com/projects/Mate8/img/share.jpg"
	# 		success: ->
	# 			# alert "success"
	# 		cancel: ->
	# 			# alert "cancel"
	# 	wx.onMenuShareTimeline shareContent
	# 	wx.onMenuShareAppMessage shareContent
	# 	wx.onMenuShareQQ shareContent
	# 	wx.onMenuShareWeibo shareContent
	# finishedLoad()

loadAllImage = ->
	max = $("img[data-src]").length
	imageList = $("img[data-src]").length
	console.log max
	$("img[data-src]").each (i)->
		img = $(this)[0]
		img.onload = ->
			max--
			loadComper parseInt (imageList-max)/imageList*100
			loadFinished() if max <= 0
		img.src = $(this).attr("data-src")
		imgs.push(img)
loadComper = (m)->
	# $("#loading-text").text m


loadFinished = ->
	$(".loading").removeClass "loaded"

