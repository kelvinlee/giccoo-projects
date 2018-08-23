
var page1,p1bg,p1t1,p1t2,p1t3,p1t4,p1t5,p1t6,p1t7,p1t8,p1t9,p1tA
var p1tPivotXA=[320,320,320,320,320,320,320,320,49]
var p1tPivotYA=[17,1,8,1,58,28,10,11,32]
var p1tXA=[320,320,320,320,320,320,320,320,113]
var p1tYA=[-402,-363,-345,-328,-247,-121,328,370,440]
var blackLayer,ruleLayer,rule
var firstLoad = true
var secondLoad = true
var u = navigator.userAgent
var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1

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

	setTimeout(function(){
		p1bg.interactive=true
		p1bg.touchstart=willGoPage2
	},1500)
	
	
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
	// main.videoIndex = 4
	// main.lr = true
	// for (var i=0;i<2;i++){
	// 	videoA[i].load()
	// }
	// // console.log(videoA[0].load())
	// setTimeout(function(){
	// 	videoA[0].play()
	// },450)
	//=====videoSpriteA[0].visible=true
	startY=_e.data.global.y
	p1bg.touchend=ifGoPage2
	
	for (var i = 1; i <= 6; i++) {
		if (isAndroid) {
			var video = document.createElement('video');
			video.setAttribute('playsinline','');
			video.setAttribute('webkit-playsinline','');
			video.crossOrigin = 'anonymous';
			var src = document.createElement('source');
			src.setAttribute('src', "//image.giccoo.com/projects/Landrover24/video/build-"+i+"b.mp4");
			src.setAttribute('type', 'video/mp4');

			video.appendChild(src);
			video.loop=true
			video.muted=true
		}else{
			var video = "http://image.giccoo.com/projects/Landrover24/video/build-"+i+"b.mp4"
		}
		
		// videoA.push(video)
		// video.addEventListener("canplay",canplayEvt)
		// // create a video texture from a path
		// var texture = PIXI.Texture.fromVideo(video);
		// texture.baseTexture.autoPlay = false;

		// var vvtexture=PIXI.Texture.fromVideo("http://image.giccoo.com/projects/Landrover24/video/build-"+i+".mp4");
		var vvtexture=PIXI.Texture.fromVideo(video);
		vvtexture.baseTexture.source.loop = true
		vvtexture.baseTexture.autoPlay = false
		var videoSprite = new PIXI.Sprite(vvtexture);
		videoSprite.texture.baseTexture.on('loaded',function(evt){
			console.log("loaded",nowVideo,evt,this)
			// this.source.play()
			videoSpriteA[nowVideo-1].texture.baseTexture.source.play()
		})

		videoSpriteA.push(videoSprite)
		videoSprite.width=640
		videoSprite.height=stageH
		videoSprite.visible=true
		page2.addChildAt(videoSprite,0);

	};
	// setTimeout(function(){
	// 	videoSpriteA[0].texture.baseTexture.source.play()
	// },300)

}
function ifGoPage2(_e){
	if(startY-_e.data.global.y>90){
		goPage2()
	}
}
function goPage2(){
	p1bg.interactive=false
	TweenMax.to(page1,.5,{y:page1.y-stageH,alpha:0})
	showPage2()
}

