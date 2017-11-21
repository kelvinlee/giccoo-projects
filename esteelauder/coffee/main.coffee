# @codekit-prepend "coffee/css3Prefix"

Vue.component "slider",
	template: '<div><div class="slider-list" v-bind:style="{transform: \'translate3d(\'+x+\'px,0,0)\',transitionDuration: duration+\'s\'}" ><slot/></div></div>'
	data: ->
		return
			root: null
			moving: false
			timeout: null
			now: 0
			max: 2
			time: 3000
			delay: 3000
			duration: 0
			offset:
				resistance: 1
				lastSlide: 1
				scrollableArea: 320
				isScrolling: false
				lastw: 0
				w: 320
				x: 0
				y: 0
				deltaX: 0
				deltaY: 0
			slideNumber: 0
			move: false
			startTime: 0
			x: 0
			y: 0
	props: ['overpage']
	watch:
		overpage: (newV,oldV)->
			# console.log(newV,oldV)
			@start() if newV
	# computed:
	# 	color: ->
	# 		return "#f2f2f2"
	methods:
		start: ->
			@stopAll()
			@timeout = setTimeout =>
				@moveNext()
			,@time
		moveNext: ->
			# console.log "move to next"
			@stopAll()
			if @now >= @max
				@animationEnd()
				return false
				@now = 0
				@timeout = setTimeout =>
					@moveNext()
				,10
				return false
			else
				@offset.w = @$el.offsetWidth
				@duration = 0.5
				@now = @now+1
				@x = - (@now * @offset.w)
				@setSlideNumber 0
			@timeout = setTimeout =>
				@moveNext()
			,@time
		stopAll: ->
			clearTimeout @timeout
		setSlideNumber: (offset) ->
			# if @moved
			round = if offset then (if @offset.deltaX < 0 then 'ceil' else 'floor') else 'round'
			slideNumber = Math[round](@x / (@offset.scrollableArea / @list.length))
			slideNumber += offset
			slideNumber = Math.min(slideNumber, 0)
			@slideNumber = Math.max(-(@list.length - 1), slideNumber) % @list.length
			# console.log @slideNumber
		touchstart: (evt)->
			touch = evt.touches[0]
			@duration = 0
			@moved = false
			@startTime = +new Date
			@offset.w = @$el.offsetWidth
			@offset.x = touch.pageX
			@offset.y = touch.pageY
			@offset.lastw = @x
			@offset.lastSlide = -(@list.length - 1)
			@offset.scrollableArea = @offset.w * @list.length
			@setSlideNumber 0
			# console.log @offset
		touchmove: (evt)->
			touch = evt.touches[0]
			@offset.deltaX = touch.pageX - @offset.x
			pageX = touch.pageX

			@x = @offset.deltaX / @offset.resistance + @offset.lastw
			@offset.resistance = if @slideNumber == 0 and @offset.deltaX > 0 then pageX / @offset.w + 1.25 else if @slideNumber == @offset.lastSlide and @offset.deltaX < 0 then (@offset.w - Math.abs(pageX)) / @offset.w + 1.25 else 1

			# console.log touch.pageX,@offset.x,pageX,@offset.deltaX,@offset.resistance,@offset.lastw
			@moved = true
		touchend: (evt)->
			if @moved
				oldslideNumber = @slideNumber
				@setSlideNumber if +new Date - (@startTime) < 1000 and Math.abs(@offset.deltaX) > 15 then (if @offset.deltaX < 0 then -1 else 1) else 0
				@x = @slideNumber * @offset.w
				@duration = 0.2
				if @slideNumber == 0 and oldslideNumber == -(@list.length - 1)
					@x = (oldslideNumber - 1) * @offset.w
				if oldslideNumber == 0 and @slideNumber == -(@list.length - 1)
					@x = 1 * @offset.w
		animationEnd: ->
			@$el.addEventListener 'touchstart',@touchstart.bind @
			@$el.addEventListener 'touchmove',@touchmove.bind @
			@$el.addEventListener 'touchend',@touchend.bind @
	mounted: (el)->
		@list = @$el.children[0].children

apiURL = "api.giccoo.com"
load = {}
lab = {}
token = null
shareContent =
	title: "雅诗兰黛美肌万能研究室"
	desc: "品牌合作Html5页面，用户可点击进入进行答题，生成属于自己的肌肤报告。"
	link: "http://m.giccoo.com/esteelauder/"
	imgUrl: "http://m.giccoo.com/esteelauder/img/share.jpg"
	success: ->
	cancel: ->
