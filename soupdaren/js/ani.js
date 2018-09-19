function setLoading(){
	var loadingStyle={
    fontSize: 28,
    fill: '#ffffff'
 	}
	loadingT=showT(loadingText,loadingStyle,55,"left",2,.2,100)
	pStage.addChild(loadingT)
	setCenter([loadingT])
	hideT(loadingT,4)
	//setTimeout(setHint,4000)
	setTimeout(setNamePage,4000)
}
///////////////////////////////////////////////////////////////////////////////////////////========提示打开音乐页
var nameBG,nameBtn
var namePage=new PIXI.Container()
function setNamePage(){
	nameBG=new Sprite(getTe(_CDN+"img/namebg.png"))
	nameBtn=new Sprite(getTe(_CDN+"img/namebtn.png"))
	pStage.addChild(namePage)
	namePage.addChild(nameBG,nameBtn)
	setCenter([nameBG])
	nameBtn.pivot.set(81.5,23)
	nameBtn.position.set(320,stageH/2+212)
	nameBtn.interactive=true
	nameBtn.tap=checkName
	showNamePage()
}
var userNickName
function checkName(){
	console.log(document.getElementById("UserTextarea1").value)
	if(document.getElementById("UserTextarea1").value==""){
		alert("请输入你的昵称")
	}else{
		playBgm()
		goPage0()
		TweenMax.set(userNickNameDiv,{display:"none"})
		userNickName=document.getElementById("UserTextarea1").value
		document.getElementById("UserTextarea1").blur()
	}
}
var alphaBtn
var userNickNameDiv
function showNamePage(){
	bgMove.play()
	fps.alpha=1
	fps.x=160
	alphaBtn.width=640
	alphaBtn.height=stageH/4
	alphaBtn.position.set(0,3/4*stageH)
	alphaBtn.alpha=0
	userNickNameDiv=document.getElementById("userNickName")
	TweenMax.from(namePage,1,{alpha:0,y:"+=100",delay:1,onComplete:function(){
		TweenMax.set(userNickNameDiv,{display:"block"})
	}})
	

	
	//alphaBtn.interactive=true
	//alphaBtn.touchstart=goPage0
}

///////////////////////////////////////////////////////////////////////////////////////////========提示打开音乐页
// var hintT1,hintT2,hintArrow,player,playerDic,playerNeedle,flyer
// var hint=new PIXI.Container()
// var playerC=new PIXI.Container()

// function setHint(){
// 	hintT1=new Sprite(getTe(_CDN+"img/hint-t1.png"))
// 	hintT2=new Sprite(getTe(_CDN+"img/hint-t2.png"))
// 	hintArrow=new Sprite(getTe(_CDN+"img/hint-arrow.png"))
// 	player=new Sprite(getTe(_CDN+"img/player.png"))
// 	playerNeedle=new Sprite(getTe(_CDN+"img/player-needle.png"))
// 	playerDic=new Sprite(getTe(_CDN+"img/player-dic.png"))
// 	flyer=new Sprite(getTe(_CDN+"img/flyer.png"))

// 	pStage.addChild(hint)
// 	hint.addChild(hintT1,hintT2,hintArrow,playerC,flyer)
// 	playerC.addChild(player,playerDic,playerNeedle)
// 	setCenter(hintT1,hintT2,hintArrow)

// 	alphaBtn=new Sprite(getTe(_CDN+"img/alpha.png"))
// 	pStage.addChild(alphaBtn)
// 	goHint()
// }

// function goHint(){
// 	hint.x=0
// 	player.position.set(230,stageH/2-185)
// 	playerNeedle.pivot.set(132,177)
// 	playerNeedle.position.set(230+132,stageH/2-185+177)
// 	playerDic.pivot.set(89,87)
// 	playerDic.position.set(230+89,stageH/2-185+87)
// 	TweenMax.to(playerDic,.5,{rotation:Math.PI*2,repeat:10000,ease:Linear.easeNone})
// 	flyer.pivot.set(32.5,48.5)
// 	flyer.position.set(320,stageH/2+175)
// 	TweenMax.set(playerNeedle,{rotation:-30*Math.PI/180})

// 	TweenMax.to(fps,2,{alpha:1})
// 	fps.x=160
// 	bgMove.play()

