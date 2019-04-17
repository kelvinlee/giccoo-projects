# @codekit-prepend "coffee/css3Prefix"
# @codekit-prepend "../../libs/coffee/loadWechatConfig"
# @codekit-prepend "../../libs/coffee/IsPC"
# @codekit-prepend "../../libs/coffee/NumberToChinese"
# @codekit-prepend "../../libs/vue/vue-register"
# @codekit-prepend "../../libs/vue/vue-slider"
# @codekit-prepend "../../libs/vue/vue-resetinput"
# @codekit-prepend "../../libs/coffee/get"
# @codekit-prepend "../../libs/coffee/String"
# @codekit-prepend "../../libs/coffee/pixi-base"
# @codekit-append "UGC"

# note: 防多次提交
# 分享图



Array::shuffle = (n) ->
  len = @length
  num = if n then Math.min(n, len) else len
  arr = @slice(0)
  arr.sort (a, b) ->
    Math.random() - 0.5
  arr.slice 0, num - 1


TrueW = 640
TrueH = 1138
_CDN = "./"
imageurl = "//api.giccoo.com/api/upload/image64/"
apiUrl = "//api.giccoo.com/masterkong"
# apiLink = "//localhost:3000/"
apiLink = "//g.giccoo.com/"
# apiLink = "http://192.168.3.53:3000/"
# apiUrl = "http://localhost:8881/Levi"
main = {}
ugc = null
_public = {}
loading = {}
musicLineCache = null
musicIconCache = null
sys = ""
ugcCache = null
sended = [false,false]
_cache = null
_startCache = null
_runTime = null
_second = 0
_testTime = 0
messagelist = [
	{name:"致遥远的你",url:"https://music.163.com/#/song?id=455979087",text: "心里有念着的那个人，看见夜空中的星星，也怀疑是他在温柔地凝视。"}
	{name:"致遥远的你",url:"https://music.163.com/#/song?id=455979087",text: "我以为只要自己满怀强烈的爱，每天坚持祈祷的话，即使相隔千里他也能感受到。"}
	{name:"致遥远的你",url:"https://music.163.com/#/song?id=455979087",text: "爱的开始是一个回眸，爱的最后是无限的天穹。"}
	{name:"幸福预兆",url:"https://music.163.com/#/song?id=25884676",text: "我喜欢春天的樱花，夏天的西瓜，秋天的银杏，冬天的热可可和每一天的你。"}
	{name:"幸福预兆",url:"https://music.163.com/#/song?id=25884676",text: "我喜欢春天的樱花，夏天的西瓜，秋天的银杏，冬天的热可可和每一天的你。"}
	{name:"幸福预兆",url:"https://music.163.com/#/song?id=25884676",text: "我喜欢春天的樱花，夏天的西瓜，秋天的银杏，冬天的热可可和每一天的你。"}
	{name:"Honey Honey",url:"https://music.163.com/#/song?id=287251",text: "那年我们还在同一个屋檐，一觉睡到下午，仿佛生活只要有你和我自己就够了，时间都可以停滞，慢慢都是甜蜜。"}
	{name:"Honey Honey",url:"https://music.163.com/#/song?id=287251",text: "我们一起下班，一起买菜，一起端坐在电视前面分享着今天，这就我这一生最幸福的时光，哪怕再这么过十年二十年。"}
	{name:"Honey Honey",url:"https://music.163.com/#/song?id=287251",text: "牵着你的手躲过校门口的老师，逃开家里的唠唠叨叨，躲我们都不擅长的数学，好想就这么带着你跑到世界的尽头。"}
	{name:"满满",url:"https://music.163.com/#/song?id=255737",text: "溢出的感动，溢出的不安，溢出的甜蜜，无法阻挡地溢成深深的海，而我，想和你一起沉入这爱恋的水底。"}
	{name:"满满",url:"https://music.163.com/#/song?id=255737",text: "一个人是充实，两个人才是满满。"}
	{name:"满满",url:"https://music.163.com/#/song?id=255737",text: "你是蛋糕上的那颗草莓，是布丁上的那层焦糖，是我心尖上的那许多爱，一切正好，而你是满满的甜。"}
	{name:"Life Is Wonderful",url:"https://music.163.com/#/song?id=1474868",text: "生活的意义就在于它从不给你指明方向，而总是在背后逼着你一步一步向前走，让自己去找到方向。"}
	{name:"Life Is Wonderful",url:"https://music.163.com/#/song?id=1474868",text: "刮过风才发现天空有多蓝，下过雨才发现阳光有多美，而我不想错过你才后知后觉地要去珍惜。"}
	{name:"Life Is Wonderful",url:"https://music.163.com/#/song?id=1474868",text: "简单的旋律，富有哲理的歌词，温柔的声音，唱着我们的生活，想分享给你，一起听听这精彩的生活。"}
	{name:"拥抱",url:"https://music.163.com/#/song?id=546723152",text: "想和你一起分享对未来的所有期待，可能遥远但却很甜蜜，拥抱着你然后悄悄告诉你。"}
	{name:"拥抱",url:"https://music.163.com/#/song?id=546723152",text: "当你孤单的时候，当你无聊的时候，当你开心或生气的时候，我都想给你一个拥抱。"}
	{name:"拥抱",url:"https://music.163.com/#/song?id=546723152",text: "天空里的星星是你，大海里的岛屿是你，夏天里的冰淇淋是你，你就是最甜的氧气。"}
	{name:"给你给我",url:"https://music.163.com/#/song?id=569200210",text: "给你，我的花呗账单。给我，你的工资卡。"}
	{name:"给你给我",url:"https://music.163.com/#/song?id=569200210",text: "我给你自由，你却给了我羁绊。"}
	{name:"给你给我",url:"https://music.163.com/#/song?id=569200210",text: "森林给春天色彩，钢琴给剧院灵魂，我给你所有。"}
	{name:"特别的人",url:"https://music.163.com/#/song?id=28403111",text: "谁能想到，跑100米从来都不能及格的我，追你的时候有多奋不顾身。"}
	{name:"特别的人",url:"https://music.163.com/#/song?id=28403111",text: "我想不出你有多特别，但我特别想你。"}
	{name:"特别的人",url:"https://music.163.com/#/song?id=28403111",text: "可能你已经把我忘了，但你对于我始终是那个特别的人。"}
	{name:"东西",url:"https://music.163.com/#/song?id=1311319058",text: "小时候玩过的东西南北还记得吗？我的每一格里写的都是你的名字。"}
	{name:"东西",url:"https://music.163.com/#/song?id=1311319058",text: "不管你来自东还是西，带着你的东西，我们一起往东或往西。"}
	{name:"东西",url:"https://music.163.com/#/song?id=1311319058",text: "听着歌就想到了你，想到了这个城市每个角落的我和你，你就是我最美丽的际遇。"}
	{name:"小幸运",url:"https://music.163.com/#/song?id=537854958",text: "人生三大幸事，“发工资了”，“再来一瓶”，“我喜欢你”。"}
	{name:"小幸运",url:"https://music.163.com/#/song?id=537854958",text: "如果说遇见你花光了我所有的运气，那还是不要遇见了。"}
	{name:"小幸运",url:"https://music.163.com/#/song?id=537854958",text: "我掉的校园卡被你捡到了，这是我最大的幸运。"}
	{name:"青柠",url:"https://music.163.com/#/song?id=504624714",text: "喜欢夏天的冰淇淋，喜欢夏夜的虫鸣声，喜欢暖暖轻轻的风，喜欢你给的天天的青柠。"}
	{name:"青柠",url:"https://music.163.com/#/song?id=504624714",text: "高三的时候每天都会盯着教室窗外，就期待一不小心看到的你。"}
	{name:"青柠",url:"https://music.163.com/#/song?id=504624714",text: "打出来又删掉，再打再删，砰砰的心跳，却不知道说什么好，这就是心动的感觉吧。"}
	{name:"豆蔻年华",url:"https://music.163.com/#/song?id=1341948721",text: "如果可以，我还想带你去走走熟悉的路，一起听听窗外的雨，牵着手吹吹风，拉着你不放手。"}
	{name:"豆蔻年华",url:"https://music.163.com/#/song?id=1341948721",text: "豆蔻般的年华，少不了的是你的影子，青春路上，感谢有你。"}
	{name:"豆蔻年华",url:"https://music.163.com/#/song?id=1341948721",text: "曾经幻想过跟你一起的一切，也希望这一切都不是假的。没有错过，那就把握。"}
	{name:"Forever Friends",url:"https://music.163.com/#/song?id=229077",text: "陪伴永远是坚定而温暖的，你身边的每个人都值得珍惜。"}
	{name:"Forever Friends",url:"https://music.163.com/#/song?id=229077",text: "“永远有多远？”，“你想走多远，我就陪你走多远！”"}
	{name:"Forever Friends",url:"https://music.163.com/#/song?id=229077",text: "我记得每个彻夜长谈的我们，无论难过悲伤，统统都解决掉！有你陪我，I’m not afraid。"}
	{name:"青涩的时光",url:"https://music.163.com/#/song?id=549321266",text: "时光真是快啊，曾经一起努力过，放纵过，笑过哭过的你们，现在都还好嘛？想你们了。"}
	{name:"青涩的时光",url:"https://music.163.com/#/song?id=549321266",text: "说来真是满满的回忆。看似黑压压的高中生活，缺是最难忘的一段时间，如果可以再经历一次，我一定毫不犹豫！"}
	{name:"青涩的时光",url:"https://music.163.com/#/song?id=549321266",text: "那天又回到学校，空空的教室，我却听到了熟悉的喧哗声，老师的讲课声，还有走廊来来回回说说笑笑的兄弟们。"}
	{name:"愿你",url:"https://music.163.com/#/song?id=498040739",text: "跨出校园后，经历了太多人情冷暖，也意识到记忆中的你们都是回不去的过去，whatever，一起加油！"}
	{name:"愿你",url:"https://music.163.com/#/song?id=498040739",text: "“嘿，坚持下去呀！”我依然记得跑道上的这句话，虽然我们是陌生人，几个字却有无比强大的力量。"}
	{name:"愿你",url:"https://music.163.com/#/song?id=498040739",text: "你总让我照顾好自己，对自己好一点，可我心里牵挂的都是你，就在不言中，希望你一切顺利。"}
	{name:"你曾是少年",url:"https://music.163.com/#/song?id=426027293",text: "同学聚会再次遇到却依然只敢偷偷看着你，你走过来对我说着：“你过的还好吗？”突然觉得，当年没有告白其实不算是一种遗憾。"}
	{name:"你曾是少年",url:"https://music.163.com/#/song?id=426027293",text: "“我不喜欢你！”这句话成了我们在一起第一天你对我的告白：）"}
	{name:"你曾是少年",url:"https://music.163.com/#/song?id=426027293",text: "握着你的手迈出家门那一刻，感觉什么都不再害怕，因为有你为我遮风挡雨，这是对我最有承诺的告白。"}
	{name:"致自己",url:"https://music.163.com/#/song?id=35476048",text: "喂，少喝酒少抽烟，不要熬夜，记得吃早饭，总听到别人说，可却从来没跟自己说。"}
	{name:"致自己",url:"https://music.163.com/#/song?id=35476048",text: "不要觉得孤单，不要感到害怕，年轻的你有太多可能，加油，你还有你自己！"}
	{name:"致自己",url:"https://music.163.com/#/song?id=35476048",text: "毕业后一个人在外漂泊，渐渐学会了照顾自己，对父母报喜不报忧，生活本身不容易，总会逼人慢慢长大。"}
	{name:"友人说",url:"https://music.163.com/#/song?id=25794014",text: "信任的人也会有背叛，有的秘密也会被传开。但我们却始终默契，不管他们怎么说，我只跟我们自己说。"}
	{name:"友人说",url:"https://music.163.com/#/song?id=25794014",text: "还记得小时候，拍个手，拉个勾，我们就是最好的朋友，嘿，你现在怎么样了？"}
	{name:"友人说",url:"https://music.163.com/#/song?id=25794014",text: "25年，同一个城市，同样的爱好，同样默契，这就是“比情歌更动听”吧。"}
	{name:"Dear Friend",url:"https://music.163.com/#/song?id=287327",text: "初中毕业那一份别，就是十年，但我还有很多地方想跟你一起去，很多话想对你说，很多很多，想你了，friend。"}
	{name:"Dear Friend",url:"https://music.163.com/#/song?id=287327",text: "高考宣誓会上，当我们喊出“大学我来了”的那一刻，殊不知，离开的都是最值得珍惜的朋友。"}
	{name:"Dear Friend",url:"https://music.163.com/#/song?id=287327",text: "人的一生会遇到无数个人，认识少数的朋友，但却只有寥寥几个陪你走过一生，成为你生命中的一部分。"}
	{name:"关于青春",url:"https://music.163.com/#/song?id=29713016",text: "青春里走走停停，十字路口的不断抉择，是对是错都不重要，我们都在成长啊！"}
	{name:"关于青春",url:"https://music.163.com/#/song?id=29713016",text: "坚持做你自己，勇敢向前，无所畏惧，青春就得用来造作啊。"}
	{name:"关于青春",url:"https://music.163.com/#/song?id=29713016",text: "刚毕业的那一年，什么都是模糊不清，只剩迷茫。现在回过头看，原来那就是青春，再也回不去的青春。"}
	{name:"关于我们",url:"https://music.163.com/#/song?id=554244110",text: "太暖太暖，只要有你陪伴，就很心安啊。"}
	{name:"关于我们",url:"https://music.163.com/#/song?id=554244110",text: "死党就是在出糗的时候嘲笑你，但你哭了会立马给你一个温暖抱抱的人。"}
	{name:"关于我们",url:"https://music.163.com/#/song?id=554244110",text: "我早已习惯有你的夜晚，路灯下的我们，冬天也可以很暖。"}
	{name:"Good Time",url:"https://music.163.com/#/song?id=17706562",text: "丢了很久的身份证，今天突然就出现了，是不是它也一直再找我？"}
	{name:"Good Time",url:"https://music.163.com/#/song?id=17706562",text: "希望看到这一条的每个人，每一天，每时每刻都是good time！"}
	{name:"Good Time",url:"https://music.163.com/#/song?id=17706562",text: "再过10分钟又是新的一天，好好享受今天的最后10分钟，然后新的一天又来了，没什么理由不开心。"}
	{name:"My Man",url:"https://music.163.com/#/song?id=1325896303",text: "虽然一直觉得缺少交流，少言少语，但每当遇到什么挫折，你都是我背后最强有力的支柱。"}
	{name:"My Man",url:"https://music.163.com/#/song?id=1325896303",text: "你从来不会对我说出爱，却比任何都让我踏实，my man，我爱你。"}
	{name:"My Man",url:"https://music.163.com/#/song?id=1325896303",text: "你用30年支撑了整个家，休息吧，下半场换我上。"}
	{name:"我想更懂你",url:"https://music.163.com/#/song?id=139703",text: "我们都经历过叛逆的年代，长大后才懂得父母的用心良苦。"}
	{name:"我想更懂你",url:"https://music.163.com/#/song?id=139703",text: "还记得高中有一次跟妈妈吵架，摔门而出，我妈让我别回来了，然后老爸说出门之后妈就一直哭，怕我真的不回来。"}
	{name:"我想更懂你",url:"https://music.163.com/#/song?id=139703",text: "曾经的我们，都试着打破隔阂坦诚相待，结果总是针锋相对，现在你渐渐老了，我才发现你才是最爱我的人。"}
	{name:"暖",url:"https://music.163.com/#/song?id=1336075842",text: "无论岁月多长，也无论身在何方，有那么一个地方，永远是你的故乡。"}
	{name:"暖",url:"https://music.163.com/#/song?id=1336075842",text: "4年前离开家乡，每一次回去都能感觉到很大的变化，但一切又都那么熟悉，这就是永远的归宿吧。"}
	{name:"暖",url:"https://music.163.com/#/song?id=1336075842",text: "希望自己也是一个光芒四射的人，照亮黑暗，温暖身边的每一个人。"}
	{name:"纸飞机",url:"https://music.163.com/#/song?id=256506",text: "我经常想起童年的纸飞机，每当我伤心难过都会随着它飞走。"}
	{name:"纸飞机",url:"https://music.163.com/#/song?id=256506",text: "小太阳忙着放光芒，小星星天空眨着眼，纸飞机你在哪里，带我飞到童话世界里。"}
	{name:"纸飞机",url:"https://music.163.com/#/song?id=256506",text: "少年与爱永远不会老去，就算披荆斩棘也要保护我从小的梦。"}
	{name:"礼物",url:"https://music.163.com/#/song?id=167842",text: "亲爱的，你可知道你是我等了这么多年来，一直舍不得拆掉的礼物。感谢上帝让我遇见你，得以与你分享喜怒哀乐。"}
	{name:"礼物",url:"https://music.163.com/#/song?id=167842",text: "我见识过生命里的各种事情和陌生人，我也感受过生活对我的打击咒骂，但我至少还有你，得以微笑的面对生活。"}
	{name:"礼物",url:"https://music.163.com/#/song?id=167842",text: "我们是彼此最好的礼物，在茫茫人海中相遇、相识、相爱，所以你在我的心里，是最甜的礼物。"}
	{name:"爸爸妈妈",url:"https://music.163.com/#/song?id=407450223",text: "妈妈是我的小仙女，爸爸也是我的俊少年，爸爸妈妈在我眼中永远不会老。"}
	{name:"爸爸妈妈",url:"https://music.163.com/#/song?id=407450223",text: "终于那一天我离开了他们的身边，独自来到了这座城市。我不会哭，因为爸爸妈妈会伤心，我会努力向上成为他们的骄傲。"}
	{name:"爸爸妈妈",url:"https://music.163.com/#/song?id=407450223",text: "小时候我不断地想要扑进爸爸妈妈的怀抱里寻求温暖，长大后我都会去拥抱爸爸妈妈，我想告诉他们，无论我在哪都会好好爱你们。"}
	{name:"时光是座博物馆",url:"https://music.163.com/#/song?id=1331919081",text: "听着这首歌，就想起了每次回家时妈妈的话“快到了吗，我做了你最爱吃的红烧牛肉，等你回来吃饭“，想家了~"}
	{name:"时光是座博物馆",url:"https://music.163.com/#/song?id=1331919081",text: "小时候都是爷爷去接我放学，印象中爷爷的手很大，很温暖，是抓住就能体会到的安心，是我时光博物馆里陈列的永恒。"}
	{name:"时光是座博物馆",url:"https://music.163.com/#/song?id=1331919081",text: "我笑着梦着想回到过去，想回到那个夏天的课堂，想再看看你悄悄传来的纸条上写了些什么。"}
	{name:"有梦可待",url:"https://music.163.com/#/song?id=1336077464",text: "喜欢你甜甜的笑容，喜欢你穿着白衬衫温柔的样子，少年有梦可待。"}
	{name:"有梦可待",url:"https://music.163.com/#/song?id=1336077464",text: "等风来不如追风去，无梦枉少年，追梦之路有你相伴。"}
	{name:"有梦可待",url:"https://music.163.com/#/song?id=1336077464",text: "愿你能迎着阳关，一路乘风破浪，永远对未来抱有期望，成为幕后之王。"}
]
messagelist.sort -> return if Math.random() > 0.5 then -1 else 1

