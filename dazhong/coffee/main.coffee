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
	"img/text-1.png"
	"img/text-2.png"
	"img/text-3.png"
	"img/text-4.png"
	"img/text-5.png"
	"img/text-6.png"
	"img/text-7.png"
	"img/text-8.png"
	"img/text-9.png"
	"img/text-10.png"
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
	loadWechatConfig()
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

loadWechatConfig = ->
	url = encodeURIComponent window.location.href.split("#")[0]
	hm = document.createElement('script')
	hm.src = "http://api.giccoo.com/config?url="+url
	s = document.getElementsByTagName('script')[0]
	s.parentNode.insertBefore hm, s
	return