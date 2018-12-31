//=======================================================================================移动背景

var bgTA=["社畜","火锅","冰淇淋","硬核","孤独","引人入胜","文艺复兴","现实主义","猫","乌合之众","单向度的人","成熟","大人","努力加餐饭","身不由己","吃瓜群众","散文诗","小鲜肉","zqsg","确认过眼神","小仙女","锦鲤","真香","skr","失望","丧","艰难","大猪蹄子","微笑","弱小但能吃","C位出道","社会人","正能量","官宣","求生欲","无","小老弟","凉凉","钱","安排","快乐肥宅","？？？","在边缘试探","皮一下","告别"]
var bgTC=new PIXI.Container()
function setBGT(){
	mainC.addChild(bgTC)
	for (var i = 0; i < bgTA.length; i++) {
		var fs=Math.random()*25+5
		var _t=new PIXI.Text(bgTA[i],{
			fontSize:fs,
			fill:0x1a1a1a,
			breakWords:true,
			wordWrap:true,
			wordWrapWidth:1,
			//dropShadow:true,dropShadowAlpha:1.5,dropShadowBlur:32,dropShadowDistance:0
		})
		bgTC.addChild(_t)
		_t.x=Math.random()*640
		_t.y=Math.random()*stageH-50
		_t.alpha=0//.2+Math.random()*.2
		var _dt=Math.random()*2+2
		
		if(Math.random()<.5){
			var _dy="-="+Math.random()*100
		}else{
			var _dy="+="+Math.random()*100
		}
		if(Math.random()<.5){
			var _dx="-="+Math.random()*100
		}else{
			var _dx="+="+Math.random()*100
		}
		TweenMax.to(_t,_dt,{x:_dx,y:_dy,repeat:100000,ease:Linear.easeNone})
		TweenMax.to(_t,_dt/1.8,{alpha:.15+Math.random()*.15,repeat:100000,yoyo:true,ease:Linear.easeNone})
	};
}

//==================================================================================================123题预设
var arrow
var hint123,hint123b
var clickme
function setQ123(){
	arrow=new Sprite(getTe(_CDN+"img/arrow.png"));
	hint123=new Sprite(getTe(_CDN+"img/hint123.png"));
	hint123b=new Sprite(getTe(_CDN+"img/hint123b.png"));
	clickme=new Sprite(getTe(_CDN+"img/clickme.png"));
	mainC.addChild(arrow,hint123,hint123b,clickme)
	hint123.y=stageH-21-50
	hint123.alpha=0
	hint123b.y=stageH-21-50
	arrow.y=stageH-28-20
	clickme.y=stageH-120
	TweenMax.to(arrow,1,{y:stageH-28-0,repeat:1000000,yoyo:true})
	TweenMax.from(hint123b,1,{alpha:0,y:"+=50"})
	arrow.visible=false

	pStage.interactive=true
  pStage.touchstart=touchStart

  clickme.visible=false
  //clickme.interactive=true
  //clickme.tap=goNextPage
}


//==================================================================================================第一题
var q1C=new PIXI.Container()
var q1BtnA=[]
var q1TA=[]
var q1t

function setQ1(){
	mainC.addChild(q1C)
	var _qPicXYA=[[263,stageH/2-331,103],[464,stageH/2-10,119],[202,stageH/2+235,114]]
	q1t=new Sprite(getTe(_CDN+"img/q1t.png"));
	q1C.addChild(q1t)
	for (var i = 0; i < 3; i++) {
		var j=i+1
		var _qPic=new Sprite(getTe(_CDN+"img/q1_"+j+"2.png"));
		var _qT=new Sprite(getTe(_CDN+"img/q1_"+j+"1.png"));
		var _qResult=new Sprite(getTe(_CDN+"img/q1t"+j+".png"));
		_qResult.alpha=0
		q1TA.push(_qResult)

		q1C.addChild(_qPic,_qT,_qResult)
		_qPic.pivot.set(_qPicXYA[i][0],_qPicXYA[i][2])
		_qPic.position.set(_qPicXYA[i][0],_qPicXYA[i][1])

		q1BtnA.push(_qPic)
		_qPic.interactive=true
		_qPic.tap=selectQ1

		_qT.pivot.set(_qPicXYA[i][0],_qPicXYA[i][2])
		_qT.position.set(_qPicXYA[i][0],_qPicXYA[i][1])
		
		TweenMax.from(_qPic,3,{alpha:0,delay:i*.5})
		TweenMax.from(_qPic.scale,2,{x:1.5,y:1.5,delay:i*.5})

		TweenMax.from(_qT,3,{y:"+=200",delay:i*.5+.5,ease:Back.easeOut})
		TweenMax.from(_qT,3,{alpha:0,delay:i*.5+.5})
	};
}


