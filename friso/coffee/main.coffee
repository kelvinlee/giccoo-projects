# @codekit-prepend "coffee/css3Prefix"
# @codekit-prepend "../../libs/coffee/requestanimation"
# @codekit-prepend "../../libs/coffee/qrcode"

Store = {}
scrollTop = 0
defaultTop = 0
getdefaultTop = false
shareContent =
	title: "嘿,这里是发现天真和脑洞的「知乎北鼻版」"
	desc: "小宝宝的问题千奇百怪，又萌又天真。如果有一个「知乎北鼻版」 会发生神马?"
	link: "http://m.giccoo.com/friso/"
	imgUrl: "http://m.giccoo.com/friso/img/share.jpg"
	success: ->
	cancel: ->

defaultInfo = if localStorage.getItem("defaultInfo") then JSON.parse(localStorage.getItem("defaultInfo")) else [
	{
		id: 1,
		question: "我们喝了奶牛妈妈的奶，小牛会伤心吗?",
		answer1: "奶牛妈妈有很多奶，多到小牛吃不完。在荷兰菲仕兰农场里，农夫精心照顾奶牛妈妈和小牛，就像一家人一样。农夫还会拿自己的手指给小牛练习吸奶的动作，所以奶牛妈妈和小牛一定乐意分享牛奶给家人……",
		answer1by: "嗷小明",
		answer1img: null,
		answer1like: 0,
		answer2: "因为小牛学会了分享啊，他把自己喝的牛奶分享给你，你也要学会分享，把自己的东西分享给别的小朋友。",
		answer2by: "不吃栗子",
		answer2img: null,
		answer2like: 0,
		answer3: null,
		answer3by: null,
		answer3img: null,
		answer3like: 0,
		like: 0,
		focus: 421,
		answers: 49,
		link: "https://www.zhihu.com/question/65373045"
	},
	{
		id: 2,
		question: "为什么喝完牛奶之后会有白胡子？",
		answer1: "因为牛奶亲了你一下吖",
		answer1by: "左左",
		answer1img: null,
		answer1like: 0,
		answer2: "小小的白胡子是牛奶中的营养精华的天然乳脂，它比水分子有更强的吸附力，沾在嘴边就变成宝宝的小白胡子啦。皇家美素佳儿奶粉保留了牛奶中的这一道天然营养精华，所以宝宝喝的时候一定要舔干净哟。",
		answer2by: "大球球",
		answer2img: null,
		answer2like: 5,
		answer3: null,
		answer3by: null,
		answer3img: null,
		answer3like: 0,
		like: 0,
		focus: 160,
		answers: 33,
		link: "https://www.zhihu.com/question/65372977"
	},
	{
		id: 3,
		question: "我喝的奶粉为什么有妈妈的味道？",
		answer1: "是爱的味道呀～",
		answer1by: "莫小莫姑娘",
		answer1img: null,
		answer1like: 0,
		answer2: "妈妈的味道，其实就是新鲜牛奶和皇家美素佳儿奶粉中天然乳脂的味道，天然乳脂含有丰富的天然营养精华，更加自然接近母乳，当然就有妈妈的味道啦。",
		answer2by: "xiaochu",
		answer2img: null,
		answer2like: 0,
		answer3: null,
		answer3by: null,
		answer3img: null,
		answer3like: 0,
		like: 0,
		focus: 130,
		answers: 19,
		link: "https://www.zhihu.com/question/65373089"
	},
	{
		id: 4,
		question: "大象走路的时候，会不会踩到自己的鼻子？",
		answer1: "小象可能会踩到的，就像是我们小时候走路老容易摔跤，后来多踩几次就会有经验了，知道脚和鼻子怎么配合了。等小象变成大象了，再踩到的机会就少了。",
		answer1by: "哇哈哈",
		answer1img: null,
		answer1like: 0,
		answer2: "会，所以大象妈妈告诉小象要抬头挺胸快快长高，宝宝也是哦！",
		answer2by: "皇家美素佳儿",
		answer2img: null,
		answer2like: 0,
		answer3: null,
		answer3by: null,
		answer3img: null,
		answer3like: 0,
		like: 0,
		focus: 215,
		answers: 28,
		link: "https://www.zhihu.com/question/65373183"
	},
	{
		id: 5,
		question: "妈妈，你的肚子里有厕所吗？",
		answer1: "妈妈的肚子很神奇，什么都有。有棒棒糖，西瓜，菠萝，大鸡腿，烤鸭，麻辣烫，火锅…很多好吃的～有好玩的，变形金刚，洋娃娃，游乐场…很多好玩的～",
		answer1by: "郭羽靖",
		answer1img: null,
		answer1like: 0,
		answer2: "宝宝你在妈妈肚子里还不会上厕所，等你出生之后小肚肚才开始学会生产便便的，它跟你一样还小，所以现在你要喝皇家美素佳儿，好好保护它。",
		answer2by: "骆驼君",
		answer2img: null,
		answer2like: 0,
		answer3: null,
		answer3by: null,
		answer3img: null,
		answer3like: 0,
		like: 0,
		focus: 197,
		answers: 12,
		link: "https://www.zhihu.com/question/65375080"
	},
	{
		id: 6,
		question: "我的眼睛很小，怎么能看到那么大的世界？",
		answer1: "宝贝你站得越高就会看得越远，你看到的世界也会越大哦，如果你像航天员叔叔们站到外太空看世界的话，那你能看清楚整个世界哦~",
		answer1by: "SK英国皇家成长中心",
		answer1img: null,
		answer1like: 0,
		answer2: "皇家美素佳儿帮助宝宝快快长高，让小眼睛看到更大的世界。",
		answer2by: "皇家美素佳儿",
		answer2img: null,
		answer2like: 0,
		answer3: null,
		answer3by: null,
		answer3img: null,
		answer3like: 0,
		like: 0,
		focus: 190,
		answers: 29,
		link: "https://www.zhihu.com/question/65340831"
	},
	{
		id: 7,
		question: "长颈鹿冬天要戴多长的围巾？",
		answer1: "－长颈鹿冬天只要戴正常长度但是好看的围巾。因为围巾不是用来保暖的，是用来搭配的～",
		answer1by: " 何方",
		answer1img: null,
		answer1like: 0,
		answer2: "喝皇家美素佳儿才能跟长颈鹿一样快快长高哦！",
		answer2by: "皇家美素佳儿",
		answer2img: null,
		answer2like: 0,
		answer3: null,
		answer3by: null,
		answer3img: null,
		answer3like: 0,
		like: 0,
		focus: 178,
		answers: 28,
		link: "https://www.zhihu.com/question/65373153"
	},
	{
		id: 8,
		question: "屁是一个泡泡嘛？它为什么臭臭的额，还会尖叫？",
		answer1: "屁啊～是你肚子里的食物的最后叹息。有的食物很开心地分解了，有的有些不高兴，所以叹气是臭臭的。肚子里站岗警察在赶走他们的时候，他们还会发出尖叫声。 ",
		answer1by: "郭羽靖",
		answer1img: null,
		answer1like: 0,
		answer2: "好吸收的皇家美素佳儿奶粉，守护宝宝由内而外身体强健，延续妈妈爱的力量，陪伴宝宝珍贵成长。",
		answer2by: "皇家美素佳儿",
		answer2img: null,
		answer2like: 0,
		answer3: null,
		answer3by: null,
		answer3img: null,
		answer3like: 0,
		like: 0,
		focus: 180,
		answers: 10,
		link: "https://www.zhihu.com/question/65341250"
	},
	{
		id: 9,
		question: "给蛇打结，它会和我一样聪明地解开吗？",
		answer1: "你解开结是解开了另一个东西，而蛇是舒展自己的身体，让它回到让自己舒服的状态，就像你盘腿坐，然后把腿伸直一样自然，不难~",
		answer1by: " 嗷呜",
		answer1img: null,
		answer1like: 0,
		answer2: "皇家美素佳儿助力宝宝骨骼发育，像小蛇宝宝一样健康灵活、舒展自如。",
		answer2by: "皇家美素佳儿",
		answer2img: null,
		answer2like: 0,
		answer3: null,
		answer3by: null,
		answer3img: null,
		answer3like: 0,
		like: 0,
		focus: 159,
		answers: 28,
		link: "https://www.zhihu.com/question/65373216"
	},
	{
		id: 10,
		question: "世界上哪里的小朋友最高？",
		answer1: "勇于承认错误的小盆友最高，因为勇气； 乐观开朗的小盆友最高，因为心态；",
		answer1by: "婗同学",
		answer1img: null,
		answer1like: 0,
		answer2: "荷兰的勇敢乐观开朗的小朋友最高，因为皇家美素佳儿。",
		answer2by: "皇家美素佳儿",
		answer2img: null,
		answer2like: 0,
		answer3: null,
		answer3by: null,
		answer3img: null,
		answer3like: 0,
		like: 0,
		focus: 154,
		answers: 19,
		link: "https://www.zhihu.com/question/65342493"
	}
]

