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
	riot.mount("*")
	
	$(".btn").on "click", ->
		$(".page").removeClass "on"
		_next = $(this).attr("next-page")
		$(_next).addClass "on"

		if $(this).attr("data-content")
			console.log $(this).attr("data-content")
			console.log JSON.parse $(this).attr("data-content")
			json = JSON.parse $(this).attr("data-content")
			Store.contentx.updateContents(json)

	loadWechatConfig()
	wx.ready ->
		shareContent =
			title: "第25小时的精彩"
			desc: "如果拥有了一天的第25个小时,你会为你的人生增添什么样的可能?"
			link: "http://m.giccoo.com/lincoln_mkz/"
			imgUrl: "http://image.giccoo.com/projects/lincoln_mkz/img/share.jpg"
			success: ->
				# alert "success"
			cancel: ->
				# alert "cancel"
		wx.onMenuShareTimeline shareContent
		wx.onMenuShareAppMessage shareContent
		wx.onMenuShareQQ shareContent
		wx.onMenuShareWeibo shareContent

	return true

hideSelfPage = (self)->
	# $(self).parents(".page").hide()
	$(".page").removeClass("on")
	



loadWechatConfig = ->
	url = encodeURIComponent window.location.href.split("#")[0]
	hm = document.createElement('script')
	hm.src = "http://api.giccoo.com/api/config?url="+url
	s = document.getElementsByTagName('script')[0]
	s.parentNode.insertBefore hm, s
	return
SendNote = (msg,time = 3000)->
	$("body").append("<note title='"+msg+"' time='#{time}'></note>")
	riot.mount("note")
_loader = {}
Loader = (id,title = "",type = "ball",time = 0,more = "")->
	if $("#"+id).length > 0
		return _loader[id].loadend()
	$("body").append("<loader id='"+id+"' title='"+title+"' type='"+type+"' time='#{time}'>#{more}</loader>")
	riot.mount("loader")

