slider
	<yield/>
	.slider(style="-webkit-transition-duration: {duration}s;transition-duration: {duration}s; -webkit-transform: translate3d({x}px,0,0); transform: translate3d({x}px,0,0);")
		.slide(each="{bgimg in list}")
			.bg
				img(src="{bgimg}")

	script(type="text/coffeescript").
		self = this
		list = opts.list+""
		this.list = list.split(",")
		this.duration = 0.2
		this.offset = {
			resistance: 1,
			lastSlide: 1,
			scrollableArea: 320,
			isScrolling: false,
			lastw: 0,
			w: 320,
			x: 0,
			y: 0,
			deltaX: 0,
			deltaY: 0
		}
		this.slideNumber = 0
		this.x = 0
		this.y = 0
		slider = $(".slider",this.root)
		this.moved = false
		eval(opts.myid+" = this") if opts.myid
		this.setNumber = (i)->
			self.duration = 0.2
			self.x = -($(".slider",self.root).width() * i)
			self.update()

		this.setSlideNumber = (offset)->
			console.log offset
			if this.moved
				round = if offset then (if this.offset.deltaX < 0 then "ceil" else "floor") else "round"
				slideNumber = Math[round](this.x / (this.offset.scrollableArea / slider.find(".slide").length))
				slideNumber += offset
				slideNumber = Math.min(slideNumber, 0)
				this.slideNumber = Math.max(-(slider.find(".slide").length - 1), slideNumber);
				console.log opts.callback,typeof opts.callback
				opts.callback and eval(opts.callback+"("+this.slideNumber+")")
				return 

		this.touchstart = (evt)->
			touch = evt.touches[0]
			# console.log(touch)
			slider = $(".slider",this.root)
			this.duration = 0
			this.moved = false
			this.startTime = +new Date()
			this.offset.w = slider.width()
			this.offset.x = touch.pageX
			this.offset.y = touch.pageY
			if this.repeat and this.x == 0
				this.x = - this.list.length * this.offset.w
			this.offset.lastw = this.x
			this.offset.lastSlide = -(slider.find(".slide").length-1)
			this.offset.scrollableArea = this.offset.w * slider.find(".slide").length
			this.setSlideNumber(0)
			this.update()

		this.touchmove = (evt)->
			touch = evt.touches[0]
			this.offset.deltaX = touch.pageX - this.offset.x
			pageX = touch.pageX
			# if this.isScrolling == null
			# 	this.offset.isScrolling = Math.abs(this.offset.deltaX)>Math.abs(this.offset.deltaX)
	
			# if this.offset.isScrolling
			# 	return ""
	
			if @repeat
				@x = @offset.deltaX + @offset.lastw
			else
				@x = @offset.deltaX / @offset.resistance + @offset.lastw
				@offset.resistance = if @slideNumber == 0 and @offset.deltaX > 0 then pageX / @offset.w + 1.25 else if @slideNumber == @offset.lastSlide and @offset.deltaX < 0 then (@offset.w - Math.abs(pageX)) / @offset.w + 1.25 else 1

			this.moved = true
			evt.preventDefault()
			
			# if (this.x < -(this.offset.w * (Math.abs(this.lastSlide) + 0.4))) {
			# 	this.x = -(this.offset.w * (Math.abs(this.lastSlide) + 0.4));
			# }
			console.log(Math.abs(pageX),this.offset.w)
			this.update()

		this.touchend = (evt)->
			#if this.offset.isScrolling
			#	return ""
			console.log this.moved
			if this.moved
				this.setSlideNumber if +new Date - (@startTime) < 1000 and Math.abs(@offset.deltaX) > 15 then (if @offset.deltaX < 0 then -1 else 1) else 0
				this.x = this.slideNumber * this.offset.w
				console.log 'my number:', @slideNumber, oldslideNumber
				if @slideNumber == 0 and oldslideNumber == -(@list.length - 1)
					@x = (oldslideNumber - 1) * @offset.w
				if oldslideNumber == 0 and @slideNumber == -(@list.length - 1)
					@x = 1 * @offset.w
				if @repeat
					@x -= @list.length * @offset.w
				this.duration = 0.2
				# console.log(this.x,this.slideNumber)
				this.update()
			this.moved = false

		this.on "mount", ->
			slider = $(this.root)
			slider[0].addEventListener("touchstart", this.touchstart.bind(this))
			slider[0].addEventListener("touchmove", this.touchmove.bind(this))
			slider[0].addEventListener("touchend", this.touchend.bind(this))
			if @repeat
				slide = $('.slider', @root)
				console.log slide, TRANSITION_END_NAME
				slide[0].addEventListener TRANSITION_END_NAME, @transition.bind(this)
			opts.end && opts.end(this)
