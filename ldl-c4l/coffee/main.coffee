# @codekit-prepend "coffee/css3Prefix"
# @codekit-prepend "coffee/plus"
# @codekit-prepend "js/vendor/exif.js"
# @codekit-prepend "../../libs/coffee/requestanimation"
# @codekit-prepend "../../libs/coffee/qrcode"

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

GetStep = ->
	ldl.callNativeTmp "getDailyStatsWithData",JSON.stringify
		startDate: parseInt taskData[0].startDate.getTime() / 1000
		endDate: parseInt taskData[0].endDate.getTime() / 1000
	.always (msg)->
		console.log "msg", msg
	.done (d)->        
		res = JSON.parse(d)
		dailystats = res.DailyStats[0]
		steps = if dailystats then parseInt(dailystats.steps) else 0
		_taskOverDate = steps
		# alert JSON.stringify taskOverDate
		# callback.bind(self)(date)
		# deferred.resolve steps
		console.log "steps:", steps
		updateStep steps
	.fail (err)->
		# deferred.reject "获取步数失败"
		alert "获取步数失败:"+err


runInApp = (msg)->
	console.log msg

window.onload = ->
	MK = $("body").width()/$("body").height()

	if $("body").height() <= 460 or MK > 0.65
		$("body").addClass "iphone4"

	riot.mount("*")

	# ldl.getUserDataInapp()
	# .done(runInApp)
	# .fail (err)->
	# 	ldl.gTip.show(JSON.stringify(err), 0)
	if ldl.isApp
		# ldl.callNativeTmp "UserDataInapp",{},5000
		# .done (d)-> 
		# 	console.log(d)
		# .fail (err)->
		# 	ldl.gTip.show(JSON.stringify(err), 0)
		ldl.getUserDataInapp()
		.done(runInApp)
		.fail (err)->
			alert err
			ldl.gTip.show(JSON.stringify(err), 0)
	else
		console.log "not ledongli"

	
	$(".homepage .banner").on "click", ->
		$(".homepage").addClass "fadeOut animated"
		$(".notepage").addClass "first fadeIn animated"
		setTimeout ->
			$(".homepage").removeClass "first fadeOut animated"
			$(".notepage").removeClass "fadeIn animated"
		,500

	$(".notepage .text").on "click", ->
		$(".notepage").addClass "fadeOut animated"
		$(".infopage").addClass "first fadeIn animated"
		setTimeout ->
			$(".notepage").removeClass "first fadeOut animated"
			$(".infopage").removeClass "fadeIn animated"
		,500

	$(".infopage .start-lottery").on "click", ->
		$(".infopage").addClass "fadeOut animated"
		$(".lotpage").addClass "first fadeIn animated"
		setTimeout ->
			$(".infopage").removeClass "first fadeOut animated"
			$(".lotpage").removeClass "fadeIn animated"
		,500
		# Send step to server

		setTimeout ->
			UpdateLucky(890)
		,1000

	# Update circle size
	size = Math.ceil $("body").width() * 0.7 * 0.6
	console.log size

	$(".infopage .step-box .circleProgress_wrapper").css
		"width": (size+20)+"px"
		"height": (size+20)+"px"
	$(".infopage .step-box .circleProgress_wrapper .circleProgress-bg,.infopage .step-box .circleProgress_wrapper .circleProgress").css
		"width": size+"px"
		"height": size+"px"

	$(".pop.faild .content").on "click", ->
		$(".pop.faild").addClass "hide"
		$(".lotpage").addClass "fadeOut animated"
		$(".infopage").addClass "first fadeIn animated"
		setTimeout ->
			$(".lotpage").removeClass "first fadeOut animated"
			$(".infopage").removeClass "fadeIn animated"
			# UpdateLucky(0)
			$(".lotpage .box-plan").css
				"-webkit-transform": "rotate("+0+"deg)"
				"transform": "rotate("+0+"deg)"
		,500
		# Set content to text
	$(".pop.success .content").on "click", ->
		$(".pop.success").addClass "hide"
		$(".lotpage").addClass "fadeOut animated"
		$(".infopage").addClass "first fadeIn animated"
		setTimeout ->
			$(".lotpage").removeClass "first fadeOut animated"
			$(".infopage").removeClass "fadeIn animated"
			# UpdateLucky(0)
		,500
	# 

