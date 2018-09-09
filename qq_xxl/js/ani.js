///////////////////////////////////////////////////////////////////////////////========== 背景
var bg=new PIXI.Graphics()
var bgAni=new PIXI.Container()
var sqrA=[]
function setBG () {
	// body...
	bg.beginFill(0x00abff)//0x0098f2//0x008ee2
	bg.drawRect(0,0,640,stageH)
	pStage.addChild(bg)
	pStage.addChild(bgAni)
	for (var i = 0; i < 10; i++) {
		for (var j = 0; j < stageH/64; j++) {
			var sqr=new PIXI.Graphics()
			sqr.beginFill(0x00d0ff)//0x00d0ff//0xffffff
			sqr.drawRect(0,0,64,64)
			bgAni.addChild(sqr)
			sqr.pivot.set(32,32)
			sqrA.push(sqr)
			sqr.position.set(i*64+32,j*64+32)
			sqr.alpha=Math.random()//*.2
			//sqr.blendMode=_ADD//_SCREEN
			TweenMax.to(sqr,1,{alpha:0,delay:i*.2+j*.2,onComplete:sqrloop,onCompleteParams:[sqr]})
		};
	};
}

function sqrloop(_sqr){
	TweenMax.to(_sqr,1,{alpha:Math.random()*1,delay:0,onComplete:sqrloop,onCompleteParams:[_sqr]})
}

///////////////////////////////////////////////////////////////////////////////========== 箭头
var arrow=new PIXI.Container()
var arrow1=new pSprite("img/arrow1.png")
var arrow2=new pSprite("img/arrow2.png")
function setArrow(){
	upLayer.addChild(arrow)
	arrow.addChild(arrow1,arrow2)
	arrow1.alpha=0
	arrow.y=stageH-62
	TweenMax.to(arrow,.8,{y:"+=15",repeat:9999,yoyo:true,ease:Sine.easeOut})
}
function changeArrow(_type){//==== 0-消失 1-蓝色 2-白色
	switch(_type){
		case 0:
			TweenMax.to(arrow1,.8,{alpha:0})
			TweenMax.to(arrow2,.8,{alpha:0})
		break;
		case 1:
			TweenMax.to(arrow1,.8,{alpha:1})
			TweenMax.to(arrow2,.8,{alpha:0})
		break;
		case 2:
			TweenMax.to(arrow1,.8,{alpha:0})
			TweenMax.to(arrow2,.8,{alpha:1})
		break;
	}
}

///////////////////////////////////////////////////////////////////////////////========== Logo
var logo=new PIXI.Container()
var logo_b=new pSprite("img/logo_b.png")
var logo_w=new pSprite("img/logo_w.png")
function setLogo(){
	upLayer.addChild(logo)
	logo.addChild(logo_b,logo_w)
	changeArrowLogo()
}

function changeArrowLogo(){
	if(nowPage==0){		logo.x=187	}else{	logo.x=0	}
	var logoA=[1,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1]
	var arrowA=[1,1,1,2,2,2,2,1,2,2,2,0,1,1,1,1,1,0]
	if (logoA[nowPage]==1) {
		TweenMax.to(logo_b,.8,{alpha:0})
		TweenMax.to(logo_w,.8,{alpha:1})
	}else{
		TweenMax.to(logo_b,.8,{alpha:1})
		TweenMax.to(logo_w,.8,{alpha:0})
	}
	changeArrow(arrowA[nowPage])
}

///////////////////////////////////////////////////////////////////////////////========== 居中全屏/居底/居顶
function setCenter(_tar){
	for (var i = 0; i < _tar.length; i++) {
		_tar[i].pivot.set(320,500)
		_tar[i].position.set(320,stageH/2)
	};
}

function setBottom(_tar){
	for (var i = 0; i < _tar.length; i++) {
		_tar[i].pivot.set(320,1000)
		_tar[i].position.set(320,stageH)
	};
}

function setTop(_tar){
	for (var i = 0; i < _tar.length; i++) {
		_tar[i].pivot.set(320,0)
		_tar[i].position.set(320,0)
	};
}

///////////////////////////////////////////////////////////////////////////////========== 翻页
var nowPage=0
var pageUpDown=1
var startY
function setTouch(){
	bg.interactive=true
  bg.touchstart=touchStart
}

function touchStart(_e){
  startY=_e.data.global.y
  bg.touchend=touchEnd
  $("#video1")[0].play()
  $("#video2")[0].play()
}
var ifTouchBG=1
function touchEnd(_e){


  if(startY-_e.data.global.y>90&&nowPage<17&&ifTouchBG==1){
    nowPage++
    pageUpDown=1//下滑，下一页
    goPage()
  }else if(startY-_e.data.global.y<-90&&nowPage>0&&ifTouchBG==1){
  	nowPage--
    pageUpDown=-1//下滑，下一页
    goPage()
  }

  if(ifTouchBG==0){
  	ifTouchBG=1
  }
}
var page1,page2,page3,page4,page5,page6,page7,page8,page9,page10,page11,page12,page13,page14,page15,page16,page17,page18
var pageA=[page1,page2,page3,page4,page5,page6,page7,page8,page9,page10,page11,page12,page13,page14,page15,page16,page17,page18]