answerlists = [
	[
		{selected: false, text: "小细纹干嘛大惊小怪？可能最近笑太多！",id: 3}
		{selected: false, text: "照镜子感觉老了许多，先补水再说！",id: 2}
		{selected: false, text: "没事按摩一下，皱纹慢慢会消失！",id: 1}
	]
	[
		{selected: false, text: "面色不均匀，压点粉饼就好了~",id: 3}
		{selected: false, text: "面色发黄？涂点腮红拯救一下！",id: 2}
		{selected: false, text: "脸色有点暗沉，多睡两觉补一补~",id: 1}
	]
	[
		{selected: false, text: "小脸不Q弹，补点胶原蛋白~~",id: 3}
		{selected: false, text: "脸不紧致，赶紧用按摩仪提拉一下！",id: 2}
		{selected: false, text: "粗糙起皮，做个去角质就好啦~~",id: 1}
	]
]
answerlists[0].sort -> return if Math.random()>0.5 then -1 else 1
answerlists[1].sort -> return if Math.random()>0.5 then -1 else 1
answerlists[2].sort -> return if Math.random()>0.5 then -1 else 1
shareTitles = ["鲜嫩丝滑奶茶肌","光泽亮润陶瓷肌","吹弹可破蛋白肌"]
shareDescription = ["但是你的皱纹一带一条指数偏高","但是你的脸色亮度有待提升","但是你的小脸紧致程度有所下降"]
# window.WeiboJS.init
# 	appkey: "1605288503"
# 	debug: true
# 	timestamp: new Date().getTime()
window.onload = ->
	if IsPC() and mobile
		return window.location.href = "pc.html"
		
	body = document.getElementsByTagName("body")[0]
	MK = body.offsetWidth/body.offsetHeight
	if body.offsetHeight <= 480 or MK > 0.65
		body.className = "iphone4"
	if body.offsetWidth >= 640
		body.className = "pc"
	load = new Vue
		el: '#load'
		data:
			loadend: false
			show: true
			number: 0
			animatedNumber: 0
		watch: 
			number: (newValue, oldValue) ->
				vm = this
				animate = ->
					# console.log TWEEN.update()
					if TWEEN.update()
						requestAnimationFrame animate
					return
				new (TWEEN.Tween)(tweeningNumber: oldValue).easing(TWEEN.Easing.Quadratic.Out).to({ tweeningNumber: newValue }, 700).onUpdate(->
					vm.animatedNumber = @tweeningNumber.toFixed(0)
					return
				).start()
				animate()
				return
			animatedNumber: (newValue, oldValue)->
				if parseInt(newValue) is 100
					setTimeout =>
						@loadend = true
						lab.started = true
					,100
		mounted: ->
			this.number = 15
			console.log @,@$el
			ask()

