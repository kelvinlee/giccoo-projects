var please
var btnNext
var btnNextMusic
function setMusicPage(){
	setDisc()
	setSelector()
	showSelector()
	please=new Sprite(getTe(_CDN+"img/please.png"))
	
	please.y=stageH/2+5
	//_CDN+"img/btn_nextmusic.png",
	btnNext=new Sprite(getTe(_CDN+"img/btn_next.png"))
	btnNextMusic=new Sprite(getTe(_CDN+"img/btn_nextmusic.png"))

	btnNext.y=btnNextMusic.y=stageH/2+384*stageH/1138

	pStage.addChild(please,btnNext,btnNextMusic)
	btnNext.interactive=true
	btnNextMusic.interactive=true
	btnNext.touchstart=goNext
	btnNextMusic.touchstart=goNext
}
//=======================黑胶碟
var disc1,disc2,disc3,disc4,discC,rotatDisc
var btnPause,btnPlay
function setDisc(){
	disc1fadeOut=new Sprite(getTe(_CDN+"img/disc1.png"))
	disc1=new Sprite(getTe(_CDN+"img/disc1.png"))
	disc2=new Sprite(getTe(_CDN+"img/disc2.png"))
	disc2b=new Sprite(getTe(_CDN+"img/disc2.png"))
	disc3=new Sprite(getTe(_CDN+"img/disc3.png"))
	disc4=new Sprite(getTe(_CDN+"img/disc4.png"))
	btnPause=new Sprite(getTe(_CDN+"img/pause.png"))
	btnPlay=new Sprite(getTe(_CDN+"img/play.png"))

	btnPlay.interactive=true
	btnPause.interactive=true
	btnPlay.touchstart=startPlay
	btnPause.touchstart=stopPlay

	discC=new Container()
	rotatDisc=new Container()
	pStage.addChild(discC)
	rotatDisc.addChild(disc1,disc2,disc2b,disc3)
	discC.addChild(rotatDisc,disc1fadeOut,disc4,btnPause,btnPlay)
	btnPlay.pivot.x=btnPause.pivot.x=disc1fadeOut.pivot.x=disc1.pivot.x=disc2.pivot.x=disc2b.pivot.x=disc3.pivot.x=200.5
	btnPlay.pivot.y=btnPause.pivot.y=disc1fadeOut.pivot.y=disc1.pivot.y=disc2.pivot.y=disc2b.pivot.y=disc3.pivot.y=200.5
	btnPlay.x=btnPause.x=disc1fadeOut.x=disc1.x=disc2.x=disc2b.x=disc3.x=320
	btnPlay.y=btnPause.y=disc1fadeOut.y=disc1.y=disc2.y=disc2b.y=disc3.y=stageH/2-260*stageH/1138

	disc4.pivot.set(41,19)
	disc4.position.set(112,stageH/2-408*stageH/1138)
	disc1fadeOut.alpha=0
	// discPlay()

}
function startPlay(){
	console.log("播放！！！！！")
	playAudio("answer-"+(nowMusic+1))
}
function stopPlay(){
	console.log("不播放！！！！！")
	stopAllAudio()
}
function discPlay(){
	TweenMax.to(disc4,.5,{rotation:0})
	TweenMax.set(disc3,{rotation:0})
	TweenMax.to(disc3,3.5,{rotation:Math.PI*2,repeat:1000,ease:Linear.easeNone})
	disc2.alpha=.2
	TweenMax.set(disc2,{alpha:.2,rotation:0})
	TweenMax.to(disc2,3.5,{alpha:.2,rotation:Math.PI*2,repeat:1000,ease:Linear.easeNone})
	TweenMax.to(disc2b.scale,1,{x:.9,y:.9,repeat:1000,yoyo:true,ease:Linear.easeNone})
	btnPause.visible=true
	btnPlay.visible=false
}

function discStop(){
	TweenMax.to(disc4,.5,{rotation:-Math.PI*2/8})
	TweenMax.to(disc3,3.5,{rotation:0})
	disc2.alpha=.2
	TweenMax.to(disc2,1,{alpha:0})
	TweenMax.to(disc2b.scale,1,{x:.9,y:.9})
	btnPause.visible=false
	btnPlay.visible=true
}