function selectQ1(_e){
	for (var i = 0; i < 3; i++) {
		TweenMax.to(q1TA[i],1,{alpha:0})
		TweenMax.to(q1BtnA[i],1,{alpha:0.4})
		TweenMax.to(q1BtnA[i].scale,1,{x:1,y:1})
		if(_e.target==q1BtnA[i]){
			console.log("第一题选",i)
			main.changeSond(i)
			userResult[0]=i
			TweenMax.set(q1TA[i],{alpha:0,y:50})
			TweenMax.to(q1TA[i],2,{alpha:1,y:0})
			TweenMax.to(q1BtnA[i],1,{alpha:1})
			TweenMax.to(q1BtnA[i].scale,1,{x:1.1,y:1.1})
		}
	};
	clickme.visible=true
	mainC.addChild(clickme)
	arrow.visible=true
	ifCanScorll=1
	TweenMax.to(q1t,1,{alpha:0})
	TweenMax.to(hint123b,.5,{alpha:0})
}

//==================================================================================================第二题
var q2C=new PIXI.Container()
var q2BtnA=[]
var q2TA=[]
var q2ta,q2tb

function setQ2(){
	mainC.addChild(q2C)
	q2ta=new Sprite(getTe(_CDN+"img/q2ta.png"));
	q2C.addChild(q2ta)
	TweenMax.from(q2ta,1,{alpha:0,delay:1})

	q2tb=new Sprite(getTe(_CDN+"img/q2tb.png"));
	q2C.addChild(q2tb)
	q2tb.alpha=0
	q2tb.position.set(640-111,stageH-366)

	var _qPicXYA=[[263,stageH/2-331,103],[490,stageH/2-10,119],[290,stageH/2+277,114]]
	for (var i = 0; i < 3; i++) {
		var j=i+1
		var _qPic=new Sprite(getTe(_CDN+"img/q2_"+j+"2.png"));
		var _qT=new Sprite(getTe(_CDN+"img/q2_"+j+"1.png"));
		var _qResult=new Sprite(getTe(_CDN+"img/q2t"+j+".png"));
		_qResult.alpha=0
		q2TA.push(_qResult)

		q2C.addChild(_qPic,_qT,_qResult)
		_qPic.pivot.set(_qPicXYA[i][0],_qPicXYA[i][2])
		_qPic.position.set(_qPicXYA[i][0],_qPicXYA[i][1])

		q2BtnA.push(_qPic)
		_qPic.interactive=true
		_qPic.tap=selectQ2

		_qT.pivot.set(_qPicXYA[i][0],_qPicXYA[i][2])
		_qT.position.set(_qPicXYA[i][0],_qPicXYA[i][1])
		
		TweenMax.from(_qPic,3,{alpha:0,delay:i*.5})
		TweenMax.from(_qPic.scale,2,{x:1.5,y:1.5,delay:i*.5})

		TweenMax.from(_qT,3,{y:"+=200",delay:i*.5+.5,ease:Back.easeOut})
		TweenMax.from(_qT,3,{alpha:0,delay:i*.5+.5})
	};
}


