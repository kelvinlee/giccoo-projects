contentx
	h2 {headline}
		br
		| {subheadline}
	.text-box(each="{item in contents}")
		.title(class="{fontsmall: item.title.length > 19,fontsmallsmall: item.title.length > 24,fontbig: item.title.length < 5}") {item.title}
		.lists(each="{list in item.lists}")
			a.list(href="{list.link}",class="{fontsmall: list.text.length > 19,fontsmallsmall: list.text.length > 24,fontbig: list.text.length < 5}") {list.text}
		a.more(href="{item.more}") +查看更多回答
	script(type="text/coffeescript").
		self = this
		Store.contentx = self
		# self.contents = []
		self.headline = "Hello"
		self.subheadline = "World"
		self.contents = [{title:"h1",more:"more-a-link",lists:[{text:"a",link:"a-link"}]},{title:"h2",more:"more-a-link",lists:[{text:"b",link:"b-link"}]}]

		@updateContents = (headline,subheadline,contents) ->
			self.headline = headline
			self.subheadline = subheadline
			self.contents = contents
			self.update()