function goPage(){
	console.log("nowPage=",nowPage)


	changeArrowLogo()
	changeWave234()
	changeTag()
	changeHeader()
	changeHeader12_16()
	changeP12bg()
	changeWhiteBG()
	checkPage()

	for (var i = 0; i < pageA.length; i++) {
		if(i<nowPage){TweenMax.to(pageA[i],.5,{y:-stageH})}
		if(i==nowPage){TweenMax.to(pageA[i],.5,{y:0})}
		if(i>nowPage){TweenMax.to(pageA[i],.5,{y:stageH})}
		if (i==nowPage-1||i==nowPage+1||i==nowPage) {
			pageA[i].visible=true
		}else{
			pageA[i].visible=false
		}
	};


	if (nowPage==0) {	p1timer=.5;page0ani()	};
	if (nowPage==1) {	page1ani()	};
	if (nowPage==2) {	page2ani()	};
	if (nowPage==3) {	page3ani()	};
	if (nowPage==4) {	page4ani()	};
	if (nowPage==5) {	page5ani()	};
	if (nowPage==6) {	page6ani()	};
	if (nowPage==7) {	page7ani()	};
	if (nowPage==8) {	page8ani()	};
	if (nowPage==9) {	page9ani()	};
	if (nowPage==10) {	page10ani()	};
	if (nowPage==11) {	page11ani()	};
	if (nowPage==12) {	page12ani()	};
	if (nowPage==13) {	page13ani()	};
	if (nowPage==14) {	page14ani()	};
	if (nowPage==15) {	page15ani()	};
	if (nowPage==16) {	page16ani()	};
}

function setAllPage(){
	for (var i = 0; i < pageA.length; i++) {
		pageA[i]=new PIXI.Container()
		midLayer.addChild(pageA[i])
		//=====临时部分
		// var j=i+1
		// var tempPic=new pSprite("img/"+j+".png")
		// if(i==1||i==2){
		// 	tempPic.alpha=0
		// }else{
		// 	tempPic.alpha=.0
		// }
		
		
		//pageA[i].addChild(tempPic)
		//=====临时部分
		if(i!=0){
			pageA[i].y=stageH
		}
	};
}


///////////////////////////////////////////////////////////////////////////////========== p234波浪
var wave234=new PIXI.Container()
var wave234Pic=new pSprite("img/wave234.png")
var wave234Tween
function setWave234(){
	downLayer.addChild(wave234)
	wave234.addChild(wave234Pic)

	TweenMax.set(wave234,{y:stageH})
	TweenMax.set(wave234.scale,{y:0})

	TweenMax.to(wave234,1,{y:stageH-450,delay:.5})
	TweenMax.to(wave234.scale,1,{y:.5,delay:.5})



	wave234Tween=TweenMax.to(wave234Pic,4,{x:-960,repeat:10000,ease:Linear.easeNone})
}
function changeWave234(){
	if(nowPage==0){
		TweenMax.to(wave234,1,{y:stageH-450})
		TweenMax.to(wave234.scale,1,{y:.5})
		//TweenMax.to(wave234Pic,4,{x:-960,repeat:10000,ease:Linear.easeNone})
		wave234Tween.resume()
	}else	if(nowPage==1){
		TweenMax.to(wave234,.5,{y:stageH-900*stageH/1000})
		TweenMax.to(wave234.scale,.5,{y:.90*stageH/1000})
		wave234Tween.pause()
		//TweenMax.killTweensOf(wave234Pic)
		//TweenMax.to(wave234Pic,1,{x:-960,ease:Linear.easeNone})
	}else if(nowPage==2){
		TweenMax.to(wave234,.5,{y:stageH-1000})
		TweenMax.to(wave234.scale,.5,{y:1})
		wave234Tween.resume()
		//TweenMax.to(wave234Pic,4,{x:-960,repeat:10000,ease:Linear.easeNone})
	}else if(nowPage==7){
		TweenMax.to(wave234,1,{y:stageH-600})
		TweenMax.to(wave234.scale,1,{y:.6})
	}else{
		TweenMax.to(wave234,.5,{y:stageH})
		TweenMax.to(wave234.scale,.5,{y:0})
	}
}


///////////////////////////////////////////////////////////////////////////////========== tag1234
var tag1234=new PIXI.Container()
var tag1=new pSprite("img/tag1.png")
var tag2=new pSprite("img/tag2.png")
var tag3=new pSprite("img/tag3.png")
var tag4=new pSprite("img/tag4.png")
var tagA=[tag1,tag2,tag3,tag4]
function setTag(){
	upLayer.addChildAt(tag1234,0)
	for (var i = 0; i < 4; i++) {
		tag1234.addChild(tagA[i])
		tagA[i].visible=false
	};
}
function changeTag(){
	if(nowPage==3||nowPage==4||nowPage==5||nowPage==6){
		TweenMax.to(tag1234,.5,{y:0})
		for (var i = 0; i < 4; i++) {			tagA[i].visible=false		};
	}else{
		TweenMax.to(tag1234,.2,{y:-218})
	}


	if(nowPage==3){
		tag1.visible=true
	}else if(nowPage==4){
		tag2.visible=true
	}else if(nowPage==5){
		tag3.visible=true
	}else if(nowPage==6){
		tag4.visible=true
	}

}
///////////////////////////////////////////////////////////////////////////////========== header9 10 11
var header=new pSprite("img/header.png")
function setHeader(){
	upLayer.addChildAt(header,0)
	header.y=-187
}
function changeHeader(){
	if(nowPage==8||nowPage==9||nowPage==10){
		TweenMax.to(header,.5,{y:0})
	}else{
		TweenMax.to(header,.2,{y:-187})
	}
}

///////////////////////////////////////////////////////////////////////////////========== header13-17
var header1=new pSprite("img/header1.png")
var header2=new pSprite("img/header2.png")
var header3=new pSprite("img/header3.png")
var header4=new pSprite("img/header4.png")
var header5=new pSprite("img/header5.png")
var headerBG=new pSprite("img/header_bg.png")
var header12_16=new PIXI.Container()
var headerA=[header1,header2,header3,header4,header5]

