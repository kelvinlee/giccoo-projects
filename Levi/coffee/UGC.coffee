random = 1+parseInt Math.random()*5
class UGC
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
	startTime: null
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
		@.app.view.className = @.opts.class if @.opts.class? and @.opts.class isnt ""
		@.stage = @.app.stage
		document.getElementById(@.opts.el).appendChild @.app.view
		PIXI.loader.add([
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
			"#{_CDN}img/ugc-note-1.png"
			"#{_CDN}img/ugc-note-2.png"
			"#{_CDN}img/ugc-note-3.png"
			"#{_CDN}img/ugc-note-4.png"
			"#{_CDN}img/ugc-note-5.png"
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
			"#{_CDN}img/avatar.jpg"
		])
		.load(@.build.bind(@))
		@.default.MH = @.opts.h * 0.65
	build: ->
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
		
		album.scale.set(0.8,0.8)
		album.x = (@.opts.w-album.width)/2
		

		@.stage.addChild content, album
		# @.albumInfo album,1
		# @.lyricUpdate "abc"

		


	passImage: (src,orientation)->
		@.album.removeChild(@.avatar) if @.avatar?
		@.avatar = new Container()
		
		avatar = Sprite.fromImage src
		# alert orientation
		avatar.texture.baseTexture.on 'loaded', =>
			console.log "avatar:",avatar.width,avatar.height
			avatar.anchor.set(0.5,0.5)
			# avatar.mask = mask
			avatar.scale.set(410/avatar.width,410/avatar.width)
			avatar.x = avatar.width/2
			avatar.y = 205
			@.avatar.addChild avatar
			@.avatar.x = 130
			@.avatar.y = 172
			@.album.addChildAt @.avatar,3

			# mask1 = new Sprite getTe "#{_CDN}img/mask.png"
			mask1 = new Graphics()
			mask1.beginFill(0xffffff)
			mask1.drawRect(0,0,410,410)
			mask1.x = 130
			mask1.y = 172
			@.album.addChild mask1
			avatar.mask = mask1
			
			if orientation is 6
				avatar.rotation = Math.PI * 0.5
			if orientation is 3
				avatar.rotation = Math.PI
				# avatar.x += 410
			@.uploadOverText.visible = true
			@.uploadText.visible = false
		
	updateName: (text)->
		@.userName.text = text
		@.userName.x = 124
		@.userName.y = 172 + 410 + 20
	addCover: ->
		@.uploadOverText.visible = false
		@.uploadText.visible = false
		@.albumCover = albumCover = new Sprite getTe "#{_CDN}img/album-cover-#{random}.png"
		albumCover.y = (@.albumBG.height-albumCover.height)/2
		albumCover.alpha = 0
		@.album.addChild albumCover
		TweenLite.to albumCover,1,
			alpha: 1

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
		# @.bg.y = @.content.y
		@.content.addChildAt @.bg,0
	lyricUpdate: (text)->
		return false if text.gblen() > 64
		@.album.removeChild @.lyric if @.lyric?
		@.lyric = new Container()
		# text = "每次送他去机场，真的都很累。因为"
		texts = text.split("")
		list = [""]
		n = 0
		lineH = 32
		console.log texts
		for index in [0...texts.length]
			console.log list[n].gblen(),index
			if list[n].gblen() >= 16
				n++ 
				list[n] = ""
				console.log n,index
			list[n] += texts[index]+""
		console.log list
		for i in [0...list.length]
			continue if i >= 4
			t = (i%4)*0.2
			text = new Text list[i],{fontFamily : 'Arial', fontSize: 24, fill : 0xffffff, align : 'left'}
			text.alpha = 1-t
			text.y = lineH*4 - (4-(i%4+1))*lineH + (4-list.length)*lineH
			text.x = (@.opts.w-text.width)/2
			@.lyric.addChild text
		@.album.addChild @.lyric
	review: ->
		@.content.y += 200
		@.logo = logo = new Sprite getTe "#{_CDN}img/ugc-logo.png"
		logo.y = @.content.height - logo.height - 40
		@.note = note = new Sprite getTe "#{_CDN}img/ugc-note-#{@.index}.png"
		note.y = logo.y - note.height - 20
		console.log note.y,logo.y
		@.content.addChild logo,note
	buildQR: (url,callback)->
		qrcodeMake = new QRCode "qrcode",
			text: url
			width: 130,
			height: 130,
			colorDark : "#000000",
			colorDark : "#000000"
		console.log qrcodeMake._el.lastChild
		qrcodeMake._el.lastChild.onload = =>
			border = 5
			@.qrcode = qrcode = new Container()
			text = new Sprite getTe "#{_CDN}img/qrcode.png"
			text.x = 20
			qrcodeBg = new Graphics()
			qrcodeBg.beginFill(0xffffff)
			qrcodeBg.drawRect(0,0,130+border*2,130+border*2)
			qrcodeQR = Sprite.fromImage qrcodeMake._el.lastChild.src
			qrcodeQR.texture.baseTexture.on 'loaded', =>
				qrcodeQR.x = border
				qrcodeQR.y = border
				qrcode.x = 40
				qrcode.y = @.content.height - 130+border*2 - 40
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
			@.album.scale.set(1,1)
			@.album.x = 0
			@.album.y = 110
			@.content.y = 0
			@.qrcode.visible = true
			@.logo.y -= @.qrcode.height+40
			@.note.y -= @.qrcode.height+40
			@.app.renderer.render @.app.stage
			if main.wy
				main.share @.app.view.toDataURL()
			else
				main.setugc @.app.view.toDataURL()

