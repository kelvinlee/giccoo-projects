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
		answer1like: 108,
		answer2: "长高是宝宝都有的小心愿，皇家美素佳儿新鲜直取皇家第一道奶源*，凝萃1:25**天然营养精华，不仅陪伴宝宝长高，还助力宝宝免疫力、消化力、保护力多方位发展。",
		answer2by: "皇家美素佳儿",
		answer2img: null,
		answer2like: 88,
		answer3: null,
		answer3by: null,
		answer3img: null,
		answer3like: 0,
		like: 0,
		focus: 361,
		answers: 68,
		link: "https://www.zhihu.com/question/66045533"
	},
	{
		id: 2,
		question: "为什么小牛冬天不穿衣服也不会感冒呢？",
		answer1: "因为牛皮厚，吹不冻呀。正儿八经滴说，奶牛平均体温是38.6 ℃左右，比人高一丢丢。在-15～40 ℃内的天里，它们的体温不会忽高忽低，而是保持恒定。小牛的临界温度低，比较能耐寒。所以在冬天里，小牛不穿衣服也不会怕冷。对啦，小牛从小喝奶牛妈妈的奶，提升耐寒能力。有爱的力量在，小牛一点也不冷。",
		answer1by: "红岩魂",
		answer1img: "",
		answer1like: 76,
		answer2: "荷兰菲仕兰自家牧场，那里的农夫对待小牛就像亲人一样。农夫会用手指给小牛练习吮吸能力，锻炼身体，让小牛更好地喝牛妈妈的奶。牛奶是奶牛妈妈对小牛的爱，让小牛不畏寒冷；皇家美素佳儿延续母爱的力量，为宝宝增强免疫力，守护宝宝身体棒棒。即便如此，宝宝冬天也一定要穿衣服保暖哦～",
		answer2by: "皇家美素佳儿",
		answer2img: null,
		answer2like: 45,
		answer3: null,
		answer3by: null,
		answer3img: null,
		answer3like: 0,
		like: 0,
		focus: 66,
		answers: 15,
		link: "https://www.zhihu.com/question/66045733"
	},
	{
		id: 3,
		question: "鲸鱼宝宝是怎么长得这么大的？",
		answer1: "鲸鱼宝宝分成齿鲸和须鲸。它们的爸爸妈妈非常大，须鲸中的蓝鲸可是世界上最大的动物，比大象大很多很多。鲸鱼在海里生活，齿鲸宝宝从小长了锋利的牙齿，是小吃货，爱吃海洋里的动物，就连海鸟也不放过。相比须鲸宝宝温柔多了，它们会吃小虾米和浮游生物，一吃就吃一大口。因为进化和基因的缘故，鲸鱼的体型都要比一般的鱼儿大很多，并不只是因为吃得多啦。",
		answer1by: "郭小野",
		answer1img: "friso/image-1507980147361-5014.png",
		answer1like: 56,
		answer2: "长大后体型称霸世界的鲸鱼宝宝，小时候也离不开妈妈的精心照顾。来自荷兰自家牧场的皇家美素佳儿，有妈妈爱的味道，让宝宝长高长大的同时，体格由内而外强健，收获更多珍贵成长体验。",
		answer2by: "皇家美素佳儿",
		answer2img: "",
		answer2like: 34,
		answer3: null,
		answer3by: null,
		answer3img: null,
		answer3like: 0,
		like: 0,
		focus: 36,
		answers: 5,
		link: "https://www.zhihu.com/question/66045853"
	},
	{
		id: 4,
		question: "大熊猫是用竹子在剔牙吗？",
		answer1: "大熊猫是在吃竹子哦。竹子里它们需要的营养，大熊猫会挑选不同类型的竹子吃，有的会挑便于消化的竹子。大熊猫喜欢吃新鲜的竹子，而且它们会吃竹笋呢。",
		answer1by: "田月震",
		answer1img: "",
		answer1like: 56,
		answer2: "每一位宝宝在妈妈的心中都是萌萌的「大熊猫」，心头的「国宝」。皇家美素佳儿新鲜直取皇家第一道奶源*，凝萃1:25**天然营养精华，因珍稀而珍贵，助力宝宝多方位成长。",
		answer2by: "皇家美素佳儿",
		answer2img: null,
		answer2like: 21,
		answer3: null,
		answer3by: null,
		answer3img: null,
		answer3like: 0,
		like: 0,
		focus: 29,
		answers: 9,
		link: "https://www.zhihu.com/question/66046098"
	},
	{
		id: 5,
		question: "妈妈，水果也分男水果和女水果吗？",
		answer1: "这个问题，妈妈之前没有想过，跟你一起去找答案好不好？",
		answer1by: "筱恬的小甜甜",
		answer1img: null,
		answer1like: 76,
		answer2: "这位妈妈回答咔咔的，点赞～皇家美素佳儿陪伴妈妈和宝宝一起探索自然奥秘，体验更大的世界，每一位宝宝的想法都值得被尊重。",
		answer2by: "皇家美素佳儿",
		answer2img: null,
		answer2like: 34,
		answer3: null,
		answer3by: null,
		answer3img: null,
		answer3like: 0,
		like: 0,
		focus: 261,
		answers: 29,
		link: "https://www.zhihu.com/question/66046275"
	},
	{
		id: 6,
		question: "小鸟怎么才能和小鱼成为朋友呢?",
		answer1: "合体变身成「 飞鱼」，瞬间成为形影不离的好朋友。",
		answer1by: "苏诀",
		answer1img: null,
		answer1like: 34,
		answer2: "小鸟可以陪小鱼看天上的云彩，小鱼可以带小鸟畅游海面。皇家美素佳儿新鲜直取皇家第一道奶源*，凝萃1:25**天然营养精华，和妈妈一起为北鼻找到大自然中滋养生命的奥秘，陪伴北鼻上天入地，一同成长。",
		answer2by: "皇家美素佳儿",
		answer2img: null,
		answer2like: 18,
		answer3: null,
		answer3by: null,
		answer3img: null,
		answer3like: 0,
		like: 0,
		focus: 23,
		answers: 12,
		link: "https://www.zhihu.com/question/66046404"
	},
	{
		id: 7,
		question: "兔兔想听音乐的时候该怎么戴耳机呢？",
		answer1: "可以带他看疯狂动物城，那里面有兔兔带耳机正确的方法。",
		answer1by: "邵帅",
		answer1img: null,
		answer1like: 26,
		answer2: "皇家美素佳儿，也会竖起耳朵，「听见」宝宝的心声噢，口感清淡，全乳糖，宝宝爱喝~",
		answer2by: "皇家美素佳儿",
		answer2img: null,
		answer2like: 14,
		answer3: null,
		answer3by: null,
		answer3img: null,
		answer3like: 0,
		like: 0,
		focus: 16,
		answers: 5,
		link: "https://www.zhihu.com/question/66046515"
	},
	{
		id: 8,
		question: "妈妈，为什么拍照的时候，要喊茄子呢？",
		answer1: "因为喊茄子的时候，嘴巴会呈现弯曲的形状，就像可爱的笑脸一样啊，笑着拍照是最美哒。",
		answer1by: "杨鹏",
		answer1img: "friso/image-1507980483241-9763.png",
		answer1like: 67,
		answer2: "皇家美素佳儿陪伴妈妈和宝宝共同健康成长，每一天都在微笑，拥有「茄子」一般迷人的笑容。",
		answer2by: "皇家美素佳儿",
		answer2img: null,
		answer2like: 32,
		answer3: null,
		answer3by: null,
		answer3img: null,
		answer3like: 0,
		like: 0,
		focus: 130,
		answers: 17,
		link: "https://www.zhihu.com/question/66046626"
	},
	{
		id: 9,
		question: "妈妈我能用肚脐眼看见什么呀？",
		answer1: "可以看见时光隧道。",
		answer1by: "Arthur Lee",
		answer1img: null,
		answer1like: 32,
		answer2: "通过肚脐眼，宝宝可以看到一条你还在妈妈肚子里的「时光隧道」。皇家美素佳儿荷兰自家牧场具有140多年的悠久历史，新鲜直取皇家第一道奶源**，穿越百年时光的隧道，坚持百年匠心品质。",
		answer2by: "皇家美素佳儿",
		answer2img: null,
		answer2like: 23,
		answer3: null,
		answer3by: null,
		answer3img: null,
		answer3like: 0,
		like: 0,
		focus: 42,
		answers: 7,
		link: "https://www.zhihu.com/question/66046748"
	},
	{
		id: 10,
		question: "风要是太大，我会不会被吹成光头？",
		answer1: "会，自从爸爸开车越来越多，吹过来的风那个大啊，发现头发也越来越少了。后来啊，开车的时候关上窗户，头发才又多了起来。所以BB坐车记得不要把头伸出窗外哦。",
		answer1by: "汽车奇谈高小强",
		answer1img: "",
		answer1like: 54,
		answer2: "奔跑起来，才会有风，皇家美素佳儿助力宝宝全方位成长，让宝宝自由奔跑，探索自然。宝宝想知道答案吗，首先要有一个壮壮的身体哦～",
		answer2by: "皇家美素佳儿",
		answer2img: null,
		answer2like: 22,
		answer3: null,
		answer3by: null,
		answer3img: null,
		answer3like: 0,
		like: 0,
		focus: 245,
		answers: 57,
		link: "https://www.zhihu.com/question/66046848"
	},
	{
		id: 11,
		question: "我胸前有两颗扣子，小牛为什么比我多？",
		answer1: "宝宝，那是因为小牛的「衣服」比你大啊！",
		answer1by: "何俊",
		answer1img: null,
		answer1like: 399,
		answer2: "奶牛有四颗纽扣，哺乳能力和人相比更强。喝妈妈的奶是宝宝直接获取营养的方式。可妈妈要上班，哺乳能力有限，这时可以找奶牛妈妈帮忙。皇家美素佳儿凝萃1：25天然营养精华，自然接近母乳，可以帮助妈妈平稳地度过转奶期。",
		answer2by: "程一",
		answer2img: null,
		answer2like: 230,
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
		id: 12,
		question: "妈妈，小鱼的刺会不会扎到自己？",
		answer1: "鱼的身体里有一位默默的守护者，它叫做结缔组织，像麦芽糖的糖裹着小刺，保护小鱼的身体不受伤。",
		answer1by: "老王",
		answer1img: "friso/image-1507470577457-5809.png",
		answer1like: 226,
		answer2: "皇家美素佳儿是宝宝强健身体的守护者，陪伴宝宝和妈妈共同成长。",
		answer2by: "皇家美素佳儿",
		answer2img: null,
		answer2like: 186,
		answer3: null,
		answer3by: null,
		answer3img: null,
		answer3like: 0,
		like: 0,
		focus: 847,
		answers: 74,
		link: "https://www.zhihu.com/question/65693128"
	},
	{
		id: 13,
		question: "奶牛妈妈开心，牛奶会不会更好喝？",
		answer1: "当然啦，就像你开心的时候空气都是甜的。",
		answer1by: "左左",
		answer1img: null,
		answer1like: 122,
		answer2: "会呀，在荷兰菲仕兰自家牧场，那里农夫对待奶牛就像对待家人一样，农夫还会给自己的手指给刚出生的小牛吮吸，练习吸奶的动作，据说皇家第一道奶源来自这牧场里快乐的牛牛们，新鲜营养又好喝哦。",
		answer2by: "子夏",
		answer2img: null,
		answer2like: 92,
		answer3: null,
		answer3by: null,
		answer3img: null,
		answer3like: 0,
		like: 0,
		focus: 293,
		answers: 37,
		link: "https://www.zhihu.com/question/65692909"
	},
	{
		id: 14,
		question: "动画片的粑粑有眼睛，为什么我的没有？",
		answer1: "因为辣（眼睛）。",
		answer1by: "Aaron Zhang",
		answer1img: "friso/image-1507469245796-8145.png",
		answer1like: 135,
		answer2: "宝宝想到的这个问题，大人往往想不到呢。这说明宝宝的思维小宇宙在旋转跳跃哦。皇家美素佳儿，新鲜直取皇家第一道奶源，凝萃天然营养精华，支持小宇宙爆发。",
		answer2by: "皇家美素佳儿",
		answer2img: null,
		answer2like: 89,
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
		id: 15,
		question: "牛奶怎么只有白色，会有彩虹样的奶吗？",
		answer1: "因为白色最干净最有营养最安全，牛奶在外面是白色，但是到了你肚肚里就会变成彩虹色，所以宝宝想要彩虹牛奶就要把它喝到肚子里哟。",
		answer1by: "路人十三",
		answer1img: null,
		answer1like: 184,
		answer2: "牛奶的酪蛋白让牛奶呈现白色，酪蛋白具有丰富天然营养，而皇家美素佳儿来自荷兰，鲜奶中天然乳蛋白含量高于欧洲其他奶源地，凝萃的都是天然营养精华哦。",
		answer2by: "皇家美素佳儿",
		answer2img: null,
		answer2like: 128,
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
		id: 16,
		question: "北极熊来热带旅游会不会出汗？",
		answer1: "如果我是北极熊我会先打个电话跟热带熊打听一下生活环境什么的，旅游攻略不做好，尤其出境，那就是噩梦啊。",
		answer1by: "大鸡腿",
		answer1img: null,
		answer1like: 158,
		answer2: "皇家美素佳儿和伟大的母爱力量在一起，助力宝宝多方位成长，大胆探索自然奥秘！",
		answer2by: "皇家美素佳儿",
		answer2img: null,
		answer2like: 105,
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
		id: 17,
		question: "为什么妈妈不让我吃手手？",
		answer1: "大拇指是Daddy Finger，你吃的话爸爸会头痛。",
		answer1by: "Bo Lu",
		answer1img: null,
		answer1like: 86,
		answer2: "手手上有很多宝宝看不见的「坏朋友」，吃进肚子里不好哦。宝宝的免疫力离不开营养的支持，皇家美素佳儿凝萃天然营养精华，助力宝宝免疫力、消化力、保护力发展。",
		answer2by: "皇家美素佳儿",
		answer2img: null,
		answer2like: 49,
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
		id: 18,
		question: "乌龟脱了衣服之后会不会跑快一点？",
		answer1: "小乌龟脱了衣服会害羞的，所以我们还是不要为难它吧。",
		answer1by: "落夏",
		answer1img: "",
		answer1like: 121,
		answer2: "小乌龟跑得慢，可它依然坚持跑完比赛。而皇家美素佳儿菲仕兰牧场创始于 1871年，具有已有140年悠久历史，新鲜直取皇家第一道奶源，坚持百年皇家品质。",
		answer2by: "皇家美素佳儿",
		answer2img: null,
		answer2like: 87,
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
		id: 19,
		question: "牙齿里的小虫虫会变成蝴蝶飞走吗？",
		answer1: "会呀！牙里的小虫虫就像苹果里的小虫虫一样，它会把你的牙吃空后悄悄飞走，所以你要刷牙保护牙齿哦。",
		answer1by: "木木",
		answer1img: null,
		answer1like: 129,
		answer2: "皇家美素佳儿口感清淡、全乳糖，宝宝爱喝，有妈妈的味道，宝宝最喜欢。",
		answer2by: "皇家美素佳儿",
		answer2img: null,
		answer2like: 64,
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
		id: 20,
		question: "大象走路的时候，会不会踩到自己的鼻子？",
		answer1: "小象可能会踩到的，就像是我们小时候走路老容易摔跤，后来多踩几次就会有经验了，知道脚和鼻子怎么配合了。等小象变成大象了，再踩到的机会就少了。",
		answer1by: "哇哈哈",
		answer1img: "friso/image-1507471546121-8132.png",
		answer1like: 111,
		answer2: "会，所以大象妈妈告诉小象要抬头挺胸快快长高，宝宝也是哦！",
		answer2by: "皇家美素佳儿",
		answer2img: null,
		answer2like: 67,
		answer3: null,
		answer3by: null,
		answer3img: null,
		answer3like: 0,
		like: 0,
		focus: 222,
		answers: 27,
		link: "https://www.zhihu.com/question/65373183"
	},
	{
		id: 23,
		question: "我们喝了奶牛妈妈的奶，小牛会伤心吗?",
		answer1: "奶牛妈妈有很多奶，多到小牛吃不完。在荷兰菲仕兰农场里，农夫精心照顾奶牛妈妈和小牛，就像一家人一样。农夫还会拿自己的手指给小牛练习吸奶的动作，所以奶牛妈妈和小牛一定乐意分享牛奶给家人……",
		answer1by: "嗷小明",
		answer1img: null,
		answer1like: 108,
		answer2: "因为小牛学会了分享啊，他把自己喝的牛奶分享给你，你也要学会分享，把自己的东西分享给别的小朋友。",
		answer2by: "不吃栗子",
		answer2img: null,
		answer2like: 66,
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
		id: 24,
		question: "为什么喝完牛奶之后会有白胡子？",
		answer1: "因为牛奶亲了你一下吖",
		answer1by: "左左",
		answer1img: null,
		answer1like: 65,
		answer2: "小小的白胡子是牛奶中的营养精华的天然乳脂，它比水分子有更强的吸附力，沾在嘴边就变成宝宝的小白胡子啦。皇家美素佳儿奶粉保留了牛奶中的这一道天然营养精华，所以宝宝喝的时候一定要舔干净哟。",
		answer2by: "大球球",
		answer2img: null,
		answer2like: 23,
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
		id: 25,
		question: "我喝的奶粉为什么有妈妈的味道？",
		answer1: "是爱的味道呀～",
		answer1by: "莫小莫姑娘",
		answer1img: null,
		answer1like: 77,
		answer2: "妈妈的味道，其实就是新鲜牛奶和皇家美素佳儿奶粉中天然乳脂的味道，天然乳脂含有丰富的天然营养精华，更加自然接近母乳，当然就有妈妈的味道啦。",
		answer2by: "xiaochu",
		answer2img: null,
		answer2like: 23,
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
		id: 26,
		question: "妈妈，你的肚子里有厕所吗？",
		answer1: "妈妈的肚子很神奇，什么都有。有棒棒糖，西瓜，菠萝，大鸡腿，烤鸭，麻辣烫，火锅…很多好吃的～有好玩的，变形金刚，洋娃娃，游乐场…很多好玩的～",
		answer1by: "郭羽靖",
		answer1img: null,
		answer1like: 56,
		answer2: "宝宝你在妈妈肚子里还不会上厕所，等你出生之后小肚肚才开始学会生产便便的，它跟你一样还小，所以现在你要喝皇家美素佳儿，好好保护它。",
		answer2by: "骆驼君",
		answer2img: null,
		answer2like: 38,
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
		id: 27,
		question: "我的眼睛很小，怎么能看到那么大的世界？",
		answer1: "宝贝你站得越高就会看得越远，你看到的世界也会越大哦，如果你像航天员叔叔们站到外太空看世界的话，那你能看清楚整个世界哦",
		answer1by: "SK英国皇家成长中心",
		answer1img: null,
		answer1like: 29,
		answer2: "皇家美素佳儿帮助宝宝快快长高，让小眼睛看到更大的世界。",
		answer2by: "皇家美素佳儿",
		answer2img: null,
		answer2like: 18,
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
		id: 28,
		question: "长颈鹿冬天要戴多长的围巾？",
		answer1: "－长颈鹿冬天只要戴正常长度但是好看的围巾。因为围巾不是用来保暖的，是用来搭配的～",
		answer1by: "何方",
		answer1img: null,
		answer1like: 43,
		answer2: "喝皇家美素佳儿才能跟长颈鹿一样快快长高哦！",
		answer2by: "皇家美素佳儿",
		answer2img: null,
		answer2like: 12,
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
		id: 29,
		question: "屁是一个泡泡嘛？它为什么臭臭的额，还会尖叫？",
		answer1: "屁啊～是你肚子里的食物的最后叹息。有的食物很开心地分解了，有的有些不高兴，所以叹气是臭臭的。肚子里站岗警察在赶走他们的时候，他们还会发出尖叫声。",
		answer1by: "郭羽靖",
		answer1img: null,
		answer1like: 31,
		answer2: "好吸收的皇家美素佳儿奶粉，守护宝宝由内而外身体强健，延续妈妈爱的力量，陪伴宝宝珍贵成长。",
		answer2by: "皇家美素佳儿",
		answer2img: null,
		answer2like: 10,
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
		id: 30,
		question: "给蛇打结，它会和我一样聪明地解开吗？",
		answer1: "你解开结是解开了另一个东西，而蛇是舒展自己的身体，让它回到让自己舒服的状态，就像你盘腿坐，然后把腿伸直一样自然，不难",
		answer1by: "嗷呜",
		answer1img: null,
		answer1like: 23,
		answer2: "皇家美素佳儿助力宝宝骨骼发育，像小蛇宝宝一样健康灵活、舒展自如。",
		answer2by: "皇家美素佳儿",
		answer2img: null,
		answer2like: 10,
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
		id: 31,
		question: "世界上哪里的小朋友最高？",
		answer1: "勇于承认错误的小盆友最高，因为勇气； 乐观开朗的小盆友最高，因为心态；",
		answer1by: "婗同学",
		answer1img: null,
		answer1like: 12,
		answer2: "荷兰的勇敢乐观开朗的小朋友最高，因为皇家美素佳儿。",
		answer2by: "皇家美素佳儿",
		answer2img: null,
		answer2like: 8,
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
			$("body").addClass "pop-open"
			$(".pop").addClass "on"
			try
				scrollTop = document.scrollingElement.scrollTop
				document.body.style.top = -scrollTop + 'px'
			catch e
				console.log e
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

	# music

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





