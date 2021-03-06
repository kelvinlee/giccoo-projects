random = 1+parseInt Math.random()*5
_CDN = "//image.giccoo.com/projects/Levi/"
list = [
	"#{_CDN}img/ugc-bg-1.jpg"
	"#{_CDN}img/ugc-bg-2.jpg"
	"#{_CDN}img/ugc-bg-3.jpg"
	"#{_CDN}img/ugc-bg-4.jpg"
	"#{_CDN}img/ugc-bg-5.jpg"
	"#{_CDN}img/ugc-name-1.png"
	"#{_CDN}img/ugc-name-2.png"
	"#{_CDN}img/ugc-name-3.png"
	"#{_CDN}img/ugc-name-4.png"
	"#{_CDN}img/ugc-name-5.png"
	"#{_CDN}img/ugc-note-text-1.png"
	"#{_CDN}img/ugc-note-text-2.png"
	"#{_CDN}img/ugc-note-text-3.png"
	"#{_CDN}img/ugc-note-text-4.png"
	"#{_CDN}img/ugc-note-text-5.png"
	"#{_CDN}img/ugc-singer-1.png"
	"#{_CDN}img/ugc-singer-2.png"
	"#{_CDN}img/ugc-singer-3.png"
	"#{_CDN}img/ugc-singer-4.png"
	"#{_CDN}img/ugc-singer-5.png"
	"#{_CDN}img/ugc-text-2.png"
	"#{_CDN}img/ugc-border.png"
	"#{_CDN}img/ugc-logo.png"
	"#{_CDN}img/album-bg.png"
	"#{_CDN}img/album-cover-#{random}.png"
	"#{_CDN}img/album-poster.png"
	"#{_CDN}img/album-upload-text.png"
	"#{_CDN}img/album-upload-over-text.png"
	"#{_CDN}img/mask.png"
	"#{_CDN}img/qrcode.png"
	"#{_CDN}img/bo.png"
	"#{_CDN}img/avatar.jpg"
]
class UGC
	builded: false
	default:
		w: 320
		h: 160
		running: true
	started: false
	over: false
	online: false
	blocks: []
	bottles: []
	enemys: []
	lights: []
	_progress: 0
	lineMoving: false
	startTime: null
	loadNumber: 0
	constructor: (arg)->
		@.opts =
			el: "main"
			w: 750
			h: 1314
			trueH: 1314
			count: 6
			speed: 1
			alpha: 0.8
			defaultShow: true
			class: ""
			fillColor: 0x66CCFF
		@.opts = Object.assign @.opts,arg
		@.default.h = document.documentElement.clientHeight
		@.default.w = document.documentElement.clientWidth
		@.default.ratio = @.opts.w / @.default.w
		@app = new PIXI.Application
			width: @.opts.w
			height: @.opts.h
			transparent: true
			preserveDrawingBuffer: true
			forceCanvas: true
		@.app.view.className = @.opts.class if @.opts.class? and @.opts.class isnt ""
		@.stage = @.app.stage
		document.getElementById(@.opts.el).appendChild @.app.view
		PIXI.loader.add(list)
		.add("bgm", "#{_CDN}mp3/bgm.mp3")
		# .add("a-1", "#{_CDN}mp3/1.mp3")
		# .add("a-2", "#{_CDN}mp3/2.mp3")
		# .add("a-3", "#{_CDN}mp3/3.mp3")
		.use(@.loaditem.bind(@))
		.load(@.build.bind(@))
		@.default.MH = @.opts.h * 0.65
	loaditem: ->
		@.loadNumber++
		loading.progressOn = parseInt @.loadNumber/(list.length+1)*100
		if @.loadNumber is list.length+1
			@.build()
	build: ->
		return false if @builded
		@builded = true
		@.trueH = (750/TrueW)*TrueH
		@.content = content = new Container()
		
		border = new Sprite getTe "#{_CDN}img/ugc-border.png"
		# border.anchor.set(0,1)
		content.addChild border

		content.y = -(@.opts.h-@.trueH) - TrueH*(750/TrueW)*0.4 - 20
		# console.log @.opts.h,@.trueH

		@.album = album = new Container()
		@.albumBG = albumBG = new Sprite getTe "#{_CDN}img/album-bg.png"
		albumPoster = new Sprite getTe "#{_CDN}img/album-poster.png"
		albumPoster.y = (albumBG.height-albumPoster.height)/2
		@.uploadText = uploadText = new Sprite getTe "#{_CDN}img/album-upload-text.png"
		uploadText.y = albumPoster.y
		@.uploadOverText = uploadOverText = new Sprite getTe "#{_CDN}img/album-upload-over-text.png"
		uploadOverText.y = albumPoster.y
		uploadOverText.visible = false
		
		# dropShadow : true ,dropShadowBlur: 2,dropShadowAlpha: 0.3,dropShadowColor : '#000000'
		@.userName = userName = new Text "",{fontFamily : 'Arial', fontSize: 38, fill : 0xffffff, align : 'left'}
		

		album.addChild albumBG,albumPoster,uploadText,uploadOverText,userName
		
		album.scale.set(0.92,0.92)
		album.x = (@.opts.w-album.width)/2
		if main.smaller
			album.scale.set(0.8,0.8)
			album.x = (@.opts.w-album.width)/2
		if main.biger
			album.scale.set(1,1)
			album.x = (@.opts.w-album.width)/2
		

		@.stage.addChild content, album
		# @.albumInfo album,1
		# @.lyricUpdate "abc"

		# for test remenber remove all
		@.newCover()
		

	newCover: ->
		@.cover = cover = new Container()
		box = new Container()
		cover.x = 126
		cover.y = 169
		border = new Graphics()
		border.beginFill(0xffffff)
		border.drawRect(0,-50,10,516)
		box.addChild border
		@.lineList = list = []
		for i in [0...16]
			line = new Sprite getTe "#{_CDN}img/bo.png"
			line.anchor.set(0,0.5)
			line.width = 25
			line.x = 10 + line.width*i
			line.y = line.height/2
			line.sy = line.scale.y = 1.5 + Math.random()*1
			line.de = Math.random() > 0.5
			line.speed = 1+Math.random()*6
			# line.alpha = 0.7
			box.addChild line
			list.push line
		border = new Graphics()
		border.beginFill(0xffffff)
		border.drawRect(list[list.length-1].x+25-0.22,-50,10.22,516)
		box.addChild border
			# console.log line.x,line.width,line.scale.x
		# @.lineList = list = []
		# for i in [0...16]
		# 	line = new Graphics()
		# 	line.beginFill(0xffffff)
		# 	line.drawRect(0,0,26,((416-50)/2))
		# 	line.drawRect(0,((416-50)/2)+50,26,((416-50)/2))
		# 	line.drawRect(0,((416-50)/2),6,50)
		# 	line.drawRect(20,((416-50)/2),6,50)
		# 	line.closePath()
		# 	line.width = 30
		# 	line.x = if i isnt 0 then line.width + list[list.length-1].x - 0.21 else -1
		# 	box.addChild line
		# 	list.push line
		# box.scale.set(1.01,1.01)
		mask = new Graphics()
		mask.beginFill(0xffffff)
		mask.drawRect(0,0,418,416)

		cover.addChild box
		box.mask = mask
		cover.addChild mask
		@.album.addChild cover
		@.app.ticker.add @.updateLine.bind @
		cover.visible = false
		cover.alpha = 0.7
	startLine: ->
		for item in @.lineList
			item.scale.y = item.sy
		@._time = new Date().getTime()
		@.lineMoving = true
	stopLine: ->
		@._time = new Date().getTime()
		@.lineMoving = false
		for item in @.lineList
			item.scale.y = item.ry if item.ry?
	saveLine: ->
		for item in @.lineList
			item.ry = item.scale.y
	updateLine: (detail)->
		return false unless @.lineMoving
		m = parseInt (new Date().getTime() - @._time)/1000
		m = 5 if m > 5
		for index in [0...@.lineList.length]
			item = @.lineList[index]
			if item.de
				item.scale.y += item.speed * detail * 0.02
			else
				item.scale.y -= item.speed * detail * 0.03

			if item.scale.y > 6
				item.scale.y = 6
				item.de = !item.de
				item.speed = 3+Math.random()*7
			if item.scale.y <= item.sy
				item.scale.y = item.sy
				item.de = !item.de
				item.speed = 5+Math.random()*5
	passImage: (src,orientation)->
		@.album.removeChild(@.avatar) if @.avatar?
		@.avatar = new Container()
		
		avatar = Sprite.fromImage src
		# alert orientation
		avatar.texture.baseTexture.on 'loaded', =>
			console.log "avatar:",avatar.width,avatar.height
			avatar.anchor.set(0.5,0.5)
			# avatar.mask = mask
			avatar.scale.set(416/avatar.width,416/avatar.width)
			avatar.x = avatar.width/2
			avatar.y = 205
			@.avatar.addChild avatar
			@.avatar.x = 128
			@.avatar.y = 169
			@.album.addChildAt @.avatar,3

			# mask1 = new Sprite getTe "#{_CDN}img/mask.png"
			mask1 = new Graphics()
			mask1.beginFill(0xffffff)
			mask1.drawRect(0,0,416,416)
			mask1.x = 128
			mask1.y = 169
			@.album.addChild mask1
			avatar.mask = mask1
			console.log "orientation:",orientation
			if orientation is 6
				avatar.rotation = Math.PI * 0.5
				avatar.scale.x += avatar.scale.x * 0.4
				avatar.scale.y += avatar.scale.y * 0.4
			if orientation is 3
				avatar.rotation = Math.PI
				avatar.scale.x += avatar.scale.x * 0.4
				avatar.scale.y += avatar.scale.y * 0.4
				# avatar.x += 410
			@.uploadOverText.visible = true
			@.uploadText.visible = false
		
	updateName: (text)->
		t = text.split("")
		tx = ""
		for i in t
			tx += i
			break if tx.gblen() >= 20

		@.userName.text = tx
		@.userName.x = 124
		@.userName.y = 172 + 410 + 20
	addCover: ->
		@.uploadOverText.visible = false
		@.uploadText.visible = false

		# @.albumCover = albumCover = new Sprite getTe "#{_CDN}img/album-cover-#{random}.png"
		# albumCover.y = (@.albumBG.height-albumCover.height)/2
		# albumCover.alpha = 0
		# @.album.addChild albumCover
		# TweenLite.to albumCover,1,
		# 	alpha: 1

	albumInfo: (i)->
		@.album.removeChild(@.albumInfoCont) if @.albumInfoCont?
		@.content.removeChild @.bg if @.bg?
		@.index = i
		@.albumInfoCont = new Container()
		singerName = new Sprite getTe "#{_CDN}img/ugc-singer-#{i}.png"
		singerName.y = 782 - singerName.height - 50
		musicName = new Sprite getTe "#{_CDN}img/ugc-name-#{i}.png"
		Texts = new Sprite getTe "#{_CDN}img/ugc-text-2.png"
		Texts.y = 782 - Texts.height - 64
		musicName.y = Texts.y - musicName.height - 10
		@.albumInfoCont.addChild singerName,musicName,Texts
		@.album.addChild @.albumInfoCont
		@.bg = bg = new Sprite getTe "#{_CDN}img/ugc-bg-#{i}.jpg"
		# console.log @.content.y,@.bg.y = -@.content.y
		@.bg.y = -@.content.y/2
		@.bgMask = bgMask = new Graphics()
		bgMask.beginFill(0xffffff)
		bgMask.drawRect(0,0,@.content.width,@.content.height)

		@.content.addChildAt @.bg,0
		@.content.addChild bgMask
		@.bg.mask = bgMask
		
	lyricUpdate: (text)->
		return false if text.length > 32#gblen() > 64
		@.album.removeChild @.lyric if @.lyric?
		@.lyric = new Container()
		# text = "每次送他去机场，真的都很累。因为"
		texts = text.split("")
		list = [[]]
		n = 0
		lineH = 32
		temp = new Text "啊啊啊啊啊啊啊啊".split("").join("   "),{fontFamily : 'Arial', fontSize: 24, fill : 0xffffff, align : 'left'}
		# console.log temp.width
		tmp = new Text "",{fontFamily : 'Arial', fontSize: 24, fill : 0xffffff, align : 'left'}
		for index in [0...texts.length]
			tmp.text = list[n].join("   ")
			# if list[n].join("").length >= 8#.gblen() >= 16
			if tmp.width >= temp.width-10
				n++ 
				list[n] = []
			list[n].push texts[index]
		# console.log list
		for i in [0...list.length]
			continue if i >= 4
			t = (i%4)*0.2
			text = new Text list[i].join("   "),{fontFamily : 'Arial', fontSize: 24, fill : 0xffffff, align : 'left'}
			text.alpha = 1-t
			text.y = lineH*4 - (4-(i%4+1))*lineH #+ (4-list.length)*lineH
			text.x = (@.opts.w-temp.width)/2 #@.opts.w/2 - text.width/2
			# console.log text.width
			@.lyric.addChild text
		@.album.addChild @.lyric
	review: ->
		@.content.y += 250
		@.logo = logo = new Sprite getTe "#{_CDN}img/ugc-logo.png"
		logo.y = @.content.height - logo.height - 40
		@.note = note = new Sprite getTe "#{_CDN}img/ugc-note-text-#{@.index}.png"
		note.y = logo.y - note.height - 20
		# console.log note.y,logo.y
		if main.biger
			@.album.y = 70
		@.content.addChild logo,note
		@.content.removeChild @.bgMask
		@.bg.y = 0
		@.bg.mask = null
	buildQR: (url,callback)->
		qrcodeMake = new QRCode "qrcode",
			text: url
			width: 140,
			height: 140,
			colorDark : "#000000",
			colorDark : "#000000"
		console.log qrcodeMake._el.lastChild
		qrcodeMake._el.lastChild.onload = =>
			border = 5
			@.qrcode = qrcode = new Container()
			text = new Sprite getTe "#{_CDN}img/qrcode.png"
			text.x = 20
			text.y = 20
			qrcodeBg = new Graphics()
			qrcodeBg.beginFill(0xffffff)
			qrcodeBg.drawRect(0,0,140+border*2,140+border*2)
			qrcodeQR = Sprite.fromImage qrcodeMake._el.lastChild.src
			qrcodeQR.texture.baseTexture.on 'loaded', =>
				qrcodeQR.x = border
				qrcodeQR.y = border
				qrcode.x = 40
				qrcode.y = @.content.height - 140+border*2 - 60
				callback()
			qrcode.addChild qrcodeBg,qrcodeQR,text
			qrcode.visible = false
			@.content.addChild qrcode
			
	overUGC: (id = null)->
		if id?
			url = "http://m.giccoo.com/Levi/music.html?id=#{id}" 
		else
			url = "http://levi.arkrdigital.com/music/"
		@.buildQR url, =>
			@.app.renderer.render @.app.stage
			main.ugcold = @.app.view.toDataURL()
			@.app.view.style.visibility = "hidden"
			@.album.scale.set(1,1)
			@.album.x = 0
			@.album.y = 110
			@.content.y = 0
			@.qrcode.visible = true
			@.logo.y -= @.qrcode.height+40
			@.note.y -= @.qrcode.height+40
			@.app.renderer.render @.app.stage
			if main.wy
				main.share @.app.view.toDataURL("image/jpeg",0.6)
			else
				main.setugc @.app.view.toDataURL()

