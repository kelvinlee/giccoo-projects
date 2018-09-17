function setLoading(){
	var loadingStyle={
    fontSize: 28,
    fill: '#ffffff'
 	}
	loadingT=showT(loadingText,loadingStyle,55,"left",2,.2,100)
	pStage.addChild(loadingT)
	setCenter([loadingT])
	hideT(loadingT,4)
	setTimeout(setHint,4000)
}

///////////////////////////////////////////////////////////////////////////////////////////========提示打开音乐页
var hintT1,hintT2,hintArrow,player,playerDic,playerNeedle,flyer
var hint=new PIXI.Container()
var playerC=new PIXI.Container()
var alphaBtn
function setHint(){
	hintT1=new Sprite(getTe(_CDN+"img/hint-t1.png"))
	hintT2=new Sprite(getTe(_CDN+"img/hint-t2.png"))
	hintArrow=new Sprite(getTe(_CDN+"img/hint-arrow.png"))
	player=new Sprite(getTe(_CDN+"img/player.png"))
	playerNeedle=new Sprite(getTe(_CDN+"img/player-needle.png"))
	playerDic=new Sprite(getTe(_CDN+"img/player-dic.png"))
	flyer=new Sprite(getTe(_CDN+"img/flyer.png"))

	pStage.addChild(hint)
	hint.addChild(hintT1,hintT2,hintArrow,playerC,flyer)
	playerC.addChild(player,playerDic,playerNeedle)
	setCenter(hintT1,hintT2,hintArrow)

	alphaBtn=new Sprite(getTe(_CDN+"img/alpha.png"))
	pStage.addChild(alphaBtn)
	goHint()
}

function goHint(){
	hint.x=0
	player.position.set(230,stageH/2-185)
	playerNeedle.pivot.set(132,177)
	playerNeedle.position.set(230+132,stageH/2-185+177)
	playerDic.pivot.set(89,87)
	playerDic.position.set(230+89,stageH/2-185+87)
	TweenMax.to(playerDic,.5,{rotation:Math.PI*2,repeat:10000,ease:Linear.easeNone})
	flyer.pivot.set(32.5,48.5)
	flyer.position.set(320,stageH/2+175)
	TweenMax.set(playerNeedle,{rotation:-30*Math.PI/180})

	TweenMax.to(fps,2,{alpha:1})
	fps.x=160
	bgMove.play()

	showGroup([hintT1,playerC,hintT2,hintArrow,flyer])
	player.interactive=true
	player.touchstart=playBgm
	playerDic.visible=false

	alphaBtn.width=640
	alphaBtn.height=stageH/4
	alphaBtn.position.set(0,3/4*stageH)
	alphaBtn.alpha=0
	alphaBtn.interactive=true
	alphaBtn.touchstart=goPage0
}

function playBgm(){
	console.log("playBGM")
	TweenMax.to(playerNeedle,1,{rotation:-0*Math.PI/180})
	setTimeout(function(){playerDic.visible=true},800)
}


///////////////////////////////////////////////////////////////////////////////////////////========首页
var lampC=new PIXI.Container()
var page0=new PIXI.Container()
var lamp,lampLight,p0pic1,p0pic2
function setPage0(){
	lamp=new Sprite(getTe(_CDN+"img/lamp.png"))
	lampLight=new Sprite(getTe(_CDN+"img/lamp-light.png"))
	lampLight.blendMode=_ADD
	lampLight.alpha=0
	pStage.addChild(page0)
	lampC.addChild(lamp,lampLight)
	lampC.pivot.set(167.5,500)
	lampC.y=stageH/2
	lampC.x=320

	p0pic1=new Sprite(getTe(_CDN+"img/p0pic1.png"))
	p0pic2=new Sprite(getTe(_CDN+"img/p0pic2.png"))
	page0.addChild(p0pic1,p0pic2,lampC)
	page0.visible=false
}


