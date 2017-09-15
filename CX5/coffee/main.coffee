# @codekit-prepend "coffee/css3Prefix"
# @codekit-prepend "../../libs/coffee/requestanimation"
# @codekit-prepend "../../libs/coffee/qrcode"

Store = {}
layzr = null
tm = null
oldslideNumber = 0
debug = false
cdn = ""
isMM = false
FormHeight = 0
# cdn = "http://disk.giccoo.com/projects/Yili-Eat-World/" unless debug
global = {}
link = "http://api.giccoo.com"
mainSlider = {}
secondSlider = {}
tabId = 0
tabId2 = 0
_stepList = ["40,000","70,000","120,000"]

debug = false
if debug
	uid = "30102250"
	pc = "ad6ca3d5d8db6eb4af38dbeb13527470012669a8"
	localStorage.clear()

_startDate = new Date()
_startDate.setMonth(7)
_startDate.setDate(13)
_startDate.setHours(0)
_startDate.setMinutes(0)
_startDate.setSeconds(0)
_startDate.setMilliseconds(0)

taskData = [
	{
		startDate: _startDate
		endDate: new Date(_startDate.getTime()+10*24*60*60*1000)
	}
]


window.onload = ->
	MK = $("body").width()/$("body").height()

	if $("body").height() <= 460 or MK > 0.65
		$("body").addClass "iphone4"
	riot.mount("*")
	console.log $(".btn")
	$(".btn").on "click", ->
		$(".page").removeClass "on"
		_next = $(this).attr("next-page")
		$(_next).addClass "on"

		if $(this).attr("data-content")
			json = JSON.parse $(this).attr("data-content")
			headline = $(this).attr("data-title")
			subheadline = $(this).attr("data-subtitle")
			Store.contentx.updateContents(headline,subheadline,json)

	loadWechatConfig()
	wx.ready ->
		shareContent =
			title: "与第二代 Mazda CX-5 一起分享你的感官觉醒"
			desc: "与第二代 Mazda CX-5 一起分享你的感官觉醒"
			link: "http://m.giccoo.com/CX5/"
			imgUrl: "http://image.giccoo.com/projects/CX5/img/share.jpg"
			success: ->
				# alert "success"
			cancel: ->
				# alert "cancel"
		wx.onMenuShareTimeline shareContent
		wx.onMenuShareAppMessage shareContent
		wx.onMenuShareQQ shareContent
		wx.onMenuShareWeibo shareContent

	return true

hideSelfPage = (self)->
	# $(self).parents(".page").hide()
	$(".page").removeClass("on")
	



loadWechatConfig = ->
	url = encodeURIComponent window.location.href.split("#")[0]
	hm = document.createElement('script')
	hm.src = "http://api.giccoo.com/api/config?debug=true&url="+url
	s = document.getElementsByTagName('script')[0]
	s.parentNode.insertBefore hm, s
	return
SendNote = (msg,time = 3000)->
	$("body").append("<note title='"+msg+"' time='#{time}'></note>")
	riot.mount("note")
_loader = {}
Loader = (id,title = "",type = "ball",time = 0,more = "")->
	if $("#"+id).length > 0
		return _loader[id].loadend()
	$("body").append("<loader id='"+id+"' title='"+title+"' type='"+type+"' time='#{time}'>#{more}</loader>")
	riot.mount("loader")


# citys
_citys = {}

