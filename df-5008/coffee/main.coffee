_CDN = ""
_imgurl = ""
global = {}
main = {}
pre = {}
load = {}
post_url = "http://api.giccoo.com/df5008/insert/"
sys = "other"
noteText = "长按识别二维码，\n去往2018年的远方。"
name_list = ["心之所向\n即为吾乡","淡泊明志\n宁静致远","愿得浮生\n半日闲","一屋两人\n三餐四季"]
# http://music.163.com/song/media/outer/url?id=92613
music_list = [
	{name:"平凡之路",desc:"朴树",src:"http://music.163.com/song/media/outer/url?id=28815250"},
	{name:"咖喱咖喱",desc:"牛奶咖啡",src:"http://music.163.com/song/media/outer/url?id=476987525"},
	{name:"边走边喝",desc:"黄磊",src:"http://music.163.com/song/media/outer/url?id=92613"}
	{name:"微笑的仙人掌",desc:"彭靖惠",src:"http://music.163.com/song/media/outer/url?id=280668"}
	{name:"Friends",desc:"彭靖惠",src:"http://music.163.com/song/media/outer/url?id=280684"}
	{name:"国境之南",desc:"范逸臣",src:"http://music.163.com/song/media/outer/url?id=4873061"}
	{name:"下一站，幸福",desc:"彭靖惠",src:"http://music.163.com/song/media/outer/url?id=280649"}
	{name:"环游世界",desc:"小旺福",src:"http://music.163.com/song/media/outer/url?id=385640"}
	{name:"爱是有故事的旅行",desc:"李泉",src:"http://music.163.com/song/media/outer/url?id=111801"}
	{name:"Taipei City，台北城市",desc:"陈奕迅",src:"http://music.163.com/song/media/outer/url?id=67829"}
]
topic_list= [
	"点击留下自己的\n心境感悟"
]

getRandom = (length)->
	return parseInt(Math.random()*(length+1)-1)
window.onload = ->
	# runAnimate()
	if window.navigator.userAgent.indexOf("NeteaseMusic") > -1
		sys = "NeteaseMusic"
	else
		# stopWebViewScroll()
		loadWechatConfig()
		wx.ready ->
			shareContent =
				title: "吾有心语，享，往远方"
				desc: "心之所向，即为远方。"
				link: "http://peugeot.music.163.com/df-5008/"
				imgUrl: "http://peugeot.music.163.com/df-5008/img/ico.jpg"
				success: ->
					# alert "success"
				cancel: ->
					# alert "cancel"
			wx.onMenuShareTimeline shareContent
			wx.onMenuShareAppMessage shareContent
			wx.onMenuShareQQ shareContent
			wx.onMenuShareWeibo shareContent
	init()

