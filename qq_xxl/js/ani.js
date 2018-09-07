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
			sqrA.push(sqr)
			sqr.position.set(i*64,j*64)
			sqr.alpha=Math.random()//*.2
			//sqr.blendMode=_SCREEN
			TweenMax.to(sqr,Math.random()*2,{alpha:Math.random()*1,delay:Math.random()*1,onComplete:sqrloop,onCompleteParams:[sqr]})
		};
	};

}
function bgUp(){
	for (var i = 0; i < 10; i++) {
		for (var j = 0; j < stageH/64; j++) {
			var _t=1
			// TweenMax.killTweensOf(sqrA[i*10+j])
			// TweenMax.set(sqrA[i*10+j],{alpha:1,delay:_t})
			// TweenMax.to(sqrA[i*10+j],1,{alpha:0,delay:_t,onComplete:sqrloop,onCompleteParams:[sqrA[i*10+j]]})
			//sqrA[i*10+j].visible=false
		};
	};
}
function sqrloop(_sqr){
	TweenMax.to(_sqr,Math.random()*2+.2,{alpha:Math.random()*1,delay:Math.random()*1,onComplete:sqrloop,onCompleteParams:[_sqr]})
}


var p1shandow=new pSprite("img/p1shandow.jpg")
var p1=new pSprite("img/p1.png")
var page1=new PIXI.Container()
function setPage1(){
	pStage.addChild(page1)
	page1.addChild(p1shandow)
	page1.addChild(p1)
	p1shandow.blendMode=_MULTIPLY
}