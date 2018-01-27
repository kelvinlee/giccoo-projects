Vue.component "pages",
	template:'
		<div class="pages">
			<slot></slot>
		</div>
		'
	data: ->
		return
			count: 0
			startX: 0
			startY: 0
			pageUpDown: 0
			touching: false
			touchmoving: 0
	props:
		pagenow:
			default: 0
	watch:
		pagenow: (now,old)->
			# console.log "pagenow:",now,old
			if now >= @count
				return false 
			v = now - old
			dom = @$el.children[now]
			@setNow dom
			if v > 0
				dom = @$el.children[old]
				@leave dom
			else
				dom = @$el.children[now]
				@enter dom
	methods:
		leave: (el)->
			TweenLite.to(el,1.6,{rotationY:-180, left:"-100%", zIndex: 100, z: 600, onComplete: ->
				el.style = "display: none"
			})
		enter: (el)->
			TweenLite.set(el,{display: "block",rotationY:-180, left:"-100%", zIndex: 100, z: 600})
			TweenLite.to(el,.6,{rotationY:0, left:"0%", zIndex: 100, z: 0, onComplete: ->
				el.style = ""
			})
		setNow: (el)->
			for item in @$el.children
				item.className = item.className.replace(" on","")
			el.className += " on" if el?

		start: (evt)->
			# @pagenow = @pagenow+1 if @pagenow < @count 
			# console.log "start:",@pagenow
			# temp = @$emit 'next', @
			touches = evt.touches
			@startX=touches[0].clientX
			@startY=touches[0].clientY
			@touching = true
			@touchmoving = 0
		move: (evt)->
			return false unless @touching
			@touchmoving += 1
			nowX=evt.touches[0].clientX
			nowY=evt.touches[0].clientY
			
			if (nowX-@startX)*(nowX-@startX)>(nowY-@startY)*(nowY-@startY)*2 
				if nowX-@startX>80&&@pagenow!=0
					@pageUpDown = 1
				else if nowX-@startX< -80
					@pageUpDown = -1
				else
					@pageUpDown = 0

		end: (evt)->
			return false if @touchmoving <= 2
			console.log @pageUpDown,@touching,@touchmoving
			if @pageUpDown == 1
				@pagenow = @pagenow-1 if @pagenow > 0
				temp = @$emit 'prev', @
			else if @pageUpDown == -1
				@pagenow = @pagenow+1 if @pagenow < @count - 1
				temp = @$emit 'next', @
			@pageUpDown = 0
			@touching = false
			@touchmoving = 0

	mounted: (el)->

		@$el.addEventListener "touchstart", @start.bind @
		@$el.addEventListener "touchmove", @move.bind @
		@$el.addEventListener "touchend", @end.bind @

		@count = @$el.children.length
		console.log @$el.children[0],@pagenow
		@setNow @$el.children[0]
