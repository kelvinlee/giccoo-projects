var page1=new PIXI.Container()
var p1bg=new pSprite("img/p1bga.jpg")
var border=new PIXI.Container()
var p1title=new PIXI.Container()

//var p1t=new pSprite("img/p1t.png")
//var p1bar=new PIXI.Graphics()
var p1arrow=new pSprite("img/p1arrow.png")

var p1tt1=new pSprite("img/p1tt1.png")
var p1tt2=new pSprite("img/p1tt2.png")
var p1tt3=new pSprite("img/p1tt3.png")
var p1tt4=new pSprite("img/p1tt4.png")
var p1tt5=new pSprite("img/p1tt5.png")

var p1t1=new pSprite("img/p1t1.png")
var p1t2=new pSprite("img/p1t2.png")
var p1t3=new pSprite("img/p1t3.png")

var p1ttA=[p1tt1,p1tt2,p1tt3,p1tt4,p1tt5]



function setPage1(){
	mainPart.addChild(page1)
	page1.addChild(p1bg,border,p1title,p1t1,p1t2,p1t3,p1tt1,p1tt2,p1tt3,p1tt4,p1tt5)
	p1bg.y=stageH/2-750

	//p1title.addChild(p1bar,p1arrow,p1t)
	p1title.addChild(p1arrow)
	//p1title.addChild(p1arrow,p1t)
	p1title.addChild(p1arrow)
	// p1bar.beginFill(0x264762)
	// p1bar.drawRect(0,0,41,stageH*(1-0.19))
	//p1arrow.y=p1bar.height-22
	p1arrow.y=stageH*(1-0.19)-50
	p1title.position.set(320-20.5,stageH*.19)
	p1arrow.x--
	
	var borderL=new PIXI.Graphics()
  var borderR=new PIXI.Graphics()
  var borderT=new PIXI.Graphics()
  var borderD=new PIXI.Graphics()


  borderL.beginFill(0xffffff)
  borderL.drawRect(0,0,640,10)
  borderR.beginFill(0xffffff)
  borderR.drawRect(630,0,640,stageH)
  borderT.beginFill(0xffffff)
  borderT.drawRect(0,0,10,stageH)
  borderD.beginFill(0xffffff)
  borderD.drawRect(0,stageH-10,640,stageH)
  border.addChild(borderL,borderR,borderT,borderD)
  border.alpha=0

	TweenMax.to(p1arrow,.5,{y:"+=10",repeat:100000,yoyo:true})	

	var tempA=[p1t1,p1t2,p1t3,p1tt1,p1tt2,p1tt3,p1tt4,p1tt5]
	for (var i = 0; i < tempA.length; i++) {
		tempA[i].y=stageH/2-500
		tempA[i].scale.x=.9//=========90%
		tempA[i].x=32//=========90%
	};
	TweenMax.to(p1t1,2+Math.random()*1,{alpha:0,repeat:100000,yoyo:true})
	TweenMax.to(p1t2,2+Math.random()*1,{alpha:0.5,repeat:100000,yoyo:true,delay:1.5})
	TweenMax.to(p1t3,2+Math.random()*1,{alpha:0.5,repeat:100000,yoyo:true,delay:.5})
	TweenMax.to(p1t1,5+Math.random()*1,{y:"+=25",repeat:100000,yoyo:true})
	TweenMax.to(p1t2,5+Math.random()*1,{y:"-=25",repeat:100000,yoyo:true,delay:2.5})
	TweenMax.to(p1t3,5+Math.random()*1,{y:"-=25",repeat:100000,yoyo:true})

	p1ani()

}

function p1ani(){
	TweenMax.from(p1title,2.5,{y:"+=400",alpha:0})	
	//TweenMax.from(p1t,3.5,{y:"+=200"})	

	for (var i = 0; i < p1ttA.length; i++) {
		TweenMax.from(p1ttA[i],4,{x:p1ttA[i].x+Math.random()*150-75,y:p1ttA[i].y+Math.random()*150-75,alpha:0,delay:.2*i+1,ease:Back.easeOut})
	};
}
//===============================================第二页

var page2=new PIXI.Container()
var p2pic1a=new pSprite("img/p1pic1aaaa.png")
var p2pic1b=new pSprite("img/p1pic1bbbb.png")
var p2pic2a=new pSprite("img/p1pic2aaaa.png")
var p2pic2b=new pSprite("img/p1pic2bbbb.png")
var p2pic3a=new pSprite("img/p1pic3aaaa.png")
var p2pic3b=new pSprite("img/p1pic3bbbb.png")
var p2pic4a=new pSprite("img/p1pic4aaaa.png")
var p2pic4b=new pSprite("img/p1pic4bbbb.png")
var p2picA=[[p2pic1a,p2pic1b],[p2pic2a,p2pic2b],[p2pic3a,p2pic3b],[p2pic4a,p2pic4b]]
var p2picC=new PIXI.Container()

var p21c=new PIXI.Container()
var p22c=new PIXI.Container()
var p23c=new PIXI.Container()
var p24c=new PIXI.Container()
var p2A=[p21c,p22c,p23c,p24c]

var p2t1=new pSprite("img/p2t11.png")
var p2t2=new pSprite("img/p2t22.png")
var p2t3=new pSprite("img/p2t33.png")
var p2t4=new pSprite("img/p2t44.png")
var p2tA=[p2t1,p2t2,p2t3,p2t4]
var p2tC=new PIXI.Container()

var dot1a=new pSprite("img/dot1a.png")
var dot1b=new pSprite("img/dot1b.png")
var dot2a=new pSprite("img/dot2a.png")
var dot2b=new pSprite("img/dot2b.png")
var dot3a=new pSprite("img/dot3a.png")
var dot3b=new pSprite("img/dot3b.png")
var dot4a=new pSprite("img/dot4a.png")
var dot4b=new pSprite("img/dot4b.png")
var dotsA=[[dot1a,dot1b],[dot2a,dot2b],[dot3a,dot3b],[dot4a,dot4b]]
var dot1=new PIXI.Container()
var dot2=new PIXI.Container()
var dot3=new PIXI.Container()
var dot4=new PIXI.Container()
var dotA=[dot1,dot2,dot3,dot4]

