////////////////////////////////////////////////////////////////////////p1
var cat1,cat2
function setP1cat(){
	cat1=new Sprite(getTe(_CDN+"img/cat1.png"));
	cat2=new Sprite(getTe(_CDN+"img/cat2.png"));
	cat2.pivot.y=116
	cat2.y=116
	p1catC.addChild(cat2,cat1)
	p1catC.y=stageH/2+396
	TweenMax.to(cat2.scale,1.2,{y:1.1,repeat:10000,yoyo:true,repeatDelay:.2})
}
var board1,board2,board3,board4
function setP1board(){
	board1=new Sprite(getTe(_CDN+"img/p1board1.png"));
	board2=new Sprite(getTe(_CDN+"img/p1board2.png"));
	board3=new Sprite(getTe(_CDN+"img/p1board3.png"));
	board4=new Sprite(getTe(_CDN+"img/p1board4.png"));

	p1boardC.addChild(board1,board2,board3,board4)
	p1boardC.y=stageH/2-521
	board2.alpha=0.5
	TweenMax.to(board3,1,{alpha:0,repeat:10000,yoyo:true,repeatDelay:0,delay:1,ease:Linear.easeNone})
	TweenMax.to(board4,1,{alpha:0,repeat:10000,yoyo:true,repeatDelay:0,delay:0,ease:Linear.easeNone})

}
var p1logo
function setLogo(){
	p1logo=new Sprite(getTe(_CDN+"img/p1logo.png"));
	p1logo2=new Sprite(getTe(_CDN+"img/p1logo.png"));
	p1logo2.blendMode=_ADD
	p1logoC.addChild(p1logo,p1logo2)
	p1logo2.alpha=.1
	TweenMax.to(p1logo2,.1,{alpha:0,repeat:100000})
	p1logoC.y=stageH/2-287
}