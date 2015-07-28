
riot.tag('register', '<form onsubmit="{submit}" class="form"> <div class="form-grounp"> <label for="username">姓名:</label> <input id="username" type="text" name="username"> </div> <div class="form-grounp"> <label for="">性别:</label> <div class="comb"> <label for="man">先生</label> <input id="man" type="radio" name="sex" value="男" checked="checked"> <label for="woman">女士</label> <input id="woman" type="radio" name="sex" value="女"> </div> </div> <div class="form-grounp"> <label form="mobile">手机号码:</label> <input id="mobile" type="text" name="mobile"> </div> <div class="form-grounp"> <label form="email">电子邮箱:</label> <input id="email" type="text" name="email"> </div> <div class="form-grounp"> <label form="email">所在省/直辖市:</label> <div class="comb"> <div class="select"><span>{provinceName}</span> <select id="province" name="province" onchange="{changeProvince}"> <option each="{cityData}" value="{name}">{name}</option> </select> </div> <div class="select"><span>{cityName}</span> <select id="city" name="city" onchange="{changeCity}"> <option each="{city}" value="{name}">{name}</option> </select> </div> </div> </div> <div class="form-grounp"> <label form="buytime">购车时间:</label> <div class="select"><span>{buytimeName}</span> <select id="buytime" name="buytime" onchange="{changeSelect}"> <option each="{name in buytimeData}" value="{name}">{name}</option> </select> </div> </div> <div class="form-grounp"> <label form="buytime">购车预算:</label> <div class="select"><span>{howmuchName}</span> <select id="howmuch" name="howmuch" onchange="{changeSelect}"> <option each="{name in howmuchData}" value="{name}">{name}</option> </select> </div> </div> <div class="form-btn"> <button type="submit" class="submit"><img src="/Landrover/img/submit.jpg"></button> </div> </form>', function(opts) {
    var self = this
    this.cityData = cityData
    this.city = this.cityData[0]["sub"]
    this.provinceName = this.cityData[0].name
    this.cityName = this.city[0].name
    this.firstUpdate = true
    this.on("update",function(){
    	if (this.firstUpdate) {return this.firstUpdate = false}
    	this.provinceName = $("[name=province]",this.root).val()
    	this.cityName = $("[name=city]",this.root).val()
    })
    this.changeCity = function(evt) {
    	this.update()
    }.bind(this);
    this.changeProvince = function(evt) {
    	var name = $("[name=province]",this.root).val()
    	for(var i=this.cityData.length-1;i>=0;i--) {
    		if (this.cityData[i].name == name) {
    			this.city = this.cityData[i]["sub"]
    			this.update()
    			return true
    		}
    	}
    	return true
    }.bind(this);
    this.changeSelect = function(evt) {
    	var val = $(evt.target).val()
    	$(evt.target).prev().text(val)
    	return true
    }.bind(this);
    this.submit = function() {
    	var data = $("form",this.root).serializeArray()
    	if ( $("[name=username]",this.root).val().length < 1 || $("[name=username]",this.root).val() == "") {
    		alert("姓名不能为空")
    		return false
    	}
    	if ( $("[name=mobile]",this.root).val().length < 1 || $("[name=mobile]",this.root).val() == "") {
    		alert("手机号码不能为空")
    		return false
    	}
    	if ( $("[name=email]",this.root).val().length < 1 || $("[name=email]",this.root).val() == "") {
    		alert("电子邮箱不能为空")
    		return false
    	}
        $.post("http://api.giccoo.com/landrover/add/",data,function(msg){
    	// $.post("http://kelvin-air.local:8881/landrover/add/",data,function(msg){

    		if (msg.recode == 200) {
    			alert("注册成功")
    			// window.location.href = "http://www.landrover.com.cn/vehicles/range-rover-sport/range-rover-sport-svr.html"
    		}else{
    			alert(msg.reason)
    		}
    	})
    	return false
    }.bind(this);

    this.buytimeData = ["0-3个月","4-6个月","7-12个月","一年以上"]
    this.buytimeName = this.buytimeData[0]
    this.howmuchData = ["50万以下","50-99万","100-149万","150-200万","200万以上"]
    this.howmuchName = this.howmuchData[0]
  
});