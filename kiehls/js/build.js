var _CDN = "./";
// var _CDN = "//image.giccoo.com/projects/emoji/";
var imageList = [
	_CDN+"img/startboy.png",
	_CDN+"img/startgirl.png",

	_CDN+"img/hint1.png",
	_CDN+"img/hint2.png",
	_CDN+"img/hint3.png",
	_CDN+"img/hint4.png",

	_CDN+"img/startbtn.png",

	_CDN+"img/bgc.png",

	_CDN+"img/wave1.png",
	_CDN+"img/wave2.png",
	_CDN+"img/wave3.png",
	_CDN+"img/wave4.png",

	_CDN+"img/pic1.png",
	_CDN+"img/pic2.png",
	_CDN+"img/pic3.png",
	_CDN+"img/pic4.png",
	_CDN+"img/pic5.png",
	_CDN+"img/pic6.png",
	_CDN+"img/pic7.png",

	_CDN+"img/cloud1.png",
	_CDN+"img/cloud2.png",
	_CDN+"img/cloud3.png",

	_CDN+"img/l1.png",
	_CDN+"img/l1b.png",
	_CDN+"img/l2.png",

	_CDN+"img/player1.png",
	_CDN+"img/player2.png",

	_CDN+"img/item.png",
	_CDN+"img/btn_jump.png",

];
var _NORMAL=PIXI.BLEND_MODES.NORMAL,
    _ADD=PIXI.BLEND_MODES.ADD,
    _MULTIPLY=PIXI.BLEND_MODES.MULTIPLY,
    _SCREEN=PIXI.BLEND_MODES.SCREEN;

var pStage,pApp,bg
var stageH
var theThis
var u = navigator.userAgent
var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1

var renderer
var buildUGC = function () {
	console.log("app",this,this.opts.w,this.opts.h)
	// var test = new Sprite(getTe(_CDN+"img/test.png"));
	// var gra = new Graphics();
	// var con = new Container();
	// var ani = new AnimatedSprite();
	stageH=this.opts.h
	pStage=this.stage
	gameBegin(1)
}

var sex=0

function gameBegin(_sex){//1男 2女
	sex=_sex
	console.log("?111")
	setHintPage()
}
const ticker=new PIXI.ticker.Ticker()
function setTicker(){
	ticker.add(pageLoop)
	ticker.start()
}
var ifJump=0
var playerV=0
var _G=.45//9.8/60
var timeScore=0

function pageLoop(){
	playerC.y-=playerV
	playerV-=_G

	for (var i = 0; i < waveA.length; i++) {
		if(playerC.x>=waveA[i].x+80-40	&&	playerC.x<=waveA[i].x+364-20	&&	playerC.y<=waveA[i].y-308+20	&&	playerC.y>=waveA[i].y-308-40 && playerV<=0){
			console.log("跳上了")
			//scoreNum+=50
			TweenMax.to(nowWave[0],1,{x:-nowWave[0].width,y:stageH/2+180+308,ease:Linear.easeNone})
			nowWave[0]=waveA[i]
			TweenMax.killTweensOf(nowWave[0])
			var nextT=6*(stageH/2+180+308-nowWave[0].y)/308
			var _x="-="+100*(stageH/2+180+308-nowWave[0].y)/308
			TweenMax.to(nowWave[0],nextT,{x:_x,y:stageH/2+180+308,ease:Linear.easeNone})
			jumpCount=0
			//ifJump=0
		}else{

		}
	};

	if(playerC.y>=nowWave[0].y-308){
		playerC.y=nowWave[0].y-308
	}

	if(playerC.x-item.x<=80&&playerC.x-item.x>=-80&&playerC.y-item.y<=70&&playerC.y-item.y>=-70&&item.alpha==1){
		console.log("加分")
		scoreNum+=200
		TweenMax.to(item.scale,.5,{x:.5,y:.5})
		TweenMax.to(item,.5,{y:"-=50",alpha:0,rotation:Math.PI/180*135})
	}

	//console.log(playerC.y,stageH/2+180+308-50)
	


	//scoreNum+=0.1
	timeScore=(new Date().getTime()-date.getTime())/1000*5
	score=Math.floor(scoreNum+timeScore)
	scoreT.x=640-50-scoreT.width
	scoreT.text="score : "+score


	if(playerC.y>stageH/2+180-50){
		playerC.visible=false
		console.log("输了")
		// alert("输了")
		ticker.stop()
		main.endGame(score,new Date().getTime()-date.getTime())

		//gameRestart()
	}
}
