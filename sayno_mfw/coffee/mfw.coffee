# @codekit-prepend "coffee/css3Prefix"
# @codekit-prepend "coffee/plus"
# @codekit-prepend "js/vendor/exif.js"
# @codekit-prepend "../../libs/coffee/requestanimation"
# @codekit-prepend "../../libs/coffee/qrcode"

Store = {}
layzr = null
tm = null

debug = false
cdn = ""
isMM = false
isWechat = true
# cdn = "http://disk.giccoo.com/projects/Yili-Eat-World/" unless debug
global = {}
link = "http://api.giccoo.com"
# link = "http://192.168.1.141:8881"

defaultWords = [
	"谁说旅行就是凑热闹？"
	"谁说旅行就是装文艺?"
	"谁说旅行就是去度假?"
	"谁说旅行就是拍别人?"
]
INDEX = parseInt(Math.random()*defaultWords.length)
global.INDEX = INDEX

window.onload = ->
	riot.mount("*")
	shareDefault.title = defaultWords[INDEX]
	# console.log defaultWords
	UpdateShare()
	loadWechatConfig()
	wx.ready ->
		# alert "wechat"
		isWechat = true
		AppMShareContent =
			title: shareDefault.title
			desc: shareDefault.text
			link: shareDefault.url
			imgUrl: shareDefault.pic
			success: ->
				# alert "success"
			cancel: ->
				# alert "cancel"
		TimelineShareContent =
			title: shareDefault.title
			desc: shareDefault.text
			link: shareDefault.url
			imgUrl: shareDefault.pic
			success: ->
				# alert "success"
			cancel: ->
				# alert "cancel"
		wx.onMenuShareTimeline TimelineShareContent
		wx.onMenuShareAppMessage AppMShareContent
		wx.onMenuShareQQ AppMShareContent
		wx.onMenuShareWeibo TimelineShareContent

	if $_GET["id"]
		Loader("loadShare","正在加载中...")
		$.get link+"/sayno/mfw/share/",{id: $_GET["id"]},(msg)->
			Loader("loadShare","正在加载中...")
			$(".page").addClass("first")
			if msg.recode is 200
				$("#imghere").append("<img src='http://image.giccoo.com/sayno/mfw/#{msg.info.image}@!large'  />")
				$("#nums").text(msg.count)
				text = defaultWords[defaultWords.indexOf(msg.info.message)]
				UpdateShareContent(text,null,"http://m.giccoo.com/sayno_mfw/share.html?id="+msg.info.id,"http://image.giccoo.com/sayno/mfw/small-"+msg.info.image)
			else
				# window.location.href = "http://m.giccoo.com/sayno_mfw/"
				console.log "href"

UpdateShare = ->
	$("meta[property='og:title']").attr("content",shareDefault.title)
	$("meta[property='og:description']").attr("content",shareDefault.text)
	$("meta[property='og:url']").attr("content",shareDefault.url)
	$("meta[property='og:image']").attr("content",shareDefault.pic)
	TimelineShareContent =
		title: shareDefault.title
		desc: shareDefault.text
		link: shareDefault.url
		imgUrl: shareDefault.pic
		success: ->
			# alert "success"
		cancel: ->
			# alert "cancel"
	wx.onMenuShareTimeline TimelineShareContent
	wx.onMenuShareAppMessage TimelineShareContent
	wx.onMenuShareQQ TimelineShareContent
	wx.onMenuShareWeibo TimelineShareContent

loadWechatConfig = ->
	url = encodeURIComponent window.location.href.split("#")[0]
	hm = document.createElement('script')
	hm.src = "http://api.giccoo.com/config?url="+url
	s = document.getElementsByTagName('script')[0]
	s.parentNode.insertBefore hm, s
	return

selectFiles = ->
	console.log(this)
	self = this
	# data =  ""
	# self.passImage 'data:image/jpeg;base64,' + data
	# self.passImage "http://localhost:5757/sayno/img/add-image.jpg"
	# return false
	# mm.invoke 'readImage', {
	# 	'id': 'image'
	# 	'method': 0
	# 	'type': 'base64'
	# }, (id, data, size, type) ->
	# 	# document.getElementById(id).src = 'data:image/jpeg;base64,' + data
	# 	self.passImage 'data:image/jpeg;base64,' + data
	# 	return
	# alert wx.chooseImage
	wx.chooseImage
		count: 1,
		success: (res)->
			alert res
			self.passImage res.localIds

		

hideShareWechat = ->
	# console.log "close"
	$(".share-wechat").hide()

loadStart = ->
	count = $("[data-layzr]").length
	now = 0
	ep = $(".load-progress .n")
	# return false
	console.log(count)
	layzr = new Layzr
		callback: (e)->
			console.log e
			now++
			# console.log parseInt (now/count)*100
			if now >= count
				clearInterval tm
				ep.html parseInt((now/count)*100)+"%"
				$(".load-item-note1").css({height:parseInt(40*now/count)+"%"})
				setTimeout ->
					$("#loading").addClass("animated fadeOut")
					$(".begin").removeClass("hide")
					$(".build").removeClass("hide")
					# Store.game.build()
				,1500
				setTimeout ->
					$("#loading").hide()
				,1000

