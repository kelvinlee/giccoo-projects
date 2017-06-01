# @codekit-prepend "coffee/css3Prefix"
# @codekit-prepend "../../libs/coffee/requestanimation"
# @codekit-prepend "../../libs/coffee/qrcode"


Store = {}
layzr = null
tm = null
oldslideNumber = 0
debug = false
cdn = ""
isMM = false
FormHeight = 0
# cdn = "http://disk.giccoo.com/projects/Yili-Eat-World/" unless debug
global = {}
link = "http://api.giccoo.com"
mainSlider = {}
secondSlider = {}
tabId = 0
tabId2 = 0
_stepList = ["40,000","70,000","120,000"]

debug = false
if debug
	uid = "30102250"
	pc = "ad6ca3d5d8db6eb4af38dbeb13527470012669a8"
	localStorage.clear()

_startDate = new Date()
_startDate.setMonth(7)
_startDate.setDate(13)
_startDate.setHours(0)
_startDate.setMinutes(0)
_startDate.setSeconds(0)
_startDate.setMilliseconds(0)

taskData = [
	{
		startDate: _startDate
		endDate: new Date(_startDate.getTime()+10*24*60*60*1000)
	}
]

window.onload = ->
	MK = $("body").width()/$("body").height()

	if $("body").height() <= 460 or MK > 0.65
		$("body").addClass "iphone4"

	# $("body").on "click", ->
	# 	setTimeout ->
	# 		$(".page-eight").addClass "on"
	# 	,2000
	# 	$("#video")[0].play()
	

	$(".loading .content").addClass "on"
	riot.mount("*")
	setTimeout ->
		loadedEnd()
	,2400
	# first-load-src
	$("img[first-load-src]").each ->
		$(this).attr "src",$(this).attr("first-load-src")

	# $("img[second-load-src]").each ->
	# 	$(this).attr "src",$(this).attr("second-load-src")

	# $("img[last-load-src]").each ->
	# 	$(this).attr "src",$(this).attr("last-load-src")
	document.querySelector('body').addEventListener "touchmove", (e)->
		e.preventDefault()
	# loadedEnd()

	$(".page-one .btn").on "click", ->
		$(".pages .page-one")[0].removeEventListener ANIMATION_END_NAME, FrameFun
		$(".pages .page-one").addClass "fadeOut animated"
		$(".pages .page-two")[0].addEventListener ANIMATION_END_NAME, FrameFun
		$(".pages .page-two").addClass "on"
		setTimeout ->
			$(".pages .page-one").removeClass "on fadeOut animated"
		,500
		# $(".pages .page-seven").addClass "on"
		# return
		$("img[second-load-src]").each ->
			$(this).attr "src",$(this).attr("second-load-src")

	$(".page-four .btn-1").on "click", ->
		$(".pages .page-four")[0].removeEventListener ANIMATION_END_NAME, FrameFun
		$(".pages .page-four").addClass "fadeOut animated"
		$(".pages .page-four-1")[0].addEventListener ANIMATION_END_NAME, FrameFun
		$(".pages .page-four-1").addClass "on"
		Stars(".page-four-3 .stars-1",15)
		Stars(".page-four-3 .stars-2",20)
		Stars(".page-four-3 .stars-3",15)
		setTimeout ->
			$(".pages .page-four").removeClass "on fadeOut animated"
		,550
		$("img[last-load-src]").each ->
			$(this).attr "src",$(this).attr("last-load-src")

	$(".page-four .btn-2").on "click", ->
		$(".pages .page-four")[0].removeEventListener ANIMATION_END_NAME, FrameFun
		$(".pages .page-four").addClass "fadeOut animated"
		$(".pages .page-four-3")[0].addEventListener ANIMATION_END_NAME, FrameFun
		$(".pages .page-four-3").addClass "on"
		Stars(".page-four-3 .stars-1",15)
		Stars(".page-four-3 .stars-2",20)
		Stars(".page-four-3 .stars-3",15)
		setTimeout ->
			$(".pages .page-four").removeClass "on fadeOut animated"
		,550
		$("img[last-load-src]").each ->
			$(this).attr "src",$(this).attr("last-load-src")
	$(".page-five .btn-1").on "click", ->
		$(".pages .page-five")[0].removeEventListener ANIMATION_END_NAME, FrameFun
		$(".pages .page-five").addClass "fadeOut animated"
		$(".pages .page-five-1")[0].addEventListener ANIMATION_END_NAME, FrameFun
		$(".pages .page-five-1").addClass "on"
		Stars(".page-five-3 .stars",20)
		setTimeout ->
			$(".pages .page-five").removeClass "on fadeOut animated"
		,550
	$(".page-five .btn-2").on "click", ->
		$(".pages .page-five")[0].removeEventListener ANIMATION_END_NAME, FrameFun
		$(".pages .page-five").addClass "fadeOut animated"
		$(".pages .page-five-3")[0].addEventListener ANIMATION_END_NAME, FrameFun
		$(".pages .page-five-3").addClass "on"
		Stars(".page-five-3 .stars",20)
		setTimeout ->
			$(".pages .page-five").removeClass "on fadeOut animated"
		,550
	$(".page-six .btn-1").on "click", ->
		# $("#video")[0].play()
		$(".pages .page-six")[0].removeEventListener ANIMATION_END_NAME, FrameFun
		$(".pages .page-six").addClass "fadeOut animated"
		$(".pages .page-seven")[0].addEventListener ANIMATION_END_NAME, FrameFun
		$(".pages .page-seven").addClass "on"
		Stars(".page-seven .stars-1",15)
		Stars(".page-seven .stars-2",15)
		Stars(".page-seven .stars-3",15)
		
		setTimeout ->
			$(".pages .page-six").removeClass "on fadeOut animated"
		,550
	$(".page-seven .bg").on "click", ->
		$("#video")[0].play()
		$(".pages .page-seven")[0].removeEventListener ANIMATION_END_NAME, FrameFun
		$(".pages .page-seven")[0].addEventListener ANIMATION_END_NAME, hideSelf
		$(".pages .page-seven").addClass "fadeOut animated"
		$(".pages .page-eight")[0].addEventListener ANIMATION_END_NAME, FrameFun
		$(".pages .page-eight").addClass "on"

	# for video
	# $("#video")[0].addEventListener "play", ->
	# 	playerDraw()

	loadWechatConfig()
	wx.ready ->
		shareContent =
			title: "潮汐更迭 共续蔚蓝心动"
			desc: "LA MER海蓝之谜邀您一起参与世界海洋日艺术展"
			link: "http://m.giccoo.com/lamer/"
			imgUrl: "http://image.giccoo.com/projects/lamer/img/share.jpg"
			success: ->
				# alert "success"
			cancel: ->
				# alert "cancel"
		wx.onMenuShareTimeline shareContent
		wx.onMenuShareAppMessage shareContent
		wx.onMenuShareQQ shareContent
		wx.onMenuShareWeibo shareContent

	return true

