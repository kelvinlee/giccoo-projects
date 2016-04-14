parallax
	<yield/>
	script(type="text/coffeescript").
		# 当前页面
		console.log("parallax")
		_store = {can: true}
		self = this
		Store.parallax = this
		this.nowPage = null
		begin = true
		# 初始化值
		this.defaultPoint = {
			x: 0,
			y: 0,
			returnTranN: true,
			returnTranO: true
		}
		# touch 开始
		this.start = (evt)->
			if self.nowPage == null
				self.nowPage = $(".page",self.root)[0]
				Store.nowPage = self.nowPage

			# if ($(".page",this.root).length < 2 ) { _store.can = true }
			return false unless _store.can
			console.log("start")
			touch = evt.touches[0]
			this.defaultPoint.x = touch.pageX
			this.defaultPoint.y = touch.pageY
			# evt.preventDefault()
			return true
		
		# touch move
		this.move = (evt)->
			return false unless _store.can
			touch = evt.touches[0]
			gone = this.defaultPoint.y - touch.pageY
			# if (gone > 5 || gone < -5) {
			evt.preventDefault()
			# }
			if gone > 50
				# console.log(gone)
				_store.can = false
				this.passpage.bind(this)("up")
			
			if gone < -50
				# console.log(gone)
				_store.can = false
				this.passpage.bind(this)("down")
			
			return true
		
		# touch end
		this.end = (e)->
			return false unless _store.can
			console.log $(this.nowPage),$(this.nowPage).attr("up") is null
			if $(this.nowPage).attr("up") is null and $(this.nowPage).attr("down") is null
				console.log "remove event"
				_store.can = false
				self.root.removeEventListener("touchstart",self.start)
				self.root.removeEventListener("touchmove",self.move)
				self.root.removeEventListener("touchend",self.end)
		allClass = "riot-up riot-up-active riot-up-leave riot-down riot-down-active riot-down-leave riot-left riot-left-active  riot-left-leave riot-right riot-right-active  riot-right-leave"
		# 传递页面
		this.passpage = (direction)->
			select = $(this.nowPage).attr(direction)
			console.log(direction,select,typeof select)
			if select
				# riot.route("/"+select)
				self.animate(select)
			else
				_store.can = true

		this.animate = (select)->
			oldpage = self.nowPage
			self.oldpage = oldpage
			self.nowPage = $(".page."+select,self.root)[0]
			if oldpage == self.nowPage 
				return false
			self.nowPage
			newpage = self.nowPage
			direction = "up"
			# console.log($(oldpage).index(),$(newpage).index())
			if $(oldpage).index() > $(newpage).index()
				direction = "down"
			# $(self.root).append("<div class='page riot-"+direction+"' id='"+select+"-page'>"+eval(select+".innerHTML")+"</div>")
			oldpage.addEventListener(TRANSITION_END_NAME,self.oldpageFinished)
			self.defaultPoint.returnTranN = true
			newpage.addEventListener(TRANSITION_END_NAME,self.newpageFinished)
			self.defaultPoint.returnTranO = true
			$(newpage).hide().removeClass(allClass).addClass("riot-"+direction)
			$(newpage).show()
			$(oldpage).removeClass(allClass)
			setTimeout ->
				$(oldpage).addClass("riot-"+direction+"-leave")
				$(newpage).removeClass(allClass).addClass("riot-"+direction+"-active")
			,100
			self.update()
		
		this.newpageFinished = (evt)->
			# console.log("newpage",evt.target)
			if self.defaultPoint.returnTranN
				self.defaultPoint.returnTranN = false
			
			self.newpage && self.newpage.removeEventListener(TRANSITION_END_NAME,self.newpageFinished)
			self.newpage && self.newpage.removeEventListener(TRANSITION_END_NAME,self.oldpageFinished)
			$(self.newpage).removeClass(allClass)
			_store.can = true
		
		this.oldpageFinished = (evt)->
			# console.log("oldpage",evt.target)
			if self.defaultPoint.returnTranO
				# console.log("old page finished",evt.target)
				self.defaultPoint.returnTranO = false
				$(self.oldpage).hide()
			
			self.oldpage && self.oldpage.removeEventListener(TRANSITION_END_NAME,self.newpageFinished)
			self.oldpage && self.oldpage.removeEventListener(TRANSITION_END_NAME,self.oldpageFinished)
			$(self.oldpage).removeClass(allClass)
			_store.can = true
		
		# 初始化
		# this.init = function() {
			
		# }
		this.on "mount", ->
			# this.nowPage = $(".page",this.root)[0]
			# Store.nowPage = this.nowPage

		console.log(this.root)
		this.root.addEventListener("touchstart",this.start.bind(this))
		this.root.addEventListener("touchmove",this.move.bind(this))
		this.root.addEventListener("touchend",this.end.bind(this))
		# $(this.root).addClass("parallax")
		# setTimeout(this.init.bind(this),0)
