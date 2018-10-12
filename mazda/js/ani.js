
var page1=new PIXI.Container()
var elevatorC=new PIXI.Container()
var gg = {}
var p1G1=new PIXI.Graphics()
var p1G2=new PIXI.Graphics()
var p1door1=new PIXI.Graphics()
var p1door2=new PIXI.Graphics()

////////////////////==================================第一页
function setPage1() {
	pStage.addChildAt(page1,0)
	gg.elevator=new Sprite(getTe(_CDN+"img/p1a.png"));
	gg.eNum1=new Sprite(getTe(_CDN+"img/20.png"));
	gg.eNum2=new Sprite(getTe(_CDN+"img/19.png"));
	gg.eNum3=new Sprite(getTe(_CDN+"img/18.png"));
	gg.eArrow=new Sprite(getTe(_CDN+"img/p1aup.png"));
	gg.p1t=new Sprite(getTe(_CDN+"img/a-text-1.png"));
	gg.p1light=new Sprite(getTe(_CDN+"img/elevator-light.png"));
	gg.p1t2=new Sprite(getTe(_CDN+"img/a-text-2.png"));

	gg.p1t2.y=stageH/2-107
	gg.p1t2.alpha=0

	gg.p1light.x=320-1.5-6
	gg.p1light.y=370
	gg.p1light.alpha=0
	gg.p1light.scale.y=1.5
	gg.p1t.y=stageH/2-377

	p1door1.lineStyle(2, 0xc4c0bd, 1);
	p1door2.lineStyle(2, 0xc4c0bd, 1);
	p1door1.beginFill(0xadaaa7)
	p1door2.beginFill(0xadaaa7)
	p1door1.drawRect(0,0,370/2,384)
	p1door2.drawRect(0,0,370/2,384)

	p1door1.pivot.set(0,0)
	p1door2.pivot.set(370/2,0)

	p1door1.position.set(129,46)
	p1door2.position.set(498,46)

	p1G1.beginFill(0xe3d1c5)
	p1G2.beginFill(0xe3a588)
	p1G1.drawRect(0,0,640,stageH)
	p1G2.drawRect(0,0,640,stageH)
	p1G2.y=stageH/2-63


	page1.addChild(p1G1,p1G2,elevatorC,gg.p1t,gg.p1t2)
	elevatorC.addChild(gg.elevator,gg.eNum1,gg.eNum2,gg.eNum3,gg.eArrow,p1door1,p1door2,gg.p1light)
	elevatorC.y=stageH/2-63

	//page1.alpha=0
	gg.p1t.alpha=0
	gg.eNum1.alpha=0
	gg.eNum2.alpha=0
	gg.eNum1.y+=10
	gg.eNum2.y+=10


	page1ani()
}

function page1ani(){
	//TweenMax.to(page1,.5,{alpha:1})
	var _t=.5
	TweenMax.to(gg.p1t,4.5,{alpha:1,delay:_t})

	TweenMax.to(gg.eNum3,1,{alpha:0,delay:_t,y:"-=10"})
	TweenMax.to(gg.eNum2,1,{alpha:1,delay:_t,y:"-=10"})

	TweenMax.to(gg.eNum2,1,{alpha:0,delay:_t+1+.5,y:"-=10"})
	TweenMax.to(gg.eNum1,1,{alpha:1,delay:_t+1+.5,y:"-=10"})

	TweenMax.to(gg.p1light,.25,{alpha:1,delay:_t+1+.5,yoyo:true,repeat:1,repeatDelay:1})
	TweenMax.to(gg.p1light,1.5,{y:"-=300",delay:_t+1+.5,ease:Linear.easeNone})

	TweenMax.to(p1door1.scale,2.5,{x:0,delay:_t+1+1.5+1})
	TweenMax.to(p1door2.scale,2.5,{x:0,delay:_t+1+1.5+1})

	//TweenMax.to(gg.eArrow,.5,{alpha:1,delay:_t+1+1.5,repeat:3})
	TweenMax.to(gg.eArrow,.5,{alpha:0,delay:_t+1+1.5,repeat:3})
	TweenMax.set(gg.eArrow,{alpha:1,delay:_t+1+1.5+1.5,onComplete:function(){
		var _t2=2
		
		TweenMax.to(gg.p1t,1.5,{alpha:0,y:"+=150",delay:_t2})		

		TweenMax.to(elevatorC,1,{y:stageH,delay:_t2,ease:Sine.easeIn})	
		TweenMax.to(p1G2,1,{y:stageH,delay:_t2,ease:Sine.easeIn})	
		TweenMax.to(p1G1,1.5,{alpha:0,delay:_t2+1})	
		TweenMax.to(gg.p1t2,1.5,{alpha:1,delay:_t2+1})
		TweenMax.to(gg.p1t2,1.5,{alpha:0,delay:_t2+1+2,onComplete:setPage2})//====停留时间2

	}})

}


