
<slider>
  <div style="-webkit-transition-duration: {duration}s;transition-duration: {duration}s; -webkit-transform: translate3d({x}px,0,0); transform: translate3d({x}px,0,0);" class="slider"><yield></yield></div>
  <script>
    var self = this
    //- this.list = opts.list.split(",")
    this.root.className += " slider-box"
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
    	opts.callback && opts.callback(this.slideNumber)
    }
    this.touchstart = function(evt) {
    	var touch = evt.touches[0]
    	//- console.log(touch)
    	slider = $(".slider",this.root)
    	this.duration = 0
    	this.offset.deltaX = 0
    	this.startTime = +new Date()
    	this.offset.w = slider.width()
    	this.offset.x = touch.pageX
    	this.offset.y = touch.pageY
    	this.offset.lastw = this.x
    	this.offset.lastSlide = -(slider.find(".slide").length-1)
    	this.offset.scrollableArea = this.offset.w * slider.find(".slide").length
    	//- this.setSlideNumber(0)
    	//- console.log(touch.pageX,this.offset.x)
    	this.update()
    }
    this.touchmove = function(evt) {
    	var touch = evt.touches[0]
    	this.offset.deltaX = touch.pageX - this.offset.x
    	//- console.log(touch.pageX,this.offset.x)
    	pageX = touch.pageX
    	if (this.isScrolling == null) {
    		this.offset.isScrolling = Math.abs(this.offset.deltaX)>Math.abs(this.offset.deltaX)
    	}
    	if (this.offset.isScrolling) {
    		return ""
    	}
    	this.x = this.offset.deltaX / this.offset.resistance + this.offset.lastw
    	this.offset.resistance = this.slideNumber === 0 && this.offset.deltaX > 0 ? pageX / this.offset.w + 1.25 : (this.slideNumber === this.offset.lastSlide && this.offset.deltaX < 0 ? (this.offset.w-Math.abs(pageX)) / this.offset.w + 1.25 : 1)
    	if (this.offset.deltaX > 10 || this.offset.deltaX < -10){
    		evt.preventDefault()
    	}
    	//- if (this.x < -(this.offset.w * (Math.abs(this.lastSlide) + 0.4))) {
    	//- 	this.x = -(this.offset.w * (Math.abs(this.lastSlide) + 0.4));
    	//- }
    	
    	this.update()
    }
    this.touchend = function(evt) {
    	if (this.offset.isScrolling || this.offset.deltaX == 0) {
    		return ""
    	}
    	//- var touch = evt.touches[0]
    	//- console.log(this.offset.deltaX,this.offset.x,evt)
    	this.setSlideNumber(((+new Date()) - this.startTime < 1000 && Math.abs(this.offset.deltaX) > 15 ? (this.offset.deltaX < 0 ? -1 : 1) : 0));
    	this.x = this.slideNumber * this.offset.w
    	this.duration = 0.2
    	//- console.log(this.x,this.slideNumber)
    	this.update()
    }
    this.on("mount",function(){
    	slider = $(".slider",this.root)
    	slider[0].addEventListener("touchstart", this.touchstart.bind(this))
    	slider[0].addEventListener("touchmove", this.touchmove.bind(this))
    	slider[0].addEventListener("touchend", this.touchend.bind(this))
    	opts.end && opts.end(this)
    })
  </script>
</slider>