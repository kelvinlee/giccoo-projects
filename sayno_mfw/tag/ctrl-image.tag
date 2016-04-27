ctrl-image
	.image-content#previewImage
		canvas#imageCtrl(width="{width}",height="{height}")
		//- canvas-ctrl(parent="#previewImage canvas")
		.image-input(show="{!uploaded && !stop}",onclick="{selectImage}")
			input#imageInput(if="{!_selectImage}" type="file",onchange="{changeImage}")
		.icon.icon-restart(show="{uploaded && !stop}",onclick="{restart}")
		.icon.icon-rotation(show="{uploaded && !stop}",onclick="{rotation}")
		.mask-note.fadeIn.animated(show="{noted}",onclick="{hideNote}")
	<yield></yield>
	script(type="text/coffeescript").
		# Core: jquery
		self = this
		this.width = if opts.width? then opts.width else 640
		this.height = if opts.height? then opts.height else 640
		this.stop = false
		this._selectImage = false
		this.uploaded = false
		this.noted = false
		this.image = null
		this.info = null
		this.frame = {
			rotation: 0,
			x: 0,
			y: 0,
			w: 640,
			h: 640
		}
		defaultOrin = []
		defaultType = null
		logOrin = {
			x: self.frame.x,
			y: self.frame.y
		}
		logSize = {
			w: self.frame.w,
			h: self.frame.h
		}

		this._selectImage = opts.selectimage if opts.selectimage?
		$(self.root).addClass "ctrl-image"
		global.canvas = self unless global.canvas?
		createObjectURLfun = (file)->
			if (window.webkitURL? || window.navigator.userAgent.indexOf("Chrome") >= 1 || window.navigator.userAgent.indexOf("Safari") >= 1) 
				return window.webkitURL.createObjectURL(file)
			else
				return window.URL.createObjectURL(file)
		this.setDefault = (x,y,w,h)->
			self.frame.x = x
			self.frame.y = y
			self.frame.w = w
			self.frame.h = h
			console.log "default:",self.frame
			logOrin = {
				x: self.frame.x,
				y: self.frame.y
			}
			logSize = {
				w: self.frame.w,
				h: self.frame.h
			}
			console.log "default:",logSize
			return self.frame
		this.selectImage = (evt)->
			if self._selectImage && self._selectImage?
				eval self._selectImage+".call(self)"
			else
				return true
		this.changeImage = (evt)->
			img = document.getElementById "imageInput"
			blob = createObjectURLfun(img.files[0])
			self.passImage blob
		this.passImage = (src)->
			image = new Image()
			drawCanvasImage = ->
				console.log "canvas image"
				self.image = image
				EXIF.getData image, ->
					info = EXIF.getTag(image, "Orientation")
					self.info = info
					if info is 6
						orienImage()
					else
						normalImage()
				return true
			orienImage = ->
				canvas = document.getElementById "imageCtrl"
				ctx = canvas.getContext "2d"
				# 计算翻转 3264,2448
				w = image.width
				h = image.height
				
				if w > h
					w = w*((canvas.height)/h)
					h = h*((canvas.height)/h)
				else if w/h > canvas.width/canvas.height
					h = h*(canvas.height/w)
					w = w*(canvas.height/w)
				else if w > canvas.width
					w = w*(canvas.width/h)
					h = h*(canvas.width/h)
				else if w is h
					h = h*(canvas.height/h)
					w = w*(canvas.width/w)

				# alert(w+","+h)
				x = -(w-canvas.height)/2
				y = -(h-canvas.width)/2


				ctx.clearRect(-10000, -10000, 50000, 50000)
				ctx.translate(canvas.width/2,canvas.height/2)
				ctx.rotate(90*Math.PI/180)
				ctx.translate(-canvas.width/2,-canvas.height/2)
				# ctx.drawImage(image, y, -h, w, h)
				ctx.drawImage(self.image, self.frame.x, self.frame.y, w, h)
				self.setDefault self.frame.x, self.frame.y, w, h
				self.frame.rotation = 90
				self.init()
			normalImage = ->
				canvas = document.getElementById "imageCtrl"
				ctx = canvas.getContext "2d"

				# 计算翻转
				w = image.width
				h = image.height
				if w > h
					w = w*(canvas.height/h)
					h = h*(canvas.height/h)
				else if w/h > canvas.width/canvas.height
					w = w*(canvas.height/h)
					h = h*(canvas.height/h)
				else if w > canvas.width
					h = h*(canvas.width/w)
					w = w*(canvas.width/w)
				else if w is h
					h = h*(canvas.height/h)
					w = w*(canvas.width/w)
				
				x = -(w-canvas.width)/2
				y = -(h-canvas.height)/2

				ctx.clearRect(-10000, -10000, 50000, 50000)
				ctx.drawImage(image, x, y, w, h)
				self.setDefault x, y, w, h
				self.init()
			image.onload = drawCanvasImage
			image.src = src
		this.init = ->
			self.uploaded = true
			self.noted = true
			self.update()
			console.log self.uploaded
			self.target = document.getElementById("imageCtrl")
			document.getElementById("imageCtrl").addEventListener("touchstart",self.start.bind(self))
			document.getElementById("imageCtrl").addEventListener("touchmove",self.move.bind(self))
			document.getElementById("imageCtrl").addEventListener("touchend",self.end.bind(self))
			setTimeout ->
				self.hideNote()
				console.log self.uploaded
			,2000
		this.hideNote = ->
			self.noted = false
			self.update()
		this.upload = ->
			cache = canvas.toDataURL("image/png")
		this.restart = ->
			canvas = document.getElementById "imageCtrl"
			ctx = canvas.getContext "2d"
			ctx.clearRect(-10000, -10000, 50000, 50000)
			self.uploaded = false
			self.noted = false
		this.rotation = ->
			self.frame.rotation += 90
			if self.frame.rotation == 360
				self.frame.rotation = 0
			rotation = 90*Math.PI/180

			console.log self.frame.rotation,rotation

			canvas = document.getElementById "imageCtrl"
			ctx = canvas.getContext "2d"
			ctx.clearRect(-10000, -10000, 50000, 50000)
			# ctx.save()
			ctx.translate(canvas.width/2,canvas.height/2)
			ctx.rotate(rotation)
			ctx.translate(-canvas.width/2,-canvas.height/2)
			ctx.drawImage(self.image, self.frame.x, self.frame.y, logSize.w, logSize.h)
			# ctx.restore()
			# self.image = new Image()
			# self.image.src = canvas.toDataURL("image/png")
			# w = logSize.w
			# h = logSize.h
			# logSize.w = self.image.width
			# logSize.h = self.image.height
			# console.log ctx

		this.getContent = ->
			if self.uploaded
				canvas = document.getElementById "imageCtrl"
				return canvas.toDataURL("image/png")
			else
				return false
		this.stopCtrl = ->
			@stop = true
			@noted = false
			@update()


		# 对 canvas 操作
		this.start = (evt)->
			# console.log(evt)
			return false if @stop
			touch = evt.touches
			defaultType = touch.length
			for i in [0...touch.length]
				defaultOrin[i] = {x: touch[i].clientX,y: touch[i].clientY}
			console.log("start",defaultType,defaultOrin,self.frame,logSize)
			# console.log(self.target)
			# console.log(self.target.toDataURL("image/png"))
		
		this.move = (evt)->
			return false if @stop
			touch = evt.touches
			ctx = self.target.getContext("2d")
			evt.preventDefault()
			if (defaultType == 1)
				# 移动
				moveX = touch[0].clientX-defaultOrin[0].x
				moveY = touch[0].clientY-defaultOrin[0].y
				# console.log("moving",moveX,moveY)
				logOrin.x = self.frame.x + moveX
				logOrin.y = self.frame.y + moveY
				# if (self.info == 6)
				if (self.frame.rotation is 90)
					logOrin.x = self.frame.x + moveY
					logOrin.y = self.frame.y - moveX
				if (self.frame.rotation is 180)
					logOrin.x = self.frame.x - moveX
					logOrin.y = self.frame.y - moveY
				if (self.frame.rotation is 270)
					logOrin.x = self.frame.x - moveY
					logOrin.y = self.frame.y + moveX

				ctx.clearRect(-10000, -10000, 50000, 50000)
				ctx.drawImage(self.image, logOrin.x, logOrin.y, self.frame.w, self.frame.h)
				# ctx.clearRect(-10000, -10000, 50000, 50000)
				# ctx.save()
				# ctx.translate(self.target.width/2,self.target.height/2)
				# ctx.rotate(self.frame.rotation)
				# ctx.translate(-self.target.width/2,-self.target.height/2)
				# ctx.drawImage(self.image, self.frame.x, self.frame.y, logSize.w, logSize.h)
				# ctx.restore()
			
			if (defaultType == 2)
				# 放大和旋转
				console.log("scale")
				x1 = defaultOrin[0].x 
				y1 = defaultOrin[0].y
				x2 = defaultOrin[1].x 
				y2 = defaultOrin[1].y
				lineO = Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2))
				x1 = touch[0].clientX
				y1 = touch[0].clientY
				x2 = touch[1].clientX
				y2 = touch[1].clientY
				lineN = Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2))
				s = (lineN-lineO)/640
				# console.log(s)
				logSize.w = self.frame.w * (1+s)
				logSize.h = self.frame.h * (1+s)
				ctx.clearRect(-10000, -10000, 50000, 50000)
				ctx.drawImage(self.image, self.frame.x, self.frame.y, logSize.w, logSize.h)
				# rotation
		
		this.end = (evt)->
			return false if @stop
			touch = evt.touches
			defaultType = touch.length
			# for (var i = 0 ; i < touch.length ; i++)
			for i in [0...touch.length]
				defaultOrin[i] = {x: touch[i].clientX,y: touch[i].clientY}

			self.frame.x = logOrin.x
			self.frame.y = logOrin.y
			self.frame.w = logSize.w
			self.frame.h = logSize.h
			console.log("end",logSize,self.frame)


