var p1bg
var page1=new PIXI.Container()
var bottomBtnsC=new PIXI.Container()
var bottomBtnsPic
var midCanvasC=new PIXI.Container()
var midCanvasBG,midCanvasT
var stepBarC=new PIXI.Container()
var stepBar1,stepBar2,stepBar3

var btnBack=new PIXI.Graphics()
var btnNext=new PIXI.Graphics()

function setPage1 () {//======================================第一页

	pStage.addChild(page1)
	p1bg=new Sprite(getTe(_CDN+"img/p1_bg.jpg"));//===背景
	p1bg.height=stageH
	page1.addChild(p1bg,bottomBtnsC,midCanvasC)
	
	bottomBtnsPic=new Sprite(getTe(_CDN+"img/p1_btns.png"));
	
	bottomBtnsC.y=stageH-255
	
	btnBack.beginFill(0x567890)
	btnBack.drawRect(0,0,320,52)
	btnBack.alpha=0
	btnBack.interactive=true
	btnBack.tap=goBack

	btnNext.beginFill(0x567890)
	btnNext.drawRect(0,0,320,52)
	btnNext.x=320
	btnNext.alpha=0
	btnNext.interactive=true
	btnNext.tap=goNext

	bottomBtnsC.addChild(bottomBtnsPic,btnBack,btnNext)

	midCanvasBG=new Sprite(getTe(_CDN+"img/p1_wb.png"));
	midCanvasT=new Sprite(getTe(_CDN+"img/p1_t.png"));
	midCanvasT.y=133-45
	midCanvasT.x=42
	midCanvasBG.y=133
	midCanvasBG.height=stageH-133-255
	midCanvasC.addChild(midCanvasBG,midCanvasT,stepBarC)

	stepBar1=new Sprite(getTe(_CDN+"img/tag1.png"));
	stepBar2=new Sprite(getTe(_CDN+"img/tag2.png"));
	stepBar3=new Sprite(getTe(_CDN+"img/tag3.png"));
	stepBarC.addChild(stepBar1,stepBar2,stepBar3)
	stepBarC.y=133
	stepBarC.x=(640-565)/2
	stepBar2.alpha=0
	stepBar3.alpha=0


	setStep1()
	setStep2()
	setStep3()
}

var step1=new PIXI.Container()
var p1lineC=new PIXI.Container()
var p1DotC=new PIXI.Container()
var step1t,step2t,step3t
function setStep1(){//========================================================================================第一步
	pStage.addChild(step1)
	step1.y=(stageH-133-50-255)/2+133+50-150+50//300高的画布 居中
	step1.addChild(p1lineC,p1DotC)

	step1t=new Sprite(getTe(_CDN+"img/step1t.png"));
	step1t.y=-100

	p1setDot()
	step1Ani()

	step1.addChild(step1t)
	
}
function goStep1(){
	step1.visible=true
	step2.visible=false
	step3.visible=false
}
var dotA=[]
var moveDotPic
function p1setDot(){
	moveDotPic=new Sprite(getTe(_CDN+"img/p1_dot_on.png"));
	moveDotPic.pivot.set(27,23)
	step1.addChild(moveDotPic)
	moveDotPic.visible=false
	for (var i = 0; i < 7; i++) {
		var _dot=new Sprite(getTe(_CDN+"img/p1_dot.png"));
		_dot.pivot.set(13.5,10.5)
		p1DotC.addChild(_dot)
		dotA.push(_dot)
		_dot.x=120+i*400/6
		_dot.y=50+200*Math.random()
		if(i==0||i==6){_dot.y=300}
		_dot.interactive=true
		_dot.touchstart=selectDot
	};
	setP1line()

	
}

function step1Ani(){//=================step1动画
	for (var i = 1; i < 6; i++) {
		TweenMax.from(dotA[i],2,{y:300,ease:Elastic.easeOut,delay:i*.1,onUpdate:function(){
			setP1line()
		}})
	};
	
	TweenMax.from(step1t,3,{alpha:0})
}

function setP1line(){//=================刷新线
	var i
	for (i = 0; i < p1lineC.children.length; i++) {
		p1lineC.removeChildAt(0)
	};
	

	for (i = 0; i < dotA.length-1; i++) {
		var tilingSprite = drawdash(dotA[i].x,dotA[i].y,dotA[i+1].x,dotA[i+1].y,4);
		p1lineC.addChild(tilingSprite)
	};
	var tilingSprite = drawdash(90,300,560,300,4);
	p1lineC.addChild(tilingSprite)
}
var theDot,theDoti
var startX,startY,oldX,oldY
function selectDot(_e){

	for (var i = 0; i < 7; i++) {
		if(_e.target==dotA[i]){
			console.log(i)
			theDot=dotA[i]
			theDoti=i
		}
	};
	moveDotPic.x=theDot.x
	moveDotPic.y=theDot.y
	pStage.interactive=true
	pStage.touchmove=movingDot
	pStage.touchend=stopMovingDot
	startX=_e.data.global.x
	startY=_e.data.global.y
	oldX=moveDotPic.x
	oldY=moveDotPic.y
	theDot.interactive=false
	moveDotPic.visible=true
}

