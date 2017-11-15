# @codekit-prepend "coffee/css3Prefix"

planets = {}
planetsList = {}
planetinfopage = {}
planetlastpage = {}
planetstars = {}
planetInfo =
	"planet-1":
		question: "「乌龟脱了衣服之后会不会跑快一点？」"
		answers: [
			{author:"@落夏",avatar:"avatar-6.jpg",answer:"小乌龟脱了衣服会害羞的，所以我们还是不要为难它吧。"}
			{author:"@sherry",avatar:"avatar-7.jpg",answer:"我去问过乌龟，他告诉我他没试过脱衣服，现在正在联系鳖，让鳖先试试"}
			{author:"@潜心",avatar:"avatar-8.jpg",answer:"会的，小乌龟脱了壳身体光光会害羞，害羞捂着脸一溜烟儿就跑啦。"}
			{author:"@小天的铠甲",avatar:"avatar-1.jpg",answer:"其实乌龟如果从小就不穿衣服，那他就会变成蜥蜴，跑的很快。如果长大了才意识到这个问题，那可以进行训练，变成忍者神龟，跑的很快。"}
			{author:"@皇家美素佳儿",avatar:"avatar-0.jpg",answer:"小乌龟跑得慢，可它依然坚持跑完比赛。而皇家美素佳儿菲仕兰牧场创始于 1871年，具有已有140年悠久历史，新鲜直取皇家第一道奶源，坚持百年皇家品质。"}
		]
		
	"planet-2":
		question: "「为什么喝完牛奶会有白胡子？」"
		answers: [
			{author:"@左左",avatar:"avatar-14.jpg",answer:"因为牛奶亲了你一下吖"}
			{author:"@丁丁历险记",avatar:"avatar-15.jpg",answer:"孩子的每个天真问题，都值得被认真回答：那是牛奶，不是胡子！"}
			{author:"@文妈Ellie",avatar:"avatar-16.jpg",answer:"因为你皮肤上细细的汗毛，也喜欢喝奶啊。"}
			{author:"@植鹤",avatar:"avatar-17.jpg",answer:"哇哇哇，这好可爱。因为啊，就像爸爸喝咖啡会长黑胡子一样，小朋友不要喝可乐和咖啡哦"}
			{author:"@皇家美素佳儿",avatar:"avatar-0.jpg",answer:"小小的白胡子是牛奶中的营养精华的天然乳脂，它比水分子有更强的吸附力，沾在嘴边就变成宝宝的小白胡子啦。皇家美素佳儿奶粉保留了牛奶中的这一道天然营养精华，所以宝宝喝的时候一定要舔干净哟。"}
			# {author:"@",avatar:".jpg",answer:""}
		]
	"planet-3":
		question: "「小鸟怎么才能和小鱼成为朋友呢？」"
		answers: [
			{author:"@郭小野",avatar:"avatar-18.jpg",answer:"合体变身成「 飞鱼」，瞬间成为形影不离的好朋友。"}
			{author:"@常住锁妖塔",avatar:"avatar-19.jpg",answer:"小鸟可以带着小鱼飞，去看天上的云彩啊。小鱼可以带着小鸟去看海底的海藻呢。(^V^)"}
			{author:"@举栗子的松鼠",avatar:"avatar-20.jpg",answer:"小鸟只要对着小鱼缸\"啾\"一下，他们就成为朋友了哦，就像这样 [轻轻的啾一下宝贝]"}
			{author:"@陈小洁",avatar:"avatar-21.jpg",answer:"海鸟跟鱼相爱，只是一场意外。"}
			{author:"@皇家美素佳儿",avatar:"avatar-0.jpg",answer:"小鸟可以陪小鱼看天上的云彩，小鱼可以带小鸟畅游海面。皇家美素佳儿新鲜直取皇家第一道奶源*，凝萃1:25**天然营养精华，和妈妈一起为北鼻找到大自然中滋养生命的奥秘，陪伴北鼻上天入地，一同成长。"}
		]
	"planet-4":
		question: "「为什么小牛冬天不穿衣服也不会感冒呢？」"
		answers: [
			{author:"@Bonita是少女啊",avatar:"avatar-10.jpg",answer:"因为牛皮厚呀，吹不冻（动）呀"}
			{author:"@之乎者也",avatar:"avatar-11.jpg",answer:"一.小牛会感冒，也怕冷，它会直打哆嗦。二.牛身上有毛，皮也比人类厚，相当于小孩穿毛衣了。"}
			{author:"@农夫三拳",avatar:"avatar-12.jpg",answer:"因为小牛是喝牛奶长大的，小朋友也要多喝牛奶才能像小牛一样不生病。"}
			{author:"@红岩魂",avatar:"avatar-13.jpg",answer:"因为牛皮厚，吹不冻呀。正儿八经滴说，奶牛平均体温是38.6 ℃左右，比人高一丢丢。在-15～40 ℃内的天里，它们的体温不会忽高忽低，而是保持恒定。小牛的临界温度低，比较能耐寒。所以在冬天里，小牛不穿衣服也不会怕冷。对啦，小牛从小喝奶牛妈妈的奶，提升耐寒能力。有爱的力量在，小牛一点也不冷。"}
			{author:"@皇家美素佳儿",avatar:"avatar-0.jpg",answer:"荷兰菲仕兰自家牧场，那里的农夫对待小牛就像亲人一样。农夫会用手指给小牛练习吮吸能力，锻炼身体，让小牛更好地喝牛妈妈的奶。牛奶是奶牛妈妈对小牛的爱，让小牛不畏寒冷；皇家美素佳儿延续母爱的力量，为宝宝增强免疫力，守护宝宝身体棒棒。即便如此，宝宝冬天也一定要穿衣服保暖哦～"}
		]
	"planet-5":
		question: "「大熊猫是用竹子在刷牙吗？」"
		answers: [
			{author:"@程泉",avatar:"avatar-1.jpg",answer:"熊猫爱吃竹子，但竹子刺多，总有些不乖的，卡在牙齿缝，所以要用竹子剔牙，就像你爱吃糖，可总有糖黏在牙齿上，所以要用糖把牙齿上的糖黏下来。不过呢，糖对牙齿有害，吃完记得刷牙哦。"}
			{author:"@田月霞",avatar:"avatar-2.jpg",answer:"我们大熊猫是在吃竹子哦，因为竹子长得非常快，所以大熊猫可以吃很多很多的竹子。竹子里有糖、蛋白质，大熊猫会挑选不同类型的竹子吃，有的会挑便于消化排泄的竹子。而且大熊猫是会吃竹笋的！"}
			{author:"@carl",avatar:"avatar-3.jpg",answer:"小宝宝，咱们哪个周末一起去动物园看看大熊猫，到底在用竹子干嘛，是吃竹子，还是在用竹子剔牙。"}
			{author:"@冬霁",avatar:"avatar-4.jpg",answer:"大熊猫是在吃竹子，但是如果吃了竹子一不小心塞牙了，没准也会用竹子剔牙了吧。脑补，卖萌的大熊猫剔牙场景"}
			{author:"@小风吹散大树叶",avatar:"avatar-5.jpg",answer:"只有牙齿不好的宝宝才会剔牙喔，所以你平时要好好刷牙，这样就不会塞牙了，熊猫宝宝也是这样的。熊猫宝宝用竹子剔牙可能是平时没有听熊猫妈妈的话好好刷牙。"}
			{author:"@皇家美素佳儿",avatar:"avatar-0.jpg",answer:"每一位宝宝在妈妈的心中都是萌萌的「大熊猫」，心头的「国宝」。皇家美素佳儿新鲜直取皇家第一道奶源*，凝萃1:25**天然营养精华，因珍稀而珍贵，助力宝宝多方位成长。"}
		]