function setHeader12_16(){
	upLayer.addChildAt(header12_16,0)
	header12_16.addChild(headerBG,header1,header2,header3,header4,header5)
	header12_16.y=-187
}
function changeHeader12_16(){
	if(nowPage==12||nowPage==13||nowPage==14||nowPage==15||nowPage==16){
		TweenMax.to(header12_16,.5,{y:0})
	}else{
		TweenMax.to(header12_16,.2,{y:-187})
	}

	for (var i = 0; i < headerA.length; i++) {
		if(nowPage-12==i){
			
			TweenMax.set(headerA[i],{y:pageUpDown*30,alpha:0})
			TweenMax.to(headerA[i],1.5,{y:0,alpha:1,ease:Elastic.easeOut})
		}else{
			TweenMax.set(headerA[i],{y:0})
			TweenMax.to(headerA[i],.5,{y:-pageUpDown*30,alpha:0})
		}
		
	};
}
///////////////////////////////////////////////////////////////////////////////========== page12BG
var p12bg=new pSprite("img/p12bg.png")

function setP12bg(){
	downLayer.addChild(p12bg)
	p12bg.pivot.set(320,650)
	p12bg.position.set(320,stageH/2)
	p12bg.alpha=0
}
function changeP12bg(){
	if(nowPage==11){
		TweenMax.to(p12bg,.5,{alpha:1})
	}else{
		TweenMax.to(p12bg,.5,{alpha:0})
	}
}

///////////////////////////////////////////////////////////////////////////////========== whiteBG
var wbg=new pSprite("img/wbg.png")
function setWhiteBG(){
	downLayer.addChild(wbg)
	wbg.alpha=0
	wbg.height=stageH
}
function changeWhiteBG(){
	if (nowPage>=12&&nowPage<=16) {
		TweenMax.to(wbg,1,{alpha:1})
	}else{
		TweenMax.to(wbg,1,{alpha:0})
	}
}

///////////////////////////////////////////////////////////////////////////////========== page0

var p1shandow1=new pSprite("img/p1shandow1.jpg")
var p1shandow2=new pSprite("img/p1shandow2.jpg")
var p1shandow3=new pSprite("img/p1shandow3.jpg")
var p1box1=new pSprite("img/p1box1.png")
var p1box2=new pSprite("img/p1box2.png")
var p1box3=new pSprite("img/p1box3.png")
var num1=new pSprite("img/p1_1.png")
var num2=new pSprite("img/p1_2.png")
var num3=new pSprite("img/p1_3.png")
var p1t1=new pSprite("img/p1t1.png")
var p1t2=new pSprite("img/p1t2.png")
var p1t3=new pSprite("img/p1t3.png")

function setPage0(){
	pageA[0].addChild(p1t1,p1t2,p1t3,p1shandow1,p1shandow2,p1shandow3,p1box1,p1box2,p1box3,num3)
	setCenter([p1shandow1,p1shandow2,p1shandow3,p1box1,p1box2,p1box3,p1t1,p1t2,p1t3])
	p1shandow1.blendMode=p1shandow2.blendMode=p1shandow3.blendMode=_MULTIPLY
	num3.pivot.set(190/2,326/2)
	num3.position.set(282,stageH/2-82)
	page0ani()
}
var p1timer=1
function page0ani(){

	TweenMax.set(num3,{alpha:1})
	TweenMax.set(num3.scale,{x:0,y:0})



	TweenMax.to(num3.scale,1,{x:1,y:1,ease:Elastic.easeOut,delay:p1timer})

	TweenMax.set(p1t1,{alpha:0,y:stageH/2+30})
	TweenMax.set(p1t2,{alpha:0,y:stageH/2+30})
	TweenMax.set(p1t3,{alpha:0,y:stageH/2+30})

	TweenMax.to(p1t1,1,{alpha:1,y:stageH/2,ease:Back.easeOut,delay:p1timer+.1*1})
	TweenMax.to(p1t2,1,{alpha:1,y:stageH/2,ease:Back.easeOut,delay:p1timer+.1*2})
	TweenMax.to(p1t3,1,{alpha:1,y:stageH/2,ease:Back.easeOut,delay:p1timer+.1*3})

	TweenMax.set(p1box1,{x:320-300,y:stageH/2-300})
	TweenMax.set(p1shandow1,{x:320-300,y:stageH/2-300})
	TweenMax.to(p1box1,.8,{x:320,y:stageH/2,delay:p1timer})
	TweenMax.to(p1shandow1,.8,{x:320,y:stageH/2,delay:p1timer})

	TweenMax.set(p1box2,{x:320+300,y:stageH/2})
	TweenMax.set(p1shandow2,{x:320+300,y:stageH/2})
	TweenMax.to(p1box2,.8,{x:320,y:stageH/2,delay:p1timer+.1})
	TweenMax.to(p1shandow2,.8,{x:320,y:stageH/2,delay:p1timer+.1})

	TweenMax.set(p1box3,{x:320-400,y:stageH/2+400})
	TweenMax.set(p1shandow3,{x:320-400,y:stageH/2+400})
	TweenMax.to(p1box3,.8,{x:320,y:stageH/2,delay:p1timer+.2})
	TweenMax.to(p1shandow3,.8,{x:320,y:stageH/2,delay:p1timer+.2})
}

///////////////////////////////////////////////////////////////////////////////========== page1
var p2ico1=new pSprite("img/p2ico1.png")
var p2ico2=new pSprite("img/p2ico2.png")
var p2ico3=new pSprite("img/p2ico3.png")
var p2ico4=new pSprite("img/p2ico4.png")
var p2ico5=new pSprite("img/p2ico5.png")
var p2icoA=[p2ico1,p2ico2,p2ico3,p2ico4,p2ico5]
var p2line=new pSprite("img/p2line.png")
var p2pice1=new pSprite("img/p2pice1.png")
var p2pice2=new pSprite("img/p2pice2.png")
var p2bubble=new pSprite("img/p2bubble.png")
var p2mask=new PIXI.Graphics()

