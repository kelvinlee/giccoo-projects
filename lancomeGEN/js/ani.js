var question1A=["Q：你内心所孕育的情感世界，","Q：你内心所培育的社交圈，","Q：你内心所向往的职场，"]
var question2A=["是一片怎样的光景？","是一片多大的乐园？","会停留在列车的哪个站台?"]
var answer1A=["一个人的浩瀚星空>>","秘友间的小小花园>> ","追梦者的奋进都市>>"]
var answer2A=["两个人的温柔宇宙>>","交际花的玫瑰花海>> ","造梦者的轻活家园>>"]
var audioPlaying = false

var aniQA//=[aniQ1C,aniQ2C,aniQ3C]

function showQ (_Qnum) {
	question1.x=56
  question1.y=stageH/2-387
  question1.text=question1A[_Qnum]
  question2.x=110
  question2.y=stageH/2-329
  question2.text=question2A[_Qnum]
  answer1.x=169
  answer1.y=stageH/2-186
  answer1.text=answer1A[_Qnum]
  answer2.x=169
  answer2.y=stageH/2-26
  answer2.text=answer2A[_Qnum]
  question1.alpha=question2.alpha=answer1.alpha=answer2.alpha=btn1.alpha=btn2.alpha=1


  btn1.position.set(320,stageH/2-173)
  btn2.position.set(320,stageH/2-18)
  var _t=.05
  TweenMax.from(question1,1,{y:"-=150",alpha:0,delay:_t*3,ease:Back.easeOut})
  TweenMax.from(question2,1,{y:"-=150",alpha:0,delay:_t*2,ease:Back.easeOut})
  TweenMax.from(answer1  ,1,{y:"-=150",alpha:0,delay:_t*1,ease:Back.easeOut})
  TweenMax.from(answer2  ,1,{y:"-=150",alpha:0,delay:_t*0,ease:Back.easeOut})
  TweenMax.from(btn1	   ,1,{y:"-=120",alpha:0,delay:_t*1,ease:Back.easeOut})
  TweenMax.from(btn2	   ,1,{y:"-=120",alpha:0,delay:_t*0,ease:Back.easeOut})
  if(_Qnum==0){aniQ1()}
  if(_Qnum==1){aniQ2()}
  if(_Qnum==2){aniQ3()}
  btn1.interactive=true
 	btn2.interactive=true
	
}

function hideQ(){
	btn1.interactive=false
 	btn2.interactive=false
	var _Qnum=Qnum
	question1.x=56
  question1.y=stageH/2-387
  question1.text=question1A[_Qnum]
  question2.x=110
  question2.y=stageH/2-329
  question2.text=question2A[_Qnum]
  answer1.x=169
  answer1.y=stageH/2-186
  answer1.text=answer1A[_Qnum]
  answer2.x=169
  answer2.y=stageH/2-26
  answer2.text=answer2A[_Qnum]

  btn1.position.set(320,stageH/2-173)
  btn2.position.set(320,stageH/2-18)
  var _t=.05
  TweenMax.to(question1,.5,{y:"-=150",alpha:0,delay:_t*0})
  TweenMax.to(question2,.5,{y:"-=150",alpha:0,delay:_t*1})
  TweenMax.to(answer1  ,.5,{y:"-=150",alpha:0,delay:_t*2})
  TweenMax.to(answer2  ,.5,{y:"-=150",alpha:0,delay:_t*3})
  TweenMax.to(btn1	   ,.5,{y:"-=150",alpha:0,delay:_t*2})
  TweenMax.to(btn2	   ,.5,{y:"-=150",alpha:0,delay:_t*3})
  aniQA=[aniQ1C,aniQ2C,aniQ3C]
  TweenMax.to(aniQA[_Qnum],.5,{y:"-=200",alpha:0,delay:_t*4,onComplete:showAnswer})

}

