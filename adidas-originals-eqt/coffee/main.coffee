# @codekit-prepend "coffee/css3Prefix"
# @codekit-prepend "../../libs/coffee/requestanimation"
# @codekit-prepend "./player.coffee"
# @codekit-prepend "./video.coffee"

_CDN = "http://image.giccoo.com/projects/adidas-originals-eqt/"
_CDN = "./"
load = {}
player = {}

window.onload = ->

	load = new Vue
		el: "#main"
		data:
			loadend: false

	# load.loadend = true

	# player = new Vue
	# 	el: "#player"