load = {}
fisrtPage = {}
lastPageShow = false
createTimeWait = 1200 #对话创建时间间隔.
shareContent =
	title: "知乎北鼻版-天真星球"
	desc: "快准备好知识，一起探索这个星球，穿越孩次元！"
	link: "http://m.giccoo.com/friso-island/"
	imgUrl: "http://m.giccoo.com/friso-island/img/share.jpg"
	success: ->
	cancel: ->
window.onload = ->
	# initPlanets()
	# initVuePlanetInfoPage()
	# alert document.getElementsByTagName("body")[0].offsetHeight

	load = new Vue
		el: "#load"
		data: 
			loadend: false

	planetstars = new Vue
		el: "#navbar"
		data:
			stars: [false,false,false,false,false]
			show: false
		methods:
			backNormal: ->
				if planetinfopage.opened
					return false

				planets.stopGyroscopeControl() if planets isnt {} and planets.stopGyroscopeControl?
				planets.startAutorotate() if planets isnt {} and planets.stopGyroscopeControl?
				if planetinfopage.shownote?
					planetinfopage.shownote = true
					planetinfopage.opendG = false 

	fisrtPage = new Vue
		el: "#page-one"
		data:
			notShowTime: true
			texts:[
				"每个天真星球上"
				"都藏着一个脑洞大开的"
				"天真提问"
				"和皇家美素佳儿"
				"一起探索星球"
				"用知识穿越孩次元"
			]

		methods:
			getStart: ->
				@notShowTime = true
				planetstars.show = true
				# initPlanets()
				initVuePlanetInfoPage()
		created: ->
			console.log "created. ready to animation"
			load.loadend = true
			@notShowTime = false
			document.getElementById("main").style.display = "block"

			# setTimeout ->
			# 	loadAllScript()
			# ,1000
			# initVuePlanetInfoPage()

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
loadedAll = ->
	initVuePlanetInfoPage()
