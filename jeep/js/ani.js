//==========================================================================banner - 场景一 ...
var bannerC=new PIXI.Container()
var bannerBG,banner1,banner2,banner3,banner4,banner5,banner6
var bannerA=[]
function setBanner(){
	part1.addChild(bannerC)

	bannerBG=new Sprite(getTe(_CDN+"img/banner.png"));
	bannerBG.y=80
	bannerC.addChild(bannerBG)

	bannerA=[banner1,banner2,banner3,banner4,banner5,banner6]
	for (var i = 0; i < bannerA.length; i++) {
		var j=i+1
		bannerA[i]=new Sprite(getTe(_CDN+"img/banner_t"+j+".png"));
		bannerA[i].y=80
		bannerC.addChild(bannerA[i])
		if(i!=0){bannerA[i].alpha=0}
	};
}

function changeBanner(){
	for (var i = 0; i < bannerA.length; i++) {
		if(i!=nowQ){
			bannerA[i].alpha=0
		}else{
			bannerA[i].alpha=1
		}
	};
}

//==========================================================================下一步按钮
var nextC=new PIXI.Container()
var nextA=[]
var nowQ=0
function setNext(){
	for (var i = 1; i <= 6; i++) {
		var _next=new Sprite(getTe(_CDN+"img/btn_next"+i+".png"));
		nextA.push(_next)
		_next.pivot.set(65,31.5)
		_next.position.set(502,637.5)
		nextC.addChild(_next)
		if(i!=1){_next.alpha=0}

	};
	part1.addChild(nextC)
	nextC.interactive=true
	nextC.tap=goNext
	nextC.visible=false
}

function changeNextBtn(){
	for (var i = 0; i < bannerA.length; i++) {
		if(i!=nowQ){
			nextA[i].alpha=0
		}else{
			nextA[i].alpha=1
		}
	};
}

//==========================================================================点击下一步按钮
var userAnswerA=[0,0,0,0,0,0]

function goNext(){
	userAnswerA[nowQ]=nowAnswer
	if(nowQ<5){
		nowQ++
		console.log(nowQ)
		changeBanner()
		changeNextBtn()
		changeQuestion()
		changeAnswer()
		changeBtns()
		changeBG()
		nextC.visible=false

	}else{
		nextC.interactive=false
		console.log("完成答题",userAnswerA)
		getUserNum()
		waitingC.visible=true
		TweenMax.from(waitingC,.5,{alpha:0})
		setTimeout(showResult,2000)
	}
	
}
//==========================================================================计算结果
var userNum
var userAnswerAB=[0,0,0,0]
function getUserNum(){
	
	for (var i = 0; i < 6; i++) {
		userAnswerAB[userAnswerA[i]]++
	};
	console.log("userAnswerAB",userAnswerAB)
	var max = Math.max.apply(null,userAnswerAB);
	console.log("max",max)

	if(Math.random()>.5){
		for (var i = 0; i < 4; i++) {
			if(userAnswerAB[i]==max){
				userNum=i
			}
		};
	}else{
		for (var i = 3; i >= 0; i--) {
			if(userAnswerAB[i]==max){
				userNum=i
			}
		};
	}
	console.log("userNum",userNum)

}
//========================================================================== 结果！！！！！！！！！！！！！！！！！！！！
var resultC=new PIXI.Container()
var resultCA=[]
var btnLeads,btnList,btnShare
var leadsTop

var ugcBGA=[]
var QR

