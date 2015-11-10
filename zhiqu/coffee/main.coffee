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

window.onload = ->

openBottle = (evt)->
	console.log evt
	name = $(evt).attr("page-name")
	$(evt).next().addClass "on"
	$(".homepage").addClass "page-"+name
	$(".pages-"+name).show()

backBottle = (name)->
	$(".homepage").removeClass "page-"+name
	$(".bottle-"+name+" .white").removeClass "on"
	$(".pages-"+name).hide()