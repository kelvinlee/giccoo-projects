# @codekit-prepend "coffee/css3Prefix"
# @codekit-prepend "../../libs/coffee/requestanimation"
# @codekit-prepend "../../libs/coffee/vue-video.coffee"
# @codekit-prepend "../../libs/coffee/vue-book-page.coffee"
# @codekit-prepend "../../libs/coffee/vue-book-pages.coffee"

_CDN = "http://image.giccoo.com/projects/zhishinews/"
_CDN = "./"
load = {}
main = {}
share = {}
player = {}

window.onload = ->
	load = new Vue
		el: "#load"
		data:
			loadend: false
			start: ""
			note: false
			loading: true
			autoClose: null
		methods:
			close: ->
				el = @$el.children[0]
				clearTimeout @autoClose
				TweenLite.to(el,0.6,{opacity:0,onComplete: ->
					load.loadend = true
				})
			leave: (el,done)->
				TweenLite.to(el,0.6,{opacity:0,onComplete: ->
					done()
					load.loadend = true
				})
				# console.log "el:",el,done

		mounted: (el)->
			initMain()
			@start = "on"
			setTimeout =>
				# load.loadend = true
				load.note = true
				load.loading = false
				@autoClose = setTimeout ->
					load.note = false
				,3000
			,2000

	stopWebViewScroll()
initMain = ->
	share = new Vue
		el: "#share"
		data:
			show: false
		methods:
			close: ->
				@show = false

	player = new Vue
		el: "#videopop"
		data:
			src: ""
			poster: ""
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
			shareshow: ->
				share.show = true
			changetab: ->
				@tab = !@tab
			changeplayer: (src,poster)->
				player.src = src
				player.poster = poster
				player.show = true
				# player.play()

			# nextPage: (self)->
			# 	@pagenow = self.pagenow
				# console.log "next pagenow:",@pagenow
			
		mounted: (el)->
			@$el.style = "display: block"
stopWebViewScroll = ->
	overscroll = (el)->
		el.addEventListener 'touchstart', ->
			top = el.scrollTop
			totalScroll = el.scrollHeight
			currentScroll = top + el.offsetHeight
			if top is 0
				el.scrollTop = 1
			else if currentScroll is totalScroll
				el.scrollTop = top -1
		el.addEventListener "touchmove", (evt)->
			if el.offsetHeight < el.scrollHeight
				evt._isScroller = true
	document.body.addEventListener "touchmove", (evt)->
		unless evt._isScroller
			evt.preventDefault()
	for el in document.querySelectorAll(".touch")
		overscroll el


