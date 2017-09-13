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
						option(each="{cityData}",value="{name}") {name}
				.select
					span {cityName}
					select#city(name="city",onchange="{changeCity}")
						option(each="{city}",value="{name}") {name}
		.form-check
			.checkbox
				input(type="checkbox",checked,name="state",value="1")
			label 我已阅读并接受隐私条款：
		.form-grounp
			p 您的个人资料有可能提交至马自达厂商及其授权经销商与您进一步沟通试驾，购车等事宜。
		.form-btn
			button.submit(type="submit")
				img(src="img/submit.png")
				
	script(type="text/coffeescript").
		self = this

		@changeCity = (evt) ->
			@update()
			return

		@changeProvince = (evt) ->
			name = $('[name=province]', @root).val()
			i = @cityData.length - 1
			while i >= 0
				if @cityData[i].name == name
					@city = @cityData[i]['sub']
					@update()
					return true
				i--
			true

		@changeDealer = (evt) ->
			self.update()
			return

		@changeBudget = (evt) ->
			newName = $('[name=budget]', self.root).val()
			self.budgetName = newName
			self.update()
			return

		@changeBuytime = (evt) ->
			newName = $('[name=buytime]', self.root).val()
			self.buytimeName = newName
			self.update()
			return

		@changeType = (evt) ->
			newName = $('[name=type]', self.root).val()
			self.typeName = newName
			self.update()
			return

		@submit = ->
			data = $('form', @root).serializeArray()
			data.push
				name: 'dealername'
				value: self.dealerName

			if $('[name=username]', @root).val().length < 1 or $('[name=username]', @root).val() == ''
				alert '姓名不能为空'
				return false
			if $('[name=mobile]', @root).val().length < 1 or $('[name=mobile]', @root).val() == ''
				alert '手机号码不能为空'
				return false
			checked = false
			for item in data
				if item.name == "state"
					checked = true
			if !checked
				alert("我已阅读并接受隐私条款")
				return false
			$.post opts.action, data, (msg) ->
				#- 提交
				if msg.recode == 200
					#- alert("注册成功")
					#- window.location.href = "http://www.landrover.com.cn/vehicles/range-rover-sport/range-rover-sport-svr.html"
					SendNote '注册成功'
				else
					#- alert(msg.reason)
					SendNote msg.reason
				return
			false

		@cityData = cityData
		@city = @cityData[0]['sub']
		@provinceName = @cityData[0].name
		@cityName = @city[0].name
		# @budget = _budget
		# @buytime = _buytime
		# @type = _type
		province = []
		for name of @cityData
			`name = name`
			province.push name
		city = []
		for name of @cityData[province[0]]
			`name = name`
			city.push name
		dealer = @cityData[province[0]][city[0]]
		#- this.province = province
		#- this.city = city
		#- this.dealer = dealer
		# @budgetName = @budget[0]
		# @buytimeName = @buytime[0]
		# @typeName = @type[0]
		#- this.provinceName = this.province[0]
		#- this.cityName = this.city[0]
		#- this.dealerName = this.dealer[0].name
		@firstUpdate = true
		@on 'update', ->
			if @firstUpdate
				return @firstUpdate = false
			@provinceName = $('[name=province]', @root).val()
			@cityName = $('[name=city]', @root).val()
			return