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

var seasonbg1,seasonbg2,seasonbg3,seasonbg4
var seasonbgC=new PIXI.Container()
var seasonbgA=[]

function setPage1 () {//======================================第一页

	pStage.addChild(page1)
	p1bg=new Sprite(getTe(_CDN+"img/p1_bg.jpg"));//===背景
	p1bg.height=stageH
	page1.addChild(p1bg,seasonbgC,bottomBtnsC,midCanvasC)

	seasonbg1=new Sprite(getTe(_CDN+"img/bg1.jpg"));
	seasonbg2=new Sprite(getTe(_CDN+"img/bg2.jpg"));
	seasonbg3=new Sprite(getTe(_CDN+"img/bg3.jpg"));
	seasonbg4=new Sprite(getTe(_CDN+"img/bg4.jpg"));

	seasonbgA=[seasonbg1,seasonbg2,seasonbg3,seasonbg4]
	for (var i = 0; i < 4; i++) {
		seasonbgC.addChild(seasonbgA[i])
		seasonbgA[i].alpha=0
		seasonbgA[i].height=stageH
	};
	seasonbgA[0].alpha=1
	seasonbgC.alpha=0
	
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
	step1.y=(stageH-133-50-255)/2+133+50-150+50-25//300高的画布 居中
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
	TweenMax.to(seasonbgC,1,{alpha:0})
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
		_dot.y=50+250*Math.random()
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
var step2bar,step2mover
var step2barC=new PIXI.Container()
function setStep2(){//========================================================================================第二步
	pStage.addChild(step2)
	step2.y=step1.y

	step2t=new Sprite(getTe(_CDN+"img/step2t.png"));
	step2t.y=-100
	step2.addChild(step2t,step2canvasC,step2barC)

	step2.visible=false

	step2bar=new Sprite(getTe(_CDN+"img/step2bar.png"));
	
	step2barC.y=300+9+20+12

	step2mover=new Sprite(getTe(_CDN+"img/step2mover.png"));
	step2mover.pivot.set(23.5,23.5)
	step2mover.x=456-10//178
	step2mover.y=9
	step2barC.addChild(step2bar,step2mover)

	step2mover.interactive=true
	step2mover.touchstart=startMovingStep2Bar

	smooth=.75-(step2mover.x-178-10)/(456-10-178-10)*.55+.2
	smoothNum=parseInt((step2mover.x-178-10)/(456-10-178-10+1)*5)
	console.log("smoothNum==",smoothNum)
	setP2Line()
}
function startMovingStep2Bar(_e){
	pStage.interactive=true
	pStage.touchmove=movingStep2Bar
}

var smoothNum=0
function movingStep2Bar(_e){
	step2mover.x=_e.data.global.x
	step2mover.x=clamp(178+10,step2mover.x,456-10)
	smooth=.75-(step2mover.x-178-10)/(456-10-178-10)*.55+.2
	smoothNum=parseInt((step2mover.x-178-10)/(456-10-178-10+1)*5)
	console.log("smoothNum==",smoothNum)
	setP2Line()
}

function goStep2(){
	step1.visible=false
	step2.visible=true
	step3.visible=false
	TweenMax.to(seasonbgC,1,{alpha:0})
	setP2Line()
	// TweenMax.to(this,2,{smooth:0,repeat:1000,yoyo:true,onUpdate:function(){
	// 	setP2Line()
	// }})
}
var smooth=0

var finalDotA=[]

function setP2Line(){
	finalDotA=[]
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

			finalDotA.push(_apic)

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
var step3bgC=new PIXI.Container()
var step3color1,step3color2,step3color3,step3color4,step3colorA

var step3colorBarC=new PIXI.Container()
var colorbtnPicA=[]
var colorbtnA=[]

var step3btn_t

function setStep3(){//========================================================================================第三步
	pStage.addChild(step3)
	step3.y=step1.y

	step3t=new Sprite(getTe(_CDN+"img/step3t.png"));
	step3t.y=-100-3

	step3btn_t=new Sprite(getTe(_CDN+"img/step3btn_t.png"));

	step3.addChild(step3t,step3canvasC,step3colorBarC,step3btn_t)

	step3btn_t.y=stageH-step3.y-255

	step3.visible=false

	step3canvasC.addChild(step3bgC)

	//step3canvasC.y=-100

	step3color1=new Sprite(getTe(_CDN+"img/color1.png"));
	step3color2=new Sprite(getTe(_CDN+"img/color2.png"));
	step3color3=new Sprite(getTe(_CDN+"img/color3.png"));
	step3color4=new Sprite(getTe(_CDN+"img/color4.png"));
	step3bgC.addChild(step3color1,step3color2,step3color3,step3color4)
	step3colorA=[step3color1,step3color2,step3color3,step3color4]
	step3color2.alpha=step3color3.alpha=step3color4.alpha=0
	step3bgC.x=110
	step3bgC.y=0
	step3bgC.width=420
	step3bgC.height=400
	console.log("111")
	

	var colorbtn1=new Sprite(getTe(_CDN+"img/colorbtn1.png"));
	var colorbtn2=new Sprite(getTe(_CDN+"img/colorbtn2.png"));
	var colorbtn3=new Sprite(getTe(_CDN+"img/colorbtn3.png"));
	var colorbtn4=new Sprite(getTe(_CDN+"img/colorbtn4.png"));
	step3colorBarC.addChild(colorbtn1,colorbtn2,colorbtn3,colorbtn4)
	colorbtn2.visible=colorbtn3.visible=colorbtn4.visible=false

	colorbtnPicA=[colorbtn1,colorbtn2,colorbtn3,colorbtn4]

	step3colorBarC.y=300
	for (var i = 0; i < 4; i++) {
		var _btn=new PIXI.Graphics()
		_btn.beginFill(0x338866)
		_btn.drawRect(0,0,56,56)
		_btn.alpha=0
		colorbtnA.push(_btn)
		step3colorBarC.addChild(_btn)
		_btn.x=165+85*i
		_btn.interactive=true
		_btn.tap=changeColor
	};
}
var colorNum=0
function changeColor(_e){
	for (var i = 0; i < 4; i++) {
		if(_e.target==colorbtnA[i]){
			TweenMax.to(step3colorA[i],1,{alpha:1})
			TweenMax.to(seasonbgA[i],1,{alpha:1})

			
			colorbtnPicA[i].visible=true
			colorNum=i
			console.log("colorNum==",colorNum)
		}else{
			TweenMax.to(step3colorA[i],1,{alpha:0})
			TweenMax.to(seasonbgA[i],1,{alpha:0})
			colorbtnPicA[i].visible=false
		}
	};
}

function goStep3(){
	step1.visible=false
	step2.visible=false
	step3.visible=true
	TweenMax.to(seasonbgC,1,{alpha:1})
	setShape()
}

function setShape(){
	if(step3canvasC.children.length>1){
		step3canvasC.removeChildAt(1)
	}
	
	var theMask=new PIXI.Graphics()
	theMask.beginFill(0x889933)
	var pathA=[110,400]

	for (var i = 0; i < finalDotA.length; i++) {
		pathA.push(finalDotA[i].x)
		pathA.push(finalDotA[i].y)
	};

	pathA.push(530)
	pathA.push(400)

	theMask.drawPolygon(pathA)


	step3canvasC.addChild(theMask)
	step3bgC.mask=theMask
	step3bgC.height=theMask.height
	step3bgC.y=400-theMask.height
}

var page2=new PIXI.Container()
var p2bg,p2musicIco,p2car1,p2car2
var p2carC=new PIXI.Container()

function goFinal1(){//=======================================================最终第一步
	page1.visible=false
	step1.visible=false
	step2.visible=false
	step3.visible=false
	setResult()
	pStage.addChild(page2)
	setFinal2()

	p2bg=new Sprite(getTe(_CDN+"img/end1bg.jpg"));
	p2bg.height=stageH/971*(971+85)
	p2bg.y=-85*stageH/971

	p2musicIco=new Sprite(getTe(_CDN+"img/end1music.png"));
	//p2musicIco.blendMode=_MULTIPLY
	p2musicIco.y=stageH/2+84

	p2car1=new Sprite(getTe(_CDN+"img/end1car1.png"));
	p2car2=new Sprite(getTe(_CDN+"img/end1car2.png"));
	p2carC.addChild(p2car1,p2car2)
	if(main.carIndex==2){
		p2car1.visible=false
		p2car2.visible=true
	}else{
		p2car1.visible=true
		p2car2.visible=false
	}

	p2carC.y=stageH/2-42

	step3canvasC.y=stageH/2+20-275-(400-step3canvasC.height)/2
	console.log("step3canvasC.height",step3canvasC.height)

	var shan1=new Sprite(getTe(_CDN+"img/end2shan1.jpg"));
	var shan2=new Sprite(getTe(_CDN+"img/end2shan2.jpg"));
	var shan3=new Sprite(getTe(_CDN+"img/end2shan3.jpg"));
	var shan4=new Sprite(getTe(_CDN+"img/end2shan4.jpg"));

	end2shanA=[shan1,shan2,shan3,shan4]
	end2shanC.addChild(shan1,shan2,shan3,shan4)
	end2shanC.y=stageH/2-241
	end2shanC.scale.x=end2shanC.scale.y=640/750

	shan1.blendMode=_MULTIPLY
	shan2.blendMode=_MULTIPLY
	shan3.blendMode=_MULTIPLY
	shan4.blendMode=_MULTIPLY

	page2.addChild(p2bg,end2shanC,step3canvasC,p2musicIco,p2carC)

	
	setEnd1t()

	var i
	for (i = 0; i < 4; i++) {
		end2shanA[i].blendMode=_MULTIPLY
		if(i==colorNum){
			end2shanA[i].visible=true
		}else{
			end2shanA[i].visible=false
		}
	};

	for (i = 0; i <20; i++) {
		var j=i+1
		var _endt=new Sprite(getTe(_CDN+"img/text"+j+".png"));
		
		_endt.y=stageH/2-296
		_endt.x=593
		_endt.pivot.set(563,114)
		_endt.scale.x=_endt.scale.y=64/75
		endTA.push(_endt)
		endTextC.addChild(_endt)
	};
	

	for (i = 0; i <20; i++) {
		if(i==resultNum){
			endTA[i].visible=true
		}else{
			endTA[i].visible=false
		}
	};
	page2.addChild(endTextC)


	//goback()
}
//===================================================================================================================End1 随机结果
var resultNum=0
var resultTA=[
[["遍野青山无尽荒凉"],["有你的梦却伴着花香"],[""],["天下无双"]],
[["我笑无情人懵懂"],["我愿在她手掌中"],[""],["心爱"]],
[["塞外风沙野茫茫"],["无惧雪霜逐草四方"],[""],["铁血丹心"]],
[["英雄有志无惧天高"],["万般世态任逍遥"],[""],["任逍遥"]],
[["快意江湖痛快爱恨"],["只要够胆试"],[""],["叱咤红人"]],

[["海阔天高，踏遍千山"],["静看这世界的风起云涌"],[""],["风起云涌"]],
[["仰望天空笑问苍穹"],["究竟这世上什么最劲"],[""],["绝世绝招"]],
[["肆意追赶心中美梦"],["从来无愧这一生"],[""],["活得潇洒"]],
[["不畏风雨落日"],["也无惧山海路长"],[""],["难念的经"]],
[["只要有你情浓"],["江湖恩怨轻似风"],[""],["刀剑若梦"]],

[["大浪滔淘，江湖纷扰"],["这一世豪情又剩多少"],[""],["沧海一声笑"]],
[["放开江湖纷扰自由自在"],["淡漠繁华不再开怀"],[""],["归去来"]],
[["人外有人山外有山"],["得失看淡只求随遇而安"],[""],["随遇而安"]],
[["男儿侠气世间走一遭"],["纵马江湖任逍遥"],[""],["纵横江湖"]],
[["望断天涯"],["赢了天下输了她"],[""],["天涯"]],

[["春去秋来宿命安排"],["冰雪寒夜藏不了你的光彩"],[""],["追梦人"]],
[["长路漫漫，与你同行"],["携手把梦追寻"],[""],["雪中情"]],
[["滔滔江水留不住"],["一身豪情壮志铁骨"],[""],["江湖笑"]],
[["风冷不逃花美不要"],["天地纵横任我飘摇"],[""],["笑红尘"]],
[["爱，"],["何以对这世界雪中送火"],[""],["神话情话"]],



]

// [
// [["十里春风，雨水清酒"],["都不如远方山上的你"],[""],["春风十里"]],

// [["群山之间，春风拂面"],["你我一起"],["享受自由，拥抱阳光"],["彩云之巅"]],
// [["高山湖泊森林沙漠"],["我们路过喜怒哀乐"],["坚定走下去，这茫茫旅途"],["旅途"]],


// [["走一走这天南地北"],["抛下所有的烦恼和疲惫"],[""],["远走高飞"]],
// [["只为矗立在最高的山顶"],["冷艳嘲笑都不重要"],["向前跑"],["追梦赤子心"]],

// [["走过江河山川，人山人海"],["平凡才是唯一的答案"],["就这样向前走，就这么走"],["平凡之路"]],
// [["深情一片青山白云等你来收"],["这美丽的世界，我已经拥有"],[""],["心升明月"]],
// [["时光流水般带我飘向远方"],["最美还是故乡的山川"],[""],["故乡山川"]],

// [["海阔天高，踏遍千山"],["静看这世界的风起云涌"],[""],["风起云涌"]],
// [["长路漫漫，与你同行"],["携手把梦追寻"],[""],["雪中情"]],
// [["不畏风雨落日"],["也无惧山海路长"],[""],["难念的经"]],
// [["大浪滔淘，江湖纷扰"],["这一世豪情又剩多少"],[""],["沧海一声笑"]],
// [["遍野青山无尽荒凉"],["有你的梦却伴着花香"],[""],["天下无双"]],
// [["人外有人山外有山"],["得失看淡只求随遇而安"],[""],["随遇而安"]],
// [["英雄有志无惧天高"],["万般世态任逍遥"],[""],["任逍遥"]],

// ]

// [
// [["十里春风，雨水清酒"],["都不如远方山上的你"],[""],["春风十里"]],
// [["踽踽独行，不知疲倦"],["山丘背后，是否还有人等候"],[""],["山丘"]],
// [["群山之间，春风拂面"],["你我一起"],["享受自由，拥抱阳光"],["彩云之巅"]],
// [["高山湖泊森林沙漠"],["我们路过喜怒哀乐"],["坚定走下去，这茫茫旅途"],["旅途"]],
// [["青山白云，蝴蝶清涧"],["漫长的路上我们相聚分离"],[""],["旅行」"]],
// [["穿山越岭并不远"],["每一次思念都是一次试炼"],[""],["思念是一种病」"]],
// [["走一走这天南地北"],["抛下所有的烦恼和疲惫"],[""],["远走高飞"]],
// [["只为矗立在最高的山顶"],["冷艳嘲笑都不重要"],["向前跑"],["追梦赤子心"]],
// [["越过高山踏过江海"],["遥远的地方，总会有一个你"],[""],["我一定会爱上你"]],
// [["走过江河山川，人山人海"],["平凡才是唯一的答案"],["就这样向前走，就这么走"],["平凡之路"]],
// [["深情一片青山白云等你来收"],["这美丽的世界，我已经拥有"],[""],["心升明月"]],
// [["时光流水般带我飘向远方"],["最美还是故乡的山川"],[""],["故乡山川"]],
// ]
function setResult(){
	//resultNum=parseInt(Math.random()*15)
	resultNum=colorNum*5+smoothNum
}


//===================================================================================================================End1 文案
var style1_1=new PIXI.TextStyle({
	fontSize:33*.75,//25
	fill:0x3f4f5c,
	stroke:"0x3f4f5c",
	strokeThickness:1
})
var style1_2=new PIXI.TextStyle({
	fontSize:33*.75,
	fill:0x517990,
	stroke:"0x517990",
	strokeThickness:1
})

var style2_1=new PIXI.TextStyle({
	fontSize:33*.75,
	fill:0x3f4f5c,
	stroke:"0x3f4f5c",
	strokeThickness:1
})
var style2_2=new PIXI.TextStyle({
	fontSize:33*.75,
	fill:0x517990,
	stroke:"0x517990",
	strokeThickness:1
})

var style3_1=new PIXI.TextStyle({
	fontSize:33*.75,
	fill:0x3f4f5c,
	stroke:"0x3f4f5c",
	strokeThickness:1
})

var style4=new PIXI.TextStyle({
	fontSize:21,
	fill:0x517990,
	stroke:"0x517990",
	strokeThickness:1
})



var t1_1=new PIXI.Text("金庸武侠名曲",style1_1)
var t1_2=new PIXI.Text("sn",style1_2)
var t1_3=new PIXI.Text("",style1_1)

var t2_1=new PIXI.Text("居然与",style2_1)
var t2_2=new PIXI.Text("n",style2_2)
var t2_3=new PIXI.Text("手绘的山岳，完美匹配",style2_1)

var t3_1=new PIXI.Text("画山成岳 探悠悠江湖",style3_1)

var t4_1=new PIXI.Text("",style4)
var t4_2=new PIXI.Text("",style4)
var t4_3=new PIXI.Text("",style4)
var t4_4=new PIXI.Text("",style4)

var end1t1C=new PIXI.Container()
var tBar//=new PIXI.Graphics()

var playIcon

function setEnd1t(){
	page2.addChild(end1t1C)

	// tBar.beginFill(0x517990)
	// tBar.drawRect(0,0,8,102)
	// tBar.position.set(50,stageH/2-11)

	tBar=new Sprite(getTe(_CDN+"img/tbar.png"));
	tBar.y=stageH/2-104

	//playIcon=new Sprite(getTe(_CDN+"img/musicico.png"));
	end1t1C.addChild(t1_1,t1_2,t1_3,t2_1,t2_2,t2_3,t3_1,tBar)//,t4_1,t4_2,t4_3,t4_4,playIcon
	t1_2.text=resultTA[resultNum][3]//main.nickname
	t2_2.text=main.nickname

	
	t1_1.position.set(590-t1_2.width-10-t1_1.width,stageH/2-284)
	t1_2.position.set(590-t1_2.width,stageH/2-284)


	t2_1.position.set(590-t2_3.width-10-t2_2.width-10-t2_1.width,stageH/2-254)
	t2_2.position.set(590-t2_3.width-10-t2_2.width,stageH/2-254)
	t2_3.position.set(590-t2_3.width,stageH/2-254)

	t3_1.position.set(590-t3_1.width,stageH/2-224)


	// t1_1.position.set(50,stageH/2-405+3)
	// t1_2.position.set(t1_1.x+t1_1.width,stageH/2-405+3)
	// t1_3.position.set(t1_2.x+t1_2.width+10,stageH/2-405+3)

	// t2_1.position.set(50,stageH/2-367)
	// t2_2.position.set(t2_1.x+t2_1.width,stageH/2-367)
	// t2_3.position.set(t2_2.x+t2_2.width,stageH/2-367)

	// t3_1.position.set(50,stageH/2-324-10)

	// t4_1.text=resultTA[resultNum][0]
	// t4_2.text=resultTA[resultNum][1]
	// t4_3.text=resultTA[resultNum][2]
	// t4_4.text="- "+resultTA[resultNum][3]



	// t4_1.position.set(64,stageH/2-11)
	// t4_2.position.set(64,stageH/2-11+27*1)
	// t4_3.position.set(64,stageH/2-11+27*2)
	// t4_4.position.set(64,stageH/2-11+27*3)

	// playIcon.x=t4_4.x+t4_4.width+10
	// playIcon.y=t4_4.y

	step3canvasC.y+=47-50
	step3canvasC.x-=108+40
	//goFinal2()//=====
}

//=================================================================
var page3=new PIXI.Container()
var logo,logo_down,QR
var end2shanC=new PIXI.Container()
var end2shanA=[]

var style1_1b=new PIXI.TextStyle({
	fontSize:25,
	fill:0x3f4f5c,
	stroke:"0x3f4f5c",
	strokeThickness:1
})
var style1_2b=new PIXI.TextStyle({
	fontSize:25,
	fill:0x517990,
	stroke:"0x517990",
	strokeThickness:1
})

var t1_1b=new PIXI.Text("属于",style1_1b)
var t1_2b=new PIXI.Text("name",style1_2b)
var t1_3b=new PIXI.Text("画的山岳",style1_1b)

var t2_1b=new PIXI.Text("与",style1_1b)
var t2_2b=new PIXI.Text("万重山-100KM",style1_2b)
var t2_3b=new PIXI.Text("匹配",style1_1b)

var end2t1C=new PIXI.Container()

var endTextC=new PIXI.Container()
var endTA=[]

var p2musicIco2

function setFinal2(){
	pStage.addChild(page3)
	page3.visible=false
	logo=new Sprite(getTe(_CDN+"img/logo.png"));
	logo_down=new Sprite(getTe(_CDN+"img/logo-down.png"));
	QR=new Sprite(getTe(_CDN+"img/qr.png"));

	logo_down.y=stageH-136
	logo_down.x=10

	QR.y=stageH/2-104

	

	
	//end2shanC.blendMode=_MULTIPLY

	

	t1_2b.text=main.nickname
	t2_2b.text="「"+resultTA[resultNum][3]+"」"

	console.log("resultNum,",resultTA[resultNum][3])

	t1_1b.position.set(45,stageH/2*0+971/2-349)
	t1_2b.position.set(t1_1b.x+t1_1b.width+10,stageH/2*0+971/2-349)
	t1_3b.position.set(t1_2b.x+t1_2b.width+10,stageH/2*0+971/2-349)

	t2_1b.position.set(45,stageH/2*0+971/2-317)
	t2_2b.position.set(t2_1b.x+t2_1b.width,stageH/2*0+971/2-317)
	t2_3b.position.set(t2_2b.x+t2_2b.width,stageH/2*0+971/2-317)

	// p2musicIco2=new Sprite(getTe(_CDN+"img/end2music.png"));
	// p2musicIco2.y=stageH/2+77

	//end2t1C.addChild(t1_1b,t1_2b,t1_3b,t2_1b,t2_2b,t2_3b)
	page3.addChild(logo,logo_down,QR,end2t1C)//p2musicIco2
	//page2.addChild(endTextC)

}
function goFinal2(){
	var i
	// for (i = 0; i < 4; i++) {
	// 	end2shanA[i].blendMode=_MULTIPLY
	// 	if(i==colorNum){
	// 		end2shanA[i].visible=true
	// 	}else{
	// 		end2shanA[i].visible=false
	// 	}
	// };
	tBar.visible=false
	end2shanC.y+=10

	

	//end1t1C.visible=false
	page3.visible=true
	p2bg.y=0
	step3canvasC.y+=10//+=47-50
	//step3canvasC.x//-=108+40
	//p2carC.x-=10
	p2carC.y+=50
	p2musicIco.y+=50
}
function shareDone(){
	//end1t1C.visible=true
	tBar.visible=true
	page3.visible=false
	p2bg.y=-85*stageH/971
	step3canvasC.y-=10
	//step3canvasC.x+=108+40
	//p2carC.x+=10
	end2shanC.y-=10
	p2carC.y-=50
	p2musicIco.y-=50
}
function goback(){
	step3.visible=true
	page1.visible=true
	nowStep=3

	step3.addChild(step3t,step3canvasC,step3colorBarC,step3btn_t)
	step3canvasC.position.set(0,0)

}