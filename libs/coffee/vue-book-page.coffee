Vue.component "page",
	template:'
		<div>
			<slot></slot>
			<transition name="page-animation">
			<div class="arrow" v-if="arrow" v-show="arrowShow"></div>
			</transition>
			<transition name="page-animation">
			<div class="arrow top" v-if="arrowtop" v-show="arrowTopShow"></div>
			</transition>
		</div>
		'
	data: ->
		return
			count: 0
			arrowShow: true
			arrowTopShow: false
	props:
		arrow:
			default: false
		arrowtop:
			default: false

	mounted: (el)->
		self = @
		if @arrow or @arrowtop
			@$el.addEventListener "scroll", (evt)->
				if self.$el.scrollTop >= 20
					self.arrowShow = false
				else
					self.arrowShow = true
				if self.$el.scrollTop >= self.$el.scrollHeight/2
					self.arrowTopShow = true
				else
					self.arrowTopShow = false
