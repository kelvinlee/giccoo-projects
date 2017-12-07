apiURL = "api.giccoo.com"
# apiURL = "localhost:8881"
axios.defaults.withCredentials = true
_updateNames =
	game1: false
	game2: false
	game3: false
	share: false
awardPop = {}
awardBox = {}
myCount = 0
note = {}
shareContent =
	title: "奇门遁甲，乾坤万象，其乐无穷，12.15日，燃情上映！",
	desc: "乾坤万象，其乐无穷，12.15日，燃情上映！",
	link: "http://m.giccoo.com/numerology/",
	imgUrl: "http://m.giccoo.com/numerology/img/ico.jpg",
	success: -> ask_update(3)
	cancel: ->

window.onload = ->
	body = document.getElementsByTagName("body")[0]
	MK = body.offsetWidth/body.offsetHeight
	if body.offsetHeight <= 480 or MK > 0.65
		body.className = "iphone4"
	if body.offsetWidth >= 640
		body.className = "pc"
	ask (data)->
		console.log data
		time = 0
		if data.info?
			myCount = data.info.count
			time = data.info.count - data.info.award
		initAward time
		initPop()
		initNote()

openAward = ->
	$("#award").fadeIn()

initAward = (time)->
	awardBox = new Vue
		el: "#award"
		data: 
			start: false
			times: time
			boxClass: "on"
		methods:
			go: ->
				# @boxClass = "on"
				if myCount <= 0
					note.send "你未达到抽奖资格<br/>分享到朋友圈可获得一次抽奖机会！"
					return false
				self = @
				@times = @times - 1 if (@times - 1) > 0
				ask_award (recode,type = "none",code)->
					if recode is 200
						self.boxClass = "open "+type
						setTimeout ->
							awardPop.type = type
							awardPop.success = true
							awardPop.code = code
							$("#award-over").fadeIn()
							document.getElementsById("zhongjiang").play()
						,3500
					else
						self.boxClass = "open none"
						setTimeout ->
							awardPop.success = false
							$("#award-over").fadeIn()
						,3500
			my: ->
				ask_my (info)->
					console.log info[0]
					if info.length > 0
						awardPop.success = true
						awardPop.type = info[0].type
						awardPop.code = info[0].code
						$("#award-over").fadeIn()
					else
						awardPop.success = false
						$("#award-over").fadeIn()
			back: ->
				$("#award").fadeOut()
			default: ->
				@boxClass = "on"

initNote = ->
	note = new Vue
		el: "#note"
		data:
			notetext: ""
			showtime: 4000
			timeout: null
			show: false
			boxshow: false
		methods:
			close: ->
				clearTimeout @timeout
				@show = false
				@boxshow = false
			send: (text)->
				clearTimeout @timeout
				self = @
				self.notetext = text
				self.show = true
				@boxshow = true
				@timeout = setTimeout ->
					self.boxshow = false
					setTimeout ->
						self.show = false
					,500
				,@showtime


initPop = ->
	awardPop = new Vue
		el: "#award-over"
		data: 
			how: false
			success: false
			share: false
			type: "ticket"
			code: "none"
		methods:
			openHow: ->
				@how = !@how
			openShare: ->
				@share = !@share
			close: ->
				awardBox.default()
				$("#award-over").fadeOut()

ask = (callback)->
	axios.get "http://"+apiURL+"/wechat/numerology/ask/"
	.then (msg)->
		console.log "msg:",msg.data
		if msg.data.recode is 200
			callback msg.data
		else
			window.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx15cc4d73cb0b6437&redirect_uri={url}&response_type=code&scope=snsapi_base&state=123#wechat_redirect".replace("{url}",encodeURIComponent("http://"+apiURL+"/wechat/numerology/"))
			# console.log "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx15cc4d73cb0b6437&redirect_uri={url}&response_type=code&scope=snsapi_base&state=123#wechat_redirect".replace("{url}",encodeURIComponent("http://"+apiURL+"/wechat/numerology/"))
	.catch (err)->

ask_update = (i)->
	names = ["game1","game2","game3","share"]
	name = names[i]
	if i < 3
		shareContent.title = "我的江湖绝学是雾隐门排行第五的“千里眼”！ 12.15日《奇门遁甲》全国首映，侠客天团强势来袭，热血江湖等你来战！" if i is 0
		shareContent.title = "我的江湖绝学是雾隐门排行第四的“顺风耳”！ 12.15日《奇门遁甲》全国首映，侠客天团强势来袭，热血江湖等你来战！" if i is 1
		shareContent.title = "我的江湖绝学是雾隐门排行第七的“霹雳火”！ 12.15日《奇门遁甲》全国首映，侠客天团强势来袭，热血江湖等你来战！" if i is 2
		updateShareContent shareContent
	return false if _updateNames[name]
	myCount++
	axios.get "http://"+apiURL+"/wechat/numerology/update/"
	.then (msg)->
		console.log "msg:",msg.data
		if msg.data.recode is 200
			_updateNames[name] = true
			awardBox.times = awardBox.times + 1
		else if msg.data.recode is 201
			note.send "请使用微信打开此页面参与活动"
		# else
	.catch (err)->
		note.send "服务器请求失败,请重试"

ask_award = (callback)->
	axios.get "http://"+apiURL+"/wechat/numerology/award/"
	.then (msg)->
		console.log "msg:",msg.data
		if msg.data.recode is 200
			# msg.data.info.code
			callback 200,msg.data.info.type,msg.data.info.code
		else if msg.data.recode is 301
			callback 301
		else
			note.send msg.data.reason
	.catch (err)->
		note.send "服务器请求失败,请重试"

ask_my = (callback)->
	axios.get "http://"+apiURL+"/wechat/numerology/my/"
	.then (msg)->
		console.log "msg:",msg.data
		if msg.data.recode is 200
			callback msg.data.info
		else
			note.send msg.data.reason
	.catch (err)->
		note.send "服务器请求失败,请重试"

updateShareContent = (shareContent)->
	console.log shareContent
	wx.onMenuShareTimeline shareContent
	wx.onMenuShareAppMessage shareContent
	wx.onMenuShareQQ shareContent
	wx.onMenuShareWeibo shareContent