// 	showGroup([hintT1,playerC,hintT2,hintArrow,flyer])
// 	player.interactive=true
// 	player.touchstart=playBgm
// 	playerDic.visible=false

// 	alphaBtn.width=640
// 	alphaBtn.height=stageH/4
// 	alphaBtn.position.set(0,3/4*stageH)
// 	alphaBtn.alpha=0
// 	alphaBtn.interactive=true
// 	alphaBtn.touchstart=goPage0
// }

function playBgm(){
	console.log("playBGM")
	//TweenMax.to(playerNeedle,1,{rotation:-0*Math.PI/180})
	//setTimeout(function(){playerDic.visible=true},800)
	document.getElementById("bgm").play()

}


///////////////////////////////////////////////////////////////////////////////////////////========首页
var lampC=new PIXI.Container()
var page0=new PIXI.Container()
var lamp,lampLight,p0pic1,p0pic2
function setPage0(){
	alphaBtn=new Sprite(getTe(_CDN+"img/alpha.png"))
	pStage.addChild(alphaBtn)


	lamp=new Sprite(getTe(_CDN+"img/lamp.png"))
	lampLight=new Sprite(getTe(_CDN+"img/lamp-light.png"))
	lampLight.blendMode=_ADD
	lampLight.alpha=0
	pStage.addChild(page0)
	lampC.addChild(lamp,lampLight)
	lampC.pivot.set(167.5,500)
	lampC.y=stageH/2
	lampC.x=320

	p0pic1=new Sprite(getTe(_CDN+"img/p0pic1.png"))
	p0pic2=new Sprite(getTe(_CDN+"img/p0pic2.png"))
	page0.addChild(p0pic1,p0pic2,lampC)
	page0.visible=false
	p0pic1.pivot.y=p0pic2.pivot.y=500
	p0pic1.y=p0pic2.y=stageH/2
}


function goPage0(){
	TweenMax.to(fps,2,{alpha:1})
	fps.x=160
	bgMove.play()
	alphaBtn.interactive=true
	alphaBtn.touchstart=hidePage0
	//TweenMax.to(hint,2*speed,{x:-640,ease:Linear.easeNone})//namePage
	TweenMax.to(namePage,2*speed,{x:-640,ease:Linear.easeNone})//namePage
	page0.visible=true
	page0.x=640
	TweenMax.from(lampC,2*speed,{x:"+=200",ease:Linear.easeNone})
	TweenMax.from(p0pic2,2*speed,{x:"+=50",ease:Linear.easeNone})
	TweenMax.to(page0,2*speed,{x:0,ease:Linear.easeNone,onComplete:function(){
		bgMove.pause()
		lampLight.alpha=0.8
		TweenMax.to(lampLight,.5,{alpha:1,repeat:1000,yoyo:true})
		fpPause()
		TweenMax.to(fps,.6,{alpha:0,repeat:10000,yoyo:true})
		alphaBtn.interactive=true
	}})
}
///////////////////////////////////////////////////////////////////////////////////////////========p1
var pic1,pic2,pic3,pic4,pic5,pic6
var pic1c=new PIXI.Container()
var pic2c=new PIXI.Container()
var pic3c=new PIXI.Container()
var pic4c=new PIXI.Container()
var pic5c=new PIXI.Container()
var pic6c=new PIXI.Container()