function selectQ2(_e){
	for (var i = 0; i < 3; i++) {
		TweenMax.to(q2TA[i],1,{alpha:0})
		TweenMax.to(q2BtnA[i],1,{alpha:0.4})
		TweenMax.to(q2BtnA[i].scale,1,{x:1,y:1})
		if(_e.target==q2BtnA[i]){
			console.log("第二题选",i)
			userResult[1]=i
			TweenMax.set(q2TA[i],{alpha:0,x:30})
			TweenMax.to(q2TA[i],2,{alpha:1,x:0,ease:Elastic.easeOut})
			TweenMax.to(q2BtnA[i],1,{alpha:1})
			TweenMax.to(q2BtnA[i].scale,1,{x:1.1,y:1.1})
		}
	};
	TweenMax.to(q2tb,1,{alpha:1,delay:1})
	arrow.visible=true
	ifCanScorll=1
	TweenMax.to(hint123,.5,{alpha:0})
	clickme.visible=true
	mainC.addChild(clickme)
}

//==================================================================================================第三题
var q3C=new PIXI.Container()
var q3BtnA=[]
var q3TA=[]
var q3ta,q3tb

function setQ3(){
	mainC.addChild(q3C)
	q3ta=new Sprite(getTe(_CDN+"img/q3ta.png"));
	q3C.addChild(q3ta)
	TweenMax.from(q3ta,1,{alpha:0,delay:1})

	q3tb=new Sprite(getTe(_CDN+"img/q3tb.png"));
	q3C.addChild(q3tb)
	q3tb.alpha=0
	q3tb.position.set(640-111,stageH-366)

	var _qPicXYA=[[263,stageH/2-331,103],[490,stageH/2-10,119],[290,stageH/2+277,114]]
	for (var i = 0; i < 3; i++) {
		var j=i+1
		var _qPic=new Sprite(getTe(_CDN+"img/q3_"+j+"2.png"));
		var _qT=new Sprite(getTe(_CDN+"img/q3_"+j+"1.png"));
		var _qResult=new Sprite(getTe(_CDN+"img/q3t"+j+".png"));
		_qResult.alpha=0
		q3TA.push(_qResult)

		q3C.addChild(_qPic,_qT,_qResult)
		_qPic.pivot.set(_qPicXYA[i][0],_qPicXYA[i][2])
		_qPic.position.set(_qPicXYA[i][0],_qPicXYA[i][1])

		q3BtnA.push(_qPic)
		_qPic.interactive=true
		_qPic.tap=selectQ3

		_qT.pivot.set(_qPicXYA[i][0],_qPicXYA[i][2])
		_qT.position.set(_qPicXYA[i][0],_qPicXYA[i][1])
		
		TweenMax.from(_qPic,3,{alpha:0,delay:i*.5})
		TweenMax.from(_qPic.scale,2,{x:1.5,y:1.5,delay:i*.5})

		TweenMax.from(_qT,3,{y:"+=200",delay:i*.5+.5,ease:Back.easeOut})
		TweenMax.from(_qT,3,{alpha:0,delay:i*.5+.5})
	};
}


function selectQ3(_e){
	for (var i = 0; i < 3; i++) {
		TweenMax.to(q3TA[i],1,{alpha:0})
		TweenMax.to(q3BtnA[i],1,{alpha:0.4})
		TweenMax.to(q3BtnA[i].scale,1,{x:1,y:1})
		if(_e.target==q3BtnA[i]){
			console.log("第三题选",i)
			userResult[2]=i
			TweenMax.set(q3TA[i],{alpha:0,x:30})
			TweenMax.to(q3TA[i],2,{alpha:1,x:0,ease:Elastic.easeOut})
			TweenMax.to(q3BtnA[i],1,{alpha:1})
			TweenMax.to(q3BtnA[i].scale,1,{x:1.1,y:1.1})
		}
	};
	TweenMax.to(q3tb,1,{alpha:1,delay:1})
	arrow.visible=true
	ifCanScorll=1
	TweenMax.to(hint123,.5,{alpha:0})
	clickme.visible=true
	mainC.addChild(clickme)
}