var ring1=new pSprite("img/ring.png")
var ring2=new pSprite("img/ring.png")
var ring3=new pSprite("img/ring.png")
var ring4=new pSprite("img/ring.png")
var ringA=[ring1,ring2,ring3,ring4]

var p2arrow=new pSprite("img/p1arrow.png")

var nowDot=0
var nowPic=0

// function setPage2(){
// 	page2.y=stageH
// 	//borderAll.visible=true
// 	mainPart.addChild(page2)
// 	page2.addChild(p2picC,p2tC)
// 	p2picC.addChild(p21c,p22c,p23c,p24c)
// 	// p22c.visible=false
// 	// p23c.visible=false
// 	// p24c.visible=false
// 	for (var i = 0; i < 4; i++) {
// 		p2A[i].addChild(p2picA[i][1],p2picA[i][0])//====图
// 		p2picA[i][0].alpha=0
// 		p2picA[i][1].alpha=0
// 		p2picA[i][0].height=stageH
// 		p2picA[i][0].width=stageH/1000*1500
// 		p2picA[i][1].height=stageH
// 		p2picA[i][1].width=stageH/1000*1500

// 		//=== 字
// 		p2tC.addChild(p2tA[i])
// 		p2tA[i].y=stageH-548
// 		if(i!=0){p2tA[i].alpha=0}

// 		//===点
// 		page2.addChild(dotA[i])
// 		dotA[i].addChild(dotsA[i][0],dotsA[i][1],ringA[i])
// 		dotA[i].pivot.set(36,36)
// 		dotA[i].position.set(198+i*(640-198-198)/3,stageH-100)

// 		TweenMax.to(dotsA[i][1],1,{alpha:0,repeat:10000,yoyo:true,delay:.5*i,repeatDelay:1})

// 		if(i!=0){ringA[i].alpha=.5}

// 		dotA[i].interactive=true
// 		dotA[i].tap=changeP2bg
// 	};
// 	page2.addChild(p2arrow)
// 	p2arrow.position.set(320-21,stageH-50)

// 	TweenMax.to(p2arrow,.5,{y:"+=10",repeat:100000,yoyo:true})	

// 	//setP2Loop()
// }

// function changeP2bg(_e){
// 	for (var i = 0; i <4 ; i++) {
// 		TweenMax.to(ringA[i],.5,{alpha:.5})
// 		TweenMax.to(p2tA[i],1,{alpha:0})
// 		if(_e.target==dotA[i]){
// 			console.log("第"+i+"图")
// 			TweenMax.to(ringA[i],.5,{alpha:1})

// 			//TweenMax.set(p2tA[i],{alpha:0,y:stageH-548+50})
// 			TweenMax.to(p2tA[i],1,{alpha:1})
// 			nowDot=i*2
// 			setP2Loop()
// 		}
// 	};
// }

// function setP2Loop(){
// 	console.log(nowDot)
// 	for (var i = 0; i < 4; i++) {
// 		TweenMax.set(p2picA[i][0],{alpha:0,x:640-stageH*1.5})
// 		TweenMax.set(p2picA[i][1],{alpha:0,x:640-stageH*1.5})
// 	};
// 	TweenMax.set(p2picA[parseInt(nowDot/2)][nowDot%2],{alpha:1,x:640-stageH*1.5})
// 	TweenMax.to(p2picA[parseInt(nowDot/2)][nowDot%2],5,{x:0,ease:Linear.easeNone,onComplete:function(){
// 			nowDot++
// 			if(nowDot==8){nowDot=0}
// 			setDot()
// 			setP2Loop()
// 	}})//
// }

// function setDot(){
// 	for (var i = 0; i <4 ; i++) {
// 		TweenMax.to(ringA[i],.5,{alpha:.5})
// 		TweenMax.to(p2tA[i],1,{alpha:0})
// 		if(parseInt(nowDot/2)==i){
// 			console.log("第"+i+"图")
// 			TweenMax.to(ringA[i],.5,{alpha:1})

// 			//TweenMax.set(p2tA[i],{alpha:0})
// 			TweenMax.to(p2tA[i],1,{alpha:1})
// 		}
// 	};
// }

var picC=new PIXI.Container()

function setPage2(){
	page2.y=stageH

	mainPart.addChild(page2)
	page2.addChild(picC,p2tC)
	//p2picC.addChild(p21c,p22c,p23c,p24c)

	for (var i = 0; i < 4; i++) {
		p2A[i].addChild(p2picA[i][1],p2picA[i][0])//====图
		
		picC.addChild(p2picA[i][1],p2picA[i][0])

		p2picA[i][0].height=stageH
		p2picA[i][0].width=stageH/1000*1500*.8
		p2picA[i][1].height=stageH
		p2picA[i][1].width=stageH/1000*1500*.8
		p2picA[i][0].x=p2picA[i][1].width*i*2
		p2picA[i][1].x=p2picA[i][1].width*(i*2+1)

		//=== 字
		p2tC.addChild(p2tA[i])
		p2tA[i].y=stageH-548
		if(i!=0){p2tA[i].alpha=0}

		//===点
		page2.addChild(dotA[i])
		dotA[i].addChild(dotsA[i][0],dotsA[i][1],ringA[i])
		dotA[i].pivot.set(36,36)
		dotA[i].position.set(198+i*(640-198-198)/3,stageH-100)

		TweenMax.to(dotsA[i][1],1,{alpha:0,repeat:10000,yoyo:true,delay:.5*i,repeatDelay:1})

		if(i!=0){ringA[i].alpha=.5}

		dotA[i].interactive=true
		dotA[i].tap=changeP2bg
	};
	page2.addChild(p2arrow)
	p2arrow.position.set(320-21,stageH-50)

	TweenMax.to(p2arrow,.5,{y:"+=10",repeat:100000,yoyo:true})	

	//setP2Loop()
	
}

var _tempNowDot