//===================选项
var selectorA=[[],[],[],[]]
var selectorC
var selectorY=[0,66,132,198]
var selectorPivotY=[14.5,22.5,21,24.5]
var btnBG
function setSelector(){
	var i,j
	selectorC=new Container()
	btnBG=new Sprite(getTe(_CDN+"img/btnbg.png"))
	btnBG.pivot.set(320,34)
	btnBG.position.set(320,0)
	btnBG.visible=false
	pStage.addChild(selectorC)
	selectorC.addChild(btnBG)
	for (i = 1; i <=4 ; i++) {
		for (j = 1; j <= 4; j++) {
			var _btn=new Sprite(getTe(_CDN+"img/a"+i+j+".png"))
			selectorA[i-1][j-1]=_btn
			selectorC.addChild(_btn)
			_btn.position.set(320,stageH/2+(120+selectorY[j-1])*stageH/1138)
			_btn.pivot.set(320,selectorPivotY[j-1])
			_btn.visible=false
			_btn.interactive=true
			_btn.tap=selectOne
		};
	};
}
var nowMusic=0
var nowSelected=999
var userAnswer=[0,0,0,0]
function showSelector(){
	for (var i = 0; i < 4; i++) {
		selectorA[nowMusic][i].visible=true
		TweenMax.from(selectorA[nowMusic][i],1.5,{y:"+=50",ease:Elastic.easeOut,delay:.05*i,overwrite:0})
		TweenMax.from(selectorA[nowMusic][i],1.5,{alpha:0,delay:.05*i})
	};
}


function selectOne(_e){
	console.log(_e.target)
	var i,j
	for (i = 1; i <=4 ; i++) {
		for (j = 1; j <= 4; j++) {
			if(_e.target==selectorA[i-1][j-1]){
				console.log(j-1)
				nowSelected=j-1
				btnBG.visible=true
				btnBG.y=_e.target.y
				TweenMax.set(btnBG,{rotation:0})
				TweenMax.from(btnBG,1.5,{rotation:Math.PI*2/16,overwrite:0,ease:Elastic.easeOut})
				TweenMax.from(btnBG.scale,1.2,{x:0.5,y:2,ease:Elastic.easeOut})
				TweenMax.to(_e.target.scale,.2,{x:1.2,y:1.2})
				//userAnswer[nowMusic]=j-1
				//userAnswer[j-1]+=1
			}else{
				TweenMax.to(selectorA[i-1][j-1].scale,.2,{x:1,y:1})
			}
		};
	};
}

//=========下一个
function goNext(){
	
	if(nowSelected==999){
		TweenMax.set(please,{x:0})
		TweenMax.from(please,1,{x:"+=50",ease:Elastic.easeOut})
	}else if(nowMusic<3){
		console.log("下首歌")
		if(nowMusic==2){btnNextMusic.visible=false}
		for (var i = 0; i < 4; i++) {
			selectorA[nowMusic][i].visible=false
		};
		userAnswer[nowSelected]++
		nowMusic++
		nowSelected=999
		btnBG.visible=false
		showSelector()
		stopAllAudio()
		playAudio("answer-"+(nowMusic+1))
	}else{
		console.log("去结束页")
		userAnswer[nowSelected]++
		console.log(userAnswer)
		main.endPage()
	}
}

//=========结束
var result
function showResult(){
	btnNext.visible=false
	for (var i = 0; i < 4; i++) {
		if(userAnswer[i]>=userAnswer[0]&&userAnswer[i]>=userAnswer[1]&&userAnswer[i]>=userAnswer[2]&&userAnswer[i]>=userAnswer[3]){
			result=i
			console.log(i)
		}
	};
	if(userAnswer[0]*userAnswer[1]*userAnswer[2]*userAnswer[3]==1){
		result=parseInt(Math.random()*4)
		console.log("1111===",result)
	}

	bgA[result].visible=true
	r11.visible=true
	r2A[result].visible=true
	r3A[result].visible=true
	r4A[result].visible=true
	endbtn1.visible=endbtn2.visible=false
	qr.visible=true
	console.log("保存海报")
	main.sharePost()
	qr.visible=false
	endbtn1.visible=true
	endbtn2.visible=true
	var AAA=[r11,r4,r3,r2,endbtn1,endbtn2]
	for (var j = 0; j < 4; j++) {
		
		TweenMax.from(AAA[j],2.5,{y:"+=150",ease:Elastic.easeOut,delay:.05*j,overwrite:0})
		TweenMax.from(AAA[j],1.5,{alpha:0,delay:.05*j,overwrite:0})
	};
	// TweenMax.from(AAA[3],2.5,{y:"+=150",ease:Elastic.easeOut,delay:.05*j,overwrite:0})
	// TweenMax.from(AAA[3],1.5,{alpha:0,delay:.05*j,overwrite:0})

}