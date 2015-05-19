
<game>
  <div show="{!lastPage}" class="game-box">
    <div if="{puttyP}" class="putty animated fadeInLeft"><img src="http://disk.giccoo.com/projects/Yili-Eat-World/img/game-over-plate.png"/>
      <div class="content">
        <div each="{puttyList}" class="item">
          <div class="icon-item"><img src="http://disk.giccoo.com/projects/Yili-Eat-World/img/game-item-{name}.png"/><span>X{value}</span></div>
        </div>
      </div>
    </div>
    <div class="game-plate">
      <div class="plates">
        <div class="plate milknumber"><img data-layzr="http://disk.giccoo.com/projects/Yili-Eat-World/img/icon-box.png"/>
          <div class="text-content"><span class="icon"><img data-layzr="http://disk.giccoo.com/projects/Yili-Eat-World/img/icon-note-milk.png"/></span><span class="milk">{milk}</span></div>
        </div>
        <div class="plate score"><img data-layzr="http://disk.giccoo.com/projects/Yili-Eat-World/img/icon-box.png"/>
          <div class="text-content"><span class="icon"><img data-layzr="http://disk.giccoo.com/projects/Yili-Eat-World/img/icon-note-score.png"/></span><span class="score">{score}</span></div>
        </div>
      </div>
      <div class="canvas">
        <div id="Curtain"></div>
      </div>
      <div class="notes-msg">
        <div each="{notes}" class="note {noteClass}"><img src="http://disk.giccoo.com/projects/Yili-Eat-World/img/note-bg.png"/>
          <div class="text"><img src="http://disk.giccoo.com/projects/Yili-Eat-World/img/note-content-{noteNum}.png"/></div>
        </div>
      </div>
    </div>
    <div show="{gameoverP}" class="gameover animated fadeIn duration-2"><img data-layzr="http://disk.giccoo.com/projects/Yili-Eat-World/img/game-over.png"/></div>
  </div>
  <div show="{lastPage}" class="active-over">
    <div class="plates fadeInDown animated delay-3">
      <div class="plate"><span class="icon"><img data-layzr="http://disk.giccoo.com/projects/Yili-Eat-World/img/icon-note-milk.png"/></span><span class="milk">{milk}</span></div>
      <div class="plate"><span class="icon"><img data-layzr="http://disk.giccoo.com/projects/Yili-Eat-World/img/icon-note-score.png"/></span><span class="milk">{score}</span></div>
    </div>
    <div class="over-title fadeInDown animated delay-5"><img data-layzr="http://disk.giccoo.com/projects/Yili-Eat-World/img/game-over-title.png"/>
      <div class="over-title-text tada animated delay-9"><img src="http://disk.giccoo.com/projects/Yili-Eat-World/img/game-over-title-{overtitle}.png"/></div>
    </div>
    <div onclick="{resetGame}" class="over-regame fadeInDown animated delay-7"><img data-layzr="http://disk.giccoo.com/projects/Yili-Eat-World/img/again.png"/></div>
    <div class="over-list fadeInDown animated delay-9">
      <div class="title"><img data-layzr="http://disk.giccoo.com/projects/Yili-Eat-World/img/game-over-all.png"/></div>
      <div class="content">
        <div each="{puttyList}" class="item">
          <div class="icon-item"><img src="http://disk.giccoo.com/projects/Yili-Eat-World/img/game-item-{name}.png"/><span>X{value}</span></div>
        </div>
      </div>
    </div>
    <div class="over-note fadeInDown animated delay-11"><img data-layzr="http://disk.giccoo.com/projects/Yili-Eat-World/img/game-over-note.png"/></div>
    <div id="share-icons" class="share-icons fadeInDown animated delay-13">
    </div>
  </div><img data-layzr="http://disk.giccoo.com/projects/Yili-Eat-World/img/game-over-plate.png" style="display:none"/><img data-layzr="http://disk.giccoo.com/projects/Yili-Eat-World/img/reset-game.png" style="display:none"/><img data-layzr="http://disk.giccoo.com/projects/Yili-Eat-World/img/note-content-1.png" style="display:none"/><img data-layzr="http://disk.giccoo.com/projects/Yili-Eat-World/img/note-content-2.png" style="display:none"/><img data-layzr="http://disk.giccoo.com/projects/Yili-Eat-World/img/note-content-3.png" style="display:none"/><img data-layzr="http://disk.giccoo.com/projects/Yili-Eat-World/img/note-content-4.png" style="display:none"/><img data-layzr="http://disk.giccoo.com/projects/Yili-Eat-World/img/note-content-5.png" style="display:none"/>
  <script>
    var self = this
    var tween = null
    this.game = null
    this.gameoverP = false
    this.lastPage = false
    this.puttyP = false
    this.note = false
    this.notes = []
    this.noteClass = ""
    Store.game = this
    this.score = 0
    this.milk = 0
    this.overtitle = 1
    this.puttyList = []
    //- {name:1,value:6},{name:2,value:6},{name:8,value:6},{name:10,value:6},{name:14,value:6},{name:15,value:6}
    this.defaultPoint = {
    	x: 0,
    	y: 0,
    	returnTranN: true,
    	returnTranO: true
    }
    start(evt) {
    	var touch = evt.touches[0]
    	this.defaultPoint.x = touch.pageX
    	this.defaultPoint.y = touch.pageY
    }
    move(evt) {
    	var touch = evt.touches[0]
    	var _y = this.defaultPoint.y - touch.pageY
    	var _x = this.defaultPoint.x - touch.pageX
    	evt.preventDefault()
    	if (_y < -20 || _y > 20 || _x < -20 || _x > 20) {
    		if (Math.abs(_y) > Math.abs(_x)) {
    			if (_y < -20) { return self.game.changeD(3) }
    			if (_y > 20) { return self.game.changeD(1) }
    		}else{
    			if (_x < -20) {return self.game.changeD(2) }
    			if (_x > 20) {return self.game.changeD(4) }
    		}
    	}
    }
    end(evt) {
    
    }
    this.root.addEventListener("touchstart",this.start.bind(this))
    this.root.addEventListener("touchmove",this.move.bind(this))
    this.root.addEventListener("touchend",this.end.bind(this))
    this.build = function(){
    	$("#Curtain").html("")
    	self.game = new Game("eat-world","Curtain",this.scoreFun.bind(this),this.noteFun.bind(this),this.puttyFun.bind(this),this.gameover.bind(this))
    }
    this.gameover = function(list) {
    	console.log("over")
    	$("#share-icons").html("")
    	self.puttyList = []
    	for (var food in list) {
    		console.log(food)
    		self.puttyList.push({name:food,value:list[food]})
    	}
    	//- self.puttyList = [{name:1,value:6},{name:2,value:6},{name:8,value:6},{name:10,value:6},{name:14,value:6},{name:15,value:6}]
    	var nameList = ["吃货","吃霸","吃鬼","吃神","吃仙"]
    	self.overtitle = parseInt(self.score/100)
    	if (self.overtitle > nameList.length-1) {
    		self.overtitle = nameList.length - 1
    	}
    	var name = nameList[self.overtitle]
    	var howmany = parseInt(self.score/300*100)
    	var number = parseInt((new Date().getTime() - new Date(1431878400000).getTime()) / 1000 / 60 * 4000/(24*60))
    	howmany = howmany>99? 99 : howmany < 1 ? 1 : howmany
    	//- alert(number)
    	riot.mount("div#share-icons","shareicon",{
    		site:"Yili-Eat-World",
    		title:"我是第"+number+"名"+nameList[self.overtitle]+",获得"+self.score+"能量,战胜"+howmany+"%对手,不服?来吃！",
    		url: "local",
    		pic: "http://disk.giccoo.com/projects/Yili-Eat-World/img/share-pc.jpg",
    		icons: "wechat,weibo,qweibo,douban"
    	})
    	self.overtitle += 2
    	self.gameoverP = true
    	self.update()
    	setTimeout(function(){
    		self.lastPage = true
    		self.update()
    	},1500)
    }
    goon() {
    	self.puttyP = false
    	setTimeout(function(){
    		self.game.play()
    	},1000)
    	self.update()
    }
    resetGame() {
    	if (self.game == null) {return false}
    	self.game = null
    	self.gameoverP = false
    	self.lastPage = false
    	self.puttyP = false
    	self.note = false
    	self.notes = []
    	self.noteClass = ""
    	//- Store.game = this
    	self.score = 0
    	self.milk = 0
    	self.overtitle = 1
    	self.puttyList = []
    	$("#Curtain").html("")
    	self.update()
    	setTimeout(function(){
    		self.build()
    	},500)
    }
    this.puttyFun = function(list) {
    	console.log("彩蛋",list)
    	self.puttyList = []
    	for (var food in list) {
    		console.log(food)
    		self.puttyList.push({name:food,value:list[food]})
    	}
    	self.puttyP = true
    	self.game.pause()
    	self.update()
    	setTimeout(function(){
    		self.goon()
    	},5000)
    }
    this.noteFun = function(id) {
    	if (id >= 2 && id <= 5) {
    		self.notes.push({noteClass: "animated fadeInUp",noteNum: "vegetables"})
    	}
    	if (id >= 6 && id <= 9) {
    		self.notes.push({noteClass: "animated fadeInUp",noteNum: "fruit"})
    	}
    	if (id >= 10 && id <= 13) {
    		self.notes.push({noteClass: "animated fadeInUp",noteNum: "meat"})
    	}
    	if (id == 1) {
    		self.notes.push({noteClass: "animated fadeInUp",noteNum: parseInt(Math.random()*4)+1})
    	}
    	if (id == 15) {
    		self.notes.push({noteClass: "animated fadeInUp",noteNum: "egg"})
    	}
    	if (id == 14) {
    		self.notes.push({noteClass: "animated fadeInUp",noteNum: "cookie"})
    	}
    	console.log("Milk 提示",id)
    	//- self.update()
    	setTimeout(function(){
    		for(var i=0; i<=self.notes.length-1;i++) {
    			if (self.notes[i].noteClass == "animated fadeOutDown") {
    				self.notes.clean(self.notes[i])
    				break
    			}
    		}
    		for(var i=0; i<=self.notes.length-1;i++) {
    			if (self.notes[i].noteClass == "animated fadeInUp"){
    				self.notes[i].noteClass = "animated fadeOutDown"
    				self.update()
    				break
    			}
    		}
    	},3500)
    }
    this.scoreFun = function() {
    	console.log(self.game.score)
    	self.milk = self.game.milk
    	if (tween) {
    		tween.stop()
    	}
    	tween = new TWEEN.Tween({x:self.score}).to({x:self.game.score},1000).onUpdate(function(){
    		self.score = parseInt(this.x)
    		self.update()
    	}).start()
    	self.update()
    }
  </script>
</game>