var picA,picCA
var pic12345=new PIXI.Container()
function setPage12345(){
	pic1=new Sprite(getTe(_CDN+"img/pic1.jpg"))
	pic2=new Sprite(getTe(_CDN+"img/pic2.jpg"))
	pic3=new Sprite(getTe(_CDN+"img/pic3.jpg"))
	pic4=new Sprite(getTe(_CDN+"img/pic4.jpg"))
	pic5=new Sprite(getTe(_CDN+"img/pic5.jpg"))
	pic6=new Sprite(getTe(_CDN+"img/pic6.jpg"))
	picCA=[pic1c,pic2c,pic3c,pic4c,pic5c,pic6c]
	pic1c.addChild(pic1)
	pic2c.addChild(pic2)
	pic3c.addChild(pic3)
	pic4c.addChild(pic4)
	pic5c.addChild(pic5)
	pic6c.addChild(pic6)

	pic12345.addChild(pic1c,pic2c,pic3c,pic4c,pic5c,pic6c)

	pic1.pivot.x=234.5
	pic2.pivot.x=173
	pic3.pivot.x=175.5
	pic4.pivot.x=190
	pic5.pivot.x=237.5
	pic6.pivot.x=221.5
	pic1.x=pic2.x=pic3.x=pic4.x=pic5.x=pic6.x=320
	pic1.y=stageH/2-255
	pic2.y=stageH/2-374
	pic3.y=stageH/2-276
	pic4.y=stageH/2-369
	pic5.y=stageH/2-309
	pic6.y=stageH/2-335
	pStage.addChild(pic12345)



	for (var i = 0; i <picCA.length; i++) {
		picCA[i].visible=false
		var flyer=new Sprite(getTe(_CDN+"img/flyer.png"))
		picCA[i].addChild(flyer)
		flyer.pivot.set(32.5,48.5)
		if(i==0||i==2){
			flyer.position.set(320,stageH/2+97)
		}else{
			flyer.position.set(320,stageH/2+115)
		}
		TweenMax.to(flyer,1,{alpha:.5,repeat:10000,yoyo:true})

		picCA[i].interactive=true
		picCA[i].touchstart=showLayer
	};

}
///////////////////////////////////////////////////////////////////////////////////////////========浮层
var layerBG,layerBtn,layerTitle,layert1a,layert1b,layert2a,layert2b,layert3a,layert3b,layert4a,layert4b,layert5a,layert5b,layert6a,layert6b
var layerC=new PIXI.Container()
var layeraA=[],layerbA=[]

function setLayer(){
	pStage.addChild(layerC)
	layerBG=new Sprite(getTe(_CDN+"img/layerbg.jpg"))
	layerTitle=new Sprite(getTe(_CDN+"img/layertitle.png"))
	layerBtn=new Sprite(getTe(_CDN+"img/layerbtn.jpg"))

	layerC.addChild(layerBG,layerTitle,layerBtn)
	
	layerBtn.pivot.set(81.5,23)
	layerBtn.position.set(256,382+261)
	layerBtn.interactive=true
	layerBtn.tap=closeLayer
	
	layerC.pivot.set(246,382)
	layerC.position.set(320,stageH/2)

	for (var i = 0; i < 6 ; i++) {
		var j=i+1
		var _a=new Sprite(getTe(_CDN+"img/layert"+j+"a.png"))
		var _b=new Sprite(getTe(_CDN+"img/layert"+j+"b.png"))
		layeraA.push(_a)
		layerbA.push(_b)
		layerC.addChild(_a,_b)
	};
	layerC.visible=false
}
var nowPage=0
var time1A=[0,0,0,0,0,0]
var nowLayer=0
function showLayer(_e){
	nowPage++
	_e.target.interactive=false
	pStage.addChild(layerC)
	layerC.visible=true
	for (var i = 0; i < 6; i++) {
		if(_e.target==picCA[i]){
			console.log("点了",i,"出浮层，开始计时")
			var _date=new Date()
			var _time=_date.getTime()
			time1A[i]=_time
			
			nowLayer=i

			layeraA[i].visible=true
			layerbA[i].visible=true
			TweenMax.from(layerTitle,1,{y:"+=50",alpha:0,ease:Back.easeOut,delay:.1*0})
			TweenMax.from(layeraA[i],1,{y:"+=50",alpha:0,ease:Back.easeOut,delay:.1*1})
			TweenMax.from(layerbA[i],1,{y:"+=50",alpha:0,ease:Back.easeOut,delay:.1*2})
			TweenMax.from(layerBtn,1,{y:"+=50",alpha:0,ease:Back.easeOut,delay:.1*3})

		}else{
			layeraA[i].visible=false
			layerbA[i].visible=false
		}
	};


}

function closeLayer(){
	layerC.visible=false
	console.log("关闭浮层")
	var _date=new Date()
	var _time=_date.getTime()
	time1A[nowLayer]-=_time

	

	if(nowPage==1){
		hidePage1()
		goPage2()
	}
	if(nowPage==2){
		hidePage2()
		goPage3()
	}
	if(nowPage==3){
		hidePage3()
		goPage4()
	}
	if(nowPage==4){
		hidePage4()
		goPage5()
	}
	if(nowPage==5){
		hidePage5()
		goPage6()
	}
	if(nowPage==6){
		hidePage6()
		goResult()
	}
}