function setResult(){
	pStage.addChild(resultC)
	for (var i = 0; i < 4; i++) {
		var j=i+1
		var _resultC=new PIXI.Container()
		resultC.addChild(_resultC)
		resultCA.push(_resultC)
		var ugcBG=new Sprite(getTe(_CDN+"img/ugcbg"+j+".png"))
		ugcBG.width=640
		ugcBG.height=stageH
		ugcBG.visible=false
		ugcBGA.push(ugcBG)

		var _ugcA=new Sprite(getTe(_CDN+"img/ugc"+j+"a.png"))
		var _ugcB=new Sprite(getTe(_CDN+"img/ugc"+j+"b.png"))
		var _ugcC=new Sprite(getTe(_CDN+"img/ugc"+j+"c.png"))

		var _ugcTitle=new Sprite(getTe(_CDN+"img/ugctitle.png"))

		_ugcTitle.y=(stageH-1000)/10



		var ugct1=new PIXI.Text(">> 原来",{fontSize: 23,fill: 'white'})
		var ugct2=new PIXI.Text(userName,{fontSize: 30,fill: 'white'})
		var ugct3=new PIXI.Text("是这样的大中产 <<",{fontSize: 23,fill: 'white'})


		_ugcTitle.visible=_ugcA.visible=_ugcB.visible=_ugcC.visible=ugct1.visible=ugct2.visible=ugct3.visible=false

		ugct1.y=ugct3.y=197+7+_ugcTitle.y
		ugct2.y=197+_ugcTitle.y

		console.log(ugct2.y/stageH*100+"%")
		leadsTop=ugct2.y/stageH*100

		ugct1.x=(640-(ugct1.width+ugct2.width+ugct3.width+4))/2
		ugct2.x=ugct1.x+2+ugct1.width
		ugct3.x=ugct2.x+2+ugct2.width

		_resultC.addChild(ugcBG,_ugcTitle,ugct1,ugct2,ugct3,_ugcA,_ugcB,_ugcC)
		setCenter([_ugcA,_ugcB,_ugcC])
	};

	btnLeads=new Sprite(getTe(_CDN+"img/btn_leads.png"))
	btnList=new Sprite(getTe(_CDN+"img/btn_list.png"))
	btnShare=new Sprite(getTe(_CDN+"img/btn_share.png"))

	btnShare.position.set(107,stageH/2+346+stageH/2-500)
	btnLeads.position.set(333,stageH/2+346+stageH/2-500)
	btnList.position.set(195,stageH/2+381+stageH/2-500)

	resultC.addChild(btnShare,btnLeads,btnList)
	resultC.visible=false

	//showResult()
	QR=new Sprite(getTe(_CDN+"img/qr.png"))
	resultC.addChild(QR)
	
	QR.y=btnShare.y
	QR.visible=false
}

function showResult(){
	console.log("show111")
	//waitingC.visible=false
	TweenMax.to(waitingC,1,{alpha:0})

	btnShare.interactive=true
	btnLeads.interactive=true
	btnList.interactive=true

	btnShare.tap=goShare
	btnLeads.tap=goLeads
	btnList.tap=goList

	resultC.visible=true

	ugcBGA[userNum].visible=true

	

	for (var i = 1; i < resultC.children[userNum].children.length; i++) {
		resultC.children[userNum].children[i].visible=true
		TweenMax.from(resultC.children[userNum].children[i],1,{y:"+=50",alpha:0,delay:i*.05+.5,ease:Back.easeOut})
	};
	
}

function goShare(){
	//=======弹出leads
	QR.visible=true
	btnShare.visible=false
	btnLeads.visible=false
	btnList.visible=false
}
function goLeads(){
	main.openReg(leadsTop)//=======弹出分享
}
function goList(){
	//=======弹出歌单
}
//========================================================================== 生成中。。。
var waitingC=new PIXI.Container()
var waitingBG,waitingCar1,waitingCar2,waitingT
var waitingDotA=[]

function setWaiting(){
	pStage.addChild(waitingC)

	waitingBG=new Sprite(getTe(_CDN+"img/loading-bg.jpg"))
	waitingBG.width=640
	waitingBG.height=stageH

	waitingCar1=new Sprite(getTe(_CDN+"img/waiting_car1.png"))
	waitingCar2=new Sprite(getTe(_CDN+"img/waiting_car2.png"))
	waitingT=new Sprite(getTe(_CDN+"img/waiting_t.png"))

	waitingC.addChild(waitingBG,waitingCar1,waitingCar2,waitingT)
	setCenter([waitingCar1,waitingCar2,waitingT])

	for (var i = 0; i < 6; i++) {
		var dot=new PIXI.Graphics()
		dot.beginFill(0xffffff)
		dot.drawCircle(0,0,2)
		waitingC.addChild(dot)
		dot.position.set(286+i*12.8,stageH/2-33)
		TweenMax.to(dot,.25,{alpha:0,repeat:100000,yoyo:true,delay:i*.5/6,repeatDelay:.5})
	};
	waitingC.visible=false
}