neteaseShareImage = ->
	title1 = "画山成岳"
	picUrl = "https://image.giccoo.com/upload/#{main.folder}/"+main.shareImageLink+"@!large"
	redirectUrl = "https://activity.music.163.com/masterkong/"
	# console.log picUrl,"orpheus://sharepic?picUrl="+encodeURIComponent(picUrl)+"&shareUrl="+encodeURIComponent(redirectUrl)+"&wbDesc="+encodeURIComponent(title1)+"&qqDesc="+encodeURIComponent(title1)
	# window.location.href = "orpheus://sharepic?picUrl="+encodeURIComponent(picUrl)+"&shareUrl="+encodeURIComponent(redirectUrl)+"&wbDesc="+encodeURIComponent(title1)+"&qqDesc="+encodeURIComponent(title1)
	console.log "share href:",picUrl
	CloudMusic.sharePic({
		picUrl: picUrl,
		text: title1,
		link: redirectUrl
	})

loadList = [
	# "//cdnjs.cloudflare.com/ajax/libs/pixi.js/4.8.5/pixi.min.js"
	"//cdnjs.cloudflare.com/ajax/libs/gsap/2.0.2/TweenMax.min.js"
	"//cdnjs.cloudflare.com/ajax/libs/axios/0.18.0/axios.min.js"
	# "//cdnjs.cloudflare.com/ajax/libs/three.js/101/three.min.js"
	# "//image.giccoo.com/projects/libs/js/splitting.min.js"
	# "//cdnjs.cloudflare.com/ajax/libs/dat-gui/0.7.5/dat.gui.min.js"
	# "//cdnjs.cloudflare.com/ajax/libs/cannon.js/0.6.2/cannon.min.js"
	# "//cdnjs.cloudflare.com/ajax/libs/stats.js/r16/Stats.min.js"
	# "//cdnjs.cloudflare.com/ajax/libs/howler/2.0.15/howler.core.min.js"
	"//image.giccoo.com/projects/genki/js/music-jssdk-1.0.5.js"
	"//image.giccoo.com/projects/genki/js/ntes.id.js"
	# "//image.giccoo.com/projects/masterkong/js/THREE.MeshLine.js"
	# "js/libs.js?v=1"
]

