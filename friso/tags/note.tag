note
	- var url = "http://disk.giccoo.com/projects/"
	.note-box
		.note-content(class="{animated:true,fadeInUp:!close,fadeOutUp:close}")
			.note-text
				.icon-form
					img(src="#{url}showman/img/icon-alert-note.png")
				|  {title}
	script(type="text/coffeescript").
		self = this
		this.title = opts.title
		this.close = false
		this.time = if opts.time? then parseInt(opts.time) else 3000
		$(this.root).addClass("note")
		# 
		this.on "mount", ->
			setTimeout ->
				self.unmount()
			,self.time
			setTimeout ->
				self.close = true
				self.update()
			,self.time-500

		