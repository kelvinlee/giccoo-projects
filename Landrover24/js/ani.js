
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
	videoA[3].play()
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
		// var _video = document.createElement("video");
		// _video.preload = "auto";
		// _video.loop = true;              // enable looping
		// _video.autoplay=false
		// _video.setAttribute('playsinline','');
		// _video.setAttribute('webkit-playsinline','');//makeVideoPlayableInline(texture.baseTexture.source, false);
		// _video.src = "http://image.giccoo.com/projects/Landover24/video/"+i+".mp4";
		// videoA.push(_video)
		
		// var _v=PIXI.Texture.fromVideo(_video)
		// var _videoSprite=new PIXI.Sprite(_v)
		// _v.baseTexture.autoPlay = false;
		
		// videoSpriteA.push(_videoSprite)
		// page2.addChild(_videoSprite)
		// _videoSprite.x=100*i




		var video = document.createElement('video');
		video.setAttribute('playsinline','');
		video.setAttribute('webkit-playsinline','');

		var src = document.createElement('source');
		src.setAttribute('src', "http://image.giccoo.com/projects/Landover24/video/"+i+".mp4");
		src.setAttribute('type', 'video/mp4');

		video.appendChild(src);
		video.loop=true



		console.log(video);

		videoA.push(video)


// create a video texture from a path
		var texture = PIXI.Texture.fromVideo(video);
		texture.baseTexture.autoPlay = false;
		enableInlineVideo(texture.baseTexture.source, false);

		// window.document.addEventListener( 'mousedown', function() {
  //   	texture.baseTexture.source.play();
		// });

		// window.document.addEventListener( 'touchstart', function() {
  //   	texture.baseTexture.source.play();
		// });

		var videoSprite = new PIXI.Sprite(texture);
		videoSprite.x=(i-1)*100
		// videoSprite.width = renderer.width;
		// videoSprite.height = renderer.height;
		page2.addChild(videoSprite);

	};
}



/////////=======


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
