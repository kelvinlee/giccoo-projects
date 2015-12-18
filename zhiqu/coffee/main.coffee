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
loaded = []
tags = null
paoAudio = null

window.onload = ->
	
	$(".bottle-logo-next").css {
		bottom: 164 - $("body").height() * 0.13 - 18
	}
	$(".pages-award .icon").on "click", openAward
	$(".pages-media .bottle-media-movie").on "click", openMedia
	$(".pages-brand .item").on "click", openBrand
	$(".firstPage .content").on "click", init

	$(".pages-media .icons-1 .icon").on "touchstart", (evt)->
		evt.stopPropagation()
		evt.preventDefault()
		$(".alert",this).addClass "on"
	$(".pages-media .icons-1 .icon").on "touchmove", (evt)->
		evt.stopPropagation()
		evt.preventDefault()
	$(".pages-media .icons-1 .icon").on "touchend", (evt)->
		evt.stopPropagation()
		evt.preventDefault()
		$(".alert",this).removeClass "on"
	$(".pages-media .icons-1 .icon .alert").on "touchstart", (evt)->
		evt.stopPropagation()
		evt.preventDefault()
	$(".pages-media .icons-1 .icon .alert").on "touchmove", (evt)->
		evt.stopPropagation()
		evt.preventDefault()
	$(".pages-media .icons-1 .icon .alert").on "touchend", (evt)->
		evt.stopPropagation()
		evt.preventDefault()
	loadWechatConfig()
	wx.ready ->
		shareContent =
			title: "致趣实验室"
			desc: "致趣实验室"
			link: "http://m.giccoo.com/zhiqu/"
			imgUrl: "http://disk.giccoo.com/projects/zhiqu/img/share.jpg"
			success: ->
				# alert "success"
			cancel: ->
				# alert "cancel"
		wx.onMenuShareTimeline shareContent
		wx.onMenuShareAppMessage shareContent
		wx.onMenuShareQQ shareContent
		wx.onMenuShareWeibo shareContent
	# finishedLoad()

loadWechatConfig = ->
	url = encodeURIComponent window.location.href.split("#")[0]
	hm = document.createElement('script')
	hm.src = "http://api.giccoo.com/config?url="+url
	s = document.getElementsByTagName('script')[0]
	s.parentNode.insertBefore hm, s
	return

		

	# $(".pages-brand .content").css({"margin-top": -(1136-$("body").height())+"px"})

	$("#pop .close").on "click", ->
		$("#pop").hide()
		$("#pop .pop-content").html("")

	# loadStart()


init = ->
	$(".firstPage").addClass "on"
	setTimeout ->
		# tags = riot.mount("div#main","main")
		loadStart()
	,1500
test = ->
	# alert("haha")
loadStart = ->
	# riot.mount("*")

	count = $("[data-layzr]").length
	now = 0
	ep = $("#loading-text")

	$("[data-layzr]").on "load", ->
		now++
		ep.text parseInt now/count*60
		loadEnd() if now >= count

	$("[data-layzr]").each ->
		$(this).attr("src",$(this).attr("data-layzr"))
_gifCount = 0
_gifnow = 0
loadGIF = ->
	_gifnow++
	ep = $("#loading-text")
	ep.text parseInt 60+_gifnow/_gifCount*40
	hideFirstPage() if _gifnow >= _gifCount
loadEnd = ->
	_gifCount = $("gif").length
	riot.mount("*")
	paoAudio = riot.mount("div#paoAudio","playsound")
	paoAudio[0].stop()
	console.log _gifCount

