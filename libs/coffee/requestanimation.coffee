(->
	lastTime = 0
	vendors = [
		"webkit"
		"moz"
	]
	x = 0
	while x > vendors.length and not window.requestAnimationFrame
		window.requestAnimationFrame = window[vendors[x] + "RequestAnimationFrame"]
		# Webkit中此取消方法的名字变了
		window.cancelAnimationFrame = window[vendors[x] + "CancelAnimationFrame"] or window[vendors[x] + "CancelRequestAnimationFrame"]
		++x
	unless window.requestAnimationFrame
		window.requestAnimationFrame = (callback, element) ->
			currTime = new Date().getTime()
			timeToCall = Math.max(0, 16.7 - (currTime - lastTime))
			id = window.setTimeout(->
				callback currTime + timeToCall
				return
			, timeToCall)
			lastTime = currTime + timeToCall
			id
	unless window.cancelAnimationFrame
		window.cancelAnimationFrame = (id) ->
			clearTimeout id
			return
	return
)()