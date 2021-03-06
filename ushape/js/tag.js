riot.tag2('register', '<form onsubmit="{submit}" class="form">  <div id="emptyDiv"><div class="form-grounp"> <label for="username">收货人姓名：</label> <input id="username" type="text" name="username">  </div> <div class="form-grounp">  <label for="mobile">收货人电话：</label> <input id="mobile" type="text" name="mobile">  </div> <div class="form-grounp"> <label for="city">收货人地址：</label> <input id="city" type="text" name="city">  </div> <div class="form-btn"> <button type="submit" class="submit"><img src="img/form_btn.png"></button></div></div></form>', '', '', function(opts) {

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
        data.push({name:"uid",value: uid})
        data.push({name:"pc",value: pc})
        data.push({name:"step",value: step})
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
                 ifGet[1-if1]=1
                 data = {ifFirstTime:0,sex:sex,ifGet:ifGet} 
                 localStorage.setItem("data", JSON.stringify(data))
                 medalState[1-if1]=2


                 medalA[0][0].hide()
                 medalA[0][1].hide()
                 medalA[0][2].hide()

                 medalA[1][0].hide()
                 medalA[1][1].hide()
                 medalA[1][2].hide()

                 medalA[2][0].hide()
                 medalA[2][1].hide()
                 medalA[2][2].hide()


                 medalA[0][medalState[0]].css({display:'block'})//========设置奖章状态
                 medalA[1][medalState[1]].css({display:'block'})
                 medalA[2][medalState[2]].css({display:'block'})



                 $('#page5').hide()
                 $('#page6').hide()
               // $("#doneLayer").css({"display":"block"})
            }else{
                SendNote(msg.reason)
                
            }
        })
        return false
    }.bind(this)
}, '{ }');
riot.tag2('note', '<div class="note-box"> <div class="note-content {animated:true,fadeInUp:!close,fadeOutUp:close}"> <div class="note-text"> <div class="icon-form"><img src="http://disk.giccoo.com/projects/showman/img/icon-alert-note.png"></div> {title} </div> </div> </div>', '', '', function(opts) {
var self;

self = this;

this.title = opts.title;

this.close = false;

this.time = opts.time != null ? parseInt(opts.time) : 3000;

$(this.root).addClass("note");

this.on("mount", function() {
  setTimeout(function() {
    return self.unmount();
  }, self.time);
  return setTimeout(function() {
    self.close = true;
    return self.update();
  }, self.time - 500);
});
}, '{ }');