
var page1=new PIXI.Container()
var elevatorC=new PIXI.Container()
var gg = {}
var p1G1=new PIXI.Graphics()
var p1G2=new PIXI.Graphics()
var p1door1=new PIXI.Graphics()
var p1door2=new PIXI.Graphics()

var btnNext=new PIXI.Container()
var btnNext2

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

	btnNext2=new Sprite(getTe(_CDN+"img/btn_next.png"));
	btnSkip=new Sprite(getTe(_CDN+"img/btn_skip.png"));
	pStage.addChild(btnNext)
	btnNext2.interactive=true
	btnNext2.tap=goNext

	btnSkip.interactive=true
	btnSkip.tap=goSkip


	btnNext.addChild(btnNext2,btnSkip)
	btnNext2.x-=85
	btnSkip.x=325
	btnNext.y=stageH/2+441
	btnNext.visible=false
	if(stageH<1000){
		btnNext2.y=-30
		btnSkip.y=-30
	}
	
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
		btnNext.visible=true
		// var _t2=2
		
		// TweenMax.to(gg.p1t,1,{alpha:0,y:"+=350",delay:_t2,ease:Sine.easeIn})		

		// TweenMax.to(elevatorC,1,{y:stageH,delay:_t2,ease:Sine.easeIn})	
		// TweenMax.to(p1G2,1,{y:stageH,delay:_t2,ease:Sine.easeIn})	
		// TweenMax.to(p1G1,1.5,{alpha:0,delay:_t2+1})	
		// TweenMax.to(gg.p1t2,1.5,{alpha:1,delay:_t2+1})
		// TweenMax.to(gg.p1t2,1.5,{alpha:0,delay:_t2+1+2,onComplete:setPage2})//====停留时间2
		// //TweenMax.to(gg.p1t2,1.5,{alpha:0,delay:_t2+1+2})//====停留时间2

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
	TweenMax.to(gg.p2flash2,1.5-.5,{alpha:0,delay:1.3,repeat:1,repeatDelay:.25-.2,onComplete:function(){
		TweenMax.set(btnNext,{y:stageH/2+441,delay:0})
	}})

	// TweenMax.to(gg.p2others,1,{x:"-=300",alpha:0,delay:1.3+1+.75})

	// TweenMax.to(gg.p2t1,1,{alpha:0,delay:1.3+1+.75})
	// TweenMax.to(gg.p2t2,1,{alpha:1,delay:1.3+1+.75})

	// TweenMax.to(gg.p2tiger,1,{alpha:1,x:100,delay:1.3+1+.75})
	// TweenMax.set(gg.p2girlb,{alpha:0,x:0,delay:1.3+1+.75})

	
	// TweenMax.to(gg.p2tiger,1,{alpha:0,y:"+=50",delay:1.3+1+.75+2})
	// TweenMax.to(gg.p2girl,1,{alpha:0,y:"+=60",delay:1.3+1+.75+2})
	// TweenMax.to(gg.p2t2,1,{alpha:0,y:"+=70",delay:1.3+1+.75+2,onComplete:setPage3})
}
var page3=new PIXI.Container()
var p3girl1C=new PIXI.Container()
var p3girl2C=new PIXI.Container()
var p3manC=new PIXI.Container()
var p3birdC=new PIXI.Container()
var p3picC=new PIXI.Container()
function setPage3(){
	pStage.addChildAt(page3,0)
	gg.p3table=new Sprite(getTe(_CDN+"img/p3table.png"))
	gg.p3bird1=new Sprite(getTe(_CDN+"img/p3bird1.png"))
	gg.p3bird2=new Sprite(getTe(_CDN+"img/p3bird2.png"))
	gg.p3bird3=new Sprite(getTe(_CDN+"img/p3bird3.png"))
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

	gg.p3bird1.alpha=0
	gg.p3bird2.alpha=0
	gg.p3bird3.alpha=0

	gg.p3t1.y=stageH/2-262
	gg.p3t2.y=stageH/2-262

	gg.p3t1.alpha=0
	gg.p3t2.alpha=0

	page3.addChild(p3picC,gg.p3t1,gg.p3t2)
	p3picC.addChild(gg.p3bg,p3girl1C,p3manC,p3girl2C,p3birdC,gg.p3table)

	p3girl1C.addChild(gg.p3girl1,gg.p3head1)
	p3girl2C.addChild(gg.p3girl2,gg.p3head2,gg.p3hand)
	p3manC.addChild(gg.p3man,gg.p3manb)
	p3birdC.addChild(gg.p3bird2,gg.p3bird3)
	p3picC.y=stageH/2-37

	gg.p3head1.pivot.set(220,137)
	gg.p3head1.position.set(220,137)
	gg.p3head1.rotation=(-Math.PI/180*7)

	gg.p3head2.pivot.set(451,137)
	gg.p3head2.position.set(451,137)
	gg.p3head2.rotation=(-Math.PI/180*7)

	gg.p3hand.pivot.set(415,209)
	gg.p3hand.position.set(415,209)
	gg.p3hand.rotation=(-Math.PI/180*11)

	p3birdC.alpha=0
	p3birdC.y=-50

	gg.p3t2.y-=50

	page3ani()
}