function setPage1(){
	pageA[1].addChild(p2ico1,p2ico2,p2ico3,p2ico4,p2ico5,p2line,p2pice1,p2pice2,p2bubble,p2mask)
	setCenter([p2line,p2pice1,p2pice2,p2bubble])
	for (var i = 0; i < p2icoA.length ; i++) {
		p2icoA[i].pivot.set(66,52)
	};
	p2ico1.position.set(142,stageH/2-82)
	p2ico2.position.set(174,stageH/2-230)
	p2ico3.position.set(320,stageH/2-271)
	p2ico4.position.set(456,stageH/2-219)
	p2ico5.position.set(498,stageH/2-100)

	p2mask.beginFill(0x00d0ff)
	p2mask.drawCircle(0,0,260)
	p2mask.x=320
	p2mask.y=stageH/2+50
	p2line.mask=p2mask
}
function page1ani(){
	var _t=.8
	TweenMax.set(p2mask.scale,{x:0,y:0})
	TweenMax.to(p2mask.scale,.5,{x:1,y:1,delay:_t})

	for (var i = 0; i <5 ; i++) {
		TweenMax.set(p2icoA[i].scale,{x:0,y:0})
		TweenMax.to(p2icoA[i].scale,1.5,{x:1,y:1,delay:_t+.2+i*.05,ease:Elastic.easeOut})
	};

	TweenMax.set(p2pice1,{y:stageH/2+300})
	TweenMax.set(p2pice2,{y:stageH/2+400})
	TweenMax.set(p2bubble,{y:stageH/2+100})

	TweenMax.to(p2pice1,1,{y:stageH/2,ease:Back.easeOut,delay:.1})
	TweenMax.to(p2pice2,1,{y:stageH/2,ease:Back.easeOut,delay:.2})
	TweenMax.to(p2bubble,2,{y:stageH/2,ease:Elastic.easeOut,delay:.3})
}

///////////////////////////////////////////////////////////////////////////////========== page2
var p3ico1=new pSprite("img/p3ico1.png")
var p3ico2=new pSprite("img/p3ico2.png")
var p3ico3=new pSprite("img/p3ico3.png")
var p3ico4=new pSprite("img/p3ico4.png")
var p3icoA=[p3ico1,p3ico2,p3ico3,p3ico4]
var p3bubble=new pSprite("img/bubble.png")
var p3line=new pSprite("img/p3line.png")
var p3text1=new pSprite("img/p3text1.png")
var p3text2=new pSprite("img/p3text2.png")
var p3text3=new pSprite("img/p3text3.png")
var p3text4=new pSprite("img/p3text4.png")
var p3textA=[p3text1,p3text2,p3text3,p3text4]
var p3t1=new pSprite("img/p3t1.png")
var p3title=new pSprite("img/p3title.png")
function setPage2(){
	pageA[2].addChild(p3t1,p3bubble,p3title,p3line,p3text1,p3text2,p3text3,p3text4,p3ico1,p3ico2,p3ico3,p3ico4)
	setCenter([p3t1,p3bubble,p3title,p3line,p3text1,p3text2,p3text3,p3text4])
	p3ico1.pivot.x=p3ico2.pivot.x=p3ico3.pivot.x=p3ico4.pivot.x=72.5
	p3ico1.pivot.y=p3ico2.pivot.y=p3ico3.pivot.y=p3ico4.pivot.y=54
	p3ico1.position.set(203,stageH/2-26)
	p3ico2.position.set(432,stageH/2-39)
	p3ico3.position.set(201,stageH/2+154)
	p3ico4.position.set(424,stageH/2+157)


	p3bubble.pivot.set(635,836)
	p3bubble.position.set(635,stageH/2+336)
}
function page2ani(){
	var _t=.4
	TweenMax.set(p3bubble.scale,{x:0,y:0})
	TweenMax.to(p3bubble.scale,.35,{x:1,y:1,delay:_t})

	TweenMax.set(p3t1,{alpha:0,y:stageH/2+50})
	TweenMax.set(p3title,{alpha:0,y:stageH/2+50})

	TweenMax.to(p3t1,.5,{alpha:1,y:stageH/2,delay:_t+.2+.2})
	TweenMax.to(p3title,.5,{alpha:1,y:stageH/2,delay:_t+.1+.2})

	TweenMax.set(p3line,{alpha:0})
	TweenMax.to(p3line,.5,{alpha:1,delay:_t+.5})

	for (var i = 0; i < 4; i++) {
		
		TweenMax.set(p3icoA[i].scale,{x:0,y:0})
		TweenMax.to(p3icoA[i].scale,1.5,{x:1,y:1,delay:_t+.1*i+.5,ease:Elastic.easeOut})

		TweenMax.set(p3textA[i],{alpha:0,y:stageH/2+30})
		TweenMax.to(p3textA[i],1.5,{alpha:1,y:stageH/2,delay:_t+.1*i+.1+.5,ease:Back.easeOut})
	};
}

