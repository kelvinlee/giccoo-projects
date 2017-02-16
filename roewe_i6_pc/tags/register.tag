register
	form.form(onsubmit="{submit}")
		.form-grounp
			label(for="username") 姓名
			input#username(type="text",name="username")
		//- .form-grounp
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
						option(each="{cityData}",value="{name}") {name}
				.select
					span {cityName}
					select#city(name="city",onchange="{changeCity}")
						option(each="{city}",value="{name}") {name}
		//- .form-grounp
			label(for="dealer") 经销商
			.select
				span {dealerName}
				select#dealer(name="dealer",onchange="{changeDealer}")
					option(each="{dealer}",value="{code}") {name}
		//- .form-grounp
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
		@cityData = cityData
		@city = @cityData[0]["sub"]
		@provinceName = @cityData[0].name
		@cityName = @city[0].name
		# @type = _type
		# @typeName = @type[0]
		province = []
		for name of @cityData
			`name = name`
			province.push name
		city = []
		for name of @cityData[province[0]]
			`name = name`
			city.push name

		# @province = province
		
		# @dealer = dealer
		
		# @dealerName = @dealer[0].name
		@firstUpdate = true
		@on 'update', ->
			if @firstUpdate
				return @firstUpdate = false
			@provinceName = $('[name=province]', @root).val()
			@cityName = $('[name=city]', @root).val()
			# @dealerName = $('[name=dealer] [value=' + $('[name=dealer]', @root).val() + ']', @root).text()
			return

		# @changeType = (evt) ->
		# 	@typeName = $('[name=type]', self.root).val()
		# 	self.update()
		# 	return
		@changeCity = (evt) ->
			# newName = $('[name=province]', self.root).val()
			# newCity = $('[name=city]', @root).val()
			# dealer = self.cityData[newName][newCity]
			# self.dealer = dealer
			self.update()
			return

		@changeProvince = (evt) ->
			name = $('[name=province]', @root).val()
			i = @cityData.length - 1
			while i >= 0
				if @cityData[i].name == name
					@city = @cityData[i]['sub']
					@update()
					break
				i--

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
					#- window.location.href = "http://www.landrover.com.cn/vehicles/range-rover-sport/range-rover-sport-svr.html"
				else
					SendNote msg.reason
				return
			false