window.onload = ->
	TrueH = document.documentElement.clientHeight
	TrueW = document.documentElement.clientWidth

	lastY = 0

	if window.navigator.userAgent.indexOf("NeteaseMusic") > -1
		sys = "NeteaseMusic"
		shareData = 
			name: 'masterkong'
			title: '定制你的花样音乐告白'
			subTitle: "定制你的花样音乐告白"
			text: ''
			picUrl: 'http://m.giccoo.com/masterkong/img/ico.jpg'
			link: 'http://m.giccoo.com/masterkong/'
		CloudMusic.setShareData shareData
	else
		loadWechatConfig()
		wx.ready ->
			shareContent =
				title: "定制你的花样音乐告白"
				desc: "定制你的花样音乐告白"
				link: "http://m.giccoo.com/masterkong/"
				imgUrl: "http://m.giccoo.com/masterkong/img/ico.jpg"
				success: ->
					# alert "success"
				cancel: ->
					# alert "cancel"
			wx.onMenuShareTimeline shareContent
			wx.onMenuShareAppMessage shareContent
			wx.onMenuShareQQ shareContent
			wx.onMenuShareWeibo shareContent

	# _public = new Vue
	# 	el: "#public"
	# 	data:
	# 		note: true
	# 		playing: false
	# 	mounted: ->
	# 		document.addEventListener "WeixinJSBridgeReady", ->
	# 			_public.$children[0].change()

	loading = new Vue
		el: "#loading"
		data:
			progress: 0
			mounted: false
			progressOn: 0
			objs: 0
			imgs: 0
			jss: 0
			isrun: false
		computed:
			progressText: ->
				return NumberToChinese @.progress
		methods:
			updateImgs: (i,n)->
				# console.log "imgs:",i
				@.imgs = i
				@.progressOn = Math.floor (@.objs+@.imgs+@jss)/2
			updateJSs: (i)->
				@.jss = i
				@.progressOn = Math.floor (@.objs+@.imgs+@jss)/2
			
			next: ->
				document.getElementById('load').className += " fadeOut animated"
				_public.note = false
				main.mounted = true
				setTimeout ->
					document.getElementById('load').style.display = "none"
					main.pageIndex = 1
					# main.registerShow = false
					buildUGC.bind(ugc).call()
				,520
		mounted: ->
			@.mounted = true
			TrueH = document.documentElement.clientHeight
			TrueW = document.documentElement.clientWidth

			# @.next() # for test

			timein = setInterval =>
				@.progress += 3
				@.progress = @.progressOn if @.progress >= @.progressOn
				if @.progress >= 100
					@.progress = 100
					setTimeout => 
						@.next() 
					, 1000
					clearInterval timein
			,1000/20
	
	queue = new createjs.LoadQueue()
	queue.setMaxConnections(100)
	queue.on "complete", ->
		axios.defaults.withCredentials = true
		init()
		# buildSound()
	queue.on "progress", (e)->
		percentage = Math.round(e.progress * 100)
		loading.updateJSs percentage
		# console.log "percentage:",percentage
	queue.loadManifest loadList


