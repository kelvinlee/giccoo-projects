
<register>
  <form onsubmit="{submit}" class="form fadeInLeft animated delay-6">
    <div class="form-grounp">
      <label for="username">姓名:</label>
      <input id="username" type="text" name="username"/>
    </div>
    <div class="form-grounp">
      <label for="mobile">手机号码:</label>
      <input id="mobile" type="text" name="mobile"/>
    </div>
    <div class="form-grounp">
      <label for="city">所在城市:</label>
      <div class="select"><span>{cityName}</span>
        <select id="city" name="city" onchange="{changeSelect}">
          <option each="{name in city}" value="{name}">{name}</option>
        </select>
      </div>
    </div>
    <div class="form-check">
      <div class="checkbox">
        <input type="checkbox" checked="checked" name="state" value="1"/>
      </div>
      <label>我已阅读并接受数据使用声明  法律声明＊</label>
    </div>
    <div class="form-btn">
      <button type="submit" class="submit"><img src="/BMWX1/img/submit.png"/></button>
    </div>
  </form>
  <script>
    var self = this
    //- this.cityData = cityData
    this.city = ["昆明","成都","武汉","郑州","其他"]
    //- this.provinceName = this.cityData[0].name
    this.cityName = this.city[0]
    //- this.firstUpdate = true
    //- this.on("update",function(){
    //- 	if (this.firstUpdate) {return this.firstUpdate = false}
    //- 	this.provinceName = $("[name=province]",this.root).val()
    //- 	this.cityName = $("[name=city]",this.root).val()
    //- })
    //- changeCity(evt) {
    //- 	this.update()
    //- }
    //- changeProvince(evt) {
    //- 	var name = $("[name=province]",this.root).val()
    //- 	for(var i=this.cityData.length-1;i>=0;i--) {
    //- 		if (this.cityData[i].name == name) {
    //- 			this.city = this.cityData[i]["sub"]
    //- 			this.update()
    //- 			return true
    //- 		}
    //- 	}
    //- 	return true
    //- }
    changeSelect(evt) {
    	var val = $(evt.target).val()
    	$(evt.target).prev().text(val)
    	return true
    }
    submit() {
    	var list = $("form",this.root).serializeArray()
    	var checked = false
    	
    	for (var i = list.length-1; i >= 0 ;i-- ) {
    		if (list[i].name == "state") {
    				checked = true
    		}
    	}
    	//- console.log(list,!checked)
    	if (!checked) {
    		alert("请选择我已阅读并接受数据使用声明 法律声明＊")
    		return false
    	}
    	if ( $("[name=username]",this.root).val().length < 1 || $("[name=username]",this.root).val() == "") {
    		alert("姓名不能为空")
    		return false
    	}
    	var reg = /^0?1[0-9][0-9]\d{9}$/
    	if (reg.test($("[name=mobile]",this.root).val())) {
    		alert("手机号码格式不正确")
    		return false
    	}
    
    	$.post("http://api.giccoo.com/bmwx1/insert/",list,function(msg){
    		if (msg.recode == 200) {
    			alert("提交成功!")
    		}else{
    			alert(msg.reason)
    		}
    	})
    	//- if ($("[name=state]",this.root).val())
    	return false
    }
  </script>
</register>