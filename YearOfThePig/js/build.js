var _CDN = "./";
// var _CDN = "//image.giccoo.com/projects/YearOfThePig/";
var imageList = [
	_CDN+"img/endbg.png",
	_CDN+"img/endpig.png",
	_CDN+"img/endeyebow.png",
	_CDN+"img/endtitle.png",
	_CDN+"img/scorll_l.png",
	_CDN+"img/scorll.png",
	_CDN+"img/scorllt1.png",
	_CDN+"img/scorllt2.png",
	_CDN+"img/scorllt3.png",
	_CDN+"img/scorllt4.png",
	_CDN+"img/scorllt5.png",
	_CDN+"img/scorllt6.png",
	_CDN+"img/scorllt7.png",
	_CDN+"img/scorllt8.png",

	_CDN+"img/ink1.png",
	_CDN+"img/ink2.png",
	_CDN+"img/qr.png",

]
var pStage,stageH
var buildUGC = function () {
	console.log("app",this,this.opts.w,this.opts.h)
	//this.stage.addChild(new Spr(_CDN+"img/endbg.png"))
	pStage=this.stage
	stageH=this.opts.h
	//pixiStart()
}
function pixiStart(){
	
	setBG()
	setPig()
	setScorll()
	setQR()

	setTimeout(openScorll,2000)
	setTimeout(showTitle,10)
	TweenMax.from(pigC,1.6,{y:stageH/5,ease:Bounce.easeOut,delay:1.5})
	TweenMax.from(pigC,.5,{alpha:0,delay:1.5})
	
}

var bgC=new PIXI.Container()
var bgTC=new PIXI.Container()
var inkC=new PIXI.Container()
var bgTMask

var ink1,ink2,ink3,ink4,ink5,ink6,endbg
function setBG(){
	pStage.addChild(bgC)
	endbg=new Spr(_CDN+"img/endbg.png")
	bgC.addChild(endbg,bgTC)
	bgTMask=new Spr(_CDN+"img/endtitle.png")
	TweenMax.from(endbg,2,{alpha:0})


	bgTC.addChild(inkC,bgTMask)
	bgTC.pivot.set(375,166)
	bgTC.position.set(375,stageH/2-343)

	ink1=new Spr(_CDN+"img/ink1.png")
	ink2=new Spr(_CDN+"img/ink2.png")
	ink3=new Spr(_CDN+"img/ink1.png")
	ink4=new Spr(_CDN+"img/ink2.png")
	ink5=new Spr(_CDN+"img/ink1.png")
	ink6=new Spr(_CDN+"img/ink2.png")

	inkC.addChild(ink1,ink2,ink3,ink4,ink5,ink6)

	ink1.pivot.x=ink3.pivot.x=ink5.pivot.x=649/2
	ink1.pivot.y=ink3.pivot.y=ink5.pivot.y=753/2

	ink2.pivot.x=ink4.pivot.x=ink6.pivot.x=400/2
	ink2.pivot.y=ink4.pivot.y=ink6.pivot.y=411/2

	ink1.scale.x=ink1.scale.y=ink2.scale.x=ink2.scale.y=ink3.scale.x=ink3.scale.y=ink4.scale.x=ink4.scale.y=ink5.scale.x=ink5.scale.y=ink6.scale.x=ink6.scale.y=0

	ink1.position.set(260-300,161-300)
	ink2.position.set(260,191-300)

	ink3.position.set(388,200+300)
	ink4.position.set(408,210+300)

	ink5.position.set(536+300,88-300)
	ink6.position.set(536,120-300)

	//ink1.blendMode=ink2.blendMode=ink3.blendMode=ink4.blendMode=ink5.blendMode=ink6.blendMode=PIXI.BLEND_MODES.MULTIPLY

	inkC.mask=bgTMask
	//inkC.blendMode=PIXI.BLEND_MODES.MULTIPLY
	//showTitle()
}