_citys["北京市"] = {}
_citys["北京市"] = {}
_citys["河北省"] = {}
_citys["河北省"] = {}
_citys["河北省"] = {}
_citys["河北省"] = {}
_citys["河北省"] = {}
_citys["河北省"] = {}
_citys["河北省"] = {}
_citys["河北省"] = {}
_citys["河北省"] = {}
_citys["河北省"] = {}
_citys["黑龙江省"] = {}
_citys["黑龙江省"] = {}
_citys["黑龙江省"] = {}
_citys["黑龙江省"] = {}
_citys["吉林省"] = {}
_citys["吉林省"] = {}
_citys["吉林省"] = {}
_citys["吉林省"] = {}
_citys["辽宁省"] = {}
_citys["辽宁省"] = {}
_citys["辽宁省"] = {}
_citys["辽宁省"] = {}
_citys["辽宁省"] = {}
_citys["辽宁省"] = {}
_citys["辽宁省"] = {}
_citys["内蒙古自治区"] = {}
_citys["内蒙古自治区"] = {}
_citys["内蒙古自治区"] = {}
_citys["内蒙古自治区"] = {}
_citys["内蒙古自治区"] = {}
_citys["山西省"] = {}
_citys["山西省"] = {}
_citys["山西省"] = {}
_citys["天津市"] = {}
_citys["江苏省"] = {}
_citys["江苏省"] = {}
_citys["江苏省"] = {}
_citys["江苏省"] = {}
_citys["江苏省"] = {}
_citys["江苏省"] = {}
_citys["江苏省"] = {}
_citys["江苏省"] = {}
_citys["江苏省"] = {}
_citys["江苏省"] = {}
_citys["江苏省"] = {}
_citys["江苏省"] = {}
_citys["江苏省"] = {}
_citys["江苏省"] = {}
_citys["江苏省"] = {}
_citys["江苏省"] = {}
_citys["江苏省"] = {}
_citys["江苏省"] = {}
_citys["江苏省"] = {}
_citys["江苏省"] = {}
_citys["江苏省"] = {}
_citys["江苏省"] = {}
_citys["江苏省"] = {}
_citys["江苏省"] = {}
_citys["江苏省"] = {}
_citys["上海市"] = {}
_citys["上海市"] = {}
_citys["上海市"] = {}
_citys["上海市"] = {}
_citys["上海市"] = {}
_citys["上海市"] = {}
_citys["浙江省"] = {}
_citys["浙江省"] = {}
_citys["浙江省"] = {}
_citys["浙江省"] = {}
_citys["浙江省"] = {}
_citys["浙江省"] = {}
_citys["浙江省"] = {}
_citys["浙江省"] = {}
_citys["浙江省"] = {}
_citys["浙江省"] = {}
_citys["浙江省"] = {}
_citys["浙江省"] = {}
_citys["浙江省"] = {}
_citys["浙江省"] = {}
_citys["浙江省"] = {}
_citys["浙江省"] = {}
_citys["浙江省"] = {}
_citys["浙江省"] = {}
_citys["浙江省"] = {}
_citys["浙江省"] = {}
_citys["浙江省"] = {}
_citys["浙江省"] = {}
_citys["浙江省"] = {}
_citys["浙江省"] = {}
_citys["福建省"] = {}
_citys["福建省"] = {}
_citys["福建省"] = {}
_citys["福建省"] = {}
_citys["福建省"] = {}
_citys["福建省"] = {}
_citys["福建省"] = {}
_citys["广东省"] = {}
_citys["广东省"] = {}
_citys["广东省"] = {}
_citys["广东省"] = {}
_citys["广东省"] = {}
_citys["广东省"] = {}
_citys["广东省"] = {}
_citys["广东省"] = {}
_citys["广东省"] = {}
_citys["广东省"] = {}
_citys["广东省"] = {}
_citys["广东省"] = {}
_citys["广东省"] = {}
_citys["广东省"] = {}
_citys["广东省"] = {}
_citys["广东省"] = {}
_citys["广东省"] = {}
_citys["广东省"] = {}
_citys["广东省"] = {}
_citys["广东省"] = {}
_citys["广东省"] = {}
_citys["广东省"] = {}
_citys["广东省"] = {}
_citys["广东省"] = {}
_citys["广东省"] = {}
_citys["江西省"] = {}
_citys["广东省"] = {}
_citys["广东省"] = {}
_citys["广东省"] = {}
_citys["广东省"] = {}
_citys["广东省"] = {}
_citys["广西壮族自治区"] = {}
_citys["广西壮族自治区"] = {}
_citys["广西壮族自治区"] = {}
_citys["广西壮族自治区"] = {}
_citys["广西壮族自治区"] = {}
_citys["海南省"] = {}
_citys["海南省"] = {}
_citys["湖南省"] = {}
_citys["湖南省"] = {}
_citys["湖南省"] = {}
_citys["湖南省"] = {}
_citys["湖南省"] = {}
_citys["湖南省"] = {}
_citys["湖南省"] = {}
_citys["湖南省"] = {}
_citys["湖南省"] = {}
_citys["湖南省"] = {}
_citys["江西省"] = {}
_citys["江西省"] = {}
_citys["江西省"] = {}
_citys["江西省"] = {}
_citys["江西省"] = {}
_citys["甘肃省"] = {}
_citys["甘肃省"] = {}
_citys["甘肃省"] = {}
_citys["甘肃省"] = {}
_citys["贵州省"] = {}
_citys["贵州省"] = {}
_citys["贵州省"] = {}
_citys["宁夏回族自治区"] = {}
_citys["青海省"] = {}
_citys["青海省"] = {}
_citys["陕西省"] = {}
_citys["陕西省"] = {}
_citys["陕西省"] = {}
_citys["陕西省"] = {}
_citys["陕西省"] = {}
_citys["陕西省"] = {}
_citys["四川省"] = {}
_citys["四川省"] = {}
_citys["四川省"] = {}
_citys["四川省"] = {}
_citys["四川省"] = {}
_citys["四川省"] = {}
_citys["四川省"] = {}
_citys["四川省"] = {}
_citys["四川省"] = {}
_citys["四川省"] = {}
_citys["四川省"] = {}
_citys["四川省"] = {}
_citys["四川省"] = {}
_citys["四川省"] = {}
_citys["四川省"] = {}
_citys["西藏自治区"] = {}
_citys["新疆维吾尔自治区"] = {}
_citys["新疆维吾尔自治区"] = {}
_citys["新疆维吾尔自治区"] = {}
_citys["新疆维吾尔自治区"] = {}
_citys["新疆维吾尔自治区"] = {}
_citys["云南省"] = {}
_citys["云南省"] = {}
_citys["云南省"] = {}
_citys["云南省"] = {}
_citys["云南省"] = {}
_citys["云南省"] = {}
_citys["重庆市"] = {}
_citys["重庆市"] = {}
_citys["重庆市"] = {}
_citys["重庆市"] = {}
_citys["重庆市"] = {}
_citys["重庆市"] = {}
_citys["安徽省"] = {}
_citys["安徽省"] = {}
_citys["安徽省"] = {}
_citys["安徽省"] = {}
_citys["安徽省"] = {}
_citys["安徽省"] = {}
_citys["安徽省"] = {}
_citys["安徽省"] = {}
_citys["安徽省"] = {}
_citys["安徽省"] = {}
_citys["安徽省"] = {}
_citys["安徽省"] = {}
_citys["安徽省"] = {}
_citys["河南省"] = {}
_citys["河南省"] = {}
_citys["河南省"] = {}
_citys["河南省"] = {}
_citys["河南省"] = {}
_citys["河南省"] = {}
_citys["河南省"] = {}
_citys["河南省"] = {}
_citys["河南省"] = {}
_citys["河南省"] = {}
_citys["河南省"] = {}
_citys["河南省"] = {}
_citys["湖北省"] = {}
_citys["湖北省"] = {}
_citys["湖北省"] = {}
_citys["湖北省"] = {}
_citys["湖北省"] = {}
_citys["湖北省"] = {}
_citys["湖北省"] = {}
_citys["湖北省"] = {}
_citys["湖北省"] = {}
_citys["湖北省"] = {}
_citys["湖北省"] = {}
_citys["山东省"] = {}
_citys["山东省"] = {}
_citys["山东省"] = {}
_citys["山东省"] = {}
_citys["山东省"] = {}
_citys["山东省"] = {}
_citys["山东省"] = {}
_citys["山东省"] = {}
_citys["山东省"] = {}
_citys["山东省"] = {}
_citys["山东省"] = {}
_citys["山东省"] = {}
_citys["山东省"] = {}
_citys["山东省"] = {}
_citys["山东省"] = {}
_citys["山东省"] = {}


