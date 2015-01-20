bindOri = (portrait,landscape)->
	window.addEventListener (if ("onorientationchange" of window) then "orientationchange" else "resize"), ()->
		portrait.call() if (window.orientation is 180 or window.orientation is 0)
		landscape.call() if (window.orientation is 90 or window.orientation is -90)