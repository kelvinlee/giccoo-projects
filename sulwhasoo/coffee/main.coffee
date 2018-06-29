# @codekit-prepend "coffee/css3Prefix"
 # @codekit-prepend "../../libs/coffee/requestanimation"
# @codekit-prepend "../../libs/coffee/loadWechatConfig"
# @codekit-prepend "../../libs/coffee/passiveSupport"
# @codekit-prepend "../../libs/coffee/IsPC"
# @codekit-prepend "../../libs/vue/vue-player"
# @codekit-prepend "./pixi-music-icon"


# animate = (time)->
# 	requestAnimationFrame animate
# 	TWEEN.update(time)
# requestAnimationFrame animate

# Tn = (from = {x: 0},to = {x: 100},time = 800,callback)->
# 	tempX = from
# 	tween = new TWEEN.Tween(tempX)
# 	.to(to, time)
# 	.easing(TWEEN.Easing.Cubic.Out)
# 	.onUpdate =>
# 		callback tempX
# 	.start()
# 	return tween

String.prototype.gblen = -> 
	len = 0;	
	for i in [0...this.length]
		if this.charCodeAt(i)>127 or this.charCodeAt(i)==94
			len += 2
		else
			len++
	return len

imageurl = "//api.giccoo.com/api/upload/image64/"
main = {}
_public = {}
loading = {}
sulwhasooCache = null
sys = ""
ugcCache = null
sended = [false,false]
_CDN = "./"

neteaseShareImage = ->
	title1 = "最幸运的你，藏在你爱的音乐里"
	picUrl = "https://image.giccoo.com/upload/beingmate/"+main.shareImageLink+"@!large"
	redirectUrl = "https://m.giccoo.com/beingmate/"
	# console.log picUrl,"orpheus://sharepic?picUrl="+encodeURIComponent(picUrl)+"&shareUrl="+encodeURIComponent(redirectUrl)+"&wbDesc="+encodeURIComponent(title1)+"&qqDesc="+encodeURIComponent(title1)
	window.location.href = "orpheus://sharepic?picUrl="+encodeURIComponent(picUrl)+"&shareUrl="+encodeURIComponent(redirectUrl)+"&wbDesc="+encodeURIComponent(title1)+"&qqDesc="+encodeURIComponent(title1)


window.onload = ->
	if IsPC()
		document.getElementById("qrcode").className += " show"
		return false
	if window.navigator.userAgent.indexOf("NeteaseMusic") > -1
		sys = "NeteaseMusic"
	else
		loadWechatConfig()
		wx.ready ->
			shareContent =
				title: "最幸运的你，藏在你爱的音乐里"
				desc: "最幸运的你，藏在你爱的音乐里"
				link: "http://m.giccoo.com/beingmate/"
				imgUrl: "http://m.giccoo.com/beingmate/img/ico.jpg"
				success: ->
					# alert "success"
				cancel: ->
					# alert "cancel"
			wx.onMenuShareTimeline shareContent
			wx.onMenuShareAppMessage shareContent
			wx.onMenuShareQQ shareContent
			wx.onMenuShareWeibo shareContent
	
	_public = new Vue
		el: "#public"
		data:
			note: true
	init()

init = ->
	TrueH = document.documentElement.clientHeight
	TrueW = document.documentElement.clientWidth
	# console.log new Date().getTime() - startTime
	# document.body.style.height = TrueH+"px"
	# document.documentElement.className += " iphone4" if TrueW/TrueH >= 0.64
	TrueW = 640 if TrueW >= 640
	TrueH = 1138 if TrueH >= 1138
	smaller = TrueW/640*1138 > TrueH
	navH = Math.ceil TrueW / 640 * 94 / TrueH * 100
	console.log TrueW/TrueH < 0.52

	main = new Vue
		el: "#main"
		data:
			biger: TrueW/TrueH < 0.52
			wy: false
			mounted: false
			ugc: null
			ugcSave: null
			shareImageLink: null
			default:
				x: 0
				animated: false
			XY: "pageY"
		# watch:
		methods:
			nextPage: ->


		mounted: ->
			if sys is "NeteaseMusic"
				@.wy = true
			# if not musicLineCache?
			sulwhasooCache = new sulwhasoo({el: "canvas"})
			@.mounted = true
			console.log "mounted"