function moveBG(){
	picC.x-=5
	if(picC.x<=640-picC.width){
		picC.x=0
	}
	_tempNowDot=nowDot
	nowDot=parseInt(-picC.x/(picC.width/4))
	nowPic=parseInt(-picC.x/(picC.width/8))
	console.log(nowDot)
	if(_tempNowDot!=nowDot){
		setDot()
		console.log("变图")
	}
}

function changeP2bg(_e){
	for (var i = 0; i <4 ; i++) {
		TweenMax.to(ringA[i],.5,{alpha:.5})
		TweenMax.to(p2tA[i],1,{alpha:0})
		if(_e.target==dotA[i]){
			console.log("第"+i+"图")
			TweenMax.to(ringA[i],.5,{alpha:1})

			//TweenMax.set(p2tA[i],{alpha:0,y:stageH-548+50})
			TweenMax.to(p2tA[i],1,{alpha:1})
			//nowDot=i*2
			//setP2Loop()
			picC.x=-picC.width/4*i
		}
	};
}

function setP2Loop(){
	// console.log(nowDot)
	// for (var i = 0; i < 4; i++) {
	// 	TweenMax.set(p2picA[i][0],{alpha:0,x:640-stageH*1.5})
	// 	TweenMax.set(p2picA[i][1],{alpha:0,x:640-stageH*1.5})
	// };
	// TweenMax.set(p2picA[parseInt(nowDot/2)][nowDot%2],{alpha:1,x:640-stageH*1.5})
	// TweenMax.to(p2picA[parseInt(nowDot/2)][nowDot%2],5,{x:0,ease:Linear.easeNone,onComplete:function(){
	// 		nowDot++
	// 		if(nowDot==8){nowDot=0}
	// 		setDot()
	// 		setP2Loop()
	// }})
}

function setDot(){
	for (var i = 0; i <4 ; i++) {
		TweenMax.to(ringA[i],.5,{alpha:.5})
		TweenMax.to(p2tA[i],1,{alpha:0})
		if(parseInt(nowDot)==i){
			console.log("第"+i+"图")
			TweenMax.to(ringA[i],.5,{alpha:1})

			//TweenMax.set(p2tA[i],{alpha:0})
			TweenMax.to(p2tA[i],1,{alpha:1})
		}
	};
}



//===============================================第三页

var page3=new PIXI.Container()
var p3pic1,p3pic2
var p3wbg=new PIXI.Graphics()

function setPage3(){
	p3wbg.beginFill(0xffffff)
	p3wbg.drawRect(0,stageH,stageH/1000*1341,stageH/480*1500-stageH)
	//p3wbg.visible=false
	page3.addChild(p3wbg)
	mainPart.addChild(page3)
	page3.y=stageH
	p3pic1=new pSprite("img/p3pic1.jpg")
	p3pic2=new pSprite("img/p3pic2_.jpg")
	p3t=new pSprite("img/p3t.png")
	page3.addChild(p3pic1,p3pic2,p3t)
	p3pic1.height=p3pic2.height=stageH
	p3pic2.height=stageH///480*1500
	p3pic1.width=p3pic2.width=stageH/1000*1341
	p3pic1.x=p3pic2.x=640-stageH/1000*1341
	p3pic2.alpha=0
	p3t.pivot.y=75
	p3t.y=stageH/4
	page3ani()
}
function page3ani(){

	

	TweenMax.to(p3pic1,5,{x:0})
	TweenMax.to(p3pic2,5,{x:0})//,ease:Linear.easeNone
	TweenMax.to(p3pic2,4,{alpha:1,onComplete:function(){
		p3pic1.visible=false
		setPage4()
		//p3wbg.visible=true
	}})
	TweenMax.to(page3,1,{x:0,width:640,height:640/1.333/480*1500,delay:4})///480*1500
	TweenMax.to(page3,1,{alpha:0,delay:4.5,onComplete:page3end})
	//TweenMax.to(p3wbg,1,{alpha:0,delay:4.5})
	TweenMax.set(p3t,{alpha:0,delay:4})
	//TweenMax.to(p3pic2,2,{x:-stageH/1000*1341/6,alpha:0,delay:5,ease:Sine.easeInOut})
}

var p3pic11a=new pSprite("img/p3pic11.jpg")
var p3pic11b=new pSprite("img/p3pic11.jpg")
var p3pic22a=new pSprite("img/p3pic22.jpg")
var p3pic22b=new pSprite("img/p3pic22.jpg")

var p3aC=new PIXI.Container()
var p3bC=new PIXI.Container()

var p3mask1=new pSprite("img/p3mask1.png")
var p3mask2=new pSprite("img/p3mask2.png")
var p3s1=new pSprite("img/p3s1.png")
var p3s2=new pSprite("img/p3s2.png")
var wbg=new PIXI.Graphics()
var p3tt=new pSprite("img/p3ttt.png")

function setPage33(){
	wbg.beginFill(0xffffff)
	wbg.drawRect(0,0,640,stageH)
	mainPart.addChild(page3)



	page3.addChild(wbg,p3tt,p3aC,p3bC,p3mask1,p3mask2,p3s1,p3s2)
	p3aC.addChild(p3pic11a,p3pic22a)
	p3bC.addChild(p3pic11b,p3pic22b)
	p3s1.y=p3s2.y=p3mask1.y=p3mask2.y=p3tt.y=stageH/2-500

	p3aC.mask=p3mask1
	p3bC.mask=p3mask2

	p3aC.y=stageH/2-299
	p3bC.y=stageH/2-299

	p3aC.x=40-295
	p3bC.x=40-295

	p3pic22a.alpha=0
	p3pic22b.alpha=0

	page3.pivot.set(196,stageH/2)
	page3.position.set(196,stageH/2)

	page33ani()



}

