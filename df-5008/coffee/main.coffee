# @codekit-prepend "coffee/css3Prefix"
# @codekit-prepend "../../libs/js/min/riot.min.js"
# @codekit-prepend "../js/ctrl.js"

# http://api.giccoo.com/sayno/corona
_CDN = ""
_imgurl = ""
global = {}
main = {}
pre = {}
load = {}
post_url = "http://api.giccoo.com/df5008/insert/"
sys = "other"
# 《兄弟》
name_list = ["心之所向即为吾乡","淡泊明志,宁静致远","愿得浮生半日闲","一屋两人三餐四季"]
link_list = [{}]
topic_list= [
	"点击留下自己的\n心境感悟"
]
waitTime = 10000
imageLink = ""

runAnimate = ->
	# dom = document.getElementById("animate")
	# console.log TweenLite.to("#animate .animte-frame-1", 2, {backgroundColor:"#ff0000", width:"50%", top:"100px"});
	line = new TimelineLite()
	line.add TweenLite.set("#animate .animte-frame-1" ,{opacity: 0})
	line.add TweenLite.set("#animate .animte-frame-2" ,{opacity: 0})
	line.add TweenLite.set("#animate .animte-frame-3" ,{opacity: 0})
	line.add TweenLite.set("#animate .animte-frame-4" ,{opacity: 0})
	line.add TweenLite.set("#animate .animte-frame-4 .text" ,{y: 0, opacity: 1})
	line.add TweenLite.set("#animate .animte-frame-4 .sunlight" ,{y: 800, opacity: 0})
	line.add TweenLite.set("#animate .animte-frame-4 .people" ,{y: 400, opacity: 0})
	line.add TweenLite.set("#animate .animte-frame-4 .text-1" ,{y: 200, opacity: 0})
	line.add TweenLite.set("#animate .animte-frame-4 .text-2" ,{y: 200, opacity: 0})
	line.add TweenLite.set("#animate .animte-frame-4 .text-3" ,{y: 200, opacity: 0})

	line.to("#animate .animte-frame-1", 0.8, {opacity: 1})
	.to("#animate .animte-frame-2", 0.8, {opacity: 1, delay: 3.5})
	.to("#animate .animte-frame-3", 0.8, {opacity: 1, delay: 3.5})
	.to("#animate .animte-frame-4", 0.8, {opacity: 1, delay: 3.5})
	.to("#animate .animte-frame-4 .text", 0.8, {y: -800, opacity: 0, delay: 3.5})
	.to("#animate .animte-frame-4 .sunlight", 0.8, {y: 0, opacity: 1, delay: -1})
	.to("#animate .animte-frame-4 .people", 0.8, {y: 0, opacity: 1, delay: 0})
	.to("#animate .animte-frame-4 .text-3", 0.6, {y: 0, opacity: 1, delay: 0})
	.to("#animate .animte-frame-4 .text-2", 0.6, {y: 0, opacity: 1, delay: -0.3})
	.to("#animate .animte-frame-4 .text-1", 0.6, {y: 0, opacity: 1, delay: -0.3, onComplete: ->
		# alert "over animate"
		main.animatend = false
	})
	

	# line.add TweenLite.to "#animate .animte-frame-2",1 ,{opacity: 1,delay: 5}

 
changeImage = ->
	console.log "image changed"
	main.imageselect = true
getRandom = (length)->
	return parseInt(Math.random()*(length+1)-1)
window.onload = ->

	# runAnimate()
	# return false

	if window.navigator.userAgent.indexOf("NeteaseMusic") > -1
		sys = "NeteaseMusic"
	else
		# stopWebViewScroll()
		loadWechatConfig()
		wx.ready ->
			shareContent =
				title: "东风-5008"
				desc: " "
				link: "http://m.giccoo.com/df-5008/"
				imgUrl: "http://m.giccoo.com/df-5008/img/ico.jpg"
				success: ->
					# alert "success"
				cancel: ->
					# alert "cancel"
			wx.onMenuShareTimeline shareContent
			wx.onMenuShareAppMessage shareContent
			wx.onMenuShareQQ shareContent
			wx.onMenuShareWeibo shareContent

	init()

