
<select-page>
  <div class="box"><img data-src="http://disk.giccoo.com/projects/dazhong/img/box.png"/></div>
  <div class="content">
    <div class="logo"><img data-src="http://disk.giccoo.com/projects/dazhong/img/home-logo.png"/></div>
    <div class="menus">
      <div class="line"><img data-src="http://disk.giccoo.com/projects/dazhong/img/select-line.png"/></div>
      <div class="arrow">
        <div class="arrow-top"><img data-src="http://disk.giccoo.com/projects/dazhong/img/arrow.png"/></div>
        <div class="arrow-bottom"><img data-src="http://disk.giccoo.com/projects/dazhong/img/arrow.png"/></div>
      </div>
      <div class="menu {onmove: !canRun}">
        <div each="{menu in menus}" onclick="{changeMenu(menu)}" class="menu-item {now: parent.now == menus.indexOf(menu),after: parent.now == menus.indexOf(menu)-1,afterfornow: parent.now == menus.length-1 &amp;&amp; menus.indexOf(menu) == 0,before: parent.now == menus.indexOf(menu)+1, before: parent.now == 0 &amp;&amp; menus.indexOf(menu) == menus.length-1,readydown: parent.now == 1 &amp;&amp; menus.indexOf(menu) == menus.length-1, readyup: parent.now == menus.length-2 &amp;&amp; menus.indexOf(menu) == 0,readydown: parent.now == 0 &amp;&amp; menus.indexOf(menu) == menus.length-2, readyup: parent.now == menus.length-1 &amp;&amp; menus.indexOf(menu) == 1}"><img data-src="{menu.thumb}.png"/>
          <div onclick="{openCuisineIn}" class="over"></div>
        </div>
      </div>
    </div>
    <div show="{canRun}" class="text fadeIn animated">
    </div>
    <div class="btns">
      <div onclick="{openCuisine}" class="btn-info"><img data-src="http://disk.giccoo.com/projects/dazhong/img/button-info.png"/></div>
      <div onclick="{randomCuisine}" class="btn-random"><img data-src="http://disk.giccoo.com/projects/dazhong/img/button-random.png"/></div>
    </div>
  </div>
  <div show="{openInfo}" class="cuisinePage fadeIn animated">
    <div class="load"><img data-src="/libs/img/loading-normal.png"/></div>
    <div if="{openInfo}" class="context-img"><img src="{info.thumb}-1.jpg"/></div>
    <div class="btns"><img data-src="http://disk.giccoo.com/projects/dazhong/img/button-list.png"/>
      <div onclick="{showCuisineInfo}" class="btn btn-2"></div>
      <div onclick="{showShare}" class="btn btn-3"></div>
    </div>
    <div onclick="{closeCuisine}" class="btn btn-1"><img data-src="http://disk.giccoo.com/projects/dazhong/img/button-back.png"/></div>
  </div>
  <div show="{openInfoInfo}" class="cuisineInfoPage fadeIn animated">
    <div class="load"><img data-src="/libs/img/loading-normal.png"/></div>
    <div if="{openInfo}" class="context-img"><img src="{info.thumb}-2.jpg"/></div>
    <div class="btns">
      <div onclick="{hideSave}" show="{save}" class="btn-new btn-5"><img data-src="http://disk.giccoo.com/projects/dazhong/img/icon-save.png"/></div>
    </div>
    <div onclick="{closeCuisineInfo}" class="btn-new btn-4"><img data-src="http://disk.giccoo.com/projects/dazhong/img/icon-back.png"/></div>
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
    	{name:"《霍森斯那碗羊肉pasta》",thumb:"http://disk.giccoo.com/projects/dazhong/img/cuisine-1",description:"在北欧的童话里，用美食治愈乡愁"},
    	{name:"《两个饥饿的女文青》",thumb:"http://disk.giccoo.com/projects/dazhong/img/cuisine-2",description:"没挨过饿，就不算有故事的文艺青年"},
    	{name:"《花心思的吮指美味 美式香烤猪肋排》",thumb:"http://disk.giccoo.com/projects/dazhong/img/cuisine-3",description:"有一种甜甜腻腻的滋味——叫爱情"},
    	{name:"《是味道，更是儿时的记忆》",thumb:"http://disk.giccoo.com/projects/dazhong/img/cuisine-4",description:"承认吧！生命中烙印最深的DNA，是你的口味"},
    	{name:"《小龙虾盖浇饭》",thumb:"http://disk.giccoo.com/projects/dazhong/img/cuisine-5",description:"太重口味？那是你打开的方式不对"},
    	{name:"《番茄蛋的故事》",thumb:"http://disk.giccoo.com/projects/dazhong/img/cuisine-6",description:"番茄炒蛋，做给最爱的人吃才好吃"},
    	{name:"《大胃囊与小食代——茶香话梅卤汁豆干》",thumb:"http://disk.giccoo.com/projects/dazhong/img/cuisine-7",description:"亲手做一份怀念尝尝"},
    	{name:"《陌生的城市啊熟悉的角落里，独有一份属于家的味觉》",thumb:"http://disk.giccoo.com/projects/dazhong/img/cuisine-8",description:"这个火锅是用来暖家的"},
    	{name:"《掰馍》",thumb:"http://disk.giccoo.com/projects/dazhong/img/cuisine-9",description:"吃羊肉泡馍前，先得憋个大招"},
    	{name:"《Miss麻辣烫》",thumb:"http://disk.giccoo.com/projects/dazhong/img/cuisine-10",description:"是不是所有的“秀色可餐”，最后都变成了“食色性也”？"}
    ]
    this.info = this.menus[this.now]
    randomCuisine() {
    	if (!self.canRun) { return false }
    	//- console.log(parseInt(Math.random()*(self.menus.length-1)))
    	//- console.log(self.menus[parseInt(Math.random()*(self.menus.length-1))])
    	self.changeMenu(self.menus[parseInt(Math.random()*(self.menus.length-1))]).call()
    	self.openCuisine()
    	ClickEvent('BUT_3.0_Random')
    	console.log('BUT_3.0_Random')
    }
    changeMenu(menu) {
    	return function() {
    		if (!self.canRun) { return false }
    		self.now = self.menus.indexOf(menu)
    		self.info = menu
    		$(".text",self.root).html(imgs[self.now])
    		self.update()
    	}
    }
    openCuisineIn() {
    	self.openInfo = true
    	ClickEvent('P4.'+(self.now+1),1)
    	ClickEvent('BUT_3.0_Dish'+(self.now+1))
    	console.log('BUT_3.0_Dish'+(self.now+1))
    }
    openCuisine() {
    	self.openInfo = true
    	ClickEvent('P4.'+(self.now+1),1)
    	ClickEvent('BUT_3.0_Details'+(self.now+1))
    	console.log('BUT_3.0_Details'+(self.now+1))
    }
    closeCuisine() {
    	self.openInfo = false
    	ClickEvent('BUT_4.0_Back'+(self.now+1))
    	console.log('BUT_4.0_Back'+(self.now+1))
    }
    showCuisineInfo () {
    	self.openInfoInfo = true
    	self.save = true
    	$(".playsound").hide()
    	ClickEvent('P5.'+(self.now+1),1)
    	ClickEvent('BUT_4.0_Check'+(self.now+1))
    	console.log('BUT_4.0_Check'+(self.now+1))
    }
    hideSave() {
    	self.save = false
    }
    closeCuisineInfo () {
    	self.openInfoInfo = false
    	self.openInfo = false
    	$(".playsound").show()
    	ClickEvent('BUT_5.0_Back'+(self.now+1))
    	console.log('BUT_5.0_Back'+(self.now+1))
    }
    showShare() {
    	$(".wechat").show()
    	ClickEvent('BUT_4.0_Share'+(self.now+1))
    	ClickEvent('P6.0',1)
    	console.log('BUT_4.0_Share'+(self.now+1))
    	console.log('P6.0')
    }
    init() {
    	if (self.now <= 1) {
    		self.canRun = true
    		$(".text",self.root).html(imgs[self.now])
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