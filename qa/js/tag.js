
riot.tag2('note', '<div class="note-box"> <div class="note-content {animated:true,fadeInUp:!close,fadeOutUp:close}"> <div class="note-text"> <div class="icon-form"><img src="http://disk.giccoo.com/projects/showman/img/icon-alert-note.png"></div> {title} </div> </div> </div>', '', '', function(opts) {
    var self = this
    this.title = opts.title
    this.close = false
    this.time = opts.time?parseInt(opts.time):3000
    $(this.root).addClass("note")

    this.on("mount",function(){
    	setTimeout(function(){
    		self.unmount()
    	},self.time)
    	setTimeout(function(){
    		self.close = true
    		self.update()
    	},self.time-500)
    })
}, '{ }');

riot.tag2('pages', '<div class="page info-page on"> <div class="slogan"><img data-src="http://disk.giccoo.com/projects/qa/img/slogan.png"></div> <div class="text"> <h3>主办单位：</h3> <p>中国保监会保险消费者权益保护局</p> <h3>承办单位：</h3> <p>中国保险报业股份有限公司</p> <h3 if="{!ad}">协办单位：</h3> <p if="{!ad}"><span class="companylogo"><img data-src="http://disk.giccoo.com/projects/qa/img/company-2.png"></span><span class="companylogo"><img data-src="http://disk.giccoo.com/projects/qa/img/company-1.png"></span></p> </div> <div class="btn-join"><img data-src="http://disk.giccoo.com/projects/qa/img/btn-start.png"></div> </div> <div class="page select-page"> <div class="slogan"><img data-src="http://disk.giccoo.com/projects/qa/img/slogan.png"></div> <div class="text"> <h3>活动规则</h3> <p>第一步：选择分组。</p> <p>如果您是保险消费者，请选“保险消费者组”；如果您是保险从业者，请选“保险从业者组”</p> <p>第二步：参与答题。</p> <p>您将看到10道单项选择题，答完上一题才能进入下一题。</p> <h3>奖项设置</h3> <p>1.最佳团队奖：平均成绩前5名的公司团队。</p> <p>2.最佳组织奖：参与人数前5名的公司团队。</p> <p>3.最佳个人奖（针对消费者）：一等奖5名；二等奖10名；三等奖50名。优秀奖200名。</p> </div> <div class="btn-join"><img data-src="http://disk.giccoo.com/projects/qa/img/btn-go.png"></div> </div> <div class="page note-page"> <div class="slogan"><img data-src="http://disk.giccoo.com/projects/qa/img/slogan.png"></div> <div class="text"> <h3>请选择您的身份：</h3> </div> <div class="btns"> <div onclick="{selectPage1}" class="btn btn-company {on: selectCOMPANY}"><img data-src="http://disk.giccoo.com/projects/qa/img/btn-company.png"> <div class="p"> <div class="off"><img data-src="http://disk.giccoo.com/projects/qa/img/p-1-off.png"></div><img data-src="http://disk.giccoo.com/projects/qa/img/p-1.png"> </div> </div> <div onclick="{selectPage2}" class="btn btn-personal {on: selectPERSONAL}"><img data-src="http://disk.giccoo.com/projects/qa/img/btn-personal.png"> <div class="p p-2"> <div class="off"><img data-src="http://disk.giccoo.com/projects/qa/img/p-2-off.png"></div><img data-src="http://disk.giccoo.com/projects/qa/img/p-2.png"> </div> </div> </div> <div onclick="{GoNext}" class="btn-join"><img data-src="http://disk.giccoo.com/projects/qa/img/btn-begin.png"></div> </div> <div class="page finished-page"> <div class="content"> <div class="bg fadeIn animated"><img src="http://disk.giccoo.com/projects/qa/img/over-bg.png"></div> <div class="over"><img src="http://disk.giccoo.com/projects/qa/img/over-1.png"></div> <h2>恭喜你!</h2> <p>保险知识竞赛正确率</p> <p>超过了 <span id="nums">0</span>% 的网友</p> <p>获奖结果于3月22日公布，敬请关注！</p> <div onclick="showShare()" class="btn-share"><img src="http://disk.giccoo.com/projects/qa/img/btn-share.png"></div><a if="{!ad}" href="{jplink}" class="btn-jiang"><img src="http://disk.giccoo.com/projects/qa/img/btn-jp.png"></a> <div class="qrcode"><img src="http://disk.giccoo.com/projects/qa/img/qrcode-2.jpg"></div> <p>晓保形象由中国保监会授权使用</p> </div> <div onclick="hideShare()" class="share-box fadeIn animated"><img src="http://disk.giccoo.com/projects/qa/img/share-note.png"></div> </div> <div class="pop focus-page fadeIn animated"> <div class="box"> <div class="qcode"><img data-src="{qrcode}"></div> <div class="note-text"> <p>请使用微信打开此页面.</p> <p>长按二维码图片进行关注.</p> <p>请先关注我们的微信公众账号,然后参与答题.</p> </div> <div onclick="hideFocus()" class="close"><img data-src="http://disk.giccoo.com/projects/qa/img/icon-close.png"></div> </div> </div>', '', '', function(opts) {
    var self = this
    $(this.root).addClass("pages")
    this.qrcode = QRCODE
    this.ad = NOAD
    this.jplink = _jplink
    this.selectCOMPANY = false
    this.selectPERSONAL = false
    this.GoNext = function() {
    	if (subscribe == 0) {return showFocus()}

    	if (this.selectCOMPANY) {
    		$(".pop.select-company").addClass("on")
    	}else if (this.selectPERSONAL) {
    		$(".page.note-page").removeClass("on")
    		$(".page.question-page").addClass("on")
    	}else{
    		SendNote("请选择从业组,或消费组")
    	}
    }.bind(this)
    this.selectPage1 = function() {
    	this.selectCOMPANY = true
    	this.selectPERSONAL = false
    }.bind(this)
    this.selectPage2 = function() {
    	this.selectCOMPANY = false
    	this.selectPERSONAL = true
    }.bind(this)
    this.on("mount",function(){
    	loadStart()
    })
}, '{ }');