function page3ani(){
	TweenMax.to(gg.p3t1,2,{alpha:1,onComplete:function(){

	}})

	TweenMax.to(gg.p3head1,.5,{rotation:(Math.PI/180*7),repeat:10000,yoyo:true,ease:Linear.easeNone,repeatDelay:.4})
	TweenMax.to(gg.p3head2,.7,{rotation:(Math.PI/180*7),repeat:10000,yoyo:true,ease:Linear.easeNone,repeatDelay:.2*Math.random()})
	TweenMax.to(gg.p3hand,.6,{rotation:(Math.PI/180*11),repeat:10000,yoyo:true,ease:Linear.easeNone,repeatDelay:.2*Math.random()})

	TweenMax.to(gg.p3head1,.45,{x:"+=3",repeat:10000,yoyo:true,ease:Linear.easeNone,repeatDelay:.1})
	TweenMax.to(gg.p3head2,.57,{y:"+=3",repeat:10000,yoyo:true,ease:Linear.easeNone})
	TweenMax.to(gg.p3hand,.36,{y:"+=4",repeat:10000,yoyo:true,ease:Linear.easeNone})

	//TweenMax.to(gg.p3bird1,.01,{alpha:1,repeat:100000,yoyo:false,repeatDelay:.5,delay:0})
	TweenMax.to(gg.p3bird2,.001,{alpha:1,repeat:100000,yoyo:true,repeatDelay:.5,delay:0.5})
	TweenMax.to(gg.p3bird3,.001,{alpha:1,repeat:100000,yoyo:true,repeatDelay:.5,delay:0})

	TweenMax.set(btnNext,{y:stageH/2+441,delay:1})
	//TweenMax.to(p3birdC,.5,{y:"+=50",delay:1+3})
	
	// TweenMax.to(gg.p3t2,.5,{alpha:0,y:"+=50",delay:1+2+.5+2})
	// TweenMax.to(p3picC,.5,{alpha:0,y:"+=50",delay:1+2+.5+2,onComplete:setPage4})

}
var p4={}
var part4=new PIXI.Container()
var p4picC=new PIXI.Container()
function setPage4(){
	pStage.addChildAt(part4,0)
	p4.boy1=new Sprite(getTe(_CDN+"img/p4boy1.png"))
	p4.boy2=new Sprite(getTe(_CDN+"img/p4boy2.png"))

	p4.boy=new Sprite(getTe(_CDN+"img/p4boy.png"))
	p4.table=new Sprite(getTe(_CDN+"img/p4table.png"))
	p4.light=new Sprite(getTe(_CDN+"img/p4light.png"))
	p4.boyhand=new Sprite(getTe(_CDN+"img/p4boyhand.png"))
	p4.bird=new Sprite(getTe(_CDN+"img/p4bird.png"))
	p4.boyb=new Sprite(getTe(_CDN+"img/p4boyb.png"))

	p4.t1=new Sprite(getTe(_CDN+"img/a-text-7.png"))
	p4.t2=new Sprite(getTe(_CDN+"img/a-text-8.png"))
	p4.t3=new Sprite(getTe(_CDN+"img/a-text-9.png"))

	p4.t1.y=p4.t2.y=stageH/2-261-50
	p4.t1.alpha=p4.t2.alpha=p4.t3.alpha=0

	p4.t3.y=stageH/2-192-150

	part4.addChild(p4picC,p4.t1,p4.t2,p4.t3)
	p4picC.y=stageH/2-35

	p4picC.addChild(p4.boy1,p4.boy2,p4.boy,p4.boyb,p4.boyhand,p4.table,p4.bird,p4.light)


	p4.bird.alpha=0
	p4.light.alpha=0

	p4.bird.x=p4.light.x=-150

	p4.boyhand.pivot.set(581,206)
	p4.boyhand.position.set(581,206)
	p4.boyhand.rotation=-(Math.PI/180*8.5)

	page4ani()
}
var _tempT1=0.15
function page4ani(){

	TweenMax.to(p4.boyhand,_tempT1,{rotation:0,repeat:10000,yoyo:true,ease:Sine.easeIn})

	TweenMax.to(p4.t1,2,{y:"+=50",alpha:1,onComplete:function(){

	}})

	TweenMax.set(btnNext,{y:stageH/2+441,delay:1})
	

	// TweenMax.to(p4picC,1,{y:"+=150",alpha:0,delay:3.4+2})
	// TweenMax.to(p4.t2,1,{y:"+=150",alpha:0,delay:3.4+2+.1})
	// TweenMax.to(p4.t3,1,{y:"+=150",alpha:1,delay:3.4+2+.3})

	// TweenMax.to(p4.t3,1,{alpha:0,delay:3.4+2+.3+1+2,onComplete:setPage5})
}

