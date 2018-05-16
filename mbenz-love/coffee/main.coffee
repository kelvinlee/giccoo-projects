 # @codekit-prepend "../../libs/coffee/randomSort"
 # @codekit-prepend "../../libs/coffee/requestanimation"
 # @codekit-prepend "../../libs/coffee/loadWechatConfig"
 # @codekit-prepend "../../libs/coffee/ispc"
 # @codekit-prepend "./pixi"

# 法国。荷兰。巴西，英国，韩国，泰国，日本

_CDN = ""
_imgurl = ""
global = {}
main = {}
pre = {}
load = {}
sys = null
imageurl = "//api.giccoo.com/api/upload/image64/"
provinces = ["江苏","浙江","安徽","上海","北京","吉林","辽宁","山东","天津","河南","湖南","广东","福建","江西","四川","重庆","贵州","云南","湖北","陕西"]
citys = []
dealers = []
startTime = new Date().getTime()
for p in provinces
	citys[p] = []
	dealers[p] = {}

citys["江苏"].push "常州市"
dealers["江苏"]["常州市"] = []
citys["浙江"].push "杭州市"
dealers["浙江"]["杭州市"] = []
citys["安徽"].push "合肥市"
dealers["安徽"]["合肥市"] = []
citys["浙江"].push "嘉兴市"
dealers["浙江"]["嘉兴市"] = []
citys["浙江"].push "义乌市"
dealers["浙江"]["义乌市"] = []
citys["江苏"].push "南京市"
dealers["江苏"]["南京市"] = []
citys["江苏"].push "南通市"
dealers["江苏"]["南通市"] = []
citys["浙江"].push "宁波市"
dealers["浙江"]["宁波市"] = []
citys["上海"].push "上海"
dealers["上海"]["上海"] = []
citys["浙江"].push "绍兴市"
dealers["浙江"]["绍兴市"] = []
citys["江苏"].push "苏州市"
dealers["江苏"]["苏州市"] = []
citys["浙江"].push "台州市"
dealers["浙江"]["台州市"] = []
citys["浙江"].push "温州市"
dealers["浙江"]["温州市"] = []
citys["江苏"].push "无锡市"
dealers["江苏"]["无锡市"] = []
citys["江苏"].push "扬州市"
dealers["江苏"]["扬州市"] = []
citys["北京"].push "北京"
dealers["北京"]["北京"] = []
citys["吉林"].push "长春市"
dealers["吉林"]["长春市"] = []
citys["辽宁"].push "大连市"
dealers["辽宁"]["大连市"] = []
citys["山东"].push "济南市"
dealers["山东"]["济南市"] = []
citys["山东"].push "青岛市"
dealers["山东"]["青岛市"] = []
citys["辽宁"].push "沈阳市"
dealers["辽宁"]["沈阳市"] = []
citys["天津"].push "天津"
dealers["天津"]["天津"] = []
citys["河南"].push "郑州市"
dealers["河南"]["郑州市"] = []
citys["湖南"].push "长沙市"
dealers["湖南"]["长沙市"] = []
citys["广东"].push "东莞市"
dealers["广东"]["东莞市"] = []
citys["广东"].push "佛山市"
dealers["广东"]["佛山市"] = []
citys["福建"].push "福州市"
dealers["福建"]["福州市"] = []
citys["广东"].push "广州市"
dealers["广东"]["广州市"] = []
citys["江西"].push "南昌市"
dealers["江西"]["南昌市"] = []
citys["广东"].push "深圳市"
dealers["广东"]["深圳市"] = []
citys["福建"].push "厦门市"
dealers["福建"]["厦门市"] = []
citys["广东"].push "珠海市"
dealers["广东"]["珠海市"] = []
citys["四川"].push "乐山市"
dealers["四川"]["乐山市"] = []
citys["四川"].push "成都市"
dealers["四川"]["成都市"] = []
citys["重庆"].push "重庆"
dealers["重庆"]["重庆"] = []
citys["贵州"].push "贵阳市"
dealers["贵州"]["贵阳市"] = []
citys["云南"].push "昆明市"
dealers["云南"]["昆明市"] = []
citys["湖北"].push "武汉市"
dealers["湖北"]["武汉市"] = []
citys["陕西"].push "西安市"
dealers["陕西"]["西安市"] = []