loadEnd = ->

review = ->

init = ->
	# index = getRandom(name_list.length)
	# main = new Vue
	# 	el: "#main"
	# 	data:
	# 		animatend: false
	# 		loading: false
	# 		mount: true
	# 		animate: false
	# 		buildshow: false
	# 		shareNote: false
	# 		shareNoteSys: false
	# 		pop: false
	# 		buildstep: 1
	# 		musicname: name_list[1]
	# 		topic: topic_list[1]
	# 		# topichtml: "还记不记得那年夏天夜晚，<br/>我们站在湛蓝海岸"
	# 		image: 1
	# 		imageselect: false
	# 		buildresult: ""
	# 		buildover: false
	# 		award: ""
	# 		creatEnd: false
	# 		lastpage: false
	# 		noaward: false
	# 		haveaward: false
	# 		registertext: false
	# 		register: false
	# 		playing: false
	# 		postfail: false
	# 		ugc: false
	# 		ugcsrc: ""
	# 		cacheArea: ""
	# 		cacheName: ""
	# 		awardText: ""
	# 		awardlink: ""
	# 		form:
	# 			username: ""
	# 			mobile: ""
	# 			address: ""
	# 			code: ""
	# 			random: ""
	# 	watch:
	# 		animate: (val)->
	# 			if val
	# 				runAnimate()
	# 		# topic: ->
	# 		# 	temp = @topic.replace(/\n/g,"<br/>")
	# 		# 	temp = temp.replace(' (可编辑)',"")
	# 		# 	console.log temp
	# 		# 	@topichtml = temp

	# 		image: (val)->
	# 			console.log val
	# 			document.getElementById("preview-img").src = "./img/p-"+val+".jpg"
	# 		award: (val)->
	# 			@form.code = val
	# 		# playing: (val)->
	# 			# if val is true
	# 			# 	document.getElementById("bgm").play()
	# 			# else
	# 			# 	document.getElementById("bgm").pause()
	# 	computed:
	# 		musicnamefull: ->
	# 			return "《"+@musicname.replace(' (可编辑)',"")+"》"
	# 		topichtml: ->
	# 			temp = @topic.replace(/\n/g,"<br/>")
	# 			temp = temp.replace(' (可编辑)',"")
	# 			return temp
	# 	methods:
	# 		# 切换图片
	# 		playbgm: ->
	# 			@playing = !@playing
	# 			if @playing
	# 				document.getElementById("bgm").play()
	# 			else
	# 				document.getElementById("bgm").pause()

	# 		focus: (evt)->
	# 			if name_list.indexOf(@musicname) > -1
	# 				@cacheName = @musicname+""
	# 				@musicname = ""
	# 		blur: (evt)->
	# 			if @musicname is ""
	# 				@musicname = @cacheName
	# 		focusArea: (evt)->
	# 			if topic_list.indexOf(@topic) > -1
	# 				@cacheArea = @topic+""
	# 				@topic = ""
	# 		blurArea: (evt)->
	# 			if @topic is ""
	# 				@topic = @cacheArea
	# 		prevImage: ->
	# 			@image--
	# 			if @image < 1
	# 				@image = 3
	# 		nextImage: ->
	# 			@image++
	# 			if @image > 3
	# 				@image = 1
	# 		reload: ->
	# 			# 重置音乐和话题
	# 			index = getRandom(name_list.length)
	# 			@musicname = name_list[index]
	# 			@topic = topic_list[index]

	# 		gobuild: ->
	# 			# 进入下一步创建
	# 			if @musicname.length <= 0
	# 				alert "请再想想属于我们的那首歌"
	# 			else if @topic.split("\n").length > 2
	# 				alert "请控制您丰富的感情在 2 行以内的文字."
	# 			else if @topic.length <= 0
	# 				alert "请输入要对老朋友说的话"
	# 			else
	# 				texts = @topic.split("\n")
	# 				for i in texts
	# 					console.log i.replace(/[^\x00-\xff]/g,"01").length
	# 					return alert "请控制您丰富的感情当行文字不能超过20个中文字符以内" if i.replace(/[^\x00-\xff]/g,"01").length > 40

	# 				@buildstep = 2
	# 		buildimage: ->
	# 			self = @
	# 			canvas = document.getElementById "result"
	# 			canvas.width = 640
	# 			canvas.height = 1138
	# 			# canvas.className = "topall"
	# 			ctx = canvas.getContext("2d")
	# 			@buildover = true
	# 			image = new Image()
	# 			bg = new Image()
	# 			footer = new Image()
	# 			image.onload = (evt)->
	# 				ctx.drawImage(image, 320-280/2, 570-280/2, 280, 280)
	# 				bg.onload = (evt)->
	# 					ctx.drawImage(bg, 0, 0, bg.width, bg.height)
	# 					writeText()
	# 				bg.src = "./img/create-bg.png"
	# 			if @imageselect
	# 				image.src = global.canvas.getContent()
	# 			else
	# 				image.src = "./img/p-"+@image+".jpg"
	# 			writeText = ->
	# 				ctx.fillStyle = "#fff";
	# 				ctx.textAlign = 'center'
	# 				ctx.font = "24px '微软雅黑'"
	# 				ctx.fillText(self.musicnamefull,320,270)
	# 				ctx.fillStyle = "#0c2440"
	# 				ctx.textAlign = 'center'
	# 				ctx.font = "24px '微软雅黑'"
	# 				runLongTexts self.topic,ctx,320,810
	# 				main.creatEnd = true
	# 				self.onUpload canvas.toDataURL("image/png")
	# 				self.ugc = true
	# 				self.ugcsrc = canvas.toDataURL("image/png")
	# 		onUpload: (image)->

	# 			# main.loading = true
	# 			data = {
	# 				image: image
	# 			}
	# 			axios.post imageurl,data
	# 			.then (msg)->
	# 				if msg.data.recode is 200
	# 					main.success(msg.data)
	# 				else
	# 					main.faild()
	# 			.catch (e)->
	# 				# alert e
	# 				main.faild()
	# 		success: (msg)->
	# 			# 上传图片成功
	# 			# console.log msg
	# 			# main.loading =  false
	# 			updateShare msg
	# 			main.awardText = msg.awardname
	# 			main.awardlink = msg.awardlink if msg.awardlink?
	# 			if msg.award?
	# 				@award = msg.award
	# 				@form.random = msg.random
	# 			# console.log "sys:",sys
	# 			if sys is "NeteaseMusic"
	# 				# main.showaward(waitTime)
	# 				setTimeout ->
	# 					main.shareNoteSys = true
	# 				,1000
	# 			else
	# 				main.shareNote = true
	# 		faild: ->
	# 			main.loading =  false
	# 			main.postfail = true
	# 			alert "图片上传失败,请返回重新操作"
	# 		popshow: ->
	# 			# alert "show share"
	# 			neteaseShare()
	# 			main.showaward(waitTime)

	# 		showaward: (time)->
	# 			main.shareNoteSys = false
	# 			if @award > 0
	# 				@haveaward = true
	# 			else
	# 				@noaward = true
	# 			setTimeout ->
	# 				main.lastpage = true
	# 			,time
	# 		gotoregister: ->
	# 			if @awardlink is ""
	# 				@register = true
	# 			else
	# 				window.location.href = @awardlink
	# 		onSubmit: (evt)->
	# 			console.log @form
	# 			if @form.username.length < 1
	# 				alert '姓名不能为空'
	# 				return false
	# 			if @form.mobile.length < 1
	# 				alert '电话不能为空'
	# 				return false
	# 			reg = /^1\d{10}$/
	# 			unless reg.test @form.mobile
	# 				alert '电话格式不正确'
	# 				return false
	# 			if @form.address.length < 1
	# 				alert '地址不能为空'
	# 				return false
	# 			url = post_url
	# 			data = {}
	# 			for k, v of @form
	# 				data[k] = v
	# 			axios.post url,data
	# 			.then (msg)->
	# 				if msg.data.recode is 200
	# 					main.registertext = true
	# 					main.register = false
	# 				else
	# 					alert msg.data.reason
	# 	mounted: ->
	# 		# console.log "mount"
	# 		riot.mount("*")
	# 		# @topichtml = @topic.replace(/\n/g,"<br/>")
	# 		# document.getElementById("btn-build-show").addEventListener ANIMATION_END_NAME, (evt)->
	# 		# 	console.log "can click"
	# 		# 	main.animatend = false
	# 		loadEnd()
	# 		# runAnimate()
	main = new Vue
		el: "#main"
		data:
			mount: false
			loading: false
			homepageShow: true
			buildshow: false
			buildstep: 1
			topic: topic_list[0]
			musicData: {}
			creatEnd: false
			ugcsrc: null
			ugc: false
			cacheArea: ""
			musicIndex: 0
			form:
				username: ""
				mobile: ""
		computed:
			musicname: ->
				return "name"
			musicdesc: ->
				return "desc"
		methods:
			start: ->
				@buildshow = true
			gobuild: ->
				@buildstep = 2
			selectContent: (evt)->
			musicSelectPrev: ->
				if (@musicIndex-1) < 0
					return false
				@musicIndex += -1
			musicSelectNext: ->
				if @musicIndex > (link_list.length-1)
					return false
				@musicIndex += 1
			buildimage: ->

			share: ->

			focusArea: (evt)->
				if topic_list.indexOf(@topic) > -1
					@cacheArea = @topic+""
					@topic = ""

			blurArea: (evt)->
				@topic = @cacheArea if @topic is ""
					
			onSubmit: (evt)->
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
				url = post_url
				data = {}
				# add content
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

