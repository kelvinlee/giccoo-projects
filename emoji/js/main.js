"use strict";function _defineProperty(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,i){return t&&_defineProperties(e.prototype,t),i&&_defineProperties(e,i),e}var ANIMATION_END_NAME,ANIMATION_END_NAMES,AnimatedSprite,Container,Graphics,IsPC,ParticleContainer,Spr,Sprite,TRANSITION_END_NAME,TRANSITION_END_NAMES,Text,Texture,TextureCache,TrueH,TrueW,UGC,VENDORS,_cache,_public,_runTime,_second,_startCache,_testTime,apiLink,apiUrl,autoDetectRenderer,css3Prefix,getId,getTe,i,imageurl,init,j,len1,loadWechatConfig,loader,loading,mTestElement,main,musicIconCache,musicLineCache,neteaseShareImage,random,resource,resources,sended,sys,ugc,ugcCache;for(VENDORS=["Moz","webkit","ms","O"],TRANSITION_END_NAMES={Moz:"transitionend",webkit:"webkitTransitionEnd",ms:"MSTransitionEnd",O:"oTransitionEnd"},ANIMATION_END_NAMES={Moz:"animationend",webkit:"webkitAnimationEnd",ms:"MSAnimationEnd",O:"oAnimationEnd"},mTestElement=document.createElement("div"),j=0,len1=VENDORS.length;j<len1&&!((css3Prefix=i=VENDORS[j])+"Transition"in mTestElement.style);j++)css3Prefix=!1;css3Prefix&&(TRANSITION_END_NAME=TRANSITION_END_NAMES[css3Prefix],ANIMATION_END_NAME=ANIMATION_END_NAMES[css3Prefix]),loadWechatConfig=function e(){var t,i,n;n=encodeURIComponent(window.location.href.split("#")[0]),(t=document.createElement("script")).src="//api.giccoo.com/api/config?url="+n,(i=document.getElementsByTagName("script")[0]).parentNode.insertBefore(t,i)},IsPC=function e(){var t,i,n,a;for(n=navigator.userAgent,t=new Array("Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"),i=!0,a=0;a<t.length;){if(0<n.indexOf(t[a])){i=!1;break}a++}return i},Vue.component("player",{template:'<div class="player" :class="{play: playing, pause: !playing}" @click="change"> <div class="icon-play" :class="{play: playing, pause: !playing}"> <svg v-if="!icon" v-show="!playing" height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ytp-id-39"></use><path class="ytp-svg-fill" d="M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z"></path></svg> <svg v-if="!icon" v-show="playing" height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ytp-id-40"></use><path class="ytp-svg-fill" d="M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z"></path></svg> </div> <audio :src="src" :autoplay="autoplay" :preload="preload" :loop="loop"></audio> <img v-if="thumb" :src="thumb" /> <slot></slot> </div>',data:function e(){return{playing:!1,stoped:!1}},props:{name:{default:!1},src:{default:"./mp3/bgm.mp3"},thumb:{default:!1},autoplay:{default:!1},preload:{default:!1},loop:{default:!1},callback:{default:!1},icon:{default:!1}},methods:{play:function e(){var t;// @audio.load()
return t=this.$emit("play",this),this.playing=!0,this.audio.play()},pause:function e(){var t;return t=this.$emit("pause",this),this.audio.pause(),this.playing=!1},ended:function e(){return this.playing=!1},change:function e(){return this.playing?(this.audio.pause(),this.stoped=!0):(this.audio.play(),this.stoped=!1)}},
// computed:
mounted:function e(t){
// console.log @name
return this.audio=this.$el.children[1],// console.log @audio
// @audioOther = @$el.children[2]
this.audio.addEventListener("pause",this.pause.bind(this)),this.audio.addEventListener("play",this.play.bind(this)),this.audio.addEventListener("ended",this.ended.bind(this))}}),// @audio.play()
// console.log @audio,@audioOther,@playing
Vue.component("mp4",{template:'<div class="video"> <div v-if="andriod" class="icon-play" :class="{hide: playing, pause: !playing}" @click="change"> <svg v-show="!playing" height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ytp-id-39"></use><path class="ytp-svg-fill" d="M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z"></path></svg> <svg v-show="playing" height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ytp-id-40"></use><path class="ytp-svg-fill" d="M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z"></path></svg> </div> \x3c!--  --\x3e <video v-if="!playsinline" :width="width" :height="height" controls="true" :src="src" :id="videoid" :poster="poster"></video> <video v-if="playsinline" :class="{hide: andriod}" :width="width" :height="height" controls="true" :src="src" :id="videoid" :poster="poster" x5-video-player-type="h5" x5-video-player-fullscreen="true" x-webkit-airplay="allow" webkit-playsinline playsinline></video> <canvas v-if="andriod" :id="canvasid" :width="width" :height="height" @click="change"></canvas> </div>',data:function e(){return{playing:!1,stoped:!1,andriod:!1}},props:{playsinline:{default:!1},videoid:{default:"video"},src:{default:"./mp3/bgm.mp3"},autoplay:{default:!1},preload:{default:!1},loop:{default:!1},poster:{default:!1},width:{default:1920},height:{default:1080}},computed:{canvasid:function e(){return this.videoid+"-canvas"}},
// iconNow: ->
// 	return if !@playing then @iconPlay else @iconStop
methods:{play:function e(){return this.video&&this.video.play(),this.playing=!0},pause:function e(){return this.playing=!1},stop:function e(){if(this.video)return this.video.pause()},ended:function e(){return this.playing=!1},change:function e(){return this.playing?(this.video.pause(),this.stoped=!0):(this.video.play(),this.stoped=!1,"undefined"!=typeof _hmt&&null!==_hmt&&_hmt.push(["_trackEvent","adidas-originals-eqt","video","play","-"]),this.animate())},initCanvas:function e(){var t,i,n;if(t=document.getElementById(this.canvasid),i=t.getContext("2d"),this.poster)return(n=new Image).src=this.poster,n.onload=function(){return i.drawImage(n,0,0,t.width,t.height)}},animate:function e(){var t,i;return!!(t=document.getElementById(this.canvasid))&&((i=t.getContext("2d")).drawImage(this.video,0,0,t.width,t.height),this.stoped?void 0:requestAnimationFrame(this.animate.bind(this)))}},mounted:function e(t){var i=this,n,a;if(n=-1<(a=navigator.userAgent).indexOf("Android")||-1<a.indexOf("Adr"),this.video=document.getElementById(this.videoid),this.video.addEventListener("pause",this.pause.bind(this)),this.video.addEventListener("playing",this.play.bind(this)),this.video.addEventListener("ended",this.ended.bind(this)),n&&this.playsinline)return this.andriod=!0,setTimeout(function(){return i.initCanvas()},20)}}),Container=PIXI.Container,ParticleContainer=PIXI.ParticleContainer,autoDetectRenderer=PIXI.autoDetectRenderer,loader=PIXI.loader,resources=PIXI.loader.resources,TextureCache=PIXI.utils.TextureCache,Texture=PIXI.Texture,Sprite=PIXI.Sprite,Graphics=PIXI.Graphics,resource=PIXI.loader.resources,Text=PIXI.Text,AnimatedSprite=PIXI.extras.AnimatedSprite,Spr=function e(t){return new Sprite(getTe(t))},getTe=function e(t){return resource[t].texture},getId=function e(t,i){return loader.resources[i].textures[t]},// for fix ios 8 less
null==Number.isInteger&&(Number.isInteger=function(e){return 0<=e}),String.prototype.gblen=function(){var e,t,n;for(i=e=t=0,n=this.length;0<=n?e<n:n<e;i=0<=n?++e:--e)127<this.charCodeAt(i)||94===this.charCodeAt(i)?t+=2:t++;return t},random=1+parseInt(5*Math.random()),UGC=function(){
// imageList = []
var e=
/* */
function(){function t(e){_classCallCheck(this,t),this.opts={el:"main",w:750,h:1314,trueH:1314,count:6,speed:1,alpha:.8,defaultShow:!0,class:"",fillColor:6737151,callback:function e(){}},this.opts=Object.assign(this.opts,e),this.default.h=document.documentElement.clientHeight,this.default.w=document.documentElement.clientWidth,this.default.ratio=this.opts.w/this.default.w,this.app=new PIXI.Application({width:this.opts.w,height:this.opts.h,transparent:!0,preserveDrawingBuffer:!0,forceCanvas:!0}),null!=this.opts.class&&""!==this.opts.class&&(this.app.view.className=this.opts.class),this.stage=this.app.stage,document.getElementById(this.opts.el).appendChild(this.app.view),console.log("imageList:",imageList.length),PIXI.loader.add(imageList).use(this.loaditem.bind(this)).load(this.build.bind(this)),this.default.MH=.65*this.opts.h}return _createClass(t,[{key:"loaditem",value:function e(){if(this.loadNumber++,loading.progressOn=parseInt(this.loadNumber/imageList.length*100),console.log("load:",this.loadNumber,loading.progressOn,this.loadNumber===imageList.length),this.loadNumber===imageList.length)return buildUGC.bind(this).call(),this.opts.callback()}// @.init()
// console.log "aa"
// @.stage.addChild Spr(_CDN+"img/texture.jpg")
},{key:"build",value:function e(){return console.log("builded"),buildUGC.bind(this).call(),this.opts.callback()}// @.init()
},{key:"init",value:function e(){var t,i,n,a,r,o,s,u,l;return this.qrcode=u=new Spr(_CDN+"img/qrcode-"+(main.white?"white":"black")+".png"),u.scale.set(640/750,640/750),u.x=68,u.y=this.opts.h-u.height-34,u.visible=!1,s=new Container,(i=Spr(_CDN+"img/logo-black.png")).y=10,(t=Spr(_CDN+"img/envelope.png")).scale.set(640/750,640/750),t.x=(this.opts.w-t.width)/2,(n=Spr(_CDN+"img/post-card-mark.png")).scale.set(640/750,640/750),n.x=(this.opts.w-n.width)/2,(r=Spr(_CDN+"img/m-"+main.answer1+".png")).scale.set(640/750,640/750),r.x=(this.opts.w-n.width)/2-10,(o=new Text("".concat(main.nickname),{fontFamily:"Arial",fontSize:32,fontWeight:"bold",fill:0,letterSpacing:2,lineHeight:34})).x=160,o.y=42,l=(l=(l="")===main.message?main.messageList[main.messageIndex-1]:main.message).replace(/<br\/>/g,"\n"),(a=new Text("".concat(l),{fontFamily:"Arial",fontSize:18,fill:0,fontStyle:"italic",fontWeight:"normal",letterSpacing:0,lineHeight:34})).x=160,a.y=93,s.y=i.height+i.y+5,s.addChild(t,n,o,a,r),this.stage.addChild(i,s,u),this.postCard=s,TweenMax.from(s,1.2,{alpha:0,y:"-=".concat(s.height+i.height),yoyo:!0,delay:.7})}}]),t}();return e.prototype.builded=!1,e.prototype.default={w:320,h:160,running:!0},e.prototype.started=!1,e.prototype.over=!1,e.prototype.online=!1,e.prototype.blocks=[],e.prototype.bottles=[],e.prototype.enemys=[],e.prototype.lights=[],e.prototype.dom={},e.prototype._progress=0,e.prototype.lineMoving=!1,e.prototype.startTime=null,e.prototype.loadNumber=0,e}.call(void 0),loadWechatConfig=function e(){var t,i,n;n=encodeURIComponent(window.location.href.split("#")[0]),(t=document.createElement("script")).src="//api.giccoo.com/api/config?url="+n,(i=document.getElementsByTagName("script")[0]).parentNode.insertBefore(t,i)},Vue.component("player",{template:'<div class="player" :class="{play: playing, pause: !playing}" @click="change"> <div class="icon-play" :class="{play: playing, pause: !playing}"> <svg v-if="!icon" v-show="!playing" height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ytp-id-39"></use><path class="ytp-svg-fill" d="M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z"></path></svg> <svg v-if="!icon" v-show="playing" height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ytp-id-40"></use><path class="ytp-svg-fill" d="M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z"></path></svg> </div> <audio :src="src" :autoplay="autoplay" :preload="preload" :loop="loop"></audio> <img v-if="thumb" :src="thumb" /> <slot></slot> </div>',data:function e(){return{playing:!1,stoped:!1}},props:{name:{default:!1},src:{default:"./mp3/bgm.mp3"},thumb:{default:!1},autoplay:{default:!1},preload:{default:!1},loop:{default:!1},callback:{default:!1},icon:{default:!1}},methods:{play:function e(){var t;// @audio.load()
return t=this.$emit("play",this),this.playing=!0,this.audio.play()},pause:function e(){var t;return t=this.$emit("pause",this),this.audio.pause(),this.playing=!1},ended:function e(){return this.playing=!1},change:function e(){return this.playing?(this.audio.pause(),this.stoped=!0):(this.audio.play(),this.stoped=!1)}},
// computed:
mounted:function e(t){
// console.log @name
return this.audio=this.$el.children[1],// console.log @audio
// @audioOther = @$el.children[2]
this.audio.addEventListener("pause",this.pause.bind(this)),this.audio.addEventListener("play",this.play.bind(this)),this.audio.addEventListener("ended",this.ended.bind(this))}}),// @audio.play()
// console.log @audio,@audioOther,@playing
Container=PIXI.Container,ParticleContainer=PIXI.ParticleContainer,autoDetectRenderer=PIXI.autoDetectRenderer,loader=PIXI.loader,resources=PIXI.loader.resources,TextureCache=PIXI.utils.TextureCache,Texture=PIXI.Texture,Sprite=PIXI.Sprite,Graphics=PIXI.Graphics,resource=PIXI.loader.resources,Text=PIXI.Text,AnimatedSprite=PIXI.extras.AnimatedSprite,Spr=function e(t){return new Sprite(getTe(t))},getTe=function e(t){return resource[t].texture},getId=function e(t,i){return loader.resources[i].textures[t]},// for fix ios 8 less
null==Number.isInteger&&(Number.isInteger=function(e){return 0<=e}),loadWechatConfig=function e(){var t,i,n;n=encodeURIComponent(window.location.href.split("#")[0]),(t=document.createElement("script")).src="//api.giccoo.com/api/config?url="+n,(i=document.getElementsByTagName("script")[0]).parentNode.insertBefore(t,i)},Vue.component("player",{template:'<div class="player" :class="{play: playing, pause: !playing}" @click="change"> <div class="icon-play" :class="{play: playing, pause: !playing}"> <svg v-if="!icon" v-show="!playing" height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ytp-id-39"></use><path class="ytp-svg-fill" d="M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z"></path></svg> <svg v-if="!icon" v-show="playing" height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ytp-id-40"></use><path class="ytp-svg-fill" d="M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z"></path></svg> </div> <audio :src="src" :autoplay="autoplay" :preload="preload" :loop="loop"></audio> <img v-if="thumb" :src="thumb" /> <slot></slot> </div>',data:function e(){return{playing:!1,stoped:!1}},props:{name:{default:!1},src:{default:"./mp3/bgm.mp3"},thumb:{default:!1},autoplay:{default:!1},preload:{default:!1},loop:{default:!1},callback:{default:!1},icon:{default:!1}},methods:{play:function e(){var t;// @audio.load()
return t=this.$emit("play",this),this.playing=!0,this.audio.play()},pause:function e(){var t;return t=this.$emit("pause",this),this.audio.pause(),this.playing=!1},ended:function e(){return this.playing=!1},change:function e(){return this.playing?(this.audio.pause(),this.stoped=!0):(this.audio.play(),this.stoped=!1)}},
// computed:
mounted:function e(t){
// console.log @name
return this.audio=this.$el.children[1],// console.log @audio
// @audioOther = @$el.children[2]
this.audio.addEventListener("pause",this.pause.bind(this)),this.audio.addEventListener("play",this.play.bind(this)),this.audio.addEventListener("ended",this.ended.bind(this))}}),// @audio.play()
// console.log @audio,@audioOther,@playing
Container=PIXI.Container,ParticleContainer=PIXI.ParticleContainer,autoDetectRenderer=PIXI.autoDetectRenderer,loader=PIXI.loader,resources=PIXI.loader.resources,TextureCache=PIXI.utils.TextureCache,Texture=PIXI.Texture,Sprite=PIXI.Sprite,Graphics=PIXI.Graphics,resource=PIXI.loader.resources,Text=PIXI.Text,AnimatedSprite=PIXI.extras.AnimatedSprite,Spr=function e(t){return new Sprite(getTe(t))},getTe=function e(t){return resource[t].texture},getId=function e(t,i){return loader.resources[i].textures[t]},// for fix ios 8 less
null==Number.isInteger&&(Number.isInteger=function(e){return 0<=e}),IsPC=function e(){var t,i,n,a;for(n=navigator.userAgent,t=new Array("Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"),i=!0,a=0;a<t.length;){if(0<n.indexOf(t[a])){i=!1;break}a++}return i},Container=PIXI.Container,ParticleContainer=PIXI.ParticleContainer,autoDetectRenderer=PIXI.autoDetectRenderer,loader=PIXI.loader,resources=PIXI.loader.resources,TextureCache=PIXI.utils.TextureCache,Texture=PIXI.Texture,Sprite=PIXI.Sprite,Graphics=PIXI.Graphics,resource=PIXI.loader.resources,Text=PIXI.Text,AnimatedSprite=PIXI.extras.AnimatedSprite,Spr=function e(t){return new Sprite(getTe(t))},getTe=function e(t){return resource[t].texture},getId=function e(t,i){return loader.resources[i].textures[t]},// for fix ios 8 less
null==Number.isInteger&&(Number.isInteger=function(e){return 0<=e}),IsPC=function e(){var t,i,n,a;for(n=navigator.userAgent,t=new Array("Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"),i=!0,a=0;a<t.length;){if(0<n.indexOf(t[a])){i=!1;break}a++}return i},IsPC=function e(){var t,i,n,a;for(n=navigator.userAgent,t=new Array("Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"),i=!0,a=0;a<t.length;){if(0<n.indexOf(t[a])){i=!1;break}a++}return i},Container=PIXI.Container,ParticleContainer=PIXI.ParticleContainer,autoDetectRenderer=PIXI.autoDetectRenderer,loader=PIXI.loader,resources=PIXI.loader.resources,TextureCache=PIXI.utils.TextureCache,Texture=PIXI.Texture,Sprite=PIXI.Sprite,Graphics=PIXI.Graphics,resource=PIXI.loader.resources,Text=PIXI.Text,AnimatedSprite=PIXI.extras.AnimatedSprite,Spr=function e(t){return new Sprite(getTe(t))},getTe=function e(t){return resource[t].texture},getId=function e(t,i){return loader.resources[i].textures[t]},// for fix ios 8 less
null==Number.isInteger&&(Number.isInteger=function(e){return 0<=e}),loadWechatConfig=function e(){var t,i,n;n=encodeURIComponent(window.location.href.split("#")[0]),(t=document.createElement("script")).src="//api.giccoo.com/api/config?url="+n,(i=document.getElementsByTagName("script")[0]).parentNode.insertBefore(t,i)},Container=PIXI.Container,ParticleContainer=PIXI.ParticleContainer,autoDetectRenderer=PIXI.autoDetectRenderer,loader=PIXI.loader,resources=PIXI.loader.resources,TextureCache=PIXI.utils.TextureCache,Texture=PIXI.Texture,Sprite=PIXI.Sprite,Graphics=PIXI.Graphics,resource=PIXI.loader.resources,Text=PIXI.Text,AnimatedSprite=PIXI.extras.AnimatedSprite,Spr=function e(t){return new Sprite(getTe(t))},getTe=function e(t){return resource[t].texture},getId=function e(t,i){return loader.resources[i].textures[t]},// for fix ios 8 less
null==Number.isInteger&&(Number.isInteger=function(e){return 0<=e}),Vue.component("player",{template:'<div class="player" :class="{play: playing, pause: !playing}" @click="change"> <div class="icon-play" :class="{play: playing, pause: !playing}"> <svg v-if="!icon" v-show="!playing" height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ytp-id-39"></use><path class="ytp-svg-fill" d="M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z"></path></svg> <svg v-if="!icon" v-show="playing" height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ytp-id-40"></use><path class="ytp-svg-fill" d="M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z"></path></svg> </div> <audio :src="src" :autoplay="autoplay" :preload="preload" :loop="loop"></audio> <img v-if="thumb" :src="thumb" /> <slot></slot> </div>',data:function e(){return{playing:!1,stoped:!1}},props:{name:{default:!1},src:{default:"./mp3/bgm.mp3"},thumb:{default:!1},autoplay:{default:!1},preload:{default:!1},loop:{default:!1},callback:{default:!1},icon:{default:!1}},methods:{play:function e(){var t;// @audio.load()
return t=this.$emit("play",this),this.playing=!0,this.audio.play()},pause:function e(){var t;return t=this.$emit("pause",this),this.audio.pause(),this.playing=!1},ended:function e(){return this.playing=!1},change:function e(){return this.playing?(this.audio.pause(),this.stoped=!0):(this.audio.play(),this.stoped=!1)}},
// computed:
mounted:function e(t){
// console.log @name
return this.audio=this.$el.children[1],// console.log @audio
// @audioOther = @$el.children[2]
this.audio.addEventListener("pause",this.pause.bind(this)),this.audio.addEventListener("play",this.play.bind(this)),this.audio.addEventListener("ended",this.ended.bind(this))}}),// @audio.play()
// console.log @audio,@audioOther,@playing
// @codekit-prepend "coffee/css3Prefix"
// @codekit-prepend "../../libs/coffee/loadWechatConfig"
// @codekit-prepend "../../libs/coffee/IsPC"
// @codekit-prepend "../../libs/vue/vue-player"
// @codekit-prepend "../../libs/vue/vue-video"
// @codekit-prepend "../../libs/coffee/pixi-base"
// @codekit-prepend "../../libs/coffee/String"
// @codekit-prepend "./UGC"
axios.defaults.withCredentials=!0,TrueW=640,TrueH=1138,imageurl="//api.giccoo.com/api/upload/image64/",apiUrl="//api.giccoo.com/emoji",// apiLink = "//localhost:3000/"
apiLink="//g.giccoo.com/",// apiLink = "http://192.168.3.53:3000/"
// apiUrl = "http://localhost:8881/Levi"
main={},sys="",sended=[!(loading={}),!(_public={})],_runTime=_startCache=_cache=ugcCache=musicIconCache=musicLineCache=ugc=null,_testTime=_second=0,neteaseShareImage=function e(){var t,i,n;return n="点播圣诞星声",t="https://image.giccoo.com/upload/".concat(main.folder,"/")+main.shareImageLink+"@!large",i="https://activity.music.163.com/emoji/",// console.log picUrl,"orpheus://sharepic?picUrl="+encodeURIComponent(picUrl)+"&shareUrl="+encodeURIComponent(redirectUrl)+"&wbDesc="+encodeURIComponent(title1)+"&qqDesc="+encodeURIComponent(title1)
// window.location.href = "orpheus://sharepic?picUrl="+encodeURIComponent(picUrl)+"&shareUrl="+encodeURIComponent(redirectUrl)+"&wbDesc="+encodeURIComponent(title1)+"&qqDesc="+encodeURIComponent(title1)
console.log("share href:",t),CloudMusic.sharePic({picUrl:t,text:n,link:i})},window.onload=function(){var e,t;return TrueH=document.documentElement.clientHeight,TrueW=document.documentElement.clientWidth,e=0,-1<window.navigator.userAgent.indexOf("NeteaseMusic")?(sys="NeteaseMusic",t={name:"emoji",title:"Emoji Title",subTitle:"",text:"",picUrl:"http://m.giccoo.com/emoji/img/ico.jpg",link:"http://m.giccoo.com/emoji/"},CloudMusic.setShareData(t)):(loadWechatConfig(),wx.ready(function(){var e;return e={title:"Emoji Title",desc:"",link:"http://m.giccoo.com/emoji/",imgUrl:"http://m.giccoo.com/emoji/img/ico.jpg",success:function e(){},
// alert "success"
cancel:function e(){}},// alert "cancel"
wx.onMenuShareTimeline(e),wx.onMenuShareAppMessage(e),wx.onMenuShareQQ(e),wx.onMenuShareWeibo(e)})),_public=new Vue({el:"#public",data:{note:!0,playing:!1},mounted:function e(){return document.addEventListener("WeixinJSBridgeReady",function(){return _public.$children[0].change()})}}),loading=new Vue({el:"#loading",data:{progress:0,mounted:!1,progressOn:0},methods:{next:function e(){return document.getElementById("load").className+=" fadeOut animated",_public.note=!1,main.mounted=!0,setTimeout(function(){return document.getElementById("load").style.display="none"},520)}},mounted:function e(){var t=this,i;// for test
return this.mounted=!0,TrueH=document.documentElement.clientHeight,TrueW=document.documentElement.clientWidth,this.next(),i=setInterval(function(){if(t.progress+=2,t.progress>=t.progressOn&&(t.progress=t.progressOn),100<=t.progress)return t.progress=100,clearInterval(i),_cache=setTimeout(function(){return t.next()},1e3)},50)}}),init()},init=function e(){var t,i,n;return 640<=TrueW&&(
// console.log new Date().getTime() - startTime
// document.body.style.height = TrueH+"px"
// document.documentElement.className += " iphone4" if TrueW/TrueH >= 0.64
TrueW=640),1138<=TrueH&&(TrueH=1138),n=2*TrueH<1200,i=Math.ceil(TrueW/640*94/TrueH*100),TrueH=document.documentElement.clientHeight,TrueW=document.documentElement.clientWidth,console.log(TrueW,TrueH),main=new Vue({el:"#main",data:(t={w:TrueW,h:TrueH,biger:TrueW/TrueH<.55,smaller:n,afterH:n?1.15*TrueH-TrueW/750*1029:TrueH-TrueW/750*1029,wy:!1,mounted:!0,loading:!1,noteText:"",noteTime:null,noteShow:!1,pageInfoShow:!1,pageIndex:1,step:1,singerIndex:2,startgame:!1,folder:"",BGColor:"#ffffff",XY:"pageY",ugc:null,ugcsave:null,ugcold:null,pushed:!1,shareImageLink:null,cache:null,audioId:null,v:null,pageNote:!1,recordStarting:!1,authorization:!1,norecord:!0,uploaded:!1,imageUpdate:!1,allowPopShow:!1,count:0,videoIndex:0,videoIndexOld:0,lr:!0,
// form:
// 	username: {id:"username", type: "input", label: "姓名", placeholder: "请填写姓名",value: ""}
// 	mobile: {id:"mobile", type: "number", label: "电话", placeholder: "请填写电话",value: ""}
// 	province: {id:"province", type: "select", label: "省份", link: "city", value: Object.keys(_citys)[0], options: _citys }
// 	city: {id:"city", type: "select", label: "城市", link: "dealer",value: Object.keys(_citys["请选择省份"])[0], options: _citys["请选择省份"] }
mask:1,text:"",nickname:"",mobile:"",musicLink:"",logId:"",openBtnShow:!0,default:{x:0},videoPop:!1,canUpload:!0,handCover:!1,last_update:0,lastX:0,lastY:0,lastZ:0,speed:4e3,maxSpeed:0,swing:!1,registerShow:!1,lotteryShow:!1,lotteryEndShow:!1,lotteryInfo:{id:null,random:null},regSubmited:!1,giveUp:!1,gameEnd:!1,noreg:!1,ugcShow:!1,regH:100,ugcType:1,questionShow:!1,questionIndex:0,answer1:1,answer2:0,answer3:{c1:!1,c2:!1,c3:!1,c4:!1}},_defineProperty(t,"nickname",""),_defineProperty(t,"message",""),_defineProperty(t,"messageIndex",1),_defineProperty(t,"messageInput",!1),_defineProperty(t,"musicName",""),_defineProperty(t,"white",!1),_defineProperty(t,"gameEnd",!1),_defineProperty(t,"formShow",!1),_defineProperty(t,"formBoxShow",!1),_defineProperty(t,"carIndex",1),t),
// watch:
methods:{send:function e(t){var i=this;return this.noteShow=!0,this.noteText=t,clearTimeout(this.noteTime),this.noteTime=setTimeout(function(){return i.noteShow=!1},2e3)},over:function e(){var t=this;return this.questionShow=!1,ugc.init(),setTimeout(function(){return t.gameEnd=!0},2e3)},regame:function e(){return window.location.reload()},gobuy:function e(){return window.location.href="http://www.baidu.com"},dateText:function e(t){var i;return console.log(t.replace(/-/g,"/")),(i=new Date(t.replace(/-/g,"/"))).getFullYear()+"年"+(i.getMonth()+1)+"月"+i.getDate()+"日"},goUGC:function e(){return this.lotteryShow=!0},sharePost:function e(t){// @.ugc = ugc.app.view.toDataURL()
return this.gameEnd=!0,ugc.app.renderer.render(ugc.app.stage),this.ugc=t},restart:function e(){return window.location.reload()},goshare:function e(){
// goShare()
return this.share()},share:function e(){var t,i,n;return goFinal2(),this.formBoxShow=!1,this.registerShow=!1,this.lotteryShow=!1,console.log("run share"),// ugc.qrcode.visible = true
ugc.app.renderer.render(ugc.app.stage),this.ugc=ugc.app.view.toDataURL(),n=this.ugc,this.wy?(t={image:n,folder:i="emoji"},this.folder=i,null==n?this.faild():!this.pushed&&axios.post(imageurl,t).then(function(e){return 200===e.data.recode?main.success(e.data):main.faild(e)}).catch(function(e){
// alert e
return main.faild(e)})):this.ugcShow=!0},
// ugc.back()
// ugc.qrcode.visible = false
success:function e(t){return this.shareImageLink=t.info,this.pushed=!1,this.loading=!1,// ugc.back()
neteaseShareImage(),shareDone()},
// 抽奖
// unless @.giveUp
// 	setTimeout =>
// 		@.getLottery()
// 	,5000
closeUGC:function e(){return this.ugcShow=!1,shareDone()},faild:function e(t){return this.pushed=!1,this.loading=!1},openSong:function e(t){
// id = [38576323,167740,139381,474567580,355992,28815250,109968,110083,163639,28785688,5271858,28838557,169794,27591641,5271855]
// CloudMusic.song(id[resultNum])
return window.location.href="https://music.163.com/#/song?id=".concat(t)},openMusic:function e(t){
// goList()
// _public.$children[0].pause()
return CloudMusic.isInApp()?CloudMusic.playlist(t):window.location.href="https://music.163.com/#/playlist?id=".concat(t)},openInApp:function e(){return CloudMusic.open("https://m.giccoo.com/emoji/")},goSubmit:function e(){var t=this,i;return i={username:this.nickname,mobile:this.mobile},axios.post("".concat(apiLink,"active/autoSave/insert/database/draw/"),i).then(function(e){return 200===e.data.code?t.share():t.send(e.data.reason)}).catch(function(e){return console.log("err:",e),t.send("请求错误,请重试")})},goWeb:function e(){return window.location.href="http://www.baidu.com/"},goNote:function e(){return this.singerIndex=resultA[1]+1,this.pageNote=!0}},
// watch:
mounted:function e(){var t,i,n;return TrueH=document.documentElement.clientHeight,TrueW=document.documentElement.clientWidth,"NeteaseMusic"===sys&&(this.wy=!0),t=2*TrueH*(2-2*TrueW/750+.01),// game = new Game({el: "game",h: h})
this.wy=CloudMusic.isInApp(),n=CloudMusic.getClientVersion().split("."),// @.getUserInfo (callback)=>
// console.log imageList,@.muiscType @.userInfo.styleTop
// @.ugcType = @.muiscType @.userInfo.styleTop
i=[],window.imageList=window.imageList.concat(i),ugc=new UGC({el:"ugc",w:640,h:640/TrueW*TrueH,callback:function e(){return console.log("callback")}}),console.log("h:",t)}})};// window.onresize = ->
// 	console.log "resize:",document.documentElement.clientHeight
//# sourceMappingURL=main.js.map