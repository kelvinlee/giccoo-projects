var bgC=new PIXI.Container()
var bgAll,bgUp,bgDown,p1logo
var xman
var p1C=new PIXI.Container()
var bg1,bg2,bg3,bg4
var bgEndA=[]
var bgEnd=new PIXI.Container()
function setPage1 () {
	// body...
	pStage.addChild(bgC,p1C)


	bgAll=new Sprite(getTe(_CDN+"img/p1bg.jpg"));
	bgUp=new Sprite(getTe(_CDN+"img/bg_top.png"));
	bgDown=new Sprite(getTe(_CDN+"img/bg_down.png"));

	xman=new Sprite(getTe(_CDN+"img/xman.png"));
	xman.position.set(-320,stageH-234)

	p1logo=new Sprite(getTe(_CDN+"img/p1logo.png"));

	bgC.addChild(bgAll,xman,bgEnd,bgUp,bgDown)
	bgEnd.y=stageH
	bg1=new Sprite(getTe(_CDN+"img/end_bg1b.png"));
	bg2=new Sprite(getTe(_CDN+"img/end_bg2b.png"));
	bg3=new Sprite(getTe(_CDN+"img/end_bg3b.png"));
	bg4=new Sprite(getTe(_CDN+"img/end_bg4b.png"));
	bgEnd.addChild(bg1,bg2,bg3,bg4)
	bgEndA=[bg1,bg2,bg3,bg4]
	for (var i = 0; i < 4; i++) {
		bgEndA[i].visible=false
		bgEndA[i].height=stageH
	};

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
var p1snow
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


	p1snow=new Sprite(getTe(_CDN+"img/p1snow.png"));
	p1snow.y=stageH/2-500
	p1snow.blendMode=_ADD


	p1C.addChild(p1snow,p1tC)
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

	p1t4.interactive=true
	p1t4.tap=goPage2

}
function showPage1(){
	TweenMax.from(bgUp.scale,1,{x:1.2,y:1.2})
	TweenMax.from(bgDown.scale,1,{x:1.2,y:1.2})

	var p1tA=[p1t1,p1t2,p1t3,p1t4]

	for (var i = 0; i < 4; i++) {
		TweenMax.from(p1tA[i],1.5,{y:"+=150",ease:Elastic.easeOut,delay:.1*i})
		TweenMax.from(p1tA[i],1,{alpha:0,delay:.1*i})
	};
	TweenMax.to(xman,3,{x:0})
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
	var xA=[50+10,101+5,163+10,454-10,510,553-5,606+10]
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
var p2l1,p2l2,p2l3,p2l4
var p2lineC=new PIXI.Container()
function setP2line(){
	p2l1=new Sprite(getTe(_CDN+"img/p2line1.png"));
	p2l2=new Sprite(getTe(_CDN+"img/p2line2.png"));
	p2l3=new Sprite(getTe(_CDN+"img/p2line3.png"));
	p2l4=new Sprite(getTe(_CDN+"img/p2line4.png"));

	pStage.addChild(p2lineC)
	p2lineC.addChild(p2l1,p2l2,p2l3,p2l4)

	var p2lineA=[p2l1,p2l2,p2l3]
	var xxA=[122+10,345-10,612-10]
	for (var i = 0; i < 3; i++) {
		var _p2line=new PIXI.Container()
		_p2line.addChild(p2lineA[i])
		p2lineC.addChild(_p2line)
		//p2lineA[i].y=-519
		//TweenMax.to(p2lineA[i],2,{y:-100,ease:Elastic.easeOut,delay:.05*i})

		_p2line.pivot.set(xxA[i],0)
		_p2line.position.set(xxA[i],0)

		TweenMax.to(_p2line.scale,2+Math.random(),{x:-1,repeat:100000,yoyo:true,ease:Sine.easeInOut,delay:.5*i})
	};
}

var p2eC=new PIXI.Container()
var pageQ=new PIXI.Container()
function goPage2(){
	p1t4.interactive=false
	TweenMax.to(p1C,1.5,{alpha:0})

	TweenMax.to(bgAll,.5,{y:"+=50"})
	TweenMax.to(xman,.5,{y:"+=50",x:640,onComplete:function(){
		xman.x=-320
	}})

	pStage.addChild(pageQ,p2eC)
	showEmoji()
	setTimeout(setPageQ,2500)
}
function showEmoji(){
	for (var i = 0; i < 200; i++) {
		var _e=new Sprite(getTe(_CDN+"img/e"+(i%14+1)+".png"));
		console.log(i%14+1)
		p2eC.addChild(_e)
		_e.pivot.set(157,150)
		_e.position.set(320+Math.random()*20-10,stageH/2+Math.random()*20-10)
		_e.scale.set(0,0)
		//_e.alpha=0

		var _r=stageH+320
		var _ang=(Math.random()*360)*0.017453293
		var _x=_r*Math.cos(_ang)+320
		var _y=_r*Math.sin(_ang)+stageH/2
		var _delay=Math.random()*2
		TweenMax.to(_e,1+_delay,{x:_x,y:_y,rotation:Math.random()*5-2.5,repeat:0,alpha:1,delay:_delay/2,ease:Sine.easeOut})
		TweenMax.to(_e.scale,1+_delay+.5,{x:2+_delay,y:2+_delay,repeat:0,delay:_delay/2,ease:Sine.easeOut})
	};
}
var pageQ1=new PIXI.Container()
var pageQ2=new PIXI.Container()
var pageQ3=new PIXI.Container()
var pageQ4=new PIXI.Container()
var nowQ=0
var btnNext
function setPageQ(){
	console.log("问题页")
	btnNext=new Sprite(getTe(_CDN+"img/btn_next.png"));
	btnNext.y=stageH-213
	pageQ.addChild(pageQ1,pageQ2,pageQ3,pageQ4,btnNext)
	TweenMax.to(btnNext,.7,{alpha:.5,repeat:100000,yoyo:true,ease:Sine.easeIn})
	btnNext.visible=false

	setP2line()
	setQ1()

}




//===========================问题1
var q1bg,q1title,q11,q12,q13,q14,mark00,mark01,mark02,mark03
var markA=[[],[],[],[]]
var qA=[[],[],[],[]]
var qwh=[
[[155,186],[168,164],[161,193],[186,170]],
[[640,52],[640,52],[640,54 ],[640,52]],
[[260,213],[240,274],[199,231],[280,223]],
[[217,240],[261,261],[229,234],[152,221]]
]

var qxy=[
[[155.5,430],[511,457],[171.5,682.5],[440,696]],
[[320,377],[320,450],[320,515],[320,585]],
[[198,472.5],[468,423],[143.5,696.5],[402,690.5]],
[[158,423.5],[469.5,386.5],[187.5,651],[432,659.5]]
]

function setQ1(){
	q1bg=new Sprite(getTe(_CDN+"img/q1bg.png"));
	q1bg.y=stageH/2-500

	q1title=new Sprite(getTe(_CDN+"img/q1title.png"));
	q1title.y=stageH/2-500

	pageQ1.addChild(q1bg,q1title)

	for (var i = 0; i < 4; i++) {
		var _num=(nowQ+1)*10+i+1
		var _q=new Sprite(getTe(_CDN+"img/q"+_num+".png"));
		//console.log("img/q"+nowQ+1+""+i+1+".png")
		_q.pivot.set(qwh[nowQ][i][0]/2,qwh[nowQ][i][1]/2)
		_q.position.set(qxy[nowQ][i][0],qxy[nowQ][i][1]+stageH/2-500)
		qA[nowQ].push(_q)
		_q.interactive=true
		_q.tap=selectQ


		var _mark=new Sprite(getTe(_CDN+"img/mark"+_num+".png"));
		_mark.y=stageH/2-500
		_mark.visible=false
		_mark.blendMode=_ADD
		markA[nowQ].push(_mark)
		pageQ1.addChild(_q,_mark)
	};

	pageQ1.visible=false
	showQ1()
}


var q2bg,q2title
function setQ2(){
	q2bg=new Sprite(getTe(_CDN+"img/q2bg.png"));
	q2bg.y=stageH-1000

	q2title=new Sprite(getTe(_CDN+"img/q2title.png"));
	q2title.y=stageH/2-500

	pageQ2.addChild(q2bg,q2title)

	for (var i = 0; i < 4; i++) {
		var _num=(nowQ+1)*10+i+1
		var _q=new Sprite(getTe(_CDN+"img/q"+_num+".png"));
		//console.log("img/q"+nowQ+1+""+i+1+".png")
		_q.pivot.set(qwh[nowQ][i][0]/2,qwh[nowQ][i][1]/2)
		_q.position.set(qxy[nowQ][i][0],qxy[nowQ][i][1]+stageH/2-500)
		qA[nowQ].push(_q)
		_q.interactive=true
		_q.tap=selectQ


		var _mark=new Sprite(getTe(_CDN+"img/mark"+_num+".png"));
		_mark.y=stageH/2-500
		_mark.visible=false
		_mark.blendMode=_ADD
		markA[nowQ].push(_mark)
		pageQ2.addChild(_q,_mark)
	};

	pageQ2.visible=false
	showQ2()
}

var q3bg,q3title
function setQ3(){


	q3title=new Sprite(getTe(_CDN+"img/q3title.png"));
	q3title.y=stageH/2-500

	pageQ3.addChild(q3title)

	for (var i = 0; i < 4; i++) {
		var _num=(nowQ+1)*10+i+1
		var _q=new Sprite(getTe(_CDN+"img/q"+_num+".png"));
		//console.log("img/q"+nowQ+1+""+i+1+".png")
		_q.pivot.set(qwh[nowQ][i][0]/2,qwh[nowQ][i][1]/2)
		_q.position.set(qxy[nowQ][i][0],qxy[nowQ][i][1]+stageH/2-500)
		qA[nowQ].push(_q)
		_q.interactive=true
		_q.tap=selectQ


		var _mark=new Sprite(getTe(_CDN+"img/mark"+_num+".png"));
		_mark.y=stageH/2-500
		_mark.visible=false
		_mark.blendMode=_ADD
		markA[nowQ].push(_mark)
		pageQ3.addChild(_q,_mark)
	};

	pageQ3.visible=false
	showQ3()
}

var q4bg,q4title
function setQ4(){


	q4title=new Sprite(getTe(_CDN+"img/q4title.png"));
	q4title.y=stageH/2-500

	pageQ4.addChild(q4title)

	for (var i = 0; i < 4; i++) {
		var _num=(nowQ+1)*10+i+1
		var _q=new Sprite(getTe(_CDN+"img/q"+_num+".png"));
		//console.log("img/q"+nowQ+1+""+i+1+".png")
		_q.pivot.set(qwh[nowQ][i][0]/2,qwh[nowQ][i][1]/2)
		_q.position.set(qxy[nowQ][i][0],qxy[nowQ][i][1]+stageH/2-500)
		qA[nowQ].push(_q)
		_q.interactive=true
		_q.tap=selectQ


		var _mark=new Sprite(getTe(_CDN+"img/mark"+_num+".png"));
		_mark.y=stageH/2-500
		_mark.visible=false
		_mark.blendMode=_ADD
		markA[nowQ].push(_mark)
		pageQ4.addChild(_q,_mark)
	};

	pageQ4.visible=false
	showQ4()
}


function showQ1(){
	pageQ1.visible=true

	TweenMax.from(q1bg,1,{alpha:0})
	TweenMax.from(q1title,.5,{y:"+=100"})
	TweenMax.from(q1title,.5,{alpha:0})
	for (var i = 0; i < 4; i++) {
		TweenMax.from(qA[nowQ][i],.5,{y:"+=100",delay:i*.05})
		TweenMax.from(qA[nowQ][i].scale,1.5,{x:0,y:0,ease:Elastic.easeOut,delay:i*.05})
		TweenMax.from(qA[nowQ][i],.5,{alpha:0,delay:i*.05})
	};
}
function showQ2(){
	pageQ2.visible=true

	TweenMax.from(q2bg,1,{alpha:0})
	TweenMax.from(q2title,.5,{y:"+=100"})
	TweenMax.from(q2title,.5,{alpha:0})
	for (var i = 0; i < 4; i++) {
		TweenMax.from(qA[nowQ][i],.5,{y:"+=100",delay:i*.05})
		TweenMax.from(qA[nowQ][i].scale,1.5,{x:0,y:0,ease:Elastic.easeOut,delay:i*.05})
		TweenMax.from(qA[nowQ][i],.5,{alpha:0,delay:i*.05})
	};
}
function showQ3(){
	pageQ3.visible=true

	TweenMax.from(q3title,.5,{y:"+=100"})
	TweenMax.from(q3title,.5,{alpha:0})
	for (var i = 0; i < 4; i++) {
		TweenMax.from(qA[nowQ][i],.5,{y:"+=100",delay:i*.05})
		TweenMax.from(qA[nowQ][i].scale,1.5,{x:0,y:0,ease:Elastic.easeOut,delay:i*.05})
		TweenMax.from(qA[nowQ][i],.5,{alpha:0,delay:i*.05})
	};
}
function showQ4(){
	pageQ4.visible=true

	TweenMax.from(q4title,.5,{y:"+=100"})
	TweenMax.from(q4title,.5,{alpha:0})
	for (var i = 0; i < 4; i++) {
		TweenMax.from(qA[nowQ][i],.5,{y:"+=100",delay:i*.05})
		TweenMax.from(qA[nowQ][i].scale,1.5,{x:0,y:0,ease:Elastic.easeOut,delay:i*.05})
		TweenMax.from(qA[nowQ][i],.5,{alpha:0,delay:i*.05})
	};
}

var resultA=[9,9,9,9]
function selectQ(_e){
	if(resultA[nowQ]==9){
		showNextBtn()
	}
	for (var i = 0; i < 4; i++) {
		if(_e.target==qA[nowQ][i]){
			console.log("选了"+i)
			resultA[nowQ]=i
			markA[nowQ][0].visible=false
			markA[nowQ][1].visible=false
			markA[nowQ][2].visible=false
			markA[nowQ][3].visible=false
			markA[nowQ][i].visible=true
		}
	};
}

function showNextBtn(){
	TweenMax.set(xman,{x:-320})
	TweenMax.to(xman,1,{x:0})
	btnNext.visible=true
	btnNext.interactive=true
	btnNext.tap=goNextQ
}

var qPageA=[]
function goNextQ(){
	TweenMax.to(xman,.5,{x:640})
	btnNext.visible=false
	btnNext.interactive=false
	markA[nowQ][0].visible=false
	markA[nowQ][1].visible=false
	markA[nowQ][2].visible=false
	markA[nowQ][3].visible=false
	qPageA=[pageQ1,pageQ2,pageQ3,pageQ4]
	qPageA[nowQ].visible=false

	if(nowQ==0){
		nowQ++
		setQ2()
	}else if(nowQ==1){
		nowQ++
		setQ3()
	}else if(nowQ==2){
		nowQ++
		setQ4()
	}else if(nowQ==3){
		console.log("答完题了")
		goEnd()
	}

}

var endTitle=new PIXI.Container()
var endTitleA=[]

var endPic=new PIXI.Container()
var endPicA=[]

var endT=new PIXI.Container()
var endT1A=[]
var endT2A=[]
var endT3A=[]
var endTbg

var endBtn=new PIXI.Container()
var endbtnbg,endbtn1,endbtn2

var qr,logo

function goEnd(){
	pStage.addChild(endT,endPic,endTitle,endBtn)
	bgEndA[resultA[2]].visible=true
	TweenMax.to(bgEnd,1,{y:0})

	endTbg=new Sprite(getTe(_CDN+"img/end_tbg.png"));
	endT.addChild(endTbg)

	for (var i = 0; i < 4; i++) {//=====生成
		var j=i+1
		var _endTitle=new Sprite(getTe(_CDN+"img/end_title"+j+".png"));
		_endTitle.visible=false
		endTitle.addChild(_endTitle)
		endTitleA.push(_endTitle)

		var _endPic=new Sprite(getTe(_CDN+"img/end_bg"+j+".png"));
		_endPic.visible=false
		endPic.addChild(_endPic)
		endPicA.push(_endPic)

		var _endT1=new Sprite(getTe(_CDN+"img/end_t1"+j+".png"));
		_endT1.visible=false
		endT.addChild(_endT1)
		endT1A.push(_endT1)

		var _endT2=new Sprite(getTe(_CDN+"img/end_t2"+j+".png"));
		_endT2.visible=false
		endT.addChild(_endT2)
		endT2A.push(_endT2)

		var _endT3=new Sprite(getTe(_CDN+"img/end_t3"+j+".png"));
		_endT3.visible=false
		endT.addChild(_endT3)
		endT3A.push(_endT3)

	};
	endTitle.pivot.set(320,270)
	endTitle.position.set(320,270+stageH/2-500)

	endPic.y=stageH-1000

	endT.pivot.set(320,597)
	endT.position.set(320,597+stageH/2-500)

	endTitleA[resultA[1]].visible=true
	TweenMax.from(endTitle,2,{y:-539+270,ease:Elastic.easeOut,delay:.5})
	TweenMax.from(endTitle,1,{rotation:.5,delay:.5})

	endPicA[resultA[2]].visible=true
	TweenMax.from(endPic,1,{y:stageH-1000+300,delay:.5})

	endT1A[resultA[0]].visible=true
	endT2A[resultA[3]].visible=true
	endT3A[resultA[1]].visible=true

	TweenMax.from(endT.scale,2,{x:0,y:0,ease:Elastic.easeOut,delay:.5})

	endbtnbg=new Sprite(getTe(_CDN+"img/endbtnbg.png"));
	endbtn1=new Sprite(getTe(_CDN+"img/endbtn1.png"));
	endbtn2=new Sprite(getTe(_CDN+"img/endbtn2.png"));

	endBtn.addChild(endbtnbg,endbtn1,endbtn2)

	endbtn2.x=640-373
	endBtn.y=stageH-211
	TweenMax.from(endBtn,1,{alpha:0})
	endbtn1.blendMode=_ADD
	endbtn2.blendMode=_ADD

	endbtn1.interactive=true
	endbtn1.tap=savePic

	endbtn2.interactive=true
	endbtn2.tap=goLayer

	TweenMax.from(endbtn1,1.5,{alpha:.7,repeat:100000,delay:.0})
	TweenMax.from(endbtn2,1.5,{alpha:.7,repeat:100000,delay:.75})

	// for (i = 0; i < 4; i++) {
		
	// };
	qr=new Sprite(getTe(_CDN+"img/qr.png"));
	pStage.addChild(qr)
	qr.y=stageH-211
	qr.visible=false

	logo=new Sprite(getTe(_CDN+"img/logo.png"));
	pStage.addChild(logo)
	logo.visible=false

}


function savePic(){
	endBtn.visible=false
	qr.visible=true
	logo.visible=true
	main.share()
}
function goFinal2(){

}

function shareDone(){
	endBtn.visible=true
	qr.visible=false
	logo.visible=false
}

function goLayer(){
	main.goNote()
}



