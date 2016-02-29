
<register>
  <form onsubmit="{submit}" class="form">
    <div class="form-grounp">
      <label for="username">姓名:</label>
      <input id="username" type="text" name="username"/>
    </div>
    <div class="form-grounp">
      <label for="">性别:</label>
      <div class="comb">
        <label for="man">先生</label>
        <input id="man" type="radio" name="sex" value="先生" checked="checked"/>
        <label for="woman">女士</label>
        <input id="woman" type="radio" name="sex" value="女士"/>
      </div>
    </div>
    <div class="form-grounp">
      <label for="mobile">手机号码:</label>
      <input id="mobile" type="text" name="mobile"/>
    </div>
    <div class="form-grounp">
      <label for="province">所在省/市:</label>
      <div class="comb">
        <div class="select"><span>{provinceName}</span>
          <select id="province" name="province" onchange="{changeProvince}">
            <option each="{name in province}" value="{name}">{name}</option>
          </select>
        </div>
        <div class="select"><span>{cityName}</span>
          <select id="city" name="city" onchange="{changeCity}">
            <option each="{name in city}" value="{name}">{name}</option>
          </select>
        </div>
      </div>
    </div>
    <div class="form-btn">
      <button type="submit" class="submit"><img src="img/submit.png"/></button>
    </div>
  </form>
  <script>
    var self = this
    this.cityData = _citys
    var province = []
    for (name in this.cityData) {
    	province.push(name)
    }
    var city = []
    for (name in this.cityData[province[0]]) {
    	city.push(name)
    }
    var dealer = this.cityData[province[0]][city[0]]
    this.province = province
    this.city = city
    //- this.dealer = dealer
    
    this.provinceName = this.province[0]
    this.cityName = this.city[0]
    //- this.dealerName = this.dealer[0].name
    this.firstUpdate = true
    this.on("update",function(){
    	if (this.firstUpdate) {return this.firstUpdate = false}
    	this.provinceName = $("[name=province]",this.root).val()
    	this.cityName = $("[name=city]",this.root).val()
    	//- this.dealerName = $("[name=dealer] [value="+$("[name=dealer]",this.root).val()+"]",this.root).text()
    })
    changeCity(evt) {
    	var newName = $("[name=province]",self.root).val()
    	var newCity = $("[name=city]",this.root).val()
    	var dealer = self.cityData[newName][newCity]
    	//- self.dealer = dealer
    	self.update()
    }
    changeProvince(evt) {
    	var newName = $("[name=province]",self.root).val()
    	var city = []
    	for (name in self.cityData[newName]) {
    		city.push(name)
    	}
    	var dealer = self.cityData[newName][city[0]]
    	self.city = city
    	//- self.dealer = dealer
    	self.update()
    }
    changeDealer(evt) {
    	self.update()
    }
    submit() {
    	var data = $("form",this.root).serializeArray()
    	data.push({name:"dealername",value:self.dealerName})
    	if ( $("[name=username]",this.root).val().length < 1 || $("[name=username]",this.root).val() == "") {
    		alert("姓名不能为空")
    		return false
    	}
    	if ( $("[name=mobile]",this.root).val().length < 1 || $("[name=mobile]",this.root).val() == "") {
    		alert("手机号码不能为空")
    		return false
    	}
    	$.post(opts.action,data,function(msg){
    		//- 提交
    		if (msg.recode == 200) {
    			//- alert("注册成功")
    			SendNote("注册成功")
    			//- window.location.href = "http://www.landrover.com.cn/vehicles/range-rover-sport/range-rover-sport-svr.html"
    		}else{
    			//- alert(msg.reason)
    			SendNote(msg.reason)
    		}
    	})
    	return false
    }
  </script>
</register>