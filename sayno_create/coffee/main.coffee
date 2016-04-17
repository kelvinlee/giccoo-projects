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
# cdn = "http://disk.giccoo.com/projects/Yili-Eat-World/" unless debug
global = {}
link = "http://api.giccoo.com"

defaultWords = [
	"谁说素颜不能当女神？"
	"谁说90后=非主流？"
	"谁说旅行晒照是种病？"
	"谁说美食不该手机先吃？"
]
global.INDEX = 1
namelist = []


window.onload = ->
	# $("#loading").hide()

	# if document.getElementById("qrcode").getStyle("display") is "block"
	# 	qrcode()
	# 	return false
	riot.mount("*")

	$("#title").on "keyup", ->
		if $("#title").val().length > 0
			$("#title").next().hide()
		else
			$("#title").next().show()
	$("#title").on "change", ->
		if $("#title").val().length > 0
			$("#title").next().hide()
		else
			$("#title").next().show()

	# $("#submit").on "click", uploadImage
	# ep = $(".load-progress .n")
	# tm = setInterval ->
	# 		if parseInt(ep.html()) >= 96
	# 			clearInterval tm
	# 			return false
	# 		v = parseInt(ep.html())+parseInt(Math.random()*5)
	# 		ep.html v+"%"
	# 		$(".load-item-note1").css({height:(40*v*0.01)+"%"})
	# 	,100
	# if $("body").height() <= 460
	# 	$("body").addClass "iphone4"

	# setTimeout ->
	# 	loadStart()
	# ,2500
	# $(document).on "click", ".icon-wechat", ->
	# 	# console.log "abcd"
	# 	$(".share-wechat").show()

	# # alert window.location.href
	$.get 'http://api.giccoo.com/sayno/momo/config', {url: window.location.href}, (resp)->
		config = resp
		console.log "back config:",config
		mm.invoke 'initConfig', config, (resq)->
			# alert window.location.href
			# alert resq
			console.log "init Config momo:",resq
			shareDefault.title = defaultWords[global.INDEX] + shareDefault.title
			isMM = true
			UpdateShare()
			# Store.build && Store.build.updateFrom()

selectFiles = ->
	console.log(this)
	self = this
	# data =  ""
	# self.passImage 'data:image/jpeg;base64,' + data
	# self.passImage "http://localhost:5757/sayno/img/add-image.jpg"
	# return false
	mm.invoke 'readImage', {
		'id': 'image'
		'method': 0
		'type': 'base64'
	}, (id, data, size, type) ->
		# document.getElementById(id).src = 'data:image/jpeg;base64,' + data
		self.passImage 'data:image/jpeg;base64,' + data
		return

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
uploadImage = (next)->
	if sending
		return SendNote "正在提交请稍后"
	data = {}
	data.image = global.canvas.getContent()
	unless data.image
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
			ctx.strokeStyle = "#000000"
			ctx.strokeText("@"+data.nickname, 435, 435, 430)
			ctx.fillStyle = "#ffffff"
			ctx.fillText("@"+data.nickname, 435, 435, 430)
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
			ctx.beginPath()
			ctx.lineWidth = 2
			ctx.moveTo(25,430+height+10+title.height)
			ctx.lineTo(270,430+height+10+title.height)
			ctx.stroke()
			loadAll()
		title.src = "./img/build-title.png"

		slogen = new Image()
		slogen.onload = ->
			ctx.drawImage(slogen, 480-slogen.width-25, 680-slogen.height-25, slogen.width, slogen.height)
			loadAll()
		slogen.src = "./img/image-slogen.png"

		input = new Image()
		input.onload = ->
			height = 40+35+15
			console.log data.message,data.message is ""
			if data.message is "" or not data.message?
				ctx.drawImage(input, 25, 430+height, input.width, 35)
			else
				ctx.textAlign = "left"
				ctx.font = "22px bold Tahoma, Arial, Roboto, Droid Sans, Helvetica Neue, Droid Sans Fallback, Microsoft YaHei, SimHei, Heiti SC, Hiragino Sans GB, Simsun, sans-self"
				ctx.fillStyle = "#000000"
				ctx.fillText(data.message, 25, 430+height-10+input.height)

			ctx.beginPath()
			ctx.lineWidth = 2
			ctx.moveTo(25,430+height+5+35)
			ctx.lineTo(270,430+height+5+35)
			ctx.stroke()
			loadAll()
		input.src = "./img/build-title-bg-"+(global.INDEX+1)+".png"
		# $("body").append canvas
		return 

	sending = true
	opendWaiting()
	createFullImage ->
		# return false
		if data.message is "" or not data.message?
			data.message = defaultWords[global.INDEX]
		else
			data.message = "谁说"+data.message
		$.post link+"/sayno/build/create",data, (msg)->
			sending = false
			if msg.recode is 200
				# alert "Success"
				# showShare()
				setTimeout ->
					next(msg)
				,520
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