var page5=new PIXI.Container()
var p5={}
function setPage5(){
	pStage.addChildAt(page5,0)

	p5.t1=new Sprite(getTe(_CDN+"img/p5t1.png"))
	p5.t2=new Sprite(getTe(_CDN+"img/p5t2.png"))
	p5.pic=new Sprite(getTe(_CDN+"img/p5pic.png"))
	p5.btn=new Sprite(getTe(_CDN+"img/p5btn.png"))



	page5.addChild(p5.t1,p5.t2,p5.pic,p5.btn)
	p5.t1.y=p5.t2.y=p5.pic.y=stageH/2-1138/2
	p5.btn.y=stageH/2+982-1138/2

	showAll(	[p5.t1,p5.t2,p5.pic,p5.btn]	,50)

	p5.btn.interactive=true
	p5.btn.tap=clickBtn1


}

function showAll(_arry,_y){
	if(!_y){_y=0}
	console.log("111")
	for (var i = 0; i < _arry.length; i++) {

		TweenMax.set(_arry[i],{y:_arry[i].y+_y,alpha:0})

		//TweenMax.to(_arry[i],1,{y:_arry[i].y-_y,alpha:1,delay:.1*i,ease:Back.easeOut})
		TweenMax.to(_arry[i],1,{y:_arry[i].y-_y,alpha:1,delay:.1*i})
	}
}


