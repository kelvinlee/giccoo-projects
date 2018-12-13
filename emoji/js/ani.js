var bgC=new PIXI.Container()
var bgAll,bgUp,bgDown,p1logo
var p1C=new PIXI.Container()
function setPage1 () {
	// body...
	pStage.addChild(bgC)


	bgAll=new Sprite(getTe(_CDN+"img/p1bg.jpg"));
	bgUp=new Sprite(getTe(_CDN+"img/bg_top.png"));
	bgDown=new Sprite(getTe(_CDN+"img/bg_down.png"));

	p1logo=new Sprite(getTe(_CDN+"img/p1logo.png"));

	bgC.addChild(bgAll,bgUp,bgDown,p1C)
	p1C.addChild(p1logo)
	bgAll.y=stageH-1500
	bgUp.pivot.set(320,500)
	bgUp.position.set(320,500)

	bgDown.pivot.set(320,0)
	bgDown.position.set(320,stageH-500)

	setP1t()
	setP1line()
	showPage1()
	p1Loop()

}
var p1t1,p1t2,p1t3,p1t4,p1t4a,p1t4b,p1t4c,p1t4d,p1t1a,p1t1b,p1t5a,p1t5b
var p1tC=new PIXI.Container()
function setP1t(){
	p1t1=new PIXI.Container()
	p1t1a=new Sprite(getTe(_CDN+"img/p1t1.png"));
	p1t1b=new Sprite(getTe(_CDN+"img/p1t1.png"));
	p1t1.addChild(p1t1a,p1t1b)
	p1t2=new Sprite(getTe(_CDN+"img/p1t2.png"));
	p1t3=new Sprite(getTe(_CDN+"img/p1t3.png"));

	p1t5a=new Sprite(getTe(_CDN+"img/p1t5a.png"));
	p1t5b=new Sprite(getTe(_CDN+"img/p1t5b.png"));

	p1t4=new PIXI.Container()

	p1t4a=new Sprite(getTe(_CDN+"img/p1t4a.png"));
	p1t4b=new Sprite(getTe(_CDN+"img/p1t4b.png"));
	p1t4c=new Sprite(getTe(_CDN+"img/p1t4c.png"));
	p1t4d=new Sprite(getTe(_CDN+"img/p1t4d.png"));
	p1t4.addChild(p1t4b,p1t4c,p1t4d,p1t4a)
	TweenMax.to(p1t4,.5,{alpha:0.5,repeat:10000,yoyo:false,delay:1})

	p1t5a.pivot.set(320,320)
	p1t5a.position.set(320,320)
	p1t5b.pivot.set(320,320)
	p1t5b.position.set(320,320)

	TweenMax.to(p1t5a,1,{alpha:0.2,repeat:10000,yoyo:true,delay:1.1})
	TweenMax.to(p1t5b,1,{alpha:0.2,repeat:10000,yoyo:true,delay:1.1+.5})
	TweenMax.to(p1t5a.scale,1,{x:1.05,y:1.05,repeat:10000,yoyo:true,ease:Sine.easeInOut,delay:1.1})
	TweenMax.to(p1t5b.scale,1,{x:1.05,y:1.05,repeat:10000,yoyo:true,ease:Sine.easeInOut,delay:1.1+.5})
	TweenMax.to(p1t5a,6,{rotation:-.1,repeat:10000,yoyo:true,ease:Sine.easeInOut,delay:1.1})
	TweenMax.to(p1t5b,5,{rotation:.1,repeat:10000,yoyo:true,ease:Sine.easeInOut,delay:1.1+.5})

	p1C.addChild(p1tC)
	p1tC.addChild(p1t1,p1t2,p1t3,p1t4,p1t5a,p1t5b)
	p1tC.pivot.set(320,320)
	p1tC.position.set(320,stageH/2)
	p1t4.pivot.set(320,98.5)
	p1t4.position.set(320,242+98.5+240)

	p1t1a.blendMode=_ADD

	p1t4b.blendMode=_ADD
	p1t4c.blendMode=_ADD
	p1t4d.blendMode=_ADD
	p1t5a.blendMode=_ADD
	p1t5b.blendMode=_ADD
	p1t1a.alpha=.5
}
function showPage1(){
	TweenMax.from(bgUp.scale,1,{x:1.2,y:1.2})
	TweenMax.from(bgDown.scale,1,{x:1.2,y:1.2})

	var p1tA=[p1t1,p1t2,p1t3,p1t4]

	for (var i = 0; i < 4; i++) {
		TweenMax.from(p1tA[i],1.5,{y:"+=150",ease:Elastic.easeOut,delay:.1*i})
		TweenMax.from(p1tA[i],1,{alpha:0,delay:.1*i})
	};
}
function p1Loop(){
	TweenMax.set(p1t1a,{alpha:Math.random()*.4+.2,delay:Math.random()*Math.random()*Math.random()*1.5,onComplete:p1Loop})
	TweenMax.set(p1t4b,{alpha:Math.random()*.4+.6})
	TweenMax.set(p1t4c,{alpha:Math.random()*.4+.6})
	TweenMax.set(p1t4d,{alpha:Math.random()*.4+.6})

}
var p1l1,p1l2,p1l3,p1l4,p1l5,p1l6,p1l7
var p1lineC=new PIXI.Container()

function setP1line(){
	p1l1=new Sprite(getTe(_CDN+"img/p1line1.png"));
	p1l2=new Sprite(getTe(_CDN+"img/p1line2.png"));
	p1l3=new Sprite(getTe(_CDN+"img/p1line3.png"));
	p1l4=new Sprite(getTe(_CDN+"img/p1line4.png"));
	p1l5=new Sprite(getTe(_CDN+"img/p1line5.png"));
	p1l6=new Sprite(getTe(_CDN+"img/p1line6.png"));
	p1l7=new Sprite(getTe(_CDN+"img/p1line7.png"));

	p1C.addChild(p1lineC)

	var p1lineA=[p1l1,p1l2,p1l3,p1l4,p1l5,p1l6,p1l7]
	var xA=[52,101,163,454,510,553,606]
	for (var i = 0; i < 7; i++) {
		var _p1line=new PIXI.Container()
		_p1line.addChild(p1lineA[i])
		p1lineC.addChild(_p1line)
		p1lineA[i].y=-519
		TweenMax.to(p1lineA[i],2,{y:-100,ease:Elastic.easeOut,delay:.05*i})

		_p1line.pivot.set(xA[i],0)
		_p1line.position.set(xA[i],0)

		TweenMax.to(_p1line.scale,2+Math.random(),{x:-1,repeat:100000,yoyo:true,ease:Sine.easeInOut,delay:.5*i})
	};
}
