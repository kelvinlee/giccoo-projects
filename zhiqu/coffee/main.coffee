# @codekit-prepend "coffee/css3Prefix"
# @codekit-prepend "coffee/plus"
# @codekit-prepend "../../libs/coffee/requestanimation"
# images = "http://disk.giccoo.com/projects/huaweiG7/"
images = ""
imageList = []
imgs = []
# riot.mount("*")
page = ["page-brand"]
pages = [".pages-brand"]
opened = false
global = {}
tags = null

window.onload = ->
	riot.mount("*")
	$(".bottle-logo-next").css {
		bottom: 164 - $("body").height() * 0.13 - 18
	}
	$(".pages-award .icon").on "click", openAward
	$(".pages-media .bottle-media-movie").on "click", openMedia
	$(".pages-brand .item").on "click", openBrand
	$(".firstPage .content").on "click", init

	$(".pages-media .icons-1 .icon").on "touchstart", (evt)->
		$(".alert",this).addClass "on"
		evt.stopPropagation()
		evt.preventDefault()
	$(".pages-media .icons-1 .icon").on "touchend", (evt)->
		$(".alert",this).removeClass "on"
		evt.stopPropagation()
		evt.preventDefault()

	$(".pages-brand .content").css({"margin-top": -(1136-$("body").height())+"px"})
	console.log( -(1136-$("body").height())+"px")
	loadStart()


init = ->
	$(".firstPage").addClass "on"
	setTimeout ->
		# tags = riot.mount("div#main","main")
		loadStart()
	,1500
test = ->
	# alert("haha")
loadStart = ->
	count = $("[data-layzr]").length
	now = 0
	ep = $("#loading-text")
	$("[data-layzr]").on "load", ->
		now++
		ep.text parseInt now/count*100
		loadEnd() if now >= count

	$("[data-layzr]").each ->
		$(this).attr("src",$(this).attr("data-layzr"))
loadEnd = ->
	setTimeout ->
		$(".firstPage").addClass "fadeOut animated"
		setTimeout ->
			$(".firstPage").remove()
		,500
	,1500
# loadAllImage = ->
# 	max = imageList.length
# 	for image in imageList
# 		img = new Image()
# 		img.onload = ->
# 			max--
# 			loadComper parseInt (imageList.length-max)/imageList.length*100
# 			loadFinished() if max <= 0
# 		img.src = image
# 		imgs.push(img)
# loadComper = (m)->
# 	$("#loading-text").text m
# loadFinished = ->
# 	tags = riot.mount("div#main","main")
# 	setTimeout ->
# 		$(".firstPage").addClass "fadeOut animated"
# 		setTimeout ->
# 			$(".firstPage").remove()
# 		,500
# 	,1000

openBottle = (evt)->
	return false if opened 
	console.log evt
	name = $(evt).attr("page-name")
	$(evt).next().addClass "on"
	$(".bottle-"+name).addClass "Mybottle"
	$(".homepage").addClass "page-"+name
	$(".pages-"+name).show()
	setTimeout ->
		$(".pages-"+name).addClass "thispage"
	,1
	# console.log name

	opened = true

backBottle = (name)->
	$(".homepage").removeClass "page-"+name
	$(".bottle-"+name+" .white").removeClass "on"
	$(".pages-"+name).removeClass "thispage"
	$(".bottle-"+name).removeClass "Mybottle"
	setTimeout ->
		$(".pages-"+name).hide()
	,2000
	opened = false

openBottleMain = (evt)->
	return false if opened 
	name = $(evt).attr("page-name")
	$(evt).next().addClass "on"
	$(".bottle-"+name).addClass "Mybottle"
	$(".main").addClass "page-"+name
	$(".pages-"+name).show()
	$(".pages-"+name).addClass "thispage"
	global["bottle"+name].replay("replay") if global? && global["bottle"+name]?
	opened = true
	$(".bottle"+name+".gif").removeClass("normal replay stop").addClass("replay")
	brandShow() if name is "brand"
	mediaShow() if name is "media"
	strategyShow() if name is "strategy"
	logoShow() if name is "logo"
	technologyShow() if name is "technology"