startLoadPage = (name,evt)->
	global["bottle"+name].replay("prepare") if global? && global["bottle"+name]?
	now = 0
	count = $("[data-layzr-"+name+"]").length
	console.log name,count
	_gifCount = 0
	_gifnow = 0
	loadGIF = ->
		# console.log("a")
		_gifnow++
		loadPageEnd() if _gifnow >= _gifCount
	loadPageEnd = ->
		if _gifCount is 0
			loaded[name] = true
			openBottleMain evt
		else if _gifnow >= _gifCount
			loaded[name] = true
			openBottleMain evt
		if name is "strategy"
			setTimeout ->
				global["strategyad"].replay("replay") if global? && global["strategyad"]?
			,1000
	$("[data-layzr-"+name+"]").on "load", ->
		now++
		loadPageEnd() if now >= count
	$("[data-layzr-"+name+"]").each ->
		$(this).attr("src",$(this).attr("data-layzr-"+name))
	if name is "brand"
		riot.mount("div#brandbg","gif")
		riot.mount("div#brands","gif")
		global["bottlebrand"].reload()
		_gifCount = 3
	if name is "technology"
		riot.mount("div#technologylogo","gif")
		riot.mount("div#technologypeople5","gif")
		riot.mount("div#technologypeople4","gif")
		riot.mount("div#technologypeople3","gif")
		riot.mount("div#technologypeople2","gif")
		riot.mount("div#technologypeople1","gif")
		riot.mount("div#technologyhand","gif")
		global["bottletechnology"].reload()
		_gifCount = 8
	if name is "media"
		riot.mount("div#bottlemediamovie","gif")
		global["bottlemedia"].reload()
		_gifCount = 2
	if name is "logo"
		riot.mount("div#logobg","gif")
		# riot.mount("div#logobottle","gif")
		riot.mount("div#logovitro","gif")
		global["bottlelogo"].reload()
		_gifCount = 3
	if name is "strategy"
		riot.mount("div#strategyhand","gif")
		riot.mount("div#strategyarrowwhite","gif")
		riot.mount("div#strategyarrowyellow1","gif")
		riot.mount("div#strategyicons","gif")
		riot.mount("div#strategypeople1","gif")
		riot.mount("div#strategypeople2","gif")
		riot.mount("div#strategyarrowyellow2","gif")
		riot.mount("div#strategyad","gif")
		global["bottlestrategy"].reload()
		_gifCount = 8
	if name is "contactus"
		riot.mount("div#contactusfull","gif")
		global["bottlecontactus"].reload()
		_gifCount = 2
	if name is "award"
		global["bottleaward"].reload()
		_gifCount = 1
	loadPageEnd() if count is 0

hideFirstPage = ->
	$(".firstPage").addClass "fadeOut animated"
	setTimeout ->
		$(".firstPage").remove()
	,500

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

bottleRunEnd = ->
	paoAudio[0].stop()

openBottleMain = (evt)->
	return false if opened 
	name = $(evt).attr("page-name")
	paoAudio[0].play()
	if loaded[name] isnt true
		startLoadPage name,evt
		return false
	
	$(evt).next().addClass "on"
	$(".bottle-"+name).addClass "Mybottle"
	$(".main").addClass "page-"+name
	$(".pages-"+name).show()
	$(".pages-"+name).addClass "thispage"
	global["bottle"+name].replay("replay") if global? && global["bottle"+name]?
	opened = true
	$(".bottle"+name+".gif").removeClass("normal replay stop").addClass("replay")
	if name is "brand"
		brandShow() 
		$(".thispage .bg").addClass("show")
	mediaShow() if name is "media"
	strategyShow() if name is "strategy"
	if name is "logo"
		$(".pages-logo-bg .bg").addClass("show")
		logoShow() 
	technologyShow() if name is "technology"

backBottleMain = ()->
	name = $(".thispage").attr "name"
	console.log("close",name)
	if name is "brand" and $(".thispage .bg").is(".show")
		$(".thispage .bg").removeClass("show")
		setTimeout ->
			backBottleMain()
		,500
		return false
	if name is "logo" and $(".pages-logo-bg .bg").is(".show")
		$(".pages-logo-bg .bg").removeClass("show")
		setTimeout ->
			backBottleMain()
		,500
		return false
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
openAward = (evt)->
	evt.stopPropagation()
	e = $(evt.target).parents(".icon")

	n = e.attr "rel"
	$(".pages-award .pop").show()
	$(".pages-award .pop .pop-content").html '<div class="alert-'+n+'"><img src="img/pages-award-alert-'+n+'.jpg" /></div>'
	$(".pages-award .pop").on "click", ->
		$(".pages-award .pop").hide()
openMedia = (evt)->
	evt.stopPropagation()
	e = $(evt.target).parents(".icon")

	n = e.attr "rel"
	$(".pages-media .pop").show()
	# $(".page-media .pop .pop-content").html '<div class="alert-'+n+'"><img src="img/pages-media-alert-'+n+'.jpg" /></div>'
	$(".pages-media .pop").on "click", ->
		$(".pages-media .pop").hide()
clearNone = ->
	setTimeout ->
		# $(".pages-brand .brands-item").html("")
		stop = true
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
		global["strategyhand"].replay("normal") if global? && global["strategyhand"]?
		global["logobg"].replay("stop") if global? && global["logobg"]?
		# global["logobottle"].replay("stop") if global? && global["logobottle"]?
		global["logovitro"].replay("stop") if global? && global["logovitro"]?
		global["contactusfull"].replay("normal") if global? && global["contactusfull"]?

	,500

brandShow = ->
	$(".pages-brand .pop").hide()
	$(".pages-brand .pop .pop-content").html("")
