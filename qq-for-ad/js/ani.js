var mainC=new PIXI.Container()
var logo,arrow
var bgC=new PIXI.Container()
function setPage1 () {
	// body...
	pStage.addChild(mainC)
	

	mainC.addChild(bgC)
	

	
	setBG()
	// setTitle()
	// setDot()
	// setT()


	logo=new Sprite(getTe(_CDN+"img/logo1.png"));
	arrow=new Sprite(getTe(_CDN+"img/arrow1.png"));
	arrow.y=stageH-80
	TweenMax.from(arrow,1,{y:"+=30",repeat:100000,yoyo:true,ease:Sine.easeInOut})
	pStage.addChild(logo,arrow)

	pStage.interactive=true
	pStage.tap=goNext
}

function goOther(){
	setTitle()
	setDot()
	setT()
	pStage.addChild(logo,arrow)
}

function goNext(){
	pStage.pivot.set(320,stageH/2)
	pStage.position.set(320,stageH/2)
	TweenMax.to(pStage,.5,{alpha:0,onComplete:gogogo})
	TweenMax.to(pStage.scale,.5,{x:2,y:2,onComplete:gogogo})
}
function gogogo(){
	console.log("跳转")
	window.location.href = "#/list"
}

var bg
var bgBar1,bgBar2,bgBar3,bgBar4,bgBar5
function setBG(){
	bg=new Sprite(getTe(_CDN+"img/bgc.png"));
	
	bg.width=640
	bg.height=stageH

	bgBar1=new Sprite(getTe(_CDN+"img/bart1.png"));
	bgBar2=new Sprite(getTe(_CDN+"img/bart2.png"));
	bgBar3=new Sprite(getTe(_CDN+"img/bard1.png"));
	bgBar4=new Sprite(getTe(_CDN+"img/bard2.png"));
	bgBar5=new Sprite(getTe(_CDN+"img/bard3.png"));

	TweenMax.from(bg,1,{alpha:0,onComplete:goOther})

	bgC.addChild(bg,bgBar1,bgBar2,bgBar3,bgBar4,bgBar5)

	bgBar1.y=bgBar2.y=-50

	bgBar3.y=bgBar4.y=bgBar5.y=stageH+50-291

	// TweenMax.to(bgBar1,2,{y:0,repeat:100000,yoyo:true,ease:Sine.easeInOut})
	// TweenMax.to(bgBar2,2.2,{y:0,repeat:100000,yoyo:true,ease:Sine.easeInOut})

	TweenMax.to(bgBar1,.8,{alpha:0.1,repeat:100000,yoyo:true,ease:Sine.easeInOut})
	TweenMax.to(bgBar2,1.2,{alpha:0.1,repeat:100000,yoyo:true,ease:Sine.easeInOut})

	// TweenMax.to(bgBar3,2,{y:stageH-291,x:"+=50",repeat:100000,yoyo:true,ease:Sine.easeInOut})
	// TweenMax.to(bgBar4,2.2,{y:stageH-291,x:"+=50",repeat:100000,yoyo:true,ease:Sine.easeInOut})
	// TweenMax.to(bgBar5,2.4,{y:stageH-291,x:"+=50",repeat:100000,yoyo:true,ease:Sine.easeInOut})

	TweenMax.to(bgBar3,1,{alpha:0.1,repeat:100000,yoyo:true,ease:Sine.easeInOut})
	TweenMax.to(bgBar4,1.5,{alpha:0.1,repeat:100000,yoyo:true,ease:Sine.easeInOut})
	TweenMax.to(bgBar5,2,{alpha:0.1,repeat:100000,yoyo:true,ease:Sine.easeInOut})

}

var titleBar
var titleC=new PIXI.Container()
var titleTC=new PIXI.Container()
var titleA=[]
function setTitle(){
	pStage.addChild(titleC)
	titleBar=new Sprite(getTe(_CDN+"img/p1bar.png"));

	titleBar.pivot.set(320,1077/2+57)
	titleBar.position.set(320,stageH/2-207*stageH/1000)

	titleC.addChild(titleBar,titleTC)

	TweenMax.from(titleBar,2,{y:"-=500",ease:Elastic.easeOut})
	TweenMax.from(titleBar,1,{rotation:-Math.PI/180*45})
	TweenMax.from(titleBar.scale,1,{x:2,y:0})

	for (var i = 0; i < 14; i++) {
		var _title=new Sprite(getTe(_CDN+"img/title"+(i+1)+".png"));
		_title.pivot.set(320,132.5)
		_title.position.set(320,stageH/2-207*stageH/1000)
		titleTC.addChild(_title)
		titleA.push(_title)
		TweenMax.from(_title,1,{y:"+=100",ease:Back.easeOut,delay:.05*i})
		TweenMax.from(_title.scale,1,{x:0,y:0,delay:.05*i,ease:Back.easeOut})
		TweenMax.from(_title,.7,{alpha:0,delay:.05*i})
	};
}

