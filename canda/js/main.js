"use strict";function _defineProperty(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,i){return t&&_defineProperties(e.prototype,t),i&&_defineProperties(e,i),e}var ANIMATION_END_NAME,ANIMATION_END_NAMES,AnimatedSprite,Container,Graphics,IsPC,ParticleContainer,Spr,Sprite,TRANSITION_END_NAME,TRANSITION_END_NAMES,Text,Texture,TextureCache,TrueH,TrueW,UGC,VENDORS,_cache,_public,_runTime,_second,_startCache,_testTime,apiLink,apiUrl,autoDetectRenderer,css3Prefix,getId,getTe,i,imageurl,init,j,len1,loadWechatConfig,loader,loading,mTestElement,main,musicIconCache,musicLineCache,neteaseShareImage,random,resource,resources,sended,sys,ugc,ugcCache;for(VENDORS=["Moz","webkit","ms","O"],TRANSITION_END_NAMES={Moz:"transitionend",webkit:"webkitTransitionEnd",ms:"MSTransitionEnd",O:"oTransitionEnd"},ANIMATION_END_NAMES={Moz:"animationend",webkit:"webkitAnimationEnd",ms:"MSAnimationEnd",O:"oAnimationEnd"},mTestElement=document.createElement("div"),j=0,len1=VENDORS.length;j<len1&&!((css3Prefix=i=VENDORS[j])+"Transition"in mTestElement.style);j++)css3Prefix=!1;css3Prefix&&(TRANSITION_END_NAME=TRANSITION_END_NAMES[css3Prefix],ANIMATION_END_NAME=ANIMATION_END_NAMES[css3Prefix]),loadWechatConfig=function e(){var t,i,n;n=encodeURIComponent(window.location.href.split("#")[0]),(t=document.createElement("script")).src="//api.giccoo.com/api/config?url="+n,(i=document.getElementsByTagName("script")[0]).parentNode.insertBefore(t,i)},IsPC=function e(){var t,i,n,s;for(n=navigator.userAgent,t=new Array("Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"),i=!0,s=0;s<t.length;){if(0<n.indexOf(t[s])){i=!1;break}s++}return i},Vue.component("player",{template:'<div class="player" :class="{play: playing, pause: !playing}" @click="change"> <div class="icon-play" :class="{play: playing, pause: !playing}"> <svg v-if="!icon" v-show="!playing" height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ytp-id-39"></use><path class="ytp-svg-fill" d="M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z"></path></svg> <svg v-if="!icon" v-show="playing" height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ytp-id-40"></use><path class="ytp-svg-fill" d="M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z"></path></svg> </div> <audio :src="src" :autoplay="autoplay" :preload="preload" :loop="loop"></audio> <img v-if="thumb" :src="thumb" /> </div>',data:function e(){return{playing:!1,stoped:!1}},props:{name:{default:!1},src:{default:"./mp3/bgm.mp3"},thumb:{default:!1},autoplay:{default:!1},preload:{default:!1},loop:{default:!1},callback:{default:!1},icon:{default:!1}},methods:{play:function e(){var t;return t=this.$emit("play",this),this.playing=!0,this.audio.play()},pause:function e(){var t;return t=this.$emit("pause",this),this.audio.pause(),this.playing=!1},ended:function e(){return this.playing=!1},change:function e(){return this.playing?(this.audio.pause(),this.stoped=!0):(this.audio.play(),this.stoped=!1,"undefined"!=typeof _hmt&&null!==_hmt&&_hmt.push(["_trackEvent","adidas-originals-eqt",this.name,"play","-"]))}},
// computed:
mounted:function e(t){
// console.log @name
return this.audio=this.$el.children[1],// console.log @audio
// @audioOther = @$el.children[2]
this.audio.addEventListener("pause",this.pause.bind(this)),this.audio.addEventListener("play",this.play.bind(this)),this.audio.addEventListener("ended",this.ended.bind(this))}}),// @audio.play()
// console.log @audio,@audioOther,@playing
Vue.component("slider",{template:'<div @mousedown="start" @mousemove="move" @mouseup="end" @touchstart="start" @touchmove.passive="move" @touchend="end"> <div class="slider-content"> <slot name="outside" :slideNumber="slideNumber"></slot> <div :id="\'slider-\'+id" class="slider" :style="{transitionDuration: duration+\'s\',transform:\'translate3d(\'+x+\'px,0,0)\'}"> <slot v-if="repeat" :slideNumber="slideNumber"></slot> <slot v-if="repeat" :slideNumber="slideNumber"></slot> <slot :slideNumber="slideNumber"></slot> </div> </div> <slot name="points" :slideNumber="slideNumber"></slot> </div>',data:function e(){return{id:Math.ceil(1e5*Math.random()+99999),duration:0,x:0,y:0,moved:!1,startTime:0,offset:{resistance:1,lastSlide:1,scrollableArea:320,isScrolling:!1,lastw:0,w:320,x:0,y:0,deltaX:0,deltaY:0},slider:{},count:0,slideNumber:0,cache:null}},props:{repeat:{default:!1},auto:{default:!1},runtime:{default:3e3},arrow:{default:!1},arrowtop:{default:!1}},methods:{setSlideNumber:function e(t){var i,n,s;if(this.moved&&(i=this.count,this.repeat&&(i=3*this.count),n=t?this.offset.deltaX<0?"ceil":"floor":"round",s=Math[n](this.x/(this.offset.scrollableArea/i)),s+=t,s=Math.min(s,0),this.slideNumber=Math.max(-(i-1),s)%this.count,0!==t))return this.$emit("number",this.slideNumber)},start:function e(t){var i;return clearTimeout(this.cache),i="mousedown"===t.type?t:t.touches[0],this.count=this.slider.childElementCount,this.startTime=+new Date,this.duration=0,this.moved=!0,this.offset.w=this.slider.clientWidth,this.offset.x=i.pageX,this.offset.y=i.pageY,this.repeat&&0===this.x&&(this.x=-this.count*this.offset.w),this.offset.lastw=this.x,this.offset.lastSlide=-(this.count-1),this.offset.scrollableArea=this.offset.w*this.count,this.repeat&&(this.offset.scrollableArea=this.offset.w*this.count*3),this.setSlideNumber(0)},
// console.log @slideNumber
move:function e(t){var i,n;return!!this.moved&&("mousemove"===t.type?(n=t).preventDefault():n=t.touches[0],this.offset.deltaX=n.pageX-this.offset.x,i=n.pageX,this.repeat?this.x=this.offset.deltaX+this.offset.lastw:(this.x=this.offset.deltaX/this.offset.resistance+this.offset.lastw,this.offset.resistance=0===this.slideNumber&&0<this.offset.deltaX?i/this.offset.w+1.25:this.slideNumber===this.offset.lastSlide&&this.offset.deltaX<0?(this.offset.w-Math.abs(i))/this.offset.w+1.25:1),this.moved=!0)},end:function e(t){var i;if(this.moved&&5<Math.abs(this.offset.deltaX)&&(i=this.slideNumber,this.setSlideNumber(+new Date-this.startTime<1e3&&15<Math.abs(this.offset.deltaX)?this.offset.deltaX<0?-1:1:0),this.x=this.slideNumber*this.offset.w,this.duration=.2,this.moved=!1,(this.offset.deltaX=0)===this.slideNumber&&i===-(this.count-1)&&(this.x=(i-1)*this.offset.w),0===i&&this.slideNumber===-(this.count-1)&&(this.x=1*this.offset.w),this.repeat?this.x-=this.count*this.offset.w:0===this.slideNumber?this.x=0:
// console.log @x,@slideNumber
this.x=-Math.abs(this.x),this.auto))return this.autoRun()},autoRun:function e(){var t=this;return this.cache=setTimeout(function(){return t.offset.w=t.slider.clientWidth,0===t.x&&(t.x=-t.count*t.offset.w),t.offset.lastw=t.x,t.slideNumber--,Math.abs(t.slideNumber)>=t.count&&(
// @setSlideNumber 1
t.slideNumber=0),t.x-=t.offset.w,t.duration=.2,t.$emit("number",t.slideNumber%t.count),t.autoRun()},this.runtime)},transition:function e(){if(this.x<-(2*this.count-1)*this.offset.w&&(this.x=-this.count*this.offset.w,this.duration=0,this.slideNumber=0),this.x>-this.count*this.offset.w)return this.x=-(2*this.count-1)*this.offset.w,this.duration=0,this.slideNumber=-(this.count-1)},next:function e(){return this.count=this.slider.childElementCount,this.offset.w=this.slider.clientWidth,this.slideNumber--,0<this.slideNumber?(this.slideNumber=0,!1):this.slideNumber<-(this.count-1)?(this.slideNumber=-(this.count-1),!1):(this.duration=.2,this.x=this.slideNumber*this.offset.w,0<=this.x&&(this.x=0),this.x<=-this.count*this.offset.w?this.x=-this.count*this.offset.w:void 0)},prev:function e(){return this.count=this.slider.childElementCount,this.offset.w=this.slider.clientWidth,this.slideNumber++,0<this.slideNumber?(this.slideNumber=0,!1):this.slideNumber<-(this.count-1)?(this.slideNumber=-(this.count-1),!1):(this.duration=.2,this.x=this.slideNumber*this.offset.w,0<=this.x&&(this.x=0),this.x<=-this.count*this.offset.w?this.x=-this.count*this.offset.w:void 0)}},mounted:function e(){var t=this;if(this.slider=document.getElementById("slider-"+this.id),this.count=this.slider.childElementCount,// console.log "count:",@.count,@.slider,@.slider.childElement,@.slider.childElementCount
// @setSlideNumber 0
this.repeat&&(this.count=this.count/3,this.slider.addEventListener(TRANSITION_END_NAME,this.transition.bind(this)),setTimeout(function(){return t.offset.w=t.slider.clientWidth,t.offset.scrollableArea=t.count*t.offset.w,t.duration=0,t.x=-t.count*t.offset.w},1e3)),this.auto)
// console.log @x
return this.autoRun()}}),// @.$el.addEventListener "touchstart", @.start.bind(@)
// @.$el.addEventListener "touchmove", @.move.bind(@)
// @.$el.addEventListener "touchend", @.end.bind(@)
Container=PIXI.Container,ParticleContainer=PIXI.ParticleContainer,autoDetectRenderer=PIXI.autoDetectRenderer,loader=PIXI.loader,resources=PIXI.loader.resources,TextureCache=PIXI.utils.TextureCache,Texture=PIXI.Texture,Sprite=PIXI.Sprite,Graphics=PIXI.Graphics,resource=PIXI.loader.resources,Text=PIXI.Text,AnimatedSprite=PIXI.extras.AnimatedSprite,Spr=function e(t){return new Sprite(getTe(t))},getTe=function e(t){return resource[t].texture},getId=function e(t,i){return loader.resources[i].textures[t]},// for fix ios 8 less
null==Number.isInteger&&(Number.isInteger=function(e){return 0<=e}),String.prototype.gblen=function(){var e,t,n;for(i=e=t=0,n=this.length;0<=n?e<n:n<e;i=0<=n?++e:--e)127<this.charCodeAt(i)||94===this.charCodeAt(i)?t+=2:t++;return t},random=1+parseInt(5*Math.random()),UGC=function(){
// imageList = []
var e=
/* */
function(){function t(e){_classCallCheck(this,t),this.opts={el:"main",w:750,h:1314,trueH:1314,count:6,speed:1,alpha:.8,defaultShow:!0,class:"",fillColor:6737151,callback:function e(){}},this.opts=Object.assign(this.opts,e),this.default.h=document.documentElement.clientHeight,this.default.w=document.documentElement.clientWidth,this.default.ratio=this.opts.w/this.default.w,this.app=new PIXI.Application({width:this.opts.w,height:this.opts.h,transparent:!0,preserveDrawingBuffer:!0,forceCanvas:!0}),null!=this.opts.class&&""!==this.opts.class&&(this.app.view.className=this.opts.class),this.stage=this.app.stage,document.getElementById(this.opts.el).appendChild(this.app.view),console.log("imageList:",imageList.length),PIXI.loader.add(imageList).use(this.loaditem.bind(this)).load(this.build.bind(this)),this.default.MH=.65*this.opts.h}return _createClass(t,[{key:"loaditem",value:function e(){// console.log "load:",@.loadNumber,loading.progressOn,@.loadNumber is imageList.length
if(this.loadNumber++,loading.progressOn=parseInt(this.loadNumber/imageList.length*100),this.loadNumber===imageList.length)return buildUGC.bind(this).call(),this.opts.callback()}// @.init()
// console.log "aa"
// @.stage.addChild Spr(_CDN+"img/texture.jpg")
},{key:"build",value:function e(){return console.log("builded"),buildUGC.bind(this).call(),this.opts.callback()}}]),t}();return e.prototype.builded=!1,e.prototype.default={w:320,h:160,running:!0},e.prototype.started=!1,e.prototype.over=!1,e.prototype.online=!1,e.prototype.blocks=[],e.prototype.bottles=[],e.prototype.enemys=[],e.prototype.lights=[],e.prototype.dom={},e.prototype._progress=0,e.prototype.lineMoving=!1,e.prototype.startTime=null,e.prototype.loadNumber=0,e}.call(void 0),// @.init()
loadWechatConfig=function e(){var t,i,n;n=encodeURIComponent(window.location.href.split("#")[0]),(t=document.createElement("script")).src="//api.giccoo.com/api/config?url="+n,(i=document.getElementsByTagName("script")[0]).parentNode.insertBefore(t,i)},IsPC=function e(){var t,i,n,s;for(n=navigator.userAgent,t=new Array("Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"),i=!0,s=0;s<t.length;){if(0<n.indexOf(t[s])){i=!1;break}s++}return i},Container=PIXI.Container,ParticleContainer=PIXI.ParticleContainer,autoDetectRenderer=PIXI.autoDetectRenderer,loader=PIXI.loader,resources=PIXI.loader.resources,TextureCache=PIXI.utils.TextureCache,Texture=PIXI.Texture,Sprite=PIXI.Sprite,Graphics=PIXI.Graphics,resource=PIXI.loader.resources,Text=PIXI.Text,AnimatedSprite=PIXI.extras.AnimatedSprite,Spr=function e(t){return new Sprite(getTe(t))},getTe=function e(t){return resource[t].texture},getId=function e(t,i){return loader.resources[i].textures[t]},// for fix ios 8 less
null==Number.isInteger&&(Number.isInteger=function(e){return 0<=e}),IsPC=function e(){var t,i,n,s;for(n=navigator.userAgent,t=new Array("Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"),i=!0,s=0;s<t.length;){if(0<n.indexOf(t[s])){i=!1;break}s++}return i},Container=PIXI.Container,ParticleContainer=PIXI.ParticleContainer,autoDetectRenderer=PIXI.autoDetectRenderer,loader=PIXI.loader,resources=PIXI.loader.resources,TextureCache=PIXI.utils.TextureCache,Texture=PIXI.Texture,Sprite=PIXI.Sprite,Graphics=PIXI.Graphics,resource=PIXI.loader.resources,Text=PIXI.Text,AnimatedSprite=PIXI.extras.AnimatedSprite,Spr=function e(t){return new Sprite(getTe(t))},getTe=function e(t){return resource[t].texture},getId=function e(t,i){return loader.resources[i].textures[t]},// for fix ios 8 less
null==Number.isInteger&&(Number.isInteger=function(e){return 0<=e}),Vue.component("player",{template:'<div class="player" :class="{play: playing, pause: !playing}" @click="change"> <div class="icon-play" :class="{play: playing, pause: !playing}"> <svg v-if="!icon" v-show="!playing" height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ytp-id-39"></use><path class="ytp-svg-fill" d="M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z"></path></svg> <svg v-if="!icon" v-show="playing" height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ytp-id-40"></use><path class="ytp-svg-fill" d="M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z"></path></svg> </div> <audio :src="src" :autoplay="autoplay" :preload="preload" :loop="loop"></audio> <img v-if="thumb" :src="thumb" /> </div>',data:function e(){return{playing:!1,stoped:!1}},props:{name:{default:!1},src:{default:"./mp3/bgm.mp3"},thumb:{default:!1},autoplay:{default:!1},preload:{default:!1},loop:{default:!1},callback:{default:!1},icon:{default:!1}},methods:{play:function e(){var t;return t=this.$emit("play",this),this.playing=!0,this.audio.play()},pause:function e(){var t;return t=this.$emit("pause",this),this.audio.pause(),this.playing=!1},ended:function e(){return this.playing=!1},change:function e(){return this.playing?(this.audio.pause(),this.stoped=!0):(this.audio.play(),this.stoped=!1,"undefined"!=typeof _hmt&&null!==_hmt&&_hmt.push(["_trackEvent","adidas-originals-eqt",this.name,"play","-"]))}},
// computed:
mounted:function e(t){
// console.log @name
return this.audio=this.$el.children[1],// console.log @audio
// @audioOther = @$el.children[2]
this.audio.addEventListener("pause",this.pause.bind(this)),this.audio.addEventListener("play",this.play.bind(this)),this.audio.addEventListener("ended",this.ended.bind(this))}}),// @audio.play()
// console.log @audio,@audioOther,@playing
Vue.component("player",{template:'<div class="player" :class="{play: playing, pause: !playing}" @click="change"> <div class="icon-play" :class="{play: playing, pause: !playing}"> <svg v-if="!icon" v-show="!playing" height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ytp-id-39"></use><path class="ytp-svg-fill" d="M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z"></path></svg> <svg v-if="!icon" v-show="playing" height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ytp-id-40"></use><path class="ytp-svg-fill" d="M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z"></path></svg> </div> <audio :src="src" :autoplay="autoplay" :preload="preload" :loop="loop"></audio> <img v-if="thumb" :src="thumb" /> </div>',data:function e(){return{playing:!1,stoped:!1}},props:{name:{default:!1},src:{default:"./mp3/bgm.mp3"},thumb:{default:!1},autoplay:{default:!1},preload:{default:!1},loop:{default:!1},callback:{default:!1},icon:{default:!1}},methods:{play:function e(){var t;return t=this.$emit("play",this),this.playing=!0,this.audio.play()},pause:function e(){var t;return t=this.$emit("pause",this),this.audio.pause(),this.playing=!1},ended:function e(){return this.playing=!1},change:function e(){return this.playing?(this.audio.pause(),this.stoped=!0):(this.audio.play(),this.stoped=!1,"undefined"!=typeof _hmt&&null!==_hmt&&_hmt.push(["_trackEvent","adidas-originals-eqt",this.name,"play","-"]))}},
// computed:
mounted:function e(t){
// console.log @name
return this.audio=this.$el.children[1],// console.log @audio
// @audioOther = @$el.children[2]
this.audio.addEventListener("pause",this.pause.bind(this)),this.audio.addEventListener("play",this.play.bind(this)),this.audio.addEventListener("ended",this.ended.bind(this))}}),// @audio.play()
// console.log @audio,@audioOther,@playing
loadWechatConfig=function e(){var t,i,n;n=encodeURIComponent(window.location.href.split("#")[0]),(t=document.createElement("script")).src="//api.giccoo.com/api/config?url="+n,(i=document.getElementsByTagName("script")[0]).parentNode.insertBefore(t,i)},IsPC=function e(){var t,i,n,s;for(n=navigator.userAgent,t=new Array("Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"),i=!0,s=0;s<t.length;){if(0<n.indexOf(t[s])){i=!1;break}s++}return i},loadWechatConfig=function e(){var t,i,n;n=encodeURIComponent(window.location.href.split("#")[0]),(t=document.createElement("script")).src="//api.giccoo.com/api/config?url="+n,(i=document.getElementsByTagName("script")[0]).parentNode.insertBefore(t,i)},Container=PIXI.Container,ParticleContainer=PIXI.ParticleContainer,autoDetectRenderer=PIXI.autoDetectRenderer,loader=PIXI.loader,resources=PIXI.loader.resources,TextureCache=PIXI.utils.TextureCache,Texture=PIXI.Texture,Sprite=PIXI.Sprite,Graphics=PIXI.Graphics,resource=PIXI.loader.resources,Text=PIXI.Text,AnimatedSprite=PIXI.extras.AnimatedSprite,Spr=function e(t){return new Sprite(getTe(t))},getTe=function e(t){return resource[t].texture},getId=function e(t,i){return loader.resources[i].textures[t]},// for fix ios 8 less
null==Number.isInteger&&(Number.isInteger=function(e){return 0<=e}),Vue.component("player",{template:'<div class="player" :class="{play: playing, pause: !playing}" @click="change"> <div class="icon-play" :class="{play: playing, pause: !playing}"> <svg v-if="!icon" v-show="!playing" height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ytp-id-39"></use><path class="ytp-svg-fill" d="M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z"></path></svg> <svg v-if="!icon" v-show="playing" height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ytp-id-40"></use><path class="ytp-svg-fill" d="M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z"></path></svg> </div> <audio :src="src" :autoplay="autoplay" :preload="preload" :loop="loop"></audio> <img v-if="thumb" :src="thumb" /> </div>',data:function e(){return{playing:!1,stoped:!1}},props:{name:{default:!1},src:{default:"./mp3/bgm.mp3"},thumb:{default:!1},autoplay:{default:!1},preload:{default:!1},loop:{default:!1},callback:{default:!1},icon:{default:!1}},methods:{play:function e(){var t;return t=this.$emit("play",this),this.playing=!0,this.audio.play()},pause:function e(){var t;return t=this.$emit("pause",this),this.audio.pause(),this.playing=!1},ended:function e(){return this.playing=!1},change:function e(){return this.playing?(this.audio.pause(),this.stoped=!0):(this.audio.play(),this.stoped=!1,"undefined"!=typeof _hmt&&null!==_hmt&&_hmt.push(["_trackEvent","adidas-originals-eqt",this.name,"play","-"]))}},
// computed:
mounted:function e(t){
// console.log @name
return this.audio=this.$el.children[1],// console.log @audio
// @audioOther = @$el.children[2]
this.audio.addEventListener("pause",this.pause.bind(this)),this.audio.addEventListener("play",this.play.bind(this)),this.audio.addEventListener("ended",this.ended.bind(this))}}),// @audio.play()
// console.log @audio,@audioOther,@playing
Container=PIXI.Container,ParticleContainer=PIXI.ParticleContainer,autoDetectRenderer=PIXI.autoDetectRenderer,loader=PIXI.loader,resources=PIXI.loader.resources,TextureCache=PIXI.utils.TextureCache,Texture=PIXI.Texture,Sprite=PIXI.Sprite,Graphics=PIXI.Graphics,resource=PIXI.loader.resources,Text=PIXI.Text,AnimatedSprite=PIXI.extras.AnimatedSprite,Spr=function e(t){return new Sprite(getTe(t))},getTe=function e(t){return resource[t].texture},getId=function e(t,i){return loader.resources[i].textures[t]},// for fix ios 8 less
null==Number.isInteger&&(Number.isInteger=function(e){return 0<=e}),Container=PIXI.Container,ParticleContainer=PIXI.ParticleContainer,autoDetectRenderer=PIXI.autoDetectRenderer,loader=PIXI.loader,resources=PIXI.loader.resources,TextureCache=PIXI.utils.TextureCache,Texture=PIXI.Texture,Sprite=PIXI.Sprite,Graphics=PIXI.Graphics,resource=PIXI.loader.resources,Text=PIXI.Text,AnimatedSprite=PIXI.extras.AnimatedSprite,Spr=function e(t){return new Sprite(getTe(t))},getTe=function e(t){return resource[t].texture},getId=function e(t,i){return loader.resources[i].textures[t]},// for fix ios 8 less
null==Number.isInteger&&(Number.isInteger=function(e){return 0<=e}),// @codekit-prepend "coffee/css3Prefix"
// @codekit-prepend "../../libs/coffee/loadWechatConfig"
// @codekit-prepend "../../libs/coffee/IsPC"
// @codekit-prepend "../../libs/vue/vue-player"
// @codekit-prepend "../../libs/vue/vue-slider"
// @codekit-prepend "../../libs/coffee/pixi-base"
// @codekit-prepend "../../libs/coffee/String"
// @codekit-prepend "./UGC"
axios.defaults.withCredentials=!0,TrueW=640,TrueH=1138,imageurl="//api.giccoo.com/api/upload/image64/",apiUrl="//api.giccoo.com/canda",// apiLink = "//localhost:3000/"
apiLink="//g.giccoo.com/",// apiLink = "http://192.168.3.53:3000/"
// apiUrl = "http://localhost:8881/Levi"
main={},sys="",sended=[!(loading={}),!(_public={})],_runTime=_startCache=_cache=ugcCache=musicIconCache=musicLineCache=ugc=null,_testTime=_second=0,neteaseShareImage=function e(){var t,i,n;return n="点播圣诞星声",t="https://image.giccoo.com/upload/".concat(main.folder,"/")+main.shareImageLink+"@!large",i="https://activity.music.163.com/canda/",// console.log picUrl,"orpheus://sharepic?picUrl="+encodeURIComponent(picUrl)+"&shareUrl="+encodeURIComponent(redirectUrl)+"&wbDesc="+encodeURIComponent(title1)+"&qqDesc="+encodeURIComponent(title1)
// window.location.href = "orpheus://sharepic?picUrl="+encodeURIComponent(picUrl)+"&shareUrl="+encodeURIComponent(redirectUrl)+"&wbDesc="+encodeURIComponent(title1)+"&qqDesc="+encodeURIComponent(title1)
console.log("share href:",t),CloudMusic.sharePic({picUrl:t,text:n,link:i})},window.onload=function(){var e;return TrueH=document.documentElement.clientHeight,TrueW=document.documentElement.clientWidth,e=0,-1<window.navigator.userAgent.indexOf("NeteaseMusic")&&(sys="NeteaseMusic"),_public=new Vue({el:"#public",data:{note:!0,playing:!1}}),// mounted: ->
// 	document.addEventListener "WeixinJSBridgeReady", ->
// 		_public.$children[0].change()
loading=new Vue({el:"#loading",data:{progress:0,mounted:!1,progressOn:0},methods:{next:function e(){return document.getElementById("load").className+=" fadeOut animated",_public.note=!1,main.mounted=!0,setTimeout(function(){return document.getElementById("load").style.display="none"},520)}},mounted:function e(){var t=this,i;// @.next() # for test
return this.mounted=!0,TrueH=document.documentElement.clientHeight,TrueW=document.documentElement.clientWidth,i=setInterval(function(){if(t.progress+=3,t.progress>=t.progressOn&&(t.progress=t.progressOn),100<=t.progress)return t.progress=100,clearInterval(i),_cache=setTimeout(function(){return t.next()},1e3)},50)}}),init(),CloudMusic.setShareData({name:"canda",title:"点播圣诞星声",subTitle:"点播圣诞星声",text:"",picUrl:"http://m.giccoo.com/canda/img/ico.jpg",link:"http://m.giccoo.com/canda/"})},init=function e(){var t,n,s;return 640<=TrueW&&(
// console.log new Date().getTime() - startTime
// document.body.style.height = TrueH+"px"
// document.documentElement.className += " iphone4" if TrueW/TrueH >= 0.64
TrueW=640),1138<=TrueH&&(TrueH=1138),s=2*TrueH<1200,n=Math.ceil(TrueW/640*94/TrueH*100),TrueH=document.documentElement.clientHeight,TrueW=document.documentElement.clientWidth,console.log(TrueW,TrueH),main=new Vue({el:"#main",data:(t={w:TrueW,h:TrueH,biger:TrueW/TrueH<.55,smaller:s,afterH:s?1.15*TrueH-TrueW/750*1029:TrueH-TrueW/750*1029,wy:!1,mounted:!0,loading:!1,noteText:"",noteTime:null,noteShow:!1,pageInfoShow:!1,pageIndex:1,step:1,singerIndex:1,startgame:!1,folder:"",BGColor:"#ffffff",XY:"pageY",ugc:null,ugcsave:null,ugcold:null,pushed:!1,shareImageLink:null,cache:null,audioId:null,v:null,recordStarting:!1,authorization:!1,norecord:!0,uploaded:!1,imageUpdate:!1,allowPopShow:!1,count:0,videoIndex:0,videoIndexOld:0,lr:!0,
// form:
// 	username: {id:"username", type: "input", label: "姓名", placeholder: "请填写姓名",value: ""}
// 	mobile: {id:"mobile", type: "number", label: "电话", placeholder: "请填写电话",value: ""}
// 	province: {id:"province", type: "select", label: "省份", link: "city", value: Object.keys(_citys)[0], options: _citys }
// 	city: {id:"city", type: "select", label: "城市", link: "dealer",value: Object.keys(_citys["请选择省份"])[0], options: _citys["请选择省份"] }
mask:1,text:"",nickname:"",mobile:"",musicLink:"",logId:"",openBtnShow:!0,default:{x:0},videoPop:!1,canUpload:!0,handCover:!1,last_update:0,lastX:0,lastY:0,lastZ:0,speed:4e3,maxSpeed:0,swing:!1,registerShow:!1,lotteryShow:!1,lotteryEndShow:!1,lotteryInfo:{id:null,random:null},regSubmited:!1,giveUp:!1,gameEnd:!1,noreg:!1,ugcShow:!1,regH:100,ugcType:1,questionShow:!1,questionIndex:0,answer1:1,answer2:0,answer3:{c1:!1,c2:!1,c3:!1,c4:!1}},_defineProperty(t,"nickname",""),_defineProperty(t,"message",""),_defineProperty(t,"messageIndex",1),_defineProperty(t,"messageInput",!1),_defineProperty(t,"musicName",""),_defineProperty(t,"white",!1),_defineProperty(t,"gameEnd",!1),_defineProperty(t,"formShow",!1),_defineProperty(t,"formBoxShow",!1),_defineProperty(t,"shopShow",!1),_defineProperty(t,"musicShow",!1),_defineProperty(t,"shareShow",!1),_defineProperty(t,"items",[]),_defineProperty(t,"carIndex",1),t),computed:{listTemp:function e(){var t,n,s,r,o,a;for(r=this.items,t=[],a=4,i=s=n=0,o=r.length;0<=o?s<o:o<s;i=0<=o?++s:--s)n=parseInt(i/4),t.length<=n&&t.push([]),t[n].push(r[i]);return console.log("arrTemp:",t),t}},watch:{
// carIndex: (n,o)->
// 	@.carIndex = 1 if @.carIndex >= 3
answer1:function e(t,i){return console.log("answer1 changed:",t),"undefined"!=typeof q1&&null!==q1&&q1(t),this.white=3!==t},answer2:function e(t,i){if(console.log("answer2 changed:",t),"undefined"!=typeof q2&&null!==q2)return q2(t)},"answer3.c1":function e(t,i){return this.answer3Change(t,i)},"answer3.c2":function e(t,i){return this.answer3Change(t,i)},"answer3.c3":function e(t,i){return this.answer3Change(t,i)},"answer3.c4":function e(t,i){return this.answer3Change(t,i)},nickname:function e(t,n){var s,r,o,a;if(this.nickname=this.nickname.replace(/[\r\n]/g,""),10<this.nickname.length){for(a="",s=0,r=(o=this.nickname.split("")).length;s<r&&!(10<=(a+=i=o[s]).length);s++);return this.nickname=a,!1;//alert "字数限制10个中文字符20个英文字符" 
}},message:function e(t,i){var n,s,r,o;for(4<(o=t.split("\n")).length&&(this.message=this.message.replace(/^\s+|\s+$/g,"")),n=0,s=o.length;n<s;n++)if(32<(r=o[n]).gblen())return this.message=i}},methods:{moveLeft:function e(){var t;return(t=this.$children[0]).prev()},moveRight:function e(){var t;return(t=this.$children[0]).next()},send:function e(t){var i=this;return this.noteShow=!0,this.noteText=t,clearTimeout(this.noteTime),this.noteTime=setTimeout(function(){return i.noteShow=!1},2e3)},regame:function e(){return window.location.reload()},gobuy:function e(){return window.location.href="http://www.baidu.com"},dateText:function e(t){var i;return console.log(t.replace(/-/g,"/")),(i=new Date(t.replace(/-/g,"/"))).getFullYear()+"年"+(i.getMonth()+1)+"月"+i.getDate()+"日"},gotoUGC:function e(t){var i=this;
// @.lotteryShow = true
return this.musicShow=!1,"undefined"!=typeof goEnd&&null!==goEnd&&goEnd(t),setTimeout(function(){return i.shareShow=!0},500)},sharePost:function e(t){// @.ugc = ugc.app.view.toDataURL()
return this.gameEnd=!0,ugc.app.renderer.render(ugc.app.stage),this.ugc=t},restart:function e(){return window.location.reload()},goshare:function e(){
// goShare()
return this.share()},share:function e(){var t,i,n;return"undefined"!=typeof goFinal2&&null!==goFinal2&&goFinal2(),this.formBoxShow=!1,this.registerShow=!1,this.lotteryShow=!1,console.log("run share"),// ugc.qrcode.visible = true
ugc.app.renderer.render(ugc.app.stage),this.ugc=ugc.app.view.toDataURL(),n=this.ugc,this.wy?(t={image:n,folder:i="canda"},this.folder=i,null==n?this.faild():!this.pushed&&axios.post(imageurl,t).then(function(e){return 200===e.data.recode?main.success(e.data):main.faild(e)}).catch(function(e){
// alert e
return main.faild(e)})):(this.ugcShow=!0,this.lotteryBox())},
// ugc.back()
// ugc.qrcode.visible = false
lotteryBox:function e(){var t=this;if(_cache=setTimeout(function(){return t.lotteryShow=!0,t.ugcShow=!1},5e3),"undefined"!=typeof shareDone&&null!==shareDone)return shareDone()},success:function e(t){// 抽奖
// unless @.giveUp
return this.shareImageLink=t.info,this.pushed=!1,this.loading=!1,// ugc.back()
neteaseShareImage(),"undefined"!=typeof shareDone&&null!==shareDone&&shareDone(),this.lotteryBox()},closeUGC:function e(){if(clearTimeout(_cache),this.lotteryShow=!0,this.ugcShow=!1,"undefined"!=typeof shareDone&&null!==shareDone)return shareDone()},faild:function e(t){return this.pushed=!1,this.loading=!1},openMusic:function e(t){
// goList()
// _public.$children[0].pause()
return CloudMusic.isInApp()?CloudMusic.playlist(t):window.location.href="https://music.163.com/#/playlist?id=".concat(t)},openInApp:function e(){return CloudMusic.open("https://m.giccoo.com/canda/")},goNext:function e(){return this.pageIndex=1,this.formBoxShow=!1,this.cache(),this.cache=null},goShow:function e(t){return this.pageIndex=1,this.formBoxShow=!0,this.cache=t},goNickname:function e(){return clearInterval(_startCache),this.pageIndex=3,this.carIndex=1+parseInt(2*Math.random())},goSubmit:function e(){var t=this,i;return i={username:this.nickname,mobile:this.mobile},axios.post("".concat(apiLink,"active/autoSave/insert/database/draw/"),i).then(function(e){return 200===e.data.code?t.share():t.send(e.data.reason)}).catch(function(e){return console.log("err:",e),t.send("请求错误,请重试")})},goWeb:function e(){return window.location.href="http://www.baidu.com/"},focusEvt:function e(t){
// document.getElementById("mobile").scrollIntoViewIfNeeded()
return console.log("height:",document.body.scrollHeight,t)},
// _startCache = setInterval =>
// 	document.body.scrollTop = document.body.scrollHeight
// ,100
blurEvt:function e(t){return clearInterval(_startCache)},shop:function e(t){var i;// console.log @.$children[0].x
return this.carIndex=t,this.shopShow=!0,this.$children[0].x=0,i=[[{type:"clothes",name:"女式撞色工装棉服"},{type:"clothes",name:"男式印花羽绒服"},{type:"clothes",name:"女式撞色羽绒服"},{type:"clothes",name:"男式印花毛衣"},{type:"clothes",name:"女式两穿羽绒服"},{type:"clothes",name:"男式连帽派克大衣"},{type:"clothes",name:"男式印花羽绒服"},{type:"clothes",name:"女式冲锋夹棉外套"},{type:"clothes",name:"女式印花针织衫"},{type:"clothes",name:"男童羽绒服"},{type:"clothes",name:"女婴舒适厚棉"},{type:"clothes",name:"女童连帽斗篷"}],[{type:"pants",name:"男式格子休闲裤"},{type:"pants",name:"女式条纹针织裙"},{type:"pants",name:"男式苏格兰方格裙"},{type:"pants",name:"女式卷边牛仔裤+腰包"},{type:"pants",name:"女式家常碎花秋裤"},{type:"pants",name:"男式拼接牛仔"}],[{type:"hats",name:"女式仿皮草围巾"},{type:"hats",name:"男式保暖毛线帽"},{type:"hats",name:"男式大披肩"},{type:"hats",name:"女式加绒雪地靴"},{type:"hats",name:"开光佛珠手串"},{type:"hats",name:"冬季PM2.5防霾口罩"}],[{type:"others",name:"橘猫"},{type:"others",name:"热咖啡"},{type:"others",name:"暖宝宝"},{type:"others",name:"火锅"},{type:"others",name:"电热毯"},{type:"others",name:"保温杯"}]],this.items=i[t-1]},musicList:function e(){return this.musicShow=!0},showlotteryCode:function e(){return this.lotteryShow=!1,this.lotteryEndShow=!0},pickItem:function e(t){if(console.log("pick:",t),this.shopShow=!1,"undefined"!=typeof go2&&null!==go2)return go2(this.carIndex,t)},selectItem:function e(t,i){var n,s,r,o;// return false if item.on
for(console.log("item:",t),s=0,r=(o=this.items).length;s<r;s++)n=o[s],t.name===n.name?n.on=!0:n.on=!1;return this.$forceUpdate(),setItem(this.carIndex,i)}},
// item.on = true
// watch:
mounted:function e(){var t,i,n;// _startCache = setInterval =>
// 	@.carIndex++
// ,2500
return TrueH=document.documentElement.clientHeight,TrueW=document.documentElement.clientWidth,"NeteaseMusic"===sys&&(this.wy=!0),t=2*TrueH*(2-2*TrueW/750+.01),// game = new Game({el: "game",h: h})
this.wy=CloudMusic.isInApp(),n=CloudMusic.getClientVersion().split("."),// @.getUserInfo (callback)=>
// console.log imageList,@.muiscType @.userInfo.styleTop
// @.ugcType = @.muiscType @.userInfo.styleTop
i=[],window.imageList=window.imageList.concat(i),ugc=new UGC({el:"ugc",w:640,h:640/TrueW*TrueH,callback:function e(){return console.log("callback")}})}})};// setTimeout =>
// 	@.shop 1
// ,2000
//# sourceMappingURL=main.js.map