///////////////////////////////////////////////////////////////////////////////========== page3
var p4bubble=new pSprite("img/bubble.png")
var p4t=new pSprite("img/p4t.png")
var p4title=new pSprite("img/p4title.png")
function setPage3(){
	pageA[3].addChild(p4bubble,p4t,p4title)
	setCenter([p4bubble,p4t,p4title])
}
function page3ani(){
	var _t=.7
	TweenMax.set(p4t,{y:stageH/2+pageUpDown*150,alpha:0})
	TweenMax.to(p4t,_t+.15,{y:stageH/2,ease:Back.easeOut,alpha:1,delay:.2})

	TweenMax.set(p4bubble,{y:stageH/2+pageUpDown*150})
	TweenMax.to(p4bubble,_t,{y:stageH/2,ease:Back.easeOut,delay:.1})

	TweenMax.set(p4title,{y:stageH/2+pageUpDown*150})
	TweenMax.to(p4title,_t,{y:stageH/2,ease:Back.easeOut,delay:.1})
}
///////////////////////////////////////////////////////////////////////////////========== page4
var p5bubble=new pSprite("img/bubble.png")
var p5t=new pSprite("img/p5t.png")
var p5title=new pSprite("img/p5title.png")
function setPage4(){
	pageA[4].addChild(p5bubble,p5t,p5title)
	setCenter([p5bubble,p5t,p5title])
}
function page4ani(){
	var _t=.7
	TweenMax.set(p5t,{y:stageH/2+pageUpDown*150,alpha:0})
	TweenMax.to(p5t,_t+.15,{y:stageH/2,ease:Back.easeOut,alpha:1,delay:.2})

	TweenMax.set(p5bubble,{y:stageH/2+pageUpDown*150})
	TweenMax.to(p5bubble,_t,{y:stageH/2,ease:Back.easeOut,delay:.1})

	TweenMax.set(p5title,{y:stageH/2+pageUpDown*150})
	TweenMax.to(p5title,_t,{y:stageH/2,ease:Back.easeOut,delay:.1})
}
///////////////////////////////////////////////////////////////////////////////========== page5
var p6bubble=new pSprite("img/bubble.png")
var p6t=new pSprite("img/p6t.png")
var p6title=new pSprite("img/p6title.png")
function setPage5(){
	pageA[5].addChild(p6bubble,p6t,p6title)
	setCenter([p6bubble,p6t,p6title])
}
function page5ani(){
	var _t=.7
	TweenMax.set(p6t,{y:stageH/2+pageUpDown*150,alpha:0})
	TweenMax.to(p6t,_t+.15,{y:stageH/2,ease:Back.easeOut,alpha:1,delay:.2})

	TweenMax.set(p6bubble,{y:stageH/2+pageUpDown*150})
	TweenMax.to(p6bubble,_t,{y:stageH/2,ease:Back.easeOut,delay:.1})

	TweenMax.set(p6title,{y:stageH/2+pageUpDown*150})
	TweenMax.to(p6title,_t,{y:stageH/2,ease:Back.easeOut,delay:.1})
}
///////////////////////////////////////////////////////////////////////////////========== page6
var p7bubble=new pSprite("img/bubble.png")
var p7t=new pSprite("img/p7t.png")
var p7title=new pSprite("img/p7title.png")
function setPage6(){
	pageA[6].addChild(p7bubble,p7t,p7title)
	setCenter([p7bubble,p7t,p7title])
}
function page6ani(){
	var _t=.7
	TweenMax.set(p7t,{y:stageH/2+pageUpDown*150,alpha:0})
	TweenMax.to(p7t,_t+.15,{y:stageH/2,ease:Back.easeOut,alpha:1,delay:.2})

	TweenMax.set(p7bubble,{y:stageH/2+pageUpDown*150})
	TweenMax.to(p7bubble,_t,{y:stageH/2,ease:Back.easeOut,delay:.1})

	TweenMax.set(p7title,{y:stageH/2+pageUpDown*150})
	TweenMax.to(p7title,_t,{y:stageH/2,ease:Back.easeOut,delay:.1})
}

///////////////////////////////////////////////////////////////////////////////========== page7
var p8title=new pSprite("img/p8title.png")
var p8bar1=new pSprite("img/p8bar1.png")
var p8bar2=new pSprite("img/p8bar2.png")
var p8bar3=new pSprite("img/p8bar3.png")
var p8t1=new pSprite("img/p8t1.png")
var p8t2=new pSprite("img/p8t2.png")
var p8t3=new pSprite("img/p8t3.png")
function setPage7(){
	pageA[7].addChild(p8title,p8bar1,p8bar3,p8bar2,p8t1,p8t2,p8t3)
	setCenter([p8title,p8bar1,p8bar2,p8bar3,p8t1,p8t2,p8t3])
}
function page7ani(){
	var i
	var aniBarA=[p8title,p8bar1,p8bar2,p8bar3]
	var aniBTA=[p8t1,p8t2,p8t3]
	for (i = 0; i < 4; i++) {
		TweenMax.set(aniBarA[i],{x:960})
		TweenMax.to(aniBarA[i],.5,{x:320,delay:.1*i})
	};
	for (i = 0; i < 3; i++) {
		TweenMax.set(aniBTA[i],{x:320+200,alpha:0})
		TweenMax.to(aniBTA[i],1,{x:320,alpha:1,delay:.3+.1*i,ease:Back.easeOut})
	};

}