function addNewLamp(){
	var lampC=new PIXI.Container()
	var lamp=new Sprite(getTe(_CDN+"img/lamp.png"))
	var lampLight=new Sprite(getTe(_CDN+"img/lamp-light.png"))
	lampLight.blendMode=_ADD
	lampLight.alpha=0
	lampC.addChild(lamp,lampLight)
	lampC.pivot.set(167.5,500)
	lampC.y=stageH/2
	lampC.x=320
	return(lampC)
}


//======================================================第一页
var if13=0
var lampsA=[]
function goPage1(){
	alphaBtn.interactive=false
	if(Math.random()>.5){
		if13=0
	}else{
		if13=2
	}
	for (var i = 0; i <picCA.length; i++) {
		picCA[i].visible=false
	};
	picCA[if13].visible=true
	picCA[if13].x=640
	var aLamp=addNewLamp()
	lampsA.push(aLamp)
	pStage.addChild(aLamp)
	aLamp.x=320+640+200
	TweenMax.to(aLamp,4*speed,{x:320,ease:Linear.easeNone})
	TweenMax.to(picCA[if13],4*speed,{x:0,ease:Linear.easeNone,onComplete:function(){
		bgMove.pause()
		aLamp.getChildAt(1).alpha=.8

		TweenMax.to(aLamp.getChildAt(1),.5,{alpha:1,repeat:1000,yoyo:true})
		fpPause()
		TweenMax.set(fps,{alpha:1})
		TweenMax.to(fps,.6,{alpha:0,repeat:10000,yoyo:true})
	}})
}

function hidePage0(){
	bgMove.play()
	TweenMax.to(page0,4*speed,{x:-640,ease:Linear.easeNone})
	TweenMax.to(lampC,4*speed,{x:"-=200",ease:Linear.easeNone})
	TweenMax.to(p0pic2,4*speed,{x:"-=50",ease:Linear.easeNone})
	fpPlay()
	TweenMax.set(fps,{alpha:1})
	goPage1()
}

//======================================================第二页
var turn1,turn2,turn3,trun4
var if245=1
function setPage2(){
	turn1=new Sprite(getTe(_CDN+"img/turn1.png"))
	turn2=new Sprite(getTe(_CDN+"img/turn2.png"))
	turn3=new Sprite(getTe(_CDN+"img/turn3.png"))
	turn4=new Sprite(getTe(_CDN+"img/turn4.png"))
	pStage.addChild(turn1,turn2,turn3,turn4)
	setCenter([turn1,turn2,turn3,turn4])
	turn1.pivot.x=turn3.pivot.x=0
	turn2.pivot.x=207

	turn2.scale.x=0

	turn1.x=640
	turn2.x=640
	turn3.x=640
	turn4.x=960
}

function goPage2(){
	var rA=[1,3,4]
	if245=rA[parseInt(Math.random()*3)]
	picCA[if245].visible=true
	picCA[if245].x=640+207
	TweenMax.to(picCA[if245],4*speed,{x:0,ease:Linear.easeNone})
}
function hidePage1(){
	TweenMax.to(picCA[if13],4*speed,{x:-640,ease:Linear.easeNone})
	TweenMax.to(lampsA[lampsA.length-1],4*speed,{x:-320-200,ease:Linear.easeNone})
	bgMove.play()
	fpPlay()
	TweenMax.set(fps,{alpha:1})
	TweenMax.to(turn1,4*speed,{x:0,ease:Linear.easeNone})
	TweenMax.to(turn1.scale,4*speed,{x:0,ease:Linear.easeNone})
	bgNear.x=640+207
	TweenMax.to(bgNear,4*speed,{x:0,ease:Linear.easeNone})

	var aLamp=addNewLamp()
	lampsA.push(aLamp)
	pStage.addChild(aLamp)
	aLamp.x=320+640+200
	aLamp.scale.x=aLamp.scale.y=1.2
	TweenMax.to(aLamp,4*speed,{x:320,ease:Linear.easeNone})

	TweenMax.to(fps,4*speed,{y:"+=50",ease:Linear.easeNone,onComplete:function(){
		bgMove.pause()
		aLamp.getChildAt(1).alpha=.8

		TweenMax.to(aLamp.getChildAt(1),.5,{alpha:1,repeat:1000,yoyo:true})
		fpPause()
		TweenMax.set(fps,{alpha:1})
		TweenMax.to(fps,.6,{alpha:0,repeat:10000,yoyo:true})
	}})
}

