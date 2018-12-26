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


function gameStart(){
	startBtn.interactive=false
	TweenMax.to(hintPage,.5,{alpha:0,onComplete:function(){
		hintPage.visible=false
	}})
	initAll()
}

var gameBG=new PIXI.Container()
var gameStage=new PIXI.Container()
var gameSea=new PIXI.Container()

function initAll(){
	pStage.addChild(gameBG,gameStage,gameSea)
	setBG()
	setSea()
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
function goCloud(){
	var j=parseInt(Math.random()*3)+1
	var _cloud=new Sprite(getTe(_CDN+"img/cloud"+j+".png"));
	gameBG.addChild(_cloud)
	cloudA.push(_cloud)

	_cloud.scale.x=_cloud.scale.y=Math.random()*Math.random()*.5+.3
	
	_cloud.pivot.set(177.5,73)
	_cloud.position.set(640+_cloud.width,stageH/2-350-_cloud.scale.y*200)

	if(Math.random()>.5){
		_cloud.scale.x*=-1
	}
	TweenMax.to(_cloud,6-_cloud.scale.y*2,{x:-_cloud.width,ease:Linear.easeNone,delay:Math.random()*2.5,onComplete:function(){
		_cloud.visible=false
		goCloud()
	}})
	//TweenMax.to(_cloud,2,{y:"+=50",repeat:10,yoyo:true,ease:Sine.easeInOut})

}


function setSea(){
	for (var i = 0; i < 3; i++) {
		var j=i+1
		var _wave=new Sprite(getTe(_CDN+"img/wave"+j+".png"));
		gameSea.addChild(_wave)
		_wave.y=stageH/2-750+60*(i-.2)

		TweenMax.to(_wave,3.5-1*i,{x:-_wave.width/2,repeat:100000,ease:Linear.easeNone})
		TweenMax.to(_wave,2,{y:stageH/2-750,repeat:100000,yoyo:true,ease:Sine.easeInOut,delay:.5*i})
	};
}