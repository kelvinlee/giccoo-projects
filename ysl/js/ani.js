var title1,title2
var part1C=new PIXI.Container()
function setPart1 () {
	// body...
	mainC.addChild(part1C)

	title1=new Sprite(getTe(_CDN+"img/title.png"));//===============标题
	title2=new Sprite(getTe(_CDN+"img/title"+Type+".png"));
	title2.y=196
	part1C.addChild(title1,title2)

	setAni1()
	setAni2()
	setAni3()
	setAni4()
	setAllani()

	setPart1_1()
}

var ani1C=new PIXI.Container()
var ani1A=[]
function setAni1(){//================================================================================动画1
	for (var i =0; i < 8; i++) {
		var j=i+1
		var _ani1=new Sprite(getTe(_CDN+"img/ani1_"+j+".png"));
		ani1C.addChild(_ani1)
		ani1A.push(_ani1)
	};
	TweenMax.to(ani1A[1],2,{y:20,repeat:10000,yoyo:true,ease:Sine.easeInOut})

	ani1A[5].x=40
	TweenMax.to(ani1A[5],12.5-5,{x:-20,repeat:10000,yoyo:true,ease:Sine.easeInOut})
	TweenMax.to(ani1A[6],3.2,{y:30,repeat:10000,yoyo:true,ease:Sine.easeInOut})
	ani1A[7].x=-40
	TweenMax.to(ani1A[7],13.7-5,{x:20,repeat:10000,yoyo:true,ease:Sine.easeInOut})

	TweenMax.to(ani1A[2],.2,{alpha:0.5,repeat:10000,yoyo:true,ease:Sine.easeInOut})
	TweenMax.to(ani1A[3],.3,{alpha:0.5,repeat:10000,yoyo:true,ease:Sine.easeInOut})
	TweenMax.to(ani1A[4],.4,{alpha:0.5,repeat:10000,yoyo:true,ease:Sine.easeInOut})
}


var ani2C=new PIXI.Container()
var ani2A=[]
function setAni2(){//================================================================================动画2
	for (var i =0; i < 7; i++) {
		var j=i+1
		var _ani2=new Sprite(getTe(_CDN+"img/ani2_"+j+".png"));
		ani2C.addChild(_ani2)
		ani2A.push(_ani2)
	};
	ani2A[1].pivot.set(300,300)
	ani2A[1].position.set(300,300)
	ani2A[1].rotation=-.15
	TweenMax.to(ani2A[1],5,{rotation:.15,repeat:10000,yoyo:true,ease:Sine.easeInOut})
	TweenMax.to(ani2A[1].scale,1.5,{x:1.15,y:1.15,repeat:10000,yoyo:true,ease:Sine.easeInOut})

	ani2A[2].pivot.set(300,300)
	ani2A[2].position.set(300,300)
	ani2A[2].rotation=.15
	TweenMax.to(ani2A[2],4,{rotation:-.15,repeat:10000,yoyo:true,ease:Sine.easeInOut})
	TweenMax.to(ani2A[2].scale,1.6,{x:1.15,y:1.15,repeat:10000,yoyo:true,ease:Sine.easeInOut})

	TweenMax.to(ani2A[3],1.5,{x:30,y:20,repeat:10000,yoyo:true,ease:Sine.easeInOut})
	TweenMax.to(ani2A[4],1.9,{x:60,y:20,repeat:10000,yoyo:true,ease:Sine.easeInOut})
	TweenMax.to(ani2A[4],2.9,{rotation:-.1,repeat:10000,yoyo:true,ease:Sine.easeInOut})
}

