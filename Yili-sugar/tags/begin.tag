
<begin>
  <div class="logo"><img src="/Yili-sugar/img/logo.png"/></div>
  <div onclick="{nextPage}" class="shakeNote fadeInDown animated delay-5"><img data-layzr="/Yili-sugar/img/rotate.png"/>
    <div class="hand"><img data-layzr="/Yili-sugar/img/rotate-hand.png"/></div>
  </div>
  <div class="cp">
    <div class="cp-2 fadeInLeft animated delay-7"><img data-layzr="/Yili-sugar/img/cp-1-2.png"/></div>
    <div class="cp-3 fadeInRight animated delay-7"><img data-layzr="/Yili-sugar/img/cp-1-3.png"/></div>
    <div class="bottle fadeInDown animated delay-9"><img data-layzr="/Yili-sugar/img/bottle.png"/></div>
    <div class="cp-1 fadeInDown animated delay-11"><img data-layzr="/Yili-sugar/img/cp-1-1.png"/></div>
  </div>
  <script>
    var self = this
    var SHAKE_THRESHOLD = 800
    var last_update = 0
    var acc = {x: 0,y: 0,z: 0}
    this.runing = false
    nextPage() {
    	if (self.runing) {return false}
    	self.runing = true
    	$(".page.begin").addClass("fadeOut animated")
    	setTimeout(function(){
    		$(".page.begin").removeClass("fadeOut animated").addClass("hide")
    		self.runing = false
    		self.update()
    	},550)
    	$(".page.content").removeClass("hide")
    	window.removeEventListener('devicemotion',self.deviceMotionHandler, false)
    }
    this.deviceMotionHandler = function(eventData) {
    	if (self.runing) {return false}
    	var acceleration, curTime, diffTime, speed;
    	acceleration = eventData.accelerationIncludingGravity;
    	curTime = new Date().getTime();
    	if ((curTime - last_update) > 100) {
    		diffTime = curTime - last_update;
    		last_update = curTime;
    		speed = Math.abs(acceleration.x + acceleration.y + acceleration.z - acc.x - acc.y - acc.z) / diffTime * 10000;
    		if (speed > SHAKE_THRESHOLD) {
    			self.nextPage()
    		}
    		acc.x = acceleration.x;
    		acc.y = acceleration.y;
    		return acc.z = acceleration.z;
    	}
    }
    this.on("mount",function(){
    	var over = function(){
    		window.addEventListener('devicemotion',self.deviceMotionHandler, false)
    		$(".shakeNote",self.root)[0].removeEventListener(ANIMATION_END_NAME,over)
    	}
    	$(".shakeNote",self.root)[0].addEventListener(ANIMATION_END_NAME,over)
    })
  </script>
</begin>