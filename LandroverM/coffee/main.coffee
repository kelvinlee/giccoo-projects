
window.onload = ->
	$(".homepage")[0].addEventListener "touchstart", (evt)->
		evt.preventDefault()
	$(".homepage")[0].addEventListener "touchmove", (evt)->
		evt.preventDefault()
	$(".homepage")[0].addEventListener "touchend", (evt)->
		$(".homepage").addClass("next")