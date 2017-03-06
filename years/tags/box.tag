box.box
	.box-content
		.box-bg
			img(src="./img/listpage-bg.jpg")
			img(src="./img/listpage-bg.png")
		.title
			img(src="./img/listpage-title.png")
		.video-box
			.bg
				img(src="./img/video-box.png")
			video(width="620",height="340",controls="true",type="video/mp4",src="http://m.giccoo.com/years/video/video-{now+1}.mp4",poster="http://m.giccoo.com/years/img/video-p.jpg",webkit-playsinline,playsinline)
		.slider-list
			.type-item(each="{value,i in list}",onclick="{SelectList(i)}",class="{on: parent.now==i,before: (parent.now-1)==i,after: (parent.now+1)==i,afters: (parent.now+1)<i}")
				img(src="./img/type-{i+1}.png")
			.left(onclick="{SliderMovePre}")
				img(src="./img/arrow.png")
			.right(onclick="{SliderMoveNext}")
				img(src="./img/arrow.png")
		.points
			.point(each="{value,i in list}",class="{on: parent.now == i}") {i}
		p.note-text 以下排名不分先后
		.list
			.item(each="{item in list[now].list}")
				.left-title
					h3 {item.name}  
				.right-btns
					a.btn-info(href="javascript:void(0)",onclick="{ShowInfo(item)}") 查看
					a.btn-vote(if="{!parent.voteds[item.code]}",href="javascript:void(0)",onclick="{Vote(item.code)}") 投票
					a.on.btn-vote(if="{parent.voteds[item.code]}",href="javascript:void(0)") 投票
				p {item.company}
					span
						em {parent.votes[item.code]?parent.votes[item.code]:0}
						|  票
				.line
					img(src="./img/line.png")
	.pop.fadeIn.animated(class="{hide: !popshow}")
		.close(onclick="{ClosePop}")
			img(src="./img/btn-close.png")
		.content
			h1 {popContent.name}
			p.company {popContent.company}
			slider.sliders(myid="mainSlider",repeat="true",list="http://image.giccoo.com/projects/years/moreimg/101-1.jpg,http://image.giccoo.com/projects/years/moreimg/101-2.jpg,http://image.giccoo.com/projects/years/moreimg/101-3.jpg")
			.line
				img(src="./img/line.png")
			p.piao
				span {votes[popContent.code]?votes[popContent.code]:0}  
				| 票
			.vote-btns
				a.btn-vote(if="{!voteds[popContent.code]}",href="javascript:void(0)",onclick="{Vote(popContent.code)}") 投票
				a.on.btn-vote(if="{voteds[popContent.code]}",href="javascript:void(0)") 投票
			p.subtitle 案例介绍:
			p {popContent.introduce}
			p.subtitle 案例亮点:
			p {popContent.spot}

	script(type="text/coffeescript").
		self = this
		@list = productsinfo
		@now = 1
		@popshow = false
		@popContent = {}
		@votes = votes
		@voteds = voteds

		@SelectList = (i)->
			# $(evt.target).index()
			return ->
				# console.log i
				self.now = i
				self.update()

		@SliderMovePre = ->
			@now--
			if @now <= 0
				@now = 0
			@update()

		@SliderMoveNext = ->
			@now++
			if @now >= @list.length-1
				@now = @list.length-1
			@update()

		@Vote = (id)->
			return ->
				if openid is "err"
					SendNote("请使用微信打开后投票")
					return false 
				$.get "http://i.giccoo.com/years/vote/to/"+id,{openid: openid}, (msg)->
					if msg.recode is 200
						SendNote("投票成功啦!")
						self.voteds[id] = 1
						if self.votes[id]
							self.votes[id]++
						else
							self.votes[id] = 1
						# for i in self.list
						# 	for j in i.list 
						# 		if j.code is id
						# 			j.voted = true
						# 			break
						self.update()
					else
						SendNote(msg.reason)

		@ShowInfo = (info)->
			return ->
				self.popshow = true
				self.popContent = info
				self.tags.slider.updateList("http://m.giccoo.com/years/moreimg/"+self.popContent.code+"-1.jpg,http://m.giccoo.com/years/moreimg/"+self.popContent.code+"-2.jpg,http://m.giccoo.com/years/moreimg/"+self.popContent.code+"-3.jpg")
				self.update()

		@ClosePop = ->
			@popshow = false
			@update()