function NextQuestion(){
	console.log("11")
	Qnum++
	if(Qnum<3){
		showQ(Qnum)
	}else{
		console.log("三题答完")
	}
}
var resultA=[9,9,9]
var answerT1,answerT2,answerT3,answerT4,answerBtnT,answerNextT,tStyle2,tStyle3,tStyle4,soundBtn,answerA//,answer1C,answer2C,answer3C
function setAnswer(){
	answerT1A=[["经常一个人独处","不在乎朋友的多少","凡事都想做的更好"],["果汁分你一半","聚会从不缺席","与世无争的佛系"]]
	answerT2A=[["享受自由的孤独","却会把知音当作宝","竞争也从来不愿失败"],["恩爱从不间断","朋友圈里永远有你","浸润出你对万物的宽逸"]]
	answerT3A=[["就连听的音乐","时常也会哼起一首歌","耳机里的音乐"],["就连听的音乐","时常也会哼起一首歌","耳机里的音乐"]]
	answerT4A=[["也释放着独身主义的温度","诉说你和秘友间的小打小闹","循环出你永不止步的宏愿"],["也透露着对你侬我侬的期盼","与万千朋友分享生活心语","伴随你在夏夜听见的蝉鸣"]]


	tStyle2=new PIXI.TextStyle({fontFamily:'yrd-Medium',fontSize: 31})
	tStyle3=new PIXI.TextStyle({fontFamily:'yrd-Medium',fontSize: 41})
	tStyle4=new PIXI.TextStyle({fontFamily:'yrd-Medium',fontSize: 32,fill:["#6a4c00"]})
	tStyle5=new PIXI.TextStyle({fontFamily:'yrd-Medium',fontSize: 28,fill:["#6a4c00"]})
	answerT1=new PIXI.Text("经常一个人独处",tStyle2)
	answerT2=new PIXI.Text("经常一个人独处",tStyle2)
	answerT3=new PIXI.Text("经常一个人独处",tStyle2)
	answerT4=new PIXI.Text("也释放着独身主义的温度",tStyle3)
	answerBtnT=new PIXI.Text("音乐为我发声",tStyle4)
	answerNextT=new PIXI.Text("下一题>>",tStyle5)

	answerT1.x=answerT2.x=answerT3.x=answerT4.x=86

	answerT1.y=stageH/2-400
	answerT2.y=stageH/2-345
	answerT3.y=stageH/2-291
	answerT4.y=stageH/2-238

	answerBtnT.position.set(123,stageH/2-152)
	answerNextT.position.set(442,stageH/2-152)

	soundBtn=new Sprite(getTe(_CDN+"img/btn_up.png"))
	soundBtn.pivot.set(320,58)
	soundBtn.position.set(238,stageH/2-138)
	soundBtn.scale.x=soundBtn.scale.y=.66

	pStage.addChild(soundBtn,answerT1,answerT2,answerT3,answerT4,answerBtnT,answerNextT)
	setSoundIcon()
	answerA=[answerT1,answerT2,answerT3,answerT4,answerBtnT,answerNextT,soundBtn,soundIcon,answerPicC]
	for (var i = 0; i < answerA.length; i++) {
		answerA[i].visible=false
	};
}

function showAnswer(){
	console.log("showAnswer")
	resultA[Qnum]=nowAnswer
	answerT1.y=stageH/2-400
	answerT2.y=stageH/2-345
	answerT3.y=stageH/2-291
	answerT4.y=stageH/2-238

	answerBtnT.position.set(123,stageH/2-152)
	answerNextT.position.set(442,stageH/2-152)
	soundBtn.position.set(238,stageH/2-138)
	soundIcon.position.set(324,stageH/2-152)
	answerPicC.y=0
	var picA=[[a1a,a1b],[a2a,a2b],[a3a,a3b]]
	picA[Qnum][nowAnswer].alpha=1
	for (var i = 0; i < answerA.length; i++) {
		answerA[i].visible=true
		TweenMax.set(answerA[i],{alpha:1})
		TweenMax.from(answerA[i],.5,{alpha:0,y:"+=100",delay:.05*i})
	};
	answerT1.text=answerT1A[nowAnswer][Qnum]
	answerT2.text=answerT2A[nowAnswer][Qnum]
	answerT3.text=answerT3A[nowAnswer][Qnum]
	answerT4.text=answerT4A[nowAnswer][Qnum]

	if(Qnum==2){
		tStyle4=new PIXI.TextStyle({fontFamily:'yrd-Medium',fontSize: 28,fill:["#6a4c00"]})
		answerBtnT.style=tStyle4
		answerBtnT.text="听听你内心的声音"
		answerBtnT.x-=15
		soundIcon.x+=12
		answerNextT.text="全部提交>>"
	}

	answerNextT.interactive=true
	answerNextT.tap=hideAnswer//showQ(Qnum)

	soundBtn.interactive=true
	soundBtn.tap=playSound
	//NextQuestion()
}
var musicA=[["a-1","a-2"],["b-1","b-2"],["c-1","c-2"]]
function playSound(){
	if (audioPlaying) {
		audioPlaying = false
		PIXI.sound.pause(musicA[Qnum][nowAnswer])
		soundIconStop()
		return false
	}
	PIXI.sound.play(musicA[Qnum][nowAnswer],{complete: function(){
		soundIconStop()
		hideAnswer()
		audioPlaying = false
	}})
	soundIconPlay()
	audioPlaying = true
}
function hideAnswer(){
	soundIconStop()
	PIXI.sound.stopAll()
	soundBtn.interactive=false
	answerNextT.interactive=false

	if(Qnum==2){
		// finishAll()
		main.pageHand()
	}else{
		for (var i = 0; i < answerA.length; i++) {
			TweenMax.to(answerA[i],.5,{alpha:0,y:"+=100",delay:.05*(answerA.length-i)})
		};
		TweenMax.set(this,{onComplete:NextQuestion,delay:0.6})
	}
	
	//NextQuestion()
	
}
var tStyle5,qr,logo
function finishAll(){
	
	answerNextT.visible=soundBtn.visible=answerBtnT.visible=soundIcon.visible=false
	tStyle5=new PIXI.TextStyle({fontFamily:'yrd-Medium',fontSize: 31,fill:["#000000"]})
	answerT1.style=answerT2.style=answerT3.style=answerT4.style=tStyle5
	answerT1.text="人生的每一帧"
	answerT2.text="都来自内在心声的力量"
	answerT3.text="兰蔻小黑瓶从肌底开始"
	answerT4.text="让你由内而外闪耀出自信光芒"
	answerT1.y=stageH/2-334
	answerT2.y=stageH/2-284
	answerT3.y=stageH/2-234
	answerT4.y=stageH/2-184

	logo=new Sprite(getTe(_CDN+"img/homepage-logo.png"))
	qr=new Sprite(getTe(_CDN+"img/qr.png"))
	pStage.addChild(qr,logo)
	qr.y=stageH/2-124
	logo.x=-80
	logo.y=stageH/2-423
	logo.scale.x=logo.scale.y=.68

	main.sharePost()
}
var btnlottery
function setLottery() {
	// 抽奖 btn
	qr.visible = false
	btnlottery=new Sprite(getTe(_CDN+"img/btnlottery.png"))
	pStage.addChild(btnlottery)
	btnlottery.y=stageH/2-131
	btnlottery.interactive=true
	btnlottery.tap=main.openPop
	// click to main.openPop()
}

