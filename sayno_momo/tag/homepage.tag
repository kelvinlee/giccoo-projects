homepage
	// - var url = "http://disk.giccoo.com/projects/sayno_momo"
	- var url = "http://image.giccoo.com/projects/sayno_momo"
	.show-page(show="{!buildpage}")
		.bg.flipInY.animated.delay-7
			img(src="#{url}/img/homepage-bg.png")
		.text-1.fadeInDown.animated.delay-5
			img(src="#{url}/img/homepage-text-1.png")
		.text-2.bounceIn.animated.delay-9
			img(src="#{url}/img/homepage-text-2.png")
		.start.fadeInUp.animated.delay-11(onclick="{start}")
			img(src="#{url}/img/homepage-start.png")
		.active.fadeInUp.animated.delay-12(onclick="{showActive}") 活动细则
	.build-page.fadeIn.animated(show="{buildpage}")
		.build
			ctrl-image(selectimage="selectFiles")
				.logo
					img(src="#{url}/img/logo-mark.png")
			.title
				.line.normal
					img(src="#{url}/img/build-title.png")
				.line.input
					input#title(type="text",name="title")
					.bg
						img(src="#{url}/img/build-title-bg-{INDEX}.png")
			.image-slogen
				img(src="#{url}/img/image-slogen.png")
		.submit#submit(show="{!submited}",onclick="{submit}")
			img(src="#{url}/img/submit.png")
		.share-box(show="{submited}")
			.bg
				img(src="#{url}/img/phone.png")
			.btn.btn-share(onclick="{share}")
				img(src="#{url}/img/btn-share.png")
			.btn.btn-others(onclick="{showOthers}")
				img(src="#{url}/img/btn-others.png")
	.pop.share-success.fadeIn.animated(show="{sharedsuccess}")
		h2 分享成功!
		.line
		.btn.btn-lottery(onclick="{postLottery}")
			img(src="#{url}/img/btn-lottery.png")
	.pop.other-page.fadeIn.animated(show="{otherspage}")
		.other-box
			.close(onclick="{closeOther}")
				img(src="#{url}/img/btn-close.png")
			slider(callback="{sliderEnd}")
				ul.slide(each="{items in parent.lists}")
					li(each="{item in items}",onclick="{parent.parent.parent.showInfo}",rel="http://image.giccoo.com/sayno/momo/{item.src}@!large")
						img(src="http://image.giccoo.com/sayno/momo/small-{item.src}@!medium")
			.line 向左滑动换一批》
	.pop.lottery-faild.fadeIn.animated(show="{lotteryfaild}")
		.content
			.title
				img(src="#{url}/img/lottery-faild-title.jpg")
			.body
				p 但是你还有机会继续抽奖
				.product
				.btn.btn-goback(onclick="{restart}")
					img(src="#{url}/img/btn-goback.jpg")
			.footer
	.pop.lottery-success.fadeIn.animated(show="{lotterysuccess}")
		.content
			.title
				img(src="#{url}/img/lottery-success-title.jpg")
			.body
				.success-note(show="{submitsuccess}")
					p 提交成功,请耐心等待奖品.
					.btn.btn-goback(onclick="{restart}")
						img(src="#{url}/img/btn-goback.jpg")
				form.form(name="register",show="{!submitsuccess}")
					.form-group
						input#name(type="text",name="name",placeholder="请输入用户名")
					.form-group
						input#mobile(type="text",name="mobile",placeholder="请输入手机号")
					.form-group
						input#adr(type="text",name="adr",placeholder="请输入联系地址")
					.btn.btn-submit(onclick="{submitLottery}")
						img(src="#{url}/img/btn-submit.jpg")

			.footer
	.pop.active-info.fadeIn.animated(show="{activeinfo}")
		.title 活动形式
		.close(onclick="{closeactive}")
			img(src="#{url}/img/btn-close.png")
		.content
			.content-text
				p 活动形式：
				p 1)发表「异见」上传图片
				p 2)发布作品之后分享给好友或者到附近动态，即可参与抽奖，奖品包含：
				p - 荣耀小口哨蓝牙耳机（199元）
				p - 荣耀自拍杆（49元）
				p - 荣耀7i手机（1399元）
				p *每次发布作品之后分享可进行一次抽奖
				p *如发现参与者恶意上传重复作品或者与主题无关作品，将在未进行通知情况下取消其获奖资格
				p
				p 活动时间：
				p 2016年4月15日至2016年5月10日24:00止
				p ·本次活动主办方为华为荣耀有限公司
				p ·本次活动产生的全部资料、照片等所有权及知识产权均属主办方所有
				p ·参与者如违反下列任一情况的，主办方有权在不予通知情况下屏蔽其作品
				p 1)内容违法或唆使违法、唆使虐待及自残等行为的动机
				p 2)内容不得带有歧视、不得涉及政治、宗教等
				p 3)内容不得扰乱社会公共秩序
				p 4)不侵犯他人或机构的著作权、专利权或商标权等相关知识产权
				p 5)不侵犯他人肖像权或隐私
				p 6)不损害他人名誉、信用，无导致他人不快等内容
	.pop.image-info.fadeIn.animated(show="{imageInfo}")
		.close(onclick="{closeInfo}")
			img(src="#{url}/img/btn-close.png")
		.content
			img(src="{imagelarge}")

	script(type="text/coffeescript").
		self = this
		self.data = {}
		this.INDEX = INDEX+1
		this.buildpage = false
		this.activeinfo = false
		this.submited = false
		this.sharedsuccess = false
		this.otherspage = false
		this.lotteryfaild = false
		this.lotterysuccess = false
		this.submitsuccess = false
		this.imagelarge = ""
		this.imageInfo = false
		this.posting = false
		this.lists = [[],[]]

		global.homepage = self unless global.canvas?

		Number = 0
		_first = false
		this.sliderEnd = (num)->
			console.log num, Number, Number >= 1 , not _first
			if Number >= 1 and not _first
				_first = true
				Loader("moreImage","努力加载中，需要一些时间，不如发表一张作品后再来？",type="ball",0,"<a href='http://api.giccoo.com/sayno/momo/' class='more'><img src='http://image.giccoo.com/projects/sayno_momo/img/btn-more.png' /></a>")
			Number = Math.abs num

		this.showInfo = (evt)->
			# console.log $(evt.target).parent().attr("rel")
			self.imageInfo = true
			self.imagelarge = $(evt.target).parent().attr("rel")
			self.update()

		this.closeInfo = ->
			self.imageInfo = false
			self.update()

		this.start = ->
			@buildpage = true
			# @update()
		this.showActive = ->
			@activeinfo = true
		this.closeactive = ->
			@activeinfo = false

		this.submit = ->
			# self.showShare()
			# console.log self.tags["ctrl-image"].stopCtrl()
			# return false

			uploadImage (msg)->
				# console.log msg
				self.data = msg
				self.showShare()
				self.tags["ctrl-image"].stopCtrl()
				$("#title",self.root).attr("readonly","true")
				text = null
				if $("#title",self.root).val().length > 0
					text = "谁说"+$("#title",self.root).val()+" 我有异见！"
				# console.log(text,null,"http://api.giccoo.com/sayno/momo/?id="+self.data.obj.insertId,"http://image.giccoo.com/sayno/momo/"+self.data.image)
				UpdateShareContent(text,null,"http://api.giccoo.com/sayno/momo/?id="+self.data.obj.insertId,"http://image.giccoo.com/sayno/momo/small-"+self.data.image)

		this.showShare = ->
			this.submited = true
			@update()

		this.share = ->
			shareCall()
		this.openShare = ->
			self.sharedsuccess = true
			self.update()
			return self
		this.closeOther = ->
			@otherspage = false
		# 抽奖
		this.postLottery = ->
			if @posting
				return false
			unless self.data.obj?
				return SendNote "请先上传作品"
			data = {
				nickname: userInfo.name
				id: self.data.obj.insertId
			}
			Loader "lottery","正在查询中奖状况"
			@posting = true
			$.post link+"/sayno/momo/lottery",data, (msg)->
				if msg.recode is 200
					self.lotterysuccess = true
					self.lottery = msg.obj
				else
					self.lotteryfaild = true
				Loader "lottery"
				self.posting = false
				self.update()

		this.showOthers = ->
			this.lists = [[],[]]
				
			for item in [0...self.data.list.length]
				if item < 6
					this.lists[0].push {src: self.data.list[item].image}
				else
					this.lists[1].push {src: self.data.list[item].image}

			@otherspage = true
			@update()

		this.shareSuccess = ->

		this.submitLottery = ->
			# SendNote("提交成功,请耐心等待奖品")
			# $(".form",self.root).hide()
			unless self.lottery? and self.lottery.insertId?
				return SendNote "非法操作,并没有中奖"
			data = {
				nickname: userInfo.name
				id: self.data.obj.insertId
				lottery: self.lottery.insertId
				name: $("#name").val()
				mobile: $("#mobile").val()
				adr: $("#adr").val()
			}
			if data.name.length <= 0
				return SendNote "请输入联系人姓名"
			if data.mobile.length <= 0
				return SendNote "请输入联系电话"
			if data.adr.length <= 0
				return SendNote "请输入联系地址"
			if @posting
				return false
			@posting = true
			$.post link+"/sayno/momo/lotteryUpdate",data, (msg)->
				if msg.recode is 200
					self.submitsuccess = true
				else
					SendNote msg.reason
				self.posting = true
				self.update()

		this.restart = ->
			window.location.reload()