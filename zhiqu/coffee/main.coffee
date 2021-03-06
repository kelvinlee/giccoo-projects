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
fps = 30
randomAward = false
openid = ""
PubUrl = "http://i.giccoo.com"
# PubUrl = "http://kelvin-air.local:8990"
debug = false

window.onload = ->
	# if not debug
	# 	openid = $_GET["openid"]
	# 	if not openid? or openid is ""
	# 		window.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxb3dd8b8d67e940c4&redirect_uri={url}&response_type=code&scope=snsapi_base&state=123#wechat_redirect".replace("{url}", encodeURIComponent(PubUrl+"/zhiqu/"));
	# 		return false

	_hm = new Image()
	_hm.src = "http://124.205.144.213/count/?name=html5&ts="+new Date().getTime()+parseInt Math.random()*1000
	$(".firstPage").show()
	$(".firstPage .content").on "click", init

	loadWechatConfig()
	wx.ready ->
		shareContent =
			title: "致趣联媒实验室"
			desc: "科学实验表明：99%的移动广告预算可在这里被消耗！"
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
	
	# if Cookies.get("note-1")
	# 	$(".homepage .p-notes").remove()
	# if Cookies.get("note-2")
	# 	$(".pages-strategy .p-notes").remove()
	# else
	# 	$(".pages-strategy .p-notes").addClass "show"
	# 	$(".pages-strategy .p-notes").on "click", ->
	# 		$(".pages-strategy .p-notes").removeClass "show"
	# 		Cookies.set("note-2","true")
	# if Cookies.get("note-3")
	# 	$(".pages-technology .p-notes").remove()
	# else
	# 	$(".pages-technology .p-notes").addClass "show"
	# 	$(".pages-technology .p-notes").on "click", ->
	# 		$(".pages-technology .p-notes").removeClass "show"
	# 		Cookies.set("note-3","true")

	# finishedLoad()

PostAward = ->
	console.log "post award"
	data = {openid: openid}
	# http://i.giccoo.com
	# http://kelvin-air.local:8990
	$.post PubUrl+"/zhiqu/vote/to/", data, (msg)->
		console.log msg if debug
		if msg.recode is 200
			showAwardBox()
readyEmail = false
showAwardBox = ->
	$(".award-box").show()
	$(".award-box .box .content,.award-box .text").on "click", ->
		$(".award-box .bingo-box").hide()
		$(".award-box .bingo-email").show()
	$(".award-box .bingo-email #submit").on "click", ->
		if readyEmail
			return alert "正在提交请稍后..."
		reg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/
		email = $("[name=email]").val()
		if reg.test email
			readyEmail = true
			data = {openid: openid,email: email}
			$.post PubUrl+"/zhiqu/vote/email/", data, (msg)->
				readyEmail = false
				if msg.recode is 200
					alert "已经提交成功, 请等候我们的通知."
					$(".award-box").hide()
				else
					alert msg.reason
		else
			alert "Email 格式不正确"

loadWechatConfig = ->
	url = encodeURIComponent window.location.href.split("#")[0]
	hm = document.createElement('script')
	hm.src = "http://api.giccoo.com/config?url="+url
	s = document.getElementsByTagName('script')[0]
	s.parentNode.insertBefore hm, s
	return