//======================================================第三页
function goPage3(){
	if(if13==0){
		if13=2
	}else{
		if13=0
	}
	picCA[if13].visible=true
	picCA[if13].x=640
	TweenMax.to(picCA[if13],4*speed,{x:0,ease:Linear.easeNone})

}
function hidePage2(){
	TweenMax.to(picCA[if245],4*speed,{x:-640-208,ease:Linear.easeNone})
	TweenMax.to(lampsA[lampsA.length-1],4*speed,{x:-320-200-208,ease:Linear.easeNone})
	bgMove.play()
	fpPlay()
	TweenMax.set(fps,{alpha:1})
	
	
	TweenMax.to(turn2,4*speed,{x:0,ease:Linear.easeNone})
	TweenMax.to(turn2.scale,4*speed,{x:1,ease:Linear.easeNone})

	TweenMax.to(bgNear,4*speed,{x:-640-208,ease:Linear.easeNone})

	var aLamp=addNewLamp()
	lampsA.push(aLamp)
	pStage.addChild(aLamp)
	aLamp.x=320+640+200
	aLamp.scale.x=aLamp.scale.y=1.2
	TweenMax.to(aLamp,4*speed,{x:320,ease:Linear.easeNone})

	TweenMax.to(fps,4*speed,{y:"-=50",ease:Linear.easeNone,onComplete:function(){
		bgMove.pause()
		aLamp.getChildAt(1).alpha=.8

		TweenMax.to(aLamp.getChildAt(1),.5,{alpha:1,repeat:1000,yoyo:true})
		fpPause()
		TweenMax.set(fps,{alpha:1})
		TweenMax.to(fps,.6,{alpha:0,repeat:10000,yoyo:true})
	}})
}

//======================================================第四页
function goPage4(){
	var rA=[1,3,4]
	if(if245==1){
		if245=3
	}else if(if245==3){
		if245=4
	}else{
		if245=1
	}


	picCA[if245].visible=true
	picCA[if245].x=640+208
	TweenMax.to(picCA[if245],4*speed,{x:0,ease:Linear.easeNone})

}
function hidePage3(){
	TweenMax.to(picCA[if13],4*speed,{x:-640,ease:Linear.easeNone})
	TweenMax.to(lampsA[lampsA.length-1],4*speed,{x:-320-200,ease:Linear.easeNone})
	bgMove.play()
	fpPlay()
	TweenMax.set(fps,{alpha:1})
	
	
	TweenMax.to(turn3,4*speed,{x:0,ease:Linear.easeNone})
	TweenMax.to(turn3.scale,4*speed,{x:0,ease:Linear.easeNone})

	bgNear.x=640
	TweenMax.to(bgNear,4*speed,{x:0,ease:Linear.easeNone})

	var aLamp=addNewLamp()
	lampsA.push(aLamp)
	pStage.addChild(aLamp)
	aLamp.x=320+640+200
	aLamp.scale.x=aLamp.scale.y=1.2
	TweenMax.to(aLamp,4*speed,{x:320,ease:Linear.easeNone})

	TweenMax.to(fps,4*speed,{y:"+=50",ease:Linear.easeNone,onComplete:function(){
		bgMove.pause()
		aLamp.getChildAt(1).alpha=.8

		TweenMax.to(aLamp.getChildAt(1),.5,{alpha:1,repeat:1000,yoyo:true})
		fpPause()
		TweenMax.set(fps,{alpha:1})
		TweenMax.to(fps,.6,{alpha:0,repeat:10000,yoyo:true})
	}})
}

