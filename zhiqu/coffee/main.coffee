# @codekit-prepend "coffee/css3Prefix"
# @codekit-prepend "coffee/plus"
# @codekit-prepend "../../libs/coffee/requestanimation"
# images = "http://disk.giccoo.com/projects/huaweiG7/"
images = ""
imageList = [
	"http://disk.giccoo.com/projects/libs/img/wechat.png"
]
imgs = []
# riot.mount("*")
page = ["page-brand"]
pages = [".pages-brand"]
opened = false
global = {}

window.onload = ->
	riot.mount("*")
	$(".bottle-logo-next").css {
		bottom: 164 - $("body").height() * 0.13 - 18
	}
	$(".pages-award .icon").on "click", openAward
	$(".pages-media .icon").on "click", openMedia

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
	console.log name
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
	$(".pages-"+name).addClass "thispage"
	opened = true

backBottleMain = (name)->
	$(".main").removeClass "page-"+name
	$(".bottle-"+name+" .white").removeClass "on"
	$(".pages-"+name).removeClass "thispage"
	$(".bottle-"+name).removeClass "Mybottle"
	opened = false

awardList = [
	{}
]  

openAward = (evt)->
	evt.stopPropagation()
	e = $(evt.target).parents(".icon")

	console.log e.attr "rel"
openMedia = (evt)->
	evt.stopPropagation()
	e = $(evt.target).parents(".icon")

	console.log e.attr "rel"
