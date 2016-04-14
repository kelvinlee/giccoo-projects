loader
	.loader-icon
		.loader-inner.ball-spin-fade-loader(if="{type == 'ball'}")
			-for (var i=0;i<8;i++)
				div
		.loader-inner.pacman(if="{type == 'pacman'}")
			-for (var i=0;i<5;i++)
				div
	.loader-text(if="{opts.title != ''}") {opts.title}
	<yield/>
	script(type="text/coffeescript").
		self = this
		this.type = if opts.type? then opts.type else "ball"
		# 设置公共变量储存
		_loader[opts.id] = self
		$(this.root).addClass "loader fadeIn animated"
		this.loadend = ->
			$(self.root).removeClass "fadeIn animated"
			$(self.root).addClass "fadeOut animated"
			setTimeout ->
				self.unmount()
			,500