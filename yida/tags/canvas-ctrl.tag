
<canvas-ctrl><yield></yield>
  <script>
    var self = this
    self.root.className = "canvas-ctrl"
    self.target = $(opts.parent)
    self.image = null
    self.info = null
    self.frame = {
    	x: 0,
    	y: 0,
    	w: 640,
    	h: 1138
    }
    console.log(self.target)
    var defaultOrin = []
    //- 判断几个手指
    var defaultType = null
    var logOrin = {
    	x: self.frame.x,
    	y: self.frame.y
    }
    var logSize = {
    	w: self.frame.w,
    	h: self.frame.h
    }
    setImage(image,info) {
    	self.image = image
    	self.info = info
    	console.log("image info:",self.image,info)
    }
    setDefault(x,y,w,h) {
    	self.frame.x = x
    	self.frame.y = y
    	self.frame.w = w
    	self.frame.h = h
    	logOrin = {
    		x: self.frame.x,
    		y: self.frame.y
    	}
    	logSize = {
    		w: self.frame.w,
    		h: self.frame.h
    	}
    }
    
    start(evt){
    	console.log(evt)
    	self.target = $(opts.parent)
    	touch = evt.touches
    	defaultType = touch.length
    	for (var i = 0 ; i < touch.length ; i++) {
    		defaultOrin[i] = {x: touch[i].clientX,y: touch[i].clientY}
    	}
    	console.log("start",defaultType,defaultOrin,self.frame,logSize)
    	//- console.log(self.target)
    	//- console.log(self.target[0].toDataURL("image/png"))
    }
    move(evt){
    	touch = evt.touches
    	var ctx = self.target[0].getContext("2d")
    	evt.preventDefault()
    	if (defaultType == 1) {
    		//- 移动
    		moveX = touch[0].clientX-defaultOrin[0].x
    		moveY = touch[0].clientY-defaultOrin[0].y
    		//- console.log("moving",moveX,moveY)
    		logOrin.x = self.frame.x + moveX
    		logOrin.y = self.frame.y + moveY
    		if (self.info == 6) {
    			logOrin.x = self.frame.x + moveY
    			logOrin.y = self.frame.y - moveX
    		}
    		ctx.clearRect(-10000, -10000, 50000, 50000)
    		ctx.drawImage(self.image, logOrin.x, logOrin.y, self.frame.w, self.frame.h)
    	}
    	if (defaultType == 2) {
    		//- 放大和旋转
    		console.log("scale")
    		x1 = defaultOrin[0].x 
    		y1 = defaultOrin[0].y
    		x2 = defaultOrin[1].x 
    		y2 = defaultOrin[1].y
    		lineO = Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2))
    		x1 = touch[0].clientX
    		y1 = touch[0].clientY
    		x2 = touch[1].clientX
    		y2 = touch[1].clientY
    		lineN = Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2))
    		s = (lineN-lineO)/640
    		//- console.log(s)
    		logSize.w = self.frame.w * (1+s)
    		logSize.h = self.frame.h * (1+s)
    		ctx.clearRect(-10000, -10000, 50000, 50000)
    		ctx.drawImage(self.image, self.frame.x, self.frame.y, logSize.w, logSize.h)
    		//- rotation
    	}
    }
    end(evt){
    	touch = evt.touches
    	defaultType = touch.length
    	for (var i = 0 ; i < touch.length ; i++) {
    		defaultOrin[i] = {x: touch[i].clientX,y: touch[i].clientY}
    	}
    	self.frame.x = logOrin.x
    	self.frame.y = logOrin.y
    	self.frame.w = logSize.w
    	self.frame.h = logSize.h
    	console.log("end",logSize,self.frame)
    }
    self.root.addEventListener("touchstart",self.start.bind(this))
    self.root.addEventListener("touchmove",self.move.bind(this))
    self.root.addEventListener("touchend",self.end.bind(this))
  </script>
</canvas-ctrl>