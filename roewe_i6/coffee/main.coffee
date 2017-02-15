# @codekit-prepend "coffee/css3Prefix"
# @codekit-prepend "coffee/plus"
# @codekit-prepend "../../libs/coffee/requestanimation"

Store = {}

window.onload = ->
	riot.mount("*")
	MK = $("body").width()/$("body").height()

	if $("body").height() <= 460 or MK > 0.65
		$("body").addClass "iphone4"

	$(".infopage .title .bar-1").on "click", ->
		$(".infopage").removeClass "bar-1 bar-2"
		$(".infopage").addClass "bar-1"
	$(".infopage .title .bar-2").on "click", ->
		$(".infopage").removeClass "bar-1 bar-2"
		$(".infopage").addClass "bar-2"

	$(".register .title").on "click", ->
		$(".register").addClass "on"
		$(".register").css({"transform":"translate3d(0,0,0)"})
	$(".register .close").on "click", ->
		$(".register").removeClass "on"
		Rhh = $(".register-form").height()
		$(".register").css({"transform":"translate3d(0,#{Rhh}px,0)"})
	setTimeout ->
		Rhh = $(".register-form").height()+4
		console.log Rhh, $("body").height()
		$(".register").css({"transform":"translate3d(0,#{Rhh}px,0)"})
		$(".register").addClass "show"
	,500

	# $(".left").on "click", moveLeft
	# $(".right").on "click", moveRight

	$(".show-pop").on "click", ->
		i = $(this).index()+1
		$(".pop .content").html '<img src="img/pop-'+i+'.png" />'
		$(".pop").show()
	$(".pop").on "click", ->
		$(".pop").hide()

	$(".backTop").on "click", ->
		window.scrollTo(0,$(".form").offset().top)
	# $(".left").on "click", moveLeft
	# $(".right").on "click", moveRight



mainSlider = {}
secondSlider = {}
tabId = 0
tabId2 = 0

changePoint = (i)->
	console.log(Math.abs(i))
	tabId2 = Math.abs(i)
	# e = $(".contents .item").eq(tabId-1)
	$(".points span").removeClass "on"
	$(".points span").eq(Math.abs(i)).addClass "on"


changeMain = (i)->
	tabId = Math.abs(i)

moveLeft = ->
	tabId--
	# if tabId < 0
		# tabId = 7
	mainSlider.setNumber(tabId)
	
moveRight = ->
	tabId++
	# if tabId > 7
		# tabId = 0
	mainSlider.setNumber(tabId)

showTab = (i)->
	$(".tabs .item").removeClass "on"
	$(".tabs .item").eq(i-1).addClass "on"
	$(".contents .item").hide()
	$(".contents .item").eq(i-1).show()
	tabId = i

showTab(1)


SendNote = (msg,time = 3000)->
	$("body").append("<note title='"+msg+"' time='#{time}'></note>")
	riot.mount("note")