function clickBtn1(){
	TweenMax.to(page5,.5,{alpha:0})
	p5.btn.interactive=false
	p5.btn.visible=false
	if(main.wy==false){
		main.openInApp()
	}else{
		if(main.userLogin==false){
			console.log("没登录")
			goPageEnd1()
		}else{
			console.log("登录了")
			setPage6()
		}
	}

	
}
var end1C=new PIXI.Container()
var end1manC=new PIXI.Container()
var end1CarC=new PIXI.Container()
var end1={}
var end1G1=new PIXI.Graphics()
var end1G2=new PIXI.Graphics()
function goPageEnd1(){
	pStage.addChildAt(end1C,0)

	end1C.y=stageH/2-1138/2

	end1G1.beginFill(0xe1eefe)
	end1G1.drawRect(0,0,640,stageH)

	end1G2.beginFill(0xd0d58b)
	end1G2.drawRect(0,0,640,stageH/2)

	pStage.addChildAt(end1G2,0)
	pStage.addChildAt(end1G1,0)
	end1G2.y=stageH/2

	end1.bg=new Sprite(getTe(_CDN+"img/end1bg.png"))
	end1.btn=new Sprite(getTe(_CDN+"img/end1btn.png"))
	end1.car=new Sprite(getTe(_CDN+"img/end1car.png"))
	end1.hand=new Sprite(getTe(_CDN+"img/end1hand.png"))
	end1.head=new Sprite(getTe(_CDN+"img/end1head.png"))
	end1.m1=new Sprite(getTe(_CDN+"img/end1m1.png"))
	end1.m2=new Sprite(getTe(_CDN+"img/end1m2.png"))
	end1.m3=new Sprite(getTe(_CDN+"img/end1m3.png"))
	end1.man=new Sprite(getTe(_CDN+"img/end1man.png"))
	end1.wheel=new Sprite(getTe(_CDN+"img/wheel1.png"))
	end1.wheel2=new Sprite(getTe(_CDN+"img/wheel1.png"))


	end1.t1=new Sprite(getTe(_CDN+"img/end1t1.png"))
	end1.t2=new Sprite(getTe(_CDN+"img/end1t2.png"))
	end1.t3=new Sprite(getTe(_CDN+"img/end1t3.png"))
	end1.t4=new Sprite(getTe(_CDN+"img/end1t4.png"))
	end1.t5=new Sprite(getTe(_CDN+"img/end1t5.png"))

	end1C.addChild(end1.bg,end1CarC,end1manC,end1.t1,end1.t2,end1.t3,end1.t4,end1.t5,end1.btn)
	end1CarC.addChild(end1.car,end1.wheel,end1.wheel2)
	end1manC.addChild(end1.man,end1.head,end1.hand,end1.m1,end1.m2,end1.m3)

	end1.wheel.pivot.set(30.5,30.5)
	end1.wheel2.pivot.set(30.5,30.5)

	end1.wheel.position.set(520,784)
	end1.wheel2.position.set(232,784)

	showAll([end1CarC,end1manC,end1.t1,end1.t2,end1.t3,end1.t4,end1.t5],50)

	TweenMax.from(end1CarC,2,{x:-640,delay:1.5})
	TweenMax.from(end1.wheel,2,{rotation:-Math.PI*4,delay:1.5})
	TweenMax.from(end1.wheel2,2,{rotation:-Math.PI*4,delay:1.5})


	end1.head.pivot.set(195,666)
	end1.head.position.set(195,666)

	end1.hand.pivot.set(132,727)
	end1.hand.position.set(132,727)
	TweenMax.set(end1.head,{rotation:-.15*Math.PI})

	TweenMax.to(end1.hand,.5,{rotation:.25*Math.PI,repeat:10000,yoyo:true})
	TweenMax.to(end1.head,1,{rotation:.15*Math.PI,repeat:10000,yoyo:true,ease:Linear.easeNone})

	TweenMax.to(end1.m1,1,{x:"-=10",y:"-=20",repeat:100000,yoyo:true,delay:0,ease:Linear.easeNone})
	TweenMax.to(end1.m2,1,{x:"-=15",y:"-=15",repeat:100000,yoyo:true,delay:0.3,ease:Linear.easeNone})
	TweenMax.to(end1.m3,1,{x:"-=20",y:"-=10",repeat:100000,yoyo:true,delay:0.6,ease:Linear.easeNone})

	end1.btn.y=stageH/2+413
	end1.btn.interactive=true
	end1.btn.tap=goEnd1btn

}

