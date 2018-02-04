# @codekit-prepend "../../libs/js/min/riot.min.js"
# @codekit-prepend "../js/ctrl.js"
global = {}
main = {}
pre = {}
imageurl = "http://192.168.3.16:8881/sayno/corona/create/"
post_url = "http://192.168.3.16:8881/sayno/corona/insert/"
info_link= "http://192.168.3.16:8881/sayno/corona/get/"
sys = "other"
name_list = ["《一个像夏天一个像秋天》","《十年》","《有没有那么一首歌让你想起我》","《兄弟》"]
topic_list= [
	"那一年，握着一个128MB的MP3，\n好像抓住了全世界。\n每天放学回家的路上，\n是属于我们两个人的单曲循环。"
	"还记不记得那年夏天夜晚，\n我们坐在操场喝酒，\n一遍遍唱着《十年》，\n十年了，你们都在哪儿？"
	"好久不见，\n你们现在还好吗？\n老朋友，\n我突然有点想你们了。"
	"嘿，兄弟，\n有什么事别一个人扛。\n一句话，\n兄弟我过来陪你。"
]


changeImage = ->
	console.log "image changed"
	main.imageselect = true
getRandom = (length)->
	return parseInt(Math.random()*(length+1)-1)
window.onload = ->
	if window.navigator.userAgent.indexOf("NeteaseMusic") > -1
		sys = "NeteaseMusic"
	else
		loadWechatConfig()
		wx.ready ->
			shareContent =
				title: "有没有那么一首歌，让你想起……"
				desc: ""
				link: "http://m.giccoo.com/corona/"
				imgUrl: "http://m.giccoo.com/corona/img/ico.jpg"
				success: ->
					# alert "success"
				cancel: ->
					# alert "cancel"
			wx.onMenuShareTimeline shareContent
			wx.onMenuShareAppMessage shareContent
			wx.onMenuShareQQ shareContent
			wx.onMenuShareWeibo shareContent

	# 检查分享回调, 是否显示用户创建的图片
	if $_GET["id"] && $_GET["id"] > 0
		axios.get info_link+"?id="+$_GET["id"]
		.then (msg)->
			if msg.data.recode == 200
				pre = new Vue
					el: "#page-image"
					data:
						show: true
				document.getElementById("view-img").src = "http://image.giccoo.com/sayno/corona/#{msg.data.info.image}@!large"
			else
				init()
		return false
	init()
