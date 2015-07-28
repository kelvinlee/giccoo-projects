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
(($) ->
	$.extend $.fn, scrollTo: (m) ->
		n = this.scrollTop()
		old = this.scrollTop()
		timer = null
		that = this
		smoothScroll = (m) ->
			per = Math.round((m - old) / 15)
			n = n + per
			# console.log n,m,per,old
			if (n >= m and m > old) or (n <= m and m < old) or (per == 0)
				window.clearInterval timer
				n = m
				that.scrollTop n
				return false
			that.scrollTop n
		timer = window.setInterval((->
			smoothScroll m
		), 1000/30)
) Zepto
$(document).ready ->
	riot.mount("*")
	loadStart()

	if $_GET["err"]?
		return false
	if openid == ""
		window.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxb3dd8b8d67e940c4&redirect_uri={url}&response_type=code&scope=snsapi_base&state=123#wechat_redirect".replace("{url}",encodeURIComponent("http://i.giccoo.com/showman/"))
		return false
	loadWechatConfig()
	wx.ready ->
		shareContent =
			title: "2014 中国年度经纪人评选"
			desc: "2014 中国年度经纪人评选 由 中国保险报发起"
			link: "http://i.giccoo.com/showman/"
			imgUrl: "http://disk.giccoo.com/projects/showman/img/share.jpg"
			success: ->
				# alert "success"
			cancel: ->
				# alert "cancel"
		wx.onMenuShareTimeline shareContent
		wx.onMenuShareAppMessage shareContent
		wx.onMenuShareQQ shareContent
		wx.onMenuShareWeibo shareContent

loadWechatConfig = ->
	url = window.location.href.split("#")[0]
	hm = document.createElement('script')
	hm.src = "http://i.giccoo.com/config?url="+url
	s = document.getElementsByTagName('script')[0]
	s.parentNode.insertBefore hm, s
	return

loadStart = ->
	count = $("[data-layzr]").length
	now = 0
	ep = $(".load-progress .n")
	# return false
	console.log(count)
	layzr = new Layzr
		callback: (e)->
			# console.log e
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
					finishedLoad()
				,2000

SendNote = (msg,time = 2000)->
	$("body").append("<note title='"+msg+"' time='#{time}'></note>")
	riot.mount("note")

$_GET = do ->
	url = window.document.location.href.toString()
	u = url.split('?')
	if typeof u[1] == 'string'
		u = u[1].split('&')
		get = {}
		console.log u
		for i in u
			j = i.split('=')
			get[j[0]] = j[1]
		get
	else
		{}

finishedLoad = ()->
	SendNote decodeURI $_GET["err"] if $_GET["err"]?



