
<register>
  <form onsubmit="{submit}" class="form">
    <div class="form-grounp">
      <label for="username">姓名</label>
      <input id="username" type="text" name="username"/>
    </div>
    <div class="form-grounp">
      <label for="">性别</label>
      <div class="comb">
        <label for="man">先生</label>
        <input id="man" type="radio" name="sex" value="先生" checked="checked"/>
        <label for="woman">女士</label>
        <input id="woman" type="radio" name="sex" value="女士"/>
      </div>
    </div>
    <div class="form-grounp">
      <label for="mobile">手机号码</label>
      <input id="mobile" type="text" name="mobile"/>
    </div>
    <div class="form-grounp">
      <label for="province">所在省/市</label>
      <div class="comb">
        <div class="select"><span>{provinceName}</span>
          <select id="province" name="province" onchange="{changeProvince}">
            <option each="{cityData}" value="{name}">{name}</option>
          </select>
        </div>
        <div class="select"><span>{cityName}</span>
          <select id="city" name="city" onchange="{changeCity}">
            <option each="{city}" value="{name}">{name}</option>
          </select>
        </div>
      </div>
    </div>
    <div class="form-grounp">
      <label for="budget">购车预算</label>
      <div class="select"><span>{budgetName}</span>
        <select id="budget" name="budget" onchange="{changeBudget}">
          <option each="{name in budget}" value="{name}">{name}</option>
        </select>
      </div>
    </div>
    <div class="form-grounp">
      <label for="buytime">计划购车时间</label>
      <div class="select"><span>{buytimeName}</span>
        <select id="buytime" name="buytime" onchange="{changeBuytime}">
          <option each="{name in buytime}" value="{name}">{name}</option>
        </select>
      </div>
    </div>
    <div class="form-grounp">
      <label for="type">感兴趣车型</label>
      <div class="select"><span>{typeName}</span>
        <select id="type" name="type" onchange="{changeType}">
          <option each="{name in type}" value="{name}">{name}</option>
        </select>
      </div>
    </div>
    <div class="form-btn">
      <button type="submit" class="submit"><img src="img/submit.png"/></button>
    </div>
  </form>
  <script>
    var self = this
    this.cityData = cityData
    this.city = this.cityData[0]["sub"]
    this.provinceName = this.cityData[0].name
    this.cityName = this.city[0].name
    
    this.budget = _budget
    this.buytime = _buytime
    this.type = _type
    var province = []
    for (name in this.cityData) {
    	province.push(name)
    }
    var city = []
    for (name in this.cityData[province[0]]) {
    	city.push(name)
    }
    var dealer = this.cityData[province[0]][city[0]]
    //- this.province = province
    //- this.city = city
    //- this.dealer = dealer
    this.budgetName = this.budget[0]
    this.buytimeName = this.buytime[0]
    this.typeName = this.type[0]
    //- this.provinceName = this.province[0]
    //- this.cityName = this.city[0]
    //- this.dealerName = this.dealer[0].name
    this.firstUpdate = true
    this.on("update",function(){
    	if (this.firstUpdate) {return this.firstUpdate = false}
    	this.provinceName = $("[name=province]",this.root).val()
    	this.cityName = $("[name=city]",this.root).val()
    })
    changeCity(evt) {
    	this.update()
    }
    changeProvince(evt) {
    	var name = $("[name=province]",this.root).val()
    	for(var i=this.cityData.length-1;i>=0;i--) {
    		if (this.cityData[i].name == name) {
    			this.city = this.cityData[i]["sub"]
    			this.update()
    			return true
    		}
    	}
    	return true
    }
    changeDealer(evt) {
    	self.update()
    }
    changeBudget(evt){
    	var newName = $("[name=budget]",self.root).val()
    	self.budgetName = newName
    	self.update()
    }
    changeBuytime(evt){
    	var newName = $("[name=buytime]",self.root).val()
    	self.buytimeName = newName
    	self.update()
    }
    changeType(evt){
    	var newName = $("[name=type]",self.root).val()
    	self.typeName = newName
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
    			//- window.location.href = "http://www.landrover.com.cn/vehicles/range-rover-sport/range-rover-sport-svr.html"
    			SendNote("注册成功")
    		}else{
    			//- alert(msg.reason)
    			SendNote(msg.reason)
    		}
    	})
    	return false
    }
  </script>
</register>