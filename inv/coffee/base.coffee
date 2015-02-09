_opend = false
init = ->
	parallax = $('.pages').parallax {
		irection: 'vertical'
		drag:      false,		# 是否允许拖拽 (若 false 则只有在 touchend 之后才会翻页)
		loading:   true,		# 有无加载页
		indicator: false,		# 有无指示点
		arrow:     false,		# 有无指示箭头
		onchange: (index, element, direction)->
			if $(".page").height() < 450
				$("body").addClass "iphone4"
			else
				$("body").removeClass "iphone4"
	}
openDoor = ->
	$(".door").addClass "open"
	$("#door")[0].play() unless _opend
	_opend = true
	setTimeout ->
		$("[cantmove=true]").attr "cantmove","false"
	,1000
$(document).ready ->
	init()
	$(".door").on "touchstart",->
		openDoor()
	setTimeout ->
		openDoor()
	,4000