dealers["江苏"]["常州市"].push "常州万帮汽车销售服务有限公司"
dealers["浙江"]["杭州市"].push "杭州东星行汽车维修有限公司"
dealers["浙江"]["杭州市"].push "杭州中升之星汽车销售服务有限公司"
dealers["浙江"]["杭州市"].push "浙江之信汽车有限公司"
dealers["浙江"]["杭州市"].push "浙江星杭汽车有限公司"
dealers["安徽"]["合肥市"].push "合肥利之星汽车服务有限公司"
dealers["浙江"]["嘉兴市"].push "嘉兴宝利德汽车有限公司"
dealers["浙江"]["义乌市"].push "义乌利星汽车有限公司"
dealers["浙江"]["义乌市"].push "义乌市新徽汽车销售服务有限公司"
dealers["浙江"]["义乌市"].push "义乌欧龙汽车销售服务有限公司"
dealers["江苏"]["南京市"].push "南京万帮新区汽车销售服务有限公司"
dealers["江苏"]["南京市"].push "南京中升之星汽车销售服务有限公司"
dealers["江苏"]["南京市"].push "南京宁星汽车维修服务有限公司"
dealers["江苏"]["南通市"].push "南通之星汽车维修服务有限公司"
dealers["江苏"]["南通市"].push "南通文峰伟恒汽车销售服务有限公司"
dealers["浙江"]["宁波市"].push "宁波利星汽车服务有限公司"
dealers["浙江"]["宁波市"].push "浙江慈吉之星汽车有限公司"
dealers["上海"]["上海"].push "上海东华之星汽车维修服务有限公司"
dealers["上海"]["上海"].push "上海东驰汽车有限公司"
dealers["上海"]["上海"].push "上海中升之星汽车销售服务有限公司"
dealers["上海"]["上海"].push "上海冠松之星汽车销售服务有限公司"
dealers["上海"]["上海"].push "上海利星汽车维修有限公司"
dealers["上海"]["上海"].push "上海宝利德汽车有限公司"
dealers["上海"]["上海"].push "上海星瀚汽车维修服务有限公司"
dealers["上海"]["上海"].push "上海汇之星汽车维修服务有限公司"
dealers["上海"]["上海"].push "上海闵星汽车服务有限公司"
dealers["浙江"]["绍兴市"].push "绍兴之星汽车有限公司"
dealers["江苏"]["苏州市"].push "常熟中升之星汽车销售服务有限公司"
dealers["江苏"]["苏州市"].push "苏州元星汽车服务有限公司"
dealers["江苏"]["苏州市"].push "苏州海星汽车销售服务有限公司"
dealers["江苏"]["苏州市"].push "苏州海星高新汽车销售服务有限公司"
dealers["浙江"]["台州市"].push "台州德星汽车有限公司"
dealers["浙江"]["温州市"].push "温州之星汽车有限公司"
dealers["江苏"]["无锡市"].push "无锡中升星辉汽车销售服务有限公司"
dealers["江苏"]["无锡市"].push "江阴利之星汽车维修服务有限公司"
dealers["江苏"]["扬州市"].push "扬州利之星汽车维修服务有限公司"
dealers["北京"]["北京"].push "利星行平治（北京）汽车有限公司"
dealers["北京"]["北京"].push "北京中升之星汽车销售服务有限公司"
dealers["北京"]["北京"].push "北京博瑞祥驰汽车销售服务有限公司"
dealers["北京"]["北京"].push "北京波士瑞达汽车销售服务有限公司"
dealers["北京"]["北京"].push "北京百得利之星汽车销售有限公司"
dealers["吉林"]["长春市"].push "长春华星行汽车销售服务有限公司"
dealers["辽宁"]["大连市"].push "大连中升之星汽车销售服务有限公司"
dealers["山东"]["济南市"].push "济南之星汽车服务有限公司"
dealers["山东"]["青岛市"].push "青岛三合汽车销售有限公司"
dealers["山东"]["青岛市"].push "青岛之星汽车服务有限公司"
dealers["辽宁"]["沈阳市"].push "辽宁之星汽车维修服务有限公司"
dealers["天津"]["天津"].push "天津市庞大之星汽车销售服务有限公司"
dealers["河南"]["郑州市"].push "郑州利星汽车有限公司"
dealers["湖南"]["长沙市"].push "湖南仁孚汽车销售服务有限公司"
dealers["广东"]["东莞市"].push "东莞溢华汽车销售服务有限公司"
dealers["广东"]["佛山市"].push "佛山中升之星汽车销售服务有限公司"
dealers["福建"]["福州市"].push "福州东星汽车维修服务有限公司"
dealers["广东"]["广州市"].push "广东仁孚怡邦汽车销售服务有限公司"
dealers["广东"]["广州市"].push "广州市龙星行汽车销售服务有限公司"
dealers["广东"]["广州市"].push "广州鸿粤星辉汽车销售服务有限公司"
dealers["江西"]["南昌市"].push "南昌迎星汽车销售服务有限公司"
dealers["江西"]["南昌市"].push "江西华宏星汽车有限公司"
dealers["广东"]["深圳市"].push "深圳市仁孚特力汽车服务有限公司"
dealers["广东"]["深圳市"].push "深圳市大兴宝德汽车销售服务有限公司"
dealers["广东"]["深圳市"].push "深圳市鹏峰汽车销售服务有限公司"
dealers["福建"]["厦门市"].push "厦门市东之星汽车销售有限公司"
dealers["广东"]["珠海市"].push "珠海仁孚汽车销售服务有限公司"
dealers["四川"]["乐山市"].push "四川华星锦业汽车销售服务有限公司"
dealers["四川"]["成都市"].push "成都仁孚汽车销售服务有限公司"
dealers["重庆"]["重庆"].push "仁孚美源(重庆)汽车服务有限公司南岸分公司"
dealers["重庆"]["重庆"].push "仁孚美源(重庆)汽车服务有限公司"
dealers["重庆"]["重庆"].push "重庆商社麒兴汽车销售服务有限公司"
dealers["重庆"]["重庆"].push "重庆星顺汽车有限公司"
dealers["贵州"]["贵阳市"].push "贵州贵星汽车销售服务有限公司"
dealers["云南"]["昆明市"].push "云南俊星汽车销售有限公司"
dealers["湖北"]["武汉市"].push "武汉星威汽车销售服务有限公司"
dealers["陕西"]["西安市"].push "西安利之星汽车有限公司"