//==================================================================================================UGC1
var userResult=[999,999,999]
var ugcC=new PIXI.Container()
var utitle
var usong//=new PIXI.Container()
var u1c=new PIXI.Container()
var u2c=new PIXI.Container()
var u3c=new PIXI.Container()
var uta,utb
var udisc=new PIXI.Container()
var ud0,udz
function setUGC(){
	console.log("UGC,结果",userResult)
	mainC.addChild(ugcC)

	utitle=new Sprite(getTe(_CDN+"img/utitle.png"));
	var j=userResult[1]*3+userResult[2]+1//Math.floor(Math.random()*7+1)//userResult[1]*3+userWord[2]*3
	usong=new Sprite(getTe(_CDN+"img/us"+j+".png"));

	TweenMax.from(utitle,1.5,{alpha:0,delay:0.5})
	TweenMax.from(usong,2.5,{y:"+=50",alpha:0,delay:1,ease:Elastic.easeOut})

	var i
	for (i = 0; i < 3; i++) {
		var _u0=new Sprite(getTe(_CDN+"img/u0"+i+".png"));
		var _u1=new Sprite(getTe(_CDN+"img/u1"+i+".png"));
		var _u2=new Sprite(getTe(_CDN+"img/u2"+i+".png"));

		u1c.addChild(_u0)
		u2c.addChild(_u1)
		u3c.addChild(_u2)

		if(i!=userResult[0]){			_u0.visible=false		}
		if(i!=userResult[1]){			_u1.visible=false		}
		if(i!=userResult[2]){			_u2.visible=false		}
	};
	
	u1c.y=u2c.y=u3c.y=stageH/2-239*stageH/1000
	TweenMax.from(u1c,2.5,{delay:1+.4*0,y:"+=30",ease:Back.easeOut})
	TweenMax.from(u1c,2.5,{delay:1+.4*0,alpha:0})

	TweenMax.from(u2c,2.5,{delay:1+.4*1,y:"-=30",ease:Back.easeOut})
	TweenMax.from(u2c,2.5,{delay:1+.4*1,alpha:0})

	TweenMax.from(u3c,2.5,{delay:1+.4*2,y:"+=30",ease:Back.easeOut})
	TweenMax.from(u3c,2.5,{delay:1+.4*2,alpha:0})

	uta=new Sprite(getTe(_CDN+"img/ut.png"));
	utb=new Sprite(getTe(_CDN+"img/ut"+Math.floor(Math.random()*3+1)+".png"));

	uta.y=utb.y=stageH-434
	TweenMax.from(uta,2.5,{alpha:0,delay:2})
	TweenMax.from(utb,2.5,{alpha:0,delay:3})

	ugcC.addChild(utitle,usong,u1c,u2c,u3c,uta,utb,udisc)

	for (i = 0; i < 15; i++) {
		var k=i+1
		var _ud=new Sprite(getTe(_CDN+"img/ud"+(i+1)+".png"));
		udisc.addChild(_ud)
		_ud.pivot.set(320,321)
		_ud.position.set(320,stageH)
		_ud.scale.set(0.85,0.85)
		if(i==5){
			_ud.scale.set(0.75,0.75)
		}
		var _s=Math.random()*.1+.95
		TweenMax.to(_ud.scale,1.5,{x:_s,y:_s,delay:3+.005*i,ease:Elastic.easeOut,onComplete:twdisc,onCompleteParams:[_ud]})
		//TweenMax.to(_ud,1.5,{rotation:Math.PI/180*5*(Math.random()*2-1),repeat:100000,yoyo:true,delay:.05*i+Math.random()*.5,ease:Sine.easeInOut})
		
	};
	setTimeout(UGCdone,4000)
	ud0=new Sprite(getTe(_CDN+"img/ud0.png"));
	udz=new Sprite(getTe(_CDN+"img/upicz.png"));

	//udisc.addChild(ud0,udz)
	ud0.y=stageH-321
	

	udz.pivot.set(640,196)
	udz.position.set(640,stageH-123)
	udz.rotation=-Math.PI/180*15
	TweenMax.to(udz,.5,{rotation:0,delay:3})

	var _discAll=new Sprite(getTe(_CDN+"img/page1disc.png"));
	_discAll.scale.y=-1
	_discAll.y=stageH

	udisc.addChild(ud0,_discAll,udz)
	
	TweenMax.to(_discAll,.5,{alpha:0,delay:3})
	TweenMax.from(udisc,4,{y:"+=320"})
}