///////////////////////////////////////////////////////////////////////////////========== page8
var p9title=new pSprite("img/p9title.png")
var p9num1=new pSprite("img/p9num1.png")
var p9num2=new pSprite("img/p9num2.png")
var p9num3=new pSprite("img/p9num3.png")
var p9t1=new pSprite("img/p9t1.png")
var p9t2=new pSprite("img/p9t2.png")
var p9t3=new pSprite("img/p9t3.png")
var p9c1=new pSprite("img/p9c1.png")
var p9c2=new pSprite("img/p9c2.png")
var p9c3=new pSprite("img/p9c3.png")
function setPage8(){
	pageA[8].addChild(p9title,p9c1,p9c2,p9c3,p9num1,p9num2,p9num3,p9t1,p9t2,p9t3)
	setCenter([p9t1,p9t2,p9t3])
	setTop([p9title])
	p9c1.pivot.x=p9c1.pivot.y=p9c2.pivot.x=p9c2.pivot.y=p9c3.pivot.x=p9c3.pivot.y=198
	p9num1.pivot.x=p9num1.pivot.y=p9num2.pivot.x=p9num2.pivot.y=p9num3.pivot.x=p9num3.pivot.y=198

	p9c1.position.set(388,stageH/2-58)
	p9num1.position.set(388,stageH/2-58)

	p9c2.position.set(184,stageH/2+120)
	p9num2.position.set(184,stageH/2+120)

	p9c3.position.set(384,stageH/2+233)
	p9num3.position.set(384,stageH/2+233)
}
function page8ani(){
	_t=.5

	var i
	var aniCA=[p9c1,p9c2,p9c3]
	var aniTA=[p9t1,p9t2,p9t3]
	var aniNumA=[p9num1,p9num2,p9num3]
	for (i = 0; i < 3; i++) {
		TweenMax.set(aniCA[i].scale,{x:0,y:0})
		TweenMax.to(aniCA[i].scale,.5,{x:1,y:1,delay:_t+.1*i,ease:Back.easeOut})

		TweenMax.set(aniNumA[i].scale,{x:0,y:0})
		TweenMax.to(aniNumA[i].scale,1.5,{x:1,y:1,delay:_t+.1*i,ease:Elastic.easeOut})

		TweenMax.set(aniTA[i],{alpha:0,y:stageH/2+50})
		TweenMax.to(aniTA[i],.5,{alpha:1,y:stageH/2,delay:_t+.1*i})
	};
}

///////////////////////////////////////////////////////////////////////////////========== page9
var p10title=new pSprite("img/p10title.png")
var p10c=new pSprite("img/p10c_.png")
var p10c1=new pSprite("img/p10c2.png")
var p10c2=new pSprite("img/p10c2.png")
var p10c3=new pSprite("img/p10c2.png")
var p10c4=new pSprite("img/p10c2.png")
var p10tag1=new pSprite("img/p10tag1.png")
var p10tag2=new pSprite("img/p10tag2.png")
var p10tag3=new pSprite("img/p10tag3.png")
var p10cs=new PIXI.Container()

function setPage9(){
	pageA[9].addChild(p10title,p10cs,p10c,p10tag1,p10tag2,p10tag3)
	p10cs.addChild(p10c1,p10c2,p10c3,p10c4)
	setCenter([p10c,p10tag1,p10tag2,p10tag3])
	setTop([p10title])
	p10cs.pivot.set(265,265)
	p10cs.position.set(-18,stageH/2+95)

	p10c1.pivot.set(265,265)
	p10c2.pivot.set(265,265)
	p10c3.pivot.set(265,265)
	p10c4.pivot.set(265,265)

	p10c1.position.set(265,265)
	p10c2.position.set(265,265)
	p10c3.position.set(265,265)
	p10c4.position.set(265,265)
	p10c1.scale.x=p10c1.scale.y=p10c2.scale.x=p10c2.scale.y=p10c3.scale.x=p10c3.scale.y=p10c4.scale.x=p10c4.scale.y=0
	p10c1.alpha=p10c2.alpha=p10c3.alpha=p10c4.alpha=0
	TweenMax.to(p10c1.scale,4,{x:2,y:2,repeat:10000,delay:1*0,ease:Linear.easeNone})
	TweenMax.to(p10c2.scale,4,{x:2,y:2,repeat:10000,delay:1*1,ease:Linear.easeNone})
	TweenMax.to(p10c3.scale,4,{x:2,y:2,repeat:10000,delay:1*2,ease:Linear.easeNone})
	TweenMax.to(p10c4.scale,4,{x:2,y:2,repeat:10000,delay:1*3,ease:Linear.easeNone})

	TweenMax.to(p10c1,2,{alpha:.8,repeat:10000,yoyo:true,delay:1*0})
	TweenMax.to(p10c2,2,{alpha:.8,repeat:10000,yoyo:true,delay:1*1})
	TweenMax.to(p10c3,2,{alpha:.8,repeat:10000,yoyo:true,delay:1*2})
	TweenMax.to(p10c4,2,{alpha:.8,repeat:10000,yoyo:true,delay:1*3})
	//p10cs.alpha=0
}

function page9ani(){
	_t=.2

	TweenMax.set(p10tag1,{alpha:0,x:320+100*pageUpDown,y:stageH/2+100*pageUpDown})
	TweenMax.to(p10tag1,1,{alpha:1,x:320,y:stageH/2,delay:_t+.1*0,ease:Back.easeOut})

	TweenMax.set(p10tag2,{alpha:0,x:320+0,y:stageH/2+140*pageUpDown})
	TweenMax.to(p10tag2,1,{alpha:1,x:320,y:stageH/2,delay:_t+.1*1,ease:Back.easeOut})

	TweenMax.set(p10tag3,{alpha:0,x:320-100*pageUpDown,y:stageH/2+100*pageUpDown})
	TweenMax.to(p10tag3,1,{alpha:1,x:320,y:stageH/2,delay:_t+.1*2,ease:Back.easeOut})
}