var page2
var videoA=[]
var videoSpriteA=[]
var p2top,p2btn1,p2btn2,p2btn3,dark,btnLeft,btnRight
function setPage2(){
	page2=new Container()
	pStage.addChild(page2,page1)

	// for (var i = 1; i <= 6; i++) {
	// 	// var video = document.createElement('video');
	// 	// video.setAttribute('playsinline','');
	// 	// video.setAttribute('webkit-playsinline','');
	// 	// video.crossOrigin = 'anonymous';
	// 	// var src = document.createElement('source');
	// 	// src.setAttribute('src', "//image.giccoo.com/projects/Landrover24/video/build-"+i+".mp4");
	// 	// src.setAttribute('type', 'video/mp4');

	// 	// video.appendChild(src);
	// 	// video.loop=true
	// 	// video.muted=true
	// 	// videoA.push(video)
	// 	// video.addEventListener("canplay",canplayEvt)
	// 	// // create a video texture from a path
	// 	// var texture = PIXI.Texture.fromVideo(video);
	// 	// texture.baseTexture.autoPlay = false;

	// 	var vvtexture=PIXI.Texture.fromVideo("//image.giccoo.com/projects/Landrover24/video/build-"+i+".mp4");
	// 	vvtexture.baseTexture.source.loop = true
	// 	var videoSprite = new PIXI.Sprite(vvtexture);


	// 	videoSpriteA.push(videoSprite)
	// 	videoSprite.width=640
	// 	videoSprite.height=stageH
	// 	videoSprite.visible=false
	// 	page2.addChild(videoSprite);

	// };
	dark=new Sprite(getTe(_CDN+"img/dark.png"))
	dark.width=640
	//dark.height=stageH
	page2.addChild(dark)
	//dark.blendMode=_MULTIPLY

	p2top=new Sprite(getTe(_CDN+"img/p2top.png"))
	p2btn1=new Sprite(getTe(_CDN+"img/p2btn1.png"))
	p2btn2=new Sprite(getTe(_CDN+"img/p2btn2.png"))
	p2btn3=new Sprite(getTe(_CDN+"img/p2btn3.png"))

	p2btn1.y=stageH/2+256
	p2btn2.y=p2btn3.y=stageH/2+357
	p2btn2.x=94
	p2btn3.x=366

	btnLeft=new Sprite(getTe(_CDN+"img/arrow2.png"))
	btnRight=new Sprite(getTe(_CDN+"img/arrow.png"))
	btnRight.y=btnLeft.y=stageH/2-49
	btnRight.x=640-72
	btnLeft.x=0
	btnLeft.alpha=btnRight.alpha=.6

	page2.addChild(p2top,p2btn1,p2btn2,p2btn3,btnLeft,btnRight)
}

var p2A
function showPage2(){
	p2A=[p2top,btnLeft,btnRight,p2btn1,p2btn2,p2btn3]
	for (var i = 0; i < p2A.length; i++) {
		TweenMax.from(p2A[i],.6,{alpha:0,y:"+=100",delay:i*.05+.5})
	};
	p2btn1.interactive=p2btn2.interactive=p2btn3.interactive=btnLeft.interactive=btnRight.interactive=true
	btnLeft.touchstart=leftVideo
	btnRight.touchstart=rightVideo
	p2btn3.touchstart=goForm
	p2btn2.touchstart=goList
	p2btn1.touchstart=goPage3

}
var nowVideo=1
var videoX=-640
function leftVideo(){
	// if (firstLoad) {
	// 	firstLoad = false
	// 	for(var i = 2;i<4;i++) {
	// 		videoA[i].load()
	// 	}
	// }else{
	// 	if (secondLoad) {
	// 		secondLoad = false
	// 		for(var i = 4;i<6;i++) {
	// 			videoA[i].load()
	// 		}
	// 	}
	// }
	nowVideo--
	if(nowVideo==0){
		nowVideo=6
	}
	videoX=640
	//main.lr = false
	//main.videoIndex = nowVideo
	// if (!videoA[nowVideo-1].canplayEvt) {
	// 	videoA[nowVideo-1].load()
	// 	setTimeout(function(){
	// 		changeVideo()
	// 	},300)
	// }else{
	// 	changeVideo()
	// }
	changeVideo()
}