share = {
	call: ->
		shareCall()
}

UpdateShare = ->
	shareOneConfig.title = shareDefault.title
	shareOneConfig.text = shareDefault.text
	shareOneConfig.url = shareDefault.url
	shareOneConfig.pic = shareDefault.pic
	shareOneConfig.resource.icon = shareDefault.pic
	shareOneConfig.resource.link = shareDefault.url
	shareOneConfig.resource.title = shareDefault.title
	shareOneConfig.resource.desc = shareDefault.text

	try
		Config = {
			enable: {
				ui_btn: 1
			},
			share: {
				title: shareDefault.title,
				text: shareDefault.text,
				url: shareDefault.url,
				pic: shareDefault.pic,
				token:	'87d9yxBlJPJ0Enw2urLSr%2F09le0CT0Jw6Pjl1yZI7dTq',
				callback: 'shareEnd',
				apps: ['momo_feed', 'momo_contacts'],
				configs: {
					momo_feed: {
						title: shareDefault.title,
						text: shareDefault.text,
						url: shareDefault.url,
						pic: shareDefault.pic,
						resource:{
							icon: shareDefault.pic,
							link: shareDefault.url,
							title: shareDefault.title,
							desc: shareDefault.text,
							ignore_pic:1
						}
					},
					momo_friend: shareDefault,
					momo_discuss: shareDefault,
					momo_group: shareDefault
				}
			},
			ui_btn: {
				title: '',
				dropdown: 0,
				buttons:[
					{
						text: "分享",
						icon: '',
						action: 0,
						param: {callback: "share.call"}
					}
				]
			}
		}
		# alert JSON.stringify Config
		mm.invoke('init' , Config)
	catch e
		console.log e

shared = false
shareOneToAll = ->
	console.log(shareOneConfig)
	# alert shareOneConfig
	if (shared)
		SendNote("已经分享过,请等待5秒.")
		return false
	shared = true
	setTimeout ->
		shared = false
	,5000
	mm.invoke 'shareOne',shareOneConfig, (resp)->
		SendNote("分享成功!")

shareCall = ->
	mm.invoke('callShare' , {
		title: shareDefault.title,
		text: shareDefault.text,
		url: shareDefault.url,
		pic: shareDefault.pic,
		token:	'87d9yxBlJPJ0Enw2urLSr%2F09le0CT0Jw6Pjl1yZI7dTq',
		callback: 'shareEnd',
		apps: ['momo_feed', 'momo_contacts'],
		configs: {
			momo_feed: {
				title: shareDefault.title,
				text: shareDefault.text,
				url: shareDefault.url,
				pic: shareDefault.pic,
				resource:{
					icon: shareDefault.pic,
					link: shareDefault.url,
					title: shareDefault.title,
					desc: shareDefault.text,
					ignore_pic:1
				}
			},
			momo_friend: shareDefault,
			momo_discuss: shareDefault,
			momo_group: shareDefault
		}
	})

UpdateShareContent = (title = null,text = null,url = null,pic = null)->
	shareDefault.title = title if title?
	shareDefault.text = text if text?
	shareDefault.url = url if url?
	shareDefault.pic = pic if pic?
	UpdateShare()

shareEnd = (msg)->
	# alert "share back:"+msg.status
	# if msg.status is 0
	global.homepage.openShare() if global.homepage?

# $_GET = do ->
# 	url = window.document.location.href.toString()
# 	u = url.split('?')
# 	if typeof u[1] == 'string'
# 		u = u[1].split('&')
# 		get = {}
# 		console.log u
# 		for i in u
# 			j = i.split('=')
# 			get[j[0]] = j[1]
# 		get
# 	else
# 		{}