initVuePlanetInfoPage = ->

	planetinfopage = new Vue
		el: "#planet-page"
		data:
			show: true
			planetName: "planet-1"
			planet: planetInfo["planet-1"]
			info: []
			opened: false
			shownote: true
			opendG: false
			moving: false
			blur: false
			cacheTimeout: {}
		methods:
			answersScroll: ->
				dom = document.getElementById "answers"
				if dom.scrollHeight < dom.offsetHeight
					return false
				createjs.Tween.get(dom).wait(100).to({scrollTop: dom.scrollHeight},400,createjs.Ease.linear)
			keepgoing: ->
				@opened = false
				if lastPageShow
					console.log "open last page"
					@shownote = false
					@blur = true
					planetstars.show = false
					planets.stopGyroscopeControl()
					planets.startAutorotate()
					planetlastpage.opened = true
					return true
				console.log @opendG,@shownote
				if not @opendG
					@shownote = true
					planets.startAutorotate()

			startG: ->
				@shownote = false
				@opendG = true
				planets.startGyroscopeControl()
			runMessage: (i)->
				if not @opened or i > (@planet.answers.length-1)
					@moving = false
					return false
				@moving = true
				n = i+1
				@cacheTimeout = setTimeout =>
					@info.push true
					@answersScroll() if n > 1
					@runMessage(n)
				,createTimeWait
		watch:
			opened: (val)->
				if val
					if not planetsList[@planetName].overreaded
						planetsList[@planetName].overreaded = true
						setAstarLight()
					self = @
					@runMessage(0)
						
				else
					clearTimeout @cacheTimeout
					setTimeout =>
						@info	= []
					,300
		mounted: ->
			initPlanets()
	planetlastpage = new Vue
		el: "#planet-last-page"
		data: 
			opened: false
initVuePlanetsMedal = ->
	console.log "init vue"
	for i in [1...6]
		planetsList["planet-#{i}"] = new Vue
			el: "#planet-#{i}"
			data: 
				overreaded: false
