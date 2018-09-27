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




//==========================================================================bg1
var bg1a,bg1b
function setBG1 () {
	bg1a=new Sprite(getTe(_CDN+"img/q1bg1.png"));
	bg1b=new Sprite(getTe(_CDN+"img/q1bg2.jpg"));
	bg1.addChild(bg1b,bg1a)

	// bg1a.pivot.set(320,1138)
	// bg1a.position.set(320,stageH)

	setBottom([bg1a])
	setFullScreen([bg1b],50)
	//bg1b.x-=50
	//TweenMax.to(bg1b,2.5,{x:"+=100",repeat:1000,yoyo:true,ease:Linear.easeNone})
	TweenMax.to(bg1a,.1,{y:"+=2",repeat:10000,yoyo:true,ease:Linear.easeNone})
}