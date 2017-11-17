# @codekit-prepend "coffee/css3Prefix"

Vue.component "slider",
	template: '<div><div class="slider-list" :class="\'slider-\'+now"><slot/><slot/></div></div>'
	data: ->
		return
			moving: false
			timeout: null
			now: 0
			max: 2
			time: 3000
			delay: 3000
	props: ['overpage']
	watch:
		overpage: (newV,oldV)->
			# console.log(newV,oldV)
			@start() if newV
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
				return false
				@now = 0
				@timeout = setTimeout =>
					@moveNext()
				,10
				return false
			else
				@now = @now+1
			@timeout = setTimeout =>
				@moveNext()
			,@time
		stopAll: ->
			clearTimeout @timeout
	mounted: (el)->
		# console.log this.moving,this.moveNext()
		# @timeout = setTimeout =>
		# 	@moveNext()
		# ,@time
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
			selecteFun: (answer,index)->
				# console.log answer
				return false if @waiting or @answerFinished or @answer is 3
				# console.log @answer
				answer.selected = true
				@answerShow[@answer] = false if @answer < 2
				@score[@answer] = answer.id if @answer <= 2
				@answer = @answer + 1
				@answerFinished = true if @answer is 3
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
			closeshare: ->
				@sharesuccess = false
				@sended = false
			closenote: ->
				@shownote = false
			openNoteFun: ->
				# console.log "openNoteFun",de
				@shownote = true
			gotoProFun: (de)->
				return false if not @printerover
				@printerover = false
				@overpage = true

			
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
		
	
