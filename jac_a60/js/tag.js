riot.tag2('register', '<form onsubmit="{submit}" class="form">  <div id="emptyDiv"><div class="form-grounp">  <label for="username">*姓名</label> <input id="username" type="text" name="username">  </div>  <div class="form-grounp">  <label for="mobile">*移动电话</label> <input id="mobile" type="text" name="mobile">  </div>  <div class="form-grounp"> <label for="city">*所在城市</label> <input id="city" type="text" name="city"> </div>   <div class="form-btn"> <button type="submit" class="submit"><img src="img/form_btn.png"></button></div></div></form>', '', '', function(opts) {
    var self = this
    this.cityData = cityData
    this.city = this.cityData[0]["sub"]
    this.provinceName = this.cityData[0].name
    this.cityName = this.city[0].name

    var province = []
    for (name in this.cityData) {
        province.push(name)
    }
    var city = []
    for (name in this.cityData[province[0]]) {
        city.push(name)
    }
    var dealer = this.cityData[province[0]][city[0]]

    this.firstUpdate = true
    this.on("update",function(){
        if (this.firstUpdate) {return this.firstUpdate = false}
        this.provinceName = $("[name=province]",this.root).val()
        this.cityName = $("[name=city]",this.root).val()
    })
    this.changeCity = function(evt) {
        this.update()
    }.bind(this)
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
    }.bind(this)
    this.changeDealer = function(evt) {
        self.update()
    }.bind(this)
    this.changeBuytime = function(evt){
        var newName = $("[name=buytime]",self.root).val()
        self.buytimeName = newName
        self.update()
    }.bind(this)
    this.changeType = function(evt){
        var newName = $("[name=type]",self.root).val()
        self.typeName = newName
        self.update()
    }.bind(this)
    this.submit = function() {
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

            if (msg.recode == 200) {

                SendNote("注册成功")
            }else{

                SendNote(msg.reason)
            }
        })
        return false
    }.bind(this)
}, '{ }');