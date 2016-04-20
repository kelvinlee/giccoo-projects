build
	// - var url = "http://disk.giccoo.com/projects/sayno_momo"
	// - var url = "http://image.giccoo.com/projects/sayno"
	- var url = "./"
	.build(show="{!submited}")
		#ctrl-image
			.logo
				img(src="#{url}/img/logo-mark.png")
		.title
			.line.normal.select-arrow(onclick="{opendSelect}")
				img(src="#{url}/img/build-title.png")
				.arrow
					img(src="#{url}/img/arrow.png")
			.line.select(onclick="{opendSelect}")
				img(src="#{url}/img/select-{INDEX}.png")
			.select-list(show="{selectlist}")
				.option(class="{on: (INDEX == 1),not: (INDEX != 1)}",onclick="{selectIndex(1)}")
					img(src="#{url}/img/select-1.png")
				.option(class="{on: (INDEX == 2),not: (INDEX != 2)}",onclick="{selectIndex(2)}")
					img(src="#{url}/img/select-2.png")
				.option(class="{on: (INDEX == 3),not: (INDEX != 3)}",onclick="{selectIndex(3)}")
					img(src="#{url}/img/select-3.png")
				.option(class="{on: (INDEX == 4),not: (INDEX != 4)}",onclick="{selectIndex(4)}")
					img(src="#{url}/img/select-4.png")
			.inputname
				input(name="username",type="text",placeholder="您的ID")
		.image-slogen
			img(src="#{url}/img/image-slogen.png")
	
	.build(show="{submited}")
		img(if="{submited}",src="http://image.giccoo.com/sayno/mfw/{image}")
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
		this.submiting = false
		this.selectlist = false
		this.lists = [[],[]]

		global.build = self unless global.canvas?

		Number = 0
		_first = false
		this.sliderEnd = (num)->
			console.log num, Number, Number >= 1 , not _first
			if Number >= 1 and not _first and Math.abs(num) >= 1
				_first = true
				Loader("moreImage","努力加载中，需要一些时间，不如发表一张作品后再来？",type="ball",0,"<a href='http://api.giccoo.com/sayno/momo/' class='more'><img src='http://image.giccoo.com/projects/sayno_momo/img/btn-more.png' /></a>")
			Number = Math.abs num

		this.opendSelect = ->
			self.selectlist = true
			self.update()

		this.selectIndex = (nums)->
			return ->
				self.selectlist = false
				self.INDEX = -1+parseInt nums
				global.INDEX = -1+parseInt nums
				self.update()

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
			setTimeout ->
				$(".noteText",this.root).remove()
			,3000
		this.showActive = ->
			@activeinfo = true
		this.closeactive = ->
			@activeinfo = false

		this.submit = ->
			val = $("[name=username]",self.root).val()
			if val.length <= 0
				return SendNote("请先填写您的ID")
			userInfo.name = val
			if self.submiting
				return SendNote("上传中请稍后")
			self.submiting = true
			self.update()
			# self.showShare()
			# console.log self.tags["ctrl-image"].stopCtrl()
			# return false

			uploadImage (msg)->
				# console.log msg
				self.data = msg
				self.submiting = false
				self.image = msg.info.image
				self.showShare()
				self.tags["ctrl-image"].stopCtrl()
				$("[name=username]",self.root).attr("readonly","true")
				text = defaultWords[global.INDEX-1]
				# console.log(text,null,"http://api.giccoo.com/sayno/momo/?id="+self.data.obj.insertId,"http://image.giccoo.com/sayno/momo/"+self.data.image)
				UpdateShareContent(text,null,"http://m.giccoo.com/sayno_mfw/share.html?id="+self.data.obj.insertId,"http://image.giccoo.com/sayno/mfw/small-"+self.data.image)

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

		this.on "mount", ->
			riot.mount("#ctrl-image","ctrl-image")