var ani3C=new PIXI.Container()
var ani3A=[]
function setAni3(){//================================================================================动画3
	var i
	for (i =0; i < 15; i++) {
		var j=i+1
		var _ani3=new Sprite(getTe(_CDN+"img/ani3_"+j+".png"));
		ani3C.addChild(_ani3)
		ani3A.push(_ani3)
	};

	var pivotA=[[447,136],[473,229],[449.5,278],[76,348],[121,375],[101.5,152],[91,133],[141.5,140]]
	for (var i = 1; i < 9; i++) {
		ani3A[i].pivot.set(pivotA[i-1][0],pivotA[i-1][1])
		ani3A[i].position.set(pivotA[i-1][0],pivotA[i-1][1])
		ani3A[i].scale.x=ani3A[i].scale.y=0
		//ani3A[i].alpha=2
		TweenMax.to(ani3A[i].scale,1+.1*i,{x:1.4,y:1.4,repeat:10000,yoyo:false,ease:Sine.easeInOut})
		TweenMax.to(ani3A[i],1+.1*i,{alpha:0,repeat:10000,yoyo:false,ease:Sine.easeIn})
	};

	var clockC=new PIXI.Container()
	ani3C.addChild(clockC)
	clockC.addChild(ani3A[9],ani3A[10],ani3A[11],ani3A[12])
	
	ani3A[9].pivot.set(49,47.5)
	ani3A[10].pivot.set(49,47.5)
	ani3A[11].pivot.set(49,47.5)
	ani3A[12].pivot.set(49,47.5)
	

	TweenMax.to(ani3A[10],1,{rotation:Math.PI*2,repeat:10000,ease:Linear.easeNone})
	TweenMax.to(ani3A[11],6,{rotation:Math.PI*2,repeat:10000,ease:Linear.easeNone})
	TweenMax.to(ani3A[12],12,{rotation:Math.PI*2,repeat:10000,ease:Linear.easeNone})

	clockC.width=65
	clockC.position.set(84,201.5)

	ani3A[14].pivot.set(196,322)
	ani3A[14].position.set(196,322)
	TweenMax.to(ani3A[14],1,{rotation:Math.PI*2/360*20,repeat:10000,yoyo:true,ease:Sine.easeInOut})
	
}

var ani4C=new PIXI.Container()
var ani4A=[]
function setAni4(){//================================================================================动画4
	for (var i =0; i < 5; i++) {
		var j=i+1
		var _ani4=new Sprite(getTe(_CDN+"img/ani4_"+j+".png"));
		ani4C.addChild(_ani4)
		ani4A.push(_ani4)
	};

	TweenMax.to(ani4A[1],1,{alpha:0,repeat:10000,yoyo:true,ease:Sine.easeInOut})
	TweenMax.to(ani4A[2],1,{alpha:0,repeat:10000,yoyo:true,ease:Sine.easeInOut,delay:.5})

	ani4A[3].pivot.set(580,366)
	ani4A[3].position.set(580,366)

	TweenMax.to(ani4A[3],.5,{y:"-=20",repeat:10000,yoyo:true,ease:Sine.easeOut})
	TweenMax.to(ani4A[3],1,{x:"+=10",repeat:10000,yoyo:true,ease:Sine.easeOut})
	//TweenMax.to(ani4A[3].scale,1,{x:-1,repeat:10000,yoyo:true,ease:Sine.easeInOut})
	ani4A[3].scale.x=-1
	setInterval(function(){
		ani4A[3].scale.x*=-1
		//console.log("ani4A[3].scale",ani4A[3].scale)
	},1000)

	ani4A[4].pivot.set(486,305)
	ani4A[4].position.set(486,305)
	ani4A[4].rotation=-Math.PI*2/360*10

	TweenMax.to(ani4A[4],1,{rotation:Math.PI*2/360*15,repeat:10000,yoyo:true,ease:Sine.easeInOut})
}

var aniA=[ani1C,ani2C,ani3C,ani4C]
var typeA=[[3,2,1,0],[3,1,2,0],[2,1,3,0],[0,1,2,3],[1,0,2,3]]
function setAllani(){
	part1C.addChild(ani1C,ani2C,ani3C,ani4C)
	// ani2C.pivot.y=-100
	aniA[typeA[Type][0]].y=200
	aniA[typeA[Type][1]].y=300+600+10000
	aniA[typeA[Type][2]].y=300+600+600+10000
	aniA[typeA[Type][3]].y=300+600+600+600+10000
	
}


function setPart1_1(){
	if(Type!=0){
		setT1234()
	}else{
		setT0()
	}

	setPart1_2()
}

var t1_0,t1_1,t1_2,t1_3,t1_4
function setT0(){
	nowHeight=700
	t1_0=new Sprite(getTe(_CDN+"img/t1_0.png"));
	mainC.addChild(t1_0)
	t1_0.y=nowHeight
	nowHeight+=t1_0.height
	aniA[typeA[Type][0]].y=180
	aniA[typeA[Type][1]].y=900
	aniA[typeA[Type][1]].x=90//==

	aniA[typeA[Type][2]].y=1600
	aniA[typeA[Type][3]].y=2400

}
var t1C=new PIXI.Container()
var aniYA=[[180,1850,2600,3350],[180,1850,2600,3350],[180,1850,2600,3350],[250,1760,2600,3380]]
function setT1234(){
	mainC.addChild(t1C)
	var t1A=[t1_1,t1_2,t1_3,t1_4]
	nowHeight=656
	for (var i = 0; i < 4; i++) {
		var j=i+1
		t1A[i]=new Sprite(getTe(_CDN+"img/t1_"+j+".png"));
		t1C.addChild(t1A[i])
		if(i!=Type-1){
			t1A[i].visible=false
		}

		aniA[typeA[Type][i]].y=aniYA[Type-1][i]
	}
	t1C.y=nowHeight
	nowHeight+=t1C.height
}