function showTitle(){
	var inkA=[ink4,ink3,ink2,ink1,ink6,ink5]
	for (var i = 0; i < 6; i++) {
		TweenMax.from(inkA[i],1.5,{alpha:0,delay:i*.05})
		TweenMax.to(inkA[i].scale,2,{x:1.9,y:1.9,delay:i*.05})
	};
}

//======猪
var pigC=new PIXI.Container()
var endPig,endEyebow
function setPig(){
	pStage.addChild(pigC)
	pigC.position.set(375,stageH/2+45)

	endPig=new Spr(_CDN+"img/endpig.png")
	endEyebow=new Spr(_CDN+"img/endeyebow.png")

	endPig.pivot.set(375,270.5)
	endEyebow.pivot.set(375,270.5)

	pigC.addChild(endPig,endEyebow)
}
function moveEndPig(){
	TweenMax.set(endPig, {rotation:-Math.PI/180*12,x:-50})
	TweenMax.to(endPig,1,{rotation:Math.PI/180*12,x:50,repeat:100000,yoyo:true,ease:Sine.easeInOut})

	TweenMax.set(endPig, {y:-20})
	TweenMax.to(endPig,0.5,{y:10,repeat:100000,yoyo:true,ease:Sine.easeInOut})

	TweenMax.set(endEyebow, {rotation:-Math.PI/180*12,x:-50})
	TweenMax.to(endEyebow,1,{rotation:Math.PI/180*12,x:50,repeat:100000,yoyo:true,ease:Sine.easeInOut,delay:.02})

	TweenMax.set(endEyebow, {y:-25})
	TweenMax.to(endEyebow,0.5,{y:15,repeat:100000,yoyo:true,ease:Sine.easeInOut,delay:.02})

	TweenMax.set(scorllC, {rotation:-Math.PI/180*2,x:-20})
	TweenMax.to(scorllC,1,{rotation:Math.PI/180*2,x:20,repeat:100000,yoyo:true,ease:Sine.easeInOut,delay:.1})

	TweenMax.set(scorllC, {y:16})
	TweenMax.to(scorllC,0.5,{y:56,repeat:100000,yoyo:true,ease:Sine.easeInOut,delay:.1})
}


//======卷轴
var scorllC=new PIXI.Container()
var scorllL,scorllR,scorllBG,scorllT,scorllMain,scorllMask
function setScorll(){
	pigC.addChild(scorllC)
	scorllC.position.set(0,55)

	scorllMain=new PIXI.Container()
	scorllBG=new Spr(_CDN+"img/scorll.png")
	scorllT=new Spr(_CDN+"img/scorllt"+parseInt(Math.random()*8+1)+".png")
	scorllMain.addChild(scorllBG,scorllT)
	scorllMain.pivot.set(235,89)

	scorllMask=new PIXI.Graphics()
	scorllMask.beginFill(0xffffff)
	scorllMask.drawRect(0,0,470,178)
	scorllMask.pivot.set(235,89)

	scorllL=new Spr(_CDN+"img/scorll_l.png")
	scorllR=new Spr(_CDN+"img/scorll_l.png")
	scorllL.pivot.set(70,122)
	scorllR.pivot.set(70,122)
	scorllR.scale.x=-1

	scorllC.addChild(scorllMain,scorllMask,scorllL,scorllR)

	scorllMain.mask=scorllMask
	scorllMask.scale.x=0

	moveEndPig()
	//openScorll()
}

function openScorll(){
	TweenMax.to(scorllMask.scale,1.2,{x:1,ease:Back.easeOut})
	TweenMax.to(scorllL,1.2,{x:-215,ease:Back.easeOut})
	TweenMax.to(scorllR,1.2,{x:215,ease:Back.easeOut})
}


//=====完成
var QR
function setQR(){
	QR=new Spr(_CDN+"img/qr.png") 
	pStage.addChild(QR)
	QR.y=stageH-199
	//QR.visible=false
}
function showQR(){
	QR.visible=true
}

function shareDone(){
	QR.visible=false
}