function goPage0(){
	alphaBtn.interactive=false
	alphaBtn.touchstart=hidePage0
	TweenMax.to(hint,2,{x:-640,ease:Linear.easeNone})
	page0.visible=true
	page0.x=640
	TweenMax.from(lampC,2,{x:"+=200",ease:Linear.easeNone})
	TweenMax.from(p0pic2,2,{x:"+=50",ease:Linear.easeNone})
	TweenMax.to(page0,2,{x:0,ease:Linear.easeNone,onComplete:function(){
		bgMove.pause()
		lampLight.alpha=0.8
		TweenMax.to(lampLight,.5,{alpha:1,repeat:1000,yoyo:true})
		fpPause()
		TweenMax.to(fps,.6,{alpha:0,repeat:10000,yoyo:true})
		alphaBtn.interactive=true
	}})
}
///////////////////////////////////////////////////////////////////////////////////////////========p1
var pic1,pic2,pic3,pic4,pic5
var picA
var pic12345=new PIXI.Container()
function setPage12345(){
	pic1=new Sprite(getTe(_CDN+"img/pic1.jpg"))
	pic2=new Sprite(getTe(_CDN+"img/pic2.jpg"))
	pic3=new Sprite(getTe(_CDN+"img/pic3.jpg"))
	pic4=new Sprite(getTe(_CDN+"img/pic4.jpg"))
	pic5=new Sprite(getTe(_CDN+"img/pic5.jpg"))
	picA=[pic1,pic2,pic3,pic4,pic5]
	pic12345.addChild(pic1,pic2,pic3,pic4,pic5)
	pic1.pivot.x=234.5
	pic2.pivot.x=173
	pic3.pivot.x=175.5
	pic4.pivot.x=190
	pic5.pivot.x=237.5
	pic1.x=pic2.x=pic3.x=pic4.x=pic5.x=320
	pic1.y=stageH/2-255
	pic2.y=stageH/2-374
	pic3.y=stageH/2-276
	pic4.y=stageH/2-369
	pic5.y=stageH/2-309
	pStage.addChild(pic12345)

	pic1.y=stageH/2-255
	pic2.y=stageH/2-374
	pic3.y=stageH/2-276
	pic4.y=stageH/2-369
	pic5.y=stageH/2-309

	for (var i = 0; i <picA.length; i++) {
		picA[i].visible=false
	};

}

function addNewLamp(){
	var lampC=new PIXI.Container()
	var lamp=new Sprite(getTe(_CDN+"img/lamp.png"))
	var lampLight=new Sprite(getTe(_CDN+"img/lamp-light.png"))
	lampLight.blendMode=_ADD
	lampLight.alpha=0
	lampC.addChild(lamp,lampLight)
	lampC.pivot.set(167.5,500)
	lampC.y=stageH/2
	lampC.x=320
	return(lampC)
}


var if13=0
function goPage1(){
	alphaBtn.interactive=false
	if(Math.random()>.5){
		if13=0
	}else{
		if13=2
	}
	for (var i = 0; i <picA.length; i++) {
		picA[i].visible=false
	};
	picA[if13].visible=true
	pic12345.x=640
	var aLamp=addNewLamp()
	pStage.addChild(aLamp)
	aLamp.x=320+640+200
	TweenMax.to(aLamp,4,{x:320,ease:Linear.easeNone})
	TweenMax.to(pic12345,4,{x:0,ease:Linear.easeNone,onComplete:function(){
		bgMove.pause()
		// lampLight.alpha=0.8
		// TweenMax.to(lampLight,.5,{alpha:1,repeat:1000,yoyo:true})
		fpPause()
		TweenMax.set(fps,{alpha:1})
		TweenMax.to(fps,.6,{alpha:0,repeat:10000,yoyo:true})
	}})
}

function hidePage0(){
	bgMove.play()
	TweenMax.to(page0,2,{x:-640,ease:Linear.easeNone})
	TweenMax.to(lampC,2,{x:"-=200",ease:Linear.easeNone})
	TweenMax.to(p0pic2,2,{x:"-=50",ease:Linear.easeNone})
	fpPlay()
	TweenMax.set(fps,{alpha:1})
	goPage1()
}