function rightVideo(){
	// if (firstLoad) {
	// 	firstLoad = false
	// 	for(var i = 2;i<4;i++) {
	// 		videoA[i].load()
	// 	}
	// }else{
	// 	if (secondLoad) {
	// 		secondLoad = false
	// 		for(var i = 4;i<6;i++) {
	// 			videoA[i].load()
	// 		}
	// 	}
	// }
	nowVideo++
	if(nowVideo==7){
		nowVideo=1
	}
	videoX=-640
	//main.lr = true
	//main.videoIndex = nowVideo
	// if (!videoA[nowVideo-1].canplayEvt) {
	// 	videoA[nowVideo-1].load()
	// 	setTimeout(function(){
	// 		changeVideo()
	// 	},300)
	// }else{
	// 	changeVideo()
	// }
	changeVideo()
	
}
function canplayEvt(evt) {
	var index = videoA.indexOf(evt.target)+1
	evt.target.canplayEvt = true
	if (index == nowVideo) {
		console.log("play",evt.target)
		evt.target.play()
		// setTimeout(function(){
		// 	evt.target.play()
		// },400)
	}
	// console.log(evt.target)

}
function changeVideo(){
	console.log("play:",nowVideo)
	//videoA[nowVideo-1].play()
	videoSpriteA[nowVideo-1].visible=true
	for (var i = 0; i < 6; i++) {
		if(i==nowVideo-1){
			//videoA[i].play()
			videoSpriteA[i].texture.baseTexture.source.play()
			videoSpriteA[i].visible=true
			TweenMax.from(videoSpriteA[i],.5,{x:videoX})
			page2.addChildAt(videoSpriteA[i],5)
		}else{
			//videoA[i].pause()
			//videoSpriteA[i].visible=false
		}
	};
}
function goForm(){
	main.openForm()
}
function goList(){
	console.log("去歌单")
	// window.location.href='https://music.163.com/#/playlist?id=2369232527&userid=1554475702';
	main.openMusic()
}
//==========================================P3
var p3top,p3btn1,page3,p3target,p3playing
var p3songA=[]
function setPage3(){
	page3=new Container()
	pStage.addChild(page3)
	p3top=new Sprite(getTe(_CDN+"img/p3top.png"))
	p3btn1=new Sprite(getTe(_CDN+"img/p3btn1.png"))


	p3btn1.y=stageH/2+256
	page3.addChild(p3top,p3btn1)
	page3.visible=false

	p3target=new Sprite(getTe(_CDN+"img/p3target.png"))
	p3playing=new Sprite(getTe(_CDN+"img/p3playing.png"))

	p3target.pivot.set(320,27.5)
	p3target.y=stageH/2-324

	p3playing.pivot.set(320,27.5)
	p3playing.y=stageH/2-324

	p3target.x=p3playing.x=320

	page3.addChild(p3target,p3playing)

	for (var i = 0; i < 6; i++) {
		var p3song=new Sprite(getTe(_CDN+"img/p3s"+i+".png"))
		p3songA.push(p3song)
		page3.addChild(p3song)
		p3song.pivot.set(320,12.5)
		p3song.position.set(320,stageH/2-324+i*60)
	};
}

function goPage3(){
	console.log("下一步")
	page3.visible=true
	TweenMax.to(p2top,.5,{alpha:0,y:"-=50"})
	TweenMax.to(p2btn1,.5,{alpha:0,y:"-=50"})
	p2btn1.interactive=false
	TweenMax.from(p3top,.5,{alpha:0,y:"+=50"})
	TweenMax.from(p3btn1,.5,{alpha:0,y:"+=50"})
	for (var i = 0; i < 6; i++) {
		TweenMax.from(p3songA[i],1,{alpha:0,y:"+=100",delay:.1*i,ease:Back.easeOut})
		p3songA[i].interactive=true
		p3songA[i].touchstart=changeSong
	};
	p3btn1.interactive=true
	p3btn1.touchstart=goPage4
	try{
		if (isAndroid){
			stopAllAudio("music-1")
			PIXI.sound.play("music-1")
		}else{
			playAudio("music-1")
		}
	}catch(err) {
		console.log("err:",err)
	}
	
}
var nowMusic=1
function changeSong(_e){
	for (var i = 0; i < 6; i++) {
		if(_e.target==p3songA[i]){
			nowMusic=i+1
			var j=i+1
			var str="music-"+j
			console.log("播放第",i+1,"首",str)
			// playAudio(str)
			try {
				if (isAndroid){
					stopAllAudio(str)
					PIXI.sound.play(str)
				}else{
					playAudio(str)
				}
			}catch(err) {
				console.log("err:",err)
			}
			TweenMax.to(p3target,.2,{y:_e.target.y,delay:.02})
			TweenMax.to(p3playing,.2,{y:_e.target.y})
		}
	};
}
function discPlay(){

}
function discStop(){
	
}