//======================================================第五页
var if245temp
function goPage5(){
	var rA=[1,3,4]
	if(if245==1){
		if245=3
	}else if(if245==3){
		if245=4
	}else{
		if245=1
	}
	if245temp=if245
	if(Math.random()>.5){
		if245=5
	}else{
		if245temp=5
	}

	picCA[if245].visible=true
	picCA[if245].x=640+640
	TweenMax.to(picCA[if245],4*speed,{x:0,ease:Linear.easeNone})

}
function hidePage4(){
	TweenMax.to(picCA[if245],4*speed,{x:-640-320-320,ease:Linear.easeNone})
	TweenMax.to(lampsA[lampsA.length-1],4*speed,{x:-320-200-320-320,ease:Linear.easeNone})
	// bgMove.play()
	fpPlay()
	TweenMax.set(fps,{alpha:1})
	var aLamp=addNewLamp()
	lampsA.push(aLamp)
	pStage.addChild(aLamp)
	aLamp.x=320+640+200+640
	aLamp.scale.x=aLamp.scale.y=1.2
	TweenMax.to(aLamp,4*speed,{x:320,ease:Linear.easeNone})
	
	TweenMax.to(turn4,5*speed,{x:-553,ease:Linear.easeNone,onComplete:function(){
		bgMove.pause()
		aLamp.getChildAt(1).alpha=.8

		TweenMax.to(aLamp.getChildAt(1),.5,{alpha:1,repeat:1000,yoyo:true})
		fpPause()
		TweenMax.set(fps,{alpha:1})
		TweenMax.to(fps,.6,{alpha:0,repeat:10000,yoyo:true})
	}})

	bgNear.x=0
	TweenMax.to(bgNear,4*speed,{x:-640-640,ease:Linear.easeNone})
	bgNear2.x=640
	TweenMax.to(bgNear2,4*speed,{x:0-640,ease:Linear.easeNone})
}

//======================================================第六页
function goPage6(){
	var rA=[1,3,4]
	if(if245==1){
		if245=3
	}else if(if245==3){
		if245=4
	}else{
		if245=1
	}
	if245=if245temp

	picCA[if245].visible=true
	picCA[if245].x=640
	TweenMax.to(picCA[if245],2*speed,{x:0,ease:Linear.easeNone})

}
function hidePage5(){
	TweenMax.to(picCA[if245],4*speed,{x:-640-320-320,ease:Linear.easeNone})
	TweenMax.to(lampsA[lampsA.length-1],4*speed,{x:-320-200-320-320,ease:Linear.easeNone})
	// bgMove.play()
	fpPlay()
	TweenMax.set(fps,{alpha:1})
	var aLamp=addNewLamp()
	lampsA.push(aLamp)
	pStage.addChild(aLamp)
	aLamp.x=320+640+200
	aLamp.scale.x=aLamp.scale.y=1.2

	
	TweenMax.to(aLamp,2*speed,{x:320,ease:Linear.easeNone,onComplete:function(){
		bgMove.pause()
		aLamp.getChildAt(1).alpha=.8

		TweenMax.to(aLamp.getChildAt(1),.5,{alpha:1,repeat:1000,yoyo:true})
		fpPause()
		TweenMax.set(fps,{alpha:1})
		TweenMax.to(fps,.6,{alpha:0,repeat:10000,yoyo:true})
	}})


	bgNear2.x=0
	TweenMax.to(bgNear2,2*speed,{x:0-640,ease:Linear.easeNone})
}

//======================================================结果页
var userResult
var userResultTime
function goResult(){
	for (var i = 0; i < time1A.length; i++) {
		if(time1A[i]==Math.min.apply(null,time1A)){
				console.log("结果",i)
				userResult=i
				userResultTime=parseInt(-time1A[i]/1000)+1
				console.log(userResultTime,"秒")
		}
	};
	setResult()
	
	TweenMax.from(enddisc,6*speed,{x:"-=150"})
	TweenMax.from(resultPage,2*speed,{x:640,ease:Linear.easeNone})
}
var endLight,endTitle,enddisc,endttt,endtttt
var endpic1,endpic2,endpic3,endpic4,endpic5,endpic6,endt1,endt2,endt3,endt4,endt5,endt6
var endPicA=[],endTA=[]
var resultPage=new PIXI.Container()
var endPic=new PIXI.Container()
var endT=new PIXI.Container()
var endT1=new PIXI.Text("特立独行的你",{
	fill:'#4d6800',
	fontSize: 28,
	align: 'left',
})
var endT2=new PIXI.Text("驻足长达1秒时",{
	fill:'#4d6800',
	fontSize: 36,
	align: 'left',
})

var btnWX,btnWYY,btnList,qr

