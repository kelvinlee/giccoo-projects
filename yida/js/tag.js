
riot.tag('begin', '<div if="{firstpageShow}" class="firstpage {firstpageClass}"> <parallax class="pages"> <div each="{parent.kv}" up="{down}" down="{up}" class="page {name}"> <div class="kv fadeIn animated delay-7"><img data-layzr="http://disk.giccoo.com/projects/yida/img/{name}.jpg"></div> <div class="texts"><img data-layzr="http://disk.giccoo.com/projects/yida/img/kv-text-1.png" class="fadeInRight animated delay-8"><img data-layzr="http://disk.giccoo.com/projects/yida/img/{name}-text.png" class="fadeInRight animated delay-9"><img data-layzr="http://disk.giccoo.com/projects/yida/img/kv-text-2.png" class="fadeInRight animated delay-10"><img data-layzr="http://disk.giccoo.com/projects/yida/img/kv-text-3.png" class="fadeInRight animated delay-11"><img data-layzr="http://disk.giccoo.com/projects/yida/img/kv-logo.png" class="fadeInRight animated delay-12"> </div> <div class="kv-name fadeIn animated delay-7"><img data-layzr="http://disk.giccoo.com/projects/yida/img/{name}-name.png"></div><a href="https://oauth.immomo.com/oauth/authorize?response_type=code&amp;client_id=mm7a12e355d5958001&amp;state=abc" class="normal fadeInUp animated delay-5"> <div class="bg"><img data-layzr="http://disk.giccoo.com/projects/yida/img/kv-next-bg.png"> </div> <div class="text"> <div class="light"> <div class="flash"><img data-layzr="http://disk.giccoo.com/projects/yida/img/kv-normal-btn.png"></div><img data-layzr="http://disk.giccoo.com/projects/yida/img/kv-normal-btn-normal.png"> </div> </div></a> <div class="private fadeInUp animated delay-5"> <div class="bg"><img data-layzr="http://disk.giccoo.com/projects/yida/img/kv-next-bg.png"> </div> <div class="text"> <div class="light"> <div class="flash"><img data-layzr="http://disk.giccoo.com/projects/yida/img/kv-normal-btn.png"></div><img data-layzr="http://disk.giccoo.com/projects/yida/img/kv-normal-btn-normal.png"> </div> </div> <div class="next-point"> <div class="light"> <div class="flash"><img data-layzr="http://disk.giccoo.com/projects/yida/img/kv-next-point.png"> </div><img src="http://disk.giccoo.com/projects/yida/img/kv-next-point-normal.png"> </div> </div> </div> </div> </parallax> </div> <div if="{userpageShow}" class="userpage"> <div class="preview-info"> <div class="bg fadeIn animated delay-3"><img id="previewImage" data-layzr="http://image.giccoo.com/momoDir/{userContent.image}@640w_60Q_1x.jpg"></div> <div class="texts"> <div class="text-1 fadeInRight animated delay-6"><img data-layzr="http://disk.giccoo.com/projects/yida/img/build-text-1.png"> </div> <div class="preview-text fadeInRight animated delay-7"> <p>{userContent.message}</p> </div> <div class="text-2 fadeInRight animated delay-8"><img data-layzr="http://disk.giccoo.com/projects/yida/img/build-text-2.png"> </div> <div class="text-3 fadeInRight animated delay-9"><img data-layzr="http://disk.giccoo.com/projects/yida/img/build-text-3.png"> </div> </div> <div class="build-by-who fadeInUp animated delay-18"> <p>来自：{userContent.username}</p> </div><a href="https://oauth.immomo.com/oauth/authorize?response_type=code&amp;client_id=mm7a12e355d5958001&amp;state=abc" class="share-btn fadeInUp animated delay-15"> <div class="bg-s"><img data-layzr="http://disk.giccoo.com/projects/yida/img/kv-next-bg.png"> </div> <div class="text"> <div class="light"> <div class="flash"><img data-layzr="http://disk.giccoo.com/projects/yida/img/kv-normal-btn.png"></div><img src="http://disk.giccoo.com/projects/yida/img/kv-normal-btn-normal.png"> </div> </div></a> </div> </div>', function(opts) {
    var self = this
    self.firstpageShow = false
    self.userpageShow = false
    self.firstpageClass = ""
    self.userContent = oldContent
    self.kv = []
    if (oldContent != null) {

    	self.userpageShow = true
    }else{

    	self.firstpageShow = true

    	var KV = ["kv-1","kv-2","kv-3","kv-4"]
    	var tempKV = []
    	tempKV.push({name:KV.splice(parseInt(Math.random()*(KV.length)),1)[0]})
    	tempKV.push({name:KV.splice(parseInt(Math.random()*(KV.length)),1)[0]})
    	tempKV.push({name:KV.splice(parseInt(Math.random()*(KV.length)),1)[0]})
    	for (var i=0; i < tempKV.length ; i++) {
    		tempKV[i].up = typeof(tempKV[i-1]) != "undefined" ? tempKV[i-1].name : null
    		tempKV[i].down =  typeof(tempKV[i+1]) != "undefined" ? tempKV[i+1].name : null

    	}
    	console.log(tempKV)
    	self.kv = tempKV
    }
  
});

