
<build>
  <div show="{buildingPage}" class="building">
    <div onclick="{showNote}" class="active-info fadeInDown animated delay-5"><img data-layzr="http://disk.giccoo.com/projects/yida/img/active-info.png"/>
    </div>
    <div id="bgimage" class="canvas">
    </div>
    <div class="texts">
      <div class="text-1 fadeInRight animated delay-6"><img data-layzr="http://disk.giccoo.com/projects/yida/img/build-text-1.png"/>
      </div>
      <div class="build-text fadeInRight animated delay-7">
        <input id="message" type="text" name="message" placeholder="例如: 重口味"/>
        <div class="light">
          <div class="flash">
            <div class="build-text-box"></div>
          </div>
        </div>
      </div>
      <div class="text-2 fadeInRight animated delay-8"><img data-layzr="http://disk.giccoo.com/projects/yida/img/build-text-2.png"/>
      </div>
      <div class="text-3 fadeInRight animated delay-9"><img data-layzr="http://disk.giccoo.com/projects/yida/img/build-text-3.png"/>
      </div>
    </div>
    <div class="upload bounceIn animated delay-10">
      <div class="light">
        <div class="flash delay-7"><img src="http://disk.giccoo.com/projects/yida/img/build-upload.png"/>
        </div><img src="http://disk.giccoo.com/projects/yida/img/build-upload-normal.png"/>
      </div>
      <input id="img" if="{FromMM}" type="file" name="image" onchange="{changeFile}"/>
      <div if="{!FromMM}" onclick="{MMchangFile}" class="changeFile"></div>
    </div>
    <div onclick="{previewInfo}" class="preview-btn fadeInUp animated delay-5">
      <div class="bg"><img data-layzr="http://disk.giccoo.com/projects/yida/img/kv-next-bg.png"/></div>
      <div class="text">
        <div class="light">
          <div class="flash"><img data-layzr="http://disk.giccoo.com/projects/yida/img/preview-btn.png"/></div><img data-layzr="http://disk.giccoo.com/projects/yida/img/preview-btn-normal.png"/>
        </div>
      </div>
    </div>
    <div show="{noteInfo}" onclick="{showNoteColse}" class="note-info fadeIn animated"><img data-layzr="http://disk.giccoo.com/projects/yida/img/note-info.jpg"/>
    </div>
  </div>
  <div show="{previewPage}" class="preview-info">
    <div id="previewImage" class="bg fadeIn animated delay-3">
    </div>
    <div class="texts">
      <div class="text-1 fadeInRight animated delay-6"><img data-layzr="http://disk.giccoo.com/projects/yida/img/build-text-1.png"/>
      </div>
      <div class="preview-text fadeInRight animated delay-7">
        <p>{previewText}</p>
      </div>
      <div class="text-2 fadeInRight animated delay-8"><img data-layzr="http://disk.giccoo.com/projects/yida/img/build-text-2.png"/>
      </div>
      <div class="text-3 fadeInRight animated delay-9"><img data-layzr="http://disk.giccoo.com/projects/yida/img/build-text-3.png"/>
      </div>
    </div>
    <canvas-ctrl parent="#previewImage canvas"></canvas-ctrl>
    <div onclick="{reset}" class="build-reset fadeInLeft animated delay-13"><img data-layzr="http://disk.giccoo.com/projects/yida/img/build-reset.png"/>
    </div>
    <div onclick="{upload}" class="share-btn fadeInUp animated delay-15">
      <div class="bg-s"><img data-layzr="http://disk.giccoo.com/projects/yida/img/kv-next-bg.png"/></div>
      <div class="text">
        <div class="light">
          <div class="flash"><img data-layzr="http://disk.giccoo.com/projects/yida/img/build-btn.png"/></div><img data-layzr="http://disk.giccoo.com/projects/yida/img/build-btn-normal.png"/>
        </div>
      </div>
    </div>
    <div show="{uploading}" class="uploading fadeIn animated">
      <div class="upload fadeInDown animated delay-4">
        <div class="text"> <span class="loading-normal"><img src="http://disk.giccoo.com/projects/libs/img/loading-normal.png"/></span>上传中,请稍后,因为图片较大,大概需要30秒.</div>
      </div>
    </div>
  </div>
  <div show="{userList}" class="user-list">
    <div class="title fadeInDown animated"><img data-layzr="http://disk.giccoo.com/projects/yida/img/userlist-title.png"/>
    </div>
    <div class="user-content fadeIn animated delay-3">
      <div style="transform: translate3d(-{pageTranslate}%,0,0);-webkit-transform: translate3d(-{pageTranslate}%,0,0);" class="page-content">
        <div each="{ulist in u}" class="page-list">
          <ul>
            <li each="{ulist}">
              <div style="background-image:url({avatar})" class="avatar"></div>
              <div class="message">
                <p>{username}</p>
                <p>不怕{message}，就要吃！</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="user-note fadeInRight animated delay-5">
      <p><< 向左滑动换一批</p>
    </div>
    <div onclick="{shareTo}" class="share-btn"></div>
    <div class="share-btn-bg fadeInUp animated">
      <div class="bg"><img data-layzr="http://disk.giccoo.com/projects/yida/img/userlist-share-btn-bg.png"/></div>
      <div class="text">
        <div class="light">
          <div class="flash"><img data-layzr="http://disk.giccoo.com/projects/yida/img/userlist-share-btn.png"/></div><img data-layzr="http://disk.giccoo.com/projects/yida/img/userlist-share-btn-normal.png"/>
        </div>
      </div>
    </div>
  </div>
  <script>
    var self = this
    var cache = null
    var posting = false
    var postDate = new Date().getTime()
    var page = 1
    var MaxPage = 4
    var shareId = null
    var TouchUp = false
    //- var link = "http://kelvin-air.local:8881"
    var link = "http://api.giccoo.com"
    var canvas = null
    console.log("tags:",self.tags["canvas-ctrl"])
    Store.build = self
    self.pageTranslate = 0
    self.buildingPage = true
    self.previewPage = false
    self.userList = false
    self.uploading = false
    self.noteInfo = false
    self.FromMM = !isMM
    self.previewText = ""
    self.u = []
    //- self.ulist = [
    //- 	{id:1,username:"Kelvin.Lee",avatar:"http://img.momocdn.com/album/DD/4E/DD4E688E-CAFF-BB3C-4819-43F0C00D09F6_L.jpg",message:"hello world",image:"http://image.giccoo.com/momo/123.jpg"},
    //- 	{id:2,username:"Kelvin.Lee",avatar:"http://img.momocdn.com/album/DD/4E/DD4E688E-CAFF-BB3C-4819-43F0C00D09F6_L.jpg",message:"hello world",image:"http://image.giccoo.com/momo/123.jpg"},
    //- 	{id:3,username:"Kelvin.Lee",avatar:"http://img.momocdn.com/album/DD/4E/DD4E688E-CAFF-BB3C-4819-43F0C00D09F6_L.jpg",message:"hello world",image:"http://image.giccoo.com/momo/123.jpg"},
    //- 	{id:4,username:"Kelvin.Lee",avatar:"http://img.momocdn.com/album/DD/4E/DD4E688E-CAFF-BB3C-4819-43F0C00D09F6_L.jpg",message:"hello world",image:"http://image.giccoo.com/momo/123.jpg"}
    //- ]
    $(".wrap").css({"min-height":$("body").height()+"px"})
    
    updateFrom(){
    	self.FromMM = false
    	self.update()
    }
    var createObjectURLfun = function(file) {
    	if (window.navigator.userAgent.indexOf("Chrome") >= 1 || window.navigator.userAgent.indexOf("Safari") >= 1) {
    		return window.webkitURL.createObjectURL(file);
    	} else {
    		return window.URL.createObjectURL(file);
    	}
    };
    MMchangFile(evt) {
    	//- alert("点中,测试图片是否返回.")
    	var image = new Image()
    	var drawCanvasImage = function() {
    		EXIF.getData(image, function(){
    			info = EXIF.getTag(image, "Orientation")
    			self.tags["canvas-ctrl"].setImage(image,info)
    			if (info == 6) {
    				//- alert("照片是外歪的")
    				orienImage()
    				//- normalImage()
    			}else{
    				normalImage()
    				//- orienImage()
    			}
    		})
    	}
    	var orienImage = function() {
    		var w = image.width
    		var h = image.height
    		var MaxW = 640
    		var MaxH = 1138
    		//- var canvas = document.getElementById("bgimage")
    		canvas = document.createElement("canvas")
    		canvas.width = 640
    		canvas.height = 1138
    		var ctx = canvas.getContext("2d")
    		if (w > h) {
    			h = h*(MaxH/w)
    			w = w*(MaxH/w)
    		}else if (w/h > MaxW/MaxH){
    			h = h*(MaxH/w)
    			w = w*(MaxH/w)
    		}else if (w > MaxW) {
    			w = w*(MaxW/h)
    			h = h*(MaxW/h)
    		}
    		
    		var x = -(w-canvas.height)/2
    		var y = -(h-canvas.width)/2
    		ctx.clearRect(-10000, -10000, 50000, 50000)
    		ctx.rotate(Math.PI/2)
    		ctx.drawImage(image, y, -h, w, h)
    		//- console.log(x, y, -h, w, h)
    		self.tags["canvas-ctrl"].setDefault(y, -h, w, h)
    		cache = canvas.toDataURL("image/png")
    		$("#bgimage").html(canvas)
    	}
    	var normalImage = function() {
    		var w = image.width
    		var h = image.height
    		var MaxW = 640
    		var MaxH = 1138
    		//- var canvas = document.getElementById("bgimage")
    		canvas = document.createElement("canvas")
    		canvas.width = 640
    		canvas.height = 1138
    		var ctx = canvas.getContext("2d")
    		//- console.log(w,h,MaxW)
    		if (w > h) {
    			w = w*(MaxH/h)
    			h = h*(MaxH/h)
    		}else if (w/h > MaxW/MaxH){
    			w = w*(MaxH/h)
    			h = h*(MaxH/h)
    		}else if (w > MaxW) {
    			h = h*(MaxW/w)
    			w = w*(MaxW/w)
    		}
    		//- console.log(w,h,MaxW,-(w-canvas.width)/2, -(h-canvas.height)/2)
    		var x = -(w-canvas.width)/2
    		var y = -(h-canvas.height)/2
    		ctx.clearRect(-10000, -10000, 50000, 50000)
    		ctx.drawImage(image, x, y, w, h)
    		self.tags["canvas-ctrl"].setDefault(x, y, w, h)
    		cache = canvas.toDataURL("image/png")
    		$("#bgimage").html(canvas)
    	}
    	image.onload = drawCanvasImage
    	console.log("mm:",mm)
    	mm.invoke('readImage', {"id":'image', "method": 0, "type": "base64"},
    		function(id, data, size, type){
    			image.src="data:image/jpeg;base64,"+data
    			//- alert("图片选出,准备创建.")
    		}
    	)
    }
    changeFile(evt) {
    	var img = document.getElementById("img")
    	blob = createObjectURLfun(img.files[0])
    	//- $(".canvas").html("<img src='"+blob+"' />")
    	var image = new Image()
    	var drawCanvasImage = function() {
    		EXIF.getData(image, function(){
    			info = EXIF.getTag(image, "Orientation")
    			self.tags["canvas-ctrl"].setImage(image,info)
    			if (info == 6) {
    				//- alert("照片是外歪的")
    				orienImage()
    				//- normalImage()
    			}else{
    				normalImage()
    				//- orienImage()
    			}
    		})
    	}
    	var orienImage = function() {
    		var w = image.width
    		var h = image.height
    		var MaxW = 640
    		var MaxH = 1138
    		//- var canvas = document.getElementById("bgimage")
    		canvas = document.createElement("canvas")
    		canvas.width = 640
    		canvas.height = 1138
    		var ctx = canvas.getContext("2d")
    		if (w > h) {
    			h = h*(MaxH/w)
    			w = w*(MaxH/w)
    		}else if (w/h > MaxW/MaxH){
    			h = h*(MaxH/w)
    			w = w*(MaxH/w)
    		}else if (w > MaxW) {
    			w = w*(MaxW/h)
    			h = h*(MaxW/h)
    		}
    		
    		var x = -(w-canvas.height)/2
    		var y = -(h-canvas.width)/2
    		ctx.clearRect(-10000, -10000, 50000, 50000)
    		ctx.rotate(Math.PI/2)
    		ctx.drawImage(image, y, -h, w, h)
    		//- console.log(x, y, -h, w, h)
    		self.tags["canvas-ctrl"].setDefault(y, -h, w, h)
    		cache = canvas.toDataURL("image/png")
    		$("#bgimage").html(canvas)
    	}
    	var normalImage = function() {
    		var w = image.width
    		var h = image.height
    		var MaxW = 640
    		var MaxH = 1138
    		//- var canvas = document.getElementById("bgimage")
    		canvas = document.createElement("canvas")
    		canvas.width = 640
    		canvas.height = 1138
    		var ctx = canvas.getContext("2d")
    		//- console.log(w,h,MaxW)
    		if (w > h) {
    			w = w*(MaxH/h)
    			h = h*(MaxH/h)
    		}else if (w/h > MaxW/MaxH){
    			w = w*(MaxH/h)
    			h = h*(MaxH/h)
    		}else if (w > MaxW) {
    			h = h*(MaxW/w)
    			w = w*(MaxW/w)
    		}
    		//- console.log(w,h,MaxW,-(w-canvas.width)/2, -(h-canvas.height)/2)
    		var x = -(w-canvas.width)/2
    		var y = -(h-canvas.height)/2
    		ctx.clearRect(-10000, -10000, 50000, 50000)
    		ctx.drawImage(image, x, y, w, h)
    		self.tags["canvas-ctrl"].setDefault(x, y, w, h)
    		cache = canvas.toDataURL("image/png")
    		$("#bgimage").html(canvas)
    	}
    	image.onload = drawCanvasImage
    	image.src = blob
    }
    previewInfo() {
    	//- console.log("click?")
    	var val = $("#message").val()
    	if (val.length <= 0) {
    		SendNote("请填写吃货宣言")
    		return false
    	}
    	if (!cache) {
    		SendNote("请选择照片")
    		return false
    	}
    	self.buildingPage = false
    	self.previewPage = true
    	//- cache
    	var previewImage = document.getElementById("previewImage")
    	$(previewImage).html(canvas)
    	//- previewImage.src = cache
    	self.previewText = val
    	self.update()
    }
    reset() {
    	self.buildingPage = true
    	self.previewPage = false
    	//- var canvas = document.getElementById("bgimage")
    	//- var ctx = canvas.getContext("2d")
    	//- ctx.clearRect(-10000, -10000, 50000, 50000)
    	$("#bgimage").html("")
    	$("#img").val("")
    }
    upload() {
    	cache = canvas.toDataURL("image/png")
    	
    	if (posting) {
    		SendNote("正在提交,请稍后")
    		return false
    	}
    	posting = true
    	postDate = new Date().getTime()
    	self.uploading = true
    	self.update()
    	var data = {}
    	data.message = self.previewText
    	data.image = cache
    	data.username = userInfo.name
    	data.avatar = userInfo.avatar
    	data.date = postDate
    	
    	//- console.log(data)
    	//- setTimeout(function(){
    	//- },3000)
    	//- return false
    	$.post(link+"/momo/create",data,function(msg){
    		if (msg.recode == 200) {
    			self.buildingPage = false
    			self.previewPage = false
    			self.userList = true
    			self.uploading = false
    			//- self.ulist = msg.list
    			self.u[0] = msg.list
    			shareId = msg.obj.insertId
    			postDate = msg.create_at
    			//- shareDefault.title = "不怕"+data.message+",我就要吃,约饭吗?"
    			shareDefault.url = 'https://passport.immomo.com/authorize?redirect_uri=' + encodeURIComponent("http://api.giccoo.com/momo/share/"+msg.obj.insertId)
    			//- shareDefault.pic = ""
    			UpdateShare()
    			self.update()
    		}else{
    			SendNote(msg.reason)
    			self.uploading = false
    			self.update()
    		}
    		posting = false
    	})
    }
    var postOver = true
    swipeNew(direction) {
    	postOver = false
    	//- postDate
    	//- console.log(direction,postDate)
    	console.log(direction,page)
    	if (direction == "left") {
    		//- 下一页
    		page += 1
    		var data = {
    			date: postDate,
    			page: page
    		}
    		if (data.page > MaxPage) {
    			page = MaxPage
    			postOver = true
    			self.canMove()
    			SendNote("参与用户过多,我们只显示"+MaxPage+"页.")
    			return false
    		}
    		console.log(page)
    		if (self.u[page-1]) {
    			self.pageTranslate = (page-1)*100
    			postOver = true
    			self.canMove()
    			self.update()
    			return true
    		}
    		$.post(link+"/momo/more",data,function(msg){ 
    			if (msg.recode == 200) {
    				if (msg.list < 4) { MaxPage = page }
    				if (msg.list <= 0) { 
    					MaxPage = page - 1 
    					page -= 1
    					SendNote("参与用户过多,我们只显示"+MaxPage+"页.")
    				}else{
    					self.u[page-1] = msg.list
    					self.pageTranslate = (page-1)*100
    					self.update()
    				}
    			}else{
    				SendNote(msg.reason)
    			}
    			postOver = true
    			self.canMove()
    		})
    	}else{
    		//- 上一页
    		page -= 1
    		var data = {
    			date: postDate,
    			page: page
    		}
    		if (data.page < 1) {
    			page = 1
    			postOver = true
    			self.canMove()
    			SendNote("这是第一页,向左滑动换一批.")
    			return false
    		}
    		console.log(page)
    		if (self.u[page-1]) {
    			self.pageTranslate = (page-1)*100
    			postOver = true
    			self.canMove()
    			self.update()
    			return true
    		}
    		$.post(link+"/momo/more",data,function(msg){ 
    			if (msg.recode == 200) {
    				self.u[page-1] = msg.list
    				self.pageTranslate = (page-1)*100
    				self.update()
    			}else{
    				SendNote(msg.reason)
    			}
    			postOver = true
    			self.canMove()
    		})
    	}
    
    	//- self.canMove()
    }
    shareTo() {
    	$(".share-btn-bg .light").removeClass("pulse animated")
    	setTimeout(function(){
    		$(".share-btn-bg .light").addClass("pulse animated")
    	},30)
    	shareOneToAll()
    }
    showNote() {
    	self.noteInfo = true
    	self.update()
    }
    showNoteColse() {
    	self.noteInfo = false
    	self.update()
    }
    self.defaultPoint = {
    	lastPage: false,
    	canmove: true,
    	x: 0,
    	y: 0,
    	returnTranN: true,
    	returnTranO: true
    }
    canMove() {
    	//- console.log(postOver,TouchUp)
    	if (postOver && TouchUp) {
    		self.defaultPoint.canmove = true
    	}
    }
    // touch 开始
    start(evt){
    	TouchUp = false
    	if (self.defaultPoint.lastPage) { return false }
    
    	if (! self.defaultPoint.canmove) {return false}
    	console.log("start")
    	touch = evt.touches[0]
    	this.defaultPoint.x = touch.pageX
    	this.defaultPoint.y = touch.pageY
    	//- evt.preventDefault()
    	return true
    }
    // touch move
    move(evt) {
    	if (! self.defaultPoint.canmove) {return false}
    	touch = evt.touches[0]
    	gone = this.defaultPoint.x - touch.pageX
    	//- if (gone > 5 || gone < -5) {
    		evt.preventDefault()
    	//- }
    	if (gone > 50) {
    		//- console.log(gone)
    		self.defaultPoint.canmove = false
    		this.swipeNew.bind(this)("left")
    	}
    	if (gone < -50) {
    		//- console.log(gone)
    		self.defaultPoint.canmove = false
    		this.swipeNew.bind(this)("right")
    	}
    	return true
    }
    // touch end
    end(e) {
    	TouchUp = true
    	self.canMove()
    }
    this.on("mount",function(){
    	//- .user-content
    	$(".user-content")[0].addEventListener("touchstart",this.start.bind(this))
    	$(".user-content")[0].addEventListener("touchmove",this.move.bind(this))
    	$(".user-content")[0].addEventListener("touchend",this.end.bind(this))
    })
  </script>
</build>