_citys["北京市"]["北京市"] = []
_citys["北京市"]["北京市"] = []
_citys["河北省"]["保定市"] = []
_citys["河北省"]["沧州市"] = []
_citys["河北省"]["衡水市"] = []
_citys["河北省"]["秦皇岛市"] = []
_citys["河北省"]["石家庄市"] = []
_citys["河北省"]["石家庄市"] = []
_citys["河北省"]["唐山市"] = []
_citys["河北省"]["邢台市"] = []
_citys["河北省"]["邯郸市"] = []
_citys["河北省"]["保定市"] = []
_citys["黑龙江省"]["大庆市"] = []
_citys["黑龙江省"]["哈尔滨市"] = []
_citys["黑龙江省"]["佳木斯市"] = []
_citys["黑龙江省"]["齐齐哈尔市"] = []
_citys["吉林省"]["吉林市"] = []
_citys["吉林省"]["延边朝鲜族自治州"] = []
_citys["吉林省"]["长春市"] = []
_citys["吉林省"]["长春市"] = []
_citys["辽宁省"]["鞍山市"] = []
_citys["辽宁省"]["大连市"] = []
_citys["辽宁省"]["锦州市"] = []
_citys["辽宁省"]["盘锦市"] = []
_citys["辽宁省"]["沈阳市"] = []
_citys["辽宁省"]["沈阳市"] = []
_citys["辽宁省"]["阜新市"] = []
_citys["内蒙古自治区"]["包头市"] = []
_citys["内蒙古自治区"]["赤峰市"] = []
_citys["内蒙古自治区"]["呼和浩特市"] = []
_citys["内蒙古自治区"]["呼伦贝尔市"] = []
_citys["内蒙古自治区"]["通辽市"] = []
_citys["山西省"]["大同市"] = []
_citys["山西省"]["太原市"] = []
_citys["山西省"]["运城市"] = []
_citys["天津市"]["天津市"] = []
_citys["江苏省"]["苏州市"] = []
_citys["江苏省"]["常州市"] = []
_citys["江苏省"]["淮安市"] = []
_citys["江苏省"]["连云港市"] = []
_citys["江苏省"]["南京市"] = []
_citys["江苏省"]["南京市"] = []
_citys["江苏省"]["南通市"] = []
_citys["江苏省"]["南通市"] = []
_citys["江苏省"]["苏州市"] = []
_citys["江苏省"]["苏州市"] = []
_citys["江苏省"]["苏州市"] = []
_citys["江苏省"]["苏州市"] = []
_citys["江苏省"]["苏州市"] = []
_citys["江苏省"]["苏州市"] = []
_citys["江苏省"]["泰州市"] = []
_citys["江苏省"]["泰州市"] = []
_citys["江苏省"]["无锡市"] = []
_citys["江苏省"]["无锡市"] = []
_citys["江苏省"]["无锡市"] = []
_citys["江苏省"]["宿迁市"] = []
_citys["江苏省"]["徐州市"] = []
_citys["江苏省"]["盐城市"] = []
_citys["江苏省"]["扬州市"] = []
_citys["江苏省"]["镇江市"] = []
_citys["江苏省"]["镇江市"] = []
_citys["上海市"]["上海市"] = []
_citys["上海市"]["上海市"] = []
_citys["上海市"]["上海市"] = []
_citys["上海市"]["上海市"] = []
_citys["上海市"]["上海市"] = []
_citys["上海市"]["上海市"] = []
_citys["浙江省"]["金华市"] = []
_citys["浙江省"]["杭州市"] = []
_citys["浙江省"]["杭州市"] = []
_citys["浙江省"]["杭州市"] = []
_citys["浙江省"]["杭州市"] = []
_citys["浙江省"]["湖州市"] = []
_citys["浙江省"]["嘉兴市"] = []
_citys["浙江省"]["金华市"] = []
_citys["浙江省"]["金华市"] = []
_citys["浙江省"]["丽水市"] = []
_citys["浙江省"]["宁波市"] = []
_citys["浙江省"]["宁波市"] = []
_citys["浙江省"]["宁波市"] = []
_citys["浙江省"]["衢州市"] = []
_citys["浙江省"]["温州市"] = []
_citys["浙江省"]["绍兴市"] = []
_citys["浙江省"]["诸暨市"] = []
_citys["浙江省"]["台州市"] = []
_citys["浙江省"]["台州市"] = []
_citys["浙江省"]["台州市"] = []
_citys["浙江省"]["嘉兴市"] = []
_citys["浙江省"]["温州市"] = []
_citys["浙江省"]["舟山市"] = []
_citys["浙江省"]["乐清市"] = []
_citys["福建省"]["福州市"] = []
_citys["福建省"]["福州市"] = []
_citys["福建省"]["龙岩市"] = []
_citys["福建省"]["泉州市"] = []
_citys["福建省"]["泉州市"] = []
_citys["福建省"]["厦门市"] = []
_citys["福建省"]["漳州市"] = []
_citys["广东省"]["潮州市"] = []
_citys["广东省"]["东莞市"] = []
_citys["广东省"]["东莞市"] = []
_citys["广东省"]["佛山市"] = []
_citys["广东省"]["佛山市"] = []
_citys["广东省"]["佛山市"] = []
_citys["广东省"]["佛山市"] = []
_citys["广东省"]["广州市"] = []
_citys["广东省"]["广州市"] = []
_citys["广东省"]["广州市"] = []
_citys["广东省"]["广州市"] = []
_citys["广东省"]["惠州市"] = []
_citys["广东省"]["江门市"] = []
_citys["广东省"]["揭阳市"] = []
_citys["广东省"]["茂名市"] = []
_citys["广东省"]["梅州市"] = []
_citys["广东省"]["清远市"] = []
_citys["广东省"]["汕头市"] = []
_citys["广东省"]["韶关市"] = []
_citys["广东省"]["深圳市"] = []
_citys["广东省"]["深圳市"] = []
_citys["广东省"]["深圳市"] = []
_citys["广东省"]["深圳市"] = []
_citys["广东省"]["阳江市"] = []
_citys["广东省"]["湛江市"] = []
_citys["江西省"]["赣州市"] = []
_citys["广东省"]["肇庆市"] = []
_citys["广东省"]["中山市"] = []
_citys["广东省"]["中山市"] = []
_citys["广东省"]["珠海市"] = []
_citys["广东省"]["河源市"] = []
_citys["广西壮族自治区"]["百色市"] = []
_citys["广西壮族自治区"]["桂林市"] = []
_citys["广西壮族自治区"]["柳州市"] = []
_citys["广西壮族自治区"]["南宁市"] = []
_citys["广西壮族自治区"]["南宁市"] = []
_citys["海南省"]["海口市"] = []
_citys["海南省"]["三亚市"] = []
_citys["湖南省"]["常德市"] = []
_citys["湖南省"]["郴州市"] = []
_citys["湖南省"]["衡阳市"] = []
_citys["湖南省"]["怀化市"] = []
_citys["湖南省"]["邵阳市"] = []
_citys["湖南省"]["益阳市"] = []
_citys["湖南省"]["永州市"] = []
_citys["湖南省"]["长沙市"] = []
_citys["湖南省"]["长沙市"] = []
_citys["湖南省"]["岳阳市"] = []
_citys["江西省"]["南昌市"] = []
_citys["江西省"]["南昌市"] = []
_citys["江西省"]["上饶市"] = []
_citys["江西省"]["宜春市"] = []
_citys["江西省"]["吉安市"] = []
_citys["甘肃省"]["酒泉市"] = []
_citys["甘肃省"]["兰州市"] = []
_citys["甘肃省"]["庆阳市"] = []
_citys["甘肃省"]["兰州市"] = []
_citys["贵州省"]["贵阳市"] = []
_citys["贵州省"]["贵阳市"] = []
_citys["贵州省"]["遵义市"] = []
_citys["宁夏回族自治区"]["银川市"] = []
_citys["青海省"]["西宁市"] = []
_citys["青海省"]["西宁市"] = []
_citys["陕西省"]["宝鸡市"] = []
_citys["陕西省"]["汉中市"] = []
_citys["陕西省"]["西安市"] = []
_citys["陕西省"]["西安市"] = []
_citys["陕西省"]["咸阳市"] = []
_citys["陕西省"]["榆林市"] = []
_citys["四川省"]["成都市"] = []
_citys["四川省"]["成都市"] = []
_citys["四川省"]["成都市"] = []
_citys["四川省"]["成都市"] = []
_citys["四川省"]["达州市"] = []
_citys["四川省"]["德阳市"] = []
_citys["四川省"]["广元市"] = []
_citys["四川省"]["成都市"] = []
_citys["四川省"]["乐山市"] = []
_citys["四川省"]["泸州市"] = []
_citys["四川省"]["眉山市"] = []
_citys["四川省"]["绵阳市"] = []
_citys["四川省"]["南充市"] = []
_citys["四川省"]["自贡市"] = []
_citys["四川省"]["宜宾市"] = []
_citys["西藏自治区"]["拉萨市"] = []
_citys["新疆维吾尔自治区"]["伊犁哈萨克自治州"] = []
_citys["新疆维吾尔自治区"]["阿克苏市"] = []
_citys["新疆维吾尔自治区"]["乌鲁木齐市"] = []
_citys["新疆维吾尔自治区"]["乌鲁木齐市"] = []
_citys["新疆维吾尔自治区"]["喀什地区"] = []
_citys["云南省"]["昆明市"] = []
_citys["云南省"]["大理市"] = []
_citys["云南省"]["红河哈尼族彝族自治州"] = []
_citys["云南省"]["昆明市"] = []
_citys["云南省"]["玉溪市"] = []
_citys["云南省"]["昆明市"] = []
_citys["重庆市"]["重庆市"] = []
_citys["重庆市"]["重庆市"] = []
_citys["重庆市"]["重庆市"] = []
_citys["重庆市"]["重庆市"] = []
_citys["重庆市"]["重庆市"] = []
_citys["重庆市"]["重庆市"] = []
_citys["安徽省"]["安庆市"] = []
_citys["安徽省"]["蚌埠市"] = []
_citys["安徽省"]["亳州市"] = []
_citys["安徽省"]["滁州市"] = []
_citys["安徽省"]["阜阳市"] = []
_citys["安徽省"]["合肥市"] = []
_citys["安徽省"]["合肥市"] = []
_citys["安徽省"]["淮北市"] = []
_citys["安徽省"]["六安市"] = []
_citys["安徽省"]["马鞍山市"] = []
_citys["安徽省"]["芜湖市"] = []
_citys["安徽省"]["宿州市"] = []
_citys["安徽省"]["宣城市"] = []
_citys["河南省"]["焦作市"] = []
_citys["河南省"]["南阳市"] = []
_citys["河南省"]["商丘市"] = []
_citys["河南省"]["信阳市"] = []
_citys["河南省"]["许昌市"] = []
_citys["河南省"]["郑州市"] = []
_citys["河南省"]["郑州市"] = []
_citys["河南省"]["周口市"] = []
_citys["河南省"]["洛阳市"] = []
_citys["河南省"]["驻马店市"] = []
_citys["河南省"]["新乡市"] = []
_citys["河南省"]["安阳市"] = []
_citys["湖北省"]["恩施土家族苗族自治州"] = []
_citys["湖北省"]["荆门市"] = []
_citys["湖北省"]["荆州市"] = []
_citys["湖北省"]["随州市"] = []
_citys["湖北省"]["武汉市"] = []
_citys["湖北省"]["武汉市"] = []
_citys["湖北省"]["襄阳市"] = []
_citys["湖北省"]["孝感市"] = []
_citys["湖北省"]["十堰市"] = []
_citys["湖北省"]["武汉市"] = []
_citys["湖北省"]["宜昌市"] = []
_citys["山东省"]["滨州市"] = []
_citys["山东省"]["东营市"] = []
_citys["山东省"]["菏泽市"] = []
_citys["山东省"]["济南市"] = []
_citys["山东省"]["济宁市"] = []
_citys["山东省"]["临沂市"] = []
_citys["山东省"]["青岛市"] = []
_citys["山东省"]["青岛市"] = []
_citys["山东省"]["威海市"] = []
_citys["山东省"]["潍坊市"] = []
_citys["山东省"]["烟台市"] = []
_citys["山东省"]["枣庄市"] = []
_citys["山东省"]["临沂市"] = []
_citys["山东省"]["聊城市"] = []
_citys["山东省"]["淄博市"] = []
_citys["山东省"]["泰安市"] = []



