# @codekit-prepend "coffee/css3Prefix"
# @codekit-prepend "coffee/plus"
# @codekit-prepend "../../libs/coffee/requestanimation"

_citys = {}

_citys["北京"] = {}
_citys["甘肃"] = {}
_citys["河北"] = {}
_citys["黑龙江"] = {}
_citys["吉林"] = {}
_citys["辽宁"] = {}
_citys["内蒙古"] = {}
_citys["山东"] = {}
_citys["山西"] = {}
_citys["陕西"] = {}
_citys["天津"] = {}
_citys["新疆"] = {}
_citys["安徽"] = {}
_citys["河南"] = {}
_citys["湖北"] = {}
_citys["江苏"] = {}
_citys["江西"] = {}
_citys["上海"] = {}
_citys["浙江"] = {}
_citys["福建"] = {}
_citys["广东"] = {}
_citys["广西"] = {}
_citys["贵州"] = {}
_citys["海南"] = {}
_citys["湖南"] = {}
_citys["四川"] = {}
_citys["云南"] = {}
_citys["重庆"] = {}
_citys["宁夏"] = {}
_citys["青海"] = {}

_citys["北京"]["北京"] = []
_citys["甘肃"]["兰州"] = []
_citys["河北"]["石家庄"] = []
_citys["河北"]["唐山"] = []
_citys["黑龙江"]["哈尔滨"] = []
_citys["吉林"]["长春"] = []
_citys["辽宁"]["大连"] = []
_citys["辽宁"]["沈阳"] = []
_citys["内蒙古"]["包头"] = []
_citys["内蒙古"]["呼和浩特"] = []
_citys["山东"]["济南"] = []
_citys["山东"]["青岛"] = []
_citys["山东"]["烟台"] = []
_citys["山西"]["太原"] = []
_citys["陕西"]["西安"] = []
_citys["天津"]["天津"] = []
_citys["新疆"]["乌鲁木齐"] = []
_citys["安徽"]["合肥"] = []
_citys["河南"]["郑州"] = []
_citys["湖北"]["武汉"] = []
_citys["江苏"]["常州"] = []
_citys["江苏"]["南通"] = []
_citys["江苏"]["苏州"] = []
_citys["江苏"]["无锡"] = []
_citys["江苏"]["扬州"] = []
_citys["江西"]["南昌"] = []
_citys["上海"]["上海"] = []
_citys["浙江"]["杭州"] = []
_citys["浙江"]["嘉兴"] = []
_citys["浙江"]["宁波"] = []
_citys["浙江"]["绍兴"] = []
_citys["浙江"]["台州"] = []
_citys["浙江"]["温州"] = []
_citys["福建"]["泉州"] = []
_citys["广东"]["东莞"] = []
_citys["广东"]["佛山"] = []
_citys["广东"]["广州"] = []
_citys["广东"]["揭阳"] = []
_citys["广东"]["汕头"] = []
_citys["广东"]["深圳"] = []
_citys["广东"]["中山"] = []
_citys["广东"]["珠海"] = []
_citys["广西"]["南宁"] = []
_citys["贵州"]["贵阳"] = []
_citys["海南"]["海口"] = []
_citys["湖南"]["长沙"] = []
_citys["四川"]["成都"] = []
_citys["云南"]["昆明"] = []
_citys["重庆"]["重庆"] = []
_citys["山东"]["潍坊"] = []
_citys["河北"]["保定"] = []
_citys["江苏"]["南京"] = []
_citys["辽宁"]["鞍山"] = []
_citys["陕西"]["榆林"] = []
_citys["山东"]["济宁"] = []
_citys["山东"]["临沂"] = []
_citys["山东"]["淄博"] = []
_citys["山东"]["泰安"] = []
_citys["山东"]["东营"] = []
_citys["河北"]["邯郸"] = []
_citys["四川"]["乐山"] = []
_citys["黑龙江"]["大庆"] = []
_citys["宁夏"]["银川"] = []
_citys["内蒙古"]["赤峰"] = []
_citys["青海"]["西宁"] = []
_citys["河南"]["洛阳"] = []
_citys["山西"]["大同"] = []
_citys["广西"]["桂林"] = []
_citys["浙江"]["湖州"] = []
_citys["江苏"]["徐州"] = []
_citys["福建"]["厦门"] = []
_citys["江苏"]["泰州"] = []
_citys["广西"]["柳州"] = []
_citys["福建"]["福州"] = []
_citys["江西"]["赣州"] = []
_citys["江苏"]["镇江"] = []
_citys["河南"]["平顶山"] = []
_citys["辽宁"]["锦州"] = []
_citys["福建"]["龙岩"] = []
_citys["河南"]["安阳"] = []
_citys["山东"]["威海"] = []
_citys["江苏"]["盐城"] = []
_citys["安徽"]["阜阳"] = []
_citys["四川"]["绵阳"] = []
_citys["福建"]["三明"] = []
_citys["河南"]["商丘"] = []
_citys["江西"]["九江"] = []
_citys["安徽"]["芜湖"] = []
_citys["山东"]["滨州"] = []
_citys["江苏"]["常熟"] = []
_citys["江西"]["上饶"] = []
_citys["山东"]["德州"] = []
_citys["河北"]["邢台"] = []
_citys["云南"]["红河"] = []
_citys["福建"]["漳州"] = []
_citys["湖南"]["株洲"] = []
_citys["四川"]["南充"] = []
_citys["湖北"]["襄阳"] = []
_citys["河南"]["南阳"] = []
_citys["陕西"]["咸阳"] = []
_citys["福建"]["莆田"] = []
_citys["吉林"]["吉林"] = []
_citys["陕西"]["宝鸡"] = []
_citys["陕西"]["延安"] = []
_citys["浙江"]["义乌"] = []
_citys["河南"]["新乡"] = []
_citys["河北"]["沧州"] = []
_citys["山西"]["临汾"] = []
_citys["浙江"]["舟山"] = []
_citys["山西"]["运城"] = []
_citys["广东"]["江门"] = []
_citys["湖北"]["宜昌"] = []
_citys["广西"]["钦州"] = []
_citys["广东"]["湛江"] = []
_citys["浙江"]["衢州"] = []
_citys["浙江"]["金华"] = []
_citys["江苏"]["连云港"] = []

