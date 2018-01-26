# @codekit-prepend "coffee/css3Prefix"
# @codekit-prepend "../../libs/coffee/requestanimation"
# @codekit-prepend "./video.coffee"
# @codekit-prepend "./pages.coffee"

_CDN = "http://image.giccoo.com/projects/zhishinews/"
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
		mounted: (el)->
			initMain()
			setTimeout ->
				load.loadend = true
			,3000

initMain = ->
	player = new Vue
		el: "#videopop"
		data:
			src: "http://image.giccoo.com/projects/adidas-originals-eqt/video/video.mp4"
			poster: "./img/video.jpg"
			show: false
		methods:
			close: ->
				@show = false
				@$children[0].stop()
			play: ->
				@$children[0].play()

	main = new Vue
		el: "#main"
		data:
			pagenow: 0
			tab: true
		methods:
			changetab: ->
				@tab = !@tab
			changeplayer: (src,poster)->
				player.src = src
				player.poster = poster
				player.show = true
				player.play()

			# nextPage: (self)->
			# 	@pagenow = self.pagenow
				# console.log "next pagenow:",@pagenow
			