init = ->
	TrueW = 640 if TrueW >= 640
	TrueH = 1138 if TrueH >= 1138
	smaller = TrueH*2 < 1200
	navH = Math.ceil TrueW / 640 * 94 / TrueH * 100
	TrueH = document.documentElement.clientHeight
	TrueW = document.documentElement.clientWidth
	console.log TrueW,TrueH

	main = new Vue
		el: "#main"
		data:
			version: "1.0.1"
			w: TrueW
			h: TrueH
			biger: TrueW/TrueH < 0.55
			smaller: smaller
			afterH: if smaller then TrueH*1.15-1029*(TrueW/750) else TrueH-1029*(TrueW/750)
			wy: false
			mounted: true
			loading: false
			playing: false
			canPlay: true
			noteText: ""
			noteTime: null
			noteShow: false
			noteType: true
			pageInfoShow: false
			pageIndex: 0
			step: 1
			singerIndex: 1
			bgmPlay: false
			startgame: false
			folder: ""
			BGColor: "#ffffff"
			XY: "pageY"
			ugc: null
			ugcsave: null
			ugcold: null
			pushed: false
			shareImageLink: null
			cache: null
			audioId: null
			v: null
			recordStarting: false
			authorization: false
			norecord: true
			uploaded: false
			imageUpdate: false
			allowPopShow: false
			count: 0
			videoIndex: 0
			videoIndexOld: 0
			lr: true
			form:
				sex: {id:"sex", type: "select", link: "city", array: true, value: 0, options: [{name:"请选择称谓(男士/女士)",val:0},{name:"男士",val:1},{name:"女士",val:2}] }
				firstname: {id:"firstname", type: "input", placeholder: "请填写姓",value: ""}
				username: {id:"username", type: "input", placeholder: "请填写名",value: ""}
				mobile: {id:"mobile", type: "number", placeholder: "请填写电话号码",value: ""}
			# 	city: {id:"city", type: "select", label: "城市", link: "dealer",value: Object.keys(_citys["请选择省份"])[0], options: _citys["请选择省份"] }
			mask: 1
			text: "请输入内容"
			nickname: ""
			mobile: ""
			musicLink: ""
			logId: ""
			openBtnShow: true
			default:
				x: 0
			videoPop: false
			canUpload: true
			handCover: false
			last_update: 0
			lastX: 0
			lastY: 0
			lastZ: 0
			speed: 4000
			maxSpeed: 0
			swing: false
			questionPage: false
			questionPageShow: false
			questionHas: false
			messageShow: false
			registerShow: false
			lotteryShow: false
			lotteryEndShow: false
			lotteryInfo: 
				id: null
				random: null
			regSubmited: false
			giveUp: false
			gameEnd: false
			noreg: false
			ugcShow: false
			regH: 100
			ugcType: 1
			message: ""
			messageIndex: 1
			messageInput: false
			musicName: ""
			white: false
			formShow: true
			formBoxShow: false
			gameEndBtns: false
			msgIndex: 1
			allow: true
			shaked: false
			bgImg: null
			times: 0
			edit: false
			messageNote: true
			cacheArea: "请输入内容"
			messagelist: messagelist
			messageIndex: 0
			questionIndex: 0
			questionlist: [
				{q:"我的手机号是？",p: "18012345678"}
				{q:"我的生日是？",p: "1月1日2000年"}
				{q:"我们第一次牵手是哪一天？",p: "1月1日2000年"}
				{q:"我们认识的城市是？",p: "上海"}
				{q:"我最喜欢吃的水果是？",p: "草莓"}
				{q:"我最讨厌的食物是？",p: "香菜"}
				{q:"我们上一次见面是哪一天？",p: "1月1日2000年"}
				{q:"我是什么星座？",p: "白羊座"}
				{q:"我最爱听的歌是？",p: "喜欢"}
				{q:"我们上次见面是在哪个城市？",p: "上海"}
			]
			hasquestion: false
			question: ""
			answer: ""
			sendData : {}
			bagIndex: 1
			backgoundIndex: 1
			getData: {}
			sendAnswer: false

		watch:
			question: (n,o)->
				@.question = o if @.question.gblen() > 12*2
			nickname: (n,o)->
				@.nickname = o if @.nickname.gblen() > 8*2

			text: (n,o)->
				# t = @.toBr(@.text).split("<br/>")
				# if t.length > 4
				# 	return @.text = o
				# for item in t
				# 	if item.length >= 14
				# 		@.text = o
				# 		break
				if @.text.gblen() > 56*2 # or @.text.length > 100
					@.text = o 
				else
					@.text = @.text.replace(/[\r\n]/g,"")

		methods:
			numberChange: (n)->
				# console.log "n:",n
				@.messageIndex = Math.abs n
			numberChange2: (n)->
				@.questionIndex = Math.abs n
			selectMessage: ->
				@.registerShow = true
			toBr: (text)->
				return text.replace(/[\r\n]/g,"<br/>")
			send: (text,type = true)->
				@.noteShow = true
				@.noteText = text
				@.noteType = type
				clearTimeout @.noteTime
				@.noteTime = setTimeout =>
					@.noteShow = false
				,2000
			focusArea: (evt)->
				@text = "" if @.text is @cacheArea
			blurArea: (evt)->
				@text = @cacheArea if @text is ""
			goNext: ->
				return @.send("请填写你的名字") if @.nickname is ""
				return @.send("请输入内容") if @.edit and (@.text is "" or @.text is @cacheArea)
				@.registerShow = false
				data = {
					nickname: @.nickname
					message: ""
					musicname: ""
				}
				if @.edit
					data.musicname = @.messagelist[@.messageIndex].name
					data.message = @.text
				else
					i = Math.abs @.$children[0].slideNumber
					data.musicname = @.messagelist[i].name
					data.message = @.messagelist[i].text
				console.log data
				@.sendData = data
				showPage4(data) if showPage4?

			moveLeft: (i = 0)->
				slider = @.$children[i]
				slider.prev()
			moveRight: (i = 0)->
				slider = @.$children[i]
				slider.next()
			editMessage: ->
				@.times++
				if @.times >= 2
					console.log "double click"
					@.edit = true
				setTimeout =>
					@.times = 0
				,300
			openQuestion: ->
				@.hasquestion = true
				@.lotteryShow = true
			submit: ->
				return false if @.sendAnswer
				if @.hasquestion
					i = Math.abs @.$children[1].slideNumber
					question = @.questionlist[i]
					@.sendData.question = question.q
					@.sendData.answer = @.question
					return @.send "请输入答案" if @.question is ""
				@.sendData.bag = @.bagIndex
				@.sendData.background = @.backgoundIndex
				@.sendData.link = @.messagelist[@.messageIndex].url
				# ajax , back an id
				# http://m.gicco.com/masterkong/?id=1
				# showUGC1("http://m.gicco.com/masterkong/?id=1") if showUGC1?
				@.sendAnswer = true
				axios.post apiLink+"active/autoSave/new/db/masterkong",@.sendData
				.then (msg)=>
					@.sendAnswer = false
					if msg.data.code is 200
						console.log msg.data.info.insertId
						if @.hasquestion
							@.lotteryShow = false
							showUGC2("http://m.giccoo.com/masterkong/?id=#{msg.data.info.insertId}") if showUGC2?
						else
							showUGC1("http://m.giccoo.com/masterkong/?id=#{msg.data.info.insertId}") if showUGC1?
					else
						console.log "err:",msg
				.catch (e)=>
					# alert e
					@.sendAnswer = false
					main.faild(e)	
			getInfo: (id)->
				axios.post apiLink+"active/masterkong/get/db/masterkong",{id: id}
				.then (msg)=>
					# console.log msg.data.info
					if msg.data.code is 200 and msg.data.info?
						console.log "msg:",msg.data.info
						@.questionPage = true
						@.questionHas = true if msg.data.info.question? and msg.data.info.question isnt ""
						@.getData = msg.data.info
					else
						@.getStart()
				.catch (e)=>
					console.log "miss info:",e
					@.getStart()
			checkAnswer: ->
				console.log "answer:",@answer
				return false if @.sendAnswer
				return @.send "请输入答案" if @answer is ""
				@.sendAnswer = true
				axios.post apiLink+"active/masterkong/check/db/masterkong",{id: $_GET["id"],answer: @.answer}
				.then (msg)=>
					if msg.data.code is 200
						@.questionPageShow = false
						showUGC3() if showUGC3?
					else
						@.send "答案不正确,请再想想"
						@.sendAnswer = false
				.catch (e)=>
					@.sendAnswer = false
					@.send "答案不正确,请再想想"

			getStart: ->
				console.log "start"

			hideNote: ->
				@.messageNote=false
			over: ->
				@.questionShow = false
				ugc.init()
			regame: ->
				window.location.reload()
			dateText: (date)->
				console.log date.replace(/-/g,"/")
				d = new Date date.replace(/-/g,"/")
				return d.getFullYear()+"年"+(d.getMonth()+1)+"月"+d.getDate()+"日"
			goUGC: ->
				@.lotteryShow = true
			sharePost: (base64)->
				ugc.app.renderer.render ugc.app.stage
				# @.ugc = ugc.app.view.toDataURL()
				@.ugc = base64
			restart: ->
				window.location.reload()
			goshare: ->
				# goShare()
				@.share()
			share: ->
				# goFinal() if goFinal?
				# showQR() if showQR?
				@.formBoxShow = false
				@.registerShow = false
				@.lotteryShow = false
				console.log "run share"
				@.callshare()
				
			callshare: ->
				ugc.app.renderer.render ugc.app.stage
				@.ugc = ugc.app.view.toDataURL()
				# ugc.buildUGC(ugc.app.view.toDataURL())
				image = ugc.app.view.toDataURL("image/jpeg",0.7)
				if @.wy
					folder = "masterkong"
					data = {
						image: image
						folder: folder
					}
					@.folder = folder
					return @.faild() unless image?
					return false if @.pushed
					if @.shareImageLink?
						@.pushed = false
						@.loading = false
						# ugc.back()
						neteaseShareImage()
						shareDone() if shareDone?
						# ugc.app.stage.removeChild @.bgImg
						return true
					axios.post imageurl,data
					.then (msg)=>
						if msg.data.code is 200 or msg.data.recode is 200
							console.log "post success",msg.data
							main.success(msg.data)
						else
							main.faild(msg)
					.catch (e)=>
						# alert e
						main.faild(e)		
				else
					@.ugcShow = true
					# ugc.back()
				# ugc.qrcode.visible = false
			success: (data)->
				@.shareImageLink = data.info
				@.pushed = false
				@.loading = false
				# ugc.back()
				neteaseShareImage()
				shareDone() if shareDone?
				# ugc.app.stage.removeChild @.bgImg
				# 抽奖
				# unless @.giveUp
				# 	setTimeout =>
				# 		@.getLottery()
				# 	,5000
			closeUGC: ->
				@.ugcShow = false
				shareDone() if shareDone?
				# ugc.app.stage.removeChild @.bgImg
			faild: (err)->
				console.log "faild upload",err
				@.pushed = false
				@.loading = false
			openSong: ->
				id = [169794,166317,112678,144143,64497,163639,28853351,153476,5271858,186980,170749,5276250,27591641,32922491,144380,5250828,28785688,186272,210866,555984413]
				# CloudMusic.song(id[resultNum])
				window.location.href = "https://music.163.com/#/song?id=#{id[resultNum]}"
			openInApp: ->
				CloudMusic.open("https://m.giccoo.com/draw-board/")
			
			runShakeHand: ->
				return false if @.shaked
				hand = document.getElementById "shakeHand"
				dt = 0.3
				repeatTime = 14
				hand.className = "hand hold"
				TweenMax.to hand,dt,{x: 10, rotation: 13, transformOrigin: "center bottom",}
				TweenMax.to hand,dt*2,{x: -10, rotation: -13, transformOrigin: "center bottom", delay: dt}
				TweenMax.to hand,dt*2,{x: 10, rotation: 13, transformOrigin: "center bottom", delay: dt*3}
				TweenMax.to hand,dt/2,{x: -10, rotation: -13, yoyo: true,repeat: repeatTime, transformOrigin: "center bottom", delay: dt*5}
				TweenMax.to hand,dt/2,{
					x: 0
					rotation: 0
					transformOrigin: "center bottom"
					delay: dt*5+dt/2*repeatTime
					onComplete: =>
						hand.className = "hand"
						setTimeout =>
							@.runShakeHand()
						,1000
				}
			runGift: ->
				@.messageShow = true
				msgs = [
					"有对象吗?",
					"结婚了吗?",
					"朋友们都结婚了吧?",
					"年终奖多少啊?",
					"买房了吗?",
					"你看你又胖啦!",
					"这么大岁数了要努力呀!"
				]
				# @.message = msgs[Math.floor(Math.random() * msgs.length)]
				document.getElementById("subtitles").innerHTML = "<div data-splitting>#{msgs[@.msgIndex]}</div>"
				Splitting()
				@.msgIndex = (@.msgIndex+1)%msgs.length
				SOUND.runRandomHit()
			gameOver: ->
				console.log "Start"
				@.gameEnd = true
			openNote: ->
				# clearTimeout _cache
				@.registerShow = true
				# _cache = setTimeout =>
				document.getElementById("note-text").innerHTML = "<div data-splitting>“对，点这里！”</div><div data-splitting>“咦，咱们俩的手好像啊~”</div>"
				Splitting()
				# ,400

			mute: ->
				@.canPlay = !@.canPlay
				unless @.canPlay
					SOUND.giftEnd.pause()
					SOUND.g.pause()
					SOUND.hit1.pause()
					SOUND.hit2.pause()
					SOUND.hit3.pause()
					SOUND.hit4.pause()

		mounted: ->
			console.log "version:",@.version
			TrueH = document.documentElement.clientHeight
			TrueW = document.documentElement.clientWidth
			if sys is "NeteaseMusic"
				@.wy = true
			h = TrueH*2*(2-TrueW*2/750+0.01)
			@.wy = CloudMusic.isInApp()
			version = CloudMusic.getClientVersion().split(".")
			ugc = new UGC({el: "ugc", w: 750, h: 750/TrueW*TrueH,callback: => })
			if $_GET["id"]?
				@.getInfo($_GET["id"])
			else
				@.getStart()

tryThis = (msg)->
	console.log "msg:",msg


# @codekit-append "../js/build.js"
