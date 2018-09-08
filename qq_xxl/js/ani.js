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
		_tar[i].pivot.set(320,_tar[i].height)
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
	pStage.interactive=true
  pStage.touchstart=touchStart
}

function touchStart(_e){
  startY=_e.data.global.y
  pStage.touchend=touchEnd
}
function touchEnd(_e){
  if(startY-_e.data.global.y>90&&nowPage<17){
    nowPage++
    pageUpDown=1//下滑，下一页
    goPage()
  }else if(startY-_e.data.global.y<-90&&nowPage>0){
  	nowPage--
    pageUpDown=-1//下滑，下一页
    goPage()
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
}

function setAllPage(){
	for (var i = 0; i < pageA.length; i++) {
		pageA[i]=new PIXI.Container()
		midLayer.addChild(pageA[i])
		//=====临时部分
		var j=i+1
		var tempPic=new pSprite("img/"+j+".png")
		if(i==1||i==2){
			tempPic.alpha=0
		}else{
			tempPic.alpha=.0
		}
		
		//=====临时部分
		pageA[i].addChild(tempPic)
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
		TweenMax.to(wave234,.5,{y:stageH-880})
		TweenMax.to(wave234.scale,.5,{y:.88})
		wave234Tween.pause()
		//TweenMax.killTweensOf(wave234Pic)
		//TweenMax.to(wave234Pic,1,{x:-960,ease:Linear.easeNone})
	}else if(nowPage==2){
		TweenMax.to(wave234,.5,{y:stageH-1000})
		TweenMax.to(wave234.scale,.5,{y:1})
		wave234Tween.resume()
		//TweenMax.to(wave234Pic,4,{x:-960,repeat:10000,ease:Linear.easeNone})
	}	else{
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

	TweenMax.set(p1box1,{x:320-200,y:stageH/2-300})
	TweenMax.set(p1shandow1,{x:320-200,y:stageH/2-300})
	TweenMax.to(p1box1,.8,{x:320,y:stageH/2,delay:p1timer})
	TweenMax.to(p1shandow1,.8,{x:320,y:stageH/2,delay:p1timer})

	TweenMax.set(p1box2,{x:320+300,y:stageH/2})
	TweenMax.set(p1shandow2,{x:320+300,y:stageH/2})
	TweenMax.to(p1box2,.8,{x:320,y:stageH/2,delay:p1timer+.1})
	TweenMax.to(p1shandow2,.8,{x:320,y:stageH/2,delay:p1timer+.1})

	TweenMax.set(p1box3,{x:320-300,y:stageH/2+400})
	TweenMax.set(p1shandow3,{x:320-300,y:stageH/2+400})
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

}




