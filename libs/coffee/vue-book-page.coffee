Vue.component "page",
	template:'
		<div>
			<slot></slot>
			<transition name="page-animation">
			<div class="arrow" v-if="arrow" v-show="arrowShow"></div>
			</transition>
		</div>
		'
	data: ->
		return
			count: 0
			arrowShow: true
	props:
		arrow:
			default: false

	mounted: (el)->
		self = @
		@$el.addEventListener "scroll", (evt)->
			console.log self.$el.scrollTop
			if self.$el.scrollTop >= 20
				self.arrowShow = false
			else
				self.arrowShow = true