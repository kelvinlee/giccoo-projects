list
	//- var url = "http://disk.giccoo.com/projects/friso"
	- var url = "."
	.question-list
		.question-box(each="{question in contents}",id="q-{question.id}",show="{question.question}",class="{on: parent.contents.indexOf(question) >= 5}")
			.title
				span.icon
				h2 {question.question}
				p.numbs {question.answers}个回答&nbsp;&nbsp;&nbsp;{question.focus}个关注
				span.icon-more
			.answer-box
				.answer.answer-1(if="{question.answer1 && question.answer1by}")
					.likeanswer.likeanswer-1(rel="1")
						span.icon
							img(src="./img/heart-off.png")
						span.likeanswer-text {question.answer1like}
					span.by @{question.answer1by}
					span.answer-text
						img(if="{question.answer1img}",src="http://image.giccoo.com/Active/{question.answer1img}@!medium")
						|{question.answer1}
				.answer.answer-2(if="{question.answer2 && question.answer2by}")
					.likeanswer.likeanswer-2(rel="2")
						span.icon
							img(src="./img/heart-off.png")
						span.likeanswer-text {question.answer2like}
					span.by @{question.answer2by}
					span.answer-text
						img(if="{question.answer2img}",src="http://image.giccoo.com/Active/{question.answer2img}@!medium")
						|{question.answer2}
				.answer.answer-3(if="{question.answer3 && question.answer3by}")
					.likeanswer.likeanswer-3(rel="3")
						span.icon
							img(src="./img/heart-off.png")
						span.likeanswer-text {question.answer3like}
					span.by @{question.answer3by}
					span.answer-text
						img(if="{question.answer3img}",src="http://image.giccoo.com/Active/{question.answer3img}@!medium")
						|{question.answer3}
			a.outlink(href="{question.link}",show="{question.link}")
				img(src="./img/outlink.png")


	script(type="text/coffeescript").
		self = this
		self.contents = defaultInfo
		self.loaded = false
		Store.friso = self
		self.updateContents = (contents)->
			self.contents = contents
			self.update()

		# this.on "mount", ->
		# 	console.log "starting load questions"
		# 	$.ajax
		# 		type: "get"
		# 		url: "http://api.giccoo.com/friso/list/"
		# 		dataType: 'json'
		# 		data: null
		# 		success: (msg)->
		# 			console.log msg
		# 			self.contents = msg.list
		# 			self.loaded = true
		# 			self.update()
		# 		error: (error)->

			

		