playerDraw = ()->
	# console.log c,v,w,h
	v = document.getElementById('video')
	canvas = document.getElementById('player')
	c = canvas.getContext('2d')
	w = 620
	h = 360
	c.drawImage(v,0,0,w,h)
	# setTimeout(playerDraw,20,c,v,w,h)
	requestAnimationFrame playerDraw

loadWechatConfig = ->
	url = encodeURIComponent window.location.href.split("#")[0]
	hm = document.createElement('script')
	hm.src = "http://api.giccoo.com/api/config?url="+url
	s = document.getElementsByTagName('script')[0]
	s.parentNode.insertBefore hm, s
	return

EndLastFrame = (evt)->
	if $(evt.target).is ".text"
		setTimeout ->
			$(".page-last").addClass "on"
		,1700

loadedEnd = ->
	$(".loading").addClass "fadeOut animated duration-5"
	$(".pages .page-one").addClass "on"
	$(".pages .page-one")[0].addEventListener ANIMATION_END_NAME, FrameFun
	Stars(".page-one .stars-1",20)
	Stars(".page-one .stars-2",20)
	Stars(".page-one .stars-3",20)
	setTimeout ->
		$(".loading").remove()
	,550
	

FrameFun = (evt)->
	if $(evt.target).is(".last")
		# 等待1秒
		parent = $(evt.target).parents(".page")
		wait = parseInt parent.attr "wait"
		setTimeout ->
			passFun evt
		,wait

passFun = (evt)->
	parent = $(evt.target).parents(".page")
	parent[0].removeEventListener ANIMATION_END_NAME, FrameFun
	parent[0].addEventListener ANIMATION_END_NAME, hideSelf
	# console.log parent.attr("next"),parent,$(parent.attr("next"))
	if parent.attr("next")
		console.log "next page"
		parent.addClass "fadeOut animated"
		$(parent.attr("next")).addClass "on"
		$(parent.attr("next"))[0].addEventListener ANIMATION_END_NAME, FrameFun
		if $(parent.attr("next")).is ".page-nine"
			Stars(".page-nine .stars-1",20)
			Stars(".page-nine .stars-2",20)
			Stars(".page-nine .stars-3",20)
		# if $(parent.attr("next")).is ".page-eight"
		# 	$("#video")[0].play()
		# if $(parent.attr("next")).is ".page-nine"
		# 	$("#video")[0].pause()
	else
		console.log "stop this"

hideSelf = (evt)->
	$(evt.target).removeClass "on fadeOut animated"
	$(evt.target)[0].removeEventListener ANIMATION_END_NAME, hideSelf
	$(evt.target).find(".stars").html("")
changeMain = ->

SendNote = (msg,time = 3000)->
	$("body").append("<note title='"+msg+"' time='#{time}'></note>")
	riot.mount("note")
_loader = {}
Loader = (id,title = "",type = "ball",time = 0,more = "")->
	if $("#"+id).length > 0
		return _loader[id].loadend()
	$("body").append("<loader id='"+id+"' title='"+title+"' type='"+type+"' time='#{time}'>#{more}</loader>")
	riot.mount("loader")

Stars = (target,num)->
	stars = $(target)
	for index in [0...num]
		randomX = Math.random() * 100
		randomY = Math.random() * 100
		delay = parseInt Math.random() * 500
		duration = parseInt(Math.random() * 1500 + 1500)
		size = Math.random() * 2 + 1
		star = $("<div>")
		star.addClass("star")
		star.css({
			"top": randomX+"%",
			"left": randomY+"%",
			"width": size+"px",
			"height": size+"px",
			"animation-delay": delay+"ms",
			"animation-duration": duration+"ms"
		})
		stars.append star
		# console.log star