initPlanets = ->
	defaultY = 700
	try
		planets = new PhotoSphereViewer
			panorama: "./img/planet-bg.jpg"
			container: document.getElementById "planets"
			# loading_html: '<div class="planet-loading ball-spin-fade-loader"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>'
			loading_txt: '加载中...'
			gyroscope: true
			time_anim: 0
			latitude_range: [-3*Math.PI/12, 3*Math.PI/12]
			default_fov: 50
			navbar: false
			# [
			# 	"gyroscope"
			# 	{
			# 		id: 'my-button',
			# 		title: 'Hello world',
			# 		className: 'custom-button',
			# 		content: 'Custom',
			# 		onClick: ->
			# 			alert('Hello from custom button')
			# 	}
			# ]
			markers: [
				{
					id: "planet-1"
					x: 100
					y: defaultY+380
					html: '<div id="planet-1" class="planet planet-1"><div v-if="overreaded" class="planet-medal animated fadeIn duration-10"><img src="./img/planet-medal.png" /></div><img src="./img/planet-1.png" /></div>'
				}
				{
					id: "planet-2"
					x: -700
					y: defaultY+200
					html: '<div id="planet-2" class="planet planet-2"><div v-if="overreaded" class="planet-medal animated fadeIn duration-10"><img src="./img/planet-medal.png" /></div><img src="./img/planet-2.png" /></div>'
				}
				{
					id: "planet-3"
					x: -700*3
					y: defaultY+300
					html: '<div id="planet-3" class="planet planet-3"><div v-if="overreaded" class="planet-medal animated fadeIn duration-10"><img src="./img/planet-medal.png" /></div><img src="./img/planet-3.png" /></div>'
				}
				{
					id: "planet-4"
					x: 700*2
					y: defaultY+360
					html: '<div id="planet-4" class="planet planet-4"><div v-if="overreaded" class="planet-medal animated fadeIn duration-10"><img src="./img/planet-medal.png" /></div><img src="./img/planet-4.png" /></div>'
				}
				{
					id: "planet-5"
					x: 700
					y: defaultY+260
					html: '<div id="planet-5" class="planet planet-5"><div v-if="overreaded" class="planet-medal animated fadeIn duration-10"><img src="./img/planet-medal.png" /></div><img src="./img/planet-5.png" /></div>'
				}
				{
					id: "balloon-1"
					x: 840*0
					y: defaultY+100
					html: '<div class="planet-balloon-small balloon-1"><img src="./img/balloon-small.png"/></div>'
				}
				{
					id: "balloon-2"
					x: 840*1
					y: defaultY+200
					html: '<div class="planet-balloon-small balloon-2"><img src="./img/balloon-small.png"/></div>'
				}
				{
					id: "balloon-3"
					x: 840*2.2
					y: defaultY+50
					html: '<div class="planet-balloon-big balloon-3"><img src="./img/balloon-big.png"/></div>'
				}
				{
					id: "balloon-4"
					x: 840*3.9
					y: defaultY+400
					html: '<div class="planet-balloon-small balloon-4"><img src="./img/balloon-small.png"/></div>'
				}
				{
					id: "balloon-5"
					x: 840*4.6
					y: defaultY+40
					html: '<div class="planet-balloon-small balloon-5"><img src="./img/balloon-small.png"/></div>'
				}
				{
					id: "balloon-6"
					x: 840*5.4
					y: defaultY+140
					html: '<div class="planet-balloon-big balloon-6"><img src="./img/balloon-big.png"/></div>'
				}
				{
					id: "balloon-7"
					x: 840*5.4-220
					y: defaultY+20
					html: '<div class="planet-balloon-small balloon-7"><img src="./img/balloon-small.png"/></div>'
				}
				{
					id: "balloon-8"
					x: 840*4.6-120
					y: defaultY+140
					html: '<div class="planet-balloon-big balloon-8"><img src="./img/balloon-big.png"/></div>'
				}
				{
					id: "balloon-9"
					x: 840*3.9-120
					y: defaultY+500
					html: '<div class="planet-balloon-big balloon-9"><img src="./img/balloon-big.png"/></div>'
				}
				{
					id: "balloon-10"
					x: 840*2.2-220
					y: defaultY+150
					html: '<div class="planet-balloon-small balloon-10"><img src="./img/balloon-small.png"/></div>'
				}
				{
					id: "balloon-11"
					x: 840*1-190
					y: defaultY+100
					html: '<div class="planet-balloon-big balloon-11"><img src="./img/balloon-big.png"/></div>'
				}
				{
					id: "balloon-12"
					x: 840*0+170
					y: defaultY+200
					html: '<div class="planet-balloon-big balloon-12"><img src="./img/balloon-big.png"/></div>'
				}
			]
		planets.on "ready", ->
			console.log "ready"
			# planets.startGyroscopeControl()
			initVuePlanetsMedal()
			# setTimeout ->
			# 	planets.startGyroscopeControl()
			# ,1000
		planets.on "select-marker", (marker)->
			console.log "id: ",marker.id
			planetinfopage.planetName = marker.id
			planetinfopage.planet = planetInfo[marker.id]
			planetinfopage.opened = true
			planetinfopage.shownote = false
			
			# longitude_range: [-3*Math.PI/4, 3*Math.PI/4]
	catch e
		console.log "error:",e
		planets = document.getElementById "planets"
		planets.innerHTML = "<div class='sorryContent'><div class='text'>很抱歉您的浏览器或手机系统版本过低,请升级到支持 WebGL 的版本后浏览.</div></div>"
	
	
	# alert window.DeviceOrientationEvent
	# alert Sphoords.isDeviceOrientationSupported
	# planets.on 'ready', ->
	# 	planets.toggleDeviceOrientation()
	console.log document.getElementById "planets"
setAstarLight = ->
	for i in [0...planetstars.stars.length]
		n = planetstars.stars.length - 1 - i
		console.log n,planetstars.stars.length - 1,n > 0
		if not planetstars.stars[n]
			Vue.set(planetstars.stars,n,true)
			break
	run = true
	for item in planetstars.stars
		if not item
			run = false
			break
	if run 
		console.log "You have all stars"
		lastPageShow = true
jsList = [
	"min/three.min.js"
	"min/tweenjs.min.js"
	"min/D.min.js"
	"min/doT.min.js"
	"min/uevent.min.js"
	"min/photo-sphere-viewer.min.js"
	"Three.DeviceOrientationControls.js"
]
listLoaded = 0
loadAllScript = (i = 0)->
	script = document.createElement("script")
	script.src = "/libs/js/"+jsList[i]
	script.onload = ->
		if jsList[i+1]?
			loadAllScript i+1
		listLoaded++
		if listLoaded >= jsList.length
			loadedAll()
	s = document.getElementsByTagName("script")[0]
	s.parentNode.insertBefore(script, s)
	# head = document.getElementsByTagName('head')[0]
	# script = document.createElement('script')
	# script.src = "/libs/js/"+list[i]
	# head.appendChild(script)
loadWechatConfig = ->
	url = encodeURIComponent window.location.href.split("#")[0]
	hm = document.createElement('script')
	hm.src = "http://api.giccoo.com/api/config?url="+url
	s = document.getElementsByTagName('script')[0]
	s.parentNode.insertBefore hm, s
	return
		
	