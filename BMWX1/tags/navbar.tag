
<navbar>
  <div class="menu-1 {hide:menu}">
    <div class="logo"><img src="img/logo.png"/></div>
    <div onclick="{showMenu}" class="btn"><img src="img/navbar-btn.png"/></div>
  </div>
  <div class="menu-2 {open:menu}">
    <ul>
      <li><a onclick="{jump}" href="/">首页</a></li>
      <li><a onclick="{jump}" href="/activity">活动介绍</a></li>
      <li><a onclick="{jump}" href="/register">开启宴遇之旅 & 轻松惠享自由</a></li>
      <li><a onclick="{jump}" href="/food">时尚宴遇美食</a></li>
      <li><a onclick="{jump}" href="/bmwx1">遇见BMW X1</a></li>
    </ul>
    <div onclick="{hideMenu}" class="zw"></div>
  </div>
  <script>
    //- $(this.root).addClass("")
    this.root.className = "navbar"
    this.menu = false
    hideMenu() {
    	this.menu = false
    }
    showMenu() {
    	this.menu = true
    }
    jump(evt) {
    	//- console.log()
    	this.hideMenu()
    	riot.route(evt.target.getAttribute("href"))
    	return false
    }
  </script>
</navbar>