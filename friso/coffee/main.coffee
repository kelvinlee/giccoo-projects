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
		question: "妈妈我要长多高能让全世界的人都看到我?",
		answer1: "别的我不知道，你只要高过一米三，那些售票的叔叔阿姨就都会看到你呦。",
		answer1by: "虩虩哑哑",
		answer1img: null,
		answer1like: 0,
		answer2: "长高是宝宝都有的小心愿，皇家美素佳儿新鲜直取皇家第一道奶源*，凝萃1:25**天然营养精华，不仅陪伴宝宝长高，还助力宝宝免疫力、消化力、保护力多方位发展。",
		answer2by: "皇家美素佳儿",
		answer2img: null,
		answer2like: 0,
		answer3: null,
		answer3by: null,
		answer3img: null,
		answer3like: 0,
		like: 0,
		focus: 489,
		answers: 29,
		link: "https://www.zhihu.com/question/65693033"
	},
	{
		id: 2,
		question: "为什么小牛冬天不穿衣服也不会感冒呢？",
		answer1: "因为牛皮厚，吹不冻呀。正儿八经滴说，奶牛平均体温是38.6 ℃左右，比人高一丢丢。在-15～40 ℃内的天里，它们的体温不会忽高忽低，而是保持恒定。小牛的临界温度低，比较能耐寒。所以在冬天里，小牛不穿衣服也不会怕冷。对啦，小牛从小喝奶牛妈妈的奶，提升耐寒能力。有爱的力量在，小牛一点也不冷。",
		answer1by: "红岩魂",
		answer1img: "",
		answer1like: 0,
		answer2: "荷兰菲仕兰自家牧场，那里的农夫对待小牛就像亲人一样。农夫会用手指给小牛练习吮吸能力，锻炼身体，让小牛更好地喝牛妈妈的奶。牛奶是奶牛妈妈对小牛的爱，让小牛不畏寒冷；皇家美素佳儿延续母爱的力量，为宝宝增强免疫力，守护宝宝身体棒棒。即便如此，宝宝冬天也一定要穿衣服保暖哦～",
		answer2by: "皇家美素佳儿",
		answer2img: null,
		answer2like: 0,
		answer3: null,
		answer3by: null,
		answer3img: null,
		answer3like: 0,
		like: 0,
		focus: 845,
		answers: 74,
		link: "https://www.zhihu.com/question/65693128"
	},
	{
		id: 3,
		question: "鲸鱼宝宝是怎么长得这么大的？",
		answer1: "鲸鱼宝宝分成齿鲸和须鲸。它们的爸爸妈妈非常大，须鲸中的蓝鲸可是世界上最大的动物，比大象大很多很多。鲸鱼在海里生活，齿鲸宝宝从小长了锋利的牙齿，是小吃货，爱吃海洋里的动物，就连海鸟也不放过。相比须鲸宝宝温柔多了，它们会吃小虾米和浮游生物，一吃就吃一大口。因为进化和基因的缘故，鲸鱼的体型都要比一般的鱼儿大很多，并不只是因为吃得多啦。",
		answer1by: "郭小野",
		answer1img: "friso/image-1507980147361-5014.png",
		answer1like: 0,
		answer2: "长大后体型称霸世界的鲸鱼宝宝，小时候也离不开妈妈的精心照顾。来自荷兰自家牧场的皇家美素佳儿，有妈妈爱的味道，让宝宝长高长大的同时，体格由内而外强健，收获更多珍贵成长体验。",
		answer2by: "皇家美素佳儿",
		answer2img: "",
		answer2like: 0,
		answer3: null,
		answer3by: null,
		answer3img: null,
		answer3like: 0,
		like: 0,
		focus: 291,
		answers: 37,
		link: "https://www.zhihu.com/question/65692909"
	},
	{
		id: 4,
		question: "大熊猫是用竹子在剔牙吗？",
		answer1: "大熊猫是在吃竹子哦。竹子里它们需要的营养，大熊猫会挑选不同类型的竹子吃，有的会挑便于消化的竹子。大熊猫喜欢吃新鲜的竹子，而且它们会吃竹笋呢。",
		answer1by: "田月震",
		answer1img: "",
		answer1like: 0,
		answer2: "每一位宝宝在妈妈的心中都是萌萌的「大熊猫」，心头的「国宝」。皇家美素佳儿新鲜直取皇家第一道奶源*，凝萃1:25**天然营养精华，因珍稀而珍贵，助力宝宝多方位成长。",
		answer2by: "皇家美素佳儿",
		answer2img: null,
		answer2like: 0,
		answer3: null,
		answer3by: null,
		answer3img: null,
		answer3like: 0,
		like: 0,
		focus: 343,
		answers: 37,
		link: "https://www.zhihu.com/question/65693440"
	},
	{
		id: 5,
		question: "妈妈，水果也分男水果和女水果吗？",
		answer1: "这个问题，妈妈之前没有想过，跟你一起去找答案好不好？",
		answer1by: "筱恬的小甜甜",
		answer1img: null,
		answer1like: 0,
		answer2: "这位妈妈回答咔咔的，点赞～皇家美素佳儿陪伴妈妈和宝宝一起探索自然奥秘，体验更大的世界，每一位宝宝的想法都值得被尊重。",
		answer2by: "皇家美素佳儿",
		answer2img: null,
		answer2like: 0,
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
		question: "小鸟怎么才能和小鱼成为朋友呢?",
		answer1: "合体变身成「 飞鱼」，瞬间成为形影不离的好朋友。",
		answer1by: "苏诀",
		answer1img: null,
		answer1like: 0,
		answer2: "小鸟可以陪小鱼看天上的云彩，小鱼可以带小鸟畅游海面。皇家美素佳儿新鲜直取皇家第一道奶源*，凝萃1:25**天然营养精华，和妈妈一起为北鼻找到大自然中滋养生命的奥秘，陪伴北鼻上天入地，一同成长。",
		answer2by: "皇家美素佳儿",
		answer2img: null,
		answer2like: 0,
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
		question: "兔兔想听音乐的时候该怎么戴耳机呢？",
		answer1: "可以带他看疯狂动物城，那里面有兔兔带耳机正确的方法。",
		answer1by: "邵帅",
		answer1img: null,
		answer1like: 0,
		answer2: "皇家美素佳儿，也会竖起耳朵，「听见」宝宝的心声噢，口感清淡，全乳糖，宝宝爱喝~",
		answer2by: "皇家美素佳儿",
		answer2img: null,
		answer2like: 0,
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
		question: "妈妈，为什么拍照的时候，要喊茄子呢？",
		answer1: "因为喊茄子的时候，嘴巴会呈现弯曲的形状，就像可爱的笑脸一样啊，笑着拍照是最美哒。",
		answer1by: "杨鹏",
		answer1img: "friso/image-1507980483241-9763.png",
		answer1like: 0,
		answer2: "皇家美素佳儿陪伴妈妈和宝宝共同健康成长，每一天都在微笑，拥有「茄子」一般迷人的笑容。",
		answer2by: "皇家美素佳儿",
		answer2img: null,
		answer2like: 0,
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
		question: "妈妈我能用肚脐眼看见什么呀？",
		answer1: "可以看见时光隧道。",
		answer1by: "Arthur Lee",
		answer1img: null,
		answer1like: 0,
		answer2: "通过肚脐眼，宝宝可以看到一条你还在妈妈肚子里的「时光隧道」。皇家美素佳儿荷兰自家牧场具有140多年的悠久历史，新鲜直取皇家第一道奶源**，穿越百年时光的隧道，坚持百年匠心品质。",
		answer2by: "皇家美素佳儿",
		answer2img: null,
		answer2like: 0,
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
		question: "风要是太大，我会不会被吹成光头？",
		answer1: "会，自从爸爸开车越来越多，吹过来的风那个大啊，发现头发也越来越少了。后来啊，开车的时候关上窗户，头发才又多了起来。所以BB坐车记得不要把头伸出窗外哦。",
		answer1by: "汽车奇谈高小强",
		answer1img: "",
		answer1like: 0,
		answer2: "奔跑起来，才会有风，皇家美素佳儿助力宝宝全方位成长，让宝宝自由奔跑，探索自然。宝宝想知道答案吗，首先要有一个壮壮的身体哦～",
		answer2by: "皇家美素佳儿",
		answer2img: null,
		answer2like: 0,
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