init = ->
	main = new Vue
		el: "#main"
		data:
			loading: false
			mount: true
			animate: false
			buildshow: false
			shareNote: false
			pop: false
			buildstep: 1
			musicname: name_list[getRandom(name_list.length)]
			topic: topic_list[getRandom(topic_list.length)]
			topichtml: "还记不记得那年夏天夜晚，<br/>我们站在湛蓝海岸，<br/>一遍遍嘶吼着《十年》。<br/>十年了，你们都在哪呢？"
			image: 1
			imageselect: false
			buildresult: ""
			buildover: false
			award: ""
			lastpage: false
			noaward: false
			haveaward: false
			registertext: false
			register: false
			playing: false
			form:
				username: ""
				mobile: ""
				address: ""
				code: ""
				random: ""
		watch:
			topic: ->
				@topichtml = @topic.replace(/\n/g,"<br/>")
			image: (val)->
				console.log val
				document.getElementById("preview-img").src = "./img/p-"+val+".jpg"
			award: (val)->
				@form.code = val
			playing: (val)->
				if val is true
					document.getElementById("bgm").play()
				else
					document.getElementById("bgm").pause()

		methods:
			# 切换图片
			prevImage: ->
				@image--
				if @image < 1
					@image = 3
			nextImage: ->
				@image++
				if @image > 3
					@image = 1
			reload: ->
				# 重置音乐和话题
				@musicname = name_list[getRandom(name_list.length)]
				@topic = topic_list[getRandom(topic_list.length)]
				console.log "??"
			gobuild: ->
				# 进入下一步创建
				@buildstep = 2
			buildimage: ->
				self = @
				canvas = document.getElementById "result"
				canvas.width = 640
				canvas.height = 1136
				# canvas.className = "topall"
				ctx = canvas.getContext("2d")
				@buildover = true
				image = new Image()
				bg = new Image()
				footer = new Image()
				image.onload = (evt)->
					ctx.drawImage(image, 320-300/2, 520-300/2, 300, 300)
					bg.onload = (evt)->
						ctx.drawImage(bg, 0, 0, bg.width, bg.height)
						writeText()
					bg.src = "./img/create-bg.png"
				if @imageselect
					image.src = global.canvas.getContent()
				else
					image.src = "./img/p-"+@image+".jpg"
				writeText = ->
					ctx.fillStyle = "#fff";
					ctx.textAlign = 'center'
					ctx.font = "24px '微软雅黑'"
					ctx.fillText(self.musicname,320,185)
					ctx.fillStyle = "#0c2440"
					ctx.textAlign = 'center'
					ctx.font = "28px '微软雅黑'"
					runLongTexts self.topic,ctx,320,795

					self.onUpload canvas.toDataURL("image/png")
				
			onUpload: (image)->

				main.loading = true
				data = {
					image: image
				}
				axios.post imageurl,data
				.then (msg)->
					if msg.data.recode is 200
						main.success(msg.data)
					else
						main.faild()
					
			success: (msg)->
				# 上传图片成功
				console.log msg
				updateShare msg
				if msg.award?
					@award = msg.award
					@form.random = msg.random
				console.log "sys:",sys
				if sys is "NeteaseMusic"
					main.showaward(2000)
				else
					main.shareNote = true


			faild: ->
				alert "图片上传失败,请返回重新操作"

			showaward: (time)->
				if @award > 0
					@haveaward = true
				else
					@noaward = true
				setTimeout ->
					main.lastpage = true
				,time

			onSubmit: (evt)->
				console.log @form
				if @form.username.length < 1
					alert '姓名不能为空'
					return false
				if @form.mobile.length < 1
					alert '电话不能为空'
					return false
				reg = /^1\d{10}$/
				unless reg.test @form.mobile
					alert '电话格式不正确'
					return false
				if @form.address.length < 1
					alert '地址不能为空'
					return false
				url = post_url
				data = {}
				for k, v of @form
					data[k] = v
				axios.post url,data
				.then (msg)->
					if msg.data.recode is 200
						main.registertext = true
						main.register = false
					else
						alert msg.data.reason
		mounted: ->
			# console.log "mount"
			riot.mount("*")
			@topichtml = @topic.replace(/\n/g,"<br/>")

# canvas 轮训文字
runLongTexts = (texts,ctx,x,y)->
	all = texts.split('\n')
	if texts.length > 0
		text = all[0]
		ctx.fillText(text,x,y)
		list = texts.replace(text+"\n","")
		list = list.replace(text,"")
		y += 26*1.4
		runLongTexts list,ctx,x,y

# 修改分享内容
updateShare = (msg)->
	imgUrl= "http://image.giccoo.com/sayno/corona/#{msg.filename}@!large"
	if msg.info.insertId? && msg.info.insertId > 0
		id = "?id="+msg.info.insertId
	else
		id = ""
	if sys is "NeteaseMusic"
		neteaseShare id,imgUrl
	else
		main.shareNote = true
		shareContent =
			title: "有没有那么一首歌，让你想起……"
			desc: ""
			link: "http://m.giccoo.com/corona/"+id
			imgUrl: "http://m.giccoo.com/corona/img/ico.jpg"
			success: ->
				# alert "success"
				main.shareNote = false
				main.showaward(500)
			cancel: ->
				# alert "cancel"
		wx.onMenuShareTimeline shareContent
		wx.onMenuShareAppMessage shareContent
		wx.onMenuShareQQ shareContent
		wx.onMenuShareWeibo shareContent

neteaseShare = (id,img)->
	title1 = "有没有那么一首歌，让你想起……"
	# picUrl = img
	picUrl = "http://m.giccoo.com/corona/img/ico.jpg"
	redirectUrl = "http://m.giccoo.com/corona/"+id
	# redirectUrl = ""
	title2 = "有没有那么一首歌，让你想起……"
	subTitle2 = " "
	window.location.href = "orpheus://share/"+encodeURIComponent(title1)+"/"+encodeURIComponent(picUrl)+"/"+encodeURIComponent(redirectUrl)+"/"+encodeURIComponent(title2)+"/"+encodeURIComponent(subTitle2)

loadWechatConfig = ->
	url = encodeURIComponent window.location.href.split("#")[0]
	hm = document.createElement('script')
	hm.src = "http://api.giccoo.com/api/config?url="+url
	s = document.getElementsByTagName('script')[0]
	s.parentNode.insertBefore hm, s
	return

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