///////////////////////////////////////////////////////////////////////////////========== page10
var p11title=new pSprite("img/p11title.png")
var p11t1=new pSprite("img/p11t1.png")
var p11t2=new pSprite("img/p11t2.png")
var p11t3=new pSprite("img/p11t3.png")
var p11ico=new pSprite("img/p11ico.png")
var p11arrow=new pSprite("img/p11arrow_.png")
function setPage10(){
	pageA[10].addChild(p11title,p11arrow,p11ico,p11t1,p11t2,p11t3)
	setCenter([p11t1,p11t2,p11t3])
	setTop([p11title])

	p11ico.pivot.set(235,235)
	p11arrow.pivot.set(235,235)

	p11ico.position.set(320,stageH/2+143.5)
	p11arrow.position.set(320,stageH/2+143.5)
	TweenMax.set(p11arrow,{rotation:Math.PI*2/6})
	TweenMax.to(p11arrow,2,{rotation:-Math.PI*2/6,repeat:10000,ease:Linear.easeNone})
}
function page10ani(){
	var _t=.5
	TweenMax.set(p11ico,{rotation:Math.PI*2/3*0,alpha:0})
	TweenMax.to(p11ico,1,{alpha:1,rotation:0,ease:Sine.easeOut,delay:_t})

	//TweenMax.set(p11ico.scale,{x:0.5,y:0.5})
	//TweenMax.to(p11ico.scale,1.5,{x:1,y:1,ease:Elastic.easeOut,delay:_t})

	TweenMax.set(p11arrow,{alpha:0})
	TweenMax.to(p11arrow,1,{alpha:1,delay:_t+1})

	TweenMax.set(p11t1,{alpha:0,y:stageH/2+50})
	TweenMax.to(p11t1,1,{alpha:1,y:stageH/2,ease:Back.easeOut,delay:_t+.1*0})

	TweenMax.set(p11t2,{alpha:0,y:stageH/2+50})
	TweenMax.to(p11t2,1,{alpha:1,y:stageH/2,ease:Back.easeOut,delay:_t+.1*1})

	TweenMax.set(p11t3,{alpha:0,y:stageH/2+50})
	TweenMax.to(p11t3,1,{alpha:1,y:stageH/2,ease:Back.easeOut,delay:_t+.1*2})
}

///////////////////////////////////////////////////////////////////////////////========== page11
var p12t1=new pSprite("img/p12t1.png")
var p12t2=new pSprite("img/p12t2.png")
var p12book=new pSprite("img/p12book.png")
var p12shandow=new pSprite("img/p12shandow.png")
var p12arrow=new pSprite("img/p12arrow.png")
var p12t2_arrow=new PIXI.Container()
var p12b_s=new PIXI.Container()
function setPage11(){
	pageA[11].addChild(p12b_s,p12t1,p12t2_arrow)

	p12t2_arrow.addChild(p12t2,p12arrow)
	p12b_s.addChild(p12shandow,p12book)
	p12book.x=128
	p12book.y=258

	setCenter([p12b_s,p12t1,p12t2_arrow])
	TweenMax.set(p12arrow,{y:5})
	TweenMax.to(p12arrow,1,{y:-5,repeat:10000,yoyo:true})
	p12book.interactive=true
	p12book.touchstart=openBook
}

function openBook(){
	console.log("点开攻略")
	ifTouchBG=0
	nowPage++
  pageUpDown=1//下滑，下一页
  goPage()
}

function page11ani(){
	var p11aniA=[p12t1,p12b_s,p12t2_arrow]
	for (var i = 0; i < 3; i++) {
		
		TweenMax.set(p11aniA[i],{alpha:0,y:stageH/2+200*pageUpDown})
		TweenMax.to(p11aniA[i],1,{alpha:1,y:stageH/2,ease:Back.easeOut,delay:0+i*.1})
	};
}

///////////////////////////////////////////////////////////////////////////////========== page12
var p13t1=new pSprite("img/p13t1.png")
var p13t2=new pSprite("img/p13t2.png")
var p13num=new pSprite("img/p13num.png")
var p13gl=new pSprite("img/p13gl.png")
var p13phone=new pSprite("img/phone.png")
var p13screen=new pSprite("img/p13screen.png")
var p13p_s=new PIXI.Container()
function setPage12(){
	pageA[12].addChild(p13num,p13gl,p13p_s,p13t1,p13t2)
	p13p_s.addChild(p13phone,p13screen)
	setCenter([p13num,p13gl,p13p_s])
	setTop([p13t1])
	setBottom([p13t2])
}
function page12ani(){
	var ani13A=[p13t1,p13p_s,p13t2]
	setCenter([p13num,p13gl,p13p_s])
	setTop([p13t1])
	setBottom([p13t2])
	for (var i = 0; i <3; i++) {
		TweenMax.from(ani13A[i],1,{alpha:1,y:ani13A[i].y+pageUpDown*100,delay:i*.2})
	};
	TweenMax.set(p13num,{y:stageH/2+50})
	TweenMax.set(p13gl,{y:stageH/2-50})
	TweenMax.to(p13num,10,{y:stageH/2-50})
	TweenMax.to(p13gl,10,{y:stageH/2+50})
}
///////////////////////////////////////////////////////////////////////////////========== page13
var p14t1=new pSprite("img/p14t1.png")
var p14t2=new pSprite("img/p14t2.png")
var p14num=new pSprite("img/p14num.png")
var p14gl=new pSprite("img/p13gl.png")
var p14phone=new pSprite("img/phone.png")
var p14screen=new pSprite("img/p14screen.png")
var p14p_s=new PIXI.Container()
function setPage13(){
	pageA[13].addChild(p14num,p14gl,p14p_s,p14t1,p14t2)
	p14p_s.addChild(p14phone,p14screen)
	setCenter([p14num,p14gl,p14p_s])
	setTop([p14t1])
	setBottom([p14t2])
}
function page13ani(){
	var ani14A=[p14t1,p14p_s,p14t2]
	setCenter([p14num,p14gl,p14p_s])
	setTop([p14t1])
	setBottom([p14t2])
	for (var i = 0; i <3; i++) {
		TweenMax.from(ani14A[i],1,{alpha:1,y:ani14A[i].y+pageUpDown*100,delay:i*.2})
	};
	TweenMax.set(p14num,{y:stageH/2+50})
	TweenMax.set(p14gl,{y:stageH/2-50})
	TweenMax.to(p14num,10,{y:stageH/2-50})
	TweenMax.to(p14gl,10,{y:stageH/2+50})
}
///////////////////////////////////////////////////////////////////////////////========== page14
var p15t1=new pSprite("img/p15t1.png")
var p15t2=new pSprite("img/p15t2.png")
var p15num=new pSprite("img/p15num.png")
var p15gl=new pSprite("img/p13gl.png")
var p15phone=new pSprite("img/phone.png")
var p15screen=new pSprite("img/p15screen.png")
var p15p_s=new PIXI.Container()
function setPage14(){
	pageA[14].addChild(p15num,p15gl,p15p_s,p15t1,p15t2)
	p15p_s.addChild(p15phone,p15screen)
	setCenter([p15num,p15gl,p15p_s])
	setTop([p15t1])
	setBottom([p15t2])
}
function page14ani(){
	var ani15A=[p15t1,p15p_s,p15t2]
	setCenter([p15num,p15gl,p15p_s])
	setTop([p15t1])
	setBottom([p15t2])
	for (var i = 0; i <3; i++) {
		TweenMax.from(ani15A[i],1,{alpha:1,y:ani15A[i].y+pageUpDown*100,delay:i*.2})
	};
	TweenMax.set(p15num,{y:stageH/2+50})
	TweenMax.set(p15gl,{y:stageH/2-50})
	TweenMax.to(p15num,10,{y:stageH/2-50})
	TweenMax.to(p15gl,10,{y:stageH/2+50})
}