mediaShow = ->
	# 
	global["bottlemediamovie"].replay("replay") if global? && global["bottlemediamovie"]?
strategyShow = ->
	global["strategypeople1"].replay("replay") if global? && global["strategypeople1"]?
	global["strategypeople2"].replay("replay") if global? && global["strategypeople2"]?
	global["strategyicons"].replay("replay") if global? && global["strategyicons"]?
	global["strategyarrowyellow1"].replay("replay") if global? && global["strategyarrowyellow1"]?
	global["strategyarrowyellow2"].replay("replay") if global? && global["strategyarrowyellow2"]?
	global["strategyarrowwhite"].replay("replay") if global? && global["strategyarrowwhite"]?
	global["strategyad"].replay("replay") if global? && global["strategyad"]?
	global["strategyhand"].replay("replay") if global? && global["strategyhand"]?

	$(".pages-strategy .item-icons").on "click", ->
		global["strategyicons"].replay("replay") if global? && global["strategyicons"]?
	$(".pages-strategy .fcanvas").on "click", ->
		console.log "test"
		if global? && global["strategyad"]?
			if global["strategyad"].play is "stepto"
				global["strategyad"].replay("stepend") 
			if global["strategyad"].play is "replay"
				global["strategyad"].replay("stepto")

logoShow = ->
	global["logobg"].replay("normal") if global? && global["logobg"]?
	# global["logobottle"].replay("normal") if global? && global["logobottle"]?
	global["logovitro"].replay("normal") if global? && global["logovitro"]?
	# setTimeout ->
	# ,2400
logoLoadEnd = ->
	console.log "logoLoadEnd"
	global["logobg"].replay("replay") if global? && global["logobg"]?
	# global["logobottle"].replay("replay") if global? && global["logobottle"]?
	global["logovitro"].replay("replay") if global? && global["logovitro"]?

contactusLoadEnd = ->
	global["contactusfull"].replay("replay") if global? && global["contactusfull"]?

brandLoadEnd = ->
	global["brandbg"].replay("replay") if global? && global["brandbg"]?
	global["brands"].replay("normal") if global? && global["brands"]?

technologyShow = ->
	# technologylogo
	global["technologylogo"].replay("replay") if global? && global["technologylogo"]?
	$(".pages-technology .box-logo").on "click", ->
		global["technologylogo"].replay("replay") if global? && global["technologylogo"]?
	console.log "T start"
	stop = false
	TrunCheck()

technologyHandRun = (name)->
	if name is "replay"
		console.log(name)
		


stop = false
XList = [-62,30,122,214,306]
TWidth = 460 / 5
TrunCheck = ->
	return false if stop
	last = 0
	$(".p-box.index .people").each (i)->
		# console.log parseInt $(".over",this).css("opacity")
		x = $(this).offset().left
		if i is 0 and x <= XList[i] and global["technologypeople"+(i+1)].play is "normal"
			global["technologypeople"+(i+1)].replay("replay")
			return true
		if i is 0 and x >= XList[i]+TWidth*3.5 and global["technologypeople"+(i+1)].play isnt "normal"
			global["technologypeople"+(i+1)].replay("normal")
			return true
		if i is 0
			return true
		if global["technologypeople"+(i+1)].play is "normal" and x >= XList[i]+TWidth*(i)
			global["technologypeople"+(i+1)].replay("replay")
		else if x <= XList[i]
			global["technologypeople"+(i+1)].replay("normal")
		else if x >= XList[i]+TWidth*4.92 and global["technologypeople"+(i+1)].play isnt "normal"
			global["technologypeople"+(i+1)].replay("normal")
	# if $(".pages-technology .line").height() >= 90 and (global["technologyhand"].play isnt "stop" or global["technologyhand"].play isnt "replay")
	# 	global["technologyhand"].replay("replay")
	# 	console.log $(".pages-technology .line").height(),"line height"
	# if $(".pages-technology .line").height() <= 90 and (global["technologyhand"].play is "stop" or global["technologyhand"].play is "replay")
	# 	console.log $(".pages-technology .line").height(),"line height"
	# 	global["technologyhand"].replay("normal")
	if $(".pages-technology .line").height() >= 90 and (global["technologyhand"].play isnt "stop" and global["technologyhand"].play isnt "replay")
		# console.log $(".pages-technology .line").height(),global["technologyhand"].play
		global["technologyhand"].replay("replay")
	if $(".pages-technology .line").height() <= 50 and (global["technologyhand"].play isnt "normal")
		global["technologyhand"].replay("normal")
	requestAnimationFrame(TrunCheck)
