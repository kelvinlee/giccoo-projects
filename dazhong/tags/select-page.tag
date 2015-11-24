
<select-page>
  <div class="box"><img src="img/box.png"/></div>
  <div class="content">
    <div class="logo"><img src="img/home-logo.png"/></div>
    <div class="menus">
      <div class="line"><img src="img/select-line.png"/></div>
      <div class="menu">
        <div each="{menu in menus}" onclick="{changeMenu(menu)}" class="menu-item {now: parent.now == menus.indexOf(menu),after: parent.now == menus.indexOf(menu)-1,before: parent.now == menus.indexOf(menu)+1}"><img src="{menu.thumb}.png"/>
          <div onclick="{openCuisine}" class="over"></div>
        </div>
      </div>
    </div>
    <div class="text">
      <p class="title"><span class="icon"><img src="img/icon-star.png"/></span><span>{info.name}</span></p>
      <p>{info.description}</p>
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
      <div onclick="{closeCuisine}" class="btn btn-1"></div>
      <div onclick="{showCuisineInfo}" class="btn btn-2"></div>
      <div onclick="{showShare}" class="btn btn-3"></div>
    </div>
  </div>
  <div show="{openInfoInfo}" class="cuisineInfoPage fadeIn animated">
    <div class="load"><img src="/libs/img/loading-normal.png"/></div>
    <div if="{openInfo}" class="context-img"><img src="{info.thumb}-2.jpg"/></div>
    <div class="btns">
      <div onclick="{closeCuisineInfo}" class="btn-new btn-4"><img src="img/icon-back.png"/></div>
      <div onclick="{hideSave}" show="{save}" class="btn-new btn-5"><img src="img/icon-save.png"/></div>
    </div>
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
    	//- console.log(parseInt(Math.random()*(self.menus.length-1)))
    	//- console.log(self.menus[parseInt(Math.random()*(self.menus.length-1))])
    	self.changeMenu(self.menus[parseInt(Math.random()*(self.menus.length-1))]).call()
    }
    changeMenu(menu) {
    	return function() {
    		if (!self.canRun) { return false }
    		self.now = self.menus.indexOf(menu)
    		self.info = menu
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
    	$(".playsound").show()
    }
    showShare() {
    	$(".wechat").show()
    }
    init() {
    	if (self.now <= 1) {
    		self.canRun = true
    		return false
    	}
    	setTimeout(function(){
    		self.now = self.now-1
    		self.info = self.menus[self.now]
    		self.update()
    		self.init()
    	},500)
    }
  </script>
</select-page>