# @codekit-prepend "coffee/css3Prefix"
# @codekit-prepend "coffee/plus"
# @codekit-prepend "../../libs/coffee/requestanimation"

_citys = {}

_citys["安徽省"] = {}
_citys["北京市"] = {}
_citys["福建省"] = {}
_citys["甘肃省"] = {}
_citys["广东省"] = {}
_citys["广西自治区"] = {}
_citys["贵州省"] = {}
_citys["海南省"] = {}
_citys["河北省"] = {}
_citys["河南省"] = {}
_citys["黑龙江省"] = {}
_citys["湖北省"] = {}
_citys["湖南省"] = {}
_citys["吉林省"] = {}
_citys["江苏省"] = {}
_citys["江西省"] = {}
_citys["辽宁省"] = {}
_citys["内蒙古自治区"] = {}
_citys["宁夏自治区"] = {}
_citys["青海省"] = {}
_citys["山东省"] = {}
_citys["山西省"] = {}
_citys["陕西省"] = {}
_citys["上海市"] = {}
_citys["四川省"] = {}
_citys["天津市"] = {}
_citys["新疆自治区"] = {}
_citys["云南省"] = {}
_citys["浙江省"] = {}
_citys["重庆市"] = {}

_citys["安徽省"]["芜湖市"] = []
_citys["安徽省"]["合肥市"] = []
_citys["安徽省"]["阜阳市"] = []
_citys["北京市"]["北京市"] = []
_citys["福建省"]["泉州市"] = []
_citys["福建省"]["厦门市"] = []
_citys["福建省"]["福州市"] = []
_citys["福建省"]["龙岩市"] = []
_citys["福建省"]["三明市"] = []
_citys["福建省"]["莆田市"] = []
_citys["福建省"]["漳州市"] = []
_citys["甘肃省"]["兰州市"] = []
_citys["广东省"]["广州市"] = []
_citys["广东省"]["佛山市"] = []
_citys["广东省"]["珠海市"] = []
_citys["广东省"]["中山市"] = []
_citys["广东省"]["东莞市"] = []
_citys["广东省"]["深圳市"] = []
_citys["广东省"]["揭阳市"] = []
_citys["广东省"]["汕头市"] = []
_citys["广西自治区"]["南宁市"] = []
_citys["广西自治区"]["柳州市"] = []
_citys["广西自治区"]["桂林市"] = []
_citys["贵州省"]["贵阳市"] = []
_citys["海南省"]["海口市"] = []
_citys["河北省"]["石家庄市"] = []
_citys["河北省"]["唐山市"] = []
_citys["河北省"]["保定市"] = []
_citys["河北省"]["邯郸市"] = []
_citys["河北省"]["邢台市"] = []
_citys["河南省"]["郑州市"] = []
_citys["河南省"]["洛阳市"] = []
_citys["河南省"]["平顶山市"] = []
_citys["河南省"]["安阳市"] = []
_citys["河南省"]["商丘市"] = []
_citys["河南省"]["南阳市"] = []
_citys["河南省"]["新乡市"] = []
_citys["黑龙江省"]["大庆市"] = []
_citys["黑龙江省"]["哈尔滨市"] = []
_citys["湖北省"]["武汉市"] = []
_citys["湖北省"]["襄樊市"] = []
_citys["湖南省"]["长沙市"] = []
_citys["湖南省"]["株洲市"] = []
_citys["吉林省"]["长春市"] = []
_citys["吉林省"]["吉林市"] = []
_citys["江苏省"]["常州市"] = []
_citys["江苏省"]["无锡市"] = []
_citys["江苏省"]["扬州市"] = []
_citys["江苏省"]["南通市"] = []
_citys["江苏省"]["苏州市"] = []
_citys["江苏省"]["南京市"] = []
_citys["江苏省"]["徐州市"] = []
_citys["江苏省"]["泰州市"] = []
_citys["江苏省"]["镇江市"] = []
_citys["江苏省"]["盐城市"] = []
_citys["江西省"]["南昌市"] = []
_citys["江西省"]["赣州市"] = []
_citys["江西省"]["九江市"] = []
_citys["江西省"]["上饶市"] = []
_citys["辽宁省"]["鞍山市"] = []
_citys["辽宁省"]["大连市"] = []
_citys["辽宁省"]["沈阳市"] = []
_citys["辽宁省"]["锦州市"] = []
_citys["内蒙古自治区"]["呼和浩特市"] = []
_citys["内蒙古自治区"]["包头市"] = []
_citys["内蒙古自治区"]["鄂尔多斯市"] = []
_citys["内蒙古自治区"]["赤峰市"] = []
_citys["宁夏自治区"]["银川市"] = []
_citys["青海省"]["西宁市"] = []
_citys["山东省"]["淄博市"] = []
_citys["山东省"]["东营市"] = []
_citys["山东省"]["济南市"] = []
_citys["山东省"]["济宁市"] = []
_citys["山东省"]["泰安市"] = []
_citys["山东省"]["潍坊市"] = []
_citys["山东省"]["临沂市"] = []
_citys["山东省"]["青岛市"] = []
_citys["山东省"]["烟台市"] = []
_citys["山东省"]["威海市"] = []
_citys["山东省"]["滨州市"] = []
_citys["山东省"]["德州市"] = []
_citys["山西省"]["太原市"] = []
_citys["陕西省"]["西安市"] = []
_citys["陕西省"]["榆林市"] = []
_citys["陕西省"]["咸阳市"] = []
_citys["陕西省"]["宝鸡市"] = []
_citys["陕西省"]["延安市"] = []
_citys["上海市"]["上海市"] = []
_citys["四川省"]["成都市"] = []
_citys["四川省"]["绵阳市"] = []
_citys["四川省"]["南充市"] = []
_citys["天津市"]["天津市"] = []
_citys["新疆自治区"]["乌鲁木齐市"] = []
_citys["云南省"]["昆明市"] = []
_citys["云南省"]["红河市"] = []
_citys["浙江省"]["杭州市"] = []
_citys["浙江省"]["湖州市"] = []
_citys["浙江省"]["嘉兴市"] = []
_citys["浙江省"]["金华市"] = []
_citys["浙江省"]["宁波市"] = []
_citys["浙江省"]["绍兴市"] = []
_citys["浙江省"]["台州市"] = []
_citys["浙江省"]["温州市"] = []
_citys["重庆市"]["重庆市"] = []


window.onload = ->
	riot.mount("*")

	$(".show-pop").on "click", ->
		i = $(this).index()+1
		$(".pop .content").html '<img src="img/pop-'+i+'.png" />'
		$(".pop").show()
	$(".pop").on "click", ->
		$(".pop").hide()

	$(".backTop").on "click", ->
		window.scrollTo(0,$(".form").offset().top)

tabId = 1

changePoint = (i)->
	console.log(Math.abs(i))
	e = $(".contents .item").eq(tabId-1)
	$(".points span",e).removeClass "on"
	$(".points span",e).eq(Math.abs(i)).addClass "on"

showTab = (i)->
	$(".tabs .item").removeClass "on"
	$(".tabs .item").eq(i-1).addClass "on"
	$(".contents .item").hide()
	$(".contents .item").eq(i-1).show()
	tabId = i

showTab(1)