function goEnd1btn(){
	main.more()
}

var style1={fontSize: 32,fill: '#000000'}
var style2={fontSize: 32,fill: '#e3716b'}

var page6=new PIXI.Container()
var page6TC=new PIXI.Container()
var p6t1=new PIXI.Text("2018年你在网易云音乐听的",style1)
var p6t2_1=new PIXI.Text("最多的歌是《",style1)
var p6t2_2=new PIXI.Text("小信誉",style2)
var p6t2_3=new PIXI.Text("》",style1)
var p6t3_1=new PIXI.Text("一共聆听了",style1)
var p6t3_2=new PIXI.Text("100",style2)
var p6t3_3=new PIXI.Text("次",style1)
var p6t4=new PIXI.Text("这首歌一定与你的灵魂产生了某种共鸣",style1)

var end2={}



function setPage6(){
	pStage.addChildAt(page6,0)
	//page6.addChild(page6TC)
	page6TC.addChild(p6t1,p6t2_1,p6t2_2,p6t2_3,p6t3_1,p6t3_2,p6t3_3,p6t4)
	p6t1.y=stageH/2-338
	p6t2_1.y=p6t2_2.y=p6t2_3.y=stageH/2-281
	p6t3_1.y=p6t3_2.y=p6t3_3.y=stageH/2-281+57
	p6t4.y=stageH/2-281+57+57

	p6t2_2.text=main.userInfo.songName
	p6t3_2.text=main.userInfo.playCnt

	p6t1.x=(640-p6t1.width)/2
	p6t2_1.x=(640-p6t2_1.width-p6t2_2.width-p6t2_3.width)/2
	p6t2_2.x=p6t2_1.x+p6t2_1.width+5
	p6t2_3.x=p6t2_2.x+p6t2_2.width+5
	p6t3_1.x=(640-p6t3_1.width-p6t3_2.width-p6t3_3.width)/2
	p6t3_2.x=p6t3_1.x+p6t3_1.width+5
	p6t3_3.x=p6t3_2.x+p6t3_2.width+5
	p6t4.x=(640-p6t4.width)/2

	page6TC.scale.x=.8
	page6TC.x=64

	end2.bg1=new Sprite(getTe(_CDN+"img/end2a-bg.png"))
	end2.bg2=new Sprite(getTe(_CDN+"img/end2b-bg.png"))
	page6.addChild(end2.bg2,end2.bg1,page6TC)

	end2.bg1.y=end2.bg2.y=stageH/2-750

	showAll([p6t1,p6t2_1,p6t2_2,p6t2_3,p6t3_1,p6t3_2,p6t3_3,p6t4],50)

	console.log("p6")
	nowPage=1000
	pStage.addChild(btnNext)
	btnNext.visible=true
	btnSkip.visible=false
	btnSkip.interactive=false
	btnNext2.x+=85
	TweenMax.set(btnNext,{y:stageH/2+441,delay:1})

		
}

var page7TC=new PIXI.Container()

var p7t1=new PIXI.Text("2018年6月6日",style2)
var p7t2=new PIXI.Text("对你来说一定是特别的一天",style1)
var p7t3=new PIXI.Text("这一天你把自己交给了音乐",style1)
var p7t4=new PIXI.Text("是你在过去一年里听歌时间最长的一天",style1)