function page33ani(){
	console.log("page3.y",page3.y)

	TweenMax.to(p3pic22a,3,{alpha:1,delay:2.5})
	TweenMax.to(p3pic22b,3,{alpha:1,delay:2.5})

	TweenMax.to(p3aC,4.5,{x:40-50,delay:1.5,ease:Sine.easeInOut})
	TweenMax.to(p3bC,4.5,{x:40-50,delay:1.5,ease:Sine.easeInOut})

	TweenMax.from(p3mask1,1.5,{y:"+=30",alpha:0})
	TweenMax.from(p3mask2,1.5,{y:"-=30",alpha:0})

	TweenMax.from(p3aC,1.5,{y:"+=30"})
	TweenMax.from(p3bC,1.5,{y:"-=30"})

	TweenMax.from(p3s1,1.5,{y:"+=30",alpha:0})
	TweenMax.from(p3s2,1.5,{y:"-=30",alpha:0})

	TweenMax.to(p3s1,4.5,{alpha:0.9,delay:1.5})
	TweenMax.to(p3s2,4.5,{alpha:0.9,delay:1.5})


	TweenMax.from(p3tt,1.5,{x:"+=130",alpha:0})

	TweenMax.to(page3,1.5,{alpha:0,delay:5+.5,onComplete:page3end})
	TweenMax.to(page3,1,{x:320,y:stageH/4,delay:5,ease:Sine.easeIn})
	TweenMax.to(page3.scale,1,{x:4,y:4,delay:5,ease:Sine.easeIn})

	TweenMax.set($("#musicOn"),{display:"none"})
	TweenMax.set($("#musicOff"),{display:"none"})

	setPage4()
}

function page3end(){
	console.log("第三页消失")
	$("#bgm")[0].pause()
	setHintPage()
	TweenMax.set($("#musicOn"),{display:"none"})
	TweenMax.set($("#musicOff"),{display:"none"})
}
//===============================================第四页前 提示页

var hintPage=new PIXI.Container()
var hint1=new pSprite("img/hint1.png")
var hint2=new pSprite("img/hint2.png")
var hint3=new pSprite("img/hint3.png")
var blackBG=new PIXI.Graphics()


function setHintPage(){
	page4.addChild(hintPage)
	hintPage.addChild(blackBG,hint1,hint2,hint3)
	blackBG.beginFill(0x000000)
	blackBG.drawRect(0,0,640,stageH)
	blackBG.alpha=0//.8
	blackBG.interactive=true
	blackBG.tap=nextHint
	hint1.y=hint2.y=hint3.y=stageH-1000-50
	//hint1.x-=25
	hint1.alpha=hint2.alpha=hint3.alpha=0

}
var nowHint=0
function nextHint(){
	if(nowHint==0){
		TweenMax.to(blackBG,1,{alpha:.3})
		TweenMax.to(hint1,1,{alpha:1,y:"+=50",ease:Back.easeOut})
		nowHint++
	}else if(nowHint==1){
		TweenMax.to(hint1,1,{alpha:0})
		TweenMax.to(hint2,1,{alpha:1,y:"+=50",ease:Back.easeOut})
		nowHint++
	}else if(nowHint==2){
		TweenMax.to(hint2,1,{alpha:0})
		TweenMax.to(hint3,1,{alpha:1,y:"+=50",ease:Back.easeOut})
		nowHint++
	}else{
		hintPage.visible=false
	}
}

//===============================================第四页

var page4=new PIXI.Container()
var p4All=new PIXI.Container()
var p4AllMask=new PIXI.Graphics()

var p4DownLayer=new PIXI.Container()
var p4MidLayer=new PIXI.Container()
var p4TopLayer=new PIXI.Container()

var p4tagC=new PIXI.Container()

var hrz=0//地平线高度

var p4skyA,p4buildingA,p4t
var buildingA=[]

function setPage4(){

	mainPart.addChildAt(page4,0)
	page4.addChild(p4All,p4tagC)
	p4All.addChild(p4DownLayer,p4MidLayer,p4TopLayer)

	//console.log("dddddd",mainPart.children)

	// page1.visible=false
	// page2.visible=false
	// page3.visible=false

	// page4.y=-100

	// p4tagC.visible=false
	// p4All.visible=false
	// p4AllMask.visible=false

	p4AllMask.beginFill(0xffffff)
	p4AllMask.drawRect(0,0,640,stageH-341)
	p4All.mask=p4AllMask

	


	var p4grass=new pSprite("img/p4grass2.jpg")
	p4MidLayer.addChild(p4grass)
	p4grass.height=678/1000*stageH
	p4grass.y=stageH-p4grass.height
	hrz=p4grass.y

	var p4sky1=new pSprite("img/sky1.jpg")
	var p4sky2=new pSprite("img/sky2.jpg")
	var p4sky3=new pSprite("img/sky3.jpg")

	p4DownLayer.addChild(p4sky1,p4sky2,p4sky3)
	p4sky2.alpha=p4sky3.alpha=0
	p4sky1.y=p4sky2.y=p4sky3.y=hrz-822



	p4skyA=[p4sky1,p4sky2,p4sky3]

	var building1_1=new pSprite("img/building1-1.png")
	var building1_2=new pSprite("img/building1-2.png")
	var building1_3=new pSprite("img/building1-3.png")

	var building2_1=new pSprite("img/building2-1.png")
	var building2_2=new pSprite("img/building2-2.png")
	var building2_3=new pSprite("img/building2-3.png")

	var building3_1=new pSprite("img/building3-1.png")
	var building3_2=new pSprite("img/building3-2.png")
	var building3_3=new pSprite("img/building3-3.png")

	p4buildingA=[[building1_1,building1_2,building1_3],[building2_1,building2_2,building2_3],[building3_1,building3_2,building3_3]]

	for (var i = 0; i < 3; i++) {
		var buildingC=new PIXI.Container()
		buildingA.push(buildingC)
		p4MidLayer.addChild(buildingC)
		if(i!=0){buildingC.visible=false}
		for (var j = 0; j < 3; j++) {
			buildingC.addChild(p4buildingA[i][j])
			// p4buildingA[i][j].visible=false
			p4buildingA[i][j].y=hrz-237
			if(i==2){p4buildingA[i][j].y=hrz-237+10}
			if(j!=0){
				p4buildingA[i][j].alpha=0
			}
		};
	};

	p4t=new pSprite("img/p4tt.png") 
	page4.addChild(p4t)
	p4t.y=(hrz+stageH-341)/2-35
	TweenMax.from(p4t,1,{alpha:0,y:"+=50",delay:.5})

	TweenMax.to(p4t,2,{alpha:0,delay:3.5})////============================================字消失时间

	setTag()
}