riot.tag2('qa', '<div class="question"><img src="http://disk.giccoo.com/projects/qa/img/question.png"> <div class="icon"><img src="http://disk.giccoo.com/projects/qa/img/icon-child.png"></div> <div class="num">{question.id}</div> <div class="count"><span class="num">{question.id}</span>/{questions.length}</div> <div class="text {question.size}">{question.question}</div> </div> <div class="answers"> <ul> <li each="{item in question.answers}" onclick="{selectAnswer(item)}"><span class="check"><img src="http://disk.giccoo.com/projects/qa/img/check.png"></span>{item}</li> </ul> </div> <div class="btns"> <div if="{now != questions.length-1}" onclick="{nextQuestion}" class="next"><img src="http://disk.giccoo.com/projects/qa/img/btn-next.png"></div> <div if="{now == questions.length-1}" onclick="{restart}" class="restart"><img src="http://disk.giccoo.com/projects/qa/img/btn-restart.png"></div> <div if="{now == questions.length-1}" onclick="{done}" class="done"><img src="http://disk.giccoo.com/projects/qa/img/btn-done.png"></div> </div><a if="{!ad}" href="{question.link}" class="banner"><img riot-src="{question.banner}"></a>', '', '', function(opts) {
    var self = this
    this.ad = NOAD
    _QA = this
    if (company) {
    	this.questions = _QUESTION_COMPANY
    }else{
    	this.questions = _QUESTION
    }
    this.now = 0
    this.question = this.questions[this.now]
    this.selected = -1
    this.answer = []
    this.changeCompany = function() {
    	console.log(company)
    	if (company) {
    		this.questions = _QUESTION_COMPANY
    	}else{
    		this.questions = _QUESTION
    	}
    	this.question = this.questions[this.now]
    	this.update()
    }.bind(this)
    this.selectAnswer = function(item) {

    	return function() {

    		var n = self.question.answers.indexOf(item)
    		self.selected = n
    		$(".answers li",self.root).removeClass("on")
    		$(".answers li",self.root).eq(n).addClass("on")
    	}
    }.bind(this)

    this.nextQuestion = function() {
    	if (self.selected < 0) {
    		return SendNote("请选择本题答案")
    	}
    	this.answer.push(self.selected+1)
    	self.selected = -1
    	self.now++

    	self.question = self.questions[self.now]
    	self.update()
    	$(".answers li",self.root).removeClass("on")
    }.bind(this)

    this.restart = function() {
    	self.selected = -1
    	self.now = 0
    	self.answer = []
    	self.question = self.questions[self.now]
    	self.update()
    	$(".answers li",self.root).removeClass("on")
    }.bind(this)

    this.done = function() {
    	if (confirm("提交后不能修改答案,确定要提交吗?")) {

    		if (this.answer.length < 10) {
    			this.answer.push(self.selected+1)
    		}
    		POST(self.answer)
    	}
    }.bind(this)
}, '{ }');

