# @codekit-prepend "coffee/css3Prefix"
 # @codekit-prepend "../../libs/coffee/requestanimation"
# @codekit-prepend "../../libs/coffee/loadWechatConfig"
# @codekit-prepend "../../libs/coffee/passiveSupport"
# @codekit-prepend "../../libs/coffee/IsPC"
# @codekit-prepend "../../libs/vue/vue-player"
# @codekit-prepend "./pixi-music-icon"

axios.defaults.withCredentials = true

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
	title1 = "点击获取你的治愈音乐瓶"
	picUrl = "https://image.giccoo.com/upload/sulwhasoo/"+main.shareImageLink+"@!large"
	redirectUrl = "https://m.giccoo.com/sulwhasoo/"
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
				title: "点击获取你的治愈音乐瓶"
				desc: "探索治愈音乐瓶，获取专属于你的小惊喜"
				link: "https://activity.music.163.com/sulwhasoo/"
				imgUrl: "https://activity.music.163.com/sulwhasoo/img/ico.jpg"
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
	# smaller = TrueW/640*1138 > TrueH
	navH = Math.ceil TrueW / 640 * 94 / TrueH * 100
	canvasH = document.getElementById("canvas").clientHeight
	smaller = true if canvasH < TrueH
	console.log canvasH, TrueH

	main = new Vue
		el: "#main"
		data:
			biger: false
			wy: false
			mounted: false
			ugc: null
			ugcSave: null
			loading: false
			shareImageLink: null
			ugcBtn: false
			pushed: false
			default:
				x: 0
				animated: false
			XY: "pageX"
			startX: 0
			startY: 0
			touching: true
			touchmoving: false
		watch:
			ugcBtn: (o,n)->
				console.log o,n
				if o isnt n
					@.ugcSave = sulwhasooCache.get() if not @.wy

		methods:
			selectUGC: (up)->
				if sulwhasooCache? and sulwhasooCache.Index is 6
					sulwhasooCache.selectUGC up, =>
					setTimeout =>
						@.ugcSave = sulwhasooCache.get() if not @.wy
					,600
			
			start: (evt)->
				touches = evt.touches
				@startX=touches[0].clientX
				@startY=touches[0].clientY
				@touching = true
				@touchmoving = 0
			move: (evt)->
				return false unless @touching
				@touchmoving += 1
				nowX=evt.touches[0].clientX
				nowY=evt.touches[0].clientY
				
				if (nowX-@startX)*(nowX-@startX)>(nowY-@startY)*(nowY-@startY)*2 
					if nowX-@startX>80&&@pagenow!=0
						@.selectUGC(true)
						@.touching = false
						console.log "uuuu"
					else if nowX-@startX< -80
						@.selectUGC(false)
						@.touching = false
						console.log "nnnn"

			end: (evt)->
				return false if @touchmoving <= 2
				# console.log @pageUpDown,@touching,@touchmoving
				@touching = false
				@touchmoving = 0

			share: ->
				image = sulwhasooCache.get()
				data = {
					image: image
					folder: "sulwhasoo"
				}
				return @.faild() unless image?
				return false if @.loading
				# @.ugcLoadPageShow = true
				@.loading = true
				axios.post imageurl,data
				.then (msg)=>
					if msg.data.recode is 200
						main.success(msg.data)
					else
						main.faild()
				.catch (e)=>
					# alert e
					main.faild()
			success: (data)->
				console.log "post success"
				@.loading = false
				@.shareImageLink = data.info
				neteaseShareImage()
			faild: ->
				@.loading = false
		mounted: ->
			if sys is "NeteaseMusic"
				@.wy = true
			# if not musicLineCache?
			sulwhasooCache = new sulwhasoo({el: "canvas"})
			@.mounted = true
			canvasH = document.getElementById("canvas").clientHeight
			# setTimeout =>
			# 	canvasH = document.getElementById("canvas").clientHeight
			# 	@.biger = true if canvasH < TrueH
			# 	console.log canvasH,TrueH,@.biger
			# ,200
			console.log "mounted"

	axios.get "//music.163.com/api/activity/lancome/userInfo?type=1"
	# axios.get "//qa-chip.igame.163.com/api/activity/sulwhasoo/userInfo?type=0"
	.then (msg)=>
		d = msg.data
		# d = {"code":200,"msg":null,"data":{"latestSongName":"Strawberries & Cigarettes","latestTime":1522764106000,"latestShareSongName":"生命是场马拉松","hottestSongName":"Strawberries & Cigarettes","hottestSongArtistName":"Various Artists","hottestSongCount":18,"hottestArtistSong":["Cry On My Shoulder","Here We Are Again","Річка"]}}
		# console.log d
		if d.code is 200
			lastName = d.data.latestSongName if d.data.latestSongName?
			shareName = d.data.latestShareSongName if d.data.latestShareSongName?
			if d.data.latestTime?
				date = new Date(d.data.latestTime)
				lastDate = "#{date.getFullYear()}年#{date.getMonth()+1}月#{date.getDate()}日"
				lastTime = "#{date.getHours()}:#{date.getMinutes()}"