init = ->
	main = new Vue
		el: "#main"
		data:
			homepageShow: true
			mount: false
			loading: false
			lastpage: false
			buildshow: false
			buildstep: 1
			buildover: false
			topic: topic_list[0]
			musicData: {}
			creatEnd: false
			ugcsrc: null
			ugc: false
			qrsrc: null
			qr: false
			cacheArea: ""
			musicIndex: 0
			contentIndex: 0
			playing: false
			wechatshare: false
			audioSRC: music_list[0].src
			form:
				username: ""
				mobile: ""
		computed:
			musicname: ->
				return music_list[@musicIndex].name
			musicdesc: ->
				return music_list[@musicIndex].desc
		methods:
			start: ->
				@buildshow = true
				@homepageShow = false
				document.getElementById("audio-music").addEventListener "play", @changPlay.bind @
				document.getElementById("audio-music").addEventListener "pause", @changEnd.bind @
				document.getElementById("audio-music").addEventListener "ended", @changEnd.bind @
				document.getElementById("audio-music").play()
			gobuild: ->
				if @topic is topic_list[0]
					return alert "请输入您自己的心境感悟"
				else if @topic.split("\n").length > 4
					return alert "请控制您丰富的感情在 4 行以内的文字."
				else if @topic.length <= 0
					return alert "请输入您自己的心境感悟"
				else
					texts = @topic.split("\n")
					for i in texts
						console.log i.replace(/[^\x00-\xff]/g,"01").length
						return alert "请控制您丰富的感情,单行文字不能超过15个中文字符以内" if i.replace(/[^\x00-\xff]/g,"01").length > 30

				@buildstep = 2
				
			selectContent: (evt,index)->
				# console.log evt,index
				@contentIndex = parseInt index

			musicSelectPrev: ->
				@musicIndex += -1
				if @musicIndex <= 0
					@musicIndex = 0
					return false
				@play()
			musicSelectNext: ->
				@musicIndex += 1
				if @musicIndex > (music_list.length-1)
					@musicIndex = music_list.length-1
					return false
				@play()
			play: ->
				# @audioSRC = music_list[@musicIndex].src
				document.getElementById("audio-music").src = music_list[@musicIndex].src
				document.getElementById("audio-music").play()
			changPlay: ->
				@playing = true
				_hmt? and _hmt.push(['_trackEvent', "df-5008", "music", music_list[@musicIndex].name, "-"])
			changEnd: ->
				@playing = false
			pause: ->
				if @playing
					document.getElementById("audio-music").pause()
				else
					document.getElementById("audio-music").play()
			buildimage: ->
				if @contentIndex < 1 or @contentIndex > 4
					return alert "请选择意愿场景"
				# create canvas

				self = @
				canvas = document.getElementById "result"
				canvas.width = 640
				canvas.height = 1024
				# canvas.className = "topall"
				ctx = canvas.getContext("2d")
				@buildover = true
				bg = new Image()
				logo = new Image()
				bg.onload = (evt)->
					ctx.drawImage(bg, 0, 0, bg.width, bg.height)
					logo.onload = ->
						ctx.drawImage(logo, 0, 0, logo.width, logo.height)
						writeText()
					logo.src="./img/logo.png"
				bg.src = "./img/bg-#{self.contentIndex}.jpg"
				
				writeText = ->
					ctx.fillStyle = "#fff";
					ctx.textAlign = 'center'
					ctx.font = "56px '微软雅黑'"
					ctx.shadowColor = 'rgba(0, 0, 0, 0.9)';
					ctx.shadowBlur = 5;
					# ctx.fillText(name_list[self.contentIndex-1],320,270)
					runLongTexts name_list[self.contentIndex-1],ctx,320,440
					ctx.fillStyle = "#fff"
					ctx.textAlign = 'center'
					ctx.font = "30px '微软雅黑'"
					MAX = self.topic.split('\n').length
					removeH = MAX * (30*1)
					runLongTexts self.topic,ctx,320,284-removeH
					ctx.font = "30px '微软雅黑' bold"
					ctx.fillText(self.musicname,320,790)
					ctx.font = "24px '微软雅黑'"
					ctx.fillText(self.musicdesc,320,830)
					
					# self.onUpload canvas.toDataURL("image/png")
					self.ugc = true
					self.ugcsrc = canvas.toDataURL("image/png")
					# add logo
					# main.creatEnd = true
					qr = new Image()
					qr.onload = ->
						ctx.textAlign = 'left'
						ctx.font = "20px '微软雅黑'"
						runLongTexts noteText,ctx,100,1024-56
						ctx.drawImage(qr, 10, 1024-80-10, 80, 80)
						self.qr = true
						self.qrsrc = canvas.toDataURL("image/png")
					qr.src = "./img/qrcode.png"
				# writeText()

				@buildshow = false
				@buildstep = 1
				@buildover = true
				@lastpage = true

			share: ->
				if sys is "NeteaseMusic"
					neteaseShare()
				else
					@wechatshare = true
			closeshare: ->
				@wechatshare = false

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
				data['content'] = main.topic
				data['music'] = music_list[main.musicIndex].name
				axios.post url,data
				.then (msg)->
					if msg.data.recode is 200
						alert "参与成功"
						main.lastpage = false
					else
						alert msg.data.reason

		mounted: ->
			setTimeout ->
				main.mount = true
			,100
# canvas 轮训文字
runLongTexts = (texts,ctx,x,y)->
	all = texts.split('\n')
	if texts.length > 0
		text = all[0]
		ctx.fillText(text.replace(' (可编辑)',""),x,y)
		list = texts.replace(text+"\n","")
		list = list.replace(text,"")
		y += parseInt(ctx.font)*1.4
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
			title: "吾有心语，享，往远方"
			desc: "心之所向，即为远方。"
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
	title1 = "吾有心语，享，往远方"
	picUrl = "http://peugeot.music.163.com/df-5008/img/ico.jpg"
	redirectUrl = "http://peugeot.music.163.com/df-5008/"
	title2 = "吾有心语，享，往远方"
	subTitle2 = "心之所向，即为远方。"
	window.location.href = "orpheus://share/"+encodeURIComponent(title1)+"/"+encodeURIComponent(picUrl)+"/"+encodeURIComponent(redirectUrl)+"/"+encodeURIComponent(title2)+"/"+encodeURIComponent(subTitle2)
	# window.location.href = "orpheus://sharepic?picUrl="+encodeURIComponent(picUrl)+"&shareUrl="+encodeURIComponent(redirectUrl)+"&wbDesc="+encodeURIComponent(title1)+"&qqDesc="+encodeURIComponent(title1)
	console.log "run after?"

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