var tag1,tag2,tag3,tag4,tag5,tag6,tag7
var _tag2Pic1,_tag2Pic2,_tag2Pic3
var _tag2picA=[]
var tagA=[]
var tagBtnA=[]
var tagBtnNext=new pSprite("img/tag-done.png")

function setTag(){
	var tagbtnX=[47,47+63*1+5,47+63*2+5,47+63*3-2,47+63*4-7,47+63*5-12,47+63*6-7]
	for (var i = 0; i < 7; i++) {
		var _tag=new PIXI.Container()
		p4tagC.addChildAt(_tag,0)
		if(i!=0){_tag.visible=false}
		p4tagC.y=stageH-341
		tagA.push(_tag)
		var j=i+1
		var _tagbg=new pSprite("img/tagbg"+j+".png")
		if(i!=1){
			var _tagPic=new pSprite("img/tag"+j+"picb.png")
			_tag.addChild(_tagbg,_tagPic)
		}else{
			_tag2Pic1=new pSprite("img/tag"+j+"pic1.png")
			_tag2Pic2=new pSprite("img/tag"+j+"pic2.png")
			_tag2Pic3=new pSprite("img/tag"+j+"pic3.png")
			_tag2picA=[_tag2Pic1,_tag2Pic2,_tag2Pic3]
			_tag.addChild(_tagbg,_tag2Pic1,_tag2Pic2,_tag2Pic3)
			_tag2Pic2.visible=_tag2Pic3.visible=false

		}
		
		var tagbtn=new PIXI.Graphics()
		tagbtn.beginFill(0x334455)
		tagbtn.drawRect(0,0,55,75)

		p4tagC.addChild(tagbtn)
		tagBtnA.push(tagbtn)
		tagbtn.alpha=0
		tagbtn.y=331-75
		tagbtn.x=tagbtnX[i]
		tagbtn.interactive=true
		tagbtn.tap=changeTag
	};

	p4tagC.addChild(tagBtnNext)
	tagBtnNext.position.set(501-1,275-10)
	tagBtnNext.interactive=true
	tagBtnNext.tap=goNext

	setTag1()
	setTag2()
	setTag3()
	setTag4()
	setTag5()
	setTag6()
	setTag7()
	setItem()
	setEnd()
}

function changeTag(_e){
	for (var i = 0; i < 7 ; i++) {
		tagA[i].visible=false
		if(tagBtnA[i]==_e.target){
			console.log("标签"+i)
			tagA[i].visible=true

			$("#tag3")[0].pause()
			$("#tag4")[0].pause()
			$("#tag5")[0].pause()
			$("#tag6")[0].pause()
			$("#tag7")[0].pause()

			if(i==2){
				$("#tag3")[0].currentTime=0
				$("#tag3")[0].play()
			}
			if(i==3){
				$("#tag4")[0].currentTime=0
				$("#tag4")[0].play()
			}
			if(i==4){
				$("#tag5")[0].currentTime=0
				$("#tag5")[0].play()
			}
			if(i==5){
				$("#tag6")[0].currentTime=0
				$("#tag6")[0].play()
			}
			if(i==6){
				$("#tag7")[0].currentTime=0
				$("#tag7")[0].play()
			}
		}
	};
}
//=========================================================================================================完成

var endPage=new PIXI.Container()
var endMask1=new pSprite("img/endmask1.png")
var endMask2=new pSprite("img/endmask2.png")
var endMask3=new pSprite("img/endmask3.png")
var endMaskC=new PIXI.Container()
var endMaskA=[endMask1,endMask2,endMask3]
var endTitle=new pSprite("img/endtitle.png")
var endBar=new PIXI.Container()
var endBarBG=new pSprite("img/endbtns.png")
var endBtn1=new PIXI.Graphics()
var endBtn2=new PIXI.Graphics()

var result1=new pSprite("img/result11.png")
var result2=new pSprite("img/result22.png")
var result3=new pSprite("img/result33.png")
var result4=new pSprite("img/result44.png")
var result5=new pSprite("img/result55.png")
var result6=new pSprite("img/result66.png")
var resultC=new PIXI.Container()
var resultA=[result1,result2,result3,result4,result5,result6]
var resultNum=0

var endBtnBack=new pSprite("img/btn-back.png")

var qr=new pSprite("img/qr.png")

function setEnd(){
	mainPart.addChild(endPage,borderAll)
	endPage.addChild(endMaskC,endTitle,endBar,resultC,endBtnBack,qr)
	endMaskC.addChild(endMask1,endMask2,endMask3)
	endMask1.width=endMask2.width=endMask3.width=640
	endMask1.height=endMask2.height=endMask3.height=stageH
	endMaskC.blendMode=_MULTIPLY
	endMaskC.alpha=0
	endBar.y=stageH

	endBar.addChild(endBarBG,endBtn1,endBtn2)
	endBtn1.beginFill(0x000000)
	endBtn1.drawRect(0,0,320,70)
	endBtn1.alpha=0
	endBtn1.interactive=true
	endBtn1.tap=goEndBtn1

	endBtn2.beginFill(0x000000)
	endBtn2.drawRect(320,0,320,70)
	endBtn2.alpha=0
	endBtn2.interactive=true
	endBtn2.tap=goEndBtn2

	resultC.addChild(result1,result2,result3,result4,result5,result6)	
	resultC.y=stageH-264
	resultC.visible=false

	endTitle.alpha=0

	setLayer()
	endBtnBack.visible=false
	endBtnBack.interactive=true
	endBtnBack.tap=goBack

	qr.y=stageH-91
	qr.alpha=0
}

//==================================返回编辑页