riot.tag2('select-company', '<div class="content"> <div class="form-grounp"> <label for="province">分类:</label> <div class="select"><span>{provinceName}</span> <select id="province" name="province" onchange="{changeProvince}"> <option each="{name in province}" value="{name}">{name}</option> </select> </div> </div> <div class="form-grounp"> <label for="city">公司名称:</label> <div class="select"><span>{cityName}</span> <select id="city" name="city" onchange="{changeCity}"> <option each="{name in city}" value="{name}">{name}</option> </select> </div> </div> <div class="form-grounp"> <label for="province">搜索:</label> <input type="search" name="search" onchange="{searchChange}"> </div> <div class="form-grounp"> <div class="btns"> <div onclick="{submit}" class="btn submit">开始答题</div> <div onclick="{clear}" class="btn clear">清空</div> <div onclick="{close}" class="btn close">关闭</div> </div> </div> </div>', '', '', function(opts) {
    var self = this

    this.cityData = _citys
    var province = []
    for (name in this.cityData) {
    	province.push(name)
    }
    var city = this.cityData[province[0]]

    this.province = province
    this.city = city

    this.provinceName = this.province[0]
    this.cityName = this.city[0]

    this.firstUpdate = true
    this.on("update",function(){
    	if (this.firstUpdate) {return this.firstUpdate = false}
    	this.provinceName = $("[name=province]",this.root).val()
    	this.cityName = $("[name=city]",this.root).val()

    })
    this.changeCity = function(evt) {
    	var newName = $("[name=province]",self.root).val()
    	var newCity = $("[name=city]",this.root).val()

    	self.update()
    }.bind(this)
    this.changeProvince = function(evt) {
    	var newName = $("[name=province]",self.root).val()

    	self.city = self.cityData[newName]

    	$("[name=search]",this.root).val("")
    	self.update()
    }.bind(this)
    this.searchChange = function(evt) {

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
    }.bind(this)

    this.clear = function() {
    	$("[name=search]",this.root).val("")
    	$("[name=province] option",self.root).not(function(){ return console.log(this.selected=false) })
    	this.province = province
    	this.city = city
    	this.provinceName = this.province[0]
    	this.cityName = this.city[0]
    	this.update()
    }.bind(this)
    this.submit = function() {
    	if (self.cityName == "未找到" || self.cityName == "") {
    		SendNote("请选择公司后进行答题")
    		return false
    	}
    	CompanyPage(self.cityName)
    }.bind(this)

    this.close = function() {
    	$(this.root).removeClass("on")
    }.bind(this)
}, '{ }');

riot.tag2('slider', '<div riot-style="-webkit-transition-duration: {duration}s;transition-duration: {duration}s; -webkit-transform: translate3d({x}px,0,0); transform: translate3d({x}px,0,0);" class="slider"> <div each="{bgimg in list}" class="slide"> <div class="bg"><img riot-src="{bgimg}"></div> </div> </div>', '', '', function(opts) {
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
    if (opts.myid) {
    	eval(opts.myid+" = this;")
    }
    this.setNumber = function(i) {
    	self.duration = 0.2
    	self.x = -($(".slider",self.root).width() * i)
    	self.update()
    }
    this.setSlideNumber = function(offset) {
    	round = (offset ? (this.offset.deltaX < 0 ? "ceil" : "floor") : "round")
    	slideNumber = Math[round](this.x / (this.offset.scrollableArea / slider.find(".slide").length))
    	slideNumber += offset
    	slideNumber = Math.min(slideNumber, 0)
    	this.slideNumber = Math.max(-(slider.find(".slide").length - 1), slideNumber);
    	opts.callback && eval(opts.callback+"("+this.slideNumber+")")

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
    	this.root.addEventListener("touchstart", this.touchstart.bind(this))
    	this.root.addEventListener("touchmove", this.touchmove.bind(this))
    	this.root.addEventListener("touchend", this.touchend.bind(this))
    	opts.end && opts.end(this)
    })
}, '{ }');