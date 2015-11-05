# @codekit-prepend "coffee/css3Prefix"
# @codekit-prepend "coffee/plus"
# @codekit-prepend "../../libs/coffee/requestanimation"

imageList = [
	"img/bar-text.png"
	"img/bar-in.png"
	"img/bar-up.png"
	"img/cup-1.png"
	"img/cup-2.png"
	"img/cup-3.png"
	"img/cup-4.png"
	"img/answer-1.png"
	"img/answer-2.png"
	"img/answer-3.png"
	"img/answer-4.png"
	"img/select-btn.png"
	"img/back-home.png"
	"img/pop-bg.png"
	"img/btn-share.png"
	"/libs/img/wechat.png"
]
imgs = []
# riot.mount("*")

window.onload = ->
	setTimeout ->
		loadAllImage()
	,500

	if $("body").height() <= 460
		$("body").addClass "iphone4"

	loadWechatConfig()
	wx.ready ->
		AppMShareContent =
			title: "在树洞酒吧，喝一杯小酒，听一首小曲，看一部微电影..."
			desc: "树洞Bar，属于你的私密空间..."
			link: "http://m.giccoo.com/huaweiG7/"
			imgUrl: "http://disk.giccoo.com/projects/huaweiG7/img/share.jpg"
			success: ->
				# alert "success"
			cancel: ->
				# alert "cancel"
		TimelineShareContent =
			title: "树洞酒吧，喝杯酒，听首歌，看微电影，再来测测你的个性..."
			desc: "树洞Bar，属于你的私密空间..."
			link: "http://m.giccoo.com/huaweiG7/"
			imgUrl: "http://disk.giccoo.com/projects/huaweiG7/img/share.jpg"
			success: ->
				# alert "success"
			cancel: ->
				# alert "cancel"
		wx.onMenuShareTimeline TimelineShareContent
		wx.onMenuShareAppMessage AppMShareContent
		wx.onMenuShareQQ AppMShareContent
		wx.onMenuShareWeibo TimelineShareContent

UpdateShare = (text)->
	TimelineShareContent =
		title: text
		desc: "树洞Bar，属于你的私密空间..."
		link: "http://m.giccoo.com/huaweiG7/"
		imgUrl: "http://disk.giccoo.com/projects/huaweiG7/img/share.jpg"
		success: ->
			# alert "success"
		cancel: ->
			# alert "cancel"
	wx.onMenuShareTimeline TimelineShareContent

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


Car = null
loadFinished = ->
	riot.mount("*")
	# Car = riot.mount("div#car","car")
	$(".in-in").on "click", ->
		$(".loading").addClass "end"
		setTimeout ->
			$(".loading").remove()
		,560
	setTimeout ->
		$(".loading").addClass "load"
	,300
	
loadWechatConfig = ->
	url = window.location.href.split("#")[0]
	hm = document.createElement('script')
	hm.src = "http://api.giccoo.com/config?url="+url
	s = document.getElementsByTagName('script')[0]
	s.parentNode.insertBefore hm, s
	return