initNormal = ->
	setTimeout ->
		all = 0
		t = new Date()
		i = 0
		run10 = ->
			i++
			all = all + (new Date() - t)
			t = new Date()
			if i>= 10
				fps = parseInt 1000 / all / i * 100
				console.log "fps:",fps if debug
				return false
			requestAnimationFrame run10
		run10()
	,500
	if Cookies.get("randomAward") is "true"
		randomAward = true
	$(".pages-strategy .p-notes").addClass "show"
	$(".pages-strategy .p-notes").on "click", ->
		$(".pages-strategy .p-notes").removeClass "show"
		Cookies.set("note-2","true")
	$(".pages-technology .p-notes").addClass "show"
	$(".pages-technology .p-notes").on "click", ->
		$(".pages-technology .p-notes").removeClass "show"
		Cookies.set("note-3","true")

	$(".bottle-logo-next").css {
		bottom: 164 - $("body").height() * 0.13 - 18
	}
	$(".pages-award .icon").on "click", openAward
	$(".pages-media .bottle-media-movie").on "click", openMedia
	$(".pages-brand .item").on "click", openBrand
	

	$(".pages-media .icons .icon").on "touchstart", (evt)->
		evt.stopPropagation()
		evt.preventDefault()
		$(".alert",this).addClass "on"
	$(".pages-media .icons .icon").on "touchmove", (evt)->
		evt.stopPropagation()
		evt.preventDefault()
	$(".pages-media .icons .icon").on "touchend", (evt)->
		evt.stopPropagation()
		evt.preventDefault()
		$(".alert",this).removeClass "on"
		if !randomAward
			PostAward()
			randomAward = true
	$(".giveup").on "click", ->
		$(".award-box").hide()
		randomAward = true
		Cookies.set("randomAward",true)

	$(".pages-media .icons .icon .alert").on "touchstart", (evt)->
		evt.stopPropagation()
		evt.preventDefault()
	$(".pages-media .icons .icon .alert").on "touchmove", (evt)->
		evt.stopPropagation()
		evt.preventDefault()
	$(".pages-media .icons .icon .alert").on "touchend", (evt)->
		evt.stopPropagation()
		evt.preventDefault()
	$("#pop .close").on "click", ->
		$("#pop").hide()
		$("#pop .pop-content").html("")

	# 加载微信分享内容.
	

init = ->
	$(".firstPage").addClass "on"
	$(".firstPage .loading .loadbox").addClass "replay"
	setTimeout ->
		loadStart()
	,1500
test = ->
	# alert("haha")
loadStart = ->
	# riot.mount("*")

	count = $("[data-layzr]").length
	now = 0
	ep = $("#loading-text")

	$("[data-layzr]").each ->
		# $(this).attr("src",$(this).attr("data-layzr"))
		img = new Image()
		img.onload = ->
			now++
			ep.text parseInt now/count*60
			loadEnd() if now >= count
		img.src = $(this).attr("data-layzr")
		$(this).after(img)
		$(this).remove()
_gifCount = 0
_gifnow = 0
loadGIF = ->
	_gifnow++
	ep = $("#loading-text")
	ep.text parseInt 60+_gifnow/_gifCount*40
	if _gifnow >= _gifCount
		setTimeout ->
			hideFirstPage()
		,500
loadEnd = ->
	_gifCount = $("gif").length
	riot.mount("*")
	# riot.mount("div#bottlebrand","gif")
	# riot.mount("div#bottlelogo","gif")
	initNormal()
	paoAudio = riot.mount("div#paoAudio","playsound")
	paoAudio[0].stop()
	console.log "loaded." if debug
	$(".homepage .p-notes").addClass "show"
	$(".homepage .p-notes .note").on "click", ->
		Cookies.set("note-1","true")
		$(".homepage .p-notes").removeClass "show"

loadProgress = ->