riot.tag('build', '<div show="{buildingPage}" class="building"> <div onclick="{showNote}" class="active-info fadeInDown animated delay-5"><img data-layzr="http://disk.giccoo.com/projects/yida/img/active-info.png"> </div> <div id="bgimage" class="canvas"> </div> <div class="texts"> <div class="text-1 fadeInRight animated delay-6"><img data-layzr="http://disk.giccoo.com/projects/yida/img/build-text-1.png"> </div> <div class="build-text fadeInRight animated delay-7"> <input id="message" type="text" name="message" placeholder="例如: 重口味"> <div class="light"> <div class="flash"> <div class="build-text-box"></div> </div> </div> </div> <div class="text-2 fadeInRight animated delay-8"><img data-layzr="http://disk.giccoo.com/projects/yida/img/build-text-2.png"> </div> <div class="text-3 fadeInRight animated delay-9"><img data-layzr="http://disk.giccoo.com/projects/yida/img/build-text-3.png"> </div> </div> <div class="upload bounceIn animated delay-10"> <div class="light"> <div class="flash delay-7"><img src="http://disk.giccoo.com/projects/yida/img/build-upload.png"> </div><img src="http://disk.giccoo.com/projects/yida/img/build-upload-normal.png"> </div> <input id="img" if="{FromMM}" type="file" name="image" onchange="{changeFile}"> <div if="{!FromMM}" onclick="{MMchangFile}" class="changeFile"></div> </div> <div onclick="{previewInfo}" class="preview-btn fadeInUp animated delay-5"> <div class="bg"><img data-layzr="http://disk.giccoo.com/projects/yida/img/kv-next-bg.png"></div> <div class="text"> <div class="light"> <div class="flash"><img data-layzr="http://disk.giccoo.com/projects/yida/img/preview-btn.png"></div><img data-layzr="http://disk.giccoo.com/projects/yida/img/preview-btn-normal.png"> </div> </div> </div> <div show="{noteInfo}" onclick="{showNoteColse}" class="note-info fadeIn animated"><img data-layzr="http://disk.giccoo.com/projects/yida/img/note-info.jpg"> </div> </div> <div show="{previewPage}" class="preview-info"> <div id="previewImage" class="bg fadeIn animated delay-3"> </div> <div class="texts"> <div class="text-1 fadeInRight animated delay-6"><img data-layzr="http://disk.giccoo.com/projects/yida/img/build-text-1.png"> </div> <div class="preview-text fadeInRight animated delay-7"> <p>{previewText}</p> </div> <div class="text-2 fadeInRight animated delay-8"><img data-layzr="http://disk.giccoo.com/projects/yida/img/build-text-2.png"> </div> <div class="text-3 fadeInRight animated delay-9"><img data-layzr="http://disk.giccoo.com/projects/yida/img/build-text-3.png"> </div> </div> <canvas-ctrl parent="#previewImage canvas"></canvas-ctrl> <div onclick="{reset}" class="build-reset fadeInLeft animated delay-13"><img data-layzr="http://disk.giccoo.com/projects/yida/img/build-reset.png"> </div> <div onclick="{upload}" class="share-btn fadeInUp animated delay-15"> <div class="bg-s"><img data-layzr="http://disk.giccoo.com/projects/yida/img/kv-next-bg.png"></div> <div class="text"> <div class="light"> <div class="flash"><img data-layzr="http://disk.giccoo.com/projects/yida/img/build-btn.png"></div><img data-layzr="http://disk.giccoo.com/projects/yida/img/build-btn-normal.png"> </div> </div> </div> <div show="{uploading}" class="uploading fadeIn animated"> <div class="upload fadeInDown animated delay-4"> <div class="text"> <span class="loading-normal"><img src="http://disk.giccoo.com/projects/libs/img/loading-normal.png"></span>上传中,请稍后,因为图片较大,大概需要30秒.</div> </div> </div> </div> <div show="{userList}" class="user-list"> <div class="title fadeInDown animated"><img data-layzr="http://disk.giccoo.com/projects/yida/img/userlist-title.png"> </div> <div class="user-content fadeIn animated delay-3"> <div riot-style="transform: translate3d(-{pageTranslate}%,0,0);-webkit-transform: translate3d(-{pageTranslate}%,0,0);" class="page-content"> <div each="{ulist in u}" class="page-list"> <ul> <li each="{ulist}"> <div riot-style="background-image:url({avatar})" class="avatar"></div> <div class="message"> <p>{username}</p> <p>不怕{message}，就要吃！</p> </div> </li> </ul> </div> </div> </div> <div class="user-note fadeInRight animated delay-5"> <p><< 向左滑动换一批</p> </div> <div onclick="{shareTo}" class="share-btn"></div> <div class="share-btn-bg fadeInUp animated"> <div class="bg"><img data-layzr="http://disk.giccoo.com/projects/yida/img/userlist-share-btn-bg.png"></div> <div class="text"> <div class="light"> <div class="flash"><img data-layzr="http://disk.giccoo.com/projects/yida/img/userlist-share-btn.png"></div><img data-layzr="http://disk.giccoo.com/projects/yida/img/userlist-share-btn-normal.png"> </div> </div> </div> </div>', function(opts) {
    var self = this
    var cache = null
    var posting = false
    var postDate = new Date().getTime()
    var page = 1
    var MaxPage = 4
    var shareId = null
    var TouchUp = false

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






    $(".wrap").css({"min-height":$("body").height()+"px"})
    
    this.updateFrom = function() {
    	self.FromMM = false
    	self.update()
    }.bind(this);
    var createObjectURLfun = function(file) {
    	if (window.navigator.userAgent.indexOf("Chrome") >= 1 || window.navigator.userAgent.indexOf("Safari") >= 1) {
    		return window.webkitURL.createObjectURL(file);
    	} else {
    		return window.URL.createObjectURL(file);
    	}
    };
    this.MMchangFile = function(evt) {

    	var image = new Image()
    	var drawCanvasImage = function() {
    		EXIF.getData(image, function(){
    			info = EXIF.getTag(image, "Orientation")
    			self.tags["canvas-ctrl"].setImage(image,info)
    			if (info == 6) {

    				orienImage()

    			}else{
    				normalImage()

    			}
    		})
    	}
    	var orienImage = function() {
    		var w = image.width
    		var h = image.height
    		var MaxW = 640
    		var MaxH = 1138

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

    		self.tags["canvas-ctrl"].setDefault(y, -h, w, h)
    		cache = canvas.toDataURL("image/png")
    		$("#bgimage").html(canvas)
    	}
    	var normalImage = function() {
    		var w = image.width
    		var h = image.height
    		var MaxW = 640
    		var MaxH = 1138

    		canvas = document.createElement("canvas")
    		canvas.width = 640
    		canvas.height = 1138
    		var ctx = canvas.getContext("2d")

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

    		}
    	)
    }.bind(this);
    this.changeFile = function(evt) {
    	var img = document.getElementById("img")
    	blob = createObjectURLfun(img.files[0])

    	var image = new Image()
    	var drawCanvasImage = function() {
    		EXIF.getData(image, function(){
    			info = EXIF.getTag(image, "Orientation")
    			self.tags["canvas-ctrl"].setImage(image,info)
    			if (info == 6) {

    				orienImage()

    			}else{
    				normalImage()

    			}
    		})
    	}
    	var orienImage = function() {
    		var w = image.width
    		var h = image.height
    		var MaxW = 640
    		var MaxH = 1138

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

    		self.tags["canvas-ctrl"].setDefault(y, -h, w, h)
    		cache = canvas.toDataURL("image/png")
    		$("#bgimage").html(canvas)
    	}
    	var normalImage = function() {
    		var w = image.width
    		var h = image.height
    		var MaxW = 640
    		var MaxH = 1138

    		canvas = document.createElement("canvas")
    		canvas.width = 640
    		canvas.height = 1138
    		var ctx = canvas.getContext("2d")

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
    }.bind(this);
    this.previewInfo = function() {

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

    	var previewImage = document.getElementById("previewImage")
    	$(previewImage).html(canvas)

    	self.previewText = val
    	self.update()
    }.bind(this);
    this.reset = function() {
    	self.buildingPage = true
    	self.previewPage = false



    	$("#bgimage").html("")
    	$("#img").val("")
    }.bind(this);
    this.upload = function() {
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




    	$.post(link+"/momo/create",data,function(msg){
    		if (msg.recode == 200) {
    			self.buildingPage = false
    			self.previewPage = false
    			self.userList = true
    			self.uploading = false

    			self.u[0] = msg.list
    			shareId = msg.obj.insertId
    			postDate = msg.create_at

    			shareDefault.url = 'https://passport.immomo.com/authorize?redirect_uri=' + encodeURIComponent("http://api.giccoo.com/momo/share/"+msg.obj.insertId)

    			UpdateShare()
    			self.update()
    		}else{
    			SendNote(msg.reason)
    			self.uploading = false
    			self.update()
    		}
    		posting = false
    	})
    }.bind(this);
    var postOver = true
    this.swipeNew = function(direction) {
    	postOver = false


    	console.log(direction,page)
    	if (direction == "left") {

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

    }.bind(this);
    this.shareTo = function() {
    	$(".share-btn-bg .light").removeClass("pulse animated")
    	setTimeout(function(){
    		$(".share-btn-bg .light").addClass("pulse animated")
    	},30)
    	shareOneToAll()
    }.bind(this);
    this.showNote = function() {
    	self.noteInfo = true
    	self.update()
    }.bind(this);
    this.showNoteColse = function() {
    	self.noteInfo = false
    	self.update()
    }.bind(this);
    self.defaultPoint = {
    	lastPage: false,
    	canmove: true,
    	x: 0,
    	y: 0,
    	returnTranN: true,
    	returnTranO: true
    }
    this.canMove = function() {

    	if (postOver && TouchUp) {
    		self.defaultPoint.canmove = true
    	}
    }.bind(this);

    this.start = function(evt) {
    	TouchUp = false
    	if (self.defaultPoint.lastPage) { return false }
    
    	if (! self.defaultPoint.canmove) {return false}
    	console.log("start")
    	touch = evt.touches[0]
    	this.defaultPoint.x = touch.pageX
    	this.defaultPoint.y = touch.pageY

    	return true
    }.bind(this);

    this.move = function(evt) {
    	if (! self.defaultPoint.canmove) {return false}
    	touch = evt.touches[0]
    	gone = this.defaultPoint.x - touch.pageX

    		evt.preventDefault()

    	if (gone > 50) {

    		self.defaultPoint.canmove = false
    		this.swipeNew.bind(this)("left")
    	}
    	if (gone < -50) {

    		self.defaultPoint.canmove = false
    		this.swipeNew.bind(this)("right")
    	}
    	return true
    }.bind(this);

    this.end = function(e) {
    	TouchUp = true
    	self.canMove()
    }.bind(this);
    this.on("mount",function(){

    	$(".user-content")[0].addEventListener("touchstart",this.start.bind(this))
    	$(".user-content")[0].addEventListener("touchmove",this.move.bind(this))
    	$(".user-content")[0].addEventListener("touchend",this.end.bind(this))
    })
  
});

riot.tag('canvas-ctrl', '<yield></yield>', function(opts) {
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

    var defaultType = null
    var logOrin = {
    	x: self.frame.x,
    	y: self.frame.y
    }
    var logSize = {
    	w: self.frame.w,
    	h: self.frame.h
    }
    this.setImage = function(image,info) {
    	self.image = image
    	self.info = info
    	console.log("image info:",self.image,info)
    }.bind(this);
    this.setDefault = function(x,y,w,h) {
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
    }.bind(this);
    
    this.start = function(evt) {
    	console.log(evt)
    	self.target = $(opts.parent)
    	touch = evt.touches
    	defaultType = touch.length
    	for (var i = 0 ; i < touch.length ; i++) {
    		defaultOrin[i] = {x: touch[i].clientX,y: touch[i].clientY}
    	}
    	console.log("start",defaultType,defaultOrin,self.frame,logSize)


    }.bind(this);
    this.move = function(evt) {
    	touch = evt.touches
    	var ctx = self.target[0].getContext("2d")
    	evt.preventDefault()
    	if (defaultType == 1) {

    		moveX = touch[0].clientX-defaultOrin[0].x
    		moveY = touch[0].clientY-defaultOrin[0].y

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

    		logSize.w = self.frame.w * (1+s)
    		logSize.h = self.frame.h * (1+s)
    		ctx.clearRect(-10000, -10000, 50000, 50000)
    		ctx.drawImage(self.image, self.frame.x, self.frame.y, logSize.w, logSize.h)

    	}
    }.bind(this);
    this.end = function(evt) {
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
    }.bind(this);
    self.root.addEventListener("touchstart",self.start.bind(this))
    self.root.addEventListener("touchmove",self.move.bind(this))
    self.root.addEventListener("touchend",self.end.bind(this))
  
});

riot.tag('note', '<div class="note-box"> <div class="note-content {animated:true,fadeInUp:!close,fadeOutUp:close}"> <div class="note-text"> <div class="icon-form"><img src="http://disk.giccoo.com/projects/showman/img/icon-alert-note.png"></div> {title} </div> </div> </div>', function(opts) {
    var self = this
    this.title = opts.title
    this.close = false
    this.time = opts.time?parseInt(opts.time):2500
    $(this.root).addClass("note")

    this.on("mount",function(){
    	setTimeout(function(){
    		self.unmount()
    	},self.time)
    	setTimeout(function(){
    		self.close = true
    		self.update()
    	},self.time-500)
    })
  
});

riot.tag('parallax', '<yield></yield>', function(opts) {
    console.log("parallax")
    var _store = {can: true}
    var self = this
    Store.parallax = this
    this.nowPage = null
    begin = true

    this.defaultPoint = {
    	x: 0,
    	y: 0,
    	returnTranN: true,
    	returnTranO: true
    }

    this.start = function(evt) {
    	if (self.nowPage == null) {
    		self.nowPage = $(".page",self.root)[0]
    		Store.nowPage = self.nowPage
    	}

    	if (! _store.can) {return false}
    	console.log("start")
    	touch = evt.touches[0]
    	this.defaultPoint.x = touch.pageX
    	this.defaultPoint.y = touch.pageY

    	return true
    }.bind(this);

    this.move = function(evt) {
    	if (! _store.can) {return false}
    	touch = evt.touches[0]
    	gone = this.defaultPoint.y - touch.pageY

    		evt.preventDefault()

    	if (gone > 50) {

    		_store.can = false
    		this.passpage.bind(this)("up")
    	}
    	if (gone < -50) {

    		_store.can = false
    		this.passpage.bind(this)("down")
    	}
    	return true
    }.bind(this);

    this.end = function(e) {
    }.bind(this);
    var allClass = "riot-up riot-up-active riot-up-leave riot-down riot-down-active riot-down-leave riot-left riot-left-active  riot-left-leave riot-right riot-right-active  riot-right-leave"

    this.passpage = function(direction) {
    	var select = $(this.nowPage).attr(direction)

    	if (select) {

    		self.animate(select)
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

    	if ($(oldpage).index() > $(newpage).index()) {direction = "down"}

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

    	if (self.defaultPoint.returnTranN) {
    		self.defaultPoint.returnTranN = false
    	}
    	self.newpage && self.newpage.removeEventListener(TRANSITION_END_NAME,self.newpageFinished)
    	self.newpage && self.newpage.removeEventListener(TRANSITION_END_NAME,self.oldpageFinished)
    	$(self.newpage).removeClass(allClass)
    	_store.can = true
    }
    this.oldpageFinished = function(evt) {

    	if (self.defaultPoint.returnTranO) {

    		self.defaultPoint.returnTranO = false
    		$(self.oldpage).hide()
    	}
    	self.oldpage && self.oldpage.removeEventListener(TRANSITION_END_NAME,self.newpageFinished)
    	self.oldpage && self.oldpage.removeEventListener(TRANSITION_END_NAME,self.oldpageFinished)
    	$(self.oldpage).removeClass(allClass)
    	_store.can = true
    }



    this.on("mount",function(){


    })
    console.log(this.root)
    this.root.addEventListener("touchstart",this.start.bind(this))
    this.root.addEventListener("touchmove",this.move.bind(this))
    this.root.addEventListener("touchend",this.end.bind(this))


  
});

riot.tag('playsound', '<div if="{icon}" onclick="{change}" class="icon-play {type}"><img riot-src="{iconNow}"></div> <audio id="playgrounp" riot-src="{src}" autoplay="true" loop="loop"></audio>', function(opts) {
    var self = this
    this.src = opts.src
    this.icon = opts.icon
    this.iconPlay = opts["icon-play"]
    this.iconStop = opts["icon-stop"]
    if (this.icon) {
    	this.iconNow = this.iconStop
    }
    this.type = null
    this.root.className += "playsound"
    this.change = function() {
    	var audio = document.getElementById("playgrounp")
    	if (this.iconNow == this.iconPlay) {
    		audio.pause()
    	}else{
    		audio.play()
    	}
    }.bind(this);
    this.on("mount",function(){
    	var audio = document.getElementById("playgrounp")
    	audio.addEventListener("pause",function(){
    		self.iconNow = self.iconStop
    		self.type = "pause"
    		self.update()
    	})
    	audio.addEventListener("play",function(){
    		self.iconNow = self.iconPlay
    		self.type = "play"
    		self.update()
    	})
    })
  
});

riot.tag('shareicon', '<yield></yield><a href="{parent.getUrl(icon)}" each="{icon in icons}" class="share-icon icon-{icon}"><img riot-src="http://disk.giccoo.com/projects/{parent.site}/img/icon-{icon}.png"></a>', function(opts) {
    var self = this
    var list = {
    	"wechat":"javascript:void(0)",
    	"qweibo":"http://v.t.qq.com/share/share.php?title={title}&url={url}&pic={pic}",
    	"renren":"http://share.renren.com/share/buttonshare.do?title={title}&link={url}&pic={pic}",
    	"weibo":"http://v.t.sina.com.cn/share/share.php?title={title}&url={url}&pic={pic}",
    	"qzone":"http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url={url}&title={title}&pic={pic}",
    	"facebook":"http://www.facebook.com/sharer/sharer.php?s=100&p[url]={url}}&p[title]={title}&p[summary]={title}&pic={pic}",
    	"twitter":"https://twitter.com/intent/tweet?text={title}&pic={pic}",
    	"kaixin":"http://www.kaixin001.com/rest/records.php?content={title}&url={url}&pic={pic}",
    	"douban": "http://www.douban.com/share/service?bm=&image={pic}&href={url}&updated=&name={title}"
    }
    this.root.className += " share-icons"
    this.icons = opts.icons.split(",")
    this.site = opts.site
    this.title = opts.title
    this.url = opts.url == "local"?window.location.href:opts.url
    this.pic = opts.pic
    document.title = this.title
    this.getUrl = function(icon) {

    	var u = list[icon]
    	u = u.replace("{title}",encodeURIComponent(this.title))
    	u = u.replace("{url}",encodeURIComponent(this.url))
    	u = u.replace("{pic}",encodeURIComponent(this.pic))
    	return u
    }.bind(this);
  
});