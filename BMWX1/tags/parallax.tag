
<parallax><yield></yield>
  <script>
    // 当前页面
    var _store = {can: true}
    var self = this
    Store.parallax = this
    this.nowPage = null
    begin = true
    // 初始化值
    this.defaultPoint = {
    	x: 0,
    	y: 0,
    	returnTranN: true,
    	returnTranO: true
    }
    // touch 开始
    start(evt){
    	//- if ($(".page",this.root).length < 2 ) { _store.can = true }
    	if (! _store.can) {return false}
    	//- console.log("start")
    	touch = evt.touches[0]
    	this.defaultPoint.x = touch.pageX
    	this.defaultPoint.y = touch.pageY
    	//- evt.preventDefault()
    	return true
    }
    // touch move
    move(evt) {
    	if (! _store.can) {return false}
    	touch = evt.touches[0]
    	gone = this.defaultPoint.y - touch.pageY
    	//- if (gone > 5 || gone < -5) {
    		evt.preventDefault()
    	//- }
    	if (gone > 50) {
    		console.log(gone)
    		_store.can = false
    		this.passpage.bind(this)("up")
    	}
    	if (gone < -50) {
    		console.log(gone)
    		_store.can = false
    		this.passpage.bind(this)("down")
    	}
    	return true
    }
    // touch end
    end(e) {
    	
    }
    var allClass = "riot-up riot-up-active riot-up-leave riot-down riot-down-active riot-down-leave riot-left riot-left-active  riot-left-leave riot-right riot-right-active  riot-right-leave"
    //- 传递页面
    this.passpage = function(direction) {
    	var select = $(this.nowPage).attr(direction)
    	console.log(direction,select,typeof select)
    	if (select) {
    		riot.route("/"+select)
    	}else{
    		_store.can = true
    	}
    }
    this.animate = function(select) {
    	var oldpage = self.nowPage
    	self.oldpage = oldpage
    	self.nowPage = $(".page."+select,self.root)[0]
    	if (oldpage == self.nowPage) {return false}
    	self.nowPage
    	var newpage = self.nowPage
    	var direction = "up"
    	//- console.log($(oldpage).index(),$(newpage).index())
    	if ($(oldpage).index() > $(newpage).index()) {direction = "down"}
    	//- $(self.root).append("<div class='page riot-"+direction+"' id='"+select+"-page'>"+eval(select+".innerHTML")+"</div>")
    	oldpage.addEventListener(TRANSITION_END_NAME,self.oldpageFinished)
    	self.defaultPoint.returnTranN = true
    	newpage.addEventListener(TRANSITION_END_NAME,self.newpageFinished)
    	self.defaultPoint.returnTranO = true
    	$(newpage).hide().removeClass(allClass).addClass("riot-"+direction)
    	$(newpage).show()
    	$(oldpage).removeClass(allClass)
    	setTimeout(function(){
    		$(oldpage).addClass("riot-"+direction+"-leave")
    		$(newpage).removeClass(allClass).addClass("riot-"+direction+"-active")
    	},100)
    	self.update()
    }
    this.newpageFinished = function(evt) {
    	//- console.log("newpage",evt.target)
    	if (self.defaultPoint.returnTranN) {
    		self.defaultPoint.returnTranN = false
    	}
    	self.newpage && self.newpage.removeEventListener(TRANSITION_END_NAME,self.newpageFinished)
    	self.newpage && self.newpage.removeEventListener(TRANSITION_END_NAME,self.oldpageFinished)
    	$(self.newpage).removeClass(allClass)
    	_store.can = true
    }
    this.oldpageFinished = function(evt) {
    	//- console.log("oldpage",evt.target)
    	if (self.defaultPoint.returnTranO) {
    		//- console.log("old page finished",evt.target)
    		self.defaultPoint.returnTranO = false
    		$(self.oldpage).hide()
    	}
    	self.oldpage && self.oldpage.removeEventListener(TRANSITION_END_NAME,self.newpageFinished)
    	self.oldpage && self.oldpage.removeEventListener(TRANSITION_END_NAME,self.oldpageFinished)
    	$(self.oldpage).removeClass(allClass)
    	_store.can = true
    }
    //- 初始化
    //- this.init = function() {
    	
    //- }
    this.on("mount",function(){
    	this.nowPage = $(".page",this.root)[0]
    	Store.nowPage = this.nowPage
    })
    
    this.root.addEventListener("touchstart",this.start.bind(this))
    this.root.addEventListener("touchmove",this.move.bind(this))
    this.root.addEventListener("touchend",this.end.bind(this))
    //- $(this.root).addClass("parallax")
    //- setTimeout(this.init.bind(this),0)
  </script>
</parallax>