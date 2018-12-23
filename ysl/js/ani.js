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
var aniYA=[[180,900,1600,2400],[180,900,1600,2400],[180,900,1600,2400],[180,900,1600,2400]]
function setT1234(){
	mainC.addChild(t1C)
	var t1A=[t1_1,t1_2,t1_3,t1_4]
	nowHeight=656
	for (var i = 0; i < 4; i++) {
		t1A[i]=new Sprite(getTe(_CDN+"img/t1_"+i+".png"));
		t1C.addChild(t1A[i])
		if(i!=Type-1){
			t1A[i].visible=false
		}

		aniA[typeA[Type][i]].y=aniYA[Type][i]
	}
	t1C.y=nowHeight
}