function twdisc(_tar){
	var _s=Math.random()*.1+.95
	//console.log(_tar)
	TweenMax.to(_tar.scale,Math.random()*Math.random()*Math.random()*5+.5,{x:_s,y:_s,delay:Math.random()*5,ease:Back.easeInOut,onComplete:twdisc,onCompleteParams:[_tar]})
}


function UGCdone(){
	console.log("UGC截图1")
	ugc.takeUGC()
	pStage.interactive=true
	pStage.tap=goKeywordPage
}

var userWord=0

var page1=new PIXI.Container()
var p1disc
var p1tC=new PIXI.Container()
var p1ren,p1hint
var colorAC=new PIXI.Container()
var _colorb

function goKeywordPage(){

	pStage.interactive=false
	TweenMax.to(ugcC,1,{y:-stageH})
	TweenMax.from(page1,1,{y:stageH})

	console.log("关键词页")
	

	mainC.addChild(page1)

	p1disc=	new Sprite(getTe(_CDN+"img/page1disc.png"));

	var p1ta=new Sprite(getTe(_CDN+"img/page1t.png"));
	var p1tb=new Sprite(getTe(_CDN+"img/page1t"+(userWord+1)+".png"));
	p1tC.addChild(p1ta,p1tb)
	p1tC.pivot.y=372/2
	p1tC.y=stageH/2-9
	
	p1ren=new Sprite(getTe(_CDN+"img/page1ren.png"));
	p1ren.y=stageH-299

	TweenMax.from(p1ta,2,{y:"+=150",delay:.3})
	TweenMax.from(p1tb,2,{y:"+=180",delay:.4})
	TweenMax.from(p1ren,2,{y:"+=210",delay:.5,onComplete:showP1hint})

	p1hint=new Sprite(getTe(_CDN+"img/page1hint.png"));
	p1hint.y=stageH-108
	p1hint.visible=false
	TweenMax.to(p1hint,1,{y:"+=15",repeat:100000,yoyo:true})

	colorAC.y=stageH-132
	var _colora=new Sprite(getTe(_CDN+"img/colora"+userWord+".png"));
	_colorb=new Sprite(getTe(_CDN+"img/colora"+userWord+"b.png"));
	_colorb.alpha=1
	colorAC.addChild(_colora,_colorb)
	page1.addChild(p1disc,p1tC,p1ren,p1hint,colorAC)

}

function showP1hint(){
	setPage2()

	console.log("关键词页截图2")
	//_colorb.alpha=0
	ugc.takeUGC()
	//_colorb.alpha=1
	p1hint.visible=true
	pStage.interactive=true
	pStage.tap=goPage2
}


var page2=new PIXI.Container()
var lineBG=new PIXI.Container()
var colorBG=new PIXI.Container()
var khC=new PIXI.Container()
var logo,slogen
var _khbA=[]
var _linebgbA=[]
function setPage2(){
	mainC.addChild(page2)
	page2.y=stageH
	
	
	for (var i = 0; i < 4; i++) {
		var _linebg=new Sprite(getTe(_CDN+"img/line"+(i+1)+".jpg"));
		var _linebgb=new Sprite(getTe(_CDN+"img/line"+(i+1)+"b.jpg"));
		lineBG.addChild(_linebg,_linebgb)
		if(i!=userWord){
			_linebg.visible=false
			_linebgb.visible=false
		}else{
			_linebgbA.push(_linebgb)
		}
		var _kh=new Sprite(getTe(_CDN+"img/kh"+(i+1)+".jpg"));
		var _khb=new Sprite(getTe(_CDN+"img/kh"+(i+1)+"b.jpg"));
		khC.addChild(_kh,_khb)
		if(i!=userWord){
			_kh.visible=false
			_khb.visible=false
		}else{
			_khbA.push(_khb)
			//_khbA=[_khb]
		}
	};

	lineBG.height=stageH

	colorBGa=new Sprite(getTe(_CDN+"img/colorbg.jpg"));
	colorBGa.height=stageH*3

	colorBGb=new Sprite(getTe(_CDN+"img/colorbgb.jpg"));
	colorBGb.height=stageH
	colorBG.addChild(colorBGa,colorBGb)
	//colorBG.y=stageH

	khC.y=stageH-50-335-10
	colorBG.y=khC.y

	logo=new Sprite(getTe(_CDN+"img/logo.png"));
	slogen=new Sprite(getTe(_CDN+"img/slogen.png"));

	logo.pivot.y=26.5
	logo.y=stageH/2-205*stageH/1000

	slogen.pivot.y=395/2-20
	slogen.y=stageH/2-205*stageH/1000

	page2.addChild(lineBG,logo,slogen,colorBG,khC)
}

