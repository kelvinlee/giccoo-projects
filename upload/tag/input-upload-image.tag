input-upload-image
	.input-upload
		input(type="file",name="{filename}",id="{filename}",class="{opts.classname}",onchange="{changeImage}")
		input(type="text",id="{opts.name}",name="{opts.name}",style="display:none")
	script(type="text/coffeescript").
		self = this
		this.filename = opts.name+"-file"
		# this.classname = opts.classname

		createObjectURLfun = (file)->
			if (window.webkitURL? || window.navigator.userAgent.indexOf("Chrome") >= 1 || window.navigator.userAgent.indexOf("Safari") >= 1) 
				return window.webkitURL.createObjectURL(file)
			else
				return window.URL.createObjectURL(file)

		this.changeImage = (evt)->
			img = document.getElementById self.filename
			blob = createObjectURLfun(img.files[0])
			self.passImage blob

		this.passImage = (src)->
			image = new Image()
			drawCanvasImage = ->
				console.log "canvas image"
				self.image = image
				normalImage()
			normalImage = ->
				canvas = document.createElement "canvas"

				# 计算翻转
				w = image.width
				h = image.height

				canvas.width = w
				canvas.height = h

				ctx = canvas.getContext "2d"
				
				x = 0
				y = 0

				ctx.clearRect(-10000, -10000, 50000, 50000)
				ctx.drawImage(image, x, y, w, h)
				self.init(canvas)
			image.onload = drawCanvasImage
			image.src = src

		this.init = (canvas)->
			cache = canvas.toDataURL("image/png")
			# console.log cache
			$("#"+opts.name).val cache
			# $(".canvas-preview",self.root).html canvas