riot.mount("*")

updateLoad = ->
	$.ajax
		type: "get"
		url: "http://api.giccoo.com/friso/list/"
		dataType: 'json'
		data: null
		success: (msg)->
			if msg.list.length > 1
				defaultInfo = msg.list
				localStorage.setItem("defaultInfo",JSON.stringify(defaultInfo))
				Store.friso.updateContents(defaultInfo)
				updateLikeOn()
				console.log "update loaded"
		error: (error)->

window.onscroll = (evt)->
	top = document.scrollingElement.scrollTop
	# console.log top,$(".logo").offset().top
	if getdefaultTop && (top > defaultTop)
		$(".logo").addClass "scroll"
	else
		$(".logo").removeClass "scroll"

$(document).ready ->
	$("body").on "click",".likeanswer", ->
		id = $(this).parents(".question-box").attr("id").replace("q-","")
		rel = $(this).attr("rel")
		if $(this).is(".on")
			return false
		$.ajax
			type: "get"
			url: "http://api.giccoo.com/friso/list/update/"
			dataType: 'json'
			data: {id: id, rel: rel}
			success: (msg)->
				for item in defaultInfo
					if item.id is parseInt id
						item["answer#{rel}like"] += 1
				localStorage.setItem("defaultInfo",JSON.stringify(defaultInfo))
				localStorage.setItem("id-#{id}-#{rel}","true")
				Store.friso.updateContents(defaultInfo)
				updateLikeOn()
			error: (error)->

	updateLikeOn()