function movingDot(_e){
	var _x=oldX+_e.data.global.x-startX
	var _y=oldY+_e.data.global.y-startY
	_y=clamp(0,_y,300)
	if(theDoti==0){
		_x=120
		_y=300
	}else if(theDoti==6){
		_x=120+400
		_y=300
	}else{
		_x=clamp(dotA[theDoti-1].x,_x,dotA[theDoti+1].x)
	}
	


	moveDotPic.position.set(_x,_y)
	theDot.position.set(_x,_y)
	setP1line()
	//console.log(oldX+_e.data.global.x-startX)
}

function stopMovingDot(){
	pStage.touchmove=null
	theDot.interactive=true
	moveDotPic.visible=false
	setP1line()
}


var step2=new PIXI.Container()
var step2canvasC=new PIXI.Container()
function setStep2(){//========================================================================================第二步
	pStage.addChild(step2)
	step2.y=step1.y

	step2t=new Sprite(getTe(_CDN+"img/step2t.png"));
	step2t.y=-100
	step2.addChild(step2t,step2canvasC)

	step2.visible=false

}

function goStep2(){
	step1.visible=false
	step2.visible=true
	step3.visible=false

	setP2Line()
	// TweenMax.to(this,2,{smooth:0,repeat:1000,yoyo:true,onUpdate:function(){
	// 	setP2Line()
	// }})
}
var smooth=.75

function setP2Line(){
	if(step2canvasC.children.length>0){
		step2canvasC.removeChildren(0,step2canvasC.children.length-1)
	}
	var step2line=new Sprite(getTe(_CDN+"img/step2line.png"));
	step2canvasC.addChild(step2line)
	step2line.y=300-8//-16
	
	console.log("222222")
	for (var j = 0; j < dotA.length-1; j++) {//dotA.length-1
		
		//var j=0
		console.log(dotA[j].x,dotA[j].y,dotA[j+1].x,dotA[j+1].y)


		for (var i = 0; i < 50; i++) {
			var p0x,p0y,p1x,p1y,p2x,p2y,p3x,p3y

			var _apic=new Sprite(getTe(_CDN+"img/pen2.png"));

			_apic.pivot.set(8,8)
			TweenMax.set(_apic.scale,{x:.75+Math.random()*.5,y:.75+Math.random()*.5})

			// p0={x:dotA[j].x,y:dotA[j].x}
			// p1={x:dotA[j].x,y:dotA[j].y}
			// p2={x:dotA[j+1].x,y:dotA[j+1].y}
			// p3={x:dotA[j+1].x,y:dotA[j+1].y}


			// pp0={x:dotA[0].x,y:dotA[0].x}
			// pp1={x:dotA[0].x,y:dotA[0].y}
			// pp2={x:dotA[0+1].x,y:dotA[0+1].y}
			// pp3={x:dotA[0+1].x,y:dotA[0+1].y}

			p0x=dotA[j].x
			p0y=dotA[j].y
			p1x=dotA[j].x+smooth*(dotA[j+1].x-dotA[j].x)
			p1y=dotA[j].y+smooth*(dotA[j+1].y-dotA[j].y)
			p2x=dotA[j+1].x-smooth*(dotA[j+1].x-dotA[j].x)
			p2y=dotA[j+1].y-smooth*(dotA[j+1].y-dotA[j].y)
			p3x=dotA[j+1].x
			p3y=dotA[j+1].y

			if(j==0){
				p1x=dotA[j].x
				p0x-=10
				p0y+=20
			}
			if(j==5){
				p2x=dotA[j+1].x
				p3x+=10
				p3y+=20
			}


			// _apic.x=drawBezier(i*1/200,	pp0	,	pp1	,	pp2	,	pp3).x
			// _apic.y=drawBezier(i*1/200,	pp0	,	pp1	,	pp2	,	pp3).y

			_apic.x=drawBezier(i*1/50,	{x:p0x,y:p0y}	,	{x:p1x,y:p1y}	,	{x:p2x,y:p2y}	,	{x:p3x,y:p3y}).x
			_apic.y=drawBezier(i*1/50,	{x:p0x,y:p0y}	,	{x:p1x,y:p1y}	,	{x:p2x,y:p3y}	,	{x:p3x,y:p3y}).y

			step2canvasC.addChild(_apic)
			_apic.alpha=Math.random()*.25+.5
			//_apic.blendMode=_MULTIPLY
		//TweenMax.set(_apic.scale,{x:.15+Math.random()*.15,y:Math.random()*1+1.5})
			//TweenMax.set(_apic.scale,{x:.1,y:.1})
			//TweenMax.set(_apic,{height:(300-_apic.y)/4})
			TweenMax.set(_apic,{rotation:Math.random()*.5})
		};
	};
	
}



var step3=new PIXI.Container()
var step3canvasC=new PIXI.Container()
function setStep3(){//========================================================================================第二步
	pStage.addChild(step3)
	step3.y=step1.y

	step3t=new Sprite(getTe(_CDN+"img/step3t.png"));
	step3t.y=-100-3
	step3.addChild(step3t,step3canvasC)

	step3.visible=false
}

function goStep3(){
	step1.visible=false
	step2.visible=false
	step3.visible=true
}