var t2C=new PIXI.Container()
var t2_0,t2_1
function setPart1_2(){
	mainC.addChild(t2C)
	if(Type==0){
		t2_0=new Sprite(getTe(_CDN+"img/t2_0.png"));
		t2C.addChild(t2_0)
	}else{
		t2_1=new Sprite(getTe(_CDN+"img/t2_1.png"));
		t2C.addChild(t2_1)
	}
	t2C.y=nowHeight+120

	setAni5()
	nowHeight+=t2C.height+120
	setPart1_3()

}

var ani5C=new PIXI.Container()
var ani5A=[]
function setAni5(){
	t2C.addChild(ani5C)
	for (var i =0; i < 6; i++) {
		var j=i+1
		var _ani5=new Sprite(getTe(_CDN+"img/ani5_"+j+".png"));
		ani5C.addChild(_ani5)
		ani5A.push(_ani5)
		_ani5.alpha=0
	};
	var _ani5=new Sprite(getTe(_CDN+"img/ani5_2.png"));
		ani5C.addChild(_ani5)
		ani5A.push(_ani5)
		_ani5.alpha=0
}
function ani5Play(){
	console.log("黑胶碟动画开始")
	
	TweenMax.to(ani5A[0],2,{alpha:1,delay:1})
	ani5A[1].alpha=1
	ani5A[6].alpha=1
	ani5A[1].pivot.set(439,775)
	ani5A[1].position.set(439,775)
	ani5A[6].pivot.set(439,775)
	ani5A[6].position.set(209.5,651)
	ani5A[1].x-=30
	ani5A[1].y-=15
	TweenMax.from(ani5A[1],.5,{x:"+=300",y:"+=150",ease:Linear.easeNone,onComplete:function(){
		TweenMax.to(ani5A[1],.5,{x:"+=30",y:"+=15"})
	}})

	TweenMax.from(ani5A[6],.5,{x:"-=300",y:"-=150",onComplete:function(){
		ani5A[6].alpha=0
		ani5A[2].alpha=1
		ani5A[3].alpha=1
		ani5A[4].alpha=1
		ani5A[5].alpha=1

		ani5A[2].pivot.set(209.5,651)
		ani5A[2].position.set(209.5,651)

		ani5A[3].pivot.set(209.5,651)
		ani5A[3].position.set(209.5,651)
		ani5A[4].pivot.set(209.5,651)
		ani5A[4].position.set(209.5,651)
		//ani5A[2].scale.set(.9,.9)
		TweenMax.from(ani5A[2].scale,.5,{x:.9,y:.9})

		TweenMax.from(ani5A[3].scale,.5,{x:.6,y:.6,delay:.05})
		TweenMax.from(ani5A[4].scale,.5,{x:.6,y:.6,delay:.1})
	}})

}

var t3C=new PIXI.Container()

var t3,hint
var t3A=[]
var ani6_1,ani6_2

function setPart1_3(){
	mainC.addChild(t3C)
	t3C.y=nowHeight+20
	t3=new Sprite(getTe(_CDN+"img/t3.png"));
	

	hint=new Sprite(getTe(_CDN+"img/hint.png"));
	t3C.addChild(t3,hint)
	hint.y=t3C.height-hint.height
	TweenMax.to(hint,.6,{alpha:.2,repeat:100000,yoyo:true})
	nowHeight+=t3C.height+20+50

	for (var i = 0; i < 4; i++) {
		var j=i+1
		var _t3=new Sprite(getTe(_CDN+"img/t3_"+j+".png"));
		t3C.addChild(_t3)
		if(i!=Type-1){
			_t3.alpha=0
		}
	}
	ani6_1=new Sprite(getTe(_CDN+"img/ani6_1.png"));
	ani6_2=new Sprite(getTe(_CDN+"img/ani6_2.png"));

	t3C.addChild(ani6_1,ani6_2)
	ani6_1.y+=30
	ani6_2.y+=30
	TweenMax.to(ani6_1,2,{y:"-=40",repeat:10000,yoyo:true,ease:Sine.easeInOut})
	TweenMax.to(ani6_2,2,{y:"-=40",repeat:10000,yoyo:true,ease:Sine.easeInOut,delay:.5})

}

