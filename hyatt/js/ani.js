var page1=new PIXI.Container()
var p1bg=new pSprite("img/p1bg.jpg")
var border=new PIXI.Container()
var p1title=new PIXI.Container()

var p1t=new pSprite("img/p1t.png")
var p1bar=new PIXI.Graphics()
var p1arrow=new pSprite("img/p1arrow.png")

function setPage1(){
	pStage.addChild(page1)
	page1.addChild(p1bg,border,p1title)
	p1bg.y=stageH/2-750

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

	

	p1title.addChild(p1bar,p1arrow,p1t)
	p1bar.beginFill(0x264762)
	p1bar.drawRect(0,0,41,stageH*(1-0.19))
	p1arrow.y=p1bar.height-22
	p1title.position.set(320-20.5,stageH*.19)
	p1arrow.x--
	
	TweenMax.to(p1arrow,.5,{y:"-=10",repeat:100000,yoyo:true})	
	p1ani()

}

function p1ani(){
	TweenMax.from(p1title,2.5,{y:"+=400",alpha:0})	
	TweenMax.from(p1t,3.5,{y:"+=200"})	
}