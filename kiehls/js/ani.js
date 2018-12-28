var hintPage=new PIXI.Container()
var hintBG,blackLayer,startBtn
var hintA=[]
function setHintPage () {
	pStage.addChild(hintPage)
	if(sex==1){
		hintBG=new Sprite(getTe(_CDN+"img/startboy.png"));
	}else{
		hintBG=new Sprite(getTe(_CDN+"img/startgirl.png"));
	}
	hintBG.y=stageH/2-750


	blackLayer=new PIXI.Graphics()
	blackLayer.beginFill(0x000000)
	blackLayer.drawRect(0,0,640,stageH)
	blackLayer.alpha=.56

	hintPage.addChild(hintBG,blackLayer)

	for (var i = 0; i < 4; i++) {
		var j=i+1
		var _hint=new Sprite(getTe(_CDN+"img/hint"+j+".png"));
		hintPage.addChild(_hint)
		_hint.y=stageH/2-750
		TweenMax.from(_hint,2,{y:"-=50",ease:Elastic.easeOut,delay:.5*i})
		TweenMax.from(_hint,2,{alpha:0,delay:.5*i})
	};

	startBtn=new Sprite(getTe(_CDN+"img/startbtn.png"));
	startBtn.pivot.set(320,46)
	startBtn.position.set(320,stageH/2+(1157-750))
	hintPage.addChild(startBtn)
	TweenMax.from(startBtn.scale,2,{x:0,y:0,ease:Elastic.easeOut,delay:2})

	startBtn.interactive=true
	startBtn.tap=gameStart
}

var date=null//new Date()
function gameStart(){
	startBtn.interactive=false
	TweenMax.to(hintPage,.5,{alpha:0,onComplete:function(){
		hintPage.visible=false
	}})
	date=new Date()
	initAll()
	
}

var gameBG=new PIXI.Container()
var gameStage=new PIXI.Container()
var gameSea=new PIXI.Container()
var gamePlayer=new PIXI.Container()

function initAll(){
	pStage.addChild(gameBG,gameStage,gamePlayer,gameSea)
	setBG()
	setSea()
	setWave()
	setPlayer()
	setJump()
	setItem()
	setScore()
	setTicker()
}

var bg
var islandC=new PIXI.Container()
var islandA=[]
function setBG(){
	bg=new Sprite(getTe(_CDN+"img/bgc.png"));
	gameBG.addChild(bg,islandC)
	bg.y=stageH/2-750

	for (var i = 0; i < 7; i++) {
		var j=i+1
		var _island=new Sprite(getTe(_CDN+"img/pic"+j+".png"));
		islandA.push(_island)
		islandC.addChild(_island)
		_island.visible=false
	};
	islandC.pivot.y=234
	islandC.position.set(640,stageH/2+161)
	goIsland()
	goCloud()
	goCloud()
	goCloud()
	//goCloud()

}

var nowIsland=0
function goIsland(){
	nowIsland++
	if(nowIsland==7){
		nowIsland=0
	}
	islandC.x=640
	for (var i = 0; i < 7; i++) {
		islandA[i].visible=false
	};
	islandA[nowIsland].visible=true
	TweenMax.to(islandC,Math.random()*6+6,{x:-islandC.width,ease:Linear.easeNone,onComplete:goIsland})
}


var cloudA=[]
var nowCloud=1
function goCloud(){
	//var j=parseInt(Math.random()*3)+1
	var _cloud=new Sprite(getTe(_CDN+"img/cloud"+nowCloud+".png"));
	gameBG.addChild(_cloud)
	cloudA.push(_cloud)

	_cloud.pivot.set(177.5,73)
	_cloud.scale.x=_cloud.scale.y=Math.random()*.3+.25*nowCloud
	
	
	_cloud.position.set(640+_cloud.width,stageH/2-300-_cloud.scale.y*250)

	if(Math.random()>.5){
		_cloud.scale.x*=-1
	}
	TweenMax.to(_cloud,6-_cloud.scale.y*2,{x:-_cloud.width,ease:Linear.easeNone,repeatDelay:Math.random()*2.5,delay:Math.random()*2.5,repeat:10000})
	//TweenMax.to(_cloud,2,{y:"+=50",repeat:10,yoyo:true,ease:Sine.easeInOut})
	nowCloud++
	if(nowCloud==4){
		nowCloud=1
	}
}

