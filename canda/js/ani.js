////////////////////////////////////////////////////////////////////////  第一页
var cat1,cat2
function setP1cat(){
	cat1=new Sprite(getTe(_CDN+"img/cat1.png"));
	cat2=new Sprite(getTe(_CDN+"img/cat2.png"));
	cat2.pivot.y=116
	cat2.y=116
	p1catC.addChild(cat2,cat1)
	p1catC.y=stageH/2+396
	TweenMax.to(cat2.scale,1.2,{y:1.1,repeat:10000,yoyo:true,repeatDelay:.2})
}
var board1,board2,board3,board4
function setP1board(){
	board1=new Sprite(getTe(_CDN+"img/p1board1.png"));
	board2=new Sprite(getTe(_CDN+"img/p1board2.png"));
	board3=new Sprite(getTe(_CDN+"img/p1board3.png"));
	board4=new Sprite(getTe(_CDN+"img/p1board4.png"));

	p1boardC.addChild(board1,board2,board3,board4)
	p1boardC.y=stageH/2-521
	board2.alpha=0.5
	TweenMax.to(board3,1,{alpha:0,repeat:10000,yoyo:true,repeatDelay:0,delay:1,ease:Linear.easeNone})
	TweenMax.to(board4,1,{alpha:0,repeat:10000,yoyo:true,repeatDelay:0,delay:0,ease:Linear.easeNone})

}
var p1logo
function setLogo(){
	p1logo=new Sprite(getTe(_CDN+"img/p1logo.png"));
	p1logo2=new Sprite(getTe(_CDN+"img/p1logo.png"));
	p1logo2.blendMode=_ADD
	p1logoC.addChild(p1logo,p1logo2)
	p1logo2.alpha=0//.1
	TweenMax.to(p1logo2,.1,{alpha:0,repeat:100000})
	p1logoC.y=stageH/2-287
}
var p1t,p1hand
function setP1hint(){
	p1t=new Sprite(getTe(_CDN+"img/p1t.png"));
	p1hand=new Sprite(getTe(_CDN+"img/p1hand.png"));

	p1hintC.addChild(p1t,p1hand)
	p1hintC.y=stageH/2+7
	p1hand.pivot.set(169.5,27.5)
	p1hand.position.set(169.5,27.5)
	p1hand.scale.x=p1hand.scale.y=1.2
	p1hand.alpha=0.5
	TweenMax.to(p1hand.scale,.6,{x:.8,y:.8,repeat:10000,yoyo:true})
	TweenMax.to(p1hand,.6,{alpha:1,repeat:10000,yoyo:true})
}


////////////////////////////////////////////////////////////////////////  第二页
var mainPage=new PIXI.Container()
var bigbg
var bigbgC=new PIXI.Container()
var bgup=new PIXI.Graphics()
var bgdown=new PIXI.Graphics()
function setMain(){
	pStage.addChildAt(mainPage,0)

	bigbg=new Sprite(getTe(_CDN+"img/bigbg.jpg"));
	
	bigbgC.addChild(bigbg)
	bigbgC.pivot.y=750
	bigbgC.y=stageH/2

	bgup.beginFill(0xd27f0f)
	bgup.drawRect(0,0,640,stageH/2)
	bgdown.beginFill(0x735d3e)
	bgdown.drawRect(0,stageH/2,640,stageH/2)

	mainPage.addChild(bgup,bgdown,bigbgC)
}

function go1(){
	setDownBar()
	TweenMax.to(bigbgC.pivot,3,{x:630,ease:Sine.easeInOut,delay:1.5,onComplete:function(){
		setTimeout(function(){
			main.shop(1)
		},666)
	}})
}

function go2(_step,_picUrl){
	console.log("_step",_step)
	//setItem(_step,_picUrl)
	if(_step==1){
		TweenMax.to(bigbgC.pivot,4,{x:1851,ease:Sine.easeInOut,onComplete:function(){
			
			setTimeout(function(){
				main.shop(2)
			},666)
		}})
	}
	if(_step==2){
		TweenMax.to(bigbgC.pivot,3,{x:2435,ease:Sine.easeInOut,onComplete:function(){
			setTimeout(function(){
				main.shop(3)
			},666)
		}})
	}
	if(_step==3){
		TweenMax.to(bigbgC.pivot,4,{x:3181,ease:Sine.easeInOut,onComplete:function(){
			setTimeout(function(){
				main.shop(4)
			},666)
		}})
	}
	if(_step==4){
		TweenMax.to(bigbgC.pivot,4,{x:3993,ease:Sine.easeInOut,onComplete:function(){
			
			console.log("musicList")
			setTimeout(function(){
				main.musicList()
			},666)
		}})
	}
}
////////////////////////////////////////////////////////////////////////   UGC
var pageEnd=new PIXI.Container()
var endBG
var endTC=new PIXI.Container()
var endTA=[]
var endLogoC=new PIXI.Container()
var endLogo1,endLogo2
var qr


