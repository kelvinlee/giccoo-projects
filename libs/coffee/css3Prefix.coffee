VENDORS = ["Moz",'webkit','ms','O']
TRANSITION_END_NAMES =
	"Moz" : "transitionend"
	"webkit" : "webkitTransitionEnd"
	"ms" : "MSTransitionEnd"
	"O" : "oTransitionEnd"
ANIMATION_END_NAMES =
	"Moz" : "animationend"
	"webkit" : "webkitAnimationEnd"
	"ms" : "MSAnimationEnd"
	"O" : "oAnimationEnd"

mTestElement = document.createElement("div")

for i in VENDORS
	css3Prefix = i
	break if (css3Prefix+"Transition") of mTestElement.style
	css3Prefix = false

if css3Prefix
	TRANSITION_END_NAME = TRANSITION_END_NAMES[css3Prefix]
	ANIMATION_END_NAME = ANIMATION_END_NAMES[css3Prefix]