updateLikeOn = ->
	$(".question-box").each (i)->
		id = parseInt $(this).attr("id").replace "q-",""
		for i in [1...3]
			if localStorage.getItem("id-#{id}-#{i}")
				$(".likeanswer[rel=#{i}]",this).addClass "on"



window.onload = ->
	MK = $("body").width()/$("body").height()
	defaultTop = $(".logo").offset().top
	getdefaultTop = true
	if $("body").height() <= 460 or MK > 0.65
		$("body").addClass "iphone4"

	$(".q-list").on "click",".title", (evt)->
		# console.log "abc",$(this).parent()
		if $(this).parent().is(".on")
			$(this).parent().removeClass "on"
		else
			$(this).parent().addClass "on"
	$(".main .logo").on "click", (evt)->
			scrollTop = document.scrollingElement.scrollTop
			document.body.style.top = -scrollTop + 'px'
			$("body").addClass "pop-open"
			$(".pop").addClass "on"
			_hmt.push(['_trackEvent', "friso", "移动端浮层", "打开", "-"])
	
	$(".pop .close").on "click", (evt)->
		$("body").removeClass "pop-open"
		$(".pop").removeClass "on"
		document.scrollingElement.scrollTop = scrollTop
		document.body.style.top = 0
		_hmt.push(['_trackEvent', "friso", "移动端浮层", "关闭", "-"])

	$(".main,.pop").on "click","a", (evt)->
		_hmt.push(['_trackEvent', "friso", "页面外跳", ""+$(this).attr("href"), "-"])
		self = this
		setTimeout ->
			window.location.href = $(self).attr("href")
		,10

	if IsPC() and $(".main").is(".mobile")
		return window.location.href = "pc.html"


	updateLoad()
	if wx?
		console.log "load wx"
		# wx.error (res)->
		# 	console.log res
		wx.ready ->	
			wx.onMenuShareTimeline shareContent
			wx.onMenuShareAppMessage shareContent
			wx.onMenuShareQQ shareContent
			wx.onMenuShareWeibo shareContent
		loadWechatConfig()
	return true

IsPC = ->
	userAgentInfo = navigator.userAgent
	Agents = new Array('Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod')
	flag = true
	v = 0
	while v < Agents.length
		if userAgentInfo.indexOf(Agents[v]) > 0
			flag = false
			break
		v++
	flag
loadWechatConfig = ->
	url = encodeURIComponent window.location.href.split("#")[0]
	hm = document.createElement('script')
	hm.src = "http://api.giccoo.com/api/config?url="+url
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





