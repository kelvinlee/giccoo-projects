# @codekit-prepend "../../libs/coffee/loadWechatConfig"

window.onload = ->

	loadWechatConfig()
	wx.ready ->
		shareContent =
			title: "知「擎」者说"
			desc: "汽车评测类视频内容，内容围绕首发新车、前沿汽车设计、智能科技交互等进行深度解读。"
			link: "http://m.giccoo.com/zqzs_1/"
			imgUrl: "http://m.giccoo.com/zqzs_1/img/ico.jpg"
			success: ->
				# alert "success"
			cancel: ->
				# alert "cancel"
		wx.onMenuShareTimeline shareContent
		wx.onMenuShareAppMessage shareContent
		wx.onMenuShareQQ shareContent
		wx.onMenuShareWeibo shareContent