startLoadPage = (name,evt)->
	global["bottle"+name].replay("prepare") if global? && global["bottle"+name]?
	now = 0
	count = $("[data-layzr-"+name+"]").length
	console.log name,count if debug
	_gifCount = 0
	_gifnow = 0
	pageEnd = 0
	$(".progress").addClass "show"
	loadGIF = ->
		# console.log("a")
		# _gifnow++
		# runProgress()
		# loadPageEnd() if _gifnow >= _gifCount
	loadPageEnd = ->
		pageEnd++
		return false if pageEnd < 2
		$(".progress").removeClass "show"
		setTimeout ->
			$(".progress .line").css {width: "0%"}
		,800
		if _gifCount is 0
			loaded[name] = true
			openBottleMain evt, true
		else if _gifnow >= _gifCount
			loaded[name] = true
			openBottleMain evt, true
		if name is "strategy"
			setTimeout ->
				global["strategyad"].replay("replay") if global? && global["strategyad"]?
			,1000
	loadProgress = ->
		_gifnow++
		runProgress()
		loadPageEnd() if _gifnow >= _gifCount
	runProgress = ->
		v = parseInt (_gifnow+now)/(count+_gifCount)*100
		# console.log v,_gifnow,now,count,_gifCount
		$(".progress .line").css {width: v+"%"}
	$("[data-layzr-"+name+"]").each ->
		# $(this).attr("src",$(this).attr("data-layzr-"+name))
		img = new Image()
		img.onload = ->
			now++
			runProgress()
			loadPageEnd() if now >= count
		img.src = $(this).attr("data-layzr-"+name)
		$(this).after(img)
		$(this).remove()
	if name is "brand"
		# riot.mount("div#brandbg","gif")
		_c = parseInt $("#brands").attr("count")
		riot.mount("div#brands","gif")
		_c += global["bottlebrand"].reload()
		_gifCount = _c - 2
	if name is "technology"
		_c = parseInt $("#technologylogo").attr("count")
		_c += parseInt $("#technologypeople5").attr("count")
		_c += parseInt $("#technologypeople4").attr("count")
		_c += parseInt $("#technologypeople3").attr("count")
		_c += parseInt $("#technologypeople2").attr("count")
		_c += parseInt $("#technologypeople1").attr("count")
		_c += parseInt $("#technologyhand").attr("count")

		riot.mount("div#technologylogo","gif")
		riot.mount("div#technologypeople5","gif")
		riot.mount("div#technologypeople4","gif")
		riot.mount("div#technologypeople3","gif")
		riot.mount("div#technologypeople2","gif")
		riot.mount("div#technologypeople1","gif")
		riot.mount("div#technologyhand","gif")
		_c += global["bottletechnology"].reload()
		_gifCount = _c - 2
	if name is "media"
		_c = parseInt $("#bottlemediamovie").attr("count")

		riot.mount("div#bottlemediamovie","gif")
		_c += global["bottlemedia"].reload()
		_gifCount = _c - 2
	if name is "logo"
		_c = parseInt $("#logobg").attr("count")
		_c += parseInt $("#logovitro").attr("count")

		riot.mount("div#logobg","gif")
		# riot.mount("div#logobottle","gif")
		riot.mount("div#logovitro","gif")
		_c += global["bottlelogo"].reload()
		_gifCount = _c - 2
	if name is "strategy"
		_c = parseInt $("#strategyhand").attr("count")
		_c += parseInt $("#strategyarrowwhite").attr("count")
		_c += parseInt $("#strategyarrowyellow1").attr("count")
		_c += parseInt $("#strategyicons").attr("count")
		_c += parseInt $("#strategypeople1").attr("count")
		_c += parseInt $("#strategypeople2").attr("count")
		_c += parseInt $("#strategyarrowyellow2").attr("count")
		_c += parseInt $("#strategyad").attr("count")

		riot.mount("div#strategyhand","gif")
		riot.mount("div#strategyarrowwhite","gif")
		riot.mount("div#strategyarrowyellow1","gif")
		riot.mount("div#strategyicons","gif")
		riot.mount("div#strategypeople1","gif")
		riot.mount("div#strategypeople2","gif")
		riot.mount("div#strategyarrowyellow2","gif")
		riot.mount("div#strategyad","gif")
		_c += global["bottlestrategy"].reload()
		_gifCount = _c - 2
	if name is "contactus"
		_c = parseInt $("#contactusfull").attr("count")
		riot.mount("div#contactusfull","gif")
		_c += global["bottlecontactus"].reload()
		_gifCount = _c - 2
	if name is "award"
		_c = global["bottleaward"].reload()
		_gifCount = _c - 2
	loadPageEnd() if count is 0

hideFirstPage = ->
	# return false

	$(".firstPage .loading .box").hide()
	$(".firstPage .loading .box-text").show()

	if not global.bottlelogo?
		alert "riot create fail."

	setTimeout ->
		$(".main").show()
		$(".firstPage").addClass "fadeOut animated duration-10"
		setTimeout ->
			$(".firstPage").remove()
		,500
	,2000

passMoveFun = (name)->
	# console.log "passMoveFun:",name
	name = name.replace("bottle","")
	console.log "passMoveFun:",name if debug
	$(".bottle-"+name).addClass "Mybottle"
	$(".main").addClass "page-"+name
	$(".pages-"+name).show()
	$(".pages-"+name).addClass "thispage"

openBottle = (evt)->
	return false if opened 
	console.log evt if debug
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