load = new Vue
	el: "#load"
	data:
		progress: 0
		mount: false
		kill: false
		progressOn: 50+Math.floor Math.random()*30
	computed:
		progressText: ->
			html = ""
			text = @.progress.toString()
			for i in [0...text.length]
				html += "<span class='font font-#{text[i]}'>#{text[i]}</span>"
			return html+'<span class="font font-last">%</span>'
	mounted: ->
		# @.progress = 10
		@.mount = true
		timein = setInterval =>
			@.progress += 2
			@.progress = @.progressOn if @.progress > @.progressOn

			if @.progress >= 100
				clearInterval timein
				console.log "loaded:",(new Date().getTime() - startTime)/1000,"s"
				@.progress = 100
				@.mount = false
				setTimeout =>
					@.kill = true
				,700
		,1000/20

getRandom = (length)->
	return parseInt(Math.random()*(length+1)-1)
window.onload = ->
	# runAnimate()
	if window.navigator.userAgent.indexOf("NeteaseMusic") > -1
		sys = "NeteaseMusic"
	else
		loadWechatConfig()
		wx.ready ->
			shareContent =
				title: "爱有千万种风情，我只要一种独行"
				desc: "大声告诉你，这一种才是我要的爱情！"
				link: "http://m.giccoo.com/mbenz-love/"
				imgUrl: "http://m.giccoo.com/mbenz-love/img/ico.jpg"
				success: ->
					# alert "success"
				cancel: ->
					# alert "cancel"
			wx.onMenuShareTimeline shareContent
			wx.onMenuShareAppMessage shareContent
			wx.onMenuShareQQ shareContent
			wx.onMenuShareWeibo shareContent
	init()

