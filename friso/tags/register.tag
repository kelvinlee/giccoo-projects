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
			label(for="province") 所在省/市:
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
					option(each="{dealer}",value="{name}") {name}
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
		@cityData = _citys
		province = []
		for name of @cityData
			province.push name
		console.log province
		city = []
		for name of @cityData[province[0]]
			city.push name
		
		dealer = @cityData[province[0]][city[0]]
		console.log city,dealer
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
					alert '注册成功'
				else
					#- alert(msg.reason)
					alert msg.reason
				return
			false