function goPage2(){
	pStage.interactive=false
	TweenMax.to(page1,1,{y:-stageH,ease:Sine.easeIn})
	TweenMax.to(page2,1,{y:0,ease:Sine.easeIn})

	TweenMax.from(khC,2,{y:0,delay:.5})
	TweenMax.from(colorBG,2,{y:0,delay:.5,onComplete:changeBlackBG})

	TweenMax.from(logo,1,{y:"+=200",delay:1})
	TweenMax.from(slogen,1.1,{y:"+=200",delay:1})
}

var page3=new PIXI.Container()
var arrow2
var endtC=new PIXI.Container()
function changeBlackBG(){
	TweenMax.to(colorBGb,1,{alpha:0})
	TweenMax.to(_khbA[0],1,{alpha:0})
	TweenMax.to(_linebgbA[0],1,{alpha:0,onComplete:setPage3})
}

function setPage3(){
	pStage.interactive=true
	pStage.tap=goPage3
	console.log("关键词页截图3")
	ugc.takeUGC()

	arrow2=new Sprite(getTe(_CDN+"img/arrow2.png"));
	arrow2.y=stageH-28-20
	TweenMax.to(arrow2,1,{y:stageH-28-10,repeat:100000,yoyo:true})

	var _endt=new Sprite(getTe(_CDN+"img/endt"+(userWord+1)+".png"));
	endtC.y=stageH-550-(stageH-1000)/2

	endtC.addChild(_endt)
	page3.addChild(endtC)
	mainC.addChild(page3,arrow2)

	page3.y=stageH

}

function goPage3(){
	pStage.interactive=false
	arrow2.visible=false
	TweenMax.to(page3,1,{y:0})
	TweenMax.to(page2,1,{y:-stageH+450*stageH/1000,onComplete:setPage4})
}

var page4=new PIXI.Container()
var endPic,endbtn1,endbtn2
function setPage4(){
	console.log("关键词页截图4")
	//ugc.takeUGC(-550+(stageH-1000)/2)//y=-550-(stageH-1000)/2
	ugc.takeUGC(-450*stageH/1000)//y=-550-(stageH-1000)/2
	arrow2.visible=true
	pStage.interactive=true
	pStage.tap=goPage4

	mainC.addChild(page4)
	endPic=new Sprite(getTe(_CDN+"img/endpic.png"));
	endbtn1=new Sprite(getTe(_CDN+"img/endbtn1.png"));
	endbtn2=new Sprite(getTe(_CDN+"img/endbtn2.png"));

	page4.addChild(endPic,endbtn1,endbtn2)
	endPic.y=stageH/2-310*stageH/1000
	endbtn1.y=stageH/2+77*stageH/1000
	endbtn2.y=stageH/2+223*stageH/1000

	endbtn1.interactive=true
	endbtn1.tap=savePic

	endbtn2.interactive=true
	endbtn2.tap=goURL
	page4.y=stageH
}

function goPage4(){
	TweenMax.to(page2,1,{y:-stageH})
	TweenMax.to(page3,1,{y:-stageH})
	TweenMax.to(page4,1,{y:0})
	arrow.visible=false
	arrow2.visible=false
}

function savePic(){
	main.share()
}
function goURL(){
	main.goWeb()
}