function goBack(){
	console.log("goBack")
	endBtnBack.visible=false
	TweenMax.to(endMaskC,1,{alpha:0})
	TweenMax.to(endBar,1,{y:stageH})
	TweenMax.to(p4AllMask,1,{height:stageH-341})
	TweenMax.to(p4tagC,1,{y:stageH-341})
	TweenMax.to(endTitle,1,{alpha:0})
	TweenMax.to(resultC,1,{alpha:0})
	for (var i = 0; i < itemA.length; i++) {
    itemA[i].interactive=true
  };
  TweenLite.set($("#pngHolder"),{display:"none"})
}


//==================================完成作品

var theTime=0
function goNext(){
	console.log("111")
	hideBorder()
	for (var i = 0; i < itemA.length; i++) {
    itemA[i].interactive=false
  };
	
	TweenMax.to(p4tagC,1,{y:stageH})
	TweenMax.to(p4AllMask,1,{height:stageH})
	TweenMax.to(endMaskC,1,{alpha:.8})//========需要goback
	var i
	for (i = 0; i < 3; i++) {
		endMaskA[i].visible=false
		if(i==theTime){
			endMaskA[i].visible=true
		}
	};

	TweenMax.set(endTitle,{y:-50,alpha:0})
	TweenMax.to(endTitle,1,{y:0,alpha:1})
	TweenMax.to(endBar,1,{y:stageH-78,delay:1})//========需要goback

	resultC.visible=true
	TweenMax.to(qr,1,{alpha:1})
	TweenMax.to(p4t,1,{alpha:0})
	TweenMax.to(resultC,1,{alpha:1,onComplete:function(){
		
		goSavePic()
	}})
	for (i = 0; i < 6; i++) {
		resultA[i].visible=false
		if(i==resultNum){
			resultA[i].visible=true
			console.log(resultNum)
		}
	};
	
}
//=========================================存图

function goSavePic(){
	savePic()
	endBtnBack.visible=true
	qr.alpha=0
}

//=========================================长按保存

function goEndBtn1(){
	console.log("长按保存")
}
//=========================================公众号浮层
var endLayer
var endLayerBtn
function setLayer(){
	endLayer=new pSprite("img/wxlayer.png")
	endLayerBtn=new pSprite("img/wxlayer-close.png")
	mainPart.addChild(endLayer,endLayerBtn)
	endLayer.y=stageH/2-750
	endLayerBtn.y=stageH/2-306
	endLayer.alpha=0
	endLayerBtn.alpha=0
	endLayerBtn.interactive=false
	endLayerBtn.tap=closeLayer
}

function goEndBtn2(){
	console.log("关注公众号")
	TweenMax.to(endLayer,1,{alpha:1})
	TweenMax.to(endLayerBtn,1,{alpha:1})
	TweenMax.to(endTitle,1,{alpha:0})
	endLayerBtn.interactive=true
	TweenMax.set($("#bgQR"),{display:"block"})
	TweenLite.set($("#pngHolder"),{display:"none"})
}
function closeLayer(){
	endLayerBtn.interactive=false
	TweenMax.to(endLayer,1,{alpha:0})
	TweenMax.to(endLayerBtn,1,{alpha:0})
	TweenMax.to(endTitle,1,{alpha:1})
	TweenMax.set($("#bgQR"),{display:"none"})
	TweenLite.set($("#pngHolder"),{display:"block"})
}






//==========================================================================================================Tag1
var tag1BtnA=[]
function setTag1(){
	for (var i = 0; i < 3; i++) {
		var _btn=new PIXI.Graphics()
		_btn.beginFill(0x334455)
		_btn.drawRect(0,0,163,188)
		_btn.y=45
		_btn.x=35+200*i
		_btn.alpha=0
		tagA[0].addChild(_btn)
		tag1BtnA.push(_btn)
		_btn.interactive=true
		_btn.tap=tagChange1
	};
}

function tagChange1(_e){
	for (var i = 0; i < 3 ; i++) {
		buildingA[i].visible=false
		_tag2picA[i].visible=false
		if(tag1BtnA[i]==_e.target){
			buildingA[i].visible=true
			_tag2picA[i].visible=true
		}
	};
}

//==========================================================================================================Tag2
var tag2BtnA=[]
function setTag2(){
	for (var i = 0; i < 3; i++) {
		var _btn=new PIXI.Graphics()
		_btn.beginFill(0x334455)
		_btn.drawRect(0,0,163,188)
		_btn.y=45
		_btn.x=35+200*i
		_btn.alpha=0
		tagA[1].addChild(_btn)
		tag2BtnA.push(_btn)
		_btn.interactive=true
		_btn.tap=tagChange2
	};
}

function tagChange2(_e){
	for (var i = 0; i < 3 ; i++) {
		TweenMax.to(p4buildingA[0][i],2,{alpha:0})
		TweenMax.to(p4buildingA[1][i],2,{alpha:0})
		TweenMax.to(p4buildingA[2][i],2,{alpha:0})
		TweenMax.to(p4skyA[i],1,{alpha:0})
		if(tag2BtnA[i]==_e.target){
			TweenMax.to(p4buildingA[0][i],2,{alpha:1})
			TweenMax.to(p4buildingA[1][i],2,{alpha:1})
			TweenMax.to(p4buildingA[2][i],2,{alpha:1})

			TweenMax.to(p4skyA[i],2,{alpha:1})
			theTime=i
			console.log("白天夜晚",i)
			resultNum=1
			$("#clock")[0].currentTime=0
			$("#clock")[0].play()
		}
	};
}
//==========================================================================================================Tag3
var tag3BtnA=[]
function setTag3(){
	for (var i = 0; i < 12; i++) {
		var _btn=new PIXI.Graphics()
		_btn.beginFill(0x334455)
		_btn.drawRect(0,0,80,85)
		_btn.y=40
		if(i>5){
			_btn.y=50+100
		}
		_btn.x=35+95*(i%6)
		_btn.alpha=0
		tagA[2].addChild(_btn)
		tag3BtnA.push(_btn)
		_btn.interactive=true
		_btn.tap=tagChange3
	};
}

function tagChange3(_e){
	for (var i = 0; i < 12 ; i++) {
		if(tag3BtnA[i]==_e.target){
			console.log("点3",i)
			addItem(3,p4MidLayer,i,_NORMAL)
			resultNum=0
			$("#tree2")[0].play()
		}
	};
}


