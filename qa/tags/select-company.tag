
<select-company>
  <div class="content">
    <div class="form-grounp">
      <label for="province">分类:</label>
      <div class="select"><span>{provinceName}</span>
        <select id="province" name="province" onchange="{changeProvince}">
          <option each="{name in province}" value="{name}">{name}</option>
        </select>
      </div>
    </div>
    <div class="form-grounp">
      <label for="city">公司名称:</label>
      <div class="select"><span>{cityName}</span>
        <select id="city" name="city" onchange="{changeCity}">
          <option each="{name in city}" value="{name}">{name}</option>
        </select>
      </div>
    </div>
    <div class="form-grounp">
      <label for="province">搜索公司:</label>
      <input type="search" name="search" onblur="{searchChange}" onchange="{searchChange}" onkeyup="{searchChange}" placeholder="请输入您所在公司的关键字"/>
    </div>
    <div class="form-grounp">
      <div class="btns">
        <div show="{cityName!='请选择' &amp;&amp; cityName != '未找到' &amp;&amp; cityName != ''}" onclick="{submit}" class="btn submit">开始答题</div>
        <div onclick="{clear}" class="btn clear">清空</div>
        <div onclick="{close}" class="btn close">关闭</div>
      </div>
    </div>
  </div>
  <script>
    var self = this
    
    this.cityData = _citys
    var province = []
    for (name in this.cityData) {
    	province.push(name)
    }
    var city = this.cityData[province[0]]
    //- var dealer = this.cityData[province[0]][city[0]]
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
    	//- var dealer = self.cityData[newName][newCity]
    	//- self.dealer = dealer
    	self.update()
    }
    changeProvince(evt) {
    	var newName = $("[name=province]",self.root).val()
    	//- var city = []
    	//- for (name in self.cityData[newName]) {
    	//- 	city.push(name)
    	//- }
    	//- var dealer = self.cityData[newName][city[0]]
    	self.city = self.cityData[newName]
    	//- self.dealer = dealer
    	$("[name=search]",this.root).val("")
    	self.update()
    }
    searchChange(evt) {
    	//- console.log($(evt.target).val())
    	var text = $(evt.target).val()
    	var names = []
    	if (text.length <= 0) {
    		var newName = $("[name=province]",self.root).val()
    		self.city = self.cityData[newName]
    		self.update()
    		return true
    	}
    	for(var item in this.cityData) {
    		for(var i=0;i<this.cityData[item].length;i++) {
    			if (this.cityData[item][i].indexOf(text) > -1) {
    				names.push(this.cityData[item][i])
    			}
    		}
    	}
    	console.log(names)
    	if (names.length <= 0) {
    		names.push("未找到")
    	}
    	this.city = names
    	this.cityName = this.city[0]
    	this.update()
    }
    
    clear() {
    	$("[name=search]",this.root).val("")
    	$("[name=province] option",self.root).not(function(){ return console.log(this.selected=false) })
    	this.province = province
    	this.city = city
    	this.provinceName = this.province[0]
    	this.cityName = this.city[0]
    	this.update()
    }
    submit() {
    	if (self.cityName == "请选择" || self.cityName == "未找到" || self.cityName == "") {
    		SendNote("请选择公司后进行答题")
    		return false
    	}
    	CompanyPage(self.cityName)
    }
    
    close() {
    	$(this.root).removeClass("on")
    }
  </script>
</select-company>