function setPage7(){
	p7t1.text=main.dateText(main.userInfo.mostActiveDay.split(' ')[0])
	page6.addChild(page7TC)
	page7TC.addChild(p7t1,p7t2,p7t3,p7t4)

	page7TC.scale.x=.8
	page7TC.x=64
	p7t1.y=stageH/2-338
	p7t2.y=stageH/2-338+57
	p7t3.y=stageH/2-338+57+57
	p7t4.y=stageH/2-338+57+57+57

	p7t1.x=(640-p7t1.width)/2
	p7t2.x=(640-p7t2.width)/2
	p7t3.x=(640-p7t3.width)/2
	p7t4.x=(640-p7t4.width)/2

	showAll([p7t1,p7t2,p7t3,p7t4],50)

	

}
var endingC=new PIXI.Container()
var ending={}
var style3={fontSize: 32,fill: '#ffffff'}
var endingTC=new PIXI.Container()

var p8t1=new PIXI.Text("音乐是一面镜子",style3)
var p8t2=new PIXI.Text("带我们发现真实的自我",style3)
var p8t3=new PIXI.Text("每个有趣的人格",style3)
var p8t4=new PIXI.Text("都能用一种动物来概括",style3)
var p8t5=new PIXI.Text("一汽马自达为你揭秘",style3)
var p8t6=new PIXI.Text("属于你的动物型人格",style3)
var p8t7=new PIXI.Text("数据整理中...",style3)

var p8TA=[p8t1,p8t2,p8t3,p8t4,p8t5,p8t6,p8t7]

var endBuildingC=new PIXI.Container()
var endingCarC=new PIXI.Container()
function setEnding(){
	pStage.addChild(endingC)

	ending.bg=new Sprite(getTe(_CDN+"img/endingbg.png"))
	ending.bg.width=640
	ending.bg.y=stageH/2-650
	endingC.addChild(ending.bg,endingTC,endingCarC)


	endingC.alpha=0
	TweenMax.to(endingC,1,{alpha:1,delay:3-3,onComplete:function(){
		showAll([p8t1,p8t2,p8t3,p8t4,p8t5,p8t6,endingCarC,p8t7],50)
		page6.visible=false
	}})

	endingTC.addChild(p8t1,p8t2,p8t3,p8t4,p8t5,p8t6,p8t7,endBuildingC)

	for (var i = 0; i < p8TA.length; i++) {
		p8TA[i].y=stageH/2-342+57*i
		p8TA[i].x=(640-p8TA[i].width)/2
		p8TA[i].alpha=0
	}
	p8t7.y=stageH/2+288

	ending.building1=new Sprite(getTe(_CDN+"img/building.png"))
	ending.building2=new Sprite(getTe(_CDN+"img/building.png"))
	endBuildingC.addChild(ending.building1,ending.building2)
	ending.building2.x=820
	TweenMax.set(endBuildingC,{x:-820*2+640,y:stageH/2+67})
	TweenMax.to(endBuildingC,2,{x:"+=820",repeat:10000,ease:Linear.easeNone})

	ending.wheel=new Sprite(getTe(_CDN+"img/wheel1.png"))
	ending.wheel2=new Sprite(getTe(_CDN+"img/wheel1.png"))
	ending.car=new Sprite(getTe(_CDN+"img/endingcar.png"))


	endingCarC.addChild(ending.car,ending.wheel,ending.wheel2)
	endingCarC.y=stageH/2+180
	endingCarC.alpha=0

	ending.wheel.pivot.set(30.5,30.5)
	ending.wheel2.pivot.set(30.5,30.5)

	ending.wheel.position.set(253,58)
	ending.wheel2.position.set(391,58)

	ending.wheel.scale.x=ending.wheel.scale.y=ending.wheel2.scale.x=ending.wheel2.scale.y=.5
	TweenMax.to(ending.wheel,1,{rotation:-4*Math.PI,repeat:10000,ease:Linear.easeNone})
	TweenMax.to(ending.wheel2,1,{rotation:-4*Math.PI,repeat:10000,ease:Linear.easeNone})
	TweenMax.to(ending.car,.1,{y:"-=1",repeat:10000,yoyo:true,ease:Linear.easeNone})

	

	TweenMax.to(endingC,1,{alpha:0,delay:3+5-3})
	setTimeout(goUGC,5000)

}
function goUGC(){
	ugc.init()
}