//========================================================================== 问题
var questionC=new PIXI.Container()
var questionA=[]
var t2=new PIXI.Text("选择一首歌hold住此刻凝固的空气",{
   			fontSize: 23,
        fill: 'white',
        align: 'left'
})

var t2A=["选择一首歌hold住此刻凝固的空气","选择一首歌hold住此刻抓狂的心情","选择一首歌hold住此刻尴尬的场面","选择一首歌hold住此刻标准的从容","选择一首歌hold住此刻拘谨的场面","",]
function setQuestion(){
	part1.addChild(questionC)
	for (var i = 1; i <= 6; i++) {
		var _Q=new Sprite(getTe(_CDN+"img/q"+i+"t1.png"));
		questionA.push(_Q)
		_Q.pivot.set(320,50.5)
		_Q.position.set(320,233.5)
		questionC.addChild(_Q)
		if(i!=1){
			_Q.scale.y=0
			_Q.scale.x=.9
			_Q.y=233.5+50.5
		}
	};
	//t2=new Sprite(getTe(_CDN+"img/q1t2.png"));
	questionC.addChild(t2)
	t2.y=311
	t2.x=(640-t2.width)/2
}

function changeQuestion(){
	var _ease=Back.easeNone
	var _t=.5
	for (var i = 0; i < questionA.length; i++) {
		if(i==nowQ){
			TweenMax.to(questionA[i],_t,{y:233.5,ease:_ease,delay:.05})
			TweenMax.to(questionA[i].scale,_t*.9,{y:1,x:1,ease:_ease,delay:.05})
		}else if(i<nowQ){
			TweenMax.to(questionA[i],_t,{y:233.5-50.5,ease:_ease})
			TweenMax.to(questionA[i].scale,_t*.9,{y:0,x:1.1,ease:_ease})
		}else if(i>nowQ){
			TweenMax.to(questionA[i],_t,{y:233.5+50.5,ease:_ease})
			TweenMax.to(questionA[i].scale,_t*.9,{y:0,x:.9,ease:_ease})
		}
	};

	t2.text=t2A[nowQ]
	t2.x=(640-t2.width)/2
}

//========================================================================== 答案
var answerC=new PIXI.Container()
var answer1=[]
var answer2=[]
var answer3=[]
var answer4=[]
var answer5=[]
var answer6=[]
var answerA=[answer1,answer2,answer3,answer4,answer5,answer6]
var btnA=[]

var answerBG
var nowAnswer
function setAnswer(){
	answerBG=new Sprite(getTe(_CDN+"img/btns.png"));
	part1.addChild(answerC)
	answerC.addChild(answerBG)
	answerC.pivot.set(320,120)
	answerC.position.set(320,476)
	var i
	var btnY=[0,62.5,122.5,183.5]
	for (i = 0; i < 4; i++) {
		var _btn=new Sprite(getTe(_CDN+"img/btn"+i+".png"));
		btnA.push(_btn)
		_btn.y=btnY[i]
		answerC.addChild(_btn)
		_btn.alpha=0
		_btn.interactive=true
		_btn.tap=selectAnswer
	};

	for (i = 0; i < 6; i++) {
		for (var j = 0; j < 4; j++) {
			var _i=i+1
			var _j=j+1
			var _answer=new Sprite(getTe(_CDN+"img/q"+_i+"a"+_j+".png"));
			answerA[i].push(_answer)			
			answerC.addChild(_answer)
			if(i!=0){
				_answer.alpha=0
			}

		};
	};
}

function selectAnswer(_e){
	for (var i = 0; i < 4; i++) {
		if(_e.target==btnA[i]){
			console.log("选"+i)
			TweenMax.to(btnA[i],.2,{alpha:1})
			nowAnswer=i
		}else{
			TweenMax.to(btnA[i],.5,{alpha:0})
		}
	};
	nextC.visible=true
}