//==========================================喇叭按钮动画
var soundIcon,sound0,sound1,sound2,sound3
function setSoundIcon(){
	soundIcon=new Container()
	sound0=new Sprite(getTe(_CDN+"img/sound0.png"))
	sound1=new Sprite(getTe(_CDN+"img/sound1.png"))
	sound2=new Sprite(getTe(_CDN+"img/sound2.png"))
	sound3=new Sprite(getTe(_CDN+"img/sound3.png"))
	pStage.addChild(soundIcon)
	soundIcon.addChild(sound0,sound1,sound2,sound3)
	soundIcon.position.set(324,stageH/2-152)
	//===
	soundIconPlay()
	soundIconStop()
}
function soundIconPlay(){
	TweenMax.to(sound1,.5,{alpha:0,repeat:1000,yoyo:true,delay:0})
	TweenMax.to(sound2,.5,{alpha:0,repeat:1000,yoyo:true,delay:.15})
	TweenMax.to(sound3,.5,{alpha:0,repeat:1000,yoyo:true,delay:.3})
}
function soundIconStop(){
	TweenMax.killTweensOf(sound1)
	TweenMax.killTweensOf(sound2)
	TweenMax.killTweensOf(sound3)
	TweenMax.set(sound1,{alpha:1})
	TweenMax.set(sound2,{alpha:1})
	TweenMax.set(sound3,{alpha:1})
}
//=======================================答案下部出现动画
var answerPicC,floor,table,a1a,a1b,a2a,a2b,a3a,a3b
function setAnswerPic(){
	answerPicC=new Container()
	floor=new Graphics()
	table=new Sprite(getTe(_CDN+"img/a1pic1.png"))

	a1a=new Sprite(getTe(_CDN+"img/a1a.png"))
	a1b=new Sprite(getTe(_CDN+"img/a1b.png"))
	a2a=new Sprite(getTe(_CDN+"img/a2a.png"))
	a2b=new Sprite(getTe(_CDN+"img/a2b.png"))
	a3a=new Sprite(getTe(_CDN+"img/a3a.jpg"))
	a3b=new Sprite(getTe(_CDN+"img/a3b.jpg"))

	pStage.addChild(answerPicC)
	answerPicC.addChild(floor,a3a,a3b,table,a1a,a1b,a2a,a2b)
	floor.beginFill(0xaeb6c0,1)
  floor.drawRect(0,stageH/2+182,640,stageH)
  table.position.set(100,stageH/2+220-150)

  a1a.alpha=a1b.alpha=a2a.alpha=a2b.alpha=a3a.alpha=a3b.alpha=0

  a1a.y=a1b.y=stageH/2-32
  a1b.x=-100
  a2a.y=a2b.y=stageH/2+157

	a3a.x=a3b.x=640-218
  a3a.y=a3b.y=stageH/2-427
  answerPicC.alpha=0
  answerPicC.y=100
}