//==========================================================================================================Tag4
var tag4BtnA=[]

function setTag4(){
	var btnX=[55,165,275,385,495]
	for (var i = 0; i < 5; i++) {
		var _btn=new PIXI.Graphics()
		_btn.beginFill(0x334455)
		_btn.drawRect(0,0,95,188)
		_btn.y=45
		_btn.x=btnX[i]//35+110*i
		_btn.alpha=0
		tagA[3].addChild(_btn)
		tag4BtnA.push(_btn)
		_btn.interactive=true
		_btn.tap=tagChange4
	};
}

function tagChange4(_e){
	resultNum=2
	for (var i = 0; i < 5 ; i++) {
		if(tag4BtnA[i]==_e.target){
			console.log("点4",i)
			if(i!=1){
				addItem(4,p4MidLayer,i,_ADD)
			}else{
				addItem(4,p4MidLayer,i,_ADD)
			}
			
		}
	};
}


//==========================================================================================================Tag5
var tag5BtnA=[]
function setTag5(){
	for (var i = 0; i < 10; i++) {
		var _btn=new PIXI.Graphics()
		_btn.beginFill(0x334455)
		_btn.drawRect(0,0,110,85)
		_btn.y=35
		if(i>4){
			_btn.y=45+100
		}
		_btn.x=35+120*(i%5)
		_btn.alpha=0
		tagA[4].addChild(_btn)
		tag5BtnA.push(_btn)
		_btn.interactive=true
		_btn.tap=tagChange5
	};
}

function tagChange5(_e){
	resultNum=3
	for (var i = 0; i < 10 ; i++) {
		if(tag5BtnA[i]==_e.target){
			console.log("点5",i)
			addItem(5,p4MidLayer,i,_NORMAL)
		}
	};
}

// function setTag5(){
// 	for (var i = 0; i < 6; i++) {
// 		var _btn=new PIXI.Graphics()
// 		_btn.beginFill(0x334455)
// 		_btn.drawRect(0,0,90,155)
// 		_btn.y=55

// 		_btn.x=25+100*i
// 		_btn.alpha=0
// 		tagA[4].addChild(_btn)
// 		tag5BtnA.push(_btn)
// 		_btn.interactive=true
// 		_btn.tap=tagChange5
// 	};
// }

// function tagChange5(_e){
// 	resultNum=3
// 	for (var i = 0; i < 6 ; i++) {
// 		if(tag5BtnA[i]==_e.target){
// 			console.log("点5",i)
// 			addItem(5,p4MidLayer,i,_NORMAL)
// 		}
// 	};
// }



//==========================================================================================================Tag6
var tag6BtnA=[]
function setTag6(){
	for (var i = 0; i < 3; i++) {
		var _btn=new PIXI.Graphics()
		_btn.beginFill(0x334455)
		_btn.drawRect(0,0,163,188)
		_btn.y=45
		_btn.x=35+200*i
		_btn.alpha=0
		tagA[5].addChild(_btn)
		tag6BtnA.push(_btn)
		_btn.interactive=true
		_btn.tap=tagChange6
	};
}

function tagChange6(_e){
	resultNum=4
	for (var i = 0; i < 3 ; i++) {
		if(tag6BtnA[i]==_e.target){
			console.log("点6",i)
			addItem(6,p4MidLayer,i,_NORMAL)
		}
	};
}
//==========================================================================================================Tag7
var tag7BtnA=[]

function setTag7(){
	
	var btnX=[35,235,435,35,235,435]
	for (var i = 0; i < 6; i++) {
		var _btn=new PIXI.Graphics()
		_btn.beginFill(0x334455)
		_btn.drawRect(0,0,180,80)
		_btn.y=45
		if(i>2){
			_btn.y+=100
		}
		_btn.x=btnX[i]//35+110*i

		_btn.alpha=0
		tagA[6].addChild(_btn)
		tag7BtnA.push(_btn)
		_btn.interactive=true
		_btn.tap=tagChange7
	};
}

function tagChange7(_e){
	resultNum=5
	for (var i = 0; i < 6 ; i++) {
		if(tag7BtnA[i]==_e.target){

			console.log("点7",i)
			addItem(7,p4MidLayer,i,_NORMAL)
		}
	};
}

//===================================================================tagEND
//===================================================================tagEND



//===================================================================setITEM
//===================================================================setITEM
//=========================================================================================================添加物品
var _picURL
var itemA=[]
var p4bg=new PIXI.Graphics()
function setItem(){//======只一次
  //room.addChild(itemContainer)
  p4bg.beginFill(0xffffff)
  p4bg.drawRect(0,1,640,stageH)
  page4.addChildAt(p4bg,0)
  p4bg.interactive=true
  p4bg.tap=hideBorder
  p4bg.alpha=0


}

function hideBorder(){
  btnZoom.visible=false
  btnClose.visible=false
  itemBorder.visible=false
}

var itemContainer
var _blendMode=_NORMAL

