box
	.list(if="{type == 'topten'}")
		a.item(each="{item in list}",href="{item.link}")
			.img
				img(src="http://image.giccoo.com/Active/{item.image}@!small")
				//- img(src="./img/test.jpg")
			.like
				.heart
				span {item.like}
			p.name {item.name}
	.list(if="{type == 'topsix'}")
		a.item(each="{item in list}",href="{item.link}")
			.box
				.img
					img(src="http://image.giccoo.com/Active/{item.image}@!medium")
					//-img(src="./img/test-2.jpg")
				.description
					.avatar
						img(src="http://image.giccoo.com/Active/{item.avatar}@!small")
						//-img(src="./img/avatar.jpg")
					.text
						p {item.typename}
						p {item.name}
						p
							span.like
							span {item.like}

	script(type="text/coffeescript").
		self = this
		this.type = opts.type
		this.list = []

		console.log "abcd"

		this.on "mount", ->
			$.get opts.src,{}, (msg)->
				if msg.recode is 200
					self.list = msg.info
					self.update()
				else
					SendNote("请求列表失败,请刷新页面重试")