_citys["北京市"]["北京市"].push {name:"北京东仁庆开汽车销售服务有限公司"}
_citys["北京市"]["北京市"].push {name:"北京博瑞祥浓汽车销售服务有限公司"}
_citys["河北省"]["保定市"].push {name:"保定市振茂汽车贸易有限公司"}
_citys["河北省"]["沧州市"].push {name:"沧州世纪伟业汽车销售服务有限公司"}
_citys["河北省"]["衡水市"].push {name:"衡水恒祥汽车销售服务有限公司"}
_citys["河北省"]["秦皇岛市"].push {name:"秦皇岛市全弘汽车销售有限公司"}
_citys["河北省"]["石家庄市"].push {name:"河北骏达汽车贸易有限公司"}
_citys["河北省"]["石家庄市"].push {name:"河北兴旅汽车贸易有限公司"}
_citys["河北省"]["唐山市"].push {name:"唐山全弘汽车销售服务有限公司"}
_citys["河北省"]["邢台市"].push {name:"邢台蓝池跃龙汽车服务有限公司"}
_citys["河北省"]["邯郸市"].push {name:"邯郸市信捷中天汽车服务有限公司"}
_citys["河北省"]["保定市"].push {name:"保定市振昊汽车贸易有限公司"}
_citys["黑龙江省"]["大庆市"].push {name:"大庆市瑞玉百申汽车销售有限公司"}
_citys["黑龙江省"]["哈尔滨市"].push {name:"哈尔滨龙洋汽车销售有限公司"}
_citys["黑龙江省"]["佳木斯市"].push {name:"佳木斯鑫维汽车销售服务有限公司"}
_citys["黑龙江省"]["齐齐哈尔市"].push {name:"齐齐哈尔昊海航通汽车销售服务有限公司"}
_citys["吉林省"]["吉林市"].push {name:"吉林市凯利凯汽车贸易有限公司"}
_citys["吉林省"]["延边朝鲜族自治州"].push {name:"延边利达汽车销售服务有限公司"}
_citys["吉林省"]["长春市"].push {name:"吉林省瑞祥汽车销售服务有限公司"}
_citys["吉林省"]["长春市"].push {name:"吉林省汇和丰盛汽车销售服务有限公司"}
_citys["辽宁省"]["鞍山市"].push {name:"辽宁旺达汽车销售服务有限公司"}
_citys["辽宁省"]["大连市"].push {name:"大连众联达贸易有限公司"}
_citys["辽宁省"]["锦州市"].push {name:"锦州盛世鸿达汽车销售服务有限公司"}
_citys["辽宁省"]["盘锦市"].push {name:"盘锦路华汽车销售服务有限公司"}
_citys["辽宁省"]["沈阳市"].push {name:"沈阳新中联汽车销售服务有限公司"}
_citys["辽宁省"]["沈阳市"].push {name:"沈阳大中联汽车销售服务有限公司"}
_citys["辽宁省"]["阜新市"].push {name:"阜新鑫通汽车销售服务有限公司"}
_citys["内蒙古自治区"]["包头市"].push {name:"包头市利丰泰迪汽车服务有限责任公司"}
_citys["内蒙古自治区"]["赤峰市"].push {name:"赤峰新雅迪汽车销售服务有限公司"}
_citys["内蒙古自治区"]["呼和浩特市"].push {name:"内蒙古鸿达汽车销售服务有限公司"}
_citys["内蒙古自治区"]["呼伦贝尔市"].push {name:"呼伦贝尔市恒润汽车贸易有限公司"}
_citys["内蒙古自治区"]["通辽市"].push {name:"通辽市新雅迪汽车销售有限公司"}
_citys["山西省"]["大同市"].push {name:"大同市宝骏汽车销售有限责任公司"}
_citys["山西省"]["太原市"].push {name:"山西马博士汽车销售有限公司"}
_citys["山西省"]["运城市"].push {name:"运城市中星汽车销售有限公司"}
_citys["天津市"]["天津市"].push {name:"中国长安汽车集团天津销售有限公司"}
_citys["江苏省"]["苏州市"].push {name:"常熟豪骏汽车销售服务有限公司"}
_citys["江苏省"]["常州市"].push {name:"常州外汽永嘉汽车销售服务有限公司"}
_citys["江苏省"]["淮安市"].push {name:"淮安雨田广源汽车销售服务有限公司"}
_citys["江苏省"]["连云港市"].push {name:"连云港报业汽车销售服务有限公司"}
_citys["江苏省"]["南京市"].push {name:"南京天和汽车销售服务有限公司"}
_citys["江苏省"]["南京市"].push {name:"南京天瑞汽车销售服务有限公司"}
_citys["江苏省"]["南通市"].push {name:"南通博泰隆汽车贸易有限公司"}
_citys["江苏省"]["南通市"].push {name:"南通文峰恒丰汽车销售服务有限公司"}
_citys["江苏省"]["苏州市"].push {name:"昆山富骏汽车销售服务有限公司"}
_citys["江苏省"]["苏州市"].push {name:"苏州瀚龙汽车销售有限公司"}
_citys["江苏省"]["苏州市"].push {name:"苏州广特汽车销售服务有限公司"}
_citys["江苏省"]["苏州市"].push {name:"苏州恒昌汽车销售有限公司"}
_citys["江苏省"]["苏州市"].push {name:"苏州恒合汽车销售有限公司"}
_citys["江苏省"]["苏州市"].push {name:"太仓华洋汽车销售服务有限公司"}
_citys["江苏省"]["泰州市"].push {name:"泰州天顺达汽车贸易有限公司"}
_citys["江苏省"]["泰州市"].push {name:"泰兴市天利达汽车贸易有限公司"}
_citys["江苏省"]["无锡市"].push {name:"无锡市东方运达汽车销售服务有限公司"}
_citys["江苏省"]["无锡市"].push {name:"江阴市吉威汽车有限公司"}
_citys["江苏省"]["无锡市"].push {name:"无锡嘉现汽车销售服务有限公司"}
_citys["江苏省"]["宿迁市"].push {name:"宿迁永泓汽车销售服务有限公司"}
_citys["江苏省"]["徐州市"].push {name:"徐州晖宏汽车贸易有限公司"}
_citys["江苏省"]["盐城市"].push {name:"盐城申大汽车销售服务有限公司"}
_citys["江苏省"]["扬州市"].push {name:"扬州天盛达汽车贸易有限公司"}
_citys["江苏省"]["镇江市"].push {name:"镇江天佑汽车销售服务有限公司"}
_citys["江苏省"]["镇江市"].push {name:"丹阳天盛汽车销售服务有限公司"}
_citys["上海市"]["上海市"].push {name:"上海恒昌银都汽车销售有限公司"}
_citys["上海市"]["上海市"].push {name:"上海绿地浦成汽车销售服务有限公司"}
_citys["上海市"]["上海市"].push {name:"上海弘绅汽车销售服务有限公司"}
_citys["上海市"]["上海市"].push {name:"上海弘翔汽车销售服务有限公司"}
_citys["上海市"]["上海市"].push {name:"上海绿地汽车销售有限公司"}
_citys["上海市"]["上海市"].push {name:"上海恒昌汽车销售有限公司"}
_citys["浙江省"]["金华市"].push {name:"浙江中振贸易有限公司"}
_citys["浙江省"]["杭州市"].push {name:"杭州骏兴汽车有限公司"}
_citys["浙江省"]["杭州市"].push {name:"浙江裕菲汽车销售服务有限公司"}
_citys["浙江省"]["杭州市"].push {name:"杭州骏田汽车有限公司"}
_citys["浙江省"]["杭州市"].push {name:"杭州富阳骏豪汽车有限公司"}
_citys["浙江省"]["湖州市"].push {name:"湖州长鸿汽车销售服务有限公司"}
_citys["浙江省"]["嘉兴市"].push {name:"嘉兴市中信汽车销售服务有限公司"}
_citys["浙江省"]["金华市"].push {name:"金华振宇汽车贸易有限公司"}
_citys["浙江省"]["金华市"].push {name:"义乌市祥马汽车销售服务有限公司"}
_citys["浙江省"]["丽水市"].push {name:"丽水天盛汽车销售服务有限公司"}
_citys["浙江省"]["宁波市"].push {name:"宁波鑫之源汽车有限公司"}
_citys["浙江省"]["宁波市"].push {name:"宁海德盛汽车销售服务有限公司"}
_citys["浙江省"]["宁波市"].push {name:"宁波鑫驰汽车有限公司"}
_citys["浙江省"]["衢州市"].push {name:"衢州龙达汽车销售服务有限公司"}
_citys["浙江省"]["温州市"].push {name:"瑞安市深发汽车销售服务有限公司"}
_citys["浙江省"]["绍兴市"].push {name:"绍兴国赛汽车有限公司"}
_citys["浙江省"]["诸暨市"].push {name:"诸暨国赛汽车有限公司"}
_citys["浙江省"]["台州市"].push {name:"台州通利达汽车有限公司"}
_citys["浙江省"]["台州市"].push {name:"台州市诺亚汽车贸易有限公司"}
_citys["浙江省"]["台州市"].push {name:"台州诺亚方舟汽车有限公司"}
_citys["浙江省"]["嘉兴市"].push {name:"桐乡市振华汽车贸易有限公司"}
_citys["浙江省"]["温州市"].push {name:"温州中信汽车销售服务有限公司"}
_citys["浙江省"]["舟山市"].push {name:"舟山凯桥汽车销售有限公司"}
_citys["浙江省"]["乐清市"].push {name:"温州广发汽车销售服务有限公司"}
_citys["福建省"]["福州市"].push {name:"福州龙益汽车销售服务有限公司"}
_citys["福建省"]["福州市"].push {name:"福建源和汽车销售服务有限公司"}
_citys["福建省"]["龙岩市"].push {name:"龙岩富骏汽车有限公司"}
_citys["福建省"]["泉州市"].push {name:"泉州益成汽车贸易发展有限公司"}
_citys["福建省"]["泉州市"].push {name:"泉州盛成汽车销售服务有限公司"}
_citys["福建省"]["厦门市"].push {name:"厦门市盛成汽车服务有限公司"}
_citys["福建省"]["漳州市"].push {name:"漳州富骏汽车有限公司"}
_citys["广东省"]["潮州市"].push {name:"潮州市德隆汽车贸易有限公司"}
_citys["广东省"]["东莞市"].push {name:"东莞市通益汽车销售服务有限公司"}
_citys["广东省"]["东莞市"].push {name:"东莞市莞泰通益汽车销售服务有限公司"}
_citys["广东省"]["佛山市"].push {name:"佛山海迪汽车有限公司"}
_citys["广东省"]["佛山市"].push {name:"佛山骏迪汽车有限公司"}
_citys["广东省"]["佛山市"].push {name:"佛山市耀田汽车有限公司"}
_citys["广东省"]["佛山市"].push {name:"佛山智迪汽车有限公司"}
_citys["广东省"]["广州市"].push {name:"广州市福犸汽车有限公司"}
_citys["广东省"]["广州市"].push {name:"广州市华灵汽车销售有限公司"}
_citys["广东省"]["广州市"].push {name:"广州市东富汽车销售服务有限公司"}
_citys["广东省"]["广州市"].push {name:"广州市华刊汽车有限公司"}
_citys["广东省"]["惠州市"].push {name:"惠州市通力达汽车销售服务有限公司"}
_citys["广东省"]["江门市"].push {name:"江门市振宇汽车销售服务有限公司"}
_citys["广东省"]["揭阳市"].push {name:"揭阳恒诚汽车贸易有限公司"}
_citys["广东省"]["茂名市"].push {name:"茂名市京粤名达汽车有限公司"}
_citys["广东省"]["梅州市"].push {name:"梅州市通利华汽车服务有限公司"}
_citys["广东省"]["清远市"].push {name:"清远市骏昇汽车销售服务有限公司"}
_citys["广东省"]["汕头市"].push {name:"汕头市通利华汽车服务有限公司"}
_citys["广东省"]["韶关市"].push {name:"韶关市荣和通达汽车贸易有限公司"}
_citys["广东省"]["深圳市"].push {name:"深圳通利华宝安汽车销售服务有限公司"}
_citys["广东省"]["深圳市"].push {name:"劲达汽车销售服务(深圳)有限公司"}
_citys["广东省"]["深圳市"].push {name:"深圳通利华福滨汽车服务有限公司"}
_citys["广东省"]["深圳市"].push {name:"深圳通利华龙城汽车销售服务有限公司"}
_citys["广东省"]["阳江市"].push {name:"阳江市通利华汽车服务有限公司"}
_citys["广东省"]["湛江市"].push {name:"湛江合田汽车销售服务有限公司"}
_citys["江西省"]["赣州市"].push {name:"赣州腾马汽车服务有限公司"}
_citys["广东省"]["肇庆市"].push {name:"肇庆美轮庆达汽车有限公司"}
_citys["广东省"]["中山市"].push {name:"中山市万事得汽车销售服务有限公司"}
_citys["广东省"]["中山市"].push {name:"中山市中洋汽车贸易有限公司"}
_citys["广东省"]["珠海市"].push {name:"珠海市新通达汽车销售服务有限公司"}
_citys["广东省"]["河源市"].push {name:"河源市宝恒汽车销售有限公司"}
_citys["广西壮族自治区"]["百色市"].push {name:"百色万马汽车销售服务有限公司"}
_citys["广西壮族自治区"]["桂林市"].push {name:"桂林鑫广达博骏汽车销售服务有限公司"}
_citys["广西壮族自治区"]["柳州市"].push {name:"柳州鑫广达博骏汽车销售服务有限公司"}
_citys["广西壮族自治区"]["南宁市"].push {name:"广西鑫广达长久汽车销售服务有限公司"}
_citys["广西壮族自治区"]["南宁市"].push {name:"广西弘骏汽车销售服务有限公司"}
_citys["海南省"]["海口市"].push {name:"海口优之杰汽车服务有限公司"}
_citys["海南省"]["三亚市"].push {name:"三亚优之杰汽车销售服务有限公司"}
_citys["湖南省"]["常德市"].push {name:"常德万通汽车销售服务有限公司"}
_citys["湖南省"]["郴州市"].push {name:"郴州万马汽车销售服务有限公司"}
_citys["湖南省"]["衡阳市"].push {name:"衡阳津湘万华汽车销售服务有限公司"}
_citys["湖南省"]["怀化市"].push {name:"怀化市恒旺汽车销售服务有限公司"}
_citys["湖南省"]["邵阳市"].push {name:"邵阳津湘万华汽车销售服务有限公司"}
_citys["湖南省"]["益阳市"].push {name:"益阳福顺福达汽车销售服务有限公司"}
_citys["湖南省"]["永州市"].push {name:"永州津湘万达汽车销售服务有限公司"}
_citys["湖南省"]["长沙市"].push {name:"湖南万达汽车销售服务有限公司"}
_citys["湖南省"]["长沙市"].push {name:"湖南万华汽车销售服务有限公司"}
_citys["湖南省"]["岳阳市"].push {name:"岳阳万达汽车销售服务有限公司"}
_citys["江西省"]["南昌市"].push {name:"江西江铃海外马自达汽车销售服务有限公司"}
_citys["江西省"]["南昌市"].push {name:"江西江铃海外福马汽车销售服务有限公司"}
_citys["江西省"]["上饶市"].push {name:"上饶市福铃达汽车有限公司"}
_citys["江西省"]["宜春市"].push {name:"宜春津湘万华汽车销售服务有限公司"}
_citys["江西省"]["吉安市"].push {name:"江西金乐玛汽车销售服务有限公司"}
_citys["甘肃省"]["酒泉市"].push {name:"酒泉海博汽车销售有限公司"}
_citys["甘肃省"]["兰州市"].push {name:"甘肃海丰汽车销售有限公司"}
_citys["甘肃省"]["庆阳市"].push {name:"庆阳景驰汽车销售服务有限公司"}
_citys["甘肃省"]["兰州市"].push {name:"甘肃海悦汽车销售有限公司"}
_citys["贵州省"]["贵阳市"].push {name:"贵州十和田吉胜汽车有限公司"}
_citys["贵州省"]["贵阳市"].push {name:"贵州康众汽车销售服务有限公司"}
_citys["贵州省"]["遵义市"].push {name:"贵州康胜汽车销售服务有限公司"}
_citys["宁夏回族自治区"]["银川市"].push {name:"银川瑞鼎汽车销售服务有限公司"}
_citys["青海省"]["西宁市"].push {name:"青海金岛星马汽车销售有限公司"}
_citys["青海省"]["西宁市"].push {name:"青海海众汽车销售有限公司"}
_citys["陕西省"]["宝鸡市"].push {name:"宝鸡广行汽车销售服务有限公司"}
_citys["陕西省"]["汉中市"].push {name:"汉中逸丰汽车销售服务有限公司"}
_citys["陕西省"]["西安市"].push {name:"西安骏雄汽车销售服务有限公司"}
_citys["陕西省"]["西安市"].push {name:"陕西广行汽车销售服务有限公司"}
_citys["陕西省"]["咸阳市"].push {name:"咸阳伟益汽车销售服务有限公司"}
_citys["陕西省"]["榆林市"].push {name:"陕西榆林金岛汽车销售有限公司"}
_citys["四川省"]["成都市"].push {name:"成都东成安邦汽车销售服务有限公司"}
_citys["四川省"]["成都市"].push {name:"成都通安汽车有限公司"}
_citys["四川省"]["成都市"].push {name:"四川西星实业发展有限公司"}
_citys["四川省"]["成都市"].push {name:"四川港宏鼎鑫汽车销售服务有限公司"}
_citys["四川省"]["达州市"].push {name:"成都万友经济技术开发总公司达川分公司"}
_citys["四川省"]["德阳市"].push {name:"德阳宏羽凯威汽车销售服务有限公司"}
_citys["四川省"]["广元市"].push {name:"广元驭马车业有限公司"}
_citys["四川省"]["成都市"].push {name:"成都金堂驭马车业有限公司"}
_citys["四川省"]["乐山市"].push {name:"乐山市联合东升汽车销售服务有限公司"}
_citys["四川省"]["泸州市"].push {name:"泸州安马车业有限公司"}
_citys["四川省"]["眉山市"].push {name:"眉山市御程汽车销售服务有限公司"}
_citys["四川省"]["绵阳市"].push {name:"绵阳星鸿达汽车销售服务有限公司"}
_citys["四川省"]["南充市"].push {name:"南充通安汽车有限公司"}
_citys["四川省"]["自贡市"].push {name:"自贡市志云汽车维修有限公司"}
_citys["四川省"]["宜宾市"].push {name:"成都万友经济技术开发总公司宜宾分公司"}
_citys["西藏自治区"]["拉萨市"].push {name:"西藏新东方汽车销售服务有限公司"}
_citys["新疆维吾尔自治区"]["伊犁哈萨克自治州"].push {name:"新疆天汇华龙汽车销售服务有限公司"}
_citys["新疆维吾尔自治区"]["阿克苏市"].push {name:"阿克苏天汇华荣汽车销售服务有限公司"}
_citys["新疆维吾尔自治区"]["乌鲁木齐市"].push {name:"新疆天汇永达汽车销售服务有限责任公司"}
_citys["新疆维吾尔自治区"]["乌鲁木齐市"].push {name:"新疆汇众天祥汽车贸易有限公司"}
_citys["新疆维吾尔自治区"]["喀什地区"].push {name:"新疆广利汽车有限公司"}
_citys["云南省"]["昆明市"].push {name:"云南万福汽车销售服务有限公司安宁分公司"}
_citys["云南省"]["大理市"].push {name:"云南万友汽车销售服务有限公司大理泛亚分公司"}
_citys["云南省"]["红河哈尼族彝族自治州"].push {name:"红河万佳汽车销售服务有限公司"}
_citys["云南省"]["昆明市"].push {name:"昆明京源达汽车销售有限责任公司"}
_citys["云南省"]["玉溪市"].push {name:"玉溪市珊瑚汽车销售服务有限公司"}
_citys["云南省"]["昆明市"].push {name:"云南行无忧汽车销售有限公司"}
_citys["重庆市"]["重庆市"].push {name:"重庆市渝高汽车销售服务有限公司"}
_citys["重庆市"]["重庆市"].push {name:"重庆银马汽车销售服务有限公司"}
_citys["重庆市"]["重庆市"].push {name:"重庆锦铂汽车销售有限公司"}
_citys["重庆市"]["重庆市"].push {name:"重庆金团汽车销售服务有限公司"}
_citys["重庆市"]["重庆市"].push {name:"重庆市驰星汽车销售有限公司"}
_citys["重庆市"]["重庆市"].push {name:"重庆骐骊来汽车销售服务有限公司"}
_citys["安徽省"]["安庆市"].push {name:"安庆宜之星汽车销售服务有限公司"}
_citys["安徽省"]["蚌埠市"].push {name:"蚌埠市祥隆汽车销售有限责任公司"}
_citys["安徽省"]["亳州市"].push {name:"亳州国隆汽车销售服务有限公司"}
_citys["安徽省"]["滁州市"].push {name:"安徽泓德汽车销售服务有限公司"}
_citys["安徽省"]["阜阳市"].push {name:"阜阳市广旭汽车销售服务有限公司"}
_citys["安徽省"]["合肥市"].push {name:"合肥建银海康达汽车销售有限公司"}
_citys["安徽省"]["合肥市"].push {name:"合肥新海和信汽车有限公司"}
_citys["安徽省"]["淮北市"].push {name:"淮北市达马汽车销售服务有限公司"}
_citys["安徽省"]["六安市"].push {name:"安徽裕兴隆汽车销售服务有限公司"}
_citys["安徽省"]["马鞍山市"].push {name:"马鞍山中冠汽车销售服务有限公司"}
_citys["安徽省"]["芜湖市"].push {name:"芜湖瑞马汽车销售服务有限公司"}
_citys["安徽省"]["宿州市"].push {name:"宿州市禹潞汽车销售服务有限公司"}
_citys["安徽省"]["宣城市"].push {name:"安徽明泰汽车销售服务有限公司"}
_citys["河南省"]["焦作市"].push {name:"焦作市宏海轿车销售服务有限公司"}
_citys["河南省"]["南阳市"].push {name:"南阳华隆汽车贸易有限公司"}
_citys["河南省"]["商丘市"].push {name:"商丘市耀辉汽车销售服务有限公司"}
_citys["河南省"]["信阳市"].push {name:"信阳市盛达汽车销售服务有限公司"}
_citys["河南省"]["许昌市"].push {name:"许昌市锦天汽车销售服务有限公司"}
_citys["河南省"]["郑州市"].push {name:"河南新宏源汽车销售服务有限公司"}
_citys["河南省"]["郑州市"].push {name:"河南新鑫源汽车销售有限公司"}
_citys["河南省"]["周口市"].push {name:"周口鑫马汽车销售服务有限公司"}
_citys["河南省"]["洛阳市"].push {name:"洛阳高隆汽车销售有限公司"}
_citys["河南省"]["驻马店市"].push {name:"驻马店市腾达汽车销售服务有限公司"}
_citys["河南省"]["新乡市"].push {name:"新乡市新之源汽车销售有限公司"}
_citys["河南省"]["安阳市"].push {name:"安阳市众帮汽车销售有限公司"}
_citys["湖北省"]["恩施土家族苗族自治州"].push {name:"恩施大晟汽车销售有限公司"}
_citys["湖北省"]["荆门市"].push {name:"荆门建银金马汽车销售服务有限公司"}
_citys["湖北省"]["荆州市"].push {name:"荆州建银金马汽车销售有限公司"}
_citys["湖北省"]["随州市"].push {name:"随州市鑫达汽车销售服务有限公司"}
_citys["湖北省"]["武汉市"].push {name:"武汉龙泰元汽车销售服务有限公司"}
_citys["湖北省"]["武汉市"].push {name:"武汉银马汽车销售有限公司"}
_citys["湖北省"]["襄阳市"].push {name:"襄阳建银金马汽车销售有限公司"}
_citys["湖北省"]["孝感市"].push {name:"湖北爱康宏通汽车销售服务有限公司"}
_citys["湖北省"]["十堰市"].push {name:"十堰海阜汽车销售服务有限公司"}
_citys["湖北省"]["武汉市"].push {name:"武汉建银福马汽车销售有限公司"}
_citys["湖北省"]["宜昌市"].push {name:"宜昌大颜贸易有限责任公司"}
_citys["山东省"]["滨州市"].push {name:"滨州市车博士汽车维修服务有限公司"}
_citys["山东省"]["东营市"].push {name:"东营天顺汽车销售服务有限责任公司"}
_citys["山东省"]["菏泽市"].push {name:"菏泽祥通汽车销售服务有限公司"}
_citys["山东省"]["济南市"].push {name:"济南震东汽车有限公司"}
_citys["山东省"]["济宁市"].push {name:"济宁骁华汽车销售服务有限公司"}
_citys["山东省"]["临沂市"].push {name:"临沂永华汽车销售服务有限公司"}
_citys["山东省"]["青岛市"].push {name:"青岛安隆达汽车销售有限公司"}
_citys["山东省"]["青岛市"].push {name:"青岛恒金汽车销售有限公司"}
_citys["山东省"]["威海市"].push {name:"威海金驰汽车销售服务有限公司"}
_citys["山东省"]["潍坊市"].push {name:"潍坊东裕车业发展有限公司"}
_citys["山东省"]["烟台市"].push {name:"烟台裕顺汽车服务有限公司"}
_citys["山东省"]["枣庄市"].push {name:"枣庄贵翔汽车销售服务有限公司"}
_citys["山东省"]["临沂市"].push {name:"临沂骁华汽车销售服务有限公司"}
_citys["山东省"]["聊城市"].push {name:"聊城津湘万华汽车销售服务有限公司"}
_citys["山东省"]["淄博市"].push {name:"淄博安华汽车销售服务有限公司"}
_citys["山东省"]["泰安市"].push {name:"泰安津湘万隆汽车销售服务有限公司"}

