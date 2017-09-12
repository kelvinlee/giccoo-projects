contentx
	h2 {headline}
	.text-box(each="{item in contents}")
		.title {item.title}
		.lists(each="{list in item.lists}")
			a.list(href="{list.link}") {list.text}
		a.more(href="{item.more}") +查看更多回答
	script(type="text/coffeescript").
		self = this
		Store.contentx = self
		# self.contents = []
		self.headline = "Hello World"
		self.contents = [{title:"h1",more:"more-a-link",lists:[{text:"a",link:"a-link"}]},{title:"h2",more:"more-a-link",lists:[{text:"b",link:"b-link"}]}]

		@updateContents = (headline,contents) ->
			self.headline = headline
			self.contents = contents
			self.update()