///////////////////////////////////////////////////////////////////////////////========== page15 =====这个不一样
var p16t1=new pSprite("img/p16t1.png")
var p16t2=new pSprite("img/p16t2.png")
var p16num=new pSprite("img/p16num.png")
var p16gl=new pSprite("img/p16gl.png")
var p16phone=new pSprite("img/phone2.png")
//var p16screen=new pSprite("img/p16screen.png")
var p16p_s=new PIXI.Container()
function setPage15(){
	pageA[15].addChild(p16num,p16gl,p16p_s,p16t1,p16t2)
	p16p_s.addChild(p16phone)
	setCenter([p16num,p16gl,p16p_s])
	setTop([p16t1])
	setBottom([p16t2])
}
function page15ani(){
	var ani16A=[p16t1,p16p_s,p16t2]
	setCenter([p16num,p16gl,p16p_s])
	setTop([p16t1])
	setBottom([p16t2])
	for (var i = 0; i <3; i++) {
		TweenMax.from(ani16A[i],1,{alpha:1,y:ani16A[i].y+pageUpDown*100,delay:i*.2})
	};
	// TweenMax.set(p16num,{y:stageH/2+50})
	// TweenMax.set(p16gl,{y:stageH/2-50})
	// TweenMax.to(p16num,10,{y:stageH/2-50})
	// TweenMax.to(p16gl,10,{y:stageH/2+50})
}

///////////////////////////////////////////////////////////////////////////////========== page16
var p17t1=new pSprite("img/p17t1.png")
var p17t2=new pSprite("img/p17t2.png")
var p17num=new pSprite("img/p17num.png")
var p17gl=new pSprite("img/p13gl.png")
var p17phone=new pSprite("img/phone.png")
var p17screen=new pSprite("img/p17screen.png")
var p17p_s=new PIXI.Container()
function setPage16(){
	pageA[16].addChild(p17num,p17gl,p17p_s,p17t1,p17t2)
	p17p_s.addChild(p17phone,p17screen)
	setCenter([p17num,p17gl,p17p_s])
	setTop([p17t1])
	setBottom([p17t2])
}
function page16ani(){
	var ani17A=[p17t1,p17p_s,p17t2]
	setCenter([p17num,p17gl,p17p_s])
	setTop([p17t1])
	setBottom([p17t2])
	for (var i = 0; i <3; i++) {
		TweenMax.from(ani17A[i],1,{alpha:1,y:ani17A[i].y+pageUpDown*100,delay:i*.2})
	};
	TweenMax.set(p17num,{y:stageH/2+50})
	TweenMax.set(p17gl,{y:stageH/2-50})
	TweenMax.to(p17num,10,{y:stageH/2-50})
	TweenMax.to(p17gl,10,{y:stageH/2+50})
}

///////////////////////////////////////////////////////////////////////////////========== page17
var p18t=new pSprite("img/p18t.png")
var p18btn=new pSprite("img/p18btn.png")
var p18bg=new pSprite("img/p18bg.png")
function setPage17(){
	pageA[17].addChild(p18bg,p18t,p18btn)
	p18bg.width=640
	p18bg.height=stageH
	setCenter([p18t])
	p18btn.y=stageH/2+273
	p18btn.interactive=true
	p18btn.tap=goFirst
	//TweenMax.set($("#qr"),{y:screenH/2+10*screenH/1000})
}
function goFirst(){
	nowPage=0
	for (var i = 0; i < pageA.length; i++) {
		if(i!=nowPage){TweenMax.set(pageA[i],{y:stageH})}
	};
	goPage()
}


///////////////////////////////////////////////////////////////////////////////========== checkPage QR 视频

function checkPage(){
	TweenMax.set($("#video1div"),{y:screenH/2-49*screenW/640})
	TweenMax.set($("#video2div"),{y:screenH/2-152*screenW/640})
	if(nowPage==17){
		TweenMax.set($("#qr"),{display:"block"})
	}else{
		TweenMax.set($("#qr"),{display:"none"})
	}

	if(nowPage==12){
		//$("#video1")[0].play()
		//$("#video1")[0].play()
		
		setTimeout(function(){
			if(nowPage==12){
				TweenMax.set($("#video1div"),{display:"block"})
				
			}
		},1000)
	}else{
		//$("#video1")[0].pause()
		TweenMax.set($("#video1div"),{display:"none"})
	}

	if(nowPage==13){
		setTimeout(function(){
			if(nowPage==13){
				TweenMax.set($("#video2div"),{display:"block"})
				
			}
		},1000)
	}else{
		//$("#video1")[0].pause()
		TweenMax.set($("#video2div"),{display:"none"})
	}
}