function goEnd(_result){
	console.log("goEnd")
	pStage.addChild(pageEnd)
	endBG=new Sprite(getTe(_CDN+"img/endbg.jpg"))
	endBG.y=stageH/2-750




	p1boardC.y+=20

	var endt1=new Sprite(getTe(_CDN+"img/t1.png"))
	var endt2=new Sprite(getTe(_CDN+"img/t2.png"))
	var endt3=new Sprite(getTe(_CDN+"img/t3.png"))
	var endt4=new Sprite(getTe(_CDN+"img/t4.png"))

	endTA=[endt1,endt2,endt3,endt4]

	for (var i = 0; i < 4; i++) {
		endTC.addChild(endTA[i])
		if(_result-1==i){
			endTA[i].visible=true
		}else{
			endTA[i].visible=false
		}
	};

	endTC.y=stageH/2-191

	endLogo1=new Sprite(getTe(_CDN+"img/endlogo.png"))
	endLogo2=new Sprite(getTe(_CDN+"img/endlogo.png"))

	endLogo2.blendMode=_ADD
	endLogoC.addChild(endLogo1,endLogo2)
	endLogo2.alpha=0//.1
	TweenMax.to(endLogo2,.1,{alpha:0,repeat:100000})

	endLogoC.y=stageH/2-246


	qr=new Sprite(getTe(_CDN+"img/qr.png"))
	qr.y=stageH-186
	for (i = 0; i < 4; i++) {
		itemA[i].scale.x=itemA[i].scale.y=.6
		itemA[i].pivot.set(0,0)
	};

	itemA[2].scale.x=itemA[2].scale.y=itemA[3].scale.x=itemA[3].scale.y=.5

	itemA[0].position.set(292,stageH/2-14)
	itemA[1].position.set(422,stageH/2-14)
	itemA[2].position.set(292,stageH/2+118)
	itemA[3].position.set(422,stageH/2+118)

	// itemA[0].position.set(292,750-14)
	// itemA[1].position.set(422,750-14)
	// itemA[2].position.set(292,750+114)
	// itemA[3].position.set(422,750+114)

	pageEnd.addChild(endBG,p1boardC,endTC,endLogoC,qr,itemA[0],itemA[1],itemA[2],itemA[3])

	pageEnd.pivot.set(320,stageH/2)
	pageEnd.position.set(320,stageH/2)

	TweenMax.from(pageEnd,.5,{alpha:0})
	TweenMax.from(pageEnd.scale,.5,{x:4,y:4})

	TweenMax.to(bigbgC.scale,.5,{x:.5,y:.5})
	qr.visible=false

}

function goFinal2(){
	qr.visible=true
}

function shareDone(){
	qr.visible=false
}

////////////////////////////////////////////////////////////////////////   底条

var downBarC=new PIXI.Container()
var downBag,downBubble,downCube1,downCube2,downCube3,downCube4
var cubeA=[]
var itemC=new PIXI.Container()
function setDownBar(){
	mainPage.addChild(downBarC)
	downBarC.y=stageH-180


	downBag=new Sprite(getTe(_CDN+"img/down_bag.png"));
	downBubble=new Sprite(getTe(_CDN+"img/down_bubble.png"));
	downCube1=new Sprite(getTe(_CDN+"img/down_cube.png"));
	downCube2=new Sprite(getTe(_CDN+"img/down_cube.png"));
	downCube3=new Sprite(getTe(_CDN+"img/down_cube.png"));
	downCube4=new Sprite(getTe(_CDN+"img/down_cube.png"));

	downBubble.pivot.set(128,90)
	downBubble.position.set(128,90)

	downBarC.addChild(downBag,downBubble,downCube1,downCube2,downCube3,downCube4,itemC)
	cubeA=[downCube1,downCube2,downCube3,downCube4]
	for (var i = 0; i < 4; i++) {
		cubeA[i].pivot.set(45,41.5)
		cubeA[i].position.set(232.5+105*i,81)
	};
	showDownBar()
}

function showDownBar(){/////==============================底部条出现
	TweenMax.from(downBag,.5,{y:180,ease:Back.easeOut})

	TweenMax.from(downBubble.scale,1.5,{x:0,y:0,ease:Elastic.easeOut,delay:.3})

	for (var i = 0; i < 4; i++) {
		TweenMax.from(cubeA[i],.5,{alpha:0,delay:.5+i*.03})
		TweenMax.from(cubeA[i].scale,2,{x:0.5,y:0.5,ease:Elastic.easeOut,delay:.5+i*.03})
	};

}


