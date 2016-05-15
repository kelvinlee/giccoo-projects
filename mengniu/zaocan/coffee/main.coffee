# @codekit-prepend "coffee/plus"

Store = {}
layzr = null
tm = null

debug = false
cdn = ""
isMM = false
# cdn = "http://disk.giccoo.com/projects/Yili-Eat-World/" unless debug
global = {}
link = "http://api.giccoo.com"
mainSlider = {}
secondSlider = {}
tabId = 0
tabId2 = 0

window.onload = ->
	h = $("body").height() - $(".bg").height()
	console.log "h",h
	if (h/2) < 0
		$(".bg").css({"bottom": (h/2)+"px"})



SendNote = (msg,time = 3000)->
	$("body").append("<note title='"+msg+"' time='#{time}'></note>")
	riot.mount("note")
_loader = {}
Loader = (id,title = "",type = "ball",time = 0,more = "")->
	if $("#"+id).length > 0
		return _loader[id].loadend()
	$("body").append("<loader id='"+id+"' title='"+title+"' type='"+type+"' time='#{time}'>#{more}</loader>")
	riot.mount("loader")