openBottleMain = (evt,pass)->
	# console.log "opened:",opened
	if opened and pass isnt true
		return false
	name = $(evt).attr("page-name")
	$(".pages-"+name).show()
	paoAudio[0].play()
	opened = true
	if loaded[name] isnt true
		startLoadPage name,evt
		return false
	
	$(evt).next().addClass "on"
	global["bottle"+name].replay("replay") if global? && global["bottle"+name]?
	$(".bottle"+name+".gif").removeClass("normal replay stop").addClass("replay")
	if name is "brand"
		brandShow() 
		$(".pages-brand .bg").addClass("show")
	mediaShow() if name is "media"
	strategyShow() if name is "strategy"
	if name is "logo"
		$(".pages-logo-bg .bg").addClass("show")
		logoShow() 
	technologyShow() if name is "technology"

backBottleMain = ()->
	name = $(".thispage").attr "name"
	console.log("close",name) if debug
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
	paoAudio[0].stop()
	clearNone()

awardList = [
	{}
]  
openBrand = (evt)->
	evt.stopPropagation()
	e = $(evt.target)

	n = e.attr "rel"
	$("#pop").show()
	$("#pop .pop-content").html("<img src='img/pages-brand-pop-"+n+".png' /><div class='close close-"+n+"'></div>")
	$("#pop .close").on "click", ->
		$("#pop").hide()
		$("#pop .pop-content").html("")
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
		$(".pages-logo").hide()
		$(".pages-media").hide()
		$(".pages-award").hide()
		$(".pages-brand").hide()
		$(".pages-strategy").hide()
		$(".pages-technology").hide()
		$(".pages-contactus").hide()

		# global["brandbg"].replay("normal") if global? && global["brandbg"]?
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
	# global["strategyicons"].replay("replay") if global? && global["strategyicons"]?
	global["strategyarrowyellow1"].replay("replay") if global? && global["strategyarrowyellow1"]?
	global["strategyarrowyellow2"].replay("replay") if global? && global["strategyarrowyellow2"]?
	global["strategyarrowwhite"].replay("replay") if global? && global["strategyarrowwhite"]?
	global["strategyad"].replay("replay") if global? && global["strategyad"]?
	global["strategyhand"].replay("replay") if global? && global["strategyhand"]?

	$(".pages-strategy .item-box").on "click", ->
		global["strategyicons"].replay("replay") if global? && global["strategyicons"]?
	$(".pages-strategy .fcanvas").on "click", ->
		console.log "test" if debug
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
	console.log "logoLoadEnd" if debug
	global["logobg"].replay("replay") if global? && global["logobg"]?
	# global["logobottle"].replay("replay") if global? && global["logobottle"]?
	global["logovitro"].replay("replay") if global? && global["logovitro"]?

contactusLoadEnd = ->
	global["contactusfull"].replay("replay") if global? && global["contactusfull"]?

brandLoadEnd = ->
	# global["brandbg"].replay("replay") if global? && global["brandbg"]?
	global["brands"].replay("normal") if global? && global["brands"]?

technologyShow = ->
	# technologylogo
	# global["technologylogo"].replay("replay") if global? && global["technologylogo"]?
	$(".pages-technology .box-logo").on "click", ->
		global["technologylogo"].replay("replay") if global? && global["technologylogo"]?
	console.log "T start" if debug
	stop = false
	TrunCheck()

technologyHandRun = (name)->
	if name is "replay"
		console.log(name) if debug

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
	if $(".pages-technology .line").height() >= 80 and (global["technologyhand"].play isnt "stop" and global["technologyhand"].play isnt "replay")
		# console.log $(".pages-technology .line").height(),global["technologyhand"].play
		global["technologyhand"].replay("replay")
	if $(".pages-technology .line").height() <= 50 and (global["technologyhand"].play isnt "normal")
		global["technologyhand"].replay("normal")
	requestAnimationFrame(TrunCheck)


$_GET = do ->
	url = window.document.location.href.toString()
	u = url.split('?')
	if typeof u[1] == 'string'
		u = u[1].split('&')
		get = {}
		console.log u if debug
		for i in u
			j = i.split('=')
			get[j[0]] = j[1]
		get
	else
		{}