//==================P4
var p4btn1,page4
var topA=[]
var vtopA=[]
var topbA=[]
var downA=[]
var bgA=[]
var p4down
function setPage4(){
	page4=new Container()
	pStage.addChild(page4)
	page4.visible=false
	var i
	for (i = 1; i <= 6; i++) {
		var _bg=new Sprite(getTe(_CDN+"img/bg"+i+".jpg"))
		page4.addChild(_bg)
		bgA.push(_bg)

		_bg.pivot.y=619
		_bg.y=stageH/2

		_bg.visible=false
	};


	for (i = 1; i <= 6; i++) {
		var _top=new Sprite(getTe(_CDN+"img/top"+i+".png"))
		var _topb=new Sprite(getTe(_CDN+"img/top"+i+"b.png"))
		//var _down=new Sprite(getTe(_CDN+"img/down"+i+".png"))
		var _down=new Sprite(getTe(_CDN+"img/down111.png"))

		var _vtop=new Sprite(getTe(_CDN+"img/vtop"+i+".png"))

		page4.addChild(_top,_topb,_down,_vtop)
		_down.y=stageH-364
		topA.push(_top)
		topbA.push(_topb)
		downA.push(_down)
		vtopA.push(_vtop)
		_vtop.visible=_top.visible=_topb.visible=_down.visible=false
	};
	p4down=new Sprite(getTe(_CDN+"img/down.png"))
	p4down.y=stageH-373
	p4down.visible=false
	page4.addChild(p4down)
}
var vdown
function goPage4(){
	console.log("page4",main.regSubmited)
	page4.visible=true
	p3btn1.interactive=false
	TweenMax.to(page3,.5,{y:"-=50",alpha:0,onComplete:removeP3})
	TweenMax.to(btnRight,.5,{x:"+=200"})
	TweenMax.to(btnLeft,.5,{x:"-=200"})
	TweenMax.to(p2btn2,.5,{y:"+=1000"})
	TweenMax.to(p2btn3,.5,{y:"+=1000"})

	p4btn1=new Sprite(getTe(_CDN+"img/p4btn1.png"))
	p4btn1.y=stageH/2+256
	TweenMax.from(p4btn1,.5,{y:"+=50",alpha:0,delay:5})
	page4.addChild(p4btn1)
	p4btn1.interactive=true
	p4btn1.touchstart=goPage5

	vtopA[nowMusic-1].visible=true
	vdown=new Sprite(getTe(_CDN+"img/vdown.png"))
	vdown.y=stageH-117
	page4.addChild(vdown)
	//topA[nowMusic-1].visible=true
	//topbA[nowMusic-1].visible=true
	//downA[nowMusic-1].visible=true
}

function goPage5(){
	pStage.removeChild(page2)

	stopAllAudio()
	vdown.visible=false
	p4btn1.interactive=false
	p4btn1.visible=false
	vtopA[nowMusic-1].visible=false
	topA[nowMusic-1].visible=true
	topbA[nowMusic-1].visible=true
	downA[nowMusic-1].visible=true
	bgA[nowVideo-1].visible=true
	p4down.visible=true
	__url="http://m.giccoo.com/Landrover24/?video="+nowVideo+"&music="+nowMusic
	buildQR(__url,QRDone)

	
}