# canvas 轮训文字
runLongTexts = (texts,ctx,x,y)->
	all = texts.split('\n')
	if texts.length > 0
		text = all[0]
		ctx.fillText(text.replace(' (可编辑)',""),x,y)
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
		_imgurl = imgUrl
		# neteaseShare id,imgUrl
		# img = new Image()
		# img.onload = ->
		# 	neteaseShare id,imgUrl
		# img.src = imgUrl
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

neteaseShare = ->
	title1 = "有没有那么一首歌，让你想起……"
	picUrl = _imgurl
	# picUrl = "http://m.giccoo.com/corona/img/ico.jpg"
	redirectUrl = "http://m.giccoo.com/corona/"
	# redirectUrl = ""
	title2 = "有没有那么一首歌，让你想起……"
	subTitle2 = " "
	# window.location.href = "orpheus://share/"+encodeURIComponent(title1)+"/"+encodeURIComponent(picUrl)+"/"+encodeURIComponent(redirectUrl)+"/"+encodeURIComponent(title2)+"/"+encodeURIComponent(subTitle2)
	# window.location.href = "orpheus://sharepic?picUrl="+encodeURIComponent(picUrl)+"&shareUrl="+encodeURIComponent(redirectUrl)+"&wbDesc="+encodeURIComponent(title1)+"&qqDesc="+encodeURIComponent(title1)

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

stopWebViewScroll = ->
	overscroll = (el)->
		el.addEventListener 'touchstart', ->
			top = el.scrollTop
			totalScroll = el.scrollHeight
			currentScroll = top + el.offsetHeight
			if top is 0
				el.scrollTop = 1
			else if currentScroll is totalScroll
				el.scrollTop = top-1
			# alert el.scrollTop
		el.addEventListener "touchmove", (evt)->
			if el.offsetHeight < el.scrollHeight
				evt._isScroller = true
	document.addEventListener "touchmove", (evt)->
		unless evt._isScroller
			evt.preventDefault()
	# console.log document.querySelectorAll(".touch")
	for el in document.querySelectorAll(".touch")
		overscroll el