var page1,p1bg,p1t1,p1t2,p1t3,p1t4,p1t5,p1t6,p1t7,p1t8,p1t9,p1tA
var p1tPivotXA=[320,320,320,320,320,320,320,320,49]
var p1tPivotYA=[17,1,8,1,58,28,10,11,32]
var p1tXA=[320,320,320,320,320,320,320,320,113]
var p1tYA=[-402,-363,-345,-328,-247,-121,328,370,440]
var blackLayer,ruleLayer,rule
function setPage1(){
	page1=new Container()
	pStage.addChild(page1)
	p1bg=new Sprite(getTe(_CDN+"img/bg.jpg"))
	p1bg.pivot.set(320,619.5)
	p1bg.position.set(320,stageH/2)

	blackLayer=new PIXI.Graphics()
	blackLayer.beginFill(0x000000,1)
	blackLayer.drawRect(0,0,640,stageH)

	TweenMax.to(blackLayer,2,{alpha:0})
	TweenMax.from(p1bg.scale,5,{x:1.2,y:1.2})

	page1.addChild(p1bg,blackLayer)


	p1tA=[p1t1,p1t2,p1t3,p1t4,p1t5,p1t6,p1t7,p1t8,p1t9]
	var i
	for (i = 1; i <= 9; i++) {
		p1tA[i-1]=new Sprite(getTe(_CDN+"img/p1t"+i+".png"))
		page1.addChild(p1tA[i-1])
		p1tA[i-1].pivot.set(p1tPivotXA[i-1],p1tPivotYA[i-1])
		p1tA[i-1].position.set(p1tXA[i-1],stageH/2+p1tYA[i-1]/1028*stageH)
		if(i==9){
			TweenMax.from(p1tA[i-1],1,{y:"+=100",alpha:0,delay:(i-1)*.15+.5,overwrite:false})
		}else{
			TweenMax.from(p1tA[i-1],1,{y:"+=100",alpha:0,delay:(i-1)*.15+.5,overwrite:false})
		}
		
	};
	TweenMax.set(p1tA[8-1],{y:stageH/2+p1tYA[8-1]/1028*stageH,delay:1})
	TweenMax.to(p1tA[8-1],1,{y:"+=15",repeat:1000,yoyo:true,delay:1})

	ruleLayer=new Container()
	page1.addChild(ruleLayer)
	rule=new Sprite(getTe(_CDN+"img/rule.jpg"))
	rule.pivot.set(262,361)
	rule.position.set(320,stageH/2-58)
	rule.alpha=0
	ruleLayer.addChild(rule)
	rule.visible=false

	rule.interactive=true
	rule.tap=hideRule

	p1tA[8].interactive=true
	p1tA[8].tap=showRule

	p1bg.interactive=true
	p1bg.touchstart=willGoPage2
}

function showRule(){
	rule.visible=true
	page1.addChild(blackLayer,ruleLayer)
	TweenMax.set(rule.scale,{x:1})
	TweenMax.to(rule,1,{alpha:1})
	TweenMax.to(blackLayer,2,{alpha:.6})
}
function hideRule(){
	TweenMax.set(rule.scale,{x:0})
	TweenMax.set(rule,{visible:false,alpha:0})
	TweenMax.set(blackLayer,{alpha:0})
}
var startY=0
function willGoPage2(_e){

	console.log("视频该播放了")
	videoA[1].play()
	startY=_e.data.global.y
	p1bg.touchend=ifGoPage2
}
function ifGoPage2(_e){
	if(startY-_e.data.global.y>90){
		goPage2()
	}
}
function goPage2(){
	p1bg.interactive=false
	TweenMax.to(page1,.5,{y:page1.y-stageH,alpha:0})
}

var page2
var videoA=[]
var videoSpriteA=[]
function setPage2(){
	page2=new Container()
	pStage.addChild(page2)

	for (var i = 1; i <= 6; i++) {
		//var str="video"+i
		//console.log(str)
		var _video = document.createElement("video");
		_video.preload = "auto";
		_video.loop = true;              // enable looping
		_video.autoplay=false
		_video.setAttribute('playsinline','');
		_video.setAttribute('webkit-playsinline','');//makeVideoPlayableInline(texture.baseTexture.source, false);
		_video.src = "http://image.giccoo.com/projects/Landover24/video/"+i+".mp4";
		videoA.push(_video)
		
		var _v=PIXI.Texture.fromVideo(_video)
		var _videoSprite=new PIXI.Sprite(_v)
		_v.baseTexture.autoPlay = false;
		
		videoSpriteA.push(_videoSprite)
		page2.addChild(_videoSprite)
		_videoSprite.x=100*i
		//_v.baseTexture.loop = "loop";
		//_v.baseTexture.source.load();
		//_v.baseTexture.source.play()
	};
}