function changeAnswer(){
	var _delay=.1
	var _t=.5
	for (i = 0; i < 6; i++) {
		for (var j = 0; j < 4; j++) {
			if(i==nowQ){
				TweenMax.set(answerA[i][j],{alpha:0,x:-100})
				TweenMax.to(answerA[i][j],_t,{alpha:1,delay:j*.05+_delay+.3,})
				TweenMax.to(answerA[i][j],_t,{x:0,delay:j*.05+_delay+.3,ease:Back.easeOut})
			}else{
				TweenMax.to(answerA[i][j],_t/2,{alpha:0,x:100,delay:j*.05+_delay})
			}

		};
	};
}
function changeBtns(){
	for (var i = 0; i < 4; i++) {
			TweenMax.to(btnA[i],.5,{alpha:0})
		};
}
//==========================================================================BG ALL
var maskA=[]

function setBG(){
	setBG1()
	setBG2()
	setBG3()
	setBG4()
	setBG5()
	setBG6()

	for (var i = 0; i < 6; i++) {
		var _mask=new PIXI.Graphics()
		_mask.beginFill(0x123456)
		_mask.drawCircle(0,0,Math.sqrt(stageH*stageH+640*640)/2)
		part1bg.addChild(_mask)
		maskA.push(_mask)
		bgA[i].mask=_mask
		_mask.position.set(320,stageH/2-(1300-stageH)/300*20)
		if(i!=0){
			_mask.scale.x=_mask.scale.y=0.0001
		}
	};
}

function changeBG(){
	TweenMax.to(maskA[nowQ].scale,1,{x:1,y:1})
}


//==========================================================================bg1
var bg1a,bg1b
function setBG1(){
	bg1a=new Sprite(getTe(_CDN+"img/q1bg1.png"));
	bg1b=new Sprite(getTe(_CDN+"img/q1bg2.jpg"));
	bg1.addChild(bg1b,bg1a)

	setBottom([bg1a])
	setFullScreen([bg1b],0)
	//bg1b.x-=50
	//TweenMax.to(bg1b,2.5,{x:"+=100",repeat:1000,yoyo:true,ease:Linear.easeNone})
	//==TweenMax.to(bg1a,.1,{y:"+=2",repeat:10000,yoyo:true,ease:Linear.easeNone})
}

//==========================================================================bg2
var bg2a,bg2b
function setBG2(){
	bg2a=new Sprite(getTe(_CDN+"img/q2bg1.png"));
	bg2b=new Sprite(getTe(_CDN+"img/q2bg2.jpg"));
	bg2.addChild(bg2b,bg2a)

	setBottom([bg2a])
	setFullScreen([bg2b],0)
	//bg1b.x-=50
	//TweenMax.to(bg1b,2.5,{x:"+=100",repeat:1000,yoyo:true,ease:Linear.easeNone})
	//==TweenMax.to(bg2a,.1,{y:"+=2",repeat:10000,yoyo:true,ease:Linear.easeNone})
}

//==========================================================================bg3
var bg3a
function setBG3(){
	bg3a=new Sprite(getTe(_CDN+"img/q3bg1.jpg"));
	bg3.addChild(bg3a)
	setBottom([bg3a])
}
//==========================================================================bg4
var bg4a
function setBG4(){
	bg4a=new Sprite(getTe(_CDN+"img/q4bg1.jpg"));
	bg4.addChild(bg4a)
	setBottom([bg4a])
}
//==========================================================================bg5
var bg5a
function setBG5(){
	bg5a=new Sprite(getTe(_CDN+"img/q5bg1.jpg"));
	bg5.addChild(bg5a)
	setBottom([bg5a])
}
//==========================================================================bg6
var bg6a
function setBG6(){
	bg6a=new Sprite(getTe(_CDN+"img/q6bg1.jpg"));
	bg6.addChild(bg6a)
	setBottom([bg6a])
}
