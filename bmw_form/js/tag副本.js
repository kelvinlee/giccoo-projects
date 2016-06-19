
riot.tag('register', 
    '<form onsubmit="{submit}" class="form"> 
        <div class="form-grounp"> 
            <label for="title">称谓*</label> 
            <select id="title" name="title"> 
                 <option value="male">先生</option> 
                 <option value="female">女士</option> 
            </select> 
        </div> 
        <div class="form-grounp"> 
            <label for="username1">姓*</label> <input id="username1" type="text" name="username1"> 
        </div>  
        <div class="form-grounp"> 
            <label for="username2">名*</label> <input id="username2" type="text" name="username2"> 
        </div>  
        <div class="form-grounp"> 
            <label for="mobile">移动电话*</label> <input id="mobile" type="text" name="mobile"> 
        </div> 
        <div class="form-grounp"> 
            <label for="location">报名活动站点</label> 
            <select id="location" name="location"> 
                 <option value="厦门">厦门 6/18-6/19</option> 
                 <option value="成都">成都 6/19-6/20</option> 
                 <option value="武汉">武汉 6/26-6/27</option> 
                 <option value="广州">广州 6/30-7/3</option> 
                 <option value="杭州">杭州 7/2-7/3</option> 
                 <option value="贵阳">贵阳 7/9-7/10</option> 
                 <option value="济南">济南 7/9-7/10</option> 
                 <option value="昆明">昆明 7/16-7/17</option> 
                 <option value="北京">北京 7/23-7/24</option> 
                 <option value="上海">上海 8/5-8/6</option> 
                 <option value="重庆">重庆 8/6-8/7</option> 
                 <option value="合肥">合肥 8/13-8/14</option> 
                 <option value="西安">西安 8/13-8/14</option> 
            </select> 
        </div> 
        <div class="endText">我已阅读并接受个人信息保护法律声明*</div> 
        <div class="form-btn"> 
            <button type="submit" class="submit"><img src="img/submit.png"></button> 
        </div> 
    </form>'
    , function(opts) {
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
    this.dealer = dealer
    
    this.provinceName = this.province[0]
    this.cityName = this.city[0]
    this.dealerName = this.dealer[0].name
    this.firstUpdate = true
    this.on("update",function(){
    	if (this.firstUpdate) {return this.firstUpdate = false}
    	this.provinceName = $("[name=province]",this.root).val()
    	this.cityName = $("[name=city]",this.root).val()
    	this.dealerName = $("[name=dealer] [value="+$("[name=dealer]",this.root).val()+"]",this.root).text()
    })
    this.changeCity = function(evt) {
    	var newName = $("[name=province]",self.root).val()
    	var newCity = $("[name=city]",this.root).val()
    	var dealer = self.cityData[newName][newCity]
    	self.dealer = dealer
    	self.update()
    }.bind(this);
    this.changeProvince = function(evt) {
    	var newName = $("[name=province]",self.root).val()
    	var city = []
    	for (name in self.cityData[newName]) {
    		city.push(name)
    	}
    	var dealer = self.cityData[newName][city[0]]
    	self.city = city
    	self.dealer = dealer
    	self.update()
    }.bind(this);
    this.changeDealer = function(evt) {
    	self.update()
    }.bind(this);
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
    	$.post("http://api.giccoo.com/jac/insert/",data,function(msg){

    		if (msg.recode == 200) {
    			//alert("注册成功")
    			$("#doneLayer").css({"display":"block"})
				TweenLite.to($("#doneLayer"),1,{opacity:1})

    		}else{
    			alert(msg.reason)
    		}
    	})
    	return false
    }.bind(this);
  
});

riot.tag('slider', '<div riot-style="-webkit-transition-duration: {duration}s;transition-duration: {duration}s; -webkit-transform: translate3d({x}px,0,0); transform: translate3d({x}px,0,0);" class="slider"> <div each="{bgimg in list}" class="slide"> <div class="bg"><img riot-src="{bgimg}"></div> </div> </div>', function(opts) {
    var self = this
    this.list = opts.list.split(",")
    this.duration = 0.2
    this.offset = {
    	resistance: 1,
    	lastSlide: 1,
    	scrollableArea: 320,
    	isScrolling: false,
    	lastw: 0,
    	w: 320,
    	x: 0,
    	y: 0,
    	deltaX: 0,
    	deltaY: 0
    }
    this.slideNumber = 0
    this.x = 0
    this.y = 0
    var slider = $(".slider",this.root)
    this.setNumber = function(i) {
    	self.duration = 0
    	self.x = -($(".slider",self.root).width() * i)
    	self.update()
    }
    this.setSlideNumber = function(offset) {
    	round = (offset ? (this.offset.deltaX < 0 ? "ceil" : "floor") : "round")
    	slideNumber = Math[round](this.x / (this.offset.scrollableArea / slider.find(".slide").length))
    	slideNumber += offset
    	slideNumber = Math.min(slideNumber, 0)
    	this.slideNumber = Math.max(-(slider.find(".slide").length - 1), slideNumber);

    	changePoint(this.slideNumber)
    }
    this.touchstart = function(evt) {
    	touch = evt.touches[0]

    	slider = $(".slider",this.root)
    	this.duration = 0
    	this.startTime = +new Date()
    	this.offset.w = slider.width()
    	this.offset.x = touch.pageX
    	this.offset.y = touch.pageY
    	this.offset.lastw = this.x
    	this.offset.lastSlide = -(slider.find(".slide").length-1)
    	this.offset.scrollableArea = this.offset.w * slider.find(".slide").length
    	this.setSlideNumber(0)
    	this.update()
    }
    this.touchmove = function(evt) {
    	touch = evt.touches[0]
    	this.offset.deltaX = touch.pageX - this.offset.x
    	pageX = touch.pageX
    	if (this.isScrolling == null) {
    		this.offset.isScrolling = Math.abs(this.offset.deltaX)>Math.abs(this.offset.deltaX)
    	}
    	if (this.offset.isScrolling) {
    		return ""
    	}
    	this.x = this.offset.deltaX / this.offset.resistance + this.offset.lastw
    	this.offset.resistance = this.slideNumber === 0 && this.offset.deltaX > 0 ? pageX / this.offset.w + 1.25 : (this.slideNumber === this.offset.lastSlide && this.offset.deltaX < 0 ? (this.offset.w-Math.abs(pageX)) / this.offset.w + 1.25 : 1)
    	evt.preventDefault()




    	this.update()
    }
    this.touchend = function(evt) {
    	if (this.offset.isScrolling) {
    		return ""
    	}
    	this.setSlideNumber(((+new Date()) - this.startTime < 1000 && Math.abs(this.offset.deltaX) > 15 ? (this.offset.deltaX < 0 ? -1 : 1) : 0));
    	this.x = this.slideNumber * this.offset.w
    	this.duration = 0.2

    	this.update()
    }
    this.on("mount",function(){
    	slider = $(".slider",this.root)
    	slider[0].addEventListener("touchstart", this.touchstart.bind(this))
    	slider[0].addEventListener("touchmove", this.touchmove.bind(this))
    	slider[0].addEventListener("touchend", this.touchend.bind(this))
    	opts.end && opts.end(this)
    })
  
});