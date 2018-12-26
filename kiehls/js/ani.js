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
function setBG(){
	bg=new Sprite(getTe(_CDN+"img/bgc.png"));
	gameBG.addChild(bg)
	bg.y=stageH/2-750
}


function setSea(){
	for (var i = 0; i < 3; i++) {
		var j=i+1
		var _wave=new Sprite(getTe(_CDN+"img/wave"+j+".png"));
		gameSea.addChild(_wave)
		_wave.y=stageH/2-750+40*(i)

		TweenMax.to(_wave,4-1*i,{x:-966,repeat:100000,ease:Linear.easeNone})
		TweenMax.to(_wave,1.5,{y:stageH/2-750,repeat:100000,yoyo:true,ease:Sine.easeInOut,delay:.5*i})
	};
}