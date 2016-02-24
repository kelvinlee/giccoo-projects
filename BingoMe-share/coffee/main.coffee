# @codekit-prepend "coffee/css3Prefix"

imgs = []
download = null
# riot.mount("*")

window.onload = ->
	riot.mount("*")
	MK = $("body").width()/$("body").height()

	if $("body").height() <= 460 or MK > 0.65
		$("body").addClass "iphone4"

	# wx = {}
	loadWechatConfig()
	wx.ready ->
		shareContent =
			title: wxTitle
			desc: wxDesc
			link: window.location.href
			imgUrl: wxImg
			success: ->
				# alert "success"
			cancel: ->
				# alert "cancel"
		wx.onMenuShareTimeline shareContent
		wx.onMenuShareAppMessage shareContent
		wx.onMenuShareQQ shareContent
		wx.onMenuShareWeibo shareContent

loadWechatConfig = ->
	url = encodeURIComponent window.location.href.split("#")[0]
	hm = document.createElement('script')
	hm.src = "http://api.giccoo.com/config?url="+url
	s = document.getElementsByTagName('script')[0]
	s.parentNode.insertBefore hm, s
	return