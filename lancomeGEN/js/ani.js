var question1A=["Q：你内心所孕育的情感世界，","Q：你内心所培育的社交圈，","Q：你内心所向往的职场，"]
var question2A=["是一片怎样的光景？","是一片多大的乐园？","会停留在列车的哪个站台?"]
var answer1A=["一个人的浩瀚星空>>","秘友间的小小花园>> ","追梦者的奋进都市>>"]
var answer2A=["两个人的温柔宇宙>>","交际花的玫瑰花海>> ","造梦者的轻活家园>>"]


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

 
	
}

function hideQ(){
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
function showAnswer(){
	resultA[Qnum]=nowAnswer
	NextQuestion()
}

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
	for (var i = 2; i <= 7; i++) {
		q2picA[i-1]=new Sprite(getTe(_CDN+"img/q2pic"+i+".png"))
		aniQ2C.addChild(q2picA[i-1])
		q2picA[i-1].pivot.set(320,190)
		q2picA[i-1].position.set(320,stageH/2+306)
	};

	q2pic1=new Sprite(getTe(_CDN+"img/q2pic1.png"))
	aniQ2C.addChild(q2pic1)
	q2pic1.pivot.set(320,190)
	q2pic1.position.set(320,stageH/2+306)

}
function aniQ3(){
	
}