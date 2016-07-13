register
	form.form(onsubmit="{submit}")
		.form-grounp
			label(for="username") 姓名
			input#username(type="text",name="username")
		.form-grounp
			label(for="") 性别
			.comb
				label(for="man") 先生
				input#man(type="radio",name="sex",value="先生",checked)
				label(for="woman") 女士
				input#woman(type="radio",name="sex",value="女士")
		.form-grounp
			label(for="mobile") 手机号码
			input#mobile(type="text",name="mobile")
		.form-grounp
			label(for="province") 所在省/市
			.comb
				.select
					span {provinceName}
					select#province(name="province",onchange="{changeProvince}")
						option(each="{name in province}",value="{name}") {name}
				.select
					span {cityName}
					select#city(name="city",onchange="{changeCity}")
						option(each="{name in city}",value="{name}") {name}
		.form-grounp
			label(for="dealer") 经销商
			.select
				span {dealerName}
				select#dealer(name="dealer",onchange="{changeDealer}")
					option(each="{dealer}",value="{code}") {name}
		.form-grounp
			label(for="type") 试驾车型
			.select
				span {typeName}
				select#type(name="type",onchange="{changeType}")
					option(each="{name in type}",value="{name}") {name}

		.form-btn
			button.submit(type="submit")
				img(src="img/submit.png")
				
	script(type="text/coffeescript").
		self = this
		@cityData = _citys
		@type = _type
		@typeName = @type[0]
		province = []
		for name of @cityData
			province.push name
		city = []
		for name of @cityData[province[0]]
			city.push name
		dealer = @cityData[province[0]][city[0]]
		@province = province
		@city = city
		@dealer = dealer
		@provinceName = @province[0]
		@cityName = @city[0]
		@dealerName = @dealer[0].name
		@firstUpdate = true
		@on 'update', ->
			if @firstUpdate
				return @firstUpdate = false
			@provinceName = $('[name=province]', @root).val()
			@cityName = $('[name=city]', @root).val()
			@dealerName = $('[name=dealer] [value=' + $('[name=dealer]', @root).val() + ']', @root).text()
			return

		@changeType = (evt) ->
			@typeName = $('[name=type]', self.root).val()
			self.update()
			return
		@changeCity = (evt) ->
			newName = $('[name=province]', self.root).val()
			newCity = $('[name=city]', @root).val()
			dealer = self.cityData[newName][newCity]
			self.dealer = dealer
			self.update()
			return

		@changeProvince = (evt) ->
			newName = $('[name=province]', self.root).val()
			city = []
			for name of self.cityData[newName]
				city.push name
			dealer = self.cityData[newName][city[0]]
			self.city = city
			self.dealer = dealer
			self.update()
			return

		@changeDealer = (evt) ->
			self.update()
			return

		@submit = ->
			data = $('form', @root).serializeArray()
			data.push
				name: 'dealername'
				value: self.dealerName
			if $('[name=username]', @root).val().length < 1 or $('[name=username]', @root).val() == ''
				SendNote '姓名不能为空'
				return false
			if $('[name=mobile]', @root).val().length < 1 or $('[name=mobile]', @root).val() == ''
				SendNote '手机号码不能为空'
				return false
			$.post opts.action, data, (msg) ->
				#- 提交
				if msg.recode == 200
					SendNote '注册成功'
					setTimeout ->
						backHome()
					,1500
					#- window.location.href = "http://www.landrover.com.cn/vehicles/range-rover-sport/range-rover-sport-svr.html"
				else
					SendNote msg.reason
				return
			false
