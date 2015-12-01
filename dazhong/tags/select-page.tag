
<select-page>
  <div class="box"><img src="img/box.png"/></div>
  <div class="content">
    <div class="logo"><img src="img/home-logo.png"/></div>
    <div class="menus">
      <div class="line"><img src="img/select-line.png"/></div>
      <div class="arrow">
        <div class="arrow-top"><img src="img/arrow.png"/></div>
        <div class="arrow-bottom"><img src="img/arrow.png"/></div>
      </div>
      <div class="menu {onmove: !canRun}">
        <div each="{menu in menus}" onclick="{changeMenu(menu)}" class="menu-item {now: parent.now == menus.indexOf(menu),after: parent.now == menus.indexOf(menu)-1,afterfornow: parent.now == menus.length-1 &amp;&amp; menus.indexOf(menu) == 0,before: parent.now == menus.indexOf(menu)+1, before: parent.now == 0 &amp;&amp; menus.indexOf(menu) == menus.length-1,readydown: parent.now == 1 &amp;&amp; menus.indexOf(menu) == menus.length-1, readyup: parent.now == menus.length-2 &amp;&amp; menus.indexOf(menu) == 0,readydown: parent.now == 0 &amp;&amp; menus.indexOf(menu) == menus.length-2, readyup: parent.now == menus.length-1 &amp;&amp; menus.indexOf(menu) == 1}"><img src="{menu.thumb}.png"/>
          <div onclick="{openCuisine}" class="over"></div>
        </div>
      </div>
    </div>
    <div show="{canRun}" class="text fadeIn animated">
    </div>
    <div class="btns">
      <div onclick="{openCuisine}" class="btn-info"><img src="img/button-info.png"/></div>
      <div onclick="{randomCuisine}" class="btn-random"><img src="img/button-random.png"/></div>
    </div>
  </div>
  <div show="{openInfo}" class="cuisinePage fadeIn animated">
    <div class="load"><img src="/libs/img/loading-normal.png"/></div>
    <div if="{openInfo}" class="context-img"><img src="{info.thumb}-1.jpg"/></div>
    <div class="btns"><img src="img/button-list.png"/>
      <div onclick="{showCuisineInfo}" class="btn btn-2"></div>
      <div onclick="{showShare}" class="btn btn-3"></div>
    </div>
    <div onclick="{closeCuisine}" class="btn btn-1"><img src="img/button-back.png"/></div>
  </div>
  <div show="{openInfoInfo}" class="cuisineInfoPage fadeIn animated">
    <div class="load"><img src="/libs/img/loading-normal.png"/></div>
    <div if="{openInfo}" class="context-img"><img src="{info.thumb}-2.jpg"/></div>
    <div class="btns">
      <div onclick="{hideSave}" show="{save}" class="btn-new btn-5"><img src="img/icon-save.png"/></div>
    </div>
    <div onclick="{closeCuisineInfo}" class="btn-new btn-4"><img src="img/icon-back.png"/></div>
  </div>
  <script>
    var self = this
    this.openInfo = false
    this.openInfoInfo = false
    this.share = true
    this.save = true
    this.canRun = false
    this.now = 9
    this.menus = [
    	{name:"《霍森斯那碗羊肉pasta》",thumb:"img/cuisine-1",description:"在北欧的童话里，用美食治愈乡愁"},
    	{name:"《两个饥饿的女文青》",thumb:"img/cuisine-2",description:"没挨过饿，就不算有故事的文艺青年"},
    	{name:"《花心思的吮指美味 美式香烤猪肋排》",thumb:"img/cuisine-3",description:"有一种甜甜腻腻的滋味——叫爱情"},
    	{name:"《是味道，更是儿时的记忆》",thumb:"img/cuisine-4",description:"承认吧！生命中烙印最深的DNA，是你的口味"},
    	{name:"《小龙虾盖浇饭》",thumb:"img/cuisine-5",description:"太重口味？那是你打开的方式不对"},
    	{name:"《番茄蛋的故事》",thumb:"img/cuisine-6",description:"番茄炒蛋，做给最爱的人吃才好吃"},
    	{name:"《大胃囊与小食代——茶香话梅卤汁豆干》",thumb:"img/cuisine-7",description:"亲手做一份怀念尝尝"},
    	{name:"《陌生的城市啊熟悉的角落里，独有一份属于家的味觉》",thumb:"img/cuisine-8",description:"这个火锅是用来暖家的"},
    	{name:"《掰馍》",thumb:"img/cuisine-9",description:"吃羊肉泡馍前，先得憋个大招"},
    	{name:"《Miss麻辣烫》",thumb:"img/cuisine-10",description:"是不是所有的“秀色可餐”，最后都变成了“食色性也”？"}
    ]
    this.info = this.menus[this.now]
    randomCuisine() {
    	if (!self.canRun) { return false }
    	//- console.log(parseInt(Math.random()*(self.menus.length-1)))
    	//- console.log(self.menus[parseInt(Math.random()*(self.menus.length-1))])
    	self.changeMenu(self.menus[parseInt(Math.random()*(self.menus.length-1))]).call()
    	self.openCuisine()
    }
    changeMenu(menu) {
    	return function() {
    		if (!self.canRun) { return false }
    		self.now = self.menus.indexOf(menu)
    		self.info = menu
    		$(".text",self.root).html(imgs[self.now-1])
    		self.update()
    	}
    }
    openCuisine() {
    	self.openInfo = true
    }
    closeCuisine() {
    	self.openInfo = false
    }
    showCuisineInfo () {
    	self.openInfoInfo = true
    	self.save = true
    	$(".playsound").hide()
    }
    hideSave() {
    	self.save = false
    }
    closeCuisineInfo () {
    	self.openInfoInfo = false
    	self.openInfo = false
    	$(".playsound").show()
    }
    showShare() {
    	$(".wechat").show()
    }
    init() {
    	if (self.now <= 1) {
    		self.canRun = true
    		$(".text",self.root).html(imgs[self.now-1])
    		$(".menus",self.root)[0].addEventListener("touchstart", this.touchstart.bind(this))
    		$(".menus",self.root)[0].addEventListener("touchmove", this.touchmove.bind(this))
    		$(".menus",self.root)[0].addEventListener("touchend", this.touchend.bind(this))
    		return false
    	}
    	setTimeout(function(){
    		self.now = self.now-1
    		self.info = self.menus[self.now]
    		self.init()
    		self.update()
    	},300)
    }
    var _default = {x:0, y:0, can: true}
    touchstart(evt) {
    	touch = evt.touches[0]
    	_default.y = touch.pageY
    	console.log(_default)
    }
    touchmove(evt) {
    	if (!_default.can) { return false }
    	touch = evt.touches[0]
    	var y = touch.pageY
    	var move = y - _default.y
    	evt.preventDefault()
    	if (move > 50) {
    		self.now--
    		if (self.now < 0) {self.now = self.menus.length-1}
    		console.log(self.menus[self.now])
    		self.changeMenu(self.menus[self.now]).call()
    		_default.can = false
    	}
    	if (move < -50) {
    		self.now++
    		if (self.now >= self.menus.length) {self.now = 0}
    		console.log(self.menus[self.now])
    		self.changeMenu(self.menus[self.now]).call()
    		_default.can = false
    	}
    }
    touchend(evt) {
    	_default.can = true
    }
  </script>
</select-page>