//=======================================问题下部出现动画
var aniQ1C,aniQ2C,aniQ3C,q1pic1,q1pic2,q1pic3,q1pic4
function aniQ1(){
	console.log("-----------------------")

	aniQ1C=new Container()
	aniQ2C=new Container()
	aniQ3C=new Container()
	pStage.addChild(aniQ1C)
	q1pic1=new Sprite(getTe(_CDN+"img/q1pic1.png"))
	q1pic2=new Sprite(getTe(_CDN+"img/q1pic2.png"))
	q1pic3=new Sprite(getTe(_CDN+"img/q1pic3.png"))
	q1pic4=new Sprite(getTe(_CDN+"img/q1pic4.png"))
	aniQ1C.addChild(q1pic2,q1pic3,q1pic1,q1pic4)
	var q1picA=[q1pic1,q1pic2,q1pic3,q1pic4]
	for (var i = 0; i < q1picA.length; i++) {
		q1picA[i].pivot.set(320,148)
		q1picA[i].position.set(320,stageH/2+280)
	};
	q1picA[3].pivot.set(376,81)
	q1picA[3].position.set(376,stageH/2+280-148+81)
	TweenMax.from(q1pic1.scale,.8,{x:0,y:0,ease:Back.easeOut})
	TweenMax.from(q1pic2,.8,{x:"-=320",ease:Back.easeOut,delay:.2})
	TweenMax.from(q1pic3,.8,{x:"+=320",ease:Back.easeOut,delay:.1})
	TweenMax.from(q1pic4,1.2,{y:"-=80",ease:Bounce.easeOut,delay:.5})
	TweenMax.from(q1pic4.scale,1.2,{x:0,y:0,ease:Elastic.easeOut,delay:0})

}
var q2pic1,_q2pic1,q2pic2,q2pic3,q2pic4,q2pic5,q2pic6,q2pic7
var q2picA
function aniQ2(){
	pStage.addChild(aniQ2C)
	q2picA=[q2pic1,q2pic2,q2pic3,q2pic4,q2pic5,q2pic6,q2pic7]
	var i
	for (i = 2; i <= 7; i++) {
		q2picA[i-1]=new Sprite(getTe(_CDN+"img/q2pic"+i+".png"))
		aniQ2C.addChild(q2picA[i-1])
		q2picA[i-1].pivot.set(320,190)
		q2picA[i-1].position.set(320,stageH/2+306)
	};

	q2pic1=new Sprite(getTe(_CDN+"img/q2pic1.png"))
	aniQ2C.addChild(q2pic1)
	q2pic1.pivot.set(45.5,97)
	q2pic1.position.set(222,stageH/2+399)

	_q2pic1=new Sprite(getTe(_CDN+"img/q2pic1.png"))
	aniQ2C.addChild(_q2pic1)
	_q2pic1.pivot.set(45.5,97)
	_q2pic1.position.set(427,stageH/2+399)

	q2picA[0]=q2pic1
	q2picA.unshift(_q2pic1)
	console.log(5,q2picA[5])
	for (i = 0; i < q2picA.length; i++) {
		if(i<3){
			TweenMax.from(q2picA[i],.8,{y:"-=150",ease:Back.easeNone,delay:i*.1,alpha:0})
		}else{
			TweenMax.from(q2picA[i],1.5,{y:"-=150",ease:Bounce.easeOut,delay:i*.05+.2,alpha:0})
		}
		
	};

}
var q3pic1,_q3pic2
function aniQ3(){

	q3pic1=new Sprite(getTe(_CDN+"img/q3pic1.png"))
	q3pic2=new Sprite(getTe(_CDN+"img/q3pic2.png"))

	pStage.addChild(aniQ3C)
	aniQ3C.addChild(q3pic2,q3pic1)

	q3pic1.pivot.set(320,203)
	q3pic2.pivot.set(320,203)
	q3pic1.position.set(320,stageH/2+285)
	q3pic2.position.set(320,stageH/2+285)
	TweenMax.from(q3pic1,2.5,{x:"+=70",ease:Elastic.easeOut})
	TweenMax.from(q3pic2,2.5,{x:"-=70",ease:Elastic.easeOut,delay:.1})

	TweenMax.from(q3pic1,.5,{alpha:0})
	TweenMax.from(q3pic2,.5,{alpha:0,delay:.1})

}