backBottleMain = (name)->
	$(".main").removeClass "page-"+name
	$(".bottle-"+name+" .white").removeClass "on"
	$(".pages-"+name).removeClass "thispage"
	$(".bottle-"+name).removeClass "Mybottle"
	global["bottle"+name].replay("normal") if global? && global["bottle"+name]?
	$(".bottle"+name+".gif").removeClass("normal replay stop").addClass("normal")
	clearNone()

awardList = [
	{}
]  
openBrand = (evt)->
	evt.stopPropagation()
	e = $(evt.target)

	n = e.attr "rel"
	$("#pop").show()
	$("#pop .pop-content").html("<img src='img/pages-brand-pop-"+n+".png' />")
	$("#pop .close").on "click", ->
		$("#pop").hide()
		$("#pop .pop-content").html("")

openAward = (evt)->
	evt.stopPropagation()
	e = $(evt.target).parents(".icon")

	n = e.attr "rel"
	$(".page-award .pop").show()
	$(".page-award .pop .pop-content").html '<div class="alert-'+n+'"><img src="img/pages-award-alert-'+n+'.jpg" /></div>'
	$(".page-award .pop").on "click", ->
		$(".page-award .pop").hide()
openMedia = (evt)->
	evt.stopPropagation()
	e = $(evt.target).parents(".icon")

	n = e.attr "rel"
	$(".page-media .pop").show()
	# $(".page-media .pop .pop-content").html '<div class="alert-'+n+'"><img src="img/pages-media-alert-'+n+'.jpg" /></div>'
	$(".page-media .pop").on "click", ->
		$(".page-media .pop").hide()

clearNone = ->
	setTimeout ->
		# $(".pages-brand .brands-item").html("")
		opened = false
		global["brandbg"].replay("normal") if global? && global["brandbg"]?
		global["brands"].replay("stop") if global? && global["brands"]?
		global["bottlemediamovie"].replay("stop") if global? && global["bottlemediamovie"]?
		global["strategypeople1"].replay("stop") if global? && global["strategypeople1"]?
		global["strategypeople2"].replay("stop") if global? && global["strategypeople2"]?
		global["strategyicons"].replay("stop") if global? && global["strategyicons"]?
		global["strategyarrowyellow1"].replay("stop") if global? && global["strategyarrowyellow1"]?
		global["strategyarrowyellow2"].replay("stop") if global? && global["strategyarrowyellow2"]?
		global["strategyad"].replay("stop") if global? && global["strategyad"]?
		global["logobg"].replay("stop") if global? && global["logobg"]?
		global["logobottle"].replay("stop") if global? && global["logobottle"]?
		global["logovitro"].replay("stop") if global? && global["logovitro"]?
	,500

brandShow = ->
	$(".pages-brand .pop").hide()
	$(".pages-brand .pop .pop-content").html("")
	setTimeout ->
		global["brandbg"].replay("replay") if global? && global["brandbg"]?
		global["brands"].replay("normal") if global? && global["brands"]?
	,1700

mediaShow = ->
	global["bottlemediamovie"].replay("replay") if global? && global["bottlemediamovie"]?

strategyShow = ->
	global["strategypeople1"].replay("replay") if global? && global["strategypeople1"]?
	global["strategypeople2"].replay("replay") if global? && global["strategypeople2"]?
	global["strategyicons"].replay("replay") if global? && global["strategyicons"]?
	global["strategyarrowyellow1"].replay("replay") if global? && global["strategyarrowyellow1"]?
	global["strategyarrowyellow2"].replay("replay") if global? && global["strategyarrowyellow2"]?
	global["strategyarrowwhite"].replay("replay") if global? && global["strategyarrowwhite"]?
	global["strategyad"].replay("replay") if global? && global["strategyad"]?

logoShow = ->
	global["logobg"].replay("normal") if global? && global["logobg"]?
	global["logobottle"].replay("normal") if global? && global["logobottle"]?
	global["logovitro"].replay("normal") if global? && global["logovitro"]?
	setTimeout ->
		global["logobg"].replay("replay") if global? && global["logobg"]?
		global["logobottle"].replay("replay") if global? && global["logobottle"]?
		setTimeout ->
			global["logovitro"].replay("replay") if global? && global["logovitro"]?
		,400
	,2400

technologyShow = ->
	# technologylogo
	global["technologylogo"].replay("replay") if global? && global["technologylogo"]?