_budget = ["50万以下","50-99万","100-149万","150-199万","200-249万","250-299万","300-349万","350-399万","不确定"]
_buytime = ["0-3个月","4-6个月","7-12个月","1年以上","不确定"]
_type = ["XJ","XF","F-TYPE","XE"]

window.onload = ->
	riot.mount("*")

	$(".show-pop").on "click", ->
		i = $(this).index()+1
		$(".pop .content").html '<img src="img/pop-'+i+'.png" />'
		$(".pop").show()
	$(".pop").on "click", ->
		$(".pop").hide()

	$(".backTop").on "click", ->
		window.scrollTo(0,$(".form").offset().top-30)
	$(".points span").on "click", moveLeft
	$(".right").on "click", moveRight
	$(".left2").on "click", mLeft
	$(".right2").on "click", mRight

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

mLeft = ->
	tabId2--
	if tabId2 < 0
		tabId2 = 0
	secondSlider.setNumber(tabId2)
	$(".points span").removeClass "on"
	$(".points span").eq(tabId2).addClass "on"
mRight = ->
	tabId2++
	if tabId2 > 6
		tabId2 = 6
	secondSlider.setNumber(tabId2)
	$(".points span").removeClass "on"
	$(".points span").eq(tabId2).addClass "on"

moveLeft = (evt)->
	console.log($(evt.target).index()-1)
	$(".points span").removeClass "on"
	$(evt.target).addClass "on"
	secondSlider.setNumber($(evt.target).index())
	
moveRight = ->
	tabId++
	if tabId > 4
		tabId = 4
	mainSlider.setNumber(tabId)


showTab = (i)->
	$(".tabs .item").removeClass "on"
	$(".tabs .item").eq(i-1).addClass "on"
	$(".contents .item").hide()
	$(".contents .item").eq(i-1).show()
	tabId = i

showTab(1)

