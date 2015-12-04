# @codekit-prepend "coffee/css3Prefix"
# @codekit-prepend "coffee/plus"
# @codekit-prepend "../../libs/coffee/requestanimation"

imageList = [
	"http://disk.giccoo.com/projects/dazhong/img/text-1.png"
	"http://disk.giccoo.com/projects/dazhong/img/text-2.png"
	"http://disk.giccoo.com/projects/dazhong/img/text-3.png"
	"http://disk.giccoo.com/projects/dazhong/img/text-4.png"
	"http://disk.giccoo.com/projects/dazhong/img/text-5.png"
	"http://disk.giccoo.com/projects/dazhong/img/text-6.png"
	"http://disk.giccoo.com/projects/dazhong/img/text-7.png"
	"http://disk.giccoo.com/projects/dazhong/img/text-8.png"
	"http://disk.giccoo.com/projects/dazhong/img/text-9.png"
	"http://disk.giccoo.com/projects/dazhong/img/text-10.png"
	# "img/cuisine-1.png"
	# "img/cuisine-2.png"
	# "img/cuisine-3.png"
	# "img/cuisine-4.png"
	# "img/cuisine-5.png"
	# "img/cuisine-6.png"
	# "img/cuisine-7.png"
	# "img/cuisine-8.png"
	# "img/cuisine-9.png"
	# "img/cuisine-10.png"
]
imgs = []
tags = null

window.onload = ->
	tags = riot.mount("*")
	setTimeout ->
		loadAllImage()
	,500
	if $("body").height() <= 460
		$("body").addClass "i4"
	$(".wechat").on "click",->
		$(".wechat").hide()
	$(".homepage .star .item")[0].addEventListener ANIMATION_END_NAME,reButton
	# loadWechatConfig()
	wx.ready ->
		AppMShareContent =
			title: "玻璃心慎点！这间「青春食堂」总有一道美味能让你动容"
			desc: "好友围炉，赏味青春。这里有10段我只想和你分享的美味故事，不想听听吗？"
			link: "http://m.giccoo.com/dazhong/"
			imgUrl: "http://disk.giccoo.com/projects/dazhong/img/share.jpg"
			success: ->
				# alert "success"
			cancel: ->
				# alert "cancel"
		wx.onMenuShareTimeline AppMShareContent
		wx.onMenuShareAppMessage AppMShareContent
		wx.onMenuShareQQ AppMShareContent
		wx.onMenuShareWeibo AppMShareContent

loadAllImage = ->
	max = imageList.length
	Nmax = $("[data-src]").length
	max = Nmax+max
	now = 0
	for image in imageList
		img = new Image()
		img.onload = ->
			now++
			loadComper parseInt now/max*100
			loadFinished() if now >= max
		img.src = image
		imgs.push(img)
	
	$("[data-src]").each ->
		$(this).attr("src",$(this).attr("data-src"))
	$("[data-src]").on "load", ->
		now++
		loadComper parseInt now/max*100
		loadFinished() if now >= max

loadComper = (m)->
	$("#loading-text").text m


loadFinished = ->
	$(".loading").addClass "fadeOut animated"
	setTimeout ->
		$(".loading").hide()
		$(".homepage").show()
	,500
	console.log ClickEvent
	ClickEvent('P1.0',1)

hidePage = ->
	$(".homepage").addClass "fadeOut animated"
	setTimeout ->
		$(".homepage").hide()
		$(".otherpage").show()
	,500
	console.log ClickEvent
	ClickEvent('BUT_1.0_Start',1)
	ClickEvent('P2.0',1)

starEat = ->
	$(".infopage").removeClass("fadeIn").addClass "fadeOut animated"
	setTimeout ->
		$(".infopage").hide()
		$(".select-page").show()
		tags[1].init()
	,500
	console.log ClickEvent
	ClickEvent('BUT_2.0_Eat',1)
	ClickEvent('P3.0',1)

loadWechatConfig = ->
	url = encodeURIComponent(window.location.href.split("#")[0])
	hm = document.createElement('script')
	hm.src = "http://api.giccoo.com/config?url="+url
	s = document.getElementsByTagName('script')[0]
	s.parentNode.insertBefore hm, s
	return

reButton = ->
	$(".homepage .star .item").removeClass "rubberBand animated"
	setTimeout ->
		$(".homepage .star .item").addClass "rubberBand animated"
	,1000