////////////////////==================================第二页
var page2=new PIXI.Container()
var page2picC=new PIXI.Container()
function setPage2(){
	pStage.addChildAt(page2,0)
	gg.p2girl=new Sprite(getTe(_CDN+"img/p2girl.png"))
	gg.p2girlb=new Sprite(getTe(_CDN+"img/p2girlb.png"))
	gg.p2others=new Sprite(getTe(_CDN+"img/p2others.png"))
	gg.p2tiger=new Sprite(getTe(_CDN+"img/p2tiger.png"))
	gg.p2flash1=new Sprite(getTe(_CDN+"img/p2flash1.png"))
	gg.p2flash2=new Sprite(getTe(_CDN+"img/p2flash2.png"))

	gg.p2t1=new Sprite(getTe(_CDN+"img/a-text-3.png"));
	gg.p2t2=new Sprite(getTe(_CDN+"img/a-text-4.png"));

	gg.p2t1.y=stageH/2-262
	gg.p2t2.y=stageH/2-262

	gg.p2t1.alpha=0
	gg.p2t2.alpha=0

	page2.addChild(page2picC,gg.p2t1,gg.p2t2)
	page2picC.addChild(gg.p2others,gg.p2tiger,gg.p2girl,gg.p2girlb,gg.p2flash1,gg.p2flash2)
	gg.p2flash1.alpha=0
	gg.p2flash2.alpha=0
	page2picC.y=stageH/2-50

	gg.p2tiger.x=100+360

	gg.p2others.x=500
	gg.p2girl.x=350
	gg.p2girlb.x=350

	page2ani()
}

function page2ani(){
	TweenMax.to(gg.p2t1,3,{alpha:1})

	TweenMax.to(gg.p2girl,1,{x:0})
	TweenMax.to(gg.p2girlb,1,{x:0})
	TweenMax.to(gg.p2others,1,{x:0})

	TweenMax.set(gg.p2flash1,{alpha:1,delay:1.25})
	TweenMax.set(gg.p2flash2,{alpha:.8,delay:1.25})

	TweenMax.to(gg.p2flash1,1-.5,{alpha:0,delay:1.3,repeat:1,repeatDelay:.25+.5-.2})
	TweenMax.to(gg.p2flash2,1.5-.5,{alpha:0,delay:1.3,repeat:1,repeatDelay:.25-.2})

	TweenMax.to(gg.p2others,1,{x:"-=300",alpha:0,delay:1.3+1+.75})

	TweenMax.to(gg.p2t1,1,{alpha:0,delay:1.3+1+.75})
	TweenMax.to(gg.p2t2,1,{alpha:1,delay:1.3+1+.75})

	TweenMax.to(gg.p2tiger,1,{alpha:1,x:100,delay:1.3+1+.75})
	TweenMax.set(gg.p2girlb,{alpha:0,x:0,delay:1.3+1+.75})


	TweenMax.to(gg.p2tiger,1,{alpha:0,y:"+=50",delay:1.3+1+.75+2})
	TweenMax.to(gg.p2girl,1,{alpha:0,y:"+=60",delay:1.3+1+.75+2})
	TweenMax.to(gg.p2t2,1,{alpha:0,y:"+=70",delay:1.3+1+.75+2,onComplete:setPage3})
}
var page3=new PIXI.Container()
var p3girl1C=new PIXI.Container()
var p3girl2C=new PIXI.Container()
var p3manC=new PIXI.Container()
var p3picC=new PIXI.Container()
function setPage3(){
	pStage.addChildAt(page3,0)
	gg.p3table=new Sprite(getTe(_CDN+"img/p3table.png"))
	gg.p3bird=new Sprite(getTe(_CDN+"img/p3bird.png"))
	gg.p3girl1=new Sprite(getTe(_CDN+"img/p3girl1.png"))
	gg.p3girl2=new Sprite(getTe(_CDN+"img/p3girl2.png"))
	gg.p3head1=new Sprite(getTe(_CDN+"img/p3head1.png"))
	gg.p3head2=new Sprite(getTe(_CDN+"img/p3head2.png"))
	gg.p3man=new Sprite(getTe(_CDN+"img/p3man.png"))
	gg.p3manb=new Sprite(getTe(_CDN+"img/p3manb.png"))
	gg.p3bg=new Sprite(getTe(_CDN+"img/p3bg.png"))
	gg.p3hand=new Sprite(getTe(_CDN+"img/p3hand.png"))

	gg.p3t1=new Sprite(getTe(_CDN+"img/a-text-5.png"))
	gg.p3t2=new Sprite(getTe(_CDN+"img/a-text-6.png"))

	gg.p3t1.y=stageH/2-262
	gg.p3t2.y=stageH/2-262

	gg.p3t1.alpha=0
	gg.p3t2.alpha=0

	page3.addChild(p3picC,gg.p3t1,gg.p3t2)
	p3picC.addChild(gg.p3bg,p3girl1C,p3manC,p3girl2C,gg.p3bird,gg.p3table)

	p3girl1C.addChild(gg.p3girl1,gg.p3head1)
	p3girl2C.addChild(gg.p3girl2,gg.p3head2,gg.p3hand)
	p3manC.addChild(gg.p3man,gg.p3manb)
	p3picC.y=stageH/2-37

	gg.p3head1.pivot.set(220,137)
	gg.p3head1.position.set(220,137)
	gg.p3head1.rotation=(-Math.PI/180*7)

	gg.p3head2.pivot.set(451,137)
	gg.p3head2.position.set(451,137)
	gg.p3head1.rotation=(-Math.PI/180*7)

	gg.p3hand.pivot.set(415,209)
	gg.p3hand.position.set(415,209)
	gg.p3head1.rotation=(-Math.PI/180*11)

	page3ani()
}

function page3ani(){
	TweenMax.to(gg.p3t1,3,{alpha:1})

	//TweenMax.to()
}