UpdateCircle = (h)->
	if h>100
		h = 100
	Fstart = -135
	Sstart = -135
	if h <= 50
		Fstart = Fstart + 180 * (h*2/100)
	else
		Fstart = 45
		Sstart = Sstart + 180 * ((h-50)*2/100)

	$(".circleProgress_wrapper .rightcircle").css
		"-webkit-transform": "rotate("+Fstart+"deg)"
		"transform": "rotate("+Fstart+"deg)"
	$(".circleProgress_wrapper .leftcircle").css
		"-webkit-transform": "rotate("+Sstart+"deg)"
		"transform": "rotate("+Sstart+"deg)"

UpdateLucky = (temp)->
	# 890 水壶
	# 930 谢谢参与
	# 960 小米手环
	# 1230 apple watch
	Fstart = temp
	$(".lotpage .box-plan").css
		"-webkit-transform": "rotate("+Fstart+"deg)"
		"transform": "rotate("+Fstart+"deg)"
	if temp is 930
		setTimeout ->
			$(".pop.faild").removeClass "hide"
		,4700
	else
		setTimeout ->
			$(".pop.success-form").removeClass "hide"
		,4700

lotterySuccess = ->
	console.log "success"

	$(".pop.success-form").addClass "hide"
	$(".pop.success").removeClass "hide"

updateMedal = (o = 1,first = false)->
	if o > 0
		$(".infopage .cups li:eq(0) img").attr("src","img/cup-1-on.png")
	if o > 1
		$(".infopage .cups li:eq(1) img").attr("src","img/cup-2-on.png")
	if o > 2
		$(".infopage .cups li:eq(2) img").attr("src","img/cup-3-on.png")

	if first
		$(".circle-content.text").addClass "hide"
		$(".circle-content.medal").removeClass "hide"
		$(".circle-content.medal img").attr("src","img/medal-"+o+".png")
		$(".infopage .next-step .start-lottery").addClass "hide"
		$(".infopage .next-step .start-lottery-"+o).removeClass "hide"
		$(".infopage .next-step .normal").addClass "hide"

_step = 0
updateStep = (step)->
	all = Math.ceil(step/120000*100)
	UpdateCircle all
	$("#stepnumber").text(step)
	medal1 = if localStorage.getItem("medal-1") then false else true
	medal2 = if localStorage.getItem("medal-2") then false else true
	medal3 = if localStorage.getItem("medal-3") then false else true
	if step < 40000
		$("#nextstepnumber").text(_stepList[0])
	else if step > 40000 and step < 70000
		$("#nextstepnumber").text(_stepList[1])
		updateMedal(1,medal1)
		localStorage.setItem("medal-1","true")
		_step = 1
	else if step > 70000 and step < 120000
		$("#nextstepnumber").text(_stepList[2])
		updateMedal(2,medal2)
		localStorage.setItem("medal-2","true")
		_step = 2
	else
		$(".infopage .circle-content.text .c-small").text("恭喜你完成了所有任务")
		updateMedal(3,medal3)
		localStorage.setItem("medal-3","true")
		_step = 3

	yes




SendNote = (msg,time = 3000)->
	$("body").append("<note title='"+msg+"' time='#{time}'></note>")
	riot.mount("note")
_loader = {}
Loader = (id,title = "",type = "ball",time = 0,more = "")->
	if $("#"+id).length > 0
		return _loader[id].loadend()
	$("body").append("<loader id='"+id+"' title='"+title+"' type='"+type+"' time='#{time}'>#{more}</loader>")
	riot.mount("loader")