initLab = ->
	lab = new Vue
		el: "#lab"
		data:
			started: false
			startquestion: false
			startprinter: false
			answerFinished: false
			answer: 0
			score: [0,0,0]
			nickname: ""
			waiting: false
			printerover: false
			overpage: false
			sended: false
			sharesuccess: false
			shownote: false
			touchdata: "up"
			printer: 
				title: "鲜嫩丝滑奶茶肌"
				description: "但是你的脸色亮度有待提升"
			answerlist: answerlists
			answerShow: [true,true,true]
		# computed:
		# 	answers: ->
		# 		return @answerlist[@answer]
		methods: 
			startGo: ->
				@started = false
				@startquestion = true
				stm_clicki('send', 'event', '即刻开启', '点击', '开始页面')
			selecteFun: (answer,indexP,index)->
				console.log indexP,@answer
				return false if @waiting or @answerFinished or @answer is 3
				return false if indexP isnt @answer
				# console.log @answer
				answer.selected = true
				@answerShow[@answer] = false if @answer < 2
				@score[@answer] = answer.id if @answer <= 2
				@answer = @answer + 1
				@answerFinished = true if @answer is 3

				stm_clicki('send', 'event', '以下哪种情况最符合你？', '第'+indexP+'题', '答案'+answer.id)
			startPrinterFun: ->
				@started = false
				@startquestion = false
				@startprinter = true
				@printerover = true
				p = document.getElementById "printer-page"
				if @score[0] >= @score[1] and @score[0] >= @score[2]
					@printer.title = shareTitles[0]
				else if @score[1] >= @score[2] and @score[1] >= @score[0]
					@printer.title = shareTitles[1]
				else if @score[2] >= @score[1] and @score[2] >= @score[0]
					@printer.title = shareTitles[2]
				else
					@printer.title = shareTitles[0]

				if @score[2] <= @score[1] and @score[2] <= @score[0]
					@printer.description = shareDescription[2]
				else if @score[1] <= @score[2] and @score[1] <= @score[0]
					@printer.description = shareDescription[1]
				else if @score[0] <= @score[1] and @score[0] <= @score[2]
					@printer.description = shareDescription[0]
				else
					@printer.description = shareDescription[2]
				# console.log @sendPostFun

				stm_clicki('send', 'event', '提交查看你的肌密报告', '点击', '答题页面')
				
			sendPostFun: ->
				# console.log @sended
				return false if @sended
				self = this
				axios.get "http://"+apiURL+"/esteelauder/shareTo/?id="+@score.join("-")
				.then (msg)->
					if msg.data.recode is 200
						self.sended = true
						self.sharesuccess = true
					if msg.data.recode isnt 200
						# alert msg 
						console.log msg
					# alert "发布成功"
				stm_clicki('send', 'event', '发布你的肌密报告', '点击', '产品列表页')
			closeshare: ->
				@sharesuccess = false
				@sended = false
			closenote: ->
				@shownote = false
			openNoteFun: ->
				# console.log "openNoteFun",de
				@shownote = true
				stm_clicki('send', 'event', '*详细活动规则请点击查看', '点击', '产品列表页')
			gotoProFun: (de)->
				return false if not @printerover
				@printerover = false
				@overpage = true

				stm_clicki('send', 'event', '下一页', '滑动', '报告页面')
				if @nickname isnt ""
					stm_clicki('send', 'event', '填写昵称', '输入', @nickname)

			
		directives:
			touch:
				default:
					x: 0
					y: 0
					start: false
					moving: false
				inserted: (el)->
				bind: (el,binding,vnode)->
					el.addEventListener "touchstart",binding.def.touchstart.bind binding
					el.addEventListener "touchmove",binding.def.touchmove.bind binding
					el.addEventListener "touchend",binding.def.touchend.bind binding

					el.addEventListener "mousedown",binding.def.touchstart.bind binding
					el.addEventListener "mousemove",binding.def.touchmove.bind binding
					el.addEventListener "mouseup",binding.def.touchend.bind binding
				touchstart: (evt)->
					evt.preventDefault()
					if evt.type is "mousedown"
						this.def.default.x = evt.pageX
						this.def.default.y = evt.pageY
						this.def.default.start = true
					else
						touch = evt.touches[0]
						this.def.default.x = touch.pageX
						this.def.default.y = touch.pageY
						this.def.default.start = true
				touchmove: (evt)->
					evt.preventDefault()
					return false if not this.def.default.start
					if evt.type is "mousemove"
						touch = evt
					else
						touch = evt.touches[0]
					this.def.default.moving = true
					deY = this.def.default.y - touch.pageY
					if deY > 50
						this.def.default.start = false
						this.value("up")
						return false
					if deY < -50
						this.def.default.start = false
						this.value("down")
						return false
				touchend: (evt)->
					evt.preventDefault()
					this.def.default.start = false
					this.def.default.moving = false

ask = ->
	# WB2.logout ->
	# 	console.log WB2.checkLogin()
	# return false
	axios.defaults.withCredentials = true
	axios.get "http://"+apiURL+"/esteelauder/ask"
	.then (msg)->
		console.log "msg:",msg.data
		if msg.data.recode is 200
			load.number = 100
			token = msg.data.token
		else
			window.location.href = "https://api.weibo.com/oauth2/authorize?client_id=1605288503&response_type=code&redirect_uri=http://"+apiURL+"/esteelauder/"
			# load.number = 100
		initLab()
	.catch (err)->
		initLab()

sendPost = (callback)->
	axios.get "http://"+apiURL+"/esteelauder/shareTo"
	.then (msg)->
		if msg.data.recode is 200
			callback()
		if msg.data.recode isnt 200
			# alert msg 
			console.log msg

loadWechatConfig = ->
	url = encodeURIComponent window.location.href.split("#")[0]
	hm = document.createElement('script')
	hm.src = "http://api.giccoo.com/api/config?url="+url
	s = document.getElementsByTagName('script')[0]
	s.parentNode.insertBefore hm, s
	return
		
IsPC = ->
	userAgentInfo = navigator.userAgent
	Agents = new Array('Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod')
	flag = true
	v = 0
	while v < Agents.length
		if userAgentInfo.indexOf(Agents[v]) > 0
			flag = false
			break
		v++
	flag	
