_wechat_f = 
	"appid": ""
	"img_url": ""
	"img_width": 200
	"img_height": 200
	"link": ""
	"desc": ""
	"title": ""
_wechat =
	"appid": ""
	"img_url": ""
	"img_width": 200
	"img_height": 200
	"link": ""
	"desc": ""
	"title": ""
_wechat_bool = false
reloadWechat = ->
	shareFriend()
	shareTimeline()
	
shareFriend = ->
	if window.WeixinJSBridge
		WeixinJSBridge.invoke 'sendAppMessage', _wechat_f
shareTimeline = ->
	if window.WeixinJSBridge
		WeixinJSBridge.invoke 'shareTimeline', _wechat

document.addEventListener 'WeixinJSBridgeReady', ->
	_wechat_bool = true
	WeixinJSBridge.on 'menu:share:appmessage', (argv)->
		shareFriend()
	WeixinJSBridge.on 'menu:share:timeline', (argv)->
		shareTimeline()
	nav = navigator.userAgent.toLowerCase()

BindShare = (content,url = window.location.href,pic)->
	list = 
		"qweibo":"http://v.t.qq.com/share/share.php?title={title}&url={url}&pic={pic}"
		"renren":"http://share.renren.com/share/buttonshare.do?title={title}&link={url}&pic={pic}"
		"weibo":"http://v.t.sina.com.cn/share/share.php?title={title}&url={url}&pic={pic}"
		"qzone":"http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url={url}&title={title}&pic={pic}"
		"facebook":"http://www.facebook.com/sharer/sharer.php?s=100&p[url]={url}}&p[title]={title}&p[summary]={title}&pic={pic}"
		"twitter":"https://twitter.com/intent/tweet?text={title}&pic={pic}"
		"kaixin":"http://www.kaixin001.com/rest/records.php?content={title}&url={url}&pic={pic}"
		"douban": "http://www.douban.com/share/service?bm=&image={pic}&href={url}&updated=&name={title}"
	# $("a[data-share]").off('click').on 'click', ->
	$("a[data-share]").each (e)->
		$(this).attr "href",fShare list[$(this).data('share')],content,url,pic
	# $("a[data-share]").click (e)->
		# _hmt.push(['_trackEvent', 'home', 'share', $(this).data('share')])

fShare = (url,content,sendUrl,pic = "")->
	# 分享内容
	content = content
	shareContent = encodeURIComponent content
	pic = encodeURIComponent pic
	url = url.replace "{title}",shareContent
	url = url.replace "{pic}",pic
	# 分享地址
	backUrl = encodeURIComponent sendUrl
	url = url.replace "{url}",backUrl
	# console.log url
	# window.location.href url
	return url

