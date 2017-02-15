slider
	<yield from="sub"/>
	.left(onclick="{moveLeft}")
		img(src="img/button-left.png")
	.right(onclick="{moveRight}")
		img(src="img/button-left.png")
	.slider(style="-webkit-transition-duration: {duration}s;transition-duration: {duration}s; -webkit-transform: translate3d({x}px,0,0); transform: translate3d({x}px,0,0);")
		<yield from="content"/>
		

	script(type="text/coffeescript").
		self = this
		list = opts.list + ''
		@list = list.split(',')
		@repeat = if opts.repeat then true else false
		@duration = 0.2
		@offset =
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
		@slideNumber = 0
		@x = 0
		@y = 0
		@Rx = 0
		@Ry = 0
		@Lx = 0
		@Ly = 0
		slider = $('.slider', @root)
		@moved = false
		if opts.myid
			eval opts.myid + ' = this'

		@setNumber = (i) ->
			# console.log self is this
			slider = $(".sliders .slider")
			self.offset.w = slider.width()
			self.duration = 0.2
			self.x = -(slider.width() * i)
			# console.log i, self.slideNumber, self.x, self, self.update
			# if @repeat
			# 	self.x -= @list.length * @offset.w
			self.slideNumber = i
			console.log self.x, i
			self.update()
			opts.callback and eval(opts.callback + '(' + self.slideNumber + ')')
			return

		@setSlideNumber = (offset) ->
			round = undefined
			slideNumber = undefined
			if @moved
				round = if offset then (if @offset.deltaX < 0 then 'ceil' else 'floor') else 'round'
				slideNumber = Math[round](@x / (@offset.scrollableArea / slider.find('.slide').length))
				slideNumber += offset
				slideNumber = Math.min(slideNumber, 0)
				console.log Math.max(-(slider.find('.slide').length - 1), slideNumber)
				@slideNumber = Math.max(-(slider.find('.slide').length - 1), slideNumber) % @list.length
				opts.callback and eval(opts.callback + '(' + @slideNumber + ')')
			return

		@moveLeft = ->
			max = @list.length - 1
			self.slideNumber = Math.abs @.x / slider.width()
			self.slideNumber++
			console.log "left", self.slideNumber
			if self.slideNumber >= max
				self.slideNumber = max
			@setNumber self.slideNumber
		@moveRight = ->
			max = @list.length - 1
			self.slideNumber = Math.abs @.x / slider.width()
			self.slideNumber--
			console.log "right", self.slideNumber
			if self.slideNumber <= 0
				self.slideNumber = 0
			@setNumber self.slideNumber

		@touchstart = (evt) ->
			touch = undefined
			touch = evt.touches[0]
			slider = $('.slider', @root)
			@duration = 0
			@moved = false
			@startTime = +new Date
			@offset.w = slider.width()
			@offset.x = touch.pageX
			@offset.y = touch.pageY
			if @repeat and @x == 0
				@x = -(@list.length-1) * @offset.w
			@offset.lastw = @x
			@offset.lastSlide = -(@list.length - 1)
			@offset.scrollableArea = @offset.w * slider.find('.slide').length
			@setSlideNumber 0
			console.log 'move start', @x
			@update()

		@touchmove = (evt) ->
			pageX = undefined
			touch = undefined
			touch = evt.touches[0]
			@offset.deltaX = touch.pageX - (@offset.x)
			pageX = touch.pageX
			if @repeat
				@x = @offset.deltaX + @offset.lastw
			else
				@x = @offset.deltaX / @offset.resistance + @offset.lastw
				@offset.resistance = if @slideNumber == 0 and @offset.deltaX > 0 then pageX / @offset.w + 1.25 else if @slideNumber == @offset.lastSlide and @offset.deltaX < 0 then (@offset.w - Math.abs(pageX)) / @offset.w + 1.25 else 1
			@moved = true
			# evt.preventDefault()
			# console.log(Math.abs(pageX), this.offset.w);
			@update()

		@touchend = (evt) ->
			console.log @moved
			if @moved
				oldslideNumber = @slideNumber
				@setSlideNumber if +new Date - (@startTime) < 1000 and Math.abs(@offset.deltaX) > 15 then (if @offset.deltaX < 0 then -1 else 1) else 0
				@x = @slideNumber * @offset.w
				console.log 'my number:', @slideNumber, oldslideNumber, @list.length
				if @slideNumber is 0 and oldslideNumber is -(@list.length - 1)
					@x = (oldslideNumber - 1) * @offset.w
				if oldslideNumber is 0 and @slideNumber is -(@list.length - 1)
					@x = 1 * @offset.w
				if @repeat
					@x -= @list.length * @offset.w
				console.log(this.Rx,this.x,this.repeat)
				@duration = 0.2
				@update()
			@moved = false

		@transition = (evt) ->
			# return false;
			console.log @x, -(@list.length * @offset.w)
			if @x < -((@list.length * 2 - 1) * @offset.w)
				@x = -@list.length * @offset.w
				# this.Rx = this.x + (this.list.length-1) * this.offset.w;
				# this.Lx = this.x - (this.list.length-1) * this.offset.w;
				@duration = 0
				@slideNumber = 0
				@update()
				opts.callback and eval(opts.callback + '(' + @slideNumber + ')')
			if @x > -(@list.length * @offset.w)
				@x = -(@list.length * 2 - 1) * @offset.w
				# this.Rx = this.x + (this.list.length-1) * this.offset.w;
				# this.Lx = this.x - (this.list.length-1) * this.offset.w;
				@duration = 0
				@slideNumber = -(@list.length - 1)
				@update()
				opts.callback and eval(opts.callback + '(' + @slideNumber + ')')
			return

		@on 'mount', ->
			slider = $(@root)
			slider[0].addEventListener 'touchstart', @touchstart.bind(this)
			slider[0].addEventListener 'touchmove', @touchmove.bind(this)
			slider[0].addEventListener 'touchend', @touchend.bind(this)
			if @repeat
				slide = $('.slider', @root)
				console.log slide, TRANSITION_END_NAME
				slide[0].addEventListener TRANSITION_END_NAME, @transition.bind(this)
			opts.end and opts.end(this)
