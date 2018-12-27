"use strict";function _defineProperty(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,i){return t&&_defineProperties(e.prototype,t),i&&_defineProperties(e,i),e}var ANIMATION_END_NAME,ANIMATION_END_NAMES,AnimatedSprite,Container,Graphics,IsPC,ParticleContainer,Spr,Sprite,TRANSITION_END_NAME,TRANSITION_END_NAMES,Text,Texture,TextureCache,TrueH,TrueW,UGC,VENDORS,_cache,_public,_runTime,_second,_startCache,_testTime,apiLink,apiUrl,autoDetectRenderer,css3Prefix,getId,getTe,i,imageurl,_init,isAndroid,j,len1,loadWechatConfig,loader,loading,mTestElement,main,musicIconCache,musicLineCache,neteaseShareImage,random,resource,resources,sended,sys,ugc,ugcCache;for(VENDORS=["Moz","webkit","ms","O"],TRANSITION_END_NAMES={Moz:"transitionend",webkit:"webkitTransitionEnd",ms:"MSTransitionEnd",O:"oTransitionEnd"},ANIMATION_END_NAMES={Moz:"animationend",webkit:"webkitAnimationEnd",ms:"MSAnimationEnd",O:"oAnimationEnd"},mTestElement=document.createElement("div"),j=0,len1=VENDORS.length;j<len1&&!((css3Prefix=i=VENDORS[j])+"Transition"in mTestElement.style);j++)css3Prefix=!1;css3Prefix&&(TRANSITION_END_NAME=TRANSITION_END_NAMES[css3Prefix],ANIMATION_END_NAME=ANIMATION_END_NAMES[css3Prefix]),loadWechatConfig=function e(){var t,i,n;n=encodeURIComponent(window.location.href.split("#")[0]),(t=document.createElement("script")).src="//api.giccoo.com/api/config?url="+n,(i=document.getElementsByTagName("script")[0]).parentNode.insertBefore(t,i)},IsPC=function e(){var t,i,n,s;for(n=navigator.userAgent,t=new Array("Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"),i=!0,s=0;s<t.length;){if(0<n.indexOf(t[s])){i=!1;break}s++}return i},isAndroid=-1<navigator.userAgent.indexOf("Android")||-1<navigator.userAgent.indexOf("Adr"),//android终端
Vue.directive("resetInput",{inserted:function e(t){isAndroid||t.addEventListener("blur",function(){var e;(e=document.getElementById("reset-input"))||((e=document.createElement("INPUT")).type="text",e.style.height="0px",e.style.width="0px",e.style.position="absolute",e.id="reset-input",document.body.prepend(e)),e.focus(),e.blur()})}}),Vue.component("player",{template:'<div class="player" :class="{play: playing, pause: !playing}" @click="change"> <div class="icon-play" :class="{play: playing, pause: !playing}"> <svg v-if="!icon" v-show="!playing" height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ytp-id-39"></use><path class="ytp-svg-fill" d="M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z"></path></svg> <svg v-if="!icon" v-show="playing" height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ytp-id-40"></use><path class="ytp-svg-fill" d="M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z"></path></svg> </div> <audio :src="src" :autoplay="autoplay" :preload="preload" :loop="loop"></audio> <img v-if="thumb" :src="thumb" /> <slot></slot> </div>',data:function e(){return{playing:!1,stoped:!1}},props:{name:{default:!1},src:{default:"./mp3/bgm.mp3"},thumb:{default:!1},autoplay:{default:!1},preload:{default:!1},loop:{default:!1},callback:{default:!1},icon:{default:!1}},methods:{play:function e(){var t;// @audio.load()
return t=this.$emit("play",this),this.playing=!0,this.audio.play()},pause:function e(){var t;return t=this.$emit("pause",this),this.audio.pause(),this.playing=!1},ended:function e(){return this.playing=!1},change:function e(){return this.playing?(this.audio.pause(),this.stoped=!0):(this.audio.play(),this.stoped=!1)}},
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
function(){function t(e){_classCallCheck(this,t),this.opts={el:"main",w:640,h:1314,trueH:1314,count:6,speed:1,alpha:.8,defaultShow:!0,class:"",fillColor:6737151,callback:function e(){}},this.opts=Object.assign(this.opts,e),this.default.h=document.documentElement.clientHeight,this.default.w=document.documentElement.clientWidth,this.default.ratio=this.opts.w/this.default.w,this.app=new PIXI.Application({width:this.opts.w,height:this.opts.h,transparent:!0,preserveDrawingBuffer:!0,forceCanvas:!0}),null!=this.opts.class&&""!==this.opts.class&&(this.app.view.className=this.opts.class),this.stage=this.app.stage,document.getElementById(this.opts.el).appendChild(this.app.view),console.log("imageList:",imageList.length),PIXI.loader.add(imageList).use(this.loaditem.bind(this)).load(this.build.bind(this)),this.default.MH=.65*this.opts.h}return _createClass(t,[{key:"loaditem",value:function e(){if(this.loadNumber++,loading.progressOn=parseInt(this.loadNumber/imageList.length*100),console.log("load:",this.loadNumber,loading.progressOn,this.loadNumber===imageList.length),this.loadNumber===imageList.length)return buildUGC.bind(this).call(),this.opts.callback()}// @.init()
// console.log "aa"
// @.stage.addChild Spr(_CDN+"img/texture.jpg")
},{key:"build",value:function e(){return console.log("builded"),buildUGC.bind(this).call(),this.opts.callback()}// @.init()
},{key:"init",value:function e(){var t,i,n,s,r,o,a,u,l,h,d,c,p,m,g,f;return(t=new Spr(_CDN+"img/bg2.jpg")).width=this.opts.w,t.height=this.opts.h,(u=new Spr(_CDN+"img/huati.png")).y=this.opts.h-u.height,(l=new Spr(_CDN+"img/logo.png")).y=this.opts.h-l.height-.015*this.opts.h,o=new Container,a=new Spr(_CDN+"img/filecover.png"),(f=new Spr(_CDN+"img/ugc-title.png")).y=40,r=new Spr(_CDN+"img/ugc-content-".concat(main.carIndex+1,".png")),p=new Spr(_CDN+"img/ugc-content-over-".concat(main.carIndex+1,".png")),(c=new Text("".concat(main.nickname," "),{fontFamily:"Arial",fontSize:32,fontWeight:"normal",fill:7160354,letterSpacing:2,lineHeight:40})).x=122+(296-c.width)/2,c.y=f.y+(f.height-c.height)/2+6,r.y=f.y+f.height,p.y=r.y,p.visible=!1,g=(g=main.message).replace(/<br\/>/g,"\n"),// message.width = 500
(d=new Text("".concat(g," "),{fontFamily:"Arial",breakWords:!0,wordWrapWidth:505,wordWrap:!0,fontSize:20,fill:7160354,fontStyle:"normal",fontWeight:"normal",letterSpacing:0,lineHeight:28})).x=125,d.y=r.y+r.height-40,s=new Spr(_CDN+"img/share-title.png"),n=new Spr(_CDN+"img/btn-reload.png"),i=new Spr(_CDN+"img/btn-more.png"),console.log(d.height),s.y=d.y+140+20,n.y=s.y+s.height+10,n.x=120,i.y=s.y+s.height+10,i.x=n.x+n.width+20,s.interactive=!0,n.interactive=!0,i.interactive=!0,s.tap=this.share.bind(this),n.tap=function(){return window.location.reload()},i.tap=function(){return window.location.href="https://mactivity.lenovo.com.cn/activity/marketing/xyxs/wyy/index.html?pmf_source=P0000000982M0066"},(m=new Spr(_CDN+"img/qr.png")).y=s.y-s.height+63,m.visible=!1,h=new Spr(_CDN+"img/mark-".concat(main.yearName,".png")),"80"===main.yearName?h.y=this.opts.h-h.height:h.y=(this.opts.h-h.height)/2,o.addChild(a,f,p,r,c,d,s,n,i,m),// file.scale.set(0.8,0.8)
o.y=(this.opts.h-o.height)/2,o.y+o.height>u.y-.5*u.height?o.y-=.23*u.height:o.y-=.05*this.opts.h,console.log("Y:",o.y,o.y+o.height,u.y+.5*u.height),o.y<=10&&(o.y=10),this.stage.addChild(t,u,l,o,h),this.btnShare=s,this.btnReload=n,this.btnMore=i,this.contentimg=r,this.overimg=p,this.huati=u,this.qr=m,this.file=o,this.oldFileY=o.y}},{key:"share",value:function e(){return this.btnShare.visible=!1,this.btnReload.visible=!1,this.btnMore.visible=!1,this.huati.visible=!1,this.contentimg.visible=!1,this.qr.visible=!0,this.overimg.visible=!0,this.file.y=(this.opts.h-this.file.height)/2,main.share()}},{key:"shareDone",value:function e(){return this.btnShare.visible=!0,this.btnReload.visible=!0,this.btnMore.visible=!0,this.huati.visible=!0,this.contentimg.visible=!0,this.qr.visible=!1,this.overimg.visible=!1,this.file.y=this.oldFileY}}]),t}();return e.prototype.builded=!1,e.prototype.default={w:320,h:160,running:!0},e.prototype.started=!1,e.prototype.over=!1,e.prototype.online=!1,e.prototype.blocks=[],e.prototype.bottles=[],e.prototype.enemys=[],e.prototype.lights=[],e.prototype.dom={},e.prototype._progress=0,e.prototype.lineMoving=!1,e.prototype.startTime=null,e.prototype.loadNumber=0,e}.call(void 0),loadWechatConfig=function e(){var t,i,n;n=encodeURIComponent(window.location.href.split("#")[0]),(t=document.createElement("script")).src="//api.giccoo.com/api/config?url="+n,(i=document.getElementsByTagName("script")[0]).parentNode.insertBefore(t,i)},Vue.component("player",{template:'<div class="player" :class="{play: playing, pause: !playing}" @click="change"> <div class="icon-play" :class="{play: playing, pause: !playing}"> <svg v-if="!icon" v-show="!playing" height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ytp-id-39"></use><path class="ytp-svg-fill" d="M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z"></path></svg> <svg v-if="!icon" v-show="playing" height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ytp-id-40"></use><path class="ytp-svg-fill" d="M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z"></path></svg> </div> <audio :src="src" :autoplay="autoplay" :preload="preload" :loop="loop"></audio> <img v-if="thumb" :src="thumb" /> <slot></slot> </div>',data:function e(){return{playing:!1,stoped:!1}},props:{name:{default:!1},src:{default:"./mp3/bgm.mp3"},thumb:{default:!1},autoplay:{default:!1},preload:{default:!1},loop:{default:!1},callback:{default:!1},icon:{default:!1}},methods:{play:function e(){var t;// @audio.load()
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
null==Number.isInteger&&(Number.isInteger=function(e){return 0<=e}),IsPC=function e(){var t,i,n,s;for(n=navigator.userAgent,t=new Array("Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"),i=!0,s=0;s<t.length;){if(0<n.indexOf(t[s])){i=!1;break}s++}return i},loadWechatConfig=function e(){var t,i,n;n=encodeURIComponent(window.location.href.split("#")[0]),(t=document.createElement("script")).src="//api.giccoo.com/api/config?url="+n,(i=document.getElementsByTagName("script")[0]).parentNode.insertBefore(t,i)},Container=PIXI.Container,ParticleContainer=PIXI.ParticleContainer,autoDetectRenderer=PIXI.autoDetectRenderer,loader=PIXI.loader,resources=PIXI.loader.resources,TextureCache=PIXI.utils.TextureCache,Texture=PIXI.Texture,Sprite=PIXI.Sprite,Graphics=PIXI.Graphics,resource=PIXI.loader.resources,Text=PIXI.Text,AnimatedSprite=PIXI.extras.AnimatedSprite,Spr=function e(t){return new Sprite(getTe(t))},getTe=function e(t){return resource[t].texture},getId=function e(t,i){return loader.resources[i].textures[t]},// for fix ios 8 less
null==Number.isInteger&&(Number.isInteger=function(e){return 0<=e}),IsPC=function e(){var t,i,n,s;for(n=navigator.userAgent,t=new Array("Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"),i=!0,s=0;s<t.length;){if(0<n.indexOf(t[s])){i=!1;break}s++}return i},Vue.component("player",{template:'<div class="player" :class="{play: playing, pause: !playing}" @click="change"> <div class="icon-play" :class="{play: playing, pause: !playing}"> <svg v-if="!icon" v-show="!playing" height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ytp-id-39"></use><path class="ytp-svg-fill" d="M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z"></path></svg> <svg v-if="!icon" v-show="playing" height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ytp-id-40"></use><path class="ytp-svg-fill" d="M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z"></path></svg> </div> <audio :src="src" :autoplay="autoplay" :preload="preload" :loop="loop"></audio> <img v-if="thumb" :src="thumb" /> <slot></slot> </div>',data:function e(){return{playing:!1,stoped:!1}},props:{name:{default:!1},src:{default:"./mp3/bgm.mp3"},thumb:{default:!1},autoplay:{default:!1},preload:{default:!1},loop:{default:!1},callback:{default:!1},icon:{default:!1}},methods:{play:function e(){var t;// @audio.load()
return t=this.$emit("play",this),this.playing=!0,this.audio.play()},pause:function e(){var t;return t=this.$emit("pause",this),this.audio.pause(),this.playing=!1},ended:function e(){return this.playing=!1},change:function e(){return this.playing?(this.audio.pause(),this.stoped=!0):(this.audio.play(),this.stoped=!1)}},
// computed:
mounted:function e(t){
// console.log @name
return this.audio=this.$el.children[1],// console.log @audio
// @audioOther = @$el.children[2]
this.audio.addEventListener("pause",this.pause.bind(this)),this.audio.addEventListener("play",this.play.bind(this)),this.audio.addEventListener("ended",this.ended.bind(this))}}),// @audio.play()
// console.log @audio,@audioOther,@playing
IsPC=function e(){var t,i,n,s;for(n=navigator.userAgent,t=new Array("Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"),i=!0,s=0;s<t.length;){if(0<n.indexOf(t[s])){i=!1;break}s++}return i},Container=PIXI.Container,ParticleContainer=PIXI.ParticleContainer,autoDetectRenderer=PIXI.autoDetectRenderer,loader=PIXI.loader,resources=PIXI.loader.resources,TextureCache=PIXI.utils.TextureCache,Texture=PIXI.Texture,Sprite=PIXI.Sprite,Graphics=PIXI.Graphics,resource=PIXI.loader.resources,Text=PIXI.Text,AnimatedSprite=PIXI.extras.AnimatedSprite,Spr=function e(t){return new Sprite(getTe(t))},getTe=function e(t){return resource[t].texture},getId=function e(t,i){return loader.resources[i].textures[t]},// for fix ios 8 less
null==Number.isInteger&&(Number.isInteger=function(e){return 0<=e}),Container=PIXI.Container,ParticleContainer=PIXI.ParticleContainer,autoDetectRenderer=PIXI.autoDetectRenderer,loader=PIXI.loader,resources=PIXI.loader.resources,TextureCache=PIXI.utils.TextureCache,Texture=PIXI.Texture,Sprite=PIXI.Sprite,Graphics=PIXI.Graphics,resource=PIXI.loader.resources,Text=PIXI.Text,AnimatedSprite=PIXI.extras.AnimatedSprite,Spr=function e(t){return new Sprite(getTe(t))},getTe=function e(t){return resource[t].texture},getId=function e(t,i){return loader.resources[i].textures[t]},// for fix ios 8 less
null==Number.isInteger&&(Number.isInteger=function(e){return 0<=e}),// @codekit-prepend "coffee/css3Prefix"
// @codekit-prepend "../../libs/coffee/loadWechatConfig"
// @codekit-prepend "../../libs/coffee/IsPC"
// @codekit-prepend "../../libs/vue/vue-resetinput"
// @codekit-prepend "../../libs/vue/vue-player"
// @codekit-prepend "../../libs/vue/vue-slider"
// @codekit-prepend "../../libs/coffee/pixi-base"
// @codekit-prepend "../../libs/coffee/String"
// @codekit-prepend "./UGC"
axios.defaults.withCredentials=!0,TrueW=640,TrueH=1138,imageurl="//api.giccoo.com/api/upload/image64/",apiUrl="//api.giccoo.com/kiehls",// apiLink = "//localhost:3000/"
apiLink="//g.giccoo.com/",// apiLink = "http://192.168.3.53:3000/"
// apiUrl = "http://localhost:8881/Levi"
main={},sys="",sended=[!(loading={}),!(_public={})],_runTime=_startCache=_cache=ugcCache=musicIconCache=musicLineCache=ugc=null,_testTime=_second=0,neteaseShareImage=function e(){var t,i,n;return n="点播圣诞星声",t="https://image.giccoo.com/upload/".concat(main.folder,"/")+main.shareImageLink+"@!large",i="https://activity.music.163.com/kiehls/",// console.log picUrl,"orpheus://sharepic?picUrl="+encodeURIComponent(picUrl)+"&shareUrl="+encodeURIComponent(redirectUrl)+"&wbDesc="+encodeURIComponent(title1)+"&qqDesc="+encodeURIComponent(title1)
// window.location.href = "orpheus://sharepic?picUrl="+encodeURIComponent(picUrl)+"&shareUrl="+encodeURIComponent(redirectUrl)+"&wbDesc="+encodeURIComponent(title1)+"&qqDesc="+encodeURIComponent(title1)
console.log("share href:",t),CloudMusic.sharePic({picUrl:t,text:n,link:i})},window.onload=function(){var e,t;return TrueH=document.documentElement.clientHeight,TrueW=document.documentElement.clientWidth,e=0,-1<window.navigator.userAgent.indexOf("NeteaseMusic")&&(sys="NeteaseMusic"),t={name:"kiehls",title:"我的时代金曲",subTitle:"这首歌让我想起了青葱的岁月，还有许久未见的你",text:"",picUrl:"https://activity.music.163.com/kiehls/img/ico.jpg",link:"https://activity.music.163.com/kiehls/"},CloudMusic.setShareData(t),// else
// 	loadWechatConfig()
// 	wx.ready ->
// 		shareContent =
// 			title: "我的时代金曲"
// 			desc: "这首歌让我想起了青葱的岁月，还有许久未见的你"
// 			link: "https://activity.music.163.com/kiehls/"
// 			imgUrl: "https://activity.music.163.com/kiehls/img/ico.jpg"
// 			success: ->
// 				# alert "success"
// 			cancel: ->
// 				# alert "cancel"
// 		wx.onMenuShareTimeline shareContent
// 		wx.onMenuShareAppMessage shareContent
// 		wx.onMenuShareQQ shareContent
// 		wx.onMenuShareWeibo shareContent
_public=new Vue({el:"#public",data:{wy:"NeteaseMusic"===sys,wx:!1,note:!0,playing:!1},methods:{startGame:function e(){return this.note=!1}},mounted:function e(){return document.addEventListener("WeixinJSBridgeReady",function(){return _public.wx=!0,_public.note=!1,_public.$children[0].change()})}}),loading=new Vue({el:"#loading",data:{progress:0,mounted:!1,progressOn:0},methods:{next:function e(){// main.init()
return document.getElementById("load").className+=" fadeOut animated",main.mounted=!0,setTimeout(function(){if(document.getElementById("load").style.display="none",_public.wx)return _public.note=!1;// setTimeout ->
// 	_public.note = false if _public.wy
// ,3000
},520)}},mounted:function e(){var t=this,i;// for test
return this.mounted=!0,TrueH=document.documentElement.clientHeight,TrueW=document.documentElement.clientWidth,this.next(),i=setInterval(function(){if(t.progress+=3,t.progress>=t.progressOn&&(t.progress=t.progressOn),100<=t.progress)// @.next()
return t.progress=100,clearInterval(i),_cache=setTimeout(function(){},1e3)},50)}}),_init()},_init=function e(){var t,n,s;return 640<=TrueW&&(
// console.log new Date().getTime() - startTime
// document.body.style.height = TrueH+"px"
// document.documentElement.className += " iphone4" if TrueW/TrueH >= 0.64
TrueW=640),1138<=TrueH&&(TrueH=1138),s=2*TrueH<1200,n=Math.ceil(TrueW/640*94/TrueH*100),TrueH=document.documentElement.clientHeight,TrueW=document.documentElement.clientWidth,console.log(TrueW,TrueH),main=new Vue({el:"#main",data:(t={w:TrueW,h:TrueH,biger:TrueW/TrueH<.55,smaller:s,afterH:s?1.15*TrueH-TrueW/750*1029:TrueH-TrueW/750*1029,wy:!1,mounted:!0,loading:!1,noteText:"",noteTime:null,noteShow:!1,pageInfoShow:!1,pageIndex:2,step:1,singerIndex:2,logo:!0,startgame:!1,folder:"",BGColor:"#ffffff",XY:"pageY",ugc:null,ugcsave:null,ugcold:null,pushed:!1,shareImageLink:null,cache:null,audioId:null,v:null,pageNote:!1,recordStarting:!1,authorization:!1,norecord:!0,uploaded:!1,imageUpdate:!1,allowPopShow:!1,count:0,videoIndex:0,videoIndexOld:0,lr:!0,
// form:
// 	username: {id:"username", type: "input", label: "姓名", placeholder: "请填写姓名",value: ""}
// 	mobile: {id:"mobile", type: "number", label: "电话", placeholder: "请填写电话",value: ""}
// 	province: {id:"province", type: "select", label: "省份", link: "city", value: Object.keys(_citys)[0], options: _citys }
// 	city: {id:"city", type: "select", label: "城市", link: "dealer",value: Object.keys(_citys["请选择省份"])[0], options: _citys["请选择省份"] }
mask:1,text:"",nickname:"",mobile:"",sex:0,musicLink:"",logId:"",openBtnShow:!0,default:{x:0},videoPop:!1,canUpload:!0,handCover:!1,last_update:0,lastX:0,lastY:0,lastZ:0,speed:4e3,maxSpeed:0,swing:!1,rankingShow:!1,registerShow:!1,lotteryShow:!1,lotteryEndShow:!1,lotteryInfo:{id:null,random:null},regSubmited:!1,giveUp:!1,gameEnd:!1,noreg:!1,ugcShow:!1,regH:100,ugcType:1,questionShow:!1,questionIndex:0,answer1:1,answer2:0,answer3:{c1:!1,c2:!1,c3:!1,c4:!1}},_defineProperty(t,"nickname",""),_defineProperty(t,"message",""),_defineProperty(t,"messageIndex",1),_defineProperty(t,"messageInput",!1),_defineProperty(t,"musicName",""),_defineProperty(t,"white",!1),_defineProperty(t,"gameEnd",!1),_defineProperty(t,"formShow",!1),_defineProperty(t,"formBoxShow",!1),_defineProperty(t,"carIndex",1),_defineProperty(t,"yearName","none"),t),watch:{nickname:function e(t,n){var s,r,o,a,u;if(this.nickname=this.nickname.replace(/[\r\n]/g,""),// console.log "n,o:",n,o
r=new Text("".concat(t," "),{fontFamily:"Arial",fontSize:32,fontWeight:"normal",fill:7160354,letterSpacing:2,lineHeight:40}),console.log("width:",r.width),296<r.width){for(
// @.nickname = o
a=this.nickname.split(""),u="",i=s=0,o=a.length-1;0<=o?s<o:o<s;i=0<=o?++s:--s)u+=a[i];return this.nickname=u,console.log(u),!1}},message:function e(t,n){var s,r,o,a;if(this.message=this.message.replace(/[\r\n]/g,""),100<this.message.length){for(
//gblen() > 64
a="",s=0,r=(o=this.message.split("")).length;s<r&&!(100<=(a+=i=o[s]).length);s++);return this.message=a,!1}}},methods:{openYear:function e(t){return this.yearName=t,this.pageIndex=3,this.logo=!1,setTimeout(function(){return document.getElementById("manhua").scrollTop=0},20)},prev:function e(){return this.$children[0].prev()},next:function e(){return this.$children[0].next()},number:function e(t){},
// @.carIndex = n
select:function e(){return console.log(Math.abs(this.$children[0].slideNumber)),this.carIndex=Math.abs(this.$children[0].slideNumber),this.step=3},send:function e(t){var i=this;return this.noteShow=!0,this.noteText=t,clearTimeout(this.noteTime),this.noteTime=setTimeout(function(){return i.noteShow=!1},2e3)},over:function e(){var t=this;return this.questionShow=!1,ugc.init(),setTimeout(function(){return t.gameEnd=!0},2e3)},regame:function e(){return window.location.reload()},gobuy:function e(){return window.location.href="http://www.baidu.com"},dateText:function e(t){var i;return console.log(t.replace(/-/g,"/")),(i=new Date(t.replace(/-/g,"/"))).getFullYear()+"年"+(i.getMonth()+1)+"月"+i.getDate()+"日"},goUGC:function e(){return this.lotteryShow=!0},sharePost:function e(t){// @.ugc = ugc.app.view.toDataURL()
return this.gameEnd=!0,ugc.app.renderer.render(ugc.app.stage),this.ugc=t},restart:function e(){return window.location.reload()},goshare:function e(){
// goShare()
return this.share()},share:function e(){var t,i,n;// goFinal2()
return this.formBoxShow=!1,this.registerShow=!1,this.lotteryShow=!1,console.log("run share"),// ugc.qrcode.visible = true
ugc.app.renderer.render(ugc.app.stage),this.ugc=ugc.app.view.toDataURL("image/jpeg",.6),n=this.ugc,this.wy?(t={image:n,folder:i="kiehls"},this.folder=i,null==n?this.faild():!this.pushed&&axios.post(imageurl,t).then(function(e){return 200===e.data.recode?main.success(e.data):main.faild(e)}).catch(function(e){
// alert e
return main.faild(e)})):this.ugcShow=!0},
// ugc.back()
// ugc.qrcode.visible = false
success:function e(t){return this.shareImageLink=t.info,this.pushed=!1,this.loading=!1,// ugc.back()
neteaseShareImage(),ugc.shareDone()},
// 抽奖
// unless @.giveUp
// 	setTimeout =>
// 		@.getLottery()
// 	,5000
closeUGC:function e(){return this.ugcShow=!1,ugc.shareDone()},faild:function e(t){return this.pushed=!1,this.loading=!1},openSong:function e(t){
// id = [38576323,167740,139381,474567580,355992,28815250,109968,110083,163639,28785688,5271858,28838557,169794,27591641,5271855]
// CloudMusic.song(id[resultNum])
return window.location.href="https://music.163.com/#/song?id=".concat(t)},openMusic:function e(t){
// goList()
// _public.$children[0].pause()
return CloudMusic.isInApp()?CloudMusic.playlist(t):window.location.href="https://music.163.com/#/playlist?id=".concat(t)},openInApp:function e(){return CloudMusic.open("https://m.giccoo.com/kiehls/")},goSubmit:function e(){var t=this,i;return i={username:this.nickname,message:this.message,year:this.yearName,yearImage:this.singerIndex,mobile:"18888888888"},axios.post("".concat(apiLink,"active/autoSave/insert/database/kiehls/"),i).then(function(e){return console.log("msg:",e)}).catch(function(e){return console.log("err:",e),t.send("请求错误,请重试")})},goWeb:function e(){return window.location.href="http://www.baidu.com/"},goNote:function e(){return this.singerIndex=resultA[1]+1,2===this.singerIndex?this.singerIndex=3:3===this.singerIndex&&(this.singerIndex=2),this.pageNote=!0},init:function e(){},
// getStart()
closeNote:function e(){return this.pageNote=!1,goEnd()},start:function e(){return this.registerShow=!0},endGame:function e(t,i){return this.rankingShow=!0},startGame:function e(){
// console.log "start game"
// _public.note = false
return""===this.nickname?this.send("请输入姓名"):0===this.sex?this.send("点击选择你的性别"):(this.pageIndex=2,this.registerShow=!1,"undefined"!=typeof gameBegin&&null!==gameBegin?gameBegin(this.sex):void 0)},
// test
// @.rankingShow = true
// @.gameEnd = true
goStep2:function e(){return this.loading=!0,this.logo=!0,this.pageIndex=2},
// setTimeout =>
// 	@.pageIndex = 2
// 	@.step = 2
// ,500
// setTimeout =>
// 	@.loading = false
// ,2500
goBack:function e(){return this.loading=!1,document.getElementById("manhua").scrollTop=0},goMore:function e(){return this.step=2,this.loading=!1,document.getElementById("manhua").scrollTop=0},build:function e(){return""===this.nickname?(this.send("请输入姓名"),!1):""===this.message?(this.send("请输入留言"),!1):(this.pageIndex=4,this.logo=!1,ugc.init(),this.goSubmit())}},
// watch:
mounted:function e(){var t,i,n;return TrueH=document.documentElement.clientHeight,TrueW=document.documentElement.clientWidth,"NeteaseMusic"===sys&&(this.wy=!0),t=2*TrueH*(2-2*TrueW/750+.01),// game = new Game({el: "game",h: h})
this.wy=CloudMusic.isInApp(),n=CloudMusic.getClientVersion().split("."),// @.getUserInfo (callback)=>
// console.log imageList,@.muiscType @.userInfo.styleTop
// @.ugcType = @.muiscType @.userInfo.styleTop
i=[],window.imageList=window.imageList.concat(i),ugc=new UGC({el:"ugc",w:640,h:640/TrueW*TrueH,callback:function e(){return console.log("callback")}}),console.log("h:",t)}})};// window.onresize = ->
// 	console.log "resize:",document.documentElement.clientHeight
// main.$root.$el.addEventListener "touchstart", (evt)->
// 	_public.note = false
//# sourceMappingURL=main.js.map