var jumpBtn
function setSea(){
	for (var i = 0; i < 3; i++) {
		var j=i+1
		var _wave=new Sprite(getTe(_CDN+"img/wave"+j+".png"));
		gameSea.addChild(_wave)
		_wave.y=stageH/2-750+60*(i-.2)

		TweenMax.to(_wave,3.5-1*i,{x:-_wave.width/2,repeat:100000,ease:Linear.easeNone})
		TweenMax.to(_wave,2,{y:stageH/2-750,repeat:100000,yoyo:true,ease:Sine.easeInOut,delay:.5*i})
	};
	jumpBtn=new Sprite(getTe(_CDN+"img/btn_jump.png"));
	gameSea.addChild(jumpBtn)
	jumpBtn.y=stageH/2+300*stageH/1000
}


var nowRound=0
function setWave(){
	//setInterval(ifaddWave,1000)
	addWave(6,nowRound)
}
var level=0
var levelA=[.1,.15,.25,.35,1]
function ifaddWave(){
	if(Math.random()<levelA[level]){
		//addWave()
	}
	//addWave(6)
}
var waveA=[]
function addWave(_t,_nowRound,_ifBig){
	if(_nowRound==nowRound){

		var _wave=new PIXI.Container()
		var _wavePic1=new Sprite(getTe(_CDN+"img/l1.png"));
		var _wavePic1b=new Sprite(getTe(_CDN+"img/l1b.png"));
		var _wavePic2=new Sprite(getTe(_CDN+"img/l2.png"));
		gameStage.addChild(_wave)
		_wave.addChild(_wavePic2,_wavePic1,_wavePic1b)
		var nextT=6-Math.random()*2
		if(_ifBig=="big"){
			nextT=6
		}
		_wave.x=640
		_wave.y=stageH/2+180+308*(6-nextT)/6

		_wave.pivot.y=308

		TweenMax.to(_wave,6,{x:-_wave.width,ease:Linear.easeNone})
		TweenMax.to(_wave,1,{y:"+=50",repeat:10000,yoyo:true,ease:Sine.easeInOut})
		TweenMax.to(_wave.scale,1.5,{y:1.02,repeat:10000,yoyo:true,ease:Sine.easeInOut})
		TweenMax.to(_wave.skew,1.5,{x:.3,repeat:10000,yoyo:true,ease:Sine.easeInOut})
		setTimeout(function(){addWave(nextT,_nowRound)},nextT*1000)
		waveA.push(_wave)

		TweenMax.to(_wavePic1b,.5,{alpha:0,repeat:100000,yoyo:true,repeatDelay:.2})

	}
}

var playerC=new PIXI.Container()
var playerPic
var firstWave
var nowWave=[]
function setPlayer(){
	gamePlayer.addChild(playerC)
	if(sex==1){
		playerPic=new Sprite(getTe(_CDN+"img/player2.png"));
	}else{
		playerPic=new Sprite(getTe(_CDN+"img/player1.png"));
	}
	playerC.addChild(playerPic)
	playerC.pivot.set(70.5,80.5)
	playerC.position.set(168,stageH/2-131)

	firstWave=new PIXI.Container()
	var _wavePic1=new Sprite(getTe(_CDN+"img/l1.png"));
	var _wavePic2=new Sprite(getTe(_CDN+"img/l2.png"));
	firstWave.addChild(_wavePic2,_wavePic1)
	gameStage.addChild(firstWave)
	firstWave.pivot.y=308
	firstWave.position.set(0,stageH/2+180)
	TweenMax.to(firstWave.scale,1.5,{y:1.02,repeat:10000,yoyo:true,ease:Sine.easeInOut})
	TweenMax.to(firstWave.skew,1.5,{x:.3,repeat:10000,yoyo:true,ease:Sine.easeInOut})
	nowWave=[firstWave]
	TweenMax.to(nowWave[0],6,{y:stageH/2+180+308,ease:Linear.easeNone})
	playerPic.pivot.set(71,116)
	playerPic.position.set(71,116)
	TweenMax.to(playerPic,.6,{y:"+=20",repeat:1000000,yoyo:true,ease:Sine.easeInOut})
}

