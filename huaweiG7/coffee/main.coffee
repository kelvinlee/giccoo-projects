# @codekit-prepend "coffee/css3Prefix"
# @codekit-prepend "coffee/plus"
# @codekit-prepend "../../libs/coffee/requestanimation"
images = "http://disk.giccoo.com/projects/huaweiG7/"
# images = ""
imageList = [
	images+"img/active-info-page.png"
	images+"img/bar-text.png"
	images+"img/bar-in.png"
	images+"img/bar-up.png"
	images+"img/cup-1.png"
	images+"img/cup-2.png"
	images+"img/cup-3.png"
	images+"img/cup-4.png"
	images+"img/answer-1.png"
	images+"img/answer-2.png"
	images+"img/answer-3.png"
	images+"img/answer-4.png"
	images+"img/select-btn.png"
	images+"img/back-home.png"
	images+"img/pop-bg.png"
	images+"img/btn-share.png"
	images+"img/active-info.png"
	images+"img/video-thum.jpg"
	"http://disk.giccoo.com/projects/libs/img/wechat.png"
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
	url = encodeURIComponent window.location.href.split("#")[0]
	hm = document.createElement('script')
	hm.src = "http://api.giccoo.com/config?url="+url+"&debug=true"
	s = document.getElementsByTagName('script')[0]
	s.parentNode.insertBefore hm, s
	return

showActiveInfo = ->
	$(".active-info").append imgs[0]
	$(".active-info").show()
	$(".active-info").on "click", ->
		$(".loading").addClass "end"
		setTimeout ->
			$(".loading").remove()
		,560
