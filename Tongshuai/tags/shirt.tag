
<shirt>
  <div class="t-shirt">
    <div class="clear"><img data-layzr="http://disk.giccoo.com/projects/Tongshuai/img/t-shirt.png"/></div>
    <div class="icons">
      <div if="{icon}" class="icon1 {icon}"><img if="{icon}" src="/Tongshuai/img/{icon}.png"/></div>
      <div if="{text}" class="icon2 {text}"><img if="{text}" src="/Tongshuai/img/{text}-dark.png"/></div>
      <div if="{stamp}" class="icon3 {stamp}"><img if="{stamp}" src="/Tongshuai/img/{stamp}.png"/></div>
      <div class="kv"><img data-layzr="http://disk.giccoo.com/projects/Tongshuai/img/kv-2.png"/></div>
      <div if="{icon &amp;&amp; text &amp;&amp; stamp}" onclick="{finished}" class="btn submit"><img src="http://disk.giccoo.com/projects/Tongshuai/img/finished.png"/></div>
      <div if="{icon || text || stamp}" onclick="{clear}" class="btn reset"><img src="http://disk.giccoo.com/projects/Tongshuai/img/reset.png"/></div><a href="#/homepage2/" class="btn back"><img data-layzr="http://disk.giccoo.com/projects/Tongshuai/img/back.png"/></a>
    </div>
  </div>
  <div class="ctrl-box {ctrlbox}">
    <div class="box-content">
      <slider id="slider-icon" callback="{iconCheck}" class="n1 l">
        <div each="{parent.icons}" class="slide">
          <div each="{a in icons}" onclick="{parent.parent.parent.selectIcon(a)}" class="item"><img data-layzr="http://disk.giccoo.com/projects/Tongshuai/img/{a}.png"/></div>
        </div>
      </slider>
      <slider id="slider-text" callback="{textCheck}" class="n2 l">
        <div each="{parent.texts}" class="slide">
          <div each="{t in icons}" onclick="{parent.parent.parent.selectText(t)}" class="item"><img data-layzr="http://disk.giccoo.com/projects/Tongshuai/img/{t}.png"/></div>
        </div>
      </slider>
      <slider id="slider-stamp" callback="{stampCheck}" class="n3 l">
        <div each="{parent.stamps}" class="slide">
          <div each="{p in icons}" onclick="{parent.parent.parent.selectStamp(p)}" class="item"><img data-layzr="http://disk.giccoo.com/projects/Tongshuai/img/{p}.png"/></div>
        </div>
      </slider>
    </div>
  </div>
  <script>
    var self = this
    this.ctrlbox = "up"
    this.icons = [
    	{icons:["step-1","icon-1","icon-2"]},
    	{icons:["icon-3","icon-7","icon-4"]},
    	{icons:["icon-5","icon-6"]}
    ]
    this.texts = [
    	{icons:["step-2","text-4","text-5"]},
    	{icons:["text-6","text-7","text-1"]},
    	{icons:["text-2","text-3"]}
    ]
    this.stamps = [
    	{icons:["step-3","stamp-1","stamp-2"]},
    	{icons:["stamp-3"]}
    ]
    this.icon = null
    this.text = null
    this.stamp = null
    clear() {
    	this.icon = null
    	this.text = null
    	this.stamp = null
    	this.update()
    }
    selectIcon(icon) {
    	//- alert("aa")
    	return function() {
    		if (icon == "step-1"){return false}
    		self.icon = icon
    		self.update()
    	}
    }
    selectText(text) {
    	//- alert("aa")
    	return function() {
    		if (text == "step-2"){return false}
    		self.text = text
    		self.update()
    	}
    }
    selectStamp(stamp) {
    	return function() {
    		if (stamp == "step-3"){return false}
    		self.stamp = stamp
    		self.update()
    	}
    }
    iconCheck(i) {
    	//- console.log("a",i)
    	var Max = this.icons.length - 1
    	var ep = $("#slider-icon",this.root)
    	ep.removeClass("l r")
    	if (Math.abs(i) == 0) {
    		return ep.addClass("l")
    	}
    	if (Math.abs(i) == Max) {
    		return ep.addClass("r")
    	}
    	ep.addClass("l r")
    }
    textCheck(i) {
    	var Max = this.icons.length - 1
    	var ep = $("#slider-text",this.root)
    	ep.removeClass("l r")
    	if (Math.abs(i) == 0) {
    		return ep.addClass("l")
    	}
    	if (Math.abs(i) == Max) {
    		return ep.addClass("r")
    	}
    	ep.addClass("l r")
    }
    stampCheck(i) {
    	var Max = this.icons.length - 1
    	var ep = $("#slider-stamp",this.root)
    	ep.removeClass("l r")
    	if (Math.abs(i) == 0) {
    		return ep.addClass("l")
    	}
    	if (Math.abs(i) == Max) {
    		return ep.addClass("r")
    	}
    	ep.addClass("l r")
    }
    this.offset = {}
    this.touchstart = function(evt) {
    	var touch = evt.touches[0]
    	this.offset.y = touch.pageY
    	this.offset.move = true
    	//- console.log(this.offset)
    }
    this.touchmove = function(evt) {
    	var touch = evt.touches[0]
    	this.offset.deltaY = touch.pageY - this.offset.y
    	//- console.log(this.offset)
    	if (!this.offset.move) {return ''}
    	if (this.offset.deltaY > 10 || this.offset.deltaY < -10) {
    		evt.preventDefault()
    	}
    	if (this.offset.deltaY > 30) {
    		this.ctrlbox = "up"
    		this.offset.move = false
    		this.update()
    	}
    	if (this.offset.deltaY < -30) {
    		this.ctrlbox = "down"
    		this.offset.move = false
    		this.update()
    	}
    }
    this.touchend = function(evt) {
    
    }
    this.on("mount",function(){
    	var ep = $(".ctrl-box",this.root)[0]
    	ep.addEventListener("touchstart", this.touchstart.bind(this))
    	ep.addEventListener("touchmove", this.touchmove.bind(this))
    	ep.addEventListener("touchend", this.touchend.bind(this))
    })
    
    finished() {
    	wonShare = this.icon+","+this.text+","+this.stamp
    	riot.route("/finishedPage/"+wonShare)
    }
  </script>
</shirt>