sending = false
uploadImage = (self,next)->
	if sending
		self.submiting = false
		return SendNote "正在提交请稍后"
	data = {}
	data.image = global.canvas.getContent()
	unless data.image
		self.submiting = false
		return SendNote "请先选择照片"
	data.message = $("#title").val()
	data.nickname = userInfo.name
	data.avatar = userInfo.avatar

	createFullImage = (callback)->
		canvas = document.createElement("canvas")
		canvas.width = 480
		canvas.height = 680
		canvas.className = "testCanvas"
		ctx = canvas.getContext "2d"
		ctx.fillStyle = "#ffffff"
		ctx.fillRect(0,0,480,680)
		times = 0
		loadAll = ->
			console.log times
			# return false
			if times >= 4
				data.image = canvas.toDataURL("image/png")
				callback()
				# console.log "callback"
			else
				times++

		image = new Image()
		image.onload = ->
			ctx.drawImage(image, 25, 25, 430, 430)
			ctx.font = "16px bold Tahoma, Arial, Roboto, Droid Sans, Helvetica Neue, Droid Sans Fallback, Microsoft YaHei, SimHei, Heiti SC, Hiragino Sans GB, Simsun, sans-self"
			ctx.lineWidth = 2
			ctx.textAlign = "right"
			# ctx.strokeStyle = "#ffffff"
			# ctx.strokeText("@"+data.nickname, 435, 485, 430)
			ctx.fillStyle = "#000000"
			ctx.fillText("@"+data.nickname, 435, 485, 430)
			loadAll()
		image.src = data.image

		logo = new Image()
		logo.onload = ->
			ctx.drawImage(logo, 35, 35, 120*1.2, 30*1.2)
			loadAll()
		logo.src = "./img/logo-mark.png"

		title = new Image()
		title.onload = ->
			height = 40
			ctx.drawImage(title, 25, 430+height, title.width, title.height)
			# ctx.beginPath()
			# ctx.lineWidth = 2
			# ctx.moveTo(25,430+height+10+title.height)
			# ctx.lineTo(270,430+height+10+title.height)
			# ctx.stroke()
			loadAll()
		title.src = "./img/build-title.png"

		slogen = new Image()
		slogen.onload = ->
			ctx.drawImage(slogen, 480-slogen.width-25, 680-slogen.height-25, slogen.width, slogen.height)
			loadAll()
		slogen.src = "./img/image-slogen.png"

		input = new Image()
		input.onload = ->
			height = 40+35
			console.log data.message,data.message is ""
			if data.message is "" or not data.message?
				ctx.drawImage(input, 25, 430+height, input.width, 35)
			else
				ctx.textAlign = "left"
				ctx.font = "22px bold Tahoma, Arial, Roboto, Droid Sans, Helvetica Neue, Droid Sans Fallback, Microsoft YaHei, SimHei, Heiti SC, Hiragino Sans GB, Simsun, sans-self"
				ctx.fillStyle = "#000000"
				ctx.fillText(data.message, 25, 430+height-10+input.height)

			# ctx.beginPath()
			# ctx.lineWidth = 2
			# ctx.moveTo(25,430+height+5+35)
			# ctx.lineTo(270,430+height+5+35)
			# ctx.stroke()
			loadAll()
		input.src = "./img/select-"+(global.INDEX+1)+".png"
		$("body").append canvas
		return 

	sending = true
	opendWaiting()
	createFullImage ->
		data.message = defaultWords[INDEX]
		$.post link+"/sayno/mfw/create",data, (msg)->
			sending = false
			self.submiting = false
			if msg.recode is 200
				# alert "Success"
				# showShare()
				next(msg)
			else
				SendNote msg.reason
			closeWaiting()

# 显示上传等待界面.
opendWaiting = ->
	Loader "upload","正在上传中请稍后","ball"
# 关闭上传等待.
closeWaiting = ->
	Loader "upload"

# loadOther = ->
# 	layzr = new Layzr
# 		selector: '[data-src]'
# 		attr:'data-src'
SendNote = (msg,time = 3000)->
	$("body").append("<note title='"+msg+"' time='#{time}'></note>")
	riot.mount("note")
_loader = {}

Loader = (id,title = "",type = "ball",time = 0,more = "")->
	if $("#"+id).length > 0
		return _loader[id].loadend()
	$("body").append("<loader id='"+id+"' title='"+title+"' type='"+type+"' time='#{time}'>#{more}</loader>")
	riot.mount("loader")


UpdateShareContent = (title = null,text = null,url = null,pic = null)->
	shareDefault.title = title if title?
	shareDefault.text = text if text?
	shareDefault.url = url if url?
	shareDefault.pic = pic if pic?
	UpdateShare()

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