function removeP3(){
	pStage.removeChild(page3)
	page2.removeChild(btnRight,btnLeft,p2btn2,p2btn3)
}
/////////=======================================================================================================================
/////////=======================================================================================================================
/////////=======================================================================================================================
/////////=======================================================================================================================
/////////=======================================================================================================================
/////////=======================================================================================================================
/////////=======================================================================================================================
/////////=======================================================================================================================
/////////=======================================================================================================================


/*! npm.im/iphone-inline-video 2.2.2 */
var enableInlineVideo = (function () {
'use strict';

/*! npm.im/intervalometer */
function intervalometer(cb, request, cancel, requestParameter) {
	var requestId;
	var previousLoopTime;
	function loop(now) {
		// must be requested before cb() because that might call .stop()
		requestId = request(loop, requestParameter);

		// called with "ms since last call". 0 on start()
		cb(now - (previousLoopTime || now));

		previousLoopTime = now;
	}
	return {
		start: function start() {
			if (!requestId) { // prevent double starts
				loop(0);
			}
		},
		stop: function stop() {
			cancel(requestId);
			requestId = null;
			previousLoopTime = 0;
		}
	};
}

function frameIntervalometer(cb) {
	return intervalometer(cb, requestAnimationFrame, cancelAnimationFrame);
}

function preventEvent(element, eventName, test) {
	function handler(e) {
		if (!test || test(element, eventName)) {
			e.stopImmediatePropagation();
			// // console.log(eventName, 'prevented on', element);
		}
	}
	element.addEventListener(eventName, handler);

	// Return handler to allow to disable the prevention. Usage:
	// const preventionHandler = preventEvent(el, 'click');
	// el.removeEventHandler('click', preventionHandler);
	return handler;
}

function proxyProperty(object, propertyName, sourceObject, copyFirst) {
	function get() {
		return sourceObject[propertyName];
	}
	function set(value) {
		sourceObject[propertyName] = value;
	}

	if (copyFirst) {
		set(object[propertyName]);
	}

	Object.defineProperty(object, propertyName, {get: get, set: set});
}

function proxyEvent(object, eventName, sourceObject) {
	sourceObject.addEventListener(eventName, function () { return object.dispatchEvent(new Event(eventName)); });
}

function dispatchEventAsync(element, type) {
	Promise.resolve().then(function () {
		element.dispatchEvent(new Event(type));
	});
}

var iOS8or9 = typeof document === 'object' && 'object-fit' in document.head.style && !matchMedia('(-webkit-video-playable-inline)').matches;

var IIV = 'bfred-it:iphone-inline-video';
var IIVEvent = 'bfred-it:iphone-inline-video:event';
var IIVPlay = 'bfred-it:iphone-inline-video:nativeplay';
var IIVPause = 'bfred-it:iphone-inline-video:nativepause';

/**
 * UTILS
 */

function getAudioFromVideo(video) {
	var audio = new Audio();
	proxyEvent(video, 'play', audio);
	proxyEvent(video, 'playing', audio);
	proxyEvent(video, 'pause', audio);
	audio.crossOrigin = video.crossOrigin;

	// 'data:' causes audio.networkState > 0
	// which then allows to keep <audio> in a resumable playing state
	// i.e. once you set a real src it will keep playing if it was if .play() was called
	audio.src = video.src || video.currentSrc || 'data:';

	// // if (audio.src === 'data:') {
	//   TODO: wait for video to be selected
	// // }
	return audio;
}

var lastRequests = [];
var requestIndex = 0;
var lastTimeupdateEvent;

function setTime(video, time, rememberOnly) {
	// Allow one timeupdate event every 200+ ms
	if ((lastTimeupdateEvent || 0) + 200 < Date.now()) {
		video[IIVEvent] = true;
		lastTimeupdateEvent = Date.now();
	}
	if (!rememberOnly) {
		video.currentTime = time;
	}
	lastRequests[++requestIndex % 3] = time * 100 | 0 / 100;
}

function isPlayerEnded(player) {
	return player.driver.currentTime >= player.video.duration;
}

function update(timeDiff) {
	var player = this;
	// // console.log('update', player.video.readyState, player.video.networkState, player.driver.readyState, player.driver.networkState, player.driver.paused);
	if (player.video.readyState >= player.video.HAVE_FUTURE_DATA) {
		if (!player.hasAudio) {
			player.driver.currentTime = player.video.currentTime + ((timeDiff * player.video.playbackRate) / 1000);
			if (player.video.loop && isPlayerEnded(player)) {
				player.driver.currentTime = 0;
			}
		}
		setTime(player.video, player.driver.currentTime);
	} else if (player.video.networkState === player.video.NETWORK_IDLE && player.video.buffered.length === 0) {
		// This should happen when the source is available but:
		// - it's potentially playing (.paused === false)
		// - it's not ready to play
		// - it's not loading
		// If it hasAudio, that will be loaded in the 'emptied' handler below
		player.video.load();
		// // console.log('Will load');
	}

	// // console.assert(player.video.currentTime === player.driver.currentTime, 'Video not updating!');

	if (player.video.ended) {
		delete player.video[IIVEvent]; // Allow timeupdate event
		player.video.pause(true);
	}
}

/**
 * METHODS
 */

function play() {
	// // console.log('play');
	var video = this;
	var player = video[IIV];

	// If it's fullscreen, use the native player
	if (video.webkitDisplayingFullscreen) {
		video[IIVPlay]();
		return;
	}

	if (player.driver.src !== 'data:' && player.driver.src !== video.src) {
		// // console.log('src changed on play', video.src);
		setTime(video, 0, true);
		player.driver.src = video.src;
	}

	if (!video.paused) {
		return;
	}
	player.paused = false;

	if (video.buffered.length === 0) {
		// .load() causes the emptied event
		// the alternative is .play()+.pause() but that triggers play/pause events, even worse
		// possibly the alternative is preventing this event only once
		video.load();
	}

	player.driver.play();
	player.updater.start();

	if (!player.hasAudio) {
		dispatchEventAsync(video, 'play');
		if (player.video.readyState >= player.video.HAVE_ENOUGH_DATA) {
			// // console.log('onplay');
			dispatchEventAsync(video, 'playing');
		}
	}
}
function pause(forceEvents) {
	// // console.log('pause');
	var video = this;
	var player = video[IIV];

	player.driver.pause();
	player.updater.stop();

	// If it's fullscreen, the developer the native player.pause()
	// This is at the end of pause() because it also
	// needs to make sure that the simulation is paused
	if (video.webkitDisplayingFullscreen) {
		video[IIVPause]();
	}

	if (player.paused && !forceEvents) {
		return;
	}

	player.paused = true;
	if (!player.hasAudio) {
		dispatchEventAsync(video, 'pause');
	}

	// Handle the 'ended' event only if it's not fullscreen
	if (video.ended && !video.webkitDisplayingFullscreen) {
		video[IIVEvent] = true;
		dispatchEventAsync(video, 'ended');
	}
}

/**
 * SETUP
 */

function addPlayer(video, hasAudio) {
	var player = {};
	video[IIV] = player;
	player.paused = true; // Track whether 'pause' events have been fired
	player.hasAudio = hasAudio;
	player.video = video;
	player.updater = frameIntervalometer(update.bind(player));

	if (hasAudio) {
		player.driver = getAudioFromVideo(video);
	} else {
		video.addEventListener('canplay', function () {
			if (!video.paused) {
				// // console.log('oncanplay');
				dispatchEventAsync(video, 'playing');
			}
		});
		player.driver = {
			src: video.src || video.currentSrc || 'data:',
			muted: true,
			paused: true,
			pause: function () {
				player.driver.paused = true;
			},
			play: function () {
				player.driver.paused = false;
				// Media automatically goes to 0 if .play() is called when it's done
				if (isPlayerEnded(player)) {
					setTime(video, 0);
				}
			},
			get ended() {
				return isPlayerEnded(player);
			}
		};
	}

	// .load() causes the emptied event
	video.addEventListener('emptied', function () {
		// // console.log('driver src is', player.driver.src);
		var wasEmpty = !player.driver.src || player.driver.src === 'data:';
		if (player.driver.src && player.driver.src !== video.src) {
			// // console.log('src changed to', video.src);
			setTime(video, 0, true);
			player.driver.src = video.src;
			// Playing videos will only keep playing if no src was present when .play()’ed
			if (wasEmpty || (!hasAudio && video.autoplay)) {
				player.driver.play();
			} else {
				player.updater.stop();
			}
		}
	}, false);

	// Stop programmatic player when OS takes over
	video.addEventListener('webkitbeginfullscreen', function () {
		if (!video.paused) {
			// Make sure that the <audio> and the syncer/updater are stopped
			video.pause();

			// Play video natively
			video[IIVPlay]();
		} else if (hasAudio && player.driver.buffered.length === 0) {
			// If the first play is native,
			// the <audio> needs to be buffered manually
			// so when the fullscreen ends, it can be set to the same current time
			player.driver.load();
		}
	});
	if (hasAudio) {
		video.addEventListener('webkitendfullscreen', function () {
			// Sync audio to new video position
			player.driver.currentTime = video.currentTime;
			// // console.assert(player.driver.currentTime === video.currentTime, 'Audio not synced');
		});

		// Allow seeking
		video.addEventListener('seeking', function () {
			if (lastRequests.indexOf(video.currentTime * 100 | 0 / 100) < 0) {
				// // console.log('User-requested seeking');
				player.driver.currentTime = video.currentTime;
			}
		});
	}
}

function preventWithPropOrFullscreen(el) {
	var isAllowed = el[IIVEvent];
	delete el[IIVEvent];
	return !el.webkitDisplayingFullscreen && !isAllowed;
}

function overloadAPI(video) {
	var player = video[IIV];
	video[IIVPlay] = video.play;
	video[IIVPause] = video.pause;
	video.play = play;
	video.pause = pause;
	proxyProperty(video, 'paused', player.driver);
	proxyProperty(video, 'muted', player.driver, true);
	proxyProperty(video, 'playbackRate', player.driver, true);
	proxyProperty(video, 'ended', player.driver);
	proxyProperty(video, 'loop', player.driver, true);

	// IIV works by seeking 60 times per second.
	// These events are now useless.
	preventEvent(video, 'seeking', function (el) { return !el.webkitDisplayingFullscreen; });
	preventEvent(video, 'seeked', function (el) { return !el.webkitDisplayingFullscreen; });

	// Limit timeupdate events
	preventEvent(video, 'timeupdate', preventWithPropOrFullscreen);

	// Prevent occasional native ended events
	preventEvent(video, 'ended', preventWithPropOrFullscreen);
}

function enableInlineVideo(video, opts) {
	if ( opts === void 0 ) opts = {};

	// Stop if already enabled
	if (video[IIV]) {
		return;
	}

	// Allow the user to skip detection
	if (!opts.everywhere) {
		// Only iOS8 and 9 are supported
		if (!iOS8or9) {
			return;
		}

		// Stop if it's not an allowed device
		if (!(opts.iPad || opts.ipad ? /iPhone|iPod|iPad/ : /iPhone|iPod/).test(navigator.userAgent)) {
			return;
		}
	}

	// Try to pause
	video.pause();

	// Prevent autoplay.
	// An non-started autoplaying video can't be .pause()'d
	var willAutoplay = video.autoplay;
	video.autoplay = false;

	addPlayer(video, !video.muted);
	overloadAPI(video);
	video.classList.add('IIV');

	// Autoplay
	if (video.muted && willAutoplay) {
		video.play();
		video.addEventListener('playing', function restoreAutoplay() {
			video.autoplay = true;
			video.removeEventListener('playing', restoreAutoplay);
		});
	}

	if (!/iPhone|iPod|iPad/.test(navigator.platform)) {
		console.warn('iphone-inline-video is not guaranteed to work in emulated environments');
	}
}

return enableInlineVideo;

}());