function setJump(){
	pStage.interactive=true
	pStage.touchstart=goJump
}
var jumpCount=0
function goJump(){
	if(jumpCount<2){
		playerV=16
		playerPic.rotation=-30*Math.PI/180
		TweenMax.to(playerPic,1.5,{rotation:0,ease:Back.easeOut})
		jumpCount++
		//ifJump=1
	}else{
		console.log("不跳")
	}
	console.log("jumpCount",jumpCount)
	
}

var item=new PIXI.Container()
var itemPic
function setItem(){
	itemPic=new Sprite(getTe(_CDN+"img/item.png"));
	gamePlayer.addChild(item)
	item.addChild(itemPic)
	item.pivot.set(28,24)
	item.position.set(640+50,stageH/2-300+Math.random()*50-25)
	TweenMax.to(item,6,{x:-50,ease:Linear.easeNone,onComplete:resetItem})
}
function resetItem(){
	TweenMax.set(item.scale,{x:1,y:1})
	TweenMax.set(item,{alpha:1,rotation:0})
	item.position.set(640+50,stageH/2-300+Math.random()*50-25)
	TweenMax.to(item,6,{x:-50,ease:Linear.easeNone,onComplete:resetItem,delay:Math.random()*5})
}
var score=0
var scoreNum=0
var scoreT=new PIXI.Text("score : 000000",{
	fontSize:35,
	fill: '#ffffff',
	stroke: '#333333',
  strokeThickness: 6
})
function setScore(){
	gamePlayer.addChild(scoreT)
	scoreT.y=40
}


function gameRestart(){
	nowRound++
	playerC.visible=true
	// if(sex==1){
	// 	playerPic=new Sprite(getTe(_CDN+"img/player2.png"));
	// }else{
	// 	playerPic=new Sprite(getTe(_CDN+"img/player1.png"));
	// }
	//playerC.addChild(playerPic)
	//playerC.pivot.set(70.5,80.5)
	playerC.position.set(168,stageH/2-131)

	firstWave=new PIXI.Container()
	var _wavePic1=new Sprite(getTe(_CDN+"img/l1.png"));
	var _wavePic2=new Sprite(getTe(_CDN+"img/l2.png"));
	firstWave.addChild(_wavePic2,_wavePic1)
	gameStage.addChild(firstWave)
	firstWave.pivot.y=308
	firstWave.position.set(0,stageH/2+180)
	TweenMax.to(firstWave.scale,1.5,{y:1.02,repeat:10000,yoyo:true,ease:Sine.easeInOut})
	TweenMax.to(firstWave.skew,1.5,{x:.3,repeat:10000,yoyo:true,ease:Sine.easeInOut})
	nowWave=[firstWave]
	TweenMax.to(nowWave[0],6,{y:stageH/2+180+308,ease:Linear.easeNone})
	// playerPic.pivot.set(71,116)
	// playerPic.position.set(71,116)
	// TweenMax.to(playerPic,.6,{y:"+=20",repeat:1000000,yoyo:true,ease:Sine.easeInOut})
	ticker.start()
	for (var i = 0; i < waveA.length ; i++) {
		gameStage.removeChild(waveA[i])
		TweenMax.killTweensOf(waveA[i])
	};
	waveA=[firstWave]
	jumpCount=0
	addWave(6,nowRound,"big")
	timeScore=0
	score=0
}

