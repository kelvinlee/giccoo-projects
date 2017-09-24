list
	//- var url = "http://disk.giccoo.com/projects/friso"
	- var url = "."
	.loading(hide="{loaded}")
		.loader-inner.ball-spin-fade-loader
			-for (var i=0;i<8;i++)
				div
	.question-list(show="{contents.length > 0}")
		.question-box(each="{question in contents}",show="{question.question}",class="{on: parent.contents.indexOf(question) >= 5}")
			.title
				span.icon
				h2 {question.question}
				p.numbs {question.answers}个回答&nbsp;&nbsp;&nbsp;{question.focus}个关注
				span.icon-more
			.answer-box
				.answer.answer-1(if="{question.answer1 && question.answer1by}")
					span.by @{question.answer1by}
					span.answer-text {question.answer1}
				.answer.answer-2(if="{question.answer2 && question.answer2by}")
					span.by @{question.answer2by}
					span.answer-text {question.answer2}
				.answer.answer-3(if="{question.answer3 && question.answer3by}")
					span.by @{question.answer3by}
					span.answer-text {question.answer3}
			a.outlink(href="{question.link}",show="{question.link}")
				img(src="./img/outlink.png")


	script(type="text/coffeescript").
		self = this
		self.contents = []
		self.loaded = false

		this.on "mount", ->
			console.log "starting load questions"
			$.ajax
				type: "get"
				url: "http://api.giccoo.com/friso/list/"
				dataType: 'json'
				data: null
				success: (msg)->
					console.log msg
					self.contents = msg.list
					self.loaded = true
					self.update()
				error: (error)->

			

		