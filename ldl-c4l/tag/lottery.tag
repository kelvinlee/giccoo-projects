lottery
	form(onsubmit="{submit}")
		.form-grounp
			label(for="username") 真实姓名
			input#username(type="text",name="username")
		.form-grounp
			label(for="mobile") 手机号码
			input#mobile(type="text",name="mobile")
		.form-grounp
			label(for="adr") 邮寄地址
			input#adr(type="text",name="adr")
		.form-btn
			button.submit(type="submit")
				img(src="img/submit-lottery.png")
				
	script(type="text/coffeescript").
		self = this

		@submit = ->
			data = $('form', @root).serializeArray()
			if $('[name=username]', @root).val().length < 1 or $('[name=username]', @root).val() == ''
				alert '真实姓名不能为空'
				return false
			if $('[name=mobile]', @root).val().length < 1 or $('[name=mobile]', @root).val() == ''
				alert '手机号码不能为空'
				return false
			if $('[name=adr]', @root).val().length < 1 or $('[name=adr]', @root).val() == ''
				alert ' 联系地址不能为空'
				return false
			$.post opts.action, data, (msg) ->
				#- 提交
				# eval(opts.callback+"()")
				if msg.recode == 200
					#- alert("注册成功")
					#- window.location.href = "http://www.landrover.com.cn/vehicles/range-rover-sport/range-rover-sport-svr.html"
					# SendNote '提交成功'
					eval(opts.callback+"()")
				else
					#- alert(msg.reason)
					SendNote msg.reason
				return
			false

		