"use strict";function _defineProperty(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,i){return t&&_defineProperties(e.prototype,t),i&&_defineProperties(e,i),e}var ANIMATION_END_NAME,ANIMATION_END_NAMES,AnimatedSprite,Container,Graphics,IsPC,ParticleContainer,Spr,Sprite,TRANSITION_END_NAME,TRANSITION_END_NAMES,Text,Texture,TextureCache,TrueH,TrueW,UGC,VENDORS,_cache,_public,_runTime,_second,_startCache,_testTime,apiLink,apiUrl,autoDetectRenderer,css3Prefix,getId,getTe,i,imageurl,_init,j,len1,loadWechatConfig,loader,loading,mTestElement,main,musicIconCache,musicLineCache,neteaseShareImage,random,resource,resources,sended,sys,ugc,ugcCache;for(VENDORS=["Moz","webkit","ms","O"],TRANSITION_END_NAMES={Moz:"transitionend",webkit:"webkitTransitionEnd",ms:"MSTransitionEnd",O:"oTransitionEnd"},ANIMATION_END_NAMES={Moz:"animationend",webkit:"webkitAnimationEnd",ms:"MSAnimationEnd",O:"oAnimationEnd"},mTestElement=document.createElement("div"),j=0,len1=VENDORS.length;j<len1&&!((css3Prefix=i=VENDORS[j])+"Transition"in mTestElement.style);j++)css3Prefix=!1;css3Prefix&&(TRANSITION_END_NAME=TRANSITION_END_NAMES[css3Prefix],ANIMATION_END_NAME=ANIMATION_END_NAMES[css3Prefix]),loadWechatConfig=function e(){var t,i,n;n=encodeURIComponent(window.location.href.split("#")[0]),(t=document.createElement("script")).src="//api.giccoo.com/api/config?url="+n,(i=document.getElementsByTagName("script")[0]).parentNode.insertBefore(t,i)},IsPC=function e(){var t,i,n,o;for(n=navigator.userAgent,t=new Array("Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"),i=!0,o=0;o<t.length;){if(0<n.indexOf(t[o])){i=!1;break}o++}return i},Vue.component("multiplayer",{template:'<div class="player" :class="{play: playing, pause: !playing}" @click="change"> <div class="icon-play" :class="{play: playing, pause: !playing}"> <svg v-if="!icon" v-show="!playing" height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ytp-id-39"></use><path class="ytp-svg-fill" d="M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z"></path></svg> <svg v-if="!icon" v-show="playing" height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ytp-id-40"></use><path class="ytp-svg-fill" d="M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z"></path></svg> </div> <audio v-for="link in src" :src="link" :autoplay="autoplay" :preload="preload" :loop="loop"></audio> <img v-if="thumb" :src="thumb" /> <slot></slot> </div>',data:function e(){return{playing:!1,stoped:!1}},props:{name:{default:!1},src:{default:["./mp3/bgm.mp3"]},thumb:{default:!1},autoplay:{default:!1},preload:{default:!1},loop:{default:!1},callback:{default:!1},icon:{default:!1},id:{default:0}},methods:{play:function e(t){var i=0<arguments.length&&void 0!==t?t:0,n;return null!=this.audio[i]&&(n=this.$emit("play",this),// @audio.load()
this.pauseAll(),this.audio[i].play(),this.id=i,this.playing=!0)},played:function e(){return this.playing=!0},pause:function e(){var t;// @.pauseAll()
return t=this.$emit("pause",this),this.playing=!1},ended:function e(){return this.playing=!1},pauseAll:function e(){var t,i,n,o,r;for(r=[],i=0,n=(o=this.audio).length;i<n;i++)t=o[i],r.push(t.pause());return r},change:function e(){return this.playing?(this.pauseAll(),this.stoped=!0):(this.audio[this.id].play(),this.stoped=!1)}},
// computed:
mounted:function e(t){var i,n,o,r,s;// console.log @name
for(this.audio=this.$el.getElementsByTagName("audio"),// console.log @$el.getElementsByTagName("audio")
// console.log @audio
// @audioOther = @$el.children[2]
s=[],n=0,o=(r=this.audio).length;n<o;n++)(i=r[n]).addEventListener("pause",this.pause.bind(this)),i.addEventListener("play",this.played.bind(this)),s.push(i.addEventListener("ended",this.ended.bind(this)));return s}}),// @audio.play()
// console.log @audio,@audioOther,@playing
Vue.component("mp4",{template:'<div class="video"> <div v-if="andriod" class="icon-play" :class="{hide: playing, pause: !playing}" @click="change"> <div class="icon"> <svg v-show="!playing" height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ytp-id-39"></use><path class="ytp-svg-fill" d="M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z"></path></svg> <svg v-show="playing" height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ytp-id-40"></use><path class="ytp-svg-fill" d="M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z"></path></svg> </div> </div> \x3c!--  --\x3e <video v-if="!playsinline" :width="width" :height="height" :controls="controls" :src="src" :id="videoid" :poster="poster"></video> <video v-if="playsinline" :class="{hide: andriod}" :width="width" :height="height" :controls="controls" :src="src" :id="videoid" :poster="poster" x5-video-player-type="h5" x5-video-player-fullscreen="true" x-webkit-airplay="allow" webkit-playsinline playsinline></video> <canvas v-if="andriod" :id="canvasid" :width="width" :height="height" @click="change"></canvas> </div>',data:function e(){return{playing:!1,stoped:!1,andriod:!1}},props:{playsinline:{default:!1},controls:{default:!1},videoid:{default:"video"},src:{default:"./mp3/bgm.mp3"},autoplay:{default:!1},preload:{default:!1},loop:{default:!1},poster:{default:!1},width:{default:1920},height:{default:1080}},computed:{canvasid:function e(){return this.videoid+"-canvas"}},
// iconNow: ->
// 	return if !@playing then @iconPlay else @iconStop
methods:{play:function e(){return this.video&&this.video.play(),this.playing=!0,this.$emit("play",{playing:!0})},pause:function e(){return this.playing=!1,this.$emit("pause",{playing:!1})},stop:function e(){return this.video&&this.video.pause(),this.$emit("stop",{playing:!1})},ended:function e(){return this.playing=!1},change:function e(){return this.playing?(this.video.pause(),this.stoped=!0):(this.video.play(),this.stoped=!1,this.animate())},initCanvas:function e(){var t,i,n;if(t=document.getElementById(this.canvasid),i=t.getContext("2d"),this.poster)return(n=new Image).src=this.poster,n.onload=function(){return i.drawImage(n,0,0,t.width,t.height)}},animate:function e(){var t,i;return!!(t=document.getElementById(this.canvasid))&&((i=t.getContext("2d")).drawImage(this.video,0,0,t.width,t.height),this.stoped?void 0:requestAnimationFrame(this.animate.bind(this)))}},mounted:function e(t){var i=this,n,o;if(n=-1<(o=navigator.userAgent).indexOf("Android")||-1<o.indexOf("Adr"),this.video=document.getElementById(this.videoid),this.video.addEventListener("pause",this.pause.bind(this)),this.video.addEventListener("playing",this.play.bind(this)),this.video.addEventListener("ended",this.ended.bind(this)),n&&this.playsinline)return this.andriod=!0,setTimeout(function(){return i.initCanvas()},20)}}),Container=PIXI.Container,ParticleContainer=PIXI.ParticleContainer,autoDetectRenderer=PIXI.autoDetectRenderer,loader=PIXI.loader,resources=PIXI.loader.resources,TextureCache=PIXI.utils.TextureCache,Texture=PIXI.Texture,Sprite=PIXI.Sprite,Graphics=PIXI.Graphics,resource=PIXI.loader.resources,Text=PIXI.Text,AnimatedSprite=PIXI.extras.AnimatedSprite,Spr=function e(t){return new Sprite(getTe(t))},getTe=function e(t){return resource[t].texture},getId=function e(t,i){return loader.resources[i].textures[t]},// for fix ios 8 less
null==Number.isInteger&&(Number.isInteger=function(e){return 0<=e}),String.prototype.gblen=function(){var e,t,n;for(i=e=t=0,n=this.length;0<=n?e<n:n<e;i=0<=n?++e:--e)127<this.charCodeAt(i)||94===this.charCodeAt(i)?t+=2:t++;return t},random=1+parseInt(5*Math.random()),UGC=function(){
// imageList = []
var e=
/* */
function(){function t(e){_classCallCheck(this,t),this.opts={el:"main",w:750,h:1314,trueH:1314,count:6,speed:1,alpha:.8,defaultShow:!0,class:"",fillColor:6737151,callback:function e(){}},this.opts=Object.assign(this.opts,e),this.default.h=document.documentElement.clientHeight,this.default.w=document.documentElement.clientWidth,this.default.ratio=this.opts.w/this.default.w,this.app=new PIXI.Application({width:this.opts.w,height:this.opts.h,transparent:!0,preserveDrawingBuffer:!0,forceCanvas:!0}),null!=this.opts.class&&""!==this.opts.class&&(this.app.view.className=this.opts.class),this.stage=this.app.stage,document.getElementById(this.opts.el).appendChild(this.app.view),// console.log "imageList:",imageList.length
PIXI.loader.add(imageList).use(this.loaditem.bind(this)).load(this.build.bind(this)),this.default.MH=.65*this.opts.h}return _createClass(t,[{key:"loaditem",value:function e(){// console.log "load:",@.loadNumber,loading.progressOn,@.loadNumber is imageList.length
if(this.loadNumber++,loading.progressOn=parseInt(this.loadNumber/imageList.length*100),this.loadNumber===imageList.length)return buildUGC.bind(this).call(),this.opts.callback()}// @.init()
// console.log "aa"
// @.stage.addChild Spr(_CDN+"img/texture.jpg")
},{key:"build",value:function e(){return console.log("builded"),buildUGC.bind(this).call(),this.opts.callback()}// @.init()
},{key:"firstTime",value:function e(t,i){var n=0<arguments.length&&void 0!==t?t:0,o=1<arguments.length&&void 0!==i?i:0,r;return null==this.long&&(console.log("move",n),this.longqrcode=new Spr(_CDN+"img/qr.jpg"),r=4*this.opts.h-20+this.longqrcode.height-Math.abs(n),this.longBG=new Graphics,this.longBG.beginFill(16777215),this.longBG.drawRect(0,0,this.opts.w,r),this.long=new PIXI.Application({width:this.opts.w,height:r,transparent:!0,preserveDrawingBuffer:!0,forceCanvas:!0}),this.longC=new Container,this.longC.y=0,this.cover=new Spr(_CDN+"img/colora".concat(o,".png")),this.long.stage.addChild(this.longBG,this.longC,this.cover))}},{key:"takeUGC",value:function e(t){var i=this,n=0<arguments.length&&void 0!==t?t:0,o,r;return this.app.renderer.render(this.app.stage),o=this.app.view.toDataURL(),(r=new PIXI.Sprite.fromImage(o)).y=this.longC.height+n,2===this.y&&(
// console.log "move:",move,page1.y
this.cover.y=this.longC.height-this.cover.height),r.texture.baseTexture.on("loaded",function(){return i.longC.addChild(r),i.sendUGC()}),this.y++}},{key:"sendUGC",value:function e(){return 4<=this.y&&(this.longqrcode.y=this.longC.height,this.long.stage.addChild(this.longqrcode)),this.long.renderer.render(this.long.stage)}}]),t}();return e.prototype.builded=!1,e.prototype.default={w:320,h:160,running:!0},e.prototype.started=!1,e.prototype.over=!1,e.prototype.online=!1,e.prototype.blocks=[],e.prototype.bottles=[],e.prototype.enemys=[],e.prototype.lights=[],e.prototype.dom={},e.prototype._progress=0,e.prototype.lineMoving=!1,e.prototype.startTime=null,e.prototype.loadNumber=0,e.prototype.y=0,e}.call(void 0),// main.share()
loadWechatConfig=function e(){var t,i,n;n=encodeURIComponent(window.location.href.split("#")[0]),(t=document.createElement("script")).src="//api.giccoo.com/api/config?url="+n,(i=document.getElementsByTagName("script")[0]).parentNode.insertBefore(t,i)},IsPC=function e(){var t,i,n,o;for(n=navigator.userAgent,t=new Array("Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"),i=!0,o=0;o<t.length;){if(0<n.indexOf(t[o])){i=!1;break}o++}return i},Vue.component("mp4",{template:'<div class="video"> <div v-if="andriod" class="icon-play" :class="{hide: playing, pause: !playing}" @click="change"> <div class="icon"> <svg v-show="!playing" height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ytp-id-39"></use><path class="ytp-svg-fill" d="M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z"></path></svg> <svg v-show="playing" height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ytp-id-40"></use><path class="ytp-svg-fill" d="M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z"></path></svg> </div> </div> \x3c!--  --\x3e <video v-if="!playsinline" :width="width" :height="height" :controls="controls" :src="src" :id="videoid" :poster="poster"></video> <video v-if="playsinline" :class="{hide: andriod}" :width="width" :height="height" :controls="controls" :src="src" :id="videoid" :poster="poster" x5-video-player-type="h5" x5-video-player-fullscreen="true" x-webkit-airplay="allow" webkit-playsinline playsinline></video> <canvas v-if="andriod" :id="canvasid" :width="width" :height="height" @click="change"></canvas> </div>',data:function e(){return{playing:!1,stoped:!1,andriod:!1}},props:{playsinline:{default:!1},controls:{default:!1},videoid:{default:"video"},src:{default:"./mp3/bgm.mp3"},autoplay:{default:!1},preload:{default:!1},loop:{default:!1},poster:{default:!1},width:{default:1920},height:{default:1080}},computed:{canvasid:function e(){return this.videoid+"-canvas"}},
// iconNow: ->
// 	return if !@playing then @iconPlay else @iconStop
methods:{play:function e(){return this.video&&this.video.play(),this.playing=!0,this.$emit("play",{playing:!0})},pause:function e(){return this.playing=!1,this.$emit("pause",{playing:!1})},stop:function e(){return this.video&&this.video.pause(),this.$emit("stop",{playing:!1})},ended:function e(){return this.playing=!1},change:function e(){return this.playing?(this.video.pause(),this.stoped=!0):(this.video.play(),this.stoped=!1,this.animate())},initCanvas:function e(){var t,i,n;if(t=document.getElementById(this.canvasid),i=t.getContext("2d"),this.poster)return(n=new Image).src=this.poster,n.onload=function(){return i.drawImage(n,0,0,t.width,t.height)}},animate:function e(){var t,i;return!!(t=document.getElementById(this.canvasid))&&((i=t.getContext("2d")).drawImage(this.video,0,0,t.width,t.height),this.stoped?void 0:requestAnimationFrame(this.animate.bind(this)))}},mounted:function e(t){var i=this,n,o;if(n=-1<(o=navigator.userAgent).indexOf("Android")||-1<o.indexOf("Adr"),this.video=document.getElementById(this.videoid),this.video.addEventListener("pause",this.pause.bind(this)),this.video.addEventListener("playing",this.play.bind(this)),this.video.addEventListener("ended",this.ended.bind(this)),n&&this.playsinline)return this.andriod=!0,setTimeout(function(){return i.initCanvas()},20)}}),String.prototype.gblen=function(){var e,t,n;for(i=e=t=0,n=this.length;0<=n?e<n:n<e;i=0<=n?++e:--e)127<this.charCodeAt(i)||94===this.charCodeAt(i)?t+=2:t++;return t},IsPC=function e(){var t,i,n,o;for(n=navigator.userAgent,t=new Array("Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"),i=!0,o=0;o<t.length;){if(0<n.indexOf(t[o])){i=!1;break}o++}return i},Container=PIXI.Container,ParticleContainer=PIXI.ParticleContainer,autoDetectRenderer=PIXI.autoDetectRenderer,loader=PIXI.loader,resources=PIXI.loader.resources,TextureCache=PIXI.utils.TextureCache,Texture=PIXI.Texture,Sprite=PIXI.Sprite,Graphics=PIXI.Graphics,resource=PIXI.loader.resources,Text=PIXI.Text,AnimatedSprite=PIXI.extras.AnimatedSprite,Spr=function e(t){return new Sprite(getTe(t))},getTe=function e(t){return resource[t].texture},getId=function e(t,i){return loader.resources[i].textures[t]},// for fix ios 8 less
null==Number.isInteger&&(Number.isInteger=function(e){return 0<=e}),loadWechatConfig=function e(){var t,i,n;n=encodeURIComponent(window.location.href.split("#")[0]),(t=document.createElement("script")).src="//api.giccoo.com/api/config?url="+n,(i=document.getElementsByTagName("script")[0]).parentNode.insertBefore(t,i)},Vue.component("mp4",{template:'<div class="video"> <div v-if="andriod" class="icon-play" :class="{hide: playing, pause: !playing}" @click="change"> <div class="icon"> <svg v-show="!playing" height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ytp-id-39"></use><path class="ytp-svg-fill" d="M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z"></path></svg> <svg v-show="playing" height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ytp-id-40"></use><path class="ytp-svg-fill" d="M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z"></path></svg> </div> </div> \x3c!--  --\x3e <video v-if="!playsinline" :width="width" :height="height" :controls="controls" :src="src" :id="videoid" :poster="poster"></video> <video v-if="playsinline" :class="{hide: andriod}" :width="width" :height="height" :controls="controls" :src="src" :id="videoid" :poster="poster" x5-video-player-type="h5" x5-video-player-fullscreen="true" x-webkit-airplay="allow" webkit-playsinline playsinline></video> <canvas v-if="andriod" :id="canvasid" :width="width" :height="height" @click="change"></canvas> </div>',data:function e(){return{playing:!1,stoped:!1,andriod:!1}},props:{playsinline:{default:!1},controls:{default:!1},videoid:{default:"video"},src:{default:"./mp3/bgm.mp3"},autoplay:{default:!1},preload:{default:!1},loop:{default:!1},poster:{default:!1},width:{default:1920},height:{default:1080}},computed:{canvasid:function e(){return this.videoid+"-canvas"}},
// iconNow: ->
// 	return if !@playing then @iconPlay else @iconStop
methods:{play:function e(){return this.video&&this.video.play(),this.playing=!0,this.$emit("play",{playing:!0})},pause:function e(){return this.playing=!1,this.$emit("pause",{playing:!1})},stop:function e(){return this.video&&this.video.pause(),this.$emit("stop",{playing:!1})},ended:function e(){return this.playing=!1},change:function e(){return this.playing?(this.video.pause(),this.stoped=!0):(this.video.play(),this.stoped=!1,this.animate())},initCanvas:function e(){var t,i,n;if(t=document.getElementById(this.canvasid),i=t.getContext("2d"),this.poster)return(n=new Image).src=this.poster,n.onload=function(){return i.drawImage(n,0,0,t.width,t.height)}},animate:function e(){var t,i;return!!(t=document.getElementById(this.canvasid))&&((i=t.getContext("2d")).drawImage(this.video,0,0,t.width,t.height),this.stoped?void 0:requestAnimationFrame(this.animate.bind(this)))}},mounted:function e(t){var i=this,n,o;if(n=-1<(o=navigator.userAgent).indexOf("Android")||-1<o.indexOf("Adr"),this.video=document.getElementById(this.videoid),this.video.addEventListener("pause",this.pause.bind(this)),this.video.addEventListener("playing",this.play.bind(this)),this.video.addEventListener("ended",this.ended.bind(this)),n&&this.playsinline)return this.andriod=!0,setTimeout(function(){return i.initCanvas()},20)}}),Container=PIXI.Container,ParticleContainer=PIXI.ParticleContainer,autoDetectRenderer=PIXI.autoDetectRenderer,loader=PIXI.loader,resources=PIXI.loader.resources,TextureCache=PIXI.utils.TextureCache,Texture=PIXI.Texture,Sprite=PIXI.Sprite,Graphics=PIXI.Graphics,resource=PIXI.loader.resources,Text=PIXI.Text,AnimatedSprite=PIXI.extras.AnimatedSprite,Spr=function e(t){return new Sprite(getTe(t))},getTe=function e(t){return resource[t].texture},getId=function e(t,i){return loader.resources[i].textures[t]},// for fix ios 8 less
null==Number.isInteger&&(Number.isInteger=function(e){return 0<=e}),Container=PIXI.Container,ParticleContainer=PIXI.ParticleContainer,autoDetectRenderer=PIXI.autoDetectRenderer,loader=PIXI.loader,resources=PIXI.loader.resources,TextureCache=PIXI.utils.TextureCache,Texture=PIXI.Texture,Sprite=PIXI.Sprite,Graphics=PIXI.Graphics,resource=PIXI.loader.resources,Text=PIXI.Text,AnimatedSprite=PIXI.extras.AnimatedSprite,Spr=function e(t){return new Sprite(getTe(t))},getTe=function e(t){return resource[t].texture},getId=function e(t,i){return loader.resources[i].textures[t]},// for fix ios 8 less
null==Number.isInteger&&(Number.isInteger=function(e){return 0<=e}),Container=PIXI.Container,ParticleContainer=PIXI.ParticleContainer,autoDetectRenderer=PIXI.autoDetectRenderer,loader=PIXI.loader,resources=PIXI.loader.resources,TextureCache=PIXI.utils.TextureCache,Texture=PIXI.Texture,Sprite=PIXI.Sprite,Graphics=PIXI.Graphics,resource=PIXI.loader.resources,Text=PIXI.Text,AnimatedSprite=PIXI.extras.AnimatedSprite,Spr=function e(t){return new Sprite(getTe(t))},getTe=function e(t){return resource[t].texture},getId=function e(t,i){return loader.resources[i].textures[t]},// for fix ios 8 less
null==Number.isInteger&&(Number.isInteger=function(e){return 0<=e}),// @codekit-prepend "coffee/css3Prefix"
// @codekit-prepend "../../libs/coffee/loadWechatConfig"
// @codekit-prepend "../../libs/coffee/IsPC"
// @codekit-prepend "../../libs/vue/vue-multi-player"
// @codekit-prepend "../../libs/vue/vue-video"
// @codekit-prepend "../../libs/coffee/pixi-base"
// @codekit-prepend "../../libs/coffee/String"
// @codekit-prepend "./UGC"
axios.defaults.withCredentials=!0,TrueW=640,TrueH=1138,imageurl="//api.giccoo.com/api/upload/image64/",apiUrl="//api.giccoo.com/lenovo",// apiLink = "//localhost:3000/"
apiLink="//g.giccoo.com/",// apiLink = "http://192.168.3.53:3000/"
// apiUrl = "http://localhost:8881/Levi"
// /api/activity/lorealysl/userinfo
main={},sys="",sended=[!(loading={}),!(_public={})],_runTime=_startCache=_cache=ugcCache=musicIconCache=musicLineCache=ugc=null,_testTime=_second=0,neteaseShareImage=function e(){var t,i,n;return n="刻录你的2018",t="https://image.giccoo.com/upload/".concat(main.folder,"/")+main.shareImageLink+"@!large",i="https://activity.music.163.com/lenovo/",// console.log picUrl,"orpheus://sharepic?picUrl="+encodeURIComponent(picUrl)+"&shareUrl="+encodeURIComponent(redirectUrl)+"&wbDesc="+encodeURIComponent(title1)+"&qqDesc="+encodeURIComponent(title1)
// window.location.href = "orpheus://sharepic?picUrl="+encodeURIComponent(picUrl)+"&shareUrl="+encodeURIComponent(redirectUrl)+"&wbDesc="+encodeURIComponent(title1)+"&qqDesc="+encodeURIComponent(title1)
console.log("share href:",t),CloudMusic.sharePic({picUrl:t,text:n,link:i})},window.onload=function(){var e,t,i,n;return TrueH=document.documentElement.clientHeight,TrueW=document.documentElement.clientWidth,e=0,-1<window.navigator.userAgent.indexOf("NeteaseMusic")?(sys="NeteaseMusic",i={name:"YSL",title:"刻录你的2018",subTitle:" ",text:"",picUrl:"http://m.giccoo.com/ysl/img/ico.jpg",link:"http://m.giccoo.com/ysl/?share=wy"},CloudMusic.setShareData(i)):(
// CloudMusic.open('http://m.giccoo.com/ysl/')
// return false
loadWechatConfig(),wx.ready(function(){var e;return e={title:"刻录你的2018",desc:" ",link:"http://m.giccoo.com/ysl/?share=wx",imgUrl:"http://m.giccoo.com/ysl/img/ico.jpg",success:function e(){},
// alert "success"
cancel:function e(){}},// alert "cancel"
wx.onMenuShareTimeline(e),wx.onMenuShareAppMessage(e),wx.onMenuShareQQ(e),wx.onMenuShareWeibo(e)})),640<=TrueW&&(TrueW=640),1138<=TrueH&&(TrueH=1138),n=2*TrueH<1200,t=Math.ceil(TrueW/640*94/TrueH*100),TrueH=document.documentElement.clientHeight,TrueW=document.documentElement.clientWidth,_public=new Vue({el:"#public",data:{wy:"NeteaseMusic"===sys,wx:!1,note:!0,playing:!1,list:["./mp3/bgm-1.mp3","./mp3/bgm-2.mp3","./mp3/bgm-3.mp3"]},methods:{startGame:function e(){return this.note=!1}},mounted:function e(){return document.addEventListener("WeixinJSBridgeReady",function(){return _public.wx=!0})}}),// 	_public.note = false
// 	_public.$children[0].change()
loading=new Vue({el:"#loading",data:{w:TrueW,h:TrueH,biger:TrueW/TrueH<.55,smaller:n,progress:0,mounted:!1,progressOn:0,number:32743,oldnumber:32743,moved:!1,end:!1,cant:!0,offset:{y:0,deltaY:0}},methods:{start:function e(t){var i;return i="mousedown"===t.type?t:t.touches[0],this.offset.y=i.pageY,this.moved=!0},move:function e(t){var i,n;return!(!this.moved&&!this.cant)&&(i=(n="mousemove"===t.type?t:t.touches[0]).pageY-this.offset.y,// console.log @offset.deltaY
30<Math.abs(i)?this.next():void 0)},end:function e(t){return this.moved=!1},next:function e(){return!this.end&&!this.cant&&(console.log("end?"),this.moved=!1,this.end=!0,document.getElementById("load").className+=" fadeOut animated",main.mounted=!0,null!=main.init&&main.init(),setTimeout(function(){if(clearInterval(_startCache),document.getElementById("load").style.display="none",_public.wx)return _public.note=!1;// setTimeout ->
// 	_public.note = false if _public.wy
// ,3000
},520),setTimeout(function(){return getStart()},400))},get:function e(){var t=this;return axios.get("http://api.giccoo.com/count/get/yslnumber").then(function(e){
// console.log msg.data.info[0]
return t.number=e.data.info[0].count,t.oldnumber=e.data.info[0].count}).catch(function(e){return console.log("err:",e)})}},
// axios.get "//music.163.com/api/activity/lorealysl/userinfo"
// .then (msg)=>
// 	d = msg.data
// 	if d.code is 200
// 		main.userInfoGet = true
// 		main.userInfo = d.data
mounted:function e(){var t=this,i;// @.next() # for test
// setTimeout =>
// 	@.next()
// ,200
return this.mounted=!0,this.get(),i=setInterval(function(){if(t.progress+=3,t.progress>=t.progressOn&&(t.progress=t.progressOn),100<=t.progress)return t.progress=100,clearInterval(i),_cache=setTimeout(function(){
// @.next()
return t.cant=!1},2e3),_startCache=setInterval(function(){if(t.number+=1+Math.floor(2*Math.random()),t.number>t.oldnumber+1500)return clearInterval(_startCache)},350)},50)}}),_init()},_init=function e(){var t,i,n;return 640<=TrueW&&(
// console.log new Date().getTime() - startTime
// document.body.style.height = TrueH+"px"
// document.documentElement.className += " iphone4" if TrueW/TrueH >= 0.64
TrueW=640),1138<=TrueH&&(TrueH=1138),n=2*TrueH<1200,i=Math.ceil(TrueW/640*94/TrueH*100),TrueH=document.documentElement.clientHeight,TrueW=document.documentElement.clientWidth,console.log(TrueW,TrueH),main=new Vue({el:"#main",data:(t={w:TrueW,h:TrueH,biger:TrueW/TrueH<.55,smaller:n,afterH:n?1.15*TrueH-TrueW/750*1029:TrueH-TrueW/750*1029,wy:!1,mounted:!0,loading:!1,noteText:"",noteTime:null,noteShow:!1,pageInfoShow:!1,pageIndex:1,step:1,singerIndex:2,logo:!1,startgame:!1,folder:"",BGColor:"#ffffff",XY:"pageY",ugc:null,ugcsave:!1,ugcold:null,pushed:!1,shareImageLink:null,cache:null,audioId:null,v:null,pageNote:!1,recordStarting:!1,authorization:!1,norecord:!0,uploaded:!1,imageUpdate:!1,allowPopShow:!1,count:0,videoIndex:0,videoIndexOld:0,lr:!0,
// form:
// 	username: {id:"username", type: "input", label: "姓名", placeholder: "请填写姓名",value: ""}
// 	mobile: {id:"mobile", type: "number", label: "电话", placeholder: "请填写电话",value: ""}
// 	province: {id:"province", type: "select", label: "省份", link: "city", value: Object.keys(_citys)[0], options: _citys }
// 	city: {id:"city", type: "select", label: "城市", link: "dealer",value: Object.keys(_citys["请选择省份"])[0], options: _citys["请选择省份"] }
mask:1,text:"",nickname:"",mobile:"",musicLink:"",logId:"",openBtnShow:!0,default:{x:0},videoPop:!1,canUpload:!0,handCover:!1,last_update:0,lastX:0,lastY:0,lastZ:0,speed:4e3,maxSpeed:0,swing:!1,registerShow:!1,lotteryShow:!1,lotteryEndShow:!1,lotteryInfo:{id:null,random:null},regSubmited:!1,bgmShow:!1,giveUp:!1,gameEnd:!1,noreg:!1,ugcShow:!1,regH:100,ugcType:1,questionShow:!1,questionIndex:0,userInfoGet:!1,userInfo:{userId:0,nickName:"",playCount:0,songId:0,songName:"",longestPlayDayPeriod:0,playTotalTime:0}},_defineProperty(t,"nickname",""),_defineProperty(t,"message",""),_defineProperty(t,"messageIndex",1),_defineProperty(t,"messageInput",!1),_defineProperty(t,"musicName",""),_defineProperty(t,"white",!1),_defineProperty(t,"gameEnd",!1),_defineProperty(t,"formShow",!1),_defineProperty(t,"formBoxShow",!1),_defineProperty(t,"carIndex",1),_defineProperty(t,"shop",!1),t),
// watch:
methods:{send:function e(t){var i=this;return this.noteShow=!0,this.noteText=t,clearTimeout(this.noteTime),this.noteTime=setTimeout(function(){return i.noteShow=!1},2e3)},over:function e(){var t=this;return this.questionShow=!1,ugc.init(),setTimeout(function(){return t.gameEnd=!0},2e3)},regame:function e(){return window.location.reload()},dateText:function e(t){var i;return console.log(t.replace(/-/g,"/")),(i=new Date(t.replace(/-/g,"/"))).getFullYear()+"年"+(i.getMonth()+1)+"月"+i.getDate()+"日"},goUGC:function e(){return this.lotteryShow=!0},sharePost:function e(t){// @.ugc = ugc.app.view.toDataURL()
return this.gameEnd=!0,ugc.app.renderer.render(ugc.app.stage),this.ugc=t},restart:function e(){return window.location.reload()},goshare:function e(){
// goShare()
return this.share()},share:function e(){var t=this,i,n,o;return"undefined"!=typeof goFinal2&&null!==goFinal2&&goFinal2(),this.formBoxShow=!1,this.registerShow=!1,this.lotteryShow=!1,console.log("run share"),// ugc.qrcode.visible = true
ugc.long.renderer.render(ugc.long.stage),this.ugc=ugc.long.view.toDataURL(),o=this.ugc,this.wy?(i={image:o,folder:n="ysl"},this.folder=n,null==o?this.faild():!this.pushed&&(this.ugcsave?(neteaseShareImage(),"undefined"!=typeof shareDone&&null!==shareDone&&shareDone(),setTimeout(function(){return t.getLottery()},5e3),!0):axios.post(imageurl,i).then(function(e){return 200===e.data.recode?(main.success(e.data),t.ugcsave=!0):main.faild(e)}).catch(function(e){
// alert e
return main.faild(e)}))):(this.ugcShow=!0,setTimeout(function(){return t.getLottery()},5e3))},
// ugc.back()
// ugc.qrcode.visible = false
success:function e(t){var i=this;// 抽奖
// unless @.giveUp
return this.shareImageLink=t.info,this.pushed=!1,this.loading=!1,// ugc.back()
neteaseShareImage(),"undefined"!=typeof shareDone&&null!==shareDone&&shareDone(),setTimeout(function(){return i.getLottery()},5e3)},getLottery:function e(){return this.lotteryShow=!0},closeUGC:function e(){if(this.ugcShow=!1,"undefined"!=typeof shareDone&&null!==shareDone)return shareDone()},faild:function e(t){return this.pushed=!1,this.loading=!1},openSong:function e(t){
// id = [38576323,167740,139381,474567580,355992,28815250,109968,110083,163639,28785688,5271858,28838557,169794,27591641,5271855]
// CloudMusic.song(id[resultNum])
return window.location.href="https://music.163.com/#/song?id=".concat(t)},changeSond:function e(t){var i;return i=["./mp3/bgm-1.mp3","./mp3/bgm-2.mp3","./mp3/bgm-3.mp3"],this.bgmShow=!0,_public.$children[0].play(t)},
// _public.$children[0].src = list[id]
// setTimeout =>
// 	_public.$children[0].play()
// ,20
openMusic:function e(t){
// goList()
// _public.$children[0].pause()
return CloudMusic.isInApp()?CloudMusic.playlist(t):window.location.href="https://music.163.com/#/playlist?id=".concat(t)},openInApp:function e(){return CloudMusic.open("https://m.giccoo.com/ysl/")},goWeb:function e(){
// if _public.wx
// 	# window.location.href = "https://market.m.taobao.com/app/tb-source-app/shopact/pages/index?wh_weex=true&pathInfo=shop/activity&userId=3626596873&shopId=471050084&pageId=188694514&alisite=true"
// 	@.shop = true
// else
return window.location.href="https://market.m.taobao.com/app/tb-source-app/shopact/pages/index?wh_weex=true&pathInfo=shop/activity&userId=3626596873&shopId=471050084&pageId=188694514&alisite=true"},gobuy:function e(){return window.location.href="http://www.baidu.com"},init:function e(){},
// getStart()
startGame:function e(){
// console.log "start game"
return _public.note=!1}},
// watch:
mounted:function e(){var t,i,n;return TrueH=document.documentElement.clientHeight,TrueW=document.documentElement.clientWidth,"NeteaseMusic"===sys&&(this.wy=!0),t=2*TrueH*(2-2*TrueW/750+.01),// game = new Game({el: "game",h: h})
this.wy=CloudMusic.isInApp(),n=CloudMusic.getClientVersion().split("."),// @.getUserInfo (callback)=>
// console.log imageList,@.muiscType @.userInfo.styleTop
// @.ugcType = @.muiscType @.userInfo.styleTop
i=[],window.imageList=window.imageList.concat(i),ugc=new UGC({el:"ugc",w:640,h:640/TrueW*TrueH,callback:function e(){}}),console.log("h:",t)}})};// window.onresize = ->
// 	console.log "resize:",document.documentElement.clientHeight
// main.$root.$el.addEventListener "touchstart", (evt)->
// 	_public.note = false
//# sourceMappingURL=main.js.map