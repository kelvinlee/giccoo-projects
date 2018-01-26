# @codekit-prepend "coffee/css3Prefix"
# @codekit-prepend "../../libs/coffee/requestanimation"
# @codekit-prepend "./player.coffee"
# @codekit-prepend "./video.coffee"

_CDN = "http://image.giccoo.com/projects/adidas-originals-eqt/"
_CDN = "./"
load = {}
main = {}
finger = {}
player = {}

window.onload = ->
	load = new Vue
		el: "#load"
		data:
			loadend: false
			
	# finger = new Vue
	# 	el: "#fingers"
	# 	data:
	# 		y: 0

	pop = new Vue
		el: "#videopop"
		data:
			show: false
		methods:
			close: ->
				@show = false
				main.opend = false
				console.log @$children[0].stop()

	main = new Vue
		el: "#main"
		data:
			opend: false
			total: 0
			default:
				y: 0
				x: 0
			y: 0
			x: 0
			duration: 0
			leftnote: false
		methods:
			pause: ->
				@leftnote = false
			stopall: (self)->
				for item in @$children
					if self isnt item
						item.pause()
				@leftnote = self is @$children[0]
			touchstart: (evt)->
				touch = evt.touches
				@default.y = touch[0].pageY
				@duration = 0
				# @opend = true
			touchmove: (evt)->
				touch = evt.touches
				tempY = touch[0].pageY - @default.y
				if @$el.scrollTop <= 0 and @y >= 0 and tempY > 0
					@y = tempY / (1+(tempY/300))
					evt.preventDefault()
					console.log @y
					if @y <= 0
						@y = 0
			touchend: (evt)->
				if @y > 100
					@showPop()
				@duration = 0.6 * @y / 300
				@y = 0
			showPop: ->
				return false if @opend
				@opend = true
				pop.show = true
				@stopall null
			start: (evt)->
				touch = evt.touches
				@default.x = touch[0].pageX
			move: (evt)->
				touch = evt.touches
				tempX = touch[0].pageX - @default.x
				if (tempX > 50 or tempX < -50) and @leftnote
					@showPop()
			end: (evt)->

		watch:
			y: (val)->
				finger.y = val
		mounted: (el)->
			setTimeout ->
				load.loadend = true
			,1000
			console.log el,@$children[0].thumb

			# scroll top 
			# @$el.addEventListener "touchstart", @touchstart.bind @
			# @$el.addEventListener "touchmove", @touchmove.bind @
			# @$el.addEventListener "touchend", @touchend.bind @
			# scroll left

			@$el.addEventListener "touchstart", @start.bind @
			@$el.addEventListener "touchmove", @move.bind @
			@$el.addEventListener "touchend", @end.bind @



	# load.loadend = true

	# player = new Vue
	# 	el: "#player"