var t1,t2,t3,t4,t5
var tC=new PIXI.Container()
function setT(){
	t1=new Sprite(getTe(_CDN+"img/t1.png"));
	t2=new Sprite(getTe(_CDN+"img/t2.png"));
	t3=new Sprite(getTe(_CDN+"img/t3.png"));
	t4=new Sprite(getTe(_CDN+"img/t4.png"));
	t5=new Sprite(getTe(_CDN+"img/t5.png"));
	pStage.addChild(tC)
	tC.addChild(t1,t2,t3,t4,t5)
	t1.pivot.set(320,45.5-33)
	t2.pivot.set(320,45.5)
	t3.pivot.set(320,45.5+33)

	t1.position.set(320,stageH/2+84*stageH/1000-33)
	t2.position.set(320,stageH/2+84*stageH/1000)
	t3.position.set(320,stageH/2+84*stageH/1000+33)

	t4.pivot.set(320,31)
	t5.pivot.set(320,31)

	t4.position.set(320,stageH/2+250*stageH/1000)
	t5.position.set(320,stageH/2+250*stageH/1000)

	TweenMax.from(t1,1,{y:"+=150",ease:Back.easeOut,delay:.1*0+1.0})
	TweenMax.from(t2,1,{y:"+=150",ease:Back.easeOut,delay:.1*1+1.0})
	TweenMax.from(t3,1,{y:"+=150",ease:Back.easeOut,delay:.1*2+1.0})
	TweenMax.from(t4,1,{y:"+=150",ease:Back.easeOut,delay:.1*3+1.0})
	TweenMax.from(t5,1,{y:"+=150",ease:Back.easeOut,delay:.1*4+1.0})

	TweenMax.from(t1,1,{alpha:0,delay:.1*0+1.0})
	TweenMax.from(t2,1,{alpha:0,delay:.1*1+1.0})
	TweenMax.from(t3,1,{alpha:0,delay:.1*2+1.0})
	TweenMax.from(t4,1,{alpha:0,delay:.1*3+1.0})
	TweenMax.from(t5,1,{alpha:0,delay:.1*4+1.0})

}

var dotA=[]
var dotC=new PIXI.Container()
var dotXYA
var dotSA=[.9,.3,.9,.3,.3]
function setDot(){
	pStage.addChild(dotC)
	dotXYA=[	[25,stageH/2+26]	,	[128,stageH/2-350*stageH/1000]	,	[621,stageH/2-340*stageH/1000]	,	[605,stageH/2+52]	,	[438,stageH/2+352*stageH/1000]]
	for (var i = 0; i < 5; i++) {
		addDot(dotXYA[i][0],dotXYA[i][1],dotSA[i],i)

	};
}

function addDot(_x,_y,_s,_i){
	var _dot=new PIXI.Graphics()
	_dot.beginFill(0xffca21)
	_dot.drawCircle(0,0,50)
	dotC.addChild(_dot)
	_dot.pivot.set(50,50)
	_dot.position.set(_x,_y)
	_dot.scale.x=_dot.scale.y=_s//Math.random()*Math.random()*Math.random()*.8+.2
	dotA.push(_dot)
	console.log("_X_Y",_x,_y)
	//var rScale=Math.random()*Math.random()*Math.random()*.8+.2
	// TweenMax.to(_dot.scale,Math.random()*1+1,{x:rScale,y:rScale,onComplete:dotAni,onCompleteParams:[_dot]})


	TweenMax.to(_dot.scale,2.5+_i*.05,{x:_dot.scale.x*.8,y:_dot.scale.y*.8,repeat:100000,yoyo:true,ease:Sine.easeInOut,delay:Math.random()*2.5})
	TweenMax.to(_dot,2+_i*.05,{y:"+=30",repeat:100000,yoyo:true,ease:Sine.easeInOut,delay:Math.random()*2.5})
	TweenMax.to(_dot,3+_i*.05,{x:"+=20",repeat:100000,yoyo:true,ease:Sine.easeInOut,delay:Math.random()*2.5})
	TweenMax.from(_dot,2+_i*.05,{alpha:0,delay:Math.random()*2.5})
	//TweenMax.to(_dot,4,{alpha:0.5,repeat:100000,yoyo:true,ease:Sine.easeInOut,delay:Math.random()*2.5})
}

function dotAni(_dot){
	var rScale=Math.random()*Math.random()*Math.random()*Math.random()*Math.random()*Math.random()*.8+.2
	TweenMax.to(_dot.scale,Math.random()*1+1,{x:rScale,y:rScale,onComplete:dotAni,onCompleteParams:[_dot]})
}