function setResult(){
	endLight=new Sprite(getTe(_CDN+"img/endlight.png"))
	endTitle=new Sprite(getTe(_CDN+"img/endtitle.png"))
	enddisc=new Sprite(getTe(_CDN+"img/enddisc.png"))

	endttt=new Sprite(getTe(_CDN+"img/endttt.png"))
	endtttt=new Sprite(getTe(_CDN+"img/endtttt.png"))

	btnWX=new Sprite(getTe(_CDN+"img/btn-wx.png"))
	btnWYY=new Sprite(getTe(_CDN+"img/btn-wyy.png"))
	btnList=new Sprite(getTe(_CDN+"img/btn-list.png"))
	qr=new Sprite(getTe(_CDN+"img/qr.png"))

	endpic1=new Sprite(getTe(_CDN+"img/endpic1.png"))
	endpic2=new Sprite(getTe(_CDN+"img/endpic2.png"))
	endpic3=new Sprite(getTe(_CDN+"img/endpic3.png"))
	endpic4=new Sprite(getTe(_CDN+"img/endpic4.png"))
	endpic5=new Sprite(getTe(_CDN+"img/endpic5.png"))
	endpic6=new Sprite(getTe(_CDN+"img/endpic6.png"))

	endt1=new Sprite(getTe(_CDN+"img/endt1.png"))
	endt2=new Sprite(getTe(_CDN+"img/endt2.png"))
	endt3=new Sprite(getTe(_CDN+"img/endt3.png"))
	endt4=new Sprite(getTe(_CDN+"img/endt4.png"))
	endt5=new Sprite(getTe(_CDN+"img/endt5.png"))
	endt6=new Sprite(getTe(_CDN+"img/endt6.png"))
	endPicA=[endpic1,endpic2,endpic3,endpic4,endpic5,endpic6]
	endTA=[endt1,endt2,endt3,endt4,endt5,endt6]

	resultPage.addChild(endLight,endTitle,enddisc,endPic,endT,endT1,endT2,endttt,endtttt,btnWX,btnWYY,btnList,qr)

	endPic.addChild(endpic1,endpic2,endpic3,endpic4,endpic5,endpic6)
	endT.addChild(endt1,endt2,endt3,endt4,endt5,endt6)
	setCenter([endTitle,enddisc,endPic,endT,endtttt,endttt,qr])
	endLight.width=640
	endLight.height=stageH

	pStage.addChild(resultPage)
	for (var i = 0; i < 6; i++) {
		if(userResult==i){
			endPicA[i].visible=true
			endTA[i].visible=true
		}else{
			endPicA[i].visible=false
			endTA[i].visible=false
		}
	};
	endT1.x=268
	endT2.x=460
	endT1.y=stageH/2+2
	endT2.y=stageH/2+49
	endT1.text=userNickName
	endT2.text=userResultTime
	endtttt.x+=endT2.width+3

	btnWX.position.set(123,stageH/2+419)
	btnWYY.position.set(123,stageH/2+419)
	btnList.position.set(355,stageH/2+419)

	btnWX.interactive=btnWYY.interactive=btnList.interactive=true
	btnWX.tap=goWX
	btnWYY.tap=goWYY
	btnList.tap=goList
	qr.visible=false
	if(main.wy==true){
		btnWX.visible=false
		btnWX.interactive=false
	}else{
		btnWYY.visible=false
		btnWYY.interactive=false
	}
}
function goWX(){
	qr.visible=true
	btnWX.visible=false
	btnWYY.visible=false
	btnList.visible=false
	main.share()
}
function goWYY(){
	qr.visible=true
	btnWX.visible=false
	btnWYY.visible=false
	btnList.visible=false
	main.share()
	setTimeout(main.getLottery,5000)
}
function shareDone(){
	if(main.wy==true){
		btnWYY.visible=true
		btnList.visible=true
	}else{
		btnWX.visible=true
		btnList.visible=true
	}
	qr.visible=false
}
function goList(){
	main.openMusic()
}

function hidePage6(){
	fpPlay()
	TweenMax.set(fps,{alpha:1})

	TweenMax.to(picCA[if245],2*speed,{x:-320-320,ease:Linear.easeNone})
	TweenMax.to(lampsA[lampsA.length-1],2*speed,{x:-320-200,ease:Linear.easeNone,onComplete:function(){
		bgMove.pause()
		fpPause()
		TweenMax.set(fps,{alpha:0})
		
	}})
	
	bgNear2.x=0
	TweenMax.to(bgNear2,2*speed,{x:0-640,ease:Linear.easeNone})
}