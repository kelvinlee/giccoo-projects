# @codekit-prepend "coffee/css3Prefix"
# @codekit-prepend "coffee/plus"
# @codekit-prepend "js/vendor/exif.js"
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

	
	$(".loading .text").addClass "on"
	riot.mount("*")
	setTimeout ->
		loadedEnd()
	,2400
	# loadedEnd()

	$(".btn-reset").on "click", ->
		# $(".page-reset .content-box").removeClass "on"
		_hmt.push(['_trackEvent', "lincoln_mkz", "充值1小时", "-", "-"])
		$(".page-reset .content-box").removeClass("on").addClass "next"
		$(".page-reset .content-pos").addClass "on"




	$(".btn-run-next").on "click", ->
		$(".page-reset .content-box").removeClass "on next"
		$(".page-reset .content-pos").removeClass "on"
		$(".page-reset .content-select").addClass "on"
		_hmt.push(['_trackEvent', "lincoln_mkz", "确认充值", "-", "-"])

	$(".btn-start").on "click", ->
		id = Math.abs mainSlider.slideNumber
		id += 1
		$(".page-answer").removeClass("answer-1 answer-2 answer-3 answer-4").addClass "on answer-#{id}"
		$(".page-reset").removeClass("fadeIn").addClass "fadeOut"
		$(".page-answer img").each (i)->
			src = $(this).attr "old-no-src"
			if src
				$(this).attr "src",src.replace("answer-x","answer-"+id)

		_hmt.push(['_trackEvent', "lincoln_mkz", "开启新可能", "#{id}", "-"])
	$(".btn-answer-last").on "click", ->
		$(".page-transition").addClass "on"
		_hmt.push(['_trackEvent', "lincoln_mkz", "一起来揭秘", "-", "-"])

	$(".form-register .title").on "click", ->
		if Math.abs(parseInt($(".form-register").css("bottom"))) <= 0
			$(".form-register").css {"bottom": -FormHeight+"px"}
		else
			$(".form-register").css {"bottom": 0}
		_hmt.push(['_trackEvent', "lincoln_mkz", "打开/关闭试驾信息", "-", "-"])



EndLastFrame = (evt)->
	if $(evt.target).is ".text"
		setTimeout ->
			$(".page-last").addClass "on"
		,1700

loadedEnd = ->
	$(".loading").addClass "rollOut animated duration-5"
	$(".pages .page-frame").addClass "on"
	$(".pages .page-frame")[0].addEventListener ANIMATION_END_NAME, FrameFun
	$(".pages .page-transition")[0].addEventListener ANIMATION_END_NAME, EndLastFrame
	# $(".pages .page-transition")[0].addEventListener ANIMATION_END_NAME, EndLastFrame

	FormHeight = $(".form-register").height() - 95/640 * $(".form-register").width()
	$(".form-register").css {"bottom": -FormHeight+"px"}
	$(".pages .page-last").removeClass "on"
	console.log FormHeight

	$("img[no-src]").each ->
		$(this).attr "src",$(this).attr("no-src")
	
	

FrameFun = (evt)->
	if $(evt.target).is(".frame-4")
		$(".loading").addClass "hide"
		$(".pages .page-frame").removeClass "on"
		$(".pages .page-reset .content-box").addClass "on"

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

