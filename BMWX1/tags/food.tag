
<food>
  <div class="foods">
    <div class="cp">
      <div class="cp-1 fadeInUp animated delay-9"><img data-layzr="/BMWX1/img/cp-4-1.png"/></div>
      <div class="cp-2 fadeInUp animated delay-7">
        <div onclick="{show(0)}" class="p1"></div>
        <div onclick="{show(1)}" class="p2"></div>
        <div onclick="{show(2)}" class="p3"></div><img data-layzr="/BMWX1/img/cp-4-2.png"/>
      </div>
    </div>
  </div>
  <div show="{showPage}" class="food-list fadeInUp animated">
    <div id="slider-product" onclick="{close}">
      <slider list="/BMWX1/img/food-1.jpg,/BMWX1/img/food-2.jpg,/BMWX1/img/food-3.jpg"></slider>
    </div>
  </div>
  <script>
    var self = this
    this.myslider = null
    this.showPage = false
    show(e) {
    	return function() {
    		console.log(self.tags.slider)
    		setTimeout(function(){
    		self.tags && self.tags.slider.setNumber(e)
    		},10)
    		self.showPage = true
    	}
    }
    close() {
    	self.showPage = false
    }
    this.on("mount",function(){
    	//- riot.mount("div#slider-product","slider",{list:self.list,callback:function(n){
    	//- 	self.now = Math.abs(n)+1
    	//- 	self.update()
    	//- }.bind(self),end:function(slider){
    	//- 	console.log("end?",slider)
    	//- 	self.myslider = slider
    	//- }})
    	//- console.log(this.myslider)
    })
  </script>
</food>