function addItem(_tag,_layer,_i,_blend){

	itemContainer=_layer

  _picURL="img/pic3/tag"+_tag+"_"+_i+".png"
  _blendMode=_blend


  if(PIXI.loader.resources[_picURL]){
    console.log("有了")
    ItemLoaded()
  }else{
    console.log("没有")
    PIXI.loader
      .add(_picURL)
      .load(ItemLoaded)
  }
    

  

}
var itemBorder=new PIXI.Graphics()
var btnClose=pSprite("img/btnclose.png")
var btnZoom=pSprite("img/btnzoom.png")
var ifFirst=1
function ItemLoaded(){
	
	if (ifFirst==1) {
		ifFirst=0
		//TweenMax.to(p4t,1,{alpha:0})
		tagBtnNext.interactive=true

	};
  btnZoom.visible=true
  btnClose.visible=true
  itemBorder.visible=true
  var item =new PIXI.Sprite(PIXI.loader.resources[_picURL].texture)
  itemContainer.addChild(item)
  item.blendMode=_blendMode
  item.pivot.set(item.width/2,item.height/2)
  item.position.set(320+Math.random()*50-25,stageH/2+Math.random()*50-25)
  item.scale.x=item.scale.y=.66
  itemA.push(item)
  item.interactive=true
  item.touchstart=selectItem

  itemContainer.addChild(itemBorder)


  itemBorder.clear()
  itemBorder.beginFill(0x000000,0)
  itemBorder.lineStyle(2,0x888888,1,1)
  itemBorder.drawRect(0,0,item.width,item.height)
  itemBorder.pivot.set(item.width/2,item.height/2)
  itemBorder.x=item.x
  itemBorder.y=item.y

  btnClose.interactive=true
  btnZoom.interactive=true
  btnClose.tap=deleteItem
  btnZoom.touchstart=zoomItem

  itemContainer.addChild(btnClose)
  itemContainer.addChild(btnZoom)
  btnZoom.pivot.set(12,12)
  btnClose.pivot.set(12,12)
  btnZoom.x=item.x+item.width/2
  btnZoom.y=item.y-item.height/2
  btnClose.x=item.x-item.width/2
  btnClose.y=item.y+item.height/2

  _tar=[]
  _tar.push(item)
}

var _tempX,_tempY,_mouseX,_mouseY
var _tar=[]
function selectItem(_e){
  btnZoom.visible=true
  btnClose.visible=true
  itemBorder.visible=true
  _tar=[]
  _tar.push(_e.currentTarget)
  console.log(_e)
  itemContainer.addChild(_e.currentTarget)
  _e.currentTarget.touchmove=moveItem
  _tempX=_e.currentTarget.x
  _tempY=_e.currentTarget.y
  _mouseX=_e.data.global.x
  _mouseY=_e.data.global.y

  itemContainer.addChild(itemBorder)
  itemBorder.clear()
  itemBorder.beginFill(0x000000,0)
  itemBorder.lineStyle(2,0x888888,1,1)
  itemBorder.drawRect(0,0,_e.currentTarget.width,_e.currentTarget.height)
  itemBorder.pivot.set(_e.currentTarget.width/2,_e.currentTarget.height/2)
  itemBorder.x=_e.currentTarget.x
  itemBorder.y=_e.currentTarget.y

  itemContainer.addChild(btnClose)
  itemContainer.addChild(btnZoom)
  btnZoom.pivot.set(12,12)
  btnClose.pivot.set(12,12)
  btnZoom.x=_e.currentTarget.x+_e.currentTarget.width/2
  btnZoom.y=_e.currentTarget.y-_e.currentTarget.height/2
  btnClose.x=_e.currentTarget.x-_e.currentTarget.width/2
  btnClose.y=_e.currentTarget.y+_e.currentTarget.height/2
}
function moveItem(_e){//=========拖拽 移动
  _e.currentTarget.x=_tempX+_e.data.global.x-_mouseX
  _e.currentTarget.y=_tempY+_e.data.global.y-_mouseY
  _e.currentTarget.touchend=stopMove

  itemContainer.addChild(itemBorder)
  itemBorder.clear()
  itemBorder.beginFill(0x000000,0)
  itemBorder.lineStyle(2,0x888888,1,1)
  itemBorder.drawRect(0,0,this.width,this.height)
  itemBorder.pivot.set(this.width/2,this.height/2)
  itemBorder.x=_e.currentTarget.x
  itemBorder.y=_e.currentTarget.y
  //console.log(_e.currentTarget)

  itemContainer.addChild(btnClose)
  itemContainer.addChild(btnZoom)
  btnZoom.pivot.set(12,12)
  btnClose.pivot.set(12,12)
  btnZoom.x=_e.currentTarget.x+_e.currentTarget.width/2
  btnZoom.y=_e.currentTarget.y-_e.currentTarget.height/2
  btnClose.x=_e.currentTarget.x-_e.currentTarget.width/2
  btnClose.y=_e.currentTarget.y+_e.currentTarget.height/2
}
function stopMove(_e){
  _e.currentTarget.touchmove=null
}

function deleteItem(_e){
  itemContainer.removeChild(_tar[0])
  btnZoom.visible=false
  btnClose.visible=false
  itemBorder.visible=false
  _tar=[]
}

function zoomItem(_e){
  _tempX=_e.currentTarget.x
  _tempY=_e.currentTarget.y
  _mouseX=_e.data.global.x
  _mouseY=_e.data.global.y
  btnZoom.touchmove=zoomMove
  _tar[0].interactive=false
}
function zoomMove(_e){
  btnZoom.x=_tempX+_e.data.global.x-_mouseX
  btnZoom.y=_tempY+_e.data.global.y-_mouseY
  btnZoom.touchend=zoomStop
  
  // //_tar[0].height=-(btnZoom.y-_tar[0].y)*2
  if (btnZoom.x>=_tar[0].x) {
    _tar[0].scale.x=1
    _tar[0].width=(btnZoom.x-_tar[0].x)*2
  }else{
    _tar[0].scale.x=-1
    _tar[0].width=-(btnZoom.x-_tar[0].x)*2
  }

  if (btnZoom.y>=_tar[0].y) {
    _tar[0].scale.y=1
    _tar[0].height=-(btnZoom.y-_tar[0].y)*2
  }else{
    _tar[0].scale.y=-1
    _tar[0].height=(btnZoom.y-_tar[0].y)*2
  }

  itemBorder.clear()
  itemBorder.beginFill(0x000000,0)
  itemBorder.lineStyle(2,0x888888,1,1)
  itemBorder.drawRect(0,0,_tar[0].width,_tar[0].height)
  itemBorder.pivot.set(_tar[0].width/2,_tar[0].height/2)
  itemBorder.x=_tar[0].x
  itemBorder.y=_tar[0].y

  btnClose.x=_tar[0].x-_tar[0].width/2
  btnClose.y=_tar[0].y+_tar[0].height/2

  //_tar[0].pivot.set(_tar[0].width/2,_tar[0].height/2)
}
function zoomStop(_e){
  btnZoom.touchmove=null
   _tar[0].interactive=true

}