animate = (time)->
	requestAnimationFrame animate
	TWEEN.update(time)
requestAnimationFrame animate

init = ->
	TrueH = document.documentElement.clientHeight
	TrueW = document.documentElement.clientWidth
	# console.log new Date().getTime() - startTime
	# document.body.style.height = TrueH+"px"
	# document.documentElement.className += " iphone4" if TrueW/TrueH >= 0.64
	TrueW = 640 if TrueW >= 640
	TrueH = 1138 if TrueH >= 1138
	# alert TrueW+","+TrueH
	smaller = TrueW/640*1138 > TrueH
	navH = Math.ceil TrueW / 640 * 94 / TrueH * 100

	main = new Vue
		el: "#main"
		data:
			navH: navH
			pc: false
			wy: false
			smaller: smaller
			homepageShow: false
			recordPageShow: false
			ugcPageShow: false
			regisiterPageShow: false
			lastPageShow: false
			recording: false
			mount: false
			audio: null
			playing: "play"
			noteMsg: true
			w: TrueW
			h: TrueH
			maxPage: 7
			pageIndex: 0
			moving: true
			musiclink: "mp3/bgm.mp3"
			pageBG: []
			ugc: null
			ugcbg: null
			default:
				x: 0
				animated: false
			XY: "pageX"
			form:
				username: ""
				mobile: ""
				sex: 1
				detail: 1
				dealer: ""
				province: ""
				city: ""
				detail: 1
			provinces: provinces
			cache: null
		computed:
			citys: ->
				return [] if @.form.province is ""
				return citys[@.form.province]
			dealers: ->
				return [] if @.form.city is ""
				return dealers[@.form.province][@.form.city]
		watch:
			"form.province": (newVal,oldVal)->
				@.form.city = ""
			"form.city": (newVal,oldVal)->
				@.form.dealer = ""
		methods:
			gameStart: (Id)->
				console.log "id:",Id
				ugc = new UGC 
					id: Id ,
					wy: @.wy
					small: true
					bg : if @.pageBG[Id]? then @.pageBG[Id].app.view else null , 
					background: =>
						@ugcbg = ugc.saveUGC
					ugc: =>
						@.ugc = ugc.saveUGC
				@.recordPageShow = true
			recordStart: (evt)->
				evt.preventDefault()
				@.recording = true
				# ugc page show
				# @.cache = setTimeout =>
				# 	@.ugcPageShow = true
				# ,5000

			recordEnd: (evt)->
				evt.preventDefault()
				clearTimeout @.cache
				@.recording = false
			play: ->
				if @.playing is "stop"
					@.audio.pause()
				else
					@.audio.play()
			audioplay: ->
				@.playing = "stop"
			audiopause: ->
				@.playing = "play"
			submit: ->
				return alert "请输入用户名" if @.form.username is ""
				return alert "请输入联系电话" if @.form.mobile is ""
				return alert "请选择省份" if @.form.province is ""
				return alert "请选择城市" if @.form.city is ""
				return alert "请选择经销商" if @.form.dealer is ""
				return alert "请选择将资料提交给主办方" if @.form.detail isnt 1

				# "//api.giccoo.com/mbenz-love/insert"
				# 
				axios.post "//api.giccoo.com/mbenz-love/insert/",@.form
				.then (msg)=>
					if msg.data.recode is 200
						alert "提交成功"
						@.regisiterPageShow = false
					else
						alert msg.data.reason
				.catch (e)=>
					alert "提交失败请重试"
			getIp: ->
				axios.get "//api.giccoo.com/api/ip/",{}
				.then (msg)=>
					# console.log msg
					if msg.data.recode is 200 and msg.data.info.content.address_detail?
						address = msg.data.info.content.address_detail
						# console.log address
						# address = {city:"北京市",province:"北京市"}
						for item in provinces
							if address.province.indexOf(item) > -1
								@.form.province = item
								for city in @.citys
									if address.city.indexOf(city) > -1
										setTimeout =>
											@.form.city = city
											setTimeout =>
												@.form.dealer = @.dealers[0]
											,10
										,10
										break
								break
			share: ->
				image = @.ugc
				data = {
					image: image
					folder: "mbenzlove"
				}
				unless image?
					return main.faild()
				axios.post imageurl,data
				.then (msg)->
					if msg.data.recode is 200
						main.success(msg.data)
					else
						main.faild()
				.catch (e)->
					# alert e
					main.faild()
			success: (data)->
				@.shareImageLink = data.info
				neteaseShareImage()
			faild: ->

			build: ->
				@.pageBG[1] = new stars()
				@.pageBG[1].init()

				@.pageBG[4] = new rain()
				@.pageBG[4].init()

				@.pageBG[6] = new cloud()
				@.pageBG[6].init()

				@.pageBG[7] = new dog()
				@.pageBG[7].init()
			moveNext: ->
				# console.log "xiayige",@.pageIndex
				@.pageIndex += 1
				if @.pageIndex >= @.maxPage
					@.pageIndex = @.maxPage

			movePrev: ->
				# console.log "shangyige",@.pageIndex
				@.pageIndex -= 1
				if @.pageIndex <= 0
					@.pageIndex = 0
			start: (evt)->
				# console.log evt
				@.noteMsg = false
				touch = if evt.touches? then evt.touches[0] else evt
				@.default.x = touch[@XY]
			move: (evt)->
				evt.preventDefault()
				return false if @.default.animated or @.poping
				touch = if evt.touches? then evt.touches[0] else evt
				pageX = touch[@XY]
				if (pageX - @.default.x) > 50
					@.default.animated = true
					@.movePrev()
				if (pageX - @.default.x) < -50
					@.default.animated = true
					@.moveNext()
			end: (evt)->
				@.default.animated = false

		mounted: ($el,e)->
			if sys is "NeteaseMusic"
				@.wy = true
			# @.mount = true
			
			@.mount = true
			@.build()
			@.getIp()
			load.progressOn = 95

			@.audio = document.getElementById "bgm"
			@.recordDom = document.getElementById "record"
			if IsPC()
				@.$el.addEventListener 'mousedown', @.start.bind @
				@.$el.addEventListener 'mousemove', @.move.bind @
				@.$el.addEventListener 'mouseup', @.end.bind @
				@.recordDom.addEventListener 'mousedown', @.recordStart.bind @
				@.recordDom.addEventListener 'mouseup', @.recordEnd.bind @
				@.pc = true

			@.$el.addEventListener 'touchstart', @.start.bind @
			@.$el.addEventListener 'touchmove', @.move.bind @
			@.$el.addEventListener 'touchend', @.end.bind @

			@.recordDom.addEventListener 'touchstart', @.recordStart.bind @
			@.recordDom.addEventListener 'touchend', @.recordEnd.bind @

			@.audio.addEventListener "play", @.audioplay.bind @ if @.audio
			@.audio.addEventListener "pause", @.audiopause.bind @ if @.audio
			@.audio.addEventListener "ended", @.audiopause.bind @ if @.audio





Tn = (from = {x: 0},to = {x: 100},time = 800,callback)->
	tempX = from
	tween = new TWEEN.Tween(tempX)
	.to(to, time)
	.easing(TWEEN.Easing.Cubic.Out)
	.onUpdate =>
		callback tempX
	.start()
	return tween

neteaseShareImage = ->
	title1 = "点击测试你的孤独指数"
	picUrl = "https://image.giccoo.com/upload/lancome/"+main.shareImageLink+"@!large"
	redirectUrl = "https://m.giccoo.com/lancome/"
	console.log "orpheus://sharepic?picUrl="+encodeURIComponent(picUrl)+"&shareUrl="+encodeURIComponent(redirectUrl)+"&wbDesc="+encodeURIComponent(title1)+"&qqDesc="+encodeURIComponent(title1)
	window.location.href = "orpheus://sharepic?picUrl="+encodeURIComponent(picUrl)+"&shareUrl="+encodeURIComponent(redirectUrl)+"&wbDesc="+encodeURIComponent(title1)+"&qqDesc="+encodeURIComponent(title1)

