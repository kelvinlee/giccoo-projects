build
	// - var url = "http://disk.giccoo.com/projects/sayno_momo"
	// - var url = "http://image.giccoo.com/projects/sayno"
	- var url = "./"
	.build
		ctrl-image
			.logo
				img(src="#{url}/img/logo-mark.png")
		.title
			.line.normal.select-arrow(onclick="{opendSelect}")
				img(src="#{url}/img/build-title.png")
				.arrow(show="{!stop}")
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
				input(show="{!stop}",name="username",type="text",placeholder="您的ID")
				p(show="{stop}") {yourID}
		.image-slogen
			img(src="#{url}/img/image-slogen.png")
	
	.build.mark(show="{submited}")
		//- img(if="{submited}",src="http://image.giccoo.com/sayno/mfw/{image}@!large")
	script(type="text/coffeescript").
		self = this
		self.data = {}
		this.INDEX = INDEX+1
		this.buildpage = false
		self.stop = false
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
		this.ctrlImage = null
		this.yourID = ""
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
				self.INDEX = parseInt nums
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

		this.submit = (callback)->
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
			self.yourID = $("[name=username]",self.root).val()

			uploadImage self,(msg)->
				# console.log msg
				self.data = msg
				self.submiting = false
				self.image = msg.image
				self.stop = true
				self.showShare()
				self.tags["ctrl-image"].stopCtrl()
				$("[name=username]",self.root).attr("readonly","true")
				text = defaultWords[global.INDEX-1]
				# $("#preview").html("<img src='http://image.giccoo.com/sayno/mfw/"+self.image+"@!large' />")
				# console.log "<img src='http://image.giccoo.com/sayno/mfw/"+self.image+"@!large' />"
				# console.log(text,null,"http://api.giccoo.com/sayno/momo/?id="+self.data.obj.insertId,"http://image.giccoo.com/sayno/momo/"+self.data.image)
				UpdateShareContent(text,null,"http://m.giccoo.com/sayno_mfw/share.html?id="+self.data.obj.insertId,"http://image.giccoo.com/sayno/mfw/small-"+self.data.image)
				callback self

		this.showShare = ->
			this.submited = true
			@update()
			this.lists = [[],[]]
				
			for item in [0...self.data.list.length]
				if item < 6
					# this.lists[0].push {src: self.data.list[item].image}
					$(".picGroup").eq(0).append("<div class='Apic'><img class='pic_All' src='http://image.giccoo.com/sayno/mfw/small-"+self.data.list[item].image+"@!medium' /></div>")
				else
					# this.lists[1].push {src: self.data.list[item].image}
					$(".picGroup").eq(1).append("<div class='Apic'><img class='pic_All' src='http://image.giccoo.com/sayno/mfw/small-"+self.data.list[item].image+"@!medium' /></div>")



		# this.on "mount", ->
		# 	self.ctrlImage = riot.mount("#ctrl-image","ctrl-image")
			
		this.init = ->
			console.log isWechat
			# if isWechat
			# 	self.ctrlImage = riot.mount("#ctrl-image","ctrl-image",{selectimage:"selectFiles"})
			# else
			# 	self.ctrlImage = riot.mount("#ctrl-image","ctrl-image")
