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
		question: "我胸前有两颗扣子，小牛为什么比我多？",
		answer1: "宝宝，那是因为小牛的「衣服」比你大啊！",
		answer1by: "何俊",
		answer1img: null,
		answer1like: 378,
		answer2: "奶牛有四颗纽扣，哺乳能力和人相比更强。喝妈妈的奶是宝宝直接获取营养的方式。可妈妈要上班，哺乳能力有限，这时可以找奶牛妈妈帮忙。皇家美素佳儿凝萃1：25天然营养精华，自然接近母乳，可以帮助妈妈平稳地度过转奶期。",
		answer2by: "程一",
		answer2img: null,
		answer2like: 245,
		answer3: null,
		answer3by: null,
		answer3img: null,
		answer3like: 0,
		like: 0,
		focus: 490,
		answers: 28,
		link: "https://www.zhihu.com/question/65693033"
	},
	{
		id: 2,
		question: "妈妈，小鱼的刺会不会扎到自己？",
		answer1: "鱼的身体里有一位默默的守护者，它叫做结缔组织，像麦芽糖的糖裹着小刺，保护小鱼的身体不受伤。",
		answer1by: "老王",
		answer1img: "friso/image-1507470577457-5809.png",
		answer1like: 209,
		answer2: "皇家美素佳儿是宝宝强健身体的守护者，陪伴宝宝和妈妈共同成长。",
		answer2by: "皇家美素佳儿",
		answer2img: null,
		answer2like: 176,
		answer3: null,
		answer3by: null,
		answer3img: null,
		answer3like: 0,
		like: 0,
		focus: 845,
		answers: 73,
		link: "https://www.zhihu.com/question/65693128"
	},
	{
		id: 3,
		question: "奶牛妈妈开心，牛奶会不会更好喝？",
		answer1: "当然啦，就像你开心的时候空气都是甜的。",
		answer1by: "左左",
		answer1img: null,
		answer1like: 168,
		answer2: "会呀，在荷兰菲仕兰自家牧场，那里农夫对待奶牛就像对待家人一样，农夫还会给自己的手指给刚出生的小牛吮吸，练习吸奶的动作，据说皇家第一道奶源来自这牧场里快乐的牛牛们，新鲜营养又好喝哦。",
		answer2by: "子夏",
		answer2img: null,
		answer2like: 120,
		answer3: null,
		answer3by: null,
		answer3img: null,
		answer3like: 0,
		like: 0,
		focus: 290,
		answers: 33,
		link: "https://www.zhihu.com/question/65692909"
	},
	{
		id: 4,
		question: "动画片的粑粑有眼睛，为什么我的没有？",
		answer1: "因为辣（眼睛）。",
		answer1by: "Aaron Zhang",
		answer1img: "friso/image-1507469245796-8145.png",
		answer1like: 149,
		answer2: "宝宝想到的这个问题，大人往往想不到呢。这说明宝宝的思维小宇宙在旋转跳跃哦。皇家美素佳儿，新鲜直取皇家第一道奶源，凝萃天然营养精华，支持小宇宙爆发。",
		answer2by: "皇家美素佳儿",
		answer2img: null,
		answer2like: 97,
		answer3: null,
		answer3by: null,
		answer3img: null,
		answer3like: 0,
		like: 0,
		focus: 343,
		answers: 29,
		link: "https://www.zhihu.com/question/65693440"
	},
	{
		id: 5,
		question: "牛奶怎么只有白色，会有彩虹样的奶吗？",
		answer1: "因为白色最干净最有营养最安全，牛奶在外面是白色，但是到了你肚肚里就会变成彩虹色，所以宝宝想要彩虹牛奶就要把它喝到肚子里哟。",
		answer1by: "路人十三",
		answer1img: null,
		answer1like: 106,
		answer2: "牛奶的酪蛋白让牛奶呈现白色，酪蛋白具有丰富天然营养，而皇家美素佳儿来自荷兰，鲜奶中天然乳蛋白含量高于欧洲其他奶源地，凝萃的都是天然营养精华哦。",
		answer2by: "皇家美素佳儿",
		answer2img: null,
		answer2like: 88,
		answer3: null,
		answer3by: null,
		answer3img: null,
		answer3like: 0,
		like: 0,
		focus: 668,
		answers: 72,
		link: "https://www.zhihu.com/question/65692980"
	},
	{
		id: 6,
		question: "北极熊来热带旅游会不会出汗？",
		answer1: "如果我是北极熊我会先打个电话跟热带熊打听一下生活环境什么的，旅游攻略不做好，尤其出境，那就是噩梦啊。",
		answer1by: "大鸡腿",
		answer1img: null,
		answer1like: 89,
		answer2: "皇家美素佳儿和伟大的母爱力量在一起，助力宝宝多方位成长，大胆探索自然奥秘！",
		answer2by: "皇家美素佳儿",
		answer2img: null,
		answer2like: 56,
		answer3: null,
		answer3by: null,
		answer3img: null,
		answer3like: 0,
		like: 0,
		focus: 93,
		answers: 14,
		link: "https://www.zhihu.com/question/65693277"
	},
	{
		id: 7,
		question: "为什么妈妈不让我吃手手？",
		answer1: "大拇指是Daddy Finger，你吃的话爸爸会头痛。",
		answer1by: " Bo Lu",
		answer1img: null,
		answer1like: 78,
		answer2: "手手上有很多宝宝看不见的「坏朋友」，吃进肚子里不好哦。宝宝的免疫力离不开营养的支持，皇家美素佳儿凝萃天然营养精华，助力宝宝免疫力、消化力、保护力发展。",
		answer2by: "皇家美素佳儿",
		answer2img: null,
		answer2like: 48,
		answer3: null,
		answer3by: null,
		answer3img: null,
		answer3like: 0,
		like: 0,
		focus: 721,
		answers: 67,
		link: "https://www.zhihu.com/question/65693471"
	},
	{
		id: 8,
		question: "乌龟脱了衣服之后会不会跑快一点？",
		answer1: "小乌龟脱了衣服会害羞的，所以我们还是不要为难它吧。",
		answer1by: "落夏",
		answer1img: null,
		answer1like: 106,
		answer2: "小乌龟跑得慢，可它依然坚持跑完比赛。而皇家美素佳儿菲仕兰牧场创始于 1871年，具有已有140年悠久历史，新鲜直取皇家第一道奶源，坚持百年皇家品质。 ",
		answer2by: "皇家美素佳儿",
		answer2img: null,
		answer2like: 66,
		answer3: null,
		answer3by: null,
		answer3img: null,
		answer3like: 0,
		like: 0,
		focus: 367,
		answers: 60,
		link: "https://www.zhihu.com/question/65693333"
	},
	{
		id: 9,
		question: "牙齿里的小虫虫会变成蝴蝶飞走吗？",
		answer1: "会呀！牙里的小虫虫就像苹果里的小虫虫一样，它会把你的牙吃空后悄悄飞走，所以你要刷牙保护牙齿哦。",
		answer1by: "木木",
		answer1img: null,
		answer1like: 67,
		answer2: "皇家美素佳儿口感清淡、全乳糖，宝宝爱喝，有妈妈的味道，宝宝最喜欢。",
		answer2by: "皇家美素佳儿",
		answer2img: null,
		answer2like: 45,
		answer3: null,
		answer3by: null,
		answer3img: null,
		answer3like: 0,
		like: 0,
		focus: 34,
		answers: 17,
		link: "https://www.zhihu.com/question/65693525"
	},
	{
		id: 10,
		question: "大象走路的时候，会不会踩到自己的鼻子？",
		answer1: "小象可能会踩到的，就像是我们小时候走路老容易摔跤，后来多踩几次就会有经验了，知道脚和鼻子怎么配合了。等小象变成大象了，再踩到的机会就少了。",
		answer1by: "哇哈哈",
		answer1img: "friso/image-1507471546121-8132.png",
		answer1like: 67,
		answer2: "会，所以大象妈妈告诉小象要抬头挺胸快快长高，宝宝也是哦！",
		answer2by: "皇家美素佳儿",
		answer2img: null,
		answer2like: 45,
		answer3: null,
		answer3by: null,
		answer3img: null,
		answer3like: 0,
		like: 0,
		focus: 222,
		answers: 27,
		link: "https://www.zhihu.com/question/65373183"
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





